`File Sync` is an important feature of `nocalhost` 's `Dev-Mode` and it‘s supported only while enable `Dev-Mode`. It is the key to realize local development and remote compilation and startup. It will establish a tunnel from the target pod to your localhos taccording to the configuration or command, and transmit the file stream.


You can use it by `ntctl`:

```
Usage:
  nhctl sync [Application Name] [Flags]
```



and the flags:

```
Flags:
  -m, --daemon              if file sync run as daemon, default true (default true)
  -d, --deployment string   k8s deployment which your developing service exists
  -b, --double              if use double side sync, default true
  
Global Flags:
      --debug               enable debug level log
      --kubeconfig string   the path of the kubeconfig file
```



`File Sync` automatically enabled while using `IDE Plugin` to start `Dev-Mode`, and we can specify the directory able to synchronize in `IDE Plugin`. The default `File Sync` enabled by `IDE Plugin` is run as daemon and double side sync.


> NOTE: Because of platform differences, file sync will lost execution bit when sync from windows to devContainer, such as shell script and other file can't execute in windows.