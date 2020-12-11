(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),a=(n(0),n(250)),i={title:"The Shell Script create-todo"},c={unversionedId:"tutorials/mongodb-todo-list/4-the-shell-script-create-todo",id:"version-1.x/tutorials/mongodb-todo-list/4-the-shell-script-create-todo",isDocsHomePage:!1,title:"The Shell Script create-todo",description:"Now it is time to populate the database with some tasks.",source:"@site/versioned_docs/version-1.x/tutorials/mongodb-todo-list/4-the-shell-script-create-todo.md",slug:"/tutorials/mongodb-todo-list/4-the-shell-script-create-todo",permalink:"/foal/docs/1.x/tutorials/mongodb-todo-list/4-the-shell-script-create-todo",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/tutorials/mongodb-todo-list/4-the-shell-script-create-todo.md",version:"1.x",sidebar:"someSidebar",previous:{title:"The Todo Model",permalink:"/foal/docs/1.x/tutorials/mongodb-todo-list/3-the-todo-model"},next:{title:"The REST API",permalink:"/foal/docs/1.x/tutorials/mongodb-todo-list/5-the-rest-api"}},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Now it is time to populate the database with some tasks."),Object(a.b)("p",null,"You could run the command line interface of your database and enter some MongoDB queries. But this is risky and not very handy. It becomes especially true when the complexity of your models increases."),Object(a.b)("p",null,"That's why you are going to create and use a ",Object(a.b)("em",{parentName:"p"},"shell script")," instead."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"foal generate script create-todo\n")),Object(a.b)("p",null,"A ",Object(a.b)("em",{parentName:"p"},"shell script")," is a piece of code intended to be called from the command line. It has access to all the components of your application, including your models. A shell script is divided in two parts:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"a ",Object(a.b)("inlineCode",{parentName:"li"},"schema")," object which defines the specification of the command line arguments,"),Object(a.b)("li",{parentName:"ul"},"and a ",Object(a.b)("inlineCode",{parentName:"li"},"main")," function which gets these arguments as an object and executes some code.")),Object(a.b)("p",null,"Open the new generated file in the ",Object(a.b)("inlineCode",{parentName:"p"},"src/scripts")," directory and update its content."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"// 3p\nimport { Config } from '@foal/core';\nimport { connect, disconnect } from 'mongoose';\n\n// App\nimport { Todo } from '../app/models';\n\nexport const schema = {\n  properties: {\n    text: { type: 'string' }\n  },\n  required: [ 'text' ],\n  type: 'object',\n};\n\nexport async function main(args: { text: string }) {\n  // Create a new connection to the database.\n  const uri = Config.getOrThrow('mongodb.uri', 'string');\n  connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });\n\n  // Create a new task with the text given in the command line.\n  const todo = new Todo();\n  todo.text = args.text;\n\n  try {\n  // Save the task in the database and then display it in the console.\n    console.log(\n      await todo.save()\n    );\n  } catch (error) {\n    console.log(error.message);\n  } finally {\n    // Close the connection to the database.\n    disconnect();\n  }\n}\n\n")),Object(a.b)("p",null,"Build the script."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"npm run build:scripts\n")),Object(a.b)("p",null,"Then run the script to create tasks in the database."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),'foal run create-todo text="Read the docs"\nfoal run create-todo text="Create my first application"\nfoal run create-todo text="Write tests"\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note that if you try to create a new to-do without specifying the text argument, you'll get the error below."),Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("inlineCode",{parentName:"p"},"Error: The command line arguments should have required property 'text'."))))}p.isMDXComponent=!0},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=o,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);