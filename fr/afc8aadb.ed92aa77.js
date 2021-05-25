(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{226:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(288)),i={title:"Logging Users In and Out"},s={unversionedId:"tutorials/real-world-example-with-react/8-authentication",id:"tutorials/real-world-example-with-react/8-authentication",isDocsHomePage:!1,title:"Logging Users In and Out",description:"Stories are displayed on the home page. If we want users to be able to post new stories and upload a profile picture, we need to allow them to log in to the application.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/8-authentication.md",slug:"/tutorials/real-world-example-with-react/8-authentication",permalink:"/fr/docs/tutorials/real-world-example-with-react/8-authentication",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/8-authentication.md",version:"current",sidebar:"someSidebar",previous:{title:"The Frontend App",permalink:"/fr/docs/tutorials/real-world-example-with-react/7-add-frontend"},next:{title:"Authenticating Users in the API",permalink:"/fr/docs/tutorials/real-world-example-with-react/9-authenticated-api"}},l=[],c={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Stories are displayed on the home page. If we want users to be able to post new stories and upload a profile picture, we need to allow them to log in to the application."),Object(o.b)("p",null,"To do this, we will use Foal's sessions with cookies."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"FoalTS offers many options for user authentication. For example, you can send session tokens with the ",Object(o.b)("inlineCode",{parentName:"p"},"Authorization")," header or use stateless tokens with JWT. We won't explore all these possibilities in this tutorial but you can find the full documentation ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/fr/docs/authentication-and-access-control/quick-start"}),"here"),".")),Object(o.b)("p",null,"Open the file ",Object(o.b)("inlineCode",{parentName:"p"},"api.controller.ts")," and add the ",Object(o.b)("inlineCode",{parentName:"p"},"@UseSessions")," hook at the top of the class."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { ApiInfo, ApiServer, controller, UseSessions } from '@foal/core';\nimport { fetchUser } from '@foal/typeorm';\nimport { User } from '../entities';\nimport { StoriesController } from './api';\n\n@ApiInfo({\n  title: 'Application API',\n  version: '1.0.0'\n})\n@ApiServer({\n  url: '/api'\n})\n@UseSessions({\n  cookie: true,\n  user: fetchUser(User),\n})\nexport class ApiController {\n\n  subControllers = [\n    controller('/stories', StoriesController),\n  ];\n\n}\n\n")),Object(o.b)("p",null,"When used with the ",Object(o.b)("inlineCode",{parentName:"p"},"cookie")," option, this hook ensures that ",Object(o.b)("inlineCode",{parentName:"p"},"ctx.session")," is always defined in every method of the controller and its subcontrollers. This object can be used to store information between multiple requests, such as a user ID for example. You will use it to authenticate users."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"In the background, Foal generates a unique session token for each user using the API and stores it in a cookie on the client host. When the client makes a new request, the browser automatically sends the token with the request so that the server can retrieve the session information. The session data is stored in the database in the ",Object(o.b)("em",{parentName:"p"},"sessions")," table."),Object(o.b)("p",{parentName:"blockquote"},"But you don't need to worry about it, everything is managed by Foal.")),Object(o.b)("p",null,"Create a new controller."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"foal generate controller api/auth --register\n")),Object(o.b)("p",null,"Open the new created file and add two routes."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"API endpoint"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Method"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"/api/auth/login")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"POST")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Logs the user in. An email and a password are expected in the request body.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"/api/auth/logout")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"POST")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Logs the user out.")))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, hashPassword, HttpResponseNoContent, HttpResponseOK, HttpResponseUnauthorized, Post, Session, ValidateBody, verifyPassword } from '@foal/core';\nimport { User } from '../../entities';\n\nconst credentialsSchema = {\n  type: 'object',\n  properties: {\n    email: { type: 'string', format: 'email', maxLength: 255 },\n    password: { type: 'string' }\n  },\n  required: [ 'email', 'password' ],\n  additionalProperties: false,\n};\n\nexport class AuthController {\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context<User|undefined, Session>) {\n    const email = ctx.request.body.email;\n    const password = ctx.request.body.password;\n\n    const user = await User.findOne({ email });\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!(await verifyPassword(password, user.password))) {\n      return new HttpResponseUnauthorized();\n    }\n\n    ctx.session.setUser(user);\n    ctx.user = user;\n\n    return new HttpResponseOK({\n      id: user.id,\n      name: user.name,\n    });\n  }\n\n  @Post('/logout')\n  async logout(ctx: Context<User|undefined, Session>) {\n    await ctx.session.destroy();\n    return new HttpResponseNoContent();\n  }\n\n}\n\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"login")," method first checks that the user exists and that the credentials provided are correct. If so, it associates the user with the current session."),Object(o.b)("p",null,"On subsequent requests, the ",Object(o.b)("em",{parentName:"p"},"UseSessions")," hook will retrieve the user's ID from the session and set the ",Object(o.b)("inlineCode",{parentName:"p"},"ctx.user")," property accordingly. If the user has not previously logged in, then ",Object(o.b)("inlineCode",{parentName:"p"},"ctx.user")," will be ",Object(o.b)("inlineCode",{parentName:"p"},"undefined"),". If they have, then ",Object(o.b)("inlineCode",{parentName:"p"},"ctx.user")," will be an instance of ",Object(o.b)("inlineCode",{parentName:"p"},"User"),". This is made possible by the ",Object(o.b)("inlineCode",{parentName:"p"},"user")," option we provided to the hook earlier. It is actually the function that takes the user ID as parameter and returns the value to assign to ",Object(o.b)("inlineCode",{parentName:"p"},"ctx.user"),"."))}p.isMDXComponent=!0},288:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(h,s(s({ref:t},c),{},{components:n})):a.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);