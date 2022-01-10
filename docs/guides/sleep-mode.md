import useBaseUrl from '@docusaurus/useBaseUrl';

# Sleep Mode

Sleep mode is the act of scaling the replicas of a workload to 0 within a specified time. With sleep mode, you can put the DevSpace to sleep which means that Kubernetes will delete all pods but the entire configuration within the DevSpace is still there.

## What workloads support sleep?

* `StatefulSet`
* `Deployment`
* `CronJob`

## How to sleep/wakeup?

You can trigger sleep/wakeup in three different ways.

* Customize the sleep time period in the `DevSpace` management page, the `DevSpace` will automatically sleep/wakeup.
<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/sleep/custom.png')} />
</figure>

* Manually trigger sleep/wakeup in the `DevSpace` management page.
<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/sleep/dashboard.png')} />
</figure>

* Manually trigger sleep/wakeup in the JetBrains Plugin / VSCode Plugin.
<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/sleep/jetbrains.png')} />
</figure>

## How does `sleep` works?

- `StatefulSet`: set `spec.replicas: 0`
- `Deployment`: set `spec.replicas: 0`
- `CronJob`: set `spec.suspend: true`

## How does `wakeup` works?

- `StatefulSet`: restore `spec.replicas`
- `Deployment`: restore `spec.replicas`
- `CronJob`: set `spec.suspend: false`

## Notes

- By default, `Nocalhost` performs a round of sleep checks every `10s`.
- Workloads that are already in `DevMode` will be ignored and will not be sleep.
- `DevSpace` that are manually sleep by the user will not automatically wakeup on the same day.
- `DevSpace` that are manually wakeup by the user will not automatically sleep on the same day.
- When the user clears all sleep settings, the `DevSpace` that has gone to sleep will wake up automatically.
