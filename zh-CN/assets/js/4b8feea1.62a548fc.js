"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[5074],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45534:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),c=["components"],i={},p={unversionedId:"server/nh-dep",id:"server/nh-dep",isDocsHomePage:!1,title:"Nocalhost Dep",description:"Nocalhost Dep \u662f\u4e00\u4e2a Webhook admission, \u7528\u4e8e\u5904\u7406\u5e94\u7528\u5b89\u88c5\u65f6\u7684\u670d\u52a1\u4f9d\u8d56\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/server/nh-dep.md",sourceDirName:"server",slug:"/server/nh-dep",permalink:"/zh-CN/docs/server/nh-dep",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1629806685,formattedLastUpdatedAt:"2021/8/24",frontMatter:{},sidebar:"docs",previous:{title:"Manage Applications",permalink:"/zh-CN/docs/server/manage-app"},next:{title:"Nocalhost Config Specs",permalink:"/zh-CN/docs/reference/nh-config"}},s=[],l={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Nocalhost Dep"))," \u662f\u4e00\u4e2a ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/"},"Webhook admission"),", \u7528\u4e8e\u5904\u7406\u5e94\u7528\u5b89\u88c5\u65f6\u7684\u670d\u52a1\u4f9d\u8d56\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u5728 Nocalhost \u914d\u7f6e\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"services[*].dependLabelSelector")," \u53ef\u4ee5\u5b9a\u4e49\u670d\u52a1\u7684\u4f9d\u8d56\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Nocalhost Dep"))," \u4f1a\u5728\u5b89\u88c5\u5e94\u7528\u65f6\u4e3a\u5bb9\u5668\u6ce8\u5165\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"initContainer"),"\u3002 \u8be5 ",(0,a.kt)("inlineCode",{parentName:"p"},"initContainer")," \u4f1a\u4fdd\u8bc1\u5176\u6240\u4f9d\u8d56\u7684\u670d\u52a1\u6210\u529f\u8fd0\u884c\u540e\u518d\u521b\u5efa\u8be5\u670d\u52a1\u76f8\u5173\u7684\u5bb9\u5668\u3002"))}u.isMDXComponent=!0}}]);