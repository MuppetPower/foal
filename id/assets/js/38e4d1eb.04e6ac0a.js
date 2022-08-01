"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6747],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>c});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),l=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),c=r,y=d["".concat(u,".").concat(c)]||d[c]||m[c]||i;return t?a.createElement(y,o(o({ref:n},p),{},{components:t})):a.createElement(y,o({ref:n},p))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3876:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const i={title:"Generate & Run Migrations"},o=void 0,s={unversionedId:"databases/generate-and-run-migrations",id:"version-1.x/databases/generate-and-run-migrations",title:"Generate & Run Migrations",description:"Database migrations are a way of propagating changes you make to your entities into your database schema. The changes you make to your models (adding a field, deleting an entity, etc.) do not automatically modify your database. You have to do it yourself.",source:"@site/versioned_docs/version-1.x/databases/generate-and-run-migrations.md",sourceDirName:"databases",slug:"/databases/generate-and-run-migrations",permalink:"/id/docs/1.x/databases/generate-and-run-migrations",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/databases/generate-and-run-migrations.md",tags:[],version:"1.x",frontMatter:{title:"Generate & Run Migrations"},sidebar:"someSidebar",previous:{title:"Create Models & Queries",permalink:"/id/docs/1.x/databases/create-models-and-queries"},next:{title:"MongoDB (TypeORM or Mongoose)",permalink:"/id/docs/1.x/databases/mongodb"}},u={},l=[{value:"The Commands",id:"the-commands",level:2},{value:"Generating Migrations Automatically",id:"generating-migrations-automatically",level:3},{value:"Run the migrations",id:"run-the-migrations",level:3},{value:"Revert the last migration",id:"revert-the-last-migration",level:3},{value:"A Complete Example",id:"a-complete-example",level:3},{value:"The <code>synchronize</code> and <code>dropSchema</code> options",id:"the-synchronize-and-dropschema-options",level:2},{value:"Advanced",id:"advanced",level:2}],p={toc:l};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Database migrations are a way of propagating changes you make to your entities into your database schema. The changes you make to your models (adding a field, deleting an entity, etc.) do not automatically modify your database. You have to do it yourself."),(0,r.kt)("p",null,"You have two options: update the database schema manually (using database software, for example) or run migrations."),(0,r.kt)("p",null,"Migrations are a programmatic technique for updating or reverting a database schema in a predictable and repeatable way. They are defined with classes, each of which has an ",(0,r.kt)("inlineCode",{parentName:"p"},"up")," method and a ",(0,r.kt)("inlineCode",{parentName:"p"},"down")," method. The first one contains SQL queries to update the database schema to reflect the new models. The second contains SQL queries to revert the changes made by the ",(0,r.kt)("inlineCode",{parentName:"p"},"up")," method."),(0,r.kt)("p",null,"Theses classes are located in separate files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/migrations")," directory."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example of a migration file")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { MigrationInterface, QueryRunner } from \'typeorm\';\n\nexport class PostRefactoringTIMESTAMP implements MigrationInterface {\n    \n    async up(queryRunner: QueryRunner): Promise<any> {\n        await queryRunner.query(`ALTER TABLE "post" RENAME COLUMN "title" TO "name"`);\n    }\n\n    async down(queryRunner: QueryRunner): Promise<any> { \n        await queryRunner.query(`ALTER TABLE "post" RENAME COLUMN "name" TO "title"`); // reverts things made in "up" method\n    }\n}\n')),(0,r.kt)("h2",{id:"the-commands"},"The Commands"),(0,r.kt)("h3",{id:"generating-migrations-automatically"},"Generating Migrations Automatically"),(0,r.kt)("p",null,"Usually, you do not need to write migrations manually. TypeORM offers a powerful feature to generate your migration files based on the changes you make to your entities."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"---\ntitle: Build the entities\n---\nnpm run build:app\n---\ntitle: Generate the migration file based on the entities changes\n---\nnpm run migration:generate -- -n name-of-this-migration\n---\ntitle: Build the migration files\n---\nnpm run build:migrations\n")),(0,r.kt)("h3",{id:"run-the-migrations"},"Run the migrations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm run migration:run\n")),(0,r.kt)("h3",{id:"revert-the-last-migration"},"Revert the last migration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm run migration:revert\n")),(0,r.kt)("h3",{id:"a-complete-example"},"A Complete Example"),(0,r.kt)("p",null,"\xa0","1. Create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," entity."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n}\n")),(0,r.kt)("p",null,"\xa0","2. Build the application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run build:app\n")),(0,r.kt)("p",null,"\xa0","3. Generate a migration file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run migration:generate -- --name add-user\n")),(0,r.kt)("p",null,"A new file ",(0,r.kt)("inlineCode",{parentName:"p"},"xxx-add-user.ts")," appears in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/directory"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import {MigrationInterface, QueryRunner} from "typeorm";\n\nexport class addUser1561976236112 implements MigrationInterface {\n\n    public async up(queryRunner: QueryRunner): Promise<any> {\n        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL)`);\n    }\n\n    public async down(queryRunner: QueryRunner): Promise<any> {\n        await queryRunner.query(`DROP TABLE "user"`);\n    }\n\n}\n\n')),(0,r.kt)("p",null,"\xa0","4. Build and run the migration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run build:migrations\nnpm run migration:run\n")),(0,r.kt)("p",null,"\xa0","5. Add new columns to the entity."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { hashPassword } from '@foal/core';\nimport { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n  @Column()\n  password: string;\n\n  async setPassword(password: string) {\n    this.password = await hashPassword(password);\n  }\n\n}\n\n")),(0,r.kt)("p",null,"\xa0","6. Build the application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run build:app\n")),(0,r.kt)("p",null,"\xa0","7. Generate another migration file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run migration:generate -- --name add-email-and-password\n")),(0,r.kt)("p",null,"Another file ",(0,r.kt)("inlineCode",{parentName:"p"},"xxx-add-email-and-password.ts")," appears in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/directory"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import {MigrationInterface, QueryRunner} from "typeorm";\n\nexport class addEmailAndPassword1561981516514 implements MigrationInterface {\n\n    public async up(queryRunner: QueryRunner): Promise<any> {\n        await queryRunner.query(`CREATE TABLE "temporary_user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, CONSTRAINT "UQ_ed766a9782779b8390a2a81f444" UNIQUE ("email"))`);\n        await queryRunner.query(`INSERT INTO "temporary_user"("id") SELECT "id" FROM "user"`);\n        await queryRunner.query(`DROP TABLE "user"`);\n        await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);\n    }\n\n    public async down(queryRunner: QueryRunner): Promise<any> {\n        await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);\n        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL)`);\n        await queryRunner.query(`INSERT INTO "user"("id") SELECT "id" FROM "temporary_user"`);\n        await queryRunner.query(`DROP TABLE "temporary_user"`);\n    }\n\n}\n\n')),(0,r.kt)("p",null,"\xa0","8. Build and run the migration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run build:migrations\nnpm run migration:run\n")),(0,r.kt)("h2",{id:"the-synchronize-and-dropschema-options"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"synchronize")," and ",(0,r.kt)("inlineCode",{parentName:"h2"},"dropSchema")," options"),(0,r.kt)("p",null,"These two options are particularly useful for testing."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"synchronize")," - Indicates if database schema should be auto created on every application launch."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dropSchema")," - Drops the schema each time connection is being established.")),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"synchronize")," option for production is not recommended as you could loose data by mistake."),(0,r.kt)("h2",{id:"advanced"},"Advanced"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"http://typeorm.io/#/migrations"},"TypeORM documentation")," gives more details on how to write migrations."))}m.isMDXComponent=!0}}]);