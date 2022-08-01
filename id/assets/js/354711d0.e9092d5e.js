"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const o={title:"Initialization"},r=void 0,c={unversionedId:"architecture/initialization",id:"version-1.x/architecture/initialization",title:"Initialization",description:"In many situations, we need to initialize the application (i.e perform certain actions) before listening to incoming HTTP requests. This is the case, for example, if you need to establish a connection to the database.",source:"@site/versioned_docs/version-1.x/architecture/initialization.md",sourceDirName:"architecture",slug:"/architecture/initialization",permalink:"/id/docs/1.x/architecture/initialization",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/architecture/initialization.md",tags:[],version:"1.x",frontMatter:{title:"Initialization"},sidebar:"someSidebar",previous:{title:"Hooks",permalink:"/id/docs/1.x/architecture/hooks"},next:{title:"SQL Databases (TypeORM)",permalink:"/id/docs/1.x/databases/typeorm"}},l={},s=[{value:"The <code>main</code> function",id:"the-main-function",level:2},{value:"The <code>AppController.init</code> method",id:"the-appcontrollerinit-method",level:2},{value:"The services <code>boot</code> method",id:"the-services-boot-method",level:2},{value:"Best Practices",id:"best-practices",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In many situations, we need to initialize the application (i.e perform certain actions) before listening to incoming HTTP requests. This is the case, for example, if you need to establish a connection to the database."),(0,i.kt)("p",null,"There are three ways to achieve this in FoalTS."),(0,i.kt)("h2",{id:"the-main-function"},"The ",(0,i.kt)("inlineCode",{parentName:"h2"},"main")," function"),(0,i.kt)("p",null,"The most straightforward way to do it, which is used by default, is to add the initialization commands in the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," function before ",(0,i.kt)("inlineCode",{parentName:"p"},"createApp")," is called."),(0,i.kt)("p",null,"If your application uses TypeORM, your project should have a file ",(0,i.kt)("inlineCode",{parentName:"p"},"src/index.ts")," that looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"async function main() {\n  // Initialization\n  await createConnection();\n\n  // Creation of the application\n  const app = createApp(AppController);\n\n  // ...\n}\n\nmain();\n")),(0,i.kt)("h2",{id:"the-appcontrollerinit-method"},"The ",(0,i.kt)("inlineCode",{parentName:"h2"},"AppController.init")," method"),(0,i.kt)("p",null,"Sometimes, however, this approach is not sufficient because we need to call the methods of some services. In this case, you can add an ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," method to the root controller class which will be called before the application is fully created. This method can be synchronous or asynchronous."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example 1")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AppController {\n\n  @dependency\n  serviceA: ServiceA;\n\n  async init() {\n    await this.serviceA.doSomething();\n  }\n\n}\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example 2")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AppController {\n\n  @dependency\n  serviceA: ServiceA;\n\n  @dependency\n  serviceB: ServiceB;\n\n  async init() {\n    this.serviceA.init();\n    this.serviceB.init();\n  }\n\n}\n")),(0,i.kt)("p",null,"For this to work, you need to update your ",(0,i.kt)("inlineCode",{parentName:"p"},"src/index.ts")," file and create the application with the asynchronous function ",(0,i.kt)("inlineCode",{parentName:"p"},"createAndInitApp"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createAndInitApp } from '@foal/core';\n\nasync function main() {\n  const app = await createAndInitApp(AppController);\n\n  // ...\n}\n\nmain();\n")),(0,i.kt)("h2",{id:"the-services-boot-method"},"The services ",(0,i.kt)("inlineCode",{parentName:"h2"},"boot")," method"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"boot")," methods are available in v1.8.0 onwards.")),(0,i.kt)("p",null,"Alternatively you can add a ",(0,i.kt)("inlineCode",{parentName:"p"},"boot")," method in your services. This method can be synchronous or asynchronous."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export class ServiceA {\n\n  async boot() {\n    await doSomething();\n  }\n\n}\n")),(0,i.kt)("p",null,"Then, you have to call the ",(0,i.kt)("inlineCode",{parentName:"p"},"boot")," method of your service manager (it will be automatically called starting from version 2)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createAndInitApp } from '@foal/core';\n\nasync function main() {\n  const serviceManager = new ServiceManager();\n  const app = createApp(AppController, {\n    serviceManager\n  });\n  // This line calls the `boot` method of all your services that have one.\n  await serviceManager.boot();\n\n  // ...\n}\n\nmain();\n")),(0,i.kt)("p",null,"If you manually inject services to your service manager and you want their ",(0,i.kt)("inlineCode",{parentName:"p"},"boot")," methods to be called, you must specify this in the ",(0,i.kt)("inlineCode",{parentName:"p"},"set")," method options."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const serviceManager = new ServiceManager();\nserviceManager.set(ServiceA, myServiceInstance, { boot: true })\n")),(0,i.kt)("h2",{id:"best-practices"},"Best Practices"),(0,i.kt)("p",null,"If your initialization consists of several asynchronous tasks, you may want to perform them in ",(0,i.kt)("em",{parentName:"p"},"parallel"),". This will reduce the initialization time, which has an impact if you use a serverless architecture."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AppController {\n\n  async init() {\n    // Don't do\n    await createConnection();\n    await createAnotherConnection();\n\n    // Do\n    await Promise.all([\n      createConnection(),\n      createAnotherConnection()\n    ])\n  }\n\n}\n")))}u.isMDXComponent=!0}}]);