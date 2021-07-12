# DevMode supports for different workloads

Nocalhost supports to develop different common workloads. The following is the working principle of entering DevMode for different workloads

## Deployment

The main steps when Deployment enters the DevMode:

1. Reduce the Pod replicate to 1
2. Modify manifest definition in ``.spec``：
    - Save the original ``.spec`` in annotation, used to restore the original workload when existing DevMode
    - Modify the image of the specified container as a DevImage, and change the name of the container to nocalhost-dev
    - Add a nocalhost-sidecar container for file synchronization
    - Create a ``emptyDir`` type volume, mount it to the ``workDir`` directory of the ``nocalhost-dev`` and ``nocalhost-sidecar`` containers
    - -Create a secret volume, and mount the syncthing certificate and configuration stored in the Secret into the nocalhost-sidecar container
    - Disable all probes of the container，SecurityContext

In general, the second step is to modify the manifest of the Deployment. The following uses the reviews service of bookinfo as an example to compare the manifest changes before and after the DevMode:

```yaml
# Before enter DevMode
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

```yaml
# Enter DevMode
apiVersion: apps/v1
kind: Deployment
metadata:
  annotations:
    deployment.kubernetes.io/revision: "2"
    dev.nocalhost/application-name: bookinfo
    dev.nocalhost/application-namespace: nh6bxsw

    # The following strings used to record the definition of the workload
    # before entering DevMode, and to restore the workload to its original
    # state when exiting DevMode 
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
          # Image has been replaced by DevImage
          image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/java:latest 
          imagePullPolicy: Always
          # The original reviews container, after entering the Devmode, the name
          # will change to nocalhost-dev
          name: nocalhost-dev 
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
          # nocalhost-sidecar The container, and nocalhost-dev mount the nocalhost-shared-volume volume together for file synchronization
          name: nocalhost-sidecar 
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
          name: nocalhost-syncthing # syncthing volume
        # Mount the syncthing certificate and configuration saved in 
        # the Secret into the nocalhost-sidecar container
        - name: nocalhost-syncthing-secret 
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

3. Enable a port-forward and forward a random local port to the port monitored by syncthing in nocalhost-sidecar
4. The client running syncthing, monitors the local source directory and synchronizes the changes in the local directory to the remote container


## StatefulSet

The logic of StatefulSet entering the DevMode is basically the same as that of Deployment:

1. Reduce the Pod replicate to 1
2. Modify manifest definition in ``.spec`` (Refer to Deployment above for specific modifications)
3. Enable a port-forward and forward a random local port to the port monitored by syncthing in nocalhost-sidecar
4. The client running syncthing, monitors the local source directory and synchronizes the changes in the local directory to the remote container

## DaemonSet

The process of DamonSet entering DevMode:

1. Reduce the Pod replicate to 0, Since DaemonSet’s Pod runs one on each node, there is no way to explicitly set the number of Pods. You can only set the nodeSelector to a non-existent node and indirectly change the number of Pods to 0.
2. Use DaemonSet's ``.spec`` to generate a Deployment, modify the definition of ``.spec`` manifest in the Deployment (Refer to Deployment above for specific modifications).
3. Enable a port-forward and forward a random local port to the port monitored by syncthing in nocalhost-sidecar.
4. The client running syncthing, monitors the local source directory and synchronizes the changes in the local directory to the remote container.

## Job

The process of Job entering DevMode:

1. Use the job's ``.spec`` to generate a new job, modify the definition of the ``.spec`` manifest in the job (Refer to Deployment above for specific modifications)
2. Enable a port-forward and forward a random local port to the port monitored by syncthing in nocalhost-sidecar.
3. The client running syncthing, monitors the local source directory and synchronizes the changes in the local directory to the remote container.

## CronJob

The process of CronJob entering DevMode:

1. Set the ``.spec.schedule`` of CronJob to ""1 1 1 1 1" to disable the scheduling of timed tasks
2. Use CronJob's .spec.jobTemplate to generate a new Job and modify the definition of ``.spec`` manifest in the job (Refer to Deployment above for specific modifications)
3. Enable a port-forward and forward a random local port to the port monitored by syncthing in nocalhost-sidecar.
4. The client running syncthing, monitors the local source directory and synchronizes the changes in the local directory to the remote container.

## Pod 

The process of Pod entering DevMode:

1. Modify the definition of .spec manifest in the Pod (Refer to Deployment above for specific modifications)
2. Delete the original Pod and create a new Pod with the modified ``.spec``
3. Enable a port-forward and forward a random local port to the port monitored by syncthing in nocalhost-sidecar.
4. The client running syncthing, monitors the local source directory and synchronizes the changes in the local directory to the remote container.
