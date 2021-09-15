---
title: Deploy Config
---
[Overview](config.md) / [Deploy Config](config-deployment.md)
******

# Nocalhost 的 "部署配置"

这里会介绍如何进行 Nocalhost 的部署配置。

Nocalhost 支持 Helm、RawManifest 与 Kustomize 进行 K8s 应用的部署，提供了控制工作负载启动时的依赖顺序、部署 env 注入、hook 等功能，并且，同样支持 configMap 、以及 annotation 等多种配置方式。

:::info PRE-REQUIRE
在阅读本文章之前，请确保你已经知晓如何正确进行 Nocalhost 配置，如果还不知如何进行配置，请阅读[Nocalhost 概述 —— 是什么，怎么配置，有哪些特性？](config-overview.md)来进行了解。
:::
******

## [部署配置入门 ——— Nocalhost 基础部署配置](config-deployment-quickstart.md)

上面我们已经介绍了部署配置能提供的功能，这个小节将通过几个小案例，来介绍如何从零开始进行最基础的 Nocalhost 部署配置、安装等。

<br/>

******

## [Nocalhost 提供了哪些部署配置？](config-deployment-spec.md)

在了解了 Nocalhost 最基础的部署配置规范后，这个小节将介绍具体有哪些部署配置，包括控制工作负载启动时的依赖顺序，注入 env 、hook 等功能。

<br/>

******

## [使用 ConfigMap 或 Annotations 来声明部署配置](config-deployment-advance.md)

