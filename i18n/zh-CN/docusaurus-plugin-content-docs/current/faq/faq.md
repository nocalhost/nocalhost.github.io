import TOCInline from '@theme/TOCInline';

# FAQ

<TOCInline toc={toc} />

## Installation


## Issues

### File sync is too slow in Linux

If your file synchronization is too slow in linux, it is most likely due to inotify limit.

#### How do I increase the inotify limit to get my filesystem watcher to work?

Linux typically restricts the amount of watches per user (usually 8192). When you have more directories you need to adjust that number.

On many Linux distributions you can run the following to fix it:

```bash

echo "fs.inotify.max_user_watches=204800" | sudo tee -a /etc/sysctl.conf

```

On Arch Linux and potentially others it is preferred to write this line into a separate file, i.e. you should run:

```bash

echo "fs.inotify.max_user_watches=204800" | sudo tee -a /etc/sysctl.d/90-override.conf

```

This only takes effect after a reboot. To adjust the limit immediately, run:

```bash

sudo sh -c 'echo 204800 > /proc/sys/fs/inotify/max_user_watches'

```

## Operating