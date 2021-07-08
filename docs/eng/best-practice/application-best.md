Nocalhost supports to use the following types to install application:

* Manifest
* Helm
* Kustomize

You can select the deployment method of matching type to deploy your application in Kubernetes, and then develop via Nocalhost IDE plugin. In addition, You can also use Nocalhost Server to manage your applications. Please read Nocalhost Server [Quick Start](../server/quick-start) and [Using Nocalhost Server](../server/using-server).

## Deploy Application by Helm Chart

You can using existing **Helm Chart** to deploy application.

### Deploy Helm application from local and remote repo

#### Deploy from Local

If you have configured a Helm application locally, and **helm chart** is placed under `mychart/example/` directory that relative to the **root directory**, you can execute the following command to deploy the application.

```blash
helm install helloworld /chart/example/ \ 
   -n fooNamespace \
   --kubeconfig ~/.kube/barconfig
```

#### Deploy from Remote Repo

If you have a Helm application that store in the remote repo and have access privilege, e.g.:

```hl_lines="7"
https://[gihub, Gitlab, etc... whateverRepo]/foo/bar/hellowrold.git

Somefile.py
AClass.java
README.MD
...
mychart/example/
   Chart.yaml
   values.yaml
   charts/
   templates/
   ...
```
For this repo, we placed under `mychart/example/` directory that relative to the **root directory**, then we can execute the following command to deploy the application:

```blash
nhctl install helloworld \
   -u https://[gihub, Gitlab, etc... whateverRepo]/foo/bar/hellowrold.git \
   -t helmGit \
   -n k8sFooNamespace \
   --resource-path charts/example \
   --kubeconfig ~/.kube/barconfig
```

### Use Owned Helm Repo

If you have own Helm repo, you can run the following command to deploy:

```blash
helm install helloworld \
   mychart \
- repo http://mychart/charts/ \
   -n fooNamespace \
   --kubeconfig ~/.kube/barconfig
```

or can use the following `nhctl` command to achieve the same effect:

```blash
nhctl install helloworld \
   --helm-chart-name mychart \
   --helm-repo-url http://mychart/charts/ \
   -n fooNamespace \
   --kubeconfig ~/.kube/barconfig
```

## Using Kubernetes Manifest Deploy Application

For example, you have a git repo with address `https://[gihub, Gitlab, etc... whateverRepo]/foo/bar/hellowrold.git`, it has many **Kubernetes manifest yaml** files:

```blash
README.MD
something.java
…
foo/bar/k8s/manifests/
                 foo.yaml
                 pre-install-cm.yaml
                …
                 what/ever/
                               inner.yaml
                               …
                support/all/dir/inside/
                                            bar.yaml
                                            …
```
You only want to apply the files in the relative root directory `what/ever/` and `support/all/dir/inside/`, then use the command:

```hl_lines="5 6"
nhctl install applicationNameFooBar \
  -u https://[gihub, Gitlab, etc... whateverRepo]/foo/bar/hellowrold.git \
  -t manifest \
  -n k8sFooNamespace \
  --resource-path what/ever/ \
  --resource-path support/all/dir/inside/ \
  --kubeconfig ~/.kube/barconfig
```

If you want to apply all files, you can use the command:

```hl_lines="5"
nhctl install applicationNameFooBar \
  -u https://[gihub, Gitlab, etc... whateverRepo]/foo/bar/hellowrold.git \
  -t manifest \
  -n k8sFooNamespace \
  --resource-path. \
  --kubeconfig ~/.kube/barconfig
```

## Nocalhost Enhancements to Kubernetes Applications


Base on Kubernetes, Nocalhost provides some enhancements to applications. You can add a `.nocalhost/` folder under your project repository and add [config.yaml](../../references /nh-config-spec) file.

!!!info "No Intrusion"
   Nocalhost has no intrusion into the user's Kubernetes manifest configuration


### Pre-Install

Nocalhost allows users to perform some additional operations before installing and deploying applications. Take [bookinfo](https://github.com/nocalhost/bookinfo) as an example, before installing the application, we will execute several jobs as stated below, and wait for the completion of the job execution before installing the application.

```yaml hl_lines="1"
onPreInstall:
  -path: manifest/templates/pre-install/print-num-job-01.yaml
    weight: "1"
  -path: manifest/templates/pre-install/print-num-job-02.yaml
    weight: "-5"
```

### Start Dependency Management

Nocalhost can control the startup sequence of services within the application.

For example, the following configuration, which represents the **Deployment** of `ratings`, needs to wait for the `pod` of `productpage` to be available before starting.

```yml hl_lines="3"
name: ratings
serviceType: deployment
dependLabelSelector:
  pods:
    - productpage
```
You can refer to [Service Specify Startup Sequence Dependency](../service-best/#service_2) for more information.

### Dev Image Configuration

Nocalhost can specify the image of the development container, for example:

```yml hl_lines="5"
containers:
...
    dev:
      gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-productpage.git
      image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage
...
```

In the above configuration, the image **python:3.7.7-slim-productpage** will replace the original image for development when entering the DevMode.

For more information, please refer to [DevContainer Best Practice](../devcontainer-best)

## Advanced Configuration

Here will explain some additional features or design of **Application**, which is not necessary, but it will help you to use Nocalhost better.

### Application Name

Nocalhost uses a unique Application Name to distinguish different applications. Note that even if different **Nocalhost Server** are used (for example, two or more sets are deployed), the same Application Name is not supported on the same development machine.

### `~/.nh` Directory

Note that in the `~/.nh/` directory, `nhctl` and the IDE plugin will store some files to save the current application deployment, development, etc., usually you don't need to know or use them directly.