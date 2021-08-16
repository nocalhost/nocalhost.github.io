import useBaseUrl from '@docusaurus/useBaseUrl';

# 什么是 Nocalhost?

Nocalhost 是一款开源的基于 IDE 的云原生应用开发工具:

- 直接在 Kubernetes 集群中**构建、测试和调试应用程序**
- 提供易于使用的 IDE 插件（支持 VS Code 和 JetBrains），即使在 Kubernetes 集群中进行开发和调试，Nocalhost 保持本地开发一样的体验
- **使用即时文件同步进行开发：** 即时将您的代码更改同步到远端容器，而无需重建映像或重新启动容器。

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/intro/coding-in-cluster.gif')} width="800"/>
</figure>

## Nocalhost 是如何工作的？

Nocalhost 由单个二进制 CLI 和 IDE 插件组成。 理想情况下，您可以直接将它与您熟悉的 IDE 一起使用。 Nocalhost 不需要服务器端组件，因为它通过 KubeConfig 直接与您的 Kubernetes 集群通信，就像 kubectl 一样。

## 为什么使用 Nocalhost？

尽管 Kubernetes 在管理基础设施方面做得非常出色，但构建 Kubernetes 应用仍然很困难，对于大型开发团队，该问题尤为严重。 Nocalhost 为开发者提供了最高效的方式来构建云原生应用程序。

### 在 Kubernetes 中编码

Nocalhost 可以与您熟悉的 IDE 一起使用，能一键连接到任何 Kubernetes 集群，享受集群内编码，摆脱烦人的本地环境配置。

### 实时文件同步

Nocalhost 可以在您每次进行更改时自动将代码同步到容器。 这样，免去了提交、构建和推送等步骤，极大的提速开发反馈循环。 因此能实现代码更改，秒级生效。

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/intro/dev-circle-cn.jpg')} width="700"/>
</figure>

### 为合作而生

Nocalhost 可帮助您的团队标准化开发工作流程，而无需团队中的每个人都成为 Kubernetes 专家。

- 您团队中的 **Kubernetes 和 DevOps 专家**可以通过 Nocalhost Server 配置和管理集群、应用程序、开发空间和用户，[阅读有关 Nocalhost Server 的更多信息](./server/server-overview)
- 您团队中的**开发人员** 无需成为 Kubernetes 专家，即可轻松查看并在 Kubernetes 集群中的应用，开始编码和调试

### 兼容性

Nocalhost 和不同的 Kubernetes 发行版一起测试，包括：

- **本地 Kubernetes 集群**，如 minikube、Microk8s、K3s 和 Docker Desktop
- **托管 Kubernetes 集群**，如 TKE (Tencent)、ACK (Alibaba Cloud)、GKE (Google)、Microsoft Azure
- **自我管理的 Kubernetes 集群**（例如使用 KubeSphere 或 Rancher 创建）
