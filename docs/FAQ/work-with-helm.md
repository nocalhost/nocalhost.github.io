#### How does Nocalhost find services when the workloads are installed by Helm?

By default, Nocalhost recognizes services by the exact name of workloads in the cluster. But the name of the workloads installed by Helm may be generated according to the Chart templates. 

In one case, if the Chart is created with the template provided by Helm, Nocalhost may find it by looking for workloads with name formed with `<release-name>-<service-name>`. For example, there is a service defined in config.yaml as following:

```
...
services:
  - name: productpage
    serviceType: deployment
```

When we install a workload by Helm as following:

```
$ helm install dev .
$ kubectl get deployment -n test
NAME                             READY   UP-TO-DATE   AVAILABLE   AGE
dev-productpage   0/1     1            0           9s
```

Nocalhost will consider the workload `dev-productpage` is the service named `productpage` defined in config.yaml while there is no other workload named `productpage` in the cluster.

In other case, if you create Chart with other templates or install Chart in other ways, Nocalhost cannot find the services in the config.yaml. In this situation, you should configure the exact name of the workloads to Nocalhost's config.yaml.