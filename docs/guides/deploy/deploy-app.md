import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Deployment with Nocalhost

Nocalhost provides an easy way to help you manager Kubernetes applications deployment within IDE.

## What is `default`?

When you expand any Kubernetes namespace in Nocalhost plugin, you may have questions seeing something name `default` and <img src={useBaseUrl('/img/icons/app_active.svg')} width="20" /> icon.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/plugin/default-app.png')} />
</figure>

In Kubernetes, a [workload](https://kubernetes.io/docs/concepts/workloads/) is an application, whether your workload is a single component or several that work together. 

But in the actual world, we have a more complicated scenario. A microservices architectural application is composed of many workloads.
Think about if you have a hundred of these applications. There will be a very long workload list in a namespace that is hard to read and search. 

Nocalhost uses annotation to compose related workloads into a single `application`.  When you deploy a `configured Nocalhost application` or [Helm](https://helm.sh/) application, Nocalhost can identify it as an `application` and group all relative workloads. Otherwise, Nocalhost will group all unidentified workloads into the `default application`.

:::tip Difference

A `configured Nocalhost application` is still single or grouped of Kubernetes manifest. It does not change the original Kubernetes manifest architect. It just adds some configurations which only using by Nocalhost.

:::

Corresponding to the above description, you can deploy different configured Kubernetes applications with Nocalhost. 

- [Deploy Kubernetes manifest](#deploy-kubernetes-manifest)
- [Deploy an Nocalhost configured application](#deploy-an-configured-nocalhost-application)

## Deploy Kubernetes Manifest

You can deploy Kubernetes manifests or Kustomizations by using Nocalhost plugin. This is similar to `kubectl apply -f`.

:::caution Deploy within Application

You can only deploy Kubernetes manifest within a `application`. You can deploy to `default` application if you do note have any `application` within namespace.

:::

#### Process

1. Right-click any namespace and select **Apply Manifest**
2. Select a Kubernetes manifest file or a folder that contains group of manifest files

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/plugin/deploy-manifest.gif')} />
  <figcaption>Deploy Kubernetes manifest</figcaption>
</figure>

## Deploy an Configured Nocalhost Application

:::danger Configuration Required

You need to have configured `config.yaml` before deploy applications. [Learn how to configure application deployment](../../config/config-deployment-quickstart.md).

:::

<Tabs
  defaultValue="vscode"
  values={[
    {label: 'VS Code', value: 'vscode'},
    {label: 'JetBrains', value: 'jet'},
  ]}>
<TabItem value="vscode">

1. Select a namespace
2. Click on the <img src={useBaseUrl('/img/icons/install-app-icon.jpg')} width="20" /> icon to deploy application
3. Choose the installation source

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/plugin/vs-install-app.png')} />
  <figcaption>Select the installation source</figcaption>
</figure>

</TabItem>
  
<TabItem value="jet">

1. Right click a namespace, click `Install Application`
3. Choose the installation source

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/plugin/jb-install-app.png')} />
  <figcaption>Select the installation source</figcaption>
</figure>

</TabItem>
</Tabs>

### Installation Source

Nocalhost supports to install application from local directory, Git repository and Helm repository.

**From Local Directory** and **From Git Repository**

Nocalhost will analyze the deployment configuration in the `.nocalhost` folder in your application directory or Git repository, looking for clues on how to deploy your application.

**From Helm Repository**

Nocalhost will run the `helm install` to deploy your helmChart. [Read more to learn about `helm install`](https://helm.sh/docs/helm/helm_install/)

:::danger Helm Needed

You need to install [Helm](https://helm.sh) in your computer before you can install by Helm

:::