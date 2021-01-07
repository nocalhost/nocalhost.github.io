## What is Cluster

`Cluster` is a concept of `Nocalhost`. It usually corresponds to a k8s cluster. It needs to maintain a `kubeConfig` with the cluster's `Cluster-Admin` role.

`Nocalhost` supports managing multiple `Clusters`. These clusters can be `GKE`, `minikube`, `microK8s`, etc.

[ ![](../assets/images/concept/cluster.png) ](../assets/images/concept/cluster.png){:target="_blank"}



## What does Cluster do

`Cluster` manages the resources of running applications in the development environment.

`Cluster` is generally used in conjunction with `DevSpace`, we need to configure `Cluster` in `Nocalhost-Web`. Users do not need to directly touch the concept of `Cluster` while developing, and users' operations under `DevSpace` actually rely on the capabilities of `Cluster`.



## How to manage Cluster

First enter `Nocalhost-Web`, switch to the tag named `Clusters`, here will show all `Cluster` list.

[ ![](../assets/images/concept/cluster-list.png) ](../assets/images/concept/cluster-list.png){:target="_blank"}



Click `CREATE` in the upper right corner to create a `Cluster`. Note that to confirm whether this `kubeconfig` has the `Cluster-Admin` role, and you can use the following command to confirm:

```
> kubectl auth can-i'*''*'
yes
```

