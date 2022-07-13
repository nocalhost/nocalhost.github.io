"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[8128],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var p=a.createContext({}),u=function(n){var e=a.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},c=function(n){var e=u(n.components);return a.createElement(p.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,p=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),d=u(t),m=r,g=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return t?a.createElement(g,i(i({ref:e},c),{},{components:t})):a.createElement(g,i({ref:e},c))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=n,l.mdxType="string"==typeof n?n:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},13919:function(n,e,t){function a(n){return!0===/^(\w*:|\/\/)/.test(n)}function r(n){return void 0!==n&&!a(n)}t.d(e,{b:function(){return a},Z:function(){return r}})},44996:function(n,e,t){t.d(e,{C:function(){return o},Z:function(){return i}});var a=t(52263),r=t(13919);function o(){var n=(0,a.Z)().siteConfig,e=(n=void 0===n?{}:n).baseUrl,t=void 0===e?"/":e,o=n.url;return{withBaseUrl:function(n,e){return function(n,e,t,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,l=void 0!==i&&i,p=o.absolute,u=void 0!==p&&p;if(!t)return t;if(t.startsWith("#"))return t;if((0,r.b)(t))return t;if(l)return e+t;var c=t.startsWith(e)?t:e+t.replace(/^\//,"");return u?n+c:c}(o,t,n,e)}}}function i(n,e){return void 0===e&&(e={}),(0,o().withBaseUrl)(n,e)}},53646:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var a=t(22122),r=t(19756),o=(t(67294),t(3905)),i=(t(44996),["components"]),l={title:"\u5fae\u670d\u52a1\u8fdc\u7a0bDebug\uff0cNocalhost + Rainbond\u5fae\u670d\u52a1\u5f00\u53d1\u7b2c\u4e8c\u5f39",author:"Qi Zhang",author_title:"Cloud Native Enthusiasts",author_url:"https://github.com/zzzhangqi",author_image_url:"https://avatars.githubusercontent.com/u/39754275",tags:["Rainbond"]},p={permalink:"/zh-CN/blog/rainbond-debug",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/rainbond-debug.md",title:"\u5fae\u670d\u52a1\u8fdc\u7a0bDebug\uff0cNocalhost + Rainbond\u5fae\u670d\u52a1\u5f00\u53d1\u7b2c\u4e8c\u5f39",description:"\u4e4b\u524d\u7684\u6587\u7ae0\u4e2d\u6211\u4eec\u4ecb\u7ecd\u4e86\u5982\u4f55\u901a\u8fc7 Nocalhost \u5feb\u901f\u5f00\u53d1 Rainbond \u4e0a\u7684\u5fae\u670d\u52a1\uff0c\u4ecb\u7ecd\u4e86\u57fa\u672c\u7684\u5f00\u53d1\u6d41\u7a0b\u3002",date:"2022-07-13T07:06:05.355Z",formattedDate:"2022\u5e747\u670813\u65e5",tags:[{label:"Rainbond",permalink:"/zh-CN/blog/tags/rainbond"}],readingTime:1.88,truncated:!1,prevItem:{title:"\u66f4\u7f8e\u7684\u5f00\u53d1\u73af\u5883\u53d1\u5c55\u5386\u7a0b\u4e0eNocalhost\u843d\u5730\u5b9e\u8df5",permalink:"/zh-CN/blog/gm-cd"},nextItem:{title:"\u4f7f\u7528 Nocalhost \u5f00\u53d1 Rainbond \u4e0a\u7684\u5fae\u670d\u52a1\u5e94\u7528",permalink:"/zh-CN/blog/rainbond-dev"}},u=[{value:"\u90e8\u7f72 Rainbond + SpringCloud",id:"\u90e8\u7f72-rainbond--springcloud",children:[{value:"\u90e8\u7f72 Rainbond",id:"\u90e8\u7f72-rainbond",children:[]},{value:"\u90e8\u7f72 SpringCloud",id:"\u90e8\u7f72-springcloud",children:[]}]},{value:"Nocalhost \u5bf9\u63a5 Rainbond",id:"nocalhost-\u5bf9\u63a5-rainbond",children:[{value:"\u4e00\u952e Run",id:"\u4e00\u952e-run",children:[]},{value:"\u4e00\u952e Debug",id:"\u4e00\u952e-debug",children:[]},{value:"\u6301\u4e45\u5316\u914d\u7f6e",id:"\u6301\u4e45\u5316\u914d\u7f6e",children:[]},{value:"\u5bb9\u5668\u8d44\u6e90\u9650\u5236",id:"\u5bb9\u5668\u8d44\u6e90\u9650\u5236",children:[]},{value:"\u7aef\u53e3\u8f6c\u53d1",id:"\u7aef\u53e3\u8f6c\u53d1",children:[]}]},{value:"\u6700\u540e",id:"\u6700\u540e",children:[]}],c={toc:u};function s(n){var e=n.components,t=(0,r.Z)(n,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.goodrain.com/wechat/nocalhost2/nocalhost.png",alt:null})),(0,o.kt)("p",null,"\u4e4b\u524d\u7684\u6587\u7ae0\u4e2d\u6211\u4eec\u4ecb\u7ecd\u4e86\u5982\u4f55\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/kC9P7fvMtJvKK7_TM2LbTw"},"Nocalhost \u5feb\u901f\u5f00\u53d1 Rainbond \u4e0a\u7684\u5fae\u670d\u52a1"),"\uff0c\u4ecb\u7ecd\u4e86\u57fa\u672c\u7684\u5f00\u53d1\u6d41\u7a0b\u3002"),(0,o.kt)("p",null,"\u672c\u6587\u5c06\u7eed\u63a5\u4e0a\u6587\u7ee7\u7eed\u4ecb\u7ecd\uff0c\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://nocalhost.dev/docs/config/config-overview-en/"},"Nocalhost \u5f00\u53d1\u914d\u7f6e\u6587\u4ef6")," \u5b9e\u73b0\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e00\u952e Run \u548c \u8fdc\u7a0bDebug"),(0,o.kt)("li",{parentName:"ul"},"\u6301\u4e45\u5316\u914d\u7f6e"),(0,o.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u5bb9\u5668\u8d44\u6e90\u9650\u5236"),(0,o.kt)("li",{parentName:"ul"},"\u7aef\u53e3\u8f6c\u53d1")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u4ec0\u4e48\u662f\u5f00\u53d1\u914d\u7f6e\uff1f")),(0,o.kt)("p",null,"\u5f00\u53d1\u914d\u7f6e\u662f\u56f4\u7ed5 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u5f00\u53d1\u6a21\u5f0f")," \u6765\u8fdb\u884c\u7684\uff0c\u4f8b\u5982\u4f7f\u7528\u4ec0\u4e48\u955c\u50cf\u6765\u8fdb\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u5f00\u53d1\u6a21\u5f0f"),"\uff0c\u662f\u5426\u9700\u8981\u5f00\u542f\u6301\u4e45\u5316\u6765\u4fdd\u5b58\u5f00\u53d1\u5bb9\u5668\u7684\u5185\u5bb9\uff0c\u5c06\u54ea\u4e9b\u6587\u4ef6\u540c\u6b65\u5230\u5f00\u53d1\u5bb9\u5668\u4e2d\uff0c\u5982\u4f55\u4e00\u952e\u8c03\u8bd5\u3001\u4e00\u952e\u8fd0\u884c\u5bb9\u5668\u5185\u7684\u670d\u52a1\u7b49\u3002 \u914d\u7f6e\u4e86\u6b63\u786e\u4e14\u5408\u9002\u7684\u5f00\u53d1\u914d\u7f6e\u540e\uff0c\u53ef\u4ee5\u5728\u4f7f\u7528 Nocalhost ",(0,o.kt)("inlineCode",{parentName:"p"},"\u5f00\u53d1\u6a21\u5f0f")," \u65f6\u66f4\u52a0\u5f97\u5fc3\u5e94\u624b\u3002"),(0,o.kt)("h2",{id:"\u90e8\u7f72-rainbond--springcloud"},"\u90e8\u7f72 Rainbond + SpringCloud"),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u7ee7\u7eed\u4ee5\u4e0a\u6587\u4e2d\u7684 SpringCloud Pig \u4e3a\u4f8b\uff0c\u8c03\u8bd5 Java Maven \u670d\u52a1\u7684 Pig-auth \u6a21\u5757\u3002"),(0,o.kt)("p",null,"\u9879\u76ee Gitee \u5730\u5740\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/zhangbigqi/pig"},"https://gitee.com/zhangbigqi/pig")),(0,o.kt)("h3",{id:"\u90e8\u7f72-rainbond"},"\u90e8\u7f72 Rainbond"),(0,o.kt)("p",null,"\u8fd9\u91cc\u5c31\u4e0d\u8be6\u7ec6\u4ecb\u7ecd Rainbond \u7684\u5b89\u88c5\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://www.rainbond.com/docs/installation/install-with-ui/host-install-with-ui"},"\u57fa\u4e8eLinux\u5b89\u88c5Rainbond"),"\u3002"),(0,o.kt)("h3",{id:"\u90e8\u7f72-springcloud"},"\u90e8\u7f72 SpringCloud"),(0,o.kt)("p",null,"\u6211\u4eec\u5728 Rainbond \u5185\u5bf9\u63a5\u4e86\u5f00\u6e90\u5e94\u7528\u5546\u5e97\u540e\uff0c\u5728\u5f00\u6e90\u5e94\u7528\u5546\u5e97\u5185\u641c\u7d22 ",(0,o.kt)("inlineCode",{parentName:"p"},"Spring Cloud Pig")," \u5b89\u88c5 ",(0,o.kt)("inlineCode",{parentName:"p"},"3.5.0"),"\u7248\u672c\u3002"),(0,o.kt)("p",null,"\u6765\u81ea\u5e94\u7528\u5546\u5e97\u5b89\u88c5\u5e94\u7528\u7ec4\u4ef6\u7684\u82f1\u6587\u540d\u79f0\u662f\u81ea\u52a8\u751f\u6210\u7684\u5b57\u7b26\u4e32\uff0c\u9700\u8981\u6211\u4eec\u8bbe\u7f6e\u4e00\u4e0b\u7ec4\u4ef6\u7684\u82f1\u6587\u540d\u79f0\uff08Deployment Name\uff09\uff0c\u901a\u8fc7 Nocalhost \u8fde\u63a5\u5230\u96c6\u7fa4\u65f6\u53ef\u4ee5\u5f88\u76f4\u89c2\u7684\u5206\u6e05\u695a Deployment \u5bf9\u5e94\u7684\u7ec4\u4ef6\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.goodrain.com/wechat/nocalhost2/1.png",alt:null})),(0,o.kt)("h2",{id:"nocalhost-\u5bf9\u63a5-rainbond"},"Nocalhost \u5bf9\u63a5 Rainbond"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5b89\u88c5 Nocalhost JetBrains Plugin \u63d2\u4ef6\uff0c\u8bf7\u53c2\u9605\u6587\u6863 ",(0,o.kt)("a",{parentName:"p",href:"https://nocalhost.dev/docs/installation/"},"\u5b89\u88c5Nocalhost JetBrains Plugin \u63d2\u4ef6"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u83b7\u53d6 K8s Kubeconfig\uff0c\u8bf7\u53c2\u9605\u6587\u6863 ",(0,o.kt)("a",{parentName:"p",href:"https://www.rainbond.com/docs/ops-guide/tools/kubectl"},"\u83b7\u53d6 Kubeconfig \u6587\u4ef6"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"pig")," \u547d\u540d\u7a7a\u95f4\u4e0b\uff0c\u627e\u5230\u5de5\u4f5c\u8d1f\u8f7d ",(0,o.kt)("inlineCode",{parentName:"p"},"pig-auth")," \u53f3\u51fb\u5e76\u9009\u62e9 ",(0,o.kt)("inlineCode",{parentName:"p"},"Dev Config")," \uff08\u5f00\u53d1\u914d\u7f6e\uff09"),(0,o.kt)("img",{src:"https://static.goodrain.com/wechat/nocalhost2/2.png",width:"40%"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5c06\u4ee5\u4e0b\u914d\u7f6e\u6587\u4ef6\u590d\u5236\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"Dev Config")," \u4e2d\u3002"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Deployment Name\nname: pig-auth\nserviceType: deployment\ncontainers:\n    # Deployment \u4e3b\u5bb9\u5668\u540d\u79f0\n  - name: auth\n    dev:\n        # \u5f00\u53d1\u955c\u50cf\uff0c\u8be5\u955c\u50cf\u5305\u542b\u4e86 Java Maven \u73af\u5883\n      image: registry.cn-hangzhou.aliyuncs.com/zqqq/maven:3.8.6-openjdk-8\n      # \u9ed8\u8ba4\u7ec8\u7aef\u4e3a bash\n      shell: bash\n      # Rainbond \u63d0\u4f9b\u7684 StorageClass Name\n      storageClass: rainbondvolumerwx\n      # \u914d\u7f6e\u5f00\u53d1\u5bb9\u5668\u8d44\u6e90\n      resources:\n        limits:\n          memory: 4096Mi\n          cpu: \"2\"\n        requests:\n          memory: 2048Mi\n          cpu: \"1\"\n      persistentVolumeDirs:\n        # Maven \u4f9d\u8d56\u5305\u7f13\u5b58\u8def\u5f84\uff0c\u914d\u5408 storageClass \u4e00\u8d77\u98df\u7528\n        - path: /root/.m2/repository\n          capacity: 10Gi\n      command:\n        # \u4e00\u952e\u542f\u52a8\u547d\u4ee4\uff0c\u5b89\u88c5\u4f9d\u8d56\u5305\u548c\u542f\u52a8 pig-auth \u5b50\u6a21\u5757\n        run:\n          - mvn\n          - install\n          - '&&'\n          - mvn\n          - spring-boot:run\n          - -pl\n          # \u6307\u5b9a\u5b50\u6a21\u5757\u542f\u52a8\n          - pig-auth\n        # \u4e00\u952e Debug \u547d\u4ee4\uff0c\u5b89\u88c5\u4f9d\u8d56\u5305\u548c Debug pig-auth \u5b50\u6a21\u5757\n        debug:\n          - mvn\n          - install\n          - '&&'\n          - mvn\n          - spring-boot:run\n          - -pl\n          # \u6307\u5b9a\u5b50\u6a21\u5757\u542f\u52a8\n          - pig-auth\n          # Java Debug \u547d\u4ee4\n          - -Dspring-boot.run.jvmArguments=-agentlib:jdwp=transport=dt_socket,server=y,suspend=y,address=5005\n      debug:\n        # \u8fdc\u7a0b\u7aef\u53e3\uff0c\u5bf9\u5e94Debug\u547d\u4ee4\u4e2d\u7684 address=5005\n        remoteDebugPort: 5005\n        # \u9009\u62e9 Java \u8bed\u8a00\n        language: java\n      # \u70ed\u52a0\u8f7d\n      hotReload: true\n      # \u6587\u4ef6\u540c\u6b65\n      sync:\n        type: send\n        mode: gitIgnore\n        deleteProtection: true\n      # \u7aef\u53e3\u8f6c\u53d1\uff0c\u8f6c\u53d1\u5bb9\u5668\u5185\u76843000\u7aef\u53e3\u5230\u672c\u57303999\n      portForward:\n        - 3999:3000\n")),(0,o.kt)("h3",{id:"\u4e00\u952e-run"},"\u4e00\u952e Run"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u53f3\u51fb\u5de5\u4f5c\u8d1f\u8f7d ",(0,o.kt)("inlineCode",{parentName:"li"},"pig-auth")," \u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9 Remote Run\u3002"),(0,o.kt)("li",{parentName:"ol"},"Nocalhost \u4f1a\u81ea\u52a8\u8fdb\u5165 DevMode \u5e76\u6267\u884c Remote Run\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.goodrain.com/wechat/nocalhost2/3-1.gif",alt:null})),(0,o.kt)("h3",{id:"\u4e00\u952e-debug"},"\u4e00\u952e Debug"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u53f3\u51fb\u5de5\u4f5c\u8d1f\u8f7d ",(0,o.kt)("inlineCode",{parentName:"li"},"pig-auth")," \u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9 Remote Debug\u3002"),(0,o.kt)("li",{parentName:"ol"},"Nocalhost \u4f1a\u81ea\u52a8\u8fdb\u5165 DevMode \u5e76\u6267\u884c Remote Debug\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u4ee3\u7801\u4e2d\u6253\u4e0a\u65ad\u70b9\uff0c\u53d1\u8d77\u8bf7\u6c42\uff0c\u8fdb\u5165 IDE Debug \u6a21\u5f0f\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.goodrain.com/wechat/nocalhost2/4-1.gif",alt:null})),(0,o.kt)("h3",{id:"\u6301\u4e45\u5316\u914d\u7f6e"},"\u6301\u4e45\u5316\u914d\u7f6e"),(0,o.kt)("p",null,"\u5728\u5f00\u53d1\u65f6\uff0c\u6211\u4eec\u5e0c\u671b\u6301\u4e45\u5316\u7684\u6587\u4ef6\u5927\u591a\u6570\u90fd\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"\u4f9d\u8d56\u5305")," ",(0,o.kt)("inlineCode",{parentName:"p"},"\u65e5\u5fd7"),"\uff0c\u672c\u7bc7\u6587\u7ae0\u4e2d\u4e5f\u662f\u7f13\u5b58\u4e86 Java \u7684\u4f9d\u8d56\u5305\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rainbondvolumerwx")," \u662f Rainbond \u9ed8\u8ba4\u63d0\u4f9b\u7684\u5b58\u50a8\u7c7b\uff0c\u586b\u5199\u4ee5\u4e0b\u914d\u7f6e\u540e\u4f1a\u5728\u5f53\u524d\u547d\u540d\u7a7a\u95f4\u4e0b\u81ea\u52a8\u521b\u5efa PVC\uff0c\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"storageClass: rainbondvolumerwx                 \npersistentVolumeDirs:\n  - path: /root/.m2/repository\n    capacity: 10Gi\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.goodrain.com/wechat/nocalhost2/5.png",alt:null})),(0,o.kt)("h3",{id:"\u5bb9\u5668\u8d44\u6e90\u9650\u5236"},"\u5bb9\u5668\u8d44\u6e90\u9650\u5236"),(0,o.kt)("p",null,"\u9650\u5236\u5f00\u53d1\u5bb9\u5668\u7684\u8d44\u6e90\uff0c\u9650\u989d\u80fd\u8ba9\u670d\u52a1\u5668\u7684\u8d44\u6e90\u5229\u7528\u6700\u5927\u5316\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u5f00\u53d1\u914d\u7f6e\u4fee\u6539\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'resources:\n  limits:\n    memory: 4096Mi\n    cpu: "2"\n  requests:\n    memory: 2048Mi\n    cpu: "1"\n')),(0,o.kt)("h3",{id:"\u7aef\u53e3\u8f6c\u53d1"},"\u7aef\u53e3\u8f6c\u53d1"),(0,o.kt)("p",null,"\u8f6c\u53d1\u5bb9\u5668\u7aef\u53e3\u5230\u672c\u5730\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u5f00\u53d1\u914d\u7f6e\u4fee\u6539\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"portForward:\n  - 3999:3000       # \u8f6c\u53d1\u5bb9\u5668 3000 \u7aef\u53e3\u5230\u672c\u5730 3999 \u7aef\u53e3\n")),(0,o.kt)("h2",{id:"\u6700\u540e"},"\u6700\u540e"),(0,o.kt)("p",null,"\u5f53\u7136 Nocalhost \u53ef\u4ee5\u540c\u65f6\u8c03\u8bd5\u591a\u4e2a\u5fae\u670d\u52a1\uff0c\u540c\u6837\u7684\u65b9\u5f0f\u53ea\u9700\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684 Deployment Name \u548c Containers Name \u4ee5\u53ca\u5fae\u670d\u52a1\u7684\u5b50\u6a21\u5757\u3002"),(0,o.kt)("p",null,"Nocalhost \u8fd8\u6709\u4e00\u4e9b\u5f00\u53d1\u914d\u7f6e\u6587\u4e2d\u6ca1\u8bb2\u5230\u7684\uff0c\u6bd4\u5982\uff1a\u5f00\u53d1\u73af\u5883\u53d8\u91cf\u3001\u6587\u4ef6\u540c\u6b65\u7684\u4e24\u79cd\u6a21\u5f0f ",(0,o.kt)("inlineCode",{parentName:"p"},"pattern")," ",(0,o.kt)("inlineCode",{parentName:"p"},"gitignore")," \u7b49\u7b49\uff0c\u5e76\u4e14 Nocalhost \u652f\u6301\u591a\u79cd\u8bed\u8a00\uff0cJava \u53ea\u662f\u5176\u4e2d\u4e00\u79cd\uff0c\u5c0f\u4f19\u4f34\u4eec\u53ef\u4ee5\u81ea\u884c\u63a2\u7d22\u3002"),(0,o.kt)("p",null,"Nocalhost + Rainbond \u8ba9\u5f00\u53d1\u3001\u90e8\u7f72\u66f4\u52a0\u9ad8\u6548\u3001\u4fbf\u6377\u3002"))}s.isMDXComponent=!0}}]);