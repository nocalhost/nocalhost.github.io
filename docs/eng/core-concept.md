In this documentation, we will explain the core idea of Nocalhost and clarify some technical terms that are widely used in the project.

## Cluster

**Cluster** is a concept of Nocalhost. It usually corresponds to a Kubernetes cluster. Nocalhost supports to connect to multi-clusters, which can be GKE, minikube and microK8s.

In the actual development process, users do not need to know the concept of Cluster, and user's operation under [DevSpace](#devspace) actually rely on the capabilities of Cluster.

### Cluster Management

Cluster is generally used with DevSpace, if you need to manage Cluster, you need to install and setup Nocalhost Server, you can read Nocalhost Server [Quick Start](../server/quick-start) and [Using Nocalhost Server](../server/using-server)。

!!!note "Manage Cluster"
    If you want to manage a Cluster，then need to maintain a kubeConfig with the cluster's Cluster-Admin role.

[![](../assets/images/concept/cluster.png)](../assets/images/concept/cluster.png)

## DevSpace

**DevSpace** is a concept of Nocalhost, which represents a pre-allocated cloud development space managed by Nocalhost. Developers can deploy, uninstall, develop, and debug applications in DevSpace at any time. DevSpaces are isolated from each other. 

Nocalhost also allow developers to share their DevSpaces with other developers for collaborative development. Because of the isolation of DevSpace, it can also be used as a test environment.

[![](../assets/images/concept/devspace-concept.png)](../assets/images/concept/devspace-concept.png)

### DevSpace Management

If you need to manage DevSpace, you need to install and setup Nocalhost Server, you can read Nocalhost Server [Quick Start](../server/quick-start) and [Using Nocalhost Server](../server/using-server)。

## Application

**Application** is a concept of Nocalhost, it is mainly used to manage a set of manifest files you want to apply for local development, it supports both Kubernetes manifest and helm chart. In other words, these manifests usually contain all the k8s resources that your own application depends on. If possible, we should try to keep it to a minimum.

Nocalhost supports three types of applications:

* Manifest
* Helm
* Kustomize

**Application** can be used to create a [DevSpace](#devspace), we recommend using IDE plug-in directly to deploy your application, IDE plugin is worked on the DevSpace created by Application. In other words, after being assigned a DevSpace, the developer can easily develop on the IDE.

After being assigned a DevSpace, you will get a kubeconfig to access this DevSpace, nhctl or plug-in can deploy the application based on the application's manifest file and kubeconfig.

[![](../assets/images/concept/manifest-and-kubeconfig.png)](../assets/images/concept/manifest-and-kubeconfig.png)

So **DevSpace** can actually be approximated as **Application** + **kubeconfig**:

[![](../assets/images/concept/application-and-space.png)](../assets/images/concept/application-and-space.png)

### Application Management

If you need to manage Applicationace, you need to install and setup Nocalhost Server, you can read Nocalhost Server [Quick Start](../server/quick-start) and [Using Nocalhost Server](../server/using-server).

### Application Configuration

Read [Best Practice of Application](./best-practice/application-best.md) 。

## Service

**Service** is completely different from svc of Kubernetes. Service can be considered as an enhancement of Deployment, corresponding to a specify service in your application. **Service** currently supports:

- Configure the Nocalhost Dev-Mode, such as which directory after entering the DevContainer, which files are synchronized to the development container, etc.
- Supports deployment startup sequence control based on dependencies

### Service Congiguration

Read [Best Practice of Service](./best-practice/service-best) 。

!!!note
    Service configurations are not necessary, only needs to be configured when you need it.

## User

**User** belongs to the independent concept of Nocalhost, it's **different** with Kubernetes's user. When you use Nocalhost Server and Nocalhost Plugins, User is used to identify your identity and access control to resources. 

[![](../assets/images/concept/user-and-space.png)](../assets/images/concept/user-and-space.png)

There are two types of **User** in Nocalhost: **Standard User** and **System Admin**

### Standard User

- Can only log in IDE Plugin, users can develop under their own DevSpace. these DevSpace are all created by Administrator.

- User can only see their own DevSpace, and have all the permissions under these DevSpace, such as install, uninstall (deploy and destroy), enter DevMode and port-forwarding.

- Cannot log in to Nocalhost-Web, nor can they delete the DevSpace, or disassociate it from the DevSpace, which is very similar to the admin permission under a certain namespace of Kubernetes.

### System Admin

- Has the permission to access Nocalhost Server, and with all the permissions in Nocalhost Web, such as create and manage Application, Cluster, User, DevSpace, etc

- Have all the permissions of **User**, such as logging in at IDE plugins, develop in their own DevSpace list

### User Management

If you need to manage User, you need to install and setup Nocalhost Server, you can read Nocalhost Server [Quick Start](../server/quick-start) and [Using Nocalhost Server](../server/using-server).

## DevMode

**DevMode** refers to a **state** corresponding to the microservice workload when the developer uses Nocalhost for microservice development. In this state, the workload will be converted into a mode that can easily support developers to develop debugging programs.

In the existing Nocalhost development environment that based on Kubernetes, the main changes in DevMode are as follows:

* The number of copies of the workload will be adjusted to 1
* The Pod's health check will be disabled (it is convenient to keep trying to restart the process for debugging during the development)
* Pod container will be replaced with [DevContainer](#devcontainer)
* SecurityContext will be disabled
* A Nocalhost-Sidecar container will be injected into Pod, in order to support remote file synchronization 
* Pod will be added with a Volume to support file sharing between DevContainer and Nocalhost-Sidecar

## DevContainer

**DevContainer** is a basic environment for users to support the development and debugging of a specify microservice component. This environment is packaged into a container, which often contains a full set of SDKs , development and debugging tools, and other tools for developing this microservice component. When the service workload is switched to [DevMode](#devmode), Nocalhost will use **DevContainer** to replace the original workload container.

**DevContainer's** life cycle runs through the entire development and debugging process, it created when DevMode starts. During the life cycle, local source code changes will be automatically synchronized to **DevContainer**, and can be directly compiled and deployed in the container.

### DevContainer Configuration

Read [Best Practice of DevContainer](./best-practice/devcontainer-best)。
