import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Quick Start

:::note About this guide

**Goal:** Install Nocalhost, evaluate the core features and experience efficient cloud-native application development. <br />
**Estimate time:** 5 minutes <br />
**Requirements:**

- Any local or remote Kubernetes cluster (minikube, Docker Desktop, TKE, GKE, EKS, AKS, Rancher, ...). Allocate at least 4 GB of memory for single-node clusters like [Docker Desktop](https://docs.docker.com/docker-for-mac/kubernetes/) and [minikube](https://minikube.sigs.k8s.io/docs/start/).
- **RBAC** must be enabled in the above cluster
- **Socat** should installed in the nodes for cluster (Nocalhost file synchronization depends on port-forward)
- **Configured KubeConfig file** that has namespace admin privilege
- Kubernetes api-server can be accessed internal and external
- Visual Studio Code (1.52+)

:::

## 1. Install Nocalhost VS Code Extension

1. Open VS Code and go to `Extensions` by click the <img src={useBaseUrl('/img/icons/vs-code-icon.jpg')} width="20" /> icon
2. Input `Nocalhost` in the search box
3. Select the `Nocalhost Extension`, and click the **Install** button.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/installation/vscode-market.png')} />
  <figcaption>VS Code Extension Market</figcaption>
</figure>

:::tip JetBrains Plugin

Nocalhost does fully supports JetBrains, please refer to [Install JetBrains Plugin](./installation##install-jetbrains-plugin).

:::

## 2. Connect to Kubernetes Cluster

Click on the Nocalhost icon <img className="svg-icon" src={useBaseUrl('/img/icons/logo-light.svg')} width="20" /> on the side panel, open the Nocalhost plugin.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/installation/vs-plugin.jpg')} />
  <figcaption>VS Code Connect to Cluster</figcaption>
</figure>

There are two methods that you can use to connect to Kubernetes cluster:

<Tabs
defaultValue="kubeconfig"
values={[
{label: 'By KubeConfig', value: 'kubeconfig'},
{label: 'Paste as Text', value: 'text'},
]}>
<TabItem value="kubeconfig">

<p>Select the <code>KubeConfig</code> file from any local directory.</p>

:::info Default KubeConfig

Nocalhost will try to load `KubeConfig` from your local `~/.kube/config` by default.

:::

</TabItem>
  
<TabItem value="text">

<p>Paste the <code>KubeConfig</code> as a text</p>

:::tip Get KubeConfig

You can use the following command to view your `KubeConfig` and copy it.

```bash
kubectl config view --raw --flatten
```

:::

</TabItem>
</Tabs>

After `KubeConfig` is successfully loaded, select the context that you want to access, then connect to the cluster.

**Nocalhost** will automatically show the cluster list.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/installation/cluster-list.jpg')} />
  <figcaption>VS Code Cluster List</figcaption>
</figure>

## 3. Enter Development Mode

:::tip Application

We are using the bookinfo application as an example here. You can use your own application that already deployed in your Kubernetes clusters, or you can follow **[Deploy Demo Application](./guides/deploy/deploy-demo.md)** to deploy the demo application in your Kubernetes clusters.

:::

Make sure you have successfully deployed workloads within your Kubernetes Cluster, then:

1. Expand the workloads tree, find the workload you want to develop
2. Click <img className="svg-icon" src={useBaseUrl('/img/icons/dev_start.svg')} width="18" /> to start the `Development Mode (DevMode)`
3. Specify the source code local directory or you can clone from existing Git repository.
4. Nocalhost will open a new VS Code window, and start the `DevMode` automatically.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/opt/enter-devmode.gif')} />
  <figcaption>Workload Enter DevMode</figcaption>
</figure>

:::warning On premise case

If you are experiencing DevMode in on premise K8s cluster, you need to [configure the sidecar image address](./config/config-dev-container-en#sidecar-image-customization) additionally and push the image to your own repository.

:::

## 4. Change Code and See Result

### Execute main process in remote Container

**1.** Run the following command in the remote terminal to start main process

```bash
sh run.sh
```

:::tip Main Process

When entering DevMode, the application main process will not automatically start by default in the DevContainer, thus the application will not response any request. You need to manually start the main process before you can access it.

:::

**2.** View the running result on [http://127.0.0.1:39080](http://127.0.0.1:39080) in your web browser

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/opt/main-process.gif')} />
  <figcaption>Execute the main process in remote terminal</figcaption>
</figure>

:::note Port-Forwarding

In our `bookinfo` demo, we've already set the port-forward to 39080:9080, which means Nocalhost will automatically forwards data from the local port **39080** to port **9080** on the defined `DevContainer`.

:::

### Change the code

**1.** Modify code in `productpage.py` and see change in web browser. **Do not** forget to save your change.

**2.** Refresh the web browser and see the code change

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/opt/code-change.gif')} />
  <figcaption>Change code and see result</figcaption>
</figure>

👍 **Congratulations!** You are all set to go

## What's Next?

- Refer to Nocalhost's [Introduction](./introduction)
- Visit our [Github Repo](https://github.com/nocalhost/nocalhost)
- Join our [Slack](https://nocalhost.slack.com/) or scan the code to join our WeChat Group

<img src={useBaseUrl('/img/nocal-host-wechat.png')} width="200" />
