# Hot Reload

## What is Hot-Reload?

The files you modify in the IDE will be synchronized to the remote container in real time, and your Run/Debug command will be re-executed.

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
      <td>PhpStorm</td>
      <td>Professional</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td rowSpan="2">Node.js</td>
      <td>IntelliJ IDEA</td>
      <td>Ultimate</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>WebStorm</td>
      <td>Professional</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>



## How to enable Hot-Reload?

1. Select the workload that you want to Run/Debug
2. Right-click the workload and select **`Dev Config`**, configure **`hotReload: true`**

### Sample Configuration

```yaml {15} title="Nocalhost Configs"
name: java-remote-run
serviceType: deployment
containers:
  - name: "reviews"
    dev:
        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/java:latest
        shell: bash
        workDir: /home/nocalhost-dev
        command:
          debug:
            - ./gradlew
            - bootRun
            - --debug-jvm
            - --no-daemon
        hotReload: true
        debug:
          remoteDebugPort: 5005

```
