# Deploy from Terminal

Nocalhost supports to use the following types to install application:

* Manifest
* Helm
* Kustomize

You can select the deployment method of matching type to deploy your application in Kubernetes in your terminal by using `nhctl`.

## Deploy by Minifest Yaml

For example, you have a git repo with address `https://<Repo URL>/foo/bar/hellowrold.git`, it has many Kubernetes manifest yaml files:

```bash
README.MD
something.java
…
foo/bar/k8s/manifests/
                 foo.yaml
                 pre-install-cm.yaml
                …
                 what/ever/
                               inner.yaml
                               …
                support/all/dir/inside/
                                            bar.yaml
                                            …
```
You only want to apply the files in the relative root directory `what/ever/` and `support/all/dir/inside/`, then use the command:

```bash {5,6}
nhctl install applicationNameFooBar \
  -u https://[gihub, Gitlab, etc... whateverRepo]/foo/bar/hellowrold.git \
  -t manifest \
  -n k8sFooNamespace \
  --resource-path what/ever/ \
  --resource-path support/all/dir/inside/ \
  --kubeconfig ~/.kube/barconfig
```

If you want to apply all files, you can use the command:

```bash {5}
nhctl install applicationNameFooBar \
  -u https://[gihub, Gitlab, etc... whateverRepo]/foo/bar/hellowrold.git \
  -t manifest \
  -n k8sFooNamespace \
  --resource-path. \
  --kubeconfig ~/.kube/barconfig
```

## Deploy by Helm

You can using existing `Helm Chart` to deploy application.

### Deploy from Remote Repo

If you have a Helm application that store in the remote repo and have access privilege, e.g.:

```bash {7}
https://[gihub, Gitlab, etc... whateverRepo]/foo/bar/hellowrold.git

Somefile.py
AClass.java
README.MD
...
mychart/example/
   Chart.yaml
   values.yaml
   charts/
   templates/
   ...
```

For this repo, we placed under `mychart/example/` directory that relative to the `root directory`, then we can execute the following command to deploy the application:

```bash
nhctl install helloworld \
   -u https://[gihub, Gitlab, etc... whateverRepo]/foo/bar/hellowrold.git \
   -t helmGit \
   -n k8sFooNamespace \
   --resource-path charts/example \
   --kubeconfig ~/.kube/barconfig
```

### Use Owned Helm Repo

If you have own Helm repo, you can use the following `nhctl` command to deploy:

```bash
nhctl install helloworld \
   --helm-chart-name mychart \
   --helm-repo-url http://mychart/charts/ \
   -n fooNamespace \
   --kubeconfig ~/.kube/barconfig
```