"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[69],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=c,b=d["".concat(a,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function f(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:c,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20592:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return a},toc:function(){return s},default:function(){return u}});var r=n(22122),c=n(19756),i=(n(67294),n(3905)),o=["components"],l={title:"nhctl describe"},a={unversionedId:"cli/cli-describe",id:"cli/cli-describe",isDocsHomePage:!1,title:"nhctl describe",description:"Describe application info",source:"@site/docs/cli/cli-describe.md",sourceDirName:"cli",slug:"/cli/cli-describe",permalink:"/docs/cli/cli-describe",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/cli/cli-describe.md",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1628880717,formattedLastUpdatedAt:"8/13/2021",frontMatter:{title:"nhctl describe"},sidebar:"docs",previous:{title:"nhctl db",permalink:"/docs/cli/cli-db"},next:{title:"nhctl dev",permalink:"/docs/cli/cli-dev"}},s=[{value:"Usage",id:"usage",children:[]},{value:"Flags",id:"flags",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,c.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Describe application info"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"nhctl describe [NAME] [flags]\n")),(0,i.kt)("h2",{id:"flags"},"Flags"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Flags:\n  -d, --deployment string   k8s deployment which your developing service exists\n  -h, --help                help for describe\n  -t, --type string         specify service type\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")))}u.isMDXComponent=!0}}]);