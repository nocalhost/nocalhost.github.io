#### How does Nocalhost resolve Pods/Jobs starting orders of services in details?

There are two options (`dependPodsLabelSelector` and `dependJobsLabelSelector`) defined in Nocalhost config.yaml for every services to define dependencies. Nocalhost will arrange Pods/Jobs containing labels defined in these options to start ahead of service itself.

Dependencies' declarations in Nocalhost config.yaml decide the startup sequence of services in application.

Nocalhost arranges Pods/Jobs containing labels defined in `dependPodsLabelSelector` and `dependJobsLabelSelector` options to start ahead of service itself. That means service would not start unitl only all dependent Pods being ready and all dependent Jobs done. 

For example, we configure service `foo` as below:

```
...
services:
  - name: foo
    dependPodsLabelSelector:
      - "app=mysql,region=shenzhen"
      - "app=redis"
...
```

While Nocalhost is going to start Pods within service `foo`, it will select Pods with labels of `app=mysql and region=shenzhen` or `app=redis`. Nocalhost starts the selected pods first. Once all selected Pods being ready, Nocalhost starts service `foo`.

