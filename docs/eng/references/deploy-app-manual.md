## Prerequisites

* **Configured Kubernetes Cluster (with 2 Core and 4G Memory)** which can either be a cluster for local development, such as [minikube](https://minikube.sigs.k8s.io/docs/start/) or [Docker Kubernetes](https://docs.docker.com/docker-for-mac/kubernetes/) cluster, or a remote cluster, such as [Tencent TKE](https://cloud.tencent.com/product/tke). 
* **RBAC** must be enabled in above cluster
* **Configured [kubeconfig](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/) file** that has namespace admin privilege
* **[Helm](https://helm.sh/)** installed
* Visual Studio Code (1.52+)
* Kubernetes api-server can be accessed internal and external

> We using minikube to demonstrate, you can also deploy the sample application in any Kubernetes clusters

## Deploy bookinfo Application by Manifest

### Step 1: Create a test namespace

```
kubectl create namespace test
```

### Step 2: Install via manifest


```
~/.nh/bin/nhctl install bookinfo -u https://github.com/nocalhost/bookinfo.git -t rawManifest -r test-case --resource-path manifest/templates  -n test
```

After successfully installed, you should see the following information: 

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

### Step 3:  Check your application deployment

You can check your `minifest` application deployment status by:

```
kubectl get deployment -n test

NAME          READY   UP-TO-DATE   AVAILABLE   AGE
details       0/1     1            0           9s
productpage   0/2     2            0           8s
ratings       0/1     1            0           7s
reviews       0/1     1            0           7s   
```

## Deploy bookinfo Application by Helm

### Step 1: Clone from Github Repo

Clone the bookinfo repo and enter the directory

```
git clone https://github.com/nocalhost/bookinfo.git

cd bookinfo
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

### Step 3:  Check your helm deployment

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

## Clone bookinfo source code

We are going to use bookinfo source code in [Quick Start](../../getting-started/). It is recommended that you can clone the source code to local to avoid problem caused by network or SSL.

Repo for 4 services in bookinfo application:

- productpage(Request Entrance): https://github.com/nocalhost/bookinfo-productpage
- reviews: https://github.com/nocalhost/bookinfo-reviews
- details: https://github.com/nocalhost/bookinfo-details
- ratings: https://github.com/nocalhost/bookinfo-ratings