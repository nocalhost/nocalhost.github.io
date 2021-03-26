---
title: Deploy Nocalhost Server
---

## Before start

Prerequisites:

- A Kubernetes(1.16+) Cluster(prefer to be provided by the Cloud platform or Minikube)
- Configure kubectl for you to be able to access above cluster as admin
- RBAC must be enabled in above cluster
- Install Helm3 (Recommend Helm 3.3+)
- Install Git


!!! note "Kubernetes provided"
	This document requires Kubernetes provided by Cloud Platform, such as Tencent TKE. <br />
	If you ues Minikube, please see [here](/Tutorials/nocalhost-with-minikube/)

## Deploy Nocalhost Server with Helm

Use the helm method to deploy Nocalhost, you can make some custom changes to the deployed components.

The helm chart content is:

```yaml
# Default values for nocalhost-api.
# This is a YAML-formatted file.
# Declare variables to be passed into your templates.

replicaCount: 1

api:
  image:
    repository: codingcorp-docker.pkg.coding.net/nocalhost/public/nocalhost-api
    pullPolicy: Always
    # Overrides the image tag whose default is the chart appVersion.
    tag: latest

web:
  image:
    repository: codingcorp-docker.pkg.coding.net/nocalhost/public/nocalhost-web
    pullPolicy: Always
    # Overrides the image tag whose default is the chart appVersion.
    tag: latest

imagePullSecrets: []
nameOverride: ""
fullnameOverride: ""

podAnnotations: {}

podSecurityContext: {}
  # fsGroup: 2000

securityContext: {}
  # capabilities:
  #   drop:
  #   - ALL
  # readOnlyRootFilesystem: true
  # runAsNonRoot: true
  # runAsUser: 1000

#Service type, if your Kubernetes cluster does not have a LoadBalancer service, you can change it to a NodePort service
service:
  type: LoadBalancer
  port: 80

resources: {}
  # We usually recommend not to specify default resources and to leave this as a conscious
  # choice for the user. This also increases chances charts run on environments with little
  # resources, such as Minikube. If you do want to specify resources, uncomment the following
  # lines, adjust them as necessary, and remove the curly braces after 'resources:'.
  # limits:
  #   cpu: 100m
  #   memory: 128Mi
  # requests:
  #   cpu: 100m
  #   memory: 128Mi

autoscaling:
  enabled: false
  minReplicas: 1
  maxReplicas: 100
  targetCPUUtilizationPercentage: 80
  # targetMemoryUtilizationPercentage: 80

nodeSelector: {}

tolerations: []

affinity: {}

mariadb:
  fullnameOverride: nocalhost-mariadb
  commonAnnotations: {"helm.sh/hook":"pre-install","helm.sh/hook-weight":"1"}
  image:
    registry: codingcorp-docker.pkg.coding.net/nocalhost/public
    repository: mariadb
  auth:
    rootPassword: root
    database: nocalhost
  primary:
    persistence:
      size: "10Gi"
    extraVolumes:
    - name: nocalhost-api-sql-config-volume
      configMap:
        name: nocalhost-api-sql-init-config
        defaultMode: 0755
    extraVolumeMounts:
    - name: nocalhost-api-sql-config-volume
      mountPath: /docker-entrypoint-initdb.d/

#  initdbScripts:
#    my_init_script.sh: |
#      #!/bin/bash
#      echo "init database"
#      mysql -u root -p root nocalhost < /opt/init-sql/nocalhost.sql

```

### Step 1: Clone the nocalhost git repository

```bash
git clone https://github.com/nocalhost/nocalhost.git
```

[ ![](../assets/images/deployment-1.png) ](../assets/images/deployment-1.png){:target="_blank"}

### Step 2: Install nocalhost server with helm

```bash
helm install nocalhost-server ./nocalhost/deployments/chart --kubeconfig=./cls-pc5oy0lu-config
```

Waiting for the initialization process:
[ ![](../assets/images/deployment-2.png) ](../assets/images/deployment-2.png){:target="_blank"}

Get the public network address of nocalhost-web service

[ ![](../assets/images/deployment-3.png) ](../assets/images/deployment-3.png){:target="_blank"}

And then, you can access nocalhost web dashboard in your bowser.


The default account's Email is:
```
admin@admin.com
```

The default account's password is:
```
123456
```


## Deploy Nocalhost Server with nhctl init


### Step 1: Install nocalhost command-line tool(nhctl)

See [installation](/installation) to install nhctl.

### Step 2: Install nocalhost server with nhctl

```bash
nhctl init demo -n nocalhost --kubeconfig=./cls-pc5oy0lu-config
```

Waiting for the initialization process:
[ ![](../assets/images/deployment-4.png) ](../assets/images/deployment-4.png){:target="_blank"}

[ ![](../assets/images/deployment-5.png) ](../assets/images/deployment-5.png){:target="_blank"}

Get the nocalhost-web service's public network address

[ ![](../assets/images/deployment-3.png) ](../assets/images/deployment-3.png){:target="_blank"}

And then, you can access nocalhost web dashboard in your bowser.

The default account's Email is:
```
admin@admin.com
```

The default account's password is:
```
123456
```



