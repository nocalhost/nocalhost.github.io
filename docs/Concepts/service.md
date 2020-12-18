## What is Service

`Service` is completely different from `svc` of `kubernetes`. `Service` can be considered as an enhancement of `Deployment`, corresponding to a specific service in your application. `Service` assumes two roles currently:



-Configure the `Nocalhost` `Dev-Mode`, such as which directory after entering the development container, which files are synchronized to the development container, etc.

-Supports `deployment` startup sequence control based on dependencies



**These configurations are not required! You can create `Application`, `Cluster`, deploy your application, etc. with out any `Service` configuration at all. `Service` only to be configured when you need it.** 



`Service` usually configured in `.nocalhost/config.yaml` in your application's git dir as global default configuration, such as [config.yaml](https://github.com/nocalhost/bookinfo/blob/main/.nocalhost/config.yaml). `User` can modify in local by using `IDE Plugin` or `nhctl`, the changes only take effect locally.



Modify local config by using `IDE Plugin`:

[PIC]




For example, `Nocalhost` supports controlling the startup sequence of a resource. For example, a `deployment` depend on the completion of a `k8s job`, then the following configuration can be done:

```
services:
  -name: details
    type: deployment
    dependJobsLabelSelector:
    -"dep-job"
```



This means that your `kind: Deployment` `name: Deployment` resource [detail.yaml](https://github.com/nocalhost/bookinfo/blob/main/manifest/templates/detail.yaml) will depend on A `name: dep-job` task [dep-job.yaml](https://github.com/nocalhost/bookinfo/blob/main/manifest/templates/bookinfo/dep-job.yaml) is executed.

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: details
```



## Feature provided by Service



### 1. Support for `Dev-Mode`

As mentioned earlier, `Service` assumes two roles. One is to support the `Dev-Mode`. Let's take the following configuration as an example to explain one by one:

```
services:
   -name: productpage
    serviceType: deployment
    gitUrl: https://github.com/nocalhost/bookinfo-productpage
    devContainerImage: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage
    workDir: /home/nocalhost-dev
    syncDirs:
    -./
    devPorts:
    -39080:9080
```



#### `name` and `serviceType`

When you want to use `service`, `name` and `serviceType` are required to locate a manifest. Currently, only `deployment` is supported. For example, there is a `Deployment` with the name 'details':

```
kind: Deployment
metadata:
  name: details
```

To configure it, you need to configure the following under `services` in **config.yaml**:

```
  -name: productpage
    serviceType: deployment
```



#### devContainerImage

When entering the container after start `Dev-Mode`, the development container will actually be used to replace the target image you specified. We will provide a default development container for most development languages. This container usually contains some commonly used debugging tools and libraries.



Of course, you can also use your own mirror, such as:

```
services:
  -name: productpage
    serviceType: deployment
    devContainerImage: foo/bar/python:dev
```



#### gitUrl

It is used to pull your source code corresponding to this `Service`. When entering `Dev-Mode`, you can choose a local directory to synchronize into the development container, or you can choose to pull the source code from the `git` repository. If you have configured `gitUrl`, we will automatically check out the code from this `gitUrl` for you.



#### syncDirs (optional)

Optional, type array, specify which folders of the source directory to synchronize to the development container, the default is `.`, means all.

```
services:
  -name: productpage
    serviceType: deployment
    syncDirs:
    -foo/
    -bar/
```



#### workDir(optional)

This is an option to indicate the working directory after entering the development mode and the directory where the synchronized files are stored. The default value os workDir is  `/home/nocalhost-dev`.



#### devPorts

The automatically forwarded port will be automatically forwarded to the local port after entering the development mode. The format is `localPort:remotePort`, such as:

```
services:
  -name: productpage
    serviceType: deployment
    devPorts: 8080:10000
```



It can also support configured as  `:10000`, which will randomly forward to a local port.



### 2. Specify the startup sequence dependency

`Service-dependencey` is a `Service` configuration, and it depends on a `Nocalhost` component called `nocalhost-dep`. It supports `deployment` startup sequence control based on dependencies



> Caution: `nocalhost-dep` depends on k8s [admission webhooks](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/), so please ensure that the Kubernetes cluster is at least as new as v1.16.0 and ensure that MutatingAdmissionWebhook and ValidatingAdmissionWebhook admission controllers are enabled.



#### dependPodsLabelSelector

It means to wait for at least one pod with this label to be in the RUNNING state, otherwise the Service will wait under init container state. For example, a service such as a deployment 'productpage' depends on another service 'foo':

```
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: foo
```



Then you can configure this `service` as follows:

```
services:
  -name: productpage
    serviceType: deployment
    dependPodsLabelSelector:
    -"app=foo"
```



#### dependJobsLabelSelector

It means waiting for a `job` with specified `label` to have completed and become `Succeeded` state. Gor example, a deployment 'productpage' depends on a job:

```
apiVersion: batch/v1
kind: Job
metadata:
  labels:
    foo: bar
```



You can also configure this `service` as follows:

```
services:
  -name: productpage
    serviceType: deployment
    dependJobsLabelSelector:
    -"foo=bar"
```



## Best practices



### 1. The best practice in without any service configuration in advance

As mentioned earlier, you can use `Nocalhost` with out any `Service` configuration. When you want to start the `Dev-Mode`, `IDE Plugin` will generate a template file for you automatically, you needs to modify that template and save.



Click the gear with an exclamation mark, and we will generate a template file for you:

![](../../assets/images/concept/service-default.png)



#### Modify the develop container image

Manually modify `devContainerImage`, currently we provide `python`, `golang`, `ruby`, `node`, `perl`, `rust`, `php`, `java` these default development images.



The image format is as follows:

```
codingcorp-docker.pkg.coding.net/nocalhost/dev-images/LANGUAGE:latest
```



For example, if you want to use the default image of `java`, you can modify `devContainerImage` to `codingcorp-docker.pkg.coding.net/nocalhost/dev-images/java:latest`. Or you can use any other mirror, we will use /bin/bash, /bin/csh or /bin/sh as the default command to enter this image by default.



#### Specify `gitUrl` (optional)

Before you enter the `Dev-Mode`, `IDE plugin` will let you choose to specify the source directory from the local or check it out from `git`. If you already have the source code of this `deployment` at your disk, you do not need to configure the `gitUrl`,  simply select `Open local derectory`.

![](../../assets/images/concept/enter-dev-mode.png)



Conversely, if you want `Nocalhost` to check it out for you automatically, modify `girUrl` to the corresponding value.



#### Modify `syncDirs` (optional)

In the configuration template provided by default, we will automatically synchronize all files in the specified git repo (or the selected directory) :

```
syncDirs:
  -"."
```



If you only want to synchronize specified directories, you can modify them, such as:

```
syncDirs:
  -"bar/"
  -"foo/"
```



#### Enter `Dev-Mode`

After finishing the above configuration, click the hammer to enter the development mode. We will replace the original image with the image specified in the configuration, and synchronize the corresponding files to this container.



### 2. Best practice with config the .nocalhost/config.yaml

If you want to maintain a default configuration, add a .nocalhost folder in the root directory and add a **config.yaml** file in the `git` repository specified by `Application`.

```
.nocalhost/
config.yaml
README.MD
kubemanifest/
xxx.yaml
...
foo.java
...
```



E.g:

```
services:
  -name: productpage
    serviceType: deployment
    gitUrl: https://github.com/nocalhost/bookinfo-productpage
    devContainerImage: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage
    workDir: /home/nocalhost-dev
    syncDirs:
    -./
    devPorts:
    -39080:9080
    dependJobsLabelSelector:
    -"dep-job"
  -name: details
    serviceType: deployment
    gitUrl: https://github.com/nocalhost/bookinfo-details.git
    devContainerImage: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/ruby:2.7.1-slim
    syncDirs:
    -./
    workDir: /home/nocalhost-dev
  -name: ratings
    serviceType: deployment
    gitUrl: https://github.com/nocalhost/bookinfo-ratings.git
    devContainerImage: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/node:12.18.1-slim
    workDir: /home/nocalhost-dev
    syncDirs:
    -./
    dependJobsLabelSelector:
    -"dep-job"
    dependPodsLabelSelector:
    -"productpage"
    -"app.kubernetes.io/name=productpage"
```

When the user `Install` the `Application`, nocalhost will get these default configurations, such as the `deployment` of 'ratings'. Click the gear to view the current configuration:

![](../../assets/images/concept/modify-service-config.png)

Users can freely make modifications based on these configurations. **And these modifications only take effect locally. **