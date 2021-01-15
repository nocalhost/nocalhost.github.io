#### Nocalhost 支持开发依赖 Namespace、ClusterRole 等集群资源的应用吗？

Visual Studio Code 插件和 Nocalhost 服务器不支持，但 Nocalhost 命令行工具 `nhctl` 支持。未来会提供支持。

#### 误删 ~/.nh 目录，插件无法使用怎么办？

重启 Visual Studio Code 即可。

#### 插件端已经做 应用卸载 操作，kubernetes 集群工作负载没有释放

因为你的登录的账号发生改变，kubeconfig 也就发生了改变。目前暂时不支持账号切换。如果发生了该情况，需要手动删除之前资源。