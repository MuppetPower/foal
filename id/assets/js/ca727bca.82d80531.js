"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5118],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=i(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4415:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={title:"Controllers"},l=void 0,p={unversionedId:"architecture/controllers",id:"architecture/controllers",title:"Controllers",description:"Description",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/architecture/controllers.md",sourceDirName:"architecture",slug:"/architecture/controllers",permalink:"/id/docs/architecture/controllers",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/architecture/controllers.md",tags:[],version:"current",frontMatter:{title:"Controllers"},sidebar:"someSidebar",previous:{title:"Architecture Overview",permalink:"/id/docs/architecture/architecture-overview"},next:{title:"Services & Dependency Injection",permalink:"/id/docs/architecture/services-and-dependency-injection"}},s={},i=[{value:"Description",id:"description",level:2},{value:"Controller Architecture",id:"controller-architecture",level:2},{value:"The <code>AppController</code>",id:"the-appcontroller",level:2},{value:"Contexts &amp; HTTP Requests",id:"contexts--http-requests",level:2},{value:"The <code>Context</code> object",id:"the-context-object",level:3},{value:"HTTP Requests",id:"http-requests",level:3},{value:"Read the Body",id:"read-the-body",level:4},{value:"Read Path Parameters",id:"read-path-parameters",level:4},{value:"Read Query Parameters",id:"read-query-parameters",level:4},{value:"Read Headers",id:"read-headers",level:4},{value:"Read Cookies",id:"read-cookies",level:4},{value:"The Controller Method Arguments",id:"the-controller-method-arguments",level:4},{value:"HTTP Responses",id:"http-responses",level:2},{value:"Adding Headers",id:"adding-headers",level:3},{value:"Adding Cookies",id:"adding-cookies",level:3},{value:"Testing Controllers",id:"testing-controllers",level:2},{value:"Inheriting Controllers",id:"inheriting-controllers",level:2}],d={toc:i};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"foal generate controller my-controller\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Get, HttpResponseOK } from '@foal/core';\n\nexport class ProductController {\n\n  @Get('/products')\n  listProducts(ctx: Context) {\n    return new HttpResponseOK([]);\n  }\n\n}\n")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Controllers are the front door of your application. They intercept all incoming requests and return the responses to the client."),(0,a.kt)("p",null,"The code of a controller should be concise. If necessary, controllers can delegate some tasks to services (usually the business logic)."),(0,a.kt)("h2",{id:"controller-architecture"},"Controller Architecture"),(0,a.kt)("p",null,"A controller is simply a class of which some methods are responsible for a route. These methods must be decorated by one of theses decorators ",(0,a.kt)("inlineCode",{parentName:"p"},"Get"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Post"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Patch"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Put"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Delete"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Head")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Options"),". They may be asynchronous."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponseOK, Post } from '@foal/core';\n\nclass MyController {\n  @Get('/foo')\n  foo() {\n    return new HttpResponseOK('I\\'m listening to GET /foo requests.');\n  }\n\n  @Post('/bar')\n  bar() {\n    return new HttpResponseOK('I\\'m listening to POST /bar requests.');\n  }\n}\n")),(0,a.kt)("p",null,"Controllers may have sub-controllers declared in the ",(0,a.kt)("inlineCode",{parentName:"p"},"subControllers")," property."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { controller, Get, HttpResponseOK, Post } from '@foal/core';\n\nclass MySubController {\n  @Get('/foo')\n  foo() {\n    return new HttpResponseOK('I\\'m listening to GET /barfoo/foo requests.');\n  }\n}\n\nclass MyController {\n  subControllers = [\n    controller('/barfoo', MySubController)\n  ]\n\n  @Post('/bar')\n  bar() {\n    return new HttpResponseOK('I\\'m listening to POST /bar requests.');\n  }\n}\n")),(0,a.kt)("h2",{id:"the-appcontroller"},"The ",(0,a.kt)("inlineCode",{parentName:"h2"},"AppController")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"AppController")," is the main controller of your application. It is directly bound to the request handler. Every controller must be, directly or indirectly, a sub-controller of the ",(0,a.kt)("inlineCode",{parentName:"p"},"AppController"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { controller, IAppController } from '@foal/core';\n\nimport { ApiController } from './controllers/api.controller';\n\nexport class AppController implements IAppController {\n  subControllers = [\n    controller('/api', ApiController)\n  ];\n}\n")),(0,a.kt)("h2",{id:"contexts--http-requests"},"Contexts & HTTP Requests"),(0,a.kt)("h3",{id:"the-context-object"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"Context")," object"),(0,a.kt)("p",null,"On every request, the controller method is called with a ",(0,a.kt)("inlineCode",{parentName:"p"},"Context")," object. This context is unique and specific to the request."),(0,a.kt)("p",null,"It has four properties:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"request")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Request")),(0,a.kt)("td",{parentName:"tr",align:null},"Gives information about the HTTP request.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"state")),(0,a.kt)("td",{parentName:"tr",align:null},"object"),(0,a.kt)("td",{parentName:"tr",align:null},"Object which can be used to forward data accross several hooks (see ",(0,a.kt)("a",{parentName:"td",href:"/id/docs/architecture/hooks"},"Hooks"),").")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"user")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"any\\|undefined")),(0,a.kt)("td",{parentName:"tr",align:null},"The current user (see ",(0,a.kt)("a",{parentName:"td",href:"/id/docs/authentication-and-access-control/quick-start"},"Authentication"),").")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"session")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Session\\|undefined")),(0,a.kt)("td",{parentName:"tr",align:null},"The session object if you use sessions.")))),(0,a.kt)("h3",{id:"http-requests"},"HTTP Requests"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"request")," property is an ",(0,a.kt)("a",{parentName:"p",href:"http://expressjs.com/"},"ExpressJS")," request object. Its complete documentation can be consulted ",(0,a.kt)("a",{parentName:"p",href:"http://expressjs.com/en/4x/api.html#req"},"here"),". The below sections detail common use cases."),(0,a.kt)("h4",{id:"read-the-body"},"Read the Body"),(0,a.kt)("p",null,"The request body is accessible with the ",(0,a.kt)("inlineCode",{parentName:"p"},"body")," attribute. Form data and JSON objects are automatically converted to JavaScript objects in FoalTS."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'POST /products\n\n{\n  "name": "milk"\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, HttpResponseCreated, Post } from '@foal/core';\n\nclass AppController {\n  @Post('/products')\n  createProduct(ctx: Context) {\n    const body = ctx.request.body;\n    // Do something.\n    return new HttpResponseCreated();\n  }\n}\n")),(0,a.kt)("h4",{id:"read-path-parameters"},"Read Path Parameters"),(0,a.kt)("p",null,"Path parameters are accessible with the ",(0,a.kt)("inlineCode",{parentName:"p"},"params")," attribute."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET /products/3\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, HttpResponseOK, Get } from '@foal/core';\n\nclass AppController {\n  @Get('/products/:id')\n  readProduct(ctx: Context) {\n    const productId = ctx.request.params.id;\n    // Do something.\n    return new HttpResponseOK();\n  }\n}\n")),(0,a.kt)("h4",{id:"read-query-parameters"},"Read Query Parameters"),(0,a.kt)("p",null,"Query parameters are accessible with the ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," attribute."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET /products?limit=3\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, HttpResponseOK, Get } from '@foal/core';\n\nclass AppController {\n  @Get('/products')\n  readProducts(ctx: Context) {\n    const limit = ctx.request.query.limit;\n    // Do something.\n    return new HttpResponseOK();\n  }\n}\n")),(0,a.kt)("h4",{id:"read-headers"},"Read Headers"),(0,a.kt)("p",null,"Headers are accessible with the ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, HttpResponseOK, Get } from '@foal/core';\n\nclass AppController {\n  @Get('/')\n  index(ctx: Context) {\n    const token = ctx.request.get('Authorization');\n    // Do something.\n    return new HttpResponseOK();\n  }\n}\n")),(0,a.kt)("h4",{id:"read-cookies"},"Read Cookies"),(0,a.kt)("p",null,"Cookies are accessible through the ",(0,a.kt)("inlineCode",{parentName:"p"},"cookies")," attribute."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, HttpResponseOK, Get } from '@foal/core';\n\nclass AppController {\n  @Get('/')\n  index(ctx: Context) {\n    const sessionID: string|undefined = ctx.request.cookies.sessionID;\n    // Do something.\n    return new HttpResponseOK();\n  }\n}\n")),(0,a.kt)("p",null,"Signed cookies are accessible through the ",(0,a.kt)("inlineCode",{parentName:"p"},"signedCookies")," attribute."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, HttpResponseOK, Get } from '@foal/core';\n\nclass AppController {\n  @Get('/')\n  index(ctx: Context) {\n    const cookie1: string|undefined = ctx.request.signedCookies.cookie1;\n    // Do something.\n    return new HttpResponseOK();\n  }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In order to use signed cookies, you must provide a secret with the configuration key ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.cookieParser.secret"),".")),(0,a.kt)("h4",{id:"the-controller-method-arguments"},"The Controller Method Arguments"),(0,a.kt)("p",null,"The path paramaters and request body are also passed as second and third arguments to the controller method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, HttpResponseCreated, Put } from '@foal/core';\n\nclass AppController {\n  @Put('/products/:id')\n  updateProduct(ctx: Context, { id }, body) {\n    // Do something.\n    return new HttpResponseCreated();\n  }\n}\n")),(0,a.kt)("h2",{id:"http-responses"},"HTTP Responses"),(0,a.kt)("p",null,"HTTP responses are defined using ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpResponse")," objects. Each controller method must return an instance of this class (or a ",(0,a.kt)("em",{parentName:"p"},"promise")," of this instance)."),(0,a.kt)("p",null,"Here are subclasses that you can use:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"HTTP method"),(0,a.kt)("th",{parentName:"tr",align:null},"Response class"),(0,a.kt)("th",{parentName:"tr",align:null},"Is abstract?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"2XX Success")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2XX"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HttpResponseSuccess")),(0,a.kt)("td",{parentName:"tr",align:null},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"200"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HttpResponseOK")),(0,a.kt)("td",{parentName:"tr",align:null},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"201"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HttpResponseCreated")),(0,a.kt)("td",{parentName:"tr",align:null},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"3XX Redirection")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3XX"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HttpResponseRedirection")),(0,a.kt)("td",{parentName:"tr",align:null},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"301"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HttpResponseMovedPermanently")),(0,a.kt)("td",{parentName:"tr",align:null},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"302"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HttpResponseRedirect")),(0,a.kt)("td",{parentName:"tr",align:null},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"4XX Client errors")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"4XX"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HttpResponseClientError")),(0,a.kt)("td",{parentName:"tr",align:null},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"400"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HttpResponseBadRequest")),(0,a.kt)("td",{parentName:"tr",align:null},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"401"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HttpResponseUnauthorized")),(0,a.kt)("td",{parentName:"tr",align:null},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"403"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HttpResponseForbidden")),(0,a.kt)("td",{parentName:"tr",align:null},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"404"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HttpResponseNotFound")),(0,a.kt)("td",{parentName:"tr",align:null},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"405"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HttpResponseMethodNotAllowed")),(0,a.kt)("td",{parentName:"tr",align:null},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"409"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HttpResponseConflict")),(0,a.kt)("td",{parentName:"tr",align:null},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"429"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HttpResponseTooManyRequests")),(0,a.kt)("td",{parentName:"tr",align:null},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"5XX Server errors")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5XX"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HttpResponseServerError")),(0,a.kt)("td",{parentName:"tr",align:null},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"500"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HttpResponseInternalServerError")),(0,a.kt)("td",{parentName:"tr",align:null},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"501"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HttpResponseNotImplemented")),(0,a.kt)("td",{parentName:"tr",align:null},"no")))),(0,a.kt)("p",null,"Most of these responses accept a ",(0,a.kt)("inlineCode",{parentName:"p"},"body")," at instantiation. It can be a ",(0,a.kt)("inlineCode",{parentName:"p"},"Buffer")," object, a string, an object, a number, an array, or even a Node.JS stream."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example with a body")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"new HttpResponseBadRequest({\n  message: 'The foo field is missing.'\n})\n")),(0,a.kt)("p",null,"In case the body parameter is a stream, you must specify it using the ",(0,a.kt)("inlineCode",{parentName:"p"},"stream")," option."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example with a Node.JS stream as body")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"new HttpResponseOK(myStream, { stream: true })\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpResponseServerError")," constructor also accepts two other options: a ",(0,a.kt)("inlineCode",{parentName:"p"},"Context")," object and an error."),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Example")),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"new HttpResponseServerError({}, { error, ctx });\n"))),(0,a.kt)("p",null,"The type of the ",(0,a.kt)("inlineCode",{parentName:"p"},"body")," may be constrained. This is useful if you wish to guarantee your endpoints return a certain data shape."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example with a constrained body type")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Item {\n  title: string\n}\n\n// OK\nnew HttpResponseOK<Item>({ title: 'foobar' })\n\n// Error\nnew HttpResponseOK<Item>('foobar')\n")),(0,a.kt)("h3",{id:"adding-headers"},"Adding Headers"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponseOK } from '@foal/core';\n\nclass AppController {\n  @Get('/')\n  index() {\n    return new HttpResponseOK()\n      .setHeader('Cache-Control', 'max-age=604800, public');\n  }\n}\n")),(0,a.kt)("h3",{id:"adding-cookies"},"Adding Cookies"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example with no cookie directives")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponseOK } from '@foal/core';\n\nclass AppController {\n  @Get('/')\n  index() {\n    return new HttpResponseOK()\n      .setCookie('state', 'foobar');\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example with cookie directives")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponseOK } from '@foal/core';\n\nclass AppController {\n  @Get('/')\n  index() {\n    return new HttpResponseOK()\n      .setCookie('sessionID', 'xxxx', {\n        domain: 'example.com',\n        httpOnly: true,\n        // expires: new Date(2022, 12, 12),\n        maxAge: 3600,\n        path: '/',\n        sameSite: 'lax',\n        secure: true,\n      });\n  }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"maxAge")," cookie directive defines the number of ",(0,a.kt)("strong",{parentName:"p"},"seconds")," until the cookie expires.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example with a signed cookie.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponseOK } from '@foal/core';\n\nclass AppController {\n  @Get('/')\n  index() {\n    return new HttpResponseOK()\n      .setCookie('cookie1', 'value1', {\n        signed: true\n      });\n  }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In order to use signed cookies, you must provide a secret with the configuration key ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.cookieParser.secret"),".")),(0,a.kt)("h2",{id:"testing-controllers"},"Testing Controllers"),(0,a.kt)("p",null,"A controller is a simple class and so can be tested as is. Note that ",(0,a.kt)("a",{parentName:"p",href:"/id/docs/architecture/hooks"},"hooks")," are ignored upon testing."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"api.controller.ts (example)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Get, HttpResponseOK } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\n\nclass ApiController {\n  @Get('/users/me')\n  @JWTRequired()\n  getCurrentUser(ctx: Context) {\n    return new HttpResponseOK(ctx.user);\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"api.controller.spec.ts (example)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { strictEqual } from 'assert';\n\nimport { Context, createController, HttpResponseOK, isHttpResponseOK } from '@foal/core';\n\nimport { ApiController } from './api.controller';\n\ndescribe('ApiController', () => {\n\n  it('should return the current user.', () => {\n    // Instantiate the controller.\n    const controller = createController(ApiController);\n\n    // Create a fake user (the current user)\n    const user = { name: 'Alix' };\n\n    // Create a fake Context object to simulate the request.\n    const ctx = new Context({}); // \"{}\" is the request body.\n    ctx.user = user;\n\n    // Execute the controller method and save the response.\n    const response = controller.getCurrentUser(ctx);\n\n    if (!isHttpResponseOK(response)) {\n      throw new Error('The response should be an HttpResponseOK');\n    }\n\n    strictEqual(response.body, user);\n  });\n\n});\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Due to the way packages are managed by npm, you should always use ",(0,a.kt)("inlineCode",{parentName:"p"},"isHttpResponseOK(response)")," rather than ",(0,a.kt)("inlineCode",{parentName:"p"},"response instanceof HttpResponseOK")," to avoid reference bugs.")),(0,a.kt)("h2",{id:"inheriting-controllers"},"Inheriting Controllers"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponseOK, Post } from '@foal/core';\n\nabstract class ParentController {\n  @Get('/foo')\n  foo() {\n    return new HttpResponseOK();\n  }\n}\n\n\nclass ChildController extends ParentController {\n  @Post('/bar')\n  bar() {\n    return new HttpResponseOK();\n  }\n}\n")),(0,a.kt)("p",null,"You can also override ",(0,a.kt)("inlineCode",{parentName:"p"},"foo"),". If you don't add a ",(0,a.kt)("inlineCode",{parentName:"p"},"Get"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Post"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Patch"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Put"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Delete"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Head")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Options")," decorator then the parent path and HTTP method are used. If you don't add a hook, then the parent hooks are used. Otherwise they are all discarded."))}c.isMDXComponent=!0}}]);