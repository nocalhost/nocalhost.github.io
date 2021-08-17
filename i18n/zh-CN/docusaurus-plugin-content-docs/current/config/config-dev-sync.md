---
title: sync
---

# Configure File Synchronization

When entering the development mode, Nocalhost will automatically synchronize the files in the selected local directory to the `DevContainer`. Nocalhost supports bi-directional file synchronization.

:::info Behind the File Sync
Nocalhost using [Syncthing](https://syncthing.net/) to build our file synchronization system.
:::

## Example

You can configure the files and folders that need to be synchronized or ignored.

```yml {7-8}
containers:
  - name: container-01
    dev:
      ...
      sync:
        type: send                  # select    | optional  | The synchronization file mode of the workload; "send" for one-way sync, "sendreceive" for two-way sync       
          filePattern: ["."]        # string[]  | optional  | List of files and directories to be synchronized to DevConatiner
          ignoreFilePattern: ["."]  # string[]  | optional  | List of ignored files and directories to be synchronized to DevConatiner
      ...
```

## File Synchronization Conflict

:::info Coming Soon
:::