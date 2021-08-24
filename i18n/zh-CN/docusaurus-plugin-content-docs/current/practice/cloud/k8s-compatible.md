---
title: Kubernetes Compatibility
id: k8s-compatible
---

:::caution

We are keep doing the battle-test with different Kubernetes clusters now, testing results are updating. If you have issues when using Nocalhost, just feel free to contact us.

:::

## Local Kubernetes Cluster

| Product                                                          | Version          | Kubernetes Version | Testing Result            |
| ---------------------------------------------------------------- | ---------------- | ------------------ | ------------------------- |
| [Minikube](https://github.com/kubernetes/minikube)               | 1.22             | 1.21.2             | <strong className="pass-tag">passed</strong> |
| [Docker Desktop](https://www.docker.com/products/docker-desktop) | 3.5.2 (3.5.2.18) | 1.21.2             | <strong className="pass-tag">passed</strong> |
| [K3s](https://k3s.io/)                                           |                  | 1.21.2             |                           |
| [MicroK8s](https://microk8s.io/)                                 |                  | 1.21.2             |                           |
| [K3d](https://github.com/rancher/k3d)                            | 4.4.7            | 1.21.2             | <strong className="pass-tag">passed</strong> |

## Managed Kubernetes Cluster （Public Cloud)

| Company                                                               | Kubernetes Version | Testing Result | Tutorial |
| --------------------------------------------------------------------- | ------------------ | -------------- | -------- |
| Tencent TKE                                                           |                    |                |          |
| Alibaba Cloud                                                         |                    |                |          |
| [Huawei CCE](https://www.huaweicloud.com/intl/en-us/product/cce.html) |                    |                |          |
| Qing Cloud                                                            |                    |                |          |
| Rancher RKE                                                           |                    |                |          |
| Rancher K3s                                                           |                    |                |          |
| Google GKE                                                            |                    |                |          |
| Microsoft Azure                                                       |                    |                |          |
| Amazon EKS                                                            |                    |                |          |

## Kubernetes Platform

| Product    | Version | Kubernetes Version | Testing Result |
| ---------- | ------- | ------------------ | -------------- |
| KubeSphere |         |                    |                |