---
title: Mesh DevSpace
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Manage MeshSpace

- **BaseSpace:** Isolated DevSpace, corresponding to the Kubernetes namespace with the `istio-injection=enabled` label, the Istio sidecar will automatically inject to it. There is a complete set of services in the namespace, and these services are shared with the MeshSpace.

- **MeshSpace:** Corresponding to a Kubernetes namespace, which based on Istio Service Mesh. Share the services of the BaseSpace by specifying header routing and distribution.


<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/server/share-space.svg')} />
</figure>

# How to use?

## Prerequisites

- [Istio 1.8+](https://istio.io/) has deployed in the cluster
- Application services can transparently transmit the specified header (for example: Jaeger Tracer transparently transmits `uberctx-<key>` by default)

## Steps

1. Create an isolated DevSpace and turn on the `Set as base DevSpace` switch
2. Deploy application services in the created **BaseSpace**
3. Create a **MeshSpace**
4. Select the service to be developed in the **MeshSpace** (services are the services in the **BaseSpace**, and the selection will be automatically copied to the **MeshSpace** for development by the system)
- Start the development

# How it works?

In the BaseSpace, Istio sidecar automatic injection is enabled, and the traffic of application services is managed by the service mesh.

In the MeshSpace, select the service that needs to be developed in a certain BaseSpace, and this service will be copied to the MeshSpace by the system, and configure the `Istio Virtual Service` routing rules in the BashSpace. The traffic with the specified header will be routed to the MeshSpace and received by the developed service (The header is automatically generated by the system or configure by custom when the user creates the MeshSpace).

After the developed service has processed the request, the traffic sent out will be routed back to the BaseSpace by the service mesh and received by other back-end applications.
