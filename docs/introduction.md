import useBaseUrl from '@docusaurus/useBaseUrl';

# What is Nocalhost?

Nocalhost is an open-source IDE plugin for cloud-native applications development:

- **Build, test and debug applications directly inside Kubernetes**
- **IDE Support :** providing the same debugging and developing experience you're used in the IDE even in the remote Kubernetes cluster
- **Developing with instant file synchronization:** instantly sync your code change to remote container without rebuilding images or restarting containers.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/intro/coding-in-cluster.gif')} width="800"/>
</figure>

## How does it work?

Nocalhost is composed of a single binary CLI and IDE extension. Ideally, you use it straight with your favourite IDE. Nocalhost does not require a server-side component as it communicates directly to your Kubernetes cluster using KubeConfig, just like kubectl.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/intro/how-it-works.webp')} />
</figure>

## Why Nocalhost?

Although Kubernetes does an excellent job of managing the infrastructure, building Kubernetes applications still be difficult, and it is even harder for large teams of developers. Nocalhost provides the most productive way to build cloud-native applications.

### Coding in Kubernetes

Nocalhost is preconfigured to work with your favourite IDEs, you can connect to any Kubernetes cluster with one click, and enjoying the coding in-cluster, get rid of the pesky local environment configurations.

### Instant File Synchronization

Nocalhost can automatically synchronize the code to the container every time you make a change. This way, eliminate the submit, building and pushing cycles, greatly speed up the feedback loop of development. So you see updates in under a second.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/intro/dev-circle.jpg')} width="700"/>
</figure>

### Made For Collaboration

Nocalhost helps your team to standardize development workflows without requiring everyone on your team to become a Kubernetes expert.

- **Kubernetes and DevOps expert** on your team can configure and manager Cluster, Applications, DevSpace and Users by Nocalhost Server, [read more about Nocalhost Server](./server/server-overview)
- **Developers** on your team can easily check out the project and start coding and debugging in the Kubernetes cluster without becoming a Kubernetes expert.

### Compatibility

Nocalhost is battle-tested with many Kubernetes distributions including:

- **Local Kubernetes clusters** like minikube, Microk8s, K3s and Docker Desktop
- **Managed Kubernetes clusters** like TKE (Tencent), ACK (Alibaba Cloud), GKE (Google), Microsoft Azure
- **Self-managed Kubernetes cluster** (e.g. created with KubeSphere or Rancher)
