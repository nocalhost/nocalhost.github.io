---
title: Developing APISIX Ingress Controller with Nocalhost in Kubernetes
author: Garry Chen
author_title: Product Manager at Nocalhost Team
author_url: https://github.com/neaped
author_image_url: https://avatars.githubusercontent.com/u/3713305?v=4
tags: [Kubernetes, APISIX, Controller, Development]
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/blog/apisix/apisix-banner.png')} />
</figure>

## Introduction

This article walks you through using Nocalhost to seamlessly connect your local development machine to a remote Kubernetes cluster, allowing you to use your favourite IDE to develop and debug [Apache APISIX ingress controller](https://apisix.apache.org/docs/ingress-controller/getting-started). Giving you the ability to comfortably develop and debug your remote apps with your existing skills.

This article covers:

1. [Deploy the APISIX Ingress controller](#deploy-apisix-ingress-controller) to the remote Kubernetes cluster within IDE
2. [Developing](#developing) and [debugging](#debugging) APISIX ingress controller in Kubernetes without image rebuilding

## Prerequisites

- Prepare an available Kubernetes cluster in your workstation. You can use any Kubernetes clusters that you have namespace admin privilege.
- [Helm v3.0+](https://helm.sh) installed
- [APISIX](https://apache.github.io/apisix-helm-chart/docs/en/latest/apisix.html) installed
- GoLand IDE 2020.03+ (I am using GoLand 2021.2 in this article)
- [Install Nocalhost JetBrains plugin](/docs/installation#install-jetbrains-plugin)
- Install [Go 1.13](https://golang.org/dl/) or later

## Deploy APISIX Ingress Controller

I'm going to deploy APISIX Ingress Controller by Nocalhost within GoLand: 

1. Open the Nocalhost plugin within GoLand
2. Use the cluster inspector to select the namespace that you want to deploy.
3. Right-click the selected namespace, choose **`Deploy Application`**, and select **`Helm Repo`** as installation method. 
4. In the following dialog box, input
    - `apisix-ingress-controller` as `Name`
    - `https://charts.apiseven.com` as `Chart URL`

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/blog/apisix/apisix-ingress-deploy.gif')} />
  <figcaption>Deploy APISIX ingress controller</figcaption>
</figure>

Let's test the `apisix-ingress-controller` after deployment by enable the port-forwarding within IDE:

1. Find the `apisix-ingress-controller` workload in the cluster inspector, right-click and select the **`Port Forward`**
2. Add the port-forwarding `8080:8080`
3. Visiting the [`http://127.0.0.1:8080/healthz`](http://127.0.0.1:8080/healthz) in local and check the result

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/blog/apisix/apisix-ingress-test.gif')} />
  <figcaption>Test the deployment</figcaption>
</figure>

## Developing
### Step 1. Start DevMode

1. Right-click the deployment `apisix-ingress-controller` in cluster inspector, select **`Start DevMode`**
2. Choose your source code directory if you have already cloned in local, or let Nocalhost clone the source code for you by entering the **apache/apisix-ingress-controller** [repository URL](https://github.com/apache/apisix-ingress-controller.git)
3. Wait for the operations, Nocalhost will open the remote terminal within IDE after entering DevMode

Now start the `apisix-ingress-controller` process by entering the following command in the remote terminal:

```bash
go run main.go ingress --config-path conf/config-default.yaml
```

After the `apisix-ingress-controller` has started, access the service by visiting [`http://127.0.0.1:8080/healthz`](http://127.0.0.1:8080/healthz) on local and check the result.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/blog/apisix/apisix-ingress-devmode.gif')} />
  <figcaption>Entering DevMode</figcaption>
</figure>

### Step 2. Change code and check result

Now I will make some code changes and check the result. 

1. Stop the `apisix-ingress-controller` process
2. Search `healthz` and find the `router.go` file. Change the `healthzResponse` status code from `ok` to `Hello Nocalhost`
3. Start the process again and check the change result in local

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/blog/apisix/apisix-ingress-code-change.gif')} />
  <figcaption>⭐️ &nbsp; No need to rebuild image or restart container, see result under seconds &nbsp; ⭐️ </figcaption>
</figure>

### Step 3. End DevMode

Now close the development window and end DevMode.

1. Right-click the `apisix-ingress-controller` in the cluster inspector
2. Select **`End DevMode`**

Nocalhost will make `apisix-ingress-controller` end DevMode, and reset the `apisix-ingress-controller` Pod to its original version. Enable the port-forwarding and check the result after ending DevMode.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/blog/apisix/apisix-ingress-end-devmode.gif')} />
  <figcaption>Ending DevMode</figcaption>
</figure>

:::tip Code Change

All code changes in DevMode will **only take effect** in the development container. 

After exiting the DevMode, Nocalhost will reset the remote container to its original state (before the code is modified). In this way, after exiting the DevMode, the modification of the code will **not** cause any changes or impact on the original environment.

:::

## Debugging

Debugging an application is not easy, and debugging an application in the Kubernetes cluster is even more difficult. Nocalhost is here to help by providing the same debugging experience you're used in the IDE when debugging in the remote Kubernetes cluster. 

### Step 1. Start remote debugging

We can start remote debugging by:

1. Right-click `apisix-ingress-controller` and choose **`Remote Debug`**
2. Nocalhost will put `apisix-ingress-controller` into DevMode and run debug command defined in [`dev config`](/docs/config/config-develop) automatically

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/blog/apisix/apisix-ingress-remote-debug.gif')} />
  <figcaption>Start remote debugging</figcaption>
</figure>

### Step 2. Step through breakpoints

Now set a breakpoint on the `healthz` function. Hover over just to the left of the line number and click on the red dot. Once it’s set, visit [`http://127.0.0.1:8080/healthz`](http://127.0.0.1:8080/healthz) in your local browser, GoLand should pop to the foreground. Click the play button to close the request and the progress should continue loading.

In addition, as I enable the `dev.hotReload`, so every time you make the code change, Nocalhost will automatically re-run the debug command. This is very useful when you make the code change and debug frequently.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/blog/apisix/apisix-ingress-break-reload.gif')} />
  <figcaption>Setting up breakpoints and run the service</figcaption>
</figure>

## Remote Run

Not just remote debugging, Nocalhost also provides an easy way to run your Go service in the Kubernetes cluster, plus hot reload!

You can using the remote run feature by:

1. Right-click `apisix-ingress-controller` in cluster inspector, choose **`Remote Run`**
2. Nocalhost will put `apisix-ingress-controller` into DevMode and start run command defined in [`dev config`](/docs/config/config-develop) automatically

Now every time you make code changes, Nocalhost will automatically trigger the run command. You can now enjoy the hot reload for Go without complex configuration.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/blog/apisix/apisix-ingress-remote-run.gif')} />
  <figcaption>Remote run</figcaption>
</figure>

## Conclusion

Today, we’ve learned how to use Nocalhost to develop and debug the APISIX ingress controller in Kubernetes.  Now, instead of waiting for slow local development processes, we can iterate quickly with an instant feedback loop and a productive cloud-native development environment.

## References

- [Apache APISIX getting started guide](https://apisix.apache.org/docs/ingress-controller/getting-started)
- [Developing for Apache APISIX Ingress Controller](https://apisix.apache.org/docs/ingress-controller/development)

