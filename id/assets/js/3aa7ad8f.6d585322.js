"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7317],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>h});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),s=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=s(e.components);return t.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||a;return n?t.createElement(m,i(i({ref:r},c),{},{components:n})):t.createElement(m,i({ref:r},c))}));function h(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},278:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var t=n(7462),o=(n(7294),n(3905));const a={title:"Error-handling"},i=void 0,l={unversionedId:"upgrade-to-v2/error-handling",id:"upgrade-to-v2/error-handling",title:"Error-handling",description:"Customizing the Error Handler",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/upgrade-to-v2/error-handling.md",sourceDirName:"upgrade-to-v2",slug:"/upgrade-to-v2/error-handling",permalink:"/id/docs/upgrade-to-v2/error-handling",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/upgrade-to-v2/error-handling.md",tags:[],version:"current",frontMatter:{title:"Error-handling"}},p={},s=[{value:"Customizing the Error Handler",id:"customizing-the-error-handler",level:2},{value:"Errors in Hook Post Functions",id:"errors-in-hook-post-functions",level:2},{value:"New features",id:"new-features",level:2},{value:"The <code>IAppController</code> interface",id:"the-iappcontroller-interface",level:3},{value:"Error details and <code>HttpResponseInternalServerError</code>",id:"error-details-and-httpresponseinternalservererror",level:3}],c={toc:s};function d(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"customizing-the-error-handler"},"Customizing the Error Handler"),(0,o.kt)("p",null,"In version 1, we had to provide an option to ",(0,o.kt)("inlineCode",{parentName:"p"},"createApp")," to use ",(0,o.kt)("inlineCode",{parentName:"p"},"AppController.handleError"),". This is no longer necessary."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Before\nconst app = createApp(AppController, {\n  methods: {\n    handleError: true\n  }\n});\n\n// After\nconst app = await createApp(AppController);\n")),(0,o.kt)("h2",{id:"errors-in-hook-post-functions"},"Errors in Hook Post Functions"),(0,o.kt)("p",null,"In version 1, hook post functions were skipped when an error was thrown or rejected. In version 2, this is no longer the case and the response passed to the post functions is an ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpResponseInternalServerError")," instance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class Controller {\n\n  @Get('/products')\n  @Hook(() => response => {\n    // Not executed in version 1.\n    // Executed in version 2 and the response is an `HttpResponseInternalServerError` instance.\n    console.log(response);\n  })\n  readProducts() {\n    throw new Error();\n  }\n\n}\n")),(0,o.kt)("h2",{id:"new-features"},"New features"),(0,o.kt)("h3",{id:"the-iappcontroller-interface"},"The ",(0,o.kt)("inlineCode",{parentName:"h3"},"IAppController")," interface"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"AppController")," can implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"IAppController")," interface. In this way, we make sure that the optional methods ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"handleError")," are correctly implemented as well as the ",(0,o.kt)("inlineCode",{parentName:"p"},"subControllers")," property."),(0,o.kt)("h3",{id:"error-details-and-httpresponseinternalservererror"},"Error details and ",(0,o.kt)("inlineCode",{parentName:"h3"},"HttpResponseInternalServerError")),(0,o.kt)("p",null,"The default ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpResponseInternalServerError")," instance returned by the error handler when an error is thrown or rejected has two new properties:\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"error")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx"),"."))}d.isMDXComponent=!0}}]);