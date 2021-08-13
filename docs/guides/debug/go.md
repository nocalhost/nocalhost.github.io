---
title: Debugging Go
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Remote Debugging of Go Workload

:::note About this guide
**Gold :**  Use Nocalhost to debugging PHP application <br />
**Estimate time :** 3 minutes<br />
**Requirements :**
- GoLand installed
- Nocalhost IDE plugin installed
:::

## 1. Config Remote Debug Command and Port

1. Open GoLand and Nocalhost plugin
2. Select the workload you want to debug, right click and select `Config`
2. Configure the remote debug command and port

```yaml {5-18}
service:
  containers:
    dev:
      command:
        debug:
         - GOPROXY=https://goproxy.cn
         - dlv
         - --headless
         - --log
         - --listen
         - :2345
         - --api-version
         - "2"
         - --accept-multiclient
         - debug
         - app.go
      debug:
        remoteDebugPort: 2345
...
```

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/debug/go-debug-config.jpg')} />
  <figcaption>GoLand debug configuration</figcaption>
</figure>

## 2. Enter Development Mode

Start the development mode

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/debug/go-devmode.gif')} />
  <figcaption>Enter development mode</figcaption>
</figure>

## 3. Add Configuration

Add Nocalhost debug configuration

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/debug/go-add-config.gif')} />
  <figcaption>Add debug configuration</figcaption>
</figure>

## 4. Set Break Point and Debug

Set the break point and start debugging 

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/debug/go-break-debug.gif')} />
  <figcaption>Add break point and start debugging</figcaption>
</figure>



