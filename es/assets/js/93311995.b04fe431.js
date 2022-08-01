"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1448],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6010),i=n(2389),o=n(7392),s=n(7094),p=n(2466);const u="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,n;const{lazy:i,block:c,defaultValue:m,values:h,groupId:v,className:g}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,o.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?t:k[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,s.U)(),[T,x]=(0,r.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=v){const e=N[v];null!=e&&e!==T&&b.some((t=>t.value===e))&&x(e)}const I=e=>{const t=e.currentTarget,n=C.indexOf(t),a=b[n].value;a!==T&&(E(t),x(a),null!=v&&w(v,String(a)))},P=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=C.indexOf(e.currentTarget)+1;n=null!=(a=C[t])?a:C[0];break}case"ArrowLeft":{var r;const t=C.indexOf(e.currentTarget)-1;n=null!=(r=C[t])?r:C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},g)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>C.push(e),onKeyDown:P,onFocus:I,onClick:I},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(k.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},9956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),i=n(5162);const o={title:"What's new in version 2 (part 1/4)",author:"Lo\xefc Poullain",author_title:"Fullstack developer and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/whats-new-in-version-2-part-1.png",tags:["release"]},s=void 0,p={permalink:"/es/blog/2021/02/17/whats-new-in-version-2-part-1",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2021-02-17-whats-new-in-version-2-part-1.md",source:"@site/blog/2021-02-17-whats-new-in-version-2-part-1.md",title:"What's new in version 2 (part 1/4)",description:"Banner",date:"2021-02-17T00:00:00.000Z",formattedDate:"17 de febrero de 2021",tags:[{label:"release",permalink:"/es/blog/tags/release"}],readingTime:4.69,hasTruncateMarker:!0,authors:[{name:"Lo\xefc Poullain",title:"Fullstack developer and creator of FoalTS",url:"https://github.com/LoicPoullain",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"What's new in version 2 (part 1/4)",author:"Lo\xefc Poullain",author_title:"Fullstack developer and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/whats-new-in-version-2-part-1.png",tags:["release"]},prevItem:{title:"Version 2.2 release notes",permalink:"/es/blog/2021/02/25/version-2.2-release-notes"},nextItem:{title:"Version 2.1 release notes",permalink:"/es/blog/2021/02/03/version-2.1-release-notes"}},u={authorsImageUrls:[void 0]},d=[{value:"New CLI commands",id:"new-cli-commands",level:2},{value:"Generating migrations",id:"generating-migrations",level:3},{value:"Running migrations",id:"running-migrations",level:3},{value:"Build and run scripts in watch mode (development)",id:"build-and-run-scripts-in-watch-mode-development",level:3},{value:"Revert one migration",id:"revert-one-migration",level:3},{value:"Build migrations, scripts and the app",id:"build-migrations-scripts-and-the-app",level:3},{value:"Service and Application Initialization",id:"service-and-application-initialization",level:2},{value:"The <code>AppController</code> interface",id:"the-appcontroller-interface",level:2},{value:"Custom Error-Handling &amp; Hook Post Functions",id:"custom-error-handling--hook-post-functions",level:2},{value:"Accessing File Metadata during Uploads",id:"accessing-file-metadata-during-uploads",level:2}],c={toc:d};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Banner",src:n(7190).Z,width:"914",height:"315"})),(0,r.kt)("p",null,"This article presents some improvements introduced in version 2 of FoalTS:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the new CLI commands"),(0,r.kt)("li",{parentName:"ul"},"the service and application initialization"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"AppController")," interface"),(0,r.kt)("li",{parentName:"ul"},"custom error-handling & hook post functions"),(0,r.kt)("li",{parentName:"ul"},"accessing file metadata during uploads")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This article is the part 1 of the series of articles ",(0,r.kt)("em",{parentName:"p"},"What's new in version 2.0"),". Part 2 can be found ",(0,r.kt)("a",{parentName:"p",href:"/es/blog/2021/03/02/whats-new-in-version-2-part-2"},"here"),".")),(0,r.kt)("h2",{id:"new-cli-commands"},"New CLI commands"),(0,r.kt)("p",null,"In version 1, there were many commands to use, and this, in a specific order. Running and generating migrations from model changes required four commands and building the whole application needed three."),(0,r.kt)("p",null,"In version 2, the number of CLI commands has been reduced and they have been simplified so that one action matches one command."),(0,r.kt)("h3",{id:"generating-migrations"},"Generating migrations"),(0,r.kt)("p",null,"This command generates migrations by comparing the current database schema and the latest changes in your models."),(0,r.kt)(l.Z,{defaultValue:"v2",values:[{label:"Version 2",value:"v2"},{label:"Version 1",value:"v1"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"v2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run makemigrations\n"))),(0,r.kt)(i.Z,{value:"v1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build:app\nnpm run migration:generate -- -n my_migration\n")))),(0,r.kt)("h3",{id:"running-migrations"},"Running migrations"),(0,r.kt)("p",null,"This command builds and runs all migrations."),(0,r.kt)(l.Z,{defaultValue:"v2",values:[{label:"Version 2",value:"v2"},{label:"Version 1",value:"v1"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"v2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run migrations\n"))),(0,r.kt)(i.Z,{value:"v1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build:migrations\nnpm run migration:run\n")))),(0,r.kt)("h3",{id:"build-and-run-scripts-in-watch-mode-development"},"Build and run scripts in watch mode (development)"),(0,r.kt)("p",null,"If you want to re-build your scripts each time a file is change, you can execute ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run develop")," in a separate terminal."),(0,r.kt)(l.Z,{defaultValue:"v2",values:[{label:"Version 2",value:"v2"},{label:"Version 1",value:"v1"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"v2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# In one terminal:\nnpm run develop\n\n# In another terminal:\nfoal run my-script\n"))),(0,r.kt)(i.Z,{value:"v1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# In one terminal:\nnpm run build:scripts:w\n\n# In another terminal:\nfoal run my-script\n")))),(0,r.kt)("h3",{id:"revert-one-migration"},"Revert one migration"),(0,r.kt)("p",null,"This command reverts the last executed migration."),(0,r.kt)(l.Z,{defaultValue:"v2",values:[{label:"Version 2",value:"v2"},{label:"Version 1",value:"v1"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"v2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run revertmigration\n"))),(0,r.kt)(i.Z,{value:"v1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run migration:revert\n")))),(0,r.kt)("h3",{id:"build-migrations-scripts-and-the-app"},"Build migrations, scripts and the app"),(0,r.kt)("p",null,"This command builds the application, the scripts and the migrations. Unit and e2e tests are not included."),(0,r.kt)(l.Z,{defaultValue:"v2",values:[{label:"Version 2",value:"v2"},{label:"Version 1",value:"v1"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"v2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n"))),(0,r.kt)(i.Z,{value:"v1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build:app\nnpm run build:scripts\nnpm run build:migrations\n")))),(0,r.kt)("h2",{id:"service-and-application-initialization"},"Service and Application Initialization"),(0,r.kt)("p",null,"In version 1, it was possible to add an ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," method to the ",(0,r.kt)("inlineCode",{parentName:"p"},"AppController")," class and ",(0,r.kt)("inlineCode",{parentName:"p"},"boot")," methods in the services to initialize the application. These features needed special options in order to be activated."),(0,r.kt)("p",null,"Starting from version 2, they are enabled by default."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AppController {\n  // ...\n\n  init() {\n    // Execute some code.\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class MyService {\n  // ...\n\n  boot() {\n    // Execute some code.\n  }\n}\n")),(0,r.kt)("h2",{id:"the-appcontroller-interface"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"AppController")," interface"),(0,r.kt)("p",null,"This optional interface allows you to check that the ",(0,r.kt)("inlineCode",{parentName:"p"},"subControllers")," property has the correct type as well as the ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"handleError")," methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AppController implements IAppController {\n  subControllers = [\n    controller('/api', ApiController)\n  ];\n\n  init() {\n    // ...\n  }\n\n  handleError(error, ctx) {\n    // ...\n  }\n}\n")),(0,r.kt)("h2",{id:"custom-error-handling--hook-post-functions"},"Custom Error-Handling & Hook Post Functions"),(0,r.kt)("p",null,"In version 1, when an error was thrown or rejected in a hook or a controller method, the remaining hook post functions were not executed."),(0,r.kt)("p",null,"Starting from version 2, the error is directly converted to an ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpResponseInternalServerError")," and passed to the next post hook functions."),(0,r.kt)("p",null,"This can be useful in case we want to use exceptions as HTTP responses without breaking the hook post functions."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class PermissionError extends Error {}\n\nclass UserService {\n\n  async listUsers(applicant: User): Promise<User[]> {\n    if (!ctx.user.isAdmin) {\n      // Use exception here.\n      throw new PermissionError();\n    }\n\n    return User.find({ org: user.org });\n  }\n\n}\n\n// This hook measures the execution time and the controller method and hooks.\n@Hook(() => {\n  const time = process.hrtime();\n\n  // This post function will still be executed\n  // even if an error is thrown in listUsers.\n  return () => {\n    const seconds = process.hrtime(time)[0];\n    console.log(`Executed in ${seconds} seconds`);\n  };\n})\nexport class AppController {\n\n  @dependency\n  users: UserService;\n\n  @Get('/users')\n  @UseSessions({ user: fetchUser(User) })\n  @UserRequired()\n  listUsers(ctx: Context<User>) {\n    return new HttpResponseOK(\n      await users.listUsers(ctx.user)\n    );\n  }\n\n  handleError(error: Error, ctx: Context) {\n    // Converts the exception to an HTTP response.\n    // The error can have been thrown in a service used by the controller.\n    if (error instanceof PermissionError) {\n      return new HttpResponseForbidden();\n    }\n\n    // Returns an HttpResponseInternalServerError.\n    return renderError(error, response);\n  }\n}\n")),(0,r.kt)("h2",{id:"accessing-file-metadata-during-uploads"},"Accessing File Metadata during Uploads"),(0,r.kt)("p",null,"When using the ",(0,r.kt)("inlineCode",{parentName:"p"},"@ValidateMultipartFormDataBody")," hook to handle file upload, it is now possible to access the file metadata."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class UserController {\n\n  @Post('/profile')\n  @ValidateMultipartFormDataBody({\n    files: {\n      profile: { required: true },\n    }\n  })\n  uploadProfilePhoto(ctx: Context) {\n    const file = ctx.request.body.files.profile;\n    // file.mimeType, file.buffer\n  }\n\n}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"encoding")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Encoding type of the file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"filename")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string\\|undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the file on the user's computer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mimeType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Mime type of the file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Path where the file has been saved. If the ",(0,r.kt)("inlineCode",{parentName:"td"},"saveTo")," option was not provided, the value is an empty string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"buffer")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Buffer")),(0,r.kt)("td",{parentName:"tr",align:null},"Buffer containing the entire file. If the ",(0,r.kt)("inlineCode",{parentName:"td"},"saveTo")," option was provided, the value is an empty buffer.")))))}m.isMDXComponent=!0},7190:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/banner-1062d67acd6a063e9c6cc005928e2062.png"}}]);