---
title: nhctl dev
---

Dev Operations

```
Usage:
  nhctl dev [command]

Available Commands:
  associate   associate service dev dir
  cmd         Run cmd in dev container
  end         end dev model
  reset       reset service
  start       Start DevMode
  terminal    Enter dev container's terminal
```

## nhctl dev associate

Associate service dev dir


### Usage

```
nhctl dev associate [Name] [flags]
```

### Flags

```
Flags:
  -s, --associate string         dev mode work directory
  -t, --controller-type string   kind of k8s controller,such as deployment,statefulSet
      --de-associate             de associate(for test)
  -d, --deployment string        k8s deployment which your developing service exists
  -h, --help                     help for associate

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```

## nhctl dev cmd

Run cmd in dev container

### Usage 

```
nhctl dev cmd [NAME] [flags]
```

### Flags

```
Flags:
  -c, --container string          which container of pod to run command
  -t, --controller-type string    kind of k8s controller,such as deployment,statefulSet
  -d, --deployment string         K8s deployment which your developing service exists
      --dev-command-type string   Dev command type can be: build, run, debug, hotReloadRun, hotReloadDebug
  -h, --help                      help for cmd

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```

## nhctl dev end

End dev model


### Usage 

```
nhctl dev end [NAME] [flags]
```

### Flags

```
Flags:
  -t, --controller-type string   kind of k8s controller,such as deployment,statefulSet
  -d, --deployment string        k8s deployment which your developing service exists
  -h, --help                     help for end

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```

## nhctl dev reset

Reset service

### Usage 

```
nhctl dev reset [NAME] [flags]
```

### Flags

```
Flags:
  -t, --controller-type string   kind of k8s controller,such as deployment,statefulSet
  -d, --deployment string        k8s deployment which your developing service exists
  -h, --help                     help for reset

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```

## nhctl dev start

Start DevMode

### Usage 

```
nhctl dev start [NAME] [flags]
```

### Flags

```
Flags:
  -c, --container string           container to develop
  -t, --controller-type string     kind of k8s controller,such as deployment,statefulSet
  -d, --deployment string          k8s deployment your developing service exists
  -h, --help                       help for start
  -i, --image string               image of DevContainer
  -s, --local-sync strings         local directory to sync
      --priority-class string      PriorityClass used by devContainer
      --shell string               use current shell cmd to enter terminal while dev start success
      --sidecar-image string       image of nocalhost-sidecar container
      --storage-class string       StorageClass used by PV
      --syncthing-version string   versions of syncthing and this flag is use for debug only
      --without-sync               do not start file-sync while dev start success
      --without-terminal           do not enter terminal directly while dev start success
      --work-dir string            container's work directory

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```

## nhctl dev terminal

Enter dev container's terminal

### Usage 

```
nhctl dev terminal [NAME] [flags]
```

### Flags

```
Flags:
  -c, --container string         container to enter
  -t, --controller-type string   kind of k8s controller,such as deployment,statefulSet
  -d, --deployment string        k8s deployment which your developing service exists
  -h, --help                     help for terminal
      --pod string               pod to enter
      --shell string             shell cmd while enter dev container

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```