---
title: Debugging PHP 
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Remote Debugging of PHP Workload

:::note About this guide
**Gold :**  Use Nocalhost to debugging PHP application <br />
**Estimate time :** 3 minutes<br />
**Requirements :**
- PhpStorm installed
- Nocalhost IDE plugin installed
:::

## 1. Config Remote Debug Command and Port

1. Open PhpStorm and Nocalhost plugin
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
        remoteDebugPort: 9003
...
```
We are using the default debug port `9003` of Xdebug.

## 2. Enter Development Mode

Start the development mode

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/debug/php-devmode.gif')} />
  <figcaption>Enter development mode</figcaption>
</figure>

## 3. Add Configuration

Add Nocalhost debug configuration

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/debug/php-add-config.gif')} />
  <figcaption>Add debug configuration</figcaption>
</figure>

## 4. Set Break Point and Debug

Set the break point and start debugging 

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/debug/php-break-debug.gif')} />
  <figcaption>Add break point and start debugging</figcaption>
</figure>

## How it Works?

Nocalhost using Xdebug to debug PHP application.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/debug/php-debug.jpg')} />
  <figcaption>Principle of Remote PHP Debugging</figcaption>
</figure>

