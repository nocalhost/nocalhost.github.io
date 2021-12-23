---
title: Quick Start
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem'; import useBaseUrl from '@docusaurus/useBaseUrl';

[Overview](config-en.md) / [Deploy Config](config-deployment-en.md) / [Quick Start](config-deployment-quickstart.md)

<br/>

#Deploy Config ——— Nocalhost Basic Deployment Configuration 

You can configure the appropriate deployment method to deploy your K8s applications by Nocalhost IDE plug-in. Nocalhost supports the following types to deploy applications:

- RawManifest
- Helm
- Kustomize

<br/>

******

## Deploy Config Structure

[Dev Config](config-overview-en.md) is a part of Deploy Config. The simplest structure of Deploy Config is as follows:

```yaml
application:
  name: ""
  manifestType: ""
  resourcePath: []
```

`application` includes the application name, application type and the resource array.

- Application name will be displayed in Nocalhost plug-in. If the application type is Helm, it will be of the form  `Release.Name`.
- Applications are generally divided into three types, RawManifest, Helm and Kustomize. The deployment methods are different for different types, which is why it is necessary to distinguish types.
- The last one is the resource path, which contains the paths of all the resources to be deployed.

<br/>


:::danger Deployment configuration is usually declared through `config.yaml`

The name of Deploy Config is normally `config.yaml`, which is also the recommended name, but it is ok to use other names.

`config.yaml` has to be placed in the `.nocalhost` folder in git root directory.

```dotenv
├── .nocalhost
│   └── config.yaml
└── YourManifests
...
```

:::

<br/>

******

## A Quick start for Deploy Config

We use `bookinfo` as an example here to introduce Deploy Config of Nocalhost.

<br/>

### RawManifest Minimized Configuration

The following is an actual Nocalhost Deploy Config, indicating that this is a RawManifest application, resourcePath contains all resource paths, when deployed, they will be applied to the api server through `kubectl apply`.

```yaml
application:
  name: bookinfo
  manifestType: rawManifestGit
  resourcePath: [ "manifest/templates" ]
```

The directories are as follows, `.nocalhost` folder is created in the root directory, and `config.yaml` file is under the folder.

```shell
├── .nocalhost
│   └── config.yaml
└── manifest
    └── templates
        ├── authors.yaml
        ├── bookinfo
        │   └── dep-job.yaml
        ├── detail.yaml
        ├── pre-install
        │   ├── print-num-job-01.yaml
        │   └── print-num-job-02.yaml
        ├── pre-install-cm.yaml
        ├── productpage
        │   └── productpage.yaml
        ├── ratings.yaml
        └── reviews.yaml
```

<span id="deploy"></span>

:::tip Use the following commands to experience.

```shell
git clone https://github.com/nocalhost/bookinfo && git checkout manifest/config/example
```

:::

<br/>

#### Deploy the application by Nocalhost plug-in

You can right-click any `namespace` on Nocalhost plug-in, then click `Deploy Application` and select `clone from git`. Enter `https://github.com/nocalhost/bookinfo` to Git URL column and `manifest/config/example` to the branch column.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/config/deploy-config-install-manifest.png')} />
</figure>
<br/>

Nocalhost will deploy this RawManifest application after you click OK. Now, you can find `bookinfo` under  `namespace`.

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/config/deploy-config-install-manifest-success.png')} />
</figure>
<br/>

#### Customize resourcePath and ignoredPath

`resourcePath` is an array used to specify the RawManifest files to be deployed. For example, for the above application, if you only want to apply `*job*.yaml`, you can change the configuration as follows.

```yaml
application:
  name: bookinfo
  manifestType: rawManifestGit
  resourcePath: [ "manifest/templates/pre-install" ]
```

<br/>

Moreover, Deploy Config also supports setting `ignoredPath`. For example, for the above application, if you only want to apply all manifest without `*job*.yaml`, you can change the configuration as follows.

```yaml
application:
  name: bookinfo
  manifestType: rawManifestGit
  resourcePath: [ "manifest/templates" ]
  ignorePath: [ "manifest/templates/pre-install" ]
```

<br/>

### Kustomize Minimized Configuration

Just like RawManifest, `config.yaml` for Kustomize type is as follows. It indicates that this is a Kustomize application named `bookinfo-kustomize` and `resourcePath` is the directory corresponding to `kubectl apply -k`.

```shell
application:
  name: bookinfo-kustomize
  manifestType: kustomizeGit
  resourcePath: ["kustomize/base"]
```

