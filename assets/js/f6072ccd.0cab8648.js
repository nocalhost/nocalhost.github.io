"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[8078],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||r;return t?o.createElement(m,i(i({ref:n},c),{},{components:t})):o.createElement(m,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},23080:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var o=t(22122),a=t(19756),r=(t(67294),t(3905)),i=["components"],l={},s={unversionedId:"reference/nh-config",id:"reference/nh-config",isDocsHomePage:!1,title:"Nocalhost Config Specs",description:"`yaml",source:"@site/docs/reference/nh-config.md",sourceDirName:"reference",slug:"/reference/nh-config",permalink:"/docs/reference/nh-config",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/reference/nh-config.md",version:"current",lastUpdatedBy:"Yicai Yu",lastUpdatedAt:1654588098,formattedLastUpdatedAt:"6/7/2022",frontMatter:{},sidebar:"docs",previous:{title:"Nocalhost Dep",permalink:"/docs/server/nh-dep"},next:{title:"FAQ",permalink:"/docs/faq/faq"}},p=[],c={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# Specify config properties\n# type: object\n# default value: {}\n# required\nconfigProperties:\n\n  # config file version\n  # type: string\n  # default value: null\n  # required\n  version: v2\n\n  # env file name, substitution variable for this file\n  # type: string\n  # default value: null\n  # optional\n  envFile: env.dev\n\napplication:\n\n  # Application name\n  # type: string(dns1123)\n  # default value: null\n  # required\n  # nhctl param: [NAME]\n  # uniq\n  name: coding-agile\n\n  # Application k8s manifest type\n  # type: select\uff0coptions\uff1ahelmGit/helmRepo/rawManifest/rawManifestLocal/helmLocal\n  # default value: null\n  # required\n  # nhctl param: --type,-t\n  manifestType: rawManifest\n\n  # Set default application version for helmRepo\n  # type: string\n  # deafult value: latest\n  # optional\n  helmVersion: 0.0.1\n\n  # helmGit: chart path: relative path of git repo root.\n  # helmLocal: chart path: relative path of local helm chart path.\n  # helmRepo: no meaning\n  # rawManifestGit: manifest files path: multi relative paths of git repo root\n  # rawManifestLocal: manifest files path: multi relative paths of local application path\n  # kustomizeGit: kustomize file path: relative path of git repo\n  # kustomizeLocal: kustomize file path: multi relative paths of local application path\n  # type: string[]\n  # default value: ["."]\n  # required\n  resourcePath: []\n\n  # helmGit: no meaning.\n  # helmRepo: no meaning.\n  # rawManifestGit: ignored manifest path: multi relative paths of git repo root.\n  # rawManifestLocal: ignored manifest path: multi relative paths of local application path.\n  # helmLocal: no meaning.\n  # type: string[]\n  # default value: ["."]\n  # optional\n  ignoredPath: []\n\n  # The jobs to be executed before application\'s installation.\n  # type: object[]\n  # default value: []\n  # optional\n  onPreInstall: \n\n    # Job yaml file, the relative path of the repo root\n    # type: string\n    # required\n    - path: "job-1.yaml"\n\n      # Order of execution of job, The smaller the value, the first to execute\n      # type: integer\n      # default value: 0\n      # optional\n      weight: -1\n\n    - path: "job-2.yaml"\n      weight: 5\n\n  # Overwrite helm values.yaml\n  # type: object[]\n  # default value: []\n  # optional\n  helmValues:\n    - key: DOMAIN\n      value: ${DOMAIN:-www.coding.com}\n    - key: DEBUG\n      value: ${DEBUG:-true}\n\n  # Inject environment variable for all workload \n  # type: object[]\n  # default value: []\n  # optional\n  env: \n    - name: DEBUG\n      value: ${DEBUG:-true}\n    - name: DOMAIN\n      value: "www.coding.com"\n\n  # Use envFile to inject environment variable for all workload \n  # If specify env and envFrom at the same time, then use intersection of them, and use env key as primary\n  # type: object[]\n  # default value: []\n  # optional\n  envFrom: \n    envFile: \n      - path: dev.env\n      - path: dev.env\n\n  # The Applicaion\'s micro services\n  # type: object[]\n  # default value: []\n  # optional\n  services:\n\n    # Name of service, the name of workload in cluster\n    # type: string\n    # default value: null\n    # required\n    - name: e-coding\n\n      # The Kubernetes Workloads type corresponding to the service\n      # type: select, options: deployment/statefulset/pod/job/cronjob/daemonset case insensitive \n      # default value: deployment\n      # required\n      serviceType: deployment\n\n      dependLabelSelector: \n\n        # Dependent Pods label selector (The service will not start until the Pods selected by selector being ready.)\n        # type: string[]\n        # default value: []\n        # optional\n        pods: \n          - "name=mariadb"\n          - "app.kubernetes.io/name=mariadb"\n\n        # Dependent Jobs label selector (The service will not start until the Jobs selected by selector completed.)\n        # type: string[]\n        # default value: []\n        # optional\n        jobs:\n          - "job-name=init-job"\n          - "app.kubernetes.io/name=init-job"\n\n      containers:\n\n        # When the Pod has multiple containers, specify the container name.\n        # type: string\n        # default value: ""\n        # optional\n        - name: coding\n\n          # Specify installation parameters\n          # type: object\n          # default value: {}\n          # optional\n          install: \n\n            # Inject environment variable for container when installed\n            # type: object[]\n            # default value: []\n            # optional\n            env: \n              - name: DEBUG\n                value: "true"\n              - name: DOMAIN\n                value: "www.coding.com"\n\n            # Use envFile to inject environment variable for container when installed\n            # If specify env and envFrom at the same time, then use intersection of them, and use env key as primary\n            # type: object[]\n            # default value: []\n            # optional\n            envFrom: \n              envFile: \n                - path: dev.env\n                - path: dev.env\n\n            # Ports to be forwarded to local when workload has been installed \n            # localPort:remotePort\n            # type: string[]\n            # default value: []\n            # optional\n            portForward:\n              - 3306:3306\n\n          # Specify development parameters\n          # type: object\n          # default value: {}\n          # required\n          dev:\n\n            # The git repository clone url of the service\n            # type: string\n            # default value: null\n            # required\n            gitUrl: xxx-job\n\n            # DevContainer Image of the micro service\n            # type: string\n            # default value: null\n            # required\n            image: java:8-jdk\n\n            # The default shell of DevContainer\n            # type: string\n            # default value: "/bin/sh"\n            # optional\n            shell: "bash"\n\n            # The work directory of DevContainer\n            # type: string\n            # default value: "/home/nocalhost-dev"\n            # optional\n            workDir: "/root/nocalhost-dev"\n\n            # Specify resources requests and limits for DevContainer, same format to Kubernetes\'s resources (Not currently implemented)\n            # type: object\n            # default value: {}\n            # optional\n            resources:\n              limits:\n                cpu: "1"\n                memory: 1Gi\n              requests:\n                cpu: "0.5"\n                memory: 512Mi\n\n            # Storage of persistence volume\n            # type: string\n            # default value: null\n            # optional\n            storageClass: "cbs"\n\n            # Dirs to be persisted in DevContainer\n            # type: string[]\n            # default value: ["/home/nocalhost-dev"]\n            # optional\n            persistentVolumeDirs: \n\n              # Dir to be persisted in DevContainer\n              # type: string\n              # default value: null\n              # required\n              - path: "/root"\n\n                # Capability of the dir\n                # type: string\n                # default value: 10Gi\n                # optional\n                capacity: 100Gi\n\n            command: \n              # Run command of the service\n              # default value: [""]\n              # optional\n              run: ["./gradlew", "bootRun"]\n\n              # Debug command of the service\n              # type: string[]\n              # default value: [""]\n              # optional\n              debug: ["./gradlew", "bootRun", "--debug-jvm"]\n\n            # Specify debug parameter\n            # type: object\n            # default value: {}\n            # optional\n            debug: \n\n              # Specify remote debug port\n              # type: int\n              # default value: null\n              # optional\n              remoteDebugPort: 5005\n\n            # Use .dev-container of VSCode to specify DevContainer Image (Not currently implemented)\n            # type: string\n            # default value: ""\n            # optional\n            useDevContainer: false\n\n            # Specify file synchronization when enter development mode\n            # type: object\n            # default value: {}\n            # optional\n            sync: \n\n              # The synchronization file mode of the service (Not currently implemented)\n              # "send" specifies one-way synchronization to the container, "sendreceive" specifies two-way synchronization\n              # type: select\uff0csend/sendreceive\n              # default value: "send"\n              # optional\n              type: send\n\n              # List of files and directories to be synchronized to DevContainer\n              # type: string[]\n              # default value: ["."]\n              # optional\n              filePattern: \n                - "./src"\n                - "./pkg/fff"\n\n              # List of ignored files and directories to be synchronized to DevContainer\n              # type: string[]\n              # default value: []\n              # optional\n              ignoreFilePattern:\n                - ".git"\n                - "./build"\n\n            # Specify dev mode environment parameters\n            # type: object[]\n            # default value: {}\n            # optional\n            env: \n            - name: DEBUG\n              value: "true"\n            - name: DOMAIN\n              value: "www.coding.com"\n\n            # Use env file to specify dev mode environment parameters\n            # type: object\n            # default value: {}\n            # optional\n            envFrom:\n              envFile: \n                - path: dev.env\n                - path: dev.env\n\n            # Ports to be forwarded to local when enter devMode\n            # localPort:remotePort\n            # type: string[]\n            # default value: []\n            # optional\n            portForward:\n            - 3306:3306\n')))}u.isMDXComponent=!0}}]);