---
title: 快速上手
---

欢迎使用 Nocalhost! 在这篇指南里，我们将引导您完成安装 Nocalhost 以及使用 Nocalhost 在 Kubernetes 上体验便捷的云原生微服务应用的开发过程。

## 前置条件

* **配置好的 Kubernetes Cluster (2核CPU 和 4G 内存)** 可以是本地集群, 如 [minikube](https://minikube.sigs.k8s.io/docs/start/) 或 [Docker Kubernetes](https://docs.docker.com/docker-for-mac/kubernetes/) 集群, 或远端集群, 比如[腾讯的 TKE](https://cloud.tencent.com/product/tke). 
* **RBAC** 在上述集群中已经启用
* **Configured [kubeconfig](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/) file** 具备命名空间的管理员权限
* **[kubectl (1.6+)](https://kubernetes.io/docs/home/)** 已安装
* Visual Studio Code (1.52+)
* Kubernetes API 服务可以在内部和外部访问

## 步骤1：安装

确保已经根据[客户端安装教程](https://nocalhost.dev/zh/installation) 完成 Nocalhost VSCode 插件的安装

如果你使用的是 linux，应该 [增加 inotify limit](./FAQ/increase-inotify.md)，否则文件同步可能会很慢。

## 步骤2：在 VSCode 中安装和配置 Nocalhost

### 启用插件

打开 VSCode, 在左边工具栏点击 Nocalhost 的图标<img src="../../assets/images/icons/nocalhost-plugin-icon.png" width="20"/> , 启用 Nocalhost 插件

![Nocalhost VSCode Plugin](../assets/images/installation/nocal-vs-plugin.jpg)

### 添加 Kubernetes 集群

你可以通过两种方式添加 Kubernetes 集群:

**- 选择 kubeconfig 文件** 在你的本地文件夹中选择一个 kubeconfig 文件.

!!!note 
    在插件启动的时候, Nocalhost 会默认从``~/.kube/config``自动读取你的 kubeconfig


**- 粘贴为文本** 粘贴 kubeconfig 的文本内容.

!!!tip
    你可以通过此命令 ```kubectl config view --minify --raw --flatten``` 查看并复制你的 kubeconfig


在 kubeconfig 成功读取后，选择需要访问的内容，然后添加集群

当成功添加集群后，**Nocalhost** 会自动显示您的集群列表

![Cluster List](../assets/images/installation/nocal-success-load-cluster.png)

!!!tip 示例应用
    我们将在这里以 bookinfo 应用程序作为示例。 您可以选择已经部署在您 Kubernetes 集群中应用程序，也可以按照 **[在K8s中部署示例应用程序](../References/deploy-book-info-app-manifest)** 在Kubernetes集群中部署bookinfo应用程序。

## 步骤3：进入 DevMode

选择一个你想开发的应用，在这里我们用 **bookinfo** 应用举例

选择 **productpage** 服务，点击 <img src="../../assets/images/icons/nocal-devmode-icon.jpg" /> 进入 **DevMode** 模式，然后指定源代码目录（从 Git 仓库克隆或使用现有的本地目录）

![Select Service](../assets/images/installation/select-service.jpg)

!!!note 更改远程 Git 仓库地址
    如果要在设置了 Git 仓库需要更改地址，可以单击  <img src="../../assets/images/icons/nocalhost-config-icon.jpg" /> 打开 yaml 文件，修改其中的 ``gitUrl`` 内容

指定源代码目录（或成功克隆代码）后，Nocalhost 将打开一个新的VSCode窗口，然后将自动进入 DevMode。

![Nocalhost on DevMode](../../assets/images/installation/nocal-on-devmode.png)

当成功进入 DevMode 后，你应该看到以下提示信息：

```
Starting DevMode...

...

Waiting pod to start...
Forwarding 39080:9080
Response: {"errInfo":""}
Port-forward 39080:9080 has been started

 ✓  Dev container has been updated

...
```

!!!tip 端口转发
    Nocalhost 将自动将端口转发到 Kubernetes 集群中的 Pod上。 在当前示例中，本地端口 **39080** 将数据转发到定义 Pod 上的端口 **9080**。 在主要进程成功启用后，您可以通过```http：//127.0.0.1：39080`访问此 Pod。

## 步骤4：更改代码并检查结果

让我们进行一些代码更改，看看 Nocalhost 是如何工作的

#### 执行 sh 命令启动 python 进程

```
sh run.sh
```

![APP Main Process](../../assets/images/installation/nocal-app-main-process.png)

!!!note 容器内的主进程
    在默认情况下，在 DevMode 下，应用中的主进程不会自动在 DevContainer 中启动，因此应用将不响应任何请求。 您需要先手动启动主进程，然后才正常能访问该应用。

打开您的浏览器并输入该地址 [http://127.0.0.1:39080](http://127.0.0.1:39080)，查看应用运行结果

![APP Started](../../assets/images/installation/nocal-app-started.png)

#### 修改代码

现在修改 ``template/index.html`` 或其它内容，体验 Nocalhost 的代码修改即时生效功能. **别忘记保存您的修改.**


![APP Make Change](../../assets/images/installation/nocal-app-make-change.png)

刷新浏览器查看代码改动后带来的效果 [http://127.0.0.1:39080](http://127.0.0.1:39080)

![APP Changed](../../assets/images/installation/nocal-app-change.png)

👍  **恭喜!** 描述为，恭喜，你已经使用 Nocalhost 体验了便捷的云原生微服务应用的开发过程。

## 下一步

以下是一些后续的建议步骤:

* 从 Nocalhost 的[核心概念](https://nocalhost.dev/Concepts/cluster/)开始学习
* 加入我们的 [Slack](https://nocalhost.slack.com/) 和/或 [微信群](./)
