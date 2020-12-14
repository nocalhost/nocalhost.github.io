#### How does Nocalhost find services when the workloads are installed by Helm?

By default, Nocalhost recognizes services by the exact name of workloads in the cluster. But the name of the workloads installed by Helm may be generated according to the Chart templates. 

For example, if the Chart is created with the template provided by Helm, Nocalhost may find it by looking for workloads with name formed with `<release-name>-<service-name>`. For example, there is a service defined in config.yaml as following:

```
...
services:
  - name: productpage
    serviceType: deployment
```

When we install a application(helm) by nhctl as following:

```
$ nhctl install dev -u <git-repo-url>
$ kubectl get deployment -n test
NAME                             READY   UP-TO-DATE   AVAILABLE   AGE
dev-productpage   0/1     1            0           9s
```

Nocalhost will consider the workload `dev-productpage` as the service named `productpage` defined in config.yaml, while no workload named `productpage` in cluster.

In other case, if you create Chart with other templates or install Chart in other ways, Nocalhost cannot find the services in the config.yaml. In this situation, you should configure the exact name of the workloads to Nocalhost's config.yaml.

Using static workload names is recommended. 