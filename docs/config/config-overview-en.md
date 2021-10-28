---
title: What is Nocalhost Config?
---
[Overview](config.md) / [What is Nocalhost Config?](config-overview.md)
<br/>

******

# Nocalhost —— What is it? How to configure it? What features it has?

We will introduce the configuration of Nocalhost, how to modify it and its features, etc. If you don't have a concept of the configuration of Nocalhost, or want to know more about its structure and features, please read this section.

<br/>

******

## Nocalhost Configuration 


<br/>

Development configuration is set around `DevMode`, such as which image should be used to enter `DevMode`, whether the persistence is needed in the development container, which files should be synchronized to the development container, how to debug and run the service in the container by one-click, etc. The `DevMode` in Nocalhost will be more easier to use with correct and appropriate development configuration.

<br/>

Overall, development configuration is to better define the behavior of `DevMode` .

:::tip Development Configuration and Deployment Configuration

The configuration of Nocalhost can be divided into two parts: development configuration and deployment configuration.

 - Deployment configuration defines how K8s applications deployed, including dependency control, variable injection, etc.

 - Development configuration is set around `DevMode`, such as which image should be used in `DevMode`, whether the persistence is needed in the development container, which files should be synchronized to the development container, how to debug and run the service in the container by one-click, etc.

:::

   <br/>

   Normally, only **Development configuration** needs to be concerned. **In the configuration document, the configuration we mention refers to the development configuration unless noted otherwise. **

<br/>

******

## View and Save Configuration

### View Configuration

If you have never configured Nocalhost for any workload, **right-click it and select  `Dev Config`**, then you will see the empty configurations as below, which are all commonly used in the `DevMode` of Nocalhost.

:::tip Configuration is not a must

You can enter `DevMode` without any configuration.

:::

```yaml
name: coredns
serviceType: deployment
containers:
  - name: ""
    dev:
        gitUrl: ""
        image: ""
        shell: ""
        workDir: /home/nocalhost-dev
        storageClass: ""
        resources: null
        persistentVolumeDirs: []
        command: null
        debug: null
        sync: null
        env: []
        portForward: []
```

<br/>


### Update Configuration

We can make any changes and use  `Comm`+`S`  or  `Ctrl`+`S` on the IDE plugin side to save them.

<br/>

******

## The Structure of Nocalhost Configuration

The  `name` and  `serviceType`  at the top level of the configuration indicate that this configuration belongs to the  `deployment` of   `coredns` . The content of the configuration is in `containers` , which is an array and can set different configurations for multiple containers in one workload.

<br/>

## Correctly Configure the Container 

### First, you have to declare the name of each container in `containers.[].name` to distinguish each container.

For example, if there are two containers in the workload, `ContainerA` and `ContainerB` (note that this is just an example, and the container should be named according to your real workload) , then you need to declare the names as follows:

```yaml
name: coredns
serviceType: deployment
containers:

  - name: "ContainerA"
    dev:
        image: "example:latest"
        ..........
        
  - name: "ContainerB"
    dev:
        image: "foo:bar"
        ..........
```

Surely, if you only need to develop `ContainerB` , you can configure it only. As follows:

```yaml
name: coredns
serviceType: deployment
containers:
        
  - name: "ContainerB"
    dev:
        image: ""
        ..........
```

<br/>

### How to configure each configuration item?

This part indeed requires a long and detailed explanation, but we first give a simple example here to offer a quick start for Nocalhost configuration. 

:::info Need an application to operate?

If there is no workload to operate, you can use the following command to install a demo application:

```shell
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.10/samples/bookinfo/platform/kube/bookinfo.yaml
```

:::

<br/>

Right-click a workload that has never been configured, such as details-v1. Click `DevConfig`, then you will see an empty template. Let's make some changes, such as adding an additional env to the development container (the development container will inherit the environment variables from the original container):

```yaml
name: details-v1
serviceType: deployment
containers:
  - name: details
    dev:
      env:
        - name: nocalhost
          value: example
```

Using `Comm`+`S`  or  `Ctrl`+`S` to save the changes, and then enter the `DevMode`. Since it is just a demonstration of the configuration process, you can select any local directory here and its content will be synchronized to the development container, and then you can select any development image.

Type  `env | grep nocalhost ` in the terminal after initiating the `DevMode`. As you can see, the environment variables have been injected correctly.

```shell
>  env | grep nocalhost
PWD=/home/nocalhost-dev
OLDPWD=/home/nocalhost-dev
nocalhost=example
```

:::tip More information

To learn more about configuration items and corresponding functions, see  [What configurations does Nocalhost offer?](config-spec.md)

:::

<br/>

******

## The Features of Development Configuration

In addition, the design of the Nocalhost configuration also brings some features. Knowing these features may help you better use Nocalhost.




### Take Effect

The development configuration of nocalhost does not take effect immediately. It needs to be saved and then re-enter the `DevMode` to make it work.

<br/>

### Life Cycle

Nocalhost will create a `secret` in each namespace as a "mini database", prefixed with `dev.nocalhost.application.`. The configuration will be saved in this `secret` .

Data will be remained in this `secret` until it is destroyed.

:::info HELM application

If it is a HELM application, for example, its `Release.Name`  is  `bookinfo`, this `secret` will be named `dev.nocalhost.application.bookinfo`. Moreover, the data stored in this `secret` will be destroyed after uninstalling `bookinfo` .

:::

<br/>

### Visibility

From the storage design, you can find that the configuration of Nocalhost is shared. Specifically, in the same `namespace` of the same cluster, the configuration of one workload is visible on any device and can be modified (with the modification permission of the  `secret` of [RBAC](https://kubernetes.io/docs/reference/access-authn-authz/rbac/) ). The configuration all devices get is from the same duplicate.
