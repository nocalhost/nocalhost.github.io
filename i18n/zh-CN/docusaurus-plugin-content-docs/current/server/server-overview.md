import useBaseUrl from '@docusaurus/useBaseUrl';

# Overview

In this documentation, we will explain the core idea of Nocalhost Server and clarify some technical terms that are widely used in the project.

## The Concepts

### Cluster

A Nocalhost **Cluster** is usually corresponds to a Kubernetes cluster. Nocalhost supports to manage multi cluster like TKE, GKE, Minikue and etc.

In the actual development process, users do not need to know the concept of Cluster, and user's operation under [DevSpace](#devspace) actually rely on the capabilities of Cluster.

#### Cluster Management

:::tip KubeConfig

If you want to manage a Cluster，then need to maintain a `KubeConfig` with the cluster's Cluster-Admin role.

:::

Cluster is generally used with DevSpace, if you need to manage Cluster, you refer to [Manage Cluster](./manage-cluster)

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/server/cluster.png')} />
  <figcaption>Nocalhost cluster</figcaption>
</figure>

### DevSpace

**DevSpace** is a concept of Nocalhost, which represents a pre-allocated development space managed by Nocalhost. Developers can deploy, uninstall, develop, and debug applications within DevSpace. DevSpaces are isolated from each other.

Nocalhost also allow developers to share their DevSpaces with other developers for collaborative development.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/server/devspace-concept.png')} width="700"/>
  <figcaption>Nocalhost DevSpace</figcaption>
</figure>

#### DevSpace Management

If you need to manage **DevSpace**, you can refer to [Manage DevSpace](./manage-devspace)

### Application

**Application** is a concept of Nocalhost, it is mainly used to manage a set of manifest files you want to apply for local development, it supports both Kubernetes manifest and helm chart. In other words, these manifests usually contain all the k8s resources that your own application depends on. If possible, we should try to keep it to a minimum.

Nocalhost supports three types of applications:

* Manifest
* Helm
* Kustomize

**Application** can be used to create a [DevSpace](#devspace), we recommend using IDE plug-in directly to deploy your application, IDE plugin is worked on the DevSpace created by Application. In other words, after being assigned a DevSpace, the developer can easily develop on the IDE.

After being assigned a DevSpace, you will get a `KubeConfig` to access this DevSpace, `nhctl` or plug-in can deploy the application based on the application's manifest file and `KubeConfig`.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/server/manifest-and-kubeconfig.png')} width="700"/>
  <figcaption>Kubernetes application</figcaption>
</figure>

So **DevSpace** can actually be approximated as **Application** + **Kubeconfig**:

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/server/application-and-space.png')} width="700"/>
  <figcaption>Nocalhost DevSpace</figcaption>
</figure>

#### Application Management

If you need to manage **Applications**, you can refer to [Manage Application](./manage-app)

### Service

**Service** is completely different from svc of Kubernetes. Service can be considered as an enhancement of application deployment and development.

- [Read more to learn how to configure application deployment](../config/config-deploy)
- [Read more to learn how to configure application development](../config/config-dev)

:::caution Service Configs

Service configurations are not necessary, only needs when essential.

:::

### User

**User** belongs to the independent concept of Nocalhost, it's **different** with user in Kubernetes. When you use `Nocalhost Server` and Nocalhost Plugins, User is used to identify your identity and access control to resources.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/server/user-and-space.png')} width="800"/>
  <figcaption>Nocalhost DevSpace and user</figcaption>
</figure>

There are two types of **User** in Nocalhost: **Standard User** and **System Admin**

#### Standard User

- Can only log in IDE Plugin, users can develop under their own DevSpace. these DevSpace are all created by Administrator.
- User can only see their own DevSpace, and have all the permissions under these DevSpace, such as install, uninstall (deploy and destroy), enter DevMode and port-forwarding.
- Cannot log in to Nocalhost-Web, nor can they delete the DevSpace, or disassociate it from the DevSpace, which is very similar to the admin permission under a certain namespace of Kubernetes.

#### System Admin

- Has the permission to access `Nocalhost Server`, and with all the permissions in Nocalhost Web, such as create and manage Application, Cluster, User, DevSpace, etc

- Have all the permissions of **User**, such as logging in at IDE plugins, develop in their own DevSpace list

#### User Management

If you need to manage **User**, you can refer to [Manage User](./manage-user)

## How It Works

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/server/nh-architecture.jpeg')} />
  <figcaption>Nocalhost overall working diagram</figcaption>
</figure>

### IDE Plugin


### `nhctl`

### Nocalhost-Web

### Nocalhost-API

### Nocalhost-Dep

