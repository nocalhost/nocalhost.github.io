import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Install Nocalhost

:::tip nhctl

When install Nocalhost IDE plugin, it will install the `nhctl` for you automatically.

:::

## Compatible

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

## Install VS Code Plugin

<Tabs
  defaultValue="market"
  values={[
    {label: 'Install from Extension Market', value: 'market'},
 {label: 'Manual Installation', value: 'manual'},
 ]}>
<TabItem value="market">

1. Open VS Code and go to `Extensions` by click the <img src={useBaseUrl('/img/icons/vs-code-icon.jpg')} width="20" /> icon
2. Input `Nocalhost` in the search box
3. Select the `Nocalhost Extension`, and click the **Install** button.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/installation/vscode-market.png')} />
  <figcaption>Install from VS Code extension market</figcaption>
</figure>

</TabItem>

<TabItem value="manual">

1. Download the latest version from our [Github Repo](https://github.com/nocalhost/nocalhost-vscode-plugin/releases/latest)
2. Open VS Code and go to `Extensions` by click the <img src={useBaseUrl('/img/icons/vs-code-icon.jpg')} width="20" /> icon
3. Click <img src={useBaseUrl('/img/icons/cluster-action-icon.jpg')} width="20" /> on the top right of the `Extension` list, select `Install from VSIX...`, select the `VSIX` downloaded above

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/installation/vs-manual.jpg')} />
  <figcaption>Manual installation</figcaption>
</figure>

</TabItem>

</Tabs>

## Install JetBrains Plugin

<Tabs
  defaultValue="market"
  values={[
    {label: 'Install from Extension Market', value: 'market'},
 {label: 'Manual Installation', value: 'manual'},
 ]}>
<TabItem value="market">

### Windows
    
`File > Settings > Plugins > Browse repositories... > Search for "Nocalhost" > Install Plugin`

### MacOS

`Preferences > Settings > Plugins > Browse repositories... > Search for "Nocalhost" > Install Plugin`

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/installation/jb-market.png')} />
  <figcaption>Install from JetBrains extension market</figcaption>
</figure>

</TabItem>

<TabItem value="manual">

1. Download the latest version from our [Github Repo](https://github.com/nocalhost/nocalhost-intellij-plugin/releases/latest)
2. Install plugin: <kbd>Preferences</kbd> > <kbd>Plugins</kbd> > <kbd>Install from disk... </kbd>

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/installation/jb-manual.jpg')} />
  <figcaption>Manual installation</figcaption>
</figure>

</TabItem>

</Tabs>

## Upgrade Plugin

Nocalhost will automatically check and install the latest updates when IDE starts.

## Uninstall

You can fully uninstall Nocalhost by following

### Uninstall IDE Plugin

Uninstall Nocalhost IDE plugin in your IDE

### Remove `nhctl`

Remove the `.nh` folder in your root directory

<Tabs
  defaultValue="mac"
  values={[
    {label: 'Mac & Linux', value: 'mac'},
 {label: 'Windows', value: 'windows'}
 ]}>

<TabItem value="mac">

`.nh` folder is in your `~/` directory, you can remove it by the following command

```bash
rm -rf .nh
```

</TabItem>

<TabItem value="windows">

`.nh` folder is in your `<ROOT PATH>/User/username/` directory, you can just delete it.
</TabItem>

</Tabs>