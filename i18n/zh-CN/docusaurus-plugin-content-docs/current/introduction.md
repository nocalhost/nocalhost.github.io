import useBaseUrl from '@docusaurus/useBaseUrl';

# 什么是 Nocalhost?

Nocalhost 是一款开源的基于 IDE 的云原生应用开发工具：

- **直接在 Kubernetes 集群中构建、测试和调试应用程序**
- 提供易于使用的 IDE 插件（支持 VS Code 和 JetBrains），即使在 Kubernetes 集群中进行开发和调试，Nocalhost 也能保持和本地开发一样的开发体验
- **使用即时文件同步进行开发：** 即时将您的代码更改同步到远端容器，而无需重建映像或重新启动容器。

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/intro/coding-in-cluster.gif')} width="800"/>
</figure>

## Nocalhost 是如何工作的？

Nocalhost 由单个二进制 CLI 和 IDE 插件组成。 理想情况下，您可以直接将它与您熟悉的 IDE 一起使用。 Nocalhost 不需要服务器端组件，因为它通过 KubeConfig 直接与您的 Kubernetes 集群通信，就像 kubectl 一样。

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/intro/how-it-works.webp')} />
</figure>

## 为什么使用 Nocalhost？

构建 Kubernetes 应用并不简单，尤其对于大型开发团队来说更具挑战。 Nocalhost 提供了最高效的方式来构建云原生应用程序。

使用 Nocalhost 直接在 Kubernetes 中进行开发的优势有：

- **生产环境相似性** - 开发环境与你的生产环境非常相似，让你更有信心在发布新功能时一切都将在生产环境中正常工作。
- **提速反馈循环** - 通过文件同步，你所有代码更改可以在容器中立即生效，而无需重建镜像或重新部署容器。
- **灵活的扩展性** - 开发人员无需再担心本地资源不足。
- **降低成本** - 更有效地使用资源并降低 IT 设施成本。

在下述环境里，在 Kubernetes 集群中进行开发很有用：

- 本地资源的限制
- 想要在类似生产环境中测试你的应用
- 想要调试在本地计算机上难以重现的问题
- 应用程序需要访问集群内部服务 (例如集群 DNS)

## 主要特性

### 在 Kubernetes 集群中编码

Nocalhost 预配置为与你喜欢的 IDE 配合使用，你可以一键连接到任何 Kubernetes 集群，开始享受在集群内进行编码，摆脱烦人的本地环境配置。

### 实时的文件同步

Nocalhost 可以在你每次进行修改时自动将代码同步到 K8s 容器中。 这样能免去了镜像提交、构建和推送等步骤，极大提速了开发的反馈循环。 因此代码修改可以实现秒级生效。

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/intro/dev-circle.jpg')} width="700"/>
</figure>

### 为协作而生

Nocalhost 可帮助你的团队实现标准化开发工作流程，而无需让团队中的每个人都成为 Kubernetes 专家。

- 您团队中的 **Kubernetes 和 DevOps 专家**可以通过 Nocalhost Server 配置和管理集群、应用程序、DevSpace 和用户。阅读有关 [Nocalhost Server](./server/server-overview) 的更多信息
- 您团队中的**开发人员**无需成为 Kubernetes 专家，即可轻松查看项目并即时在 Kubernetes 集群中开始编码和调试。

### 兼容性

Nocalhost 已经过许多 Kubernetes 发行版的实战测试，包括：

- **本地 Kubernetes 集群**，如 minikube、Microk8s、K3s 和 Docker Desktop
- **托管 Kubernetes 集群**，如 TKE （腾讯）、ACK（阿里巴巴云）、GKE（谷歌）、Microsoft Azure
- **自管理的 Kubernetes 集群**（例如使用 KubeSphere 或 Rancher 管理的 K8s 集群）
