(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{229:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return i})),o.d(t,"rightToc",(function(){return l})),o.d(t,"default",(function(){return c}));var n=o(3),r=o(7),a=(o(0),o(250)),s={title:"The REST API"},i={unversionedId:"tutorials/simple-todo-list/5-the-rest-api",id:"version-1.x/tutorials/simple-todo-list/5-the-rest-api",isDocsHomePage:!1,title:"The REST API",description:"Good, so far you have a frontend working properly and some todos in your database. Now it is time to code a REST API to link them both.",source:"@site/versioned_docs/version-1.x/tutorials/simple-todo-list/5-the-rest-api.md",slug:"/tutorials/simple-todo-list/5-the-rest-api",permalink:"/foal/docs/1.x/tutorials/simple-todo-list/5-the-rest-api",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/tutorials/simple-todo-list/5-the-rest-api.md",version:"1.x",sidebar:"someSidebar",previous:{title:"The Shell Script create-todo",permalink:"/foal/docs/1.x/tutorials/simple-todo-list/4-the-shell-script-create-todo"},next:{title:"Validation & Sanitization",permalink:"/foal/docs/1.x/tutorials/simple-todo-list/6-validation-and-sanitization"}},l=[],p={rightToc:l};function c(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Good, so far you have a frontend working properly and some todos in your database. Now it is time to code a REST API to link them both."),Object(a.b)("p",null,"To do so, you are going to use a ",Object(a.b)("em",{parentName:"p"},"controller"),". Controllers receive the HTTP requests and process them. They may call ",Object(a.b)("em",{parentName:"p"},"services")," in the background to help them do this. We will not study the services in this tutorial."),Object(a.b)("p",null,"Open the file ",Object(a.b)("inlineCode",{parentName:"p"},"api.controller.ts")," in the ",Object(a.b)("inlineCode",{parentName:"p"},"src/app/controllers/")," directory and replace its content."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Get, HttpResponseOK } from '@foal/core';\n\nexport class ApiController {\n\n  @Get('/todos')\n  getTodos() {\n    const todos = [\n      { id: 1, text: 'My task 1' },\n      { id: 2, text: 'My task 2' }\n    ];\n    return new HttpResponseOK(todos);\n  }\n\n}\n")),Object(a.b)("p",null,"Controllers have special methods that define the routes and their respective handlers. These functions are decorated by one of the decorators ",Object(a.b)("inlineCode",{parentName:"p"},"Get"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Post"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Patch"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Put")," or ",Object(a.b)("inlineCode",{parentName:"p"},"Delete")," which define the http method and the path of the route."),Object(a.b)("p",null,"In this case the controller responds with a 200 status and a mock data (the two fake todos)."),Object(a.b)("p",null,"Refresh your browser, you should see the two todos printed."),Object(a.b)("p",null,"Now, we would like to return the todos stored in the database. Update the code as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import {\n  Context, Delete, Get, HttpResponseCreated, HttpResponseNoContent,\n  HttpResponseNotFound, HttpResponseOK, Post\n} from '@foal/core';\nimport { getRepository } from 'typeorm';\n\nimport { Todo } from '../entities';\n\nexport class ApiController {\n\n  @Get('/todos')\n  async getTodos() {\n    const todos = await getRepository(Todo).find();\n    return new HttpResponseOK(todos);\n  }\n\n}\n")),Object(a.b)("p",null,"If you refresh your browser, you should now see the tasks that we created through the command line."),Object(a.b)("p",null,"Add the create and delete features."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"  @Post('/todos')\n  async postTodo(ctx: Context) {\n    // Create a new todo with the body of the HTTP request.\n    const todo = new Todo();\n    todo.text = ctx.request.body.text;\n\n    // Save the todo in the database.\n    await getRepository(Todo).save(todo);\n\n    // Return the new todo with the id generated by the database. The status is 201.\n    return new HttpResponseCreated(todo);\n  }\n\n  @Delete('/todos/:id')\n  async deleteTodo(ctx: Context) {\n    // Get the todo with the id given in the URL if it exists.\n    const todo = await getRepository(Todo).findOne({ id: +ctx.request.params.id });\n\n    // Return a 404 Not Found response if no such todo exists.\n    if (!todo) {\n      return new HttpResponseNotFound();\n    }\n\n    // Remove the todo from the database.\n    await getRepository(Todo).remove(todo);\n\n    // Returns an successful empty response. The status is 204.\n    return new HttpResponseNoContent();\n  }\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Context")," object, which is passed to each route handler, contains the express ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://expressjs.com/en/4x/api.html#req"}),"request object"),". This represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on."),Object(a.b)("p",null,"Now type a new todo in the input text and press Enter. The task appears in the todo list. Refresh the page, it should still be there. If you click on the checkbox, the todo is successfully deleted."),Object(a.b)("p",null,"The last thing to know is how the ",Object(a.b)("inlineCode",{parentName:"p"},"ApiController")," is bound to the request handler. You defined so far routes in this controller but never registered the controller anywhere. This is done in the ",Object(a.b)("inlineCode",{parentName:"p"},"app.controller.ts")," file, the entry point of your application."),Object(a.b)("p",null,"Open the file ",Object(a.b)("inlineCode",{parentName:"p"},"app.controller.ts")," in ",Object(a.b)("inlineCode",{parentName:"p"},"src/app"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { controller } from '@foal/core';\n\nimport { ApiController } from './controllers';\n\nexport class AppController {\n  subControllers = [\n    controller('/api', ApiController)\n  ];\n}\n")),Object(a.b)("p",null,"This controller is the main controller of the application. It is directly called when a request comes in. It may have sub-controllers that go in the ",Object(a.b)("inlineCode",{parentName:"p"},"controllers/")," directory."))}c.isMDXComponent=!0},250:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return b}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(o),h=n,b=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return o?r.a.createElement(b,i(i({ref:t},p),{},{components:o})):r.a.createElement(b,i({ref:t},p))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<a;p++)s[p]=o[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,o)}h.displayName="MDXCreateElement"}}]);