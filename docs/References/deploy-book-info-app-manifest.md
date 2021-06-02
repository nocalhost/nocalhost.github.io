
# Deploy Application by Manifest

## Prerequisites

* **Configured Kubernetes Cluster (with 2 Core and 4G Memory)** which can either be a cluster for local development, such as [minikube](https://minikube.sigs.k8s.io/docs/start/) or [Docker Kubernetes](https://docs.docker.com/docker-for-mac/kubernetes/) cluster, or a remote cluster, such as [Tencent TKE](https://cloud.tencent.com/product/tke). 
* **RBAC** must be enabled in above cluster
* **Configured [kubeconfig](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/) file** that has namespace admin privilege
* **[kubectl (1.6+)](https://kubernetes.io/docs/home/)** installed
* Visual Studio Code (1.52+)
* Kubernetes api-server can be accessed internal and external

> We using minikube to demonstrate, you can also deploy the sample application in any Kubernetes clusters

## Deploy bookinfo Application

### Step 1: Create a test namespace

```
kubectl create namespace test
```

### Step 2: Install via manifest


```
install bookinfo -u https://github.com/nocalhost/bookinfo.git -t rawManifest -r test-case --resource-path manifest/templates  -n test
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

## Clone bookinfo source code

We are going to use bookinfo source code in [Quick Start](https://nocalhost.dev/getting-started/). It is recommended that you can clone the source code to local to avoid problem caused by network or SSL.

Repo for 4 services in bookinfo application:

- productpage(Request Entrance): https://github.com/nocalhost/bookinfo-productpage
- reviews: https://github.com/nocalhost/bookinfo-reviews
- details: https://github.com/nocalhost/bookinfo-details
- ratings: https://github.com/nocalhost/bookinfo-ratings

