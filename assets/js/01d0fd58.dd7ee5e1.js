"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[420],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},44996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return o}});var a=n(52263),r=n(13919);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,l=void 0!==o&&o,c=i.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},41395:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),r=n(80944),i=n(86010),o="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,s=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,m=e.values,d=e.groupId,p=e.className,f=(0,r.Z)(),v=f.tabGroupChoices,g=f.setTabGroupChoices,h=(0,a.useState)(u),b=h[0],k=h[1],N=a.Children.toArray(e.children),y=[];if(null!=d){var w=v[d];null!=w&&w!==b&&m.some((function(e){return e.value===w}))&&k(w)}var C=function(e){var t=e.currentTarget,n=y.indexOf(t),a=m[n].value;k(a),null!=d&&(g(d,a),setTimeout((function(){var e,n,a,r,i,o,c,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,c=o.innerHeight,s=o.innerWidth,n>=0&&i<=s&&r<=c&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case s:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case c:var r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},p)},m.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:x,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(N.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},80944:function(e,t,n){var a=n(67294),r=n(79443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},80193:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return m},toc:function(){return d},default:function(){return f}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o=n(41395),l=n(58215),c=n(44996),s=["components"],u={},m={unversionedId:"guides/manage-cluster",id:"guides/manage-cluster",isDocsHomePage:!1,title:"Manage Cluster",description:"Connect to Kubernetes Cluster",source:"@site/docs/guides/manage-cluster.md",sourceDirName:"guides",slug:"/guides/manage-cluster",permalink:"/docs/guides/manage-cluster",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/guides/manage-cluster.md",version:"current",lastUpdatedBy:"Qi Zhang",lastUpdatedAt:1654589270,formattedLastUpdatedAt:"6/7/2022",frontMatter:{},sidebar:"docs",previous:{title:"Install Nocalhost",permalink:"/docs/installation"},next:{title:"Deployment with Nocalhost",permalink:"/docs/guides/deploy/deploy-app"}},d=[{value:"Connect to Kubernetes Cluster",id:"connect-to-kubernetes-cluster",children:[]},{value:"Remove Cluster",id:"remove-cluster",children:[]},{value:"View KubeConfig",id:"view-kubeconfig",children:[]}],p={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"connect-to-kubernetes-cluster"},"Connect to Kubernetes Cluster"),(0,i.kt)("p",null,"Nocalhost supports multi cluster management, There are two methods that you can use to connect to Kubernetes cluster:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Connect By KubeConfig")),(0,i.kt)("p",null,"Select the ",(0,i.kt)("inlineCode",{parentName:"p"},"KubeConfig")," file from any local directory."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Default KubeConfig")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Nocalhost will try to load ",(0,i.kt)("inlineCode",{parentName:"p"},"KubeConfig")," from your local ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.kube/config")," by default."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Paste KubeConfig as Text")),(0,i.kt)("p",null,"Paste the ",(0,i.kt)("inlineCode",{parentName:"p"},"KubeConfig")," as a text."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Get KubeConfig")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can use the following command to view your ",(0,i.kt)("inlineCode",{parentName:"p"},"KubeConfig"),", copy and paste to the Nocalhost plugin."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl config view --minify --raw --flatten\n")))),(0,i.kt)(o.Z,{defaultValue:"vscode",values:[{label:"VS Code",value:"vscode"},{label:"JetBrains",value:"jet"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"vscode",mdxType:"TabItem"},(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,c.Z)("/img/opt/vscode-add-cluster.gif"),width:"250"}),(0,i.kt)("figcaption",null,"Connect to cluster in VS Code"))),(0,i.kt)(l.Z,{value:"jet",mdxType:"TabItem"},(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,c.Z)("/img/opt/idea-connect-cluster.gif"),width:"600"}),(0,i.kt)("figcaption",null,"Connect to cluster in JetBrains IDE")))),(0,i.kt)("h2",{id:"remove-cluster"},"Remove Cluster"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"KubeConfig Unchanged")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Nocalhost will only remove the cluster from inspector, it will not modify your ",(0,i.kt)("inlineCode",{parentName:"p"},"KubeConfig"),"."))),(0,i.kt)(o.Z,{defaultValue:"vscode",values:[{label:"VS Code",value:"vscode"},{label:"JetBrains",value:"jet"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"vscode",mdxType:"TabItem"},(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,c.Z)("/img/opt/vscode-remove-cluster.gif"),width:"290"}),(0,i.kt)("figcaption",null,"Remove cluster in VS Code"))),(0,i.kt)(l.Z,{value:"jet",mdxType:"TabItem"},(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,c.Z)("/img/opt/idea-remove-cluster.gif"),width:"600"}),(0,i.kt)("figcaption",null,"Remove cluster in JetBrains IDE")))),(0,i.kt)("h2",{id:"view-kubeconfig"},"View KubeConfig"),(0,i.kt)("p",null,"Right-click the specified cluster and select ",(0,i.kt)("inlineCode",{parentName:"p"},"View KubeConfig"),", the Nocalhost plugin will open the ",(0,i.kt)("inlineCode",{parentName:"p"},"KubeConfig")," of the cluster."),(0,i.kt)(o.Z,{defaultValue:"vscode",values:[{label:"VS Code",value:"vscode"},{label:"JetBrains",value:"jet"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"vscode",mdxType:"TabItem"},(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,c.Z)("/img/opt/vscode-view-config.gif"),width:"600"}),(0,i.kt)("figcaption",null,"View KubeConfig in VS Code"))),(0,i.kt)(l.Z,{value:"jet",mdxType:"TabItem"},(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,c.Z)("/img/opt/idea-view-config.gif"),width:"600"}),(0,i.kt)("figcaption",null,"View KubeConfig in JetBrains IDE")))))}f.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);