## Configuration of Nocalhost

```yaml linenums="1"
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
  # helmGit: chart path: relative path of git repo root.
  # helmLocal: chart path: relative path of local helm chart path.
  # helmRepo: no meaning
  # rawManifest: manifest files path: multi relative paths of git repo root
  # rawManifestLocal: manifest files path: multi relative paths of local application path
  # kustomizeGit: kustomize file path: relative path of git repo
  # kustomizeLocal: kustomize file path: multi relative paths of local application path
  # type: string[]
  # default value: ["."]
  # required

  helmVersion: 0.0.1
  # Set default application version for helmRepo
  # type: string
  # deafult value: latest
  # optional

  resourcePath: []
  # helmGit: no meaning.
  # helmRepo: no meaning.
  # rawManifest: ignored manifest path: multi relative paths of git repo root.
  # rawManifestLocal: ignored manifest path: multi relative paths of local application path.
  # helmLocal: no meaning.
  # type: string[]
  # default value: ["."]
  # optional
  ignoredPath: []
  # The jobs to be executed before application's installation.
  # type: object[]
  # default value: []
  # optional
  onPreInstall: 
    # Job yaml file, the relative path of the repo root
    # type: string
    # required
  - path: "job-1.yaml"

    # Job name
    # type: string
    # required
    name: xxx-job

    # Order of execution of job, the smallest be executed firstly.
    # type: integer
    # default value: 0
    # optional
    priority: -1

  - path: "job-2.yaml"
    name: xxx2-job
    priority: 5
  # Overwrite helm values.yaml
  # type: object[]
  # default value: []
  # optional
  helmValues:
    - key: DOMAIN
      value: ${DOMAIN:-www.coding.com}
    - key: DEBUG
      value: ${DEBUG:-true}
  # Inject environment variable for all workload when installed
  # type: object[]
  # default value: []
  # optional
  env: 
    - name: DEBUG
      value: ${DEBUG:-true}
    - name: DOMAIN
      value: "www.coding.com"
  # Use envFile to inject environment variable for all workload when installed
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
            # Use envFile to inject environment variable for all workload when installed
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
            # Specify reources requests and limits for DevContainer, same format to Kubernetes's resources (Not currently implemented)
            # type: object
            # default alue: {}
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
              # Run command of the service(Not currently implemented)
              # type: string[]
              # default value: [""]
              # optional
              run: ["./gradlew", "bootRun"]
              # Debug command of the service(Not currently implemented)
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
            # Specify file synchronization when enter dev mode
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

## V1 (Deprecated)

```yaml linenums="1"
# Application name
# type: string(dns1123)
# default value: null
# required
# nhctl param: [NAME]
# uniq
name: nocalhost

# Application k8s manifest type
# type: select，options：helmGit/helmRepo/rawManifest
# default value: null
# required
# nhctl param: --type,-t
manifestType: helmGit

# helmGit: chart path: relative path of git repo root.
# helmRepo: no meaning
# rawManifest: manifest files path: multi relative paths of git repo root
# type: string[]
# default value: ["."]
# required
resourcePath: ["deployments/chart"]

# Install application with minimal replica size (Not currently implemented)
# type: boolean
# default value: false
# optional
# nhctl param: TODO
minimalInstall: false

# The jobs to be executed before application's installation.
# type: object[]
# default value: []
# optional
onPreInstall:
    # Job yaml file, the relative path of the repo root
    # type: string
    # required
  - path: "job-1.yaml"

    # Job name
    # type: string
    # required
    name: xxx-job

    # Order of execution of job, the smallest be executed firstly.
    # type: integer
    # default value: 0
    # optional
    priority: -1

  - path: "job-2.yaml"
    name: xxx2-job
    priority: 5

# The jobs to be executed after application's installation. (Not currently implemented)
# type: object[]
# default value: []
# optional
onPostInstall:
    # Job yaml file, the relative path of the repo root
    # type: string
    # required
  - path: "job-1.yaml"

    # Job name
    # type: string
    # required
    name: xxx-job

    # Order of execution of job, the smallest be executed firstly.
    # type: integer
    # default value: 0
    # optional
    priority: -1
  - path: "job-2.yaml"
    name: xxx2-job
    priority: 5

# The jobs to be executed before application's uninstallation. (Not currently implemented)
# type: object[]
# default value: []
# optional
onPreUninstall:
    # Job yaml file, the relative path of the repo root
    # type: string
    # required
  - path: "job-1.yaml"
    # Order of execution of job, the smallest be executed firstly.
    # type: integer
    # default value: 0
    # optional
    priority: -1
  - path: "job-2.yaml"
    priority: 5

