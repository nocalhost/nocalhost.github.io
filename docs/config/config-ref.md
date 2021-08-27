# Config Reference

## Full Nocalhost Configuration

```yaml
configProperties:
  version: v2
  envFile: env.dev

application:
  name: coding-agile
  manifestType: rawManifest
  helmVersion: 0.0.1
  resourcePath: []
  ignoredPath: []
  onPreInstall: 
    - path: "on-pre-install-job.yaml"
      weight: -1
  onPostInstall: 
    - path: "on-post-install-job.yaml"
      weight: -1
  onPreDelete: 
    - path: "on-pre-delete-job.yaml"
      weight: -1
  onPostDelete: 
    - path: "on-post-delete-job.yaml"
      weight: -1
  onPreUpgrade: 
    - path: "on-pre-upgrade-job.yaml"
      weight: -1
  onPostUpgrade: 
    - path: "on-post-upgrade-job.yaml"
      weight: -1
  helmValues:
    - key: DOMAIN
      value: ${DOMAIN:-www.coding.com}
    - key: DEBUG
      value: ${DEBUG:-true}
  env: 
    - name: DEBUG
      value: ${DEBUG:-true}
    - name: DOMAIN
      value: "www.coding.com"
  envFrom: 
    envFile: 
      - path: dev.env
      - path: dev.env
  services:
    - name: e-coding
      serviceType: deployment
      dependLabelSelector: 
        pods: 
          - "name=mariadb"
          - "app.kubernetes.io/name=mariadb"
        jobs:
          - "job-name=init-job"
          - "app.kubernetes.io/name=init-job"
      containers:
        - name: coding
          install: 
            env: 
              - name: DEBUG
                value: "true"
              - name: DOMAIN
                value: "www.coding.com"
            envFrom: 
              envFile: 
                - path: dev.env
                - path: dev.env
            portForward:
              - 3306:3306
          dev:
            gitUrl: xxx-job
            image: java:8-jdk
            shell: "bash"
            workDir: "/root/nocalhost-dev"
            resources:
              limits:
                cpu: "1"
                memory: 1Gi
              requests:
                cpu: "0.5"
                memory: 512Mi
            storageClass: "cbs"
            persistentVolumeDirs: 
              - path: "/root"
                capacity: 100Gi

            command: 
              run: ["./gradlew", "bootRun"]
              debug: ["./gradlew", "bootRun", "--debug-jvm"]
            debug: 
              remoteDebugPort: 5005
            useDevContainer: false
            sync: 
              type: send
              filePattern: 
                - "./src"
                - "./pkg/fff"
              ignoreFilePattern:
                - ".git"
                - "./build"
            env: 
            - name: DEBUG
              value: "true"
            - name: DOMAIN
              value: "www.coding.com"
            envFrom:
              envFile: 
                - path: dev.env
                - path: dev.env
            portForward:
            - 3306:3306
```

## Configuration Structure

```yaml

configProperties: ...           # struct    | required | Specify config properties

application: ...                # struct    | required | Specify application configuration

```

### `configProperties`

```yaml

configProperties:               
    version: v2                 # string    | required | config file version
    envFile: null               # string    | optional | env file name, substitution variable for this file

```

### `application`

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
    <HOOKS>: ...                # struct    | optional | Application Hooks
    env: ...                    # struct    | optional | Inject environment variable for all workload when installed
    envFrom: ...                # struct    | optional | Use envFile to inject environment variable for all workload when installed
    services: ...               # struct    | optional | Applications' services configurations

```

### Application Hooks

`application.[*].<HOOKS>`

Nocalhost provides a hook mechanism to allow developers to intervene at certain points in a deployment's life cycle. For example, you can use hooks to:

- Execute a Job to back up a database before deploy an application
- Run a job before deleting a release to gracefully take a service out of rotation before removing it

[Read more to learn how to use application hooks](./config-hooks)

### `application.helmVersion` and `application.helmValues`

Helm application relative configuration which only take effect for deployment of Helm application.

```yaml
helmVersion: 0.0.1

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

Nocalhost inherits this concept, and the `services` here corresponds to the microservices in the application. Therefore, Nocalhost's `services` can be seen as an enhancement to Kubernetes workload.

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