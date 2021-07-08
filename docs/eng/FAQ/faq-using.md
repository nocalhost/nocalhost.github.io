## How does Nocalhost find services when the workloads are installed by Helm?

By default, Nocalhost recognizes services by the exact name of workloads in the cluster. But the name of the workloads installed by Helm may be generated according to the Chart templates. 

For example, if the Chart is created with the template provided by Helm, Nocalhost may find it by looking for workloads with name formed with `<release-name>-<service-name>`. For example, there is a service defined in config.yaml as following:

```
...
services:
  - name: productpage
    serviceType: deployment
```

When we install a application(helm) by nhctl as following:

```
$ nhctl install dev -u <git-repo-url>
$ kubectl get deployment -n test
NAME                             READY   UP-TO-DATE   AVAILABLE   AGE
dev-productpage   0/1     1            0           9s
```

Nocalhost will consider the workload `dev-productpage` as the service named `productpage` defined in config.yaml, while no workload named `productpage` in cluster.

In other case, if you create Chart with other templates or install Chart in other ways, Nocalhost cannot find the services in the config.yaml. In this situation, you should configure the exact name of the workloads to Nocalhost's config.yaml.

Using static workload names is recommended. 

## Does Nocalhost have support to develop components(services) which have Pods running multiple containers?

You can specify container's name in V2 Nocalhost config file.

## Why does my code fail to compile in the DevMode under Windows?

The issue may be caused by differences of line endings between different operating systems. For example, the code is compiled for Linux with line endings of `\n`, and you checkout, edit or reformat the code under Windows may convert line endings to `\r\n`. The conversion of line endings will lead to failures on some build tools (like Gradle). Therefore, before entering the DevMode, you should configure the local development environment as needed.

- git: In default, line ending conversions are enabled. It means that `git checkout` will convert `\n` to `\r\n` and `git commit` will convert `\r\n` to `\n`. Please refer to [Git Docs](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration#_core_autocrlf) if you have to configure it.
- Visual Studio Code: In default, line ending is `\r\n` under Windows. Configure it globally by entering File -> Preferences -> Settings -> Text Editor -> Files -> Eol, or click the `CRLF` or `LF` on the right of the status bar when converting for a single file.
- IntelliJ IDEA: In default, line ending is `\r\n` under Windows. Configure it by entering File -> Settings -> Editor -> Code Style -> Line seperator.

## Does Nocalhost have support to develop components(services) that controls by Deployments with HPA (Horizontal Pod Autoscaler)?

No. It is suggested that remove HPA controller from Deployments before developing components(services) with Nocalhost.

## Why there isn't a register link? How to login Nocalhost Web?

Nocalhost does not support self-registration.

By now, Nocalhost Server(api and web) is designed using by administrator.

Administrator can sign in with the default administrator account email and password.

The default account's Email is:
```
admin@admin.com
```
The default account's password is:
```
123456
```

After signed in, they can change admin user's Email and password. They can also manage users, clusters and applications.


## Does Nocalhost have support to develop components(services) which depend on Kubernetes cluster resources such as Namespaces, ClusterRole?

It is not supported by Visual Studio Code plugin and Nocalhost Server, but Nocalhost CLI tool `nhctl` supports. We will support later.

## What should I do if I delete the ~/.nh directory by mistake and the plugin cannot be used?

Just restart Visual Studio Code.

## Application uninstallation has been done on the plug-in side, and the kubernetes cluster workload has not been released

Because your login account has changed, kubeconfig has also changed. Currently, account switching is not supported. If this happens, you need to manually delete the previously resources.
