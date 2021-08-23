---
title: workloads
---

# Nocalhost DevMode 是如何工作的？

Nocalhost 支持开发所有类型的 Kubernetes 工作负载，以下是工作原理

## Deployment

Deployment 进入开发模式时主要有以下步骤：
1. 将 Pod 的副本数缩减为 1
2. 修改 .spec 中 manifest 的定义：
    - 将原 .spec 保存在 annotation 中，用于退出开发时恢复原有工作负载
    - 修改指定容器的镜像为开发镜像，容器的名字改为 nocalhost-dev
    - 增加一个 nocalhost-sidecar 容器(用于文件同步)
    - 创建一个 emptyDir 类型的卷，挂载到 nocalhost-dev 和 nocalhost-sidecar 容器的 workDir 目录下
    - 创建一个 secret 类型的卷，将保存在 Secret 中的 syncthing 证书和配置挂载进 nocalhost-sidecar 容器 
    - 禁用容器的所有探针，SecurityContext
3. 启用一个端口转发，将本地的某个随机端口转发到 nocalhost-sidecar 中 syncthing 监听的端口中去
4. 运行 syncthing 的客户端，监测本地源码目录，将本地目录中的改动同步到远端容器中去

总的来说，第 2 步就是修改 Deployment 的 manifest，以下以 [`bookinfo'](https://github.com/nocalhost/bookinfo) 的 `reviews` 服务作为示例，对比其进入开发前后的 manifest 变化:

```yaml title="进入开发前"
apiVersion: apps/v1
kind: Deployment
metadata:
  annotations:
    deployment.kubernetes.io/revision: "1"
    dev.nocalhost/application-name: bookinfo
    dev.nocalhost/application-namespace: nh6bxsw
  generation: 1
  labels:
    app: reviews
    app.kubernetes.io/managed-by: nocalhost
  name: reviews
spec:
  progressDeadlineSeconds: 600
  replicas: 1
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      app: reviews
  strategy:
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 25%
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: reviews
    spec:
      containers:
        - env:
            - name: LOG_DIR
              value: /tmp/logs
          image: codingcorp-docker.pkg.coding.net/nocalhost/bookinfo/reviews:latest
          imagePullPolicy: Always
          name: reviews
          ports:
            - containerPort: 9080
              protocol: TCP
          readinessProbe:
            failureThreshold: 3
            initialDelaySeconds: 5
            periodSeconds: 10
            successThreshold: 1
            tcpSocket:
              port: 9080
            timeoutSeconds: 1
          resources: {}
          terminationMessagePath: /dev/termination-log
          terminationMessagePolicy: File
          volumeMounts:
            - mountPath: /tmp
              name: tmp
            - mountPath: /opt/ibm/wlp/output
              name: wlp-output
      dnsPolicy: ClusterFirst
      restartPolicy: Always
      schedulerName: default-scheduler
      securityContext: {}
      terminationGracePeriodSeconds: 30
      volumes:
        - emptyDir: {}
          name: wlp-output
        - emptyDir: {}
          name: tmp
```

```yaml {9,41,43,71,101,102} title="进入开发模式后"
apiVersion: apps/v1
kind: Deployment
metadata:
  annotations:
    deployment.kubernetes.io/revision: "2"
    dev.nocalhost/application-name: bookinfo
    dev.nocalhost/application-namespace: nh6bxsw
    # 下面这一串东西用于记录进入开发前工作负载的定义，用于退出开发时将工作负载还原到原来的状态
    nocalhost.origin.spec.json: '{"replicas":1,"selector":{"matchLabels":{"app":"reviews"}},"template":{"metadata":{"creationTimestamp":null,"labels":{"app":"reviews"}},"spec":{"volumes":[{"name":"wlp-output","emptyDir":{}},{"name":"tmp","emptyDir":{}}],"containers":[{"name":"reviews","image":"codingcorp-docker.pkg.coding.net/nocalhost/bookinfo/reviews:latest","ports":[{"containerPort":9080,"protocol":"TCP"}],"env":[{"name":"LOG_DIR","value":"/tmp/logs"}],"resources":{},"volumeMounts":[{"name":"tmp","mountPath":"/tmp"},{"name":"wlp-output","mountPath":"/opt/ibm/wlp/output"}],"readinessProbe":{"tcpSocket":{"port":9080},"initialDelaySeconds":5,"timeoutSeconds":1,"periodSeconds":10,"successThreshold":1,"failureThreshold":3},"terminationMessagePath":"/dev/termination-log","terminationMessagePolicy":"File","imagePullPolicy":"Always"}],"restartPolicy":"Always","terminationGracePeriodSeconds":30,"dnsPolicy":"ClusterFirst","securityContext":{},"schedulerName":"default-scheduler"}},"strategy":{"type":"RollingUpdate","rollingUpdate":{"maxUnavailable":"25%","maxSurge":"25%"}},"revisionHistoryLimit":10,"progressDeadlineSeconds":600}'
  generation: 2
  labels:
    app: reviews
    app.kubernetes.io/managed-by: nocalhost
  name: reviews
  namespace: nh6bxsw
spec:
  progressDeadlineSeconds: 600
  replicas: 1
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      app: reviews
  strategy:
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 25%
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: reviews
    spec:
      containers:
        - command:
            - /bin/sh
            - -c
            - tail -f /dev/null
          env:
            - name: LOG_DIR
              value: /tmp/logs
          image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/java:latest # 镜像被替换成了开发镜像
          imagePullPolicy: Always
          name: nocalhost-dev # 原 reviews 容器，进入开发模式后名字会被统一改成 nocalhost-dev
          ports:
            - containerPort: 9080
              protocol: TCP
          resources: {}
          terminationMessagePath: /dev/termination-log
          terminationMessagePolicy: File
          volumeMounts:
            - mountPath: /tmp
              name: tmp
            - mountPath: /opt/ibm/wlp/output
              name: wlp-output
            - mountPath: /var/syncthing
              name: nocalhost-syncthing
              subPath: syncthing
            - mountPath: /var/syncthing/secret
              name: nocalhost-syncthing-secret
            - mountPath: /home/nocalhost-dev
              name: nocalhost-shared-volume
          workingDir: /home/nocalhost-dev
        - args:
            - unset STGUIADDRESS && cp /var/syncthing/secret/* /var/syncthing/
              && /bin/entrypoint.sh && /bin/syncthing -home /var/syncthing
          command:
            - /bin/sh
            - -c
          image: codingcorp-docker.pkg.coding.net/nocalhost/public/nocalhost-sidecar:syncthing
          imagePullPolicy: Always
          name: nocalhost-sidecar # nocalhost-sidecar 容器，和 nocalhost-dev 共同挂载了 nocalhost-shared-volume 卷，用于文件同步
          resources:
            limits:
              cpu: "1"
              memory: 1Gi
            requests:
              cpu: 100m
              memory: 50Mi
          terminationMessagePath: /dev/termination-log
          terminationMessagePolicy: File
          volumeMounts:
            - mountPath: /var/syncthing
              name: nocalhost-syncthing
              subPath: syncthing
            - mountPath: /var/syncthing/secret
              name: nocalhost-syncthing-secret
            - mountPath: /home/nocalhost-dev
              name: nocalhost-shared-volume
          workingDir: /home/nocalhost-dev
      dnsPolicy: ClusterFirst
      restartPolicy: Always
      schedulerName: default-scheduler
      securityContext: {}
      terminationGracePeriodSeconds: 30
      volumes:
        - emptyDir: {}
          name: wlp-output
        - emptyDir: {}
          name: tmp
        - emptyDir: {}
          name: nocalhost-syncthing # syncthing 使用的卷
        - name: nocalhost-syncthing-secret # 将保存在 Secret 中的 syncthing 证书和配置挂载进 nocalhost-sidecar 容器 
          secret:
            defaultMode: 448
            items:
              - key: config.xml
                mode: 448
                path: config.xml
              - key: cert.pem
                mode: 448
                path: cert.pem
              - key: key.pem
                mode: 448
                path: key.pem
            secretName: reviews-deployment-nocalhost-syncthing-secret
        - emptyDir: {}
          name: nocalhost-shared-volume
```

## StatefulSet

StatefulSet 进入开发模式的逻辑基本和 Deployment 一致：

1. Reduce the Pod replicate to 1
2. 修改 .spec 中 manifest 的定义 （具体内容可以参考 Deployment）
3. 启用一个端口转发，将本地的某个随机端口转发到 nocalhost-sidecar 中 syncthing 监听的端口中去
4. 运行 syncthing 的客户端，监测本地源码目录，将本地目录中的改动同步到远端容器中去 Synchronizes the changes in the local directory to the remote container.

## DaemonSet

DamonSet 进入开发模式的流程：

1. 将 Pod 数量缩减为 0，由于 DaemonSet 的 Pod 是每个 node 上会跑一个，没有办法显式地设置 Pod 的数量，只能将 nodeSelector 设置成一个不存在的 node，间接地让 Pod 数量变 0 You can only set the nodeSelector to a non-existent node and indirectly change the number of Pods to 0.
2. 使用 DaemonSet 的 .spec 生成一个 Deployment， 修改 Deployment 中 .spec manifest 的定义（具体修改内容可以参考 Deployment）
3. 启用一个端口转发，将本地的某个随机端口转发到 nocalhost-sidecar 中 syncthing 监听的端口中去
4. 运行 syncthing 的客户端，监测本地源码目录，将本地目录中的改动同步到远端容器中去 Synchronizes the changes in the local directory to the remote container.

## Job

Job 进入开发模式的流程：

1. 使用 Job 的 .spec 生成一个新的 Job， 修改 Job 中 .spec manifest 的定义（具体修改内容可以参考 Deployment）
3. 启用一个端口转发，将本地的某个随机端口转发到 nocalhost-sidecar 中 syncthing 监听的端口中去
4. 运行 syncthing 的客户端，监测本地源码目录，将本地目录中的改动同步到远端容器中去 Synchronizes the changes in the local directory to the remote container.

## CronJob

CronJob 进入开发模式的流程：

1. 将 CronJob 的 .spec.schedule 设置为 ""1 1 1 1 1"，禁用掉定时任务的调度
2. 使用 CronJob 的 .spec.jobTemplate 生成一个新的 Job， 修改 Job 中 .spec manifest 的定义（具体修改内容可以参考 Deployment）
3. 启用一个端口转发，将本地的某个随机端口转发到 nocalhost-sidecar 中 syncthing 监听的端口中去
4. 运行 syncthing 的客户端，监测本地源码目录，将本地目录中的改动同步到远端容器中去 Synchronizes the changes in the local directory to the remote container.

## Pod

Pod 进入开发模式的流程：

1. 修改 Pod 中 .spec manifest 的定义（具体修改内容可以参考 Deployment）
2. 删除原来的 Pod，使用修改后的 .spec 创建一个新的 Pod
3. 启用一个端口转发，将本地的某个随机端口转发到 nocalhost-sidecar 中 syncthing 监听的端口中去
4. 运行 syncthing 的客户端，监测本地源码目录，将本地目录中的改动同步到远端容器中去 Synchronizes the changes in the local directory to the remote container.