# The jobs to be executed after application's uninstallation. (Not currently implemented)
# type: object[]
# default value: []
# optional
onPostUninstall:
    # Job yaml file, the relative path of the repo root
    # type: string
    # required
  - path: "job-1.yaml"

    # Job name
    # type: string
    # required
    name: xxx-job

    # Order of execution of job, the smallest be executed firstly.
    # type: integer
    # default value: 0
    # optional
    priority: -1
  - path: "job-2.yaml"
    name: xxx2-job
    priority: 5

# The Applicaion's micro services
# type: object[]
# default value: []
# optional
services:

    # Name of service, the name of workload in cluster
    # type: string
    # default value: null
    # required
  - name: service1

    # The Kubernetes Workloads type corresponding to the service
    # type: select, options: deployment/statefulset/pod/job/cronjob/daemonset case insensitive 
    # default value: deployment
    # required
    serviceType: deployment

    # The git repository clone url of the service
    # type: string
    # default value: null
    # required
    gitUrl: "https://github.com/nocalhost/nocalhost.git"

    # DevContainer Image of the micro service
    # type: string
    # default value: null
    # required
    devContainerImage: "codingcorp.coding.net/xxxx/go:latest"

    # The default shell of DevContainer (Not currently implemented)
    # type: string
    # default value: "/bin/sh"
    # optional
    devContainerShell: "bash"

    # The synchronization file mode of the service (Not currently implemented)
    # "send" specifies one-way synchronization to the container, "sendreceive" specifies two-way synchronization
    # type: select，send/sendreceive
    # default value: "send"
    # optional
    syncType: send

    # List of files and directories to be synchronized to DevContainer
    # type: string[]
    # default value: ["."]
    # optional
    syncFilePattern:
      - "./src"
      - "./pkg/fff"

    # List of ignored files and directories to be synchronized to DevContainer
    # type: string[]
    # default value: []
    # optional
    ignoreFilePattern:
      - ".git"
      - "./build"

    # Ports to be forwarded to local when enter devMode
    # localPort:remotePort
    # type: string[]
    # default value: []
    # optional
    devPorts:
      - 8080:8080
      - :8000  # random localPort, remotePort 8000

    # Dependent Pods label selector (The service will not start until the Pods selected by selector being ready.)
    # type: string[]
    # default value: []
    # optional
    dependPodsLabelSelector:
      - "name=mariadb"
      - "app.kubernetes.io/name=mariadb"

    # Dependent Jobs label selector (The service will not start until the Jobs selected by selector completed.)
    # type: string[]
    # default value: []
    # optional
    dependJobsLabelSelector:
      - "job-name=init-job"
      - "app.kubernetes.io/name=init-job"

    # The work directory of DevContainer
    # type: string
    # default value: "/home/nocalhost-dev"
    # optional
    workDir: "/root/nocalhost-dev"

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

    # Build command of the service
    # type: string[]
    # default value: [""]
    # optional
    buildCommand: ["./gradlew", "package"]

    # Run command of the service
    # type: string[]
    # default value: [""]
    # optional
    runCommand: ["./gradlew", "bootRun"]

    # Debug command of the service
    # type: string[]
    # default value: [""]
    # optional
    debugCommand: ["./gradlew", "bootRun", "--debug-jvm"]

    # Hot-reload run command of the service
    # type: string[]
    # default value: [""]
    # optional
    hotReloadRunCommand: ["bash", "-c", "kill `ps -ef|grep -i gradlew| grep -v grep| awk '{print $2}'`; gradlew bootRun"]

    # Hot-reload debug command of the service
    # type: string[]
    # default value: [""]
    # optional
    hotReloadDebugCommand: ["bash", "-c", "kill `ps -ef|grep -i gradlew| grep -v grep| awk '{print $2}'`; gradlew bootRun --debug-jvm"]

    # Ports of remote debugging (Not currently implemented)
    # type: string
    # default value: ""
    # optional
    remoteDebugPort: 5005

    # Use .dev-container of VSCode to specify DevContainer Image (Not currently implemented)
    # type: string
    # default value: ""
    # optional
    useDevContainer: false

    # Specify reources requests and limits for DevContainer, same format to Kubernetes's resources (Not currently implemented)
    # type: object
    # default alue: {}
    # optional
    devContainerResources:
      limits:
        cpu: "1"
        memory: 1Gi
      requests:
        cpu: "0.5"
        memory: 512Mi

  - name: service2
    ...
```