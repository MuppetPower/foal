"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9234],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"JWT hooks and CSRF protection"},i=void 0,s={unversionedId:"upgrade-to-v2/jwt-and-csrf",id:"upgrade-to-v2/jwt-and-csrf",title:"JWT hooks and CSRF protection",description:"Configuration",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/upgrade-to-v2/jwt-and-csrf.md",sourceDirName:"upgrade-to-v2",slug:"/upgrade-to-v2/jwt-and-csrf",permalink:"/fr/docs/upgrade-to-v2/jwt-and-csrf",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/upgrade-to-v2/jwt-and-csrf.md",tags:[],version:"current",frontMatter:{title:"JWT hooks and CSRF protection"}},c={},p=[{value:"Configuration",id:"configuration",level:2},{value:"CSRF protection",id:"csrf-protection",level:2},{value:"New features",id:"new-features",level:2},{value:"JWT cookies",id:"jwt-cookies",level:3},{value:"Read secrets and private/public keys",id:"read-secrets-and-privatepublic-keys",level:3}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"The configuration ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.jwt.secretOrPublicKey")," has been removed. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.jwt.secret")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.jwt.publicKey")," instead."),(0,o.kt)("p",null,"The configuration ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.jwt.cookieName")," has been renamed to ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.jwt.cookie.name"),"."),(0,o.kt)("p",null,"See also ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/upgrade-to-v2/config-system#environment-variables"},"this"),"."),(0,o.kt)("h2",{id:"csrf-protection"},"CSRF protection"),(0,o.kt)("p",null,"The package ",(0,o.kt)("inlineCode",{parentName:"p"},"@foal/csrf")," has been removed. In version 2, the CSRF protection is directly included in the JWT hooks and can be enabled with ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.jwt.csrf.enabled")," (the configuration key ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.csrf.enabled")," has been removed)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm uninstall @foal/csrf\n")),(0,o.kt)("p",null,"There is no need anymore to provide a CSRF secret."),(0,o.kt)("p",null,"There is no need anymore to set manually the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"sameSite")," cookie attribute in the config."),(0,o.kt)("p",null,"There is no need anymore to specify an expire time for the CSRF cookie. "),(0,o.kt)("p",null,"All of this is now managed by the framework."),(0,o.kt)("p",null,"The best way to use the new CSRF protection is to go directly to the ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/security/csrf-protection"},"CSRF page"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Warning:")," Using the below functions ",(0,o.kt)("inlineCode",{parentName:"p"},"setAuthCookie")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"removeAuthCookie")," is required in order to provide CSRF protection."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Warning:")," In order to ",(0,o.kt)("em",{parentName:"p"},"work better")," with some popular frontend frameworks, the default name of the CSRF cookie has been changed from ",(0,o.kt)("inlineCode",{parentName:"p"},"csrfToken")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"XSRF-TOKEN"),"."),(0,o.kt)("h2",{id:"new-features"},"New features"),(0,o.kt)("p",null,"New features have been added to reduce the amount of code needed to use JWT as well as to make it easier to use. You can consult the ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/authentication-and-access-control/quick-start"},"Quick start page")," to see how to use these features."),(0,o.kt)("h3",{id:"jwt-cookies"},"JWT cookies"),(0,o.kt)("p",null,"The JWT package has two new functions ",(0,o.kt)("inlineCode",{parentName:"p"},"setAuthCookie")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"removeAuthCookie")," to manage JWT with cookies."),(0,o.kt)("h3",{id:"read-secrets-and-privatepublic-keys"},"Read secrets and private/public keys"),(0,o.kt)("p",null,"Secrets and private/public keys can be read from the configuration with the two new functions ",(0,o.kt)("inlineCode",{parentName:"p"},"getSecretOrPrivateKey")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"getSecretOrPublicKey"),". "),(0,o.kt)("p",null,"Encoded secrets with the configuration key ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.jwt.secretEncoding")," are supported."))}u.isMDXComponent=!0}}]);