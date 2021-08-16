---
title: Basic
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure Application Deployment

You can configured the deployment method of matching type to deploy your application in Kubernetes with Nocalhost IDE plugin. Nocalhost supports to use the following types to deploy application:

- Manifest
- Helm
- Kustomize

## Configurations

Application deployments are configured within the `application` section of the `config.yaml`. 

:::caution Config.yaml
Nocalhost will **not** create this yaml file for you by default. You need to add a `.nocalhost` folder under your application's root directory and create a `config.yaml` file within the folder.
:::

## Example

<Tabs
  defaultValue="helm"
  values={[
    {label: 'Helm Chart', value: 'helm'},
    {label: 'Manifest', value: 'manifest'},
    {label: 'Kustomizations', value: 'kustom'}
  ]}>
<TabItem value="helm">

```yaml
configProperties:                       # struct    | required | Specify config properties
    version: v2 

application:
  name: bookinfo                        # string    | required | Application name
  manifestType: helmGit                 # string    | required | Application k8s manifest type
  resourcePath: ["charts/bookinfo"]     # string[]  | required | Set the application resource path
  env:                                  # struct    | optional | Inject environment variable for all workload when installed
    - name: DEBUG
      value: ${DEBUG:-false}
    - name: DOMAIN
      value: ${DOMAIN:-coding.net}
  services: ...                         # struct    | optional | Applications' services configurations
```

</TabItem>
  
<TabItem value="manifest">

```yaml
application:
  name: bookinfo                        # string    | required | Application name                 
  manifestType: rawManifestGit          # string    | required | Application k8s manifest type                           
  resourcePath: ["manifest/templates"]  # string[]  | required | Set the application resource path                          
  env:                                  # struct    | optional | Inject environment variable for all workload when installed                            
    - name: DEBUG
      value: ${DEBUG:-false}
    - name: DOMAIN
      value: ${DOMAIN:-coding.net}
  services: ...                         # struct    | optional | Applications' services configurations
```

</TabItem>


<TabItem value="kustom">

```yaml
application:
  name: bookinfo                        # string    | required | Application name
  manifestType: kustomizeGit            # string    | required | Application k8s manifest type
  resourcePath: ["kustomize/base"]      # string[]  | required | Set the application resource path
  env:                                  # struct    | optional | Inject environment variable for all workload when installed                            
    - name: DEBUG
      value: ${DEBUG:-false}
    - name: DOMAIN
      value: ${DOMAIN:-coding.net}
  services: ...                         # struct    | optional | Applications' services configurations
```

</TabItem>
</Tabs>

