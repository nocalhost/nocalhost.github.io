## 什么是 DevMode

DevMode 是指开发者在使用 Nocalhost 进行微服务开发时，对应微服务工作负载的一个状态。在此状态下，工作负载会被转成成一种可方便支持开发者开发调试程序的模式。

TODO 补一个配图

## DevMode 相比于非 DevMode 有什么变化？

当前 Nocalhost 基于 Kubernetes 的开发支持中，DevMode 的主要变化为如下：

- 工作负载的副本数量会被调整为 1，方便开发
- Pod 的健康检查探针会被禁用（方便开发过程中不断尝试重启进程进行调试）
- Pod 的容器会被替换成 [DevContainer](https://nocalhost.dev/Concepts/devcontainer/){:target="_blank"}
- SecurityContext 会被禁用以方便开发
- Pod 会被注入一个 Nocalhost-Sidecar 容器以支持远程文件同步等
- Pod 会被增加一个 Volume 以支持 DevContainer 和 Nocalhost-Sidecar 间共享文件


## 如何转换为 DevMode？如何退出 DevMode

开发者无需登录 Nocalhost Web 控制台，直接在 IDE 插件中登录后，即可列出自己的 DevSpace 列表，可方便的在插件中部署，卸载，开发，调试应用。

![](../assets/images/devspace-list-plugin.png)

## 如何查看当前服务是否为 DevMode

1. 使用 nhctl 查看 DevMode 的状态

```
nhctl list <application_name>
```
![](../assets/images/devmode-nhctl.png)

1. 在插件端查看 DevMode 的状态

![](../assets/images/devmode-plugin.png)
