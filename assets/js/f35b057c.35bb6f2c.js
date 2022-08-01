"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[435],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),i=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=i(e.components);return o.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=i(t),m=n,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return t?o.createElement(f,a(a({ref:r},c),{},{components:t})):o.createElement(f,a({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,a=new Array(s);a[0]=u;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var i=2;i<s;i++)a[i]=t[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6079:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var o=t(7462),n=(t(7294),t(3905));const s={title:"ExpressJS"},a=void 0,p={unversionedId:"cookbook/expressjs",id:"version-1.x/cookbook/expressjs",title:"ExpressJS",description:"FoalTS applications are created with the createApp function in the src/index.ts file. This function takes the root controller class (known as AppController) as parameter.",source:"@site/versioned_docs/version-1.x/cookbook/expressjs.md",sourceDirName:"cookbook",slug:"/cookbook/expressjs",permalink:"/docs/1.x/cookbook/expressjs",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/cookbook/expressjs.md",tags:[],version:"1.x",frontMatter:{title:"ExpressJS"},sidebar:"someSidebar",previous:{title:"Request Body Size",permalink:"/docs/1.x/cookbook/request-body-size"},next:{title:"Root Imports",permalink:"/docs/1.x/cookbook/root-imports"}},l={},i=[{value:"Custom Express Instance",id:"custom-express-instance",level:2},{value:"Pre and Post Express Middlewares",id:"pre-and-post-express-middlewares",level:2},{value:"Migrating from Express to FoalTS",id:"migrating-from-express-to-foalts",level:2}],c={toc:i};function d(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"FoalTS applications are created with the ",(0,n.kt)("inlineCode",{parentName:"p"},"createApp")," function in the ",(0,n.kt)("inlineCode",{parentName:"p"},"src/index.ts")," file. This function takes the root controller class (known as ",(0,n.kt)("inlineCode",{parentName:"p"},"AppController"),") as parameter."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp } from '@foal/core';\n\nconst app = createApp(AppController);\n")),(0,n.kt)("p",null,"The returned value is an ExpressJS application that can be used as is to create an HTTP server. ",(0,n.kt)("strong",{parentName:"p"},"FoalTS is not designed to integrate Express middlewares in its controllers or hooks"),". However, if for any reason you need to apply globally a middleware to the application, you have two ways to do it."),(0,n.kt)("h2",{id:"custom-express-instance"},"Custom Express Instance"),(0,n.kt)("p",null,"You can provide your own express instance to ",(0,n.kt)("inlineCode",{parentName:"p"},"createApp"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp } from '@foal/core';\nimport * as express from 'express';\n\nconst expressApp = express();\nexpressApp.use(/* an Express middleware */)\n\nconst app = createApp(AppController, expressApp);\n// OR\nconst app = createApp(AppController, {\n  expressInstance: expressApp\n});\n\n")),(0,n.kt)("h2",{id:"pre-and-post-express-middlewares"},"Pre and Post Express Middlewares"),(0,n.kt)("p",null,"You can also pass global Express middlewares as options to the ",(0,n.kt)("inlineCode",{parentName:"p"},"createApp")," function."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp } from '@foal/core';\nimport * as rateLimit from 'express-rate-limit';\n\nconst app = createApp(AppController, {\n  preMiddlewares: [\n    /* Express middlewares */\n  ],\n  postMiddlewares: [\n    /* Express middlewares */\n  ]\n});\n")),(0,n.kt)("p",null,"Pre-middlewares are executed before Foal's controllers and hooks. Post-middlewares are executed only if there was no controller to handle the request, but before the 500 or 404 handlers get called."),(0,n.kt)("h2",{id:"migrating-from-express-to-foalts"},"Migrating from Express to FoalTS"),(0,n.kt)("p",null,"In case your are migrating your ExpressJS application to FoalTS, you can access FoalTS service manager using ",(0,n.kt)("inlineCode",{parentName:"p"},"app.foal.services"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp } from '@foal/core';\n\nconst app = createApp(AppController);\napp.foal.services.get(MyServiceClass).doSomething();\n")))}d.isMDXComponent=!0}}]);