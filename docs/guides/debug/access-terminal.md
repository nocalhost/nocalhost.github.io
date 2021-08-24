---
title: Access Terminal
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Access Container's Terminal

Nocalhost provides two modes to access the terminal of a target container.

- **Open Remote Terminal:** access container's terminal right within IDE's build-in terminal.
- **Copy Terminal Exec Command:** Nocalhost will copy the execution command of remote terminal, you can paste this command in any terminal tools, run it then access to container's terminal.

## VS Code

<Tabs
  defaultValue="open"
  values={[
    {label: 'Open Remote Terminal', value: 'open'},
    {label: 'Copy Terminal Exec Command', value: 'copy'},
  ]}>
<TabItem value="open">

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/plugin/vs-terminal.gif')} />
  <figcaption>Open terminal within VS Code</figcaption>
</figure>

</TabItem>
  
<TabItem value="copy">

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/plugin/vs-terminal-exec.gif')} />
  <figcaption>VS Code copy terminal exec command and run in other terminal</figcaption>
</figure>

</TabItem>
</Tabs>

## JetBrains

<Tabs
  defaultValue="jb-open"
  values={[
    {label: 'Open Remote Terminal', value: 'jb-open'},
    {label: 'Copy Terminal Exec Command', value: 'jb-copy'},
  ]}>
<TabItem value="jb-open">

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/plugin/jb-terminal.gif')} />
  <figcaption>Open terminal in JetBrains</figcaption>
</figure>

</TabItem>
  
<TabItem value="jb-copy">

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/plugin/jb-terminal-exec.gif')} />
  <figcaption>Open terminal in JetBrains</figcaption>
</figure>

</TabItem>
</Tabs>