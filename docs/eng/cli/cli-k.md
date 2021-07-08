kubectl

```
Usage:
  nhctl k [command]

Available Commands:
  delete      Delete resources by filenames, stdin, resources and names, or by resources and label selector.
  exec        Execute a command in a container
  logs        Print the logs for a container in a pod or specified resource
```

## nhctl k delete

### Usage

```
nhctl k delete [flags]
```

``` 
Example:

nhctl k delete [podName] --namespace nocalhost-reserved --kubeconfig=[path]
```

### Flags

```
Flags:
      --all                             Delete all resources, including uninitialized ones, in the namespace of the specified resource types.
  -A, --all-namespaces                  If present, list the requested object(s) across all namespaces. Namespace in current context is ignored even if specified with --namespace.
      --cascade string[="background"]   Must be "background", "orphan", or "foreground". Selects the deletion cascading strategy for the dependents (e.g. Pods created by a ReplicationController). Defaults to background. (default "background")
      --dry-run string[="unchanged"]    Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource. (default "none")
      --field-selector string           Selector (field query) to filter on, supports '=', '==', and '!='.(e.g. --field-selector key1=value1,key2=value2). The server only supports a limited number of field queries per type.
  -f, --filename strings                containing the resource to delete.
      --force                           If true, immediately remove resources from API and bypass graceful deletion. Note that immediate deletion of some resources may result in inconsistency or data loss and requires confirmation.
      --grace-period int                Period of time in seconds given to the resource to terminate gracefully. Ignored if negative. Set to 1 for immediate shutdown. Can only be set to 0 when --force is true (force deletion). (default -1)
  -h, --help                            help for delete
      --ignore-not-found                Treat "resource not found" as a successful delete. Defaults to "true" when --all is specified.
  -k, --kustomize string                Process a kustomization directory. This flag can't be used together with -f or -R.
      --now                             If true, resources are signaled for immediate shutdown (same as --grace-period=1).
  -o, --output string                   Output mode. Use "-o name" for shorter output (resource/name).
      --raw string                      Raw URI to DELETE to the server.  Uses the transport specified by the kubeconfig file.
  -R, --recursive                       Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.
  -l, --selector string                 Selector (label query) to filter on, not including uninitialized ones.
      --timeout duration                The length of time to wait before giving up on a delete, zero means determine a timeout from the size of the object
      --wait                            If true, wait for resources to be gone before returning. This waits for finalizers. (default true)

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```

## nhctl k exec

### Usage

```
nhctl k exec [flags]
```

```
Example:

exec (POD | TYPE/NAME) [-c CONTAINER] [flags] -- COMMAND [args...]
```

### Flags

```
Flags:
  -c, --container string   Container name. If omitted, the first container in the pod will be chosen
  -h, --help               help for exec
  -i, --stdin              Pass stdin to the container
  -t, --tty                Stdin is a TTY

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```

## nhctl k logs

### Usage

```
nhctl k logs [flags]
```

```
Example:

nhctl logs [podName] -c [containerName] -f=true --tail=1 --namespace nocalhost-reserved --kubeconfig=[path]
```

### Flags

```
Flags:
      --all-containers                     Get all containers' logs in the pod(s).
  -c, --container string                   Print the logs of this container
  -f, --follow                             Specify if the logs should be streamed.
  -h, --help                               help for logs
      --ignore-errors                      If watching / following pod logs, allow for any errors that occur to be non-fatal
      --insecure-skip-tls-verify-backend   Skip verifying the identity of the kubelet that logs are requested from.  In theory, an attacker could provide invalid log content back. You might want to use this if your kubelet serving certificates have expired.
      --limit-bytes int                    Maximum bytes of logs to return. Defaults to no limit.
      --max-log-requests int               Specify maximum number of concurrent logs to follow when using by a selector. Defaults to 5. (default 5)
      --pod-running-timeout duration       The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running (default 20s)
      --prefix                             Prefix each log line with the log source (pod name and container name)
  -p, --previous                           If true, print the logs for the previous instance of the container in a pod if it exists.
  -l, --selector string                    Selector (label query) to filter on.
      --since duration                     Only return logs newer than a relative duration like 5s, 2m, or 3h. Defaults to all logs. Only one of since-time / since may be used.
      --since-time string                  Only return logs after a specific date (RFC3339). Defaults to all logs. Only one of since-time / since may be used.
      --tail int                           Lines of recent log file to display. Defaults to -1 with no selector, showing all log lines otherwise 10, if a selector is provided. (default -1)
      --timestamps                         Include timestamps on each line in the log output

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```

