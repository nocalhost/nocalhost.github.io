---
title: port-forwarding
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Configure Port-Forwarding

Port-forwarding allows you to access your application on `localhost:[PORT]` by forwarding the network traffic from a localhost port to a specified port of a container.

There are two ways to configure your port-forwarding for development mode. You can either configure it by [modifying the configuration](#modifying-the-configuration) or [using the IDE plugin](#using-ide-plugin).


:::caution effect

If you change the configuration **after** entering development mode. The new configuration will only take effect next time you entering development mode. 

:::

## Modifying the Configuration

### 1. Open Nocalhost development configuration

- **JetBrains:** right-click the workload and select the **`Dev Config`** to open the configuration
- **VS Code:** select the workload and click the <img src={useBaseUrl('/img/icons/setting-normal.svg')} width="20"/> icon to open the configuration

### 2. Modify `containers[*].dev.portForward` section

Type the ports you want to forward by using the `<Local Port>:<Remote Port>` format.

When entering the development mode, Nocalhost iterates over every item the `.dev[*].portForward` array defined in the configuration and starts port-forwarding for each of the entries and the port mappings they configured in the `portForward` section.

```yaml {10-12}
name: productpage
serviceType: deployment
containers:
  - name: ""
    dev:
      gitUrl: ""
      image: ""
      shell: ""
      workDir: /home/nocalhost-dev
      portForward: 
        - 39080:9080 
        - 39580:9090
```

## Using IDE Plugin

You can easily configure the port-forwarding for a specific container within the Nocalhost IDE plugin.

:::danger Working Mode

Port-forwarding set in different modes only corresponds to the current mode only.

**Set port-forwarding before entering development mode** - Nocalhost will apply the port-forwarding to the existing running container.

**Set port-forwarding after entering development mode** - Nocalhost will apply the port-forwarding to the  development container

:::

<Tabs
  defaultValue="vs-port"
  values={[
    {label: 'Configure Port-Forwarding in VS Code', value: 'vs-port'},
    {label: 'Configure Port-Forwarding in JetBrains', value: 'jb-port'},
  ]}>
<TabItem value="vs-port">

**Start Port-Forwarding**

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/develop/vs-port-forward.gif')} />
  <figcaption>Start port-forwarding in VS Code</figcaption>
</figure>

**Stop Port-Forwarding**

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/develop/vs-stop-port-forward.gif')} />
  <figcaption>Start port-forwarding in VS Code</figcaption>
</figure>

</TabItem>
  
<TabItem value="jb-port">

**Start Port-Forwarding**

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/develop/jb-port-forward.gif')} />
  <figcaption>Start port-forwarding in JetBrains</figcaption>
</figure>

**Stop Port-Forwarding**

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/develop/jb-stop-port-forward.gif')} />
  <figcaption>Start port-forwarding in JetBrains</figcaption>
</figure>

</TabItem>
</Tabs>