"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[7229],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var a=r.createContext({}),u=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,c=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(t),d=l,m=f["".concat(a,".").concat(d)]||f[d]||p[d]||c;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var c=t.length,o=new Array(c);o[0]=f;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<c;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},52219:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return a},toc:function(){return u},default:function(){return p}});var r=t(22122),l=t(19756),c=(t(67294),t(3905)),o=["components"],i={title:"nhctl uninstall"},a={unversionedId:"cli/cli-uninstall",id:"cli/cli-uninstall",isDocsHomePage:!1,title:"nhctl uninstall",description:"Uninstall application",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/cli/cli-uninstall.md",sourceDirName:"cli",slug:"/cli/cli-uninstall",permalink:"/zh-CN/docs/cli/cli-uninstall",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",version:"current",frontMatter:{title:"nhctl uninstall"},sidebar:"docs",previous:{title:"nhctl sync",permalink:"/zh-CN/docs/cli/cli-sync"},next:{title:"nhctl upgrade",permalink:"/zh-CN/docs/cli/cli-upgrade"}},u=[{value:"Usage",id:"usage",children:[]},{value:"Flags",id:"flags",children:[]}],s={toc:u};function p(e){var n=e.components,t=(0,l.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Uninstall application"),(0,c.kt)("h2",{id:"usage"},"Usage"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"nhctl uninstall [NAME] [flags]\n")),(0,c.kt)("h2",{id:"flags"},"Flags"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"Flags:\n      --force   force to uninstall anyway\n  -h, --help    help for uninstall\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")))}p.isMDXComponent=!0}}]);