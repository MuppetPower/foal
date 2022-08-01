"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7084],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),d=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=d(e.components);return r.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(t),m=n,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return t?r.createElement(f,i(i({ref:a},p),{},{components:t})):r.createElement(f,i({ref:a},p))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2273:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=t(7462),n=(t(7294),t(3905));const l={title:"Carga y Descarga de Im\xe1genes",id:"tuto-12-file-upload",slug:"12-file-upload"},i=void 0,o={unversionedId:"tutorials/real-world-example-with-react/tuto-12-file-upload",id:"tutorials/real-world-example-with-react/tuto-12-file-upload",title:"Carga y Descarga de Im\xe1genes",description:"El siguiente paso en este tutorial es permitir a los usuarios subir una imagen de perfil. Esta imagen se mostrar\xe1 en la p\xe1gina de inicio delante de cada publicaci\xf3n de cada autor.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/12-file-upload.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/12-file-upload",permalink:"/es/docs/tutorials/real-world-example-with-react/12-file-upload",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/12-file-upload.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Carga y Descarga de Im\xe1genes",id:"tuto-12-file-upload",slug:"12-file-upload"},sidebar:"someSidebar",previous:{title:"A\xf1adida de la p\xe1gina de inscripci\xf3n",permalink:"/es/docs/tutorials/real-world-example-with-react/11-sign-up"},next:{title:"Protecci\xf3n contra CSRF",permalink:"/es/docs/tutorials/real-world-example-with-react/13-csrf"}},s={},d=[{value:"Lado del servidor",id:"lado-del-servidor",level:2},{value:"Lado del cliente",id:"lado-del-cliente",level:2}],p={toc:d};function u(e){let{components:a,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"El siguiente paso en este tutorial es permitir a los usuarios subir una imagen de perfil. Esta imagen se mostrar\xe1 en la p\xe1gina de inicio delante de cada publicaci\xf3n de cada autor."),(0,n.kt)("p",null,"Para ello, utilizar\xe1 el sistema de almacenamiento de Foal. \xc9ste le permite validar y guardar los archivos subidos por el cliente. Estos archivos pueden guardarse en su unidad local o en la nube utilizando AWS S3. No utilizaremos la funci\xf3n de la nube en este tutorial, pero puede encontrar c\xf3mo configurarla ",(0,n.kt)("a",{parentName:"p",href:"/es/docs/file-system/local-and-cloud-storage"},"aqu\xed"),"."),(0,n.kt)("h2",{id:"lado-del-servidor"},"Lado del servidor"),(0,n.kt)("p",null,"Primero, instale el paquete. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @foal/storage\n")),(0,n.kt)("p",null,"Actualice la configuraci\xf3n en ",(0,n.kt)("inlineCode",{parentName:"p"},"config/default.json")," para especificar la ubicaci\xf3n de los archivos a los que puede acceder el gestor de disco."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "port": "env(PORT)",\n  "settings": {\n    ...\n    "disk": {\n      "local": {\n        "directory": "assets"\n      }\n    }\n  },\n  ...\n}\n')),(0,n.kt)("p",null,"A continuaci\xf3n, cree el directorio ",(0,n.kt)("inlineCode",{parentName:"p"},"assets/images/profiles/uploaded")," donde se cargar\xe1n las im\xe1genes de perfil. Descargue la imagen de perfil por defecto ",(0,n.kt)("a",{target:"_blank",href:t(3418).Z},"aqu\xed")," y col\xf3quela en la carpeta ",(0,n.kt)("inlineCode",{parentName:"p"},"assets/images/profiles")," con el nombre ",(0,n.kt)("inlineCode",{parentName:"p"},"default.png"),"."),(0,n.kt)("p",null,"Ya est\xe1 listo para crear el controlador. Genere uno nuevo."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"foal generate controller api/profile --register\n")),(0,n.kt)("p",null,"Abra el nuevo archivo y a\xf1ada dos nuevas rutas."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Punto final"),(0,n.kt)("th",{parentName:"tr",align:null},"M\xe9todo"),(0,n.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/api/profile/avatar")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"GET")),(0,n.kt)("td",{parentName:"tr",align:null},"Recupera la imagen del perfil del usuario. Si se proporciona el par\xe1metro de consulta opcional ",(0,n.kt)("inlineCode",{parentName:"td"},"userId"),", el servidor devuelve el avatar de ese usuario. En caso contrario, devuelve el avatar del usuario actual. Si ning\xfan usuario est\xe1 autenticado o no tiene imagen de perfil, se devuelve una imagen por defecto.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/api/profile")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"POST")),(0,n.kt)("td",{parentName:"tr",align:null},"Actualiza el perfil del usuario. Se espera un campo ",(0,n.kt)("inlineCode",{parentName:"td"},"name")," y un archivo opcional ",(0,n.kt)("inlineCode",{parentName:"td"},"avatar"),".")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, dependency, Get, HttpResponseNoContent, Post, UserRequired, ValidateQueryParam } from '@foal/core';\nimport { File, Disk, ValidateMultipartFormDataBody } from '@foal/storage';\nimport { User } from '../../entities';\n\nexport class ProfileController {\n  @dependency\n  disk: Disk;\n\n  @Get('/avatar')\n  @ValidateQueryParam('userId', { type: 'number' }, { required: false })\n  async readProfileImage(ctx: Context<User|undefined>) {\n    let user = ctx.user;\n\n    const userId: number|undefined = ctx.request.query.userId;\n    if (userId !== undefined) {\n      user = await User.findOne({ id: userId })\n    }\n\n    if (!user || !user.avatar) {\n      return this.disk.createHttpResponse('images/profiles/default.png');\n    }\n\n    return this.disk.createHttpResponse(user.avatar);\n  }\n\n  @Post()\n  @UserRequired()\n  @ValidateMultipartFormDataBody({\n    files: {\n      avatar: { required: false, saveTo: 'images/profiles/uploaded' }\n    },\n    fields: {\n      name: { type: 'string', maxLength: 255 }\n    }\n  })\n  async updateProfileImage(ctx: Context<User>) {\n    ctx.user.name = ctx.request.body.fields.name;\n\n    // Warning: use Foal's File interface\n    const file = ctx.request.body.files.avatar as File|undefined;\n    if (file) {\n      if (ctx.user.avatar) {\n        await this.disk.delete(ctx.user.avatar);\n      }\n      ctx.user.avatar = file.path;\n    }\n\n    await ctx.user.save();\n\n    return new HttpResponseNoContent();\n  }\n\n}\n\n")),(0,n.kt)("p",null,"Vaya a ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3001/swagger"},"http://localhost:3001/swagger")," e intente subir una foto de perfil. Primero debe iniciar la sesi\xf3n."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Puede que haya notado el decorador ",(0,n.kt)("inlineCode",{parentName:"p"},"@dependency")," para establecer la propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},"disk: Disk"),". Este mecanismo se llama inyecci\xf3n de dependencia y es particularmente \xfatil en las pruebas unitarias. Puede leer m\xe1s sobre ello ",(0,n.kt)("a",{parentName:"p",href:"/es/docs/architecture/architecture-overview"},"aqu\xed"))),(0,n.kt)("h2",{id:"lado-del-cliente"},"Lado del cliente"),(0,n.kt)("p",null,"En el lado del cliente, la descarga de la imagen del perfil se gestiona en los archivos ",(0,n.kt)("inlineCode",{parentName:"p"},"ProfileHeader.tsx")," y ",(0,n.kt)("inlineCode",{parentName:"p"},"requests/profile.ts"),"."),(0,n.kt)("p",null,"Abra este \xfaltimo e implemente la funci\xf3n ",(0,n.kt)("inlineCode",{parentName:"p"},"updateProfile"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import axios from 'axios';\n\nexport async function updateProfile(username: string, avatar: File|null): Promise<void> {\n  const formData = new FormData();\n  formData.set('name', username);\n  if (avatar) {\n    formData.set('avatar', avatar);\n  }\n\n  await axios.post('/api/profile', formData, {\n    headers: {\n    'content-type': 'multipart/form-data'\n    }\n  });\n}\n")),(0,n.kt)("p",null,"Ahora, si vuelve a ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/profile"},"http://localhost:3000/profile"),", deber\xeda poder subir su foto de perfil."))}u.isMDXComponent=!0},3418:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/files/default-9490f4915bf9aca8c77fd98e411f2e2c.png"}}]);