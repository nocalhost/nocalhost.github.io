## 前置条件

* **配置好的 Kubernetes Cluster (2核CPU 和 4G 内存)** 可以是本地集群, 如 [minikube](https://minikube.sigs.k8s.io/docs/start/) 或 [Docker Kubernetes](https://docs.docker.com/docker-for-mac/kubernetes/) 集群, 或远端集群, 比如[腾讯的 TKE](https://cloud.tencent.com/product/tke). 
* **RBAC** 在上述集群中已经启用
* **Configured [kubeconfig](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/) file** 具备命名空间的管理员权限
* **[Helm](https://helm.sh/)** 已安装
* Kubernetes API 服务可以在内部和外部访问

> 这里用 minikube 进行示例的部署，您也可以将示例应用部署在任意 Kubernetes 集群中

## 通过 Manifest 部署 bookinfo 应用

1. 选择任意命名空间，点击 <img src="../../../assets/images/icons/install-app-icon.jpg" width="20"/>
2. 在弹出框中选择 Clone from Git
3. 输入我们示例应用 Bookinfo 的 Git 链接：
```
https://github.com/nocalhost/bookinfo.git
```
4. 选择默认分支后，在下拉框中选择 ``config.manifest.git.yaml`` 类型
5. 等待安装结束即可在命名空间上看到新部署的应用

[![](../../assets/images/installation/install-app.gif)](../../assets/images/installation/install-app.gif)
