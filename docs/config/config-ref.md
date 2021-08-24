# Config Reference

## Full Config Specs

```yaml
# Specify config properties
# type: object
# default value: {}
# required
configProperties:

  # config file version
  # type: string
  # default value: null
  # required
  version: v2

  # env file name, substitution variable for this file
  # type: string
  # default value: null
  # optional
  envFile: env.dev

application:

  # Application name
  # type: string(dns1123)
  # default value: null
  # required
  # nhctl param: [NAME]
  # uniq
  name: coding-agile

  # Application k8s manifest type
  # type: select，options：helmGit/helmRepo/rawManifest/rawManifestLocal/helmLocal
  # default value: null
  # required
  # nhctl param: --type,-t
  manifestType: rawManifest

  # Set default application version for helmRepo
  # type: string
  # deafult value: latest
  # optional
  helmVersion: 0.0.1

  # helmGit: chart path: relative path of git repo root.
  # helmLocal: chart path: relative path of local helm chart path.
  # helmRepo: no meaning
  # rawManifestGit: manifest files path: multi relative paths of git repo root
  # rawManifestLocal: manifest files path: multi relative paths of local application path
  # kustomizeGit: kustomize file path: relative path of git repo
  # kustomizeLocal: kustomize file path: multi relative paths of local application path
  # type: string[]
  # default value: ["."]
  # required
  resourcePath: []

  # helmGit: no meaning.
  # helmRepo: no meaning.
  # rawManifestGit: ignored manifest path: multi relative paths of git repo root.
  # rawManifestLocal: ignored manifest path: multi relative paths of local application path.
  # helmLocal: no meaning.
  # type: string[]
  # default value: ["."]
  # optional
  ignoredPath: []

  # Executes after templates are rendered, but before any resources are created in Kubernetes
  # type: object[]
  # default value: []
  # optional
  onPreInstall: 

    # Job yaml file, the relative path of the repo root
    # type: string
    # required
    - path: "on-pre-install-job.yaml"

      # Order of execution of job, The smaller the value, the first to execute
      # type: integer
      # default value: 0
      # optional
      weight: -1

  # The jobs to be executed before application's installation.
  # type: object[]
  # default value: []
  # optional
  onPostInstall: 
    - path: "on-post-install-job.yaml"

      # Order of execution of job, The smaller the value, the first to execute
      # type: integer
      # default value: 0
      # optional
      weight: -1

  # Executes on a deletion request before any resources are deleted from Kubernetes
  # type: object[]
  # default value: []
  # optional
  onPreDelete: 
    - path: "on-pre-delete-job.yaml"

      # Order of execution of job, The smaller the value, the first to execute
      # type: integer
      # default value: 0
      # optional
      weight: -1

  # Executes on a deletion request after all of the release's resources have been deleted
  # default value: []
  # optional
  onPostDelete: 
    - path: "on-post-delete-job.yaml"

      # Order of execution of job, The smaller the value, the first to execute
      # type: integer
      # default value: 0
      # optional
      weight: -1

  # Executes on an upgrade request after templates are rendered, but before any resources are updated
  # type: object[]
  # default value: []
  # optional
  onPreUpgrade: 
    - path: "on-pre-upgrade-job.yaml"

      # Order of execution of job, The smaller the value, the first to execute
      # type: integer
      # default value: 0
      # optional
      weight: -1

  # Executes on an upgrade request after all resources have been upgraded
  # type: object[]
  # default value: []
  # optional
  onPostUpgrade: 
    - path: "on-post-upgrade-job.yaml"

      # Order of execution of job, The smaller the value, the first to execute
      # type: integer
      # default value: 0
      # optional
      weight: -1

  # Overwrite helm values.yaml
  # type: object[]
  # default value: []
  # optional
  helmValues:
    - key: DOMAIN
      value: ${DOMAIN:-www.coding.com}
    - key: DEBUG
      value: ${DEBUG:-true}

  # Inject environment variable for all workload 
  # type: object[]
  # default value: []
  # optional
  env: 
    - name: DEBUG
      value: ${DEBUG:-true}
    - name: DOMAIN
      value: "www.coding.com"

  # Use envFile to inject environment variable for all workload 
  # If specify env and envFrom at the same time, then use intersection of them, and use env key as primary
  # type: object[]
  # default value: []
  # optional
  envFrom: 
    envFile: 
      - path: dev.env
      - path: dev.env

  # The Applicaion's micro services
  # type: object[]
  # default value: []
  # optional
  services:

    # Name of service, the name of workload in cluster
    # type: string
    # default value: null
    # required
    - name: e-coding

      # The Kubernetes Workloads type corresponding to the service
      # type: select, options: deployment/statefulset/pod/job/cronjob/daemonset case insensitive 
      # default value: deployment
      # required
      serviceType: deployment

      dependLabelSelector: 

        # Dependent Pods label selector (The service will not start until the Pods selected by selector being ready.)
        # type: string[]
        # default value: []
        # optional
        pods: 
          - "name=mariadb"
          - "app.kubernetes.io/name=mariadb"

        # Dependent Jobs label selector (The service will not start until the Jobs selected by selector completed.)
        # type: string[]
        # default value: []
        # optional
        jobs:
          - "job-name=init-job"
          - "app.kubernetes.io/name=init-job"

      containers:

        # When the Pod has multiple containers, specify the container name.
        # type: string
        # default value: ""
        # optional
        - name: coding

          # Specify installation parameters
          # type: object
          # default value: {}
          # optional
          install: 

            # Inject environment variable for container when installed
            # type: object[]
            # default value: []
            # optional
            env: 
              - name: DEBUG
                value: "true"
              - name: DOMAIN
                value: "www.coding.com"

            # Use envFile to inject environment variable for container when installed
            # If specify env and envFrom at the same time, then use intersection of them, and use env key as primary
            # type: object[]
            # default value: []
            # optional
            envFrom: 
              envFile: 
                - path: dev.env
                - path: dev.env

            # Ports to be forwarded to local when workload has been installed 
            # localPort:remotePort
            # type: string[]
            # default value: []
            # optional
            portForward:
              - 3306:3306

          # Specify development parameters
          # type: object
          # default value: {}
          # required
          dev:

            # The git repository clone url of the service
            # type: string
            # default value: null
            # required
            gitUrl: xxx-job

            # DevContainer Image of the micro service
            # type: string
            # default value: null
            # required
            image: java:8-jdk

            # The default shell of DevContainer
            # type: string
            # default value: "/bin/sh"
            # optional
            shell: "bash"

            # The work directory of DevContainer
            # type: string
            # default value: "/home/nocalhost-dev"
            # optional
            workDir: "/root/nocalhost-dev"

            # Specify resources requests and limits for DevContainer, same format to Kubernetes's resources (Not currently implemented)
            # type: object
            # default value: {}
            # optional
            resources:
              limits:
                cpu: "1"
                memory: 1Gi
              requests:
                cpu: "0.5"
                memory: 512Mi

            # Storage of persistence volume
            # type: string
            # default value: null
            # optional
            storageClass: "cbs"

            # Dirs to be persisted in DevContainer
            # type: string[]
            # default value: ["/home/nocalhost-dev"]
            # optional
            persistentVolumeDirs: 

              # Dir to be persisted in DevContainer
              # type: string
              # default value: null
              # required
              - path: "/root"

                # Capability of the dir
                # type: string
                # default value: 10Gi
                # optional
                capacity: 100Gi

            command: 
              # Build command of the service(Not currently implemented)
              # type: string[]
              # default value: [""]
              # optional
              build: ["./gradlew", "package"]

              # Run command of the service
              # default value: [""]
              # optional
              run: ["./gradlew", "bootRun"]

              # Debug command of the service
              # type: string[]
              # default value: [""]
              # optional
              debug: ["./gradlew", "bootRun", "--debug-jvm"]

              # Hot-reload run command of the service(Not currently implemented)
              # type: string[]
              # default value: [""]
              # optional
              hotReloadRun: ["bash", "-c", "kill `ps -ef|grep -i gradlew| grep -v grep| awk '{print $2}'`; gradlew bootRun"]

              # Hot-reload debug command of the service(Not currently implemented)
              # type: string[]
              # default value: [""]
              # optional
              hotReloadDebug: ["bash", "-c", "kill `ps -ef|grep -i gradlew| grep -v grep| awk '{print $2}'`; gradlew bootRun --debug-jvm"]

            # Specify debug parameter
            # type: object
            # default value: {}
            # optional
            debug: 

              # Specify remote debug port
              # type: int
              # default value: null
              # optional
              remoteDebugPort: 5005

            # Use .dev-container of VSCode to specify DevContainer Image (Not currently implemented)
            # type: string
            # default value: ""
            # optional
            useDevContainer: false

            # Specify file synchronization when enter development mode
            # type: object
            # default value: {}
            # optional
            sync: 

              # The synchronization file mode of the service (Not currently implemented)
              # "send" specifies one-way synchronization to the container, "sendreceive" specifies two-way synchronization
              # type: select，send/sendreceive
              # default value: "send"
              # optional
              type: send

              # List of files and directories to be synchronized to DevContainer
              # type: string[]
              # default value: ["."]
              # optional
              filePattern: 
                - "./src"
                - "./pkg/fff"

              # List of ignored files and directories to be synchronized to DevContainer
              # type: string[]
              # default value: []
              # optional
              ignoreFilePattern:
                - ".git"
                - "./build"

            # Specify dev mode environment parameters
            # type: object[]
            # default value: {}
            # optional
            env: 
            - name: DEBUG
              value: "true"
            - name: DOMAIN
              value: "www.coding.com"

            # Use env file to specify dev mode environment parameters
            # type: object
            # default value: {}
            # optional
            envFrom:
              envFile: 
                - path: dev.env
                - path: dev.env

            # Ports to be forwarded to local when enter devMode
            # localPort:remotePort
            # type: string[]
            # default value: []
            # optional
            portForward:
            - 3306:3306
```

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

### Helm Application Configuration

`application.helmVersion` and `application.helmValues`

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