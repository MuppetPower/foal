"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6050],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9612:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"Votre Premi\xe8re Route",id:"tuto-5-our-first-route",slug:"5-our-first-route"},l=void 0,i={unversionedId:"tutorials/real-world-example-with-react/tuto-5-our-first-route",id:"tutorials/real-world-example-with-react/tuto-5-our-first-route",title:"Votre Premi\xe8re Route",description:"La base de donn\xe9es est maintenant remplie avec quelques posts. Impl\xe9mentons la premi\xe8re route pour les r\xe9cup\xe9rer.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/5-our-first-route.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/5-our-first-route",permalink:"/fr/docs/tutorials/real-world-example-with-react/5-our-first-route",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/5-our-first-route.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Votre Premi\xe8re Route",id:"tuto-5-our-first-route",slug:"5-our-first-route"},sidebar:"someSidebar",previous:{title:"Les Scripts Shell",permalink:"/fr/docs/tutorials/real-world-example-with-react/4-the-shell-scripts"},next:{title:"Test de l'API avec Swagger",permalink:"/fr/docs/tutorials/real-world-example-with-react/6-swagger-interface"}},s={},u=[],p={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"La base de donn\xe9es est maintenant remplie avec quelques posts. Impl\xe9mentons la premi\xe8re route pour les r\xe9cup\xe9rer."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Point de terminaison"),(0,o.kt)("th",{parentName:"tr",align:null},"M\xe9thode"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/api/stories")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"GET")),(0,o.kt)("td",{parentName:"tr",align:null},"Liste les posts de tous les utilisateurs. Un param\xe8tre de requ\xeate facultatif ",(0,o.kt)("inlineCode",{parentName:"td"},"authorId")," peut \xeatre fourni pour filtrer les posts \xe0 retourner.")))),(0,o.kt)("p",null,"Tout d'abord, g\xe9n\xe9rez le contr\xf4leur des posts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"foal generate controller api/stories --register\n")),(0,o.kt)("p",null,"Un nouveau fichier appara\xeet dans le sous-r\xe9pertoire ",(0,o.kt)("inlineCode",{parentName:"p"},"api"),". Ouvrez-le et remplacez son contenu."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Delete, Get, HttpResponseCreated, HttpResponseNoContent, HttpResponseNotFound, HttpResponseOK, Post, UserRequired, ValidateBody, ValidatePathParam, ValidateQueryParam } from '@foal/core';\nimport { Story, User } from '../../entities';\n\nexport class StoriesController {\n  @Get()\n  @ValidateQueryParam('authorId', { type: 'number' }, { required: false })\n  async readStories(ctx: Context) {\n    const authorId = ctx.request.query.authorId as number|undefined;\n\n    let queryBuilder = Story\n      .createQueryBuilder('story')\n      .leftJoinAndSelect('story.author', 'author')\n      .select([\n        'story.id',\n        'story.title',\n        'story.link',\n        'author.id',\n        'author.name'\n      ]);\n\n    if (authorId !== undefined) {\n      queryBuilder = queryBuilder.where('author.id = :authorId', { authorId });\n    }\n\n    const stories = await queryBuilder.getMany();\n\n    return new HttpResponseOK(stories);\n  }\n}\n\n")),(0,o.kt)("p",null,"La m\xe9thode ",(0,o.kt)("inlineCode",{parentName:"p"},"readStories")," r\xe9cup\xe8re et renvoie les posts avec quelques informations sur leurs auteurs."),(0,o.kt)("p",null,"Lors de l'envoie d'une requ\xeate \xe0 ce point de terminaison, le corps de la r\xe9ponse ressemblera \xe0 ceci :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": 1,\n    "title": "How to build a simple to-do list",\n    "link": "https://foalts.org/docs/tutorials/simple-todo-list/1-installation",\n    "author": {\n      "id": 1,\n      "name": "John"\n    }\n  },\n  {\n    "id": 2,\n    "title": "FoalTS architecture overview",\n    "link": "https://foalts.org/docs/architecture/architecture-overview",\n    "author": {\n      "id": 2,\n      "name": "Mary"\n    }\n  },\n  {\n    "id": 3,\n    "title": "Authentication with Foal",\n    "link": "https://foalts.org/docs/authentication-and-access-control/quick-start",\n    "author": {\n      "id": 2,\n      "name": "Mary"\n    }\n  },\n]\n')))}c.isMDXComponent=!0}}]);