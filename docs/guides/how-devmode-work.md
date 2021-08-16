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

```bash
Syncthing port-forward pod ratings-5dfbc89c59-r7wg5, namespace default
Port-forward 51517:51517 has been started
```

### 4. Start File Synchronization

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

### 5. Open Terminal and Stream Logs

```bash
root@ratings-5dfbc89c59-r7wg5:/home/nocalhost-dev#
```

