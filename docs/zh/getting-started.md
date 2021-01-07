---
title: 快速上手
---

## 开始之前

前置条件:

- Kubernetes 1.16+ 集群
    * 建议使用公有云服务
    * 支持 Minikube
    * 已启用 RBAC
    * Node 节点 2 核 4G 或以上
- 安装 kubectl 并已配置管理员身份访问上述集群
- 安装 Helm3
- 安装 Visual Studio Code(1.52+) 
- 安装 Git
- 集群内和集群外都能访问 Kubernetes api-server

## 第一步: 安装 nhctl 和 VSCode extension

参考此链接进行安装: [https://nocalhost.dev/zh/installation/](https://nocalhost.dev/zh/installation/){:target="_blank"}

## 第二步: 初始化集群并且部署 Nocalhost Server

- 可选由云平台提供的 Kubernetes: 如 [腾讯 TKE](https://cloud.tencent.com/product/tke){:target="_blank"} :

> 对于 TKE 集群，配置开放外网访问：0.0.0.0/0 或集群出口 IP 来实现集群内外可访问 Kubernetes api-server。

在命令行终端执行初始化:
```
nhctl init -n nocalhost -p 7000
```

- 或使用 Minikube: 以 docker 或者 virtualbox 模式启动 minikube:

在 **minikube(docker driver)**(`minikube start --driver=docker`) 启动完毕, 在命令行终端执行初始化:
```
nhctl init -n nocalhost -t nodeport -p 80
```

!!! note "关于使用无法提供 LoadBalancer 和 PV 支持的 Kubernetes 发行版"
    可以使用 NodePort 替代 LoadBalancer，关闭数据库持久化（仅用于体验环境）
    ```
    nhctl init -n nocalhost -t nodeport -p 7000 --force --set mariadb.primary.persistence.enabled=false
    ```

等待初始化过程:

[ ![](../assets/images/initializing.png) ](../assets/images/initializing.png){:target="_blank"}

初始化完毕后:

[ ![](../assets/images/init-completed.png) ](../assets/images/init-completed.png){:target="_blank"}

**[MINIKUBE 方案注意]: 为了保持端口转发，请不要关闭上述 Terminal**

!!! note " `nhctl init` 命令行参数"
    - --namespace: 指定安装在哪个集群.(会自动创建不存在的集群)
    - --port: 指定 Nocalhost Web 监听的端口.(默认是 80)
    - --set: 指定覆盖 Nocalhost Helm Chart 的 value
    - --type: 指定 Nocalhost Web 的 Service Type(nodeport or loadbalaner)
    --force: 强制初始化，请注意它将删除所有 Nocalhost 的旧数据

    你可以根据你的集群情况，配置上述 init 参数来执行初始化过程.

## 第三步: 配置并登陆 Nocalhost VSCode 插件

在 VSCode 中进入插件页面, 在左侧面板中点击 "Config Server URL" 按钮:

[ ![](../assets/images/config-server-url.png) ](../assets/images/config-server-url.png){:target="_blank"}


输入从 **第二步** 获得的访问地址, 如果你使用的是 `Minikube`，那么可以输入固定地址 `http://127.0.0.1:31219`，按下回车键保存.

分别输入用户名和密码，按下回车键保存:

- 用户名: foo@nocalhost.dev
- 密码: 123456

在登录之后，你可以看到:

[ ![](../assets/images/signedin.png) ](../assets/images/signedin.png){:target="_blank"}

## 第四步: 安装示例应用: bookinfo

点击左侧面板上的安装图标，安装应用: bookinfo.

[ ![](../assets/images/signedin.png) ](../assets/images/signedin.png){:target="_blank"}

点击之后，Nocalhost 会开始执行安装过程.

[ ![](../assets/images/wait-for-start.png) ](../assets/images/wait-for-start.png){:target="_blank"}

你可以点击刷新图标来查看应用安装和启动过程中的状态变化。

在所有微服务都启动完毕后，你可以看到：

[ ![](../assets/images/app-started.png) ](../assets/images/app-started.png){:target="_blank"}

现在，你可以访问安装的应用的 web 页面了：

[http://127.0.0.1:39080/productpage](http://127.0.0.1:39080/productpage){:target="_blank"}

[ ![](../assets/images/before-change.png) ](../assets/images/before-change.png){:target="_blank"}

## 第五步: 进入开发模式

你可以点击某个工作负载右侧的绿色锤子图标来把工作负载切换到开发模式.

[ ![](../assets/images/click-green-hammer.png) ](../assets/images/click-green-hammer.png){:target="_blank"}

选择 "Clone from Git repo" 并指定一个本地存储目录后，Nocalhost 会把源码 clone 下来.

[ ![](../assets/images/clone-repo.png) ](../assets/images/clone-repo.png){:target="_blank"}

源代码检出后, Nocalhost 会打开一个新 VSCode 窗口，并继续切换到开发模式.

在开发模式切换（初次使用，时间可能较长）完毕后，你会看到:

[ ![](../assets/images/devmode.png) ](../assets/images/devmode.png){:target="_blank"}

在开发模式下，开发容器默认没有启动主进程，所以不会响应网页端的请求，此时如果刷新页面，页面将出错。直到你再次启动进程后，页面才会恢复。

如果你切换开发模式的工作负载是 productpage 的话，你可以执行 `sh run.sh` 来启动 hot-reload 模式的进程:

[ ![](../assets/images/run-sh.png) ](../assets/images/run-sh.png){:target="_blank"}

## 第六步: 改动一些代码，并查看运行结果

你可以尝试修改一些代码，并刷新页面看效果。

例如, 在文件 **productpage.py** 的 355 行添加 **Hello Nocalhost!** . 别忘了保存文件.

[ ![](../assets/images/code-changes.png) ](../assets/images/code-changes.png){:target="_blank"}

刷新网页，即可立即看到效果。 [http://127.0.0.1:39080/productpage](http://127.0.0.1:39080/productpage){:target="_blank"} 😄

[ ![](../assets/images/after-change.png) ](../assets/images/after-change.png){:target="_blank"}

## 恭喜!

通过这个简单的基于 Nocalhost 的教程，你已经体验了云原生开发的便捷和强大。可以开始尝试在真实的项目中配置并使用 Nocalhost 了。

Nocalhost 欢迎您的意见和建议. GitHub Issues: [https://github.com/nocalhost/nocalhost](https://github.com/nocalhost/nocalhost){:target="_blank"}
