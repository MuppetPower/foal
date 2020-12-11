(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{208:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),i=(n(0),n(250)),r={title:"TypeORM",sidebar_label:"SQL Databases (TypeORM)"},l={unversionedId:"databases/typeorm",id:"version-1.x/databases/typeorm",isDocsHomePage:!1,title:"TypeORM",description:"FoalTS components using TypeORM officially support the following databases: PostgreSQL, MySQL, MariaDB and SQLite.",source:"@site/versioned_docs/version-1.x/databases/typeorm.md",slug:"/databases/typeorm",permalink:"/foal/docs/1.x/databases/typeorm",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/databases/typeorm.md",version:"1.x",sidebar_label:"SQL Databases (TypeORM)",sidebar:"someSidebar",previous:{title:"Initialization",permalink:"/foal/docs/1.x/architecture/initialization"},next:{title:"Create Models & Queries",permalink:"/foal/docs/1.x/databases/create-models-and-queries"}},s=[{value:"The ORM",id:"the-orm",children:[]},{value:"Use with FoalTS",id:"use-with-foalts",children:[{value:"Initial Configuration",id:"initial-configuration",children:[]},{value:"Packages",id:"packages",children:[]}]},{value:"Database Configuration Examples",id:"database-configuration-examples",children:[{value:"MySQL / MariaDB",id:"mysql--mariadb",children:[]},{value:"PostgreSQL",id:"postgresql",children:[]}]},{value:"Configuration and Testing",id:"configuration-and-testing",children:[]}],c={rightToc:s};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("em",{parentName:"p"},"FoalTS components using TypeORM officially support the following databases: PostgreSQL, MySQL, MariaDB and SQLite"),".")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"A simple model:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User {\n\n    @PrimaryGeneratedColumn()\n    id: number;\n\n    @Column()\n    firstName: string;\n\n    @Column()\n    lastName: string;\n\n}\n")),Object(i.b)("h2",{id:"the-orm"},"The ORM"),Object(i.b)("p",null,"FoalTS uses ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://typeorm.io/"}),"TypeORM")," as default ",Object(i.b)("em",{parentName:"p"},"Object-Relational Mapping"),". This allows you to create classes to interact with your database tables (or collections). TypeORM is written in TypeScript and supports both ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Active_record_pattern"}),"Active Record")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Data_mapper_pattern"}),"Data Mapper")," patterns."),Object(i.b)("p",null,"Here is a non-exhaustive list of its features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"migrations and automatic migrations generation"),Object(i.b)("li",{parentName:"ul"},"uni-directional, bi-directional and self-referenced relations"),Object(i.b)("li",{parentName:"ul"},"eager and lazy relations"),Object(i.b)("li",{parentName:"ul"},"TypeScript support"),Object(i.b)("li",{parentName:"ul"},"connection configuration in json / xml / yml / env formats"),Object(i.b)("li",{parentName:"ul"},"transactions"),Object(i.b)("li",{parentName:"ul"},"etc")),Object(i.b)("p",null,"TypeORM supports many SQL databases (MySQL / MariaDB / Postgres / SQLite / Microsoft SQL Server / Oracle / sql.js) as well as the MongoDB NoSQL database."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Although this documentation presents the basic features of TypeORM, you may be interested in reading the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://typeorm.io/"}),"official documentation")," to learn more advanced features.")),Object(i.b)("h2",{id:"use-with-foalts"},"Use with FoalTS"),Object(i.b)("p",null,"TypeORM is integrated by default in each new FoalTS project. This allows you to quickly create models, run migrations and use the authentication system without wasting time on configuration. However, if you do not wish to use it, you can refer to the page ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/foal/docs/1.x/databases/using-another-orm"}),"Using another ORM"),"."),Object(i.b)("h3",{id:"initial-configuration"},"Initial Configuration"),Object(i.b)("p",null,"When creating a new project, an ",Object(i.b)("inlineCode",{parentName:"p"},"SQLite")," database is used by default as it does not require any additional installation (the data is saved in a file). The connection configuration is stored in ",Object(i.b)("inlineCode",{parentName:"p"},"ormconfig.js")," and ",Object(i.b)("inlineCode",{parentName:"p"},"default.json")," located respectively at the root of your project and in the ",Object(i.b)("inlineCode",{parentName:"p"},"config/")," directory."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"ormconfig.js")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { Config } = require('@foal/core');\n\nmodule.exports = {\n  type: 'sqlite',\n  database: Config.get('database.database'),\n  dropSchema: Config.get('database.dropSchema', false),\n  entities: ['build/app/**/*.entity.js'],\n  migrations: ['build/migrations/*.js'],\n  cli: {\n    migrationsDir: 'src/migrations'\n  },\n  synchronize: Config.get('database.synchronize', false)\n}\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"default.json (example)")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "port": 3001,\n  "settings": {\n    ...\n  },\n  "database": {\n    "database": "./db.sqlite3"\n  }\n}\n')),Object(i.b)("h3",{id:"packages"},"Packages"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install typeorm @foal/typeorm\n")),Object(i.b)("p",null,"Two packages are required to use TypeORM with FoalTS:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The package ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/typeorm"}),"typeorm")," which is the official one of the ORM. It includes everything you need to create models and make database requests."),Object(i.b)("li",{parentName:"ul"},"The package ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/@foal/typeorm"}),"@foal/typeorm")," (maintained by FoalTS) which contains additional components. These are particularly useful when using FoalTS ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/foal/docs/1.x/authentication-and-access-control/quick-start"}),"authentication and authorization system"),".")),Object(i.b)("h2",{id:"database-configuration-examples"},"Database Configuration Examples"),Object(i.b)("p",null,"This section shows how to configure ",Object(i.b)("strong",{parentName:"p"},"MySQL")," or ",Object(i.b)("strong",{parentName:"p"},"PostgreSQL")," with Foal."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"ormconfig.js")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { Config } = require('@foal/core');\n\nmodule.exports = {\n  type: 'mysql', // or 'postgres'\n\n  host: Config.get('database.host'),\n  port: Config.get('database.port'),\n  username: Config.get('database.username'),\n  password: Config.get('database.password'),\n  database: Config.get('database.database'),\n\n  dropSchema: Config.get('database.dropSchema', false),\n  synchronize: Config.get('database.synchronize', false),\n  \n  entities: [\"build/app/**/*.entity.js\"],\n  migrations: [\"build/migrations/*.js\"],\n  cli: {\n    migrationsDir: \"src/migrations\"\n  },\n}\n")),Object(i.b)("p",null,"With this configuration, database credentials can be provided in a YAML, a JSON or a ",Object(i.b)("inlineCode",{parentName:"p"},".env "),"configuration file or in environment variables."),Object(i.b)("p",null,'{% code-tabs %}\n{% code-tabs-item title="config/default.yml" %}'),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# ...\n\ndatabase:\n  host: localhost\n  port: 3306\n  username: root\n  password: password\n  database: my-db\n")),Object(i.b)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title="config/default.json" %}'),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  // ...\n  "database": {\n    "host": "localhost",\n    "port": 3306,\n    "username": "root",\n    "password": "password",\n    "database": "my-db"\n  }\n}\n')),Object(i.b)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title=".env or environment variables" %}'),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),"DATABASE_HOST=localhost\nDATABASE_PORT=3306\nDATABASE_USERNAME=root\nDATABASE_PASSWORD=password\nDATABASE_DATABASE=my-db\n")),Object(i.b)("p",null,"{% endcode-tabs-item %}\n{% endcode-tabs %}"),Object(i.b)("h3",{id:"mysql--mariadb"},"MySQL / MariaDB"),Object(i.b)("p",null,"Install ",Object(i.b)("inlineCode",{parentName:"p"},"mysql")," or ",Object(i.b)("inlineCode",{parentName:"p"},"mysql3")," drivers."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install mysql --save # mysql2 is also supported\n")),Object(i.b)("h3",{id:"postgresql"},"PostgreSQL"),Object(i.b)("p",null,"Install ",Object(i.b)("inlineCode",{parentName:"p"},"pg")," driver."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install pg --save\n")),Object(i.b)("h2",{id:"configuration-and-testing"},"Configuration and Testing"),Object(i.b)("p",null,"When running the command ",Object(i.b)("inlineCode",{parentName:"p"},"npm run test")," with the above configuration, FoalTS will try to retrieve the database configuration in this order:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Environment variables."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},".env")," file."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"config/test.yml")," and ",Object(i.b)("inlineCode",{parentName:"li"},"config/test.json"),"."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"config/default.yml")," and ",Object(i.b)("inlineCode",{parentName:"li"},"config/default.json"),".")),Object(i.b)("p",null,"For example, if the environment variable ",Object(i.b)("inlineCode",{parentName:"p"},"DATABASE_PASSWORD")," is defined, Foal will use its value. Otherwise, it will look at the ",Object(i.b)("inlineCode",{parentName:"p"},".env")," file to see if it is defined here. If it is not, it will go through the YAML and JSON ",Object(i.b)("inlineCode",{parentName:"p"},"config/")," files."),Object(i.b)("p",null,"In this way, you can define a default configuration in the ",Object(i.b)("inlineCode",{parentName:"p"},"config/default.{yml|json}")," file to use both during development and testing and override some settings in ",Object(i.b)("inlineCode",{parentName:"p"},"config/test.{yml|json}")," during testing."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You learn more on how configuration works in Foal ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/foal/docs/1.x/deployment-and-environments/configuration"}),"here"))),Object(i.b)("p",null,"In the example below, we add two new options:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dropSchema")," clears the database each time we call ",Object(i.b)("inlineCode",{parentName:"li"},"createConnection")),Object(i.b)("li",{parentName:"ul"},"and ",Object(i.b)("inlineCode",{parentName:"li"},"synchronize")," synchronizes the database tables with your entities so your do not have to generate and run migrations during testing.")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"config/test.yml")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# ...\n\ndatabase:\n  username: 'test'\n  password: 'test'\n  database: 'test'\n  dropSchema: true\n  sychronize: true\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Example of a test")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { createConnection, Connection } from 'typeorm';\n\ndescribe('xxx', () => {\n\n  let connection: Connection;\n\n  beforeEach(() => connection = await createConnection())\n\n  afterEach(() => {\n    if (connection) {\n      connection.close()\n    }\n  });\n\n  it('yyy', () => {\n    // ...\n  });\n\n});\n")))}b.isMDXComponent=!0},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),b=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(r,".").concat(u)]||p[u]||d[u]||i;return n?o.a.createElement(m,l(l({ref:t},c),{},{components:n})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);