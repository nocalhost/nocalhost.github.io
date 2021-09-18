---
title: What's New?
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Nocalhost v0.5.6 has been released, supporting convenient some new features.

:::tip How to install or upgrade to v0.5.6
You can install or update Nocalhost v0.5.6 in the `Extension Market` of VSCode or JetBrains, here is the [tutorials](./installation).
:::

<br/>

### Supports HotReload in Nocalhost JetBrains plug-in

**Any language is supported.** When this feature is enabled, Nocalhost monitors file changes, then synchronize the local file to the remote container in real time, and your Run/Debug command will be re-executed. It is no necessary to stop and re-run the project during development manually.

:::info More About HotReload
[Click here](./guides/hot-reload) to view the effect of hotReload and tutorials.
:::

<br/>

### Supports Node.js one-click Run/Debug/HotReload in Nocalhost JetBrains plug-in

After one-click Run/Debug/HotReload of Java, Go, Python, and PHP, Node.js is now officially supported.

Only need to configure Run/Debug command in the plug-in, you can use this feature in the plugin which greatly increases the convenience of the development process.

<br/>

:::info More About Remote Debug
[Click here](./guides/debug/remote-debug) to view the effect of remote debug and tutorials.
:::

<br/>

### Major update for Nocalhost Server
New UI and new features!

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/server/dashboard.gif')} />
</figure>

- `MeshSpace`: Based on Istio Service Mesh, share workloads by specifying header with independent routing.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/server/mesh-space.svg')} />
</figure>

- Sharing your K8s namespace to others via `Nocalhost Server`

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/server/share.svg')} />
</figure>

Convenient for group work with debugging and testing

### Nocalhost configuration is stored in the K8s cluster instead

Compared with storing the configuration locally, it is more conducive to sharing the configuration. In the Nocalhost Config configured in the plug-in, all the user who use this cluster will share the same configuration.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/config/share-config.png')} />
</figure>

<br/>

******

### ChangeLogs

- New Server Dashboard
- New features for Nocalhost Server:
    - Supports create service mesh DevSpace - MeshSpace
    - Supports share DevSpace
    - Allow all user create Cluster, Application and DevSpace
    - Supports upgrade Nocalhost Server by `nhctl`
- Nocalhost configuration will now save in Kubernetes cluster, not in local anymore
- Supports deployment configuration, configure in Annotations and ConfigMap
- Supports **HotReload** features in JetBrains' IDE
- Supports remote debug for Node.js in WebStorm and IntelliJ IDEA

#### Refactor & Improvement

- Environment Migration
- Optimized the speed of obtaining cluster data for the first time
- Optimized the state confusion issue caused by the consistency of Ns definition and App definition between different clusters
- Optimized and unified Nocalhost configuration rendering logic
- Optimized the error notification in JetBrains' IDE

#### Bug Fixes

- Fixed container selector issue when opening or associate directory
- Fixed `sync` missing `resourceType` parameter issue
- Fixed the helm values issues in JetBrains' IDE