import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# 快速开始

:::note 关于本指南
**Goal :** 安装 Nocalhost，体验核心功能，享受便捷高效的云原生开发体验。<br />
**Estimate time :** 5 分钟 <br />
**Requirements :**
- 任何本地或远程 Kubernetes 集群 (minikube, Docker Desktop, TKE, GKE, EKS, AKS, Rancher, ...)。单节点集群如 [Docker Desktop](https://docs.docker.com/docker-for-mac/kubernetes/) 和 [minikube](https://minikube.sigs.k8s.io/docs/start/) 分配至少 4GB 的内存
- **RBAC** 必须在上述机群中启用
- **配置好的 kubeconfig 文件** 具备命名空间的管理员权限
- Kubernetes API 服务可以在内部和外部访问
- Visual Studio Code (1.52+)
:::

:::danger Apple Silicon 支持
我们在全力对 Apple Silicon 的支持做优化。目前某些功能可能需要变通方式实现或不可用。
:::

## 1. 安装 Nocalhost VS Code 插件

1. 打开 VScode 编辑器，然后单击左侧栏中的 <img src={useBaseUrl('/img/icons/vs-code-icon.jpg')} width="20" /> icon
2. 在搜索输入框中键入 `nocalhost`
3. 选择 `Nocalhost` 插件，然后单击`安装`按钮进行安装。

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/installation/vscode-market.png')} />
  <figcaption>VS Code 插件市场</figcaption>
</figure>

:::tip JetBrains 插件
Nocalhost 同时支持 JetBrains，请参阅[安装 JetBrains 插件](./installation##install-jetbrains-plugin)
:::

## 2. 连接 Kubernetes 集群

在左侧面板点击 Nocalhost 插件按钮 <img className="svg-icon" src={useBaseUrl('/img/icons/logo-light.svg')} width="20" />， 打开 Nocalhost 插件. 

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/installation/vs-plugin.jpg')} />
  <figcaption>VS Code 连接集群</figcaption>
</figure>

你可以通过两种方式连接 Kubernetes 集群:

<Tabs
  defaultValue="kubeconfig"
  values={[
    {label: '通过 KubeConfig 添加', value: 'kubeconfig'},
    {label: '黏贴 KubeConfig 文本', value: 'text'},
  ]}>
<TabItem value="kubeconfig">

<p>从本地文件夹中选择 <code>KubeConfig</code> 文件。</p>

:::info 默认 KubeConfig
Nocalhost 会默认从 `~/.kube/config` 自动读取你的  `KubeConfig`。
:::

</TabItem>
  
<TabItem value="text">

<p>粘贴 <code>KubeConfig</code> 的文本内容</p>

:::tip 获取 KubeConfig 的文本内容
你可以通过下述 `kubectl` 命令查看并复制你的 `KubeConfig`

```bash
kubectl config view --raw --flattern
```
:::

</TabItem>
</Tabs>

在 `KubeConfig` 成功读取后，选择需要访问的机群，然后连接到该集群。

连接成功后，**Nocalhost** 会自动显示您的集群列表。

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/installation/cluster-list.jpg')} />
  <figcaption>VS Code 集群列表</figcaption>
</figure>

## 3. 进入开发模式

:::tip 应用
我们将在这里以 bookinfo 应用程序作为示例。 您可以选择已经部署在您 Kubernetes 集群中应用程序，也可以按照 **[部署示例应用程序](./guides/deploy/deploy-demo)** 在 Kubernetes 集群中部署示例应用。
:::

确保您已在 Kubernetes 集群中成功部署工作负载，然后：

1. 展开树目录，找到需要开发的工作负载
2. 点击 <img className="svg-icon" src={useBaseUrl('/img/icons/dev-start.svg')} width="18" />  图标进入开发模式 (`DevMode`)
3. 指定源代码本地目录，或者您可以从现有的 Git 仓库克隆代码
4. Nocalhost 会自动在新窗口中启动开发模式

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/opt/enter-devmode.gif')} />
  <figcaption>进入开发模式</figcaption>
</figure>

## 4. 更改代码并检查结果

### 在远端容器中启动程序的主进程

**1.** 在远端 Terminal 中使用下述命令启动主进程

```bash
sh run.sh
```

:::tip 主进程
在默认情况下，在进入开发模式后，应用中的主进程不会自动在开发容器中启动，因此应用将不响应任何请求。 您需要先手动启动主进程，然后才正常能访问该应用。
:::

**2.** 在本地浏览器中通过访问 [http://127.0.0.1:39080](http://127.0.0.1:39080) 查看结果

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/opt/main-process.gif')} />
  <figcaption>在远端 Terminal 中启动主进程</figcaption>
</figure>

:::note 端口转发
在我们的 `bookinfo` 示例中，我们已经将 port-forward 预设为 39080:9080，这意味着 Nocalhost 会自动将数据从本地端口 **39080** 转发到`开发容器`上的端口 **9080**。 
:::


### 修改代码

**1.** 修改  `productpage.py` 中的任意代码。**不要**忘记保存你的修改结果。

**2.** 刷新浏览器查看修改结果

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/opt/code-change.gif')} />
  <figcaption>修改代码并查看结果</figcaption>
</figure>

👍 **恭喜!** 你已经通过使用 Nocalhost 体验了便捷的云原生微服务开发过程。

## 下一步

- 阅读 [Nocalhost 的简介](./introduction)
- 访问[我们的 Github 仓库](https://github.com/nocalhost/nocalhost) 查看源码
- 加入我们的 [Slack 频道](https://nocalhost.slack.com/) 或扫描加入微信群。（入群请备注 **Nocalhost** )

<img src={useBaseUrl('/img/nocal-host-wechat.png')} width="200" />