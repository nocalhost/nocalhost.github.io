---
title: Getting started
---

## Before start

Prerequisites:

- A Kubernetes(1.16+) Cluster(prefer to be provided by the Cloud platform or Minikube, 2 Core 4 Gi memory)
- Configure kubectl for you to be able to access above cluster as admin
- RBAC must be enabled in above cluster
- Install Helm3
- Install Visual Studio Code(1.52+)
- Install Git
- Kubernetes api-server can be accessed internal and external

## Step 1: Install nhctl and VSCode extension

Reference link: [https://nocalhost.dev/installation/](https://nocalhost.dev/installation/){:target="_blank"}

## Step 2: Initialize the cluster and setup Nocalhost Server

- Option 1: Kubernetes provided by the Cloud platform, such as Tencent [TKE](https://cloud.tencent.com/product/tke){:target="_blank"} 

> For TKE clusters, configure open external network access: 0.0.0.0/0 or cluster egress IP to achieve access to the Kubernetes api-server internal and external.

Initialize at terminal:

```
nhctl init -n nocalhost -p 7000
```

- Option 2: startup minikube derived by docker:

After **minikube(docker driver)**(`minikube start --driver=docker`) is started, execute the initialization in terminal:
```
nhctl init -n nocalhost -t nodeport -p 80
```

!!! note "About Kubernetes without LoadBalancer and PV"
    Use NodePort instead of LoadBalancer, close DB persistence(DO NOT USE FOR PRODUCTION)
    ```
    nhctl init -n nocalhost -t nodeport -p 7000 --force --set mariadb.primary.persistence.enabled=false
    ```

Waiting for the initialization process:

![](../assets/images/initializing.png)

After the initialization:

![](../assets/images/init-completed.png)

**[MINIKUBE WARN]: Please do not close above terminal for the port to be able to keep forwarding**

!!! note " `nhctl init` command flags"
    - --namespace: to specify which namespace to install.(create automately)
    - --port: to specify which port Nocalhost Web to listen.(Default 80)
    - --set: to overide values for Nocalhost's Helm Chart
    - --type: to specify service type of Nocalhost Web(nodeport or loadbalaner)
    - --force: to specify if delete old data before initialization

## Step 3: Configure and login Nocalhost Server in VSCode

Open the VSCode extension page, click on the “Config Server URL” button at left:

![](../assets/images/config-server-url.png)


Input the access address from Step Two, press Enter to save
Input the username and password respectively, press Enter to save:

- Username: foo@nocalhost.dev
- Password: 123456

After login, you can find:

![](../assets/images/signedin.png)

## Step 4: Install demo application: bookinfo

Click the installation icon at the left to install application  bookinfo

![](../assets/images/signedin.png)

After it, Nocalhost starts to execute the installation.

![](../assets/images/wait-for-start.png)

You can click on the refresh icon to check the status of installation and startup process

After all microservices startup, you will find

![](../assets/images/app-started.png)

Now, you can visit the appliction website: 

[http://127.0.0.1:39080/productpage](http://127.0.0.1:39080/productpage)

![](../assets/images/before-change.png)

## Step 5: Start DevMode

Switch the service to the DevMode by clicking on the green hammer icon.

![](../assets/images/click-green-hammer.png)

Select “Clone from Git repo” and specify a local address for Nocalhost to clone the source code.

![](../assets/images/clone-repo.png)

After the source code is checked out, Nocalhost will open a new VSCode window, and continue to switch to the DevMode.

When it is completed (it will take long time when it is the first time to run it), you will find:

![](../assets/images/devmode.png)

Under the DevMode, the main process will not startup by default for the DevContainer, and therefore it will not respond the request from the website. While refresh the webpage, the webpage will be on error and will be recovered, until you start up again.

You can execute `sh run.sh` to start your process.

![](../assets/images/run-sh.png)

## Step 6: Change the code and check the result

You can try to change a piece of code, refresh and check the result.
For example: add "Hello Nocalhost!" at line 355 in the file productpage.py. Do not forget to save the file. 😎 

![](../assets/images/code-changes.png)

Refresh the webpage, here is the outcome: [http://127.0.0.1:39080/productpage](http://127.0.0.1:39080/productpage){:target="_blank"}  😄

![](../assets/images/after-change.png)

## Congratulations!

You have had a great experience about the Cloud Native development through above Nocalhost simple tutorial. You can start to try to configure and use the Nocalhost in the real project now.

Any feedback is welcomed. Github Issues: [https://github.com/nocalhost/nocalhost](https://github.com/nocalhost/nocalhost){:target="_blank"}
