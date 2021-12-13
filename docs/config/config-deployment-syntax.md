---
title: Syntax
---

[Overview](config-en.md) / [Deploy Config](config-deployment-en.md) / [Syntax](config-deployment-syntax.md)

<br/>

******

## 在 config.yaml 中注入环境变量

config.yaml 支持动态环境变量注入，如果你想在部署时动态控制某些内容，则可以使用此功能。 环境注入的基本语法为 `${ENV}`，环境变量的值将从当前进程获取。

:::info 为环境变量配置默认值

语法为 `${ENV:-DEFAULT_VALUE}`，如果找不到 `ENV` 这个环境变量，则会使用 DEFAULT_VALUE 作为默认值。

:::


### 示例

```yaml
- name: e-micro-agile
    serviceType: deployment
    dependPodsLabelSelector:
    - "app=mariadb"
    - "app=rabbitmq"
    dependJobsLabelSelector:
      - "job-name=init-data-job"
    gitUrl: ${CODING_GIT_URL:-git@e.coding.net:nocalhost/collaboration.git}
    devContainerImage: $CODING_GIT_SERVER_IMAGE
    workDir: ${WORK_DIR}
    persistentVolumeDirs:
     - path:${PERSISTENT_VOLUME_DIRS}
    buildCommand: [$BUILD_COMMAND]
    runCommand: [${RUN_COMMAND:-"./gradlew", "bootRun"}]
    debugCommand: [${DEBUG_COMMAND:-"./gradlew", "bootRun", "--debug-jvm"}]
    syncFilePattern:${SYNC_FILE_PATTERN:-
     - "."}

    ignoreFilePattern:${IGNORE_FILE_PATTERN:-
     - ".git"
     - ".nocalhost"}

    testPriority: ${PRIORITY:-0}
```

<br/>

env:

```env
CODING_GIT_URL=git@e.coding.net:nocalhost/nocalhost.git
PRIORITY=2
```

结果：
```yaml

- name: e-micro-agile
    serviceType: deployment
    dependPodsLabelSelector:
    - "app=mariadb"
    - "app=rabbitmq"
    dependJobsLabelSelector:
      - "job-name=init-data-job"
    gitUrl: git@e.coding.net:nocalhost/nocalhost.git
    devContainerImage:
    workDir:
    persistentVolumeDirs:
     - path:
    buildCommand: []
    runCommand: ["./gradlew", "bootRun"]
    debugCommand: ["./gradlew", "bootRun", "--debug-jvm"]
    syncFilePattern:
     - ./nocalhost
     - ./foo**bar
     - *.jar

    ignoreFilePattern:
      - "."

    testPriority: 2
```


<br/>

******

## 在 config.yaml 中使用 include 语法引入其他文件内容

config.yaml 支持通过 include 语法来实现配置的高度的封装，例如 "抽象"，"继承"，"重写" 等。 include 的基本语法为 `${_INCLUDE_:- file/rel/path | nindent 2}`，其中 nindent 为文件引入时的整体缩进。

<br/>

### 示例1：通过 include 语法组合 config.yaml

