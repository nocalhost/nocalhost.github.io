---
title: DevMode Mesh
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

import useBaseUrl from '@docusaurus/useBaseUrl';

### **Why Mesh DevMode**

Consider of multiple user may want to develop one service at the same time, but if using DevMode Duplicate, it will not
receive traffic, if using DevMode Replace, it can only dev by one user, so we create another DevMode called Mesh
DevMode, use special headers will route to your DevMode pod, other traffic will route to original pod.

### How it works

Use envoy to route traffic with headers, we make a control-plane to distribute route rule.

### How to use

Right-click `Start Mesh(Duplicate)` on the Jetbrains and VS Code extension to enter  `Mesh DevMode`:

![image](/img/develop-mesh/button-mesh.png)

Then, you need to set a header to indicate traffic with this header will route to this pod.
![image](/img/develop-mesh/header-mesh.png)

Enter  `Mesh DevMode` and you will see the corresponding icon of the workload, indicating that the workload is
in `Mesh DevMode`.

![image](/img/develop-mesh/in-mesh.png)

### FAQ

#### Do we need to install istio to use Mesh DevMode?

No, Mesh DevMode use envoy as data-plane, not depends on istio.

#### What's the difference between `Duplicate DevMode` `Replace DevMode` and `Mesh DevMode`?

#### Does `Mesh DevMode` support all protocol?

No, it just supports HTTP/GRPC.

#### Is there a limitation on the number of duplicates?

There is no limitation on the number of duplicates in Nocalhost. Theoretically, `Mesh DevMode`  can be run on any number
of devices to create their own duplicates for development. However, it may be limited by cluster resources in real
scenarios.

#### How to verify Mesh DevMode works fine?

You can not use port-forward to verify current pod, because of localhost traffic will route to local, you can enter
another pod terminal, use command line `curl` or use another service to access this service with special header to
verify Mesh DevMode.

