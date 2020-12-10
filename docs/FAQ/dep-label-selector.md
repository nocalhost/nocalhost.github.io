#### How does Nocalhost resolve Pods/Jobs starting orders of services in details?

There are two options (`dependPodsLabelSelector` and `dependJobsLabelSelector`) defined in Nocalhost config.yaml for every services to define dependencies. Nocalhost will arrange Pods/Jobs containing labels defined in these options to start ahead of service itself.

For example, we config service `foo` as below:

```
...
services:
  - name: foo
    dependPodsLabelSelector:
      - "name=mysql"
      - "name=redis"
...
```

While Nocalhost is going to start Pods within service `foo`, it will select Pods with labels of `name=mysql` or `name=redis`. Nocalhost starts the selected pods first. Once all selected Pods have been started, Nocalhost starts service `foo`.

