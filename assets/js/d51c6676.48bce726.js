"use strict";(self.webpackChunksource=self.webpackChunksource||[]).push([[7862],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},i="why Go was developd ?",l={unversionedId:"Recources/golang/why",id:"Recources/golang/why",title:"why Go was developd ?",description:"the possible Question is you hear another programming language",source:"@site/docs/Recources/golang/why.md",sourceDirName:"Recources/golang",slug:"/Recources/golang/why",permalink:"/Blockchain/docs/Recources/golang/why",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Recources/golang/why.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"overview",permalink:"/Blockchain/docs/Recources/golang/introduction"},next:{title:"installation and local Dev Enviroment",permalink:"/Blockchain/docs/Recources/golang/local"}},s={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"why-go-was-developd-"},"why Go was developd ?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"the possible Question is you hear another programming language \n- [x] what is the purpose ?\n- [x] why another programming language ?\n- [x] how is it better or diffrent ?\n\n**motivation** Evolution of infrastructure\nthe infrastructure where application is Deploy  changed a lot in the last few year **multicore Processors** become common, And also using **Cloud infrastructure** which hundred or thousand of **Servers** which multiple prosesor to deploy application become universaly common,This make Cloud infrastructure **Scalable and Distributed** **Dynamic** **more Capacity**. \nHowever most of the  *Existing Programming Languages* did not fully take Advantage of infrastructure improvement \nso what am saying is that before you have app that **execute one task** at time in order\n# TODO diagram single task execuation\nbut infrastructure improvement it possible you can \nwrite application that **execute multiple task** at the same time in paralled to Do multiple things at once, this way make the application faster and more user frendly\n# TODO diagram task in parallad\nthis is the concept of multi-threading, chellenges of multi-threadingg\n    - multiple users editting the same document\n    - muttiple user Booking at the same time\n    this should work in a way that no double booking having this Concenpt is colled **Concurrency** is About dealing with lots of thing at once need to be handle by developer in code\n    - Developers need to write a code to prevent conflicts when task run in parallel accessing shared data \nAnd many Language Do have feature for implementation such application however the code will get complex\n# TODO diagram of Language with Build-in Mechanism\n# TODO diagram of Language no Build-in Mechanism\n# where Go excell\n**Go was designed to run on multiple cores and build to support concurrency**\nConcurrency in Go is **Cheap and Easy**\nwe will explore and learn move in the  later\n")),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Go use Cases",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For writting Performant application"),(0,r.kt)("li",{parentName:"ul"},"Running on Scaled, distributed systems"))),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","How it compares to other programming ?\nfor Developing Go they attemp to combile both: ",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  - simple and readble synteax of Dynamic type language like Python\n  - Efficiency and safety of a lower-level, statically type language like c++\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Server-side or Backend language\nthat is ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"web application"),(0,r.kt)("li",{parentName:"ul"},"Database services"),(0,r.kt)("li",{parentName:"ul"},"Microservices  "))),(0,r.kt)("li",{parentName:"ul"},"simple syntax: Easy to learn, read and write code"),(0,r.kt)("li",{parentName:"ul"},"Fast build time, start up and run"),(0,r.kt)("li",{parentName:"ul"},"Require fewer resources"),(0,r.kt)("li",{parentName:"ul"},"GO is Compiled Language"),(0,r.kt)("li",{parentName:"ul"},"Consistent across diffrent os")))))}p.isMDXComponent=!0}}]);