"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[2337],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},44996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return i}});var r=n(52263),o=n(13919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,s=void 0!==i&&i,l=a.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(s)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+c:c}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},41395:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),o=n(80944),a=n(86010),i="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,u=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,d=e.groupId,m=e.className,f=(0,o.Z)(),v=f.tabGroupChoices,h=f.setTabGroupChoices,k=(0,r.useState)(c),N=k[0],C=k[1],b=r.Children.toArray(e.children),y=[];if(null!=d){var g=v[d];null!=g&&g!==N&&p.some((function(e){return e.value===g}))&&C(g)}var P=function(e){var t=e.currentTarget,n=y.indexOf(t),r=p[n].value;C(r),null!=d&&(h(d,r),setTimeout((function(){var e,n,r,o,a,i,l,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,i=window,l=i.innerHeight,u=i.innerWidth,n>=0&&a<=u&&o<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},D=function(e){var t,n;switch(e.keyCode){case u:var r=y.indexOf(e.target)+1;n=y[r]||y[0];break;case l:var o=y.indexOf(e.target)-1;n=y[o]||y[y.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,a.Z)("tabs__item",i,{"tabs__item--active":N===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:D,onFocus:P,onClick:P},n)}))),t?(0,r.cloneElement)(b.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},80944:function(e,t,n){var r=n(67294),o=n(79443);t.Z=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},41681:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=(n(41395),n(58215),n(44996),["components"]),s={title:"CustomResources"},l={unversionedId:"guides/develop-service-crd",id:"guides/develop-service-crd",isDocsHomePage:!1,title:"CustomResources",description:"CustomResources \u5f00\u53d1\u652f\u6301",source:"@site/docs/guides/develop-service-crd.md",sourceDirName:"guides",slug:"/guides/develop-service-crd",permalink:"/docs/guides/develop-service-crd",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/guides/develop-service-crd.md",version:"current",lastUpdatedBy:"Yicai Yu",lastUpdatedAt:1654588098,formattedLastUpdatedAt:"6/7/2022",frontMatter:{title:"CustomResources"}},u=[{value:"CustomResources \u5f00\u53d1\u652f\u6301",id:"customresources-\u5f00\u53d1\u652f\u6301",children:[{value:"How it works",id:"how-it-works",children:[]},{value:"How to use",id:"how-to-use",children:[]}]}],c={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"customresources-\u5f00\u53d1\u652f\u6301"},"CustomResources \u5f00\u53d1\u652f\u6301"),(0,a.kt)("p",null,"Nocalhost \u9664\u4e86\u652f\u6301\u5bf9 Deployment/StatefulSet/Job \u7b49\u5185\u7f6e\u8d44\u6e90\u8fdb\u884c\u5f00\u53d1\uff0c\u4e5f\u652f\u6301\u5bf9 ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources"},"CustomResources")," \u8fdb\u884c\u5f00\u53d1\u3002"),(0,a.kt)("h3",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"Nocalhost \u5bf9 K8s \u8d44\u6e90\u5bf9\u8c61\u7684\u5f00\u53d1\u672c\u8d28\u4e0a\u662f\u5c06 ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/controller/"},"K8s Controller")," \u63a7\u5236\u7684 Pod \u7684\u4e1a\u52a1\u5bb9\u5668\u955c\u50cf\u66ff\u6362\u4e3a\u5f00\u53d1\u5bb9\u5668\u955c\u50cf\uff0c\u518d\u5c06\u672c\u5730\u7684\u6e90\u4ee3\u7801\u540c\u6b65\u5230\u5f00\u53d1\u5bb9\u5668\u4e2d\u53bb\u3002\u5728\u5bf9\u67d0\u79cd\u7279\u5b9a\u7c7b\u578b\u7684\u63a7\u5236\u5668\uff08\u5305\u62ec\u5185\u7f6e\u7c7b\u578b\u548c CustomResources \u7c7b\u578b\uff09\u8fdb\u884c\u5f00\u53d1\u65f6\uff0cNocalhost \u9700\u8981\u77e5\u9053\u4ee5\u4e0b 3 \u4e2a\u4fe1\u606f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pod \u6a21\u677f\u5b9a\u4e49\u5728 Controller \u5b9a\u4e49\u4e2d\u7684\u8def\u5f84\u3002\u5982\u5185\u7f6e\u7c7b\u578b\u7684 Deployment \u7684 Pod \u6a21\u677f\u5b9a\u4e49\u8def\u5f84\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"/spec/template"),"\uff0cNocalhost \u901a\u8fc7\u8be5\u8def\u5f84\u53ef\u4ee5\u83b7\u53d6\u5230 Pod \u6a21\u677f\u5e76\u5bf9\u6a21\u677f\u8fdb\u884c\u4fee\u6539\uff0c\u5c06\u4e1a\u52a1\u5bb9\u5668\u955c\u50cf\u66ff\u6362\u6210\u5f00\u53d1\u5bb9\u5668\u955c\u50cf"),(0,a.kt)("li",{parentName:"ul"},"\u662f\u5728\u539f Controller \u7684 Pod \u6a21\u677f\u5b9a\u4e49\u4e0a\u76f4\u63a5\u4fee\u6539\uff0c\u8fd8\u662f\u4f7f\u7528\u8be5 Pod \u6a21\u677f\u5b9a\u4e49\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Deployment\u3002\u8fd9\u662f\u56e0\u4e3a\u5e76\u4e0d\u662f\u6240\u6709 Controller \u7684 Pod \u6a21\u677f\u90fd\u662f\u53ef\u4ee5\u4fee\u6539\u7684\uff0c\u5982 Job\uff0c\u5728\u8fd9\u79cd\u573a\u666f\u4e0b\uff0cNocalhost \u4f7f\u7528\u539f Controller \u7684 Pod \u6a21\u677f\u5b9a\u4e49\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Deployment\uff08\u8be5 Deployment \u5bf9\u7528\u6237\u900f\u660e\uff09\uff0c\u8be5 Deployment \u7684 Pod \u6a21\u677f\u5b9a\u4e49\u7684\u5bb9\u5668\u955c\u50cf\u4f1a\u88ab\u4fee\u6539\u4e3a\u5f00\u53d1\u5bb9\u5668\u955c\u50cf\uff0c\u672c\u5730\u7684\u6e90\u4ee3\u7801\u4e5f\u4f1a\u88ab\u540c\u6b65\u5230\u8be5 Pod \u91cc\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u4f55\u4fdd\u8bc1\u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\u4e4b\u540e\u96c6\u7fa4\u6d41\u91cf\u53ea\u4f1a\u8bbf\u95ee\u5230\u5f00\u53d1\u5bb9\u5668\u3002Controller \u5e38\u5e38\u4f1a\u7ba1\u7406\u591a\u4e2a Pod\uff0c\u5982\u679c\u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\u4e4b\u540e\u8fd8\u5b58\u5728\u591a\u4e2a Pod \u7684\u8bdd\uff0c\u6211\u4eec\u65e0\u6cd5\u4fdd\u8bc1\u96c6\u7fa4\u7684\u6d41\u91cf\u90fd\u53ea\u8bbf\u95ee\u6b63\u5728\u5f00\u53d1\u4e2d\u7684\u90a3\u4e2a Pod\uff0c\u6240\u4ee5\u4e00\u822c\u6211\u4eec\u9700\u8981\u5c06 Pod \u7684\u526f\u672c\u6570\u7f29\u51cf\u4e3a 1\u3002\u53e6\u5916\uff0c\u5bf9\u4e8e\u521b\u5efa\u65b0\u7684 Deployment \u8fdb\u884c\u5f00\u53d1\u7684 CustomResources\uff0c\u5219\u9700\u8981\u8ba9\u539f Controller \u7684 Pod \u526f\u672c\u6570\u7f29\u51cf\u4e3a 0\uff0c\u5982 DaemonSet,\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5c06 Pod \u7684 NodeName \u6307\u5b9a\u4e3a\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684 Node \u6765\u5c06 DaemonSet \u7ba1\u7406\u7684 Pod \u5168\u90e8\u5220\u6389\u3002")),(0,a.kt)("p",null,"Nocalhost \u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"DevModeAction")," \u6765\u5b9a\u4e49\u5982\u4f55\u5bf9 CustomResources \u8fdb\u884c\u5f00\u53d1\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"DevModeAction")," \u7684\u4e09\u4e2a\u5b57\u6bb5\u5206\u522b\u5411 Nocalhost \u63d0\u4f9b\u4e86\u4e0a\u8ff0 3 \u4e2a\u4fe1\u606f\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.nh/nhctl/config")," \u4e2d\u6dfb\u52a0   ",(0,a.kt)("inlineCode",{parentName:"p"},"DevModeAction"),"  \u6765\u4f7f Nocalhost \u83b7\u5f97\u5f00\u53d1\u6307\u5b9a CustomResources \u7684\u80fd\u529b\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.nh/nhctl/config")," \u7684\u914d\u7f6e\u6837\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'crdDevModeActions:\n- crdType: statefulsets.v1beta1.apps.kruise.io\n  devModeAction:\n    podTemplatePath: /spec/template\n    create: false\n    scalePatches:\n    - type: json\n      patch: \'[{"op":"replace","path":"/spec/replicas","value":1}]\'\n')),(0,a.kt)("p",null,"\u5176\u4e2d\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"crdType: \u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"resource.version.group")," \u7684\u5f62\u5f0f\uff0cresource/version/group \u5206\u522b\u662f CustomResources \u7684 Resource/Version/Group\uff0c\u5373 GVR \u53cd\u8fc7\u6765\u5199\uff0c\u6307\u5b9a\u8be5 ",(0,a.kt)("inlineCode",{parentName:"li"},"DevModeAction")," \u5bf9\u5e94\u7684 CustomResources \u7c7b\u578b"),(0,a.kt)("li",{parentName:"ul"},"devModeAction: \u7528\u4e8e\u63a7\u5236 Nocalhost \u8ba9\u6307\u5b9a CustomResources \u5bf9\u8c61\u8fdb\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"DevMode")," \u65f6\u7684\u884c\u4e3a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"podTemplatePath: \u6307\u5b9a Pod \u6a21\u677f\u5b9a\u4e49\u6240\u5728\u7684\u8def\u5f84\uff0cNocalhost \u4f1a\u4fee\u6539\u8be5\u6a21\u677f\uff0c\u5982\u5c06\u5bb9\u5668\u955c\u50cf\u4fee\u6539\u6210\u5f00\u53d1\u955c\u50cf\uff0c\u6dfb\u52a0 sidecar \u5bb9\u5668\u7b49"),(0,a.kt)("li",{parentName:"ul"},"create: \u6307\u660e CustomResources \u5bf9\u8c61\u5728\u8fdb\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"DevMode")," \u65f6\uff0c\u662f\u5426\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Deployment\uff0c\u5728\u8be5 Deployment \u4e0a\u8fdb\u884c\u5f00\u53d1",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"\uff0cNocalhost \u4f1a\u4f7f\u7528\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"podTemplatePath")," \u4e2d\u627e\u5230\u7684 Pod \u6a21\u677f\u5b9a\u4e49\u6765\u521b\u5efa\u4e00\u4e2a Deployment\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"DevMode")," \u4e0b\u7684\u6240\u6709\u64cd\u4f5c\u90fd\u5728\u6539 Deployment \u4e2d\u8fdb\u884c"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"\uff0cNocalhost \u4f1a\u76f4\u63a5\u4fee\u6539 CustomResources \u5bf9\u8c61\u7684 Pod \u6a21\u677f\u5b9a\u4e49\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"DevMode")," \u4e0b\u7684\u6240\u6709\u64cd\u4f5c\u90fd\u5728\u8be5 CustomResources \u5bf9\u8c61\u4e0a\u8fdb\u884c"))),(0,a.kt)("li",{parentName:"ul"},"scalePatches: \u4e00\u822c\u4e3a\u914d\u7f6e CustomResources \u5bf9\u8c61\u5728\u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\u524d\u5c06\u526f\u672c\u6570\u7f29\u4e3a 1 \u7684 patch\uff0c\u5982\u679c\u526f\u672c\u6570\u5df2\u7ecf\u4e3a 1 \u6216\u4e0d\u9700\u8981\u5c06\u526f\u672c\u6570\u7f29\u4e3a 1\uff0c\u6b64\u9879\u53ef\u4e0d\u914d\u7f6e (\u53c2\u8003\u4e0a\u8ff0\u5173\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"\u5982\u4f55\u4fdd\u8bc1\u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\u4e4b\u540e\u96c6\u7fa4\u6d41\u91cf\u53ea\u4f1a\u8bbf\u95ee\u5230\u5f00\u53d1\u5bb9\u5668")," \u7684\u8bf4\u660e)")))),(0,a.kt)("p",null,"\u53e6\u5916\uff0cNocalhost \u5bf9\u5e38\u89c1\u7684\u5f00\u6e90 CustomResources \u8fdb\u884c\u4e86\u5185\u7f6e\u652f\u6301\uff0c\u5982 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise"},"Kruise")," \u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://openkruise.io/docs/user-manuals/cloneset/"},"CloneSet"),"\u3001",(0,a.kt)("a",{parentName:"p",href:"https://openkruise.io/docs/user-manuals/advancedstatefulset"},"Advanced StatefulSet")," \u3001 ",(0,a.kt)("a",{parentName:"p",href:"https://openkruise.io/docs/user-manuals/advanceddaemonset"},"Advanced DaemonSet")," \u7b49\uff0c\u5bf9\u4e8e\u5185\u7f6e\u652f\u6301\u7684 CustomResources\uff0c\u65e0\u9700\u8fdb\u884c\u914d\u7f6e\u4fbf\u76f4\u63a5\u4f7f\u7528 Nocalhost \u5bf9\u5176\u8fdb\u884c\u5f00\u53d1\u3002"),(0,a.kt)("h3",{id:"how-to-use"},"How to use"),(0,a.kt)("p",null,"\u5728 IDE \u63d2\u4ef6\u4e2d\u627e\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomResources")," \u9009\u9879\u5361\uff0c\u5c55\u5f00\u8be5\u9009\u9879\u5361\u53ef\u4ee5\u67e5\u770b ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomResources")," \u8d44\u6e90\u5217\u8868\uff1a\n",(0,a.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/filess/img0@main/2022/01/12/1641976030414-a509b452-89cf-49de-8495-297d14e89dd2.png",alt:null})),(0,a.kt)("p",null,"\u5728\u8981\u5f00\u53d1\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomResources")," \u8d44\u6e90\u5bf9\u8c61\u4e0a\u70b9\u51fb\u53f3\u952e\uff0c\u5f39\u51fa\u9009\u9879\u6846\uff0c\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Start DevMode")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"Start DevMode(Duplicate)")," \u5373\u53ef\u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\uff1a\n",(0,a.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/filess/img12@main/2022/01/12/1641976139936-e651b371-e734-45d5-9785-04d9fb6bf8e6.png",alt:null})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"CustomResources \u5bf9\u8c61\u7684\u5404\u4e2a\u64cd\u4f5c\u548c Workloads \u4e2d\u7684 Deployment/StatefulSet \u7b49 K8s \u5185\u7f6e\u8d44\u6e90\u5bf9\u8c61\u57fa\u672c\u4e00\u81f4")))}p.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);