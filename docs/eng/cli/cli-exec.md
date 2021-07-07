在容器中运行一段命令

## 用法

```
nhctl exec [NAME] [flags]
```

## 标记

```
Flags:
  -c, --command stringArray      command to execute in container
  -t, --controller-type string   kind of k8s controller,such as deployment,statefulSet
  -d, --deployment string        k8s deployment which your developing service exists
  -h, --help                     help for exec

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```
