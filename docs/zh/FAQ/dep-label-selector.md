#### Nocalhost 具体是如何确定 Pods/Jobs 的启动顺序?

Nocalhost 配置文件 config.yaml 中的依赖声明决定了应用服务的启动顺序。

Nocalhost 会安排含有 `dependPodsLabelSelector` 和 `dependJobsLabelSelector` 选项中定义了标签的 Pod 或 Job 在服务启动前先启动。也就是说，服务在所有依赖的 Pod 启动就绪和所有依赖的 Job 执行完之前都不会启动。

例如，`foo` 服务的配置如下：

```
...
services:
  - name: foo
    dependPodsLabelSelector:
      - "app=mysql,region=shenzhen"
      - "app=redis"
...
```
当 Nocalhost 要启动 `foo` 服务的 Pod 时，会先选中含有 `app=mysql and region=shenzhen` 或 `app=redis` 标签的 Pod。这些选中的 Pod 会先被启动。一旦所有选中的 Pod 启动就绪后，Nocalhost 才启动 `foo` 服务。

