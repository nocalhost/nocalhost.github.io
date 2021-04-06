前置条件 ：

 - 一个 Kubernetes(1.16+) 集群(建议由云平台提供，Minikube 也可以) 
 - 配置好 kubectl 以管理员身份访问上述集群
 - 集群必须启用 RBAC
 - 安装好 Helm3 (推荐 Helm3.3+)
 - 安装好 Visual Studio Code(1.52+)
 - 安装好 Git
 - 安装 Nocalhost 客户端 (nhctl, IDE plugin) , [安装教程](https://nocalhost.dev/zh/installation/){:target="_blank"}
 - 安装 Nocalhost 服务端 (nocalhost-api, nocalhost-web)  [参考快速上手的第二步](https://nocalhost.dev/zh/getting-started/#nocalhost-server){:target="_blank"}

 ## 应用配置

 如果通过 `nhctl init demo` 来初始化 Bookinfo 应用，那么将自动创建 `bookinfo-kustomize` 应用，应用的配置文件为：https://github.com/nocalhost/bookinfo/blob/main/.nocalhost/config.kustomize.yaml

 ## 应用结构

 ```
 ├── kustomize
│   └── base
│       ├── dep-job.yaml
│       ├── detail.yaml
│       ├── kustomization.yaml
│       ├── pre-install
│       │   ├── print-num-job-01.yaml
│       │   └── print-num-job-02.yaml
│       ├── pre-install-cm.yaml
│       ├── productpage.yaml
│       ├── ratings.yaml
│       └── reviews.yaml
 ```

 在应用 base 目录下，存在 `kustomization.yaml` 文件，所以该应用的 resource_path 为 `kustomize/base`，`nhctl` 将会使用该配置文件进行安装。

 在插件端部署时，选择 `bookinfo-kustomize` 应用即可部署 `kustomize` 类型的 `bookinfo` 应用。