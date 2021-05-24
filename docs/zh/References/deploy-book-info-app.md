## 通过 Helm 部署应用

### 前置条件

* **配置好的 Kubernetes Cluster (2核CPU 和 4G 内存)** 可以是本地集群, 如 [minikube](https://minikube.sigs.k8s.io/docs/start/) 或 [Docker Kubernetes](https://docs.docker.com/docker-for-mac/kubernetes/) 集群, 或远端集群, 比如[腾讯的 TKE](https://cloud.tencent.com/product/tke). 
* **RBAC** 在上述集群中已经启用
* **Configured [kubeconfig](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/) file** 具备命名空间的管理员权限
* **[kubectl (1.6+)](https://kubernetes.io/docs/home/)** 已安装
* Kubernetes API 服务可以在内部和外部访问

> 这里用 minikube 进行示例的部署，您也可以将示例应用部署在任意 Kubernetes 集群中


### 部署 bookinfo 应用

#### 步骤1: 从 Gihub 仓库克隆 bookinfo

```
git clone https://github.com/nocalhost/bookinfo.git
```

#### 步骤2: 安装 Helm Chart

Helm chart 位于 `./chart/bookinfo` 路径中, 我们可以直接使用 **helm install** 命令来进行安装, Helm 会默认根据您的 `kubeconfig` 将 bookinfo 应用部署到您默认的 Kubernetes 集群中:

```
helm install bookinfo ./charts/bookinfo

NAME: bookinfo
LAST DEPLOYED: Fri May 21 19:18:30 2021
NAMESPACE: default
STATUS: deployed
REVISION: 1
TEST SUITE: None
```

!!!tip 使用非默认的 kubeconfig
    可以通过通过使用 `--kubeconfig` flag 指定 `kubeconfig` 的路径。请查阅 [Helm install](https://helm.sh/docs/helm/helm_install/) 获取更多 `helm install` 的使用帮助。

#### 步骤3： 查看您的 Helm 部署

您可以通过下述命令查看 helm 的部署状态:

```
helm list

NAME    	NAMESPACE	REVISION	UPDATED                             	STATUS  	CHART                   	APP VERSION
bookinfo	default  	1       	2021-05-21 19:18:30.268709 +0800 CST	deployed	nocalhost-bookinfo-1.2.2	1.3        
```

```
kubectl get deployment -n default    

NAME          READY   UP-TO-DATE   AVAILABLE   AGE
details       2/2     2            2           4m18s
productpage   2/2     2            2           4m18s
ratings       2/2     2            2           4m18s
reviews       0/2     2            0           4m18s
```

### 克隆 bookinfo 源代码

我们在 [快速开始](https://nocalhost.dev/getting-started/) 里会使用到 bookinfo 的源代码，建议您可以先把源码克隆到本地备用，避免在操作过程中因为网络或 SSL 问题导致异常

bookinfo 内4个服务的源码的地址：

- productpage(Request Entrance): https://github.com/nocalhost/bookinfo-productpage
- reviews: https://github.com/nocalhost/bookinfo-reviews
- details: https://github.com/nocalhost/bookinfo-details
- ratings: https://github.com/nocalhost/bookinfo-ratings

