(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(288)),i={title:"Authenticating Users in the API"},c={unversionedId:"tutorials/real-world-example-with-react/9-authenticated-api",id:"tutorials/real-world-example-with-react/9-authenticated-api",isDocsHomePage:!1,title:"Authenticating Users in the API",description:"Now that the login is configured, you can add two new routes to create and delete stories. Their access will be limited to authenticated users.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/9-authenticated-api.md",slug:"/tutorials/real-world-example-with-react/9-authenticated-api",permalink:"/id/docs/tutorials/real-world-example-with-react/9-authenticated-api",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/id/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/9-authenticated-api.md",version:"current",sidebar:"someSidebar",previous:{title:"Logging Users In and Out",permalink:"/id/docs/tutorials/real-world-example-with-react/8-authentication"},next:{title:"Authenticating Users in React",permalink:"/id/docs/tutorials/real-world-example-with-react/10-auth-with-react"}},l=[],s={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Now that the login is configured, you can add two new routes to create and delete stories. Their access will be limited to authenticated users. "),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"API endpoint"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Method"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"/api/stories")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"POST")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Creates a new story.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"/api/stories/:storyId")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"DELETE")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Deletes a new story.")))),Object(o.b)("p",null,"Open the ",Object(o.b)("inlineCode",{parentName:"p"},"stories.controller.ts")," file and add two new methods to the controller."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, Delete, Get, HttpResponseCreated, HttpResponseNoContent, HttpResponseNotFound, HttpResponseOK, Post, UserRequired, ValidateBody, ValidatePathParam, ValidateQueryParam } from '@foal/core';\nimport { Story, User } from '../../entities';\n\nexport class StoriesController {\n\n  // readStories...\n\n  @Post()\n  @ValidateBody({\n    type: 'object',\n    properties: {\n      title: { type: 'string', maxLength: 255 },\n      link: { type: 'string', maxLength: 255 },\n    },\n    required: [ 'title', 'link' ],\n    additionalProperties: false,\n  })\n  @UserRequired()\n  async createStory(ctx: Context) {\n    const story = new Story();\n    story.title = ctx.request.body.title;\n    story.link = ctx.request.body.link;\n    // Set the current user as the author of the story.\n    story.author = ctx.user;\n    await story.save();\n\n    return new HttpResponseCreated();\n  }\n\n  @Delete('/:storyId')\n  @ValidatePathParam('storyId', { type: 'number' })\n  @UserRequired()\n  async deleteStory(ctx: Context<User>, { storyId }: { storyId: number }) {\n    // Only retrieve stories whose author is the current user.\n    const story = await Story.findOne({ id: storyId, author: ctx.user });\n\n    if (!story) {\n      return new HttpResponseNotFound();\n    }\n\n    await story.remove();\n\n    return new HttpResponseNoContent();\n  }\n\n}\n")),Object(o.b)("p",null,"When sending a request to these endpoints, the ",Object(o.b)("inlineCode",{parentName:"p"},"@UserRequired")," hook will return a 401 error if ",Object(o.b)("inlineCode",{parentName:"p"},"ctx.user")," is not defined (i.e. if the user has not logged in first). But if it is, the controller method will be executed."),Object(o.b)("p",null,"Go to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:3001/swagger"}),"http://localhost:3001/swagger")," and check that the controller is working as expected. You can, for example, first try to create a story without being connected and then log in and try again."))}u.isMDXComponent=!0},288:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);