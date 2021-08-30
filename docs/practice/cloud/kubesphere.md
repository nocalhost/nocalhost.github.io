---
title: Develop KubeSphere with Nocalhost
id: kubesphere
---

### 1. Preparation

Since KubeSphere must deploy on the specific Kubernetes namespaces, a standalone Kubernetes cluster is required. You can KubeSphere on a private cluster, like Docker Desktop, minikube, and so on. Kubernetes cluster hosting on public cloud platform (GKE, AWS EKS, AKS ...) would be fine as well.

### 2. Installation

Run the following commands on a Kubernetes cluster:

```
kubectl apply -f https://github.com/kubesphere/ks-installer/releases/download/v3.1.1/kubesphere-installer.yaml
kubectl apply -f https://github.com/kubesphere/ks-installer/releases/download/v3.1.1/cluster-configuration.yaml
```

After installation, access `http://127.0.0.1:30880` with browser, and you will see KubeSphere Dashboard. Log in with `admin` as username, and `P@88w0rd` as password.

### 3. Development

There are several services deployed in namespace `kubesphere-system`. I will take service `ks-apiserver` as an example to demonstrate how to develop KubeSphere service with Nocalhost.

First of all, install Goland with Nocalhost plugin. Then, add Kubernetes cluster with KubeSphere installed by Nocalhost plugin. Next, find deployment `ks-apiserver` from the tree of Nocalhost plugin. Right click it, and click `Dev Config` on menu. Copy and paste the following configure to the file opened just now.

```
name: ks-apiserver
serviceType: deployment
containers:
  - name: ks-apiserver
    dev:
        gitUrl: https://github.com/kubesphere/kubesphere.git
        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/golang:1.16
        shell: ""
        workDir: /home/nocalhost-dev
        storageClass: ""
        resources: null
        persistentVolumeDirs: []
        command:
            build: []
            run:
              - go
              - run
              - /home/nocalhost-dev/cmd/ks-apiserver/apiserver.go
            debug:
              - dlv
              - --headless
              - --log
              - --listen
              - :2345
              - --api-version
              - "2"
              - --accept-multiclient
              - debug
              - /home/nocalhost-dev/cmd/ks-apiserver/apiserver.go
            hotReloadRun: []
            hotReloadDebug: []
        debug:
            remoteDebugPort: 2345
        useDevContainer: false
        sync: null
        env: []
        envFrom: null
        portForward: []
```

For more details about the configure file, see [Config Reference](http://localhost:3000/docs/config/config-ref).

Save the file. Finally, right click deployment `ks-apiserver` and click `Start DevMode` on menu.

After DevMode started, you can just start run or debug by clicking Run/Debug on Goland project.

Enjoy your development of KubeSphere services.