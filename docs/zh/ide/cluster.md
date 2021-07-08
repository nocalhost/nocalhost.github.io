## 连接集群

Nocalhost 编辑器插件支持两种通过 kubeconfig 连接集群的方式

**1. 选择 kubeconfig 文件**

在你的本地文件夹中选择一个 kubeconfig 文件.

!!!tip "默认路径"
    默认情况下，Nocalhost 插件启动时会从 ``~/.kube/config`` 路径下自动读取您本地的 kubeconfig。您也可以更换默认的文件所在路径。

**2. 粘贴 kubeconfig 文本**

粘贴 kubeconfig 的文本内容。在 kubeconfig 被成功读取后，选择需要访问的环境，然后连接集群。

!!!tip "获取 Kubeconfig"
    你可以通过在 Kubernetes 集群所在系统内运行下述命令查看 kubeconfig，然后复制黏贴到插件里。

    ```bash
    kubectl config view --minify --raw --flatten
    ```

=== "VSCode 编辑器插件"

    1. 点击 <img src='../../../assets/images/icons/add-cluster.jpg' width="20"/> 连接群集
    2. 点击 **Add Kubeconfig** 后选择合适的连接方式

    <center>
        <img src='../../../assets/images/ide/vscode-add-cluster.gif' width="250">
    </center>

=== "JetBrains 编辑器插件"

    1. 点击 <img src='../../../assets/images/icons/add-cluster.jpg' width="20"/> 连接群集

    2. 选择合适的连接方式

    <center className="img-margin">
        <img src='../../../assets/images/ide/idea-connect-cluster.gif' width="600"/>
    </center>

## 移除集群

=== "VSCode 编辑器插件"

    右键单击指定集群，然后点击 **Remove** 将该指定集群从 Nocalhost 编辑器插件集群列表中移除该集群。

    <center className="img-margin">
        <img src='../../../assets/images/ide/vscode-remove-cluster.gif'  width="290"/>
    </center>

=== "JetBrains 编辑器插件"

    右键单击指定集群，然后点击 **Remove** 将该指定集群从 Nocalhost 编辑器插件集群列表中移除该集群。

    <center className="img-margin">
        <img src='../../../assets/images/ide/idea-remove-cluster.gif'  width="600"/>
    </center>

## 查看集群 Kubeconfig

右键点击指定集群，选择 **View Kubeconfig**，Nocalhost 插件会打开该集群的 kubeconfig。

=== "VSCode 编辑器插件"

    <center className="img-margin">
        <img src='../../../assets/images/ide/idea-view-config.gif' width="600"/>
    </center>

=== "JetBrains 编辑器插件"

    <center className="img-margin">
        <img src='../../../assets/images/ide/vscode-view-config.gif' width="600"/>
    </center>


