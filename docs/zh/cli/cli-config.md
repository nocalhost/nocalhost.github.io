应用/服务配置文件相关操作

```
用法:
nhctl config [command]

Available Commands:
  edit        edit service config
  get         get application/service config
  reload      reload application/service config
  template    get service config template
```

## nhctl config edit

编辑应用/服务的配置

```
nhctl config edit [Name] [flags]
```

```
示例: 
```

### 标记

```
Flags:
    --app-config               get application config
    -t, --controller-type string   kind of k8s controller,such as deployment,statefulSet
    -d, --deployment string        k8s deployment which your developing service exists
    -h, --help                     help for get

Global Flags:
    --debug               enable debug level log
    --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```

## nhctl config get

获取应用/服务的配置

```
nhctl config get [Name] [flags]
```

```
示例: 
```

### 标记

```
Flags:
    --app-config               get application config
    -t, --controller-type string   kind of k8s controller,such as deployment,statefulSet
    -d, --deployment string        k8s deployment which your developing service exists
    -h, --help                     help for get

Global Flags:
    --debug               enable debug level log
    --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```

## nhctl config reload

刷新应用/服务的配置

```
nhctl config reload [Name] [flags]
```

```
示例: 
```

### 标记

```
Flags:
    -t, --controller-type string   kind of k8s controller,such as deployment,statefulSet
    -d, --deployment string        k8s deployment which your developing service exists
    -h, --help                     help for reload

Global Flags:
    --debug               enable debug level log
    --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```

## nhctl config template

获取服务的配置模版

```
nhctl config template [Name] [flags]
```

```
示例: 
```

### 标记

```
Flags:
    -t, --controller-type string   kind of k8s controller,such as deployment,statefulSet
    -d, --deployment string        k8s deployment which your developing service exists
    -h, --help                     help for template

Global Flags:
    --debug               enable debug level log
    --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```