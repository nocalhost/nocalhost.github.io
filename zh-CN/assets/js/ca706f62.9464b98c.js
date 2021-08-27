"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[5968],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(h,l(l({ref:t},s),{},{components:n})):o.createElement(h,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},100:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),l=["components"],i={},p="Deploy from Terminal",c={unversionedId:"guides/deploy/deploy-from-terminal",id:"guides/deploy/deploy-from-terminal",isDocsHomePage:!1,title:"Deploy from Terminal",description:"Nocalhost supports to use the following types to install application:",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/deploy/deploy-from-terminal.md",sourceDirName:"guides/deploy",slug:"/guides/deploy/deploy-from-terminal",permalink:"/zh-CN/docs/guides/deploy/deploy-from-terminal",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",tags:[],version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1629806685,formattedLastUpdatedAt:"2021/8/24",frontMatter:{},sidebar:"docs",previous:{title:"Deployment with Nocalhost",permalink:"/zh-CN/docs/guides/deploy/deploy-app"},next:{title:"Deploy Demo Application",permalink:"/zh-CN/docs/guides/deploy/deploy-demo"}},s=[{value:"Deploy by Minifest Yaml",id:"deploy-by-minifest-yaml",children:[]},{value:"Deploy by Helm",id:"deploy-by-helm",children:[{value:"Deploy from Remote Repo",id:"deploy-from-remote-repo",children:[]},{value:"Use Owned Helm Repo",id:"use-owned-helm-repo",children:[]}]}],u={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-from-terminal"},"Deploy from Terminal"),(0,a.kt)("p",null,"Nocalhost supports to use the following types to install application:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Manifest"),(0,a.kt)("li",{parentName:"ul"},"Helm"),(0,a.kt)("li",{parentName:"ul"},"Kustomize")),(0,a.kt)("p",null,"You can select the deployment method of matching type to deploy your application in Kubernetes in your terminal by using ",(0,a.kt)("inlineCode",{parentName:"p"},"nhctl"),"."),(0,a.kt)("h2",{id:"deploy-by-minifest-yaml"},"Deploy by Minifest Yaml"),(0,a.kt)("p",null,"For example, you have a git repo with address ",(0,a.kt)("inlineCode",{parentName:"p"},"https://<Repo URL>/foo/bar/hellowrold.git"),", it has many Kubernetes manifest yaml files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\nREADME.MD\nsomething.java\n\u2026\nfoo/bar/k8s/manifests/\n                 foo.yaml\n                 pre-install-cm.yaml\n                \u2026\n                 what/ever/\n                               inner.yaml\n                               \u2026\n                support/all/dir/inside/\n                                            bar.yaml\n                                            \u2026\n")),(0,a.kt)("p",null,"You only want to apply the files in the relative root directory ",(0,a.kt)("inlineCode",{parentName:"p"},"what/ever/")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"support/all/dir/inside/"),", then use the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5,6}","{5,6}":!0},"\nnhctl install applicationNameFooBar \\\n  -u https://[gihub, Gitlab, etc... whateverRepo]/foo/bar/hellowrold.git \\\n  -t manifest \\\n  -n k8sFooNamespace \\\n  --resource-path what/ever/ \\\n  --resource-path support/all/dir/inside/ \\\n  --kubeconfig ~/.kube/barconfig\n\n")),(0,a.kt)("p",null,"If you want to apply all files, you can use the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5}","{5}":!0},"\nnhctl install applicationNameFooBar \\\n  -u https://[gihub, Gitlab, etc... whateverRepo]/foo/bar/hellowrold.git \\\n  -t manifest \\\n  -n k8sFooNamespace \\\n  --resource-path. \\\n  --kubeconfig ~/.kube/barconfig\n\n")),(0,a.kt)("h2",{id:"deploy-by-helm"},"Deploy by Helm"),(0,a.kt)("p",null,"You can using existing ",(0,a.kt)("inlineCode",{parentName:"p"},"Helm Chart")," to deploy application."),(0,a.kt)("h3",{id:"deploy-from-remote-repo"},"Deploy from Remote Repo"),(0,a.kt)("p",null,"If you have a Helm application that store in the remote repo and have access privilege, e.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{7}","{7}":!0},"https://[gihub, Gitlab, etc... whateverRepo]/foo/bar/hellowrold.git\n\nSomefile.py\nAClass.java\nREADME.MD\n...\nmychart/example/\n   Chart.yaml\n   values.yaml\n   charts/\n   templates/\n   ...\n\n")),(0,a.kt)("p",null,"For this repo, we placed under ",(0,a.kt)("inlineCode",{parentName:"p"},"mychart/example/")," directory that relative to the ",(0,a.kt)("inlineCode",{parentName:"p"},"root directory"),", then we can execute the following command to deploy the application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\nnhctl install helloworld \\\n   -u https://[gihub, Gitlab, etc... whateverRepo]/foo/bar/hellowrold.git \\\n   -t helmGit \\\n   -n k8sFooNamespace \\\n   --resource-path charts/example \\\n   --kubeconfig ~/.kube/barconfig\n\n")),(0,a.kt)("h3",{id:"use-owned-helm-repo"},"Use Owned Helm Repo"),(0,a.kt)("p",null,"If you have own Helm repo, you can use the following ",(0,a.kt)("inlineCode",{parentName:"p"},"nhctl")," command to deploy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\nnhctl install helloworld \\\n   --helm-chart-name mychart \\\n   --helm-repo-url http://mychart/charts/ \\\n   -n fooNamespace \\\n   --kubeconfig ~/.kube/barconfig\n\n")))}m.isMDXComponent=!0}}]);