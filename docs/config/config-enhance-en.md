---
title: Enhance configuration
---
[Overview](config-en.md) / [Spec](config-spec-en.md) / [Enhance](config-enhance.md)

<br/>

******

### Automatic Port Forwarding in Dev Mode

```yaml
name: nocalhost-api
serviceType: deployment
containers:
  - name: nocalhost-api
    dev:
      portForward:
        - 8080:80
        - 3306:3306
```

If you expect some ports of the Dev Container could be automatically port-forward to the local after entering Dev Mode, you can do some related configurations. 

:::danger About system ports

If permission is required to listen on the local ports, such as the system ports (below 1024) in Ubuntu or Windows, automatic port-forward cannot be enabled after entering Dev Mode.

:::

<br/>

******

### Source Code Address

```yaml
name: nocalhost-api
serviceType: deployment
containers:
  - name: nocalhost-api
    dev:
      gitUrl: git@github.com:nocalhost/nocalhost.git
```

Source code address refers to the git source code directory of the service. It is used to quickly and easily download the source code and it supports http/https and ssh protocols.

:::tip

Whether the code can be successfully cloned depends on whether the device has the permission.

:::

It would be the best to configure the gitUrl for each service in advance. In this way, the communication cost between teams could be greatly reduced.

<br/>

******

### File Synchronization

```yaml
name: nocalhost-api
serviceType: deployment
containers:
  - name: nocalhost-api
    dev:
      sync:
        type: send
        mode: pattern
        filePattern:
          - .
        ignoreFilePattern:
          - ".git"
          - ".github"
          - ".vscode"
          - "node_modules"
```

<br/>

******

The configuration of file synchronization includes three parts:

** &nbsp • ** The first is the synchronization type, which includes:

:::note

 - send. Send only (one-way). All changes depend on the local, and the remote changes will not affect the local (by default).
 - sendReceive. Send and receive (two-way). Operations such as adding, modifying, and deleting at either end will be synchronized to the other end.

:::

<br/>

******

** &nbsp • ** The second is the local file deletion protection `containers[].dev.sync.deleteProtection`, which is a Bool value.

** &nbsp &nbsp &nbsp - ** If this function is enabled, the deletion in the remote will not be synchronized to the local (this function is enabled by default).

** &nbsp &nbsp &nbsp - ** If this function is disabled when `sendReceive` is enabled, the file will be deleted in the local when it is deleted in the remote.

******

** &nbsp • ** The third is synchronization mode. You are required to select a local directory when entering Dev Mode, and then Nocalhost will synchronize all files under this directory by default. If you do not want to synchronize all files, you can customize it.

Nocalhost offers two synchronization modes. `containers[].dev.sync.mode`

:::note

 - pattern. Synchronize files based on pattern matching (default mode).
 - gitIgnore. Synchronize and ignore files according to `gitIgnore`.

:::

<br/>

******



#### Pattern Mode

If you want to use pattern mode, you can configure filePattern and ignoreFilePattern to customize, such as only synchronizing building products or ignoring all files irrelevant to the building.

As the example given above, it means to synchronize files in send only way and ignore `.git`、`.github`、`.vscode` and `node_modules`.

:::info Pattern

See more instructions in [Pattern Config](config-pattern.md).

:::

<br/>

#### gitIgnore Mode

This mode is easy to use. It will automatically use `git` ignore configuration, such as `gitignore `.

:::warning Requirements

Since this function is based on `git`, you need to make sure that your device has installed `git`. Moreover, the synchronized directory has to be in a `git` project.

If the above two requirements are not met, Nocalhost will not enable synchronization control, which means that all files will be synchronized. This is equivalent to no synchronization configuration. 

:::

<br/>

:::tip Which files are ignored?

You can move to the file synchronization directory (e.g., `cd /yourpath`) and then enter `git status --ignored=matching -s` to see the ignored files/folders. Files/folders starting with `!!` will not be synchronized to the remote.

:::

<br/>

Example:
```yaml
name: nocalhost-api
serviceType: deployment
containers:
  - name: nocalhost-api
    dev:
      sync:
        type: send
        mode: gitIgnore
```
