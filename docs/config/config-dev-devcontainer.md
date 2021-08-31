---
title: Replace Pod
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Replacing Pods for Development

When entering the DevMode (development mode), Nocalhost will exchange an already running or just deployed Pod with a modified version. When entering DevMode, Nocalhost will do the following before all other services such as port-forwarding and file sync.

1. Replace the target container's image with the development image according to [`dev.image`](./config-dev#devimage) section.
2. Change this container's name to `nocalhost-dev`. This container is called `Development Container（DevContainer）`
3. Replace the existing Pod to new Pod by `DevContainer`

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/develop/replace-pod-eng.gif')} width="600"/>
  <figcaption>Replace pods for development</figcaption>
</figure>

## How does it work?

Each entry that you specify under `containers[*]` will tell Nocalhost to search for containers within the specified Pod that should be replace with the given configuration. If Nocalhost finds a container to replace, it does [theses process](./config-dev-workload) according to workload type.

## Configuration

This is an example configuration of our [bookinfo application](https://github.com/nocalhost/bookinfo)

```yaml
- name: productpage
  serviceType: deployment
  dependLabelSelector: 
    jobs:
      - "dep-job"
  containers:
    - name: productpage
      install: 
        portForward:   
          - 39080:9080
      dev:
        gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-productpage.git
        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage
        shell: bash
        workDir: /home/nocalhost-dev
        command:
          run:
            - ./run.sh
          debug:
            - ./debug.sh
        debug:
          remoteDebugPort: 9009
        sync: 
          type: send
          filePattern: 
            - ./
          ignoreFilePattern:
            - ".git"
            - ".github"
            - ".idea"
        portForward:
        - 39080:9080
```

:::caution Multi Containers

ou can define multi containers in one configuration, according to the container's name. But you can only develop one at once.

:::

## Advices for Making DevImage

You can use any Docker image to create a `DevImage`, as long as it containers the basic `shell (bin/sh)`.

However, it is strongly recommended to provide a dedicated DevImage of a specific technology stack. A good `DevImage` should:

- Provide easy-to-use shells, such as: `bash`, `zsh`, etc.
- Provide the basic SDK needed to build source code, such as `JDK`
- Provide tool chains needed to build source code, such as `git`, `maven`, `yarn`, `make`, etc.
- Provide third-party dependency packages or automatic download configuration required to build source code, such as Maven mirror source
- Provide other debugging tools needed in the development process, such as `gdb`, `curl`, `tcpdump`, `mysql-client`, etc.
- Do not include the source code of the service (the source code should be checked out locally through the source code management system and synchronized to the DevContainer.)
