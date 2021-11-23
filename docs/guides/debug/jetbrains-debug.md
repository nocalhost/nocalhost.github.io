import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Configuration from './_debug-configuration.md';

# Jetbrains Remote Debugging

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

<Configuration name="jetbrains"/>
