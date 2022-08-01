"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4185],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=l(a),m=o,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||s;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,i=new Array(s);i[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var l=2;l<s;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9973:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var n=a(7462),o=(a(7294),a(3905));const s={title:"AWS Beanstalk"},i=void 0,r={unversionedId:"cloud/aws-beanstalk",id:"version-1.x/cloud/aws-beanstalk",title:"AWS Beanstalk",description:"This tutorial shows how to deploy an application with an SQL database to AWS Beanstalk. It assumes that you already have an AWS account and have access to your console.",source:"@site/versioned_docs/version-1.x/cloud/aws-beanstalk.md",sourceDirName:"cloud",slug:"/cloud/aws-beanstalk",permalink:"/docs/1.x/cloud/aws-beanstalk",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/cloud/aws-beanstalk.md",tags:[],version:"1.x",frontMatter:{title:"AWS Beanstalk"},sidebar:"someSidebar",previous:{title:"E2E Testing",permalink:"/docs/1.x/testing/e2e-testing"},next:{title:"Firebase",permalink:"/docs/1.x/cloud/firebase"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Do not use SQLite",id:"do-not-use-sqlite",level:3},{value:"Configure the Database Credentials",id:"configure-the-database-credentials",level:3},{value:"Sessions",id:"sessions",level:3},{value:"Case 1: The application does not use sessions",id:"case-1-the-application-does-not-use-sessions",level:4},{value:"Case 2: The application uses sessions",id:"case-2-the-application-uses-sessions",level:4},{value:"Create the AWS Application and Add a Database",id:"create-the-aws-application-and-add-a-database",level:2},{value:"Deploy the Foal Application",id:"deploy-the-foal-application",level:2},{value:"Generate &amp; Run the Database Migrations",id:"generate--run-the-database-migrations",level:2}],c={toc:l};function d(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This tutorial shows how to deploy an application with an SQL database to ",(0,o.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/elasticbeanstalk/home"},"AWS Beanstalk"),". It assumes that you already have an AWS account and have access to your console.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("h3",{id:"do-not-use-sqlite"},"Do not use SQLite"),(0,o.kt)("p",null,"SQLite databases are not supported by AWS Beanstalk. You have to use a different one such as Postgres, MySQL, MariaDB, Oracle or MSSQL."),(0,o.kt)("p",null,"Make sure that the SQLite driver is also uninstalled."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm uninstall sqlite3 connect-sqlite3\n")),(0,o.kt)("h3",{id:"configure-the-database-credentials"},"Configure the Database Credentials"),(0,o.kt)("p",null,"Replace your ",(0,o.kt)("inlineCode",{parentName:"p"},"ormconfig.js")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"ormconfig.yml")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ormconfig.json"),") file with this one:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"ormconfig.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { Config } = require('@foal/core');\n\nmodule.exports = {\n  type: Config.get('database.type'),\n  url: Config.get('database.url'),\n  database: process.env.RDS_DB_NAME || Config.get('database.name'),\n  port: process.env.RDS_PORT || Config.get('database.port'),\n  host: process.env.RDS_HOSTNAME || Config.get('database.host'),\n  username: process.env.RDS_USERNAME || Config.get('database.username'),\n  password: process.env.RDS_PASSWORD || Config.get('database.password'),\n  entities: [\"build/app/**/*.entity.js\"],\n  migrations: [\"build/migrations/*.js\"],\n  cli: {\n    \"migrationsDir\": \"src/migrations\"\n  },\n  synchronize: Config.get('database.synchronize')\n};\n\n")),(0,o.kt)("p",null,"And complete your configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"config/default.json")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"config/default.yml"),") with your local database credentials:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The below credentials are an example. If you want to use them, you need to install PostgreSQL on your local host, create a database named ",(0,o.kt)("inlineCode",{parentName:"p"},"my-db")," and install the postgres driver in your project (",(0,o.kt)("inlineCode",{parentName:"p"},"npm install pg"),"). But you are free to use another database with other credentials if you want to.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    // ...\n  },\n  "database": {\n    "type": "postgres",\n    "name": "my-db",\n    "port": 5432,\n    "username": "postgres",\n    "synchronize": true\n  }\n}\n')),(0,o.kt)("h3",{id:"sessions"},"Sessions"),(0,o.kt)("h4",{id:"case-1-the-application-does-not-use-sessions"},"Case 1: The application does not use sessions"),(0,o.kt)("p",null,"If you do not use sessions, then remove the store import and the store option from the ",(0,o.kt)("inlineCode",{parentName:"p"},"createApp")," function in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/index.ts")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import 'source-map-support/register';\n\n// std\nimport * as http from 'http';\n\n// 3p\nimport { Config, createApp } from '@foal/core';\n// The store import is removed.\nimport { createConnection } from 'typeorm';\n\n// App\nimport { AppController } from './app/app.controller';\n\nasync function main() {\n  await createConnection();\n\n  // The store option is removed.\n  const app = createApp(AppController);\n\n  const httpServer = http.createServer(app);\n  const port = Config.get('port', 3001);\n  httpServer.listen(port, () => {\n    console.log(`Listening on port ${port}...`);\n  });\n}\n\nmain();\n\n")),(0,o.kt)("h4",{id:"case-2-the-application-uses-sessions"},"Case 2: The application uses sessions"),(0,o.kt)("p",null,"If your application uses sessions, you need to provide a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/expressjs/session#compatible-session-stores"},"session store"),"."),(0,o.kt)("p",null,"Here is an example with ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/connect-redis"},"connect-redis"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import 'source-map-support/register';\n\n// std\nimport * as http from 'http';\n\n// 3p\nimport { Config, createApp } from '@foal/core';\nimport * as redisStoreFactory from 'connect-redis';\nimport { createConnection } from 'typeorm';\n\n// App\nimport { AppController } from './app/app.controller';\n\nasync function main() {\n  await createConnection();\n\n  const app = createApp(AppController, {\n    store: session => new (redisStoreFactory(session))(/* options */)\n  });\n\n  const httpServer = http.createServer(app);\n  const port = Config.get('port', 3001);\n  httpServer.listen(port, () => {\n    console.log(`Listening on port ${port}...`);\n  });\n}\n\nmain();\n\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This guide does not explain how to set up a redis database on AWS Beanstalk.")),(0,o.kt)("h2",{id:"create-the-aws-application-and-add-a-database"},"Create the AWS Application and Add a Database"),(0,o.kt)("p",null,"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/elasticbeanstalk/home"},"https://console.aws.amazon.com/elasticbeanstalk/home")," and click on ",(0,o.kt)("em",{parentName:"p"},"Get Started"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AWS Beanstalk home page",src:a(343).Z,width:"2560",height:"972"})),(0,o.kt)("p",null,"Enter the name of your application, choose the ",(0,o.kt)("em",{parentName:"p"},"Node.js")," platform and select the ",(0,o.kt)("em",{parentName:"p"},"Sample Application"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create Application page",src:a(7988).Z,width:"1684",height:"1304"})),(0,o.kt)("p",null,"AWS creates and loads the new application. ",(0,o.kt)("strong",{parentName:"p"},"This takes a few minutes"),". Then check that the application ",(0,o.kt)("em",{parentName:"p"},"health")," is ok and open the application."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the health is incorrect, click on the ",(0,o.kt)("em",{parentName:"p"},"Causes")," button to see what happened.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dashboard",src:a(1055).Z,width:"2554",height:"1160"})),(0,o.kt)("p",null,"The home page should look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sample Application",src:a(8741).Z,width:"2552",height:"702"})),(0,o.kt)("p",null,"Now it is time to configure your environment and add a database. Click on the ",(0,o.kt)("em",{parentName:"p"},"Configuration")," button and set the environment variables ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"DATABASE_SYNCHRONIZE"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," variable tells FoalTS to look at the production configuration (for example ",(0,o.kt)("inlineCode",{parentName:"p"},"config/production.json"),")."),(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DATABASE_SYNCHRONIZE")," variable tells TypeORM not to update the database schema on every application launch (see section ",(0,o.kt)("a",{parentName:"p",href:"#Generate-&-Run-the-Database-Migrations"},"Generate & Run the Database Migrations")," below).")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Configuration Overview",src:a(4179).Z,width:"2550",height:"844"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Software Configuration",src:a(7989).Z,width:"2104",height:"610"})),(0,o.kt)("p",null,"Then create a new database from the configuration page."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Configuration Overview",src:a(641).Z,width:"2106",height:"364"})),(0,o.kt)("p",null,"Choose the database engine (postgres in this example) and enter the production database credentials."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Database Page",src:a(39).Z,width:"2228",height:"1296"})),(0,o.kt)("h2",{id:"deploy-the-foal-application"},"Deploy the Foal Application"),(0,o.kt)("p",null,"Build the app."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm run build:app\n")),(0,o.kt)("p",null,"Create an archive from the directories and files ",(0,o.kt)("inlineCode",{parentName:"p"},"build/"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"config/"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"public/"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ormconfig.json"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"package-lock.json")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"File compression",src:a(2031).Z,width:"706",height:"568"})),(0,o.kt)("p",null,"Upload the archive to AWS."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Upload the archive",src:a(8779).Z,width:"2534",height:"912"}),"\n",(0,o.kt)("img",{alt:"Upload the archive",src:a(2556).Z,width:"2550",height:"516"})),(0,o.kt)("p",null,"The application restarts. This may take a few minutes."),(0,o.kt)("h2",{id:"generate--run-the-database-migrations"},"Generate & Run the Database Migrations"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Warning, warning: this section is only compatible with projects created with FoalTS v0.8. If you need a tutorial for v1 and above, feel free to open a Github issue for that.")),(0,o.kt)("p",null,"Migrations are SQL queries that modify the database schemas (definition of the tables, relations, etc). By default, every new Foal project is created with the option ",(0,o.kt)("inlineCode",{parentName:"p"},"synchronize: true")," in its ",(0,o.kt)("inlineCode",{parentName:"p"},"ormconfig"),". This setting updates the database schema on every launch of the application."),(0,o.kt)("p",null,"But using this in production is considered unsafe (data could be lost for example if a model is changed by mistake). That's why we will generate and run migrations manually. To do this, we will need access to the database."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Warning")," This section assumes that you have previously set the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"DATABASE_SYNCHRONIZE")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". This overrides the ",(0,o.kt)("inlineCode",{parentName:"p"},"synchronize")," setting on AWS.")),(0,o.kt)("p",null,"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/rds/home#databases:"},"AWS database page")," and click on your database."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AWS database page",src:a(7333).Z,width:"2542",height:"838"})),(0,o.kt)("p",null,"Save the URL endpoint and click on the VPC security group. We will tell AWS that we can access the database from our local host."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AWS database page",src:a(9800).Z,width:"2518",height:"996"})),(0,o.kt)("p",null,"Add a new ",(0,o.kt)("em",{parentName:"p"},"inbound")," rule. ",(0,o.kt)("strong",{parentName:"p"},"Make sure you don't delete the one that already exists.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"VPC security group",src:a(1582).Z,width:"2552",height:"750"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"VPC security group (rules)",src:a(5764).Z,width:"1828",height:"586"})),(0,o.kt)("p",null,"You are now able to communicate from your local host with the production database  (as long as you provide the correct credentials)."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The next part of the tutorial assumes that you did not change the default option ",(0,o.kt)("inlineCode",{parentName:"p"},"synchronize: true")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ormconfig")," file. This is probably the case if you have never had to deal with migrations before.")),(0,o.kt)("p",null,"Open ",(0,o.kt)("strong",{parentName:"p"},"a new terminal/console"),"."),(0,o.kt)("p",null,"Enter the database credentials."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"On Mac and Linux")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export DATABASE_HOST=<the previous saved endpoint>\nexport DATABASE_USERNAME=<the database username> # in the tutorial, it is myusername\nexport DATABASE_PASSWORD=<the database password>\nexport DATABASE_NAME=ebdb\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"On Windows")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"set DATABASE_HOST=<the previous saved endpoint>\nset DATABASE_USERNAME=<the database username> # in the tutorial, it is myusername\nset DATABASE_PASSWORD=<the database password>\nset DATABASE_NAME=ebdb\n")),(0,o.kt)("p",null,"Generate the migration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run migration:generate -- --name first-migration\n")),(0,o.kt)("p",null,"A new migration file appears in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/migrations/"),". Check that it is correct and then build it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build:migrations\n")),(0,o.kt)("p",null,"Then run the migration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run migration:run\n")),(0,o.kt)("p",null,"The database schema is updated. Your remote application should now run properly."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Close your terminal / console"),". Do not start your local application in the same terminal, otherwise it will run on your production database."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Caution:")," Running migrations is always sensitive part of deployments. You should always back up your data before doing such a thing.")))}d.isMDXComponent=!0},343:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws1-8e36cc54e3a8df70b6939fddc5fe69e9.png"},8779:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws10-6d51005ac43c407895543aa92fb37693.png"},2556:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws11-77640fb0eb9bd0abf66bb1f1e684ab66.png"},7333:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws12-3fbd62cda7c19292f9d61c058e534ab6.png"},9800:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws13-13929466f6a103691a81caab58042245.png"},1582:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws14-55cbcfd32f00835479e6430ea6fbce28.png"},5764:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws15-2016e4a621bad8bdcc1cb107774af1ff.png"},7988:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws2-a2aeaf3fa13eb427c83b25fbd5f0fd89.png"},1055:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws3-4f4fa51399f283d768c7a71dad4e1dfd.png"},8741:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws4-205d0160bf165339eb387b54c8343b6e.png"},4179:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws5-cd92a1a826d5aee626c37f75d400d43a.png"},7989:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws6-71487d0874c8bcd18cf5cd0a75d8b0d0.png"},641:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws7-b8d41622926735f0fcc236f1c431be95.png"},39:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws8-a89cc1acd85d857a6869c097dc354e04.png"},2031:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws9-4b34c54819c88c385469c69cdfabf2af.png"}}]);