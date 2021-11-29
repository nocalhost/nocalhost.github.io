---
title: DevMode(Replace)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

### Replace DevMode
Nocalhost 目前支持两种开发模式，`Replace DevMode` 和 `Duplicate DevMode`，本节主要介绍 `Replace DevMode` 的基本原理，关于 `Duplicate DevMode` 的介绍，详见：[`Duplicate DevMode`](develop-service-dup-en)。

在进入 `Replace DevMode` 时，Nocalhost 会对工作负载执行以下操作：<br></br><br></br>
**1.** 将副本数缩减为 1。开发应用程序时，只需要在一个容器里运行正在开发的应用程序，如果存在多个副本，我们通过`Service`访问该工作负载时，就无法控制流量只访问到我们正在开发的应用程序所运行的那个副本，所以 Nocalhost 需要先将工作负载的副本数缩减为1。<br></br>
**2.** 替换容器的镜像为开发镜像。生产环境运行的容器往往会使用很轻量级的镜像，镜像里仅包含运行业务程序所必须的组件，而缺少编译构建业务程序的相关工具(如 JDK)，所以在对某个工作负载进行开发的时候，Nocalhost 会将容器镜像替换成包含完整开发工具的开发镜像。<br></br>
**3.** 增加一个 sidecar 容器。为了将本地的源代码改动同步到容器中，需要在容器里运行一个文件同步服务器。为了使文件同步服务器进程和业务进程解耦，Nocalhost 将文件同步服务器运行在一个独立的 sidecar 容器中，该容器与业务容器挂载相同的同步目录，因此，同步到 sidecar 容器中的源代码在业务容器中也可以访问。<br></br>
**4.** 转发一个本地端口到文件同步服务器。文件同步服务器监听在容器里的某个端口，我们在本地无法直接访问，所以 Nocalhost 会把一个本地随机端口转发到容器里文件同步服务器监听的端口。<br></br>
**5.** 启动本地文件同步客户端。文件同步客户端启动后会通过上一步转发的本地随机端口和文件同步服务器建立通信，之后便会开始进行文件的同步。<br></br>
**6.** 打开远程终端。在容器替换成功之后，Nocalhost 会自动打开一个进入到远程容器的终端，通过该终端，我们可以把同步到容器里到源代码直接运行起来。<br></br>

如下图所示：
![图片](/img/develop-dup/replace-devmode.jpg)

需要注意的是，在进入开发模式以后，开发容器并不会运行原来的业务进程，此时集群中访问该工作负载的流量都将失败，我们需要在开发容器里把业务进程运行起来。由于 Nocalhost 会实时地把本地的源码改动同步到开发容器中，当我们在本地改完代码之后，在开发容器里将代码编译构建后运行起来，集群中便能看到改动已经生效，如下图：

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/opt/code-change2.gif')} />
  <figcaption>Coding in VS Code</figcaption>
</figure>




