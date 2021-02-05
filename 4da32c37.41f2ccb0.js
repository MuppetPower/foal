(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(257)),i={title:"Create and Run Scripts",sidebar_label:"Create & Run Scripts"},c={unversionedId:"development-environment/create-and-run-scripts",id:"development-environment/create-and-run-scripts",isDocsHomePage:!1,title:"Create and Run Scripts",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/docs/development-environment/create-and-run-scripts.md",slug:"/development-environment/create-and-run-scripts",permalink:"/docs/development-environment/create-and-run-scripts",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/development-environment/create-and-run-scripts.md",version:"current",sidebar_label:"Create & Run Scripts",sidebar:"someSidebar",previous:{title:"Build and Start the App",permalink:"/docs/development-environment/build-and-start-the-app"},next:{title:"Code Generation",permalink:"/docs/development-environment/code-generation"}},s=[{value:"Create Scripts",id:"create-scripts",children:[]},{value:"Write Scripts",id:"write-scripts",children:[]},{value:"Build and Run Scripts",id:"build-and-run-scripts",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/FoalTS/foal/tree/v1.x/docs"}),"here"),".")),Object(o.b)("p",null,"Sometimes we have to execute some tasks from the command line. These tasks can serve different purposes such as populating a database (user creation, etc) for instance. They often need to access some of the app classes and functions. This is when shell scripts come into play."),Object(o.b)("h2",{id:"create-scripts"},"Create Scripts"),Object(o.b)("p",null,"A shell script is just a TypeScript file located in the ",Object(o.b)("inlineCode",{parentName:"p"},"src/scripts"),". It must export a ",Object(o.b)("inlineCode",{parentName:"p"},"main")," function that is then called when running the script."),Object(o.b)("p",null,"Let's create a new one with the command line: ",Object(o.b)("inlineCode",{parentName:"p"},"foal g script display-users"),". A new file with a default template should appear in you ",Object(o.b)("inlineCode",{parentName:"p"},"src/scripts")," directory."),Object(o.b)("h2",{id:"write-scripts"},"Write Scripts"),Object(o.b)("p",null,"Remove the content of ",Object(o.b)("inlineCode",{parentName:"p"},"src/scripts/display-users.ts")," and replace it with the below code."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// 3p\nimport { createService } from '@foal/core';\nimport { createConnection } from 'typeorm';\n\n// App\nimport { User } from '../app/entities';\nimport { Logger } from '../app/services';\n\nexport async function main() {\n  const connection = await createConnection();\n  try {\n    const users = await connection.getRepository(User).find();\n    const logger = createService(Logger);\n    logger.log(users);\n  } finally {\n    connection.close();\n  }\n}\n\n")),Object(o.b)("p",null,"As you can see, we can easily establish a connection to the database in the script as well as import some of the app components (the ",Object(o.b)("inlineCode",{parentName:"p"},"User")," in this case)."),Object(o.b)("p",null,"Encapsulating your code in a ",Object(o.b)("inlineCode",{parentName:"p"},"main")," function without calling it directly in the file has several benefits:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You can import and test your ",Object(o.b)("inlineCode",{parentName:"li"},"main")," function in a separate file."),Object(o.b)("li",{parentName:"ul"},"Using a function lets you easily use async/await keywords when dealing with asynchronous code.")),Object(o.b)("h2",{id:"build-and-run-scripts"},"Build and Run Scripts"),Object(o.b)("p",null,"To run a script you first need to build it."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm run build\n")),Object(o.b)("p",null,"Then you can execute it with this command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"foal run my-script # or foal run-script my-script\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can also provide additionnal arguments to your script (for example: ",Object(o.b)("inlineCode",{parentName:"p"},"foal run my-script foo=1 bar='[ 3, 4 ]'"),"). The default template in the generated scripts shows you how to handle such behavior.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you want your script to recompile each time you save the file, you can run ",Object(o.b)("inlineCode",{parentName:"p"},"npm run develop")," in a separate terminal.")))}l.isMDXComponent=!0},257:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);