---
title: Develop ApiSix Controller with Nocalhost
id: apisix-controller
---

### 1. Preparation

ApiSix controller can be deployed on standalone or hosted Kubernetes cluster. You can deploy it on Docker Desktop, minikube, or public cloud platform like GKE, AWS EKS, AKS.

This article will deploy ApiSix controller on Docker Desktop, and use Goland with Nocalhost plugin to demonstrate how to develop ApiSix controller.

### 2. Install ApiSix Controller

On Goland with Nocalhost installed, right click the namespace of a standalone cluster which ApiSix controller will be installed on, and click `Install Application` on menu. In the following dialog, input `apisix-ingress-controller` as `Name`, then input `https://charts.apiseven.com` as `Chart URL`. Other options remain default.

### 3. Develop ApiSix Controller

Right click deployment `apisix-ingress-controller`, and click `Dev Config` on menu. Copy and paste the following Nocalhost configure for ApiSix controller to the file opened just now, then save the file.

```
name: apisix-ingress-controller
serviceType: deployment
containers:
  - name: apisix-ingress-controller
    dev:
        gitUrl: https://github.com/apache/apisix-ingress-controller.git
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
              - main.go
              - ingress
              - --config-path
              - conf/config-default.yaml
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
              - main.go
              - ingress
              - --config-path
              - conf/config-default.yaml
            hotReloadRun: []
            hotReloadDebug: []
        debug: null
        useDevContainer: false
        sync: null
        env: []
        envFrom: null
        portForward:
          - 8080:8080
```

Right click deployment `apisix-ingress-controller`, and click `Start DevMode` on menu. After DevMode started, click Run/Debug button on Goland, and then you can access ApiSix controller service on browser by accessing url `http://127.0.0.1:8080`.

From now on, enjoy your ApiSix controller development.