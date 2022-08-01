"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5474],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(g,s(s({ref:t},p),{},{components:r})):n.createElement(g,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6274:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"A\xf1adida de la p\xe1gina de inscripci\xf3n",id:"tuto-11-sign-up",slug:"11-sign-up"},s=void 0,i={unversionedId:"tutorials/real-world-example-with-react/tuto-11-sign-up",id:"tutorials/real-world-example-with-react/tuto-11-sign-up",title:"A\xf1adida de la p\xe1gina de inscripci\xf3n",description:"Hasta ahora, s\xf3lo los usuarios creados con el script create-user pueden registrarse y publicar posts. En esta secci\xf3n a\xf1adir\xe1 un nuevo punto final de la API para que los usuarios se registren con la p\xe1gina de registro.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/11-sign-up.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/11-sign-up",permalink:"/es/docs/tutorials/real-world-example-with-react/11-sign-up",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/11-sign-up.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"A\xf1adida de la p\xe1gina de inscripci\xf3n",id:"tuto-11-sign-up",slug:"11-sign-up"},sidebar:"someSidebar",previous:{title:"Autenticaci\xf3n en React",permalink:"/es/docs/tutorials/real-world-example-with-react/10-auth-with-react"},next:{title:"Carga y Descarga de Im\xe1genes",permalink:"/es/docs/tutorials/real-world-example-with-react/12-file-upload"}},l={},u=[],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hasta ahora, s\xf3lo los usuarios creados con el script ",(0,a.kt)("inlineCode",{parentName:"p"},"create-user")," pueden registrarse y publicar posts. En esta secci\xf3n a\xf1adir\xe1 un nuevo punto final de la API para que los usuarios se registren con la p\xe1gina de registro."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Punto final"),(0,a.kt)("th",{parentName:"tr",align:null},"M\xe9todo"),(0,a.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/api/auth/signup")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"POST")),(0,a.kt)("td",{parentName:"tr",align:null},"Registra un nuevo usuario. Se espera un correo electr\xf3nico y una contrase\xf1a en el cuerpo de la solicitud.")))),(0,a.kt)("p",null,"Abra el archivo ",(0,a.kt)("inlineCode",{parentName:"p"},"auth.controller.ts")," y a\xf1ada una nueva ruta."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, hashPassword, HttpResponseNoContent, HttpResponseOK, HttpResponseUnauthorized, Post, Session, ValidateBody, verifyPassword } from '@foal/core';\nimport { User } from '../../entities';\n\nconst credentialsSchema = {\n  // ...\n};\n\nexport class AuthController {\n\n  // login...\n\n  // logout...\n\n  @Post('/signup')\n  @ValidateBody(credentialsSchema)\n  async signup(ctx: Context<User|undefined, Session>) {\n    const email = ctx.request.body.email;\n    const password = ctx.request.body.password;\n\n    const user = new User();\n    user.email = email;\n    user.avatar = '';\n    user.name = 'Unknown';\n    user.password = await hashPassword(password);\n    await user.save();\n\n    ctx.session.setUser(user);\n    ctx.user = user;\n\n    return new HttpResponseOK({\n      id: user.id,\n      name: user.name,\n    });\n  }\n\n\n}\n\n")),(0,a.kt)("p",null,"Si va a la ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/signup"},"p\xe1gina de registro"),", ahora deber\xeda poder registrarse como nuevo usuario."))}c.isMDXComponent=!0}}]);