"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[303],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),p=l,k=m["".concat(s,".").concat(p)]||m[p]||d[p]||r;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function l(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return l}})},4996:function(e,t,n){n.d(t,{C:function(){return r},Z:function(){return i}});var a=n(2263),l=n(3919);function r(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,i=r.forcePrependBaseUrl,o=void 0!==i&&i,s=r.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,l.b)(n))return n;if(o)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(r,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),l=n(9443);var r=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,l=e.block,c=e.defaultValue,u=e.values,d=e.groupId,m=e.className,p=a.Children.toArray(e.children),k=null!=u?u:p.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=c?c:null==(t=p.find((function(e){return e.props.default})))?void 0:t.props.value,v=r(),h=v.tabGroupChoices,g=v.setTabGroupChoices,b=(0,a.useState)(f),N=b[0],y=b[1],w=[];if(null!=d){var C=h[d];null!=C&&C!==N&&k.some((function(e){return e.value===C}))&&y(C)}var O=function(e){var t=e.currentTarget,n=w.indexOf(t),a=k[n].value;y(a),null!=d&&(g(d,a),setTimeout((function(){var e,n,a,l,r,i,o,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,l=e.bottom,r=e.right,i=window,o=i.innerHeight,c=i.innerWidth,n>=0&&r<=c&&l<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case"ArrowLeft":var l=w.indexOf(e.target)-1;n=w[l]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},m)},k.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":N===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:O,onClick:O},null!=n?n:t)}))),n?(0,a.cloneElement)(p.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},p.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},1873:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return p},default:function(){return f}});var a=n(2122),l=n(9756),r=(n(7294),n(3905)),i=n(5064),o=n(8215),s=n(4996),c=["components"],u={},d="\u5b89\u88c5 Nocalhost",m={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"\u5b89\u88c5 Nocalhost",description:"\u5f53\u5b89\u88c5 Nocalhost \u63d2\u4ef6\u65f6\uff0c\u4f1a\u81ea\u52a8\u5e2e\u4f60\u5b89\u88c5 nhctl",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/installation.md",sourceDirName:".",slug:"/installation",permalink:"/zh-CN/docs/installation",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",tags:[],version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1629806685,formattedLastUpdatedAt:"2021/8/24",frontMatter:{},sidebar:"docs",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh-CN/docs/quick-start"},next:{title:"\u96c6\u7fa4\u7ba1\u7406",permalink:"/zh-CN/docs/guides/manage-cluster"}},p=[{value:"\u517c\u5bb9\u6027",id:"\u517c\u5bb9\u6027",children:[]},{value:"\u5b89\u88c5 VS Code \u63d2\u4ef6",id:"\u5b89\u88c5-vs-code-\u63d2\u4ef6",children:[]},{value:"\u5b89\u88c5 JetBrains \u63d2\u4ef6",id:"\u5b89\u88c5-jetbrains-\u63d2\u4ef6",children:[{value:"Windows",id:"windows",children:[]},{value:"MacOS",id:"macos",children:[]}]},{value:"\u5347\u7ea7\u63d2\u4ef6",id:"\u5347\u7ea7\u63d2\u4ef6",children:[]},{value:"\u5378\u8f7d",id:"\u5378\u8f7d",children:[{value:"\u5378\u8f7d\u63d2\u4ef6",id:"\u5378\u8f7d\u63d2\u4ef6",children:[]},{value:"\u5378\u8f7d <code>nhctl</code>",id:"\u5378\u8f7d-nhctl",children:[]}]}],k={toc:p};function f(e){var t=e.components,n=(0,l.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5b89\u88c5-nocalhost"},"\u5b89\u88c5 Nocalhost"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"nhctl")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5f53\u5b89\u88c5 Nocalhost \u63d2\u4ef6\u65f6\uff0c\u4f1a\u81ea\u52a8\u5e2e\u4f60\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"p"},"nhctl")))),(0,r.kt)("h2",{id:"\u517c\u5bb9\u6027"},"\u517c\u5bb9\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"IDE"),(0,r.kt)("th",null,"\u7248\u672c"),(0,r.kt)("th",null,"\u6d4b\u8bd5\u7ed3\u679c"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"VS Code "),(0,r.kt)("td",null,"1.58.2 (Universal)"),(0,r.kt)("td",null,(0,r.kt)("strong",{className:"pass-tag"},"\u901a\u8fc7"))),(0,r.kt)("tr",null,(0,r.kt)("td",{rowspan:"3"},"JetBrains"),(0,r.kt)("td",null,"2021.2 - Intel and Apple Silicon"),(0,r.kt)("td",null,(0,r.kt)("strong",{className:"pass-tag"},"\u901a\u8fc7"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"2021.1 - Intel and Apple Silicon"),(0,r.kt)("td",null,(0,r.kt)("strong",{className:"pass-tag"},"\u901a\u8fc7"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"2020.3 - Intel and Apple Silicon"),(0,r.kt)("td",null,(0,r.kt)("strong",{className:"pass-tag"},"\u901a\u8fc7"))))),(0,r.kt)("h2",{id:"\u5b89\u88c5-vs-code-\u63d2\u4ef6"},"\u5b89\u88c5 VS Code \u63d2\u4ef6"),(0,r.kt)(i.Z,{defaultValue:"market",values:[{label:"\u4ece\u63d2\u4ef6\u5e02\u573a\u5b89\u88c5",value:"market"},{label:"\u624b\u52a8\u5b89\u88c5",value:"manual"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"market",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6253\u5f00 VS Code\uff0c\u70b9\u51fb\u5de6\u4fa7\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Extension")," \u6309\u94ae ",(0,r.kt)("img",{src:(0,s.Z)("/img/icons/vs-code-icon.jpg"),width:"20"})," \u56fe\u6807"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u641c\u7d22\u6846\u4e2d\u8f93\u5165 ",(0,r.kt)("inlineCode",{parentName:"li"},"Nocalhost"))),(0,r.kt)("figure",{className:"img-frame"},(0,r.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/installation/vscode-market.png")}),(0,r.kt)("figcaption",null,"\u4ece VS Code \u5e94\u7528\u5e02\u573a\u5b89\u88c5"))),(0,r.kt)(o.Z,{value:"manual",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4ece\u6211\u4eec\u7684 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nocalhost/nocalhost-vscode-plugin/releases/latest"},"GitHub \u4ed3\u5e93")," \u4e2d\u4e0b\u8f7d\u6700\u65b0\u7684\u7248\u672c"),(0,r.kt)("li",{parentName:"ol"},"\u6253\u5f00 Vs Code\uff0c\u70b9\u51fb\u5de6\u4fa7\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Extension")," \u6253\u5f00 VS Code\uff0c\u70b9\u51fb\u5de6\u4fa7\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Extension")," ",(0,r.kt)("img",{src:(0,s.Z)("/img/icons/vs-code-icon.jpg"),width:"20"})," \u6309\u94ae"),(0,r.kt)("li",{parentName:"ol"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"Extension")," \u53f3\u4e0a\u89d2\u70b9\u51fb ",(0,r.kt)("img",{src:(0,s.Z)("/img/icons/cluster-action-icon.jpg"),width:"20"})," \u6309\u94ae\uff0c\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"li"},"Install from VSIX..."),"\uff0c\u9009\u4e2d\u521a\u624d\u4e0b\u8f7d\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"VSIX")," \u6587\u4ef6")),(0,r.kt)("figure",{className:"img-frame"},(0,r.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/installation/vs-manual.jpg")}),(0,r.kt)("figcaption",null,"\u624b\u52a8\u5b89\u88c5")))),(0,r.kt)("h2",{id:"\u5b89\u88c5-jetbrains-\u63d2\u4ef6"},"\u5b89\u88c5 JetBrains \u63d2\u4ef6"),(0,r.kt)(i.Z,{defaultValue:"market",values:[{label:"\u4ece\u63d2\u4ef6\u5e02\u573a\u5b89\u88c5",value:"market"},{label:"\u624b\u52a8\u5b89\u88c5",value:"manual"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"market",mdxType:"TabItem"},(0,r.kt)("h3",{id:"windows"},"Windows"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'File > Settings > Plugins > Browse repositories... > Search for "Nocalhost" > Install Plugin')),(0,r.kt)("h3",{id:"macos"},"MacOS"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'Preferences > Settings > Plugins > Browse repositories... > Search for "Nocalhost" > Install Plugin')),(0,r.kt)("figure",{className:"img-frame"},(0,r.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/installation/jb-market.png")}),(0,r.kt)("figcaption",null,"\u4ece JetBrains \u63d2\u4ef6\u5e02\u573a\u5b89\u88c5"))),(0,r.kt)(o.Z,{value:"manual",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4ece\u6211\u4eec\u7684 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nocalhost/nocalhost-intellij-plugin/releases/latest"},"GitHub \u4ed3\u5e93")," \u4e2d\u4e0b\u8f7d\u6700\u65b0\u7684\u7248\u672c"),(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u63d2\u4ef6\uff1a",(0,r.kt)("kbd",null,"Preferences")," > ",(0,r.kt)("kbd",null,"Plugins")," > ",(0,r.kt)("kbd",null,"Install from disk... "))),(0,r.kt)("figure",{className:"img-frame"},(0,r.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/installation/jb-manual.jpg")}),(0,r.kt)("figcaption",null,"\u624b\u52a8\u5b89\u88c5")))),(0,r.kt)("h2",{id:"\u5347\u7ea7\u63d2\u4ef6"},"\u5347\u7ea7\u63d2\u4ef6"),(0,r.kt)("p",null,"Nocalhost \u4f1a\u5728 IDE \u6bcf\u6b21\u542f\u52a8\u7684\u65f6\u5019\u81ea\u52a8\u66f4\u65b0\u63d2\u4ef6\u3002"),(0,r.kt)("h2",{id:"\u5378\u8f7d"},"\u5378\u8f7d"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e0b\u8ff0\u6b65\u9aa4\u5378\u8f7d Nocalhost"),(0,r.kt)("h3",{id:"\u5378\u8f7d\u63d2\u4ef6"},"\u5378\u8f7d\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5728\u4f60\u7684 IDE \u4e2d\u5378\u8f7d\u63d2\u4ef6"),(0,r.kt)("h3",{id:"\u5378\u8f7d-nhctl"},"\u5378\u8f7d ",(0,r.kt)("inlineCode",{parentName:"h3"},"nhctl")),(0,r.kt)("p",null,"\u4ece\u4f60\u7684\u6839\u76ee\u5f55\u4e0b\u5220\u9664 ",(0,r.kt)("inlineCode",{parentName:"p"},".nh")," \u6587\u4ef6\u5939"),(0,r.kt)(i.Z,{defaultValue:"mac",values:[{label:"Mac & Linux",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".nh")," \u6587\u4ef6\u5939\u5728\u4f60\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"~/")," \u76ee\u5f55\u4e0b\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e0b\u8ff0\u547d\u4ee4\u5220\u9664\u5b83"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf .nh\n"))),(0,r.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".nh")," \u6587\u4ef6\u5939\u5728\u4f60\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"<ROOT PATH>/User/username")," \u6587\u4ef6\u5939\u4e0b\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u5220\u9664\u5b83"))))}f.isMDXComponent=!0}}]);