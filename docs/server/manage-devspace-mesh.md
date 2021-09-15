---
title: Shared DevSpace
---

# Manage ShareSpace
- 基础开发空间：对应一个 K8s 命名空间，命名空间中拥有一套完整服务，命名空间中的服务共享给共享开发空间

- 共享开发空间：对应一个 K8s 命名空间。基于 Istio Service Mesh，通过指定 header 路由分发来共享基础开发空间的服务
  ![共享开发空间](../../static/img/server/share-space.svg)

# 使用
## 前置条件
- 集群中部署了 Istio，并且 Istio Version >= 1.8
- 应用服务可以透传指定 header （例如：Jaeger Tracer 默认透传 uberctx-<key>）
