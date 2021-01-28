#### Does Nocalhost have support to develop components(services) which depend on Kubernetes cluster resources such as Namespaces, ClusterRole?

It is not supported by Visual Studio Code plugin and Nocalhost Server, but Nocalhost CLI tool `nhctl` supports. We will support later.

#### What should I do if I delete the ~/.nh directory by mistake and the plugin cannot be used?

Just restart Visual Studio Code.

#### Application uninstallation has been done on the plug-in side, and the kubernetes cluster workload has not been released

Because your login account has changed, kubeconfig has also changed. Currently, account switching is not supported. If this happens, you need to manually delete the previously resources.