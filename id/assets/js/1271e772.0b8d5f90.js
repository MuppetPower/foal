"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8209],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,f=d["".concat(u,".").concat(h)]||d[h]||c[h]||a;return n?o.createElement(f,s(s({ref:t},p),{},{components:n})):o.createElement(f,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={title:"E2E Testing and Authentication",sidebar_label:"E2E Testing & Auth"},s=void 0,i={unversionedId:"tutorials/multi-user-todo-list/tuto-8-e2e-testing-and-authentication",id:"version-1.x/tutorials/multi-user-todo-list/tuto-8-e2e-testing-and-authentication",title:"E2E Testing and Authentication",description:"The last part of this tutorial explains how to write and run end-to-end tests. The purpose of these tests is not to verify that each feature of each component works, but to check that these components work properly together.",source:"@site/versioned_docs/version-1.x/tutorials/multi-user-todo-list/tuto-8-e2e-testing-and-authentication.md",sourceDirName:"tutorials/multi-user-todo-list",slug:"/tutorials/multi-user-todo-list/tuto-8-e2e-testing-and-authentication",permalink:"/id/docs/1.x/tutorials/multi-user-todo-list/tuto-8-e2e-testing-and-authentication",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/tutorials/multi-user-todo-list/tuto-8-e2e-testing-and-authentication.md",tags:[],version:"1.x",frontMatter:{title:"E2E Testing and Authentication",sidebar_label:"E2E Testing & Auth"},sidebar:"someSidebar",previous:{title:"The Sign Up Page",permalink:"/id/docs/1.x/tutorials/multi-user-todo-list/tuto-7-the-signup-page"},next:{title:"Installation",permalink:"/id/docs/1.x/tutorials/mongodb-todo-list/tuto-1-installation"}},u={},l=[],p={toc:l};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The last part of this tutorial explains how to write and run ",(0,r.kt)("em",{parentName:"p"},"end-to-end")," tests. The purpose of these tests is not to verify that each feature of each component works, but to check that these components work properly together."),(0,r.kt)("p",null,"The tests are located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/e2e/")," directory. The command to run them in development is ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run e2e"),". E2E tests generally use the ",(0,r.kt)("inlineCode",{parentName:"p"},"supertest")," library which provides a high-level abstraction for testing HTTP."),(0,r.kt)("p",null,"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/e2e")," and replace its content."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// std\n// The `assert` module provides a simple set of assertion tests.\nimport { ok } from 'assert';\n\n// 3p\nimport { createApp } from '@foal/core';\nimport * as request from 'supertest';\nimport { createConnection, getConnection } from 'typeorm';\n\n// App\nimport { AppController } from '../app/app.controller';\nimport { User } from '../app/entities';\n\n// Define a group of tests.\ndescribe('The server', () => {\n\n  let app: any;\n\n  // Create the application and the connection to the database before running all the tests.\n  before(async () => {\n    // The connection uses the configuration defined in the file config/e2e.json.\n    // By default, the file has three connection options:\n    //  \"database\": \"./e2e_db.sqlite3\" -> Use a different database for running the tests.\n    // \"synchronize\": true ->  Auto create the database schema when the connection is established.\n    // \"dropSchema\": true -> Drop the schema when the connection is established (empty the database).\n    await createConnection();\n    app = createApp(AppController);\n  });\n\n  // Close the database connection after running all the tests whether they succeed or failed.\n  after(() => getConnection().close());\n\n  // Define a nested group of tests.\n  describe('on GET /api/todos requests', () => {\n\n    it('should return a 400 status if the user did not signed in.', () => {\n      return request(app)\n        .get('/api/todos')\n        .expect(400)\n        .expect({ code: 'invalid_request', description: 'Session cookie not found.' });\n    });\n\n    it('should return a 200 status if the user did signed in.', async () => {\n      // Create a new user in the empty database.\n      const user = new User();\n      user.email = 'john@foalts.org';\n      await user.setPassword('john_password');\n      await getConnection().manager.save(user);\n\n      // Log the user in.\n      let cookie = '';\n      await request(app)\n        .post('/auth/login')\n        // Set the body of the request\n        .send({ email: 'john@foalts.org', password: 'john_password' })\n        // The response should have the status 302 (redirection)\n        .expect(302)\n        .then(data => {\n          // The response should set the authentication cookie for the next requests.\n          ok(Array.isArray(data.header['set-cookie']));\n          // Save the cookie to be able to use it in further requests.\n          cookie = data.header['set-cookie'][0];\n        });\n\n      // Test the /api/todos endpoint when the user has logged in.\n      return request(app)\n        .get('/api/todos')\n        // Send the authentication cookie.\n        .set('Cookie', cookie)\n        .expect(200);\n    });\n\n  });\n\n});\n\n")),(0,r.kt)("p",null,"Now run the tests."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run e2e\n")),(0,r.kt)("p",null,"The output should look like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"E2E tests output",src:n(2422).Z,width:"1296",height:"334"})),(0,r.kt)("p",null,"Congratulations, you have reached the end of this tutorial!"))}c.isMDXComponent=!0},2422:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/e2e_output-9e64eb8bb5f440d42cd2716e4215dde4.png"}}]);