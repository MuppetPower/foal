(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{244:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(288)),i={title:"Tests de bout en bout & Authentication"},s={unversionedId:"tutorials/multi-user-todo-list/8-e2e-testing-and-authentication",id:"tutorials/multi-user-todo-list/8-e2e-testing-and-authentication",isDocsHomePage:!1,title:"Tests de bout en bout & Authentication",description:"La derni\xe8re partie de ce tutoriel explique comment \xe9crire et ex\xe9cuter des tests de bout en bout. Le but de ces tests n'est pas de v\xe9rifier que chaque fonctionnalit\xe9 de chaque composant fonctionne, mais de v\xe9rifier que ces composants fonctionnent correctement ensemble.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/multi-user-todo-list/8-e2e-testing-and-authentication.md",slug:"/tutorials/multi-user-todo-list/8-e2e-testing-and-authentication",permalink:"/fr/docs/tutorials/multi-user-todo-list/8-e2e-testing-and-authentication",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/multi-user-todo-list/8-e2e-testing-and-authentication.md",version:"current",sidebar:"someSidebar",previous:{title:"La Page d'Inscription",permalink:"/fr/docs/tutorials/multi-user-todo-list/7-the-signup-page"},next:{title:"Introduction",permalink:"/fr/docs/tutorials/real-world-example-with-react/1-introduction"}},c=[],u={toc:c};function p(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"La derni\xe8re partie de ce tutoriel explique comment \xe9crire et ex\xe9cuter des tests ",Object(a.b)("em",{parentName:"p"},"de bout en bout"),". Le but de ces tests n'est pas de v\xe9rifier que chaque fonctionnalit\xe9 de chaque composant fonctionne, mais de v\xe9rifier que ces composants fonctionnent correctement ensemble."),Object(a.b)("p",null,"Les tests sont situ\xe9s dans le r\xe9pertoire ",Object(a.b)("inlineCode",{parentName:"p"},"src/e2e/"),". La commande pour les ex\xe9cuter en d\xe9veloppement est ",Object(a.b)("inlineCode",{parentName:"p"},"npm run e2e"),". Les tests E2E utilisent g\xe9n\xe9ralement la biblioth\xe8que ",Object(a.b)("inlineCode",{parentName:"p"},"supertest")," qui fournit une abstraction de haut niveau pour tester HTTP."),Object(a.b)("p",null,"Ouvrez ",Object(a.b)("inlineCode",{parentName:"p"},"index.ts")," dans ",Object(a.b)("inlineCode",{parentName:"p"},"src/e2e")," et remplacez son contenu."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// std\n// The `assert` module provides a simple set of assertion tests.\nimport { ok } from 'assert';\n\n// 3p\nimport { createApp } from '@foal/core';\nimport * as request from 'supertest';\nimport { getConnection } from 'typeorm';\n\n// App\nimport { AppController } from '../app/app.controller';\nimport { User } from '../app/entities';\n\n// Define a group of tests.\ndescribe('The server', () => {\n\n  let app: any;\n\n  // Create the application and the connection to the database before running all the tests.\n  before(async () => {\n    app = await createApp(AppController);\n  });\n\n  // Close the database connection after running all the tests whether they succeed or failed.\n  after(() => getConnection().close());\n\n  // Define a nested group of tests.\n  describe('on GET /api/todos requests', () => {\n\n    it('should return a 401 status if the user did not signed in.', () => {\n      return request(app)\n        .get('/api/todos')\n        .expect(401);\n    });\n\n    it('should return a 200 status if the user did signed in.', async () => {\n      // Create a new user in the empty database.\n      const user = new User();\n      user.email = 'john@foalts.org';\n      await user.setPassword('john_password');\n      await getConnection().manager.save(user);\n\n      // Log the user in.\n      let cookie = '';\n      await request(app)\n        .post('/auth/login')\n        // Set the body of the request\n        .send({ email: 'john@foalts.org', password: 'john_password' })\n        // The response should have the status 302 (redirection)\n        .expect(302)\n        .then(data => {\n          // The response should set the authentication cookie for the next requests.\n          ok(Array.isArray(data.header['set-cookie']));\n          // Save the cookie to be able to use it in further requests.\n          cookie = data.header['set-cookie'][0];\n        });\n\n      // Test the /api/todos endpoint when the user has logged in.\n      return request(app)\n        .get('/api/todos')\n        // Send the authentication cookie.\n        .set('Cookie', cookie)\n        .expect(200);\n    });\n\n  });\n\n});\n\n")),Object(a.b)("p",null,"Maintenant, lancez les tests."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"npm run e2e\n")),Object(a.b)("p",null,"La sortie devrait ressembler \xe0 ceci :"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Sortie des tests de bout en bout",src:n(433).default})),Object(a.b)("p",null,"F\xe9licitations, vous \xeates arriv\xe9 \xe0 la fin de ce tutoriel !"))}p.isMDXComponent=!0},288:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(n),b=r,m=l["".concat(i,".").concat(b)]||l[b]||d[b]||a;return n?o.a.createElement(m,s(s({ref:t},u),{},{components:n})):o.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},433:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/e2e_output-9e64eb8bb5f440d42cd2716e4215dde4.png"}}]);