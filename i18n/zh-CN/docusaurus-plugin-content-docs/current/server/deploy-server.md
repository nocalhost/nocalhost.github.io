import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Getting Start

:::note About this guide
**Goal :** Deploy Nocalhost Sever to Kubernetes cluster. <br />
**Estimate time :** 5 minutes <br />
**Requirements :**
- Any local or remote Kubernetes cluster (minikube, Docker Desktop, TKE, GKE, EKS, AKS, Rancher, ...). Allocate at least 4 GB of memory for single node clusters like [Docker Desktop](https://docs.docker.com/docker-for-mac/kubernetes/) and [minikube](https://minikube.sigs.k8s.io/docs/start/).
- **RBAC** must be enabled in above cluster
- **Configured kubeconfig file** that has namespace admin privilege
- **[kubectl](https://kubernetes.io/docs/tasks/tools/)** installed
- **Nocalhost IDE Plugin** installed
- Kubernetes api-server can be accessed internal and external
- **[Helm](https://helm.sh/docs/intro/install/)** installed if you [deploy by Helm](#deploy-by-helm)
:::

You can either deploy Nocalhost Server by Nocalhost CLI tool (`nhctl`) or by Helm. Either way, you need to have the `KubeConfig` with namespace admin privilege of the Kubernetes cluster.

## Deploy Nocalhost Server by Nocalhost CLI

### 1. Initialize by `nhctl init`

Run the following command to initialize Nocalhost Server

```bash 
nhctl init demo -n nocalhost-demo --kubeconfig=<path>/your-kubeconfig-file
```

:::tip namespace
`-n` flag use to specify the namespace that Nocalhost Server will be deployed. In this tutorial, we will deploy Nocalhost Server to namespace `nocalhost-demo`. If the namespace does not exist, `nhctl` will create this namespace automatically. 

If you do not specify namespace, `nhctl` will deploy Nocalhost Server to the `default` namespace.
:::

### 2. Waiting for Initialization

Just waiting for the initialization process. You should see the following message after `nhctl` finished initialization.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/server/server-deployed.png')} width="600"/>
  <figcaption>Nocalhost Server Deployment</figcaption>
</figure>

You can now [access the Nocalhost Web Service](#access-the-web-service).

:::tip Port-Forward
`nhctl` will automatically run port-forward to the Nocalhost Server Web Service after initialization. This is a one-time port-forward.
:::

## Deploy Nocalhost Server by Helm

### 1. Clone the Repository

```bash
git clone https://github.com/nocalhost/nocalhost.git
``` 

### 2. Deploy the Nocalhost Server

You can customize the deployed components by editing the helm chart in `nocalhost/deployments/chart/values.yaml` before deployment.

```bash
helm install nocalhost-server ./nocalhost/deployments/chart --kubeconfig=<path>/your-kubeconfig-file -n nocalhost-demo
```

:::caution No PVC
The above deployment will create a pvc for `mariadb`. If you do not have pvc or permission to create, you can use the `--set mariadb.primary.persistence.enabled=false` to deploy Nocalhost Server without creating pvc.
:::

### 3. Waiting for Deployment 

You can check the deployment status by `kubectl` or other Kubernetes tools:

```bash
> kubectl get pods -n nocalhost-demo --kubeconfig=<path>/your-kubeconfig-file

NAME                            READY   STATUS    RESTARTS   AGE
nocalhost-api-8f6dddbb6-rfjvd   0/1     Running   0          13s
nocalhost-mariadb-0             0/1     Running   0          14s
nocalhost-web-b46995966-d9hmx   1/1     Running   0          14s
```

### 4. Port-Forwarding to Access Web Service
Once the deployment completed, you need to manually port-forward the Nocalhost Web Service to local by using the following command:

```bash
> kubectl port-forward service/nocalhost-web 8080:80 -n demo   

Forwarding from 127.0.0.1:8080 -> 80
Forwarding from [::1]:8080 -> 80
```

You can now [access the Nocalhost Web Service](#access-the-web-service).

## Access the Web Service

After deployment, you can access the Nocalhost Server web service via the URL

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/server/server-login.jpg')} />
  <figcaption>Nocalhost Server login</figcaption>
</figure>

Enter the default account information to login to the Nocalhost dashboard

```yaml title="Username and Password to access web service"
Email: admin@admin.com
Password: 123456
```

## Deployment Process

After executing the deployment commands, Nocalhost will:

1. Deploy essential components: [nocalhost-api](#), `nocalhost-mariadb` and [nocalhost-web](#)
2. Create another namespace called `nocalhost-reserve` and deploy [`nocalhost-dep`](#)
3. Create an namespace with random name, this namespace is used for you initial `DevSpace`


