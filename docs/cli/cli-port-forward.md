---
title: nhctl port-forward
---

Port-forward

```
Usage:
  nhctl port-forward [command]

Available Commands:
  end         stop port-forward
  list        list port-forward
  start       Forward local port to remote pod's port
```

## nhctl port-forward end

### Usage

```
nhctl port-forward end [NAME] [flags]
```

### Flags

```
Flags:
  -d, --deployment string   k8s deployment which you want to forward to
  -h, --help                help for end
  -p, --port string         stop specify port-forward
  -t, --type string         specify service type (default "deployment")

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```

## nhctl port-forward list

### Usage

```
nhctl port-forward list [NAME] [flags]
```

### Flags

```
Flags:
  -h, --help   help for list
      --json   use json as out put
      --yaml   use yaml as out put

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```

## nhctl port-forward start

### Usage

```
nhctl port-forward start [NAME] [flags]
```

### Flags

```
Flags:
  -c, --container string    which container of pod to run command
  -d, --deployment string   k8s deployment which you want to forward to
  -p, --dev-port strings    port-forward between pod and local, such 8080:8080 or :8080(random localPort)
      --follow              stock here waiting for disconnect or return immediately
  -f, --forward             forward actually, deprecated
  -h, --help                help for start
      --pod string          specify pod name
  -t, --type string         specify service type (default "deployment")
      --way string          specify port-forward way, deprecated (default "manual")

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```


