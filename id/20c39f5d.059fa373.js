(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{107:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(288)),o={title:"Image Upload and Download"},l={unversionedId:"tutorials/real-world-example-with-react/12-file-upload",id:"tutorials/real-world-example-with-react/12-file-upload",isDocsHomePage:!1,title:"Image Upload and Download",description:"The next step in this tutorial is to allow users to upload a profile picture. This image will be displayed on the homepage in front of each author's story.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/12-file-upload.md",slug:"/tutorials/real-world-example-with-react/12-file-upload",permalink:"/id/docs/tutorials/real-world-example-with-react/12-file-upload",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/id/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/12-file-upload.md",version:"current",sidebar:"someSidebar",previous:{title:"Adding Sign Up",permalink:"/id/docs/tutorials/real-world-example-with-react/11-sign-up"},next:{title:"CSRF Protection",permalink:"/id/docs/tutorials/real-world-example-with-react/13-csrf"}},c=[{value:"Server Side",id:"server-side",children:[]},{value:"Client Side",id:"client-side",children:[]}],s={toc:c};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The next step in this tutorial is to allow users to upload a profile picture. This image will be displayed on the homepage in front of each author's story."),Object(i.b)("p",null,"To do this, you will use Foal's storage system. It allows you to validate and save the files uploaded by the client. These files can be saved to your local drive or in the cloud using AWS S3. We won't use the cloud feature in this tutorial, but you can find out how to configure it ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/id/docs/file-system/local-and-cloud-storage"}),"here"),"."),Object(i.b)("h2",{id:"server-side"},"Server Side"),Object(i.b)("p",null,"First, install the package. "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install @foal/storage\n")),Object(i.b)("p",null,"Update the configuration in ",Object(i.b)("inlineCode",{parentName:"p"},"config/default.json")," to specify the location of files that the disk manager can access."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "port": "env(PORT)",\n  "settings": {\n    ...\n    "disk": {\n      "local": {\n        "directory": "assets"\n      }\n    }\n  },\n  ...\n}\n')),Object(i.b)("p",null,"Then create the directory ",Object(i.b)("inlineCode",{parentName:"p"},"assets/images/profiles/uploaded")," where the profile images will be uploaded. Download the default profile image ",Object(i.b)("a",{target:"_blank",href:a(368).default},"here")," and place it in the ",Object(i.b)("inlineCode",{parentName:"p"},"assets/images/profiles")," folder with the name ",Object(i.b)("inlineCode",{parentName:"p"},"default.png"),"."),Object(i.b)("p",null,"You are ready to create the controller. Generate a new one."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"foal generate controller api/profile --register\n")),Object(i.b)("p",null,"Open the new file and add two new routes."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"API endpoint"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"/api/profile/avatar")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"GET")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Retrieves the user's profile image. If the optional query parameter ",Object(i.b)("inlineCode",{parentName:"td"},"userId")," is provided, the server returns the avatar of that user. Otherwise, it returns the avatar of the current user. If no user is authenticated or has no profile picture, a default image is returned.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"/api/profile")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"POST")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Updates the user profile. A ",Object(i.b)("inlineCode",{parentName:"td"},"name")," field and an optional ",Object(i.b)("inlineCode",{parentName:"td"},"avatar")," file are expected.")))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, dependency, Get, HttpResponseNoContent, Post, UserRequired, ValidateQueryParam } from '@foal/core';\nimport { File, Disk, ValidateMultipartFormDataBody } from '@foal/storage';\nimport { User } from '../../entities';\n\nexport class ProfileController {\n  @dependency\n  disk: Disk;\n\n  @Get('/avatar')\n  @ValidateQueryParam('userId', { type: 'number' }, { required: false })\n  async readProfileImage(ctx: Context<User|undefined>) {\n    let user = ctx.user;\n\n    const userId: number|undefined = ctx.request.query.userId;\n    if (userId !== undefined) {\n      user = await User.findOne({ id: userId })\n    }\n\n    if (!user || !user.avatar) {\n      return this.disk.createHttpResponse('images/profiles/default.png');\n    }\n\n    return this.disk.createHttpResponse(user.avatar);\n  }\n\n  @Post()\n  @UserRequired()\n  @ValidateMultipartFormDataBody({\n    files: {\n      avatar: { required: false, saveTo: 'images/profiles/uploaded' }\n    },\n    fields: {\n      name: { type: 'string', maxLength: 255 }\n    }\n  })\n  async updateProfileImage(ctx: Context<User>) {\n    ctx.user.name = ctx.request.body.fields.name;\n\n    // Warning: use Foal's File interface\n    const file = ctx.request.body.files.avatar as File|undefined;\n    if (file) {\n      if (ctx.user.avatar) {\n        await this.disk.delete(ctx.user.avatar);\n      }\n      ctx.user.avatar = file.path;\n    }\n\n    await ctx.user.save();\n\n    return new HttpResponseNoContent();\n  }\n\n}\n\n")),Object(i.b)("p",null,"Go to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:3001/swagger"}),"http://localhost:3001/swagger")," and try to upload a profile picture. You must be logged in first."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You may have noticed the ",Object(i.b)("inlineCode",{parentName:"p"},"@dependency")," decorator for setting the ",Object(i.b)("inlineCode",{parentName:"p"},"disk: Disk")," property. This mechanism is called dependency injection and is particularly useful in unit testing. You can read more about it ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/id/docs/architecture/architecture-overview"}),"here"))),Object(i.b)("h2",{id:"client-side"},"Client Side"),Object(i.b)("p",null,"On the client side, downloading the profile image is handled in the ",Object(i.b)("inlineCode",{parentName:"p"},"ProfileHeader.tsx")," and ",Object(i.b)("inlineCode",{parentName:"p"},"requests/profile.ts")," files."),Object(i.b)("p",null,"Open the latter and implement the ",Object(i.b)("inlineCode",{parentName:"p"},"updateProfile")," function."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import axios from 'axios';\n\nexport async function updateProfile(username: string, avatar: File|null): Promise<void> {\n  const formData = new FormData();\n  formData.set('name', username);\n  if (avatar) {\n    formData.set('avatar', avatar);\n  }\n\n  await axios.post('/api/profile', formData, {\n    headers: {\n    'content-type': 'multipart/form-data'\n    }\n  });\n}\n")),Object(i.b)("p",null,"Now, if you go back to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:3000/profile"}),"http://localhost:3000/profile"),", you should be able to upload your profile picture."))}p.isMDXComponent=!0},288:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(a),b=n,f=d["".concat(o,".").concat(b)]||d[b]||u[b]||i;return a?r.a.createElement(f,l(l({ref:t},s),{},{components:a})):r.a.createElement(f,l({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},368:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/files/default-9490f4915bf9aca8c77fd98e411f2e2c.png"}}]);