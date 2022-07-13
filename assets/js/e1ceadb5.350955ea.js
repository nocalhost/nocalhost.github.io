"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[4216],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),d=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return l.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,g=u["".concat(o,".").concat(b)]||u[b]||s[b]||r;return n?l.createElement(g,c(c({ref:t},p),{},{components:n})):l.createElement(g,c({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var d=2;d<r;d++)c[d]=n[d];return l.createElement.apply(null,c)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55177:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return d},default:function(){return s}});var l=n(22122),a=n(19756),r=(n(67294),n(3905)),c=["components"],i={title:"nhctl db"},o={unversionedId:"cli/cli-db",id:"cli/cli-db",isDocsHomePage:!1,title:"nhctl db",description:"leveldb operations",source:"@site/docs/cli/cli-db.md",sourceDirName:"cli",slug:"/cli/cli-db",permalink:"/docs/cli/cli-db",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/cli/cli-db.md",version:"current",lastUpdatedBy:"Qi Zhang",lastUpdatedAt:1657695850,formattedLastUpdatedAt:"7/13/2022",frontMatter:{title:"nhctl db"},sidebar:"docs",previous:{title:"nhctl daemon",permalink:"/docs/cli/cli-daemon"},next:{title:"nhctl describe",permalink:"/docs/cli/cli-describe"}},d=[{value:"nhctl db all",id:"nhctl-db-all",children:[{value:"Usage",id:"usage",children:[]},{value:"Flags",id:"flags",children:[]}]},{value:"nhctl db compact",id:"nhctl-db-compact",children:[{value:"Usage",id:"usage-1",children:[]},{value:"Flags",id:"flags-1",children:[]}]},{value:"nhctl db put",id:"nhctl-db-put",children:[{value:"Usage",id:"usage-2",children:[]},{value:"Flags",id:"flags-2",children:[]}]},{value:"nhctl db size",id:"nhctl-db-size",children:[{value:"Usage",id:"usage-3",children:[]},{value:"Flags",id:"flags-3",children:[]}]}],p={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,c);return(0,r.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"leveldb operations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Usage:\nnhctl db [command]\n\nAvailable Commands:\n  all         Get all leveldb data\n  compact     compact leveldb data\n  put         update leveldb data\n  size        Get all leveldb data size\n")),(0,r.kt)("h2",{id:"nhctl-db-all"},"nhctl db all"),(0,r.kt)("p",null,"Get all leveldb data"),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nhctl db all [NAME] [flags]\n")),(0,r.kt)("h3",{id:"flags"},"Flags"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Flags:\n      --app string   List leveldb data of specified application\n  -h, --help         help for all\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")),(0,r.kt)("h2",{id:"nhctl-db-compact"},"nhctl db compact"),(0,r.kt)("p",null,"Compact leveldb data"),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nhctl db compact [NAME] [flags]\n")),(0,r.kt)("h3",{id:"flags-1"},"Flags"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Flags:\n      --app string   Leveldb data of specified application\n  -h, --help         help for compact\n      --key string   The key of leveldb data\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")),(0,r.kt)("h2",{id:"nhctl-db-put"},"nhctl db put"),(0,r.kt)("p",null,"Update leveldb data"),(0,r.kt)("h3",{id:"usage-2"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nhctl db put [flags]\n")),(0,r.kt)("h3",{id:"flags-2"},"Flags"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Flags:\n      --app string     Leveldb data of specified application\n  -f, --file string    The value of leveldb data\n  -h, --help           help for put\n      --key string     The key of leveldb data\n      --value string   The value of leveldb data\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")),(0,r.kt)("h2",{id:"nhctl-db-size"},"nhctl db size"),(0,r.kt)("p",null,"Get all leveldb data"),(0,r.kt)("h3",{id:"usage-3"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nhctl db size [NAME] [flags]\n")),(0,r.kt)("h3",{id:"flags-3"},"Flags"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Flags:\n      --app string   List leveldb data of specified application\n  -h, --help         help for size\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")))}s.isMDXComponent=!0}}]);