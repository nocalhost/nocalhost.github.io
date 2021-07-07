---
title: 安装 IDE 插件
---

!!!tip 一键安装 Nocalhost 开发环境
    在安装 Nocalhost IDE 插件时，插件会自动帮您安装最新版本的 **nhctl**

## 安装 VScode 插件

=== "通过编辑器应用市场安装"

    1. 打开 VScode 编辑器，然后单击左侧栏中的  <img src="../../assets/images/icons/vs-code-icon.jpg" width="20" />  图标
    2. 在搜索输入框中键入 nocalhost
    3. 选择 nocalhost-vscode-plugin，然后单击 “安装” 按钮进行安装。

    [![](../assets/images/plugins/vscode-market.png)](../assets/images/plugins/vscode-market.png)

=== "手动安装"

    1. [下载最新版本](https://github.com/nocalhost/nocalhost-vscode-plugin/releases/latest) 的 VSCode 插件
    2. 打开 VScode 编辑器，然后单击左侧栏中的  <img src='../../assets/images/icons/vs-code-icon.jpg' width="20" />  图标
    3. 点击 <img src='../../assets/images/icons/cluster-action-icon.jpg') width="20" /> 图标，选择 <kbd>从 VSIX 文件安装...</kbd>，选择刚才下载的 VSIX 文件开始安装

    [![](../assets/images/plugins/vscode-manual.png)](../assets/images/plugins/vscode-manual.png)

## 安装 JetBrains 插件

=== "通过编辑器应用市场安装"

    ### Windows 系统
    
    <kbd>文件</kbd> > <kbd>设置</kbd> > <kbd>插件</kbd> > <kbd>浏览仓库... </kbd> > <kbd>搜索 nocalhost </kbd> > <kbd>安装插件</kbd>

    ### MacOS 系统

    <kbd>首选项</kbd> > <kbd>设置</kbd> > <kbd>插件</kbd> > <kbd>浏览仓库... </kbd> > <kbd>搜索 nocalhost</kbd> > <kbd>安装插件</kbd>

    [![](../assets/images/plugins/jb-market.png)](../assets/images/plugins/jb-market.png)

=== "手动安装"

    1. 下载[最新版本](https://github.com/nocalhost/nocalhost-intellij-plugin/releases/latest)
    2. 安装插件：<kbd>首选项</kbd> > <kbd>插件</kbd> > <kbd>从磁盘安装插件... </kbd>

    [![](../assets/images/plugins/jb-manual.png)](../assets/images/plugins/jb-manual.png)

## 编辑器插件升级

Nocalhost 编辑器插件在每次编辑器启动时如检查到有新的版本，Nocalhost 插件会自动下载更新插件和 nhctl

## 下一步

使用 Nocalhost 插件 [体验](getting-started.md) 便捷的云原生微服务应用的开发过程