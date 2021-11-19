"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[5934],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(n),d=a,m=g["".concat(s,".").concat(d)]||g[d]||u[d]||r;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},13919:function(e,t,n){function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,{b:function(){return i},Z:function(){return a}})},44996:function(e,t,n){n.d(t,{C:function(){return r},Z:function(){return o}});var i=n(52263),a=n(13919);function r(){var e=(0,i.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var r=void 0===i?{}:i,o=r.forcePrependBaseUrl,l=void 0!==o&&o,s=r.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+p:p}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},24643:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return u},toc:function(){return g},default:function(){return m}});var i=n(74034),a=n(79973),r=(n(67294),n(3905)),o=n(44996),l=["components"],s={title:"Developing APISIX Ingress Controller with Nocalhost in Kubernetes",author:"Garry Chen",author_title:"Product Manager at Nocalhost Team",author_url:"https://github.com/neaped",author_image_url:"https://avatars.githubusercontent.com/u/3713305?v=4",tags:["Kubernetes","APISIX","Controller","Development"]},c=void 0,p={permalink:"/blog/api-six",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/blog/api-six.md",source:"@site/blog/api-six.md",title:"Developing APISIX Ingress Controller with Nocalhost in Kubernetes",description:"Introduction",date:"2021-11-19T08:12:29.141Z",formattedDate:"November 19, 2021",tags:[{label:"Kubernetes",permalink:"/blog/tags/kubernetes"},{label:"APISIX",permalink:"/blog/tags/apisix"},{label:"Controller",permalink:"/blog/tags/controller"},{label:"Development",permalink:"/blog/tags/development"}],readingTime:4.64,truncated:!1,authors:[{name:"Garry Chen",title:"Product Manager at Nocalhost Team",url:"https://github.com/neaped",imageURL:"https://avatars.githubusercontent.com/u/3713305?v=4"}],nextItem:{title:"Nocalhost \u5b98\u65b9\u6587\u6863\u7ffb\u8bd1\u6d3b\u52a8",permalink:"/blog/docs-translate"}},u={authorsImageUrls:[void 0]},g=[{value:"Introduction",id:"introduction",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Deploy APISIX Ingress Controller",id:"deploy-apisix-ingress-controller",children:[]},{value:"Developing",id:"developing",children:[{value:"Step 1. Start DevMode",id:"step-1-start-devmode",children:[]},{value:"Step 2. Change code and check result",id:"step-2-change-code-and-check-result",children:[]},{value:"Step 3. End DevMode",id:"step-3-end-devmode",children:[]}]},{value:"Debugging",id:"debugging",children:[{value:"Step 1. Start remote debugging",id:"step-1-start-remote-debugging",children:[]},{value:"Step 2. Step through breakpoints",id:"step-2-step-through-breakpoints",children:[]}]},{value:"Remote Run",id:"remote-run",children:[]},{value:"Conclusion",id:"conclusion",children:[]},{value:"References",id:"references",children:[]}],d={toc:g};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("figure",{className:"img-frame"},(0,r.kt)("img",{className:"gif-img",src:(0,o.Z)("/img/blog/apisix/apisix-banner.png")})),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This article walks you through using Nocalhost to seamlessly connect your local development machine to a remote Kubernetes cluster, allowing you to use your favourite IDE to develop and debug ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/ingress-controller/getting-started"},"Apache APISIX ingress controller"),". Giving you the ability to comfortably develop and debug your remote apps with your existing skills."),(0,r.kt)("p",null,"This article covers:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#deploy-apisix-ingress-controller"},"Deploy the APISIX Ingress controller")," to the remote Kubernetes cluster within IDE"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#developing"},"Developing")," and ",(0,r.kt)("a",{parentName:"li",href:"#debugging"},"debugging")," APISIX ingress controller in Kubernetes without image rebuilding")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Prepare an available Kubernetes cluster in your workstation. You can use any Kubernetes clusters that you have namespace admin privilege."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://helm.sh"},"Helm v3.0+")," installed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://apache.github.io/apisix-helm-chart/docs/en/latest/apisix.html"},"APISIX")," installed"),(0,r.kt)("li",{parentName:"ul"},"GoLand IDE 2020.03+ (I am using GoLand 2021.2 in this article)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/installation#install-jetbrains-plugin"},"Install Nocalhost JetBrains plugin")),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://golang.org/dl/"},"Go 1.13")," or later")),(0,r.kt)("h2",{id:"deploy-apisix-ingress-controller"},"Deploy APISIX Ingress Controller"),(0,r.kt)("p",null,"I'm going to deploy APISIX Ingress Controller by Nocalhost within GoLand: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the Nocalhost plugin within GoLand"),(0,r.kt)("li",{parentName:"ol"},"Use the cluster inspector to select the namespace that you want to deploy."),(0,r.kt)("li",{parentName:"ol"},"Right-click the selected namespace, choose ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Deploy Application")),", and select ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Helm Repo"))," as installation method. "),(0,r.kt)("li",{parentName:"ol"},"In the following dialog box, input",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," as ",(0,r.kt)("inlineCode",{parentName:"li"},"Name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"https://charts.apiseven.com")," as ",(0,r.kt)("inlineCode",{parentName:"li"},"Chart URL"))))),(0,r.kt)("figure",{className:"img-frame"},(0,r.kt)("img",{className:"gif-img",src:(0,o.Z)("/img/blog/apisix/apisix-ingress-deploy.gif")}),(0,r.kt)("figcaption",null,"Deploy APISIX ingress controller")),(0,r.kt)("p",null,"Let's test the ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," after deployment by enable the port-forwarding within IDE:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Find the ",(0,r.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," workload in the cluster inspector, right-click and select the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Port Forward"))),(0,r.kt)("li",{parentName:"ol"},"Add the port-forwarding ",(0,r.kt)("inlineCode",{parentName:"li"},"8080:8080")),(0,r.kt)("li",{parentName:"ol"},"Visiting the ",(0,r.kt)("a",{parentName:"li",href:"http://127.0.0.1:8080/healthz"},(0,r.kt)("inlineCode",{parentName:"a"},"http://127.0.0.1:8080/healthz"))," in local and check the result")),(0,r.kt)("figure",{className:"img-frame"},(0,r.kt)("img",{className:"gif-img",src:(0,o.Z)("/img/blog/apisix/apisix-ingress-test.gif")}),(0,r.kt)("figcaption",null,"Test the deployment")),(0,r.kt)("h2",{id:"developing"},"Developing"),(0,r.kt)("h3",{id:"step-1-start-devmode"},"Step 1. Start DevMode"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Right-click the deployment ",(0,r.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," in cluster inspector, select ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Start DevMode"))),(0,r.kt)("li",{parentName:"ol"},"Choose your source code directory if you have already cloned in local, or let Nocalhost clone the source code for you by entering the ",(0,r.kt)("strong",{parentName:"li"},"apache/apisix-ingress-controller")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller.git"},"repository URL")),(0,r.kt)("li",{parentName:"ol"},"Wait for the operations, Nocalhost will open the remote terminal within IDE after entering DevMode")),(0,r.kt)("p",null,"Now start the ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," process by entering the following command in the remote terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go run main.go ingress --config-path conf/config-default.yaml\n")),(0,r.kt)("p",null,"After the ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," has started, access the service by visiting ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080/healthz"},(0,r.kt)("inlineCode",{parentName:"a"},"http://127.0.0.1:8080/healthz"))," on local and check the result."),(0,r.kt)("figure",{className:"img-frame"},(0,r.kt)("img",{className:"gif-img",src:(0,o.Z)("/img/blog/apisix/apisix-ingress-devmode.gif")}),(0,r.kt)("figcaption",null,"Entering DevMode")),(0,r.kt)("h3",{id:"step-2-change-code-and-check-result"},"Step 2. Change code and check result"),(0,r.kt)("p",null,"Now I will make some code changes and check the result. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Stop the ",(0,r.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," process"),(0,r.kt)("li",{parentName:"ol"},"Search ",(0,r.kt)("inlineCode",{parentName:"li"},"healthz")," and find the ",(0,r.kt)("inlineCode",{parentName:"li"},"router.go")," file. Change the ",(0,r.kt)("inlineCode",{parentName:"li"},"healthzResponse")," status code from ",(0,r.kt)("inlineCode",{parentName:"li"},"ok")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Hello Nocalhost")),(0,r.kt)("li",{parentName:"ol"},"Start the process again and check the change result in local")),(0,r.kt)("figure",{className:"img-frame"},(0,r.kt)("img",{className:"gif-img",src:(0,o.Z)("/img/blog/apisix/apisix-ingress-code-change.gif")}),(0,r.kt)("figcaption",null,"\u2b50\ufe0f \xa0 No need to rebuild image or restart container, see result under seconds \xa0 \u2b50\ufe0f ")),(0,r.kt)("h3",{id:"step-3-end-devmode"},"Step 3. End DevMode"),(0,r.kt)("p",null,"Now close the development window and end DevMode."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Right-click the ",(0,r.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," in the cluster inspector"),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"End DevMode")))),(0,r.kt)("p",null,"Nocalhost will make ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," end DevMode, and reset the ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," Pod to its original version. Enable the port-forwarding and check the result after ending DevMode."),(0,r.kt)("figure",{className:"img-frame"},(0,r.kt)("img",{className:"gif-img",src:(0,o.Z)("/img/blog/apisix/apisix-ingress-end-devmode.gif")}),(0,r.kt)("figcaption",null,"Ending DevMode")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Code Change")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"All code changes in DevMode will ",(0,r.kt)("strong",{parentName:"p"},"only take effect")," in the development container. "),(0,r.kt)("p",{parentName:"div"},"After exiting the DevMode, Nocalhost will reset the remote container to its original state (before the code is modified). In this way, after exiting the DevMode, the modification of the code will ",(0,r.kt)("strong",{parentName:"p"},"not")," cause any changes or impact on the original environment."))),(0,r.kt)("h2",{id:"debugging"},"Debugging"),(0,r.kt)("p",null,"Debugging an application is not easy, and debugging an application in the Kubernetes cluster is even more difficult. Nocalhost is here to help by providing the same debugging experience you're used in the IDE when debugging in the remote Kubernetes cluster. "),(0,r.kt)("h3",{id:"step-1-start-remote-debugging"},"Step 1. Start remote debugging"),(0,r.kt)("p",null,"We can start remote debugging by:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Right-click ",(0,r.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," and choose ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remote Debug"))),(0,r.kt)("li",{parentName:"ol"},"Nocalhost will put ",(0,r.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," into DevMode and run debug command defined in ",(0,r.kt)("a",{parentName:"li",href:"/docs/config/config-develop"},(0,r.kt)("inlineCode",{parentName:"a"},"dev config"))," automatically")),(0,r.kt)("figure",{className:"img-frame"},(0,r.kt)("img",{className:"gif-img",src:(0,o.Z)("/img/blog/apisix/apisix-ingress-remote-debug.gif")}),(0,r.kt)("figcaption",null,"Start remote debugging")),(0,r.kt)("h3",{id:"step-2-step-through-breakpoints"},"Step 2. Step through breakpoints"),(0,r.kt)("p",null,"Now set a breakpoint on the ",(0,r.kt)("inlineCode",{parentName:"p"},"healthz")," function. Hover over just to the left of the line number and click on the red dot. Once it\u2019s set, visit ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080/healthz"},(0,r.kt)("inlineCode",{parentName:"a"},"http://127.0.0.1:8080/healthz"))," in your local browser, GoLand should pop to the foreground. Click the play button to close the request and the progress should continue loading."),(0,r.kt)("p",null,"In addition, as I enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"dev.hotReload"),", so every time you make the code change, Nocalhost will automatically re-run the debug command. This is very useful when you make the code change and debug frequently."),(0,r.kt)("figure",{className:"img-frame"},(0,r.kt)("img",{className:"gif-img",src:(0,o.Z)("/img/blog/apisix/apisix-ingress-break-reload.gif")}),(0,r.kt)("figcaption",null,"Setting up breakpoints and run the service")),(0,r.kt)("h2",{id:"remote-run"},"Remote Run"),(0,r.kt)("p",null,"Not just remote debugging, Nocalhost also provides an easy way to run your Go service in the Kubernetes cluster, plus hot reload!"),(0,r.kt)("p",null,"You can using the remote run feature by:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Right-click ",(0,r.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," in cluster inspector, choose ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remote Run"))),(0,r.kt)("li",{parentName:"ol"},"Nocalhost will put ",(0,r.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," into DevMode and start run command defined in ",(0,r.kt)("a",{parentName:"li",href:"/docs/config/config-develop"},(0,r.kt)("inlineCode",{parentName:"a"},"dev config"))," automatically")),(0,r.kt)("p",null,"Now every time you make code changes, Nocalhost will automatically trigger the run command. You can now enjoy the hot reload for Go without complex configuration."),(0,r.kt)("figure",{className:"img-frame"},(0,r.kt)("img",{className:"gif-img",src:(0,o.Z)("/img/blog/apisix/apisix-ingress-remote-run.gif")}),(0,r.kt)("figcaption",null,"Remote run")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Today, we\u2019ve learned how to use Nocalhost to develop and debug the APISIX ingress controller in Kubernetes.  Now, instead of waiting for slow local development processes, we can iterate quickly with an instant feedback loop and a productive cloud-native development environment."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/ingress-controller/getting-started"},"Apache APISIX getting started guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/ingress-controller/development"},"Developing for Apache APISIX Ingress Controller"))))}m.isMDXComponent=!0}}]);