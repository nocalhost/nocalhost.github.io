# Nocalhost Docs & Website

This repository contains the source code of Nocalhost website and all documentations. It's built by [Docusaurus 2](https://docusaurus.io/).

## Preview

Clone the repository to your local workstation.

### Installation

```bash
npm install
```

### Local Development

```bash
npm run start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the build directory and can be served using any static contents hosting service.

## Add or Update Docs

When you add or modify the docs, these three files(`docs`, `static` and `sidebars.js`) should be taken into consideration.

1. `docs/`, the main English documentation files are mainly located in this folder. All markdown files need to follow the format, that the title at the beginning should be in the following format:

```yaml
---
title: Title Name
---
```

2. `static`, contains all the static files like image, stylesheet and fonts. We are using mdx format for image resources, please read [the official docs of docusaurus](https://docusaurus.io/docs/markdown-features) to lean the markdown features.

```md
<figure className="img-frame">
  <img className="gif-img" src={useBaseUrl('/img/installation/vscode-market.png')} />
  <figcaption>VS Code Extension Market</figcaption>
</figure>
```

3. `sidebars.js`, this file contain the navigation information of the KubeVela website. Please read [the official docs of docusaurus](https://docusaurus.io/docs/sidebar) to learn how to write `sidebar.js`.

```json
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'quick-start',
        'installation',
      ]
    },
```