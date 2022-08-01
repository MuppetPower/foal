"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9496],{3905:(e,o,n)=>{n.d(o,{Zo:()=>u,kt:()=>f});var r=n(7294);function t(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function a(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?a(Object(n),!0).forEach((function(o){t(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function s(e,o){if(null==e)return{};var n,r,t=function(e,o){if(null==e)return{};var n,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],o.indexOf(n)>=0||(t[n]=e[n]);return t}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var p=r.createContext({}),c=function(e){var o=r.useContext(p),n=o;return e&&(n="function"==typeof e?e(o):i(i({},o),e)),n},u=function(e){var o=c(e.components);return r.createElement(p.Provider,{value:o},e.children)},l={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},d=r.forwardRef((function(e,o){var n=e.components,t=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=t,m=d["".concat(p,".").concat(f)]||d[f]||l[f]||a;return n?r.createElement(m,i(i({ref:o},u),{},{components:n})):r.createElement(m,i({ref:o},u))}));function f(e,o){var n=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in o)hasOwnProperty.call(o,p)&&(s[p]=o[p]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5247:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),t=(n(7294),n(3905));const a={title:"Removal of Mongoose Support"},i=void 0,s={unversionedId:"upgrade-to-v2/mongodb",id:"upgrade-to-v2/mongodb",title:"Removal of Mongoose Support",description:"Due to the amount of work needed to maintain Mongoose in the framework and the large number of problems we had to face in the past, FoalTS no longer provides tools for Mongoose starting from version 2. The recommended approach to use MongoDB is now via TypeORM.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/upgrade-to-v2/mongodb.md",sourceDirName:"upgrade-to-v2",slug:"/upgrade-to-v2/mongodb",permalink:"/id/docs/upgrade-to-v2/mongodb",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/upgrade-to-v2/mongodb.md",tags:[],version:"current",frontMatter:{title:"Removal of Mongoose Support"}},p={},c=[],u={toc:c};function l(e){let{components:o,...n}=e;return(0,t.kt)("wrapper",(0,r.Z)({},u,n,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Due to the amount of work needed to maintain Mongoose in the framework and the large number of problems we had to face in the past, FoalTS no longer provides tools for Mongoose starting from version 2. The recommended approach to use MongoDB is now via TypeORM."),(0,t.kt)("p",null,"However, it is still possible to use Mongoose in your application if you want to. If you were using the ",(0,t.kt)("inlineCode",{parentName:"p"},"fetchUser")," function from the package ",(0,t.kt)("inlineCode",{parentName:"p"},"@foal/mongoose")," (now removed), here is its definition so that you can copy/paste it in your code:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-typescript"},"function fetchUser(userModel: any): (id: number|string) => Promise<any> {\n  return (id: number|string) => {\n    if (typeof id === 'number') {\n      throw new Error('Unexpected type for MongoDB user ID: number.');\n    }\n    return new Promise((resolve, reject) => {\n      userModel.findOne({ _id: id }, (err: any, res: any) => {\n        if (err) {\n          reject(err);\n          return;\n        }\n        resolve(res || undefined);\n      });\n    });\n  };\n}\n")))}l.isMDXComponent=!0}}]);