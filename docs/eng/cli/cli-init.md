初始化操作

```
用法:
  nhctl init [command]

Available Commands:
  demo        Init Nocalhost with demo mode
  dep         dep component
```

## nhctl init demo

Nocalhost 服务端（nocalhost-api, nocalhost-web, nocalhost-dep）初始化

### 用法

```
nhctl init demo [flags]
```

```
示例:

nhctl init demo -n [DevSpace Name] -t nodeport -p [port]
nhctl init demo -n [DevSpace Name]
```

### 标记

```
Flags:
      --force                         force to init, warning: it will remove all nocalhost old data
  -h, --help                          help for demo
      --inject-user-amount int        inject user amount, example 10, max is 999
      --inject-user-offset int        inject user id offset, default is 1 (default 1)
      --inject-user-template string   inject users template, example Techo%d, max length is 15
  -p, --port int                      for NodePort usage set ports (default 80)
      --set strings                   set values of helm
  -s, --source string                 (Deprecated) bookinfo source, github or coding, default is github
  -t, --type string                   set NodePort or LoadBalancer to expose nocalhost service

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```

## nhctl init dep

Nocalhost（nocalhost-dep）组件初始化

### 用法

```
nhctl init dep [flags]
```

### 标记

```
Flags:
  -h, --help   help for dep

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```
