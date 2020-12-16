#### Nocalhost 支持开发具备 HPA (Horizontal Pod Autoscaler) 控制的 Deployment 吗？

不支持。建议在部署应用完毕后，先去删除 HPA 控制器，再使用 Nocalhost 进行对指定服务进行开发。