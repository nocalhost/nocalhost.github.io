We won‘t create a pv for you automatically, you should create a pv manually like this if your pvc is pending in unbound state:

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

The `storageClassName` of pv should be empty and make sure pv has greater capacity than pvc used.



`nocalhost` run the `mariadb` with user **mysql** . So you need to adjust the permissions for the data directory mapped:

```
chown -R 1001:1001 /foo/bar
```

