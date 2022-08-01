"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6989],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>f});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},s=Object.keys(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=o.createContext({}),p=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=p(t.components);return o.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,s=t.originalType,l=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=p(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||s;return n?o.createElement(m,a(a({ref:e},u),{},{components:n})):o.createElement(m,a({ref:e},u))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:r,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9362:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const s={title:"Unit Testing"},a=void 0,i={unversionedId:"tutorials/mongodb-todo-list/tuto-7-unit-testing",id:"version-1.x/tutorials/mongodb-todo-list/tuto-7-unit-testing",title:"Unit Testing",description:"The last step of this tutorial is to add some unit tests to the ApiController.",source:"@site/versioned_docs/version-1.x/tutorials/mongodb-todo-list/tuto-7-unit-testing.md",sourceDirName:"tutorials/mongodb-todo-list",slug:"/tutorials/mongodb-todo-list/tuto-7-unit-testing",permalink:"/es/docs/1.x/tutorials/mongodb-todo-list/tuto-7-unit-testing",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/tutorials/mongodb-todo-list/tuto-7-unit-testing.md",tags:[],version:"1.x",frontMatter:{title:"Unit Testing"},sidebar:"someSidebar",previous:{title:"Validation and Sanitization",permalink:"/es/docs/1.x/tutorials/mongodb-todo-list/tuto-6-validation-and-sanitization"},next:{title:"Architecture Overview",permalink:"/es/docs/1.x/architecture/architecture-overview"}},l={},p=[],u={toc:p};function c(t){let{components:e,...s}=t;return(0,r.kt)("wrapper",(0,o.Z)({},u,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The last step of this tutorial is to add some unit tests to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ApiController"),"."),(0,r.kt)("p",null,"A unit test file ends with the ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.ts")," extension and is usually placed next to the file it is testing."),(0,r.kt)("p",null,"Create a new file ",(0,r.kt)("inlineCode",{parentName:"p"},"config/test.json")," to set the database uri."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "mongodb": {\n    "uri": "mongodb://localhost:27017/test-my-app"\n  }\n}\n')),(0,r.kt)("p",null,"Then open the file ",(0,r.kt)("inlineCode",{parentName:"p"},"api.controller.spec.ts")," and replace its content."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// std\n// The `assert` module provides a simple set of assertion tests.\nimport { ok, strictEqual } from 'assert';\n\n// 3p\nimport { Config, createController, getHttpMethod, getPath, isHttpResponseOK } from '@foal/core';\nimport { connect, disconnect } from 'mongoose';\n\n// App\nimport { Todo } from '../models';\nimport { ApiController } from './api.controller';\n\n// Define a group of tests.\ndescribe('ApiController', () => {\n\n  let controller: ApiController;\n\n  // Create a connection to the database before running all the tests.\n  before(async () => {\n    const uri = Config.getOrThrow('mongodb.uri', 'string');\n    connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });\n\n    await Todo.deleteMany({});\n  });\n\n  // Close the database connection after running all the tests whether they succeed or failed.\n  after(() => disconnect());\n\n  // Create or re-create the controller before each test.\n  beforeEach(() => controller = createController(ApiController));\n\n  // Define a nested group of tests.\n  describe('has a \"getTodos\" method that', () => {\n\n    // Define a unit test.\n    it('should handle requests at GET /.', () => {\n      // Throw an error and make the test fail if the http method of `getTodos` is not GET.\n      strictEqual(getHttpMethod(ApiController, 'getTodos'), 'GET');\n      // Throw an error and make the test fail if the path of `getTodos` is not /todos.\n      strictEqual(getPath(ApiController, 'getTodos'), '/todos');\n    });\n\n    // Define a unit test.\n    it('should return an HttpResponseOK.', async () => {\n      // Create fake todos.\n      const todo1 = new Todo();\n      todo1.text = 'Todo 1';\n\n      const todo2 = new Todo();\n      todo2.text = 'Todo 2';\n\n      // Save the todos.\n      await Promise.all([\n        todo1.save(),\n        todo2.save()\n      ]);\n\n      const response = await controller.getTodos();\n      ok(isHttpResponseOK(response), 'response should be an instance of HttpResponseOK.');\n\n      const body = response.body;\n\n      ok(Array.isArray(body), 'The body of the response should be an array.');\n      strictEqual(body[0].text, 'Todo 1');\n      strictEqual(body[1].text, 'Todo 2');\n    });\n\n  });\n\n});\n\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"As a controller method returns an ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpResponse")," object, it is really easy to test the status and body of the response.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the controller method takes a ",(0,r.kt)("inlineCode",{parentName:"p"},"Context")," object as argument, you can instantiate one like this: ",(0,r.kt)("inlineCode",{parentName:"p"},"new Context({ /* content of the express request object */})"),".")),(0,r.kt)("p",null,"Run the tests."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run test\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This command watches at your tests and tested files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"app/")," directory. When a file is modified, it automatically recompiles and re-runs your tests.")),(0,r.kt)("p",null,"You should now end up with this output:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Unit tests output",src:n(99).Z,width:"1240",height:"444"})),(0,r.kt)("p",null,"Congratulations! You have reached the end of this tutorial!"),(0,r.kt)("p",null,"If you have any questions, feel free to open an issue on Github!"))}c.isMDXComponent=!0},99:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/unit-tests-output-92ff8a147084006f7e318c124a0f053e.png"}}]);