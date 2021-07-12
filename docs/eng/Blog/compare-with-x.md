# Nocalhsot vs X

It is difficult to compare the differences between different software, especially when asked whether it can be replaced by other software? And can different software be related to each other?

In this chapter, we compare Nocalhost with other software.

It is recommended to read[“Nocalhost-Redefining the Development Environment”](/Blog/redefine-cloud-native-dev-environment/) first, which helps to understand the problem that Nocalhost is trying to solve.

In summary, there are currently three ideas for accelerating development in the Kubernetes environment:

1. Monitor local code changes, execute the CI/CD pipeline locally immediately after the modification, rebuild the microservice image and automatically deploy it to the Kubernetes cluster. This is the practice of `Google Cloud Code`, `Skaffold`, and `Tilt`:

    [ ![](../../assets/images/reference/way-1.png) ](../../assets/images/reference/way-1.png)

2. Replace the workload to be developed with the `Proxy` network proxy container, forwarding the traffic in the cluster to the local, and forwarding the local traffic to the cluster. Use `docker run` locally to run the microservice container. This is how `Telepresence` does:

    [ ![](../../assets/images/reference/way-2.png) ](../../assets/images/reference/way-2.png)

3. Replace the workload to be developed with a development container, map local code to a remote directory, build and run microservices in the remote container. This is how `Nocalhost` does:
    [ ![](../../assets/images/reference/way-3.png) ](../../assets/images/reference/way-3.png)

In addition, `Nocalhost` also provides application management, development environment management, VS Code plug-in, IDEA plug-in, etc. which are conducive to standardization and accelerate development.

You can click the menu on the left to browse the comparison between Nocalhost and specific software.

> These comparisons are not to convince you to use Nocalhost, nor are they intended to belittle other software. Our goal is only to better understand the functional differences between Nocalhost and other software. If you think any stated facts are incorrect, please submit a PR for improvement.

## Telepresence

Telepresence deploys a network proxy Pod in the cluster, which will proxy Kubernetes environment data (for example: TCP connections, environment variables, volumes) to local processes. The local process connects to the remote Kubernetes cluster through a proxy so that it can directly access remote microservices through DNS.

Telepresence's concept is very good, but it has the following disadvantages:

* In some controlled network environments, it may not be possible to establish a VPN connection with a remote cluster.
* Locally use Docker Run to run the service, which may be different from the Pod's running mode, for example, it cannot simulate `InitContainer`
* Use `sshfs` to mount remote volumes, which cannot support Windows without WSL.
* The development and debugging process is not continuous, and several commands need to be executed manually at different stages.

## Tilt, Skaffold, Google Cloud Code

Tilt, Skaffold, Google Cloud Code can all automate all steps from local code changes to update process: monitor local files, rebuild container images and update the environment, just like automated `docker build && docker push && kubectl apply` or `docker-compose up` can be understood as a local CI/CD tool.

None of them can avoid the process of rebuilding the image and updating the workload every time the code is updated. Tilt introduced a method ["live_update"](https://docs.tilt.dev/live_update_tutorial.html) that does not need to rebuild the image every time. The configuration is more complicated, and it only shortens the `docker build` time.

Skaffold has a file synchronization function of the `beta` version, which can package local changes into tar and synchronize them to the container without rebuilding the image, redeploying and restarting the POD, but there are still some usage restrictions.

In addition to being able to automate the CI/CD process, Google Cloud Code also provides VS Code and IDEA plug-ins that are easy to develop, but it is strongly bound to Google's cloud services.