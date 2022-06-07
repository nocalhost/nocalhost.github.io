"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[190],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return b}});var l=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=l.createContext({}),d=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=d(e.components);return l.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},u=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(t),b=a,g=u["".concat(o,".").concat(b)]||u[b]||s[b]||r;return t?l.createElement(g,c(c({ref:n},p),{},{components:t})):l.createElement(g,c({ref:n},p))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=u;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var d=2;d<r;d++)c[d]=t[d];return l.createElement.apply(null,c)}return l.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7643:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return d},default:function(){return s}});var l=t(22122),a=t(19756),r=(t(67294),t(3905)),c=["components"],i={title:"nhctl db"},o={unversionedId:"cli/cli-db",id:"cli/cli-db",isDocsHomePage:!1,title:"nhctl db",description:"leveldb operations",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/cli/cli-db.md",sourceDirName:"cli",slug:"/cli/cli-db",permalink:"/zh-CN/docs/cli/cli-db",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",version:"current",frontMatter:{title:"nhctl db"},sidebar:"docs",previous:{title:"nhctl daemon",permalink:"/zh-CN/docs/cli/cli-daemon"},next:{title:"nhctl describe",permalink:"/zh-CN/docs/cli/cli-describe"}},d=[{value:"nhctl db all",id:"nhctl-db-all",children:[{value:"Usage",id:"usage",children:[]},{value:"Flags",id:"flags",children:[]}]},{value:"nhctl db compact",id:"nhctl-db-compact",children:[{value:"Usage",id:"usage-1",children:[]},{value:"Flags",id:"flags-1",children:[]}]},{value:"nhctl db put",id:"nhctl-db-put",children:[{value:"Usage",id:"usage-2",children:[]},{value:"Flags",id:"flags-2",children:[]}]},{value:"nhctl db size",id:"nhctl-db-size",children:[{value:"Usage",id:"usage-3",children:[]},{value:"Flags",id:"flags-3",children:[]}]}],p={toc:d};function s(e){var n=e.components,t=(0,a.Z)(e,c);return(0,r.kt)("wrapper",(0,l.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"leveldb operations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Usage:\nnhctl db [command]\n\nAvailable Commands:\n  all         Get all leveldb data\n  compact     compact leveldb data\n  put         update leveldb data\n  size        Get all leveldb data size\n")),(0,r.kt)("h2",{id:"nhctl-db-all"},"nhctl db all"),(0,r.kt)("p",null,"Get all leveldb data"),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nhctl db all [NAME] [flags]\n")),(0,r.kt)("h3",{id:"flags"},"Flags"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Flags:\n      --app string   List leveldb data of specified application\n  -h, --help         help for all\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")),(0,r.kt)("h2",{id:"nhctl-db-compact"},"nhctl db compact"),(0,r.kt)("p",null,"Compact leveldb data"),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nhctl db compact [NAME] [flags]\n")),(0,r.kt)("h3",{id:"flags-1"},"Flags"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Flags:\n      --app string   Leveldb data of specified application\n  -h, --help         help for compact\n      --key string   The key of leveldb data\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")),(0,r.kt)("h2",{id:"nhctl-db-put"},"nhctl db put"),(0,r.kt)("p",null,"Update leveldb data"),(0,r.kt)("h3",{id:"usage-2"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nhctl db put [flags]\n")),(0,r.kt)("h3",{id:"flags-2"},"Flags"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Flags:\n      --app string     Leveldb data of specified application\n  -f, --file string    The value of leveldb data\n  -h, --help           help for put\n      --key string     The key of leveldb data\n      --value string   The value of leveldb data\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")),(0,r.kt)("h2",{id:"nhctl-db-size"},"nhctl db size"),(0,r.kt)("p",null,"Get all leveldb data"),(0,r.kt)("h3",{id:"usage-3"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nhctl db size [NAME] [flags]\n")),(0,r.kt)("h3",{id:"flags-3"},"Flags"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Flags:\n      --app string   List leveldb data of specified application\n  -h, --help         help for size\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")))}s.isMDXComponent=!0}}]);