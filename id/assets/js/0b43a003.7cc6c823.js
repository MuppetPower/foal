"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2023],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={title:"Update Guide to Version 2",sidebar_label:"To v2"},i=void 0,l={unversionedId:"upgrade-to-v2/README",id:"upgrade-to-v2/README",title:"Update Guide to Version 2",description:"This guide will take you step by step through the upgrade to version 2. If something is missing or incorrect, feel free to submit an issue or a PR on Github.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/upgrade-to-v2/README.md",sourceDirName:"upgrade-to-v2",slug:"/upgrade-to-v2/",permalink:"/id/docs/upgrade-to-v2/",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/upgrade-to-v2/README.md",tags:[],version:"current",frontMatter:{title:"Update Guide to Version 2",sidebar_label:"To v2"},sidebar:"someSidebar",previous:{title:"Checklist",permalink:"/id/docs/deployment-and-environments/checklist"},next:{title:"Awesome Foal",permalink:"/id/docs/community/awesome-foal"}},p={},s=[{value:"For all",id:"for-all",level:2},{value:"By topic",id:"by-topic",level:2},{value:"Common issue",id:"common-issue",level:2},{value:"Rare cases",id:"rare-cases",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide will take you step by step through the upgrade to version 2. If something is missing or incorrect, feel free to submit an issue or a PR on Github."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Node versions"),(0,r.kt)("th",{parentName:"tr",align:null},"TS min version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10.x, 12.x, 14.x"),(0,r.kt)("td",{parentName:"tr",align:null},"4.0")))),(0,r.kt)("h2",{id:"for-all"},"For all"),(0,r.kt)("p",null,"Upgrade your versions of TypeScript and Node.JS if necessary."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/id/docs/upgrade-to-v2/cli-commands"},"New CLI commands")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/id/docs/upgrade-to-v2/config-system"},"New configuration system")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/id/docs/upgrade-to-v2/application-creation"},"Application creation")),(0,r.kt)("h2",{id:"by-topic"},"By topic"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/id/docs/upgrade-to-v2/validation-hooks"},"Validation hooks")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/id/docs/upgrade-to-v2/session-tokens"},"Authentication with sessions (session tokens) and CSRF protection")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/id/docs/upgrade-to-v2/openapi"},"OpenAPI")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/id/docs/upgrade-to-v2/service-and-app-initialization"},"Service and application initialization")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/id/docs/upgrade-to-v2/file-upload-and-download"},"File upload and download")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/id/docs/upgrade-to-v2/jwt-and-csrf"},"JWT hooks and CSRF protection")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/id/docs/upgrade-to-v2/mongodb"},"Support of MongoDB")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/id/docs/upgrade-to-v2/error-handling"},"Error-handling and hook post functions")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/id/docs/upgrade-to-v2/template-engine"},"Template engine")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/id/docs/upgrade-to-v2/custom-express-instance"},"Custom Express instance")),(0,r.kt)("h2",{id:"common-issue"},"Common issue"),(0,r.kt)("p",null,"If you get unexpected errors when building the application, please check the following points:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You have updated all your ",(0,r.kt)("inlineCode",{parentName:"li"},"@foal/x")," packages."),(0,r.kt)("li",{parentName:"ul"},"You have updated your ",(0,r.kt)("inlineCode",{parentName:"li"},"typescript")," dependency to version 4.")),(0,r.kt)("h2",{id:"rare-cases"},"Rare cases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The following objects and functions have been removed: ",(0,r.kt)("inlineCode",{parentName:"li"},"ObjectDoesNotExist"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"isObjectDoesNotExist"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"PermissionDenied"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"isPermissionDenied"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ValidationError"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"isValidationError"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"validate"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"legacy")," option has been removed from ",(0,r.kt)("inlineCode",{parentName:"li"},"hashPassword")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"verifyPassword"),". If you used it, please submit an issue."),(0,r.kt)("li",{parentName:"ul"},"The command ",(0,r.kt)("inlineCode",{parentName:"li"},"foal g sub-app")," has been removed."),(0,r.kt)("li",{parentName:"ul"},"The functions ",(0,r.kt)("inlineCode",{parentName:"li"},"createService")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"createController")," do not accept a ",(0,r.kt)("inlineCode",{parentName:"li"},"ServiceManager")," as second argument."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"@Hook")," decorator only accepts one function."),(0,r.kt)("li",{parentName:"ul"},"The type ",(0,r.kt)("inlineCode",{parentName:"li"},"ExpressApplication = any")," has been removed."),(0,r.kt)("li",{parentName:"ul"},"The property ",(0,r.kt)("inlineCode",{parentName:"li"},"req.foal.ctx")," does not exist anymore in post middlewares.")))}u.isMDXComponent=!0}}]);