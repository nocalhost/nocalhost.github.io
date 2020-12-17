### 什么是Nocalhost？
Nocalhost 是云原生开发环境，支持开发基于 Kubernetes 的应用：

* **一键化部署应用程序，即使具有复杂的服务依赖性**
* **支持在 Kubernetes 容器内部构建，测试和调试应用程序**
* **支持热加载进行开发**：更新正在运行的容器，而无需重建重建或重新启动 Pod。


### Nocalhost 如何工作的？
* **Nocalhost 服务端安装**
    - 将 Nocalhost 服务端（nocalhost-api，nocalhost-web）部署到 kubernetes 集群。

* **对于管理员：** 
    - 使用 Nocalhost 服务端提供的管理界面创建用户，配置应用程序的 Kubernetes 集群，创建应用程序以及配置应用程序的DevSpace（当前，DevSpace = ServiceAccount + namespaces）。
    
    - 在配置 Kubernetes 集群时，会在该 Kubernetest 集群的 nocalhost 名称空间，自动部署 nocalhost-dep ，nocalhost-dep 主要是控制微服务启动时的依赖顺序。

* **对于开发人员：** 

    - 1.安装 Nocalhost 客户端 [nhctl 和 IDE 插件](https://nocalhost.dev/installation/) 。
    - 2.插件中配置 nocalhost-api 服务地址(如：http://localhost:8080), 并用账号密码登录.
    - 3.应用程序一键化部署到 kubernetes 集群。
    - 4.选定服务开启 DevMode ，当该服务切换到 DevMode, Nocalhost 将该微服务的容器替换为配置指定的 DevContainer ，将源代码同步到 DevContainer，并将 DevContainer 的端口转发到本地。

* Nocalhost 的工作示意图，如下图所示：
![](../../assets/images/architecture.png)


### 组件简介
**IDE plugins**
* IDE pugins 通过 nhctl 和 nocalhost-api 为开发者提供更好的用户体验。主要提供一键化功能，如：应用部署/卸载，DevMode 开启/关闭，文件同步，端口转发等

**nhctl**

nhctl 是 Nocalhost 的核心组件，主要功能如下：

* **应用部署**
    - Nocalhost 将根据 ~/.nh/nhctl/application/{具体应用}/.nocalhost/config.yaml 中定义的服务依赖顺序依次部署到kubernetes集群。

* **DevContainer 热加载本地文件**
    - 对本地源代码所做的任何更改将自动同步到远程DevContainer。
    - 开发人员可以重新编译并重新启动容器其过程以验证代码更改。 
    - 将来，我们将支持配置hotreload命令，而不是手动重新启动过程。 

* **应用卸载**
    - 应用卸载会清空 DevSpace 申请的资源。

**nocalhost-web**
* nocalhost-web 提供了一个  Web 界面来管理用户，kubernetes 集群，应用程序和 DevSpaces。

**nocalhost-api**
* Nocalhost-api 通过 Kubernetest api-server 管理 kubernetes 集群中的 serviceAccount，应用程序和 DevSpace，并持久存储到数据库中，为 IDE plugin 的使用提供数据支持。

**nocalhost-dep** 
* 1.在 Kubernetes 集群中部署微服务时，无法控制微服务的启动顺序和依赖性。 一个典型的场景是：服务A 和服务B 都依赖于 Mysql，Redis，RabbitMQ。 除非 Mysql, Redeis, RabbitMQ 都可用，否则无法启动服务A和服务B。 

* 2.通常，开发人员必须等待 Pod 重新启动，这取决于 Kubernetes 的 HealthCheck Probe。 一次又一次重启后，时间间隔将非常长。 这就是为什么许多在 Kubernetes 中运行的大型系统启动速度非常慢的原因。

* 3.nocalhost-dep 使用 Kubernetes Admission Webhook（类似于 Istio 注入 Sidecar） 可以控制启动顺序。 

* 4.部署应用时，nocalhost-dep 将自动将 InitContainers 注入 workloads。 根据声明的依赖关系，nocalhost-dep 会继续等待依赖服务的可用性。 

* 5.一旦所有依赖服务可用，InitContainer 退出，然后启动容器业务逻辑的容器。 没有重启，这意味着等待启动的时间最少。
