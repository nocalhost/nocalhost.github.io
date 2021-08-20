---
title: Debugging Python
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Remote Debugging of Python Workload

:::note About this guide
**Gold :**  Use Nocalhost to debugging Python application <br />
**Estimate time :** 3 minutes<br />
**Requirements :**
- PyCharm installed
- Nocalhost IDE plugin installed
:::

## 1. Config Remote Debug Command and Port

1. Open PyCharm and Nocalhost plugin
2. Select the workload you want to debug, right click and select `Config`
2. Configure the remote debug command and port

```yaml {5-8}
service:
  containers:
    dev:
      command:
        debug:
        - ./debug.sh
      debug:
        remoteDebugPort: 9004
...
```

```yaml title="debug.sh"
#! /bin/sh

export DEBUG_ENV=1
export FLASK_DEBUG=0
export FLASK_ENV=development

flask run --host=0.0.0.0 --port=9999
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

## How it Works?

Nocalhost using pydevd to debug Python application.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/debug/python-debug.jpg')} />
  <figcaption>Principle of Remote Python Debugging</figcaption>
</figure>

