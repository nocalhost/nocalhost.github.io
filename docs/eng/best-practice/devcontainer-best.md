When Nocalhost controls the Pod to enter **DevMode**, the configured **Dev Container Image** will be started as **DevContainer** instead of the original container. After that, developers can build, run, and debug their own programs in **DevContainer**.

You can use the **DevContainer** image provided by us or customize it yourself.

## Advices for Making DevContainer

You can use any **Docker** image to make **DevContainer** image, as long as it containers the basic `shell (/bin/sh)`.

However, it is strongly recommended to provide a dedicated **DevContainer** image for the services of a specific technology stack. A good **DevContainer** image should:

- Provide easy-to-use shells, such as: bash, zsh, etc.
- Provide the basic SDK needed to build source code, such as JDK
- Provide tool chains needed to build source code, such as git, maven, yarn, make, etc.
- Provide third-party dependency packages or automatic download configuration required to build source code, such as Maven mirror source
- Provide other debugging tools needed in the development process, such as gdb, curl, tcpdump, mysql-client, etc.
- Do not include the source code of the service (the source code should be checked out locally through the source code management system and synchronized to the DevContainer.)

## Nocalhost's DevContainer Image

Can download from [DevContainer Image](https://github.com/nocalhost/dev-container).

## How to Configure DevContainer

1. Select a workload，click <img src='../../../assets/images/icons/nocalhost-config-icon.jpg' width="20" /> to configure

2. Change the  `image` filed as following:

```yml hl_lines="11"
containers:
  - name: productpage
    install:
      env: []
      envFrom:
        envFile: []
      portForward:
        - 39080:9080
    dev:
      gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-productpage.git
      image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage
      shell: bash
```

When debugging, Nocalhost will overwrite the startup command of DevContainer to `/bin/sh -c tail -f /dev/null` to ensure that DevContainer will not exit unexpectedly. For other changes made by Nocalhost under **DevMode**, please refer to [DevMode](../../core-concept/#devmode).