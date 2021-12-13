import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Remote Debugging

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
    <tr>
      <td rowSpan="2">Node.js</td>
      <td>IntelliJ IDEA</td>
      <td>Ultimate</td>
      <td>Node.js plugin</td>
    </tr>
    <tr>
      <td>WebStrom</td>
      <td>Professional</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

:::danger ISSUES

Debugging feature has issue with [Kind](https://kind.sigs.k8s.io/)

:::

## Debugging Process

1. Select the workload that you want to debug
2. Right-click the workload and select **`Dev Config`**, [configure your debugging configuration](#configuration)
3. Then right-click this workload again and select **Remote Debug**
4. Nocalhost will automatically enter the `DevMode` and start remote debugging

<iframe width="100%" height="600" src="//player.bilibili.com/player.html?aid=378208000&bvid=BV12f4y1w7EX&cid=415232277&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### Debugging Configurations in IDE

Before entering debug mode, if you do not have a Nocalhost IDE debug configuration under an existing workload, Nocalhost will create a new IDE debug configuration according to your [Nocalhost configuration](#configuration). Different IDE has different configuration names and templates.

:::tip Multi Configs

If you already have a Nocalhost IDE debug configuration under the existing workload, Nocalhost will use the first one to start debugging. You can change the order in the `Run/Debug Configurations` window within IDE.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/debug/debug-configs.png')} />
  <figcaption>Nocalhost debugging configurations in IDE</figcaption>
</figure>

:::

## Configuration

The development environment is different between developers. You should configure remote debug configurations according to the actual situation.

### Sample Configuration

<Tabs
  defaultValue="java"
  values={[
    {label: 'Java', value: 'java'},
    {label: 'Python', value: 'python'},
    {label: 'Go', value: 'go'},
    {label: 'PHP', value: 'php'},
    {label: 'Node.js', value: 'node'},
  ]}>
<TabItem value="java">

```yaml {8,11} title="Nocalhost Configs"
name: java-remote-debugging
serviceType: deployment
containers:
  - name: ""
    dev:
        ...
        command:
          debug:
            - ./debug.sh
        debug:
          remoteDebugPort: 5005
        ...
```

#### Maven Example

The shell command for **Maven** example:

```bash title="jdk >= 1.8 and springBoot >=2.2.1.RELEASE"
 mvn spring-boot:run -Dspring-boot.run.jvmArguments="-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=y,address=5005"
```

For jdk <=1.7 you  should  replace `-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005` with `-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=y,address=5005`

For lower version of the springBoot  you should replace `-Drun.jvmArguments` with `-Dspring-boot.run.jvmArguments`

#### Gradle Example

The startup command for **Gradle** example:

```bash title="Gradle's debug.sh"
./gradlew bootRun --debug-jvm --no-daemon
```

</TabItem>
  
<TabItem value="python">

```yaml {8,11} title="Nocalhost Configs"
name: python-remote-debugging
serviceType: deployment
containers:
  - name: ""
    dev:
        ...
        command:
          debug:
            - ./debug.sh
        debug:
          remoteDebugPort: 9009
        ...
```

```yaml title="debug.sh"

#! /bin/sh

pip3 install --no-cache-dir -r ./requirements.txt

export DEBUG_DEV=0
export FLASK_DEBUG=0
export FLASK_ENV=development

flask run --host=0.0.0.0 --port=9999

```

**How does it Works?**

Nocalhost using pydevd to debug Python application.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/debug/python-debug.jpg')} />
  <figcaption>Principle of Remote Python Debugging</figcaption>
</figure>

</TabItem>
  
<TabItem value="go">

```yaml {8,11} title="Nocalhost Configs"
name: go-remote-debugging
serviceType: deployment
containers:
  - name: ""
    dev:
        ...
        command:
          debug:
            - ./debug.sh
        debug:
          remoteDebugPort: 9009
        ...
```

```yaml title="debug.sh"

#! /bin/sh

export GOPROXY=https://goproxy.cn
dlv --headless --log --listen :9009 --api-version 2 --accept-multiclient debug app.go

```

</TabItem>
  
<TabItem value="php">

```yaml {8,11} title="Nocalhost Configs"
name: php-remote-debugging
serviceType: deployment
containers:
  - name: ""
    dev:
        ...
        command:
          debug:
            - ./debug.sh
        debug:
          remoteDebugPort: 9003
        ...
```

```yaml title="debug.sh"

#！/bin/sh

php -t ./ -S 0.0.0.0:9999;

```

**How does it works?**

Nocalhost using Xdebug to debug PHP applications.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/debug/php-debug.jpg')} />
  <figcaption>Principle of Remote PHP Debugging</figcaption>
</figure>

</TabItem>

<TabItem value="node">

```yaml {8,11} title="Nocalhost Configs"
name: nodejs-remote-debugging
serviceType: deployment
containers:
  - name: ""
    dev:
        ...
        command:
          debug:
            - ./debug.sh
        debug:
          remoteDebugPort: 9229
        ...
```

```yaml title="debug.sh"

#！/bin/sh

npm install
node --inspect=0.0.0.0:9229 ./index.js

```

</TabItem>
</Tabs>
