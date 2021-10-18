---
title: Develop configuration
---
[Overview](config.md) / [Spec](config-spec.md) / [Develop](config-develop.md)

<br/>

******

:::danger VSCode 插件
VSCode 插件暂不支持一键运行、调试等功能，Coming soon。
:::


### 配置一键运行

```yaml
name: example
serviceType: deployment
containers:
  - name: you-container
    dev:

      command:
        run: [ "./gradlew", "bootRun" ]
```

配置了 `command.run` 之后，即支持一键运行。其中，运行的命令与参数需要拆分成数组中的各个元素，如 `./gradlew bootRun` 配置为 `[ "./gradlew", "bootRun" ]`

:::info 如何使用一键运行
[Remote Run](../guides/remote-run.md) 中介绍了如何使用一键运行。
:::

<br/>

******

### 配置一键调试

```yaml
name: example
serviceType: deployment
containers:
  - name: you-container
    dev:

      command:
        debug:
          - ./gradlew
          - bootRun
          - --debug-jvm
      debug:
        remoteDebugPort: 5005
```

debug 的配置除了 `command.debug` 之外，还需要填写一个调试端口，如 gradle 默认调试端口为 5005。如果指定了其他端口，这里也应同步变更。

:::info 如何使用一键调试
[Remote Debugging](../guides/debug/remote-debug.md) 中介绍了如何使用一键调试。
:::


<br/>

******

### 配置 HotReload


```yaml
name: example
serviceType: deployment
containers:
  - name: you-container
    dev:

      hotReload: true
```

在配置了 run 或者 debug 的前提下，再配置 `hotReload: true` 即可开启 hotReload。Nocalhost 原生提供的 hotReload 为 liveReload，如果你的语言与运行方式不支持 HotReload，或者配置复杂，可以尝试使用 Nocalhost 的 HotReload。

:::info 配置了 run 命令的 HotReload
```yaml
name: example
serviceType: deployment
containers:
  - name: you-container
    dev:

      command:
        run: [ "./gradlew", "bootRun" ]
      hotReload: true
```

:::