## Configuration of Nocalhost

```yaml linenums="1"
# Application name
# type: string(dns1123)
# default value: null
# required
# nhctl param: [NAME]
# uniq
name: nocalhost

# Application k8s manifest type
# type: select，options：helmGit/helmRepo/rawManiifest
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

    # Name of service
    # type: string
    # default value: null
    # optional
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

  - name: service2
    ...
```