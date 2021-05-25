(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{169:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),o=(a(0),a(288)),i={title:"Introduction"},l={unversionedId:"tutorials/real-world-example-with-react/1-introduction",id:"tutorials/real-world-example-with-react/1-introduction",isDocsHomePage:!1,title:"Introduction",description:"This tutorial shows how to build a real-world application with React and Foal. It assumes that you have already read the first guide How to build a Simple To-Do List and that you have a basic knowledge of React.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/1-introduction.md",slug:"/tutorials/real-world-example-with-react/1-introduction",permalink:"/es/docs/tutorials/real-world-example-with-react/1-introduction",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/es/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/1-introduction.md",version:"current",sidebar:"someSidebar",previous:{title:"Pruebas E2E & Autenticaci\xf3n",permalink:"/es/docs/tutorials/multi-user-todo-list/8-e2e-testing-and-authentication"},next:{title:"Database Set Up",permalink:"/es/docs/tutorials/real-world-example-with-react/2-database-set-up"}},c=[{value:"Application Overview",id:"application-overview",children:[]},{value:"Get Started",id:"get-started",children:[]}],s={toc:c};function u(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This tutorial shows how to build a real-world application with React and Foal. It assumes that you have already read the first guide ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/es/docs/tutorials/simple-todo-list/1-installation"}),"How to build a Simple To-Do List"))," and that you have a basic knowledge of React."),Object(o.b)("p",null,"In this tutorial, you will learn to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"establish a connection with MySQL or Postgres,"),Object(o.b)("li",{parentName:"ul"},"provide credentials to the application in a secure way,"),Object(o.b)("li",{parentName:"ul"},"create many-to-one models,"),Object(o.b)("li",{parentName:"ul"},"use a query builder,"),Object(o.b)("li",{parentName:"ul"},"generate an interface to test your API (Swagger UI),"),Object(o.b)("li",{parentName:"ul"},"fix same-origin policy errors,"),Object(o.b)("li",{parentName:"ul"},"allow users to log in and register with an email and a password,"),Object(o.b)("li",{parentName:"ul"},"authenticate users on the frontend and the backend,"),Object(o.b)("li",{parentName:"ul"},"manage access control,"),Object(o.b)("li",{parentName:"ul"},"protect against CSRF attacks,"),Object(o.b)("li",{parentName:"ul"},"upload and save files,"),Object(o.b)("li",{parentName:"ul"},"allow users to connect with a social provider (Google),"),Object(o.b)("li",{parentName:"ul"},"and build the application for production.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("em",{parentName:"p"},"For the sake of simplicity, the front-end application will not use a state management library (such as ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://redux.js.org/"}),"redux"),"). But you can of course add one if you wish. The logic to follow will remain mainly the same."))),Object(o.b)("h2",{id:"application-overview"},"Application Overview"),Object(o.b)("p",null,"The application you will create is a social website where users can share interesting links to tutorials. All posts will be public, so no authentication will be required to view them. Publishing a post, on the other hand, will require the creation of an account."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Feed page"),"\n",Object(o.b)("img",{alt:"Feed page",src:a(398).default})),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Profile page"),"\n",Object(o.b)("img",{alt:"Profile page",src:a(399).default})),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Registration and login pages"),"\n",Object(o.b)("img",{alt:"Registration and login pages",src:a(400).default})),Object(o.b)("h2",{id:"get-started"},"Get Started"),Object(o.b)("p",null,"Let's get started. First of all, create a new directory."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"mkdir foal-react-tuto\n")),Object(o.b)("p",null,"Generate the backend appplication."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd foal-react-tuto\nfoal createapp backend-app\n")),Object(o.b)("p",null,"And then start the development server."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd backend-app\nnpm run develop\n")),Object(o.b)("p",null,"Go to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:3001"}),"http://localhost:3001")," in your browser. You should see the ",Object(o.b)("em",{parentName:"p"},"Welcome on board")," message."))}u.isMDXComponent=!0},288:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return a?n.a.createElement(m,l(l({ref:t},s),{},{components:a})):n.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},398:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/feed-cafaeeea52a28612177a5a70e6c1cf12.png"},399:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/profile-d12409506e2332f8a2ef8391801ef85d.png"},400:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/sign-up-and-log-in-ea14815a2f012118eef7e058bd93c500.png"}}]);