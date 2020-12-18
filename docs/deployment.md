---
title: Deploy Nocalhost Server
---

## Before start

Prerequisites:

- A Kubernetes(1.16+) Cluster(prefer to be provided by the Cloud platform or Minikube)
- Configure kubectl for you to be able to access above cluster as admin
- RBAC must be enabled in above cluster
- Install Helm3
- Install Git


!!! note "Kubernetes provided"
	This document need Kubernetes provided by the Cloud platform, such as Tencent TKE. <br />
	If you ues Minikube, please see [here](/Tutorials/nocalhost-with-minikube/)

## Deploy Nocalhost Server with Helm

### Step 1: Clone the nocalhost git repository

```bash
git clone https://github.com/nocalhost/nocalhost.git
```

![](../assets/images/deployment-1.png)

### Step 2: Install nocalhost server with helm

```bash
helm install nocalhost-server ./nocalhost/deployments/chart --kubeconfig=./cls-pc5oy0lu-config
```

Waiting for the initialization process:
![](../assets/images/deployment-2.png)

Get the public network address of nocalhost-web service

![](../assets/images/deployment-3.png)

And then, you can access nocalhost web in your bowser.


The default account's Email is:
```
admin@admin.com
```

The default account's password is:
```
123456
```


## Deploy Nocalhost Server with nhctl init


### Step 1: Install nocalhost command-line tool(nhctl)

See [installation](/installation) to install nhctl.

### Step 2: Initialize the cluster and setup Nocalhost Server

```bash
nhctl init -n nocalhost --kubeconfig=./cls-pc5oy0lu-config
```

Waiting for the initialization process:
![](../assets/images/deployment-4.png)

![](../assets/images/deployment-5.png)

Get the nocalhost-web service's public network address

![](../assets/images/deployment-3.png)

And then, you can access nocalhost web in your bowser.

The default account's Email is:
```
admin@admin.com
```

The default account's password is:
```
123456
```



