
## Deploy Application by Helm

### Prerequisites

* **Configured Kubernetes Cluster (with 2 Core and 4G Memory)** which can either be a cluster for local development, such as [minikube](https://minikube.sigs.k8s.io/docs/start/) or [Docker Kubernetes](https://docs.docker.com/docker-for-mac/kubernetes/) cluster, or a remote cluster, such as [Tencent TKE](https://cloud.tencent.com/product/tke). 
* **RBAC** must be enabled in above cluster
* **Configured [kubeconfig](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/) file** that has namespace admin privilege
* **[kubectl (1.6+)](https://kubernetes.io/docs/home/)** installed
* Visual Studio Code (1.52+)
* Kubernetes api-server can be accessed internal and external

> We using minikube to demonstrate, you can also deploy the sample application in any Kubernetes clusters

### Deploy bookinfo Application

#### Step 1: Clone from Github Repo

Clone the bookinfo repo

```
git clone https://github.com/nocalhost/bookinfo.git
```

### Step 2: Install Helm Chart

Helm chart is in the path `./chart/bookinfo` , we can use **helm install** command install directly, Helm will automatically deploy the bookinfo application to Kubernetes cluster by your default `kubeconfig`: 

```
helm install bookinfo ./charts/bookinfo

NAME: bookinfo
LAST DEPLOYED: Fri May 21 19:18:30 2021
NAMESPACE: default
STATUS: deployed
REVISION: 1
TEST SUITE: None
```

or you can use the `--kubeconfig` flag to specify `kubeconfig` path, Read [Helm install](https://helm.sh/docs/helm/helm_install/) for how to use `helm install` command.

:::tip use different kubeconfig
You can specify the path of kubeconfig by using the `--kubeconfig` flag. Please refer to [Helm install](https://helm.sh/docs/helm/helm_install/) for more help using `helm install`.
:::

#### Step 3:  Check your helm deployment

You can check your helm deployment status by:

```
helm list

NAME    	NAMESPACE	REVISION	UPDATED                             	STATUS  	CHART                   	APP VERSION
bookinfo	default  	1       	2021-05-21 19:18:30.268709 +0800 CST	deployed	nocalhost-bookinfo-1.2.2	1.3        
```

Check Kubernetes deployment

```
kubectl get deployment -n default    

NAME          READY   UP-TO-DATE   AVAILABLE   AGE
details       2/2     2            2           4m18s
productpage   2/2     2            2           4m18s
ratings       2/2     2            2           4m18s
reviews       0/2     2            0           4m18s
```

### Clone bookinfo source code

We are going to use bookinfo source code in [Quick Start](https://nocalhost.dev/getting-started/). It is recommended that you can clone the source code to local to avoid problem caused by network or SSL.

Repo for 4 services in bookinfo application:

- productpage(Request Entrance): https://github.com/nocalhost/bookinfo-productpage
- reviews: https://github.com/nocalhost/bookinfo-reviews
- details: https://github.com/nocalhost/bookinfo-details
- ratings: https://github.com/nocalhost/bookinfo-ratings

