---
title: nhctl profile
---

Profile Management

```
Usage:
  nhctl profile [command]

Available Commands:
  get         Get a config item of Profile
  set         Set a config item of Profile
```

## nhctl profile get

Get a config item of Profile

### Usage

```
nhctl profile get [flags]
```

### Flags

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

Set a config item of Profile

### Usage

```
nhctl profile set [flags]
```

### Flags

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
