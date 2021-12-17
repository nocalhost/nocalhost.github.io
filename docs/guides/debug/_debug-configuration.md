import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

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
{label: 'Ruby', value: 'ruby'},
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

For jdk <=1.7 you should replace `-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005` with `-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=y,address=5005`

For lower version of the springBoot you should replace `-Drun.jvmArguments` with `-Dspring-boot.run.jvmArguments`

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

<Tabs
defaultValue={props.name}
values={[
{label: 'VSCode', value: 'vscode'},
{label: 'Jetbrains', value: 'jetbrains'},
]}>
<TabItem value="jetbrains">

```yaml title="debug.sh"
#! /bin/sh

pip3 install --no-cache-dir -r ./requirements.txt

export DEBUG_DEV=0
export FLASK_DEBUG=0
export FLASK_ENV=development

flask run --host=0.0.0.0 --port=9999
```

</TabItem>
<TabItem value="vscode">

```yaml title="debug.sh"
#! /bin/sh

pip3 install --no-cache-dir -r ./requirements.txt

python -m debugpy --listen 9009 --wait-for-client productpage.py 9080
```

</TabItem>
</Tabs>

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

<TabItem value="ruby">

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
          remoteDebugPort: 9001
        ...
```

```yaml title="debug.sh"
#！/bin/sh

rdebug-ide -h 0.0.0.0 -p 9001 -- details.rb 9080
```

</TabItem>
</Tabs>
