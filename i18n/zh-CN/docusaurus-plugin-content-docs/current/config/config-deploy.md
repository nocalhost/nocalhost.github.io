---
title: Basic
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure Application Deployment

You can configured the deployment method of matching type to deploy your application in Kubernetes with Nocalhost IDE plugin. Nocalhost supports to use the following types to deploy application: Nocalhost supports to use the following types to deploy application:

- Manifest
- Helm
- Kustomize

## Configurations

Application deployments are configured within the `application` section of the `config.yaml`.

:::caution Config.yaml Nocalhost will **not** create this yaml file for you by default. :::caution Config.yaml Nocalhost will **not** create this yaml file for you by default. You need to add a `.nocalhost` folder under your application's root directory and create a `config.yaml` file within the folder. ::: :::

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
```

</TabItem>
</Tabs>

:::info Example Configurations We provide an example application, you can check out the source code in our [Github Repo](https://github.com/nocalhost/bookinfo/tree/main/.nocalhost) for full configurations. ::: :::

## Required Configurations

### Application Name

`application[*].name # required`

Nocalhost uses a **unique** application name to differentiate different applications. Therefore, you **can not** deploy two applications with the same name in one namespace. Therefore, you **can not** deploy two applications with the same name in one namespace.

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

Set application source path. Set application source path. This config must correspond to [`mainifestType`](#manifest-type), otherwise, this config will not take effect.

#### Example: Configure resource path for the corresponding type

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

:::note This is the source path configuration at application level :::

## Advanced Configurations

Nocalhost provides some enhancements to application deployment.

### Ignored Path

`application[*].ignoredPath # optional`

Nocalhost will ignore the files under this path during installation. This config must correspond to [`mainifestType`](#manifest-type), otherwise, this config will not take effect. This config must correspond to [`mainifestType`](#manifest-type), otherwise, this config will not take effect.

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

Nocalhost supports injecting the preset environment variables to all workloads when deploying an application. You can inject these variables by input the values or import the file. You can inject these variables by input the values or import the file.

:::caution nocalhost-dep Needed You need to have `nocalhost-dep` to install for this configuration to take effect. Please refer to [Nocalhost Dep](../server/nh-dep) for more details. ::: Please refer to [Nocalhost Dep](../server/nh-dep) for more details. :::

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

:::info Duplicate Configs If both `env` and `envFrom` configure at the same time, Nocalhost will merge the configurations, and the duplicate parts are subject to `env` configs. ::: :::

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
  - path: job-02.yaml
    weight: "-5"
```

**Explanation:**

Nocalhost will wait for the completion of `job-01` and `job-02` execution before deploying the application.

## Configure Workloads and Containers Deployments

- [Learn how to control startup sequence of the workload](./config-services#servicesdependlabelselector)
- [Learn how to inject environment variables to container](./config-services##inject-environment-variable-to-containers)
- [Learn how to configure port-forwarding of the workload](./config-services#setting-up-port-forwarding)