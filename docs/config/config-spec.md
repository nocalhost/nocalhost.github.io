---
title: Spec
---
[Overview](config.md) / [Spec](config-spec.md)
******

# Nocalhost 提供了哪些配置？

:::info PRE-REQUIRE

在阅读本文章之前，请确保你已经知晓如何正确进行 Nocalhost 配置，如果还不知如何进行配置，请阅读[Nocalhost 概述 —— 是什么，怎么配置，有哪些特性？](config-overview.md)来进行了解。

:::

Nocalhost 配置大体可分为三类。

<br/>

******
## [开发容器配置](config-dev-container.md)

第一类为开发容器本身的配置，包括：

 - 开发镜像配置
 - 开发容器默认 shell
 - 开发容器持久化
 - 开发容器的资源的申请与限制

:::tip Quickview

```yaml
name: nocalhost-api
serviceType: deployment
containers:
  - name: nocalhost-api
    dev:
      
      image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/golang:zsh
      shell: /bin/zsh
      persistentVolumeDirs:
        - path: /the/path/you/want/to/persistent/in/container
          capacity: 10Gi
        - path: /other
          capacity: 10Gi
      storageClass: cbs
      resources:
        limits:
          memory: 4Gi
          cpu: "1"
        requests:
          memory: 2Gi
          cpu: "0.5"
```

:::



<br/>

******
## [增强配置](config-enhance.md)

第二类为增强配置，与开发容器本身无关，包括：

 - 容器 git 源码目录 
 - 是否自动在进入开发模式后自动开启端口转发
 - 文件同步如何配置，及其同步 pattern 忽略 pattern

:::tip Quickview

```yaml
name: nocalhost-api
serviceType: deployment
containers:
  - name: nocalhost-api
    dev:
      
      gitUrl: git@github.com:nocalhost/nocalhost.git
      portForward:
        - 8080:80
        - 3306:3306
      sync:
        type: send
        filePattern:
          - .
        ignoreFilePattern:
          - ".git"
          - ".github"
          - ".vscode"
          - "node_modules"
```

:::

<br/>

******
## [一键开发、一键调试、hotReload 配置](config-develop.md)

第三类为面向开发过程的配置，包括：

 - 一键运行
 - 一键调试
 - HotReload

:::tip Quickview

```yaml
name: example
serviceType: deployment
containers:
  - name: you-container
    dev:
      
      command:
        run: [ "./gradlew", "bootRun" ]
        debug: [ "./gradlew", "bootRun", "--debug-jvm" ]
      debug:
        remoteDebugPort: 5005
      hotReload: true
```

:::

