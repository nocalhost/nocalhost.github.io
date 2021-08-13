/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  docs: [
    // Intro
    {
      type: 'doc',
      label: 'Introduction',
      id: 'introduction',
    },
    // Getting Start
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'quick-start',
        'installation',
      ]
    },
    // Guides
    {
      type: 'category',
      label: 'User Guides',
      collapsed: false,
      items: [
        'guides/manage-cluster',
        // Deploy
        {
          type: 'category',
          label: 'Deploy Application',
          items: [
            'guides/deploy/deploy-by-ide',
            'guides/deploy/deploy-from-helm',
            'guides/deploy/deploy-from-terminal',
            'guides/deploy/deploy-demo',
          ]
        },
        // Development
        {
          type: 'category',
          label: 'Development',
          items: [
            'guides/how-devmode-work',
            'guides/develop-service',
          ]
        },
        // Debugging
        { 
          type: 'category',
          label: 'Debugging',
          items: [
            'guides/debug/debug',
            'guides/debug/access-terminal', 
            'guides/debug/log-viewer',
            'guides/debug/php',
            'guides/debug/java',
            'guides/debug/go',
            'guides/debug/python',
          ]
        },
        'guides/clear-pvc',
      ]
    },
    // Configurations
    {
      type: 'category',
      label: 'Configuration',
      collapsed: false,
      items: [
        'config/config-ref',
        // Deployments
        {
          type: 'category',
          label: 'Deployments',
          items: [
            'config/config-deploy',
            'config/config-deploy-helm',
            'config/config-deploy-manifest',
            'config/config-deploy-kustomize',
          ]
        },
        // Development
        {
          type: 'category',
          label: 'Development',
          items: [
            'config/config-dev',
            'config/config-dev-command',
            'config/config-dev-sync',
            'config/config-dev-devcontainer',
          ]
        },
        // ConfigMap
        'config/config-configmap'
      ]
    },
    // Best Practice
    {
      type: 'category',
      label: 'Best Practices',
      collapsed: false,
      items: [
        // Compatible
        {
          type: 'doc',
          label: 'Kubernetes Compatibilities',
          id: 'practice/cloud/k8s-compatible'
        },
        // Working with Cloud
        {
          type: 'category',
          label: 'Working with Cloud',
          items: [
            'practice/cloud/tencent-tke',
            'practice/cloud/rancher-rke',
            'practice/cloud/ali-ack',
            'practice/cloud/google-gke',
            'practice/cloud/amazon-eks',
            'practice/cloud/ms-azure'
          ]
        },
      ]
    },
    // Advanced
    {
      type: 'category',
      label: 'Advanced Guides',
      items: [
        // Nocalhost Dep
        'server/nh-dep',
        // Nocalhost Server
        {
          type: 'category',
          label: 'Nocalhost Server',
          items: [
            'server/server-overview',
            'server/deploy-server',
            'server/manage-user',
            'server/manage-cluster',
            'server/manage-devspace',
            'server/manage-app'
          ]
        }
      ]
    },
    //Reference
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/nh-config'
      ]
    },
    // CLI Reference
    {
      type: 'category',
      label: 'CLI Reference',
      items: [
        {
          type: 'autogenerated',
          dirName: 'cli'
        },
      ]
    },
    // FAQ
    'faq/faq',
    // Changelogs
    { 
      type: 'category',
      label: 'Changelogs',
      items: [
        'changelogs/0.4.x'
      ]
    }
  ],
};
