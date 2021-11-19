---
title: Configure
---

import useBaseUrl from '@docusaurus/useBaseUrl';

[Overview](config-en.md) / [Configure](configure-en.md)

<br/>

******

# Multiple ways to configure Nocalhost Configuration

Apart from putting the configuration in `DevConfig` of IDE plugin (right-click), Nocalhost also supports putting it in source code directory, ConfigMap or Annotation. For example, You can putting your configuration into Annotation, Helm chart or rawManifest to avoid repeated configuration through IDE.

:::info PRE-REQUIRE

Please make sure you have already known how to configure Nocahost correctly. If not, please read [Nocalhost Overview ](config-overview-en.md) first.

:::

<br/>

******

## Zero-Configuration

Zero-configuration means to enter `DevMode` without any Nocalhost configuration. The only thing needed is to select or type in a development image.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/config/dev-without-config.gif')} />
  <figcaption>⭐️ &nbsp; Start DevMode without any configuration &nbsp; ⭐️ </figcaption>
</figure>

### Behavior Expectation in Zero-Configuration
:::info Why care about the expectation of behavior?

In zero-configuration, you normally do not need to care about what Nocalhost has done. However, if any of the following behaviors does not meet your expectation, you need to configure Nocalhost to customize it.

:::

<br/>

- Use  `/home/nocalhost-dev`  in the container as the target directory for file synchronization.
- Try to enter the development container by using the following commands in order: zsh, bash, sh.
- Without persistence enabled, the local data generated in the development container will be lost after closing or restarting the container.
- Unable to use one-click running and debugging
- Synchronize all contents of the selected directory into the container

******

## Configuration in source code directory

Nocalhost supports putting the configuration in source code directory, which can be done by experienced developers, so that other team members can share the configuration.

<br/>

### Add the configuration to source code

Check that the configuration works well in the `DevConfig` of a specific workload (right-click). Then copy it as below:

```yaml
name: nocalhost-api
serviceType: deployment
containers:
  - name: nocalhost-api
    dev:
      image: nocalhost-docker.pkg.coding.net/nocalhost/dev-images/golang:zsh
      env:
        - name: NOCALHOST_INJECT_DEV_ENV
          value: WHATEVER
```

Create `.nocalhost` directory in the corresponding source code directory, and then create a file named `config.yaml`. Paste and save the content in `config.yaml`.

<br/>

### Take effect

Right-click this workload again and click `DevConfig`. You will find that the configuration has been read from the local directory and there is a "Tips" at the top, indicating that this configuration is a in-memory replica of local file.

```yaml
# Tips: This configuration is a in-memory replica of local file: 
# 
# '/Users/anur/GolandProjects/nocalhost/.nocalhost/config.yaml'
# 
# You should modify your configuration in local file, and the modification will
# take effect immediately. (Dev modification will take effect the next time you enter the DevMode)
#
# In addition, if you want to config multi service in same config.yaml, or use
# the Server-version of Nocalhost, you can also configure under the definition 
# of the application, such as:
# https://github.com/nocalhost/bookinfo/blob/main/.nocalhost/config.yaml
# 
```

<br/>

### Q&A

:::tip When you forget which local directory the workload is associated to

Right-click this workload and click `Open Project` to open the associated directory or click `Associate Local DIR` to associate a new directory.

:::

<br/>

:::tip Multiple workloads in one source code

You can configure multiple workloads in one source code. To do this, add a layer to make the configuration items an array, as shown below: 

```yaml
- name: nocalhost-api
  serviceType: deployment
  containers:
    - name: nocalhost-api
      dev:
        image: nocalhost-docker.pkg.coding.net/nocalhost/dev-images/golang:zsh
        env:
          - name: NOCALHOST_INJECT_DEV_ENV
            value: WHATEVER

- name: nocalhost-web
  serviceType: deployment
  containers:
    - name: nocalhost-web
      dev:
        image: nocalhost-docker.pkg.coding.net/nocalhost/dev-images/golang:zsh
```

:::

<br/>

******

## Configuration in Configmap

Nocalhost supports putting the configuration in Configmap, which helps to customize the association with the environment. For example, you can write some customized configurations in Configmap and apply it througth the deployment script or CD.

<br/>

### Add the configuration into Configmap

Here we display a very general Helm template of Nocalhost configuration. Note that you do not have to use Helm, and this is just an example for better explanation here.

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: "dev.nocalhost.config.{{ .Release.Name }}"
  labels:
    dep-management: nocalhost
  annotations:
    "helm.sh/hook": pre-install
data:
  config: |-
    {{ .Files.Get .Values.nocalhost.config.path | nindent 4 }}
