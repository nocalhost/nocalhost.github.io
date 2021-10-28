# Upgrade

 Upgrade nocalhost server whit [Helm](https://helm.sh/docs/intro/install/)

## Prerequisites
- Helm 3+

## Add Helm Chart Repository

```console
helm repo add nocalhost "https://nocalhost-helm.pkg.coding.net/nocalhost/nocalhost"
helm repo update
```

## Upgrade

```console
helm upgrade nocalhost nocalhost/nocalhost -n nocalhost
```
:::tip

use the flag `--reset-values` when upgrade nocalhost, if you install nocalhost server with `nhctl init`

:::
