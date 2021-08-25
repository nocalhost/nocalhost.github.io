import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Remote Run

When you start the new container in Kubernetes cluster, Kubernetes will not start any process within this container. Nocalhost can uses run configurations to run your code in Kubernetes cluster like to use the run feature within IDE. 

## Supported IDEs

<table>
  <tbody>
    <tr>
      <th>Language</th>
      <th>IDE</th>
      <th>Edition</th>
      <th>Required Plugin</th>
    </tr>
    <tr>
      <td>Java</td>
      <td>IntelliJ IDEA</td>
      <td>Ultimate</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td rowSpan="2">Go</td>
      <td>IntelliJ IDEA</td>
      <td>Ultimate</td>
      <td>Go plugin</td>
    </tr>
    <tr>
      <td>GoLand</td>
      <td>Professional</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td rowSpan="2">Python</td>
      <td>IntelliJ IDEA</td>
      <td>Ultimate</td>
      <td>Python plugin</td>
    </tr>
    <tr>
      <td>PyCharm</td>
      <td>Professional</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td rowSpan="2">PHP</td>
      <td>IntelliJ IDEA</td>
      <td>Ultimate</td>
      <td>PHP plugin</td>
    </tr>
    <tr>
      <td>PHPStorm</td>
      <td>Professional</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>



## Remote Run Process

1. Select the workload that you want to run
2. Right-click the workload and select **Dev Config**, [configure your run configuration](#configuration)
3. Then right-click this workload again and select **Remote Run**
4. Nocalhost will automatically enter the `DevMode` and start remote run

### Remote Run Configurations in IDE

Before starting remote run, if you do not have a Nocalhost IDE run configuration under an existing workload, Nocalhost will create a new IDE run configuration according to your [Nocalhost configuration](#configuration). Different IDE has different configuration names and templates.

:::tip Multi Configs

If you already have a Nocalhost IDE run configuration under the existing workload, Nocalhost will use the first one to start running. You can change the order in the `Run/Debug Configurations` window within IDE.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/debug/debug-configs.png')} />
  <figcaption>Nocalhost run configurations in IDE</figcaption>
</figure>

:::

## Configuration

The development environment is different between developers. You should configure remote run configurations according to the actual situation.

These are important options for remote run:

- **Development Image:** the image use to start [development container](../../config/config-dev-devcontainer)
- **Run Command:** the command to execute in the container for remote run
- **Remote Debug Port:** IDE listens to this port for remote debug and run
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
name: java-remote-run
serviceType: deployment
containers:
  - name: ""
    dev:
        gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git
        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/java:latest
        shell: bash
        workDir: /home/nocalhost-dev
        command:
          run:
            - /home/nocalhost-dev/gradlew
            - bootRun
        debug:
          remoteDebugPort: 5005
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
name: python-remote-run
serviceType: deployment
containers:
  - name: ""
    dev:
        gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git
        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:latest
        shell: bash
        workDir: /home/nocalhost-dev
        command:
          run:
            - ./run.sh
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

```yaml title="run.sh"

#! /bin/sh

pip3 install --no-cache-dir -r ./requirements.txt

export DEBUG_DEV=0
export FLASK_DEBUG=0
export FLASK_ENV=development

flask run --host=0.0.0.0 --port=9999

```
</TabItem>
  
<TabItem value="go">

```yaml {10,13,27} title="Nocalhost Configs"
name: go-remote-run
serviceType: deployment
containers:
  - name: ""
    dev:
        gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git
        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/golang:latest
        shell: bash
        workDir: /home/nocalhost-dev
        command:
          run:
            - ./run.sh
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

```yaml title="run.sh"
#! /bin/sh

export GOPROXY=https://goproxy.cn
go run app.go
```

</TabItem>
  
<TabItem value="php">

```yaml {10,13,27} title="Nocalhost Configs"
name: php-remote-run
serviceType: deployment
containers:
  - name: ""
    dev:
        gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git
        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/php:zsh
        shell: bash
        workDir: /home/nocalhost-dev
        command:
          run:
            - ./run.sh
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

```yaml title="run.sh"

#！/bin/sh

php -t ./ -S 0.0.0.0:9999;

```

</TabItem>
</Tabs>