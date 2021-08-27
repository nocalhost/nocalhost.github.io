---
title: Basic
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Configured Development Mode 

You can [manage a DevMode configuration of the workload in Nocalhost IDE](#by-ide-plugin) or [create the configuration manually](#manually-create-configurations).

## Manage DevMode Configurations 

### By IDE Plugin

Nocalhost will generate a runtime configuration stored in the memory. This configuration can be used across IDEs in your local computer after being saved.

In general, when using the Nocalhost IDE plugin, the plugin automatically updates the DevMode configurations according to your operation. **No manual configuration is required**.

:::danger Non-Persistent

These runtime configurations created by the Nocalhost only save in your local computer. If you change the computer or delete the `.nh` folder, you will lose the current configurations.

:::

<Tabs
  defaultValue="vscode"
  values={[
    {label: 'VS Code', value: 'vscode'},
    {label: 'JetBrains', value: 'jb'},
  ]}>
<TabItem value="vscode">

Expand the cluster inspector and select a workload. There is a little gear icon at the end of the workload. This icon has two different states:

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

All changes will not take effect until the next time you enter development mode.

:::

### Manually Create Configurations

If you want to have persisted DevMode configuration to use on a different computer or share with others, you can add a `.nocalhost` folder under your source code root directory and create a `config.yaml` file within the folder.

You can read this [configuration example](#development-mode-configurations) to set up your configuration.

### Configuration Priority

If you have added `.nocalhost/config.yaml` to your source code root directory, Nocalhost will use the configuration in the `config.yaml` to replace the one set by the plugin.

If you use the IDE plugin to open the configuration, this configuration will become read-only. The plugin will also guide the user to modify the configuration directly in the local file, not the one opened by the plugin.

#### Example: Using and open local configuration

``` yaml {1-6}
# Tips: This configuration is an in-memory replica of the local file: 
# 
# '~/whatever/details/.nocalhost/config.yaml'
# 
# You should modify your configuration in local file, and the modification will
# take effect immediately. (Dev modification will take effect the next time you enter the DevMode)
#
# In addition, if you want to configure multi-services in the same config.yaml, or use
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

## Development Mode Configurations

All configurations for development mode are in `services[*].container[*].dev` section. 

```yaml {11}
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

### `dev.gitUrl`

Set the source code repository URL of the workload.

```yaml

containers:
  - name: container-01
    dev:
      gitURL: https://github.com/nocalhost/nocalhost.git

```

:::caution Clone Source Code

Nocalhost will use `git clone` command to clone the source code. Please make sure you have **Git** installed on your local computer.

:::

### `dev.image`

Specify the development image (`DevImage`) to replace the image of the [`DevContainer`](./config-dev-devcontainer) when entering development mode.

:::tip DevImage

`image` accepts image name or URL. If you enter the image name, Nocalhost will pull the specified image from [Docker Hub](https://hub.docker.com/). Or you can use your own private image library, e.g. `codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage`

:::

#### Example: Set the image for `DevConatiner`
  
```yml {5}
containers:
  - name: container-01
    dev:
      ...
      image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage
```

### `dev.shell`

Configure the default shell of DevContainer, you can use `bin/sh` or `shell` within DevContainer.

#### Example: 

```yaml {5}
containers:
  - name: container-01
    dev:
      ...
      shell: "/bin/sh"
      ...
```

### `dev.workDir`

Used to indicate the working directory in the remote container after entering the `DevMode` and the directory where the synchronized files are stored. By default, `/home/nocalhost-dev` will be used.

#### Example: Setting up the Work Directory

```yml {5}
containers:
  - name: container-01
    dev:
      ...
      workDir: /home/nocalhost-dev
      ...
```

### `dev.resources`

Optionally specify how much of each resource a `DevContainer` needs and limits. This is similar to [Kubernetes resources management](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/)

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

### `dev.storageClass`

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

### `dev.persistentVolumeDirs`

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

### `dev.command`

```yaml {5}
containers:
  - name: container-01
    dev:
      ...
      command:
        run:  [""]                # string  | optional  | Run command of the workload
        debug:  [""]              # string  | optional  | Debug command of the workload
```

- [Read more to learn how to configure remote debugging](../guides/debug/remote-debug)
- [Read more to learn how to configure remote run](../guides/remote-run)

### `dev.debug`

Configure the remote debugging port for the `DevContainer`. 

When using Nocalhost's remote debugging feature, the plugin will connect to the specified port to debug the remote workload.

```yaml {5}
containers:
  - name: container-01
    dev:
      ...
      debug:
        remoteDebugPort: 5050     # integer | optional  | Specify the remote debug pot
      ...

```

### `dev.useDevContainer`

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

### `dev.sync`

Files synchronization configurations in DevMode.

```yml {6-8}
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

### `dev.env` and `dev.envFrom`

Nocalhost supports injecting the preset environment variables to a container in development mode. You can inject these variables by input the values or import the file.

:::caution nocalhost-dep Needed

You need to have `nocalhost-dep` installed for this configuration to take effect. Please refer to [Nocalhost Dep](../server/nh-dep) for more details.

:::

#### Example: Setting up inject environment variable

<Tabs
  defaultValue="value"
  values={[
    {label: 'Inject By Values', value: 'value'},
    {label: 'Inject By Files', value: 'file'},
  ]}>
<TabItem value="value">

`dev.env`

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

`dev.envFrom`

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

- These variables will be injected into the container when entering development mode
- These variables will take effect after the entered development mode

:::info Duplicate Configs

If both `env` and `envFrom` configure at the same time, Nocalhost will merge the configurations, and the duplicate parts are subject to `env` configs.

:::

### `dev.portForward`

The `portForward` section defines which localhost `port` should be forwarded to the remote `port` of the selected container.

```yaml {4}
containers:
  dev:
    ...
    portForward:
      - 38228:80
```

[Read more to learn how to configure port-forwarding for development mode](./config-dev-portforward)