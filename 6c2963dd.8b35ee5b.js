(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{172:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(288)),s={title:"The Shell Scripts"},i={unversionedId:"tutorials/real-world-example-with-react/4-the-shell-scripts",id:"tutorials/real-world-example-with-react/4-the-shell-scripts",isDocsHomePage:!1,title:"The Shell Scripts",description:"Your models are ready to be used. As in the previous tutorial, you will use shell scripts to feed the database.",source:"@site/docs/tutorials/real-world-example-with-react/4-the-shell-scripts.md",slug:"/tutorials/real-world-example-with-react/4-the-shell-scripts",permalink:"/docs/tutorials/real-world-example-with-react/4-the-shell-scripts",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/4-the-shell-scripts.md",version:"current",sidebar:"someSidebar",previous:{title:"The User and Story Models",permalink:"/docs/tutorials/real-world-example-with-react/3-the-models"},next:{title:"Your First Route",permalink:"/docs/tutorials/real-world-example-with-react/5-our-first-route"}},c=[{value:"The <code>create-user</code> script",id:"the-create-user-script",children:[]},{value:"The <code>create-story</code> script",id:"the-create-story-script",children:[]}],l={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Your models are ready to be used. As in the previous tutorial, you will use shell scripts to feed the database."),Object(o.b)("h2",{id:"the-create-user-script"},"The ",Object(o.b)("inlineCode",{parentName:"h2"},"create-user")," script"),Object(o.b)("p",null,"A script called ",Object(o.b)("inlineCode",{parentName:"p"},"create-user")," already exists in the ",Object(o.b)("inlineCode",{parentName:"p"},"scripts")," directory."),Object(o.b)("p",null,"Open the file and replace its content with the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"// 3p\nimport { hashPassword } from '@foal/core';\nimport { createConnection, getConnection } from 'typeorm';\n\n// App\nimport { User } from '../app/entities';\n\nexport const schema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email', maxLength: 255 },\n    password: { type: 'string' },\n    name: { type: 'string', maxLength: 255 },\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport async function main(args: { email: string, password: string, name?: string }) {\n  const user = new User();\n  user.email = args.email;\n  user.password = await hashPassword(args.password);\n  user.name = args.name ?? 'Unknown';\n  user.avatar = '';\n\n  await createConnection();\n\n  try {\n    console.log(await user.save());\n  } catch (error) {\n    console.log(error.message);\n  } finally {\n    await getConnection().close();\n  }\n}\n\n")),Object(o.b)("p",null,"Some parts of this code should look familiar to you."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"schema")," object is used to validate the arguments typed on the command line. In this case, the script expects two mandatory parameters ",Object(o.b)("inlineCode",{parentName:"p"},"email")," and ",Object(o.b)("inlineCode",{parentName:"p"},"password")," and an optional ",Object(o.b)("inlineCode",{parentName:"p"},"name"),". The ",Object(o.b)("inlineCode",{parentName:"p"},"format")," property checks that the ",Object(o.b)("inlineCode",{parentName:"p"},"email")," string is an email (presence of ",Object(o.b)("inlineCode",{parentName:"p"},"@")," character, etc). "),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"main")," function is called after successful validation. It is divided into several parts. First, it creates a new user with the arguments specified in the command line. Then it establishes a connection to the database and saves the user."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"hashPassword")," function is used to hash and salt passwords before storing them in the database. For security reasons, you should use this function before saving passwords.")),Object(o.b)("p",null,"Build the script."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm run build\n")),Object(o.b)("p",null,"Then create two new users."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'foal run create-user email="john@foalts.org" password="john_password" name="John"\nfoal run create-user email="mary@foalts.org" password="mary_password" name="Mary"\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you try to re-run one of these commands, you'll get the MySQL error below as the email key is unique."),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"ER_DUP_ENTRY: Duplicate entry 'john@foalts.org' for key 'IDX_xxx'"))),Object(o.b)("h2",{id:"the-create-story-script"},"The ",Object(o.b)("inlineCode",{parentName:"h2"},"create-story")," script"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"create-story")," script is a bit more complex as ",Object(o.b)("inlineCode",{parentName:"p"},"Story")," has a many-to-one relation with ",Object(o.b)("inlineCode",{parentName:"p"},"User"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"foal generate script create-story\n")),Object(o.b)("p",null,"Open the ",Object(o.b)("inlineCode",{parentName:"p"},"create-story.ts")," file and replace its content."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { createConnection } from 'typeorm';\nimport { Story, User } from '../app/entities';\n\nexport const schema = {\n  additionalProperties: false,\n  properties: {\n    author: { type: 'string', format: 'email', maxLength: 255 },\n    title: { type: 'string', maxLength: 255 },\n    link: { type: 'string', maxLength: 255 },\n  },\n  required: [ 'author', 'title', 'link' ],\n  type: 'object',\n};\n\nexport async function main(args: { author: string, title: string, link: string }) {\n  const connection = await createConnection();\n\n  const user = await User.findOneOrFail({ email: args.author });\n\n  const story = new Story();\n  story.author = user;\n  story.title = args.title;\n  story.link = args.link;\n\n  try {\n    console.log(await story.save());\n  } catch (error) {\n    console.error(error);\n  } finally {\n    await connection.close();\n  }\n}\n\n")),Object(o.b)("p",null,"We added an ",Object(o.b)("inlineCode",{parentName:"p"},"author")," parameter to know which user posted the story. It expects the user's email."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"main")," function then tries to find the user who has this email. If it exists, the user is added to the story as the author. If it does not, then the script ends with a message displayed in the console."),Object(o.b)("p",null,"Build the script."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm run build\n")),Object(o.b)("p",null,"And create new stories for each user."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'foal run create-story author="john@foalts.org" title="How to build a simple to-do list" link="https://foalts.org/docs/tutorials/simple-todo-list/1-installation"\nfoal run create-story author="mary@foalts.org" title="FoalTS architecture overview" link="https://foalts.org/docs/architecture/architecture-overview"\nfoal run create-story author="mary@foalts.org" title="Authentication with Foal" link="https://foalts.org/docs/authentication-and-access-control/quick-start"\n')))}p.isMDXComponent=!0},288:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(m,i(i({ref:t},l),{},{components:r})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);