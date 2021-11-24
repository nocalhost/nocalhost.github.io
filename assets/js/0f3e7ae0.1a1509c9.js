"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[3097],{3905:function(n,e,t){t.d(e,{Zo:function(){return d},kt:function(){return g}});var a=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=a.createContext({}),p=function(n){var e=a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},d=function(n){var e=p(n.components);return a.createElement(c.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,c=n.parentName,d=l(n,["components","mdxType","originalType","parentName"]),m=p(t),g=o,u=m["".concat(c,".").concat(g)]||m[g]||s[g]||i;return t?a.createElement(u,r(r({ref:e},d),{},{components:t})):a.createElement(u,r({ref:e},d))}));function g(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,r=new Array(i);r[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=n,l.mdxType="string"==typeof n?n:o,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},87860:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=t(74034),o=t(79973),i=(t(67294),t(3905)),r=["components"],l={title:"Syntax"},c=void 0,p={unversionedId:"config/config-deployment-syntax",id:"config/config-deployment-syntax",isDocsHomePage:!1,title:"Syntax",description:"Overview / Deploy Config / Syntax",source:"@site/docs/config/config-deployment-syntax.md",sourceDirName:"config",slug:"/config/config-deployment-syntax",permalink:"/docs/config/config-deployment-syntax",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/config/config-deployment-syntax.md",tags:[],version:"current",lastUpdatedBy:"anurnomeru",lastUpdatedAt:1635932231,formattedLastUpdatedAt:"11/3/2021",frontMatter:{title:"Syntax"},sidebar:"docs",previous:{title:"Advance",permalink:"/docs/config/config-deployment-advance"},next:{title:"Kubernetes Compatibility",permalink:"/docs/practice/cloud/k8s-compatible"}},d=[{value:"\u5728 config.yaml \u4e2d\u6ce8\u5165\u73af\u5883\u53d8\u91cf",id:"\u5728-configyaml-\u4e2d\u6ce8\u5165\u73af\u5883\u53d8\u91cf",children:[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}]},{value:"\u5728 config.yaml \u4e2d\u4f7f\u7528 include \u8bed\u6cd5\u5f15\u5165\u5176\u4ed6\u6587\u4ef6\u5185\u5bb9",id:"\u5728-configyaml-\u4e2d\u4f7f\u7528-include-\u8bed\u6cd5\u5f15\u5165\u5176\u4ed6\u6587\u4ef6\u5185\u5bb9",children:[{value:"\u793a\u4f8b1\uff1a\u901a\u8fc7 include \u8bed\u6cd5\u7ec4\u5408 config.yaml",id:"\u793a\u4f8b1\uff1a\u901a\u8fc7-include-\u8bed\u6cd5\u7ec4\u5408-configyaml",children:[]},{value:"\u793a\u4f8b2\uff1a\u5bf9\u914d\u7f6e\u8fdb\u884c\u62bd\u8c61",id:"\u793a\u4f8b2\uff1a\u5bf9\u914d\u7f6e\u8fdb\u884c\u62bd\u8c61",children:[]},{value:"\u793a\u4f8b3\uff1a&quot;\u91cd\u8f7d&quot; \u914d\u7f6e",id:"\u793a\u4f8b3\uff1a\u91cd\u8f7d-\u914d\u7f6e",children:[]}]}],s={toc:d};function m(n){var e=n.components,t=(0,o.Z)(n,r);return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/config/config-en"},"Overview")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/config/config-deployment-en"},"Deploy Config")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/config/config-deployment-syntax"},"Syntax")),(0,i.kt)("br",null),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u5728-configyaml-\u4e2d\u6ce8\u5165\u73af\u5883\u53d8\u91cf"},"\u5728 config.yaml \u4e2d\u6ce8\u5165\u73af\u5883\u53d8\u91cf"),(0,i.kt)("p",null,"config.yaml \u652f\u6301\u52a8\u6001\u73af\u5883\u53d8\u91cf\u6ce8\u5165\uff0c\u5982\u679c\u4f60\u60f3\u5728\u90e8\u7f72\u65f6\u52a8\u6001\u63a7\u5236\u67d0\u4e9b\u5185\u5bb9\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u6b64\u529f\u80fd\u3002 \u73af\u5883\u6ce8\u5165\u7684\u57fa\u672c\u8bed\u6cd5\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"${ENV}"),"\uff0c\u73af\u5883\u53d8\u91cf\u7684\u503c\u5c06\u4ece\u5f53\u524d\u8fdb\u7a0b\u83b7\u53d6\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u4e3a\u73af\u5883\u53d8\u91cf\u914d\u7f6e\u9ed8\u8ba4\u503c")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8bed\u6cd5\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"${ENV:-DEFAULT_VALUE}"),"\uff0c\u5982\u679c\u627e\u4e0d\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"ENV")," \u8fd9\u4e2a\u73af\u5883\u53d8\u91cf\uff0c\u5219\u4f1a\u4f7f\u7528 DEFAULT_VALUE \u4f5c\u4e3a\u9ed8\u8ba4\u503c\u3002"))),(0,i.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: e-micro-agile\n    serviceType: deployment\n    dependPodsLabelSelector:\n    - "app=mariadb"\n    - "app=rabbitmq"\n    dependJobsLabelSelector:\n      - "job-name=init-data-job"\n    gitUrl: ${CODING_GIT_URL:-git@e.coding.net:nocalhost/collaboration.git}\n    devContainerImage: $CODING_GIT_SERVER_IMAGE\n    workDir: ${WORK_DIR}\n    persistentVolumeDirs:\n     - path:${PERSISTENT_VOLUME_DIRS}\n    buildCommand: [$BUILD_COMMAND]\n    runCommand: [${RUN_COMMAND:-"./gradlew", "bootRun"}]\n    debugCommand: [${DEBUG_COMMAND:-"./gradlew", "bootRun", "--debug-jvm"}]\n    syncFilePattern:${SYNC_FILE_PATTERN:-\n     - "."}\n\n    ignoreFilePattern:${IGNORE_FILE_PATTERN:-\n     - ".git"\n     - ".nocalhost"}\n\n    testPriority: ${PRIORITY:-0}\n')),(0,i.kt)("br",null),(0,i.kt)("p",null,"env:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-env"},"CODING_GIT_URL=git@e.coding.net:nocalhost/nocalhost.git\nPRIORITY=2\n")),(0,i.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'\n- name: e-micro-agile\n    serviceType: deployment\n    dependPodsLabelSelector:\n    - "app=mariadb"\n    - "app=rabbitmq"\n    dependJobsLabelSelector:\n      - "job-name=init-data-job"\n    gitUrl: git@e.coding.net:nocalhost/nocalhost.git\n    devContainerImage:\n    workDir:\n    persistentVolumeDirs:\n     - path:\n    buildCommand: []\n    runCommand: ["./gradlew", "bootRun"]\n    debugCommand: ["./gradlew", "bootRun", "--debug-jvm"]\n    syncFilePattern:\n     - ./nocalhost\n     - ./foo**bar\n     - *.jar\n\n    ignoreFilePattern:\n      - "."\n\n    testPriority: 2\n')),(0,i.kt)("br",null),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u5728-configyaml-\u4e2d\u4f7f\u7528-include-\u8bed\u6cd5\u5f15\u5165\u5176\u4ed6\u6587\u4ef6\u5185\u5bb9"},"\u5728 config.yaml \u4e2d\u4f7f\u7528 include \u8bed\u6cd5\u5f15\u5165\u5176\u4ed6\u6587\u4ef6\u5185\u5bb9"),(0,i.kt)("p",null,'config.yaml \u652f\u6301\u901a\u8fc7 include \u8bed\u6cd5\u6765\u5b9e\u73b0\u914d\u7f6e\u7684\u9ad8\u5ea6\u7684\u5c01\u88c5\uff0c\u4f8b\u5982 "\u62bd\u8c61"\uff0c"\u7ee7\u627f"\uff0c"\u91cd\u5199" \u7b49\u3002 include \u7684\u57fa\u672c\u8bed\u6cd5\u4e3a ',(0,i.kt)("inlineCode",{parentName:"p"},"${_INCLUDE_:- file/rel/path | nindent 2}"),"\uff0c\u5176\u4e2d nindent \u4e3a\u6587\u4ef6\u5f15\u5165\u65f6\u7684\u6574\u4f53\u7f29\u8fdb\u3002"),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"\u793a\u4f8b1\uff1a\u901a\u8fc7-include-\u8bed\u6cd5\u7ec4\u5408-configyaml"},"\u793a\u4f8b1\uff1a\u901a\u8fc7 include \u8bed\u6cd5\u7ec4\u5408 config.yaml"),(0,i.kt)("p",null,"\u8fd9\u91cc\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"/docs/config/config-deployment-quickstart#%E7%A4%BA%E4%BE%8B"},"\u90e8\u7f72\u914d\u7f6e\u793a\u4f8b")," \u6765\u62c6\u89e3\u3002"),(0,i.kt)("p",null,"config.yaml:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'application:\n  name: bookinfo\n  manifestType: rawManifestGit\n  resourcePath: [ "manifest/templates" ]\n\n  service:\n    ${_INCLUDE_:- ./service/productpage.yaml | nindent 4}\n    ${_INCLUDE_:- ./service/details.yaml | nindent 4}\n')),(0,i.kt)("br",null),(0,i.kt)("p",null,"/service/productpage.yaml:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: productpage\n  serviceType: deployment\n  containers:\n    - name: productpage\n      dev:\n        gitUrl: https://e.coding.net/nocalhost/nocalhost/bookinfo-productpage.git\n        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage-with-pydevd\n        shell: bash\n        workDir: /home/nocalhost-dev\n        command:\n          run:\n            - ./run.sh\n          debug:\n            - ./debug.sh\n        debug:\n          remoteDebugPort: 9009\n        sync: \n          type: send\n          filePattern: \n            - ./\n          ignoreFilePattern:\n            - ".git"\n            - ".github"\n            - ".idea"\n        portForward:\n        - 39080:9080\n        resources:\n          limits:\n            cpu: "1"\n            memory: 1Gi\n          requests:\n            cpu: "0.5"\n            memory: 512Mi\n')),(0,i.kt)("br",null),(0,i.kt)("p",null,"/service/details.yaml:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: details\n  serviceType: deployment\n  containers:\n    - dev:\n        gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git\n        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/ruby:2.7.1-slim\n        shell: bash\n        workDir: /home/nocalhost-dev\n        sync: \n          type: send\n          filePattern: \n            - ./\n          ignoreFilePattern:\n            - ".git"\n            - ".github"\n        env: \n        - name: DEBUG\n          value: "true"\n')),(0,i.kt)("br",null),(0,i.kt)("p",null,"\u76ee\u5f55\u7ed3\u6784\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dot"},"\u251c\u2500\u2500 service\n\u2502\xa0\xa0 \u251c\u2500\u2500 details.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 productpage.yaml\n\u251c\u2500\u2500 config.yaml\n")),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5982\u4f55\u9a8c\u8bc1")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"nhctl render ./config.yaml")," \u6765\u5bf9\u7ed3\u679c\u8fdb\u884c\u9a8c\u8bc1\uff0c\u8fd9\u4e2a\u547d\u4ee4\u5c06\u62ff\u5230\u6e32\u67d3\u540e\u7684\u7ed3\u679c\u3002"))),(0,i.kt)("h3",{id:"\u793a\u4f8b2\uff1a\u5bf9\u914d\u7f6e\u8fdb\u884c\u62bd\u8c61"},"\u793a\u4f8b2\uff1a\u5bf9\u914d\u7f6e\u8fdb\u884c\u62bd\u8c61"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u8bb8\u591a\u670d\u52a1\u7684\u5f00\u53d1\u914d\u7f6e\u6765\u8bf4\uff0c\u5f88\u53ef\u80fd\u662f\u8fd1\u4f3c\u7684\u3002\u5982\u679c\u53d1\u751f\u4e86\u6539\u52a8\uff0c\u5f80\u5f80\u9700\u8981\u5168\u90e8\u4e00\u8d77\u6539\uff0c\u5bf9\u4e8e\u90a3\u4e9b\u76f8\u540c\u7684\u914d\u7f6e\uff0c\u53ef\u4ee5\u5c06\u5176\u8fdb\u884c\u62bd\u8c61\uff1a"),(0,i.kt)("p",null,"config.yaml:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'application:\n  name: bookinfo\n  manifestType: rawManifestGit\n  resourcePath: [ "manifest/templates" ]\n\n  service:\n    ${_INCLUDE_:- ./service/productpage.yaml | nindent 4}\n    ${_INCLUDE_:- ./service/details.yaml | nindent 4}\n')),(0,i.kt)("br",null),(0,i.kt)("p",null,"/service/productpage.yaml:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: productpage\n  serviceType: deployment\n  containers:\n    - name: productpage\n      dev:\n        ${_INCLUDE_:- ../base/dev-config.yaml | nindent 8}\n")),(0,i.kt)("br",null),(0,i.kt)("p",null,"/service/details.yaml:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: details\n  serviceType: deployment\n  containers:\n    - dev:\n        ${_INCLUDE_:- ../base/dev-config.yaml | nindent 8}\n")),(0,i.kt)("br",null),(0,i.kt)("p",null,"/base/dev-config.yaml:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git\nimage: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/ruby:2.7.1-slim\nshell: bash\nworkDir: /home/nocalhost-dev\nsync: \n  type: send\n  filePattern: \n    - ./\n  ignoreFilePattern:\n    - ".git"\n    - ".github"\nenv: \n- name: DEBUG\n  value: "true"\n')),(0,i.kt)("br",null),(0,i.kt)("p",null,"\u76ee\u5f55\u7ed3\u6784\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dot"},"\u251c\u2500\u2500 service\n\u2502\xa0\xa0 \u251c\u2500\u2500 details.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 productpage.yaml\n\u251c\u2500\u2500 base\n\u2502\xa0\xa0 \u2514\u2500\u2500 dev-config.yaml:\n\u251c\u2500\u2500 config.yaml\n")),(0,i.kt)("br",null),(0,i.kt)("p",null,"\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"nhctl render ./config.yaml")," \u5f97\u5230\u7ed3\u679c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'application:\n  name: bookinfo\n  manifestType: rawManifestGit\n  resourcePath: [ "manifest/templates" ]\n\n  service:\n    - name: productpage\n      serviceType: deployment\n      containers:\n        - name: productpage\n          dev:\n            gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git\n            image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/ruby:2.7.1-slim\n            shell: bash\n            workDir: /home/nocalhost-dev\n            sync:\n              type: send\n              filePattern:\n                - ./\n              ignoreFilePattern:\n                - ".git"\n                - ".github"\n            env:\n              - name: DEBUG\n                value: "true"\n\n    - name: details\n      serviceType: deployment\n      containers:\n        - dev:\n            gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git\n            image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/ruby:2.7.1-slim\n            shell: bash\n            workDir: /home/nocalhost-dev\n            sync:\n              type: send\n              filePattern:\n                - ./\n              ignoreFilePattern:\n                - ".git"\n                - ".github"\n            env:\n              - name: DEBUG\n                value: "true"\n')),(0,i.kt)("h3",{id:"\u793a\u4f8b3\uff1a\u91cd\u8f7d-\u914d\u7f6e"},'\u793a\u4f8b3\uff1a"\u91cd\u8f7d" \u914d\u7f6e'),(0,i.kt)("p",null,"\u914d\u7f6e\u4e0d\u4e00\u5b9a\u5b8c\u5168\u76f8\u540c\uff0c\u4f8b\u5982\u6bcf\u4e2a\u670d\u52a1\u4f7f\u7528\u7684\u5f00\u53d1\u955c\u50cf\u548c\u542f\u52a8\u547d\u4ee4\u4e0d\u4e00\u5b9a\u4e00\u6837\uff0c\u5982\u4f55\u5728\u62bd\u8c61\u7684\u60c5\u51b5\u4e0b\u53c8\u8fdb\u884c\u5b9a\u5236\u5316\u5462\uff1f"),(0,i.kt)("br",null),(0,i.kt)("p",null,"\u8fd9\u91cc\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u793a\u4f8b2")," \u4e3a\u4f8b\uff0cproductpage \u4f7f\u7528\u4e86\u57fa\u7840\u7684 dev-config.yaml \u4f5c\u4e3a dev \u90e8\u5206\u5185\u5bb9\u3002\u540c\u65f6\uff0c\u5b9a\u4e49\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"gitUrl")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"image")," \u8986\u76d6 dev-config.yaml \u5df2\u7ecf\u5b9a\u4e49\u597d\u7684\u5185\u5bb9\u3002\u53e6\u5916\uff0c\u8fd8\u5b9a\u4e49\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"resources")," \u62d3\u5c55\u4e86  dev-config.yaml\u3002"),(0,i.kt)("p",null,"/service/productpage.yaml:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: productpage\n  serviceType: deployment\n  containers:\n    - name: productpage\n      dev:\n        ${_INCLUDE_:- ../base/dev-config.yaml | nindent 8}\n        gitUrl: https://e.coding.net/nocalhost/nocalhost/bookinfo-productpage.git\n        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage-with-pydevd\n        resources:\n          limits:\n            cpu: "1"\n            memory: 1Gi\n          requests:\n            cpu: "0.5"\n            memory: 512Mi\n')),(0,i.kt)("br",null),(0,i.kt)("p",null,"/base/dev-config.yaml:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git\nimage: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/ruby:2.7.1-slim\nshell: bash\nworkDir: /home/nocalhost-dev\nsync: \n  type: send\n  filePattern: \n    - ./\n  ignoreFilePattern:\n    - ".git"\n    - ".github"\nenv: \n- name: DEBUG\n  value: "true"\n')),(0,i.kt)("br",null),(0,i.kt)("p",null,"\u76ee\u5f55\u7ed3\u6784\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dot"},"\u251c\u2500\u2500 service\n\u2502\xa0\xa0 \u2514\u2500\u2500 productpage.yaml\n\u251c\u2500\u2500 base\n\u2502\xa0\xa0 \u2514\u2500\u2500 dev-config.yaml:\n")),(0,i.kt)("br",null),(0,i.kt)("p",null,"\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"nhctl render ./service/productpage.yaml")," \u5f97\u5230\u7ed3\u679c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: productpage\n  serviceType: deployment\n  containers:\n    - name: productpage\n      dev:\n        shell: bash\n        workDir: /home/nocalhost-dev\n        sync:\n          type: send\n          filePattern:\n            - ./\n          ignoreFilePattern:\n            - ".git"\n            - ".github"\n        env:\n          - name: DEBUG\n            value: "true"\n        gitUrl: https://e.coding.net/nocalhost/nocalhost/bookinfo-productpage.git\n        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage-with-pydevd\n        resources:\n          limits:\n            cpu: "1"\n            memory: 1Gi\n          requests:\n            cpu: "0.5"\n            memory: 512Mi\n')))}m.isMDXComponent=!0}}]);