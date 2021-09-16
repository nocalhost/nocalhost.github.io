---
title: Mesh DevSpace
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Manage MeshSpace

- 基础开发空间：即隔离开发空间，但对应 K8s 命名空间带`istio-injection=enabled`标签， Istio 边车会自动注入命名空间中的 pods；命名空间中拥有一套完整服务，命名空间中的服务共享给共享开发空间

- 共享开发空间：对应一个 K8s 命名空间。基于 Istio Service Mesh，通过指定 header 路由分发来共享基础开发空间的服务

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/server/share-space.svg')} />
  <figcaption>Shared DevSpace</figcaption>
</figure>

# 使用
## 前置条件
- 集群中部署了 Istio，并且 Istio Version >= 1.8
- 应用服务可以透传指定 header （例如：Jaeger Tracer 默认透传 `uberctx-<key>`）

## 步骤

- 创建一个隔离开发空间，并打开基础`设置为基础开发空间`开关
- 在创建出来的基础开发空间部署完整的应用服务
- 创建共享开发空间
- 在共享开发空间选择需要开发的服务（服务为基础空间中的服务，选择会系统会自动复制到共享开发空间以便进行开发）
- 进行开发

# 原理

在基础开发空间中，开启了 Istio 边车自动注入，应用服务的流量被服务网格管理。在共享开发空间中选择某个基础空间中的需要开发的服务，该服务会被系统复制到共享开发空间，并且在基础开发空间中配置 Istio Virtual Service 路由规则，指定 header （header 由用户创建共享开发空间时选择系统自动生成或者自定义填写）的流量将被路由到共享开发空间中，被所开发的服务接收；所开发的服务处理完请求后发出的流量将被服务网格路由回到基础开发空间，由其它后端应用接收