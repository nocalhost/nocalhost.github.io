"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[1831],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=u(n),m=l,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},88703:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(22122),l=n(19756),o=(n(67294),n(3905)),i=["components"],a={title:"nhctl install"},c={unversionedId:"cli/cli-install",id:"cli/cli-install",isDocsHomePage:!1,title:"nhctl install",description:"\u5e94\u7528\u90e8\u7f72",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/cli/cli-install.md",sourceDirName:"cli",slug:"/cli/cli-install",permalink:"/zh-CN/docs/cli/cli-install",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1629806685,formattedLastUpdatedAt:"2021/8/24",frontMatter:{title:"nhctl install"},sidebar:"docs",previous:{title:"nhctl init",permalink:"/zh-CN/docs/cli/cli-init"},next:{title:"nhctl k",permalink:"/zh-CN/docs/cli/cli-k"}},u=[{value:"Usage",id:"usage",children:[]},{value:"Flags",id:"flags",children:[]}],s={toc:u};function p(e){var t=e.components,n=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5e94\u7528\u90e8\u7f72"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nhctl install [NAME] [flags]\n")),(0,o.kt)("h2",{id:"flags"},"Flags"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u6807\u5fd7\uff1a\n      --config \u5b57\u7b26\u4e32\u6307\u5b9a\u4e86\u4e00\u4e2a\u76f8\u5bf9\u4e8e . ocalhost \u76ee\u5f55\n  -r, --git-ref \u5b57\u7b26\u4e32\u8d44\u6e90 git ref\n  -u, --git-url \u5b57\u7b26\u4e32\u8d44\u6e90git url\n      --helm-chart-name \u5b57\u7b26\u4e32\u56fe\u8868\u540d\u79f0\n      --helm-repo-name \u5b57\u7b26\u4e32\u56fe\u8868\u5e93\u540d\u79f0\n      --helm-repo-url \u5b57\u7b26\u4e32\u5e93\u5e93\u5e93\u5e93\u5728\u54ea\u91cc\u5b9a\u4f4d\u8bf7\u6c42\u7684\u56fe\u8868\n      --helm-repo-version \u5b57\u7b26\u4e32\u5e93\u7248\u672c\n  -f, --helm-values \u5b57\u7b26\u4e32\u5934\u76d4\u7684\u503c\u3002 aml\n  -h, --help \u5e2e\u52a9\u5b89\u88c5\n      --ignore-pre-install \u5ffd\u7565\u9884\u5b89\u88c5\n      --local-path \u672c\u5730\u8def\u5f84\u4ee5\u5e94\u7528\n  -c, --outer-config \u5b57\u7b26\u4e32\u6307\u5b9a\u4e00\u4e2a\u914d\u7f6e\u3002 \u5728\u672c\u5730\u8def\u5f84\n      --resour-path \u5b57\u7b26\u4e32\u8d44\u6e90\u8def\u5f84\n      --set \u5b57\u7b26\u4e32\u8bbe\u5b9a\u547d\u4ee4\u884c\u4e0a\u7684\u503c (\u53ef\u4ee5\u7528\u9017\u53f7\u952e1=val1 \u6307\u5b9a\u591a\u4e2a\u6216\u5355\u72ec\u7684\u503c) Eey2=val2\n  -t, --type \u5b57\u7b26\u4e32 nocalhost \u5e94\u7528\u7a0b\u5e8f\u7c7b\u578b\uff1ahelmRepo, helmGit, helmLocal, rawManifest, rawManifestGit rawManifestLocal \u6216 kustomizeGit\n      --\u7b49\u5f85\u5b8c\u6210\n\n\u5168\u5c40\u6807\u5fd7\uff1a\n      --debug \u542f\u7528\u8c03\u8bd5\u7ea7\u522b\u65e5\u5fd7\n      --kubeconfig \u5b57\u7b26\u4e32\u7684 kubeconfig \u6587\u4ef6\u8def\u5f84\n  -n, --namespace \u5b57\u7b26\u4e32 kubernetes \u547d\u540d\u7a7a\u95f4\n")))}p.isMDXComponent=!0}}]);