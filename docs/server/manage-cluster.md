---
title: Manage Cluster
---

Nocalhost Server is mainly used for managing the dev environment of a team. We need to add a cluster for our team firstly.

Select the `Cluster` sidebar and click the `Add Cluster` button.

![image.png](/img/server-ks/nh-cluster-create.png)

Input your cluster's `Name` and KubeConfig file that has the **cluster-admin** privilege. Then click the Confirm button.

![image.png](/img/server-ks/nh-cluster-kubeconfig.png)

:::tip Get KubeConfig

You can use the following command to view your `KubeConfig`, copy and paste to the Nocalhost plugin.

```bash
kubectl config view --minify --raw --flattern
```

:::
