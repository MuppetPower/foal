"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1403],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(a),m=l,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),l=a(7294),r=a(6010),i=a(2389),o=a(7392),s=a(7094),d=a(2466);const c="tabList__CuJ",p="tabItem_LNqP";function u(e){var t,a;const{lazy:i,block:u,defaultValue:m,values:f,groupId:k,className:h}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,o.l)(y,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===m?m:null!=(t=null!=m?m:null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)?t:g[0].props.value;if(null!==b&&!y.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,s.U)(),[x,T]=(0,l.useState)(b),C=[],{blockElementScrollPositionUntilNextRender:S}=(0,d.o5)();if(null!=k){const e=N[k];null!=e&&e!==x&&y.some((t=>t.value===e))&&T(e)}const j=e=>{const t=e.currentTarget,a=C.indexOf(t),n=y[a].value;n!==x&&(S(t),T(n),null!=k&&w(k,String(n)))},D=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=C.indexOf(e.currentTarget)+1;a=null!=(n=C[t])?n:C[0];break}case"ArrowLeft":{var l;const t=C.indexOf(e.currentTarget)-1;a=null!=(l=C[t])?l:C[C.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":u},h)},y.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>C.push(e),onKeyDown:D,onFocus:j,onClick:j},i,{className:(0,r.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),i?(0,l.cloneElement)(g.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,i.Z)();return l.createElement(u,(0,n.Z)({key:String(t)},e))}},74:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var n=a(7462),l=(a(7294),a(3905)),r=a(5488),i=a(5162);const o={title:"Local and Cloud Storage",sidebar_label:"Local & Cloud Storage"},s=void 0,d={unversionedId:"file-system/local-and-cloud-storage",id:"file-system/local-and-cloud-storage",title:"Local and Cloud Storage",description:"FoalTS provides its own file system for reading, writing and deleting files locally or in the Cloud. Thanks to its unified interface, you can easily choose different storage for each of your environments. This is especially useful when you're moving from development to production.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/file-system/local-and-cloud-storage.md",sourceDirName:"file-system",slug:"/file-system/local-and-cloud-storage",permalink:"/id/docs/file-system/local-and-cloud-storage",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/file-system/local-and-cloud-storage.md",tags:[],version:"current",frontMatter:{title:"Local and Cloud Storage",sidebar_label:"Local & Cloud Storage"},sidebar:"someSidebar",previous:{title:"Nuxt.js",permalink:"/id/docs/frontend-integration/nuxt.js"},next:{title:"Upload & Download Files",permalink:"/id/docs/file-system/upload-and-download-files"}},c={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Local storage",id:"local-storage",level:3},{value:"AWS S3",id:"aws-s3",level:3},{value:"DigitalOcean",id:"digitalocean",level:3},{value:"Read, Write and Delete Files",id:"read-write-and-delete-files",level:2},{value:"Read files",id:"read-files",level:3},{value:"File not found",id:"file-not-found",level:4},{value:"File size",id:"file-size",level:4},{value:"Write files",id:"write-files",level:3},{value:"Delete files",id:"delete-files",level:3},{value:"Create an HttpResponse",id:"create-an-httpresponse",level:3},{value:"Using a Specific Storage",id:"using-a-specific-storage",level:2},{value:"Implementing a Disk",id:"implementing-a-disk",level:2}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"FoalTS provides its own file system for reading, writing and deleting files locally or in the Cloud. Thanks to its unified interface, you can easily choose different storage for each of your environments. This is especially useful when you're moving from development to production."),(0,l.kt)("p",null,"For example, when coding the application locally, you can use the file system of your operating system. Then, when deploying the application to staging or production, you can change the configuration to use AWS S3. Regardless of the storage chosen in the background, the code remains the same. Only the configuration changes."),(0,l.kt)("p",null,"Using FoalTS' file system has many other advantages as well:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"It can generate a unique random name when saving a new file (with the ability to add an extension if necessary)."),(0,l.kt)("li",{parentName:"ul"},"File contents can be managed using buffers or streams."),(0,l.kt)("li",{parentName:"ul"},"Stream errors are correctly handled to avoid crashing the server."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Not found")," errors are unified with a single ",(0,l.kt)("inlineCode",{parentName:"li"},"FileDoesNotExist")," error."),(0,l.kt)("li",{parentName:"ul"},"FoalTS' file system can generate an ",(0,l.kt)("inlineCode",{parentName:"li"},"HttpResponse"),"  to correctly download (large) files to the browser.")),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"First install the package."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm install @foal/storage\n")),(0,l.kt)("p",null,"Next, you will need to provide the name of the storage to be used with the configuration key ",(0,l.kt)("inlineCode",{parentName:"p"},"setings.disk.driver"),". In the case of the local filesystem, this is ",(0,l.kt)("inlineCode",{parentName:"p"},"local"),". In other cases, an additional package must be installed. Then the name to be provided is the name of the package."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  disk:\n    driver: local\n")),(0,l.kt)("h3",{id:"local-storage"},"Local storage"),(0,l.kt)("p",null,"The name of the directory where the files are located is specified with the configuration key ",(0,l.kt)("inlineCode",{parentName:"p"},"settings.disk.local.directory"),"."),(0,l.kt)(r.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  disk:\n    driver: 'local'\n    local:\n      directory: 'uploaded'\n"))),(0,l.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "disk": {\n      "driver": "local",\n      "local": {\n        "directory": "uploaded"\n      }\n    }\n  }\n}\n'))),(0,l.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    disk: {\n      driver: "local",\n      local: {\n        directory: "uploaded"\n      }\n    }\n  }\n}\n')))),(0,l.kt)("h3",{id:"aws-s3"},"AWS S3"),(0,l.kt)("p",null,"AWS storage requires the installation of an additional package."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm install @foal/aws-s3\n")),(0,l.kt)("p",null,"The bucket name is specified with the ",(0,l.kt)("inlineCode",{parentName:"p"},"settings.disk.s3.bucket")," configuration key."),(0,l.kt)("p",null,"AWS credentials are specified with the configuration keys ",(0,l.kt)("inlineCode",{parentName:"p"},"settings.aws.accessKeyId")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"settings.aws.secretAccessKey"),"  or using ",(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html"},"AWS traditional techniques"),"."),(0,l.kt)(r.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  aws:\n    accessKeyId: xxx\n    secretAccessKey: yyy\n  disk:\n    driver: '@foal/aws-s3'\n    s3:\n      bucket: 'uploaded'\n"))),(0,l.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "aws": {\n      "accessKeyId": "xxx",\n      "secretAccessKey": "yyy"\n    },\n    "disk": {\n      "driver": "@foal/aws-s3",\n      "s3": {\n        "bucket": "uploaded"\n      }\n    }\n  }\n}\n'))),(0,l.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    aws: {\n      accessKeyId: "xxx",\n      secretAccessKey: "yyy"\n    },\n    disk: {\n      driver: "@foal/aws-s3",\n      s3: {\n        bucket: "uploaded"\n      }\n    }\n  }\n}\n')))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Additional options")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"settings.disk.s3.serverSideEncryption")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'AES256'\\|'aws:kms'")),(0,l.kt)("td",{parentName:"tr",align:null},"Enables server-side encryption with SSE-S3 or SSE-KMS.")))),(0,l.kt)("h3",{id:"digitalocean"},"DigitalOcean"),(0,l.kt)("p",null,"DigitalOcean Spaces are compatible with AWS S3 API, so you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"@foal/aws-s3")," package to connect to this storage."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm install @foal/aws-s3\n")),(0,l.kt)("p",null,"The only difference is the configuration key ",(0,l.kt)("inlineCode",{parentName:"p"},"settings.aws.endpoint"),", which is mandatory and requires the value ",(0,l.kt)("inlineCode",{parentName:"p"},"${REGION}.digitaloceanspaces.com"),"."),(0,l.kt)("h2",{id:"read-write-and-delete-files"},"Read, Write and Delete Files"),(0,l.kt)("p",null,"FoalTS file system is accessible via the ",(0,l.kt)("inlineCode",{parentName:"p"},"Disk")," service. It contains all the methods for reading, writing and deleting files."),(0,l.kt)("h3",{id:"read-files"},"Read files"),(0,l.kt)("p",null,"Files can be read using the asynchronous ",(0,l.kt)("inlineCode",{parentName:"p"},"read")," method. It returns the size of the file as well as its contents in the form of a buffer or a readable stream. If the file does not exist, a ",(0,l.kt)("inlineCode",{parentName:"p"},"FileDoesNotExist")," error is rejected."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency } from '@foal/core';\nimport { Disk } from '@foal/storage';\n\nclass FileService {\n\n  @dependency\n  disk: Disk;\n\n  async readFile() {\n    const { file, size } = await this.disk.read('avatars/xxx.jpg', 'buffer');\n\n    // ...\n  }\n\n  async readFile2() {\n    const { file, size } = await this.disk.read('avatars/xxx.jpg', 'stream');\n\n    // ...\n  }\n\n} \n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Warning"),": When using the ",(0,l.kt)("inlineCode",{parentName:"p"},"read")," method with streams, you may want to add an error listener to prevent the application from crashing if an unexpected error is emitted. Stream errors do not work as thrown or rejected errors and are automatically not caught by the framework."),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const { file } = await this.disk.read('avatars/xxx.jpg', 'stream');\nfile.on('error', (err: Error) => {\n  // ...\n});\n"))),(0,l.kt)("h4",{id:"file-not-found"},"File not found"),(0,l.kt)("p",null,"To check whether an error is an instance of ",(0,l.kt)("inlineCode",{parentName:"p"},"FileDoesNotExist"),", you can call the ",(0,l.kt)("inlineCode",{parentName:"p"},"isFileDoesNotExist")," function. Using ",(0,l.kt)("inlineCode",{parentName:"p"},"error instanceof FileDoesNotExist")," may not work if you have multiple nested packages because of the way ",(0,l.kt)("em",{parentName:"p"},"npm")," handles its dependencies."),(0,l.kt)("h4",{id:"file-size"},"File size"),(0,l.kt)("p",null,"If you only need to read the file size and not its content, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"readSize")," method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const size = await this.disk.readSize('avatars/xxx.jpg');\n")),(0,l.kt)("h3",{id:"write-files"},"Write files"),(0,l.kt)("p",null,"Files can be saved using the asynchronous ",(0,l.kt)("inlineCode",{parentName:"p"},"write")," method. This method accepts a buffer or a readable stream. If no name is provided, it is automatically generated and used to save the file in the given directory. In this case, a file extension can also be provided to the method."),(0,l.kt)("p",null,"Once the file is successfully written, its path is returned so that it can be retrieved later."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Readable } from 'stream';\n\nimport { dependency } from '@foal/core';\nimport { Disk } from '@foal/storage';\n\nclass FileService {\n\n  @dependency\n  disk: Disk;\n\n  async createFile(content: Buffer|Readable) {\n    const { path } = await this.disk.write('avatars', content);\n    // path === 'avatars/zMurtEGl1BTNJnJjeOfwx4GPWirZpoGRG9J8NbRRkRY='\n\n    // ...\n  }\n\n  async createFile2(content: Buffer|Readable) {\n    const { path } = await this.disk.write('avatars', content, {\n      extension: 'jpg'\n    });\n    // path === 'avatars/zMurtEGl1BTNJnJjeOfwx4GPWirZpoGRG9J8NbRRkRY=.jpg'\n\n    // ...\n  }\n\n  async createFile3(content: Buffer|Readable) {\n    const { path } = await this.disk.write('avatars', content, {\n      name: 'profile.jpg'\n    });\n    // path === 'avatars/profile.jpg'\n\n    // ...\n  }\n\n} \n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: Backslashes ",(0,l.kt)("inlineCode",{parentName:"p"},"\\")," and slashes ",(0,l.kt)("inlineCode",{parentName:"p"},"/")," at the end of the directory name are not supported. For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"avatars/img_60")," is valid but ",(0,l.kt)("inlineCode",{parentName:"p"},"avatars\\img_60")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"avatars/img_60/")," both invalid.")),(0,l.kt)("h3",{id:"delete-files"},"Delete files"),(0,l.kt)("p",null,"Files can be deleted using the asynchronous ",(0,l.kt)("inlineCode",{parentName:"p"},"delete")," method. Depending on the file storage, the method may or may not reject a ",(0,l.kt)("inlineCode",{parentName:"p"},"FileDoesNotExist")," error if the file is not found."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency } from '@foal/core';\nimport { Disk } from '@foal/storage';\n\nclass FileService {\n\n  @dependency\n  disk: Disk;\n\n  async deleteFile(content: Buffer|Readable) {\n    await this.disk.delete('avatars/profile.jpg');\n\n    // ...\n  }\n\n} \n")),(0,l.kt)("h3",{id:"create-an-httpresponse"},"Create an HttpResponse"),(0,l.kt)("p",null,"The service also provides a special method ",(0,l.kt)("inlineCode",{parentName:"p"},"createHttpResponse")," for creating an ",(0,l.kt)("inlineCode",{parentName:"p"},"HttpResponse"),". The returned object is optimized for downloading a (large) file in streaming."),(0,l.kt)("p",null,"The documentation can be found ",(0,l.kt)("a",{parentName:"p",href:"/id/docs/file-system/upload-and-download-files#file-downloads"},"here"),"."),(0,l.kt)("h2",{id:"using-a-specific-storage"},"Using a Specific Storage"),(0,l.kt)("p",null,"In rare cases, you may wish to access multiple storages in your application. Each of them has its own ",(0,l.kt)("em",{parentName:"p"},"disk")," that you can inject and use in your controllers and services."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency, Get } from '@foal/core';\nimport { LocalDisk } from '@foal/storage';\nimport { S3Disk } from '@foal/aws-s3';\n\nclass ApiController {\n\n  @dependency\n  local: LocalDisk;\n\n  @dependency\n  s3: S3Disk;\n\n  // ...\n\n}\n")),(0,l.kt)("h2",{id:"implementing-a-disk"},"Implementing a Disk"),(0,l.kt)("p",null,"If FoalTS does not support your favorite Cloud provider, you can also implement your own ",(0,l.kt)("em",{parentName:"p"},"disk")," by extending the ",(0,l.kt)("inlineCode",{parentName:"p"},"Disk")," class. "),(0,l.kt)("p",null,"If you want to use it through the ",(0,l.kt)("inlineCode",{parentName:"p"},"Disk")," service, you need to specify its path in the configuration (or to publish it as an npm package and specify the package name). The name of the exported class should be ",(0,l.kt)("inlineCode",{parentName:"p"},"ConcreteDisk"),"."),(0,l.kt)(r.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  disk:\n    driver: './app/services/my-disk.service'\n"))),(0,l.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "disk": {\n      "driver": "./app/services/my-disk.service",\n    }\n  }\n}\n'))),(0,l.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    disk: {\n      driver: "./app/services/my-disk.service",\n    }\n  }\n}\n')))))}m.isMDXComponent=!0}}]);