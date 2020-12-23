
## Create a Quick-Experience kubernetes application ['bookinfo'](https://github.com/nocalhost/bookinfo).

This section will help you to config an application simply.



Now get into `nocalhost-web`.

> Do not know the site of nocalhost-server url? 
>
> See 'Deployment' and choose your kubernetes cluster type's deployment tutorial.



### STEP1. Create User

First switch to the tab `Users`, click `CREATE` and create a user as follow:

```
Email								:		foo@nocalhost.dev
Name								:   foo
Password            :   123456
```

This user can sign into the `Nocalhost-IDE-Plug-in` but can not sign into `Nocalhost-Server`. (default user `admin@admin.com` can also sign in both.)



### STEP2. Create Cluster

First switch to the tab `Clusters`, paste **kube admin config** by using `kubectl config view --minify --raw --flatten` and click on the `Save` button to create a `Cluster`. 

Then we can see:

| Name     | Cluster Version | NodesCount | Users Count | Creator | ...  |
| -------- | --------------- | ---------- | ----------- | ------- | ---- |
| whatever | v1.20.1         | 1          | 0           | Admin   | ...  |



### STEP3. Create Application

After creating `Cluster`, switch to another tab named `Applications`. Create an 'bookinfo' application manually by using following config:

```
Application Name								:		bookinfo
Kubernetes Manifest Source Type :		Git
Manifest Type										:   Manifest
Git Repo Url										:		https://github.com/nocalhost/bookinfo.git
Resource Dir										:		manifest/templates
```

[bookinfo](https://github.com/nocalhost/bookinfo.git) is a demo project for `nocalhost` , it contain both manifest type `Kubenetes manifests` and `helm manifests`, we use `Kubernetes manifests` and specify it's manifest resource dir `manifest/templates`.  (or you can use `Helm manifests` with resource Dir `charts/bookinfo`)

| Application Name | Kubernetes Manifest Source Type | Creator | ...  |
| ---------------- | ------------------------------- | ------- | ---- |
| bookinfo         | Git                             | Admin   | ...  |



### STEP4. Create devSpace for User

At last, click the button `CREATE SPACE` on the far right of the application list.



Choose a `Cluster` created before to create a `DevSpace` for this `Application` and specify it's owner `foo`

| Status | Owner | Namespace | Created At          | Cluster  | ...  |
| ------ | ----- | --------- | ------------------- | -------- | ---- |
|        | Foo   | Nh1hsbq   | 2020-12-11 00:00:00 | Whatever | ...  |



Then `nocalhost` use `kubenetes config` from `Cluster` to create a `kubernates namespace`. This namespace use for installing application when develop on `Nocalhost-Plug-In`.
