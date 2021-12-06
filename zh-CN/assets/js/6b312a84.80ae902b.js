"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[1257],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},44996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(52263),a=n(13919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,l=void 0!==i&&i,s=o.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a=n(79443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,a=e.block,c=e.defaultValue,u=e.values,d=e.groupId,p=e.className,m=r.Children.toArray(e.children),v=null!=u?u:m.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=c?c:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,f=o(),g=f.tabGroupChoices,k=f.setTabGroupChoices,b=(0,r.useState)(h),N=b[0],y=b[1],w=[];if(null!=d){var C=g[d];null!=C&&C!==N&&v.some((function(e){return e.value===C}))&&y(C)}var O=function(e){var t=e.currentTarget,n=w.indexOf(t),r=v[n].value;y(r),null!=d&&(k(d,r),setTimeout((function(){var e,n,r,a,o,i,l,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},p)},v.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":N===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:E,onFocus:O,onClick:O},null!=n?n:t)}))),n?(0,r.cloneElement)(m.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},31862:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var r=n(74034),a=n(79973),o=(n(67294),n(3905)),i=(n(55064),n(58215),n(44996)),l=["components"],s={},c="Getting Start",u={unversionedId:"server/deploy-server",id:"server/deploy-server",isDocsHomePage:!1,title:"Getting Start",description:"Goal 5 minutes  Requirements :",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/server/deploy-server.md",sourceDirName:"server",slug:"/server/deploy-server",permalink:"/zh-CN/docs/server/deploy-server",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",tags:[],version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1629806685,formattedLastUpdatedAt:"2021/8/24",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/zh-CN/docs/server/server-overview"},next:{title:"Upgrade",permalink:"/zh-CN/docs/server/upgrade"}},d=[{value:"1. Add Helm Chart Repository",id:"1-add-helm-chart-repository",children:[]},{value:"2. Install the Nocalhost Server",id:"2-install-the-nocalhost-server",children:[]},{value:"3. Waiting for Pods to be Ready",id:"3-waiting-for-pods-to-be-ready",children:[]},{value:"4. Port-Forwarding to Access Web Service",id:"4-port-forwarding-to-access-web-service",children:[]},{value:"5. Add Dev Cluster",id:"5-add-dev-cluster",children:[]}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-start"},"Getting Start"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"About this guide")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Goal :")," Deploy Nocalhost Sever to Kubernetes cluster. ",(0,o.kt)("br",null)," ",(0,o.kt)("strong",{parentName:"p"},"Estimate time :")," 5 minutes ",(0,o.kt)("br",null)," ",(0,o.kt)("strong",{parentName:"p"},"Requirements :")),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Any local or remote Kubernetes cluster (minikube, Docker Desktop, TKE, GKE, EKS, AKS, Rancher, ...). Allocate at least 4 GB of memory for single node clusters like ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/docker-for-mac/kubernetes/"},"Docker Desktop")," and ",(0,o.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"RBAC")," must be enabled in above cluster"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Configured kubeconfig file")," that has namespace admin privilege"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Nocalhost IDE Plugin")," installed"),(0,o.kt)("li",{parentName:"ul"},"Kubernetes api-server can be accessed internal and external"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://helm.sh/docs/intro/install/"},"Helm"))," 3+")))),(0,o.kt)("h2",{id:"1-add-helm-chart-repository"},"1. Add Helm Chart Repository"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'helm repo add nocalhost "https://nocalhost-helm.pkg.coding.net/nocalhost/nocalhost"\nhelm repo update\n')),(0,o.kt)("h2",{id:"2-install-the-nocalhost-server"},"2. Install the Nocalhost Server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm install nocalhost nocalhost/nocalhost -n nocalhost --create-namespace\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"No PVC")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The above deployment will create a pvc for ",(0,o.kt)("inlineCode",{parentName:"p"},"mariadb"),". If you do not have pvc or without permission to create, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--set mariadb.primary.persistence.enabled=false")," to deploy Nocalhost Server without creating pvc."))),(0,o.kt)("h2",{id:"3-waiting-for-pods-to-be-ready"},"3. Waiting for Pods to be Ready"),(0,o.kt)("p",null,"You can check the pods status by ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," or other Kubernetes tools."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"\u276f kubectl -n nocalhost get pods\nNAME                            READY   STATUS    RESTARTS   AGE\nnocalhost-api-b48f7799d-wr4ps   1/1     Running   3          2m7s\nnocalhost-mariadb-0             1/1     Running   0          2m2s\nnocalhost-web-9dd659b8-s89f4    1/1     Running   0          2m7s\n")),(0,o.kt)("h2",{id:"4-port-forwarding-to-access-web-service"},"4. Port-Forwarding to Access Web Service"),(0,o.kt)("p",null,"Once the deployment completed, you need to manually port-forward the Nocalhost Web Service to local by using the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"\u276f kubectl -n nocalhost port-forward service/nocalhost-web 8080:80\n")),(0,o.kt)("p",null,"You can now access the nocalhost dashboard with ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080"},"http://127.0.0.1:8080")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Default username and password to access web service"',title:'"Default',username:!0,and:!0,password:!0,to:!0,access:!0,web:!0,'service"':!0},"Email: admin@admin.com\nPassword: 123456\n")),(0,o.kt)("h2",{id:"5-add-dev-cluster"},"5. Add Dev Cluster"),(0,o.kt)("p",null,"Access the nocalhost dashboard, ",(0,o.kt)("inlineCode",{parentName:"p"},"Cluster"),"--\x3e",(0,o.kt)("inlineCode",{parentName:"p"},"Add Cluster"),". Copy the contents of the ",(0,o.kt)("strong",{parentName:"p"},"Admin")," kubeconfig and paste it into the input box."),(0,o.kt)("figure",{className:"img-frame"},(0,o.kt)("img",{className:"gif-img",src:(0,i.Z)("/img/server/add_cluster.png"),width:"600"}),(0,o.kt)("figcaption",null,"Add dev cluster")),(0,o.kt)("figure",{className:"img-frame"},(0,o.kt)("img",{className:"gif-img",src:(0,i.Z)("/img/server/dev_cluster.png"),width:"600"}),(0,o.kt)("figcaption",null,"Dev cluster info")))}m.isMDXComponent=!0}}]);