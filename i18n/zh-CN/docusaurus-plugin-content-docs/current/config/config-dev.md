---
title: Basic
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Configured Development Mode 

Nocalhost plugin can [manage a DevMode configuration of the workload in local](#manage-configurations-by-ide-plugin). If you need to persist the configuration, you can also [create it manually](#manually-create-configurations).

## Manage Configurations by IDE Plugin

Nocalhost IDE plugin can generate a runtime DevMode configuration which is stored in the memory. This configuration can be used for across IDEs in your local computer after it is saved.

In general, when using the Nocalhost IDE plugin, the plugin automatically updates the DevMode configurations according to your operation. **No** manual configuration is required.

:::danger Non Persistent
This runtime configurations created by Nocalhost IDE plugin only save in your local computer, if you change computer or delete the `.nh` folder, you will lost your configurations. 
:::

<Tabs
  defaultValue="vscode"
  values={[
    {label: 'VS Code', value: 'vscode'},
    {label: 'JetBrains', value: 'jb'},
  ]}>
<TabItem value="vscode">

Expand the cluster tree and select a workload, you will see there is a little gear icon. This icon has two different status:

- <img src={useBaseUrl('/img/icons/setting-warning.svg')} width="20"/> Does not have configuration, Nocalhost will generate a new configuration after you click.
- <img src={useBaseUrl('/img/icons/setting-normal.svg')} width="20"/> Has a configuration, Nocalhost will load the existing configuration after you click.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/plugin/vs-config-dev.jpg')} />
  <figcaption>Edit workload dev configuration in VS Code</figcaption>
</figure>

</TabItem>
  
<TabItem value="jb">

- Expand the cluster tree and right-click a workload
- Click `Dev Config` from the context menu. If there is no configuration with this workload, Nocalhost will generate a new one, otherwise will open the existing configuration.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/plugin/jb-config-dev.jpg')} />
  <figcaption>Edit workload dev configuration in JetBrains</figcaption>
</figure>

</TabItem>
</Tabs>

:::info Take effect
All changes will not take effect in real time, but will take effect the next time you enter development mode.
:::

## Manually Create Configurations

If you want to have persist DevMode configuration to use in different computer or share with others, you can add a `.nocalhost` folder under your source code root directory and create a `config.yaml` file within the folder.

After you create `config.yaml`, you need to add `dev` section within `application[*].services[*].containers[*]` section.

## Configuration Priority

If you have added `.nocalhost/config.yaml` to your source code root directory, Nocalhost will use the configuration in the `config.yaml` to replace the one set by the plugin.

If you use the IDE plugin to open the configuration, this configuration will become read-only. The plugin will also guide the user to modify the configuration directly in the local file, not the one opened by the plugin.

#### Example: Using and open local configuration

``` yaml {1-6} title="Nocalhost will guid user hwo to modify the configuration"
# Tips: This configuration is a in-memory replica of local file: 
# 
# '~/whatever/details/.nocalhost/config.yaml'
# 
# You should modify your configuration in local file, and the modification will
# take effect immediately. (Dev modification will take effect the next time you enter the DevMode)
#
# In addition, if you want to config multi service in same config.yaml, or use
# the Server-version of Nocalhost, you can also configure under the definition 
# of the application, such as:
# https://github.com/nocalhost/bookinfo/blob/main/.nocalhost/config.yaml
# 
name: details
serviceType: deployment
containers:
- name: container_name
  dev:
    image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/ruby:2.7.1-slim
    shell: bash
    workDir: /home/nocalhost-dev
```

## Configurations

### Example

```yaml {11}
configProperties:
  application:
    name: foo-app
    ....

    services:
      - name: foo-workload-01                 # string    |  required  | Name of workload
        serviceType: deployment               # string    |  required  | The Kubernetes Workloads type corresponding to this service
        ...
        containers:                           # struct    |  optional  
          - name: container-01                # string    |  required  | Container name
            dev:
              gitUrl: ""                      # string    |  required  | Git repository url
              image: ""                       # string    |  required  | DevContainer image repository url
              shell: "/bin/sh"                # string    |  optional  | The default shell of DevContainer
              workDir: /home/nocalhost-dev    # string    |  optional  | The work directory of DevContainer
              storageClass: "cbs"             # string    |  optional  | Storage of persistence volume
              resources: null                 # struct    |  optional  | Specify resources requests and limits for DevContainer, same format to Kubernetes's resources
              persistentVolumeDirs: []        # string[]  |  optional  | Dirs to be persisted in DevContainer
              command: ...                    # string[]  |  optional  | Build command of the workload
              debug: ...                      # struct    |  optional  | Specify debug parameter
              useDevContainer: false          # string    |  optional  | Use .dev-container of VSCode to specify DevContainer Image
              sync: ...                       # struct    |  optional  | Specify file synchronization when enter development mode
              env: ...                        # struct    |  optional  | Specify development mode environment parameters
              envFrom: null                   # struct    |  optional  | Specify development mode environment parameters by files
              portForward: []                 # string    |  optional  | Ports to be forwarded to local when enter devMode
```

### Configure Git URL

`containers[*].dev[*].gitUrl # required`

Set the source code Git repository URL of the workload.

- **Preset:** if you set this URL and choose to download from Git before entering development mode, Nocalhost will try to clone the source code from the URL you configured. 
- **Not preset:** if you choose `Clone from Git Repository` when selecting the source code directory and enter the Git URL. Nocalhost will automatically set the URL you entered into the configuration.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/plugin/vs-choose-dir.jpg')} />
  <figcaption>Choose source code directory</figcaption>
</figure>

#### Example: Set gitURL

```yaml
containers:
  - name: container-01
    dev:
      gitURL: https://github.com/nocalhost/nocalhost.git
```

:::note Clone Source Code
Nocalhost will use `git clone` command to clone the source code. Please make sure you have **Git** installed in your local computer.
:::

### Configure Develop Image

`containers[*].dev[*].image # required`

Specify the develop image (`DevImage`) to replace the image of the `DevContainer` when entering development mode.

Similar to [`gitURL`](#configure-git-url), you can preset it in the configuration or Nocalhost will ask you to enter the image name or URL.

- **Preset:** if you set the image before entering development mode, Nocalhost will use it to replace the image of DevContainer directly.
- **No preset:** if you do not set the DevImage, Nocalhost will ask you to enter the image name or URL.

:::tip DevImage
`image` accepts image name or URL. If you enter the image name, Nocalhost will pull the specify image from [Docker Hub](https://hub.docker.com/). Or you can use your own private image library, e.g. `codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage`
:::

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/plugin/vs-devimage.jpg')} />
  <figcaption>Choose source code directory</figcaption>
</figure>

#### Example: Set the image for `DevConatiner`
  
```yml {5}
containers:
  - name: container-01
    dev:
      ...
      image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage
```

[Read more to learn how to build your own DevImage](./config-dev-devcontainer)


### Configure Shell of DevContainer

`containers[*].dev[*].shell # optional`

Configure the default shell of `DevContainer`, you can use `bin/sh` or `shell` within `DevContainer`.

#### Example: Setting up the default shell

```yaml {}
containers:
  - name: container-01
    dev:
      ...
      shell: "/bin/sh"
      ...
```

### Configure Work Directory

`containers[*].dev[*].workDir # optional`

Used to indicate the working directory in remote container after entering the `DevMode` and the directory where the synchronized files are stored. By default, `/home/nocalhost-dev` will be used.

#### Example: Setting up the Work Directory
```yml {5}
containers:
  - name: container-01
    dev:
      ...
      workDir: /home/nocalhost-dev
      ...
```

### Configure Resources

`containers[*].dev[*].resources # optional`

Optionally specify how much of each resource a `DevContainer` needs and limits.

#### Example: Setting up DevContainer's requests and limits

```yaml {5}
containers:
  - name: container-01
    dev:
      ...
      resources:
        limits:
          cpu: "1"
          memory: 1Gi
        requests:
          cpu: "0.5"
          memory: 512Mi
      ...
```

[Read more to learn Kubernetes resources management](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/)

### Configure Persistence Volume

`containers[*].dev[*].storageClass # optional`

Set the storage class name for a `DevContainer`

#### Example: Setting up storage class name

```yaml {5}
containers:
  - name: container-01
    dev:
      ...
      storageClass: "storage-class-name"
      ...
```

[Read more to learn StorageClass in Kubernetes's](https://kubernetes.io/docs/concepts/storage/storage-classes/)

### Configure Persistent DIR

`containers[*].dev[*].persistentVolumeDirs # optional`

Directories that need to be persisted in `DevContainer`

#### Example: Setting up the persistent directories

```yaml {5}
containers:
  - name: container-01
    dev:
      ...
      persistentVolumeDirs: 
        - path: "/root"             # string  | required  | DIR that need to be persisted
          capacity: 100Gi           # string  | optional  | Capacity of the DIR.
```

### Configure Commands

`containers[*].dev[*].command # optional`

```yaml
containers:
  - name: container-01
    dev:
      ...
      command:
        build: [""]               # string  | optional  | Build command of the workload
        run:  [""]                # string  | optional  | Run command of the workload
        debug:  [""]              # string  | optional  | Debug command of the workload
        hotReloadRun: [""]        # string  | optional  | Hot-reload run command of the workload
        hotReloadDebug: [""]      # string  | optional  | Hot-reload debug command of the workload
      ...
```

[Read more to learn how to configure the commands running in the remote container](./config-dev-command)

### Specify Remote Debugging Port

`containers[*].dev[*].debug # optional`

Configure the remote debugging port for the `DevContainer`. 

When using Nocalhost's remote debugging feature, plugin will connect to the specified port to debug the remote workload.

```yaml {5}
containers:
  - name: container-01
    dev:
      ...
      debug:
        remoteDebugPort: 5050     # integer | optional  | Specify the remote debug pot
      ...
```

### Use `.dev-container` of VS Code

`containers[*].dev[*].useDevContainer # optional`

Use `.dev-container` of VS Code to specify `DevImage`.

#### Example: Setting up the remote debugging port

```yaml {5}
containers:
  - name: container-01
    dev:
      ...
      useDevContainer: false      # string  | optional  | Use .dev-container of VSCode to specify DevImage
      ...
```

### File Synchronization in DevMode

`containers[*].dev[*].sync # optional`

Files synchronization configurations in DevMode.

```yml {3}
containers:
  - name: container-01
    dev:
      ...
      sync:
      type: send                  # select    | optional  | The synchronization file mode of the workload       
        filePattern: ["."]        # string[]  | optional  | List of files and directories to be synchronized to DevConatiner
        ignoreFilePattern: ["."]  # string[]  | optional  | List of ignored files and directories to be synchronized to DevConatiner
      ...
```

[Read more to learn how to configure file synchronization](./config-dev-sync)

### Inject Environment Variables

Nocalhost supports injecting the preset environment variables to a container in development mode. You can inject these variables by input the values or import the file.

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

`containers[*].dev[*].env # optional`

```yml {4}
containers:
  dev:
    ...
    env: 
      - name: DEBUG
        value: ${DEBUG:-true}
      - name: DOMAIN
        value: "www.coding.com"
```

</TabItem>
  
<TabItem value="file">

`containers[*].dev[*].envFrom # optional`

```yml {4}
containers:
  dev:
    ...
    envFrom: 
      envFile: 
        - path: dev.env
        - path: dev.env
```

</TabItem>
</Tabs>

**Explanation:**

- These variables will be injected to container when entering development mode
- These variables will take effect after the entered development mode

:::info Duplicate Configs
If both `env` and `envFrom` configure at the same time, Nocalhost will merge the configurations, and the duplicate parts are subject to `env` configs.
:::

### Port-Forwarding

`containers[*].dev[*].portForward # optional`

Port-forwarding allows you to access your `DevContainer` on `localhost:[PORT]` by forwarding the network traffic from a localhost port to a specified port of a container.

When entering the development mode, Nocalhost starts port-forwarding as configured in the `dev。portForward` section.

```yml {4}
containers:
  dev:
    ...
      portForward:
        - 39080:9080              # string[]  | optional  | Ports to be forwarded to local when enter DevMode
        - 3306:3306
```

- Using `Local Port : Remote Port` format
- Can setup multi port-forward