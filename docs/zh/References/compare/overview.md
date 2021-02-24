# Nocalhsot vs. Other Software

要对比不同软件之间的差别是困难的，尤其是当问到是否可以用其他软件来替代？以及不同的软件之间可以相互协同吗？

在本章节中，我们将 Nocalhost 与其他的软件进行比较.

建议先阅读[“Nocalhost - 重新定义云原生开发环境”](/zh/Blog/redefine-cloud-native-dev-environment/)，他们有助于理解 Nocalhost 试图解决的问题。

总结来说，要加速在 Kubernetes 环境下的开发目前有三种思路：

1. 监听本地代码变更，发生修改后立即在本地执行 CI/CD 流水线，重新构建微服务镜像并且自动部署到 Kubernetes 集群。这是 `Google Cloud Code`、`Skaffold`、`Tilt` 的做法。

    [ ![](../../../assets/images/reference/way-1.png) ](../../../assets/images/reference/way-1.png)

2. 将要开发的工作负载替换为 `Proxy` 网络代理容器，转发集群内的流量到本地，以及转发本地的流量到集群。本地使用 `docker run` 运行微服务容器。这是 `Telepresence` 的做法。

    [ ![](../../../assets/images/reference/way-2.png) ](../../../assets/images/reference/way-2.png)

3. 将要开发的工作负载替换为开发容器，并将本地代码和远端目录映射，构建和运行微服务都在远端容器内。这是 `Nocalhost` 的做法。
    [ ![](../../../assets/images/reference/way-3.png) ](../../../assets/images/reference/way-3.png)

此外，`Nocalhost` 还提供了应用管理、开发环境管理、VS Code 插件、IDEA 插件等有利于标准化以及加速开发的能力。

您可以点击左侧的菜单浏览 Nocalhost 与特定软件的对比。

> 这些比较并不是说服您使用 Nocalhost，也不是有意贬低其他的软件。我们的目标只是为了更好地了解 Nocalhost 与其他软件在功能上的差异，如果您认为任何陈述的事实不正确，欢迎提交 PR 改进。