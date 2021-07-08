<figure>
  <img src="../../assets/images/logo.png" width="300" />
  <figcaption>Most productive way to build cloud-native applications.</figcaption>
</figure>

# Motivation

Because microservice brings development and deployment flexibility and technology versatility, more and more companies choose to use microservice architecture to build applications. At the same time, the rapid development and popularization of cloud-native technology and Kubernetes have further solved the problems of service invocation overhead, distributed system transactions, debugging and service governance of microservices. Therefore, the development trend of modern applications is evolving from the original "monolithic application + cloud" to "microservice + cloud-native".

Although the development trend has greatly improved the efficiency of application operation, maintenance and deployment, but a key node has been forgot: the development phase.

First, although Kubernetes does an excellent job of managing the infrastructure, it brings additional complexity and a steep learning curve. The lack of Kubernetes abstraction for developers affects the development experience and reduces development efficiency. Developers have to spend a lot of energy on concept learning, system configuration, environment deployment, and resource management.

On the other hand, many companies today are in the practice of "microservices", the granularity of splitting is too tiny, leading to a further sharp increase in the number of microservice, and the relationship between services is becoming more and more complex. Various problems are paticularly prominent when you want to add new requirements. This leads to the following problems for developers and managers:

> **Developer** :tired_face: How to quickly start a complete development environment? How to quickly debug these dozens or even hundreds of microservices? How to collaborate with other colleagues once the requirements are depends on others?

At the same time, containerization technology solves the problem of environmental consistency in the development, testing, and production stages of microservice applications. But the efficiency of the development feedback loop has caused many dev teams to have a headache. Developers need to wait for several minutes before they can see the result after codes modification. This greatly reduce development efficiency. 

<figure>
    <img src="../../assets/images/intro/dev-circle-eng.png" width="500"/>
</figure>

Therefore, although companies can benefit from "microservices + cloud-native". But in fact, the development efficiency of many development teams does not increase but declines, and they cannot experience the "cost reduction and efficiency increase" brought by cloud-native technology.

The end result is that people begin to question the value of Kubernetes to developers themselves: "Why need to bother with all these details instead of focusing on coding?".

## What is Nocalhost?

Nocalhost is a cloud-native development tool based on IDE, and also provides cloud-native solutions,  works to improve your experience creating cloud-native application within your favorite IDE.

-**One-click connect to development environment** Help developers connect to the remote Kubernetes by one click, and get rid of the pesky local environment configurations

-**No need to rebuild or redeploy** When developing, Nocalhost can automatically synchronize the code to container every time you make a change. This way, eliminate the submit, building and pushing cycles, greatly speed up the feedback loop of development. So you see updates in under a second

-**Independent and isolated development space** Each developer can have their own independent development space to ensure that they will not be interfered by others during the development and testing process and process.

-**Visual IDE Plugin** Nocalhost provides JetBrains and VSCode with an easy-to-use IDE plugin. Developers can quickly develop and remotely debug cloud-native applications on the local computer without being familiar with kubectl commands. .

<figure>
    <img src="../../assets/images/intro/nh-dev-circle-eng.png" />
</figure>

## Architecture

The overall working diagram of Nocalhost is as follows:

<figure>
    <img src="../../assets/images/intro/nh-architecture.jpeg" />
</figure>

### IDE Plugins

IDE plugin packs the capabilities of nhctl and nocalhost-api development environment management to provide users with a better experience.

### nhctl

nhctl is the core component of nocalhost, here are the core features:

* **Deploy/Uninstall Applications**

Nocalhost can deploy applications to Kubernetes cluster or uninstall application from DevSpace.

* **Hot Reloading Via File Sync**
Any changes made to the local source codes will be synchronized to the remote DevContainer automatically. Developer can recompile and restart their process to verify code changes. In the future, we will support configure hotreload commands instead of restart processes manually. 

### nocalhost-web

nocalhost-web provides a web dashboard to manage users, development kubernetes clusters, applications and DevSpaces.

### nocalhost-api

Nocalhost manages serviceAccount, namespace and application in kubernetes cluster through api-server, and persists to database, providing data support for IDE plugin usage.

### nocalhost-dep

* When application microservices are deployed in a Kubernetes cluster, there is no way to controler the startup sequence and dependencies of these microservices. A typical scenario is: Service A and Service B both rely on Mysql, Redis, RabbitMQ. Service A and Service B cannot be started unless these dependent services are available. 

* Usually developers have to wait the Pod's restarting rely on Kubernetes' HealthCheck Probe. After restarting again and again, the time interval will be very long. This is why many large system running in Kubernetes start up extremely slow.

* By implemented a Kubernetes Admission Webhook like Istio injecting Sidecar, nocalhost-dep can controls the starting order. 

* When applications deployed, nocalhost-dep will inject InitContainers into the workload automatically. According to declared dependencies, nocalhost-dep keeps waiting for the dependent services's availability. 

* Once all dependent service become available, the InitContainer exits, then the containers which container business logics start. There is no restarting, which means minimal time waiting of starting.

## 下一步

通过 [快速开始](getting-started.md) 便捷的云原生微服务应用的开发过程

