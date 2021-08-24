---
title: Nocalhost 官方文档翻译活动
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## 背景

Nocalhost 的新官网框架已经上线。因为目前 Nocalhost 官方文档只有英文版，这提高了学习和使用 Nocalhost 的门槛，不利于项目的传播和发展。同时翻译工作也能显著提升语言能力，帮助我们拓宽阅读技术资料的广度，故组织本次活动。

## 活动流程

本次活動可以通过使用 Crowdin 平台或下载源码对文档进行翻译

## 通过 Crowndin 进行翻译

翻译项目的的地址在：https://crowdin.com/project/nocalhost

:::tip 账号

当进入项目后，需要注册一个 Crowdin 的账号，您也可以通过 GitHub 账号一键登录

:::

1. 进入上述地址进入项目
2. 选择需要翻译的文档，进入在线编辑器
3. 进行在线翻译
4. 翻译完成后退出编译器

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/translate/translate.gif')} />
</figure>

### 翻译要求

- 如果使用自动翻译，请**先检查**清楚自动翻译的结果，包括格式和阅读习惯
- 数字和英文两边是中文要加空格。
- Nocalhost 和 Nocalhost Server 统一写法。
- 翻译完请先阅读一遍，不要出现遗漏段落，保证文章通顺、符合中文阅读习惯。不追求严格一致，可以意译。review 的时候也会检验。
- 你和您不要混用，统一使用用 **“你”**。
- 不会翻译的词汇可以不翻译，可以在 PR 中说明，review 的时候会查看。
- 注意中英文标点符号。

### 注意事项

在翻译的时候，请注意原文格式和 Crowdin 生成的标签。比如下图中的 `<0></0>` 和 `<1></1>`。这些标签是 Crowdin 自动生成的，用于替换原文中的图标，特殊格式等。

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/translate/label.png')} />
  <figcaption>Crowdin 标签</figcaption>
</figure>

Nocalhost 官网使用了 [Docusaurus](https://docusaurus.io/)，因此某些特殊符号和格式请注意。

例如：

```yaml

:::note title

内容。。。。。

:::

```

这个是 Docuasurus 的告示（Admonition）方法。在翻译时，`note` 需要翻译，后面的 `title` 需要翻译。另外，请注意格式。

<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/translate/admonition.png')} />
</figure>

