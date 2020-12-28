
文件同步是 Nocalhost 进入`开发模式`的一项重要功能，只有在启用`开发模式`时才会启用，他是实现本地和远程文件自动同步的关键。它将根据配置或命令建立从本地到开发容器的隧道，并传输文件。

您可以通过`ntctl`使用它：

```
  nhctl sync [application_name]] [参数]
```

参数：

```
  -m，-daemon 布尔值，默认为 true，文件同步作为守护程序运行
  -d，--deployment 字符串，进入开发环境的工作负载名称
  -b，--double 布尔值，默认为 false，单向同步
  
全局参数：
      --debug 启用调试级别日志
      --kubeconfig 字符串，指定 kubeconfig 文件的路径
```


在使用IDE 插件进入`开发模式`时会自动启用文件同步，同步目录由配置项 `syncDirs` 决定，其路径代表相对于源码的目录，并同步到配置项 `workDir` 指定改的目录。

>注意：由于平台差异，当从 Windows 同步文件到 devContainer 时将丢失执行位，例如 Shell 脚本和其他无法在 Windows 下作为可执行的文件。您可以在 devContainer 中手动执行 `chmod + x filename' 来解决该问题。

文件同步使用 [Syncthing](https://github.com/syncthing/syncthing) 工具，Syncthing 控制台默认用户名和密码均为 “nocalhost”，您可以使用 `nhctl list [application_name]` 命令获取登陆控制台的端口。