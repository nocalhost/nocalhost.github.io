# Start coding with nhctl

1. Install nhctl: [https://nocalhost.dev/installation](/installation)

2. Get "Kubeconfig" file of Application's DevSpace and save it.

3. Install an application that you want to develop via nhctl:
```bash
nhctl install <application name> --kubeconfig <kubeconfig> -u <a git repo url which contains helm chart or manifests>  
```

4. Enter DevMode by specify a workload that you want to develop:
```bash
nhctl dev start <application name> --kubeconfig <kubeconfig> -d <the workload that you want to develop>  
```
5. Sync codes to DevMode containers:
```bash
nhctl sync <application name> --kubeconfig <kubeconfig> -d <the workload that you want to develop>  
```

6. Forward ports from DevMode container to local(Optional):
```bash
nhctl port-forward <application name> --kubeconfig <kubeconfig> -d <the workload that you want to develop>
```

7. Coding locally and start your program remotely:
```bash
kubectl --kubeconfig <kubeconfig> exec -it pod/<pod_name> -c nocalhost-dev -- bash 
```

8. Type run commonds in dev container
```bash
<your program start command,like: ./gradlew bootRun>
```

!!! note
	[Click here](/References/cli-commands) to get more details about the arguments of nhctl
