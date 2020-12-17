## Nocalhost 配置

```yaml linenums="1"
# 应用名称
# 类型: 字符串(符合 dns1123 标准)
# 默认值: null
# 必须提供
# 对应 nhctl 参数: [NAME]
# 唯一
name: nocalhost

# 应用 manifest 类型
# 类型: 单选，可选项：helmGit/helmRepo/rawManiifest
# 默认值: null
# 必须提供
# 对应 nhctl 参数: --type,-t
manifest类型: helmGit

# helmGit类型此字段代表 Chart 相对于 Git 仓库根目录的位置。helmRepo 类型，此字段无意义。rawManifest 类型，此字段可以设置为 k8s manifest 文件夹相对于 Git 仓库的位置。
# 类型: 字符串[]
# 默认值: ["."]
# 必须提供
resourcePath: ["deployments/chart"]

# 指明应用是否以最小副本数量安装 (暂未实现，未来支持)
# 类型: boolean
# 默认值: false
# 可选
# 对应 nhctl 参数: TODO
minimalInstall: false

# 应用安装前的执行任务，须指定 k8s Job 的 yaml文件
# 类型: object[]
# 默认值: []
# 可选
onPreInstall:
    # Job 的 yaml 文件, 相对于 Git 仓库的根目录
    # 类型: 字符串
    # 必须提供
  - path: "job-1.yaml"

    # Job 名称
    # 类型: 字符串
    # 必须提供
    name: xxx-job

    # 执行顺序，越小越先执行
    # 类型: 整型
    # 默认值: 0
    # 可选
    priority: -1

  - path: "job-2.yaml"
    name: xxx2-job
    priority: 5

# 应用安装完毕后执行的任务，须指定 k8s Job 的 yaml文件 (暂未实现，未来支持)
# 类型: object[]
# 默认值: []
# 可选
onPostInstall:
    # Job 的 yaml 文件, 相对于 Git 仓库的根目录
    # 类型: 字符串
    # 必须提供
  - path: "job-1.yaml"

    # Job 名称
    # 类型: 字符串
    # 必须提供
    name: xxx-job

    # 执行顺序，越小越先执行
    # 类型: 整型
    # 默认值: 0
    # 可选
    priority: -1
  - path: "job-2.yaml"
    name: xxx2-job
    priority: 5

# 应用卸载前执行的任务，须指定 k8s Job 的 yaml文件 (暂未实现，未来支持)
# 类型: object[]
# 默认值: []
# 可选
onPreUninstall:
    # Job 的 yaml 文件, 相对于 Git 仓库的根目录
    # 类型: 字符串
    # 必须提供
  - path: "job-1.yaml"

    # Job 名称
    # 类型: 字符串
    # 必须提供
    name: xxx-job

    # 执行顺序，越小越先执行
    # 类型: 整型
    # 默认值: 0
    # 可选
    priority: -1
  - path: "job-2.yaml"
    name: xxx2-job
    priority: 5

# 应用卸载后执行的任务，须指定 k8s Job 的 yaml文件 (暂未实现，未来支持)
# 类型: object[]
# 默认值: []
# 可选
onPostUninstall:
    # Job 的 yaml 文件, 相对于 Git 仓库的根目录
    # 类型: 字符串
    # 必须提供
  - path: "job-1.yaml"

    # Job 名称
    # 类型: 字符串
    # 必须提供
    name: xxx-job

    # 执行顺序，越小越先执行
    # 类型: 整型
    # 默认值: 0
    # 可选
    priority: -1
  - path: "job-2.yaml"
    name: xxx2-job
    priority: 5

# 应用内的微服务列表
# 类型: object[]
# 默认值: []
# 可选
services:

    # 微服务的名字
    # 类型: 字符串
    # 默认值: null
    # 可选
  - name: service1

    # 微服务对应的 k8s 工作负载类型
    # 类型: 单选, 可选项: deployment/statefulset/pod/job/cronjob/daemonset 大小写不敏感
    # 默认值: deployment
    # 必须提供
    serviceType: deployment

    # 微服务的源码 Git 仓库地址
    # 类型: 字符串
    # 默认值: null
    # 必须提供
    gitUrl: "https://github.com/nocalhost/nocalhost.git"

    # 微服务的 DevContainer 镜像
    # 类型: 字符串
    # 默认值: null
    # 必须提供
    devContainerImage: "codingcorp.coding.net/xxxx/go:latest"

    # 进入 DevMode 时，默认的 shell 环境 (暂未实现，未来支持)
    # 类型: 字符串
    # 默认值: "/bin/sh"
    # 可选
    devContainerShell: "bash"

    # 文件同步模式 (暂未实现，未来支持)
    # "send" 单向同步本地文件到容器, "sendreceive" 双向同步
    # 类型: 单选，send/sendreceive
    # 默认值: "send"
    # 可选
    syncType: send

    # 在开发模式下要同步的目录列表
    # 类型: 字符串[]
    # 默认值: ["."]
    # 可选
    syncDirs:
      - "./src"
      - "./pkg/fff"

    # 在开发模式下要忽略同步的目录列表 (暂未实现，未来支持)
    # 类型: 字符串[]
    # 默认值: []
    # 可选
    ignoreDirs:
      - ".git"
      - "./build"

    # 在开发模式下需要转发的端口列表
    # 本地端口:远端端口
    # 类型: 字符串[]
    # 默认值: []
    # 可选
    devPort:
      - 8080:8080
      - :8000  # 随机本地端口, 远端 8000

    # 指明依赖的 Pods 标签选择器 (当前服务会等待被标签选择器选中的 Pod 处于 Ready 状态才启动)
    # 类型: 字符串[]
    # 默认值: []
    # 可选
    dependPodsLabelSelector:
      - "name=mariadb"
      - "app.kubernetes.io/name=mariadb"

    # 指明依赖的 Jobs 标签选择器 (当前服务会等待被标签选择器选中的 Job 执行完毕才启动)
    # 类型: 字符串[]
    # 默认值: []
    # 可选
    dependJobsLabelSelector:
      - "name=init-job"
      - "app.kubernetes.io/name=init-job"

    # 指定 DevContainer 的工作目录，源码会被传输到此目录 (暂未实现，未来支持)
    # 类型: 字符串
    # 默认值: "/home/nocalhost-dev"
    # 可选
    workDir: "/home/nocalhost-dev"

    # DevContainer 中需要持久化存储的目录列表 (暂未实现，未来支持)
    # 类型: 字符串[]
    # 默认值: ["/home/nocalhost-dev"]
    # 可选
    persistentVolumeDir:
      - "/home/nocalhost-dev"

    # 在源码根目录下执行的构建编译命令 (暂未实现，未来支持)
    # 类型: 字符串
    # 默认值: ""
    # 可选
    buildCommand: "./gradlew package"

    # 在源码根目录下执行的启动服务命令 (暂未实现，未来支持)
    # 类型: 字符串
    # 默认值: ""
    # 可选
    runCommand: "./gradlew bootRun"

    # 在源码根目录下执行的启动调试服务命令 (暂未实现，未来支持)
    # 类型: 字符串
    # 默认值: ""
    # 可选
    debugCommand: "./gradlew bootRun --debug-jvm"

    # 在源码根目录下执行的支持热加载的启动服务命令 (暂未实现，未来支持)
    # 类型: 字符串
    # 默认值: ""
    # 可选
    hotReloadRunCommand: "kill `ps -ef|grep -i gradlew| grep -v grep| awk '{print $2}'`; gradlew bootRun"

    # 在源码根目录下执行的支持热加载的启动调试服务命令 (暂未实现，未来支持)
    # 类型: 字符串
    # 默认值: ""
    # 可选
    hotReloadDebugCommand: "kill `ps -ef|grep -i gradlew| grep -v grep| awk '{print $2}'`; gradlew bootRun --debug-jvm"

    # 该服务的远程调试端口
    # 类型: 字符串
    # 默认值: ""
    # 可选
    remoteDebugPort: 5005

    # 使用 Git 仓库中的 .dev-container 声明来指定 DevContainer 镜像 (暂未实现，未来支持)
    # 类型: 字符串
    # 默认值: ""
    # 可选
    useDevContainer: false

  - name: service2
    ...
```