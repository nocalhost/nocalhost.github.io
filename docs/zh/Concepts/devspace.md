## 什么是 DevSpace

DevSpace 是 Nocalhost 的一个概念，其代表由 Nocalhost 管理的一个预分配的云端开发的空间，开发者可以在 DevSpace 中随时部署，卸载，开发，调试应用。DevSpace 之间是隔离的，未来 Nocalhost 也支持让开发者把自己的 DevSpace 共享给其他开发者，实现开发协作。因为 DevSpace 的隔离性，也可以被用作测试环境。

![](../../assets/images/devspace-concept.png)


当前，Nocalhost 支持基于 Kubernetes 的云原生应用开发，在 Kubernetes 体系下， DevSpace 由一个 Kubernetes Namespace 和 对应 Namespace 的 ServiceAccount 组成。此外，目前 DevSpace 仅关联一个应用和一个开发者，在创建 DevSpace 的时候，必须指定 DevSpace 所在的集群、所属的开发者和关联的应用。

![](../../assets/images/devspace-web.png)

## 管理者如何管理 DevSpace

Nocalhost 提供了 web 控制台，用于给管理员创建、删除 DevSpace。

![](../../assets/images/devspace-management.png)

## 开发者如何使用 DevSpace 

开发者无需登录 Nocalhost Web 控制台，直接在 IDE 插件中登录后，即可列出自己的 DevSpace 列表，可方便的在插件中部署，卸载，开发，调试应用。

![](../../assets/images/devspace-list-plugin.png)

