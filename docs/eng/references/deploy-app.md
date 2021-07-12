## Prerequisites

* **Configured Kubernetes Cluster (with 2 Core and 4G Memory)** which can either be a cluster for local development, such as [minikube](https://minikube.sigs.k8s.io/docs/start/) or [Docker Kubernetes](https://docs.docker.com/docker-for-mac/kubernetes/) cluster, or a remote cluster, such as [Tencent TKE](https://cloud.tencent.com/product/tke). 
* **RBAC** must be enabled in above cluster
* **Configured [kubeconfig](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/) file** that has namespace admin privilege
* **[Helm](https://helm.sh/)** installed
* Visual Studio Code (1.52+)
* Kubernetes api-server can be accessed internal and external

> We using minikube to demonstrate, you can also deploy the sample application in any Kubernetes clusters

## Deploy Application by Manifest

1. Select any namespace，click <img src="../../../assets/images/icons/install-app-icon.jpg" width="20"/> icon
2. Select `Clone from Git` in the popup box
3. Enter our demo application's Git url: 
```
https://github.com/nocalhost/bookinfo.git
```

4. Select default branch, choose ``config.manifest.git.yaml`` type form the dropdown list
5. Wait for installation finish then you can see your application in namespace

[![](../../assets/images/installation/install-app.gif)](../../assets/images/installation/install-app.gif)
