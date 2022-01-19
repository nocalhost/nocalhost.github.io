# Nocalhost Dep

**`Nocalhost Dep`** is a [Webhook admission](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/), which is used to handle service dependencies during application deployment. 

Service dependencies can be defined through `services[*].dependLabelSelector` in the Nocalhost configuration.

**`Nocalhost Dep`** will inject an `initContainer` into the container when deploying an application. The `initContainer` will ensure that the services it depends on run successfully and then create the related container.

## What's Next?

You have finished Nocalhost Server section. You can use Nocalhost to accelerate your team's development process. We recommend you to read the [User Guides](https://nocalhost.dev/docs/guides/manage-cluster/) before take Nocalhost Server into use.