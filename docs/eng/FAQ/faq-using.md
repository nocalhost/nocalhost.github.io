## Helm 工作负载名称

### Nocalhost 如何确定由 Helm 安装的工作负载对应于配置中的哪个服务？

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

## Nocalhost 支持开发运行多容器 Pod 的组件（服务）吗？

在 V2 版本的配置文件中可以对同一个 Pod 的多个容器声明开发配置即可指定开发哪个容器。

## 为什么在 Windows 下进入开发模式后无法编译代码？

这种情况有可能是因为操作系统的换行符不同导致的。例如，编译目标环境为 Linux 的代码，换行符为 `\n`，而在 Windows 下检出、编译或格式化等操作都有可能导致代码的换行符被转换成 `\r\n`。换行符的变化会导致部分构建工具（如 Gradle）无法正常运行。所以在进入开发模式前，请先根据实际需求配置好本地开发环境。

- git: Windows 下默认会开启换行符自动转换，即 `git checkout` 时将 `\n` 转换成 `\r\n`，`git commit`时将 `\r\n` 转换成 `\n`。如需配置，请参考 [Git 官方文档](https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-%E9%85%8D%E7%BD%AE-Git#_core-autocrlf)；
- Visual Studio Code: Windows 下默认使用 `\r\n`。如需修改全局配置，依次进入 File -> Preferences -> Settings -> Text Editor -> Files -> Eol；如需修改单个文件配置，直接单击右下角状态栏上的 `CRLF` 或 `LF` 进行切换；
- IntelliJ IDEA: Windows 下默认使用 `\r\n`。如需修改配置，依次进入 File -> Settings -> Editor -> Code Style -> Line seperator。

## Nocalhost 支持开发具备 HPA (Horizontal Pod Autoscaler) 控制的 Deployment 吗？

不支持。建议在部署应用完毕后，先去删除 HPA 控制器，再使用 Nocalhost 进行对指定服务进行开发。

## 为什么没有注册链接？怎么登录 Nocalhost Web？

Nocalhost 不支持用户注册。Nocalhost 服务器目前是设计给管理员使用的。

管理员可以通过默认账户邮箱密码登录。

默认邮箱：
```
admin@admin.com
```
默认密码：
```
123456
```
登录后，管理员可修改账户邮箱和密码，也可以对用户、集群和应用进行管理。

## Nocalhost 支持开发依赖 Namespace、ClusterRole 等集群资源的应用吗？

Visual Studio Code 插件和 Nocalhost 服务器不支持，但 Nocalhost 命令行工具 `nhctl` 支持。未来会提供支持。

## 误删 ~/.nh 目录，插件无法使用怎么办？

重启 Visual Studio Code 即可。

## 插件端已经做 应用卸载 操作，kubernetes 集群工作负载没有释放

因为你的登录的账号发生改变，kubeconfig 也就发生了改变。目前暂时不支持账号切换。如果发生了该情况，需要手动删除之前资源。
