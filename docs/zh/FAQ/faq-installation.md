## Kubernetes 版本支持

`Nocalhost` 支持 Major:"1", Minor:"12+" 以上的 k8s 版本，不过我们推荐使用 v1.16+。

因为 1.16+ 可以支持 [服务依赖功能](/References/service-dependency)：

- Ensure that the Kubernetes cluster is at least as new as v1.16 (to use `admissionregistration.k8s.io/v1`), or v1.9 (to use `admissionregistration.k8s.io/v1beta1`).
- Ensure that MutatingAdmissionWebhook and ValidatingAdmissionWebhook admission controllers are enabled. [Here](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#is-there-a-recommended-set-of-admission-controllers-to-use) is a recommended set of admission controllers to enable in general.
- Ensure that the `admissionregistration.k8s.io/v1` or `admissionregistration.k8s.io/v1beta1` API is enabled.

可以看看 k8s 的文档 [adminssion web hooks](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#prerequisites).

## 增加 Inotify Limit

如果你的文件在 linux 中同步太慢，很可能是由于 inotify 限制。

### 如何增加 inotify limit 确保 filesystem watcher 正常工作？

Linux 通常限制每个用户的监视数量（通常为 8192）。 当您有更多目录时，您需要调整该数字。

在许多 Linux 发行版上，您可以运行以下命令来修复它：

```shell
echo "fs.inotify.max_user_watches=204800" | sudo tee -a /etc/sysctl.conf
```

在 Arch Linux 和其他可能的情况下，最好将此行写入单独的文件，即您应该运行：
```shell
echo "fs.inotify.max_user_watches=204800" | sudo tee -a /etc/sysctl.d/90-override.conf
```

这仅在重新启动后生效。 要立即调整限制，请运行：

```shell
sudo sh -c 'echo 204800 > /proc/sys/fs/inotify/max_user_watches'
```

## Nocalhost 为什么无法使用已加密的 SSH 私钥克隆代码？

目前不支持使用已加密的 SSH 私钥。未来会提供支持。

## 无可用的 pv

我们不会自动帮你创建 `pv`，如果你的 `pvc` 处于 `pending` 状态，显示 `no persistent volumes available for this claim and no storage class is set`，那么你应该根据下面配置来创建一个 pv：

```
apiVersion: v1
kind: PersistentVolume
metadata:
  name: nocalhost-mariadb-pv-volume
  labels:
    type: local
spec:
  storageClassName: ""
  persistentVolumeReclaimPolicy: Recycle
  volumeMode: Filesystem
  capacity:
    storage: 20Gi
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: "/foo/bar"
```

需要注意的是，`storageClassName` 必须是空的，否则无法进行绑定。另外，注意 `storage` 需要大于 10G（大于 `pvc` 所声明的大小）



`nocalhost` 需要用到 `mariadb`，而且它默认使用的用户是 **mysql**. 所以你需要修改 `pv` 挂载目录的权限：

```
chown -R 1001:1001 /foo/bar
```

