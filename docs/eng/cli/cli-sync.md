将文件同步到远端 K8s 的 POD 中

## 用法

```
nhctl sync [NAME] [flags]
```

## 标识

```
Flags:
      --container string          container name of pod to sync
  -t, --controller-type string    kind of k8s controller,such as deployment,statefulSet
  -d, --deployment string         k8s deployment which your developing service exists
  -b, --double                    if use double side sync
  -h, --help                      help for sync
  -i, --ignored-pattern strings   local ignored pattern
      --overwrite                 override the remote changing according to the local sync folder while start up (default true)
      --resume                    resume file sync
      --stop                      stop file sync
  -s, --synced-pattern strings    local synced pattern

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```