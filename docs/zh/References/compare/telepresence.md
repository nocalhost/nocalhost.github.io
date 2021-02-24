# Telepresence

Telepresence 通过在集群中部署网络代理的 Pod，该 Pod 会将 Kubernetes 环境的数据（例如：TCP 连接、环境变量、卷）代理到本地进程。本地进程通过代理的方式连接到远端 Kubernetes 集群，以便直接通过 DNS 方式访问远端微服务。

Telepresence 的理念非常好，但具有以下缺点：

* 在某些受控的网络环境下可能无法与远端集群建立 VPN 连接。
* 本地使用 Docker Run 的方式运行服务，可能和 Pod 的运行方式存在一定差异，例如无法模拟 `InitContainer`
* 使用 `sshfs` 来挂载远端的卷，无法支持没有 WSL 的 Windows。
* 开发、调试流程不连续，需要在不同阶段人工执行数条命令。