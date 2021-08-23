import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Remote Debugging

:::caution JetBrans only Nocalhost only supports remote debugging within JetBrains' IDE now.

We will support VS Code as soon as possible. ::: :::

## Debugging Process

1. Select the workload that you want to debug
2. Right-click the workload and select **Dev Config**, [configure your debugging configuration](#configuration)
3. Then right-click this workload again and select **Remote Debug**
4. Nocalhost will automatically enter the `DevMode` and start remote debugging <iframe width="100%" height="500" src="https://www.youtube.com/embed/LDb7oDGr8gA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen mark="crwd-mark"></iframe>

## Configuration

The development environment is different between developers. The development environment is different between developers. You should configure remote debug configurations according to the actual situation.

These are important options for remote debugging:

- **Development Image:** the image use to start [development container](../../config/config-dev-devcontainer)
- **Debug Command:** the command to execute in the container for remote debugging
- **Remote Debug Port:** IDE listens to this port for remote debugging
- **Container Port-Forwarding:** the port-forwarding in development mode

### Sample Configuration

<Tabs
  defaultValue="java"
  values={[
    {label: 'Java', value: 'java'},
 {label: 'Python', value: 'python'},
 {label: 'Go', value: 'go'},
 {label: 'PHP', value: 'php'},
 ]}>
<TabItem value="java">

```yaml {10,15,29} title="Nocalhost Configs"
name: java-remote-debugging
serviceType: deployment
containers:
  - name: ""
    dev:
        gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git
        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/java:latest
        shell: bash
        workDir: /home/nocalhost-dev
        command:
          debug:
            - /home/nocalhost-dev/gradlew
            - bootRun
            - ---debug-jvm
        debug:
          remoteDebugPort: 9009
        useDevContainer: false
        sync:
            type: send
            filePattern:
              - ./
            ignoreFilePattern:
              - .git
              - .github
        env:
          - name: DEBUG
            value: "true"
        envFrom: null
        portForward:
          - 33333:9999
```

</TabItem>

<TabItem value="python">

```yaml {10,13,27} title="Nocalhost Configs"
name: python-remote-debugging
serviceType: deployment
containers:
  - name: ""
    dev:
        gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git
        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:latest
        shell: bash
        workDir: /home/nocalhost-dev
        command:
          debug:
            - ./debug.sh
        debug:
          remoteDebugPort: 9009
        useDevContainer: false
        sync:
            type: send
            filePattern:
              - ./
            ignoreFilePattern:
              - .git
              - .github
        env:
          - name: DEBUG
            value: "true"
        envFrom: null
        portForward:
          - 33333:9999
```

```yaml title="debug.sh"
#! /bin/sh

pip3 install --no-cache-dir -r ./requirements.txt

export DEBUG_DEV=0
export FLASK_DEBUG=0
export FLASK_ENV=development

flask run --host=0.0.0.0 --port=9999
```

### How does it Works?

Nocalhost using pydevd to debug Python application. /bin/sh

pip3 install --no-cache-dir -r ./requirements.txt

export DEBUG_DEV=0
export FLASK_DEBUG=0
export FLASK_ENV=development

flask run --host=0.0.0.0 --port=9999
```

### How does it Works?

Nocalhost using pydevd to debug Python application.

<figure className="img-frame" mark="crwd-mark">
  <img className="gif-img" src={useBaseUrl('/img/debug/python-debug.jpg')} />
  <figcaption>Principle of Remote Python Debugging</figcaption>
</figure>

</TabItem>

<TabItem value="go" mark="crwd-mark">

```yaml {10,13,27} title="Nocalhost Configs"
name: php-remote-debugging
serviceType: deployment
containers:
  - name: ""
    dev:
        gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git
        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/php:zsh
        shell: bash
        workDir: /home/nocalhost-dev
        command:
          debug:
            - ./debug.sh
        debug:
          remoteDebugPort: 9003
        useDevContainer: false
        sync:
            type: send
            filePattern:
              - ./
            ignoreFilePattern:
              - .git
              - .github
        env:
          - name: DEBUG
            value: "true"
        envFrom: null
        portForward:
          - 33333:9999
```

```yaml title="debug.sh"
#！ /bin/sh

php -t ./ -S 0.0.0.0:9999;
```

### How does it works?

Nocalhost using Xdebug to debug PHP applications.

</TabItem>

<TabItem value="php">

```yaml {10,13,27} title="Nocalhost Configs"
name: go-remote-debugging
serviceType: deployment
containers:
  - name: ""
    dev:
        gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git
        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/golang:latest
        shell: bash
        workDir: /home/nocalhost-dev
        command:
          debug:
            - ./debug.sh
        debug:
          remoteDebugPort: 9009
        useDevContainer: false
        sync:
            type: send
            filePattern:
              - ./
            ignoreFilePattern:
              - .git
              - .github
        env:
          - name: DEBUG
            value: "true"
        envFrom: null
        portForward:
          - 33333:9999
```

```yaml title="debug.sh"
#! /bin/sh

export GOPROXY=https://goproxy.cn
dlv --headless --log --listen :9009 --api-version 2 --accept-multiclient debug app.go

```

Nocalhost using Xdebug to debug PHP applications.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/debug/php-debug.jpg')} />
  <figcaption>Principle of Remote PHP Debugging</figcaption>
</figure>

</TabItem>
</Tabs>