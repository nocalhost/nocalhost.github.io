# Tilt

Tilt 可以自动执行从本地代码更改到更新过程的所有步骤：监视本地文件，重新构建容器映像并更新环境，就像是自动化的 `docker build && kubectl apply` 或 `docker-compose up`。

Tilt 很好，但无法避免每次更新代码都需要重新构建镜像并更新工作负载的过程。官方也推出了一种不需要每次重新构建镜像的方法[“live_update”](https://docs.tilt.dev/live_update_tutorial.html)，但配置起来比较复杂，并且也只是缩短了 `docker build` 的时间。