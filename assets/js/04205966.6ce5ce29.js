"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[3373],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=c(n),p=o,g=f["".concat(s,".").concat(p)]||f[p]||d[p]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},90100:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),l=["components"],a={title:"nhctl k"},s={unversionedId:"cli/cli-k",id:"cli/cli-k",isDocsHomePage:!1,title:"nhctl k",description:"kubectl",source:"@site/docs/cli/cli-k.md",sourceDirName:"cli",slug:"/cli/cli-k",permalink:"/docs/cli/cli-k",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/cli/cli-k.md",version:"current",lastUpdatedBy:"Qi Zhang",lastUpdatedAt:1657695850,formattedLastUpdatedAt:"7/13/2022",frontMatter:{title:"nhctl k"},sidebar:"docs",previous:{title:"nhctl install",permalink:"/docs/cli/cli-install"},next:{title:"nhctl list",permalink:"/docs/cli/cli-list"}},c=[{value:"nhctl k delete",id:"nhctl-k-delete",children:[{value:"Usage",id:"usage",children:[]},{value:"Flags",id:"flags",children:[]}]},{value:"nhctl k exec",id:"nhctl-k-exec",children:[{value:"Usage",id:"usage-1",children:[]},{value:"Flags",id:"flags-1",children:[]}]},{value:"nhctl k logs",id:"nhctl-k-logs",children:[{value:"Usage",id:"usage-2",children:[]},{value:"Flags",id:"flags-2",children:[]}]}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"kubectl"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Usage:\n  nhctl k [command]\n\nAvailable Commands:\n  delete      Delete resources by filenames, stdin, resources and names, or by resources and label selector.\n  exec        Execute a command in a container\n  logs        Print the logs for a container in a pod or specified resource\n")),(0,i.kt)("h2",{id:"nhctl-k-delete"},"nhctl k delete"),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"nhctl k delete [flags]\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Example:\n\nnhctl k delete [podName] --namespace nocalhost-reserved --kubeconfig=[path]\n")),(0,i.kt)("h3",{id:"flags"},"Flags"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Flags:\n      --all                             Delete all resources, including uninitialized ones, in the namespace of the specified resource types.\n  -A, --all-namespaces                  If present, list the requested object(s) across all namespaces. Namespace in current context is ignored even if specified with --namespace.\n      --cascade string[="background"]   Must be "background", "orphan", or "foreground". Selects the deletion cascading strategy for the dependents (e.g. Pods created by a ReplicationController). Defaults to background. (default "background")\n      --dry-run string[="unchanged"]    Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource. (default "none")\n      --field-selector string           Selector (field query) to filter on, supports \'=\', \'==\', and \'!=\'.(e.g. --field-selector key1=value1,key2=value2). The server only supports a limited number of field queries per type.\n  -f, --filename strings                containing the resource to delete.\n      --force                           If true, immediately remove resources from API and bypass graceful deletion. Note that immediate deletion of some resources may result in inconsistency or data loss and requires confirmation.\n      --grace-period int                Period of time in seconds given to the resource to terminate gracefully. Ignored if negative. Set to 1 for immediate shutdown. Can only be set to 0 when --force is true (force deletion). (default -1)\n  -h, --help                            help for delete\n      --ignore-not-found                Treat "resource not found" as a successful delete. Defaults to "true" when --all is specified.\n  -k, --kustomize string                Process a kustomization directory. This flag can\'t be used together with -f or -R.\n      --now                             If true, resources are signaled for immediate shutdown (same as --grace-period=1).\n  -o, --output string                   Output mode. Use "-o name" for shorter output (resource/name).\n      --raw string                      Raw URI to DELETE to the server.  Uses the transport specified by the kubeconfig file.\n  -R, --recursive                       Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.\n  -l, --selector string                 Selector (label query) to filter on, not including uninitialized ones.\n      --timeout duration                The length of time to wait before giving up on a delete, zero means determine a timeout from the size of the object\n      --wait                            If true, wait for resources to be gone before returning. This waits for finalizers. (default true)\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n')),(0,i.kt)("h2",{id:"nhctl-k-exec"},"nhctl k exec"),(0,i.kt)("h3",{id:"usage-1"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"nhctl k exec [flags]\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Example:\n\nexec (POD | TYPE/NAME) [-c CONTAINER] [flags] -- COMMAND [args...]\n")),(0,i.kt)("h3",{id:"flags-1"},"Flags"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Flags:\n  -c, --container string   Container name. If omitted, the first container in the pod will be chosen\n  -h, --help               help for exec\n  -i, --stdin              Pass stdin to the container\n  -t, --tty                Stdin is a TTY\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")),(0,i.kt)("h2",{id:"nhctl-k-logs"},"nhctl k logs"),(0,i.kt)("h3",{id:"usage-2"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"nhctl k logs [flags]\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Example:\n\nnhctl logs [podName] -c [containerName] -f=true --tail=1 --namespace nocalhost-reserved --kubeconfig=[path]\n")),(0,i.kt)("h3",{id:"flags-2"},"Flags"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Flags:\n      --all-containers                     Get all containers' logs in the pod(s).\n  -c, --container string                   Print the logs of this container\n  -f, --follow                             Specify if the logs should be streamed.\n  -h, --help                               help for logs\n      --ignore-errors                      If watching / following pod logs, allow for any errors that occur to be non-fatal\n      --insecure-skip-tls-verify-backend   Skip verifying the identity of the kubelet that logs are requested from.  In theory, an attacker could provide invalid log content back. You might want to use this if your kubelet serving certificates have expired.\n      --limit-bytes int                    Maximum bytes of logs to return. Defaults to no limit.\n      --max-log-requests int               Specify maximum number of concurrent logs to follow when using by a selector. Defaults to 5. (default 5)\n      --pod-running-timeout duration       The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running (default 20s)\n      --prefix                             Prefix each log line with the log source (pod name and container name)\n  -p, --previous                           If true, print the logs for the previous instance of the container in a pod if it exists.\n  -l, --selector string                    Selector (label query) to filter on.\n      --since duration                     Only return logs newer than a relative duration like 5s, 2m, or 3h. Defaults to all logs. Only one of since-time / since may be used.\n      --since-time string                  Only return logs after a specific date (RFC3339). Defaults to all logs. Only one of since-time / since may be used.\n      --tail int                           Lines of recent log file to display. Defaults to -1 with no selector, showing all log lines otherwise 10, if a selector is provided. (default -1)\n      --timestamps                         Include timestamps on each line in the log output\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")))}d.isMDXComponent=!0}}]);