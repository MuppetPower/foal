"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3078],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),b=o,m=d["".concat(l,".").concat(b)]||d[b]||u[b]||a;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},701:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"Request Body Size"},s=void 0,i={unversionedId:"cookbook/request-body-size",id:"version-1.x/cookbook/request-body-size",title:"Request Body Size",description:"By default, FoalTS only accepts request bodies lower than 100kb. This value can be increased by using the configuration key settings.bodyParser.limit. If a number is provided, then the value specifies the number of bytes. If it is a string, the value is passed to the bytes library for parsing.",source:"@site/versioned_docs/version-1.x/cookbook/request-body-size.md",sourceDirName:"cookbook",slug:"/cookbook/request-body-size",permalink:"/docs/1.x/cookbook/request-body-size",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/cookbook/request-body-size.md",tags:[],version:"1.x",frontMatter:{title:"Request Body Size"},sidebar:"someSidebar",previous:{title:"404 Page",permalink:"/docs/1.x/cookbook/not-found-page"},next:{title:"ExpressJS",permalink:"/docs/1.x/cookbook/expressjs"}},l={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, FoalTS only accepts request bodies lower than 100kb. This value can be increased by using the configuration key ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.bodyParser.limit"),". If a number is provided, then the value specifies the number of bytes. If it is a string, the value is passed to the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/bytes"},"bytes")," library for parsing."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"config/default.yml (example)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  bodyParser:\n    limit: '50mb'\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"config/default.json (example)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "bodyParser": {\n      "limit": "50mb"\n    }\n  }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},".env (example)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SETTINGS_BODY_PARSER_LIMIT=50mb\n")))}u.isMDXComponent=!0}}]);