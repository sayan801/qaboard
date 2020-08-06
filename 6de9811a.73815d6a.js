(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||r;return n?i.a.createElement(d,l(l({ref:t},s),{},{components:n})):i.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),r=(n(0),n(108)),o={id:"dag-pipelines",title:"Defining Pipelines / DAG",sidebar_label:"Defining Pipelines / DAG"},l={unversionedId:"dag-pipelines",id:"dag-pipelines",isDocsHomePage:!1,title:"Defining Pipelines / DAG",description:"Nothing here is implemented available, it's at the API design stage. [Link-to-issue].",source:"@site/docs/dag-pipelines.md",permalink:"/qaboard/docs/dag-pipelines",editUrl:"https://github.com/Samsung/qaboard/edit/master/website/docs/dag-pipelines.md",sidebar_label:"Defining Pipelines / DAG",sidebar:"docs",previous:{title:"Various Tuning Workflows",permalink:"/qaboard/docs/tuning-workflows"},next:{title:"Bit accuracy tests",permalink:"/qaboard/docs/bit-accuracy"}},c=[],s={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Work-In-Progress")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Nothing here is implemented available, it's at the API design stage. ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Samsung/qaboard/issues/10"}),"[Link-to-issue]"),"."))),Object(r.b)("p",null,"Currently QA-Board lacks expressivity for the common use-case of:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Run an algo on some images"),Object(r.b)("li",{parentName:"ol"},"Calibration"),Object(r.b)("li",{parentName:"ol"},"Validation")),Object(r.b)("p",null,"Likewise, it can\u2019t handle nicely machine learning workflows (training/validation)."),Object(r.b)("p",null,"Below are two workarounds people have used until now, and a proposition for built-in support in QA-Board."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Can you send me feedback / alternative ideas, or share to relevant people? Especially if you have experience with various flow engines, e.g. DVC. Thanks!"),Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"The goal is a solution that is simple, expressive, and enables caching."))),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Run qa batch multiple times, with each run expecting that results of the previous run are available ",Object(r.b)("em",{parentName:"li"},"(as done with @rivka, @TF)"),".")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"(+)")," Rather easy to do"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"(-)")," The logic is outside QA-Board \u2013 it can\u2019t easily be used for tuning from the web UI \uf04b")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},'Create a "meta" run, with a heavy run() function that itself takes care of everything  ',Object(r.b)("em",{parentName:"li"},"(as done with @eliav)"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"(+)")," Easy to do"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"(-)")," But very custom and not easy to use"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"(-)")," There many tricky corners (running locally, filesystem issues on LSF) that should not be the  engineer\u2019s concern.")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},'"Built-in support" by QA-Board.\nOne possible way we could do it is by extending the syntax used to defined batches with a ',Object(r.b)("inlineCode",{parentName:"li"},"needs:")," keyword:")),Object(r.b)("p",null,"Simple example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'batch1:\n  inputs:\n  - A.jpg\n  - B.jpg\n  configurations:\n  - base\n\nbatch2:\n  needs: batch1\n  type: script\n  configurations:\n  - python my_script.py {o.output_dir for o in depends["batch1"]}\n\n# ? there is not really an "input" for a script, especially if it uses "depends"\n# ? if we depend on something I guess we could do without input, provide None...\n')),Object(r.b)("p",null,'"Real-world" example:'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"my-calibration-images:\n    configurations:\n    - base\n    inputs:\n    - DL50.raw\n    - DL55.raw\n    - DL65.raw\n    - DL75.raw\n\nmy-calibration:\n    needs:\n      calibration_images: my-calibration-images\n    type: script\n    configurations:\n    - python calibration.py ${o.output_directory for o in depends[calibration_images]}\n\nmy-evaluation-batch:\n    needs:\n      calibration: my-calibration\n    inputs:\n    - test_image_1.raw\n    - test_image_2.raw\n    - test_image_3.raw\n    configurations:\n    - base\n    - ${depends[calibration].output_directory}/calibration.cde\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ qa batch my-evaluation-batch\n#=> qa batch my-calibration-images\n#=> qa batch my-calibration\n#=> qa batch my-evaluation-batch\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"(+)")," simple for users (I think so?)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"(+)")," caching for free"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"(?)")," need to define a clear API: how each job can lookup results of earlier jobs\u2026 And likely we will need naming-conventions for parameter tuning\u2026")))}b.isMDXComponent=!0}}]);