```

<br/>

:::tip What is `{{ .Release.Name }}` 

You can find that there are two parts in configmap that are introduced as placeholders. The first is `{{ .Release.Name }}` in the fourth line, which is the name of application. If you are using Helm or Nocalhost to install the application, you need to write the corresponding application name in it, otherwise it should be `default.application` all the time.

:::

<br/>

:::tip What is `{{ .Files.Get .Values.nocalhost.config.path | nindent 4 }}` 

This is indeed the position where Nocalhost config should be written in, with four indents.

:::

<br/>

After knowing the above placeholders, we give the real configmap, as shown in the following format:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: "dev.nocalhost.config.default.application"
  labels:
    dep-management: nocalhost
  annotations:
    "helm.sh/hook": pre-install
data:
  config: |-
    - name: nocalhost-api
      serviceType: deployment
      containers:
        - name: nocalhost-api
          dev:
            image: nocalhost-docker.pkg.coding.net/nocalhost/dev-images/golang:zsh
            env:
              - name: NOCALHOST_INJECT_DEV_ENV
                value: WHATEVER

    - name: nocalhost-web
      serviceType: deployment
      containers:
        - name: nocalhost-web
          dev:
            image: nocalhost-docker.pkg.coding.net/nocalhost/dev-images/golang:zsh
```
<br/>

### Notes for Configmap Configuration  

:::danger Notes

1. Naming rules: It must follow the format `dev.nocalhost.config.${appName}`, namely `name: "dev.nocalhost.config.{{ .Release.Name }}"`.

2. Labels: It needs a key-value label, which is fixed as `dep-management: nocalhost`. 

3. config is in `data.config` as a text block and please pay attention to the indent of the configuration. 

:::

<br/>

### Take effect

After configuring Configmap, right-click this workload again and click `DevConfig`. If you get the following tips as below, indicating that this configuration is a in-memory replica of local file, that means the configuration has taken effect.

```yaml
# Tips: This configuration is a in-memory replica of configmap: 
# 
# 'dev.nocalhost.config.default.application'
# 
# You should modify your configuration in configmap, and the modification will
# take effect immediately. (Dev modification will take effect the next time you enter the DevMode)
# 
```
<br/>

******

## Configuration in Annotations

Nocalhost also supports putting the configuration in annotations, which is for the same consideration as configmap.

<br/>

### Add the configuration in Annotations
<br/>

In like manner, we use a Helm template for explanation, which will help to understand which values should be customized and the corresponding format requirements.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nocalhost-api
  annotations:
    dev.nocalhost: |-
      {{ .Files.Get .Values.nocalhost.annotations.path.authors | nindent 6 }}
```

Annotations configuration is very simple. Here you only need to declare an annotation, fix the key to  `dev.nocalhost` and fix the value as a text block with six fixed indents. As shown below:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nocalhost-api
  annotations:
    dev.nocalhost: |-
      name: nocalhost-api
      serviceType: deployment
      containers:
        - name: nocalhost-api
          dev:
            image: nocalhost-docker.pkg.coding.net/nocalhost/dev-images/golang:zsh
            env:
              - name: NOCALHOST_INJECT_DEV_ENV
                value: WHATEVER
```

<br/>

Since one workload will not have multiple configurations, there is no need to declare it as array (although array is also supported). 

Moreover, the configuration has been fixedly bound to the workload (whether it is Deployment, StatefulSet, DaemonSet or others), so there is also no need to declare its name and type. As shown below:

```yaml
apiVersion: apps/v1
kind: Deployment
  metadata:  
  name: nocalhost-api
  annotations:    
    dev.nocalhost: |-
      containers:        
        - name: nocalhost-api          
          dev:            
           image: nocalhost-docker.pkg.coding.net/nocalhost/dev-images/golang:zsh            
           env:              
             - name: NOCALHOST_INJECT_DEV_ENV                
               value: WHATEVER
```

<br/>

### Notes for Annotations Configuration

:::danger Notes

1. The key must be `dev.nocalhost`, and the value must be a text block of  `Nocalhost Config`. 

2. Pay attention to the indent.

:::

<br/>

### Take effect

After configuring the Annotation, right-click this workload again and click `DevConfig`. The following tips means the configuration has taken effect.

```yaml
# Tips: This configuration is a in-memory replica of annotation: 
# 
# annotations:
#   dev.nocalhost: |
#     [Your Config]
# 
# You should modify your configuration in resource's annotation', and the modification will
# take effect immediately. (Dev modification will take effect the next time you enter the DevMode)
# 
```

<br/>

*****

## Features of local, Configmap and Annotations configuration

<br/>

### Granularity and priority of configuration

Nocalhost supports hybrid configurations, for example, if there are ten workloads, three of them can be local, three are Configmap, three are Annotations, and the last one is zero-configuration.

:::info If a workload is configured with multiple ways, the priority is as follows:

Local > Annotations > Configmap > in DevConfig 

:::

<br/>

### Configuration read time

Before using Nocalhost configuration, Nocalhost will check all configuration methods and try to read them. Therefore, the read of the configuration can be considered to be real-time.

<br/>

### DevConfig Features

Please read [Nocalhost DevConfig Features](config-overview-en.md#四、开发配置的特性)
