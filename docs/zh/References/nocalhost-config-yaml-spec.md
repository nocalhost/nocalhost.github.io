## Nocalhost 配置

```yaml linenums="1"
# 指定配置文件属性
# 类型: 对象
# 默认值: {}
# 必须
configProperties:
  # 指定配置文件版本
  # 类型: string
  # 默认值: null
  # 必须
  version: v2
  # env 名称，在当前配置文件相同目录下
  # 类型: string
  # 默认值: null
  # 可选
  envFile: env.dev

application:
  # 应用名称
  # 类型: string(符合 dns1123 标准)
  # 默认值: null
  # 必须提供
  # 对应 nhctl 参数: [NAME]
  # 唯一
  name: coding-agile
  # 应用 manifest 类型
  # 类型: 单选，可选项：helmGit/helmRepo/rawManifest/rawManifestLocal/helmLocal
  # 默认值: null
  # 必须提供
  # 对应 nhctl 参数: --type,-t
  manifestType: rawManifest
  # helmGit: Chart 相对于 Git 仓库根目录的位置
  # helmRepo: 无含义
  # rawManifest: k8s manifest 文件夹相对于 Git 仓库的位置
  # rawManifestLocal: k8s manifest 文件夹相对于本地应用目录的位置
  # helmLocal: chart path: Chart 相对于本地应用目录仓库根目录的位置
  # 类型: string[]
  # 默认值: ["."]
  # 必须
  resourcePath: []
  # helmGit: 无含义
  # helmRepo: 无含义
  # rawManifest: 忽略的 k8s manifest 目录，相对于Git 仓库的位置
  # rawManifestLocal: 忽略的 k8s manifest 目录，相对于本地应用目录的位置
  # helmLocal: 无含义
  # 类型: string[]
  # 默认值: ["."]
  # 可选
  ignoredPath: []
  # 应用安装前的执行任务，须指定 k8s Job 的 yaml文件
  # 类型: object[]
  # 默认值: []
  # 可选
  onPreInstall: 
    # Job 的 yaml 文件, 相对于 Git 仓库的根目录
    # 类型: string
    # 必须提供
  - path: "job-1.yaml"

    # Job 名称
    # 类型: string
    # 必须提供
    name: xxx-job

    # 执行顺序，越小越先执行
    # 类型: int
    # 默认值: 0
    # 可选
    priority: -1

  - path: "job-2.yaml"
    name: xxx2-job
    priority: 5
  # 仅针对 Helm 应用类型有效，覆写 values.yaml 指定值
  # 类型: object[]
  # 默认值: []
  # 可选
  helmValues:
    - key: DOMAIN
      value: ${DOMAIN:-www.coding.com}
    - key: DEBUG
      value: ${DEBUG:-true}
  # 应用安装时为所有工作负载注入环境变量
  # 类型: object[]
  # 默认值: []
  # 可选
  env: 
    - name: DEBUG
      value: ${DEBUG:-true}
    - name: DOMAIN
      value: "www.coding.com"
  # 应用安装时为所有工作负载注入环境变量（使用 env 文件）
  # 如果同时指定了 env 和 envFrom，那么取并集，交集部分以 env 为准
  # 类型: object[]
  # 默认值: []
  # 可选
  envFrom: 
    envFile: 
      - path: dev.env
      - path: dev.env
  # 应用内的微服务列表
  # 类型: object[]
  # 默认值: []
  # 可选
  services:
    # 微服务的名字,对应 Kubernetes 集群中的工作负载名称
    # 类型: string
    # 默认值: null
    # 必须
    - name: e-coding
      # 微服务对应的 k8s 工作负载类型
      # 类型: 单选, 可选项: deployment/statefulset/pod/job/cronjob/daemonset 大小写不敏感
      # 默认值: deployment
      # 必须
      serviceType: deployment
      # 服务所依赖的工作负载的标签选择器
      # 类型: object
      # 默认值: null
      # 可选
      dependLabelSelector: 
        # 指明依赖的 Pods 标签选择器 (当前服务会等待被标签选择器选中的 Pod 处于 Ready 状态才启动)
        # 类型: string[]
        # 默认值: []
        # 可选
        pods: 
          - "name=mariadb"
          - "app.kubernetes.io/name=mariadb"
        # 指明依赖的 Jobs 标签选择器 (当前服务会等待被标签选择器选中的 Job 执行完毕才启动)
        # 类型: string[]
        # 默认值: []
        # 可选
        jobs:
          - "job-name=init-job"
          - "app.kubernetes.io/name=init-job"
      containers:
        # 当 Pod 有多个容器时，则为需要开发的容器提供配置
        # 类型: string
        # 默认值: ""
        # 可选
        - name: coding
          # 执行容器的安装参数
          # 类型: object
          # 默认值: {}
          # 可选
          install: 
            # 当应用被安装时，为指定容器注入环境变量
            # 类型: object[]
            # 默认值: []
            # 可选
            env: 
              - name: DEBUG
                value: "true"
              - name: DOMAIN
                value: "www.coding.com"
            # 当应用被安装时，为指定容器注入环境变量（使用 env 文件）
            # 如果同时指定了 env 和 envFrom，那么取并集，交集部分以 env 为准
            # 类型: object[]
            # 默认值: []
            # 可选
            envFrom: 
              envFile: 
                - path: dev.env
                - path: dev.env
            # 应用被安装后自动转发的端口列表
            # 本地端口:远端端口
            # 类型: string[]
            # 默认值: []
            # 可选
            portForward:
              - 3306:3306
          # 指定开发参数配置
          # 类型: object
          # 默认值: {}
          # 必须
          dev:
            # 微服务的源码 Git 仓库地址
            # 类型: string
            # 默认值: null
            # 必须
            gitUrl: xxx-job
            # 微服务的 DevContainer 镜像
            # 类型: string
            # 默认值: null
            # 必须
            image: java:8-jdk
            # 进入 DevMode 时，默认的 shell 环境
            # 类型: string
            # 默认值: "/bin/sh"
            # 可选
            shell: "bash"
            # 指定 DevContainer 的工作目录，源码会被传输到此目录
            # 类型: string
            # 默认值: "/home/nocalhost-dev"
            # 可选
            workDir: "/root/nocalhost-dev"
            # 指定 DevContainer 的资源申请和限制，配置信息符合 Kubernetes 对资源限定的约定
            # 类型: object
            # 默认值: {}
            # 可选
            resources:
              limits:
                cpu: "1"
                memory: 1Gi
              requests:
                cpu: "0.5"
                memory: 512Mi
            # DevContainer 中需要持久化存储的目录列表
            # 类型: string[]
            # 默认值: ["/home/nocalhost-dev"]
            # 可选
            persistentVolumeDirs: 
              # 开发容器中要持久化的目录路径
              # 类型: string
              # 默认值: null
              # 必填
              - path: "/root"
                # 目录的容量，符合 k8s 标准写法
                # 类型: string
                # 默认值: 10Gi
                # 可选
                capacity: 100Gi
            # 指定编辑器插件的运行命令(暂未实现，未来支持)
            # 类型: object
            # 默认值: {}
            # 可选
            command: 
              # 在源码根目录下执行的构建编译命令
              # 类型: string
              # 默认值: ""
              # 可选
              build: ["./gradlew", "package"]
              # 在源码根目录下执行的启动服务命令
              # 类型: string
              # 默认值: ""
              # 可选
              run: ["./gradlew", "bootRun"]
              # 在源码根目录下执行的启动调试服务命令
              # 类型: string
              # 默认值: ""
              # 可选
              debug: ["./gradlew", "bootRun", "--debug-jvm"]
              # 在源码根目录下执行的支持热加载的启动服务命令
              # 类型: string
              # 默认值: ""
              # 可选
              hotReloadRun: ["bash", "-c", "kill `ps -ef|grep -i gradlew| grep -v grep| awk '{print $2}'`; gradlew bootRun"]
              # 在源码根目录下执行的支持热加载的启动调试服务命令
              # 类型: string
              # 默认值: ""
              # 可选
              hotReloadDebug: ["bash", "-c", "kill `ps -ef|grep -i gradlew| grep -v grep| awk '{print $2}'`; gradlew bootRun --debug-jvm"]
            # 指定编辑器插件 debug 参数(暂未实现，未来支持)
            # 类型: object
            # 默认值: {}
            # 可选
            debug: 
              # 指定远程调试端口
              # 类型: int
              # 默认值: null
              # 可选
              remoteDebugPort: 5005
            # 使用 Git 仓库中的 .dev-container 声明来指定 DevContainer 镜像 (暂未实现，未来支持)
            # 类型: string
            # 默认值: ""
            # 可选
            useDevContainer: false
            # 指定进入开发模式后的文件同步参数
            # 类型: object
            # 默认值: {}
            # 可选
            sync: 
              # 文件同步模式
              # "send" 单向同步本地文件到容器, "sendreceive" 双向同步
              # 类型: 单选，send/sendreceive
              # 默认值: "send"
              # 可选
              type: send
              # 在开发模式下要同步的目录列表
              # 类型: string[]
              # 默认值: ["."]
              # 可选
              filePattern: 
                - "./src"
                - "./pkg/fff"
              # 在开发模式下要忽略同步的目录列表
              # 类型: string[]
              # 默认值: []
              # 可选
              ignoreFilePattern:
                - ".git"
                - "./build"
            # 进入开发模式额外后注入的环境变量
            # type: object[]
            # 默认值: {}
            # 可选
            env: 
            - name: DEBUG
              value: "true"
            - name: DOMAIN
              value: "www.coding.com"
            # 进入开发模式额外后注入的环境变量（使用 env 文件）
            # 类型: object
            # 默认值: {}
            # 可选
            envFrom:
              envFile: 
                - path: dev.env
                - path: dev.env
            # 进入开发模式后自动转发的端口列表
            # 本地端口:远端端口
            # 类型: string[]
            # 默认值: []
            # 可选
            portForward:
            - 3306:3306
```

