import useBaseUrl from '@docusaurus/useBaseUrl';

# Develop a Workload

:::note about this guide
**Goal:** In [Quick Start Guide](../quick-start), we have guided you on how to install Nocalhost and experience the easier and faster Kubernetes application development. We will provide a complete Nocalhost user guide. <br />
**Estimate Time:** 15 minutes <br />
**Requirements:**
- Any local or remote Kubernetes cluster (minikube, Docker Desktop, TKE, GKE, EKS, AKS, Rancher, ...). Allocate at least 4 GB of memory for single node clusters like [Docker Desktop](https://docs.docker.com/docker-for-mac/kubernetes/) and [minikube](https://minikube.sigs.k8s.io/docs/start/).
- **RBAC** must be enabled in above cluster
- **Configured kubeconfig file** that has namespace admin privilege
- Kubernetes api-server can be accessed internal and external
- Visual Studio Code (1.52+)
:::

## Select Workload

Nocalhost supports to develop all types of Kubernetes workload. 

## Choose Source Code Directory

Before developing the application, you need to tell Nocalhost the location of your source code. You can either specify a local directory or clone your source code from Git repository through Nocalhost.

### Specify Local Directory


#### 1. Open Local Directory

#### 2. Associate Local Directory


### Clone From Git Repository


## Enter Development Mode


### Automated File Synchronization


### Status Bar


### Start Port-Forwarding


## Exit Development Mode


## Reset Application


## Edit Manifest