---
title: Manage Applications
---

Nocalhost can help us manage the apps in our DevSpace. Give the URL of your Git repository, Manifest files and config files etc. Then Members of your team could deploy that particular app conveniently.

Take our bookinfo app as an example. We will demonstrate how to manage apps in Nocalhost. Select the `Application` tab in the sidebar and click the `Add Application` button.

![image.png](/img/server-ks/nh-app-create.png)

Set `Application Name` to 'bookinfo' and continue to fill other information about it:

- Select `Git` as `Kubernetes Manifest Source Type`.
- Iput `https://github.com/nocalhost/bookinfo.git` in the `Git Repo Url` box.
- Select `Manifest type` as `Manifest`.
- Leave `location config file` blank. Nocalhost will use `config.yaml` by default.
- `dirs of manifests` should be `manifest/templates`

![image.png](/img/server-ks/nh-app-config.png)

:::tip
You can view the details of configurations by visiting the Github repository of [bookinfo](https://github.com/nocalhost/bookinfo/)
:::

### Deploy bookinfo app

Open the control panel of Nocalhost plug-in of VS code. Click `Connect to Nocalhost Server` button. If you have followed our previous tutorial, the address of Nocalhost should be `http://localhost:8080`, and use the account we created before. It's e-mail address is `test@test.com` and password is `123456`. Fill all these items and click `Sign In` button.

![image.png](/img/server-ks/vsc-nocalhost-server-add.png)

You will see the `demo(nh1btih)` isolated DevSpace that we created before.

![image.png](/img/server-ks/vsc-nocalhost-server-list.png)

Click the rocket icon of `demo` DevSpace and you will see the `bookinfo` app in the app list that loaded on the top area of VS code. That app is the one we added in the previous steps.

![image.png](/img/server-ks/vsc-nocalhost-app-deploy.png) 

Select that app. The deployment process will be started automatically by Nocalhost(Just use the default branch). After the deployment process you will see the following logs and pop-up notification.

![image.png](/img/server-ks/vsc-nocalhost-app-deployed.png)

You can also expand the `Workload` in Nocalhost control panel to see the details of bookinfo app.

![image.png](/img/server-ks/vsc-nocalhost-workload.png)

Then you can develop this bookinfo app like the conventional way of Nocalhost [Enter Development Mode](https://nocalhost.dev/docs/quick-start/#3-enter-development-mode). Enjoy the convenience of Nocalhost!