## V1 配置（已弃用）

```yaml linenums="1"
# 应用名称
# 类型: 字符串(符合 dns1123 标准)
# 默认值: null
# 必须提供
# 对应 nhctl 参数: [NAME]
# 唯一
name: nocalhost

# 应用 manifest 类型
# 类型: 单选，可选项：helmGit/helmRepo/rawManifest
# 默认值: null
# 必须提供
# 对应 nhctl 参数: --type,-t
manifestType: helmGit

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

    # 微服务的名字,对应 Kubernetes 集群中的工作负载名称
    # 类型: 字符串
    # 默认值: null
    # 必须提供
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
    syncFilePattern:
      - "./src"
      - "./pkg/fff"


    # 在开发模式下要忽略同步的目录列表
    # 类型: 字符串[]
    # 默认值: []
    # 可选
    ignoreFilePattern:
      - ".git"
      - "./build"

    # 进入开发模式后自动转发的端口列表
    # 本地端口:远端端口
    # 类型: 字符串[]
    # 默认值: []
    # 可选
    devPorts:
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
      - "job-name=init-job"
      - "app.kubernetes.io/name=init-job"

    # 指定 DevContainer 的工作目录，源码会被传输到此目录
    # 类型: 字符串
    # 默认值: "/home/nocalhost-dev"
    # 可选
    workDir: "/root/nocalhost-dev"

    # DevContainer 中需要持久化存储的目录列表
    # 类型: 字符串[]
    # 默认值: ["/home/nocalhost-dev"]
    # 可选
    persistentVolumeDir:
 
      # 开发容器中要持久化的目录路径
      # 类型: 字符串
      # 默认值: null
      # 必填
      - path: "/root"

        # 目录的容量
        # 类型: 字符串
        # 默认值: 10Gi
        # 可选
        capacity: 100Gi

    # 在源码根目录下执行的构建编译命令
    # 类型: 字符串
    # 默认值: ""
    # 可选
    buildCommand: ["./gradlew", "package"]

    # 在源码根目录下执行的启动服务命令
    # 类型: 字符串
    # 默认值: ""
    # 可选
    runCommand: ["./gradlew", "bootRun"]

    # 在源码根目录下执行的启动调试服务命令
    # 类型: 字符串
    # 默认值: ""
    # 可选
    debugCommand: ["./gradlew", "bootRun", "--debug-jvm"]

    # 在源码根目录下执行的支持热加载的启动服务命令
    # 类型: 字符串
    # 默认值: ""
    # 可选
    hotReloadRunCommand: ["bash", "-c", "kill `ps -ef|grep -i gradlew| grep -v grep| awk '{print $2}'`; gradlew bootRun"]

    # 在源码根目录下执行的支持热加载的启动调试服务命令
    # 类型: 字符串
    # 默认值: ""
    # 可选
    hotReloadDebugCommand: ["bash", "-c", "kill `ps -ef|grep -i gradlew| grep -v grep| awk '{print $2}'`; gradlew bootRun --debug-jvm"]

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

    # 指定 DevContainer 的资源申请和限制,配置信息符合 Kubernetes 对资源限定的约定 (暂未实现，未来支持)
    # 类型: 对象
    # 默认值: {}
    # 可选
    devContainerResources:
      limits:
        cpu: "1"
        memory: 1g
      requests:
        cpu: "0.5"
        memory: 200m

  - name: service2
    ...
```