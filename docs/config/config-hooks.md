# Hooks

Hooks works like a regular templates, but they have special annotations that cause Nocalhost to utilize them differently. In this section, we cover the basic usage pattern for hooks.

## The Available Hooks

The following hooks are defined:

- **onPreInstall** Executes after templates are rendered, but before any resources are created in Kubernetes
- **onPostInstall** Executes after all resources are loaded into Kubernetes
- **onPreDelete** Executes on a deletion request before any resources are deleted from Kubernetes
- **onPostDelete** Executes on a deletion request after all of the release's resources have been deleted
- **onPreUpgrade** Executes on an upgrade request after templates are rendered, but before any resources are updated
- **onPostDelete** Executes on an upgrade request after all resources have been upgraded

When many resources are declared in a hook, the resources are executed serially. If they have hook weights (see example below), they are executed in weighted order. Hook resources with same weight are deployed in the same order as normal non-hook resources. Otherwise, ordering is not guaranteed. It is considered good practice to add a hook weight, and set it to `0` if weight is not important.

### Example: Hook configurations

```yaml

application:
    name: configure-hooks
    ...
    # Application Hooks
    onPreInstall:
        - path: manifest/templates/pre-install/print-num-job-01.yaml
        weight: "0"
        - path: manifest/templates/hook/pre-install.yaml
        weight: "1"
    onPostInstall:
        - path: manifest/templates/hook/post-install.yaml
        weight: "1"
    onPreUpgrade:
        - path: manifest/templates/hook/pre-upgrade.yaml
        weight: "1"
    onPostUpgrade:
        - path: manifest/templates/hook/post-upgrade.yaml
        weight: "1"
    onPreDelete:
        - path: manifest/templates/hook/pre-delete.yaml
        weight: "1"
    onPostDelete:
        - path: manifest/templates/hook/post-delete.yaml
        weight: "1"
```