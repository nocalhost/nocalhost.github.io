---
title: Dev Container configuration
---
[Overview](config-en.md) / [Spec](config-spec-en.md) / [Container](config-dev-container-en.md)

<br/>

******

### The Remote Directory for File Synchronization 

Example:

```yaml
name: nocalhost-api
serviceType: deployment
containers:
  - name: nocalhost-api
    dev:
      workDir: /home/nocalhost-dev
```

After entering DevMode, users need to select a local directory, or right-click the target workload and select  `Associate Local DIR` to do so in IDE plug-in. This directory local selected will be synchronized with the `workDir` of the container in DevMode.

`workDir` defaults to `/home/nocalhost-dev`

::: danger Note on workDir

`workDir` uses emptyDir to share in `container` ，so **this directory is empty** at the beginning.

:::

<br/>

******

### DevImage

Example:

```yaml
name: nocalhost-api
serviceType: deployment
containers:
  - name: nocalhost-api
    dev:
      image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/golang:zsh
```

DevImage is the basis of DevMode, which can be regarded as a 'remote Linux'. If you want to correctly compile and run the files synchronized from the local, you must use the proper DevImage. Nocalhost provides multiple official DevImage, and if you do not configure this field before entering DevMode, you are required to select or enter a DevImage to move on.

The official DevImages are regular images without any special change. Apart from the basic environment of various languages, such as  JRE, Maven in Java, there are also some built-in basic softwares such as git, openssh-client, zsh, bash, net-tools, tmux. If no official image is sutiable for you, you can customize your own DevImage. The DockerFile is in  [dev-container](https://github.com/nocalhost/dev-container).

:::tip Make your DevImage

If you want to customize DevImage, please place it in a repository that can be pulled by your K8s cluster.

:::

<br/>

******

### Shell in the Remote Container

Example:

```yaml
name: nocalhost-api
serviceType: deployment
containers:
  - name: nocalhost-api
    dev:
      shell: /bin/zsh
```

It is not a must to configure the shell, which defaults `zsh || bash || sh`. Using a proper Shell normally makes things easier and more efficient, such as the automatic supplement and history supplement functions provided by zsh.

Of course, the shell configuration also depends on the DevImage. If your DevImage does not support zsh, it will not work even if you have configured zsh as the shell. It will look for zsh, bash and sh in turn until it finds a usable one.


<br/>

******

### Persistence in Dev Container 

Example:

```yaml
name: nocalhost-api
serviceType: deployment
containers:
  - name: nocalhost-api
    dev:
      persistentVolumeDirs:
        - path: /the/path/you/want/to/persistent/in/container
          capacity: 10Gi
        - path: /other
          capacity: 10Gi
      storageClass: cbs
```

We know that if the directory is not persisted in K8s container, the previously generated data will be lost after the container is shut down or restarted, such as synchronized files, compiled contents, constructed contents, etc. Enabling persistence in Dev Container can greatly reduce such loss.


Persistence includes two parts:

- Which directories need to be persisted.  It is allowable not to configure this, and the default value will be empty. `path` indicates the directory that needs to be persisted in DevImage, and `capacity` indicates the space allocated for this directory persistence.  `persistentVolumeDirs ` is an array used to configure multiple path/capacity.
-  `storageClass`. Persistence requires `storageClass`  (`kubectl get storageclass `). If you do not configure `storageClass`, Nocalhost will use the default `storageClass` in the cluster to create PVC. If you have configured `storageClass`, PVC will be created by the corresponding  `storageClass`. 

:::info Pay Attention

`capacity` needs to satisfy the resource constraints of K8s.

:::

<br/>

******

### Resource Requests and Constraints in Dev Container

Example:

```yaml
name: nocalhost-api
serviceType: deployment
containers:
  - name: nocalhost-api
    dev:
      resources:
        limits:
          memory: 4Gi
          cpu: "1"
        requests:
          memory: 2Gi
          cpu: "0.5"
```

Nocalhost Dev Container inherits the resource settings of the original container. If there is no configuration in the original container and no `limitranges` (`kubectl get limitranges`) in the namespace, Dev Container will have no resource constraints.

Generally, after entering DevMode, the amount of the resource used will exceed the original image. Therefore, the resource configuration of the original container often leads to the failure of DevMode, such as OOM caused by insufficient memory. When such thing happens, you need to configure  `resources`  to provide more resource for DevImage.



:::info Pay Attention

`memory`  and `cpu` need to satisify the resource constraints of K8s.

:::

<br/>

******

### Sidecar Image Customization

Example:

```yaml
name: nocalhost-api
serviceType: deployment
containers:
  - name: nocalhost-api
    dev:
      sidecarImage: nocalhost-docker.pkg.coding.net/nocalhost/public/nocalhost-sidecar:sshversion
```

`sidecarImage` is a necessary image to enter DevMode, which is used for code synchronization, debug connection management, etc. `sidecarImage` defaults `docker.pkg.coding.net/nocalhost/public/nocalhost-sidecar:sshversion` and does not need to be configured manually.

If your cluster cannot get this image because of the network, you can pull this image and push it to the image repository that your cluster can access, and then configure it as a new address.

### Patches

Example:

```yaml
name: nocalhost-api
serviceType: deployment
containers:
  - name: nocalhost-api
    dev:
      patches:
        - patch: '[{"op": "add","path":"/metadata/annotations/nocalhost-patch","value":"hello-world"}]'
          type: json
        - patch: '{"spec":{"template":{"spec":{"containers":[{"name":"nocalhost-dev","resources":{"limits":{"cpu":"2"}}}]}}}}'
        - patch: '{"spec":{"template":{"spec":{"containers":[{"name":"nocalhost-sidecar","resources":{"limits":{"cpu":"2"}}}]}}}}'
          type: strategic
```

`patches` provide the function similar to `kubectl patch`. Users can use `patches` to flexibly modify the Spec of the workload in Nocalhost DevMode.

In which：

<br/>

** &nbsp • ** **type**: The type of patch. The optional values are  `json`, `merge`, `strategic`, and the default value is `strategic`

<br/>

** &nbsp • ** **patch**: The content of patch<br></br>

<br/>

To easily understand,  `type` and `patch` can be regarded as the `--type` and `--patch` parameters of `ubectl patch` command, respectively. To get more information about `kuebctl patch` , please see  [Update K8s API Object by kubectl patch](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/update-api-object-kubectl-patch/)

:::caution

Nocalhost will not validate the content of patch, so Nocalhost may fail to enter DevMode because of the improper contents of the patch. Please make sure the patch is correct.

:::
