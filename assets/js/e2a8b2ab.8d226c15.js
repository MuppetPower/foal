"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2649],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"The User and Story Models",id:"tuto-3-the-models",slug:"3-the-models"},l=void 0,i={unversionedId:"tutorials/real-world-example-with-react/tuto-3-the-models",id:"tutorials/real-world-example-with-react/tuto-3-the-models",title:"The User and Story Models",description:"Now that the database connection is established, you can create your two entities User and Story.",source:"@site/docs/tutorials/real-world-example-with-react/3-the-models.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/3-the-models",permalink:"/docs/tutorials/real-world-example-with-react/3-the-models",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/3-the-models.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"The User and Story Models",id:"tuto-3-the-models",slug:"3-the-models"},sidebar:"someSidebar",previous:{title:"Database Set Up",permalink:"/docs/tutorials/real-world-example-with-react/2-database-set-up"},next:{title:"The Shell Scripts",permalink:"/docs/tutorials/real-world-example-with-react/4-the-shell-scripts"}},s={},p=[{value:"The <code>User</code> Model",id:"the-user-model",level:2},{value:"The <code>Story</code> Model",id:"the-story-model",level:2},{value:"Run Migrations",id:"run-migrations",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Now that the database connection is established, you can create your two entities ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Story"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," entity will be the model used by the framework to identify users and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Story")," entity will represent the users' posts."),(0,a.kt)("h2",{id:"the-user-model"},"The ",(0,a.kt)("inlineCode",{parentName:"h2"},"User")," Model"),(0,a.kt)("p",null,"Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"user.entity.ts")," file from the ",(0,a.kt)("inlineCode",{parentName:"p"},"entities")," directory and add four new properties to your model: ",(0,a.kt)("inlineCode",{parentName:"p"},"email"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"password"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"avatar"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"avatar")," column will contain the paths to the profile images."),(0,a.kt)("p",null,"You will also need to export an additional model ",(0,a.kt)("inlineCode",{parentName:"p"},"DatabaseSession")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"@foal/typeorm")," package. You don't need to worry about it now, it will be used later in the tutorial when you add authentication."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n  @Column()\n  password: string;\n\n  @Column()\n  name: string;\n\n  @Column()\n  avatar: string;\n\n}\n\n// This line is required. It will be used to create the SQL session table later in the tutorial.\nexport { DatabaseSession } from '@foal/typeorm';\n")),(0,a.kt)("h2",{id:"the-story-model"},"The ",(0,a.kt)("inlineCode",{parentName:"h2"},"Story")," Model"),(0,a.kt)("p",null,"Then create your second entity."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"foal generate entity story\n")),(0,a.kt)("p",null,"Open the new file and add three new properties: ",(0,a.kt)("inlineCode",{parentName:"p"},"author"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"link"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';\nimport { User } from './user.entity';\n\n@Entity()\nexport class Story extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @ManyToOne(type => User, { nullable: false })\n  author: User;\n\n  @Column()\n  title: string;\n\n  @Column()\n  link: string;\n\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"By default, TypeORM allows ",(0,a.kt)("em",{parentName:"p"},"many-to-one")," relationships to be nullable. The option passed to the decorator specifies that this one cannot be.")),(0,a.kt)("h2",{id:"run-migrations"},"Run Migrations"),(0,a.kt)("p",null,"Finally, create the tables in the database. Generate the migrations from the entities and run them."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run makemigrations\nnpm run migrations\n")),(0,a.kt)("p",null,"Three new tables are added to the database: the ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"story")," tables and a ",(0,a.kt)("inlineCode",{parentName:"p"},"sessions")," table."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"+------------+-----------+-------------------------------------+\n|                             user                             |\n+------------+-----------+-------------------------------------+\n| id         | integer   | PRIMARY KEY AUTO_INCREMENT NOT NULL |\n| email      | varchar   | UNIQUE NOT NULL                     |\n| password   | varchar   | NOT NULL                            |\n| name       | varchar   | NOT NULL                            |\n| avatar     | varchar   | NOT NULL                            |\n+------------+-----------+-------------------------------------+\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"+------------+-----------+-------------------------------------+\n|                             story                            |\n+------------+-----------+-------------------------------------+\n| id         | integer   | PRIMARY KEY AUTO_INCREMENT NOT NULL |\n| authorId   | integer   | NOT NULL                            |\n| title      | varchar   | NOT NULL                            |\n| link       | varchar   | NOT NULL                            |\n+------------+-----------+-------------------------------------+\n")))}u.isMDXComponent=!0}}]);