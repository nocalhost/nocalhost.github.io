# Tilt, Skaffold, Google Cloud Code

Tilt, Skaffold, Google Cloud Code 都可以自动执行从本地代码更改到更新过程的所有步骤：监视本地文件，重新构建容器映像并更新环境，就像是自动化的 `docker build && docker push && kubectl apply` 或 `docker-compose up`，可以理解为是本地的 CI/CD 工具。

他们都无法避免每次更新代码都需要重新构建镜像并更新工作负载的过程。Tilt推出了一种不需要每次重新构建镜像的方法[“live_update”](https://docs.tilt.dev/live_update_tutorial.html)，配置起来比较复杂，并且也只是缩短了 `docker build` 的时间。

Skaffold 具有 `beta` 版的文件同步功能，可以将本地的改动打包成 tar 并同步到容器中，无需重新构建镜像、重新部署和重启 POD，但目前仍然有一些使用限制。

Google Cloud Code 除了能够自动进行 CI/CD 流程以外，还提供了便于开发的 VS Code 和 IDEA 插件，但其与 Google 的云服务有较强的绑定。