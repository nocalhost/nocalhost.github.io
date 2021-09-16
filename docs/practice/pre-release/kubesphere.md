---
title: Developing KubeSphere with Nocalhost in Kubernetes
author: Garry Chen
author_title: Product Manager at Nocalhost Team
author_url: https://github.com/neaped
author_image_url: https://avatars.githubusercontent.com/u/3713305?v=4
tags: [Kubernetes, KubeSphere, Development]
---

import useBaseUrl from '@docusaurus/useBaseUrl';


## Introduction

This article walks you through using Nocalhost to seamlessly connect your local development machine to a remote Kubernetes cluster, allowing you to use your favourite IDE to develop and debug [KubeSphere](https://kubesphere.io/). Giving you the ability to comfortably develop and debug your remote apps with your existing skills.

This article covers:

1. [Deploy the KubeSphere](#deploy-apisix-ingress-controller) to the remote Kubernetes cluster
2. [Developing](#developing) and [debugging](#debugging) KubeSphere service in Kubernetes 

## Prerequisites

- Prepare an available Kubernetes cluster in your workstation. You can use any Kubernetes clusters that you have namespace admin privilege.
- GoLand IDE 2020.03+ (I am using GoLand 2021.2 in this article)
- [Install Nocalhost JetBrains plugin](/docs/installation#install-jetbrains-plugin)
- Install [Go 1.13](https://golang.org/dl/) or later

## Deploy KubeSphere

You can follow [Minimal KubeSphere on Kubernetes](https://kubesphere.io/docs/quick-start/minimal-kubesphere-on-k8s/) for deployment.

## Develop

