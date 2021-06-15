如果你的文件在 linux 中同步太慢，很可能是由于 inotify 限制。

#### 如何增加 inotify limit 确保 filesystem watcher 正常工作？

Linux 通常限制每个用户的监视数量（通常为 8192）。 当您有更多目录时，您需要调整该数字。

在许多 Linux 发行版上，您可以运行以下命令来修复它：

```shell
echo "fs.inotify.max_user_watches=204800" | sudo tee -a /etc/sysctl.conf
```

在 Arch Linux 和其他可能的情况下，最好将此行写入单独的文件，即您应该运行：
```shell
echo "fs.inotify.max_user_watches=204800" | sudo tee -a /etc/sysctl.d/90-override.conf
```

这仅在重新启动后生效。 要立即调整限制，请运行：

```shell
sudo sh -c 'echo 204800 > /proc/sys/fs/inotify/max_user_watches'
```