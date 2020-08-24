(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{104:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return l}));var r=a(2),n=a(6),o=(a(0),a(114)),i={title:"Introducing QA-Board",author:"Arthur Flam",author_url:"https://shapescience.xyz/",author_title:"Algo engineering at Samsung",author_image_url:"https://media-exp1.licdn.com/dms/image/C4D03AQFO_tBlzPZ4ug/profile-displayphoto-shrink_400_400/0?e=1602720000&v=beta&t=35CS2a0jRg32mhVbwpqbddP8HJsFp75hLeQJjAHQHCw",tags:["qualityOps","engineering"]},s={permalink:"/qaboard/blog/2020/08/10/introducing-QA-Board",source:"@site/blog/2020-08-10-introducing-QA-Board.md",description:"We are happy to introduce QA-Board (source), a run-tracker with advanced visualizations for algorithm and software engineers.",date:"2020-08-10T00:00:00.000Z",tags:[{label:"qualityOps",permalink:"/qaboard/blog/tags/quality-ops"},{label:"engineering",permalink:"/qaboard/blog/tags/engineering"}],title:"Introducing QA-Board",readingTime:3.01,truncated:!0},c=[{value:"Tracking quality is hard",id:"tracking-quality-is-hard",children:[]},{value:"QA-Board&#39;s story",id:"qa-boards-story",children:[]},{value:"Use-Cases",id:"use-cases",children:[]},{value:"What&#39;s next?",id:"whats-next",children:[]},{value:"How to get started using QA-Board?",id:"how-to-get-started-using-qa-board",children:[]}],b={rightToc:c};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We are happy to introduce ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"samsung.github.io/qaboard"}),"QA-Board")," (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/samsung/qaboard"}),"source"),"), a run-tracker with advanced visualizations for algorithm and software engineers."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{alt:"QA-Board logo",width:400,src:"https://user-images.githubusercontent.com/2649055/86829138-bb6aef00-c09c-11ea-8b59-78b7fc44ebcf.png"})),Object(o.b)("h2",{id:"tracking-quality-is-hard"},"Tracking quality is hard"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Tests are not enough")," when the focus is quality and performance. Whether you need to improve algorithms or make performance-sensitive code more efficient, all sorts of metrics and visualizations are required. Engineers usually start this evaluation process by writing scripts or notebooks that test their solution on limited samples. They then look at the results and iterate."),Object(o.b)("p",null,'While it\'s very convenient at first, very soon keeping track of versions or comparing features gets challenging. There are a lot of "logistics" to get right:'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"How to share results?"),Object(o.b)("li",{parentName:"ul"},"What about source control and CI integration?"),Object(o.b)("li",{parentName:"ul"},"How to start distributed tuning experiments?"),Object(o.b)("li",{parentName:"ul"},"How to identify regressions?")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"We wanted to solve those recurrent issues with a simple solution adaptable to many projects.")),Object(o.b)("h2",{id:"qa-boards-story"},"QA-Board's story"),Object(o.b)("p",null,"Our business unit develops IP for image sensors. What was a closely-knit 15 person team became an over-300-person organization. The complexity and pace of our projects kept growing. As you may know, Samsung is now working on image sensors with groundbreaking resolution (200MP and beyond), capable of AI and packed with innovative features, including cutting-edge image processing IPs."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://samsung-careers.co.il/?coref=1.10.rA7_407&t=1597396535199"}),"We're hiring at Samsung's Israel R&D Center")," - our goal is to become the 1st image sensor manufacturer worldwide.")),Object(o.b)("p",null,"As we were experiencing growing pains in our development processes, we set up an infrastructure team to change the way we work. What we emphasized were software-engineering best practices, tooling, reproducibility, and our mission to improve cross-team collaboration."),Object(o.b)("p",null,"As part of our work on algorithms for our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://rpg.ifi.uzh.ch/docs/CVPR19workshop/CVPRW19_Eric_Ryu_Samsung.pdf"}),"innovative DVS sensor"),", I had created what became QA-Board. When I joined this new infrastructure team we expanded QA-Board's scope."),Object(o.b)("h2",{id:"use-cases"},"Use-Cases"),Object(o.b)("p",null,"QA-Board has become a key collaborative tool. Our main use-cases are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Sharing")," links with all the info (command, output files, logs...)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Work-from-home"),": engineers can share 108MP+ images thanks to the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/IIIF/awesome-iiif"}),"IIIF protocol"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Integration"),": links to and from git repositories and their Continuous Integration. From QA-Board, users can ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://samsung.github.io/qaboard/docs/triggering-third-party-tools"}),"directly access")," build artifacts, trigger automated jobs, and when needed they can build dashboards or scripts they query QA-Board's API."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Visualizations"),": everything can be compared, and thanks to the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://samsung.github.io/qaboard/docs/visualizations"}),"many different types of visualizations")," (images/plots/text/html/video...), users can easily create the reports they need."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Tuning"),": QA-Board ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://samsung.github.io/qaboard/docs/celery-integration"}),"distributes runs")," to our cluster. Users can easily start tuning experiments that enable feature flags or tweak parameters. We've integrated ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://scikit-optimize.github.io/"}),"scikit-optimize")," for black-box optimization."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Regression"),": users can check the progress on various metrics, and when needed, identify which commit caused a regression."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Performance engineering"),": save ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://rr-project.org/"}),Object(o.b)("inlineCode",{parentName:"a"},"rr")),"/",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.brendangregg.com/perf.html"}),Object(o.b)("inlineCode",{parentName:"a"},"perf"))," recordings, view ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.brendangregg.com/flamegraphs.html"}),"flame graphs"),", ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/arthur-flam/sysbench-qaboard"}),"benchmark drivers"),", and track metrics for regressions.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Here are some screenshots:")),Object(o.b)("figure",{class:"video-container"},Object(o.b)("iframe",{src:"//www.slideshare.net/slideshow/embed_code/key/C3QrOdYHrRyB7d?startSlide=7",width:"595",height:"485",frameborder:"0",marginwidth:"0",marginheight:"0",scrolling:"no",style:{border:"1px solid #CCC",borderWidth:"1px",marginBottom:"5px",maxWidth:"100%"},allowfullscreen:!0})),Object(o.b)("h2",{id:"whats-next"},"What's next?"),Object(o.b)("p",null,"Our goal is to make QA-Board the best general-purpose run-tracker. We want to see it used for performance optimization, algorithm development, model comparaisons in operational research, web page performance tracking..."),Object(o.b)("p",null,"To achieve those goals, we'll need:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"User feedback"),", issues and feature requests. "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Community contributions"),", for instance integrating more file viewers: e.g. support for common plot formats like vega or highcharts...")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"How to get in touch?")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Join our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Samsung/qaboard/issues"}),"issue tracker")," to report bugs or suggest features, or feel free to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://spectrum.chat/qaboard"}),"start a chat")," with ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"mailto:arthur.flam@samsung.com"}),"the maintainers"),"."))),Object(o.b)("h2",{id:"how-to-get-started-using-qa-board"},"How to get started using QA-Board?"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://samsung.github.io/qaboard/docs/deploy"}),"Head over to the docs"),". If you run into issues contact us: we'll help you."))}l.isMDXComponent=!0},114:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),l=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return a?n.a.createElement(m,s(s({ref:t},b),{},{components:a})):n.a.createElement(m,s({ref:t},b))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var b=2;b<o;b++)i[b]=a[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);