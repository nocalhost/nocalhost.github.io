---
title: Debugging Java
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Remote Debugging of Python Workload

:::note About this guide
**Gold :**  Use Nocalhost to debugging Java application <br />
**Estimate time :** 3 minutes<br />
**Requirements :**
- IDEA installed
- Nocalhost IDE plugin installed
:::

## 1. Config Remote Debug Command and Port

1. Open IDEA and Nocalhost plugin
2. Select the workload you want to debug, right click and select `Config`
2. Configure the remote debug command and port

```yaml
```

## 2. Enter Development Mode

Start the development mode

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/debug/python-devmode.gif')} />
  <figcaption>Enter development mode</figcaption>
</figure>

## 3. Add Configuration

Add Nocalhost debug configuration, enter the same port number with your `remoteDebugPort` above.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/debug/python-add-config.gif')} />
  <figcaption>Add debug configuration</figcaption>
</figure>

## 4. Set Break Point and Debug

Set the break point and start debugging 

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/debug/python-break-debug.gif')} />
  <figcaption>Add break point and start debugging</figcaption>
</figure>

