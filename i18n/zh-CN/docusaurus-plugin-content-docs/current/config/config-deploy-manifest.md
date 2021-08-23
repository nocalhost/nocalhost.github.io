---
title: manifests
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Deploy Kubernetes Manifest

To deploy Kubernetes manifest with Nocalhost, you need to configure them within the application section of the `.nocalhost/config.yaml`.

:::info No need for kubectl You do not need to install `kubectl`, Nocalhost can deploy Kubernetes manifest. ::: :::

## Example

<Tabs
  defaultValue="local"
  values={[
    {label: 'From Local Directory', value: 'local'},
 {label: 'From Git Repo', value: 'git'},
 ]}>
<TabItem value="local">

Deploy Kubernetes manifest from local directory.

Deploy Kubernetes manifest from local directory.

```yaml
configProperties:                       # struct    | required | Specify config properties
    version: v2 

application:
  name: bookinfo                        # string    | required | Application name
  manifestType: rawManifestLocal        # string    | required | Application k8s manifest type
  resourcePath: ["manifest/templates"]  # string[]  | required | Set the application resource path
```

</TabItem>

<TabItem value="git">

Deploy Kubernetes manifest from Git repository.

```yaml
configProperties:                       # struct    | required | Specify config properties
    version: v2 

application:
  name: bookinfo                        # string    | required | Application name
  manifestType: rawManifestGit          # string    | required | Application k8s manifest type
  resourcePath: ["manifest/templates"]  # string[]  | required | Set the application resource path
```

```yaml
configProperties:                       # struct    | required | Specify config properties
    version: v2 

application:
  name: bookinfo                        # string    | required | Application name
  manifestType: rawManifestGit          # string    | required | Application k8s manifest type
  resourcePath: ["manifest/templates"]  # string[]  | required | Set the application resource path
```

</TabItem>
</Tabs>

After configure the `config.yaml`, you can [deploy the application in IDE](../guides/deploy/deploy-by-ide)