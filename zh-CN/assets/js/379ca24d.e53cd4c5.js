"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[9049],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(t),f=l,d=m["".concat(i,".").concat(f)]||m[f]||p[f]||o;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},68038:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return s},default:function(){return p}});var r=t(22122),l=t(19756),o=(t(67294),t(3905)),a=["components"],c={title:"nhctl yaml"},i={unversionedId:"cli/cli-yaml",id:"cli/cli-yaml",isDocsHomePage:!1,title:"nhctl yaml",description:"Yaml tools",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/cli/cli-yaml.md",sourceDirName:"cli",slug:"/cli/cli-yaml",permalink:"/zh-CN/docs/cli/cli-yaml",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1629806685,formattedLastUpdatedAt:"2021/8/24",frontMatter:{title:"nhctl yaml"},sidebar:"docs",previous:{title:"nhctl version",permalink:"/zh-CN/docs/cli/cli-version"},next:{title:"Overview",permalink:"/zh-CN/docs/server/server-overview"}},s=[{value:"nhctl yaml from-json",id:"nhctl-yaml-from-json",children:[{value:"Usage",id:"usage",children:[]},{value:"Flags",id:"flags",children:[]}]},{value:"nhctl yaml to-json",id:"nhctl-yaml-to-json",children:[{value:"Usage",id:"usage-1",children:[]},{value:"Flags",id:"flags-1",children:[]}]}],u={toc:s};function p(e){var n=e.components,t=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Yaml tools"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Usage:\n  nhctl yaml [command]\n\nAvailable Commands:\n  from-json   Convert json to yaml\n  to-json     Convert yaml to json\n")),(0,o.kt)("h2",{id:"nhctl-yaml-from-json"},"nhctl yaml from-json"),(0,o.kt)("p",null,"Convert json to yaml"),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nhctl yaml from-json [flags]\n")),(0,o.kt)("h3",{id:"flags"},"Flags"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Flags:\n  -h, --help   help for from-json\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")),(0,o.kt)("h2",{id:"nhctl-yaml-to-json"},"nhctl yaml to-json"),(0,o.kt)("p",null,"Convert yaml to json"),(0,o.kt)("h3",{id:"usage-1"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nhctl yaml to-json [flags]\n")),(0,o.kt)("h3",{id:"flags-1"},"Flags"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Flags:\n  -h, --help   help for yaml\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")))}p.isMDXComponent=!0}}]);