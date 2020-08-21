(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{114:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),b=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=b(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=b(a),u=r,m=l["".concat(o,".").concat(u)]||l[u]||d[u]||c;return a?n.a.createElement(m,s(s({ref:t},i),{},{components:a})):n.a.createElement(m,s({ref:t},i))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<c;i++)o[i]=a[i];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},61:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return b}));var r=a(2),n=a(6),c=(a(0),a(114)),o={id:"host-upgrades",sidebar_label:"Host Upgrades",title:"Upgrading the QA-Board host"},s={unversionedId:"backend-admin/host-upgrades",id:"backend-admin/host-upgrades",isDocsHomePage:!1,title:"Upgrading the QA-Board host",description:"First connect to the QA-Board host:",source:"@site/docs/backend-admin/host-upgrades.md",permalink:"/qaboard/docs/backend-admin/host-upgrades",editUrl:"https://github.com/Samsung/qaboard/edit/master/website/docs/backend-admin/host-upgrades.md",sidebar_label:"Host Upgrades",sidebar:"docs",previous:{title:"Troubleshooting common issues",permalink:"/qaboard/docs/backend-admin/troubleshooting"}},p=[{value:"Make sure backups are enabled",id:"make-sure-backups-are-enabled",children:[]},{value:"Check the latest daily backup",id:"check-the-latest-daily-backup",children:[]},{value:"Stop the server and create a backup",id:"stop-the-server-and-create-a-backup",children:[]},{value:"Maintenance Period",id:"maintenance-period",children:[]},{value:"Restart",id:"restart",children:[]},{value:"Restoring from a backup",id:"restoring-from-a-backup",children:[]}],i={rightToc:p};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"First connect to the QA-Board host:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"ssh qa\n")),Object(c.b)("h2",{id:"make-sure-backups-are-enabled"},"Make sure backups are enabled"),Object(c.b)("p",null,"In ",Object(c.b)("em",{parentName:"p"},"production.yml")," you should uncomment the ",Object(c.b)("inlineCode",{parentName:"p"},"cron-backup-db")," service to enable daily backups, and replace ",Object(c.b)("inlineCode",{parentName:"p"},"/WHERE/TO/SAVE/BACKUPS")," with a (backup'ed!)location on the host."),Object(c.b)("h2",{id:"check-the-latest-daily-backup"},"Check the latest daily backup"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# check the latest backup worked\nls -lht /WHERE/BACKUPS/ARE/SAVED/ | head\n# copy the latest somewhere to make sure nothing can go wrong\ncp /WHERE/BACKUPS/ARE/SAVED/latest.dump .\n\n")),Object(c.b)("h2",{id:"stop-the-server-and-create-a-backup"},"Stop the server and create a backup"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# disconnect clients to avoid anyone writing\ndocker-compose -f docker-compose.yml -f production.yml stop\n# we need the database to create a backup\ndocker-compose -f docker-compose.yml -f production.yml up -d db\n\n# manually start a backup\ndocker-compose -f docker-compose.yml -f production.yml run cron-backup-db /etc/periodic/daily/backup before-upgrade.dump\n")),Object(c.b)("h2",{id:"maintenance-period"},"Maintenance Period"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"CPU/Memory/Storage upgrade...")),Object(c.b)("h2",{id:"restart"},"Restart"),Object(c.b)("p",null,"After the boot, make sure everything is up:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose -f docker-compose.yml -f production.yml up -d\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Checks"),":"),Object(c.b)("ul",{className:"contains-task-list"},Object(c.b)("li",Object(r.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(r.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","you can access the web application"),Object(c.b)("li",Object(r.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(r.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","the logs are all right"),Object(c.b)("li",Object(r.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(r.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","the logs are all right")),Object(c.b)("h2",{id:"restoring-from-a-backup"},"Restoring from a backup"),Object(c.b)("p",null,"In case of issues, recover from a backup:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# disconnect clients\ndocker-compose -f docker-compose.yml -f production.yml stop\n# we need the database to create a backup\ndocker-compose -f docker-compose.yml -f production.yml up -d db\n\n# now restore\ndocker-compose -f docker-compose.yml -f production.yml exec db /opt/restore /backups/before-upgrade.dump\n\n# and restart\ndocker-compose -f docker-compose.yml -f production.yml up -d\n")))}b.isMDXComponent=!0}}]);