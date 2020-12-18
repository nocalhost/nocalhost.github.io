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

