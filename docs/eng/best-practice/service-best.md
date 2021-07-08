## Service Configuration

### 1. Do Not Configure Service

**Service** 并不是必须配置的，如果您没有进行任何 **Service** 相关的配置。但想在进入开发模式前对其进行配置，Nocalhost 编辑器插件会为您自动生成一个模板文件，您需对其进行修改并保存即可。

1. 选择一个需要开发的微服务，

**Service** does not have to be configured. If you have not modify any **Service** configuration, but want to configure it before entering the DevMode, the Nocalhost IDE plugin will automatically generate a template file for you, you need to modify it and save it.

1. Select a microservice to be developed and click <img src='../../../assets/images/icons/nocalhost-config-icon.jpg' width="20" /> to configure

<center>
    <img src='../../../assets/images/best/best-service-config.png' />
</center>

### 2. Add Service Configuration

There is no intrusion to user's Kubernetes manifest configuration when using Nocalhost. If you need to configure **Service**, please add a `.nocalhost/` folder under your repository and add a [config.yaml](../../references/nh-config-spec) file. Then you can make changes locally through the IDE, **These changes only take effect locally**.

For example, our sample application **bookinfo** has the following configuration for **Service** of **productpage**:

```yml
- name: productpage
  serviceType: deployment
  dependLabelSelector: 
    jobs:
      - "dep-job"
  containers:
    - name: productpage
      install: 
        portForward:   
          - 39080:9080
      dev:
        gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-productpage.git
        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage
        shell: bash
        workDir: /home/nocalhost-dev
        sync: 
          type: send
          filePattern: 
            - ./
          ignoreFilePattern:
            - ".git"
            - ".github"
            - ".idea"
        portForward:
        - 39080:9080
```

When the user successfully deploys the application, Nocalhost can automatically read these default configurations and automatically apply them to the deployment and DevMode.

## How Service Supports DevMode

We use the following **productpage** configuration of this microservice as an example to illustrate several key configuration items that **Service** supports **development mode**:

```yml
- name: productpage
  serviceType: deployment
  dependLabelSelector: 
    jobs:
      - "dep-job"
  containers:
    - name: productpage
      install: 
        portForward:   
          - 39080:9080
      dev:
        gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-productpage.git
        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage
        shell: bash
        workDir: /home/nocalhost-dev
        sync: 
          type: send
          filePattern: 
            - ./
          ignoreFilePattern:
            - ".git"
            - ".github"
            - ".idea"
        portForward:
        - 39080:9080
```

### name and serviceType

When you want to use **Service**, `name` and `serviceType` are **required items**, used to locate a manifest, currently Nocalhost only supports **Deployment** a `serviceType`.

In the above example, the `serviceType` of **productpage** is **Deployment**:

```yml hl_lines="2"
- name: productpage
  serviceType: deployment
```

### gitUrl

It is used to indicate the source code repo url corresponding to this microservice. When entering the **DevMode**, you can choose to synchronize a local directory to the development container, or you can choose to pull it from a remote warehouse.

If you have configured `gitUrl` when entering **DevMode**, Nocalhost will automatically clone the codes from this `gitUrl` for you. For example:

```yml hl_lines="4"
containers:
...
    dev:
      gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-productpage.git
...
```

### image

You can use your own image for the container when entering DevMode, for example:

```yml hl_lines="5"
containers:
...
    dev:
      gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-productpage.git
      image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage
...
```

### workDir (Optional)

It is used to indicate the working directory in remote container after entering the DevMode and the directory where the synchronized files are stored. By default, `/home/nocalhost-dev` will be used.

```yml hl_lines="5"
containers:
...
    dev:
    ...
      workDir: /home/nocalhost-dev
    ...
...
```

### sync (Optional)

You can select a group of configuration items, choose which folders of the source directory to synchronize to the development container, the default value is `"."`. The type of file synchronization can be either `sent` one-way or `sendreceive` two-way.

```yml hl_lines="3"
containers:
...
      sync:
        type: send
        filePattern:
          - ./
        ignoreFilePattern:
          - .git
          - .github
          - .idea
...
```

### portForward

There are two port-forward configurations

#### Automatically Port-Forward after Application Deployment

After the application is successfully installed, Nocalhost will automatically forwarded the remote port to the local port, and then can quickly access remote running result through the local port. The configuration format is `local port: remote port`, for example:

```yml hl_lines="5"
...
  containers:
    - name: productpage
      install: 
        portForward:   
          - 39080:9080
```

#### Automatically Port-Forward when Entered DevMode

After entering the DevMode,  Nocalhost will automatically forwarded the remote port to the local port, and then can quickly access remote running result through the local port. The configuration format is `local port: remote port`, for example:

```yml hl_lines="4"
containers:
...
      portForward:
        - 39080:9080
```
It is also possible to support not specifying the local port, such as `:10000`. Nocalhost will randomly forward the designated remote port to a local port.

!!!tip "More Configuration Information"
     Please refer to [Nocalhost Configuration](../../references/nh-config-spec) for more detailed configuration of Nocalhost.

## Service Specify Startup Sequence Dependencies

Nocalhost supports control startup sequence based on dependencies.

!!!danger "Kubernetes version limit"
     This feature depends on Kubernetes [admission webhooks](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/), so please ensure that the minimum version of the Kubernetes cluster is v1.16.0 or Above, and make sure to enable **MutatingAdmissionWebhook** and **ValidatingAdmissionWebhook** controllers.

### dependLabelSelector

The label selector of the workload that the service depends on. There are two configuration items here:

#### pods

Specify the dependent Pods label selector (the current service will wait for the selected Pod by the label selector to be in the Ready state before starting)

For example, **productpage** depends on another Pod named **foo**, then **productpage** can be configured as follows:

```yml hl_lines="4"
- name: productpage
  serviceType: deployment
  dependLabelSelector: 
    pods:
      - "name=foo"
      - "app.kubernetes.io/name=foo"
```

#### jobs

Specify the dependent Jobs label selector (the current service will wait for the selected job by the label selector to execute before starting)

For example, **productpage** depends on another job named **bar**, then **productpage** can be configured as follows:

```yml hl_lines="4"
- name: productpage
  serviceType: deployment
  dependLabelSelector: 
    jobs:
      - "job-name=bar"
      - "app.kubernetes.io/name=bar"
```