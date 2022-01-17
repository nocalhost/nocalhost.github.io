---
title: VPN replace
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem'; import useBaseUrl from '@docusaurus/useBaseUrl';

### VPN replace mode

Nocalhost support VPN now, so we have another different develop mode called VPN replace mode. in this mode, nocalhost
will intercept all traffic which hit to service and forward it to local, at the same time, you can access remote
kubernetes cluster network, like: you can use DNS to connect MySQL service in k8s cluster, and also you can access pod
service with pod ip directly.

### Feature

- use k8s dns to access remote service on local computer.
- intercept the special service all traffic and forward it to local service.
- support multiple platform, like Windows，macOS，Linux etc.

### Architecture

like the picture below, at the same cluster and namespace

- developer 1 intercept service 3.
- developer 2 intercept service 4.
- service 3 all inbound traffic will forward to developer 1 thought pod trafficManager.
- service 4 all inbound traffic will forward to developer 2 thought pod trafficManager.
- developer 1 can access cluster another service thought pod trafficManager.
- developer 2 can access cluster another service thought pod trafficManager.
- developer 1 and developer 2 can access each other with inner ip (**magic**).

![architecture](/img/vpn/vpn-replace-traffic-manager.png)

### How to use it

#### open VPN replace mode

![vscode](/img/vpn/vpn-replace-start-all.png)

- on Windows, you will see a promote with full screen, remember chose yes

![vscode](/img/vpn/vpn-replace-sudo-password-windows.png)

- on Linux/macOS, you need to input sudo password to allow nhctl to create virtual network device

![vscode](/img/vpn/vpn-replace-sudo-password-jetbrains.png)

![jetbrains](/img/vpn/vpn-replace-sudo-password.png)

#### Demo

![](/img/vpn/vpn-replace-demo.gif)












