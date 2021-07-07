获取资源信息

## 用法

```
nhctl get type [flags]
```

```
示例:

# 获取所有应用
nhctl get application --kubeconfig=kubeconfigfile

# 获取指定命名空间中的所有应用
nhctl get application -n namespaceName --kubeconfig=kubeoconfigpath
  
# 获取指定命名空间中的所有应用部署
nhctl get deployment -n namespaceName -a bookinfo --kubeconfig=kubeconfigpath
```

## 标记

```
Flags:
  -a, --application string        application name
  -h, --help                      help for get
  -o, --outputType string         json or yaml
  -l, --selector stringToString   Selector (label query) to filter on, only supports '='.(e.g. -l key1=value1,key2=value2) (default [])

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```
