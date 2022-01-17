---
title: DevMode(CustomResources)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## CustomResources 开发支持
Nocalhost 支持对 [CustomResources](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources) 进行开发。

### How it works
Nocalhost 对 K8s 资源对象的开发本质上将 [K8s Controller](https://kubernetes.io/docs/concepts/architecture/controller/) 控制的 Pod 的容器替换为开发容器，再将本地的源代码同步到开发容器中去。所以，在对某种类型的控制器（包括内置类型和 CustomResources 类型），Nocalhost 需要知道以下 3 个信息：
- Pod 模板定义在 Controller 定义中的路径。如内置类型的 Deployment 的 Pod 模板定义路径为 `/spec/template`，Nocalhost 通过该路径可以获取到 Pod 模板并对模板进行修改，将业务容器替换成开发容器
- 是修改原 Controller 的 Pod 模板定义还是使用该 Pod 模板定义创建一个新的 Deployment，在创建出来的 Deployment 上对 Pod 模板进行修改。这是因为并不是所有 Controller 的 Pod 模板都是可以修改的，如 Job。 
- 如何保证进入开发模式之后集群流量只会访问到开发容器。Controller 常常会管理多个 Pod，如果进入开发模式之后还存在多个 Pod 的话，我们无法保证集群的流量都只访问正在开发中的那个 Pod，所以一般我们需要将 Pod 的副本数缩减为 1。另外，对于创建新的 Deployment 进行开发的 CustomResources，则需要让原 Controller 的 Pod 副本数缩减为 0，如 DaemonSet,我们可以通过将 Pod 的 NodeName 指定为一个不存在的 Node 来将 DaemonSet 管理的 Pod 全部删掉。

Nocalhost 通过 `DevModeAction` 来定义如何对 CustomResources 进行开发，`DevModeAction` 的三个字段分别向 Nocalhost 提供了上述 3 个信息。用户可以通过在 `~/.nh/nhctl/config` 中添加   `DevModeAction`  来使 Nocalhost 获得开发指定 CustomResources 的能力， `~/.nh/nhctl/config` 的配置样例如下：

```yaml
crdDevModeActions:
- crdType: statefulsets.v1beta1.apps.kruise.io
  devModeAction:
    podTemplatePath: /spec/template
    create: false
    scalePatches:
    - type: json
      patch: '[{"op":"replace","path":"/spec/replicas","value":1}]'
```

其中：
- crdType: 为 `resource.version.group` 的形式，resource/version/group 分别是 CustomResources 的 Resource/Version/Group，即 GVR 反过来写，指定该 `DevModeAction` 对应的 CustomResources 类型
- devModeAction: 用于控制 Nocalhost 让指定 CustomResources 对象进入 `DevMode` 时的行为
    - podTemplatePath: 指定 Pod 模板定义所在的路径，Nocalhost 会修改该模板，如将容器镜像修改成开发镜像，添加 sidecar 容器等
    - create: 指明 CustomResources 对象在进入 `DevMode` 时，是否需要创建一个新的 Deployment，在该 Deployment 上进行开发
        - 如果为 `true`，Nocalhost 会使用在 `podTemplatePath` 中找到的 Pod 模板定义来创建一个 Deployment，`DevMode` 下的所有操作都在改 Deployment 中进行
        - 如果为 `false`，Nocalhost 会直接修改 CustomResources 对象的 Pod 模板定义，`DevMode` 下的所有操作都在该 CustomResources 对象上进行
    - scalePatches: 配置 CustomResources 对象在进入开发模式前将副本数缩为 1 的 patch，如果副本数已经为 1 或不需要将副本数缩为 1，此项可不配置

另外，Nocalhost 对常见的开源 CustomResources 进行了内置支持，如 [Kruise](https://github.com/openkruise/kruise) 的 [CloneSet](https://openkruise.io/docs/user-manuals/cloneset/)、[Advanced StatefulSet](https://openkruise.io/docs/user-manuals/advancedstatefulset) 、 [Advanced DaemonSet](https://openkruise.io/docs/user-manuals/advanceddaemonset) 等，对于内置支持的 CustomResources，无需进行配置便直接使用 Nocalhost 对其进行开发。


### How to use
在 IDE 插件中找到 `CustomResources` 选项卡，展开该选项卡可以查看 CustomResources 资源列表：
![](https://cdn.jsdelivr.net/gh/filess/img0@main/2022/01/12/1641976030414-a509b452-89cf-49de-8495-297d14e89dd2.png)

在要开发的 CustomResources 资源对象上点击右键，弹出选项框，点击 `Start DevMode` 或 `Start DevMode(Duplicate)` 即可进入开发模式：
![](https://cdn.jsdelivr.net/gh/filess/img12@main/2022/01/12/1641976139936-e651b371-e734-45d5-9785-04d9fb6bf8e6.png)
> CustomResources 对象的各个操作和 Workloads 中的 Deployment/StatefulSet 等 K8s 内置资源对象基本一致
