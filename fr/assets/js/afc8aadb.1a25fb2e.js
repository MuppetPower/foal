"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={title:"Connecter les Utilisateurs",id:"tuto-8-authentication",slug:"8-authentication"},s=void 0,i={unversionedId:"tutorials/real-world-example-with-react/tuto-8-authentication",id:"tutorials/real-world-example-with-react/tuto-8-authentication",title:"Connecter les Utilisateurs",description:"Les posts sont affich\xe9es sur la page d'accueil. Si nous voulons que les utilisateurs puissent publier de nouveaux posts et t\xe9l\xe9charger une photo de profil, nous devons leur permettre de se connecter \xe0 l'application.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/8-authentication.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/8-authentication",permalink:"/fr/docs/tutorials/real-world-example-with-react/8-authentication",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/8-authentication.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Connecter les Utilisateurs",id:"tuto-8-authentication",slug:"8-authentication"},sidebar:"someSidebar",previous:{title:"L'Application Frontend",permalink:"/fr/docs/tutorials/real-world-example-with-react/7-add-frontend"},next:{title:"Authentification des Utilisateurs dans l'API",permalink:"/fr/docs/tutorials/real-world-example-with-react/9-authenticated-api"}},l={},u=[],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Les posts sont affich\xe9es sur la page d'accueil. Si nous voulons que les utilisateurs puissent publier de nouveaux posts et t\xe9l\xe9charger une photo de profil, nous devons leur permettre de se connecter \xe0 l'application."),(0,o.kt)("p",null,"Pour ce faire, nous allons utiliser les sessions de Foal avec des cookies."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"FoalTS offre de nombreuses options pour authentifier les utilisateurs. Par exemple, vous pouvez envoyer des jetons (",(0,o.kt)("em",{parentName:"p"},"tokens"),") de session avec l'en-t\xeate ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," ou utiliser des jetons sans \xe9tat avec JWT. Nous n'allons pas explorer toutes ces possibilit\xe9s dans ce tutoriel mais vous pouvez trouver la documentation compl\xe8te ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/authentication-and-access-control/quick-start"},"ici"),".")),(0,o.kt)("p",null,"Ouvrez le fichier ",(0,o.kt)("inlineCode",{parentName:"p"},"api.controller.ts")," et ajoutez le hook ",(0,o.kt)("inlineCode",{parentName:"p"},"@UseSessions")," en haut de la classe."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiInfo, ApiServer, controller, UseSessions } from '@foal/core';\nimport { fetchUser } from '@foal/typeorm';\nimport { User } from '../entities';\nimport { StoriesController } from './api';\n\n@ApiInfo({\n  title: 'Application API',\n  version: '1.0.0'\n})\n@ApiServer({\n  url: '/api'\n})\n@UseSessions({\n  cookie: true,\n  user: fetchUser(User),\n})\nexport class ApiController {\n\n  subControllers = [\n    controller('/stories', StoriesController),\n  ];\n\n}\n\n")),(0,o.kt)("p",null,"Lorsqu'il est utilis\xe9 avec l'option ",(0,o.kt)("inlineCode",{parentName:"p"},"cookie"),", ce hook garantit que ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.session")," est toujours d\xe9fini dans chaque m\xe9thode du contr\xf4leur et de ses sous-contr\xf4leurs. Cet objet peut \xeatre utilis\xe9 pour stocker des informations entre plusieurs requ\xeates, comme un ID d'utilisateur par exemple. Vous l'utiliserez pour authentifier les utilisateurs."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"En arri\xe8re-plan, Foal g\xe9n\xe8re un jeton de session unique pour chaque utilisateur utilisant l'API et le stocke dans un cookie sur l'h\xf4te du client. Lorsque le client effectue une nouvelle requ\xeate, le navigateur envoie automatiquement le jeton avec la requ\xeate afin que le serveur puisse r\xe9cup\xe9rer les informations de session. Les donn\xe9es de session sont stock\xe9es dans la base de donn\xe9es dans la table ",(0,o.kt)("em",{parentName:"p"},"sessions"),"."),(0,o.kt)("p",{parentName:"blockquote"},"Mais vous n'avez pas \xe0 vous en pr\xe9occuper, tout est g\xe9r\xe9 par Foal.")),(0,o.kt)("p",null,"Cr\xe9ez un nouveau contr\xf4leur."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"foal generate controller api/auth --register\n")),(0,o.kt)("p",null,"Ouvrez le nouveau fichier cr\xe9\xe9 et ajoutez deux routes."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Point de terminaison"),(0,o.kt)("th",{parentName:"tr",align:null},"M\xe9thode"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/api/auth/login")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"POST")),(0,o.kt)("td",{parentName:"tr",align:null},"Connecte l'utilisateur. Un email et un mot de passe sont attendus dans le corps de la requ\xeate.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/api/auth/logout")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"POST")),(0,o.kt)("td",{parentName:"tr",align:null},"D\xe9connecte l'utilisateur.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, hashPassword, HttpResponseNoContent, HttpResponseOK, HttpResponseUnauthorized, Post, Session, ValidateBody, verifyPassword } from '@foal/core';\nimport { User } from '../../entities';\n\nconst credentialsSchema = {\n  type: 'object',\n  properties: {\n    email: { type: 'string', format: 'email', maxLength: 255 },\n    password: { type: 'string' }\n  },\n  required: [ 'email', 'password' ],\n  additionalProperties: false,\n};\n\nexport class AuthController {\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context<User|undefined, Session>) {\n    const email = ctx.request.body.email;\n    const password = ctx.request.body.password;\n\n    const user = await User.findOne({ email });\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!(await verifyPassword(password, user.password))) {\n      return new HttpResponseUnauthorized();\n    }\n\n    ctx.session.setUser(user);\n    ctx.user = user;\n\n    return new HttpResponseOK({\n      id: user.id,\n      name: user.name,\n    });\n  }\n\n  @Post('/logout')\n  async logout(ctx: Context<User|undefined, Session>) {\n    await ctx.session.destroy();\n    return new HttpResponseNoContent();\n  }\n\n}\n\n")),(0,o.kt)("p",null,"La m\xe9thode ",(0,o.kt)("inlineCode",{parentName:"p"},"login")," v\xe9rifie d'abord que l'utilisateur existe et que les informations d'identification fournies sont correctes. Si c'est le cas, elle associe l'utilisateur \xe0 la session en cours."),(0,o.kt)("p",null,"Lors des requ\xeates suivantes, le hook ",(0,o.kt)("em",{parentName:"p"},"UseSessions")," r\xe9cup\xe9rera l'ID de l'utilisateur dans la session et d\xe9finira la propri\xe9t\xe9 ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.user")," en cons\xe9quence. Si l'utilisateur ne s'est pas encore connect\xe9, la propri\xe9t\xe9 ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.user")," sera ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),". Dans le cas contraire, ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.user")," sera une instance de ",(0,o.kt)("inlineCode",{parentName:"p"},"User"),". Ceci est rendu possible par l'option ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," que nous avons fournie au hook plus t\xf4t. Il s'agit en fait la fonction qui prend l'ID de l'utilisateur comme param\xe8tre et retourne la valeur \xe0 assigner \xe0 ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.user"),"."))}c.isMDXComponent=!0}}]);