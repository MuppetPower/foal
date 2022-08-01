"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7321],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={title:"Ship to Production"},a=void 0,s={unversionedId:"deployment-and-environments/ship-to-production",id:"version-1.x/deployment-and-environments/ship-to-production",title:"Ship to Production",description:"1. Set the Node.JS environment to production",source:"@site/versioned_docs/version-1.x/deployment-and-environments/ship-to-production.md",sourceDirName:"deployment-and-environments",slug:"/deployment-and-environments/ship-to-production",permalink:"/docs/1.x/deployment-and-environments/ship-to-production",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/deployment-and-environments/ship-to-production.md",tags:[],version:"1.x",frontMatter:{title:"Ship to Production"},sidebar:"someSidebar",previous:{title:"Configuration",permalink:"/docs/1.x/deployment-and-environments/configuration"}},p={},l=[{value:"1. Set the Node.JS environment to <code>production</code>",id:"1-set-the-nodejs-environment-to-production",level:2},{value:"2. Use HTTPS",id:"2-use-https",level:2},{value:"3. Generate Different Secrets",id:"3-generate-different-secrets",level:2},{value:"4. Database Credentials &amp; Migrations",id:"4-database-credentials--migrations",level:2}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-set-the-nodejs-environment-to-production"},"1. Set the Node.JS environment to ",(0,o.kt)("inlineCode",{parentName:"h2"},"production")),(0,o.kt)("p",null,"Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," environment variable to ",(0,o.kt)("inlineCode",{parentName:"p"},"production"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NODE_ENV=production npm run start\n")),(0,o.kt)("h2",{id:"2-use-https"},"2. Use HTTPS"),(0,o.kt)("p",null,"You must use HTTPS to prevent ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Man-in-the-middle_attack"},"man-in-the-middle attacks"),". Otherwise, your credentials and authentication tokens will appear in clear on the network."),(0,o.kt)("p",null,"If you use cookies, make sure to let them only be sent to the server when the request is made using SSL. You can do such thing with the cookie ",(0,o.kt)("inlineCode",{parentName:"p"},"secure")," directive."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"config/production.yml (example)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  // If you use sessions\n  session:\n    cookie:\n      secure: true\n  // If you use CSRF protection with cookies\n  csrf:\n    cookie:\n      secure: true\n")),(0,o.kt)("h2",{id:"3-generate-different-secrets"},"3. Generate Different Secrets"),(0,o.kt)("p",null,"Use different secrets for your production environment (JWT, session, csrf, etc). Specify them using environment variables or a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},".env (example)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SETTINGS_SESSION_SECRET=ctpQxVTme8rA1SR1AnKHTd/FknqcrhpPlMPGVMSSgjk\nSETTINGS_CSRF_SECRET=PZFo9stbQtGvQ2clYSrgn+FUjf55pjajHJslRaBRNo4\nSETTINGS_JWT_SECRET_OR_PUBLIC_KEY=YZP0iv6gM+VBTxk61l8nKUno2QxsQHO9hm8XfeedZUw\n")),(0,o.kt)("p",null,"You can generate 256-bit secrets encoded in base64 with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"foal createsecret\n")),(0,o.kt)("h2",{id:"4-database-credentials--migrations"},"4. Database Credentials & Migrations"),(0,o.kt)("p",null,"Use different credentials for your production database. Specify them using environment variables or a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,o.kt)("p",null,"If you use database migrations, run them on your production server with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm run migration:run\n")))}d.isMDXComponent=!0}}]);