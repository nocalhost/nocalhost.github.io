"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[9753],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),u=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(a.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,g=d["".concat(a,".").concat(f)]||d[f]||s[f]||c;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=d;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<c;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},43954:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=t(74034),o=t(79973),c=(t(67294),t(3905)),i=["components"],l={title:"nhctl render"},a=void 0,u={unversionedId:"cli/cli-render",id:"cli/cli-render",isDocsHomePage:!1,title:"nhctl render",description:"Render the file for debugging",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/cli/cli-render.md",sourceDirName:"cli",slug:"/cli/cli-render",permalink:"/zh-CN/docs/cli/cli-render",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",tags:[],version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1629806685,formattedLastUpdatedAt:"2021/8/24",frontMatter:{title:"nhctl render"},sidebar:"docs",previous:{title:"nhctl pvc",permalink:"/zh-CN/docs/cli/cli-pvc"},next:{title:"nhctl reset",permalink:"/zh-CN/docs/cli/cli-reset"}},p=[{value:"Usage",id:"usage",children:[]},{value:"Flags",id:"flags",children:[]}],s={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Render the file for debugging"),(0,c.kt)("h2",{id:"usage"},"Usage"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"nhctl render [NAME] [flags]\n")),(0,c.kt)("h2",{id:"flags"},"Flags"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"Flags:\n  -e, --env path string   the env file for render injection\n  -h, --help              help for render\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")))}d.isMDXComponent=!0}}]);