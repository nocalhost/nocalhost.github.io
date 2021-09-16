---
title: Configure
---

import useBaseUrl from '@docusaurus/useBaseUrl';

[Overview](config.md) / [Configure](configure.md)
******
# Nocalhost 的配置方式

除了将配置放置在插件的右键 `DevConfig`  中， Nocalhost 还支持将配置放置在源码目录、configMap 、以及 annotation 中。例如可以将 Nocalhost 配置流程化地配置在 CD 、或者配置在 helm chart、rawManifest 中，通过上述的几种配置方式，来避免重复配置。

:::info PRE-REQUIRE
除了零配置相关内容，请确保你已经知晓如何正确进行 Nocalhost 配置，如果还不知如何进行配置，请阅读[Nocalhost 概述 —— 是什么，怎么配置，有哪些特性？](config-overview.md)来进行了解。
:::
<br/>

******

## 零配置的支持

零配置即不进行任何 Nocalhost 配置，直接进入开发模式，唯一需要的是选择或键入一个开发镜像。

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/config/dev-without-config.gif')} />
  <figcaption>⭐️ &nbsp; Start DevMode without any configuration &nbsp; ⭐️ </figcaption>
</figure>

### 零配置下的行为预期
:::info 为什么要关心行为预期
零配置情况下，往往不需要去关心 Nocalhost 做了哪些行为。但如果以下行为不符合你的预期，就需要进行 Nocalhost 配置来进行定制了。
:::

<br/>

- 使用容器内的 `/home/nocalhost-dev`  作为文件同步的**目标目录**。
- 使用以下顺序顺延来尝试进入开发容器，zsh、bash、sh。
- 不启用持久化，你在开发容器内产生的本地数据将在容器关闭或重启后丢失。
- 无法使用一键调试与一键 Debug
- 同步所选同步目录的所有内容到容器内





******

## 将配置放置在源码目录中

Nocalhost 支持将配置放置在源码目录中，由有经验的开发者将配置固化在源码目录中，便于团队内的其他开发人员共享这些配置。
<br/>

### 如何将配置固化到源码中

你可以先在具体工作负载右键 `DevConfig` 配置好确保可用后，将其直接复制，如：

```yaml
name: nocalhost-api
serviceType: deployment
containers:
  - name: nocalhost-api
    dev:
      image: nocalhost-docker.pkg.coding.net/nocalhost/dev-images/golang:zsh
      env:
        - name: NOCALHOST_INJECT_DEV_ENV
          value: WHATEVER
```



在相应的源码目录下，创建 `.nocalhost` 目录，再在这个目录下创建 `config.yaml`，将复制内容保存进去即可。
<br/>

### 配置生效了吗？

重新右键这个服务，点击 `DevConfig` 就会发现，配置已从本地目录读取，并在最上方看到类似提示，它会提示你这个配置是一个本地文件的副本：

```yaml
# Tips: This configuration is a in-memory replica of local file: 
# 
# '/Users/anur/GolandProjects/nocalhost/.nocalhost/config.yaml'
# 
# You should modify your configuration in local file, and the modification will
# take effect immediately. (Dev modification will take effect the next time you enter the DevMode)
#
# In addition, if you want to config multi service in same config.yaml, or use
# the Server-version of Nocalhost, you can also configure under the definition 
# of the application, such as:
# https://github.com/nocalhost/bookinfo/blob/main/.nocalhost/config.yaml
# 
```
<br/>

### Q&A

:::tip 忘记具体服务关联的本地目录是哪一个了怎么办？
右键具体服务点击 Open Project 可以打开关联过的目录，或点击 Associate Local DIR 重新关联某个新目录。
:::

<br/>

:::tip 我的多个服务都放置在同一个源码中怎么办？
可以同时配置多个服务，只需要将某个服务的配置内容增加一个层级，并将其变成数组即可：

```yaml
- name: nocalhost-api
  serviceType: deployment
  containers:
    - name: nocalhost-api
      dev:
        image: nocalhost-docker.pkg.coding.net/nocalhost/dev-images/golang:zsh
        env:
          - name: NOCALHOST_INJECT_DEV_ENV
            value: WHATEVER

- name: nocalhost-web
  serviceType: deployment
  containers:
    - name: nocalhost-web
      dev:
        image: nocalhost-docker.pkg.coding.net/nocalhost/dev-images/golang:zsh
```

:::

******

## 将配置放置在 Configmap 中

Nocalhost 支持将配置放置在 Configmap 中，这样做利于与环境做定制化关联。例如，在测试环境的部署脚本或 CD 中，定制化的写入某些配置等。
<br/>

### 如何配置到 Configmap 中

我们来看一下，这是一段十分通用的 Nocalhost 配置 helm 模板，当然，你不一定要使用 helm，这里只是为了便于讲解。

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: "dev.nocalhost.config.{{ .Release.Name }}"
  labels:
    dep-management: nocalhost
  annotations:
    "helm.sh/hook": pre-install
data:
  config: |-
    {{ .Files.Get .Values.nocalhost.config.path | nindent 4 }}
