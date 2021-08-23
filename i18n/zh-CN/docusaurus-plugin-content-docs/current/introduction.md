---
title: 简介
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 什么是 Nocalhost?

Nocalhost 是一款开源的基于 IDE 的云原生应用开发工具:

- **直接在 Kubernetes 集群中构建、测试和调试应用程序**
- 提供易于使用的 IDE 插件（支持 VS Code 和 JetBrains），即使在 Kubernetes 集群中进行开发和调试，Nocalhost 保持本地开发一样的体验
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

Building Kubernetes applications is often difficult, and it is even harder for large teams of developers. Nocalhost provides the most productive way to build cloud-native applications. Nocalhost provides the most productive way to build cloud-native applications.

The advantages of using Nocalhost to develop directly inside Kubernetes are:

- **Production environment similarity** - Dev environment is very similar to your production environment, giving you much more confidence that everything will work in the production environment when new features are released.
- **Speed up feedback loop** - Via file synchronization, your code changes can take effect immediately in the container without rebuilding the image or redeploying the container.
- **Flexible scalability** - Developers do not need to worry about insufficient local resources.
- **Reduce Cost** - Use resources more efficiently and reduce IT facility costs

Develop in Kubernetes cluster can be useful in the following cases:

- Limitations of local resources
- Want to test your application in a production-like environment
- Want to debug issues that are hard to reproduce on your local machine
- Applications need to access cluster-internal services (e.g. Cluster DNS)

## Key Features

### Coding in Kubernetes

Nocalhost is preconfigured to work with your favourite IDEs, you can connect to any Kubernetes cluster with one click, and enjoying the coding in-cluster, get rid of the pesky local environment configurations.

### Instant File Synchronization

Nocalhost can automatically synchronize the code to the container every time you make a change. This way, eliminate the submit, building and pushing cycles, greatly speed up the feedback loop of development. So you see updates in under a second. This way, eliminate the submit, building and pushing cycles, greatly speed up the feedback loop of development. So you see updates in under a second.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/intro/dev-circle-cn.jpg')} width="700"/>
</figure>

### Made For Collaboration

Nocalhost helps your team to standardize development workflows without requiring everyone on your team to become a Kubernetes expert.

- **Kubernetes and DevOps expert** on your team can configure and manager Cluster, Applications, DevSpace and Users by Nocalhost Server, Read more about [Nocalhost Server](./server/server-overview)
- **Developers** on your team can easily check out the project and start coding and debugging in the Kubernetes cluster without becoming a Kubernetes expert.

### Compatibility

Nocalhost is battle-tested with many Kubernetes distributions including:

- **Local Kubernetes clusters** like minikube, Microk8s, K3s and Docker Desktop
- **Managed Kubernetes clusters** like TKE (Tencent), ACK (Alibaba Cloud), GKE (Google), Microsoft Azure
- **Self-managed Kubernetes cluster** (e.g. created with KubeSphere or Rancher)
