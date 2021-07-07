升级一个 K8s 应用

## 用法

```
nhctl upgrade [NAME] [flags]
```

## 标记

```
Flags:
      --config string              specify a config relative to .nocalhost dir
  -r, --git-ref string             resources git ref
  -u, --git-url string             resources git url
      --helm-chart-name string     chart name
      --helm-repo-name string      chart repository name
      --helm-repo-url string       chart repository url where to locate the requested chart
      --helm-repo-version string   chart repository version
  -f, --helm-values string         helm's Value.yaml
  -h, --help                       help for upgrade
      --local-path string          local path for application
  -c, --outer-config string        specify a config.yaml in local path
      --resource-path strings      resources path
      --set strings                set values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)
```