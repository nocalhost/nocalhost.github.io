---
title: portForward
---

# Configure Port-Forwarding



There are two port-forward configurations

#### Automatically Port-Forward after Application Deployment

After the application is successfully installed, Nocalhost will automatically forwarded the remote port to the local port, and then can quickly access remote running result through the local port. The configuration format is `local port: remote port`, for example:

```yml {5}

...
  containers:
    - name: productpage
      install: 
        portForward:   
          - 39080:9080

```

#### Automatically Port-Forward when Entered DevMode

After entering the DevMode,  Nocalhost will automatically forwarded the remote port to the local port, and then can quickly access remote running result through the local port. The configuration format is `local port: remote port`, for example:

```yml {4}

containers:
...
      portForward:
        - 39080:9080

```
It is also possible to support not specifying the local port, such as `:10000`. Nocalhost will randomly forward the designated remote port to a local port.

:::tip "More Configuration Information"

Please refer to [Nocalhost Configuration](../reference/nh-config) for more detailed configuration of Nocalhost.

:::