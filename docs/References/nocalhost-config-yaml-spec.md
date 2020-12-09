```yaml linenums="1"
# Application name
# type: string(dns1123)
# default value: null
# required
# nhctl param: [NAME]
# uniq
name: nocalhost

# Application manifest type
# type: select，options：helm/helm-repo/manifest
# default value: null
# required
# nhctl param: --type,-t
manifestType: helm

# The application manifest or chart path is the relative path of the git repository. If the type is manifest, you can add more paths
# type: string[]
# default value: ["."]
# required
resourcePath: ["deployments/chart"]

# If the value is true, try use with the least resources when installing (supplement, future support)
# type: boolean
# default value: false
# optional
# nhctl param: TODO
minimalInstall: false

# Before the application installed, per-execute the job
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

    # The order of execution of job, the smaller one is first
    # type: integer
    # default value: 0
    # optional
    priority: -1

  - path: "job-2.yaml"
    name: xxx2-job
    priority: 5

# After the application installed, post-execute the job (supplement, future support)
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

    # The order of execution of job, the smaller one is first
    # type: integer
    # default value: 0
    # optional
    priority: -1
  - path: "job-2.yaml"
    name: xxx2-job
    priority: 5

# Before the application uninstalled, per-execute the job (supplement, future support)
# type: object[]
# default value: []
# optional
onPreUninstall:
    # Job yaml file, the relative path of the repo root
    # type: string
    # required
  - path: "job-1.yaml"

    # Job name
    # type: string
    # required
    name: xxx-job

    # The order of execution of job, the smaller one is first
    # type: integer
    # default value: 0
    # optional
    priority: -1
  - path: "job-2.yaml"
    name: xxx2-job
    priority: 5

# After the application uninstalled, post-execute the job (supplement, future support)
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

    # The order of execution of job, the smaller one is first
    # type: integer
    # default value: 0
    # optional
    priority: -1
  - path: "job-2.yaml"
    name: xxx2-job
    priority: 5

# The Applicaion's services
# type: object[]
# default value: []
# optional
services:

    # Name of service, name and nameRegex must be one of two. If the name and nameRegex are at the same time, only the name takes effect.
    # type: string
    # default value: null
    # optional
  - name: service1
    # Regular expression of service, name and nameRegex must be one of two. If the name and nameRegex are at the same time, only the name takes effect.
    # type: string
    # default value: null
    # optional
    nameRegex: .*-mariadb

    # The Kubernetes Workloads type corresponding to the service
    # type: select, options: deployment/statefulset/pod/job/cronjob/daemonset 大小写不敏感
    # default value: deployment
    # required
    serviceType: deployment

    # The git repository clone url of the service
    # type: string
    # default value: null
    # required
    gitUrl: "https://github.com/nocalhost/nocalhost.git"

    # The docker image's url of the service in dev mode
    # type: string
    # default value: codingcorp.coding.net/xxxx/go:latest
    # required
    devContainerImage: "codingcorp.coding.net/xxxx/go:latest"

    # The command line shell of the service in dev mode
    # type: string
    # default value: "/bin/sh"
    # optional
    devContainerShell: "bash"

    # The synchronization file type of the service (supplement, future support)
    # "send" means one-way synchronization to the container, "sendreceive" means two-way synchronization
    # type: select，send/sendreceive
    # default value: "send"
    # optional
    syncType: send

    # List of files and directories synchronized in dev mode
    # type: string[]
    # default value: ["."]
    # optional
    syncDirs:
      - "./src"
      - "./pkg/fff"

    # List of ignored files and directories synchronized in dev mode
    # type: string[]
    # default value: []
    # optional
    ignoreDirs:
      - ".git"
      - "./build"

    # The port-forward canfigiure in dev mode
    # localPort:remotePort
    # type: string[]
    # default value: []
    # optional
    devPort:
      - 8080:8080
      - :8000  # random localPort, remotePort 8000

    # Pods label selector (The service will wait for the Pods selected by the selector to start before starting)
    # type: string[]
    # default value: []
    # optional
    dependPodsLabelSelector:
      - "name=mariadb"
      - "app.kubernetes.io/name=mariadb"

    # Jobs label selector (The service will wait for the Jobs selected by the selector to start before starting)
    # type: string[]
    # default value: []
    # optional
    dependJobsLabelSelector:
      - "name=init-job"
      - "app.kubernetes.io/name=init-job"

    # The work directory in dev mode (The source code will synchronized to this directory, it will be persisted using PV.) (supplement, future support)
    # type: string
    # default value: "/home/nocalhost-dev"
    # optional
    workDir: "/home/nocalhost-dev"

    # The dev mode container directory (This directory will be persisted using PV.) (supplement, future support)
    # type: string[]
    # default value: ["/home/nocalhost-dev"]
    # optional
    persistentVolumeDir:
      - "/home/nocalhost-dev"

    # The build command of the service (use to build after the code changes)
    # type: string
    # default value: ""
    # optional
    buildCommand: "./gradlew package"

    # The run command of the service
    # type: string
    # default value: ""
    # optional
    runCommand: "./gradlew bootRun"

    # The debug command of the service
    # type: string
    # default value: ""
    # optional
    debugCommand: "./gradlew bootRun --debug-jvm"

    # The hot reload command of the service
    # type: string
    # default value: ""
    # optional
    hotReloadRunCommand: "kill `ps -ef|grep -i gradlew| grep -v grep| awk '{print $2}'`; gradlew bootRun"

    # The hot reload debug command of the service
    # type: string
    # default value: ""
    # optional
    hotReloadDebugCommand: "kill `ps -ef|grep -i gradlew| grep -v grep| awk '{print $2}'`; gradlew bootRun --debug-jvm"

    # The debug port of the service
    # type: string
    # default value: ""
    # optional
    remoteDebugPort: 5005

    # Use VSCode's dev-container as the dev mode (supplement, future support)
    # type: string
    # default value: ""
    # optional
    useDevContainer: false

  - name: service2
    nameRegex:
    ...
```