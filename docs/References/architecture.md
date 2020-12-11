### What is Nocalhost?
Nocalhost is Cloud Native Development Environment. Currently, it support developing applications based on Kubernetes:

* **Deploy applications just one click, even with complex service dependencies**
* **Build, test and debug applications directly inside Kubernetes**
* **Develop with hot reloading**: updates your running containers without rebuilding images or restarting containers

### How does it work?
* Deploy Nocalhost Server (nocalhost-api, nocalhost-web) to the kubernetes cluster.

* **For Admin** Use the management platform provided by Nocalhost Server to create users, configure the application's kubernetes cluster, create applications, and configure the application's DevSpace(Currently, DevSpace = ServiceAccount + Namespace). When kubernetes cluster configured, nocalhost-dep will be automatically deployed in the nocalhost-reservered namespace to control the order of microservices' starting.

* **For Developer** Install the nhctl CLI on the client machine and install the Nocalhost plugin in the IDE. Configure the nocalhost-api server url (for example: http://ip:port) in the plugin and sign in server, then deploy application to the kubernetes cluster.

* **For Developer** Developers can switch a specified micro service to DevMode. Once DevMode started, Nocalhost will replace the container of that micro service to DevContainer specified by configuration, sync source codes to DevContainer and forward the port of DevContainer to local.

Here's the diagram of Nocalhost with all the components tied together.

![](../assets/images/architecture.png)


### Component
**IDE plugins**
* IDE plugin packs the capabilities of nhctl and nocalhost-api development environment management to provide users with a better experience.

**nhctl**
nhctl is the core component of nocalhost, here are the core features:

* **Install Application**
Nocalhost will deploy applications to kubernetes cluster according to the dependencies of the application which is defined in config YAML under the .nocalhost directory.

* **Hot Reloading Via File Sync**
Any changes made to the local source codes will be synchronized to the remote DevContainer automatically. Developer can recompile and restart their process to verify code changes. In the future, we will support configure hotreload commands instead of restart processes manually. 

* **uninstall application**
Uninstalling application from DevSpace.

**nocalhost-web**
* nocalhost-web provides a web dashboard to manage users, development kubernetes clusters, applications and DevSpaces.

**nocalhost-api**
* Nocalhost manages serviceAccount, namespace and application in kubernetes cluster through api-server, and persists to database, providing data support for IDE plugin usage.

**nocalhost-dep** 
* When application microservices are deployed in a Kubernetes cluster, there is no way to controler the startup sequence and dependencies of these microservices. A typical scenario is: Service A and Service B both rely on Mysql, Redis, RabbitMQ. Service A and Service B cannot be started unless these dependent services are available. 

* Usually developers have to wait the Pod's restarting rely on Kubernetes' HealthCheck Probe. After restarting again and again, the time interval will be very long. This is why many large system running in Kubernetes start up extremely slow.

* By implemented a Kubernetes Admission Webhook like Istio injecting Sidecar, nocalhost-dep can controls the starting order. 

* When applications deployed, nocalhost-dep will inject InitContainers into the workload automatically. According to declared dependencies, nocalhost-dep keeps waiting for the dependent services's availability. 

* Once all dependent service become available, the InitContainer exits, then the containers which container business logics start. There is no restarting, which means minimal time waiting of starting.
