
##nhctl commands
nhctl 可以用来部署应用和开发基于 Kubernetes 的应用，nhctl 跟 Kubernetes 交互需要依赖 kubectl 。可以通过 --kubeconfig 指定使用的 kubeconfig 文件。

语法：
nhctl [commond] [Name] [flags]

* commond 表示对资源具有的操作，如：config, install, dev, exec, port-foward 等
* Name 表示资源的名称，如：Application Name
* flags 表示可选参数，如：--kubeconfig 指定使用的 kubeconfig 文件

#### nhctl init
```
功能描述：Nocalhost 服务端（nocalhost-api, nocalhost-web, nocalhost-dep）初始化
synx: nhctl init [flags]
[flags]
      --force                         强制初始化服务端，注意：会清空服务端所有的数据
  -n, --namespace string              设置 DevSpace 名字，默认：nocalhost
  -t, --type string                   服务端暴露外网的方式：[NodePort|LoadBalancer]
  -p, --port int                      type = NodePort 方式，需要设置暴露端口，默认是 80
  

[usage]
nhctl init -n [DevSpace Name] -t nodeport -p [port]
nhctl init -n [DevSpace Name]
```

#### nhctl config
```
功能描述：应用/服务的开发参数配置查看
synx: nhctl config get [Name] [flags]

[flags]
-d, --deployment string   服务名称

[usage]
nhctl config get [Application Name] 
nhctl config get [Application Name] -d [service Name]


功能描述：应用/服务的开发参数配置修改
synx: nhctl config edit [Name] [flags]

[flags]
-c, --content string      开发配置参数内容，格式需要是 base64
-d, --deployment string   服务名称

[usage]
nhctl config edit [Application Name] -d [service Name] -c [content]

``` 
#### nhctl describe
```
功能描述：查看应用运行时的状态信息
synx: nhctl describe [Name] 

[usage]
nhctl describe [Application Name]
```
#### nhctl list
```
功能描述：查看应用处于开发中的服务（开发状态，同步状态，同步的目录，端口映射）
synx: nhctl list [Name] 

[usage]
nhctl list [Application Name]

示例：
nhctl list bookinfo
+-------------+------------+---------+--------------------+---------------------------------------+---------------------+
|    NAME     | DEVELOPING | SYNCING | DEV-PORT-FORWARDED |               SYNC-PATH               | LOCAL-SYNCTHING-GUI |
+-------------+------------+---------+--------------------+---------------------------------------+---------------------+
| productpage | true       | true    | [39080:9080]       | [d:\workspace\go-project\productpage] |               52031 |
+-------------+------------+---------+--------------------+---------------------------------------+---------------------+
```
#### nhctl dev
```
功能描述：开启 DevMode
synx：nhctl dev start [Name][flags]

[flags]
  -d, --deployment string      应用中服务名称
  -h, --help                   命令帮助
  -i, --image string           DevContainer 镜像地址
  -l, --lang string            服务的开发语言, 如：java/go/python
  -s, --local-sync strings     需要同步的本地哪个目录下的所有文件到 Devcontainer
      --work-dir string        Devcontainer 指定哪个目录来接收 本地同步上去的文件

[usage]
nhctl dev start [Applicaton Name] -d [Service Name] -l [java|go|python] -s [local dir] --work-dir [work dir] --kubeconfig [absolute path of kubeconfig]



功能描述：进入 DevContainer 容器
synx：nhctl dev terminal [Name][flags]

[Flags]
  -d, --deployment string   应用中的服务名称

[usage]
nhctl dev terminal [Application Name] -d [Service Name] --kubeconfig [absolute path of kubeconfig]



功能描述：DevMode 结束
synx：nhctl dev end [Name][flags]

[Flags]
  -d, --deployment string   应用中的服务名称

[usage]
nhctl dev end [Application Name] -d [Service Name] --kubeconfig [absolute path of kubeconfig]
```
#### nhctl sync
```
功能描述：文件同步
synx：nhctl sync [Name][flags]

[Flags]
  -d, --deployment string   应用中的服务名称
  -m, --daemon              是否以后台进程运行，默认是 true，取值：[true|false]
  -b, --double              是否使用双向同步，默认是 false, 取值：[true|false]

[usage]
nhctl sync [Application Name] -d [Service Name] --kubeconfig [absolute path of kubeconfig]
```
#### nhctl port-forward
```
功能描述：端口转发
synx：nhctl port-forward [NAME] [flags]

[Flags]
  -d, --deployment string   应用中的服务名称
  -m, --daemon              是否以后台进程运行，默认是 true，取值：[true|false]
  -p, --dev-port strings    端口指定，格式：[local port:remote port], :8080(随机本地端口)

[usage]
nhctl port-forward [Application Name] -d [Service Name] -p [local port : remote port] --kubeconfig [absolute path of kubeconfig]
```
#### nhctl exec
```
功能描述：在指定服务的容器中执行命令
synx：nhctl exec [NAME] [flags]

[Flags]
  -d, --deployment string   应用中的服务名称
  -c, --command stringArray 需要在容器中执行的命令

[usage]
nhctl exec [Application Name] -d [Service Name] -c [command] --kubeconfig [absolute path of kubeconfig]
``` 
        
#### nhctl install
```
功能描述：应用安装
synx：nhctl install [NAME] [flags]

[Flags]
  -c, --config string              config.yaml 路径
  -r, --git-ref string             git 的 commitId
  -u, --git-url string             git 仓库地址
      --helm-chart-name string     helm chart 的名字
      --helm-repo-name string      helm chart 的仓库名字
      --helm-repo-url string       helm chart 的仓库地址
      --helm-repo-version string   heml chart 的版本
  -f, --helm-values string         hlem 的 Value.yaml 路径
      --ignore-pre-install         忽略 pre-install 的依赖部署
  -n, --namespace string           kubernetes namespace
      --resource-path strings      相对仓库的路径
      --set strings                helm 部署方式，指定多个参数，跟使用 Value.yaml 效果一样
  -t, --type string                支持安装的应用类型: helm or helm-repo or manifest

[usage]
nhctl install [Application Name] -u [a git repo url which contains helm chart or manifests] --kubeconfig [absolute path of kubeconfig]
```

         
#### nhctl uninstall
```
功能描述：应用卸载
synx：nhctl uninstall [NAME] [flags]

[Flags]
  --force   强制卸载

[usage]
nhctl uninstall [Application Name] [--force 可选] --kubeconfig [absolute path of kubeconfig]
```


#### nhctl version
```
功能描述：nhctl 版本信息
synx: nhctl version

[usage]
nhctl version

```

#### nhctl help
```
功能描述：nhctl 命令帮助
synx:  nhctl help [command]

[usage]
nhctl help config

```


