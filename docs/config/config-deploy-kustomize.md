---
title: kustomize
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Deploy Kustomizations

To deploy Kustomize with Nocalhost, you need to configure them within the application section of the .`nocalhost/config.yaml`.

:::info No need for kubectl

You do not need to install `kubectl`, Nocalhost can deploy Kustomize.

:::

## Example

<Tabs
  defaultValue="local"
  values={[
    {label: 'From Local Directory', value: 'local'},
    {label: 'From Git Repo', value: 'git'},
  ]}>
<TabItem value="local">

Deploy Kubernetes manifest from local directory.

```yaml

configProperties:                       # struct    | required | Specify config properties
    version: v2 

application:
  name: bookinfo                        # string    | required | Application name
  manifestType: kustomizeLocal          # string    | required | Application k8s manifest type
  resourcePath: ["kustomize/base"]      # string[]  | required | Set the application resource path

```

</TabItem>
  
<TabItem value="git">

Deploy Kubernetes manifest from Git repository.

```yaml

configProperties:                       # struct    | required | Specify config properties
    version: v2 

application:
  name: bookinfo                        # string    | required | Application name
  manifestType: kustomizeGit            # string    | required | Application k8s manifest type
  resourcePath: ["kustomize/base"]      # string[]  | required | Set the application resource path
  
```

</TabItem>
</Tabs>

After configure the `config.yaml`, you can [deploy the application in IDE](../guides/deploy/deploy-by-ide)