该项目的目录结构如下，`kustomize/base` 对应到 `kustomization.yaml` 所在的相对目录：

Its directory structure is as follows, and `kustomize/base` corresponds to the directory containing `kustomization.yaml`.

```shell
├── .nocalhost
│   └── config.yaml
└── kustomize
    └── base
        ├── authors.yaml
        ├── dep-job.yaml
        ├── detail.yaml
        ├── kustomization.yaml
        ├── pre-install
        │   ├── print-num-job-01.yaml
        │   └── print-num-job-02.yaml
        ├── pre-install-cm.yaml
        ├── productpage.yaml
        ├── ratings.yaml
        └── reviews.yaml
```

<br/>

:::tip Use the following commands to experience.

```shell
git clone https://github.com/nocalhost/bookinfo && git checkout kustomize/config/example
```

:::

<br/>

:::info Deploy this application by Nocalhost plug-in

You can follow the above instructions in **[Deploy the application by Nocalhost plug-in](#deploy)** and enter `kustomize/config/example` to the branch column.

:::

<br/>

### Helm Minimized Configuration

Like Kustomize,  `config.yaml` for Helm type is as follows. It indicates that this is a Helm application named `bookinfo-helm` and its `resourcePath` is the directory corresponding to `helm install` .

```shell
application:
  name: bookinfo-helm
  manifestType: helmGit
  resourcePath: ["charts/bookinfo"]
```

Its directory structure is as follows, and `charts/bookinfo` corresponds to the directory containing `Chart.yaml`.

```shell
├── .nocalhost
│   └── config.yaml
└── charts
    └── bookinfo
        ├── Chart.yaml
        ├── README.md
        ├── templates
        │   ├── _helpers.tpl
        │   ├── dep-job.yaml
        │   ├── microservice-authors.yaml
        │   ├── microservice-details.yaml
        │   ├── microservice-productpage.yaml
        │   ├── microservice-ratings.yaml
        │   └── microservice-reviews.yaml
        ├── values.yaml
        └── values_example.yaml
```

<br/>

:::tip Use the following commands to experience.

```shell
git clone https://github.com/nocalhost/bookinfo && git checkout helm/config/example
```

:::

<br/>

:::info Deploy this application by Nocalhost plug-in

You can follow the above instructions in **[Deploy the application by Nocalhost plug-in](#deploy)** and enter  `helm/config/example` to the branch column.

:::

<br/>

******

## Pre-Configure Dev Config in Deploy Config

:::info

Please note that we assume that you have already known Dev Config before reading this section.

:::

Dev Config can be embedded in Deploy Config. That brings a benefit that Nocalhost configuration would be contained in the application deployment process, which eliminates the repeated configuration work in the new environment. There is no conflict here, because it is equivalent to automatically associating Dev Config with the service after the application is deployed.

<br/>

### Example

The bookinfo application we used above has several workloads which are deployment type. Now, let us configure them as follows.

Apart from the above minimized configurations, we introduce an array named services, in which the elements are **[Dev Config](config-spec-en.md)** .

```yaml
application:
  name: bookinfo
  manifestType: rawManifestGit
  resourcePath: [ "manifest/templates" ]
  
  services:
    - name: productpage
      serviceType: deployment
      containers:
        - name: productpage
          dev:
            gitUrl: https://e.coding.net/nocalhost/nocalhost/bookinfo-productpage.git
            image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage-with-pydevd
            shell: bash
            workDir: /home/nocalhost-dev
            command:
              run:
                - ./run.sh
              debug:
                - ./debug.sh
            debug:
              remoteDebugPort: 9009
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
            resources:
              limits:
                cpu: "1"
                memory: 1Gi
              requests:
                cpu: "0.5"
                memory: 512Mi
                
    - name: details
      serviceType: deployment
      containers:
        - dev:
            gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git
            image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/ruby:2.7.1-slim
            shell: bash
            workDir: /home/nocalhost-dev
            sync: 
              type: send
              filePattern: 
                - ./
              ignoreFilePattern:
                - ".git"
                - ".github"
            env: 
            - name: DEBUG
              value: "true"
```

<br/>

:::tip Use the QuickStart sample to experience

The **[demo application](../guides/deploy/deploy-demo.md)** embeds Dev Config in Deploy Config.

After deploying demo application, just right-click a workload under this application, such as `Deployment / details`. You will find that it has been configured with a series of development configurations in advance, so you can directly enter the Dev Mode based on them.

:::
