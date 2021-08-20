# Nocalhost Dep

Nocalhost Dep 是一个 Webhook admission, 用于处理应用安装时的服务依赖，通过在 nocalhost 配置中的 services[*].dependLabelSelector可以定义服务的依赖，Nocalhost Dep 会在安装应用时为容器注入一个 initContainer，该 initContainer 会保证其所依赖的服务成功运行后再创建该服务相关的容器