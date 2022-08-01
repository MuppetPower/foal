"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6059],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8066:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={title:"E2E Testing"},a=void 0,s={unversionedId:"testing/e2e-testing",id:"version-1.x/testing/e2e-testing",title:"E2E Testing",description:"End-to-end tests are located in the src/e2e directory.",source:"@site/versioned_docs/version-1.x/testing/e2e-testing.md",sourceDirName:"testing",slug:"/testing/e2e-testing",permalink:"/fr/docs/1.x/testing/e2e-testing",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/testing/e2e-testing.md",tags:[],version:"1.x",frontMatter:{title:"E2E Testing"},sidebar:"someSidebar",previous:{title:"Unit Testing",permalink:"/fr/docs/1.x/testing/unit-testing"},next:{title:"AWS Beanstalk",permalink:"/fr/docs/1.x/cloud/aws-beanstalk"}},l={},p=[{value:"Build and Run E2E Tests",id:"build-and-run-e2e-tests",level:2},{value:"Watch mode (for development)",id:"watch-mode-for-development",level:3},{value:"Simple mode (for CI and Git hooks)",id:"simple-mode-for-ci-and-git-hooks",level:3},{value:"The <code>SuperTest</code> library",id:"the-supertest-library",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"End-to-end tests are located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/e2e")," directory."),(0,o.kt)("h2",{id:"build-and-run-e2e-tests"},"Build and Run E2E Tests"),(0,o.kt)("h3",{id:"watch-mode-for-development"},"Watch mode (for development)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm run e2e\n")),(0,o.kt)("p",null,"This command builds and executes the e2e tests. If you modify a file and save it, the code is rebuilt and the tests are run again. This is particularly useful in development: you do not need to re-run the command every time you make code changes."),(0,o.kt)("p",null,"The process runs forever until you stop it."),(0,o.kt)("h3",{id:"simple-mode-for-ci-and-git-hooks"},"Simple mode (for CI and Git hooks)"),(0,o.kt)("p",null,"If you need to build and run the tests only once, you can use these two commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build:e2e # Build the e2e tests code (compile the typescript files and copy the templates)\nnpm run start:e2e # Execute the e2e tests from the built files\n")),(0,o.kt)("p",null,"These commands are particularly useful when you want to integrate your tests into a CI pipeline or a Git hook."),(0,o.kt)("h2",{id:"the-supertest-library"},"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"SuperTest")," library"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/visionmedia/supertest"},"the SuperTest library")," to write your e2e tests. It is installed by default."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport { createApp } from '@foal/core';\nimport * as request from 'supertest';\nimport { createConnection, getConnection } from 'typeorm';\n\n// App\nimport { AppController } from '../app/app.controller';\n\ndescribe('The server', () => {\n\n  let app;\n\n  before(async () => {\n    await createConnection();\n    app = createApp(AppController);\n  });\n\n  after(() => getConnection().close());\n\n  it('should return a 200 status on GET / requests.', () => {\n    return request(app)\n      .get('/')\n      .expect(200);\n  });\n\n});\n\n")))}u.isMDXComponent=!0}}]);