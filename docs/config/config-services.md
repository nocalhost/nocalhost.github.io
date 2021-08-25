# Config services

`services` gives you the options to configure the Kubernetes workloads for better deployment and development experiences.

You can configure single or multiple workloads in a single configuration which depends on your [application](./config-ref#application) design. 

For example:

```yaml

applications:
    name: K8s-app
    ...
    services:
    - name: deployment-workload
      serviceType: deployment
        dependLabelSelector:
          pods: []
          jobs:
            - dep-job
        containers: ...
    - name: statefulset-workload
      serviceType: statefulset
        dependLabelSelector:
          pods: []
          jobs:
            - dep-job
        containers: ...

```

## How does it work?

Each entry you configure under `application[*].services` will tell Nocalhost to search for the corresponding workload and configure it. If Nocalhost finds a workload to configure, it will apply the given configurations.

## Workload Selection

The following config options are needed to determine the workload to be configured:

- [`name`](#servicesname)
- [`serviceType`](#servicesservicetype)

### `services[*].name`

Nocalhost uses the `name` as a **unique** identifier to match a corresponding Kubernetes workload. The `name` option expects a string that specifies a workload name to select a target workload. 

```yaml {2,4}
services:
  - name: foo-workload-01
  ...
  - name: foo-workload-02
  ...

```

### `services[*].serviceType`

Kubernetes workload type, Nocalhost currently supports all Kubernetes workloads types. 

```yaml {3}
services:
    - name: deployment-workload
        serviceType: deployment
        ...

```

- [Read more to learn Kubernetes workload](https://kubernetes.io/docs/concepts/workloads/)
- [Read more to learn how Nocalhost DevMode support different workloads](./config-dev-workload)

## `services[*].dependLabelSelector`

Nocalhost can control the startup sequence of multiple workloads within an application. This is especially useful if:

- Workload is dependent on other workloads or services

:::danger Required Kubernetes 1.16.0+ 

This feature depends on Kubernetes [admission webhooks](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/), so please ensure that the minimum version of the Kubernetes is v1.16.0 or Above, and make sure to enable **MutatingAdmissionWebhook** and **ValidatingAdmissionWebhook** controllers.

:::

:::caution required nocalhost-dep

You need to install  `nocalhost-dep` for this configuration to take effect. Please refer to [Nocalhost Dep](../server/nh-dep) for more details.

:::

#### Example: Setting up start dependencies

```yml {4}
services:
  - name: foo-app                   # string    | required | Name of workload
    serviceType: deployment         # string    | required | The Kubernetes workloads type
    dependLabelSelector:
      pods:                         # string[]  | optional | Dependent Pods label selector
        - A-Pod
        - B-Pod
      jobs:                         # string[]  | optional | Dependent Jobs label selector
        - "name=foo-db"

```

**Explanation:**

- Nocalhost will continuously monitor the status of the `A-Pod`, `B-Pod` and `foo-db` 
- Once these pods and job become available, Nocalhost will start the deployment `foo-app`

## `services[*].containers`

Whether your workload is a single component or several that work together, on Kubernetes you run it inside a set of [pods](https://kubernetes.io/docs/concepts/workloads/pods). In Kubernetes, a `Pod` represents a set of running containers on your cluster. 

Nocalhost give you the options to configure these containers before deploying and developing.

```yaml

services:
    - name: foo-workload
      ...
      containers:
        - name: container-0
            ...
        - name: container-1
            ...
        - name: container-2
            ...

```

### `container[*].name` 

Nocalhost use container `name` as **unique** identifier to determine the container to be configured. You can define more than one container with a workload in `services[*].containers`.

#### Example: Configure containers

```yaml {6,14}
services:
    - name: foo-workload
      serviceType: deployment
      ...
      container:
        - name: product
            install:                # struct  | optional | Installation parameters
              env: []
              envFrom:
                envFile: []
              portForward:
                - 39080:9080
            dev: ...                # struct  | optional | Development parameters
        - name: supermarket
            install:
                env: []
                envForm: ...
                protForward:
                    - 38080:9080
            dev: ...

```

### `containers[*].install`

You can configure the installation of the container. Nocalhost supports the following installation configuration for the container. 

- [Inject Environment](#inject-environment-variable-to-containers)
- [Port-Forwarding](#setting-up-port-forwarding)

#### Inject Environment Variable to Containers

Nocalhost supports injecting the preset environment variables to the container when deploying the workload. You can inject these variables by input the values or import the file.

:::caution nocalhost-dep Needed

You need to install `nocalhost-dep` for this configuration to take effect. Please refer to [Nocalhost Dep](../server/nh-dep) for more details.

:::

##### Example: Inject environment variable

<Tabs
  defaultValue="c-value"
  values={[
    {label: 'Inject By Values', value: 'c-value'},
    {label: 'Inject By Files', value: 'c-file'},
  ]}>
<TabItem value="c-value">

`container[*].install.env # optional`

```yml

containers:
  - name: container-01
    ...
    install:
      env: 
        - name: DEBUG
          value: ${DEBUG:-true}
        - name: DOMAIN
          value: "www.coding.com"

```

</TabItem>
  
<TabItem value="c-file">

`container[*].install.envFrom # optional`

```yml

containers:
  - name: container-01
    ...
    install:
      envFrom: 
        envFile: 
          - path: dev.env
          - path: dev.env

```

</TabItem>
</Tabs>

**Explanation:**

- These variables will be injected into container when deploying
- These variables will take effect after the deployment occurs

:::info Duplicate Configs

If both `env` and `envFrom` configure together, Nocalhost will merge the configurations, and the duplicate parts are subject to `env` configs.

:::

#### Setting up Port-Forwarding

`container[*].install.portForward`

Port-forwarding allows you to access your container on `localhost:[PORT]` by forwarding the network traffic from a localhost port to a specified port of a container.

When container has deployed, Nocalhost starts port-forwarding as configured in the `install.port` section. 

##### Example

```yaml

containers:
  - name: container-01
    ...
    install:
      portForward: 
        - 9883:3306       # string[]  |  optional  | Ports to be forwarded to local when container has been deployed
        - 9884:3307
        
```

- Using `Local Port : Remote Port` format
- Can setup multi port-forward

### `containers[*].dev`

You can configure the container before entering development. [Learn more about how to configure development mode](../config/config-dev#example)
