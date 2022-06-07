"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[693],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return s}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=d(t),s=r,g=m["".concat(l,".").concat(s)]||m[s]||u[s]||a;return t?o.createElement(g,i(i({ref:n},p),{},{components:t})):o.createElement(g,i({ref:n},p))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<a;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6436:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var o=t(22122),r=t(19756),a=(t(67294),t(3905)),i=["components"],c={title:"Develop configuration"},l={unversionedId:"config/config-develop",id:"config/config-develop",isDocsHomePage:!1,title:"Develop configuration",description:"Overview / Spec / Develop",source:"@site/docs/config/config-develop.md",sourceDirName:"config",slug:"/config/config-develop",permalink:"/docs/config/config-develop",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/config/config-develop.md",version:"current",lastUpdatedBy:"Yicai Yu",lastUpdatedAt:1654588098,formattedLastUpdatedAt:"6/7/2022",frontMatter:{title:"Develop configuration"},sidebar:"docs",previous:{title:"Pattern",permalink:"/docs/config/config-pattern"},next:{title:"Configure",permalink:"/docs/config/configure-en"}},d=[{value:"One-click Running",id:"one-click-running",children:[]},{value:"One-click Debugging",id:"one-click-debugging",children:[]},{value:"Configure HotReload",id:"configure-hotreload",children:[]}],p={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/config/config-en"},"Overview")," / ",(0,a.kt)("a",{parentName:"p",href:"/docs/config/config-spec-en"},"Spec")," / ",(0,a.kt)("a",{parentName:"p",href:"/docs/config/config-develop"},"Develop")),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"one-click-running"},"One-click Running"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'name: example\nserviceType: deployment\ncontainers:\n  - name: you-container\n    dev:\n\n      command:\n        run: [ "./gradlew", "bootRun" ]\n')),(0,a.kt)("p",null,"You can use one-click running after configuring ",(0,a.kt)("inlineCode",{parentName:"p"},"command.run"),". The commands and parameters correspond to different elements in the array. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"./gradlew bootRun ")," will be ",(0,a.kt)("inlineCode",{parentName:"p"},'["./gradlew", "bootRun"]')),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"How to use one-click running")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"See more instructions in ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/remote-run"},"Remote Run"),"."))),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"one-click-debugging"},"One-click Debugging"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"name: example\nserviceType: deployment\ncontainers:\n  - name: you-container\n    dev:\n\n      command:\n        debug:\n          - ./gradlew\n          - bootRun\n          - --debug-jvm\n      debug:\n        remoteDebugPort: 5005\n")),(0,a.kt)("p",null,"Apart from configuring  ",(0,a.kt)("inlineCode",{parentName:"p"},"command.debug"),", you also need to enter a debug port. For example, the default debug port for gradle is 5005. If you want to use other ports, here ",(0,a.kt)("inlineCode",{parentName:"p"},"remoteDebugPort")," should be changed too."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"How to use one-click debugging")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"See more instructions in ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/debug/jetbrains-debug"},"Remote Debugging"),"."))),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"configure-hotreload"},"Configure HotReload"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"name: example\nserviceType: deployment\ncontainers:\n  - name: you-container\n    dev:\n\n      hotReload: true\n")),(0,a.kt)("p",null,"With run or debug configured, you can further configure  ",(0,a.kt)("inlineCode",{parentName:"p"},"hotReload: true"),"  to enable HotReload. Nocalhost offers liveReload, so if your programming language and running method do not support HotReload or the configuration is too complex, you can try to use the HotReload provided by Nocalhost."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"HotReload with run command")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'name: example\nserviceType: deployment\ncontainers:\n  - name: you-container\n    dev:\n\n      command:\n        run: [ "./gradlew", "bootRun" ]\n      hotReload: true\n')))))}u.isMDXComponent=!0}}]);