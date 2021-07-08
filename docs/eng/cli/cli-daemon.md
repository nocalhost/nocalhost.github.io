nhctl daemon

```
Usage:
nhctl daemon [command]

Available Commands:
  info        Get nhctl daemon info
  restart     Restart nhctl daemon
  start       Start nhctl daemon
  status      Get nhctl daemon status
  stop        Stop nhctl daemon
```

## nhctl daemon info

### Usage

```
nhctl daemon info
```

```
Example:

> nhctl daemon info

> {"Version":"v0.4.12","CommitId":"0f02d7f90335076b502bca3f40ff42bd37ee55e6","NhctlPath":".nh/bin/nhctl","Upgrading":false}
```

### Flags

```
Flags:
  -h, --help   help for restart
      --sudo   Is run as sudo

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```

## nhctl daemon restart

重启 nhctl daemon

### Usage

```
nhctl daemon restart
```

```
Example:

> nhctl daemon restart
> RestartDaemonServerCommand has been sent
```

### Flags

```
Flags:
  -h, --help   help for restart
      --sudo   Is run as sudo

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```

## nhctl daemon start

Manually start nhctl daemon

### Usage

```
nhctl daemon start [flags]
```

### Flags

```
Flags:
  -d, --daemon   Is run as daemon(background)
  -h, --help     help for start
      --sudo     Is run as sudo

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```

## nhctl daemon status

View nhctl daemon status

### Usage

```
nhctl daemon status
```

```
Example:

> nhctl daemon status
> {"portForwardList":[]}
```

### Flags

```
Flags:
  -h, --help   help for status
      --sudo   Is run as sudo

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```

## nhctl daemon stop

Manually stop nhctl daemon

### Usage

```
nhctl daemon stop
```

### Flags

```
Flags:
  -h, --help   help for stop
      --sudo   Is run as sudo

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```


