#### 为什么在 Windows 下进入开发模式后无法编译代码？

这种情况有可能是因为操作系统的换行符不同导致的。例如，编译目标环境为 Linux 的代码，换行符为 `\n`，而在 Windows 下检出、编译或格式化等操作都有可能导致代码的换行符被转换成 `\r\n`。换行符的变化会导致部分构建工具（如 Gradle）无法正常运行。所以在进入开发模式前，请先根据实际需求配置好本地开发环境。

- git: Windows 下默认会开启换行符自动转换，即 `git checkout` 时将 `\n` 转换成 `\r\n`，`git commit`时将 `\r\n` 转换成 `\n`。如需配置，请参考 [Git 官方文档](https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-%E9%85%8D%E7%BD%AE-Git#_core-autocrlf)；
- Visual Studio Code: Windows 下默认使用 `\r\n`。如需修改全局配置，依次进入 File -> Preferences -> Settings -> Text Editor -> Files -> Eol；如需修改单个文件配置，直接单击右下角状态栏上的 `CRLF` 或 `LF` 进行切换；
- IntelliJ IDEA: Windows 下默认使用 `\r\n`。如需修改配置，依次进入 File -> Settings -> Editor -> Code Style -> Line seperator。
