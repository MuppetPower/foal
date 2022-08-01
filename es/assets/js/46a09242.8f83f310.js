"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2365],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),i=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=i(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=i(r),m=n,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?o.createElement(f,s(s({ref:t},c),{},{components:r})):o.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,s[1]=p;for(var i=2;i<a;i++)s[i]=r[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2760:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var o=r(7462),n=(r(7294),r(3905));const a={title:"ExpressJS"},s=void 0,p={unversionedId:"cookbook/expressjs",id:"cookbook/expressjs",title:"ExpressJS",description:"FoalTS applications are created with the createApp function in the src/index.ts file. This function takes the root controller class (known as AppController) as parameter.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/cookbook/expressjs.md",sourceDirName:"cookbook",slug:"/cookbook/expressjs",permalink:"/es/docs/cookbook/expressjs",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/cookbook/expressjs.md",tags:[],version:"current",frontMatter:{title:"ExpressJS"},sidebar:"someSidebar",previous:{title:"Tama\xf1o del Cuerpo de las Solicitudes",permalink:"/es/docs/cookbook/request-body-size"},next:{title:"Root Imports",permalink:"/es/docs/cookbook/root-imports"}},l={},i=[{value:"Custom Express Instance",id:"custom-express-instance",level:2},{value:"Pre and Post Express Middlewares",id:"pre-and-post-express-middlewares",level:2},{value:"Migrating from Express to FoalTS",id:"migrating-from-express-to-foalts",level:2}],c={toc:i};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"FoalTS applications are created with the ",(0,n.kt)("inlineCode",{parentName:"p"},"createApp")," function in the ",(0,n.kt)("inlineCode",{parentName:"p"},"src/index.ts")," file. This function takes the root controller class (known as ",(0,n.kt)("inlineCode",{parentName:"p"},"AppController"),") as parameter."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp } from '@foal/core';\n\nconst app = await createApp(AppController);\n")),(0,n.kt)("p",null,"The returned value is an ExpressJS application that can be used as is to create an HTTP server. ",(0,n.kt)("strong",{parentName:"p"},"FoalTS is not designed to integrate Express middlewares in its controllers or hooks"),". However, if for any reason you need to apply globally a middleware to the application, you have two ways to do it."),(0,n.kt)("h2",{id:"custom-express-instance"},"Custom Express Instance"),(0,n.kt)("p",null,"You can provide your own express instance to ",(0,n.kt)("inlineCode",{parentName:"p"},"createApp"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp } from '@foal/core';\nimport * as express from 'express';\n\nconst expressApp = express();\nexpressApp.use(/* an Express middleware */)\n\nconst app = await createApp(AppController, {\n  expressInstance: expressApp\n});\n\n")),(0,n.kt)("h2",{id:"pre-and-post-express-middlewares"},"Pre and Post Express Middlewares"),(0,n.kt)("p",null,"You can also pass global Express middlewares as options to the ",(0,n.kt)("inlineCode",{parentName:"p"},"createApp")," function."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp } from '@foal/core';\nimport * as rateLimit from 'express-rate-limit';\n\nconst app = await createApp(AppController, {\n  preMiddlewares: [\n    /* Express middlewares */\n  ],\n  postMiddlewares: [\n    /* Express middlewares */\n  ]\n});\n")),(0,n.kt)("p",null,"Pre-middlewares are executed before Foal's controllers and hooks and before the internal Express middlewares of the framework. Post-middlewares are executed only if there was no controller to handle the request, but before the 500 or 404 handlers get called."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"In the rare case that you need to run middleware after Foal's internal Express middlewares, you can also use the ",(0,n.kt)("inlineCode",{parentName:"p"},"afterPreMiddlewares")," option for this.")),(0,n.kt)("h2",{id:"migrating-from-express-to-foalts"},"Migrating from Express to FoalTS"),(0,n.kt)("p",null,"In case your are migrating your ExpressJS application to FoalTS, you can access FoalTS service manager using ",(0,n.kt)("inlineCode",{parentName:"p"},"app.foal.services"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp } from '@foal/core';\n\nconst app = await createApp(AppController);\napp.foal.services.get(MyServiceClass).doSomething();\n")))}d.isMDXComponent=!0}}]);