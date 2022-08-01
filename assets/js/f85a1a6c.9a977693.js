"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=i.createContext({}),c=function(e){var t=i.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(a,".").concat(m)]||p[m]||d[m]||o;return n?i.createElement(f,s(s({ref:t},u),{},{components:n})):i.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const o={title:"Unit Testing"},s=void 0,l={unversionedId:"testing/unit-testing",id:"testing/unit-testing",title:"Unit Testing",description:"Convention",source:"@site/docs/testing/unit-testing.md",sourceDirName:"testing",slug:"/testing/unit-testing",permalink:"/docs/testing/unit-testing",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/testing/unit-testing.md",tags:[],version:"current",frontMatter:{title:"Unit Testing"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/testing/introduction"},next:{title:"E2E Testing",permalink:"/docs/testing/e2e-testing"}},a={},c=[{value:"Convention",id:"convention",level:2},{value:"Build and Run Unit Tests",id:"build-and-run-unit-tests",level:2},{value:"Watch mode (for development)",id:"watch-mode-for-development",level:3},{value:"Simple mode (for CI and Git hooks)",id:"simple-mode-for-ci-and-git-hooks",level:3},{value:"Testing Controllers",id:"testing-controllers",level:2},{value:"Testing Services",id:"testing-services",level:2},{value:"Testing Hooks",id:"testing-hooks",level:2},{value:"Dependency Injection &amp; Unit Testing",id:"dependency-injection--unit-testing",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"convention"},"Convention"),(0,r.kt)("p",null,"Every unit test file should be placed next to the file it tests with the same name and the ",(0,r.kt)("inlineCode",{parentName:"p"},".spec.ts")," extension. If this extension is not present then the file won't be executed when running the test commands."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"'- services\n  |- my-service.service.ts\n  '- my-service.service.spec.ts\n")),(0,r.kt)("h2",{id:"build-and-run-unit-tests"},"Build and Run Unit Tests"),(0,r.kt)("h3",{id:"watch-mode-for-development"},"Watch mode (for development)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run test\n")),(0,r.kt)("p",null,"This command builds and executes the unit tests. If you modify a file and save it, the code is rebuilt and the tests are run again. This is particularly useful in development: you do not need to re-run the command every time you make code changes."),(0,r.kt)("p",null,"The process runs forever until you stop it."),(0,r.kt)("h3",{id:"simple-mode-for-ci-and-git-hooks"},"Simple mode (for CI and Git hooks)"),(0,r.kt)("p",null,"If you need to build and run the tests only once, you can use these two commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build:test # Build the unit tests code (compile the typescript files and copy the templates)\nnpm run start:test # Execute the unit tests from the built files\n")),(0,r.kt)("p",null,"These commands are particularly useful when you want to integrate your tests into a CI pipeline or a Git hook."),(0,r.kt)("h2",{id:"testing-controllers"},"Testing Controllers"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/architecture/controllers"},"Controllers"),"."),(0,r.kt)("h2",{id:"testing-services"},"Testing Services"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/architecture/services-and-dependency-injection"},"Services & Dependency Injection"),"."),(0,r.kt)("h2",{id:"testing-hooks"},"Testing Hooks"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/architecture/hooks"},"Hooks"),"."),(0,r.kt)("h2",{id:"dependency-injection--unit-testing"},"Dependency Injection & Unit Testing"),(0,r.kt)("p",null,"FoalTS uses dependency injection to keep the code loosely coupled and so enhance testatibility."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/architecture/services-and-dependency-injection"},"Services & Dependency Injection"),"."))}d.isMDXComponent=!0}}]);