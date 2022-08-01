"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9474],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),g=o,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8343:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={title:"gRPC"},i=void 0,s={unversionedId:"api-section/gRPC",id:"api-section/gRPC",title:"gRPC",description:"gRPC is a Remote Procedure Call (RPC) framework that can run in any environment. It can connect services in and across data centers with pluggable support for load balancing, tracing, health checking and authentication. It is also applicable in last mile of distributed computing to connect devices, mobile applications and browsers to backend services.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/api-section/gRPC.md",sourceDirName:"api-section",slug:"/api-section/gRPC",permalink:"/id/docs/api-section/gRPC",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/api-section/gRPC.md",tags:[],version:"current",frontMatter:{title:"gRPC"},sidebar:"someSidebar",previous:{title:"GraphQL",permalink:"/id/docs/api-section/graphql"},next:{title:"Single Page Applications",permalink:"/id/docs/frontend-integration/single-page-applications"}},l={},c=[{value:"Installation &amp; Configuration",id:"installation--configuration",level:2},{value:"The <code>gRPC</code> Service",id:"the-grpc-service",level:2},{value:"Using Promises",id:"using-promises",level:2},{value:"Limitations",id:"limitations",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"gRPC is a Remote Procedure Call (RPC) framework that can run in any environment. It can connect services in and across data centers with pluggable support for load balancing, tracing, health checking and authentication. It is also applicable in last mile of distributed computing to connect devices, mobile applications and browsers to backend services."),(0,o.kt)("p",null,"This page shows how to use gRPC in Foal. It is based on the ",(0,o.kt)("a",{parentName:"p",href:"https://grpc.io/docs/languages/node/basics/"},"official gRPC tutorial"),"."),(0,o.kt)("h2",{id:"installation--configuration"},"Installation & Configuration"),(0,o.kt)("p",null,"First you need to install some additional dependencies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @grpc/grpc-js @grpc/proto-loader\nnpm install cpx2 --save-dev\n")),(0,o.kt)("p",null,"Then update your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," so that your build scripts will correctly copy your ",(0,o.kt)("inlineCode",{parentName:"p"},".proto")," files into the ",(0,o.kt)("inlineCode",{parentName:"p"},"build/")," directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "build": "foal rmdir build && cpx \\"src/**/*.proto\\" build && tsc -p tsconfig.app.json",\n  "develop": "npm run build && concurrently \\"cpx \\\\\\"src/**/*.proto\\\\\\" build -w\\" \\"tsc -p tsconfig.app.json -w\\" \\"supervisor -w ./build,./config -e js,json,yml,proto --no-restart-on error ./build/index.js\\"",\n  "build:test": "foal rmdir build && cpx \\"src/**/*.proto\\" build && tsc -p tsconfig.test.json",\n  "test": "npm run build:test && concurrently \\"cpx \\\\\\"src/**/*.proto\\\\\\" build -w\\" \\"tsc -p tsconfig.test.json -w\\" \\"mocha --file ./build/test.js -w --watch-files build \\\\\\"./build/**/*.spec.js\\\\\\"\\"",\n  "build:e2e": "foal rmdir build && cpx \\"src/**/*.proto\\" build && tsc -p tsconfig.e2e.json",\n  "e2e": "npm run build:e2e && concurrently \\"cpx \\\\\\"src/**/*.proto\\\\\\" build -w\\" \\"tsc -p tsconfig.e2e.json -w\\" \\"mocha --file ./build/e2e.js -w --watch-files build \\\\\\"./build/e2e/**/*.js\\\\\\"\\"",\n    ...\n}\n')),(0,o.kt)("h2",{id:"the-grpc-service"},"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"gRPC")," Service"),(0,o.kt)("p",null,"Create your ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.proto")," file and save it to ",(0,o.kt)("inlineCode",{parentName:"p"},"src/app"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-proto"},'syntax = "proto3";\n\npackage helloworld;\n\n// The greeting service definition.\nservice Greeter {\n  // Sends a greeting\n  rpc SayHello (HelloRequest) returns (HelloReply) {}\n}\n\n// The request message containing the user\'s name.\nmessage HelloRequest {\n  string name = 1;\n}\n\n// The response message containing the greetings\nmessage HelloReply {\n  string message = 1;\n}\n')),(0,o.kt)("p",null,"Add the ",(0,o.kt)("inlineCode",{parentName:"p"},"Greeter")," service."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"services/greeter.service.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export class Greeter {\n\n  sayHello(call, callback) {\n    callback(null, {message: 'Hello ' + call.request.name});\n  }\n\n}\n\n")),(0,o.kt)("p",null,"The next step is to create a service that will instantiate the gRPC server."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"services/grpc.service.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// std\nimport { join } from 'path';\n\n// 3p\nimport { dependency } from '@foal/core';\nimport * as grpc from '@grpc/grpc-js';\nimport * as protoLoader  from '@grpc/proto-loader';\n\n// App\nimport { Greeter } from './greeter.service';\n\nexport class Grpc {\n  @dependency\n  greeter: Greeter;\n\n  boot(): Promise<void> {\n    const PROTO_PATH = join(__dirname, '../spec.proto');\n    const packageDefinition = protoLoader.loadSync(\n      PROTO_PATH,\n      {\n        keepCase: true,\n        longs: String,\n        enums: String,\n        defaults: true,\n        oneofs: true\n      }\n    );\n\n    const helloProto: any = grpc.loadPackageDefinition(packageDefinition).helloworld;\n    const server = new grpc.Server();\n    server.addService(helloProto.Greeter.service, this.greeter as any);\n    // OR\n    // server.addService(helloProto.Greeter.service, {\n    //   sayHello: this.greeter.sayHello.bind(this.greeter)\n    // } as any);\n\n    return new Promise((resolve, reject) => {\n      server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), error => {\n        if (error) {\n          return reject(error);\n        }\n        server.start();\n        return resolve();\n      });\n    })\n  }\n\n}\n\n")),(0,o.kt)("p",null,"Finally, inject the service in the application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AppController {\n  @dependency\n  grpc: Grpc;\n\n  // ...\n}\n\n")),(0,o.kt)("h2",{id:"using-promises"},"Using Promises"),(0,o.kt)("p",null,"Using callbacks in the grpc services can be quite tedious. To convert methods into functions that use promises, you can use the decorator below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { callbackify } from 'util';\n\nfunction async (target: any, propertyKey: string, descriptor: PropertyDescriptor) {\n  descriptor.value = callbackify(descriptor.value);\n};\n\nexport class Greeter {\n\n  @async\n  async sayHello(call) {\n    return { message: 'Hello ' + call.request.name };\n  }\n\n}\n\n")),(0,o.kt)("h2",{id:"limitations"},"Limitations"),(0,o.kt)("p",null,"The implementation above do not use Foal regular controllers. This has two consequences:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"hooks cannot be used,"),(0,o.kt)("li",{parentName:"ul"},"and error-handling is entirely managed by the gRPC server. The ",(0,o.kt)("inlineCode",{parentName:"li"},"AppController.handleError")," cannot be used.")))}u.isMDXComponent=!0}}]);