import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# 安装 Nocalhost

:::tip nhctl 安装 Nocalhost IDE 插件时，插件会自动帮您安装最新版本的 **nhctl** ::: :::

## 兼容性

<table>
    <thead>
        <tr>
            <th>IDE</th>
            <th>Version</th>
            <th>Result</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>VS Code </td>
            <td>1.58.2 (Universal)</td>
            <td><strong className="pass-tag">passed</strong></td>
        </tr>
        <tr>
            <td rowspan="3" >JetBrains</td>
            <td>2021.2 - Intel and Apple Silicon</td>
            <td><strong className="pass-tag">passed</strong></td>
        </tr>
        <tr>
            <td>2021.1 - Intel and Apple Silicon</td>
            <td><strong className="pass-tag">passed</strong></td>
        </tr>
        <tr>
            <td>2020.3 - Intel and Apple Silicon</td>
            <td><strong className="pass-tag">passed</strong></td>
        </tr>
    </tbody>
</table>

## 安装 VScode 插件

<Tabs
  defaultValue="market"
  values={[
    {label: 'Install from Extension Market', value: 'market'},
 {label: 'Manual Installation', value: 'manual'},
 ]}>
<TabItem value="market">

1. 1. 打开 VScode 编辑器，然后单击左侧栏中的 <img src={useBaseUrl('/img/icons/vs-code-icon.jpg')} width="20" /> icon
2. Input `Nocalhost` in the search box
3. Select the `Nocalhost Extension`, and click the **Install** button.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/installation/vscode-market.png')} />
  <figcaption>从 VS Code 插件市场安装</figcaption>
</figure>

</TabItem>

<TabItem value="manual">

1. 1. 从 [Github 仓库](https://github.com/nocalhost/nocalhost-vscode-plugin/releases/latest)下载最新的 VS Code 插件版本
2. 打开 VScode 编辑器，然后单击左侧栏中的 Open VS Code and go to `Extensions` by click the <img src={useBaseUrl('/img/icons/vs-code-icon.jpg')} width="20" /> icon
3. Click <img src={useBaseUrl('/img/icons/cluster-action-icon.jpg')} width="20" /> 按钮, 选择 `Install from VSIX...` 后，选择刚下载的 `VSIX` 文件进行安装

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/installation/vs-manual.jpg')} />
  <figcaption>手动安装 VS Code 插件</figcaption>
</figure>

</TabItem>

</Tabs>

## 安装 JetBrains 插件

<Tabs
  defaultValue="market"
  values={[
    {label: 'Install from Extension Market', value: 'market'},
 {label: 'Manual Installation', value: 'manual'},
 ]}>
<TabItem value="market">

### Windows
    
`文件 > 设置 > 插件 > 浏览仓库... > 搜索 "Nocalhost" > 安装插件`

### MacOS

`首选项 > 设置 > 插件 > 浏览仓库... > 搜索 "Nocalhost" > 安装插件`

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/installation/jb-market.png')} />
  <figcaption>从 JetBrains 插件市场安装</figcaption>
</figure>

</TabItem>

<TabItem value="manual">

1. 1. 从我们的 [Github 仓库](https://github.com/nocalhost/nocalhost-intellij-plugin/releases/latest) 下载最新版本
2. 安装插件：<kbd>首选项</kbd> > <kbd>插件</kbd> > <kbd>从磁盘安装插件... </kbd> Install plugin: <kbd>Preferences</kbd> > <kbd>Plugins</kbd> > <kbd>Install from disk... </kbd>

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/installation/jb-manual.jpg')} />
  <figcaption>手动安装 JetBrains 插件</figcaption>
</figure>

</TabItem>

</Tabs>

## 升级插件

Nocalhost 会在 IDE 启动时自动检查并安装最新的更新。

## 卸载

在 IDE 中卸载 Nocalhost 插件

### 卸载 IDE 插件

删除根目录下的 `.nh` 文件夹

### 移除 `nhctl`

Remove the `.nh` folder in your root directory

<Tabs
  defaultValue="mac"
  values={[
    {label: 'Mac & Linux', value: 'mac'},
 {label: 'Windows', value: 'windows'}
 ]}>

<TabItem value="mac">

`.nh` 文件夹在你的 `~/` 目录中，你可以通过以下命令删除它

```bash
rm -rf .nh
```

</TabItem>

<TabItem value="windows">

`.nh` 文件夹在你的 `<ROOT PATH>/User/username/` 目录中，你可以直接删除它。
</TabItem>

</Tabs>