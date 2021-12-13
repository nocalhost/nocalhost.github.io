---
title: Spec
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<span id="danger"></span>

[Overview](config-en.md) / [Deploy Config](config-deployment-en.md) / [Spec](config-deployment-spec.md)

<br/>

******

# What deployment configurations does Nocalhost provide?

:::danger Some configurations require additional components


Some functions of the deployment configuration rely on the **Nocalhost-Dep component**. If you use Nocalhost Server, we will automatically install this component for you. Otherwise an additional installation is required.

If the **Nocalhost-Dep component** is not installed, some functions will be restricted. This article will mark those functions that need **Nocalhost-Dep**.

:::

## Startup dependency control ([component dependency](#danger))
Example:
```yaml
application:
  name: example
  manifestType: rawManifestGit
  resourcePath: [ "example" ]
  
  services:
    - name: whatever
      serviceType: deployment
      
      dependLabelSelector:
        pods:
          - "name=mariadb"
          - "app.kubernetes.io/name=example"
        jobs:
          - "job-name=init-job"
```

When a resource declares `dependLabelSelector` in the deployment configuration, the characters in the `pods` array represent the labels of the pods to be waited for. The format is key-value pairs. The characters in the `jobs` array represent the labels of the jods to be waited for. The format is also key-value pairs.

Both `pods` and `jobs` are optional. When you actually deploy your application, it will generate an `initContainer` for the specified workload, wait for the status of all pods matching the label to be `Ready`, and wait for the status of all jobs matching the label to be `Succeeded`.

<br/>

******

## Injecting Environment variable ([Component dependency](#danger))

### Injecting Global variable

Example:

```yaml
application:
  name: example
  manifestType: rawManifestGit
  resourcePath: [ "example" ]
  
  ##### start
  env:
    - name: DEBUG
      value: false
    - name: DOMAIN
      value: nocalhost.dev
  envFrom:
    envFile:
      - path: relpath/to/env/file
  ##### end

```

Injecting global variables needs to be declared at the level of `application`. During the deployment, it will inject the corresponding environment variables into all deployed `Deployment`, `DaemonSet`, `ReplicaSet`, `StatefulSet`, `Job`, and `CronJob`.

:::tip Injecting variables supports two kinds syntax, which can be mixed

- The first one is to declare key-value pairs directly
- The second is to declare an env file relative to `config.yaml`, the content is line-by-line `Key=Value`:


```dotenv

DEBUG=true
DOMAIN=nocalhost.dev

```

:::

The priority of `env` is higher than that of `envFrom`

<br/>

### Injecting variables at the level of container

Example:

```yaml

application:
  name: example
  manifestType: rawManifestGit
  resourcePath: [ "example" ]

  services:
    - name: whatever
      serviceType: deployment
      containers:
        - name: your-container-name
          install:

            ##### start
            env:
              - name: DEBUG
                value: false
              - name: DOMAIN
                value: nocalhost.dev
            envFrom:
              envFile:
                - path: relpath/to/env/file  
            ##### end
            
```

The container-level variable injection is declared in `application.services[*].containers[*].install`, indicating that the corresponding variables are injected into the corresponding container during deployment. The rules of `env` and `envFrom` are in line with the application level's.

<br/>

******

## Automatic port forwarding after installation

Example:

```yaml
application:
  name: example
  manifestType: rawManifestGit
  resourcePath: [ "example" ]

  services:
    - name: whatever
      serviceType: deployment
      containers:
        - name: your-container-name
          install:
            
            ##### start
            portForward:
              - 5005:5005
              - 3306:3306
            ##### end
            
```

The configuration rules are similar to the container and variable injection declarations, and need to be configured in `application.services[*].containers[*].install`.

The port forwarding after installation is as it's name implies. After the application is installed, it can automatically forward port to the local for some services. For instance, database, MQ and other commonly used services' ports are suitable for automatic forwarding and configuration rules after installation. The port forwarding rules are consistent with K8s, namely `local port: container port`.

<br/>

******

## Hook

Example:

```yaml
application:
  name: example
  manifestType: rawManifestGit
  resourcePath: [ "example" ]

  ##### start
  onPreInstall:
    - path: manifest/templates/pre-install/print-num-job-01.yaml
      weight: "0"
    - path: manifest/templates/hook/pre-install.yaml
      weight: "1"
  onPostInstall:
    - path: manifest/templates/hook/post-install.yaml
      weight: "1"
  onPreUpgrade:
    - path: manifest/templates/hook/pre-upgrade.yaml
      weight: "1"
  onPostUpgrade:
    - path: manifest/templates/hook/post-upgrade.yaml
      weight: "1"
  onPreDelete:
    - path: manifest/templates/hook/pre-delete.yaml
      weight: "1"
  onPostDelete:
    - path: manifest/templates/hook/post-delete.yaml
      weight: "1"
  ##### end

```


Nocalhost supports injecting various hooks in the life cycle of the application. **Hooks currently only support Job**, where `path` is the RawManifest **relative to the home directory**, which must be the job type. `weight` is the weight. The lower ones are executed first.

<br/>

:::danger The limits on the Hook

Hook is similar to Helm's Hook. Hook itself is to make up for the shortcomings of non-Helm applications, so ** Helm-type applications cannot configure Hook (You can use Helm's Hook directly)**.

:::

<br/>

:::info The explanation of Hook

- `onPreInstall` occurs before the employment of the application, including performing some initialization operations such as clusters and databases. The deployment will start after the job status is `Successed`. If it fails, the installation will be terminated.
- `onPostInstall` occurs after the application is deployed. When all resources are submitted to the K8s Api Server, this job will be executed. After the status is `Successed`, the deployment is successful. Otherwise, it will roll back and perform the uninstall operation.

<br/>

By analogy, the Upgrade Hook and Delete Hook will not roll back after the execution fails, and only prompt failure.
:::

<br/>

******

## The customization of the HelmValues

Example:

```yaml
application:
  name: example
  manifestType: rawManifestGit
  resourcePath: [ "example" ]

  ##### start
  helmValues:
    - key: nocalhost.example
      value: foo
    - key: nocalhost.deploy.example
      value: bar
  
  helmVals:
    nocalhost:
      example: foo
      deploy:
        example: {{ Release.Name }}
  ##### end

```

<br/>

:::tip HelmValues supports two kinds of syntax

- The first syntax only supports pure strings and has a higher priority.
- The second syntax is the same as `values.yaml` and can be interspersed with Helm syntax.

:::
