"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5046],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),g=o,d=m["".concat(i,".").concat(g)]||m[g]||u[g]||a;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5740:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"Version 2.6 release notes",author:"Lo\xefc Poullain",author_title:"Fullstack developer and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.6-release-notes.png",tags:["release"]},s=void 0,l={permalink:"/es/blog/2021/09/19/version-2.6-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2021-09-19-version-2.6-release-notes.md",source:"@site/blog/2021-09-19-version-2.6-release-notes.md",title:"Version 2.6 release notes",description:"Banner",date:"2021-09-19T00:00:00.000Z",formattedDate:"19 de septiembre de 2021",tags:[{label:"release",permalink:"/es/blog/tags/release"}],readingTime:.385,hasTruncateMarker:!0,authors:[{name:"Lo\xefc Poullain",title:"Fullstack developer and creator of FoalTS",url:"https://github.com/LoicPoullain",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"Version 2.6 release notes",author:"Lo\xefc Poullain",author_title:"Fullstack developer and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.6-release-notes.png",tags:["release"]},prevItem:{title:"Version 2.7 release notes",permalink:"/es/blog/2021/12/12/version-2.7-release-notes"},nextItem:{title:"Version 2.5 release notes",permalink:"/es/blog/2021/06/11/version-2.5-release-notes"}},i={authorsImageUrls:[void 0]},c=[{value:"Support of the <code>array</code> value for AJV <code>coerceTypes</code> option",id:"support-of-the-array-value-for-ajv-coercetypes-option",level:2},{value:"Swagger page supports strict CSP",id:"swagger-page-supports-strict-csp",level:2},{value:"Bug fixes",id:"bug-fixes",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Banner",src:r(2188).Z,width:"914",height:"315"})),(0,o.kt)("p",null,"Version 2.6 of Foal has been released! Here are the improvements that it brings."),(0,o.kt)("h2",{id:"support-of-the-array-value-for-ajv-coercetypes-option"},"Support of the ",(0,o.kt)("inlineCode",{parentName:"h2"},"array")," value for AJV ",(0,o.kt)("inlineCode",{parentName:"h2"},"coerceTypes")," option"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "ajv": {\n      "coerceTypes": "array"\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Option documentation: ",(0,o.kt)("a",{parentName:"p",href:"https://ajv.js.org/coercion.html#coercion-to-and-from-array"},"https://ajv.js.org/coercion.html#coercion-to-and-from-array"),"."),(0,o.kt)("h2",{id:"swagger-page-supports-strict-csp"},"Swagger page supports strict CSP"),(0,o.kt)("p",null,"Inline scripts in the Swagger page have been removed to support more strict ",(0,o.kt)("em",{parentName:"p"},"Content Security Policy")," directive."),(0,o.kt)("h2",{id:"bug-fixes"},"Bug fixes"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"foal connect angular")," command now supports empty ",(0,o.kt)("inlineCode",{parentName:"p"},"angular.json")," files."))}u.isMDXComponent=!0},2188:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/banner-d245fd42d03b4afe02ba1bd55c485ad6.png"}}]);