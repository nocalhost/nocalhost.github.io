"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[9479],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),p=o,g=u["".concat(d,".").concat(p)]||u[p]||m[p]||i;return t?a.createElement(g,r(r({ref:n},c),{},{components:t})):a.createElement(g,r({ref:n},c))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},13919:function(e,n,t){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}t.d(n,{b:function(){return a},Z:function(){return o}})},44996:function(e,n,t){t.d(n,{C:function(){return i},Z:function(){return r}});var a=t(52263),o=t(13919);function i(){var e=(0,a.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var i=void 0===a?{}:a,r=i.forcePrependBaseUrl,l=void 0!==r&&r,d=i.absolute,s=void 0!==d&&d;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(l)return n+t;var c=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+c:c}(i,t,e,n)}}}function r(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},55064:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(67294),o=t(79443);var i=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=t(86010),l="tabItem_1uMI",d="tabItemActive_2DSg";var s=function(e){var n,t=e.lazy,o=e.block,s=e.defaultValue,c=e.values,m=e.groupId,u=e.className,p=a.Children.toArray(e.children),g=null!=c?c:p.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=s?s:null==(n=p.find((function(e){return e.props.default})))?void 0:n.props.value,h=i(),f=h.tabGroupChoices,k=h.setTabGroupChoices,N=(0,a.useState)(v),y=N[0],w=N[1],b=[];if(null!=m){var C=f[m];null!=C&&C!==y&&g.some((function(e){return e.value===C}))&&w(C)}var D=function(e){var n=e.currentTarget,t=b.indexOf(n),a=g[t].value;w(a),null!=m&&(k(m,a),setTimeout((function(){var e,t,a,o,i,r,l,s;(e=n.getBoundingClientRect(),t=e.top,a=e.left,o=e.bottom,i=e.right,r=window,l=r.innerHeight,s=r.innerWidth,t>=0&&i<=s&&o<=l&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(d),setTimeout((function(){return n.classList.remove(d)}),2e3))}),150))},x=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=b.indexOf(e.target)+1;t=b[a]||b[0];break;case"ArrowLeft":var o=b.indexOf(e.target)-1;t=b[o]||b[b.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},u)},g.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,className:(0,r.Z)("tabs__item",l,{"tabs__item--active":y===n}),key:n,ref:function(e){return b.push(e)},onKeyDown:x,onFocus:D,onClick:D},null!=t?t:n)}))),t?(0,a.cloneElement)(p.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},p.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}},79443:function(e,n,t){var a=(0,t(67294).createContext)(void 0);n.Z=a},62029:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return p},default:function(){return v}});var a=t(74034),o=t(79973),i=(t(67294),t(3905)),r=t(55064),l=t(58215),d=t(44996),s=["components"],c={title:"Basic"},m="Configured Development Mode",u={unversionedId:"config/config-dev",id:"config/config-dev",isDocsHomePage:!1,title:"Basic",description:"You can manage a DevMode configuration of the workload in Nocalhost IDE or create the configuration manually.",source:"@site/docs/config/config-dev.md",sourceDirName:"config",slug:"/config/config-dev",permalink:"/docs/config/config-dev",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/config/config-dev.md",tags:[],version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1630036750,formattedLastUpdatedAt:"8/27/2021",frontMatter:{title:"Basic"}},p=[{value:"Manage DevMode Configurations",id:"manage-devmode-configurations",children:[{value:"By IDE Plugin",id:"by-ide-plugin",children:[]},{value:"Manually Create Configurations",id:"manually-create-configurations",children:[]},{value:"Configuration Priority",id:"configuration-priority",children:[]}]},{value:"Development Mode Configurations",id:"development-mode-configurations",children:[{value:"<code>dev.gitUrl</code>",id:"devgiturl",children:[]},{value:"<code>dev.image</code>",id:"devimage",children:[]},{value:"<code>dev.shell</code>",id:"devshell",children:[]},{value:"<code>dev.workDir</code>",id:"devworkdir",children:[]},{value:"<code>dev.resources</code>",id:"devresources",children:[]},{value:"<code>dev.storageClass</code>",id:"devstorageclass",children:[]},{value:"<code>dev.persistentVolumeDirs</code>",id:"devpersistentvolumedirs",children:[]},{value:"<code>dev.command</code>",id:"devcommand",children:[]},{value:"<code>dev.debug</code>",id:"devdebug",children:[]},{value:"<code>dev.useDevContainer</code>",id:"devusedevcontainer",children:[]},{value:"<code>dev.sync</code>",id:"devsync",children:[]},{value:"<code>dev.env</code> and <code>dev.envFrom</code>",id:"devenv-and-devenvfrom",children:[]},{value:"<code>dev.portForward</code>",id:"devportforward",children:[]}]}],g={toc:p};function v(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configured-development-mode"},"Configured Development Mode"),(0,i.kt)("p",null,"You can ",(0,i.kt)("a",{parentName:"p",href:"#by-ide-plugin"},"manage a DevMode configuration of the workload in Nocalhost IDE")," or ",(0,i.kt)("a",{parentName:"p",href:"#manually-create-configurations"},"create the configuration manually"),"."),(0,i.kt)("h2",{id:"manage-devmode-configurations"},"Manage DevMode Configurations"),(0,i.kt)("h3",{id:"by-ide-plugin"},"By IDE Plugin"),(0,i.kt)("p",null,"Nocalhost will generate a runtime configuration stored in the memory. This configuration can be used across IDEs in your local computer after being saved."),(0,i.kt)("p",null,"In general, when using the Nocalhost IDE plugin, the plugin automatically updates the DevMode configurations according to your operation. ",(0,i.kt)("strong",{parentName:"p"},"No manual configuration is required"),"."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Non-Persistent")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"These runtime configurations created by the Nocalhost only save in your local computer. If you change the computer or delete the ",(0,i.kt)("inlineCode",{parentName:"p"},".nh")," folder, you will lose the current configurations."))),(0,i.kt)(r.Z,{defaultValue:"vscode",values:[{label:"VS Code",value:"vscode"},{label:"JetBrains",value:"jb"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"vscode",mdxType:"TabItem"},(0,i.kt)("p",null,"Expand the cluster inspector and select a workload. There is a little gear icon at the end of the workload. This icon has two different states:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{src:(0,d.Z)("/img/icons/setting-warning.svg"),width:"20"})," Does not have configuration, Nocalhost will generate a new configuration after you click."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{src:(0,d.Z)("/img/icons/setting-normal.svg"),width:"20"})," Has a configuration, Nocalhost will load the existing configuration after you click.")),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,d.Z)("/img/plugin/vs-config-dev.jpg")}),(0,i.kt)("figcaption",null,"Edit workload dev configuration in VS Code"))),(0,i.kt)(l.Z,{value:"jb",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Expand the cluster tree and right-click a workload"),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Dev Config")," from the context menu. If there is no configuration with this workload, Nocalhost will generate a new one, otherwise will open the existing configuration.")),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,d.Z)("/img/plugin/jb-config-dev.jpg")}),(0,i.kt)("figcaption",null,"Edit workload dev configuration in JetBrains")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Take effect")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"All changes will not take effect until the next time you enter development mode."))),(0,i.kt)("h3",{id:"manually-create-configurations"},"Manually Create Configurations"),(0,i.kt)("p",null,"If you want to have persisted DevMode configuration to use on a different computer or share with others, you can add a ",(0,i.kt)("inlineCode",{parentName:"p"},".nocalhost")," folder under your source code root directory and create a ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml")," file within the folder."),(0,i.kt)("p",null,"You can read this ",(0,i.kt)("a",{parentName:"p",href:"#development-mode-configurations"},"configuration example")," to set up your configuration."),(0,i.kt)("h3",{id:"configuration-priority"},"Configuration Priority"),(0,i.kt)("p",null,"If you have added ",(0,i.kt)("inlineCode",{parentName:"p"},".nocalhost/config.yaml")," to your source code root directory, Nocalhost will use the configuration in the ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml")," to replace the one set by the plugin."),(0,i.kt)("p",null,"If you use the IDE plugin to open the configuration, this configuration will become read-only. The plugin will also guide the user to modify the configuration directly in the local file, not the one opened by the plugin."),(0,i.kt)("h4",{id:"example-using-and-open-local-configuration"},"Example: Using and open local configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{1-6}","{1-6}":!0},"# Tips: This configuration is an in-memory replica of the local file: \n# \n# '~/whatever/details/.nocalhost/config.yaml'\n# \n# You should modify your configuration in local file, and the modification will\n# take effect immediately. (Dev modification will take effect the next time you enter the DevMode)\n#\n# In addition, if you want to configure multi-services in the same config.yaml, or use\n# the Server-version of Nocalhost, you can also configure under the definition \n# of the application, such as:\n# https://github.com/nocalhost/bookinfo/blob/main/.nocalhost/config.yaml\n# \nname: details\nserviceType: deployment\ncontainers:\n- name: container_name\n  dev:\n    image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/ruby:2.7.1-slim\n    shell: bash\n    workDir: /home/nocalhost-dev\n")),(0,i.kt)("h2",{id:"development-mode-configurations"},"Development Mode Configurations"),(0,i.kt)("p",null,"All configurations for development mode are in ",(0,i.kt)("inlineCode",{parentName:"p"},"services[*].container[*].dev")," section. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{11}","{11}":!0},'application:\n  name: foo-app\n  ....\n\n  services:\n    - name: foo-workload-01                 # string    |  required  | Name of workload\n      serviceType: deployment               # string    |  required  | The Kubernetes Workloads type corresponding to this service\n      ...\n      containers:                           # struct    |  optional  \n        - name: container-01                # string    |  required  | Container name\n          dev:\n            gitUrl: ""                      # string    |  required  | Git repository url\n            image: ""                       # string    |  required  | DevContainer image repository url\n            shell: "/bin/sh"                # string    |  optional  | The default shell of DevContainer\n            workDir: /home/nocalhost-dev    # string    |  optional  | The work directory of DevContainer\n            storageClass: "cbs"             # string    |  optional  | Storage of persistence volume\n            resources: null                 # struct    |  optional  | Specify resources requests and limits for DevContainer, same format to Kubernetes\'s resources\n            persistentVolumeDirs: []        # string[]  |  optional  | Dirs to be persisted in DevContainer\n            command: ...                    # string[]  |  optional  | Build command of the workload\n            debug: ...                      # struct    |  optional  | Specify debug parameter\n            useDevContainer: false          # string    |  optional  | Use .dev-container of VSCode to specify DevContainer Image\n            sync: ...                       # struct    |  optional  | Specify file synchronization when enter development mode\n            env: ...                        # struct    |  optional  | Specify development mode environment parameters\n            envFrom: null                   # struct    |  optional  | Specify development mode environment parameters by files\n            portForward: []                 # string    |  optional  | Ports to be forwarded to local when enter devMode\n\n')),(0,i.kt)("h3",{id:"devgiturl"},(0,i.kt)("inlineCode",{parentName:"h3"},"dev.gitUrl")),(0,i.kt)("p",null,"Set the source code repository URL of the workload."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"\ncontainers:\n  - name: container-01\n    dev:\n      gitURL: https://github.com/nocalhost/nocalhost.git\n\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Clone Source Code")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Nocalhost will use ",(0,i.kt)("inlineCode",{parentName:"p"},"git clone")," command to clone the source code. Please make sure you have ",(0,i.kt)("strong",{parentName:"p"},"Git")," installed on your local computer."))),(0,i.kt)("h3",{id:"devimage"},(0,i.kt)("inlineCode",{parentName:"h3"},"dev.image")),(0,i.kt)("p",null,"Specify the development image (",(0,i.kt)("inlineCode",{parentName:"p"},"DevImage"),") to replace the image of the ",(0,i.kt)("a",{parentName:"p",href:"./config-dev-devcontainer"},(0,i.kt)("inlineCode",{parentName:"a"},"DevContainer"))," when entering development mode."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"DevImage")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"image")," accepts image name or URL. If you enter the image name, Nocalhost will pull the specified image from ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub"),". Or you can use your own private image library, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage")))),(0,i.kt)("h4",{id:"example-set-the-image-for-devconatiner"},"Example: Set the image for ",(0,i.kt)("inlineCode",{parentName:"h4"},"DevConatiner")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:"{5}","{5}":!0},"containers:\n  - name: container-01\n    dev:\n      ...\n      image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage\n")),(0,i.kt)("h3",{id:"devshell"},(0,i.kt)("inlineCode",{parentName:"h3"},"dev.shell")),(0,i.kt)("p",null,"Configure the default shell of DevContainer, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"bin/sh")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"shell")," within DevContainer."),(0,i.kt)("h4",{id:"example"},"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{5}","{5}":!0},'containers:\n  - name: container-01\n    dev:\n      ...\n      shell: "/bin/sh"\n      ...\n')),(0,i.kt)("h3",{id:"devworkdir"},(0,i.kt)("inlineCode",{parentName:"h3"},"dev.workDir")),(0,i.kt)("p",null,"Used to indicate the working directory in the remote container after entering the ",(0,i.kt)("inlineCode",{parentName:"p"},"DevMode")," and the directory where the synchronized files are stored. By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"/home/nocalhost-dev")," will be used."),(0,i.kt)("h4",{id:"example-setting-up-the-work-directory"},"Example: Setting up the Work Directory"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:"{5}","{5}":!0},"containers:\n  - name: container-01\n    dev:\n      ...\n      workDir: /home/nocalhost-dev\n      ...\n")),(0,i.kt)("h3",{id:"devresources"},(0,i.kt)("inlineCode",{parentName:"h3"},"dev.resources")),(0,i.kt)("p",null,"Optionally specify how much of each resource a ",(0,i.kt)("inlineCode",{parentName:"p"},"DevContainer")," needs and limits. This is similar to ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"},"Kubernetes resources management")),(0,i.kt)("h4",{id:"example-setting-up-devcontainers-requests-and-limits"},"Example: Setting up DevContainer's requests and limits"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{5}","{5}":!0},'containers:\n  - name: container-01\n    dev:\n      ...\n      resources:\n        limits:\n          cpu: "1"\n          memory: 1Gi\n        requests:\n          cpu: "0.5"\n          memory: 512Mi\n      ...\n\n')),(0,i.kt)("h3",{id:"devstorageclass"},(0,i.kt)("inlineCode",{parentName:"h3"},"dev.storageClass")),(0,i.kt)("p",null,"Set the storage class name for a ",(0,i.kt)("inlineCode",{parentName:"p"},"DevContainer")),(0,i.kt)("h4",{id:"example-setting-up-storage-class-name"},"Example: Setting up storage class name"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{5}","{5}":!0},'containers:\n  - name: container-01\n    dev:\n      ...\n      storageClass: "storage-class-name"\n      ...\n\n')),(0,i.kt)("h3",{id:"devpersistentvolumedirs"},(0,i.kt)("inlineCode",{parentName:"h3"},"dev.persistentVolumeDirs")),(0,i.kt)("p",null,"Directories that need to be persisted in ",(0,i.kt)("inlineCode",{parentName:"p"},"DevContainer")),(0,i.kt)("h4",{id:"example-setting-up-the-persistent-directories"},"Example: Setting up the persistent directories"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{5}","{5}":!0},'containers:\n  - name: container-01\n    dev:\n      ...\n      persistentVolumeDirs: \n        - path: "/root"             # string  | required  | DIR that need to be persisted\n          capacity: 100Gi           # string  | optional  | Capacity of the DIR.\n\n')),(0,i.kt)("h3",{id:"devcommand"},(0,i.kt)("inlineCode",{parentName:"h3"},"dev.command")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{5}","{5}":!0},'containers:\n  - name: container-01\n    dev:\n      ...\n      command:\n        run:  [""]                # string  | optional  | Run command of the workload\n        debug:  [""]              # string  | optional  | Debug command of the workload\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../guides/debug/remote-debug"},"Read more to learn how to configure remote debugging")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../guides/remote-run"},"Read more to learn how to configure remote run"))),(0,i.kt)("h3",{id:"devdebug"},(0,i.kt)("inlineCode",{parentName:"h3"},"dev.debug")),(0,i.kt)("p",null,"Configure the remote debugging port for the ",(0,i.kt)("inlineCode",{parentName:"p"},"DevContainer"),". "),(0,i.kt)("p",null,"When using Nocalhost's remote debugging feature, the plugin will connect to the specified port to debug the remote workload."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{5}","{5}":!0},"containers:\n  - name: container-01\n    dev:\n      ...\n      debug:\n        remoteDebugPort: 5050     # integer | optional  | Specify the remote debug pot\n      ...\n\n")),(0,i.kt)("h3",{id:"devusedevcontainer"},(0,i.kt)("inlineCode",{parentName:"h3"},"dev.useDevContainer")),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},".dev-container")," of VS Code to specify ",(0,i.kt)("inlineCode",{parentName:"p"},"DevImage"),"."),(0,i.kt)("h4",{id:"example-setting-up-the-remote-debugging-port"},"Example: Setting up the remote debugging port"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{5}","{5}":!0},"containers:\n  - name: container-01\n    dev:\n      ...\n      useDevContainer: false      # string  | optional  | Use .dev-container of VSCode to specify DevImage\n      ...\n\n")),(0,i.kt)("h3",{id:"devsync"},(0,i.kt)("inlineCode",{parentName:"h3"},"dev.sync")),(0,i.kt)("p",null,"Files synchronization configurations in DevMode."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:"{6-8}","{6-8}":!0},'containers:\n  - name: container-01\n    dev:\n      ...\n      sync:\n        type: send                  # select    | optional  | The synchronization file mode of the workload       \n          filePattern: ["."]        # string[]  | optional  | List of files and directories to be synchronized to DevConatiner\n          ignoreFilePattern: ["."]  # string[]  | optional  | List of ignored files and directories to be synchronized to DevConatiner\n      ...\n\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"./config-dev-sync"},"Read more to learn how to configure file synchronization")),(0,i.kt)("h3",{id:"devenv-and-devenvfrom"},(0,i.kt)("inlineCode",{parentName:"h3"},"dev.env")," and ",(0,i.kt)("inlineCode",{parentName:"h3"},"dev.envFrom")),(0,i.kt)("p",null,"Nocalhost supports injecting the preset environment variables to a container in development mode. You can inject these variables by input the values or import the file."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"nocalhost-dep Needed")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You need to have ",(0,i.kt)("inlineCode",{parentName:"p"},"nocalhost-dep")," installed for this configuration to take effect. Please refer to ",(0,i.kt)("a",{parentName:"p",href:"../server/nh-dep"},"Nocalhost Dep")," for more details."))),(0,i.kt)("h4",{id:"example-setting-up-inject-environment-variable"},"Example: Setting up inject environment variable"),(0,i.kt)(r.Z,{defaultValue:"value",values:[{label:"Inject By Values",value:"value"},{label:"Inject By Files",value:"file"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"value",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dev.env")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:"{4}","{4}":!0},'containers:\n  dev:\n    ...\n    env: \n      - name: DEBUG\n        value: ${DEBUG:-true}\n      - name: DOMAIN\n        value: "www.coding.com"\n'))),(0,i.kt)(l.Z,{value:"file",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dev.envFrom")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:"{4}","{4}":!0},"containers:\n  dev:\n    ...\n    envFrom: \n      envFile: \n        - path: dev.env\n        - path: dev.env\n")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Explanation:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"These variables will be injected into the container when entering development mode"),(0,i.kt)("li",{parentName:"ul"},"These variables will take effect after the entered development mode")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Duplicate Configs")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If both ",(0,i.kt)("inlineCode",{parentName:"p"},"env")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"envFrom")," configure at the same time, Nocalhost will merge the configurations, and the duplicate parts are subject to ",(0,i.kt)("inlineCode",{parentName:"p"},"env")," configs."))),(0,i.kt)("h3",{id:"devportforward"},(0,i.kt)("inlineCode",{parentName:"h3"},"dev.portForward")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"portForward")," section defines which localhost ",(0,i.kt)("inlineCode",{parentName:"p"},"port")," should be forwarded to the remote ",(0,i.kt)("inlineCode",{parentName:"p"},"port")," of the selected container."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{4}","{4}":!0},"containers:\n  dev:\n    ...\n    portForward:\n      - 38228:80\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"./config-dev-portforward"},"Read more to learn how to configure port-forwarding for development mode")))}v.isMDXComponent=!0}}]);