"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[995],{3905:function(e,t,o){o.d(t,{Zo:function(){return l},kt:function(){return f}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(o),f=r,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return o?n.createElement(h,i(i({ref:t},l),{},{components:o})):n.createElement(h,i({ref:t},l))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},9318:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var n=o(74034),r=o(79973),a=(o(67294),o(3905)),i=["components"],c={},s="Overview",u={unversionedId:"config/config-en",id:"config/config-en",isDocsHomePage:!1,title:"Overview",description:"Nocalhost overview (what is it, how to configure, and what features does it have?)",source:"@site/docs/config/config-en.md",sourceDirName:"config",slug:"/config/config-en",permalink:"/docs/config/config-en",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/config/config-en.md",tags:[],version:"current",lastUpdatedBy:"anurnomeru",lastUpdatedAt:1635935527,formattedLastUpdatedAt:"11/3/2021",frontMatter:{},sidebar:"docs",previous:{title:"Hot Reload",permalink:"/docs/guides/hot-reload"},next:{title:"What is Nocalhost Config?",permalink:"/docs/config/config-overview-en"}},l=[{value:"Nocalhost overview (what is it, how to configure, and what features does it have?)",id:"nocalhost-overview-what-is-it-how-to-configure-and-what-features-does-it-have",children:[]},{value:"What configuration does Nocalhost provide?",id:"what-configuration-does-nocalhost-provide",children:[]},{value:"What configuration ways does Nocalhost support?",id:"what-configuration-ways-does-nocalhost-support",children:[]},{value:"Deployment Configuration",id:"deployment-configuration",children:[]}],p={toc:l};function d(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("h2",{id:"nocalhost-overview-what-is-it-how-to-configure-and-what-features-does-it-have"},(0,a.kt)("a",{parentName:"h2",href:"/docs/config/config-overview-en"},"Nocalhost overview (what is it, how to configure, and what features does it have?)")),(0,a.kt)("p",null,"This section introduces some information such as what Nocalhost configuration is, how to modify the configuration, and what features does it have. ",(0,a.kt)("strong",{parentName:"p"},"If you have no concept of Nocalhost configuration")," or want to understand the structure and features of Nocalhost configuration, you can read this section."),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"what-configuration-does-nocalhost-provide"},(0,a.kt)("a",{parentName:"h2",href:"/docs/config/config-spec-en"},"What configuration does Nocalhost provide?")),(0,a.kt)("p",null,"Development configuration defines the behavior of entering ",(0,a.kt)("inlineCode",{parentName:"p"},"DevMode"),". If you want to ",(0,a.kt)("strong",{parentName:"p"},"make some customized configuration when entering ",(0,a.kt)("inlineCode",{parentName:"strong"},"DevMode")),", development configuration would be helpful. If you want to know what configurations Nocalhost provides, you can read this section."),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"what-configuration-ways-does-nocalhost-support"},(0,a.kt)("a",{parentName:"h2",href:"/docs/config/configure-en"},"What configuration ways does Nocalhost support?")),(0,a.kt)("p",null,"Nocalhost supports multiple ways to configure the DevMode and provides support for various rich usage scenarios. The most common configuration way is to right-click the specific workload in the IDE plug-in and select ",(0,a.kt)("inlineCode",{parentName:"p"},"DevConfig")," to enter the Development configuration editing UI."),(0,a.kt)("p",null,"Besides, Nocalhost also supports placing the development configuration in the ",(0,a.kt)("strong",{parentName:"p"},"source directory, configMap, and annotation"),". For example, the development configuration can be configured on the CD in a process or in the helm chart, rawManifest, through the above-mentioned configuration ways, to avoid repeated configuration or customized configuration, etc."),(0,a.kt)("p",null,"If you want to learn more about multiple configure ways of development configuration, you can click on the details of this section."),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"deployment-configuration"},(0,a.kt)("a",{parentName:"h2",href:"/docs/config/config-deployment-en"},"Deployment Configuration")),(0,a.kt)("p",null,"Nocalhost has the function of application deployment. Under ",(0,a.kt)("inlineCode",{parentName:"p"},"Nocalhost Server"),", this is a high-frequency function. Nocalhost provides features such as ",(0,a.kt)("strong",{parentName:"p"},"dependency control and env injection")," to workloads."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tips")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you do not use ",(0,a.kt)("inlineCode",{parentName:"p"},"Nocalhost Server")," or do not need functions such as workload dependency control and env injection or have your own complete deployment way, you don't need to read this section."))),(0,a.kt)("p",null,"Nocalhost supports Helm, rawManifest, and Kustomize for the deployment of K8s applications, it also supports multiple configuration way such as ",(0,a.kt)("strong",{parentName:"p"},"configMap and annotation"),"."))}d.isMDXComponent=!0}}]);