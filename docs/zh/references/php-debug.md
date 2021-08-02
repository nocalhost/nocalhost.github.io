# 远程调试 PHP 应用

!!!note 指引说明
    **目标 :**  使用 Nocalhost 远程调试 PHP 应用 <br />
    **Estimate time :** 3 分钟<br />
    **Requirements :**
        - 已安装 PhpStorm
        - 已安装 Nocalhost IDE 插件
     
## 1. 配置远程调试命令和端口

1. 打开 PhpStorm 和 Nocalhost JetBrains 插件
2. 选择一个需要调试的工作负载，右键点击选择 `Config`
3. 配置远程调试命令和端口

```yaml hl_lines="5-8"
service:
  containers:
    dev:
    command:
      debug:
       - ./debug.sh
    debug:
      remoteDebugPort: 9003
...
```
这里将使用 Xdebug 的默认调试端口 `9003`

## 2. 进入开发模式

![Enter development mode](../../assets/images/debug/php-devmode.gif)

## 3. 添加调试配置

添加 Nocalhost 调试配置

![Add debug configuration](../../assets/images/debug/php-add-config.gif)

## 4. 设置断点，开始调试

在代码中设置断点，开始调试

![Add debug configuration](../../assets/images/debug/php-break-debug.gif)

## Nocalhost 的 PHP 远程调试是如何工作的？

Nocalhost 使用 Xdebug 调试远程 PHP 应用

![Add debug configuration](../../assets/images/debug/php-debug.jpg)

