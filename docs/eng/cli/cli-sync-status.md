Tracing the files sync status, include local folder and remote device

## Usage

```
nhctl sync-status [NAME] [flags]
```

## Flags

```
Flags:
  -t, --controller-type string   kind of k8s controller,such as deployment,statefulSet (default "deployment")
  -d, --deployment string        k8s deployment which your developing service exists (default "deployment")
  -h, --help                     help for sync-status
      --override                 override the remote changing according to the local sync folder

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```