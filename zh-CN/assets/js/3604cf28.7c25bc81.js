"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[7843],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:e},s),{},{components:n})):r.createElement(f,i({ref:e},s))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13919:function(t,e,n){function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!r(t)}n.d(e,{b:function(){return r},Z:function(){return a}})},44996:function(t,e,n){n.d(e,{C:function(){return o},Z:function(){return i}});var r=n(52263),a=n(13919);function o(){var t=(0,r.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,o=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,l=void 0!==i&&i,c=o.absolute,u=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return e+n;var s=n.startsWith(e)?n:e+n.replace(/^\//,"");return u?t+s:s}(o,n,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,o().withBaseUrl)(t,e)}},35790:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=n(44996),l=["components"],c={title:"Nocalhost \u5b98\u65b9\u6587\u6863\u7ffb\u8bd1\u6d3b\u52a8",tags:["documentation"]},u={permalink:"/zh-CN/blog/docs-translate",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/docs-translate.md",title:"Nocalhost \u5b98\u65b9\u6587\u6863\u7ffb\u8bd1\u6d3b\u52a8",description:"\u80cc\u666f",date:"2021-12-23T03:25:03.242Z",formattedDate:"2021\u5e7412\u670823\u65e5",tags:[{label:"documentation",permalink:"/zh-CN/blog/tags/documentation"}],readingTime:.56,truncated:!1,nextItem:{title:"\u4f7f\u7528 Nocalhost \u5f00\u53d1 Kubernetes \u4e2d\u7684 APISIX Controller",permalink:"/zh-CN/blog/api-six"}},s=[{value:"\u80cc\u666f",id:"\u80cc\u666f",children:[]},{value:"\u6d3b\u52a8\u6d41\u7a0b",id:"\u6d3b\u52a8\u6d41\u7a0b",children:[]},{value:"\u901a\u8fc7 Crowndin \u8fdb\u884c\u7ffb\u8bd1",id:"\u901a\u8fc7-crowndin-\u8fdb\u884c\u7ffb\u8bd1",children:[{value:"\u7ffb\u8bd1\u8981\u6c42",id:"\u7ffb\u8bd1\u8981\u6c42",children:[]},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",children:[]}]}],p={toc:s};function m(t){var e=t.components,n=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,o.kt)("p",null,"Nocalhost \u7684\u65b0\u5b98\u7f51\u6846\u67b6\u5df2\u7ecf\u4e0a\u7ebf\u3002\u56e0\u4e3a\u76ee\u524d Nocalhost \u5b98\u65b9\u6587\u6863\u53ea\u6709\u82f1\u6587\u7248\uff0c\u8fd9\u63d0\u9ad8\u4e86\u5b66\u4e60\u548c\u4f7f\u7528 Nocalhost \u7684\u95e8\u69db\uff0c\u4e0d\u5229\u4e8e\u9879\u76ee\u7684\u4f20\u64ad\u548c\u53d1\u5c55\u3002\u540c\u65f6\u7ffb\u8bd1\u5de5\u4f5c\u4e5f\u80fd\u663e\u8457\u63d0\u5347\u8bed\u8a00\u80fd\u529b\uff0c\u5e2e\u52a9\u6211\u4eec\u62d3\u5bbd\u9605\u8bfb\u6280\u672f\u8d44\u6599\u7684\u5e7f\u5ea6\uff0c\u6545\u7ec4\u7ec7\u672c\u6b21\u6d3b\u52a8\u3002"),(0,o.kt)("h2",{id:"\u6d3b\u52a8\u6d41\u7a0b"},"\u6d3b\u52a8\u6d41\u7a0b"),(0,o.kt)("p",null,"\u672c\u6b21\u6d3b\u52d5\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 Crowdin \u5e73\u53f0\u6216\u4e0b\u8f7d\u6e90\u7801\u5bf9\u6587\u6863\u8fdb\u884c\u7ffb\u8bd1"),(0,o.kt)("h2",{id:"\u901a\u8fc7-crowndin-\u8fdb\u884c\u7ffb\u8bd1"},"\u901a\u8fc7 Crowndin \u8fdb\u884c\u7ffb\u8bd1"),(0,o.kt)("p",null,"\u7ffb\u8bd1\u9879\u76ee\u7684\u7684\u5730\u5740\u5728\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://crowdin.com/project/nocalhost"},"https://crowdin.com/project/nocalhost")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u8d26\u53f7")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5f53\u8fdb\u5165\u9879\u76ee\u540e\uff0c\u9700\u8981\u6ce8\u518c\u4e00\u4e2a Crowdin \u7684\u8d26\u53f7\uff0c\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7 GitHub \u8d26\u53f7\u4e00\u952e\u767b\u5f55"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u8fdb\u5165\u4e0a\u8ff0\u5730\u5740\u8fdb\u5165\u9879\u76ee"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9\u9700\u8981\u7ffb\u8bd1\u7684\u6587\u6863\uff0c\u8fdb\u5165\u5728\u7ebf\u7f16\u8f91\u5668"),(0,o.kt)("li",{parentName:"ol"},"\u8fdb\u884c\u5728\u7ebf\u7ffb\u8bd1"),(0,o.kt)("li",{parentName:"ol"},"\u7ffb\u8bd1\u5b8c\u6210\u540e\u9000\u51fa\u7f16\u8bd1\u5668")),(0,o.kt)("figure",{className:"img-frame"},(0,o.kt)("img",{className:"gif-img",src:(0,i.Z)("/img/translate/translate.gif")})),(0,o.kt)("h3",{id:"\u7ffb\u8bd1\u8981\u6c42"},"\u7ffb\u8bd1\u8981\u6c42"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528\u81ea\u52a8\u7ffb\u8bd1\uff0c\u8bf7",(0,o.kt)("strong",{parentName:"li"},"\u5148\u68c0\u67e5"),"\u6e05\u695a\u81ea\u52a8\u7ffb\u8bd1\u7684\u7ed3\u679c\uff0c\u5305\u62ec\u683c\u5f0f\u548c\u9605\u8bfb\u4e60\u60ef"),(0,o.kt)("li",{parentName:"ul"},"\u6570\u5b57\u548c\u82f1\u6587\u4e24\u8fb9\u662f\u4e2d\u6587\u8981\u52a0\u7a7a\u683c\u3002"),(0,o.kt)("li",{parentName:"ul"},"Nocalhost \u548c Nocalhost Server \u7edf\u4e00\u5199\u6cd5\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7ffb\u8bd1\u5b8c\u8bf7\u5148\u9605\u8bfb\u4e00\u904d\uff0c\u4e0d\u8981\u51fa\u73b0\u9057\u6f0f\u6bb5\u843d\uff0c\u4fdd\u8bc1\u6587\u7ae0\u901a\u987a\u3001\u7b26\u5408\u4e2d\u6587\u9605\u8bfb\u4e60\u60ef\u3002\u4e0d\u8ffd\u6c42\u4e25\u683c\u4e00\u81f4\uff0c\u53ef\u4ee5\u610f\u8bd1\u3002review \u7684\u65f6\u5019\u4e5f\u4f1a\u68c0\u9a8c\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4f60\u548c\u60a8\u4e0d\u8981\u6df7\u7528\uff0c\u7edf\u4e00\u4f7f\u7528\u7528 ",(0,o.kt)("strong",{parentName:"li"},"\u201c\u4f60\u201d"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u7ffb\u8bd1\u7684\u8bcd\u6c47\u53ef\u4ee5\u4e0d\u7ffb\u8bd1\uff0c\u53ef\u4ee5\u5728 PR \u4e2d\u8bf4\u660e\uff0creview \u7684\u65f6\u5019\u4f1a\u67e5\u770b\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6ce8\u610f\u4e2d\u82f1\u6587\u6807\u70b9\u7b26\u53f7\u3002")),(0,o.kt)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,o.kt)("p",null,"\u5728\u7ffb\u8bd1\u7684\u65f6\u5019\uff0c\u8bf7\u6ce8\u610f\u539f\u6587\u683c\u5f0f\u548c Crowdin \u751f\u6210\u7684\u6807\u7b7e\u3002\u6bd4\u5982\u4e0b\u56fe\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"<0></0>")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"<1></1>"),"\u3002\u8fd9\u4e9b\u6807\u7b7e\u662f Crowdin \u81ea\u52a8\u751f\u6210\u7684\uff0c\u7528\u4e8e\u66ff\u6362\u539f\u6587\u4e2d\u7684\u56fe\u6807\uff0c\u7279\u6b8a\u683c\u5f0f\u7b49\u3002"),(0,o.kt)("figure",{className:"img-frame"},(0,o.kt)("img",{className:"gif-img",src:(0,i.Z)("/img/translate/label.png")}),(0,o.kt)("figcaption",null,"Crowdin \u6807\u7b7e")),(0,o.kt)("p",null,"Nocalhost \u5b98\u7f51\u4f7f\u7528\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus"),"\uff0c\u56e0\u6b64\u67d0\u4e9b\u7279\u6b8a\u7b26\u53f7\u548c\u683c\u5f0f\u8bf7\u6ce8\u610f\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"\n:::note title\n\n\u5185\u5bb9\u3002\u3002\u3002\u3002\u3002\n\n:::\n\n")),(0,o.kt)("p",null,"\u8fd9\u4e2a\u662f Docuasurus \u7684\u544a\u793a\uff08Admonition\uff09\u65b9\u6cd5\u3002\u5728\u7ffb\u8bd1\u65f6\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"note")," \u9700\u8981\u7ffb\u8bd1\uff0c\u540e\u9762\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," \u9700\u8981\u7ffb\u8bd1\u3002\u53e6\u5916\uff0c\u8bf7\u6ce8\u610f\u683c\u5f0f\u3002"),(0,o.kt)("figure",{className:"img-frame"},(0,o.kt)("img",{className:"gif-img",src:(0,i.Z)("/img/translate/admonition.png")})))}m.isMDXComponent=!0}}]);