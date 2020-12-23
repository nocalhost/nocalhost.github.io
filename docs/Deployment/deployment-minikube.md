This tutorial helps you to install `Nocalhost` and access `Nocalhost-Server` on Kubernetes using `Minikube`.



## Prerequisites

To successfully and correctly ensure the use of `Nocalhost` , the following prerequisites needed.

1. [minikube](https://minikube.sigs.k8s.io/docs/start/)
2. [docker](https://www.docker.com/get-started) (we suggest to use docker as driver though `minikube` support dirrent type of driver)
3. [helm3](https://github.com/helm/helm/releases)
4. [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
5. [Nhctl v0.1.0+](https://nocalhost.dev/installation/)



Make sure your `minikube` is up and running. 

```
minikube kubectl version
```

Or you can start minikube by using:

```
minikube start --driver=docker
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



First initial the `Nocalhost` with following command:

```
nhctl init -n ${nocalhostNs} -t 8080
```



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
nocalhost-web       LoadBalancer   10.101.44.129    <pending>     80:8080/TCP   20m
```

We can see the svc `nocalhost-web`'s port '8080' exposed outside we specify by flag while init `Nocalhost`, but we can‘t not access it directly right now because `svc` 'nocalhost-web' is still pending.



Use [`minikube tunnel`](https://minikube.sigs.k8s.io/docs/handbook/accessing/) 

> `minikube tunnel` runs as a process, creating a network route on the host to the service CIDR of the cluster using the cluster’s IP  address as a gateway.  The tunnel command exposes the external IP  directly to any program running on the host operating system.



Then entering `Nocalhost` homepage with http://`minikube ip`:`nocalhost-web-expose-port`. In this tutorials, `minikube ip` is `192.168.49.2` and `nocalhost-web`'s expose port is 30265.

```
> minikube ip

192.168.49.2
```



So entering `http://192.168.49.2:8080:



You can login the `nocalhost-server` with email `admin@admin.com` pwd `123456` and there is an application sample for Quick-Experience created by `Nocalhost` using the `kubeconfig` you specified when the `Nocalhost` was inited.