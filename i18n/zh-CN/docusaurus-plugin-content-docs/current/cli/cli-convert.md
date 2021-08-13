---
title: nhctl convert
---

Convert config file between different versions

## Usage

```
nhctl convert [flags]
```

## Flags

```
Flags:
  -d, --destFile string       File saves converted config
      --from-version string   From which version
  -h, --help                  help for convert
  -f, --srcFile string        File needs to get converted
      --to-version string     Convert to which version

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```