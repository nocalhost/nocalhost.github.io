import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Develop a Workload

:::note about this guide
**Goal:** In [Quick Start Guide](../quick-start), we have guided you on how to install Nocalhost and experience the easier and faster Kubernetes application development. We will provide a complete Nocalhost user guide. <br />
**Estimate Time:** 15 minutes <br />
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

## Select Workload

Nocalhost supports to development of all types of Kubernetes workload. 

In your IDE:

1. Open the Nocalhost plugin and expand the cluster inspector
2. Select the workload you want to develop

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/develop/start-devmode.jpg')} />
  <figcaption>Select workload in VS Code and JetBrains</figcaption>
</figure>

### Status

Nocalhost uses the following icons to describe the status of different Kubernetes resources in cluster inspector.

<table>
    <tr>
        <th>Resource</th>
        <th>Status</th>
        <th>Icon</th>
        <th>Description</th>
    </tr>
    <tr>
        <td rowspan="2">Cluster</td>
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
        <td rowspan="2">DevSpace</td>
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
        <td rowspan="3">Application</td>
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
        <td rowspan="5">Development Mode</td>
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
        <td rowspan="2">Nocalhost Configs</td>
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
        <td rowspan="4">Workload Status</td>
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
</table>


## Choose Source Code Directory

Before developing the application, you need to tell Nocalhost the location of your source code. You can either specify a local directory or clone your source code from the Git repository through Nocalhost.

You can [Associate Local Directory](#associate-local-directory) before entering DevMode. Alternatively, Nocalhost will check the directory path. If you do not have associated directory, Nocalhost will pop the selection menu to ask you to `specify the source directory`. You can [Open Local Directory](#open-local-directory) or [Clone from Git Repo](#clone-from-git-repository).

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

Nocalhost will ask you to input the Git repository URL and run the `git clone <URL>` command. You also need to specify the local directory to store the code clone from the repository.

```bash title="Nocalhost run the git clone command"
[cmd] git clone https://e.coding.net/bookinfo-ratings.git "/Users/user/Downloads/Github/ratings"
Cloning into '/Users/garry/Downloads/Github/ratings'...
```

In addition, Nocalhost will save the Git URL in the `gitUrl` section in workload [DevMode configuration](../config/config-dev#manage-configurations-by-ide-plugin). Refer to [Configure Git URL](../config/config-dev#configure-git-url) for more information.

:::info Auto-associate
Nocalhost will associate the directory to the clone directory automatically after codes are cloned. 
:::

:::caution Appear Once
The `Clone from Git Repository` option will only appear once at the first time the workload enter DevMode. 
:::

## Enter Development Mode

When entering DevMoe, Nocalhost first runs the following process (1. - 5.)

### 1. Replace Image

Nocalhost will first replace the remote container image with a development image (DevImage).

[Read more to learn about DevImage configuration](../config/config-dev#configure-development-image)

:::info Image Pull
Container image will handle by Kubernetes, [read more to learn about Kubernetes image management](https://kubernetes.io/docs/concepts/containers/images/)
:::

### 2. Replace Container and Restart POD

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

### 3. Start Port-Forwarding

#### Configured before Enter DevMode

Nocalhost iterates over every item the `containers[*].dev[*].portForward` array defined in the `config.yaml` and starts port-forwarding for each of the entries and the port mappings they define in the `portForward` section.

:::note
Before starting the actual port-forwarding, Nocalhost waits until the containers and services are ready. You should see the following messages in IDE output:

```bash
Syncthing port-forward pod ratings-5dfbc89c59-r7wg5, namespace default
Port-forward 51517:51517 has been started
```
:::

#### Without `portForward` Configurations

If the port-forwarding configuration has not been configured before entering the DevMode, then you need to configure the port-forwarding through the IDE after entering the development mode.

### 4. Start File Synchronization

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

### 5. Open Remote Terminal

Nocalhost will open DevContainer's terminal right within the IDE without extra configurations.

```bash
root@ratings-5dfbc89c59-r7wg5:/home/nocalhost-dev#
```


### Status Bar


## Exit Development Mode


## Reset Application


## Edit Manifest