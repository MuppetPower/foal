(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{215:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(288)),i={title:"Database Set Up"},l={unversionedId:"tutorials/real-world-example-with-react/2-database-set-up",id:"tutorials/real-world-example-with-react/2-database-set-up",isDocsHomePage:!1,title:"Database Set Up",description:"The first step in this tutorial is to establish a database connection. If you haven't already done so, install MySQL or PostgreSQL.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/2-database-set-up.md",slug:"/tutorials/real-world-example-with-react/2-database-set-up",permalink:"/es/docs/tutorials/real-world-example-with-react/2-database-set-up",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/es/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/2-database-set-up.md",version:"current",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/es/docs/tutorials/real-world-example-with-react/1-introduction"},next:{title:"The User and Story Models",permalink:"/es/docs/tutorials/real-world-example-with-react/3-the-models"}},s=[],c={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The first step in this tutorial is to establish a database connection. If you haven't already done so, install ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://dev.mysql.com/downloads/"}),"MySQL")," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.postgresql.org/download/"}),"PostgreSQL"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("em",{parentName:"p"},"By default, Foal uses SQLite in every new application, as it does not require any installation. If you want to continue using it in this tutorial, you can skip this section and go to the next page.")," ")),Object(o.b)("p",null,"First, install MySQL (or Postgres) driver."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install mysql # or pg\n")),Object(o.b)("p",null,"Open the ",Object(o.b)("inlineCode",{parentName:"p"},"config/default.json")," file and update the ",Object(o.b)("inlineCode",{parentName:"p"},"database")," section as follows. If your database is PostgreSQL, change the ",Object(o.b)("inlineCode",{parentName:"p"},"type")," value to ",Object(o.b)("inlineCode",{parentName:"p"},"postgres"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "port": "env(PORT)",\n  "settings": {\n    ...\n  },\n  "database": {\n    "type": "mysql",\n    "host": "env(DB_HOST)",\n    "port": "env(DB_PORT)",\n    "username": "env(DB_USERNAME)",\n    "password": "env(DB_PASSWORD)",\n    "database": "env(DB_NAME)"\n  }\n}\n\n')),Object(o.b)("p",null,"This file is the main configuration file for the application and is used as the basis for whatever environment the application is running in."),Object(o.b)("p",null,"The syntax ",Object(o.b)("inlineCode",{parentName:"p"},"env(*)")," tells the configuration system to get the value from the given environment variable. If it does not exist, Foal will try to read it from a ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file."),Object(o.b)("p",null,"Create a new ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file in the root of your project and provide the database credentials."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},".env")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# Use the identification information of your database.\n# The values below are given as an example.\nDB_HOST="localhost"\n# Default port for PostgreSQL is 5432.\nDB_PORT="3306"\nDB_USERNAME="test"\nDB_PASSWORD="test"\nDB_NAME="test"\n')),Object(o.b)("p",null,"Restart the development server. The application is now connected to your database."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You could have specified all the database connection options directly in the ",Object(o.b)("inlineCode",{parentName:"p"},"default.json")," file but this is considered bad practice."),Object(o.b)("p",{parentName:"blockquote"},"Configuration files are usually committed to version control and it is recommended not to commit files containing sensitive information. Also, you will probably have different connection options depending on the host the application is running on (local or production). This approach allows you to provide different options for each.")))}p.isMDXComponent=!0},288:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);