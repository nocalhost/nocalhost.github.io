---
title: Installation
---

!!! note "Prerequisites"
	To use nocalhost, please make sure that  [git](https://git-scm.com/downloads){:target="_blank"}, [kubectl](https://kubernetes.io/docs/home/){:target="_blank"} and [helm](https://helm.sh/){:target="_blank"} are installed.

## nhctl

The Nocalhost command-line tool: nhctl, allows you to run commands against Nocalhost.
You can use nhctl to install application, switch services to DevMode, sync codes, forward ports. See [nhctl](/References/cli-commands){:target="_blank"} for full list of sub commands.


## Install nhctl on Linux

### Install nhctl binary with curl on Linux

1. Download the latest release with command:
```bash
curl -sL https://git.io/JLsgQ | sh
```
2. Make the nhctl binary executable.
```bash
chmod +x ./nhctl
```
3. Move nhctl binary in to your PATH.
```bash
sudo mv ./nhctl /usr/local/bin/nhctl
```
4. Test you installed.
```bash
nhctl version
```

### Install nhctl using package management

<!-- === "Snap"
	If you are on Ubuntu or another Linux distribution that support [snap](https://snapcraft.io/docs/installing-snapd) package manager, nhctl is available as a [snap](https://snapcraft.io/) application.
	```bash
	snap install nhctl --classic

	nhctl version
	``` -->
=== "Homebrew"
	If you are on Linux and using [Homebrew](https://docs.brew.sh/Homebrew-on-Linux){:target="_blank"} package manager, nhctl is available for [installation](https://docs.brew.sh/Homebrew-on-Linux#install){:target="_blank"}.
	```bash
	brew install nocalhost/repo/nocalhost

	nhctl version
	```

## Install nhctl on macOS
### Install nhctl binary with curl on macOS

1. Download the latest release with command:
```bash
curl -sL https://git.io/JLsgQ | sh
```
2. Make the nhctl binary executable.
```bash
chmod +x ./nhctl
```
3. Move nhctl binary in to your PATH.
```bash
sudo mv ./nhctl /usr/local/bin/nhctl
```
4. Test you installed.
```bash
nhctl version
```

### Install nhctl with Homebrew on macOS
1. Run the installation command
```bash
brew install nocalhost/repo/nocalhost
```
2. Test you installed
```bash
nhctl version
```

## Install nhctl on Windows

### Install nhctl with installer
1. Download the installer file from [this link](https://github.com/nocalhost/nocalhost/releases/latest/download/NocalhostInstaller.exe).
2. Use the installer to install nhctl, kubectl and helm. It will automatically add the installation directory to your PATH.
3. Open the CMD or PowerShell, test you installed.
```bash
nhctl version
```

### Install nhctl binary on Windows

1. Download the latest release from [this link](https://github.com/nocalhost/nocalhost/releases/latest){:target="_blank"}. <br />
Or if you have curl installed, use this command:
```bash
curl -L "https://github.com/nocalhost/nocalhost/releases/latest/download/nhctl-windows-amd64.exe" -o nhctl.exe
```
2. Add nhctl binary in to your PATH.
3. Test you installed.
```bash
nhctl version
```

You will see:

```
nhctl: Nocalhost CLI
    Version: v0.0.5
    Git commit: 605cbf149a4b4d8983111b8984111365a5f54192
    Built: Sat Dec 12 13:29:03 2020
    OS/Arch: linux/amd64
    Go version: go1.14.4
```
## Install Nocalhost VScode Plugin

The Nocalhost VScode Plugin allows you to use Nocalhost on VSCode Editor.
You can install application, open DevSpace, start DevMode in VSCode conveniently.

### Install Nocalhost VScode Plugin on VScode Marketplace
Follow this link: [https://marketplace.visualstudio.com/items?itemName=nocalhost.nocalhost](https://marketplace.visualstudio.com/items?itemName=nocalhost.nocalhost){:target="_blank"}

### Or Install Nocalhost VScode Plugin on VScode Editor
1. Open the VScode Editor, and click left bar "Extensions" icon.
2. Type "nocalhost" in the search input box.
3. Select the "nocalhost-vscode-plugin", and the click install button to install.

[ ![](../assets/images/extension-market.png) ](../assets/images/extension-market.png){:target="_blank"}
