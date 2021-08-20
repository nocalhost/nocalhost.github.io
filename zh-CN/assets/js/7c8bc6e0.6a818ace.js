"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[2357],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7294),i=n(9443);var o=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=n(6010),l="tabItem_1uMI",p="tabItemActive_2DSg";var s=37,c=39;var m=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,m=e.values,u=e.groupId,d=e.className,h=o(),f=h.tabGroupChoices,g=h.setTabGroupChoices,v=(0,a.useState)(i),k=v[0],N=v[1],y=a.Children.toArray(e.children),w=[];if(null!=u){var b=f[u];null!=b&&b!==k&&m.some((function(e){return e.value===b}))&&N(b)}var C=function(e){var t=e.currentTarget,n=w.indexOf(t),a=m[n].value;N(a),null!=u&&(g(u,a),setTimeout((function(){var e,n,a,i,o,r,l,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,o=e.right,r=window,l=r.innerHeight,s=r.innerWidth,n>=0&&o<=s&&i<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case c:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case s:var i=w.indexOf(e.target)-1;n=w[i]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},d)},m.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,r.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},278:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return u},default:function(){return h}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),r=n(5064),l=n(8215),p=["components"],s={title:"Basic"},c="Configure Application Deployment",m={unversionedId:"config/config-deploy",id:"config/config-deploy",isDocsHomePage:!1,title:"Basic",description:"You can configured the deployment method of matching type to deploy your application in Kubernetes with Nocalhost IDE plugin. Nocalhost supports to use the following types to deploy application:",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/config/config-deploy.md",sourceDirName:"config",slug:"/config/config-deploy",permalink:"/zh-CN/docs/config/config-deploy",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/config/config-deploy.md",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1629429647,formattedLastUpdatedAt:"8/20/2021",frontMatter:{title:"Basic"},sidebar:"docs",previous:{title:"Config services",permalink:"/zh-CN/docs/config/config-services"},next:{title:"helm",permalink:"/zh-CN/docs/config/config-deploy-helm"}},u=[{value:"Configurations",id:"configurations",children:[]},{value:"Example",id:"example",children:[]},{value:"Required Configurations",id:"required-configurations",children:[{value:"Application Name",id:"application-name",children:[]},{value:"Manifest Type",id:"manifest-type",children:[]},{value:"Resource Path",id:"resource-path",children:[]}]},{value:"Advanced Configurations",id:"advanced-configurations",children:[{value:"Ignored Path",id:"ignored-path",children:[]},{value:"Inject Environment Variable to Workloads",id:"inject-environment-variable-to-workloads",children:[]},{value:"Run Jobs Before Installing the Application",id:"run-jobs-before-installing-the-application",children:[]}]},{value:"Configure Workloads and Containers Deployments",id:"configure-workloads-and-containers-deployments",children:[]}],d={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configure-application-deployment"},"Configure Application Deployment"),(0,o.kt)("p",null,"You can configured the deployment method of matching type to deploy your application in Kubernetes with Nocalhost IDE plugin. Nocalhost supports to use the following types to deploy application:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Manifest"),(0,o.kt)("li",{parentName:"ul"},"Helm"),(0,o.kt)("li",{parentName:"ul"},"Kustomize")),(0,o.kt)("h2",{id:"configurations"},"Configurations"),(0,o.kt)("p",null,"Application deployments are configured within the ",(0,o.kt)("inlineCode",{parentName:"p"},"application")," section of the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml"),". "),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Config.yaml")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Nocalhost will ",(0,o.kt)("strong",{parentName:"p"},"not")," create this yaml file for you by default. You need to add a ",(0,o.kt)("inlineCode",{parentName:"p"},".nocalhost")," folder under your application's root directory and create a ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml")," file within the folder."))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(r.Z,{defaultValue:"helm",values:[{label:"Helm Chart",value:"helm"},{label:"Manifest",value:"manifest"},{label:"Kustomizations",value:"kustom"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"helm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'configProperties:                       # struct    | required | Specify config properties\n    version: v2 \n\napplication:\n  name: bookinfo                        # string    | required | Application name\n  manifestType: helmGit                 # string    | required | Application k8s manifest type\n  resourcePath: ["charts/bookinfo"]     # string[]  | required | Set the application resource path\n  env:                                  # struct    | optional | Inject environment variable for all workload when installed\n    - name: DEBUG\n      value: ${DEBUG:-false}\n    - name: DOMAIN\n      value: ${DOMAIN:-coding.net}\n'))),(0,o.kt)(l.Z,{value:"manifest",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'application:\n  name: bookinfo                        # string    | required | Application name                 \n  manifestType: rawManifestGit          # string    | required | Application k8s manifest type                           \n  resourcePath: ["manifest/templates"]  # string[]  | required | Set the application resource path                          \n  env:                                  # struct    | optional | Inject environment variable for all workload when installed                            \n    - name: DEBUG\n      value: ${DEBUG:-false}\n    - name: DOMAIN\n      value: ${DOMAIN:-coding.net}\n'))),(0,o.kt)(l.Z,{value:"kustom",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'application:\n  name: bookinfo                        # string    | required | Application name\n  manifestType: kustomizeGit            # string    | required | Application k8s manifest type\n  resourcePath: ["kustomize/base"]      # string[]  | required | Set the application resource path\n  env:                                  # struct    | optional | Inject environment variable for all workload when installed                            \n    - name: DEBUG\n      value: ${DEBUG:-false}\n    - name: DOMAIN\n      value: ${DOMAIN:-coding.net}\n')))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Example Configurations")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We provide an example application, you can check out the source code in our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nocalhost/bookinfo/tree/main/.nocalhost"},"Github Repo")," for full configurations."))),(0,o.kt)("h2",{id:"required-configurations"},"Required Configurations"),(0,o.kt)("h3",{id:"application-name"},"Application Name"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"application[*].name # required")),(0,o.kt)("p",null,"Nocalhost uses a ",(0,o.kt)("strong",{parentName:"p"},"unique")," application name to differentiate different applications. Therefore, you ",(0,o.kt)("strong",{parentName:"p"},"can not")," deploy two applications with the same name in one namespace."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"application:\n  name: app-name\n")),(0,o.kt)("h3",{id:"manifest-type"},"Manifest Type"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"application[*].manifestType # required")),(0,o.kt)("p",null,"Nocalhost will chooses different deployment methods according to different ",(0,o.kt)("inlineCode",{parentName:"p"},"manifestType"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Supports Types:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"helmGit")," - Helm application in Git repository"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"helmRepo")," - Helm application in Helm repository"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"helmLocal")," - Helm application in local directory"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"rawManifestGit")," - Application with manifest yaml config in Git repository"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"rawManifestLocal")," - Application with manifest yaml config in local directory"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"kustomizeGit")," - Application with manifest yaml config in Git repository"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"kustomizeLocal")," - Application with manifest yaml config in local directory")),(0,o.kt)("h3",{id:"resource-path"},"Resource Path"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"application[*].resourcePath # required")),(0,o.kt)("p",null,"Set application source path. This config must correspond to ",(0,o.kt)("a",{parentName:"p",href:"#manifest-type"},(0,o.kt)("inlineCode",{parentName:"a"},"mainifestType")),", otherwise, this config will not take effect."),(0,o.kt)("h4",{id:"example-configure-resource-path-for-the-corresponding-type"},"Example: Configure resource path for the corresponding type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Corresponding Configs"',title:'"Corresponding','Configs"':!0},'// highlight-next-line\nmanifestType:   helmGit\nresourcePath:   ["<chart path: relative path of git repo root>"]\n\n// highlight-next-line\nmanifestType:   helmLocal\nresourcePath:   ["<chart path: relative path of local helm chart path>"]\n\n// highlight-next-line\nmanifestType:   rawManifestGit\nresourcePath:   ["<manifest files path: multi relative paths of git repo root>"]\n\n// highlight-next-line\nmanifestType:   rawManifestLocal\nresourcePath:   ["<manifest files path: multi relative paths of local application path>"]\n\n// highlight-next-line\nmanifestType:   kustomizeGit\nresourcePath:   ["<kustomize file path: relative path of git repo>"]\n\n// highlight-next-line\nmanifestType:   kustomizeLocal\nresourcePath:   ["<kustomize file path: multi relative paths of local application path>"]\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is the source path configuration at application level"))),(0,o.kt)("h2",{id:"advanced-configurations"},"Advanced Configurations"),(0,o.kt)("p",null,"Nocalhost provides some enhancements to application deployment. "),(0,o.kt)("h3",{id:"ignored-path"},"Ignored Path"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"application[*].ignoredPath # optional")),(0,o.kt)("p",null,"Nocalhost will ignore the files under this path during installation. This config must correspond to ",(0,o.kt)("a",{parentName:"p",href:"#manifest-type"},(0,o.kt)("inlineCode",{parentName:"a"},"mainifestType")),", otherwise, this config will not take effect."),(0,o.kt)("h4",{id:"example-configure-ignored-path-for-the-corresponding-type"},"Example: Configure ignored path for the corresponding type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Corresponding Configs"',title:'"Corresponding','Configs"':!0},'// highlight-next-line\nmanifestType:   rawManifestGit\nresourcePath:   ["<ignored manifest files path: multi relative paths of git repo root>"]\n\n// highlight-next-line\nmanifestType:   rawManifestLocal\nresourcePath:   ["<ignored manifest files path: multi relative paths of local application path>"]\n\n// highlight-next-line\nmanifestType:   kustomizeGit\nresourcePath:   ["<ignored kustomize file path: relative path of git repo>"]\n\n// highlight-next-line\nmanifestType:   kustomizeLocal\nresourcePath:   ["<ignored kustomize file path: multi relative paths of local application path>"]\n')),(0,o.kt)("h3",{id:"inject-environment-variable-to-workloads"},"Inject Environment Variable to Workloads"),(0,o.kt)("p",null,"Nocalhost supports injecting the preset environment variables to all workloads when deploying an application. You can inject these variables by input the values or import the file."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"nocalhost-dep Needed")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You need to have ",(0,o.kt)("inlineCode",{parentName:"p"},"nocalhost-dep")," to install for this configuration to take effect. Please refer to ",(0,o.kt)("a",{parentName:"p",href:"../server/nh-dep"},"Nocalhost Dep")," for more details."))),(0,o.kt)("h4",{id:"example-setting-up-inject-environment-variable"},"Example: Setting up inject environment variable"),(0,o.kt)(r.Z,{defaultValue:"value",values:[{label:"Inject By Values",value:"value"},{label:"Inject By Files",value:"file"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"value",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"application[*].env # optional")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'application:\n  env: \n    - name: DEBUG\n      value: ${DEBUG:-true}\n    - name: DOMAIN\n      value: "www.coding.com"\n'))),(0,o.kt)(l.Z,{value:"file",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"application[*].envFrom # optional")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"application:\n  envFrom: \n    envFile: \n      - path: dev.env\n      - path: dev.env\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Explanation:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"These variables will be injected to all workloads when deploying"),(0,o.kt)("li",{parentName:"ul"},"These variables will take effect after the deployments occurs")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Duplicate Configs")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If both ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"envFrom")," configure at the same time, Nocalhost will merge the configurations, and the duplicate parts are subject to ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," configs."))),(0,o.kt)("h3",{id:"run-jobs-before-installing-the-application"},"Run Jobs Before Installing the Application"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"application[*].onPreInstall")),(0,o.kt)("p",null,"Nocalhost allows users to perform some additional operations before deploying applications. "),(0,o.kt)("h4",{id:"example-setting-up-the-pre-install-jobs"},"Example: Setting up the pre-install Jobs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'onPreInstall:\n  - path: job-01.yaml       # string    | required | Job yaml file, the relative path of the repo root\n    weight: "1"             # integer   | optional | Order of execution of job, tThe smaller the value, the first to execute.\n  - path: job-02.yaml\n    weight: "-5"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Explanation:")),(0,o.kt)("p",null,"Nocalhost will wait for the completion of ",(0,o.kt)("inlineCode",{parentName:"p"},"job-01")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"job-02")," execution before deploying the application."),(0,o.kt)("h2",{id:"configure-workloads-and-containers-deployments"},"Configure Workloads and Containers Deployments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./config-services#servicesdependlabelselector"},"Learn how to control startup sequence of the workload")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./config-services##inject-environment-variable-to-containers"},"Learn how to inject environment variables to container")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./config-services#setting-up-port-forwarding"},"Learn how to configure port-forwarding of the workload"))))}h.isMDXComponent=!0}}]);