View, save and check application config file

```
Usage:
nhctl config [command]

Available Commands:
  edit        edit service config
  get         get application/service config
  reload      reload application/service config
  template    get service config template
```

## nhctl config edit

Edit service config

```
nhctl config edit [Name] [flags]
```

### Flags

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

Get application/service config

```
nhctl config get [Name] [flags]
```

```
示例: 
```

### Flags

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

Reload application/service config

```
nhctl config reload [Name] [flags]
```

### Flags

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

Get service config template

```
nhctl config template [Name] [flags]
```

### Flags

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