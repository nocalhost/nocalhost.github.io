leveldb 相关操作

```
用法:
nhctl db [command]

Available Commands:
  all         Get all leveldb data
  compact     compact leveldb data
  put         update leveldb data
  size        Get all leveldb data size
```

## nhctl db all

获取所有 leveldb 数据

### 用法

```
nhctl db all [NAME] [flags]
```

### 标记
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

压缩所有 leveldb 数据

### 用法

```
nhctl db compact [NAME] [flags]
```

### 标记
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

更新 leveldb 数据

### 用法

```
nhctl db put [flags]
```

### 标记

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

获取所有 leveldb 的大小

### 用法

```
nhctl db size [NAME] [flags]
```

### 标记

```
Flags:
      --app string   List leveldb data of specified application
  -h, --help         help for size

Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
  -n, --namespace string    kubernetes namespace
```