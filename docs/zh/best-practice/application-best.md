Nocalhost 支持通过下面三种类型进行安装：

* Manifest
* Helm
* Kustomize

您可以选择匹配类型的部署方式在 Kubernetes 中部署您的应用，然后在 Nocalhost 编辑器插件进行开发。或您也可以[使用 Nocalhost Server 进行应用管理](../../server/using-server#应用管理) 对您 Kubernetes 集群中的应用进行集中管理。

## 使用 Helm Chart 部署应用

您可以直接使用已有的 **Helm Chart** 在本地进行应用部署。

### 本地或远端仓库中的 Helm 应用

#### 本地部署

如果在本地已经有配置好的 Helm 应用，且 **helm chart** 放置在**相对于根目录**的 `mychart/example/` 文件下，您可以执行下述命令进行应用部署

```blash
helm install helloworld /chart/example/ \ 
   -n fooNamespace \
   --kubeconfig ~/.kube/barconfig
```

#### 远端仓库部署

如果您有一个 Helm 应用存放在一个有权限访问的远端仓库，例如：

```hl_lines="7"
https://[gihub, Gitlab, etc... whateverRepo]/foo/bar/hellowrold.git

Somefile.py
AClass.java
README.MD
...
mychart/example/
   Chart.yaml
   values.yaml
   charts/
   templates/
   ...
```
对于这个仓库来说，我们将 **Helm chart** 放置在了**相对于根目录**的 `mychart/example/` 文件下，那么我们可以使用如下命令来进行应用部署：

```blash
nhctl install helloworld \
   -u https://[gihub, Gitlab, etc... whateverRepo]/foo/bar/hellowrold.git \
   -t helmGit \
   -n k8sFooNamespace \
   --resource-path charts/example \
   --kubeconfig ~/.kube/barconfig
```

### 使用自己的 Helm Repo

如果您有自己的 Helm Repo，可以通过下列命令进行部署：

```blash
helm install helloworld \
   mychart \
- repo http://mychart/charts/ \
   -n fooNamespace \
   --kubeconfig ~/.kube/barconfig
```

或者也可以使用下述 `nhctl` 命令来达到同样的效果：

```blash
nhctl install helloworld \
   --helm-chart-name mychart \
   --helm-repo-url http://mychart/charts/ \
   -n fooNamespace \
   --kubeconfig ~/.kube/barconfig
```

## 使用 Kubernetes Manifest 部署应用

假设你有这样的一个仓库，它的地址为 `https://[gihub, Gitlab, etc... whateverRepo]/foo/bar/hellowrold.git`，里面存放着许多 **Kubernetes manifest yaml** 文件 ：

```blash
README.MD
something.java
…
foo/bar/k8s/manifests/
                 foo.yaml
                 pre-install-cm.yaml
                …
                 what/ever/
                               inner.yaml
                               …
                support/all/dir/inside/
                                            bar.yaml
                                            …
```

你只想应用相对根目录 `what/ever/` 与 `support/all/dir/inside/` 下的文件，那么使用命令：

```hl_lines="5 6"
nhctl install applicationNameFooBar \
  -u https://[gihub, Gitlab, etc... whateverRepo]/foo/bar/hellowrold.git \
  -t manifest \
  -n k8sFooNamespace \
  --resource-path what/ever/ \
  --resource-path support/all/dir/inside/ \
  --kubeconfig ~/.kube/barconfig
```

如果你想应用所有文件，则可以使用命令：

```hl_lines="5"
nhctl install applicationNameFooBar \
  -u https://[gihub, Gitlab, etc... whateverRepo]/foo/bar/hellowrold.git \
  -t manifest \
  -n k8sFooNamespace \
  --resource-path. \
  --kubeconfig ~/.kube/barconfig
```

## 使用 Kustomize 部署应用

## Nocalhost 对原生 Kubernetes 应用的增强

在 Kubernetes 的基础上，Nocalhost 提供了一些对应用的增强功能，您可以在你的项目仓库下新增 `.nocalhost/` 文件夹，并新增 [config.yaml](../../references/nh-config-spec) 文件。

!!!info "无侵入"
   Nocalhost 对用户的 Kubernetes manifest 配置无侵入

### Pre-Install

Nocalhost 允许用户在安装部署应用之前，进行一些额外的操作。以 [bookinfo](https://github.com/nocalhost/bookinfo) 为例，在安装应用前，我们会执行如下声明的几个 Job，等待 Job 执行结束才安装应用，

```yaml hl_lines="1"
onPreInstall:
  -path: manifest/templates/pre-install/print-num-job-01.yaml
    weight: "1"
  -path: manifest/templates/pre-install/print-num-job-02.yaml
    weight: "-5"
```

### 启动依赖管理

Nocalhost 可以控制应用内的服务启动顺序。

例如以下这个配置，代表 `ratings` 这个 **Deployment**，需要等待 `productpage` 的 `pod` 可用后才会启动。

```yml hl_lines="3"
name: ratings
serviceType: deployment
dependLabelSelector:
  pods:
    - productpage
```

可以可以查阅 [Service 指定启动顺序依赖关系](../service-best#service-指定启动顺序依赖关系) 获取更多信息。

### 开发镜像配置

Nocalhost 允许指定开发容器的镜像，例如：

```yml hl_lines="5"
containers:
...
    dev:
      gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-productpage.git
      image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage
...
```

在上述配置中，镜像 **python:3.7.7-slim-productpage**，将在进入开发模式时，替代原镜像进行开发。

更多信息，请查阅 [DevContainer 最佳实践](../devcontainer-best)


## 高级配置

这里会说明一些 **Application** 一些额外的特性或者设计，这并不是必须的，但会有助于你更好的使用 Nocalhost。

### Application Name

Nocalhost 使用唯一的 Application Name 来区分不同的 Application。注意，即使使用不同的 **Nocalhost Server**（例如部署了两套以上的），不支持相同的 Application Name 在同一个开发机器上使用。

### `~/.nh` 目录

注意，在 `~/.nh/` 目录下，`nhctl` 和 IDE 插件会存储一些文件用以保存当前应用部署，开发等的一些状态，通常你不需要了解或者直接使用他们。