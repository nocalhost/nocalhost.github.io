---
title: DevMode(Replace)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

### Replace DevMode
Nocalhost currently supports two development modes, `Replace DevMode` and `Duplicate DevMode`. This section will mainly focus on `Replace DevMode`. For information about  `Duplicate DevMode`, please see [`Duplicate DevMode`](develop-service-dup-en).

When entering  `Replace DevMode`, Nocalhost will do the following work on the workload. <br></br><br></br>
**1.**Reduce the number of duplicates to 1. The application only needs to be developed in one container. If there are multiple duplicates, we cannot ensure that when accessing the workload by `Service`, all traffic will be transferred to the duplicate we are developing. Therefore, Nocalhost will firstly reduce the number of duplicates to 1. <br></br>
**2.** Replace the container image with a DevImage. Containers for production usually use lightweight images, which only have the basic components for program execution, but lack relevant tools for compiling and building programs (such as JDK). Hence, when developing a workload, Nocalhost will replace the container image with a DevImage that contains complete development tools. <br></br>
**3.** Add a sidecar container. To synchronize the local source code to the container, a file synchronization server needs to be run in the container. In order to decouple the file synchronization process from the program working process, Nocalhost runs the file synchronization server in a separate sidecar container. This sidecar container mounts the same synchronization directory as the development container. Therefore, the development container can also access the source code synchronized to the sidecar container. <br></br>
**4.** Forward a local port to the file synchronization server. The file synchronization server will listen on a port of the container, which cannot be directly accessed from the local. Therefore, Nocalhost will forward (map) a random local port to the port of the container. <br></br>
**5.** Initiate the local file synchronization client server. The client server will establish the connection with the file synchronization server through the local random port forwarded in the last step. Then it will initiate file synchronization.  <br></br>
**6.** Enter the remote terminal. After the container is replaced successfully, Nocalhost will automatically enter the terminal of the remote container. You can run the synchronized source code in the container by this terminal. <br></br>

Note that the development container will not retain the previous work after entering DevMode, so all traffic in the cluster requesting access to that workload will fail. Therefore, you need to run the working process in the development container. Nocalhost will automatically synchronize the local source code to the development container, so you can see that the changes will take effect after compiling and running the code, as shown below.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/opt/code-change2.gif')} />
  <figcaption>Coding in VS Code</figcaption>
</figure>