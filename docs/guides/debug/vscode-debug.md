import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Configuration from './_debug-configuration.md';

# VSCode Remote Debugging

## Supported Languages

| Language    | Required Plugin                                                   | Pod Required       |
| ------- | ------------------------------------------------------------ | -------------- |
| Java    | [Debugger for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug) | N/A            |
| Go      | [Go](https://marketplace.visualstudio.com/items?itemName=golang.Go) | dlv   |
| Python  | [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) | debugpy        |
| PHP     | [PHP Debug](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-debug) | xdebug         |
| Node.js | N/A                                                          | N/A            |
| Ruby    | [Ruby](https://marketplace.visualstudio.com/items?itemName=rebornix.Ruby) | ruby-debug-ide |

:::danger ISSUES

Debugging feature has issue with [Kind](https://kind.sigs.k8s.io/)

:::

### Plugin Configuration
<Tabs
  defaultValue="java"
   values={[
    {label: 'Java', value: 'java'},
    {label: 'Go', value: 'go'}
    ]}>

<TabItem value="java">

The path to the Java Development Kit can be specified by the `java.home` setting in VS Code settings (workspace/user settings). If not specified, it is searched in the following order until a JDK meets current minimum requirement.

* the `JDK_HOME` environment variable
* the `JAVA_HOME` environment variable
* on the current system path

</TabItem>
<TabItem value="go">

The extension uses a few command-line tools developed by the Go community。in particular, `go`, `gopls`, and `dlv` must be installed for this extension to work correctly. See the [tools documentation](https://github.com/golang/vscode-go/blob/master/docs/tools.md) for a complete list of tools the extension depends on.

In order to locate these command-line tools, the extension searches `GOPATH/bin` and directories specified in the `PATH` environment variable (or Path on Windows) with which the VS Code process has started. If the tools are not found, the extension will prompt you to install the missing tools and show the **"⚠️ Analysis Tools Missing"** warning in the bottom right corner. Please install them by responding to the warning notification, or by manually running the `Go: Install/Update Tools command`.

</TabItem>
</Tabs>

## Debugging Process

1. Select the workload that you want to debug
2. Right-click the workload and select  **`Dev Config`**, [configure your debugging configuration](#Configuration)
3. Then right-click this workload again and select `Remote Debug`
4. Nocalhost will automatically install the dependencies on the first debug
5. Nocalhost will automatically enter the `DevMode` and start remote debugging

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/debug/vscode-debug.gif')} />
</figure>

<Configuration name="vscode"/>

## Debugging Configurations in IDE

### VSCode debug configuration

nocalhost will automatically configure `launch.json` of `vscode` when debug is finished, next time you can launch debug directly with shortcut key **`F5`**

### Debugging parameters

debug supports custom parameters to start, you just need to add parameters under `configurations` in `launch.json`, and the plugin will pass the parameters to the debugger when debug is launched.

If you need to pass in custom environment variables when debugging a `Node.js` application, you just need to change the following configuration.

```json {8-10} title="launch.json"
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "nocalhost",
            "request": "attach",
            "name": "Nocalhost Debug",
            "env":{
                "environment":"production"
            }
        }
    ]
}
```

### Supported debugging parameters

- Java: [Debugger for Java](https://code.visualstudio.com/docs/java/java-debugging#_attach)
- Go: [Go](https://github.com/golang/vscode-go/blob/master/docs/debugging.md#attach)
- Python: [Python](https://code.visualstudio.com/docs/python/debugging#_set-configuration-options)
- PHP: [PHP Debug](https://github.com/xdebug/vscode-php-debug#supported-launchjson-settings)
- Node.js: [VSCode](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_remote-debugging)
- Ruby: [Ruby](https://github.com/rubyide/vscode-ruby/wiki/3.-Attaching-to-a-debugger)
