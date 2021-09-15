---
title: helm
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Deploy Helm Charts

To deploy Helm charts, you need to configure them within the `application` section of the `.nocalhost/config.yaml`.

## Example

<Tabs
  defaultValue="helmLocal"
  values={[
    {label: 'From Local Directory', value: 'helmLocal'},
    {label: 'From Git Repo', value: 'helmGit'},
    {label: 'From Helm Repo', value: 'helmRepo'}
  ]}>
<TabItem value="helmLocal">

Deploy Helm chart from local directory.

```yaml

configProperties:                       # struct    | required | Specify config properties
    version: v2 

application:
  name: bookinfo                        # string    | required | Application name
  manifestType: helmLocal               # string    | required | Application k8s manifest type
  resourcePath: ["charts/bookinfo"]     # string[]  | required | Set the application resource path
  helmValues: []                        # struct    | optional | Overwrite helm values.yaml

```

</TabItem>
  
<TabItem value="helmGit">

Deploy Helm chart from Git repository.

```yaml

configProperties:                       # struct    | required | Specify config properties
    version: v2 

application:
  name: bookinfo                        # string    | required | Application name                 
  manifestType: helmGit                 # string    | required | Application k8s manifest type                           
  resourcePath: ["charts/bookinfo"]     # string[]  | required | Set the application resource path
  helmValues: []                        # struct    | optional | Overwrite helm values.yaml      

```
</TabItem>


<TabItem value="helmRepo">

Deploy from Helm repository. This deployment method only supports with **Nocalhost Server**, refer to [Manager applications with Nocalhost Server](../server/manage-app)

```yaml

configProperties:                       # struct    | required | Specify config properties
    version: v2 

application:
  name: bookinfo                        # string    | required | Application name
  manifestType: helmRepo                # string    | required | Application k8s manifest type
  helmValues: []                        # struct    | optional | Overwrite helm values.yaml
  helmVersion:    0.0.1                 # string    | optional | Set default application version

```

</TabItem>
</Tabs>


### Helm Version

`application[*].helmVersion`

Specify the application version in the Helm repository. This only corresponds to `manifestType: helmRepo`

#### Example: Setting up application version

```yaml

manifestType:   helmRepo
helmVersion:    0.0.1       

```

### Overwrite Helm Values

`application[*].helmValues`

The `helmValues` option expects an object with values that should be overriding the default values of this Helm chart.

#### Example: Using values

```yaml

helmValues:
  - key: DOMAIN
    value: ${DOMAIN:-www.coding.com}
  - key: DEBUG
    value: ${DEBUG:-true}
    
```