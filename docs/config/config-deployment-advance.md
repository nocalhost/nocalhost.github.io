---
title: Advance
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[Overview](config-en.md) / [Deploy Config](config-deployment-en.md) / [Advance](config-deployment-advance.md)

<br/>

******

Nocalhost's development configuration supports multiple developing ways, such as ConfigMap, Annotations, etc. 

In fact, these configuration methods ** also suit for ** deployment configuration. Buts some functions need to be implemented through the K8s Admission WebHook. In Nocalhost, a component called `Nocalhost-Dep` plays this role, and `Nocalhost Server` will automatically deploy this component for you. 

if you do not use `Nocalhost Server`, then additional deployment of `Nocalhost Dep` is required.

<br/>

:::info

[What deployment configurations does Nocalhost provide?](config-deployment-spec.md) introduces which deployment configurations require additional deployment of `Nocalhost Dep`.

:::

<br/>

******

## Using ConfigMap to make deployment configuration

To make a simple deployment configuration is mentioned in [Introduction to Deployment Configuration --- Nocalhost Basic Deployment Configuration](config-deployment-quickstart.md). Combining with [What configuration methods are supported by Nocalhost-place the configuration in configmap](configure-en.md#configuration-in-configmap), we can get the configuration:

We have prepared an demo for this, which will automatically deploy `Nocalhost Dep`, and use the way of ConfigMap to make the deployment configuration.

:::tip Using the following commands to try out this demo (trying the Chart package requires ClusterAdmin)

```shell
git clone https://github.com/nocalhost/bookinfo && git checkout config/example
```

:::

<br/>

Then use Helm to install:

```shell
helm dep build ./charts/bookinfo && helm install bookinfo ./charts/bookinfo
```

<br/>

The content of the deployment configuration itself will not be repeated here. let's take a look at `charts/bookinfo/templates/nocalhost-app-config.yaml`.

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  # [Nocalhost]: nocalhost configmap should be named with dev.nocalhost.config.${appName}
  name: "dev.nocalhost.config.{{ .Release.Name }}"
  # [Nocalhost]: labels {dep-management: nocalhost} is also required
  labels:
    dep-management: nocalhost
  annotations:
    "helm.sh/hook": pre-install
data:
  config: |-
    {{ .Files.Get .Values.nocalhost.config.path | nindent 4 }}
```

<br/>

:::danger

This ConfigMap requires to apply to Api Server first. For example, in the Helm application scenario, it should be declared as `pre-install`.

```yaml
  annotations:
    "helm.sh/hook": pre-install
```

:::

<br/>

It introduces `.Values.nocalhost.config.path` to render the main body of the deployment configuration. The configuration is actually declared in `./charts/bookinfo/example/config-from-cm/nocalhost-full-config.yaml`, which is a standard Nocalhost deployment configuration without any additional modification:

```yaml
application:
  env:
    - name: APP_ENV_1
      value: EXAMPLE
    - name: APP_ENV_2
      value: EXAMPLE

  services:
    - name: productpage
      serviceType: deployment
      containers:
        - name: productpage
          install:
            env:
              - name: ENV_INJECT_EXAM
                value: BASE

    - name: details
      serviceType: deployment
      containers:
        - install:
            env:
              - name: ENV_INJECT_EXAM
                value: BASE

    - name: ratings
      serviceType: deployment
      dependLabelSelector:
        pods:
          - "productpage"
      containers:
        - install:
            env:
              - name: ENV_INJECT_EXAM
                value: BASE

    - name: reviews
      serviceType: deployment
      dependLabelSelector:
        pods:
          - "productpage"
      containers:
        - install:
            env:
              - name: ENV_INJECT_EXAM
                value: BASE

    - name: authors
      serviceType: deployment
      dependLabelSelector:
        pods:
          - "productpage"
      containers:
        - install:
            env:
              - name: ENV_INJECT_EXAM
                value: BASE
```

<br/>

******

## Using Annotations to make the deployment configuration

The method of usage is exactly the same as [Which configuration methods Nocalhost supports-place the configuration in annotations](configure-en.md#configuration-in-annotations).

:::danger Extra attention

Since Annotations closely follow the workload, some configurations at the application level are not supported. Only the configurations under `application.services` is supported.

:::

<br/>

Again, use the same demo project:

:::tip Use the following commands to get and try out this project (trying the Chart package requires ClusterAdmin)

```shell
git clone https://github.com/nocalhost/bookinfo && git checkout config/example
```

:::

<br/>


Then use Helm to install:

```shell
helm dep build ./charts/bookinfo && helm install bookinfo ./charts/bookinfo -f ./charts/bookinfo/values-annotation-config.yaml
```

<br/>

We specified `values-annotation-config.yaml` as Values.yaml, which specifies the rendering of the local configuration file to the Annotations of the workload. Take `./charts/bookinfo/templates/microservice-details.yaml` as an example:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: details
  {{- if .Values.nocalhost.annotations.path.details }}
  annotations:
    nocalhost.dev: |-
      {{ .Files.Get .Values.nocalhost.annotations.path.details | nindent 6 }}
  {{- end }}
  labels:
    app: details
```

<br/>

Helm will render the path configured by `.Values.nocalhost.annotations.path.details` into yaml, whose content is as follows, that is, `./charts/bookinfo/example/config-from-annotations/details.yaml` specified in Values :

```yaml
containers:
  - install:
      env:
        - name: ENV_INJECT_EXAM
          value: ANNOTATIONS
```

<br/>

******

## How to deploy `Nocalhost Dep`

We recommend using `Nocalhost Server` to get all the functions of `Nocalhost Dep`.

:::danger 

COMING SOON

:::
