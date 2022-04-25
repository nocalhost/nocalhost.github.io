---
title: Isolated DevSpace
---

DevSpace is a concept in Nocalhost, which represents a pre-allocated cloud develop space. A DevSpace has a certain amount of computing resources, in which developers could deploy, uninstall, develop and debug apps.

A DevSpace is corresponding to a Kubernetes namespace. Isolated DevSpace means every DevSpace is isolated from other ones. So apps in one DevSpace could only see the resources in that particular DevSpace.

## Create Isolated DevSpace

Select the DevSpace sidebar. Click `Create DevSpace` button. Select `Create DevSpace` in the pop-up dialog box.

![image.png](/img/server-ks/nh-devspace-create.png)
![image.png](/img/server-ks/nh-devspace-create-isolated.png)

Fill your DevSpace's information in the next dialog box. Set `Space Name` to `demo`. Select the aimed Cluster and Owner. You can also change other settings like limiting the resources of the DevSpace.

![image.png](/img/server-ks/nh-devspace-config.png)

After created, you will find your DevSpace in the same page.

![image.png](/img/server-ks/nh-devspace-list.png)

Now we have created a DevSpace. We can deploy our app in it and begin to develop. However, there is only one user in this DevSpace. Usually we want more than one developer to work in a single DevSpace. So we need to share this DevSpace with other users. Select the demo DevSpace we just created. Click the edit icon in the right side to enter `Edit DevSpace` page. Select the `Shared user` tag and click `Add Share` button to continue.

![image.png](/img/server-ks/nh-devspace-share.png)

Select the `test` user account we just created and set the user's privilege as `Cooperator`. If the privilege is `Viewer`, the user wouldn't be available to change the status of the DevSpace.

![image.png](/img/server-ks/nh-devspace-share-coop.png)
