---
title: Quick Start
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem'; import useBaseUrl from '@docusaurus/useBaseUrl';

[Overview](config.md) / [Deploy Config](config-deployment.md) / [Quick Start](config-deployment-quickstart.md)
******
# 部署配置入门 ——— Nocalhost 基础部署配置

You can configured the deployment method of matching type to deploy your application in Kubernetes with Nocalhost IDE
plugin. Nocalhost supports to use the following types to deploy application:

- RawManifest
- Helm
- Kustomize

<br/>

******

## 部署配置的结构

[开发配置](config-overview.md)是部署配置的子集，是部署配置的一部分。部署配置的最精简结构如下：

```yaml
application:
  name: ""
  manifestType: ""
  resourcePath: []
```

`application` 层级下分别为应用名、应用类型、与资源所在数组。

- 应用名用于在 Nocalhost 插件中展示并归档聚合资源，如果是 Helm 类型的应用，它也将成为 `Release.Name`
- 应用类型大体分为 RawManifest、Helm 与 Kustomize 三种，不同的类型部署方式有所不同，所以需要类型来加以区分。
- 最后则是资源路径，它应该包含所有需部署的资源的路径

<br/>


:::danger 部署配置独特的配置方式 ———— `config.yaml`

部署配置的命名一般为 `config.yaml`，也可以使用其他命名，推荐使用 `config.yaml`。

`config.yaml` 需固定放在 git 主目录下的 .nocalhost 文件夹中。

```dotenv
├── .nocalhost
│   └── config.yaml
└── YourManifests
...
```

:::


******

## 快速上手各个应用类型的部署配置

我们会以 bookinfo 这个应用为实例，介绍 Nocalhost 部署配置。

<br/>

### RawManifest 最小化配置

这是一个实际可用的 Nocalhost 部署配置，表明这是一个 RawManifest 应用，并且将 apply manifest/templates 目录下的所有资源，部署后，这个应用的应用名字是 bookinfo。

```yaml
application:
  name: bookinfo
  manifestType: rawManifestGit
  resourcePath: [ "manifest/templates" ]
```

该项目的目录结构如下，除了 .nocalhost 目录下的 config.yaml 以外，没有其他额外的修改：

```shell
├── .nocalhost
│   └── config.yaml
└── manifest
    └── templates
        ├── authors.yaml
        ├── bookinfo
        │   └── dep-job.yaml
        ├── detail.yaml
        ├── pre-install
        │   ├── print-num-job-01.yaml
        │   └── print-num-job-02.yaml
        ├── pre-install-cm.yaml
        ├── productpage
        │   └── productpage.yaml
        ├── ratings.yaml
        └── reviews.yaml
```

<span id="deploy"></span>

:::tip 使用下列命令来获取并查看此项目

```shell
git clone https://github.com/nocalhost/bookinfo && git checkout manifest/config/example
```

:::

<br/>

#### 在 Nocalhost 插件中部署这个应用

我们可以在 Nocalhost 插件中任意一个 `namespace` 点击右键，再点击 `Deploy Application`，选择 `clone from git`。 然后填入 `https://github.com/nocalhost/bookinfo` 这个地址与 `manifest/config/example` 分支。
<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/config/deploy-config-install-manifest.png')} />
</figure>

<br/>

点击部署即可，Nocalhost 将为你部署这个 RawManifest 应用，当前 `namespace` 下，将出现 bookinfo 这个应用。
<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/config/deploy-config-install-manifest-success.png')} />
</figure>

<br/>

#### 定制化 resourcePath 以及 ignoredPath

resourcePath 是一个数组，可以自由定制需要部署的 RawManifest，例如对于上述的应用来说，如果只想应用那些 job.yaml ，可以更改配置为：

```yaml
application:
  name: bookinfo
  manifestType: rawManifestGit
  resourcePath: [ "manifest/templates/bookinfo", "manifest/templates/pre-install" ]
```

<br/>

此外，部署配置同样支持 `ignoredPath`，例如对于上述的应用来说，如果不想应用所有 job.yaml ，可以更改配置为：

```yaml
application:
  name: bookinfo
  manifestType: rawManifestGit
  resourcePath: [ "manifest/templates" ]
  ignorePath: [ "manifest/templates/bookinfo", "manifest/templates/pre-install" ]
```

<br/>

### Kustomize 最小化配置

与 RawManifest 类似，Kustomize 类型的 config.yaml 如下，意为这是一个 Kustomize 应用，名字为 bookinfo-kustomize，配置的 resourcePath 对应为 `kubectl apply -k` 使用的目录。
```shell
application:
  name: bookinfo-kustomize
  manifestType: kustomizeGit
  resourcePath: ["kustomize/base"]
```

该项目的目录结构如下，`kustomize/base` 对应到 `kustomization.yaml` 所在的相对目录：

