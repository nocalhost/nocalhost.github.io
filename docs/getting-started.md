---
title: Getting started
---

## Before you start

Prerequisites:

- A Kubernetes(1.16+) Cluster(Provided by Cloud Platform is recommended although Minikube is fine).
- kubectl is installed and configured with admin access to your cluster.
- RBAC must be enabled on your cluster.
- Helm3 installed.
- Visual Studio Code(1.31+) installed.
- Git installed.

## Step 1: Install nhctl and VSCode extension

Follow this link: [https://nocalhost.dev/installation/](https://nocalhost.dev/installation/)

## Step 2: Initialize the cluster and setup Nocalhost Server

- Option 1: Init Cluster Provided by Cloud Platform, for example: [TKE](https://cloud.tencent.com/product/tke) :

Execute nhctl init in terminal:
```
nhctl init -n nocalhost
```

- Option 2: Init Minikube drived by docker:

After **minikube(docker driver)**(`minikube start`) started, execute nhctl init in terminal:
```
nhctl init -n nocalhost -t nodeport -p 80
```

Wait for the starting process:

![](../assets/images/initializing.png)

After started:

![](../assets/images/init-completed.png)

**[FOR MINIKUBE ONLY]: DO NOT CLOSE TERMINAL TO KEEP THE PORT FORWARDING**

> `nhctl init` command flags

- --namespace: to specify which namespace to install.(create automately)
- --port: to specify which port Nocalhost Web to listen.(Default 80)
- --set: to overide values for Nocalhost's Helm Chart
- --type: to specify service type of Nocalhost Web(nodeport or loadbalaner)

You can config flags to adapt your cluster.

## Step 3: Configure and login Nocalhost Server in VSCode

Enter the Nocalhost Extension page in VSCode, click "Config Server URL" on left panel:

![](../assets/images/config-server-url.png)


Paste the access url you get from **Step 2**, hit **Enter** on your keyboard.

Enter username and password:

- username: foo@nocalhost.dev
- password: 123456

After signed in, you see this:

![](../assets/images/signedin.png)

## Step 4: Install demo application: bookinfo

Click the install icon to install application: bookinfo.

![](../assets/images/signedin.png)

When you click "install" icon, Nocalhost deploy it in your cluster.

![](../assets/images/wait-for-start.png)

You can click refresh icon to check the status of application.

After all micro services of bookinfo started, you see this:

![](../assets/images/app-started.png)

You can access the product page of bookinfo: 

[http://127.0.0.1:39080/productpage](http://127.0.0.1:39080/productpage)

![](../assets/images/before-change.png)

## Step 5: Start DevMode

By clicking the green hammer icon, you can switch a service to DevMode easily.

![](../assets/images/click-green-hammer.png)

Choose "Clone from Git repo" and specify a dir to storage.

![](../assets/images/clone-repo.png)

After checking out source codes, Nocalhost will open a new window and continue switching to DevMode.

After DevMode established, you will see this:

![](../assets/images/devmode.png)

In DevMode, the dev container will not respond for requests until you start process again.

Execute `sh run.sh` in dev container to start **productpage service**:

![](../assets/images/run-sh.png)

## Step 6: Make code changes and check the result

Make code changes and refresh the webpage you opend to check out the results.

Example, add **Hello Nocalhost!** here in line 355 of **productpage.py**, and save the file. 😎 

![](../assets/images/code-changes.png)

Refresh the webpage [http://127.0.0.1:39080/productpage](http://127.0.0.1:39080/productpage) , you see the code change result immediately. 😄

![](../assets/images/after-change.png)

