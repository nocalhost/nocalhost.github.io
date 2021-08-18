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

**Application** is a concept of Nocalhost. An application consists of a set of [Kubernetes manifests](https://kubernetes.io/docs/reference/glossary/?all=true#term-manifest). These manifests contain resources descriptions of all the components you want to deploy.

Nocalhost allows you to customize the deployment and development of these components.

```yaml
application:                    
    name: foo-app               # string    | required | Application name
    manifestType: rawManifest   # string    | required | Application k8s manifest type
    resourcePath: []            # string[]  | required | Set the application resource path
    helmVersion: 0.0.1          # string    | optional | Set default application version for helmRepo
    helmValues: ...             # struct    | optional | Overwrite Helm values.yaml
    ignoredPath: []             # string[]  | optional | 
    onPreInstall: ...           # struct    | optional | The jobs to be executed before application's installation.
    env: ...                    # struct    | optional | Inject environment variable for all workload when installed
    envFrom: ...                # struct    | optional | Use envFile to inject environment variable for all workload when installed
    services: ...               # struct    | optional | Applications' services configurations
```

### `application.onPreInstall`

```yaml
onPreInstall:
    - path: ""                  # string    | required | Job's yaml file, the relative path of the root directory
      weight: 0                 # integer   | required | Order of execution of job, the smallest will be executed first
```

[Read more about how to set up pre-install configurations ](./config-deploy#run-jobs-before-installing-the-application)

### `application.helmVersion` and `application.helmValues`

```yaml
helmValues:
    - kye: ""                   # string    | The Helm chart value key
      value: ""                 # string    | The Helm chart values
```

[Read more to learn how to configure Helm application deployment](./config-deploy-helm)

### `application.env` and `application.envFrom`

```yaml
env: []

envFrom:
    envFile: []                 # string[]  | optional | Use envFile to inject environment variable for all workload 
```

[Read more about how to set up environment variables](./config-deploy#inject-environment-variable-to-workloads)

### `application.services`

A Kubernetes application of microservice architecture consists of multiple microservices in the broad sense. Each microservice is a [Kubernetes workload](https://kubernetes.io/docs/concepts/workloads/) in the narrow sense.

Nocalhost inherits this concept, and the `Services` here corresponds to the microservices in the application. Therefore, Nocalhost's `Service` can be seen as an enhancement to Kubernetes workload.

`services` gives you the options to configure the workloads that give you better deployment and development experiences.

```yaml
services:
    - name: ""                      # string    | required | Name of the workload, also is the display name in cluster
      serviceType: ""               # string    | required | The Kubernetes Workloads type corresponding to the service
      dependLabelSelector: ...      # struct    | optional | Dependent Pods label selector 
      container: ...                # struct    | optional | 
```

:::caution Optional
`Service` configurations are not essential, it will not affect the usage of Nocalhost without configuring it. 
:::

[Read more to learn how to configure `services`](./config-services)