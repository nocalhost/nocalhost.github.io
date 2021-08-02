在本文档中，我们将解释 Nocalhost 的核心概念，并阐明在此项目中广泛使用的一些技术术语。

## Cluster

**Cluster（集群）** 是 Nocalhost 的一个概念，它管理运行开发环境中的应用程序的资源，通常对应着一个 Kubernetes 集群。Nocalhost 支持同时管理多个 **Cluster**，这些集群可以是 GKE, minikube and microK8s 等等。

在实际的开发过程中，用户不需要直接接触 Cluster 这一概念，而用户在 [DevSpace](#devspace)下的操作实际上都借助了 Cluster 的能力。

### 管理 Cluster 

Cluster 一般与 DevSpace 配合使用，如果需要管理 Cluster，您需要先安装并配置 Nocalhost Server，可以查阅 Nocalhost Server 的 [快速开始指南](../server/quick-start) 和 [使用 Nocalhost Server](../server/using-server)。

!!!note "管理 Cluster"
    如果要管理一个 Cluster，需要维持一份拥有这个集群管理员权限的 kubeConfig 才能在 Nocalhost 中进行管理。

[![](../assets/images/concept/cluster.png)](../assets/images/concept/cluster.png)

## DevSpace

**DevSpace（开发空间）** 是 Nocalhost 的一个概念，其代表由 Nocalhost 管理的一个预分配的云端开发的空间，开发者可以在 DevSpace 中随时部署，卸载，开发，调试应用。

DevSpace 之间是隔离的，开发者可以把自己的 DevSpace 共享给其他开发者，实现开发协作。因为 DevSpace 的隔离性，也可以被用作测试环境。

[![](../assets/images/concept/devspace-concept.png)](../assets/images/concept/devspace-concept.png)

当前，Nocalhost 支持基于 Kubernetes 的云原生应用开发，在 Kubernetes 体系下， DevSpace 由一个 Kubernetes Namespace 和 对应 Namespace 的 ServiceAccount 组成。

### 管理 DevSpace

如果需要管理 DevSpace，您需要先安装并配置 Nocalhost Server，可以查阅 Nocalhost Server 的 [快速开始指南](../server/quick-start) 和 [使用 Nocalhost Server](../server/using-server)。

## Application（应用）

**Application** 是 Nocalhost 的一个概念，它主要用于管理您想用于本地开发的一组 manifest 文件。也就是说，这些 manifest 通常包含你的应用所依赖的所有 k8s 资源，如果可能，我们应该尽量保持它的最小化。

Nocalhost 支持三种类型的应用：

* Manifest
* Helm
* Kustomize

[![](../assets/images/concept/manifest-and-kubeconfig.png)](../assets/images/concept/manifest-and-kubeconfig.png)

**Application** 也是这样被使用的，**DevSpace** 其实可以近似看作 **Application** + **kubeconfig**：

[![](../assets/images/concept/application-and-space.png)](../assets/images/concept/application-and-space.png)

### Application 管理

如果需要管理 Application，您需要先安装并配置 Nocalhost Server，可以查阅 Nocalhost Server 的 [快速开始指南](../server/quick-start) 和 [使用 Nocalhost Server](../server/using-server)。

### Application 配置

可参考 [Application 最佳实践](./best-practice/application-best.md) 。

## Service

**Service** 与 kubernetes 的 Service 完全不同，**Service** 可以认为是对 Deployment 的增强，对应应用内的一个具体服务，**Service** 目前支持两种功能：

- 对 Nocalhost Dev-Mode 的配置，例如进入开发容器后的工作空间是哪个，将哪些文件同步到开发容器中，等。
- 支持基于依赖关系的 deployment 启动顺序控制

### 配置 Service

可参考 [Service 最佳实践](./zh/best-practice/service-best) 。

!!!note
    Service 配置并不是必须的！完全不进行配置，也可以照常创建 **Application**、**Cluster** 等等，**Service** 只在你有需要时才需要配置。

## User

当你使用 Nocalhost Server，以及 Nocalhost 编辑器插件时，**User** 用于标明你的身份，以及对资源访问的控制。这个 **User** 属于 Nocalhost 的独立概念，与 Kubernetes 本身并**无关联**。

Nocalhost 为每个 User 创建和一个 DevSpace 相对应的 namespace 的 kubeconfig，用于访问此 namespace 下的所有资源

[![](../assets/images/concept/user-and-space.png)](../assets/images/concept/user-and-space.png)

Nocalhost 中存在两种  **User** 类型：**普通用户**和**系统管理员**

### 普通用户

- 只能在 Nocalhost 编辑器插件中进行登录，用户可以在自己的 DevSpace 下进行开发，这些 DevSpace 都由系统管理员进行创建。

- 只能看到属于自己的 DevSpace，并且拥有这些 DevSpace 下的所有权限，例如对 DevSpace 下相应 Application 的 install 和 unInstall（部署与销毁）、可以进入开发模式、进行端口转发等。

- 无法访问 Nocalhost Server，也无法删除这个 DevSpace 本身，或者与这个 DevSpace 解除关系，这很像 Kubernetes 某个 namespace 下的管理员权限

### 系统管理员

- 系统管理员拥有访问和管理 Nocalhost Server 中所有资源的权限，如创建 **Application**、创建 **Cluster**、创建 **User** 和创建 **DevSpace** 等，例如初始的 **admin** 用户。

- 系统管理员也拥有普通用户所有的权限，如可以在 Nocalhost 插件进行登录，获取自己的 DevSpace 列表，进行开发。

### 管理 User

如果需要管理 User，您需要先安装并配置 Nocalhost Server，可以查阅 Nocalhost Server 的 [快速开始指南](../server/quick-start) 和 [使用 Nocalhost Server](../server/using-server)。

## DevMode

**DevMode（开发模式）** 是指开发者在使用 Nocalhost 进行微服务开发时，对应微服务工作负载的一个状态。在此状态下，工作负载会被转成成一种可方便支持开发者开发调试程序的模式。

当前 Nocalhost 基于 Kubernetes 的开发支持中，DevMode 的主要变化为如下：

- 工作负载的副本数量会被调整为 1，方便开发
- Pod 的健康检查探针会被禁用（方便开发过程中不断尝试重启进程进行调试）
- Pod 的容器会被替换成 [DevContainer](#devcontainer)
- SecurityContext 会被禁用以方便开发
- Pod 会被注入一个 Nocalhost-Sidecar 容器以支持远程文件同步等
- Pod 会被增加一个 Volume 以支持 DevContainer 和 Nocalhost-Sidecar 间共享文件

## DevContainer

**DevContainer（开发容器）** 是一个用户支撑开发、调试某个特定微服务组件的基础环境，此环境被封装成一个容器，内常含有开发该微服务组件的全套 SDK，开发调试工具，以及其他辅助工具。在服务的工作负载被切换到 [DevMode](#devmode) 的时候，Nocalhost 会使用 DevContainer 替换原本工作负载的容器。

**DevContainer** 的生命周期贯穿整个开发和调试过程。 它在 DevMode 开始时创建。在 DevMode 中，本地源代码更改将自动同步到 DevContainer，并且可以直接编译并部署在 DevContainer 容器中。 

### 配置 DevContainer

可参考  [DevContainer 最佳实践](./best-practice/devcontainer-best)。
