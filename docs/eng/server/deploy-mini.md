# Deploy Nocalhost Server to Minkube.

## Prerequisites

* **[minikube](https://minikube.sigs.k8s.io/docs/start/)** installed
* **[Docker](https://www.docker.com/get-started)** installed (we suggest to use docker as driver though ``minikube`` support different type of driver)
* **[helm 3.3+](https://helm.sh/docs/intro/install/)** installed
* **[ntctl](../getting-started/installation)** installed

### Check your environment before next step

#### Check minikube

```
minikube status
```

#### Check all the essential application

```
nhctl version && helm version && kubectl version
```

#### Check kubeconfig file

**nhctl** require kubeconfig file in ``$HOME/.kube`` name ``config``, or you can specify other kubeconfig file by seeting the ``--kubeconfig`` flag

## Getting Started

### Step 1: Initialize Nocalhost

Initialize the ``Nocalhost``:

```
nhctl init demo -n nocalhost-demo
```

!!!note ``-n`` flag
    ``-n nocalhost-demo`` is the namespace that ``demo`` will use to deploy. If the namespace does not exit, ``nhctl`` will create it automatically. Or you can specify namespace to deploy the ``demo`` by using the ``-n`` flag

Now we can see multi pods was created in namespace nocalhost and nocalhost-reserved: 

```
> kubectl get pod -n nocalhost-demo

NAME                             READY   STATUS    RESTARTS   AGE
nocalhost-api-5b46855846-9dvzh   1/1     Running   3          22m
nocalhost-mariadb-0              1/1     Running   0          22m
nocalhost-web-5c9b865cf6-sqrrw   1/1     Running   0          22m
```

```
> kubectl get pod -n nocalhost-reserved

NAME                                  READY   STATUS      RESTARTS   AGE
nocalhost-dep-7488b45c7f-bh5p2        1/1     Running     0          20m
nocalhost-dep-installer-9rfm2-t8pgv   0/1     Completed   0          21m
```

Waiting for about 5 minutes, after the ``nhctl`` finish initialization, you should see:


![After Deployment](../../assets/images/installation/nocal-after-init.png)

!!!tip Port Forwarding
    Nocalhost will automatically run port-forward to a pod in a Kubernetes cluster. In this case, local port **64580**  forwards data to port **80** on the defined pod. You can access this pod via ```http://127.0.0.1:64580``

### STEP 2: Access the Nocalhost Server Web Service

You can access the Nocalhost Server web service via the ``http://127.0.0.1:64580``

![Nocalhost Server Login](../../assets/images/installation/nocal-server-login.jpg)

Enter the default account information to login to the Nocalhost dashboard

```
Email: admin@admin.com
Password: 123456
```

:thumbsup: **Congratulations!** You are all set to go

