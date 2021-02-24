# Tilt, Skaffold, Google Cloud Code

Tilt, Skaffold, Google Cloud Code can all automate all steps from local code changes to update process: monitor local files, rebuild container images and update the environment, just like automated `docker build && docker push && kubectl apply` or `docker-compose up` can be understood as a local CI/CD tool.

None of them can avoid the process of rebuilding the image and updating the workload every time the code is updated. Tilt introduced a method ["live_update"](https://docs.tilt.dev/live_update_tutorial.html) that does not need to rebuild the image every time. The configuration is more complicated, and it only shortens the `docker build` time.

Skaffold has a file synchronization function of the `beta` version, which can package local changes into tar and synchronize them to the container without rebuilding the image, redeploying and restarting the POD, but there are still some usage restrictions.

In addition to being able to automate the CI/CD process, Google Cloud Code also provides VS Code and IDEA plug-ins that are easy to develop, but it is strongly bound to Google's cloud services.