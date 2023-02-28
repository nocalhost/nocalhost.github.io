---
title: VPN proxy
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem'; import useBaseUrl from '@docusaurus/useBaseUrl';

### VPN proxy mode

Nocalhost already supports the VPN function, If your application can start in a simple way and has less dependence on
K8s resources, such as PVC, Secret, Cm, etc. then it is very suitable to use the traffic proxy mode to enter the
development mode.

In this mode, Nocalhost will provide you with the K8s network environment locally, and you can directly access K8s
service with K8s DNS (such as directly accessing the K8s service through svc name), pod ip, svc ip, etc.

At the same time, Nocalhost will intercept all inbound traffic of the specified service and forward it to the local, you
can directly start your business code locally for development and debugging.

### Feature

- use k8s dns to access remote service on local computer.
- intercept all inbound traffic of special service and forward it to local service.
- support multiple protocol, like TCP, UDP, ICMP etc.
- support multiple platform, like Windows, macOS, Linux etc.

### Architecture

like the picture below, at the same cluster and namespace

- developer 1 intercept service 3.
- developer 2 intercept service 4.
- service 3 all inbound traffic will forward to developer 1 through pod trafficManager.
- service 4 all inbound traffic will forward to developer 2 through pod trafficManager.
- developer 1 can access cluster another service through pod trafficManager.
- developer 2 can access cluster another service through pod trafficManager.
- developer 1 and developer 2 can access each other with inner ip (**magic**).

![architecture](/img/vpn/vpn-replace-traffic-manager.png)

### How to use it

#### Enter VPN proxy mode

![vscode](/img/vpn/vpn-replace-start-all.png)

- on Windows, you will see a prompt with full screen, remember chose yes

![vscode](/img/vpn/vpn-replace-sudo-password-windows.png)

- on Linux/macOS, you need to input sudo password to allow nhctl to create virtual network device

![vscode](/img/vpn/vpn-replace-sudo-password-jetbrains.png)

![jetbrains](/img/vpn/vpn-replace-sudo-password.png)

#### Demo

![](/img/vpn/vpn-replace-demo.gif)












