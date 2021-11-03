---
title: What is Nocalhost Config?
---
[Overview](config-en.md) / [What is Nocalhost Config?](config-overview-en.md)
<br/>

******

# Nocalhost 概述 —— 是什么，怎么配置，有哪些特性？

这里会介绍 Nocalhost 配置是什么、如何进行配置的修改、有哪些特性等介绍，如果你对 Nocalhost 配置完全没有概念，或者想要了解 Nocalhost 配置的结构、特性等，可以阅读本篇文章。

<br/>

******

## Nocalhost 配置简介

开发配置是围绕 `开发模式` 来进行的，例如使用什么镜像来进入`开发模式`，是否需要开启持久化来保存开发容器的内容，将哪些文件同步到开发容器中，如何一键调试、一键运行容器内的服务等。配置了正确且合适的开发配置后，可以在使用 Nocalhost `开发模式` 时更加得心应手。
<br/>

总而言之，**开发配置是为了更好的定义 `开发模式 ` 的行为**。

:::tip 关于开发配置与部署配置
 Nocalhost 配置大体可分为两部分，一部分是开发配置，另一部分是部署配置。

 - 部署配置，用于定义如何进行 K8s 应用部署，包括服务依赖控制，变量注入等。
 - 开发配置，围绕 `开发模式` 来进行，例如使用什么镜像来进入`开发模式`，是否需要开启持久化来保存开发容器的内容，将哪些文件同步到开发容器中，如何一键调试、一键运行容器内的服务等。
:::
<br/>
通常，我们只需要关心**开发配置**。在配置文档的说明中，**如果没有特殊说明，我们提到的配置，指的都是开发配置**。
   
<br/>

******

## 查看与保存配置
### 配置的查看

如果你从未进行过某个服务的 Nocalhost 的配置，**右键点击它选择 `Dev Config`**，你将看到下面的这些配置，它们都为空，这些都是 Nocalhost **开发模式**中比较常用的配置。

:::tip 配置并不是必须的
不进行任何配置也可以正常使用 Nocalhost 开发模式
:::

```yaml
name: coredns
serviceType: deployment
containers:
  - name: ""
    dev:
        gitUrl: ""
        image: ""
        shell: ""
        workDir: /home/nocalhost-dev
        storageClass: ""
        resources: null
        persistentVolumeDirs: []
        command: null
        debug: null
        sync: null
        env: []
        portForward: []
```
<br/>


### 配置的更新

我们可以随便做一点修改，在插件端 `Comm`+`S`  或者  `Ctrl`+`S` 来进行保存。

<br/>

******

## Nocalhost 配置的结构
配置顶层的 `name` 与  `serviceType`  表明这是属于  `coredns`  这个 `deployment` 的配置。配置的内容集中在 `containers` 中，这是一个数组，表明可以为**单个工作负载下**的**多个容器**分别定制不同的配置。
<br/>

## 为容器正确进行配置

### 多容器与单容器工作负载

##### 1)  如果你的工作负载只有一个容器，可以不声明容器的名字，例如：

```yaml
name: coredns
serviceType: deployment
containers:
  - name: ""
    dev:
        gitUrl: "git@example.git"
        image: "example:latest"
        shell: "zsh"
```

或：

```yaml
name: coredns
serviceType: deployment
containers:
  - dev:
        gitUrl: "git@example.git"
        image: "example:latest"
        shell: "zsh"
```
:::danger container 名字要配置正确
如果你在 Nocalhost 配置中写明了错误的 `containers.[].name`，配置可能会不生效。
:::

<br/>

##### 2)  如果你的工作负载有多个容器，必须在 `containers.[].name`  填上对应容器的名字以区分不同的容器。

例如你的工作负载中有 `ContainerA`，`ContainerB` 两个容器（注意， `ContainerA`，`ContainerB` 只是一个举例，具体的容器名需要根据你实际的工作负载），那么则需要在 Nocalhost 中填上对应容器名字以区分：

```yaml
name: coredns
serviceType: deployment
containers:

  - name: "ContainerA"
    dev:
        image: "example:latest"
        ..........(省略)
        
  - name: "ContainerB"
    dev:
        image: "foo:bar"
        ..........(省略)
```



当然，如果你只需要开发 `ContainerB` 容器，可以仅对它进行配置，例如：

```yaml
name: coredns
serviceType: deployment
containers:
        
  - name: "ContainerB"
    dev:
        image: ""
        ..........(省略)
```

<br/>

### 各个配置项如何进行配置

这是一个需要长篇大论进行说明的内容，我们这里先以一个简单的例子为例，可以快速入门 Nocalhost 配置。

:::info 需要一个应用来进行操作？
如果没有现成的工作负载可以操作可以调用下面这个命令来安装一个示例应用：

```shell
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.10/samples/bookinfo/platform/kube/bookinfo.yaml
```
:::

<br/>

当我们右键一个从未配置过的服务，例如 details-v1 ，点击 `DevConfig`，我们能看到一个空白的模板。我们随便修改一点，例如为开发容器增加额外的 env（开发容器会从原容器继承环境变量）:
```yaml
name: details-v1
serviceType: deployment
containers:
  - name: details
    dev:
      env:
        - name: nocalhost
          value: example
```

`Comm`+`S`  或者  `Ctrl`+`S` 来进行保存，然后进入开发模式。由于只是演示配置，这里随便选一个本地目录，目录内容将同步到开发容器中，随便选择一个开发镜像。

在开发模式开启后的终端输入 `env | grep nocalhost`，我们可以看到，环境变量已经被正确注入。
```shell
>  env | grep nocalhost
PWD=/home/nocalhost-dev
OLDPWD=/home/nocalhost-dev
nocalhost=example
```

:::tip 更多
想了解更多的配置项及其作用，可以查看 [Nocalhost 提供了哪些配置？](config-spec-en.md)
:::

<br/>

******

## 开发配置的特性

除了开发配置怎么配置以外，存在一些设计 Nocalhost 配置的设计带来的特性，了解这些特性将帮助你更好的使用 Nocalhost。


### 生效时机

Nocalhost 的开发配置并非实时生效，需要在**保存过后**，**重新进入开发模式** 来使其生效。

<br/>

### 配置的生命周期

Nocalhost 会在每个命名空间下创建一个前缀为 `dev.nocalhost.application.` 的 `secret` 作为 “微型数据库”，配置将会被保存在这个 `secret` 中。



在这个 `secret` 被销毁之前，数据都将一直保留。
:::info HELM 应用
如果你的应用是一个 helm 应用，例如它的 `Release.Name` 叫 `bookinfo` 。那么这个 `secret` 将命名为 `dev.nocalhost.application.bookinfo`，且当 `bookinfo` 被卸载后，保存数据的 `secret` 将会被销毁
:::

<br/>

### 配置的可见性

从 Nocalhost 配置的存储设计中不难看出，Nocalhost 配置是 **共享** 的。具体则是，在同一个集群的 同一个 `namespace` 下，针对同一个工作负载的配置，在任意一台电脑上都可见，且可修改（需拥有 RBAC 的 `secret` 的修改权限），获取到的配置都是同一个副本。