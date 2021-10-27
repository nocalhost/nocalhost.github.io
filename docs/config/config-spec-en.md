---
title: Spec
---
[Overview](config.md) / [Spec](config-spec.md)

<br/>

******

# What types of configurations does Nocalhost have? 

:::info PRE-REQUIRE

Before starting this section, please make sure you have already known how to configure Nocalhost. If not, please read [Nocalhost Overview ?](config-overview.md) first.

:::

The configuration of Nocalhost can be divided into three types.

<br/>

******

## [Development Container Configuration](config-dev-container.md)

The first type is the development container configuration, including:

 - The development image configuration
 - The remote directory for file synchronization 
 - The default shell of development container
 - The persistence of development container
 - Requests and limits of development container resources
 - Sidecar image customization

:::tip Quickview
```yaml
name: nocalhost-api
serviceType: deployment
containers:
  - name: nocalhost-api
    dev:
      
      image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/golang:zsh
      workDir: /home/nocalhost-dev
      sidecarImage: nocalhost-docker.pkg.coding.net/nocalhost/public/nocalhost-sidecar:sshversion
      shell: /bin/zsh
      persistentVolumeDirs:
        - path: /the/path/you/want/to/persistent/in/container
          capacity: 10Gi
        - path: /other
          capacity: 10Gi
      storageClass: cbs
      resources:
        limits:
          memory: 4Gi
          cpu: "1"
        requests:
          memory: 2Gi
          cpu: "0.5"
```
:::



<br/>

******

## [Enhance Configuration](config-enhance.md)

The second type is enhance configuration, which is independent of the development container, including:

 - The source code directory for git
 - Whether to automatically turn on the port forwarding after entering development mode
 - File synchronization configuration, including the synchronizing pattern and the ignoring pattern

:::tip Quickview

```yaml
name: nocalhost-api
serviceType: deployment
containers:
  - name: nocalhost-api
    dev:
      
      gitUrl: git@github.com:nocalhost/nocalhost.git
      portForward:
        - 8080:80
        - 3306:3306
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

:::

<br/>

******

## [One-click Running, One-click Debugging and HotReload Configuration](config-develop.md)

The third type is the configuration for development process, including:

 - One-click running
 - One-click debugging
 - HotReload

:::tip Quickview

```yaml
name: example
serviceType: deployment
containers:
  - name: you-container
    dev:
      
      command:
        run: [ "./gradlew", "bootRun" ]
        debug: [ "./gradlew", "bootRun", "--debug-jvm" ]
      debug:
        remoteDebugPort: 5005
      hotReload: true
```

:::

