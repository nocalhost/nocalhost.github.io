---
title: Enhance configuration
---
[Overview](config.md) / [Spec](config-spec.md) / [Enhance](config-enhance.md)
******

### 开发模式后自动端口转发

```yaml
name: nocalhost-api
serviceType: deployment
containers:
  - name: nocalhost-api
    dev:
      portForward:
        - 8080:80
        - 3306:3306
```

如果你希望在进入开发模式后，**自动**将某些开发容器端口与本地进行打通，可以进行相应的配置。


:::danger 小端口权限问题
如果本地监听的端口需要权限，如 ubuntu 或者 windows 系统下的小端口(1024 以下)，则无法在启动开发模式以后自动转发。
:::

<br/>

******

### 源码地址

```yaml
name: nocalhost-api
serviceType: deployment
containers:
  - name: nocalhost-api
    dev:
      gitUrl: git@github.com:nocalhost/nocalhost.git
```

源码地址指的是当前服务所对应的 git 源码目录，用于在**本地没有对应源码的时候快速便捷将源码下载到本地**，可支持 http/https 协议与 ssh 协议。

:::tip
能否真正克隆下来**取决于操作者使用的设备是否有权限**
:::


适宜场景为提前配置好各个服务的 gitUrl，这样，对于团队协作来说，可以省去团队之间服务与业务的沟通成本。

<br/>

******

### 开发模式同步 Pattern

```yaml
name: nocalhost-api
serviceType: deployment
containers:
  - name: nocalhost-api
    dev:
      sync:
        type: send
        filePattern:
          - .
        ignoreFilePattern:
          - ".git"
          - ".github"
          - ".vscode"
          - "node_modules"
```



我们知道，进入开发模式要选择一个本地的关联目录，默认情况下，Nocalhost 将同步目录下所有的文件。如果想要对同步的内容使用模式匹配，可使用强大的 filePattern 和 ignoreFilePattern 来进行定制，如只同步构建产物，或者忽略与构建无关的所有文件等。

[点击这里查看 Pattern 的详细配置](config-pattern.md)