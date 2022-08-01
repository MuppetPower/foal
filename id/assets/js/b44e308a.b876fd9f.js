"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6193],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={title:"Deployment Checklist",sidebar_label:"Checklist"},i=void 0,l={unversionedId:"deployment-and-environments/checklist",id:"deployment-and-environments/checklist",title:"Deployment Checklist",description:"Set the Node.JS environment to production",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/deployment-and-environments/checklist.md",sourceDirName:"deployment-and-environments",slug:"/deployment-and-environments/checklist",permalink:"/id/docs/deployment-and-environments/checklist",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/deployment-and-environments/checklist.md",tags:[],version:"current",frontMatter:{title:"Deployment Checklist",sidebar_label:"Checklist"},sidebar:"someSidebar",previous:{title:"WebSockets",permalink:"/id/docs/websockets"},next:{title:"To v2",permalink:"/id/docs/upgrade-to-v2/"}},s={},c=[{value:"Set the Node.JS environment to <code>production</code>",id:"set-the-nodejs-environment-to-production",level:2},{value:"Use HTTPS",id:"use-https",level:2},{value:"Generate Different Secrets",id:"generate-different-secrets",level:2},{value:"Database Credentials &amp; Migrations",id:"database-credentials--migrations",level:2},{value:"Files to Upload",id:"files-to-upload",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"set-the-nodejs-environment-to-production"},"Set the Node.JS environment to ",(0,r.kt)("inlineCode",{parentName:"h2"},"production")),(0,r.kt)("p",null,"Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"FOAL_ENV"),") environment variable to ",(0,r.kt)("inlineCode",{parentName:"p"},"production"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NODE_ENV=production npm run start\n")),(0,r.kt)("h2",{id:"use-https"},"Use HTTPS"),(0,r.kt)("p",null,"You must use HTTPS to prevent ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Man-in-the-middle_attack"},"man-in-the-middle attacks"),". Otherwise, your credentials and authentication tokens will appear in clear on the network."),(0,r.kt)("p",null,"If you use cookies, make sure to let them only be sent to the server when the request is made using SSL. You can do such thing with the cookie ",(0,r.kt)("inlineCode",{parentName:"p"},"secure")," directive."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"config/production.yml (example)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  // If you use sessions\n  session:\n    cookie:\n      secure: true\n  // If you use JWT\n  jwt:\n    cookie:\n      secure: true\n")),(0,r.kt)("h2",{id:"generate-different-secrets"},"Generate Different Secrets"),(0,r.kt)("p",null,"Use different secrets for your production environment (JWT, etc). Specify them using environment variables or a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},".env (example)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SETTINGS_JWT_SECRET=YZP0iv6gM+VBTxk61l8nKUno2QxsQHO9hm8XfeedZUw\n")),(0,r.kt)("p",null,"You can generate 256-bit secrets encoded in base64 with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"foal createsecret\n")),(0,r.kt)("h2",{id:"database-credentials--migrations"},"Database Credentials & Migrations"),(0,r.kt)("p",null,"Use different credentials for your production database. Specify them using environment variables or a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,r.kt)("p",null,"If you use database migrations, run them on your production server with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run migrations\n")),(0,r.kt)("h2",{id:"files-to-upload"},"Files to Upload"),(0,r.kt)("p",null,"If you install dependencies and build the app on the remote host, then you should upload these files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"config/\normconfig.js\npackage-lock.json\npackage.json\npublic/ # this may depend on how the platform manages static files\nsrc/\ntsconfig.app.json\n")),(0,r.kt)("p",null,"Then you will need to run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you get an error such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Foal not found error"),", it is probably because the dev dependencies (which include the ",(0,r.kt)("inlineCode",{parentName:"p"},"@foal/cli")," package) have not been installed. To force the installation of these dependencies, you can use the following command: ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install --production=false"),".")),(0,r.kt)("p",null,"If you install dependencies and build the app on your local host directly, then you should upload these files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"build/\nconfig/\nnode_modules/\normconfig.js\npackage-lock.json\npackage.json\npublic/ # this may depend on how the platform manages static files\n")))}d.isMDXComponent=!0}}]);