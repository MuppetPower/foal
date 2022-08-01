"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9580],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={title:"Linting et Style de Code",sidebar_label:"Linting & Style de Code"},a=void 0,l={unversionedId:"development-environment/linting-and-code-style",id:"development-environment/linting-and-code-style",title:"Linting et Style de Code",description:"A linter is a tool that analizes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs. In particular, it helps teams to keep the code consistent between their members.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/development-environment/linting-and-code-style.md",sourceDirName:"development-environment",slug:"/development-environment/linting-and-code-style",permalink:"/fr/docs/development-environment/linting-and-code-style",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/development-environment/linting-and-code-style.md",tags:[],version:"current",frontMatter:{title:"Linting et Style de Code",sidebar_label:"Linting & Style de Code"},sidebar:"someSidebar",previous:{title:"Code Generation",permalink:"/fr/docs/development-environment/code-generation"},next:{title:"VSCode",permalink:"/fr/docs/development-environment/vscode"}},s={},p=[{value:"ESLint &amp; TypeScript",id:"eslint--typescript",level:2},{value:"Configuration with VSCode",id:"configuration-with-vscode",level:2},{value:"Adding New Rules",id:"adding-new-rules",level:2},{value:"Migrating from TSLint",id:"migrating-from-tslint",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A linter is a tool that analizes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs. In particular, it helps teams to keep the code consistent between their members."),(0,i.kt)("p",null,"For example, with ESLint, the rule ",(0,i.kt)("inlineCode",{parentName:"p"},"@typescript-eslint/quotes: single")," enforces the use of single quotes throughout the code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Valid\nconst foo = 'bar';\n// Invalid\nconst foo = \"bar\";\n")),(0,i.kt)("h2",{id:"eslint--typescript"},"ESLint & TypeScript"),(0,i.kt)("p",null,"FoalTS offers a pre-configuration for the linter ",(0,i.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint"),". It is the most commonly used in the JavaScript ecosystem and can work with TypeScript through the ",(0,i.kt)("inlineCode",{parentName:"p"},"@typescript-eslint/parser")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@typescript-eslint/eslint-plugin")," packages."),(0,i.kt)("p",null,"You can run the linting with this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm run lint\n")),(0,i.kt)("p",null,"And if the linting issues can be automatically fixed, you can also fix them with this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm run lint:fix\n")),(0,i.kt)("h2",{id:"configuration-with-vscode"},"Configuration with VSCode"),(0,i.kt)("p",null,"Instructions to configure VSCode with ESLint and TypeScript can be found ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/development-environment/vscode"},"here"),"."),(0,i.kt)("h2",{id:"adding-new-rules"},"Adding New Rules"),(0,i.kt)("p",null,"The rules are specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},".eslintrc")," configuration file located at the root of the project."),(0,i.kt)("p",null,"The list of available JavaScript rules can be found on the ",(0,i.kt)("a",{parentName:"p",href:"https://eslint.org/docs/rules/"},"ESLint website"),". Some of them are compatible with TypeScript. Others are not and you will need to find equivalents ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules"},"here"),"."),(0,i.kt)("h2",{id:"migrating-from-tslint"},"Migrating from TSLint"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://palantir.github.io/tslint/"},"TSLint")," is a TypeScript linter that was previously used by FoalTS but has since been ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/palantir/tslint-in-2019-1a144c2317a9"},"deprecated"),". This is why new versions of the framework use ESLint."),(0,i.kt)("p",null,"In order to migrate from TSLint to ESLint, you can refer to this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/ROADMAP.md"},"page"),". It lists all TSLint rules along side rules from the ESLint ecosystem that are identical or similar."))}d.isMDXComponent=!0}}]);