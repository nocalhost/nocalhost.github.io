# Telepresence

Telepresence deploys a network proxy Pod in the cluster, which will proxy Kubernetes environment data (for example: TCP connections, environment variables, volumes) to local processes. The local process connects to the remote Kubernetes cluster through a proxy so that it can directly access remote microservices through DNS.

Telepresence's concept is very good, but it has the following disadvantages:

* In some controlled network environments, it may not be possible to establish a VPN connection with a remote cluster.
* Locally use Docker Run to run the service, which may be different from the Pod's running mode, for example, it cannot simulate `InitContainer`
* Use `sshfs` to mount remote volumes, which cannot support Windows without WSL.
* The development and debugging process is not continuous, and several commands need to be executed manually at different stages.