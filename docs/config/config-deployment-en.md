---
title: Deploy Config
---
[Overview](config-en.md) / [Deploy Config](config-deployment-en.md)

<br/>

******

We will introduce Nocalhost Deploy config in this section.

Nocalhost supports the deployment of K8s applications by Helm, RawManifest and Kustomiz. They can provide functions such as dependency order specification when apply the workload, deployment env injection, life cycle hook, etc. Moreover, they also support multiple configuration methods, such as Configmap, Annotation, etc. 

:::info PRE-REQUIRE

Before starting this section, please make sure you have already known how to configure Nocalhost. If not, please read [Nocalhost Overview](config-overview-en.md) first.

:::

<br/>

******

## [Quick Start  —— Basic Nocalhost Deploy Config](config-deployment-quickstart.md)

We have introduced some functions provided by `Deploy Config`, so in this section, we will give a few examples to explain more about the basic Nocalhost `Deploy Config` and installation.

<br/>

******

## [Nocalhost Deploy Config Specification](config-deployment-spec.md)

After knowing the most basic Nocalhost `Deploy Config`,  we will introduce the specific deployment configurations in this section, including dependency order specification when initiating the workload, deployment env injection, hook, etc.

<br/>

******

## [Dep Component and Other Methods](config-deployment-advance.md)

Nocalhost `Dev Config` supports multiple methods, such as ConfigMap, Annotations, etc. In fact, these methods are also applicable in `Deploy Config`, but some functions need to work in conjunction with K8s WebHook, and the  `Nocalhost-Dep` component in Nocalhost plays that role. `Nocahost Server` will automatically deploy this component, so if you do not use  `Nocalhost Server`, you need to deployment extra component `Nocalhost Dep`.

<br/>

******

## [Config.yaml Syntax](config-deployment-syntax.md)

To improve the reusability and flexibility of Nocalhost configuration and avoid repeated configure, Nocahost provides environment variable injection and yaml include syntax.

