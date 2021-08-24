import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# 快速开始

:::note 关于本指南

**目标:** 安装 Nocalhost，体验核心功能，享受便捷高效的云原生开发体验。 <br /> **预计阅读时间：** 5 分钟 <br /> **要求：**
- 任何本地或远程 Kubernetes 集群 (如 minikube, Docker Desktop, TKE, GKE, EKS, AKS, Rancher 等)。 单节点集群如 [Docker Desktop](https://docs.docker.com/docker-for-mac/kubernetes/) 和 [minikube](https://minikube.sigs.k8s.io/docs/start/) 分配至少 4GB 的内存
- **RBAC** 必须在上述机群中启用
- **配置好的 KubeConfig 文件** 且具备命名空间的管理员权限
- Kubernetes api-server可以访问内部和外部的
- Visual Studio Code (1.52+)

:::

:::danger Apple Silicon 支持

我们在全力对 Apple Silicon 的支持做优化。 目前某些功能可能需要变通方式实现或不可用。

:::

## 1. 安装 Nocalhost VS Code 插件

1. 打开 VScode `编辑器`，然后单击左侧栏中的 <img src={useBaseUrl('/img/icons/vs-code-icon.jpg')} width="20" /> 图标
2. 在搜索输入框中键入 `nocalhost`
3. 选择 `Nocalhost 插件`，然后单击**安装**按钮进行安装。

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/installation/vscode-market.png')} />
  <figcaption>VS Code 插件市场</figcaption>
</figure>

:::tip JetBrains 插件

Nocalhost 支持 JetBrains 全系列 IDE, 请参阅 [安装 JetBrains 插件](./installation##install-jetbrains-plugin)。

:::

## 2. 连接 Kubernetes 集群

点击左侧面板上的 Nocalhost 图标 <img className="svg-icon" src={useBaseUrl('/img/icons/logo-light.svg')} width="20" />，打开 Nocalhost 插件。

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/installation/vs-plugin.jpg')} />
  <figcaption>VS Code 连接集群</figcaption>
</figure>

你可以通过两种方式连接 Kubernetes 集群:

<Tabs
  defaultValue="kubeconfig"
  values={[
    {label: 'By KubeConfig', value: 'kubeconfig'},
 {label: 'Past as Text', value: 'text'},
 ]}>
<TabItem value="kubeconfig">

<p>从本地文件夹中选择 <code>KubeConfig</code> 文件。</p>

:::info 默认 KubeConfig

默认情况下，Nocalhost 会从 `~/.kube/config` 自动读取你的 `KubeConfig`。

:::

</TabItem>

<TabItem value="text">

<p>粘贴 <code>KubeConfig</code> 的文本内容。</p>

:::tip 获取KubeConfig

你可以使用以下命令查看你的 `KubeConfig` 并复制它。

```bash
kubectl config view --raw --flattern
```

:::

</TabItem>
</Tabs>

在 `KubeConfig` 成功加载后，选择您想要访问的 context，然后连接到集群。

连接成功后，**Nocalhost** 会自动显示你的集群列表。

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/installation/cluster-list.jpg')} />
  <figcaption>VS Code 集群列表</figcaption>
</figure>

## 3. 进入开发模式

:::tip 应用程序

我们在这里使用 bookinfo 应用程序作为示例。 你可以选择已经部署在你 Kubernetes 集群中应用程序，也可以按照 **[部署示例应用程序](./guides/deploy/deploy-demo)** 在 Kubernetes 集群中部署示例应用

:::

请确保已成功地在 Kubernetes 集群中部署了工作负载，然后：

1. 展开树目录，找到想要进行开发的工作负载
2. 点击 <img className="svg-icon" src={useBaseUrl('/img/icons/dev_start.svg')} width="18" /> 启动 `开发模式 (DevMode)`
3. 指定源代码本地目录，或者可以从现有的 Git 仓库克隆源码
4. Nocalhost 会自动在新窗口中启动 `开发模式`

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/opt/enter-devmode.gif')} />
  <figcaption>进入开发模式</figcaption>
</figure>

## 4. 更改代码并检查结果

### 在远端容器中启动程序的主进程

**1.** 在远程终端运行以下命令来启动主进程

```bash
sh run.sh
```

:::tip 主进程

当进入开发模式时，应用程序的主进程将不会自动在 DevContainer 中自动启动，因此应用程序不会响应任何请求。 你需要先手动启动主进程，然后才正常能访问该应用。

:::

**2.** 在 [http://127.0.0.1:39080](http://127.0.0.1:39080) 上查看运行的结果

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/opt/main-process.gif')} />
  <figcaption>在远程终端中执行主进程</figcaption>
</figure>

:::note 端口转发

在我们的 `bookinfo ` 示例中，已经将端口设置为 39080:9080， 这意味着 Nocalhost 自动将数据从本地端口 **39080**  转发到指定 `DevContainer` 中的端口 **9080**

:::

### 修改代码

**1.** 修改  `productpage.py` 中的任意代码。 **不要**忘记保存你的修改结果。

**2.** 刷新浏览器查看修改结果

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/opt/code-change.gif')} />
  <figcaption>更改代码并查看结果</figcaption>
</figure>

👍 **恭喜!** 你已经通过使用 Nocalhost 体验了便捷的云原生微服务开发过程。

## 下一步

- 请参阅 Nocalhost [简介](./introduction)
- 访问[我们的 Github 仓库](https://github.com/nocalhost/nocalhost) 查看源码
- 加入我们的 [Slack 频道](https://nocalhost.slack.com/) 或扫描二维码申请加入微信群。扫码时备注 Nocalhost，小助手会拉你进群。

<img src={useBaseUrl('/img/nocal-host-wechat.png')} width="200" />