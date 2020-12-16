#### Nocalhost 如何确定由 Helm 安装的工作负载对应于配置中的哪个服务？

默认情况下，Nocalhost 通过集群中工作负载的名称来识别服务的。但通过 Helm 安装的工作负载名称有可能是通过 Chart 模板生成的。

如果 Chart 是通过 Helm 提供的模板创建的，Nocalhost 会通过查找以 `<release-name>-<service-name>` 形式命名的工作负载来作为对应的服务。例如，config.yaml 定义了如下的服务：

```
...
services:
  - name: productpage
    serviceType: deployment
```

当我们通过 `nhctl`(Helm) 安装下面的应用：

```
$ nhctl install dev -u <git-repo-url>
$ kubectl get deployment -n test
NAME                             READY   UP-TO-DATE   AVAILABLE   AGE
dev-productpage   0/1     1            0           9s
```

如果集群中没有名为 `productpage` 的工作负载，则 Nocalhost 会把 `dev-productpage` 认为是用户在 config.yaml 中配置的 `productpage` 服务。

如果 Chart 不是通过 Helm 提供的模板创建的，或工作负载不是通过上述方式安装的，Nocalhost 则无法确定 config.yaml 中定义的服务所对应的工作负载。在这种情况下，你应该配置准确的工作负载名称。

建议在 Helm Chart 中使用静态工作负载名称。