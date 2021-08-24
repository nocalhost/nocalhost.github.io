---
title: nhctl 安装
---

应用部署

## 用法

```
nhctl 安装 [NAME] [flags]
```

## 标签

```
标志：
      --config 字符串指定了一个相对于 . ocalhost 目录
  -r, --git-ref 字符串资源 git ref
  -u, --git-url 字符串资源git url
      --helm-chart-name 字符串图表名称
      --helm-repo-name 字符串图表库名称
      --helm-repo-url 字符串库库库库在哪里定位请求的图表
      --helm-repo-version 字符串库版本
  -f, --helm-values 字符串头盔的值。 aml
  -h, --help 帮助安装
      --ignore-pre-install 忽略预安装
      --local-path 本地路径以应用
  -c, --outer-config 字符串指定一个配置。 在本地路径
      --resour-path 字符串资源路径
      --set 字符串设定命令行上的值 (可以用逗号键1=val1 指定多个或单独的值) Eey2=val2
  -t, --type 字符串 nocalhost 应用程序类型：helmRepo, helmGit, helmLocal, rawManifest, rawManifestGit rawManifestLocal 或 kustomizeGit
      --等待完成

全局标志：
      --debug 启用调试级别日志
      --kubeconfig 字符串的 kubeconfig 文件路径
  -n, --namespace 字符串 kubernetes 命名空间
```

