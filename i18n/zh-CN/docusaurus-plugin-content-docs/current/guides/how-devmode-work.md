---
title: How DevMode Works?
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Development Mode

## Why?

The advantages of using Nocalhost to develop directly inside Kubernetes are:

- **Production environment similarity** - Dev environment is very similar to your production environment, giving you much more confidence that everything will work in the production environment when new features are released.
- **Speed up feedback loop** - Via file synchronization, your code changes can take effect immediately in the container without rebuilding the image or redeploying the container. 
- **Flexible scalability** - Developers do not need to worry about insufficient local resources.
- **Reduce Cost** - Use resources more efficiently and reduce IT facility costs

Develop in Kubernetes cluster can be useful in the following cases:

- Limitations of local resources
- Want to test your application in a production-like environment
- Want to debug issues that are hard to reproduce on your local machine
- Applications need to access cluster-internal services (e.g. Cluster DNS)

## Start Development Mode

Start the development mode in IDE:

1. Open the cluster inspector in Nocalhost plugin
2. Expand the cluster tree and select the workload

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/intro/start-devmode.jpg')} />
  <figcaption>Start DevMode in VS Code and JetBrains</figcaption>
</figure>

## Development Process

### 1. Replace Image

When starting DevMode, Nocalhost will first replace the remote container image with development image (DevImage).

[Read more to learn about DevImage configuration](../config/config-dev#configure-development-image)

:::info Image Pull
Container image will handle by Kubernetes, [read more to learn about Kubernetes image management](https://kubernetes.io/docs/concepts/containers/images/)
:::

### 2. Replace Container and Restart POD

In this stage, Nocalhost will: 

1. Use the DevImage to start a new development container (DevContainer)
2. Use the DevContainer to replace the original container
3. Restart POD with the DevContainer

When entering DevMode, you should see the following messages in the IDE output:

```bash
Starting DevMode...
No previous syncthing process (10799) found
Deployment ratings replicas is already 1, no need to scale
Mount workDir to emptyDir
Updating development container...
Previous replicaSet ratings-95c8f5cd4 has not been terminated, waiting revision 2 to be ready
This may take several minutes, depending on the load of your k8s cluster
Waiting pod to start...

 ✓  Dev container has been updated
```

### 3. Start Port-Forwarding

#### Configured `portForward` in `config.yaml`

Nocalhost iterates over every item the `containers[*].dev[*].portForward` array defined in the `config.yaml` and starts port-forwarding for each of the entries and the port mappings they define in the `portForward` section.

:::note
Before starting the actual port-forwarding, Nocalhost waits until the containers and services are ready. You should see the following messages in IDE output:

```bash
Syncthing port-forward pod ratings-5dfbc89c59-r7wg5, namespace default
Port-forward 51517:51517 has been started
```
:::

#### Without `portForward` Configurations

If the port-forwarding configuration has not been configured before entering the DevMode, then you need to configure the port-forwarding through the IDE after entering the development mode.

[Read more to learn how to configure port-forwarding in IDE](./develop-service#start-port-forwarding)

### 4. Start File Synchronization

Nocalhost will check the `containers[*].dev[*].sync` section defined in the `config.yaml` and starts a real-time file synchronization between local directory and DevContainer.

You should see the following messages in IDE output:

```bash
ignoredPattern: 
.git
.github
node_modules
syncedPattern: 
!/

 ✓  File sync started
 dev start end

sync file ...
... ...
Syncthing has been started
sync file end
```

[Read more to learn how to configure file synchronization](../config/config-dev-sync)

### 5. Open Remote Terminal

Nocalhost will open DevContainer's terminal right within the IDE without extra configurations.

```bash
root@ratings-5dfbc89c59-r7wg5:/home/nocalhost-dev#
```

