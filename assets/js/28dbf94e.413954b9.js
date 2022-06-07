"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[3507],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,m=f["".concat(a,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=f;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},54753:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return a},toc:function(){return s},default:function(){return p}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),c=["components"],l={title:"nhctl version"},a={unversionedId:"cli/cli-version",id:"cli/cli-version",isDocsHomePage:!1,title:"nhctl version",description:"Get nhctl's version",source:"@site/docs/cli/cli-version.md",sourceDirName:"cli",slug:"/cli/cli-version",permalink:"/docs/cli/cli-version",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/cli/cli-version.md",version:"current",lastUpdatedBy:"Yicai Yu",lastUpdatedAt:1654588098,formattedLastUpdatedAt:"6/7/2022",frontMatter:{title:"nhctl version"},sidebar:"docs",previous:{title:"nhctl upgrade",permalink:"/docs/cli/cli-upgrade"},next:{title:"nhctl yaml",permalink:"/docs/cli/cli-yaml"}},s=[{value:"Usage",id:"usage",children:[]},{value:"Flags",id:"flags",children:[]}],u={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Get nhctl's version"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"nhctl version [flags]\n")),(0,i.kt)("h2",{id:"flags"},"Flags"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Flags:\n  -h, --help   help for version\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")))}p.isMDXComponent=!0}}]);