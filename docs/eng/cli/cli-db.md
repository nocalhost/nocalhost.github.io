leveldb operations

```
Usage:
nhctl db [command]

Available Commands:
  all         Get all leveldb data
  compact     compact leveldb data
  put         update leveldb data
  size        Get all leveldb data size
```

## nhctl db all

Get all leveldb data

### Usage

```
nhctl db all [NAME] [flags]
```

### Flags
```
Flags:
      --app string   List leveldb data of specified application
  -h, --help         help for all

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```

## nhctl db compact

Compact leveldb data

### Usage

```
nhctl db compact [NAME] [flags]
```

### Flags
```
Flags:
      --app string   Leveldb data of specified application
  -h, --help         help for compact
      --key string   The key of leveldb data

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```

## nhctl db put

Update leveldb data

### Usage

```
nhctl db put [flags]
```

### Flags

```
Flags:
      --app string     Leveldb data of specified application
  -f, --file string    The value of leveldb data
  -h, --help           help for put
      --key string     The key of leveldb data
      --value string   The value of leveldb data

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```

## nhctl db size

Get all leveldb data

### Usage

```
nhctl db size [NAME] [flags]
```

### Flags

```
Flags:
      --app string   List leveldb data of specified application
  -h, --help         help for size

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```