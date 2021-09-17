---
title: Advance
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[Overview](config.md) / [Deploy Config](config-deployment.md) / [Advance](config-deployment-advance.md)
******

# Dep 组件与其他配置方式的支持
Nocalhost 的开发配置支持多种开发方式，如 ConfigMap、Annotations 等。实际上，这些配置方式**同样适用于**部署配置。但有些功能是需要配合 K8s WebHook 功能来实现，在 Nocalhost 中，是由一个叫做 `Nocalhost-Dep` 的组件来承担这个角色，`Nocalhost Server` 将自动为你部署这个组件，如果你没有使用 `Nocalhost Server`，那么则需要额外进行 `Nocalhost Dep` 的部署。

<br/>

:::info
[Nocalhost 提供了哪些部署配置？](config-deployment-spec.md) 中介绍了哪些部署配置需要额外部署 `Nocalhost Dep` 来进行支持。
:::

******

## 使用 ConfigMap 配置部署配置

在 [部署配置入门 ——— Nocalhost 基础部署配置](config-deployment-quickstart.md) 提到了如何配置一个简单的部署配置。结合 [Nocalhost 支持哪些配置方式 —— 将配置放置在 configmap 中](configure.md#将配置放置在-configmap-中)，我们可以得到 ConfigMap 部署配置：

我们为此准备了一个体验项目，它将自动部署 `Nocalhost Dep`，并且使用 ConfigMap 的形式进行部署配置的配置。


:::tip 使用下列命令来获取并查看此项目（体验该 Chart 包需要 ClusterAdmin 级别的权限）

```shell
git clone https://github.com/nocalhost/bookinfo && git checkout config/example
```

:::

<br/>


然后再使用 Helm 来进行安装：

```shell
helm dep build ./charts/bookinfo && helm install bookinfo ./charts/bookinfo
```

<br/>


部署配置的内容本身这里不做赘述，我们来看看 `charts/bookinfo/templates/nocalhost-app-config.yaml`。

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  # [Nocalhost]: nocalhost configmap should be named with dev.nocalhost.config.${appName}
  name: "dev.nocalhost.config.{{ .Release.Name }}"
  # [Nocalhost]: labels {dep-management: nocalhost} is also required
  labels:
    dep-management: nocalhost
  annotations:
    "helm.sh/hook": pre-install
data:
  config: |-
    {{ .Files.Get .Values.nocalhost.config.path | nindent 4 }}
```

<br/>

:::danger
这个 ConfigMap 需要最先被提交的 Api Server，如在 Helm 的应用场景下，它应该被声明为 `pre-install`

```yaml
  annotations:
    "helm.sh/hook": pre-install
```

:::

<br/>

它引入了 `.Values.nocalhost.config.path` 来渲染部署配置的主体内容。配置实际上声明在 `./charts/bookinfo/example/config-from-cm/nocalhost-full-config.yaml` 中，它是一个标准的 Nocalhost 部署配置，没有做额外的改造：

```yaml
application:
  env:
    - name: APP_ENV_1
      value: EXAMPLE
    - name: APP_ENV_2
      value: EXAMPLE

  services:
    - name: productpage
      serviceType: deployment
      containers:
        - name: productpage
          install:
            env:
              - name: ENV_INJECT_EXAM
                value: BASE

    - name: details
      serviceType: deployment
      containers:
        - install:
            env:
              - name: ENV_INJECT_EXAM
                value: BASE

    - name: ratings
      serviceType: deployment
      dependLabelSelector:
        pods:
          - "productpage"
      containers:
        - install:
            env:
              - name: ENV_INJECT_EXAM
                value: BASE

    - name: reviews
      serviceType: deployment
      dependLabelSelector:
        pods:
          - "productpage"
      containers:
        - install:
            env:
              - name: ENV_INJECT_EXAM
                value: BASE

    - name: authors
      serviceType: deployment
      dependLabelSelector:
        pods:
          - "productpage"
      containers:
        - install:
            env:
              - name: ENV_INJECT_EXAM
                value: BASE
```

<br/>

******

## 使用 Annotations 配置部署配置

使用方式与 [Nocalhost 支持哪些配置方式 —— 将配置放置在 annotations 中](configure.md#将配置放置在-annotations-中) 完全一致。

:::danger 额外注意

由于 Annotations 紧跟工作负载，所以不支持应用级别的一些配置，仅支持 `application.services` 下的配置。

:::

<br/>

同样使用上述这个体验项目：

:::tip 使用下列命令来获取并查看此项目（体验该 Chart 包需要 ClusterAdmin 级别的权限）

```shell
git clone https://github.com/nocalhost/bookinfo && git checkout config/example
```

:::

<br/>


然后再使用 Helm 来进行安装：

```shell
helm dep build ./charts/bookinfo && helm install bookinfo ./charts/bookinfo -f ./charts/bookinfo/values-annotation-config.yaml
```

<br/>

我们指定了 `values-annotation-config.yaml` 作为 Values.yaml，里面指定了将本地配置文件渲染到工作负载的 Annotations 中，以 `./charts/bookinfo/templates/microservice-details.yaml` 为例：

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: details
  {{- if .Values.nocalhost.annotations.path.details }}
  annotations:
    nocalhost.dev: |-
      {{ .Files.Get .Values.nocalhost.annotations.path.details | nindent 6 }}
  {{- end }}
  labels:
    app: details
```

<br/>

Helm 会将 `.Values.nocalhost.annotations.path.details` 所配置路径渲染到 yaml 中，内容如下，即 Values 中指定的 `./charts/bookinfo/example/config-from-annotations/details.yaml`：

```yaml
containers:
  - install:
      env:
        - name: ENV_INJECT_EXAM
          value: ANNOTATIONS
```

<br/>

******

## 如何部署 `Nocalhost Dep`

我们推荐使用 `Nocalhost Server` 来获得 `Nocalhost Dep` 的全部功能。

:::danger COMING SOON

:::