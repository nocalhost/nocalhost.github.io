---
title: Enhance configuration
---
[Overview](config.md) / [Spec](config-spec.md) / [Enhance](config-enhance.md)

<br/>

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

### 文件同步

```yaml
name: nocalhost-api
serviceType: deployment
containers:
  - name: nocalhost-api
    dev:
      sync:
        type: send
        mode: pattern
        filePattern:
          - .
        ignoreFilePattern:
          - ".git"
          - ".github"
          - ".vscode"
          - "node_modules"
```

<br/>

******

文件同步的配置包括两个部分，其一是同步类型 `containers[].dev.sync.type`，可配置为

:::note

 - send，意为仅发送，所有的变更以本地为准，远程的变更不会影响到本地（默认方式）
 - sendReceive，意为双向同步，即一端的新增、修改、删除等操作将同步到另一端

:::

<br/>

******

其二是同步忽略控制，我们知道，进入开发模式要选择一个本地的关联目录，默认情况下，Nocalhost 将同步目录下所有的文件，如果不想要同步所有内容，则可以进行定制。

Nocalhost 提供了两种同步内容控制方式，`containers[].dev.sync.mode`

:::note

 - pattern，意为使用模式匹配来进行同步内容控制（默认方式）
 - gitIgnore，意为使用目录的 gitIgnore 来忽略部分文件进行上传

:::

<br/>

******



#### 使用 pattern 模式

如果想要对同步的内容使用模式匹配，可配置 filePattern 和 ignoreFilePattern 来进行定制，如只同步构建产物，或者忽略与构建无关的所有文件等。

如本小节所给出的示例意为，以 **只发送** 的形式来进行文件同步，同步所有的文件内容，并忽略命名为 `.git`、`.github`、`.vscode` 以及 `node_modules` 的文件与目录。

:::info Pattern

[点击这里查看 Pattern 的详细配置与语法](config-pattern.md)

:::

<br/>

#### 使用 gitIgnore 模式 (功能未发布)

使用这种模式较为简便，它将自动使用该 `git` 项目的忽略配置，例如 `.gitignore` 等。

:::warning 限制

由于此功能基于 `git` 实现，所以当前使用的设备上必须安装 `git`。另外，同步目录需要是一个 `git` 项目所在的目录。

如果不满足上述两个条件，Nocalhost 将不启用同步内容控制，表现的行为为"同步目录下的所有文件"，**相当于没有进行任何同步配置控制**。

:::

<br/>

:::tip 哪些文件被忽略了？

你可以定位到同步目录下（如 `cd /yourpath`），输入 `git status --ignored=matching -s` 来查看那些被忽略的文件/文件夹。以 `!!` 开头的文件/文件夹将不会被同步到远端。

:::

<br/>

示例：
```yaml
name: nocalhost-api
serviceType: deployment
containers:
  - name: nocalhost-api
    dev:
      sync:
        type: send
        mode: gitIgnore
```