"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1834],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={title:"Service and Application Initialization"},a=void 0,p={unversionedId:"upgrade-to-v2/service-and-app-initialization",id:"upgrade-to-v2/service-and-app-initialization",title:"Service and Application Initialization",description:"FoalTS offers two ways to initialize the application: by the boot methods of the services or with the AppController.init method.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/upgrade-to-v2/service-and-app-initialization.md",sourceDirName:"upgrade-to-v2",slug:"/upgrade-to-v2/service-and-app-initialization",permalink:"/es/docs/upgrade-to-v2/service-and-app-initialization",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/upgrade-to-v2/service-and-app-initialization.md",tags:[],version:"current",frontMatter:{title:"Service and Application Initialization"}},l={},c=[{value:"New features",id:"new-features",level:2},{value:"The <code>IAppController</code> interface",id:"the-iappcontroller-interface",level:3}],s={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"FoalTS offers two ways to initialize the application: by the ",(0,i.kt)("inlineCode",{parentName:"p"},"boot")," methods of the services or with the ",(0,i.kt)("inlineCode",{parentName:"p"},"AppController.init")," method."),(0,i.kt)("p",null,"Previously we had to call ",(0,i.kt)("inlineCode",{parentName:"p"},"ServicesManager.boot")," and use the ",(0,i.kt)("inlineCode",{parentName:"p"},"createAndInitApp")," function. This is no longer necessary. FoalTS will call the ",(0,i.kt)("inlineCode",{parentName:"p"},"boot")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," methods if they exist when the application is launched. Therefore, the ",(0,i.kt)("inlineCode",{parentName:"p"},"createAndInitApp")," function no longer exists (use ",(0,i.kt)("inlineCode",{parentName:"p"},"createApp")," instead)."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"boot")," methods are called before ",(0,i.kt)("inlineCode",{parentName:"p"},"AppController.init"),".")),(0,i.kt)("h2",{id:"new-features"},"New features"),(0,i.kt)("h3",{id:"the-iappcontroller-interface"},"The ",(0,i.kt)("inlineCode",{parentName:"h3"},"IAppController")," interface"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"AppController")," can implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"IAppController")," interface. In this way, we make sure that the optional methods ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"handleError")," are correctly implemented as well as the ",(0,i.kt)("inlineCode",{parentName:"p"},"subControllers")," property."))}d.isMDXComponent=!0}}]);