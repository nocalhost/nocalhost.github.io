"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[5512],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(t),d=a,g=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return t?n.createElement(g,c(c({ref:r},p),{},{components:t})):n.createElement(g,c({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},63153:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var n=t(22122),a=t(19756),o=(t(67294),t(3905)),c=["components"],i={title:"nhctl upgrade"},l={unversionedId:"cli/cli-upgrade",id:"cli/cli-upgrade",isDocsHomePage:!1,title:"nhctl upgrade",description:"Upgrade k8s application",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/cli/cli-upgrade.md",sourceDirName:"cli",slug:"/cli/cli-upgrade",permalink:"/zh-CN/docs/cli/cli-upgrade",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1629806685,formattedLastUpdatedAt:"2021/8/24",frontMatter:{title:"nhctl upgrade"},sidebar:"docs",previous:{title:"nhctl uninstall",permalink:"/zh-CN/docs/cli/cli-uninstall"},next:{title:"nhctl version",permalink:"/zh-CN/docs/cli/cli-version"}},s=[{value:"Usage",id:"usage",children:[]},{value:"Flags",id:"flags",children:[]}],p={toc:s};function u(e){var r=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Upgrade k8s application"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nhctl upgrade [NAME] [flags]\n")),(0,o.kt)("h2",{id:"flags"},"Flags"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Flags:\n      --config string              specify a config relative to .nocalhost dir\n  -r, --git-ref string             resources git ref\n  -u, --git-url string             resources git url\n      --helm-chart-name string     chart name\n      --helm-repo-name string      chart repository name\n      --helm-repo-url string       chart repository url where to locate the requested chart\n      --helm-repo-version string   chart repository version\n  -f, --helm-values string         helm's Value.yaml\n  -h, --help                       help for upgrade\n      --local-path string          local path for application\n  -c, --outer-config string        specify a config.yaml in local path\n      --resource-path strings      resources path\n      --set strings                set values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)\n")))}u.isMDXComponent=!0}}]);