---
title: devContainer
---

# Develop Container

Before entering the development mode (`DevMode`), Nocalhost will replace the specified container's image with the development image (`DevImage`), and then change the container's name to `nocalhost-dev`. This container is called `Development Container（DevContainer）`

You can use the [Nocalhost Standard DevImage](https://github.com/nocalhost/dev-container) provided by us or customize by yourself.

## Advices for Making DevImage

You can use any Docker image to create a `DevImage`, as long as it containers the basic `shell (bin/sh)`.

However, it is strongly recommended to provide a dedicated DevImage of a specific technology stack. A good `DevImage` should:

- Provide easy-to-use shells, such as: `bash`, `zsh`, etc.
- Provide the basic SDK needed to build source code, such as `JDK`
- Provide tool chains needed to build source code, such as `git`, `maven`, `yarn`, `make`, etc.
- Provide third-party dependency packages or automatic download configuration required to build source code, such as Maven mirror source
- Provide other debugging tools needed in the development process, such as `gdb`, `curl`, `tcpdump`, `mysql-client`, etc.
- Do not include the source code of the service (the source code should be checked out locally through the source code management system and synchronized to the DevContainer.)
