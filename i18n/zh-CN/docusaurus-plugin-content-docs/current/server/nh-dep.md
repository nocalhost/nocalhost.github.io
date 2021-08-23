# Nocalhost Dep

**`Nocalhost Dep`** is a [Webhook admission](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/), which is used to handle service dependencies during application deployment.

Service dependencies can be defined through `services[*].dependLabelSelector` in the Nocalhost configuration.

**`Nocalhost Dep`** will inject an `initContainer` into the container when deploying an application. The `initContainer` will ensure that the services it depends on run successfully and then create the related container.

