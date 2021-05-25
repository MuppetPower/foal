(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(288)),i={title:"Adding Sign Up"},s={unversionedId:"tutorials/real-world-example-with-react/11-sign-up",id:"tutorials/real-world-example-with-react/11-sign-up",isDocsHomePage:!1,title:"Adding Sign Up",description:"So far, only users created with the create-user script can log in and publish stories. In this section you will add a new API endpoint for users to sign up with the registration page.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/11-sign-up.md",slug:"/tutorials/real-world-example-with-react/11-sign-up",permalink:"/es/docs/tutorials/real-world-example-with-react/11-sign-up",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/es/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/11-sign-up.md",version:"current",sidebar:"someSidebar",previous:{title:"Authenticating Users in React",permalink:"/es/docs/tutorials/real-world-example-with-react/10-auth-with-react"},next:{title:"Image Upload and Download",permalink:"/es/docs/tutorials/real-world-example-with-react/12-file-upload"}},c=[],l={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"So far, only users created with the ",Object(o.b)("inlineCode",{parentName:"p"},"create-user")," script can log in and publish stories. In this section you will add a new API endpoint for users to sign up with the registration page."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"API endpoint"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Method"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"/api/auth/signup")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"POST")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Registers a new user. An email and a password are expected in the request body.")))),Object(o.b)("p",null,"Open the ",Object(o.b)("inlineCode",{parentName:"p"},"auth.controller.ts")," file and add a new route."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, hashPassword, HttpResponseNoContent, HttpResponseOK, HttpResponseUnauthorized, Post, Session, ValidateBody, verifyPassword } from '@foal/core';\nimport { User } from '../../entities';\n\nconst credentialsSchema = {\n  // ...\n};\n\nexport class AuthController {\n\n  // login...\n\n  // logout...\n\n  @Post('/signup')\n  @ValidateBody(credentialsSchema)\n  async signup(ctx: Context<User|undefined, Session>) {\n    const email = ctx.request.body.email;\n    const password = ctx.request.body.password;\n\n    const user = new User();\n    user.email = email;\n    user.avatar = '';\n    user.name = 'Unknown';\n    user.password = await hashPassword(password);\n    await user.save();\n\n    ctx.session.setUser(user);\n    ctx.user = user;\n\n    return new HttpResponseOK({\n      id: user.id,\n      name: user.name,\n    });\n  }\n\n\n}\n\n")),Object(o.b)("p",null,"If you go the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:3000/signup"}),"sign up page"),", you should now be able to register as a new user."))}u.isMDXComponent=!0},288:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);