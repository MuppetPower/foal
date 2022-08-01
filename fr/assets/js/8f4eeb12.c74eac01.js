"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7068],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6947:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Version 2.4 release notes",author:"Lo\xefc Poullain",author_title:"Fullstack developer and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.4-release-notes.png",tags:["release"]},l=void 0,s={permalink:"/fr/blog/2021/05/19/version-2.4-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2021-05-19-version-2.4-release-notes.md",source:"@site/blog/2021-05-19-version-2.4-release-notes.md",title:"Version 2.4 release notes",description:"Banner",date:"2021-05-19T00:00:00.000Z",formattedDate:"19 mai 2021",tags:[{label:"release",permalink:"/fr/blog/tags/release"}],readingTime:1.01,hasTruncateMarker:!0,authors:[{name:"Lo\xefc Poullain",title:"Fullstack developer and creator of FoalTS",url:"https://github.com/LoicPoullain",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"Version 2.4 release notes",author:"Lo\xefc Poullain",author_title:"Fullstack developer and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.4-release-notes.png",tags:["release"]},prevItem:{title:"Version 2.5 release notes",permalink:"/fr/blog/2021/06/11/version-2.5-release-notes"},nextItem:{title:"Version 2.3 release notes",permalink:"/fr/blog/2021/04/22/version-2.3-release-notes"}},i={authorsImageUrls:[void 0]},c=[{value:"<code>$data</code> references for validation",id:"data-references-for-validation",level:2},{value:"Cache option for file downloading",id:"cache-option-for-file-downloading",level:2},{value:"Bug fixes",id:"bug-fixes",level:2},{value:"Contributors",id:"contributors",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Banner",src:n(4962).Z,width:"914",height:"315"})),(0,a.kt)("p",null,"Version 2.4 of Foal has been released! Here are the improvements that it brings."),(0,a.kt)("h2",{id:"data-references-for-validation"},(0,a.kt)("inlineCode",{parentName:"h2"},"$data")," references for validation"),(0,a.kt)("p",null,"Version 2.4 allows you to enable the AJV ",(0,a.kt)("inlineCode",{parentName:"p"},"$data")," option so that you can use the verified data values as validators for other values."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"config/default.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "ajv": {\n      "$data": true\n    }\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example of auth controller")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Post, ValidateBody } from '@foal/core';\n\nexport class AuthController {\n  @Post('/signup')\n  @ValidateBody({\n    type: 'object',\n    properties: {\n      username: { type: 'string' },\n      password: { type: 'string' },\n      // \"password\" and \"confirmPassword\" should be identical.\n      confirmPassword: {\n        const: {\n          $data: '1/password',\n        },\n        type: 'string',\n      },\n    }\n    required: [ 'username', 'password', 'confirmPassword' ],\n    additionalProperties: false\n  })\n  signup(ctx: Context) {\n    // Do something.\n  }\n}\n\n")),(0,a.kt)("h2",{id:"cache-option-for-file-downloading"},"Cache option for file downloading"),(0,a.kt)("p",null,"Starting from version 2.4 the ",(0,a.kt)("inlineCode",{parentName:"p"},"Disk.createHttpResponse")," method accepts an optional parameter to specify the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Cache-Control")," header."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, dependency, Get } from '@foal/core';\nimport { Disk } from '@foal/storage';\n\nimport { User } from '../entities';\n\nexport class ProfileController {\n  @dependency\n  disk: Disk;\n\n  @Get('/avatar')\n  async readProfileImage(ctx: Context<User>) {\n    return this.disk.createHttpResponse(ctx.user.avatar, {\n      cache: 'no-cache'\n    });\n  }\n")),(0,a.kt)("h2",{id:"bug-fixes"},"Bug fixes"),(0,a.kt)("p",null,"See issue ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/issues/930"},"#930"),"."),(0,a.kt)("h2",{id:"contributors"},"Contributors"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ZakRabe"},"@ZakRabe")))}u.isMDXComponent=!0},4962:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/banner-1a892e7cbebe358fc06789a6968738f1.png"}}]);