
## Nhctl CLI
nhctl can be used to deploy applications and develop Kubernetes-based applications. The interaction between nhctl and Kubernetes requires kubectl. The kubeconfig file used can be specified by --kubeconfig.

Syntax：nhctl [commond] [Name] [flags]

* commond means operation，e.g: config, install, dev, exec, port-foward
* Name means the resource，e.g: Application Name
* flags indicate optional parameters，e.g: --kubeconfig specifies the kubeconfig file

#### nhctl init

##### nhctl init dep
Description: Nocalhost Server（nocalhost-dep only）initialization

```
[usage]
nhctl init dep
nhctl init dep
```

##### nhctl init demo

```
Description: Nocalhost Server（nocalhost-api, nocalhost-web, nocalhost-dep）initialization
synx: nhctl init demo [flags]
[flags]
      --force                         force to init, warning: it will remove all nocalhost old data
  -h, --help                          help for init
      --inject-user-amount int        inject user amount, example 10, max is 999
      --inject-user-offset int        inject user id offset, default is 1 (default 1)
      --inject-user-template string   inject users template, example Techo%d, max length is 15
  -n, --namespace string              set init nocalhost namesapce (default "nocalhost")
  -p, --port int                      for NodePort usage set ports (default 80)
      --set strings                   set values of helm
  -s, --source string                 bookinfo source, github or coding, default is github
  -t, --type string                   set NodePort or LoadBalancer to expose nocalhost service

[usage]
nhctl init demo -n [DevSpace Name] -t nodeport -p [port]
nhctl init demo -n [DevSpace Name]
```

#### nhctl config
```
Description: View application or service development parameter configuration
synx: nhctl config get [Name] [flags]

[flags]
-d, --deployment string   service name

[usage]
nhctl config get [Application Name] 
nhctl config get [Application Name] -d [service Name]


Description: Edit application or service development parameter configuration
synx: nhctl config edit [Name] [flags]

[flags]
-c, --content string      Service development configuration parameter content, the format needs to be base64
-d, --deployment string   service name

[usage]
nhctl config edit [Application Name] -d [service Name] -c [content]

``` 
#### nhctl describe
```
Description: View the running status of the application
synx: nhctl describe [Name] 

[usage]
nhctl describe [Application Name]
```
#### nhctl list
```
Description: View the services that the application is under development (development status, synchronization status, synchronized directory, port mapping)
synx: nhctl list [Name] 

[usage]
nhctl list [Application Name]

E.g:
nhctl list bookinfo
+-------------+------------+---------+--------------------+---------------------------------------+---------------------+
|    NAME     | DEVELOPING | SYNCING | DEV-PORT-FORWARDED |               SYNC-PATH               | LOCAL-SYNCTHING-GUI |
+-------------+------------+---------+--------------------+---------------------------------------+---------------------+
| productpage | true       | true    | [39080:9080]       | [d:\workspace\go-project\productpage] |               52031 |
+-------------+------------+---------+--------------------+---------------------------------------+---------------------+
```
#### nhctl dev
```
Description: Toggle On DevMode
synx：nhctl dev start [Name][flags]

[flags]
  -d, --deployment string      Service name
  -h, --help                   help command
  -i, --image string           DevContainer image URL
  -l, --lang string            Service development language, such as：java/go/python
  -s, --local-sync strings     All files in the local directory that need to be synchronized to Devcontainer
      --work-dir string        Devcontainer specifies which directory to receive locally synchronized files

[usage]
nhctl dev start [Applicaton Name] -d [Service Name] -l [java|go|python] -s [local dir] --work-dir [work dir] --kubeconfig [absolute path of kubeconfig]



Description: Enter DevContainer container
synx：nhctl dev terminal [Name][flags]

[Flags]
  -d, --deployment string   service name

[usage]
nhctl dev terminal [Application Name] -d [Service Name] --kubeconfig [absolute path of kubeconfig]



Description: Toggle Off DevMode
synx：nhctl dev end [Name][flags]

[Flags]
  -d, --deployment string   service name

[usage]
nhctl dev end [Application Name] -d [Service Name] --kubeconfig [absolute path of kubeconfig]
```
#### nhctl sync
```
Description: File synchronization
synx：nhctl sync [Name][flags]

[Flags]
  -d, --deployment string   service name
  -m, --daemon              Whether run as a daemon, the default is true, Value: [true|false]
  -b, --double              Whether to use two-way synchronization, the default is true, Value: [true|false]

[usage]
nhctl sync [Application Name] -d [Service Name] --kubeconfig [absolute path of kubeconfig]
```
#### nhctl port-forward
```
Description: Port forward
synx：nhctl port-forward [NAME] [flags]

[Flags]
  -d, --deployment string   service name
  -m, --daemon              Whether run as a daemon, the default is true, Value: [true|false]
  -p, --dev-port strings    Port specification, format: [local port:remote port], :8080 (random the local port)

[usage]
nhctl port-forward [Application Name] -d [Service Name] -p [local port : remote port] --kubeconfig [absolute path of kubeconfig]
```
#### nhctl exec
```
Description: Execute commands in a container
synx：nhctl exec [NAME] [flags]

[Flags]
  -d, --deployment string   service name
  -c, --command stringArray the commands

[usage]
nhctl exec [Application Name] -d [Service Name] -c [command] --kubeconfig [absolute path of kubeconfig]
``` 
        
#### nhctl install
```
Description: Install application
synx：nhctl install [NAME] [flags]

[Flags]
  -c, --config string              config.yaml path
  -r, --git-ref string             git commitId
  -u, --git-url string             git repository url
      --helm-chart-name string     helm chart name
      --helm-repo-name string      helm chart repository name
      --helm-repo-url string       helm chart repository url
      --helm-repo-version string   heml chart version
  -f, --helm-values string         hlem Value.yaml path
      --ignore-pre-install         Ignore pre-install dependency deployment
  -n, --namespace string           kubernetes namespace
      --resource-path strings      Relative repository path
      --set strings                helm deployment method, specify multiple parameters, the same as using Value.yaml
  -t, --type string                Support types of applications installed: helm or helm-repo or manifest

[usage]
nhctl install [Application Name] -u [a git repo url which contains helm chart or manifests] --kubeconfig [absolute path of kubeconfig]
```

         
#### nhctl uninstall
```
Description: Uninstall applicaiont
synx：nhctl uninstall [NAME] [flags]

[Flags]
  --force   Force uninstall

[usage]
nhctl uninstall [Application Name] [--force 可选] --kubeconfig [absolute path of kubeconfig]
```


#### nhctl version
```
Description: nhctl version info
synx: nhctl version

[usage]
nhctl version

```


