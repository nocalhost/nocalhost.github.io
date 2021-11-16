---
title: DevMode(Replace)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

### Replace DevMode
Nocalhost 目前支持两种开发模式，`Replace DevMode` 和 `Duplicate DevMode`，本节主要介绍 `Replace DevMode` 的基本原理，关于 `Duplicate DevMode` 的介绍，详见：[`Duplicate DevMode`](develop-service-dup-en)。

生产环境运行的容器往往会使用很轻量级的镜像，镜像里仅包含运行业务程序所必须的组件，而缺少编译构建业务程序的相关工具(如 JDK)，所以在使用 `Replace DevMode` 对某个工作负载进行开发的时候，Nocalhost 会将容器镜像替换成包含完整开发工具的开发镜像，如下图所示：
![图片](/img/develop-dup/replace-devmode.jpg)

在进入开发模式以后，开发容器并不会运行原来的业务进程，此时集群中访问该工作负载的流量都将失败，我们需要在开发容器里把业务进程运行起来。由于 Nocalhost 会实时地把本地的源码改动同步到开发容器中，当我们在本地改完代码之后，在开发容器里将代码编译构建后运行起来，集群中便能看到改动已经生效，如下图：

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/opt/code-change2.gif')} />
  <figcaption>Coding in VS Code</figcaption>
</figure>




