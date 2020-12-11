(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{250:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,O=u["".concat(s,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(O,c(c({ref:t},l),{},{components:n})):o.a.createElement(O,c({ref:t},l))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(250)),s={title:"Public API & CORS Requests"},c={unversionedId:"api-section/public-api-and-cors-requests",id:"version-1.x/api-section/public-api-and-cors-requests",isDocsHomePage:!1,title:"Public API & CORS Requests",description:"Building an Open API requires to allow Cross-Origin Request Sharing.",source:"@site/versioned_docs/version-1.x/api-section/public-api-and-cors-requests.md",slug:"/api-section/public-api-and-cors-requests",permalink:"/foal/docs/1.x/api-section/public-api-and-cors-requests",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/api-section/public-api-and-cors-requests.md",version:"1.x",sidebar:"someSidebar",previous:{title:"OpenAPI & Swagger UI",permalink:"/foal/docs/1.x/api-section/openapi-and-swagger-ui"},next:{title:"GraphQL",permalink:"/foal/docs/1.x/api-section/graphql"}},i=[{value:"Enable Cross-Origin Resource Sharing (CORS)",id:"enable-cross-origin-resource-sharing-cors",children:[]},{value:"CORS Requests and <code>Authorization</code> header",id:"cors-requests-and-authorization-header",children:[]},{value:"CORS Requests and Cookies",id:"cors-requests-and-cookies",children:[]}],l={rightToc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Building an Open API requires to allow Cross-Origin Request Sharing."),Object(a.b)("h2",{id:"enable-cross-origin-resource-sharing-cors"},"Enable Cross-Origin Resource Sharing (CORS)"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you are building a web application, ",Object(a.b)("strong",{parentName:"p"},"you may not need to enable CORS for your API"),". See ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/foal/docs/1.x/frontend-integration/angular-react-vue"}),"here")," the section ",Object(a.b)("em",{parentName:"p"},"Origins that Do not Match"),".")),Object(a.b)("p",null,"If you want different origins to make requests to your API from a browser, you need to enable ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.html5rocks.com/en/tutorials/cors/"}),"Cross-Origin Resource Sharing"),"."),Object(a.b)("p",null,"You can do that by adding a route handler and a special hook to your API root controller (",Object(a.b)("inlineCode",{parentName:"p"},"APIController")," in this example)."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, Hook, HttpResponseNoContent, Options } from '@foal/core';\n\n@Hook(() => response => {\n  // Every response of this controller and its sub-controllers will be added this header.\n  response.setHeader('Access-Control-Allow-Origin', '*');\n})\nexport class ApiController {\n\n  subControllers = [\n    // your sub-controllers\n  ];\n\n  @Options('*')\n  options(ctx: Context) {\n    const response = new HttpResponseNoContent();\n    response.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, PATCH, DELETE');\n    // You may need to allow other headers depending on what you need.\n    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');\n    return response;\n  }\n\n  // Some other routes (ex: @Get('/users'), etc)\n\n}\n")),Object(a.b)("h2",{id:"cors-requests-and-authorization-header"},"CORS Requests and ",Object(a.b)("inlineCode",{parentName:"h2"},"Authorization")," header"),Object(a.b)("p",null,"If your API requires a token to be sent in the ",Object(a.b)("inlineCode",{parentName:"p"},"Authorization")," header, then the name of this header should be specified in the ",Object(a.b)("inlineCode",{parentName:"p"},"options")," handler."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"  @Options('*')\n  options(ctx: Context) {\n    const response = new HttpResponseNoContent();\n    response.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, PATCH, DELETE');\n    response.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');\n    return response;\n  }\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The same goes with other headers: ",Object(a.b)("inlineCode",{parentName:"p"},"X-Requested-With"),", etc.")),Object(a.b)("h2",{id:"cors-requests-and-cookies"},"CORS Requests and Cookies"),Object(a.b)("p",null,"If your API uses cookies (for authentication for example), then you should specify it in the hook with the ",Object(a.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Credentials")," header."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"@Hook(ctx => response => {\n  response.setHeader('Access-Control-Allow-Origin', ctx.request.get('Origin') || '*');\n  response.setHeader('Access-Control-Allow-Credentials', 'true');\n})\n")),Object(a.b)("p",null,"In the browser, your HTTP client must also have its ",Object(a.b)("inlineCode",{parentName:"p"},"withCredentials")," option set to ",Object(a.b)("inlineCode",{parentName:"p"},"true"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Examples")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"}),"XMLHttpRequest"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const xhr = new XMLHttpRequest();\nxhr.open('GET', 'http://example.com/', true); \nxhr.withCredentials = true; \nxhr.send(null);\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/axios/axios"}),"Axios"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"axios.get('http://example.com/', { withCredentials: true });\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://angular.io/guide/http"}),"Angular HttpClient"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"this.http.get('http://example.com/', { withCredentials: true });\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"}),"fetch"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"fetch('http://example.com/', { credentials: 'include' });\n")))}p.isMDXComponent=!0}}]);