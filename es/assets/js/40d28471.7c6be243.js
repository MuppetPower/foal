"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[281],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(k,l(l({ref:e},u),{},{components:n})):a.createElement(k,l({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3388:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"Introduction"},l=void 0,i={unversionedId:"tutorials/simple-todo-list/tuto-2-introduction",id:"version-1.x/tutorials/simple-todo-list/tuto-2-introduction",title:"Introduction",description:"The application that you will create is a simple to-do list. It consists of a frontend part that has already been written for you and a backend part that will be the topic of this tutorial.",source:"@site/versioned_docs/version-1.x/tutorials/simple-todo-list/tuto-2-introduction.md",sourceDirName:"tutorials/simple-todo-list",slug:"/tutorials/simple-todo-list/tuto-2-introduction",permalink:"/es/docs/1.x/tutorials/simple-todo-list/tuto-2-introduction",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/tutorials/simple-todo-list/tuto-2-introduction.md",tags:[],version:"1.x",frontMatter:{title:"Introduction"},sidebar:"someSidebar",previous:{title:"Installation",permalink:"/es/docs/1.x/tutorials/simple-todo-list/tuto-1-installation"},next:{title:"The Todo Model",permalink:"/es/docs/1.x/tutorials/simple-todo-list/tuto-3-the-todo-model"}},s={},p=[],u={toc:p};function d(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The application that you will create is a simple to-do list. It consists of a frontend part that has already been written for you and a backend part that will be the topic of this tutorial."),(0,r.kt)("p",null,"First download the html, css and js files by clicking ",(0,r.kt)("a",{parentName:"p",href:"https://foalts.org/simple-todo-list.zip"},"here"),"."),(0,r.kt)("p",null,"Put the downloaded, unzipped files in the static directory ",(0,r.kt)("inlineCode",{parentName:"p"},"public/"),"."),(0,r.kt)("p",null,"The code executed in the browser will make API calls to the server to view, create and delete the tasks."),(0,r.kt)("p",null,"Refresh the page. You should now see this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Browser view",src:n(5395).Z,width:"902",height:"882"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"As you haven","\u2019","t yet implemented the server API, the frontend gets an error when fetching the to-dos. It is displayed at the bottom of the page. If you try to type something in the text input and press Enter to create a new task, you","\u2019","ll get an error as well.")),(0,r.kt)("p",null,"Let","\u2019","s see the details of the API we want to build."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"List the tasks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Request:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"method: ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")),(0,r.kt)("li",{parentName:"ul"},"path: ",(0,r.kt)("inlineCode",{parentName:"li"},"/api/todos")))),(0,r.kt)("li",{parentName:"ul"},"Response:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"status: 200 (OK)"),(0,r.kt)("li",{parentName:"ul"},"body: ",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  { "id": 1, "text": "Task 1" },\n  { "id": 2, "text": "Task 2" },\n]\n')))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create a task")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Request:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"method: ",(0,r.kt)("inlineCode",{parentName:"li"},"POST")),(0,r.kt)("li",{parentName:"ul"},"path: ",(0,r.kt)("inlineCode",{parentName:"li"},"/api/todos")),(0,r.kt)("li",{parentName:"ul"},"body:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "text": "Task 3"\n}\n'))))),(0,r.kt)("li",{parentName:"ul"},"Response:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"status: 201 (Created)"),(0,r.kt)("li",{parentName:"ul"},"body: ",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 3,\n  "text": "Task 3"\n}\n')))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Delete a task")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Request:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"method: ",(0,r.kt)("inlineCode",{parentName:"li"},"DELETE")),(0,r.kt)("li",{parentName:"ul"},"path: ",(0,r.kt)("inlineCode",{parentName:"li"},"/api/todos/3")))),(0,r.kt)("li",{parentName:"ul"},"Response:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"status: 204 (No Content)")))))}d.isMDXComponent=!0},5395:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/app-b81e09e80e2feb22c160df3e54d2106e.png"}}]);