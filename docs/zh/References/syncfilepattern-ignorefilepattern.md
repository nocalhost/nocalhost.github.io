

# SyncFilePattern / IgnoreFilePattern



## 说明

如果某些文件应该与其他设备同步或不同步，请配置相应的 `SyncFilePattern`  或者 `IgnoreFilePattern`。所有 `Pattern` 都相对于文件夹根目录（进入 `DevMode` 时选择的文件夹）。

[ ![](../../assets/images/concept/enter-dev-mode.png) ](../../assets/images/concept/enter-dev-mode.png){:target="_blank"}

**警告：`IgnoreFilePattern` 的优先级高于 `SyncFilePattern`，因此，如果您的模式都覆盖了同一文件，则该文件将被忽略。**



## Pattern 语法



- 常规文件名相互匹配，即 `foo` 与 `foo`，`subdir/foo` 以及任何名为 `foo` 的目录或文件匹配。空格被视为常规字符，但 prefix 和 suffix 的空格会自动忽略掉。

- **星号**（*）与文件名中的零个或多个字符匹配，但与目录分隔符不匹配。 `te*ne` 匹配 `telephone`，`subdir/telephone`，但不匹配 `tele/phone`。

- **双星号**（`**`）与上述匹配，但同时也与目录分隔符匹配。 `te**ne` 匹配 `telephone`，`subdir/telephone` 和 “`tele/sub/dir/phone`。

- **问号**（`？`）匹配不是目录分隔符的单个字符。 `te??st` 匹配  `tebest`，但不匹配 `teb/st` 或 `test`。

- **方括号**（`[]`）表示字符范围：`[a-z]` 匹配任何小写字符。

- **括号**（`{}`）表示一组用逗号分隔的替代项：`{banana，pineapple}` 匹配 `banana` 或 `pineapple`。

- **反斜杠**（`\`）“转义”一个特殊字符，使其失去其特殊含义。例如，`\{banana\}` 与 `{banana}` 完全匹配，并不表示上述的一组替代项。 **Windows不支持转义字符。**

- 以 `/` 或 `./` 开头的模式仅在文件夹的根目录中匹配。 `/foo `或 `./foo` 匹配 `/foo`，但不匹配 `subdir/foo`。
  - 以'（`?i`）'前缀开头的模式启用不区分大小写的模式匹配。 `(?i)test` 匹配 `test`，`TEST` 和 `tEsT`。前缀（`?i`）可以与其他模式组合使用，例如模式（`(?i)picture*.png`）匹配 `Picture1.PNG`。 在 Mac OS 和 Windows 上，模式始终不区分大小写。

  

## 示例

给定目录布局：

```
.DS_Store
foo
foofoo
bar/
    baz
    quux
    quuz
bar2/
    baz
    frobble
My Pictures/
    Img15.PNG
nocalhost/
    hello
    test/
    team/
```

并使用以下配置：

```
SyncFilePattern:
  - frobble
  - quuz
  - ./nocalhost
  
IgnoreFilePattern:
  - foo
  - *2
  - qu*
  - (?i)my pictures
  - nocalhost/t**
```

`IgnoreFilePattern` 的优先级高于 `SyncFilePattern`  的优先级，最终结果为：

```
foo           # 忽略, 符合 IgnoreFilePattern "foo"
foofoo        # 同步, 不符合 IgnoreFilePattern "foo", 不过你可以使用 "foo*" or "*foo" 来忽略这个文件
bar/          # 同步, 没这个配置
    baz       # 同步, 没这个配置
    quux      # 忽略, 符合 IgnoreFilePattern "qu*"
    quuz      # 忽略, 虽然配置了 SyncFilePattern "quuz", 但 IgnoreFilePattern "qu*" 忽略配置优先级更高
bar2/         # 忽略, 符合 IgnoreFilePattern "*2"
    baz       # 忽略, 父目录被忽略了
    frobble   # 忽略, 父目录被忽略了
My Pictures/  # 忽略, 符合不计大小写的 IgnoreFilePattern "(?i)my pictures" pattern
    Img15.PNG # 忽略, 父目录被忽略了
nocalhost/    # 同步, 没这个配置
    hello     # 同步, 没这个配置
    test/     # 忽略, 符合 IgnoreFilePattern "nocalhost/t**"
    team/     # 忽略, 符合 IgnoreFilePattern "nocalhost/t**"
```

