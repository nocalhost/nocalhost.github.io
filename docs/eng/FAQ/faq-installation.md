## Kubernetes Version Support

`Nocalhost` supports Major:"1", Minor:"12+" versions of kubernetes, but we recommend that you to use v1.16+.

That's because if your want to use [service dependencies](../../best-practice/service-best/#service_2) control between services:

- Ensure that the Kubernetes cluster is at least as new as v1.16 (to use `admissionregistration.k8s.io/v1`), or v1.9 (to use `admissionregistration.k8s.io/v1beta1`).
- Ensure that MutatingAdmissionWebhook and ValidatingAdmissionWebhook admission controllers are enabled. [Here](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#is-there-a-recommended-set-of-admission-controllers-to-use) is a recommended set of admission controllers to enable in general.
- Ensure that the `admissionregistration.k8s.io/v1` or `admissionregistration.k8s.io/v1beta1` API is enabled.

see [adminssion web hooks](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#prerequisites).

## Increase Inotify Limit

If your file synchronization is too slow in linux, it is most likely due to inotify limit.

### How do I increase the inotify limit to get my filesystem watcher to work?

Linux typically restricts the amount of watches per user (usually 8192). When you have more directories you need to adjust that number.

On many Linux distributions you can run the following to fix it:

```shell
echo "fs.inotify.max_user_watches=204800" | sudo tee -a /etc/sysctl.conf
```

On Arch Linux and potentially others it is preferred to write this line into a separate file, i.e. you should run:
```shell
echo "fs.inotify.max_user_watches=204800" | sudo tee -a /etc/sysctl.d/90-override.conf
```

This only takes effect after a reboot. To adjust the limit immediately, run:

```shell
sudo sh -c 'echo 204800 > /proc/sys/fs/inotify/max_user_watches'
```

## Why Nocalhost can not clone codes with SSH key that need passphrase for SSH private keys?

Nocalhost does not support currently. We will support it later.

## PVC unbound

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