:::info Example Configurations
We provide an example application, you can check out the source code in our [Github Repo](https://github.com/nocalhost/bookinfo/tree/main/.nocalhost) for full configurations.
:::

## Required Configurations

### Application Name

`application[*].name # required`

Nocalhost uses a **unique** application name to differentiate different applications. Therefore, you **can not** deploy two applications with the same name in one namespace.

```yaml
application:
  name: app-name
```

### Manifest Type

`application[*].manifestType # required`

Nocalhost will chooses different deployment methods according to different `manifestType`.

**Supports Types:**

- **helmGit** - Helm application in Git repository
- **helmRepo** - Helm application in Helm repository
- **helmLocal** - Helm application in local directory
- **rawManifestGit** - Application with manifest yaml config in Git repository
- **rawManifestLocal** - Application with manifest yaml config in local directory
- **kustomizeGit** - Application with manifest yaml config in Git repository
- **kustomizeLocal** - Application with manifest yaml config in local directory

### Resource Path

`application[*].resourcePath # required`

Set application source path, all files in this path will be sync to remote container in development mode. This config must correspond to [`mainifestType`](#manifest-type), otherwise, this config will not take effect.

### Example: Configure resource path for the corresponding type

```yaml title="Corresponding Configs"
// highlight-next-line
manifestType:   helmGit
resourcePath:   ["<chart path: relative path of git repo root>"]

// highlight-next-line
manifestType:   helmLocal
resourcePath:   ["<chart path: relative path of local helm chart path>"]

// highlight-next-line
manifestType:   rawManifestGit
resourcePath:   ["<manifest files path: multi relative paths of git repo root>"]

// highlight-next-line
manifestType:   rawManifestLocal
resourcePath:   ["<manifest files path: multi relative paths of local application path>"]

// highlight-next-line
manifestType:   kustomizeGit
resourcePath:   ["<kustomize file path: relative path of git repo>"]

// highlight-next-line
manifestType:   kustomizeLocal
resourcePath:   ["<kustomize file path: multi relative paths of local application path>"]
```

:::note
This is the source path configuration at application level
:::

## Advanced Configurations

Nocalhost provides some enhancements to application deployment. 

### Ignored Path

`application[*].ignoredPath # optional`

Nocalhost will ignore the files under this path during file synchronization. This config must correspond to [`mainifestType`](#manifest-type), otherwise, this config will not take effect.

#### Example: Configure ignored path for the corresponding type

```yaml title="Corresponding Configs"
// highlight-next-line
manifestType:   rawManifestGit
resourcePath:   ["<ignored manifest files path: multi relative paths of git repo root>"]

// highlight-next-line
manifestType:   rawManifestLocal
resourcePath:   ["<ignored manifest files path: multi relative paths of local application path>"]

// highlight-next-line
manifestType:   kustomizeGit
resourcePath:   ["<ignored kustomize file path: relative path of git repo>"]

// highlight-next-line
manifestType:   kustomizeLocal
resourcePath:   ["<ignored kustomize file path: multi relative paths of local application path>"]
```

### Inject Environment Variable to Workloads

Nocalhost supports injecting the preset environment variables to all workloads when deploying an application. You can inject these variables by input the values or import the file.

:::caution nocalhost-dep Needed
You need to have `nocalhost-dep` to install for this configuration to take effect. Please refer to [Nocalhost Dep](../server/nh-dep) for more details.
:::

#### Example: Setting up inject environment variable

<Tabs
  defaultValue="value"
  values={[
    {label: 'Inject By Values', value: 'value'},
    {label: 'Inject By Files', value: 'file'},
  ]}>
<TabItem value="value">

`application[*].env # optional`

```yml
application:
  env: 
    - name: DEBUG
      value: ${DEBUG:-true}
    - name: DOMAIN
      value: "www.coding.com"
```

</TabItem>
  
<TabItem value="file">

`application[*].envFrom # optional`

```yml
application:
  envFrom: 
    envFile: 
      - path: dev.env
      - path: dev.env
```

</TabItem>
</Tabs>

**Explanation:**

- These variables will be injected to all workloads when deploying
- These variables will take effect after the deployments occurs

:::info Duplicate Configs
If both `env` and `envFrom` configure at the same time, Nocalhost will merge the configurations, and the duplicate parts are subject to `env` configs.
:::

### Run Jobs Before Installing the Application

`application[*].onPreInstall`

Nocalhost allows users to perform some additional operations before deploying applications. 

#### Example: Setting up the pre-install Jobs

```yaml
onPreInstall:
  - path: job-01.yaml       # string    | required | Job yaml file, the relative path of the repo root
    weight: "1"             # integer   | optional | Order of execution of job, tThe smaller the value, the first to execute.
  - path: job-02.yaml
    weight: "-5"
```

**Explanation:**

Nocalhost will wait for the completion of `job-01` and `job-02` execution before deploying the application.

## Configure Workload Deployments

In addition to application deployment configuration, Nocalhost also can configure the workloads deployments.

### Example

```yaml
application:
  ....

  services:
    - name: foo-workload-01                 # string    |  required  | Name of workload
      serviceType: deployment               # string    |  required  | The Kubernetes Workloads type corresponding to this service
      dependLabelSelector:                  # struct    |  optional  | Dependent label selector
      containers: ...                       # struct    |  optional  | Container configurations

    - name: foo-workload-02                
      .....
```

#### Explanation

The `services` section in `config.yaml` is a map with keys representing the name of the workload and values representing the workload definition including [`serviceType`](#service-type), [`container`](#configure-container-deployments) etc. 

### Workload Name

`services[*].name # required`

Same with the [application name](#application-name), this is a **unique** name to differentiate different workloads.

You can configure multi workloads within the `services` section.

```yaml {2,4}
services:
  - name: foo-workload-01
  ...
  - name: foo-workload-02
  ...
```

### Service Type

`services[*].serviceType # required`

Kubernetes workload type, Nocalhost currently supports all Kubernetes workloads types. 

```yaml {3}
services:
  - name: foo-workload-01
    serviceType: deployment
```

[Read more to learn what is Kubernetes workload](https://kubernetes.io/docs/concepts/workloads/)

### Manage Start Dependency

`services[*].dependLabelSelector # optional`

Nocalhost can control the startup sequence of multiple workloads within an application, supports both 'Job' and 'Pod' types.

:::caution nocalhost-dep Needed
You need to have `nocalhost-dep` to install for this configuration to take effect. Please refer to [Nocalhost Dep](../server/nh-dep) for more details.
:::

#### Example: Setting up start dependencies

```yml {4}
services:
  - name: foo-app                   # string    | required | Name of workload
    serviceType: deployment         # string    | required | The Kubernetes workloads type
    dependLabelSelector:
      pods:                         # string[]  | optional | Dependent Pods label selector
        - A-Pod
        - B-Pod
      jobs:                         # string[]  | optional | Dependent Jobs label selector
        - "name=foo-db"
```

**Explanation:**

- Nocalhost will continuously monitor the status of the `A-Pod`, `B-Pod` and `foo-db` 
- Once these pods and job become available, Nocalhost will start the deployment `foo-app`

## Configure Container Deployments

Similar to workloads, you can also configure each container's deployment within the workload. Container deployments are configured within the `services[*].container` section.

### Example

```yaml
services:
  - name:
    ...
    containers:
      - name: container-01          # string  | required | Container name
        install: ...                # struct  | optional | Installation parameters
        dev: ...                    # struct  | optional | Development parameters

      - name: container-02          
        ...                    
```

### Container name

`container[*].name # required`

A unique name to differentiate different containers.

```yaml {2,4}
containers:
  - name: container-01
    ...
  - name: container-02
    ...
```

### Inject Environment Variable to Containers

Nocalhost supports injecting the preset environment variables to the container when deploying the workload. You can inject these variables by input the values or import the file.

:::caution nocalhost-dep Needed
You need to have `nocalhost-dep` to install for this configuration to take effect. Please refer to [Nocalhost Dep](../server/nh-dep) for more details.
:::

#### Example: Setting up inject environment variable

<Tabs
  defaultValue="c-value"
  values={[
    {label: 'Inject By Values', value: 'c-value'},
    {label: 'Inject By Files', value: 'c-file'},
  ]}>
<TabItem value="c-value">

`container[*].install.env # optional`

```yml
containers:
  - name: container-01
    ...
    install:
      env: 
        - name: DEBUG
          value: ${DEBUG:-true}
        - name: DOMAIN
          value: "www.coding.com"
```

</TabItem>
  
<TabItem value="c-file">

`container[*].install.envFrom # optional`

```yml
containers:
  - name: container-01
    ...
    install:
      envFrom: 
        envFile: 
          - path: dev.env
          - path: dev.env
```

</TabItem>
</Tabs>

**Explanation:**

- These variables will be injected to container when deploying
- These variables will take effect after the deployments occurs

:::info Duplicate Configs
If both `env` and `envFrom` configure at the same time, Nocalhost will merge the configurations, and the duplicate parts are subject to `env` configs.
:::

### Setting up Port-Forwarding for Container

`container[*].install.portForward`

Port-forwarding allows you to access your container on `localhost:[PORT]` by forwarding the network traffic from a localhost port to a specified port of a container.

When container deployed, Nocalhost starts port-forwarding as configured in the `install.port` section.

#### Example

```yaml
containers:
  - name: container-01
    ...
    install:
      portForward: 
        - 9883:3306       # string[]  |  optional  | Ports to be forwarded to local when container has been deployed
        - 9884:3307
```

- Using `Local Port : Remote Port` format
- Can setup multi port-forward
