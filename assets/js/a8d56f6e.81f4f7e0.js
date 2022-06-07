"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[5761],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(n),g=o,d=f["".concat(i,".").concat(g)]||f[g]||s[g]||a;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},72296:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return s}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),c=["components"],l={title:"nhctl get"},i={unversionedId:"cli/cli-get",id:"cli/cli-get",isDocsHomePage:!1,title:"nhctl get",description:"Get resource info",source:"@site/docs/cli/cli-get.md",sourceDirName:"cli",slug:"/cli/cli-get",permalink:"/docs/cli/cli-get",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/cli/cli-get.md",version:"current",lastUpdatedBy:"Qi Zhang",lastUpdatedAt:1654589270,formattedLastUpdatedAt:"6/7/2022",frontMatter:{title:"nhctl get"},sidebar:"docs",previous:{title:"nhctl exec",permalink:"/docs/cli/cli-exec"},next:{title:"nhctl init",permalink:"/docs/cli/cli-init"}},p=[{value:"Usage",id:"usage",children:[]},{value:"Flags",id:"flags",children:[]}],u={toc:p};function s(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Get resource info"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nhctl get type [flags]\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Example:\n\n# Get all application\nnhctl get application --kubeconfig=kubeconfigfile\n\n# Get all application in namespace\nnhctl get application -n namespaceName --kubeconfig=kubeoconfigpath\n  \n# Get all deployment of application in namespace\nnhctl get deployment -n namespaceName -a bookinfo --kubeconfig=kubeconfigpath\n")),(0,a.kt)("h2",{id:"flags"},"Flags"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Flags:\n  -a, --application string        application name\n  -h, --help                      help for get\n  -o, --outputType string         json or yaml\n  -l, --selector stringToString   Selector (label query) to filter on, only supports '='.(e.g. -l key1=value1,key2=value2) (default [])\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")))}s.isMDXComponent=!0}}]);