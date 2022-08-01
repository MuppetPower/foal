"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2705],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6078:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"Password Management",sidebar_label:"Passwords"},s=void 0,l={unversionedId:"authentication-and-access-control/password-management",id:"version-1.x/authentication-and-access-control/password-management",title:"Password Management",description:"Every application must store passwords using a cryptographic technique. FoalTS provides two functions to hash and verify passwords.",source:"@site/versioned_docs/version-1.x/authentication-and-access-control/password-management.md",sourceDirName:"authentication-and-access-control",slug:"/authentication-and-access-control/password-management",permalink:"/id/docs/1.x/authentication-and-access-control/password-management",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/authentication-and-access-control/password-management.md",tags:[],version:"1.x",frontMatter:{title:"Password Management",sidebar_label:"Passwords"},sidebar:"someSidebar",previous:{title:"User Class and create-user Script",permalink:"/id/docs/1.x/authentication-and-access-control/user-class"},next:{title:"Session Tokens (authentication)",permalink:"/id/docs/1.x/authentication-and-access-control/session-tokens"}},i={},p=[{value:"The <code>hashPassword</code> function",id:"the-hashpassword-function",level:2},{value:"The <code>verifyPassword</code> function",id:"the-verifypassword-function",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Every application must store passwords using a cryptographic technique. FoalTS provides two functions to hash and verify passwords."),(0,r.kt)("h2",{id:"the-hashpassword-function"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"hashPassword")," function"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"hashPassword")," utility uses the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/PBKDF2"},"PBKDF2")," algorithm with a SHA256 hash. It takes as parameters the password in plain text and an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," object. It returns a promise which value is a password hash."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The function generates a unique cryptographically-strong random salt for each password. This salt is returned by the function beside the password hash.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plainTextPassword"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ legacy?: boolean }")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return type")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"Promise<string>\n")),(0,r.kt)("h2",{id:"the-verifypassword-function"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"verifyPassword")," function"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"verifyPassword")," takes three arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the password to check in plain text,"),(0,r.kt)("li",{parentName:"ul"},"the password hash (usually fetched from the database),"),(0,r.kt)("li",{parentName:"ul"},"and an optional ",(0,r.kt)("inlineCode",{parentName:"li"},"options")," object (see below).")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plainTextPassword"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"passwordHash"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ legacy?: boolean }")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return type")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"Promise<boolean>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you used the ",(0,r.kt)("inlineCode",{parentName:"p"},"parsePassword")," function in previous versions of Foal (<0.7.0), you must pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"legacy: true")," option to ",(0,r.kt)("inlineCode",{parentName:"p"},"verifyPassword")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"hashPassword"),".")))}d.isMDXComponent=!0}}]);