# 配置参考

有关完整详细的 Nocalhost 配置规范，请参阅 [Nocalhost 配置](../reference/nh-config)

## `configProperties`

```yaml
configProperties:               # struct    | required | 指定配置文件属性
    version: v2                 # string    | required | 指定配置文件版本
    envFile: null               # string    | optional | env 名称，在当前配置文件相同目录下
```

## `application`

Nocalhost 将使用这些配置来管理应用程序。

```yaml
application:                    # struct    | required | 指定配置应用属性
    name: foo-app               # string    | required | 应用名称
    manifestType: rawManifest   # string    | required | 应用的 K8s manifest 类型
    resourcePath: []            # string[]  | required | 设置应用的相对路径目录
    helmVersion: 0.0.1          # string    | optional | 指定 helmRepo 类型应用默认的版本号
    ignoredPath: []             # string[]  | optional | 
    onPreInstall: ...           # struct    | optional | 应用安装前的执行任务
    helmValues: ...             # struct    | optional | 仅针对 Helm 应用类型有效，覆写 values.yaml 指定值
    env: ...                    # struct    | optional | 应用安装时为所有工作负载注入环境变量
    envFrom: ...                # struct    | optional | 应用安装时为所有工作负载注入环境变量（使用 env 文件）
    services: ...               # struct    | optional | 应用的服务配置
```

[了解有关如何配置应用部署的更多信息](./config-deploy)

### `application[*].onPreInstall`

```yaml
onPreInstall:
    - path: ""                  # string    | required | Job's yaml file, the relative path of the root directory
      weight: 0                 # integer   | required | Order of execution of job, the smallest will be executed first
```

[了解有关如何设置预安装配置的更多信息](./config-deploy#run-jobs-before-installing-the-application)

### `application[*].helmValues`

```yaml
helmValues:
    - kye: ""                   # string    | The Helm chart value key
      value: ""                 # string    | The Helm chart values
```

[详细了解如何覆盖 Helm Value](./config-deploy-helm#overwrite-helm-values)

### `application[*].env` and `application[*].envFrom`

```yaml
env: []

envFrom:
    envFile: []                 # string[]  | Optional  | Use envFile to inject environment variable for all workload 
```

[详细了解如何设置环境变量](./config-deploy##inject-environment-variable-to-workloads)

### `application[*].services`

Nocalhost 的服务与 Kubernetes Service 完全不同。 它为应用程序部署和开发提供了增强。

```yaml
services:
    - name: ""                      # string    | required | Name of the service, also is the display name in cluster
      serviceType: ""               # string    | required | The Kubernetes Workloads type corresponding to the service
      dependLabelSelector: ...      # struct    | optional | Dependent Pods label selector 
      container: ...                # struct    | optional | 
```
- `dependLabelSelector` - [了解如何配置工作负载的启动顺序](./config-deploy#manage-start-dependency)
- `container` - [详细了解如何配置开发模式](./config-dev)

:::info 不是必须的
服务配置不是必须的，不配置不会影响Nocalhost的使用。 这是增强功能，可为您提供更好的部署和开发体验。
:::
