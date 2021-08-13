---
title: Log Viewer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# View Logs

Nocalhost comes with a built-in log viewer, to helps you to monitor and debug issues with any Kubernetes containers right within your IDE.

<Tabs
  defaultValue="vscode"
  values={[
    {label: 'VS Code', value: 'vscode'},
    {label: 'JetBrains', value: 'jb'},
  ]}>
<TabItem value="vscode">

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/plugin/vs-log-viewer.gif')} />
  <figcaption>VS Code open log viewer</figcaption>
</figure>

</TabItem>
  
<TabItem value="jb">


<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/plugin/jb-log-viewer.gif')} />
  <figcaption>VS Code open log viewer</figcaption>
</figure>

</TabItem>
</Tabs>