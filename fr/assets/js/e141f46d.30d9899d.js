"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6141],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(o),h=r,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||s;return o?n.createElement(m,a(a({ref:t},p),{},{components:o})):n.createElement(m,a({ref:t},p))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,a=new Array(s);a[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<s;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},3239:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=o(7462),r=(o(7294),o(3905));const s={title:"Todos & Ownership"},a=void 0,i={unversionedId:"tutorials/multi-user-todo-list/tuto-6-todos-and-ownership",id:"version-1.x/tutorials/multi-user-todo-list/tuto-6-todos-and-ownership",title:"Todos & Ownership",description:"Currently the API returns everyone's todos to each user. This is not the expected behavior. We would like that each user has access to only his or her tasks.",source:"@site/versioned_docs/version-1.x/tutorials/multi-user-todo-list/tuto-6-todos-and-ownership.md",sourceDirName:"tutorials/multi-user-todo-list",slug:"/tutorials/multi-user-todo-list/tuto-6-todos-and-ownership",permalink:"/fr/docs/1.x/tutorials/multi-user-todo-list/tuto-6-todos-and-ownership",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/tutorials/multi-user-todo-list/tuto-6-todos-and-ownership.md",tags:[],version:"1.x",frontMatter:{title:"Todos & Ownership"},sidebar:"someSidebar",previous:{title:"Auth Controllers and Hooks",permalink:"/fr/docs/1.x/tutorials/multi-user-todo-list/tuto-5-auth-controllers-and-hooks"},next:{title:"The Sign Up Page",permalink:"/fr/docs/1.x/tutorials/multi-user-todo-list/tuto-7-the-signup-page"}},l={},u=[],p={toc:u};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Currently the API returns everyone's todos to each user. This is not the expected behavior. We would like that each user has access to only his or her tasks."),(0,r.kt)("p",null,"Go back to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ApiController")," and update the ",(0,r.kt)("inlineCode",{parentName:"p"},"getTodos")," route."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"  @Get('/todos')\n  async getTodos(ctx: Context) {\n    const todos = await getRepository(Todo).find({ owner: ctx.user });\n    return new HttpResponseOK(todos);\n  }\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Context")," object contains four properties:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"the express ",(0,r.kt)("a",{parentName:"li",href:"https://expressjs.com/en/4x/api.html#req"},"request object"),","),(0,r.kt)("li",{parentName:"ul"},"an empty object called ",(0,r.kt)("inlineCode",{parentName:"li"},"state")," which can be used to share data between hooks, "),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"session")," object,"),(0,r.kt)("li",{parentName:"ul"},"and the ",(0,r.kt)("inlineCode",{parentName:"li"},"user")," object that is defined if a user logged in."))),(0,r.kt)("p",null,"Refresh the todo-list page. You should only see the todos of the user with whom you logged in."),(0,r.kt)("p",null,"Yet, if you try to create a new to-do, it will disappear upon page refresh. This is perfectly normal since we do not specify its owner upon creation."),(0,r.kt)("p",null,"As for the delete feature, you also need to restrict its access. Users should only be able to delete their todos."),(0,r.kt)("p",null,"Update the api controller."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"  @Post('/todos')\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      text: { type: 'string' }\n    },\n    required: [ 'text' ],\n    type: 'object',\n  })\n  async postTodo(ctx: Context) {\n    const todo = new Todo();\n    todo.text = ctx.request.body.text;\n    // Make the current user the owner of the todo.\n    todo.owner = ctx.user;\n\n    await getRepository(Todo).save(todo);\n\n    return new HttpResponseCreated(todo);\n  }\n\n  @Delete('/todos/:id')\n  @ValidatePathParam('id', { type: 'number' })\n  async deleteTodo(ctx: Context) {\n    const todo = await getRepository(Todo).findOne({\n      id: +ctx.request.params.id,\n      // Do not return the todo if it does not belong to the current user.\n      owner: ctx.user\n    });\n    if (!todo) {\n      return new HttpResponseNotFound();\n    }\n    await getRepository(Todo).remove(todo);\n    return new HttpResponseNoContent();\n  }\n")),(0,r.kt)("p",null,"The application is now working properly."))}d.isMDXComponent=!0}}]);