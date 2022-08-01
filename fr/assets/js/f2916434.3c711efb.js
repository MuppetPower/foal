"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5935],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=o.createContext({}),l=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=l(t.components);return o.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),u=l(n),m=a,y=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?o.createElement(y,i(i({ref:e},p),{},{components:n})):o.createElement(y,i({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=u;var d={};for(var s in e)hasOwnProperty.call(e,s)&&(d[s]=e[s]);d.originalType=t,d.mdxType="string"==typeof t?t:a,i[1]=d;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3806:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const r={title:"Validation and Sanitization"},i=void 0,d={unversionedId:"tutorials/mongodb-todo-list/tuto-6-validation-and-sanitization",id:"version-1.x/tutorials/mongodb-todo-list/tuto-6-validation-and-sanitization",title:"Validation and Sanitization",description:"Currently inputs received by the server are not checked. Everyone could send anything when requesting POST /api/todos. That's why client inputs cannot be trusted.",source:"@site/versioned_docs/version-1.x/tutorials/mongodb-todo-list/tuto-6-validation-and-sanitization.md",sourceDirName:"tutorials/mongodb-todo-list",slug:"/tutorials/mongodb-todo-list/tuto-6-validation-and-sanitization",permalink:"/fr/docs/1.x/tutorials/mongodb-todo-list/tuto-6-validation-and-sanitization",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/tutorials/mongodb-todo-list/tuto-6-validation-and-sanitization.md",tags:[],version:"1.x",frontMatter:{title:"Validation and Sanitization"},sidebar:"someSidebar",previous:{title:"The REST API",permalink:"/fr/docs/1.x/tutorials/mongodb-todo-list/tuto-5-the-rest-api"},next:{title:"Unit Testing",permalink:"/fr/docs/1.x/tutorials/mongodb-todo-list/tuto-7-unit-testing"}},s={},l=[],p={toc:l};function c(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Currently inputs received by the server are not checked. Everyone could send anything when requesting ",(0,a.kt)("inlineCode",{parentName:"p"},"POST /api/todos"),". That's why client inputs cannot be trusted."),(0,a.kt)("p",null,"You will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"\x1cValidateBody")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidatePathParam")," hooks to validate and sanitize incoming data."),(0,a.kt)("p",null,"A ",(0,a.kt)("em",{parentName:"p"},"hook")," is a decorator that is attached to a route handler (a controller method). It is executed before the method and is therefore particularly suitable for validation or access control."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidateBody")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidatePathParam")," check respectively the ",(0,a.kt)("inlineCode",{parentName:"p"},"body")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"params")," properties of the request object. They take a schema as unique argument."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"FoalTS uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/epoberezkin/ajv"},"Ajv"),", a fast JSON Schema validator, to define its schemas.")),(0,a.kt)("p",null,"Let's add validation and sanitization to your application. In fact, you have already defined the todo schema in the ",(0,a.kt)("inlineCode",{parentName:"p"},"create-todo")," script earlier."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  ...\n  ValidateBody, ValidatePathParam\n} from '@foal/core';\n\nexport class ApiController {\n\n  ...\n\n  @Post('/todos')\n  @ValidateBody({\n    // The body request should be an object once parsed by the framework.\n    // Every additional properties that are not defined in the \"properties\"\n    // object should be removed.\n    additionalProperties: false,\n    properties: {\n      // The \"text\" property of ctx.request.body should be a string if it exists.\n      text: { type: 'string' }\n    },\n    // The property \"text\" is required.\n    required: [ 'text' ],\n    type: 'object',\n  })\n  async postTodo(ctx: Context) {\n    const todo = new Todo();\n    todo.text = ctx.request.body.text;\n\n    await todo.save();\n\n    return new HttpResponseCreated(todo);\n  }\n\n  @Delete('/todos/:id')\n  // The id should be a string. If it is not, the hook returns a \"400 - Bad Request\" error.\n  @ValidatePathParam('id', { type: 'string' })\n  async deleteTodo(ctx: Context) {\n    const todo = await Todo.findById(ctx.request.params.id);\n    if (!todo) {\n      return new HttpResponseNotFound();\n    }\n    await Todo.findByIdAndDelete(ctx.request.params.id);\n    return new HttpResponseNoContent();\n  }\n\n}\n\n")))}c.isMDXComponent=!0}}]);