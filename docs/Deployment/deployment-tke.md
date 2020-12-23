This tutorial helps you to install `Nocalhost` and access `Nocalhost-Server` on Kubernetes using `TKE`.



## Prerequisites

To successfully and correctly ensure the use of `Nocalhost` , the following prerequisites needed.

1. [kubernetes 1.16+ ](https://minikube.sigs.k8s.io/docs/start/)(1.12+ is supported but you can't use service-dependency provide by `Nocalhost` )
   - Your `TKE` should use docker as runtime container
   - configure open external network access: 0.0.0.0/0 
2. [helm3](https://github.com/helm/helm/releases)
3. [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
4. [Nhctl v0.1.0+](https://nocalhost.dev/installation/)



Make sure your `kubernetes` is up and running. 



Check `nhctl` ,  `helm`,  `kubectl` too.

```
nhctl version && helm version && kubectl version
```

`nhctl` require kube config file in `$HOME/.kube` named `config`,  or you can specify other kubeconfig files by setting the `--kubeconfig` flag.



 **Open external network access: 0.0.0.0/0 or cluster egress IP to achieve access to the Kubernetes api-server internal and external. **

![](../assets/images/deployment/tke1.png)

![](../assets/images/deployment/tke2.png)



## Init `Nocalhost`

Specify a namespace to install `Nocalhost`:

```
nocalhostNs=nocalhost
```



First initial the `Nocalhost` with following command:

```
nhctl init -n ${nocalhostNs} -p 8080
```



Waiting for 5 minutes, the `Nocalhost-Server(include nocalhost-api and nocalhost-web)` and `Nocalhost-Dep` will be installed and create a Quick-Experience `Application` automatic:

```
 ✓  Nocalhost init completed.
 Server Url: http://159.75.142.135:8080
 Username: foo@nocalhost.dev
 Password: 123456
 please setup VS Code Plugin and login, enjoy!
```



## Access `nocalhost-Server`

`nocalhost-web` is a component of `Nocalhost-Server`, it's a web-based `nocalhost` management designed to store and manage nocalhost applications and configurations.



```
> kubectl get svc -n ${nocalhostNs}

NAME                TYPE           CLUSTER-IP       EXTERNAL-IP     PORT(S)        AGE
nocalhost-api       ClusterIP      10.108.240.200   <none>          8080/TCP       20m
nocalhost-mariadb   ClusterIP      10.96.11.107     <none>          3306/TCP       20m
nocalhost-web       LoadBalancer   10.101.44.129    159.75.142.135  80:8080/TCP    20m
```

We can see the svc `nocalhost-web`'s port '8080' exposed outside we specify by flag while init `Nocalhost`, and we can access it directly right now.



So entering `http://159.75.142.135:8080`:



You can login the `nocalhost-server` with email `admin@admin.com` pwd `123456` and there is an application sample for Quick-Experience created by `Nocalhost` using the `kubeconfig` you specified when the `Nocalhost` init.

## What next?

[Next, take an experience with IDE-plug-ins to get best practices for `Nocalhost`](/Tutorials/plugin-best-practices)