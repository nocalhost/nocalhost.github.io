This tutorial helps you to install `Nocalhost` and access `Nocalhost-Server` on Kubernetes using `Native Kubernetes Cluster`



## Prerequisites

To successfully and correctly ensure the use of `Nocalhost` , the following prerequisites needed.

1. [kubernetes cluster 1.16+ ](https://minikube.sigs.k8s.io/docs/start/)(1.12+ is supported but you can't use service-dependency provide by `Nocalhost` )
2. [helm3](https://github.com/helm/helm/releases)
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

- use `nhctl init -n ${nocalhostNs} -t nodeport -p 8080` to install `Nocalhost` and expose the `Nocalhost` service as nodeport.
- use `nhctl init -n ${nocalhostNs} -p 8080`  to install `Nocalhost` if you have an **External Load Balancer**.



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



You can login the `nocalhost-server` with email `admin@admin.com` pwd `123456` and there is an application sample for Quick-Experience created by `Nocalhost` using the `kubeconfig` you specified when the `Nocalhost` was inited.



## Create a Quick-Experience kubernetes application ['bookinfo'](https://github.com/nocalhost/bookinfo).

This section will help you to config an application simply.



Now get into `nocalhost-web`.



### STEP1. Create User

First switch to the tab `Users`, click `CREATE` and create a user as follow:

```
Email								:		foo@nocalhost.dev
Name								:   foo
Password            :   123456
```

This user can sign into the `Nocalhost-IDE-Plug-in` but can not sign into `Nocalhost-Server`. (default user `admin@admin.com` can also sign in both.)



### STEP2. Create Cluster

First switch to the tab `Clusters`, paste **kube admin config** by using `kubectl config view --minify --raw --flatten` and click on the `Save` button to create a `Cluster`. 

Then we can see:

| Name     | Cluster Version | NodesCount | Users Count | Creator | ...  |
| -------- | --------------- | ---------- | ----------- | ------- | ---- |
| whatever | v1.20.1         | 1          | 0           | Admin   | ...  |



### STEP3. Create Application

After creating `Cluster`, switch to another tab named `Applications`. Create an 'bookinfo' application manually by using following config:

```
Application Name								:		bookinfo
Kubernetes Manifest Source Type :		Git
Manifest Type										:   Manifest
Git Repo Url										:		https://github.com/nocalhost/bookinfo.git
Resource Dir										:		manifest/templates
```

[bookinfo](https://github.com/nocalhost/bookinfo.git) is a demo project for `nocalhost` , it contain both manifest type `Kubenetes manifests` and `helm manifests`, we use `Kubernetes manifests` and specify it's manifest resource dir `manifest/templates`.  (or you can use `Helm manifests` with resource Dir `charts/bookinfo`)

| Application Name | Kubernetes Manifest Source Type | Creator | ...  |
| ---------------- | ------------------------------- | ------- | ---- |
| bookinfo         | Git                             | Admin   | ...  |



### STEP4. Create devSpace for User

At last, click the button `CREATE SPACE` on the far right of the application list.



Choose a `Cluster` created before to create a `DevSpace` for this `Application` and specify it's owner `foo`

| Status | Owner | Namespace | Created At          | Cluster  | ...  |
| ------ | ----- | --------- | ------------------- | -------- | ---- |
|        | Foo   | Nh1hsbq   | 2020-12-11 00:00:00 | Whatever | ...  |



Then `nocalhost` use `kubenetes config` from `Cluster` to create a `kubernates namespace`. This namespace use for installing application when develop on `Nocalhost-Plug-In`.