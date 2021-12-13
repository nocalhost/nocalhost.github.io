"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[3097],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),g=i,u=m["".concat(c,".").concat(g)]||m[g]||d[g]||o;return t?a.createElement(u,r(r({ref:n},p),{},{components:t})):a.createElement(u,r({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2653:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var a=t(22122),i=t(19756),o=(t(67294),t(3905)),r=["components"],l={title:"Syntax"},c={unversionedId:"config/config-deployment-syntax",id:"config/config-deployment-syntax",isDocsHomePage:!1,title:"Syntax",description:"Overview / Deploy Config / Syntax",source:"@site/docs/config/config-deployment-syntax.md",sourceDirName:"config",slug:"/config/config-deployment-syntax",permalink:"/docs/config/config-deployment-syntax",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/config/config-deployment-syntax.md",version:"current",lastUpdatedBy:"Anur",lastUpdatedAt:1639379916,formattedLastUpdatedAt:"12/13/2021",frontMatter:{title:"Syntax"},sidebar:"docs",previous:{title:"Advance",permalink:"/docs/config/config-deployment-advance"},next:{title:"Kubernetes Compatibility",permalink:"/docs/practice/cloud/k8s-compatible"}},s=[{value:"Injecting environment variables in config.yaml",id:"injecting-environment-variables-in-configyaml",children:[{value:"Example",id:"example",children:[]}]},{value:"Using the include syntax in config.yaml to introduce other file&#39;s content",id:"using-the-include-syntax-in-configyaml-to-introduce-other-files-content",children:[{value:"Example 1: Combining config.yaml with the include syntax",id:"example-1-combining-configyaml-with-the-include-syntax",children:[]},{value:"Example 2: Abstracting the configuration",id:"example-2-abstracting-the-configuration",children:[]},{value:"Example 3: &quot;Reloading&quot; the configuration",id:"example-3-reloading-the-configuration",children:[]}]}],p={toc:s};function d(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/config/config-en"},"Overview")," / ",(0,o.kt)("a",{parentName:"p",href:"/docs/config/config-deployment-en"},"Deploy Config")," / ",(0,o.kt)("a",{parentName:"p",href:"/docs/config/config-deployment-syntax"},"Syntax")),(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"injecting-environment-variables-in-configyaml"},"Injecting environment variables in config.yaml"),(0,o.kt)("p",null,"config.yaml supports dynamic injection of environment variables. You can take advantage of this feature when you want to control something dynamically during deployment. The basic syntax of environment variables injection is ",(0,o.kt)("inlineCode",{parentName:"p"},"${ENV}"),". The actual values of the environment variables will be read from the current process."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Setting default values for environment variables")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The syntax is ",(0,o.kt)("inlineCode",{parentName:"p"},"${ENV:-DEFAULT_VALUE}"),". The DEFAULT_VALUE will be used if the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"ENV")," was not found."))),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'\n- name: e-micro-agile\n    serviceType: deployment\n    dependPodsLabelSelector:\n    - "app=mariadb"\n    - "app=rabbitmq"\n    dependJobsLabelSelector:\n      - "job-name=init-data-job"\n    gitUrl: ${CODING_GIT_URL:-git@e.coding.net:nocalhost/collaboration.git}\n    devContainerImage: $CODING_GIT_SERVER_IMAGE\n    workDir: ${WORK_DIR}\n    persistentVolumeDirs:\n     - path:${PERSISTENT_VOLUME_DIRS}\n    buildCommand: [$BUILD_COMMAND]\n    runCommand: [${RUN_COMMAND:-"./gradlew", "bootRun"}]\n    debugCommand: [${DEBUG_COMMAND:-"./gradlew", "bootRun", "--debug-jvm"}]\n    syncFilePattern:${SYNC_FILE_PATTERN:-\n     - "."}\n\n    ignoreFilePattern:${IGNORE_FILE_PATTERN:-\n     - ".git"\n     - ".nocalhost"}\n\n    testPriority: ${PRIORITY:-0}\n    \n')),(0,o.kt)("br",null),(0,o.kt)("p",null,"env:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-env"},"\nCODING_GIT_URL=git@e.coding.net:nocalhost/nocalhost.git\nPRIORITY=2\n\n")),(0,o.kt)("p",null,"RESULT:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'\n- name: e-micro-agile\n    serviceType: deployment\n    dependPodsLabelSelector:\n    - "app=mariadb"\n    - "app=rabbitmq"\n    dependJobsLabelSelector:\n      - "job-name=init-data-job"\n    gitUrl: git@e.coding.net:nocalhost/nocalhost.git\n    devContainerImage:\n    workDir:\n    persistentVolumeDirs:\n     - path:\n    buildCommand: []\n    runCommand: ["./gradlew", "bootRun"]\n    debugCommand: ["./gradlew", "bootRun", "--debug-jvm"]\n    syncFilePattern:\n     - ./nocalhost\n     - ./foo**bar\n     - *.jar\n\n    ignoreFilePattern:\n      - "."\n\n    testPriority: 2\n')),(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"using-the-include-syntax-in-configyaml-to-introduce-other-files-content"},"Using the include syntax in config.yaml to introduce other file's content"),(0,o.kt)("p",null,'configuring with config.yaml supports the use of include syntax to achieve a high degree of encapsulation, such as "abstraction", "inheritance", "rewriting" and so on. The basic syntax of include is ',(0,o.kt)("inlineCode",{parentName:"p"},"${_INCLUDE_:- file/rel/path | nindent 2}"),", where nindent is the overall indentation when the file is imported."),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"example-1-combining-configyaml-with-the-include-syntax"},"Example 1: Combining config.yaml with the include syntax"),(0,o.kt)("p",null,"Here we use ",(0,o.kt)("a",{parentName:"p",href:"/docs/config/config-deployment-quickstart#example"},"Deployment configuration example")," to demonstrate."),(0,o.kt)("p",null,"config.yaml:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'application:\n  name: bookinfo\n  manifestType: rawManifestGit\n  resourcePath: [ "manifest/templates" ]\n\n  service:\n    ${_INCLUDE_:- ./service/productpage.yaml | nindent 4}\n    ${_INCLUDE_:- ./service/details.yaml | nindent 4}\n')),(0,o.kt)("br",null),(0,o.kt)("p",null,"/service/productpage.yaml:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: productpage\n  serviceType: deployment\n  containers:\n    - name: productpage\n      dev:\n        gitUrl: https://e.coding.net/nocalhost/nocalhost/bookinfo-productpage.git\n        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage-with-pydevd\n        shell: bash\n        workDir: /home/nocalhost-dev\n        command:\n          run:\n            - ./run.sh\n          debug:\n            - ./debug.sh\n        debug:\n          remoteDebugPort: 9009\n        sync: \n          type: send\n          filePattern: \n            - ./\n          ignoreFilePattern:\n            - ".git"\n            - ".github"\n            - ".idea"\n        portForward:\n        - 39080:9080\n        resources:\n          limits:\n            cpu: "1"\n            memory: 1Gi\n          requests:\n            cpu: "0.5"\n            memory: 512Mi\n')),(0,o.kt)("br",null),(0,o.kt)("p",null,"/service/details.yaml:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: details\n  serviceType: deployment\n  containers:\n    - dev:\n        gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git\n        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/ruby:2.7.1-slim\n        shell: bash\n        workDir: /home/nocalhost-dev\n        sync: \n          type: send\n          filePattern: \n            - ./\n          ignoreFilePattern:\n            - ".git"\n            - ".github"\n        env: \n        - name: DEBUG\n          value: "true"\n')),(0,o.kt)("br",null),(0,o.kt)("p",null,"The structure of the directories is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dot"},"\u251c\u2500\u2500 service\n\u2502\xa0\xa0 \u251c\u2500\u2500 details.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 productpage.yaml\n\u251c\u2500\u2500 config.yaml\n")),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"How to verify")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"nhctl render ./config.yaml")," to verify the result, which will get the rendered result."))),(0,o.kt)("h3",{id:"example-2-abstracting-the-configuration"},"Example 2: Abstracting the configuration"),(0,o.kt)("p",null,"The configuration of many services is likely to be similar. If you need to modify, then you must modify them altogether. For those common configurations, they can be abstracted:"),(0,o.kt)("p",null,"config.yaml:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'\napplication:\n  name: bookinfo\n  manifestType: rawManifestGit\n  resourcePath: [ "manifest/templates" ]\n\n  service:\n    ${_INCLUDE_:- ./service/productpage.yaml | nindent 4}\n    ${_INCLUDE_:- ./service/details.yaml | nindent 4}\n    \n')),(0,o.kt)("br",null),(0,o.kt)("p",null,"/service/productpage.yaml:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: productpage\n  serviceType: deployment\n  containers:\n    - name: productpage\n      dev:\n        ${_INCLUDE_:- ../base/dev-config.yaml | nindent 8}\n")),(0,o.kt)("br",null),(0,o.kt)("p",null,"/service/details.yaml:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: details\n  serviceType: deployment\n  containers:\n    - dev:\n        ${_INCLUDE_:- ../base/dev-config.yaml | nindent 8}\n")),(0,o.kt)("br",null),(0,o.kt)("p",null,"/base/dev-config.yaml:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'\ngitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git\nimage: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/ruby:2.7.1-slim\nshell: bash\nworkDir: /home/nocalhost-dev\nsync: \n  type: send\n  filePattern: \n    - ./\n  ignoreFilePattern:\n    - ".git"\n    - ".github"\nenv: \n- name: DEBUG\n  value: "true"\n  \n')),(0,o.kt)("br",null),(0,o.kt)("p",null,"The structure of the directories is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dot"},"\u251c\u2500\u2500 service\n\u2502\xa0\xa0 \u251c\u2500\u2500 details.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 productpage.yaml\n\u251c\u2500\u2500 base\n\u2502\xa0\xa0 \u2514\u2500\u2500 dev-config.yaml:\n\u251c\u2500\u2500 config.yaml\n")),(0,o.kt)("br",null),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"nhctl render ./config.yaml")," to get the result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'application:\n  name: bookinfo\n  manifestType: rawManifestGit\n  resourcePath: [ "manifest/templates" ]\n\n  service:\n    - name: productpage\n      serviceType: deployment\n      containers:\n        - name: productpage\n          dev:\n            gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git\n            image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/ruby:2.7.1-slim\n            shell: bash\n            workDir: /home/nocalhost-dev\n            sync:\n              type: send\n              filePattern:\n                - ./\n              ignoreFilePattern:\n                - ".git"\n                - ".github"\n            env:\n              - name: DEBUG\n                value: "true"\n\n    - name: details\n      serviceType: deployment\n      containers:\n        - dev:\n            gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git\n            image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/ruby:2.7.1-slim\n            shell: bash\n            workDir: /home/nocalhost-dev\n            sync:\n              type: send\n              filePattern:\n                - ./\n              ignoreFilePattern:\n                - ".git"\n                - ".github"\n            env:\n              - name: DEBUG\n                value: "true"\n')),(0,o.kt)("h3",{id:"example-3-reloading-the-configuration"},'Example 3: "Reloading" the configuration'),(0,o.kt)("p",null,"The configurations may not be exactly identical. For example, the development image and startup command used by each service are different. How to customize them when use abstracted configuration?"),(0,o.kt)("br",null),(0,o.kt)("p",null,"Taking ",(0,o.kt)("inlineCode",{parentName:"p"},"Example 2")," as an example, productpage uses the basic dev-config.yaml for the dev part. But at the same time, the definition of ",(0,o.kt)("inlineCode",{parentName:"p"},"gitUrl")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"image")," overrides the already defined content in dev-config.yaml. In addition, ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," is also defined to expand the dev-config.yaml."),(0,o.kt)("p",null,"/service/productpage.yaml:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: productpage\n  serviceType: deployment\n  containers:\n    - name: productpage\n      dev:\n        ${_INCLUDE_:- ../base/dev-config.yaml | nindent 8}\n        gitUrl: https://e.coding.net/nocalhost/nocalhost/bookinfo-productpage.git\n        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage-with-pydevd\n        resources:\n          limits:\n            cpu: "1"\n            memory: 1Gi\n          requests:\n            cpu: "0.5"\n            memory: 512Mi\n')),(0,o.kt)("br",null),(0,o.kt)("p",null,"/base/dev-config.yaml:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git\nimage: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/ruby:2.7.1-slim\nshell: bash\nworkDir: /home/nocalhost-dev\nsync: \n  type: send\n  filePattern: \n    - ./\n  ignoreFilePattern:\n    - ".git"\n    - ".github"\nenv: \n- name: DEBUG\n  value: "true"\n')),(0,o.kt)("br",null),(0,o.kt)("p",null,"The structure of the directories is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dot"},"\u251c\u2500\u2500 service\n\u2502\xa0\xa0 \u2514\u2500\u2500 productpage.yaml\n\u251c\u2500\u2500 base\n\u2502\xa0\xa0 \u2514\u2500\u2500 dev-config.yaml:\n")),(0,o.kt)("br",null),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"nhctl render ./service/productpage.yaml")," to get the result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: productpage\n  serviceType: deployment\n  containers:\n    - name: productpage\n      dev:\n        shell: bash\n        workDir: /home/nocalhost-dev\n        sync:\n          type: send\n          filePattern:\n            - ./\n          ignoreFilePattern:\n            - ".git"\n            - ".github"\n        env:\n          - name: DEBUG\n            value: "true"\n        gitUrl: https://e.coding.net/nocalhost/nocalhost/bookinfo-productpage.git\n        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage-with-pydevd\n        resources:\n          limits:\n            cpu: "1"\n            memory: 1Gi\n          requests:\n            cpu: "0.5"\n            memory: 512Mi\n')))}d.isMDXComponent=!0}}]);