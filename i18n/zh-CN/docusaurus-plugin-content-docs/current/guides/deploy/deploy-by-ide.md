import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Deploy by IDE Plugin

:::caution Requirements You need to have configured `config.yaml` before deploy applications. [Learn how to configure application deployment](../../config/config-deploy). ::: [Learn how to configure application deployment](../../config/config-deploy). :::

## Choose Application Source Path

<Tabs
  defaultValue="vscode"
  values={[
    {label: 'VS Code', value: 'vscode'},
 {label: 'JetBrains', value: 'jet'},
 ]}>
<TabItem value="vscode">

1. 1. Select a namespace
2. Click on the Click on the <img src={useBaseUrl('/img/icons/install-app-icon.jpg')} width="20" /> icon to deploy application
3. Choose the installation source Choose the installation source

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/plugin/vs-install-app.png')} />
  <figcaption>Select the installation source</figcaption>
</figure>

</TabItem>

<TabItem value="jet">

1. 1. Right click a namespace, click `Install Application`
3. Choose the installation source Choose the installation source

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/plugin/jb-install-app.png')} />
  <figcaption>Select the installation source</figcaption>
</figure>

</TabItem>
</Tabs>

Nocalhost supports to install application from local directory, Git repository and Helm repository.

**From Local Directory** and **From Git Repository**

Nocalhost will analyze the deployment configuration in the `.nocalhost` folder in your application directory or Git repository, looking for clues on how to deploy your application.

**From Helm Repository**

Nocalhost will run the `helm install` to deploy your helmChart. [Read more to learn about `helm install`](https://helm.sh/docs/helm/helm_install/) [Read more to learn about `helm install`](https://helm.sh/docs/helm/helm_install/)