import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Develop a Workload

:::note about this guide

**Goal:** A complete Nocalhost user guide. <br />
**Estimate Time:** 20 minutes <br />
**Requirements:**
- Any local or remote Kubernetes cluster (Minikube, Docker Desktop, TKE, GKE, EKS, AKS, Rancher, ...). Allocate at least 4 GB of memory for single node clusters like [Docker Desktop](https://docs.docker.com/docker-for-mac/kubernetes/) and [Minikube](https://minikube.sigs.k8s.io/docs/start/).
- **[RBAC](https://kubernetes.io/docs/reference/access-authn-authz/rbac/)** must be enabled in the above cluster
- **Configured KubeConfig file** that has namespace admin privilege
- Kubernetes API-server can be accessed internal and external
- Visual Studio Code (1.52+)

:::

:::tip Microservice

In the microservice architecture, a workload can also be considered as a sole microservice.

:::

## Cluster Inspector

Nocalhost build-in a cluster inspector that can browse resources in the Kubernetes cluster.

### Resources Status

Nocalhost uses the following icons to describe the status of different Kubernetes resources in cluster inspector.

<table>
    <thead>
        <tr>
            <th>Resource</th>
            <th>Status</th>
            <th>Icon</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowSpan="2">Cluster</td>
            <td>Active</td>
            <td><img src={useBaseUrl('/img/icons/cluster_active.svg')} width="20" /></td>
            <td>Connected to cluster</td>
        </tr>
        <tr>
            <td>Inactive</td>
            <td><img src={useBaseUrl('/img/icons/cluster_warning.svg')} width="20" /></td>
            <td>Unable to connect to cluster</td>
        </tr>
        <tr>
            <td rowSpan="2">DevSpace</td>
            <td>Normal</td>
            <td><img src={useBaseUrl('/img/icons/namespace.svg')} width="20" /></td>
            <td>Normal DevSpace/Namespace</td>
        </tr>
        <tr>
            <td>Read Only</td>
            <td><img src={useBaseUrl('/img/icons/namespace_viewer.svg')} width="20" /></td>
            <td>This DevSpace/Namespace is readonly, can not operate</td>
        </tr>
        <tr>
            <td rowSpan="3">Application</td>
            <td>Active</td>
            <td><img src={useBaseUrl('/img/icons/app_active.svg')} width="20" /></td>
            <td>Application is able to operate</td>
        </tr>
        <tr>
            <td>Inactive</td>
            <td><img src={useBaseUrl('/img/icons/app_inactive.svg')} width="20" /></td>
            <td>Application is inactive, unable to operate</td>
        </tr>
        <tr>
            <td>Loading</td>
            <td><img src={useBaseUrl('/img/icons/loading.gif')} width="20" /></td>
            <td>Installation or uninstallation</td>
        </tr>
        <tr>
            <td rowSpan="5">Development Mode</td>
            <td>Start DevMode</td>
            <td><img src={useBaseUrl('/img/icons/dev_start.svg')} width="20" /></td>
            <td>The workload is in DevMode</td>
        </tr>
        <tr>
            <td>End DevMode</td>
            <td><img src={useBaseUrl('/img/icons/dev_end.svg')} width="20" /></td>
            <td>End DevMode</td>
        </tr>
        <tr>
            <td>Others</td>
            <td><img src={useBaseUrl('/img/icons/dev_other.svg')} width="20" /></td>
            <td>Others enabled DevMode</td>
        </tr>
        <tr>
            <td>DevMode and Port-Forwarding</td>
            <td><img src={useBaseUrl('/img/icons/dev_port_forwarding.svg')} width="20" /></td>
            <td>In DevMode and port-forwarding enabled</td>
        </tr>
        <tr>
            <td>DevMode and Port-Forwarding, enabled by others</td>
            <td><img src={useBaseUrl('/img/icons/dev_port_forwarding_other.svg')} width="20" /></td>
            <td>Others enable the workload into DevMode and port-forwarding</td>
        </tr>
        <tr>
            <td rowSpan="2">Nocalhost Configs</td>
            <td>Normal</td>
            <td><img src={useBaseUrl('/img/icons/setting_normal.svg')} width="20" /></td>
            <td>This workload has Nocalhost configurations</td>
        </tr>
        <tr>
            <td>Warning</td>
            <td><img src={useBaseUrl('/img/icons/setting_warning.svg')} width="20" /></td>
            <td>Nocalhost configurations is empty</td>
        </tr>
        <tr>
            <td rowSpan="4">Workload Status</td>
            <td>Not Ready</td>
            <td><img src={useBaseUrl('/img/icons/status_normal.svg')} width="20" /></td>
            <td>This workload is not ready, e.g. deploying</td>
        </tr>
        <tr>
            <td>Running</td>
            <td><img src={useBaseUrl('/img/icons/status_running.svg')} width="20" /></td>
            <td>This workload is running</td>
        </tr>
        <tr>
            <td>Failed</td>
            <td><img src={useBaseUrl('/img/icons/status_failed.svg')} width="20" /></td>
            <td>This workload has failed to run</td>
        </tr>
        <tr>
            <td>Unknown</td>
            <td><img src={useBaseUrl('/img/icons/status_unknown.svg')} width="20" /></td>
            <td>This workload status is unknown</td>
        </tr>
    </tbody>
</table>


## Choose Source Code Directory

Before developing the application, you need to tell Nocalhost the location of your source code, so Nocalhost can synchronize files to the remote container. You can either specify a local directory or clone your source code from the Git repository through Nocalhost.

You can [Associate Local Directory](#associate-local-directory) before entering DevMode. Alternatively, Nocalhost will check the directory path. If you do not have an associated directory, Nocalhost will pop the selection menu to ask you to `specify the source directory. You can [Open Local Directory](#open-local-directory) or [Clone from Git Repo](#clone-from-git-repository).

### Associate Local Directory

You can associate the local source code directory to a workload before entering DevMode. Once you associated this directory, Nocalhost will save this directory path in the database. 

When you enter DevMode, Nocalhost will use this path directory without asking for input.

**Steps:**

1. Select the workload
2. Right-click and select the `Associate Local DIR`
3. Choose the local directory and confirm the selection

:::tip Cross IDE

If you have associated the directory in one IDE already, once you develop the same workload in the other IDE, Nocalhost will still use the directory path set before. 

For example, when a workload is associated with a directory in VS Code, then switch to IDEA. Nocalhost will firstly use the directory you associated in VS Code until you associate again.

:::

### Open Local Directory

You can select any local directory and confirm the selection. Nocalhost will save the directory path in the database.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/develop/specify-source-dir.png')} />
  <figcaption>Ask to specify the source directory in VS Code</figcaption>
</figure>

### Clone from Git Repository

:::danger Limitation

Nocalhost will not clone source code from Git if you have already associated directory. 

:::

Nocalhost can help you to clone the source code from the Git repository within the IDE. 

Set the source code repository URL of the workload.

- **Preset:** if you set this URL in `containers[*].dev.gitUrl` and choose to download from Git before entering development mode, Nocalhost will try to clone the source code from the URL you configured. 
- **Not preset:** if you choose `Clone from Git Repository` when selecting the source code directory and enter the Git URL. Nocalhost will automatically set the URL you entered into the configuration.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/plugin/vs-choose-dir.jpg')} />
  <figcaption>Choose source code directory</figcaption>
</figure>

#### Example: Configure Git URL

```yaml

containers:
  - name: container-01
    dev:
      gitURL: https://github.com/nocalhost/nocalhost.git

```

#### Cloning Source Code in IDE

```bash title="Nocalhost run the git clone command within IDE"

[cmd] git clone https://e.coding.net/bookinfo-ratings.git "/Users/user/Downloads/Github/ratings"
Cloning into '/Users/garry/Downloads/Github/ratings'...

```

:::info Auto-associate

Nocalhost will associate the directory to the clone directory automatically after codes are cloned. 

:::

## Choose Development Image

Nocalhost will replace the workload containers when entering DevMode by DevImage. You can configure `containers[*].dev.image` options before entering DevMode or Nocalhost will ask you to input the image URL.

- **Preset:** if you set the image before entering development mode, Nocalhost will use it to replace the image of DevContainer directly.
- **No preset:** if you do not set the DevImage, Nocalhost will ask you to enter the image name or URL. You can also use the DevImage we provided.

:::tip DevImage

`image` accepts image name or URL. If you enter the image name, Nocalhost will pull the specified image from [Docker Hub](https://hub.docker.com/). Or you can use your private image library, e.g. `codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage`.

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

[Read more to learn how to build your DevImage](../config/config-dev-devcontainer)

## Enter Development Mode


### Select Workload

Nocalhost supports to development of all types of Kubernetes workload. 

In your IDE:

1. Open the Nocalhost plugin and expand the cluster inspector
2. Select the workload you want to develop

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/develop/start-devmode.jpg')} />
  <figcaption>Select workload in VS Code and JetBrains</figcaption>
</figure>

### Development Process

When entering DevMoe, Nocalhost first runs the following process (1. - 5.)

#### 1. Replace Image

Nocalhost will first replace the remote container image with a development image (DevImage).

[Read more to learn about DevImage configuration](../config/config-dev#configure-development-image)

:::info Image Pull

Container image will handle by Kubernetes, [read more to learn about Kubernetes image management](https://kubernetes.io/docs/concepts/containers/images/).

:::

#### 2. Replace Container and Restart POD

In this stage, Nocalhost will: 

1. Use the DevImage to start a new development container (DevContainer)
2. Use the DevContainer to replace the original container
3. Restart POD with the DevContainer

When entering DevMode, you should see the following messages in the IDE output:

```bash

Starting DevMode...
No previous syncthing process (10799) found
Deployment ratings replicas is already 1, no need to scale
Mount workDir to emptyDir
Updating development container...
Previous replicaSet ratings-95c8f5cd4 has not been terminated, waiting revision 2 to be ready
This may take several minutes, depending on the load of your k8s cluster
Waiting pod to start...

 ✓  Dev container has been updated

```

#### 3. Start Port-Forwarding

[Read more to learn how to configure port-forwarding in DevMode](../config/config-dev#port-forwarding)

If you have configured the `containers[*].dev[*].portForward`, Nocalhost will start the port-forwarding after entering DevMode and you should see the following message in IDE output:

```bash

Syncthing port-forward pod ratings-5dfbc89c59-r7wg5, namespace default
Port-forward 51517:51517 has been started

```
If you have not configured `containers[*].dev[*].portForward` you can [configure the port-forwarding in IDE](#configure-port-forwarding-in-ide) after entering DevMode.

#### 4. Start File Synchronization

Nocalhost will check the `containers[*].dev[*].sync` section defined in the `config.yaml` and starts a real-time file synchronization between local directory and DevContainer.

You should see the following messages in IDE output:

```bash

ignoredPattern: 
.git
.github
node_modules
syncedPattern: 
!/

 ✓  File sync started
 dev start end

sync file ...
... ...
Syncthing has been started
sync file end

```

[Read more to learn how to configure file synchronization](../config/config-dev-sync)

#### 5. Open Remote Terminal

Nocalhost will open DevContainer's terminal right within the IDE after entering DevMode. The default directory is the one you configured in `container[*].dev.workDir`.

```bash

root@ratings-5dfbc89c59-r7wg5:/home/nocalhost-dev#

```

You can now run the main process of your workload and check the result.

:::tip Main Process

In DevMode, the application main process will not automatically start by default in the DevContainer, thus the application will not respond to any request. You need to manually start the main process before you can access it.

:::

## Configure Port-Forwarding in IDE

You can easily configure the port-forwarding for a specific container within Nocalhost in IDE.

:::danger Careful

Port forwarding set in different modes only corresponds to the current mode.

For Example: 

You have configured the port-forwarding in `DevMode`. This port-forwarding will only take effect in `DevMode`. If you end `DevMode`, this port-forwarding will lose.

:::

<Tabs
  defaultValue="vs-port"
  values={[
    {label: 'Configure Port-Forwarding in VS Code', value: 'vs-port'},
    {label: 'Configure Port-Forwarding in JetBrains', value: 'jb-port'},
  ]}>
<TabItem value="vs-port">

**Start Port-Forwarding**

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/develop/vs-port-forward.gif')} />
  <figcaption>Start port-forwarding in VS Code</figcaption>
</figure>

**Stop Port-Forwarding**

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/develop/vs-stop-port-forward.gif')} />
  <figcaption>Start port-forwarding in VS Code</figcaption>
</figure>

</TabItem>
  
<TabItem value="jb-port">

**Start Port-Forwarding**

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/develop/jb-port-forward.gif')} />
  <figcaption>Start port-forwarding in JetBrains</figcaption>
</figure>

**Stop Port-Forwarding**

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/develop/jb-stop-port-forward.gif')} />
  <figcaption>Start port-forwarding in JetBrains</figcaption>
</figure>

</TabItem>
</Tabs>

## Coding in Kubernetes Cluster

Nocalhost provides the same coding experience you're used in the IDE when developing in the remote Kubernetes cluster. 

You can make any code change in the IDE see results instantly without rebuilding the image or restarting containers.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/opt/code-change.gif')} />
  <figcaption>Coding in VS Code</figcaption>
</figure>

### Status Bar

Nocalhost will monitor the local files change and synchronize the changes to the remote containers. You can check the synchronization status in IDE's status bar.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/develop/statusbar.jpg')} />
  <figcaption>Synchronization status in IDE</figcaption>
</figure>

#### Disconnect & Reconnect

If the file synchronization has disconnected, the status will change to `Nocalhost sidecar disconnected`. In this case, you can just click the status bar, Nocalhost will reconnect the file synchronization. 

## Debugging

Nocalhost provides the same debugging experience you used in the IDE even when debugging in the remote Kubernetes cluster.

You can [remote debug your Kubernetes workloads](./debug/remote-debug), [access the container's terminal](./debug/access-terminal) and [viewing the container logs](./debug/log-viewer) right within your favourite IDEs.

## Open Project

If you closed the source code IDE window in development mode and want to reopen it. You can select the workload from the cluster inspector and use `Open Project`.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/develop/open-project.gif')} />
  <figcaption>Open project in VS Code</figcaption>
</figure>

:::caution DevMode Only

`Open Project` only works in development mode.

:::

## End Development Mode

When you finish developing, you can now end DevMode.

### How to?

**VS Code:** Click the <img src={useBaseUrl('/img/icons/dev_end.svg')} width="20" /> icon

**JetBrains:** Right click the workload that in DevMode and select `End DevMode`

### Process

When ending DevMode, Nocalhost runs the following process:

1. Stop file synchronization and port-forwarding (if any)
2. Stop the DevContainer
3. Delete the current versioned Pod
4. Recreating and start the original versioned Pod

## Reset Workload

Nocalhost can help you to roll back any Pod to its original version. You can do this by `Reset Pod`.

For example, reset the `productpage` deployment, and you should see the similar message as below:

```bash

Stopping port forward
Annotation nocalhost.origin.spec.json found, use it
 Deleting current revision...
 Recreating original revision...
Service productpage has been reset.

```

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/develop/reset-pod.gif')} />
  <figcaption>Reset pod</figcaption>
</figure>

## Manifest

### Application Level

You can apply a new [Kubernetes manifests](https://kubernetes.io/docs/reference/glossary/?all=true#term-manifest) to an [application](../config/config-ref#application). You can easily deploy/undeploy Kubernetes workloads by this feature.

### Workload Level

Nocalhost has a built-in manifest editor that allows you to edit the Kubernetes manifest within IDE. After modification, Nocalhost can apply the new manifest directly.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/develop/edit-manifest.gif')} />
  <figcaption>Edit manifest</figcaption>
</figure>