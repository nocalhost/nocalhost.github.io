`Service-dependencey` is a `Service` configuration, and it depends on a `Nocalhost` component called `nocalhost-dep`. 

Caution: `nocalhost-dep` depends on k8s [admission webhooks](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/), so please ensure that the Kubernetes cluster is at least as new as v1.16.0 and ensure that MutatingAdmissionWebhook and ValidatingAdmissionWebhook admission controllers are enabled.


You can click [Service](https://nocalhost.dev/Concepts/service) to see more about `Service` and `Service`'s configuration.





#### dependPodsLabelSelector

It means to wait for at least one pod with this label to be in the RUNNING state, otherwise the Service will wait under init container state. For example, a service such as a deployment 'productpage' depends on another service 'foo':

```
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: foo
```



Then you can configure this `service` as follows:

```
services:
  -name: productpage
    serviceType: deployment
    dependPodsLabelSelector:
    -"app=foo"
```



#### dependJobsLabelSelector

It means waiting for a `job` with specified `label` to have completed and become `Succeeded` state. Gor example, a deployment 'productpage' depends on a job:

```
apiVersion: batch/v1
kind: Job
metadata:
  labels:
    foo: bar
```



You can also configure this `service` as follows:

```
services:
  -name: productpage
    serviceType: deployment
    dependJobsLabelSelector:
    -"foo=bar"
```



