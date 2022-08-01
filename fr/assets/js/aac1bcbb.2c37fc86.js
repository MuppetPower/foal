"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9027],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=a,h=d["".concat(s,".").concat(g)]||d[g]||u[g]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"Single Page Applications (SPA)",sidebar_label:"Single Page Applications"},o=void 0,l={unversionedId:"frontend-integration/single-page-applications",id:"frontend-integration/single-page-applications",title:"Single Page Applications (SPA)",description:"Single-Page Applications are Web Applications that are loaded once upon the first request(s) to the backend. After retreiving all the necessary code from the server, the current page is rendered and updated directly in the browser without asking the server to render new pages. During its lifecycle, the application usually communicates with the server by making API calls to fetch, create, update or delete data. This is a common pattern used when creating a new application with Angular, React or Vue.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/frontend-integration/single-page-applications.md",sourceDirName:"frontend-integration",slug:"/frontend-integration/single-page-applications",permalink:"/fr/docs/frontend-integration/single-page-applications",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/frontend-integration/single-page-applications.md",tags:[],version:"current",frontMatter:{title:"Single Page Applications (SPA)",sidebar_label:"Single Page Applications"},sidebar:"someSidebar",previous:{title:"gRPC",permalink:"/fr/docs/api-section/gRPC"},next:{title:"Angular, React & Vue",permalink:"/fr/docs/frontend-integration/angular-react-vue"}},s={},p=[{value:"Building the App &amp; Proxifying Requests",id:"building-the-app--proxifying-requests",level:2},{value:"Using Frontend Routers",id:"using-frontend-routers",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Single-Page Applications are Web Applications that are loaded once upon the first request(s) to the backend. After retreiving all the necessary code from the server, the current page is rendered and updated directly in the browser without asking the server to render new pages. During its lifecycle, the application usually communicates with the server by making API calls to fetch, create, update or delete data. This is a common pattern used when creating a new application with Angular, React or Vue."),(0,a.kt)("p",null,"Building a SPA, however, introduces a certain complexity. This document presents some techniques and tools for solving common scenarios."),(0,a.kt)("h2",{id:"building-the-app--proxifying-requests"},"Building the App & Proxifying Requests"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/frontend-integration/angular-react-vue"},"Angular, React & Vue")," section to learn on how to configure your frontend CLI to interact with a Foal application."),(0,a.kt)("h2",{id:"using-frontend-routers"},"Using Frontend Routers"),(0,a.kt)("p",null,"Most single-page applications simulate routing on the frontend side. This is usually done by libraries such as ",(0,a.kt)("a",{parentName:"p",href:"https://reacttraining.com/react-router"},"react-router")," or ",(0,a.kt)("a",{parentName:"p",href:"https://angular.io/guide/router"},"@angular/router"),". The application does not actually make any requests to the server but simply modifies the URL in the address bar."),(0,a.kt)("p",null,"This works fine until the user presses the refresh button, shares the link or saves the page in their bookmarks. In that case, the browser makes a request to the server to retreive the desired page and thus gets a 404 error."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Request"),(0,a.kt)("th",{parentName:"tr",align:null},"Response"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/")),(0,a.kt)("td",{parentName:"tr",align:null},"200 - Returns the ",(0,a.kt)("inlineCode",{parentName:"td"},"index.html")," file in the ",(0,a.kt)("inlineCode",{parentName:"td"},"public/")," directory.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/users?city=Paris")),(0,a.kt)("td",{parentName:"tr",align:null},"404 - The server has no route that handles ",(0,a.kt)("inlineCode",{parentName:"td"},"/users"),".")))),(0,a.kt)("p",null,"One technique to solve this problem is to add a handler responsible for processing uncaught requests. It returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," page in all cases. This way, the browser loads the application which then looks at the address bar and displays the appropriate page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, controller, Get, HttpResponseNotFound, render } from '@foal/core';\n\nimport { ApiController } from './controllers';\n\nexport class AppController {\n  subControllers = [\n    controller('/api', ApiController),\n    // ...\n  ];\n\n  @Get('*')\n  renderApp(ctx: Context) {\n    if (!ctx.request.accepts('html')) {\n      return new HttpResponseNotFound();\n    }\n\n    return render('./templates/index.html');\n  }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Note:")," With this approach, the frontend is responsible for catching incorrect URLs and displaying a 404 page.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Note 2:")," This issue usually does not show up in development as frontend CLIs are sufficiently clever to handle these requests.")))}u.isMDXComponent=!0}}]);