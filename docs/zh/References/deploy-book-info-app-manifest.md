# 通过 Manifest 部署应用

## 前置条件

* **配置好的 Kubernetes Cluster (2核CPU 和 4G 内存)** 可以是本地集群, 如 [minikube](https://minikube.sigs.k8s.io/docs/start/) 或 [Docker Kubernetes](https://docs.docker.com/docker-for-mac/kubernetes/) 集群, 或远端集群, 比如[腾讯的 TKE](https://cloud.tencent.com/product/tke). 
* **RBAC** 在上述集群中已经启用
* **Configured [kubeconfig](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/) file** 具备命名空间的管理员权限
* **[kubectl (1.6+)](https://kubernetes.io/docs/home/)** 已安装
* Kubernetes API 服务可以在内部和外部访问

> 这里用 minikube 进行示例的部署，您也可以将示例应用部署在任意 Kubernetes 集群中


## 部署 bookinfo 应用

### 步骤1: 创建一个 test 命名空间

```
kubectl create namespace test
```

### 步骤2: 通过 manifest 安装应用

```
~/.nh/bin/nhctl install bookinfo -u https://github.com/nocalhost/bookinfo.git -t rawManifest -r test-case --resource-path manifest/templates  -n test
```

安装成功后，你应该看到下述信息: 

```
cmd: git clone --branch test-case --depth 1 https://github.com/nocalhost/bookinfo.git /var/folders/db/rgrf2h2j4711zy7136hlx7840000gn/T/228374083
Cloning into '/var/folders/db/rgrf2h2j4711zy7136hlx7840000gn/T/228374083'...
Job print-num-01 created
Job print-num-01 running
Job print-num-01 completed
Resource(Job) dep-job created
Resource(Service) details created
Resource(Deployment) details created
Resource(StatefulSet) web created
Resource(ConfigMap) bookinfo-pre-install-config created
Resource(Service) productpage created
Resource(Deployment) productpage created
Resource(Service) ratings created
Resource(Deployment) ratings created
Resource(Service) reviews created
Resource(Deployment) reviews created
Application bookinfo installed
Starting port-forward for deployment productpage
Port forward 39080:9080
Port-forward 39080:9080 has been started
```

### 步骤3： 查看您部署的应用

您可以通过下述命令查看 `manifest` 应用的部署状态:

```
kubectl get deployment -n test

NAME          READY   UP-TO-DATE   AVAILABLE   AGE
details       0/1     1            0           9s
productpage   0/2     2            0           8s
ratings       0/1     1            0           7s
reviews       0/1     1            0           7s   
```

## 克隆 bookinfo 源代码

我们在 [快速开始](https://nocalhost.dev/getting-started/) 里会使用到 bookinfo 的源代码，建议您可以先把源码克隆到本地备用，避免在操作过程中因为网络或 SSL 问题导致异常

bookinfo 内4个服务的源码的地址：

- productpage(Request Entrance): https://github.com/nocalhost/bookinfo-productpage
- reviews: https://github.com/nocalhost/bookinfo-reviews
- details: https://github.com/nocalhost/bookinfo-details
- ratings: https://github.com/nocalhost/bookinfo-ratings

