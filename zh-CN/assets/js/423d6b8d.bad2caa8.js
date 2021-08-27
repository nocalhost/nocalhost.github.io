"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[1561],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return o}});var a=n(2263),r=n(3919);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,s=void 0!==o&&o,l=i.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(s)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+p:p}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},1999:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=n(4996),s=["components"],l={},c="Overview",p={unversionedId:"server/server-overview",id:"server/server-overview",isDocsHomePage:!1,title:"Overview",description:"In this documentation, we will explain the core idea of Nocalhost Server and clarify some technical terms that are widely used in the project.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/server/server-overview.md",sourceDirName:"server",slug:"/server/server-overview",permalink:"/zh-CN/docs/server/server-overview",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",tags:[],version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1629806685,formattedLastUpdatedAt:"2021/8/24",frontMatter:{},sidebar:"docs",previous:{title:"Nocalhost Dep",permalink:"/zh-CN/docs/server/nh-dep"},next:{title:"Getting Start",permalink:"/zh-CN/docs/server/deploy-server"}},u=[{value:"The Concepts",id:"the-concepts",children:[{value:"Cluster",id:"cluster",children:[]},{value:"DevSpace",id:"devspace",children:[]},{value:"Application",id:"application",children:[]},{value:"Service",id:"service",children:[]},{value:"User",id:"user",children:[]}]},{value:"How It Works",id:"how-it-works",children:[{value:"IDE Plugin",id:"ide-plugin",children:[]},{value:"<code>nhctl</code>",id:"nhctl",children:[]},{value:"Nocalhost-Web",id:"nocalhost-web",children:[]},{value:"Nocalhost-API",id:"nocalhost-api",children:[]},{value:"Nocalhost-Dep",id:"nocalhost-dep",children:[]}]}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"In this documentation, we will explain the core idea of Nocalhost Server and clarify some technical terms that are widely used in the project."),(0,i.kt)("h2",{id:"the-concepts"},"The Concepts"),(0,i.kt)("h3",{id:"cluster"},"Cluster"),(0,i.kt)("p",null,"A Nocalhost ",(0,i.kt)("strong",{parentName:"p"},"Cluster")," is usually corresponds to a Kubernetes cluster. Nocalhost supports to manage multi cluster like TKE, GKE, Minikue and etc."),(0,i.kt)("p",null,"In the actual development process, users do not need to know the concept of Cluster, and user's operation under ",(0,i.kt)("a",{parentName:"p",href:"#devspace"},"DevSpace")," actually rely on the capabilities of Cluster."),(0,i.kt)("h4",{id:"cluster-management"},"Cluster Management"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"KubeConfig")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you want to manage a Cluster\uff0cthen need to maintain a ",(0,i.kt)("inlineCode",{parentName:"p"},"KubeConfig")," with the cluster's Cluster-Admin role."))),(0,i.kt)("p",null,"Cluster is generally used with DevSpace, if you need to manage Cluster, you refer to ",(0,i.kt)("a",{parentName:"p",href:"./manage-cluster"},"Manage Cluster")),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,o.Z)("/img/server/cluster.png")}),(0,i.kt)("figcaption",null,"Nocalhost cluster")),(0,i.kt)("h3",{id:"devspace"},"DevSpace"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"DevSpace")," is a concept of Nocalhost, which represents a pre-allocated development space managed by Nocalhost. Developers can deploy, uninstall, develop, and debug applications within DevSpace. DevSpaces are isolated from each other."),(0,i.kt)("p",null,"Nocalhost also allow developers to share their DevSpaces with other developers for collaborative development."),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,o.Z)("/img/server/devspace-concept.png"),width:"700"}),(0,i.kt)("figcaption",null,"Nocalhost DevSpace")),(0,i.kt)("h4",{id:"devspace-management"},"DevSpace Management"),(0,i.kt)("p",null,"If you need to manage ",(0,i.kt)("strong",{parentName:"p"},"DevSpace"),", you can refer to ",(0,i.kt)("a",{parentName:"p",href:"./manage-devspace"},"Manage DevSpace")),(0,i.kt)("h3",{id:"application"},"Application"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Application")," is a concept of Nocalhost, it is mainly used to manage a set of manifest files you want to apply for local development, it supports both Kubernetes manifest and helm chart. In other words, these manifests usually contain all the k8s resources that your own application depends on. If possible, we should try to keep it to a minimum."),(0,i.kt)("p",null,"Nocalhost supports three types of applications:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Manifest"),(0,i.kt)("li",{parentName:"ul"},"Helm"),(0,i.kt)("li",{parentName:"ul"},"Kustomize")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Application")," can be used to create a ",(0,i.kt)("a",{parentName:"p",href:"#devspace"},"DevSpace"),", we recommend using IDE plug-in directly to deploy your application, IDE plugin is worked on the DevSpace created by Application. In other words, after being assigned a DevSpace, the developer can easily develop on the IDE."),(0,i.kt)("p",null,"After being assigned a DevSpace, you will get a ",(0,i.kt)("inlineCode",{parentName:"p"},"KubeConfig")," to access this DevSpace, ",(0,i.kt)("inlineCode",{parentName:"p"},"nhctl")," or plug-in can deploy the application based on the application's manifest file and ",(0,i.kt)("inlineCode",{parentName:"p"},"KubeConfig"),"."),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,o.Z)("/img/server/manifest-and-kubeconfig.png"),width:"700"}),(0,i.kt)("figcaption",null,"Kubernetes application")),(0,i.kt)("p",null,"So ",(0,i.kt)("strong",{parentName:"p"},"DevSpace")," can actually be approximated as ",(0,i.kt)("strong",{parentName:"p"},"Application")," + ",(0,i.kt)("strong",{parentName:"p"},"Kubeconfig"),":"),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,o.Z)("/img/server/application-and-space.png"),width:"700"}),(0,i.kt)("figcaption",null,"Nocalhost DevSpace")),(0,i.kt)("h4",{id:"application-management"},"Application Management"),(0,i.kt)("p",null,"If you need to manage ",(0,i.kt)("strong",{parentName:"p"},"Applications"),", you can refer to ",(0,i.kt)("a",{parentName:"p",href:"./manage-app"},"Manage Application")),(0,i.kt)("h3",{id:"service"},"Service"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Service")," is completely different from svc of Kubernetes. Service can be considered as an enhancement of application deployment and development."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../config/config-deploy"},"Read more to learn how to configure application deployment")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../config/config-dev"},"Read more to learn how to configure application development"))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Service Configs")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Service configurations are not necessary, only needs when essential."))),(0,i.kt)("h3",{id:"user"},"User"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"User")," belongs to the independent concept of Nocalhost, it's ",(0,i.kt)("strong",{parentName:"p"},"different")," with user in Kubernetes. When you use ",(0,i.kt)("inlineCode",{parentName:"p"},"Nocalhost Server")," and Nocalhost Plugins, User is used to identify your identity and access control to resources."),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,o.Z)("/img/server/user-and-space.png"),width:"800"}),(0,i.kt)("figcaption",null,"Nocalhost DevSpace and user")),(0,i.kt)("p",null,"There are two types of ",(0,i.kt)("strong",{parentName:"p"},"User")," in Nocalhost: ",(0,i.kt)("strong",{parentName:"p"},"Standard User")," and ",(0,i.kt)("strong",{parentName:"p"},"System Admin")),(0,i.kt)("h4",{id:"standard-user"},"Standard User"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Can only log in IDE Plugin, users can develop under their own DevSpace. these DevSpace are all created by Administrator."),(0,i.kt)("li",{parentName:"ul"},"User can only see their own DevSpace, and have all the permissions under these DevSpace, such as install, uninstall (deploy and destroy), enter DevMode and port-forwarding."),(0,i.kt)("li",{parentName:"ul"},"Cannot log in to Nocalhost-Web, nor can they delete the DevSpace, or disassociate it from the DevSpace, which is very similar to the admin permission under a certain namespace of Kubernetes.")),(0,i.kt)("h4",{id:"system-admin"},"System Admin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Has the permission to access ",(0,i.kt)("inlineCode",{parentName:"p"},"Nocalhost Server"),", and with all the permissions in Nocalhost Web, such as create and manage Application, Cluster, User, DevSpace, etc")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Have all the permissions of ",(0,i.kt)("strong",{parentName:"p"},"User"),", such as logging in at IDE plugins, develop in their own DevSpace list"))),(0,i.kt)("h4",{id:"user-management"},"User Management"),(0,i.kt)("p",null,"If you need to manage ",(0,i.kt)("strong",{parentName:"p"},"User"),", you can refer to ",(0,i.kt)("a",{parentName:"p",href:"./manage-user"},"Manage User")),(0,i.kt)("h2",{id:"how-it-works"},"How It Works"),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,o.Z)("/img/server/nh-architecture.jpeg")}),(0,i.kt)("figcaption",null,"Nocalhost overall working diagram")),(0,i.kt)("h3",{id:"ide-plugin"},"IDE Plugin"),(0,i.kt)("h3",{id:"nhctl"},(0,i.kt)("inlineCode",{parentName:"h3"},"nhctl")),(0,i.kt)("h3",{id:"nocalhost-web"},"Nocalhost-Web"),(0,i.kt)("h3",{id:"nocalhost-api"},"Nocalhost-API"),(0,i.kt)("h3",{id:"nocalhost-dep"},"Nocalhost-Dep"))}m.isMDXComponent=!0}}]);