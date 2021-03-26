This tutorial helps you to install `Nocalhost` and access `Nocalhost-Server` on Kubernetes using `Native Kubernetes Cluster`



## Prerequisites

To successfully and correctly ensure the use of `Nocalhost` , the following prerequisites needed.

1. [kubernetes cluster 1.16+ ](https://minikube.sigs.k8s.io/docs/start/)(1.12+ is supported but you can't use service-dependency provide by `Nocalhost` )
2. [helm3 (Recommend Helm 3.3+)](https://github.com/helm/helm/releases)
3. [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
4. [Nhctl v0.1.0+](https://nocalhost.dev/installation/)



Make sure your `kubernetes` is up and running. 

```
kubectl version
```



Check `nhctl` , `helm`, `kubectl` too.

```
nhctl version && helm version && kubectl version
```

`nhctl` require kube config file in `$HOME/.kube` named `config`,  or you can specify other kubeconfig files by setting the `--kubeconfig` flag.



## Init `Nocalhost`

Specify a namespace to install `Nocalhost`:

```
nocalhostNs=nocalhost
```



We won‘t create a pv for you automatically, before installation, make sure your kubernetes cluster has a suitable `pv` for `pvc` binding, [here is a solution for this problem](https://nocalhost.dev/FAQ/pvc-unbound/).



First initial the `Nocalhost` with following command, There is two selection for you to install `Nocalhost`

- use `nhctl init demo -n ${nocalhostNs} -t nodeport -p 8080` to install `Nocalhost` and expose the `Nocalhost` service as nodeport.
- use `nhctl init demo -n ${nocalhostNs} -p 8080`  to install `Nocalhost` if you have an **External Load Balancer**.



Waiting for 5 minutes, the `Nocalhost-Server(include nocalhost-api and nocalhost-web)` and `Nocalhost-Dep` will be installed and create a Quick-Experience `Application` automatic.



Now we can see multi pods was created in namespace nocalhost and nocalhost-reserved: 

```
> kubectl get pod -n ${nocalhostNs}

NAME                             READY   STATUS    RESTARTS   AGE
nocalhost-api-5b46855846-9dvzh   1/1     Running   3          22m
nocalhost-mariadb-0              1/1     Running   0          22m
nocalhost-web-5c9b865cf6-sqrrw   1/1     Running   0          22m
```



```
> kubectl get pod -n ${nocalhostNs}-reserved

NAME                                  READY   STATUS      RESTARTS   AGE
nocalhost-dep-7488b45c7f-bh5p2        1/1     Running     0          20m
nocalhost-dep-installer-9rfm2-t8pgv   0/1     Completed   0          21m
```



## Access `nocalhost-Server`

`nocalhost-web` is a component of `Nocalhost-Server`, it's a web-based `nocalhost` management designed to store and manage nocalhost applications and configurations.



```
> kubectl get svc -n ${nocalhostNs}

NAME                TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)        AGE
nocalhost-api       ClusterIP      10.108.240.200   <none>        8080/TCP       20m
nocalhost-mariadb   ClusterIP      10.96.11.107     <none>        3306/TCP       20m
nocalhost-web       NodePort       10.101.44.129    <none>        80:8080/TCP    20m
```

We can see the svc `nocalhost-web`'s port '8080' exposed outside we specify by flag while init `Nocalhost`, and we can access it directly right now.



Then entering `Nocalhost` homepage with http://`kubenetes ip`:`nocalhost-web-expose-port`. In this tutorials, `kubenetes ip` is `124.156.139.127` and `nocalhost-web`'s expose port is 8080.

So entering `http://124.156.139.127:8080`:

> If your svc nocalhost-web's TYPE is LoadBalancer, the nocalhost-server-url is http://`nocalhost-web-external-ip`:`nocalhost-web-expose-port`



You can login the `nocalhost-server` with email `admin@admin.com` pwd `123456` and there is an application sample for Quick-Experience created by `Nocalhost` using the `kubeconfig` you specified when the `Nocalhost` init.


## What next?

[Next, take an experience with IDE-plug-ins to get best practices for `Nocalhost`](/Tutorials/plugin-best-practices)