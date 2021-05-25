(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{246:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(288)),l={title:"Social Auth with Google"},i={unversionedId:"tutorials/real-world-example-with-react/15-social-auth",id:"tutorials/real-world-example-with-react/15-social-auth",isDocsHomePage:!1,title:"Social Auth with Google",description:"In this last part of the tutorial, we will give users the ability to log in with Google. Currently, they can only log in with an email and a password.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/15-social-auth.md",slug:"/tutorials/real-world-example-with-react/15-social-auth",permalink:"/es/docs/tutorials/real-world-example-with-react/15-social-auth",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/es/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/15-social-auth.md",version:"current",sidebar:"someSidebar",previous:{title:"Production Build",permalink:"/es/docs/tutorials/real-world-example-with-react/14-production-build"},next:{title:"Arquitectura",permalink:"/es/docs/architecture/architecture-overview"}},c=[{value:"Nullable Passwords",id:"nullable-passwords",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"The Social Controller",id:"the-social-controller",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this last part of the tutorial, we will give users the ability to log in with Google. Currently, they can only log in with an email and a password."),Object(o.b)("p",null,"To do this, you will use Foal's social authentication system."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("em",{parentName:"p"},"This section assumes that you have already set up a Google application and have retrieved your client ID and secret. If you have not, you might want to check this ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"/es/docs/authentication-and-access-control/social-auth"}),"page")," first. The redirection URIs allowed in your Google application must include ",Object(o.b)("inlineCode",{parentName:"em"},"http://localhost:3001/api/auth/google/callback"),"."))),Object(o.b)("h2",{id:"nullable-passwords"},"Nullable Passwords"),Object(o.b)("p",null,"The first step is to update the ",Object(o.b)("inlineCode",{parentName:"p"},"User")," model. Some users may only use the social login and therefore not have a password. To take this into account, we will make the ",Object(o.b)("inlineCode",{parentName:"p"},"password")," column accept null values."),Object(o.b)("p",null,"Open ",Object(o.b)("inlineCode",{parentName:"p"},"user.entity.ts")," and update its contents."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n  @Column({ nullable: true })\n  password: string;\n\n  @Column()\n  name: string;\n\n  @Column()\n  avatar: string;\n\n}\n\nexport { DatabaseSession } from '@foal/typeorm';\n")),Object(o.b)("p",null,"Make and run the migrations."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run makemigrations\nnpm run migrations\n")),Object(o.b)("p",null,"Then open ",Object(o.b)("inlineCode",{parentName:"p"},"auth.controller.ts")," and add a condition to check whether the password value is ",Object(o.b)("inlineCode",{parentName:"p"},"null")," in the database."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"if (!user.password) {\n  return new HttpResponseUnauthorized();\n}\n\nif (!(await verifyPassword(password, user.password))) {\n  return new HttpResponseUnauthorized();\n}\n")),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Now that the password problem is solved, you can install the packages and provide your social credentials in the configuration."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install @foal/social node-fetch\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"config/default.json")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "port": "env(PORT)",\n  "settings": {\n    ...\n    "social": {\n      "google": {\n        "clientId": "env(GOOGLE_CLIENT_ID)",\n        "clientSecret": "env(GOOGLE_CLIENT_SECRET)",\n        "redirectUri": "http://localhost:3001/api/auth/google/callback"\n      }\n    },\n  },\n  ...\n}\n')),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},".env")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# ...\n\nGOOGLE_CLIENT_ID="your Google client ID"\nGOOGLE_CLIENT_SECRET="your Google client secret"\n')),Object(o.b)("h2",{id:"the-social-controller"},"The Social Controller"),Object(o.b)("p",null,"Create the controller."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"foal generate controller api/social-auth --register\n")),Object(o.b)("p",null,"Open the file and add two new routes."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"API endpoint"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Method"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"/api/auth/google")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"POST")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Redirects the user to Google login page.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"/api/auth/google/callback")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"GET")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Handles redirection from Google once the user has approved the connection.")))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, dependency, Get, HttpResponseRedirect, Session } from '@foal/core';\nimport { GoogleProvider } from '@foal/social';\nimport { User } from '../../entities';\nimport * as fetch from 'node-fetch';\nimport { Disk } from '@foal/storage';\n\ninterface GoogleUserInfo {\n  email: string;\n  name?: string;\n  picture?: string;\n}\n\nexport class SocialAuthController {\n  @dependency\n  google: GoogleProvider;\n\n  @dependency\n  disk: Disk;\n\n  @Get('/google')\n  redirectToGoogle() {\n    return this.google.redirect();\n  }\n\n  @Get('/google/callback')\n  async handleGoogleRedirection(ctx: Context<User, Session>) {\n    const { userInfo } = await this.google.getUserInfo<GoogleUserInfo>(ctx);\n\n    if (!userInfo.email) {\n      throw new Error('Google should have returned an email address.');\n    }\n\n    let user = await User.findOne({ email: userInfo.email });\n\n    if (!user) {\n      user = new User();\n      user.email = userInfo.email;\n      user.avatar = '';\n      user.name = userInfo.name ?? 'Unknown';\n\n      if (userInfo.picture) {\n        const response = await fetch(userInfo.picture);\n        const { path } = await this.disk.write('images/profiles/uploaded', response.body)\n        user.avatar = path;\n      }\n\n      await user.save();\n    }\n\n    ctx.session.setUser(user);\n    ctx.user = user;\n\n    return new HttpResponseRedirect('/');\n  }\n\n}\n\n")),Object(o.b)("p",null,"Open ",Object(o.b)("inlineCode",{parentName:"p"},"api.controller.ts")," and replace the path prefix of the ",Object(o.b)("inlineCode",{parentName:"p"},"SocialAuthController")," with ",Object(o.b)("inlineCode",{parentName:"p"},"/auth"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"subControllers = [\n  controller('/stories', StoriesController),\n  controller('/auth', AuthController),\n  controller('/profile', ProfileController),\n  controller('/auth', SocialAuthController)\n];\n")),Object(o.b)("p",null,"Go to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:3001/login"}),"http://localhost:3001/login")," and click on the ",Object(o.b)("em",{parentName:"p"},"Connect with Google")," button. You are redirected to the Google login page. Once you have validated the connection, you will be redirected to the home page. If you have a Google profile picture, you will see it on your profile page."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"For this to work, you need to make sure you are using port ",Object(o.b)("inlineCode",{parentName:"p"},"3001")," to test the social login. This assumes that you created the production build in the previous step of this tutorial. You can't use the React development server here because the redirects won't work with both ports ",Object(o.b)("inlineCode",{parentName:"p"},"3000")," and ",Object(o.b)("inlineCode",{parentName:"p"},"3001"),". ")),Object(o.b)("p",null,"Congratulations! You have reached the end of this tutorial. You can find the complete source code ","[here]"," (TODO)."))}u.isMDXComponent=!0},288:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(m,i(i({ref:t},s),{},{components:n})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);