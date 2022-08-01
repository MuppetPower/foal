"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3989],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"Administrators & Roles"},i=void 0,s={unversionedId:"authentication-and-access-control/administrators-and-roles",id:"version-1.x/authentication-and-access-control/administrators-and-roles",title:"Administrators & Roles",description:"In simple applications, access control can be managed with static roles or even with an isAdmin column in the simplest cases.",source:"@site/versioned_docs/version-1.x/authentication-and-access-control/administrators-and-roles.md",sourceDirName:"authentication-and-access-control",slug:"/authentication-and-access-control/administrators-and-roles",permalink:"/id/docs/1.x/authentication-and-access-control/administrators-and-roles",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/authentication-and-access-control/administrators-and-roles.md",tags:[],version:"1.x",frontMatter:{title:"Administrators & Roles"},sidebar:"someSidebar",previous:{title:"Social Auth",permalink:"/id/docs/1.x/authentication-and-access-control/social-auth"},next:{title:"Groups & Permissions",permalink:"/id/docs/1.x/authentication-and-access-control/groups-and-permissions"}},l={},c=[{value:"Admin and Non-Admins",id:"admin-and-non-admins",level:2},{value:"Static Roles",id:"static-roles",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In simple applications, access control can be managed with static roles or even with an ",(0,o.kt)("inlineCode",{parentName:"p"},"isAdmin")," column in the simplest cases."),(0,o.kt)("h2",{id:"admin-and-non-admins"},"Admin and Non-Admins"),(0,o.kt)("p",null,"If there are only two categories of users, administrators and non-administrators, a simple solution is to add an ",(0,o.kt)("inlineCode",{parentName:"p"},"isAdmin")," column to the ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," table. Then authorization is handled by looking at the ",(0,o.kt)("inlineCode",{parentName:"p"},"isAdmin")," property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," objects."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"entities/user.entity.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Column, Entity } from 'typeorm';\n\n@Entity()\nexport class User {\n\n  @Column()\n  isAdmin: boolean;\n\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"hooks/admin-required.hook.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Hook } from '@foal/core';\n\nimport { User } from '../entities';\n\nexport function AdminRequired() {\n  return Hook((ctx: Context<User>) => {\n    if (!ctx.user) {\n      return new HttpResponseUnauthorized();\n    }\n    if (!ctx.user.isAdmin) {\n      return new HttpResponseForbidden();\n    }\n  })\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"app.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponseOK } from '@foal/core';\n\nimport { AdminRequired } from '../hooks';\n\nexport class AppController {\n  private products = [ { id: 1, name: 'chair' } ];\n\n  @Get('/products')\n  @AdminRequired()\n  readProducts() {\n    return new HttpResponseOK(this.products);\n  }\n}\n")),(0,o.kt)("h3",{id:"static-roles"},"Static Roles"),(0,o.kt)("p",null,"If it exists more than two categories and/or a user can belong to several categories then defining a ",(0,o.kt)("inlineCode",{parentName:"p"},"roles")," property can also be a solution."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"entities/user.entity.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Column, Entity } from 'typeorm';\n\n@Entity()\nexport class User {\n\n  @Column('simple-array')\n  roles: string[];\n\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"hooks/role-required.hook.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Hook } from '@foal/core';\n\nexport function RoleRequired(role: string) {\n  return Hook((ctx: Context<User>) => {\n    if (!ctx.user) {\n      return new HttpResponseUnauthorized();\n    }\n    if (!ctx.user.roles.includes(role)) {\n      return new HttpResponseForbidden();\n    }\n  })\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"app.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponseOK } from '@foal/core';\n\nimport { RoleRequired } from '../hooks';\n\nexport class AppController {\n  private products = [ { id: 1, name: 'chair' } ];\n\n  @Get('/products')\n  @RoleRequired('admin')\n  readProducts() {\n    return new HttpResponseOK(this.products);\n  }\n}\n")))}d.isMDXComponent=!0}}]);