```
<br/>

:::tip `{{ .Release.Name }}` 是什么？

我们可以看到这个 configmap 中，有两个内容是通过占位符的方式引入的，第一个是第四行的 `{{ .Release.Name }}`，这是应用的名字，如果你使用 Helm 或者 Nocalhost 进行应用安装，这里需要填入对应的应用名字，否则则固定写死 `default.application`。

:::

<br/>

:::tip `{{ .Files.Get .Values.nocalhost.config.path | nindent 4 }}` 是什么？

这部分实际上就是 Nocalhost config 该填入的位置，主要前面要四个缩进。

:::

<br/>

了解了上面的占位符所对应的内容后，实际的 configmap 应为如下格式：

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: "dev.nocalhost.config.default.application"
  labels:
    dep-management: nocalhost
  annotations:
    "helm.sh/hook": pre-install
data:
  config: |-
    - name: nocalhost-api
      serviceType: deployment
      containers:
        - name: nocalhost-api
          dev:
            image: nocalhost-docker.pkg.coding.net/nocalhost/dev-images/golang:zsh
            env:
              - name: NOCALHOST_INJECT_DEV_ENV
                value: WHATEVER

    - name: nocalhost-web
      serviceType: deployment
      containers:
        - name: nocalhost-web
          dev:
            image: nocalhost-docker.pkg.coding.net/nocalhost/dev-images/golang:zsh
```
<br/>

### Configmap 配置的注意事项

:::danger 注意
1. 命名规则，它的命名规则必须是 dev.nocalhost.config.${appName}，也就是 `name: "dev.nocalhost.config.{{ .Release.Name }}"`
2. 标签，它需要有一个标签键值对，固定写死为 `dep-management: nocalhost`
3. config 以文本块的方式放置在 data.config 下，注意配置整体缩进。
:::

<br/>

### 配置生效了吗？

当配置好上述 Configmap 后，我们可以再次右键这个服务，选择 `DevConfig`，如果看到以下提示，提示配置是 Configmap 的一个副本，则代表配置已经生效：

```yaml
# Tips: This configuration is a in-memory replica of configmap: 
# 
# 'dev.nocalhost.config.default.application'
# 
# You should modify your configuration in configmap, and the modification will
# take effect immediately. (Dev modification will take effect the next time you enter the DevMode)
# 
```
<br/>

******

## 将配置放置在 Annotations 中

Nocalhost 同样支持将配置放置在 Annotations 中，与 Configmap 配置的出发点基本一致。
<br/>

### 如何配置到 Annotations 中
<br/>

同样，我们以一段 helm 模板来进行讲解，它会利于讲解哪些值是应该被定制化的，以及它的格式要求如何等。

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nocalhost-api
  annotations:
    dev.nocalhost: |-
      {{ .Files.Get .Values.nocalhost.annotations.path.authors | nindent 6 }}
```



我们发现 annotations 的配置非常简单，**它只需要声明一个 annotation， key 固定为 `dev.nocalhost`，值为一个文本块，且需要固定 6 个缩进。**



实际配置因为：

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nocalhost-api
  annotations:
    dev.nocalhost: |-
      name: nocalhost-api
      serviceType: deployment
      containers:
        - name: nocalhost-api
          dev:
            image: nocalhost-docker.pkg.coding.net/nocalhost/dev-images/golang:zsh
            env:
              - name: NOCALHOST_INJECT_DEV_ENV
                value: WHATEVER
```

<br/>

由于一个工作负载下，不会存在多个配置，所以这里不需要声明成数组（也支持声明成数组），且配置所绑定的工作负载已经固定（不管是 Deployment、StatefulSet、DaemonSet 还是什么其他的），所以不需要申明其名字与类型，如：

```
apiVersion: apps/v1
kind: Deployment
  metadata:  
  name: nocalhost-api
  annotations:    
    dev.nocalhost: |-
      containers:        
        - name: nocalhost-api          
        dev:            image: nocalhost-docker.pkg.coding.net/nocalhost/dev-images/golang:zsh            env:              - name: NOCALHOST_INJECT_DEV_ENV                value: WHATEVER
```
<br/>

### Annotations 配置的注意事项

:::danger
key 必须是 `dev.nocalhost`，值则为 `Nocalhost Config` 的文本块，注意整体缩进。
:::

<br/>

### 配置生效了吗？

当配置好上述 Annotations 后，我们可以再次右键这个服务，选择 `DevConfig`，如果看到以下提示，则代表配置已经生效。

```yaml
# Tips: This configuration is a in-memory replica of annotation: 
# 
# annotations:
#   dev.nocalhost: |
#     [Your Config]
# 
# You should modify your configuration in resource's annotation', and the modification will
# take effect immediately. (Dev modification will take effect the next time you enter the DevMode)
# 
```
<br/>

*****

## 使用本地、Configmap、Annotations 配置的特性
<br/>

### 配置的粒度与优先级

Nocalhost 配置支持 “混搭”，例如拥有十个服务，可以其中三个用本地配置，三个用 Configmap 配置，三个使用 Annotations 配置，剩下一个零配置。

:::info 如果对同一个服务同时配置了多种配置方式，优先级如下：

本地配置 > Annotations > Configmap > 直接配置在 DevConfig 中

:::

<br/>

### 配置的读取时机

在使用 Nocalhost 配置 之前，Nocalhost 都会检查各种配置方式，并尝试进行读取，也就是可以认为配置的读取是 “实时生效” 的。
<br/>

### 配置的固有特性

请参考 [Nocalhost 开发配置的特性](config-overview.md#四、开发配置的特性)