---
title: Syntax
---

[Overview](config-en.md) / [Deploy Config](config-deployment-en.md) / [Syntax](config-deployment-syntax.md)

<br/>

******

## Injecting environment variables in config.yaml

config.yaml supports dynamic injection of environment variables. You can take advantage of this feature when you want to control something dynamically during deployment. The basic syntax of environment variables injection is `${ENV}`. The actual values of the environment variables will be read from the current process.

:::info Setting default values for environment variables

The syntax is `${ENV:-DEFAULT_VALUE}`. The DEFAULT_VALUE will be used if the environment variable `ENV` was not found.

:::


### Example

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

RESULT:
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

## Using the include syntax in config.yaml to introduce other file's content

configuring with config.yaml supports the use of include syntax to achieve a high degree of encapsulation, such as "abstraction", "inheritance", "rewriting" and so on. The basic syntax of include is `${_INCLUDE_:- file/rel/path | nindent 2}`, where nindent is the overall indentation when the file is imported.

<br/>

### Example 1: Combining config.yaml with the include syntax

Here we use [Deployment configuration example](./config-deployment-quickstart.md#example) to demonstrate.

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

The structure of the directories is:

```dot
├── service
│   ├── details.yaml
│   └── productpage.yaml
├── config.yaml
```

<br/>

:::tip How to verify
You can use `nhctl render ./config.yaml` to verify the result, which will get the rendered result.
:::

### Example 2: Abstracting the configuration

The configuration of many services is likely to be similar. If you need to modify, then you must modify them altogether. For those common configurations, they can be abstracted:

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

The structure of the directories is:

```dot
├── service
│   ├── details.yaml
│   └── productpage.yaml
├── base
│   └── dev-config.yaml:
├── config.yaml
```

<br/>

Using `nhctl render ./config.yaml` to get the result:

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

### Example 3: "Reloading" the configuration

The configurations may not be exactly identical. For example, the development image and startup command used by each service are different. How to customize them when use abstracted configuration?

<br/>

Taking `Example 2` as an example, productpage uses the basic dev-config.yaml for the dev part. But at the same time, the definition of `gitUrl` and `image` overrides the already defined content in dev-config.yaml. In addition, `resources` is also defined to expand the dev-config.yaml.

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

The structure of the directories is:

```dot
├── service
│   └── productpage.yaml
├── base
│   └── dev-config.yaml:
```

<br/>

Using `nhctl render ./service/productpage.yaml` to get the result:

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
