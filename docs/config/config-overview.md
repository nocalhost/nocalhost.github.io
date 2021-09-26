---
title: Overview
---

在里面会通过用户指南，入门文档和各种最佳实践来介绍和说明 Nocalhost 的配置，你可以根据你想了解的内容选择不同章节的进行阅读。

## Nocalhost 配置的结构

```yaml
configProperties:

  # config file version
  # type: string
  # default value: null
  # required
  version: v2

  # env file name, substitution variable for this file
  # type: string
  # default value: null
  # optional
  envFile: env.dev

application:
  ...

```

## Nocalhost 配置提示

- 如果你只是想使用开发模式，除了选择开发镜像外，不需要对 Nocalhost 进行任何配置。请查阅[ Nocalhost 零配置](#)
- Nocalhost 的配置包括了[开发配置](#)和[部署配置](#)，你可以根据实际的需求进行不同的配置。
- Nocalhost 的开发配置并非实时生效，需要在保存过后，重新进入开发模式 来使其生效。

## Nocalhost 配置简介

Nocalhost 配置大体可分为两部分，一部分是开发配置，另一部分是部署配置。

 - [部署配置](#)，用于定义如何进行 K8s 应用部署，包括服务依赖控制，变量注入等。
 - [开发配置](#)，围绕 `开发模式` 来进行，例如使用什么镜像来进入`开发模式`，是否需要开启持久化来保存开发容器的内容，将哪些文件同步到开发容器中，如何一键调试、一键运行容器内的服务等。

 
