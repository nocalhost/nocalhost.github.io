# Deploy to Remote Kubernetes

!!!note 
    This guide requires remote Kubernetes which provided by Cloud Platform, such as [Tencent TKE](https://cloud.tencent.com/product/tke). If you are using local kubernetes cluster which like Minikube, please see [this guide](deploy-to-minikube)

## Prerequisites

* **Configured Kubernetes Cluster (1.16+)** 
* **RBAC** must be enabled in above cluster
* **Configured [kubeconfig](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/) file** that has namespace admin privilege
* **[kubectl (1.6+)](https://kubernetes.io/docs/home/)** installed
* **Helm (3.3+)** installed
* Kubernetes api-server can be accessed internal and external

## Deploy the Nocalhost Server

You can deploy the Nocalhost Server by Helm or Nocalhost CLI tools

### Deploy with Helm

#### Step 1: Clone the repository

```
git clone https://github.com/nocalhost/nocalhost.git
```

You can customize the deployed components before start the installation by editing the helm chart in ``nocalhost/deployments/chart/values.yaml``. 

#### Step 2: Deploy the Nocalhost Server

```
helm install nocalhost-server ./nocalhost/deployments/chart --kubeconfig=./cls-pc5oy0lu-config
```

## Deploy with Nocalhost CLI

#### Step 1: Install

Make sure you have finished the nhctl installation following [this guide](../../installation)

#### Step 2: Deploy Nocalhost server with nhctl

```
nhctl init demo -n nocalhost --kubeconfig=./cls-pc5oy0lu-config
```

Waiting for the initialization process:

![Deployment](../../assets/images/installation/deployment-5.png)


## Access the Nocalhost Server Web Service

You can access the Nocalhost Server web service via the public address

![Server Login](../../assets/images/installation/nocal-server-login.jpg)

Enter the default account information to login to the Nocalhost dashboard

```
Email: admin@admin.com
Password: 123456
```

:thumbsup: **Congratulations!** You are all set to go

