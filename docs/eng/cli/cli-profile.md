Profile  管理

```
Usage:
  nhctl profile [command]

Available Commands:
  get         Get a config item of Profile
  set         Set a config item of Profile
```

## nhctl profile get

获取 Profile 汇总的一个配置项

### 用法

```
nhctl profile get [flags]
```

### 标记

```
Flags:
  -c, --container string    container name of pod
  -d, --deployment string   k8s workload name
  -h, --help                help for get
  -k, --key string          key of dev config
  -t, --type string         specify service type (default "deployment")

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```

## nhctl profile set

配置 Profile 中的一个配置项

### 用法

```
nhctl profile set [flags]
```

### 标记

```
Flags:
  -c, --container string    container name of pod
  -d, --deployment string   k8s workload name
  -h, --help                help for set
  -k, --key string          key of dev config
  -t, --type string         specify service type (default "deployment")
  -v, --value string        value of dev config

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```