```shell
├── .nocalhost
│   └── config.yaml
└── kustomize
    └── base
        ├── authors.yaml
        ├── dep-job.yaml
        ├── detail.yaml
        ├── kustomization.yaml
        ├── pre-install
        │   ├── print-num-job-01.yaml
        │   └── print-num-job-02.yaml
        ├── pre-install-cm.yaml
        ├── productpage.yaml
        ├── ratings.yaml
        └── reviews.yaml
```

<br/>

:::tip 使用下列命令来获取并查看此项目

```shell
git clone https://github.com/nocalhost/bookinfo && git checkout kustomize/config/example
```

:::

<br/>

:::info 尝试用 Nocalhost 插件中部署此项目

可以在本文前面提到的 **[如何在插件中部署 Nocalhost 应用中](#deploy)** 进行操作，对应的分支名填写 `kustomize/config/example`

:::

<br/>

### Helm 最小化配置

与 Kustomize 类似，Helm 类型的 config.yaml 如下，意为这是一个 Helm 应用，`Release.Name` 为 bookinfo-helm，配置的 resourcePath 对应为 `helm install` 使用的目录。
```shell
application:
  name: bookinfo-helm
  manifestType: helmGit
  resourcePath: ["charts/bookinfo"]
```

该项目的目录结构如下，`charts/bookinfo` 对应到 `Chart.yaml` 所在的相对目录：

```shell
├── .nocalhost
│   └── config.yaml
└── charts
    └── bookinfo
        ├── Chart.yaml
        ├── README.md
        ├── templates
        │   ├── _helpers.tpl
        │   ├── dep-job.yaml
        │   ├── microservice-authors.yaml
        │   ├── microservice-details.yaml
        │   ├── microservice-productpage.yaml
        │   ├── microservice-ratings.yaml
        │   └── microservice-reviews.yaml
        ├── values.yaml
        └── values_example.yaml
```

<br/>

:::tip 使用下列命令来获取并查看此项目

```shell
git clone https://github.com/nocalhost/bookinfo && git checkout helm/config/example
```

:::

<br/>

:::info 尝试用 Nocalhost 插件中部署此项目

可以在本文前面提到的 **[如何在插件中部署 Nocalhost 应用中](#deploy)** 进行操作，对应的分支名填写 `helm/config/example`

:::

<br/>

******

## 在部署配置中预先配置好开发配置

:::info
在阅读本小节之前，已经默认你已知晓开发配置应如何配置。
:::

在 Nocalhost 部署配置中，可以将开发配置进行嵌入。这样有一个好处，可以将 Nocalhost 配置植入到应用部署过程中，省去在新环境中重复进行配置 Nocalhost 的工作。两者并不冲突，相当于在 Nocalhost 部署应用后，自动将开发配置与服务进行关联。

<br/>

### 示例

例如，在前面的部署示例中，我们始终部署 bookinfo 这个应用，里面有几个类型为 Deployment 的工作负载，我们来对它们进行一些配置，最终如下。

除了上述的最小化配置以外，我们引入了 services 这个数组，数组内的元素则是我们熟悉的**[开发配置](config-spec.md)**：

```yaml
application:
  name: bookinfo
  manifestType: rawManifestGit
  resourcePath: [ "manifest/templates" ]
  
  services:
    - name: productpage
      serviceType: deployment
      containers:
        - name: productpage
          dev:
            gitUrl: https://e.coding.net/nocalhost/nocalhost/bookinfo-productpage.git
            image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage-with-pydevd
            shell: bash
            workDir: /home/nocalhost-dev
            command:
              run:
                - ./run.sh
              debug:
                - ./debug.sh
            debug:
              remoteDebugPort: 9009
            sync: 
              type: send
              filePattern: 
                - ./
              ignoreFilePattern:
                - ".git"
                - ".github"
                - ".idea"
            portForward:
            - 39080:9080
            resources:
              limits:
                cpu: "1"
                memory: 1Gi
              requests:
                cpu: "0.5"
                memory: 512Mi
                
    - name: details
      serviceType: deployment
      containers:
        - dev:
            gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git
            image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/ruby:2.7.1-slim
            shell: bash
            workDir: /home/nocalhost-dev
            sync: 
              type: send
              filePattern: 
                - ./
              ignoreFilePattern:
                - ".git"
                - ".github"
            env: 
            - name: DEBUG
              value: "true"
```

<br/>

:::tip 可以使用 QuickStart 示例应用来体验

** [Demo 中使用的应用就是在部署配置中嵌入了开发配置](../guides/deploy/deploy-demo.md)**

在部署完毕的 Demo 应用中，随意右键点击应用底下的一个工作负载，如 `Deployment/details` ，发现它已经提前配置好了一系列开发配置，我们可以按照预设的配置直接进入开发模式。

:::