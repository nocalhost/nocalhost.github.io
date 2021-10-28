# Overview

## [Nocalhost overview (what is it, how to configure, and what features does it have?)](config-overview.md)

This section introduces some information such as what Nocalhost configuration is, how to modify the configuration, and what features does it have. **If you have no concept of Nocalhost configuration** or want to understand the structure and features of Nocalhost configuration, you can read this section.

<br/>

******

## [What configuration does Nocalhost provide?](config-spec.md)

Development configuration defines the behavior of entering `DevMode`. If you want to **make some customized configuration when entering `DevMode`**, development configuration would be helpful. If you want to know what configurations Nocalhost provides, you can read this section.

<br/>

******

## [What configuration ways does Nocalhost support?](configure.md)

Nocalhost supports multiple ways to configure the DevMode and provides support for various rich usage scenarios. The most common configuration way is to right-click the specific workload in the IDE plug-in and select `DevConfig` to enter the Development configuration editing UI.


Besides, Nocalhost also supports placing the development configuration in the **source directory, configMap, and annotation**. For example, the development configuration can be configured on the CD in a process or in the helm chart, rawManifest, through the above-mentioned configuration ways, to avoid repeated configuration or customized configuration, etc.


If you want to learn more about multiple configure ways of development configuration, you can click on the details of this section.

<br/>

******

## [Deployment Configuration](config-deployment.md)

Nocalhost has the function of application deployment. Under `Nocalhost Server`, this is a high-frequency function. Nocalhost provides features such as **dependency control and env injection** to workloads.

:::tip Tips

If you do not use `Nocalhost Server` or do not need functions such as workload dependency control and env injection or have your own complete deployment way, you don't need to read this section.

:::

Nocalhost supports Helm, rawManifest, and Kustomize for the deployment of K8s applications, it also supports multiple configuration way such as **configMap and annotation**.