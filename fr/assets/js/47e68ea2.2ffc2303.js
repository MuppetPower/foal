"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8023],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return o?n.createElement(h,i(i({ref:t},p),{},{components:o})):n.createElement(h,i({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},6102:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const a={title:"The Shell Script create-todo"},i=void 0,s={unversionedId:"tutorials/mongodb-todo-list/tuto-4-the-shell-script-create-todo",id:"version-1.x/tutorials/mongodb-todo-list/tuto-4-the-shell-script-create-todo",title:"The Shell Script create-todo",description:"Now it is time to populate the database with some tasks.",source:"@site/versioned_docs/version-1.x/tutorials/mongodb-todo-list/tuto-4-the-shell-script-create-todo.md",sourceDirName:"tutorials/mongodb-todo-list",slug:"/tutorials/mongodb-todo-list/tuto-4-the-shell-script-create-todo",permalink:"/fr/docs/1.x/tutorials/mongodb-todo-list/tuto-4-the-shell-script-create-todo",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/tutorials/mongodb-todo-list/tuto-4-the-shell-script-create-todo.md",tags:[],version:"1.x",frontMatter:{title:"The Shell Script create-todo"},sidebar:"someSidebar",previous:{title:"The Todo Model",permalink:"/fr/docs/1.x/tutorials/mongodb-todo-list/tuto-3-the-todo-model"},next:{title:"The REST API",permalink:"/fr/docs/1.x/tutorials/mongodb-todo-list/tuto-5-the-rest-api"}},l={},c=[],p={toc:c};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Now it is time to populate the database with some tasks."),(0,r.kt)("p",null,"You could run the command line interface of your database and enter some MongoDB queries. But this is risky and not very handy. It becomes especially true when the complexity of your models increases."),(0,r.kt)("p",null,"That's why you are going to create and use a ",(0,r.kt)("em",{parentName:"p"},"shell script")," instead."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"foal generate script create-todo\n")),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"shell script")," is a piece of code intended to be called from the command line. It has access to all the components of your application, including your models. A shell script is divided in two parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"schema")," object which defines the specification of the command line arguments,"),(0,r.kt)("li",{parentName:"ul"},"and a ",(0,r.kt)("inlineCode",{parentName:"li"},"main")," function which gets these arguments as an object and executes some code.")),(0,r.kt)("p",null,"Open the new generated file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/scripts")," directory and update its content."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport { Config } from '@foal/core';\nimport { connect, disconnect } from 'mongoose';\n\n// App\nimport { Todo } from '../app/models';\n\nexport const schema = {\n  properties: {\n    text: { type: 'string' }\n  },\n  required: [ 'text' ],\n  type: 'object',\n};\n\nexport async function main(args: { text: string }) {\n  // Create a new connection to the database.\n  const uri = Config.getOrThrow('mongodb.uri', 'string');\n  connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });\n\n  // Create a new task with the text given in the command line.\n  const todo = new Todo();\n  todo.text = args.text;\n\n  try {\n  // Save the task in the database and then display it in the console.\n    console.log(\n      await todo.save()\n    );\n  } catch (error) {\n    console.log(error.message);\n  } finally {\n    // Close the connection to the database.\n    disconnect();\n  }\n}\n\n")),(0,r.kt)("p",null,"Build the script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build:scripts\n")),(0,r.kt)("p",null,"Then run the script to create tasks in the database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'foal run create-todo text="Read the docs"\nfoal run create-todo text="Create my first application"\nfoal run create-todo text="Write tests"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that if you try to create a new to-do without specifying the text argument, you'll get the error below."),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"Error: The command line arguments should have required property 'text'."))))}d.isMDXComponent=!0}}]);