在 Nocalhost 控制 Pod 进入 **开发模式** 时，设置的 **开发容器镜像** 会被启动成为 **DevContainer** 替代原本的容器。之后，开发者可以在 **DevContainer** 中构建，运行，调试自己的程序了。

**开发容器镜像** 可以使用我们提供的镜像或自己按需定制。

## 关于 DevContainer 镜像制作的建议

你可以使用任何 **Docker** 镜像来作为 **DevContainer** 镜像，只要他包含基本的 `shell (/bin/sh)` 即可。

但在实际使用中，强烈建议为特定技术栈的服务提供专属的 **DevContainer** 镜像。一个好的 **DevContainer** 镜像应该：

- 提供易用的 shell，如：bash,zsh 等
- 提供构建源码所需的基础 SDK，如 JDK
- 提供构建源码所需的工具链，如 git，maven，yarn，make 等
- 提供构建源码所需的第三方依赖包或者自动下载配置，如配置 Maven 镜像源
- 提供开发过程需要的其他调试工具，如 gdb，curl，tcpdump，mysql-client 等
- 不要包含服务的源代码（源代码应该通过源码管理系统检出到本地，并同步到 DevContainer 中。）

## Nocalhost 提供的 DevContainer 镜像

可以从 [DevContainer Image](https://github.com/nocalhost/dev-container) 下载。

## 如何配置 DevContainer

1. 选择一个微服务，点击 <img src='../../../assets/images/icons/nocalhost-config-icon.jpg' width="20" /> 对该服务进行配置

2. 在下述配置文件中，修改 `image` 字段：

```yml hl_lines="11"
containers:
  - name: productpage
    install:
      env: []
      envFrom:
        envFile: []
      portForward:
        - 39080:9080
    dev:
      gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-productpage.git
      image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage
      shell: bash
```

在进行调试时，Nocalhost 会将 DevContainer 的启动命令覆盖为 `/bin/sh -c tail -f /dev/null` 以确保 DevContainer 不会意外退出。关于 **DevMode** 下，Nocalhost 做的其他变动，请查看 [DevMode](../core-concept#devmode)。