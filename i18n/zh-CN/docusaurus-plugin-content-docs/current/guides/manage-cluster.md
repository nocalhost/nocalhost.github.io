import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# 集群管理

## 连接 Kubernetes 集群

Nocalhost 支持多集群管理，您可以使用两种方法连接到 Kubernetes 集群：

**通过 KubeConfig 连接**

从任何本地目录中选择 `KubeConfig` 文件。

:::tip 默认 KubeConfig
默认情况下，Nocalhost 插件启动时会从 `~/.kube/config` 路径下自动读取您本地的 `KubeConfig`。
:::

**粘贴 KubeConfig 文本**

粘贴 KubeConfig 的文本内容。

:::tip 获取 KubeConfig
你可以通过在 Kubernetes 集群所在系统内运行下述命令查看 `KubeConfig`，然后复制黏贴到插件里。

```bash
kubectl config view --minify --raw --flattern
```
:::

<Tabs
  defaultValue="vscode"
  values={[
    {label: 'VS Code', value: 'vscode'},
    {label: 'JetBrains', value: 'jet'},
  ]}>
<TabItem value="vscode">

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/opt/vscode-add-cluster.gif')} width="250" />
  <figcaption>在 VS Code 中连接集群</figcaption>
</figure>

</TabItem>
  
<TabItem value="jet">

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/opt/idea-connect-cluster.gif')} width="600" />
  <figcaption>在 JetBrains IDE 中连接集群</figcaption>
</figure>

</TabItem>
</Tabs>

## 移除集群

:::note 不修改源 KubeConfig
Nocalhost 只会从树列表中删除集群，它不会修改你的 `KubeConfig`。
:::

<Tabs
  defaultValue="vscode"
  values={[
    {label: 'VS Code', value: 'vscode'},
    {label: 'JetBrains', value: 'jet'},
  ]}>
<TabItem value="vscode">

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/opt/vscode-remove-cluster.gif')} width="290" />
  <figcaption>在 VS Code 中移除集群</figcaption>
</figure>

</TabItem>
  
<TabItem value="jet">

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/opt/idea-remove-cluster.gif')} width="600" />
  <figcaption>在 JetBrains IDE 中移除集群</figcaption>
</figure>

</TabItem>
</Tabs>

## 查看集群 KubeConfig

右键点击指定集群，选择 `View KubeConfig`，Nocalhost 插件会打开该集群的 `KubeConfig`


<Tabs
  defaultValue="vscode"
  values={[
    {label: 'VS Code', value: 'vscode'},
    {label: 'JetBrains', value: 'jet'},
  ]}>
<TabItem value="vscode">

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/opt/idea-view-config.gif')} width="600" />
  <figcaption>在 VS Code 中查看集群 KubeConfig</figcaption>
</figure>

</TabItem>
  
<TabItem value="jet">

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/opt/vscode-view-config.gif')} width="600" />
  <figcaption>在 JetBrains IDE 中查看集群 KubeConfig</figcaption>
</figure>

</TabItem>
</Tabs>

