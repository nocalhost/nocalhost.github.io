import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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

## Debugging Process

1. Select the workload that you want to debug
2. Right-click the workload and select  **`Dev Config`**, [configure your debugging configuration](#Configuration)
3. Then right-click this workload again and select `Remote Debug`
4. Nocalhost detects dependent plugins and installs them automatically
5. Nocalhost will automatically enter the `DevMode` and start remote debugging

### Plugin Configuration
<Tabs
  defaultValue="java"
   values={[
    {label: 'Java', value: 'java'},
    {label: 'Go', value: 'go'}
    ]}>

<TabItem value="java">

Java remote debugging relies on `JDWP` of `jdk`,The path to the Java Development Kit can be specified by the `java.home` setting in VS Code settings (workspace/user settings). If not specified, it is searched in the following order until a JDK meets current minimum requirement.

* the `JDK_HOME` environment variable
* the `JAVA_HOME` environment variable
* on the current system path

</TabItem>
<TabItem value="go">

Go remote debugging relies on the uses a few command-line tools developed by the Go community。n particular, `go`, `gopls`, and `dlv` must be installed for this extension to work correctly. See the [tools documentation]((https://github.com/golang/vscode-go/blob/master/docs/tools.md)) for a complete list of tools the extension depends on.

In order to locate these command-line tools, the extension searches `GOPATH/bin` and directories specified in the `PATH` environment variable (or Path on Windows) with which the VS Code process has started. If the tools are not found, the extension will prompt you to install the missing tools and show the "⚠️ Analysis Tools Missing" warning in the bottom right corner. Please install them by responding to the warning notification, or by manually running the `Go: Install/Update Tools command`.

</TabItem>
</Tabs>

<Configuration name="vscode"/>

## Debugging Configurations in IDE

### Configuring debugging
The vscode `launch.json` will be automatically configured in the source directory after the debug is finishe,the debugging is then started directly with the shortcut **`F5`**

```json title="launch.json"
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "nocalhost",
            "request": "attach",
            "name": "Nocalhost Debug"
        }
    ]
}
```

### Configure start-up parameters

nocalhost 支持debug时传入自定义参数