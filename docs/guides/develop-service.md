---
title: Development
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Development with Nocalhost

DevSpace allows you to develop applications directly inside a Kubernetes cluster. 

## Using Cluster Inspector

Nocalhost build-in a cluster inspector. You can use the cluster inspector to browse resources in the Kubernetes cluster, deploy your application and select the workload that wants to develop and debug.

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

## Before Entering DevMode

There are some configurations that you need to take care of before DevMode.

### Source Code Directory

Before developing the application, you need to tell Nocalhost the location of your source code, so Nocalhost can synchronize files to the remote container. You can either specify a local directory or clone your source code from the Git repository through Nocalhost.

You can [Associate Local Directory](#associate-local-directory) before entering DevMode. Alternatively, Nocalhost will check the directory path. If you do not have an associated directory, Nocalhost will pop the selection menu to ask you to `specify the source directory. You can [Open Local Directory](#open-local-directory) or [Clone from Git Repo](#clone-from-git-repository).

#### Associate Local Directory

You can associate the local source code directory to a workload before entering DevMode. Once you associated this directory, Nocalhost will save this directory path in the database. 

When you entering DevMode, Nocalhost will use this path directory without asking for input.

**Steps:**

1. Select the workload
2. Right-click and select the **`Associate Local DIR`**
3. Choose the local directory and confirm the selection

:::tip Cross IDE

If you have associated the directory in one IDE already, once you develop the same workload in the other IDE, Nocalhost will still use the directory path set before. 

For example, when a workload is associated with a directory in VS Code, then switch to IDEA. Nocalhost will firstly use the directory you associated in VS Code until you associate again.

:::

#### Open Local Directory

You can select any local directory and confirm the selection. Nocalhost will save the directory path in the database.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/develop/specify-source-dir.png')} />
  <figcaption>Ask to specify the source directory in VS Code</figcaption>
</figure>

#### Clone from Git Repository

:::danger Limitation

Nocalhost will not clone source code from Git if you have already associated or opened the directory. 

:::

Nocalhost can help you to clone the source code from the Git repository within the IDE. 

If you choose **`Clone from Git Repository`**, Nocalhost will try to clone the source code from URL according to the [`dev.gitUrl`](../config/config-dev#devgiturl) section or ask you to input the Git URL.

:::info Auto-associate

Nocalhost will associate the directory to the clone directory automatically after codes are cloned. 

:::

### Development Container

Nocalhost will replace the workload containers when entering DevMode by [development container](../config/config-dev-devcontainer). Nocalhost will loads the `container[*].dev` section from the Nocalhost configuration. 

#### Development Image

Nocalhost needs to know which `development image` to use before entering DevMode. Nocalhost will use [`dev.image`](../config/config-dev#devimage) configuration or ask you to input the image name or URL. 

You can use the docker image provide by us or use any [custom image](../config/config-dev-devcontainer#advices-for-making-devimage) for `development image`.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/develop/vs-choose-image.jpg')} />
  <figcaption>Select development image in VS Code</figcaption>
</figure>

:::info Image Pull

Container image will handle by Kubernetes, [read more to learn about Kubernetes image management](https://kubernetes.io/docs/concepts/containers/images/).

:::

## Start Development Mode

### Select Workload

1. Expand the cluster inspector
2. Select the workload you want to develop and click **`Start DevMode`**
3. Select the container if you have more than one container in this workload

:::caution Container

If you have more than one container in a workload, you can only select one container to enter DevMode.

:::

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/develop/start-devmode.jpg')} />
  <figcaption>Select workload in VS Code and JetBrains</figcaption>
</figure>

### DevMode Process

When entering DevMoe will do the following:

1. **Replace Pods** according to your [`replacing port` configurations](../config/config-dev-devcontainer#configuration)
2. **Forward ports** according to your [`port-forwarding` configurations](../config/config-dev-portforward)
3. **Sync file changes** between your local project directory and the Kubernetes pods according to the [`dev.sync`](../config/config-dev-sync) section
4. **Open a terminal** right within IDE after the container started. The opened working directory is according to your [`dev.workDir`](../config/config-dev#devworkdir) section.

Once the terminal session starts, you start your application and work inside your container. 

```bash title="Remote terminal session started"
root@ratings-5dfbc89c59-r7wg5:/home/nocalhost-dev#
```

You can also use the [remote run](./remote-run) to run all the commands according to `dev.command` section.

## Coding in Kubernetes Cluster

Make sure you have done the following before developing:

- [x] Start process inside the container or use the [remote run](./remote-run) to run your application.
- [x] The port-forwarding you configured has successfully started or [configure the port-forwarding in IDE](../config/config-dev-portforward#using-ide-plugin)

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

### Open Project

If you close the developing IDE window and want to reopen it again. Just right-click the workload which in DevMode and choose `Open Project`.

:::caution DevMode Only

`Open Project` only works in development mode.

:::

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/develop/open-project.gif')} />
  <figcaption>Open project in VS Code</figcaption>
</figure>

## End Development Mode

When you finish developing, you can now end DevMode.

### How to?

- **VS Code:** Click the <img src={useBaseUrl('/img/icons/dev_end.svg')} width="20" /> icon
- **JetBrains:** Right click the workload that in DevMode and select `End DevMode`

### Process

When ending DevMode, Nocalhost runs the following process:

1. Stop file synchronization and port-forwarding (if any)
2. Stop the DevContainer
3. Delete the current versioned Pod
4. [reset pod](#reset-pod) - Recreating and start the original versioned Pod

## Other Useful Features

### Reset Pod

Nocalhost can help you to roll back any Pod to its original version by `Reset Pod`.

For example, reset the `productpage` deployment, and you should see similar messages below:

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

### Modify Manifest

Nocalhost has a built-in manifest editor that allows you to edit and apply the Kubernetes manifest within IDE. After modification, Nocalhost can apply the new manifest directly.

#### Edit and Apply

:::danger DevMode

You can not able to edit the manifest if the workload is in DevMode.

:::

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/develop/edit-manifest.gif')} />
  <figcaption>Edit manifest</figcaption>
</figure>

#### Delete

COMING SOON


### Clear PVC

:::note DOCS COMING SOON

:::