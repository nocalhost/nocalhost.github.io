import useBaseUrl from '@docusaurus/useBaseUrl';

# Overview

在本文档中，我们将解释 Nocalhost Server 的核心概念，并阐明在此项目中广泛使用的一些技术术语。

## 概念

### 集群

**集群**是 Nocalhost 的一个概念，它管理运行开发环境中的应用程序的资源，通常对应着一个 Kubernetes 集群。Nocalhost 支持同时管理多个集群，这些集群可以是 GKE, Minikube and MicroK8s 等等。

在实际的开发过程中，用户不需要直接接触 Cluster 这一概念，而用户在 [DevSpace](#devspace)下的操作实际上都借助了 Cluster 的能力。

#### 集群管理

:::tip KubeConfig
如果你想管理一个集群，那么需要有一个带有集群管理员权限的 `KubeConfig`。
:::

Cluster一般和DevSpace一起使用，如果需要管理Cluster，可以参考[集群管理](./manage-cluster) 

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/server/cluster.png')} />
  <figcaption>Nocalhost 集群</figcaption>
</figure>

### 开发空间

**开发空间**是 Nocalhost 的一个概念，其代表由 Nocalhost 管理的一个预分配的云端开发的空间，开发者可以在 DevSpace 中随时部署，卸载，开发，调试应用。

DevSpace 之间是隔离的，开发者可以把自己的 DevSpace 共享给其他开发者，实现开发协作。因为 DevSpace 的隔离性，也可以被用作测试环境。

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/server/devspace-concept.png')} width="700"/>
  <figcaption>Nocalhost 开发空间</figcaption>
</figure>

#### 开发空间管理

如果需要管理开发空间，可以参考[管理开发空间](./manage-devspace) 

### 应用

**应用**是 Nocalhost 的一个概念，它主要用于管理您想用于本地开发的一组 manifest 文件。也就是说，这些 manifest 通常包含你的应用所依赖的所有 k8s 资源，如果可能，我们应该尽量保持它的最小化。

Nocalhost 支持三种类型的应用：

* Manifest
* Helm
* Kustomize

**应用**可以用来创建[开发空间](#devspace)，我们推荐直接使用IDE插件来部署你的应用，IDE插件工作在应用创建的开发空间上。 也就是说，在分配了一个开发空间后之后，开发者可以轻松地在 IDE 上进行开发。

分配一个 DevSpace 后，你会得到一个 `KubeConfig` 来访问这个 DevSpace，`nhctl` 或插件可以根据应用程序的 mianifest 文件和 `KubeConfig` 来部署应用程序。

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/server/manifest-and-kubeconfig.png')} width="700"/>
  <figcaption>Kubernetes 应用</figcaption>
</figure>

**开发空间** 其实可以近似看作 **Application** + **kubeconfig**：

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/server/application-and-space.png')} width="700"/>
  <figcaption>Nocalhost 开发空间</figcaption>
</figure>

#### 应用管理

如果需要管理应用，可以参考[应用管理](./manage-app)

### 服务

**服务** 与 kubernetes 的 Service 完全不同，**服务** 可以认为是对 Deployment 的增强。

- [阅读更多以了解如何配置应用程序部署](../config/config-deploy)
- [阅读更多以了解如何配置应用程序开发](../config/config-dev) 

:::caution 配置 Services
服务配置不是必需的，只有在必要时才需要。
:::

### User

**用户** 属于 Nocalhost 的独立概念，与 Kubernetes 中的 user **不同**。 当您使用 `Nocalhost Server` 和 Nocalhost 插件时，用户用于识别您的身份和对资源的访问控制。 

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/server/user-and-space.png')} width="800"/>
  <figcaption>Nocalhost 开发空间和用户</figcaption>
</figure>

Nocalhost 中存在两种**用户**类型：**普通用户**和**系统管理员**

### 普通用户

- 只能在 Nocalhost 编辑器插件中进行登录，用户可以在自己的 DevSpace 下进行开发，这些 DevSpace 都由系统管理员进行创建。
- 只能看到属于自己的 DevSpace，并且拥有这些 DevSpace 下的所有权限，例如对 DevSpace 下相应 Application 的 install 和 unInstall（部署与销毁）、可以进入开发模式、进行端口转发等。
- 无法访问 Nocalhost Server，也无法删除这个 DevSpace 本身，或者与这个 DevSpace 解除关系，这很像 Kubernetes 某个 namespace 下的管理员权限

### 系统管理员

- 系统管理员拥有访问和管理 Nocalhost Server 中所有资源的权限，如**应用管理**、**集群管理**等操作。
- 系统管理员也拥有普通用户所有的权限，如可以在 Nocalhost 插件进行登录，获取自己的 DevSpace 列表，进行开发。

#### 管理用户

如果需要管理用户，可以参考[用户管理](./manage-user) 

## How It Works

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/server/nh-architecture.jpeg')} />
  <figcaption>Nocalhost overall working diagram</figcaption>
</figure>

### IDE Plugin


### `nhctl`

### Nocalhost-Web

### Nocalhost-API

### Nocalhost-Dep

