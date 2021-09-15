---
title: Advance
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[Overview](config.md) / [Deploy Config](config-deployment.md) / [Spec](config-deployment-spec.md)
******

### 启动顺序依赖控制
范例：
```yaml

configProperties:
  version: v2

application:
  name: example
  manifestType: rawManifestGit
  resourcePath: [ "example" ]
  
  services:
    - name: whatever
      serviceType: deployment
      
      dependLabelSelector:
        pods:
          - "name=mariadb"
          - "app.kubernetes.io/name=example"
        jobs:
          - "job-name=init-job"
```

当某项资源在部署配置中声明了 `dependLabelSelector` 以后， `pods` 数组中的字符代表要等待的 pods 的 labels，格式为键值对。`jobs` 数组中的字符代表要等待的 jods 的 labels，格式为键值对。

`pods` 与 `jobs` 都为可选项。实际部署过程中，它会为指定的工作负载生成一个 `initContinaer`，等待所有匹配 label 的 pods 状态为 `Ready`，等待所有匹配 label 的 jobs 状态为 `Succeeded`。

<br/>

******

### 环境变量注入

#### 全局变量注入
范例：
```yaml

configProperties:
  version: v2

application:
  name: example
  manifestType: rawManifestGit
  resourcePath: [ "example" ]
  
  env:
    - name: DEBUG
      value: false
    - name: DOMAIN
      value: coding.net
```

全局变量注入需要声明在 `application` 这一级，在部署时，它将往所有部署的 `Deployment`、`DaemonSet`、`ReplicaSet`、`StatefulSet`、`Job`、`CronJob` 中注入对应的环境变量。

#### 服务级变量注入
范例：
```yaml

configProperties:
  version: v2

application:
  name: example
  manifestType: rawManifestGit
  resourcePath: [ "example" ]

  services:
    - name: whatever
      serviceType: deployment
      
```