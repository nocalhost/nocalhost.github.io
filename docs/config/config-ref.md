# Config Reference

For full detailed Nocalhost config specs, please refer to [Nocalhost Config Specs](../reference/nh-config)


## Configuration Structure

```yaml
configProperties: ...           # struct    | required | Specify config properties

application: ...                # struct    | required | Specify application configuration
```

## `configProperties`

```yaml
configProperties:               
    version: v2                 # string    | required | config file version
    envFile: null               # string    | optional | env file name, substitution variable for this file
```

## `application`

Nocalhost will use these configurations to manage an application.

```yaml
application:                    
    name: foo-app               # string    | required | Application name
    manifestType: rawManifest   # string    | required | Application k8s manifest type
    resourcePath: []            # string[]  | required | Set the application resource path
    helmVersion: 0.0.1          # string    | optional | Set default application version for helmRepo
    ignoredPath: []             # string[]  | optional | 
    onPreInstall: ...           # struct    | optional | The jobs to be executed before application's installation.
    helmValues: ...             # struct    | optional | Overwrite Helm values.yaml
    env: ...                    # struct    | optional | Inject environment variable for all workload when installed
    envFrom: ...                # struct    | optional | Use envFile to inject environment variable for all workload when installed
    services: ...               # struct    | optional | Applications' services configurations
```

[Learn more about how to configure application deployment.](./config-deploy)

### `application[*].onPreInstall`

```yaml
onPreInstall:
    - path: ""                  # string    | required | Job's yaml file, the relative path of the root directory
      weight: 0                 # integer   | required | Order of execution of job, the smallest will be executed first
```

[Learn more about how to set up pre-install configurations ](./config-deploy#run-jobs-before-installing-the-application)

### `application[*].helmValues`

```yaml
helmValues:
    - kye: ""                   # string    | The Helm chart value key
      value: ""                 # string    | The Helm chart values
```

[Learn more about how to overwrite Helm values](./config-deploy-helm#overwrite-helm-values)

### `application[*].env` and `application[*].envFrom`

```yaml
env: []

envFrom:
    envFile: []                 # string[]  | optional | Use envFile to inject environment variable for all workload 
```

[Learn more about how to set up environment variables](./config-deploy#inject-environment-variable)

### `application[*].services`

Nocalhost's services are completely different from Kubernetes Service. It provides enhanced capabilities for application deployment and development.


```yaml
services:
    - name: ""                      # string    | required | Name of the service, also is the display name in cluster
      serviceType: ""               # string    | required | The Kubernetes Workloads type corresponding to the service
      dependLabelSelector: ...      # struct    | optional | Dependent Pods label selector 
      container: ...                # struct    | optional | 
```
- `dependLabelSelector` - [Learn more about how to configure to control workloads' startup sequence](./config-deploy#manage-start-dependency)
- `container` - [Learn more about how to configure development mode](./config-dev)

:::info Not essential
Service configurations are not essential, it will not affect the usage of Nocalhost without configurations. It's an enhancement that gives you a better deployment and development experience.
:::