这里使用 [部署配置示例](./config-deployment-quickstart.md#示例) 来拆解。

config.yaml:

```yaml
application:
  name: bookinfo
  manifestType: rawManifestGit
  resourcePath: [ "manifest/templates" ]

  service:
    ${_INCLUDE_:- ./service/productpage.yaml | nindent 4}
    ${_INCLUDE_:- ./service/details.yaml | nindent 4}
```

<br/>

/service/productpage.yaml:

```yaml
- name: productpage
  serviceType: deployment
  containers:
    - name: productpage
      dev:
        gitUrl: https://e.coding.net/nocalhost/nocalhost/bookinfo-productpage.git
        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage-with-pydevd
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
        resources:
          limits:
            cpu: "1"
            memory: 1Gi
          requests:
            cpu: "0.5"
            memory: 512Mi
```

<br/>

/service/details.yaml:

```yaml
- name: details
  serviceType: deployment
  containers:
    - dev:
        gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git
        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/ruby:2.7.1-slim
        shell: bash
        workDir: /home/nocalhost-dev
        sync: 
          type: send
          filePattern: 
            - ./
          ignoreFilePattern:
            - ".git"
            - ".github"
        env: 
        - name: DEBUG
          value: "true"
```

<br/>

目录结构为：

```dot
├── service
│   ├── details.yaml
│   └── productpage.yaml
├── config.yaml
```

<br/>

:::tip 如何验证
可以使用 `nhctl render ./config.yaml` 来对结果进行验证，这个命令将拿到渲染后的结果。
:::

### 示例2：对配置进行抽象

对于许多服务的开发配置来说，很可能是近似的。如果发生了改动，往往需要全部一起改，对于那些相同的配置，可以将其进行抽象：

config.yaml:

```yaml
application:
  name: bookinfo
  manifestType: rawManifestGit
  resourcePath: [ "manifest/templates" ]

  service:
    ${_INCLUDE_:- ./service/productpage.yaml | nindent 4}
    ${_INCLUDE_:- ./service/details.yaml | nindent 4}
```


<br/>

/service/productpage.yaml:

```yaml
- name: productpage
  serviceType: deployment
  containers:
    - name: productpage
      dev:
        ${_INCLUDE_:- ../base/dev-config.yaml | nindent 8}
```

<br/>

/service/details.yaml:

```yaml
- name: details
  serviceType: deployment
  containers:
    - dev:
        ${_INCLUDE_:- ../base/dev-config.yaml | nindent 8}
```

<br/>

/base/dev-config.yaml:

```yaml
gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git
image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/ruby:2.7.1-slim
shell: bash
workDir: /home/nocalhost-dev
sync: 
  type: send
  filePattern: 
    - ./
  ignoreFilePattern:
    - ".git"
    - ".github"
env: 
- name: DEBUG
  value: "true"
```

<br/>

目录结构为：

```dot
├── service
│   ├── details.yaml
│   └── productpage.yaml
├── base
│   └── dev-config.yaml:
├── config.yaml
```

<br/>

调用 `nhctl render ./config.yaml` 得到结果：

```yaml
application:
  name: bookinfo
  manifestType: rawManifestGit
  resourcePath: [ "manifest/templates" ]

  service:
    - name: productpage
      serviceType: deployment
      containers:
        - name: productpage
          dev:
            gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git
            image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/ruby:2.7.1-slim
            shell: bash
            workDir: /home/nocalhost-dev
            sync:
              type: send
              filePattern:
                - ./
              ignoreFilePattern:
                - ".git"
                - ".github"
            env:
              - name: DEBUG
                value: "true"

    - name: details
      serviceType: deployment
      containers:
        - dev:
            gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git
            image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/ruby:2.7.1-slim
            shell: bash
            workDir: /home/nocalhost-dev
            sync:
              type: send
              filePattern:
                - ./
              ignoreFilePattern:
                - ".git"
                - ".github"
            env:
              - name: DEBUG
                value: "true"
```

### 示例3："重载" 配置

配置不一定完全相同，例如每个服务使用的开发镜像和启动命令不一定一样，如何在抽象的情况下又进行定制化呢？

<br/>

这里以 `示例2` 为例，productpage 使用了基础的 dev-config.yaml 作为 dev 部分内容。同时，定义了 `gitUrl` 和 `image` 覆盖 dev-config.yaml 已经定义好的内容。另外，还定义了 `resources` 拓展了  dev-config.yaml。

/service/productpage.yaml:

```yaml
- name: productpage
  serviceType: deployment
  containers:
    - name: productpage
      dev:
        ${_INCLUDE_:- ../base/dev-config.yaml | nindent 8}
        gitUrl: https://e.coding.net/nocalhost/nocalhost/bookinfo-productpage.git
        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage-with-pydevd
        resources:
          limits:
            cpu: "1"
            memory: 1Gi
          requests:
            cpu: "0.5"
            memory: 512Mi
```

<br/>

/base/dev-config.yaml:

```yaml
gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git
image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/ruby:2.7.1-slim
shell: bash
workDir: /home/nocalhost-dev
sync: 
  type: send
  filePattern: 
    - ./
  ignoreFilePattern:
    - ".git"
    - ".github"
env: 
- name: DEBUG
  value: "true"
```

<br/>

目录结构为：

```dot
├── service
│   └── productpage.yaml
├── base
│   └── dev-config.yaml:
```

<br/>

调用 `nhctl render ./service/productpage.yaml` 得到结果：

```yaml
- name: productpage
  serviceType: deployment
  containers:
    - name: productpage
      dev:
        shell: bash
        workDir: /home/nocalhost-dev
        sync:
          type: send
          filePattern:
            - ./
          ignoreFilePattern:
            - ".git"
            - ".github"
        env:
          - name: DEBUG
            value: "true"
        gitUrl: https://e.coding.net/nocalhost/nocalhost/bookinfo-productpage.git
        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage-with-pydevd
        resources:
          limits:
            cpu: "1"
            memory: 1Gi
          requests:
            cpu: "0.5"
            memory: 512Mi
```
