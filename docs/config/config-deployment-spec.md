---
title: Spec
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<span id="danger"></span>

[Overview](config-en.md) / [Deploy Config](config-deployment-en.md) / [Spec](config-deployment-spec.md)

<br/>

******

# Nocalhost 提供了哪些部署配置？

:::danger 部分配置需额外组件


部署配置的部分功能依赖于 **Nocalhost-Dep 组件**，如果你使用 Nocalhost Server，我们会自动帮你处理这个组件的安装，否则需要进行额外的安装。

如果没有安装 **Nocalhost-Dep 组件**，部分功能将受限，文章中将会标记出那些需要借助 ** Nocalhost-Dep ** 才能实现的功能。

:::

## 启动顺序依赖控制 ([组件依赖](#danger))
范例：
```yaml
application:
  name: example
  manifestType: rawManifestGit
  resourcePath: [ "example" ]
  
  services:
    - name: whatever
      serviceType: deployment
      
      dependLabelSelector:
        pods:
          - "name=mariadb"
          - "app.kubernetes.io/name=example"
        jobs:
          - "job-name=init-job"
```

当某项资源在部署配置中声明了 `dependLabelSelector` 以后， `pods` 数组中的字符代表要等待的 pods 的 labels，格式为键值对。`jobs` 数组中的字符代表要等待的 jods 的 labels，格式为键值对。

`pods` 与 `jobs` 都为可选项。实际部署过程中，它会为指定的工作负载生成一个 `initContinaer`，等待所有匹配 label 的 pods 状态为 `Ready`，等待所有匹配 label 的 jobs 状态为 `Succeeded`。

<br/>

******

## 环境变量注入 ([组件依赖](#danger))

### 全局变量注入
范例：
```yaml
application:
  name: example
  manifestType: rawManifestGit
  resourcePath: [ "example" ]
  
  ##### start
  env:
    - name: DEBUG
      value: false
    - name: DOMAIN
      value: nocalhost.dev
  envFrom:
    envFile:
      - path: relpath/to/env/file
  ##### end

```

全局变量注入需要声明在 `application` 这一级，在部署时，它将往所有部署的 `Deployment`、`DaemonSet`、`ReplicaSet`、`StatefulSet`、`Job`、`CronJob` 中注入对应的环境变量。

:::tip 变量注入支持两种写法，可以混搭
- 第一种是直接声明键值对
- 第二种是声明一个相对于 `config.yaml` 的 env 文件，内容为逐行的 `Key=Value`：
```dotenv
DEBUG=true
DOMAIN=nocalhost.dev
```
:::

其中，`env` 的优先级高于 `envFrom`

<br/>

### 容器级变量注入
范例：
```yaml
application:
  name: example
  manifestType: rawManifestGit
  resourcePath: [ "example" ]

  services:
    - name: whatever
      serviceType: deployment
      containers:
        - name: your-container-name
          install:

            ##### start
            env:
              - name: DEBUG
                value: false
              - name: DOMAIN
                value: nocalhost.dev
            envFrom:
              envFile:
                - path: relpath/to/env/file  
            ##### end
```

容器级的变量注入声明在 `application.services[*].containers[*].install` 中，表明在部署时，往对应的容器中注入对应变量。`env` 与 `envFrom` 的规则与应用级一致。

<br/>

******

## 安装后自动端口转发
范例：
```yaml
application:
  name: example
  manifestType: rawManifestGit
  resourcePath: [ "example" ]

  services:
    - name: whatever
      serviceType: deployment
      containers:
        - name: your-container-name
          install:
            
            ##### start
            portForward:
              - 5005:5005
              - 3306:3306
            ##### end
```

配置规则与容器及的变量注入声明类似，需要配置在 `application.services[*].containers[*].install` 中。

安装后的端口转发顾名思义，在应用安装完毕，可以自动为某些服务做端口转发到本地，如常用的数据库、MQ 等端口，适合在安装完毕后自动转发，配置的规则。端口转发的规则与 K8s 一致，即 `本地端口:容器端口`

<br/>

******

## Hook
范例：
```yaml
application:
  name: example
  manifestType: rawManifestGit
  resourcePath: [ "example" ]

  ##### start
  onPreInstall:
    - path: manifest/templates/pre-install/print-num-job-01.yaml
      weight: "0"
    - path: manifest/templates/hook/pre-install.yaml
      weight: "1"
  onPostInstall:
    - path: manifest/templates/hook/post-install.yaml
      weight: "1"
  onPreUpgrade:
    - path: manifest/templates/hook/pre-upgrade.yaml
      weight: "1"
  onPostUpgrade:
    - path: manifest/templates/hook/post-upgrade.yaml
      weight: "1"
  onPreDelete:
    - path: manifest/templates/hook/pre-delete.yaml
      weight: "1"
  onPostDelete:
    - path: manifest/templates/hook/post-delete.yaml
      weight: "1"
  ##### end
```


Nocalhost 支持在应用的生命周期注入各种 Hook，**Hook 目前只支持 Job**，其中 `path` 为**相对于主目录**的 RawManifest，必须是 Job 类型，`weight` 为权重，权重低的先执行。

<br/>

:::danger Hook的限制
Hook 与 Helm 的 Hook 类似，Hook 本身是为了弥补非 Helm 应用的不足，所以**Helm 类型应用无法配置 Hook（你可以直接使用 Helm 的 Hook）**。
:::

<br/>

:::info Hook的解释
- `onPreInstall` 发生在应用部署之前，例如执行集群、数据库之类的的一些初始化操作。会在 Job 状态为 `Successed` 后，才开始真正执行部署，如果失败，则安装终止。
- `onPostInstall` 发生在应用部署之后，当所有资源都提交到 K8s Api Server，会执行此 Job，状态为 `Successed` 后，部署成功。否则将回滚，执行卸载操作。

<br/>

依次类推，UpgradeHook 和 DeleteHook 不同的是，它们在执行失败后都不会进行回滚，仅提示失败。
:::

<br/>

******

## HelmValues 的定制
范例：
```yaml
application:
  name: example
  manifestType: rawManifestGit
  resourcePath: [ "example" ]

  ##### start
  helmValues:
    - key: nocalhost.example
      value: foo
    - key: nocalhost.deploy.example
      value: bar
  
  helmVals:
    nocalhost:
      example: foo
      deploy:
        example: {{ Release.Name }}
  ##### end
```

<br/>

:::tip HelmValues 支持两种写法
- 第一种写法仅支持纯字符串，优先级更高。
- 第二种写法与 `values.yaml` 别无二致，可穿插 Helm 语法。
:::