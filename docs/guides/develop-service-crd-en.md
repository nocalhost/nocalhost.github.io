---
title: CustomResources
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Develop CustomResources
Nocalhost not only support developing the built-in resources such as Deployment, StatefulSet and Job, but also support developing the [CustomResources](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources).

### How it works
Under the hood, Nocalhost replaces the container image of pod controlled by [K8s Controller](https://kubernetes.io/docs/concepts/architecture/controller/) with developing container image and upload local source code into the developing container to achieve the developing of Kubernetes resources. When develop a specific kind of Controller (including both Built-in Resources and CustomResources), Nocalhost requires the following three aspects of information:
- Pod template path in the Controller's definition. For instance, the template path of the built-in Deployment is `/spec/template`. Nocalhost could use that path to get the Pod template and modify that template by replacing the business images with developing images.
- Do you want Nocalhost to modify the Controller's original Pod template definition or to create a new Deployment based on the original Pod template definition? Since not all of the Controller's Pod template definition could be modified. Job, for example, is unmodifiable. In such a condition, Nocalhost create a new Deployment with the original Pod template definition(which is transparent to users). The Pod template of the newly created Deployment use the developing image instead of the original image. Local source code will be uploaded into that Pod.
- How to make sure the cluster's traffic only visit the developing image in DevMod? A Controller usually manage many Pods. If there are still many Pods after entering DevMode, Nocalhost couldn't make sure that all the cluster's traffic goes through the developing Pod. Hence, Nocalhost will reduce the Pod replicas into 1. What's more, in terms of the Custom Resources that need to create new Deployment for developing, Nocalhost will reduce the number of the Pod replicas in the original Controller into 0. Take DaemonSet as an example. Nocalhost will delete DaemonSet's Pods altogether through setting the NodeName of DaemonSet's Pods into a non-existent Node.

Nocalhost define how to develop CustomResources by `DevModeAction`. The three fields of `DevModeAction` offer the above three aspects of information. Users can add `DevModeAction` in `~/.nh/nhctl/config` to empower Nocalhost with the ability of developing specific CustomResources. An example of how to configure `~/.nh/nhctl/config` is shown below:

```yaml
crdDevModeActions:
- crdType: statefulsets.v1beta1.apps.kruise.io
  devModeAction:
    podTemplatePath: /spec/template
    create: false
    scalePatches:
    - type: json
      patch: '[{"op":"replace","path":"/spec/replicas","value":1}]'
```

notes: 
- crdType: The form is `resource.version.group`. The resource/version/group are the resource/version/group of CustomResources respectively, namely GVR in reverse, which is used to specify the corresponding CustomResources type of `DevModeAction`.
- devModeAction: Used to control the actions to take when specific CustomResources objects enter `DevMode`
    - podTemplatePath: Specify the path of Pod template definition. Nocalhost will modify that template. For example, replace the containers' image with develop image, add sidcar containers, etc.
    - create: Specify if a new Deployment is created in order to develop when CustomResources objects enter `DevMode`.
        - If it's set into `true`, Nocalhost will use the Pod template definition in `podTemplatePath` to create a new Deployment. All of the operations in `DevMode` will be done in that Deployment.
        - If it's set into `false`, Nocalhost will modify the Pod template definition of the CustomResources object directly. All of the operations done in `DevMode` will be applied to the CustomeResources object.
    - scalePatches: It specifies the patch that configure the CustomResources object to reduce the amount of replicas into 1 before entering `DevMode`. If the amount of replicas has already been 1 or you don't mean to reduce the amount, then you can ignore this piece of config(refering to `How to make sure the cluster's traffic only visit the developing image in DevMod?`).

Besides, Nocalhost also has built-in support for several common open-source CustomResources, which includes [CloneSet](https://openkruise.io/docs/user-manuals/cloneset/) of [Kruise](https://github.com/openkruise/kruise), [Advanced StatefulSet](https://openkruise.io/docs/user-manuals/advancedstatefulset), [Advanced DaemonSet](https://openkruise.io/docs/user-manuals/advanceddaemonset) etc. You can use Nocalhost to develop these CustomResources without configuration.


### How to use
Find the `CustomResources` tab in Nocalhost IDE plugin. Expand that tab and you will see the `CustomResources` list.
![](https://cdn.jsdelivr.net/gh/filess/img0@main/2022/01/12/1641976030414-a509b452-89cf-49de-8495-297d14e89dd2.png)

Right click the `CustomeResources` that you want to develop. A selection box will pop up. Click the `Start DevMode` to develop:
![](https://cdn.jsdelivr.net/gh/filess/img12@main/2022/01/12/1641976139936-e651b371-e734-45d5-9785-04d9fb6bf8e6.png)
> The operations of CustomResources objects are in line with built-in resources in Workloads like Deployment/StatefulSet etc.
