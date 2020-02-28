(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(9),l=(n(0),n(199)),o={id:"joblib_launcher",title:"Joblib Launcher plugin",sidebar_label:"Joblib Launcher plugin"},i={id:"plugins/joblib_launcher",title:"Joblib Launcher plugin",description:"[![PyPI](https://img.shields.io/pypi/v/hydra-joblib-launcher)](https://pypi.org/project/hydra-joblib-launcher/)",source:"@site/docs/plugins/joblib_launcher.md",permalink:"/docs/next/plugins/joblib_launcher",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/plugins/joblib_launcher.md",version:"next",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1582931415,sidebar_label:"Joblib Launcher plugin",sidebar:"Docs",previous:{title:"Colorlog plugin",permalink:"/docs/next/plugins/colorlog"},next:{title:"Application packaging",permalink:"/docs/next/advanced/app_packaging"}},c=[],s={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://pypi.org/project/hydra-joblib-launcher/"}),Object(l.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/pypi/v/hydra-joblib-launcher",alt:"PyPI"}))),"\n",Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/pypi/l/hydra-joblib-launcher",alt:"PyPI - License"})),"\n",Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/pypi/pyversions/hydra-joblib-launcher",alt:"PyPI - Python Version"})),"\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://pypistats.org/packages/hydra-joblib-launcher"}),Object(l.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/pypi/dm/hydra-joblib-launcher.svg",alt:"PyPI - Downloads"})))),Object(l.b)("p",null,"The Joblib Launcher plugin provides a launcher for parallel tasks based on ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://joblib.readthedocs.io/en/latest/parallel.html"}),Object(l.b)("inlineCode",{parentName:"a"},"Joblib.Parallel")),"."),Object(l.b)("p",null,"Install with "),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"pip install hydra_joblib_launcher\n")),Object(l.b)("div",{class:"alert alert--info",role:"alert"},"NOTE: This plugin depends on Hydra 1.0 which is not yet released, if you want to try it install Hydra from master"),Object(l.b)("br",null),Object(l.b)("p",null,"Once installed, override ",Object(l.b)("inlineCode",{parentName:"p"},"hydra/launcher")," in your config:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"defaults:\n  - hydra/launcher: joblib\n")),Object(l.b)("p",null,"By default, process-based parallelism using all available CPU cores is used. By overriding the default configuration, it is e.g. possible limit the number of parallel executions."),Object(l.b)("p",null,"The default configuration packaged with the plugin is:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  launcher:\n    class: hydra_plugins.hydra_joblib_launcher.JoblibLauncher\n    params: # See JobLibConf class below\n      ... \n")),Object(l.b)("p",null,"The JobLibConf class is defined ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/blob/master/plugins/hydra_joblib_launcher/hydra_plugins/hydra_joblib_launcher/config.py"}),"here"),":"),Object(l.b)("p",null,"It looks like this: "),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'@dataclass\nclass JobLibConf:\n    # maximum number of concurrently running jobs. if -1, all CPUs are used\n    n_jobs: int = -1\n\n    # allows to hard-code backend, otherwise inferred based on prefer and require\n    backend: Optional[str] = None\n\n    # processes or threads, soft hint to choose backend\n    prefer: str = "processes"\n\n    # null or sharedmem, sharedmem will select thread-based backend\n    require: Optional[str] = None\n\n    # if greater than zero, prints progress messages\n    verbose: int = 0\n\n    # timeout limit for each task\n    timeout: Optional[int] = None\n\n    # number of batches to be pre-dispatched\n    pre_dispatch: str = "2*n_jobs"\n\n    # number of atomic tasks to dispatch at once to each worker\n    batch_size: str = "auto"\n\n    # folder used for memmapping large arrays for sharing memory with workers\n    temp_folder: Optional[str] = None\n\n    # thresholds size of arrays that triggers automated memmapping\n    max_nbytes: Optional[str] = None\n\n    # memmapping mode for numpy arrays passed to workers\n    mmap_mode: str = "r"\n')),Object(l.b)("p",null,"See ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://joblib.readthedocs.io/en/latest/parallel.html"}),Object(l.b)("inlineCode",{parentName:"a"},"Joblib.Parallel")," documentation")," for full details about the parameters above."),Object(l.b)("div",{class:"alert alert--info",role:"alert"},"NOTE: The only supported JobLib backend is Loky (process-based parallelism)."),Object(l.b)("br",null),Object(l.b)("p",null,"An ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_joblib_launcher/example"}),"example application")," using this launcher is provided in the plugin repository."),Object(l.b)("p",null,"Starting the app with ",Object(l.b)("inlineCode",{parentName:"p"},"python my_app.py --multirun task=1,2,3,4,5")," will launch five parallel executions:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"$ python my_app.py --multirun task=1,2,3,4,5\n[HYDRA] Joblib.Parallel(n_jobs=-1,verbose=0,timeout=None,pre_dispatch=2*n_jobs,batch_size=auto,temp_folder=None,max_nbytes=None,mmap_mode=r,backend=loky) is launching 5 jobs\n[HYDRA] Launching jobs, sweep output dir : multirun/2020-02-18/10-00-00\n[__main__][INFO] - Process ID 14336 executing task 2 ...\n[__main__][INFO] - Process ID 14333 executing task 1 ...\n[__main__][INFO] - Process ID 14334 executing task 3 ...\n[__main__][INFO] - Process ID 14335 executing task 4 ...\n[__main__][INFO] - Process ID 14337 executing task 5 ...\n")))}b.isMDXComponent=!0},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,h=p["".concat(o,".").concat(d)]||p[d]||u[d]||l;return n?r.a.createElement(h,i({ref:t},s,{components:n})):r.a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);