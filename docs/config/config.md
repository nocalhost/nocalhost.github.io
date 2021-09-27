# Overview

## [Nocalhost 概述 —— 是什么，怎么配置，有哪些特性？](config-overview.md)

这里会介绍 Nocalhost 配置是什么、如何进行配置的修改、有哪些特性等介绍，如果你对 Nocalhost 配置**完全没有概念**，或者想要了解 Nocalhost 配置的结构、特性等，可以阅读本篇文章。

******

## [Nocalhost 提供了哪些配置？](config-spec.md)

开发配置定义的是进入**开发模式**的行为，如果想在进入**开发模式**时，**进行一些定制化的配置**，才需要进行配置。如果想要知道 Nocalhost 提供了哪些配置，可以进入这个小节的详情来进行阅读。

******

## [Nocalhost 支持哪些配置方式？](configure.md)

Nocalhost 支持多种方式来配置开发模式，为多种丰富的使用场景提供了支持。最常见的配置方式是在插件点击具体工作负载右键，选择 `DevConfig` 进入开发配置编辑界面。修改完毕后点击保存即可。


除此之外，Nocalhost 还支持将配置放置在**源码目录、configMap 、以及 annotation** 中。例如可以将 Nocalhost 配置流程化地配置在 CD 、或者配置在 helm chart、rawManifest 中，通过上述的几种配置方式，来避免重复配置、或者定制化配置等。


如果想了解 Nocalhost 配置的多种配置方式，可以点击这个小节的详情来进行阅读。
<br/>

******
## [Nocalhost 的 "部署配置"](config-deployment.md)

Nocalhost 拥有应用部署的功能，在 Nocalhost Server 版本下，这是一个高频功能。Nocalhost 提供了工作负载 **依赖控制、部署 env 注入**等功能。

:::tip 小提示

如果你不需要工作负载依赖控制、env 注入等功能，或拥有自己完善的部署方式，不需要阅读本小节。

:::

Nocalhost 支持 Helm、rawManifest 与 Kustomize 进行 K8s 应用的部署，同样支持 **configMap 、以及 annotation** 等多种配置方式。