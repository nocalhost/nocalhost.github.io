---
title: command
---

# Configure Commands in DevMode

You can preset the commands to be automatically run in `DevContainer` corresponding to different working modes. After entering the `DevMode` and specific working mode, Nocalhost will automatically trigger the preset command. After entering the `DevMode` and specific working mode, Nocalhost will automatically trigger the preset command.

```yaml
containers:
  - name: container-01
    dev:
      ...
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

:::caution Working Mode 
These working modes currently only correspond to the specified features in IDE plugin. 
:::

## `dev[*].command[*].build`

When building in `DevContainer`, it will run specified commands automatically.

```yaml
containers:
    - name: container-01
      dev:
        ...
        containers:
    - name: container-01
      dev:
        ...
        command:
            build: ["./gradlew", "package"]
```

## `dev[*].command[*].run`

When running the workload in `DevContainer`, it will run specified commands automatically.

```yaml
containers:
    - name: container-01
      dev:
        ...
        containers:
    - name: container-01
      dev:
        ...
        command:
            run: ["./gradlew", "bootRun"]
```

## `dev[*].command[*].debug`

When doing remote debugging, `DevContainer` will run specified commands automatically.

```yaml
containers:
    - name: container-01
      dev:
        ...
        containers:
    - name: container-01
      dev:
        ...
        command:
            debug: ["./gradlew", "bootRun", "--debug-jvm"]
```

:::danger Debugging 
When debugging, Nocalhost will overwrite the startup command of `DevContainer` to `/bin/sh -c tail -f /dev/null` to ensure that `DevContainer` will not exit unexpectedly 
:::

## `dev[*].command[*].hotReloadRun`

:::info coming soon 
This feature is currently not implemented. 
:::

## `dev[*].command[*].hotReloadDebug`

:::info coming soon 
This feature is currently not implemented. 
:::