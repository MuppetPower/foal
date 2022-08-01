"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9931],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={title:"REST API"},o=void 0,i={unversionedId:"api-section/rest-blueprints",id:"api-section/rest-blueprints",title:"REST API",description:"Example:",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/api-section/rest-blueprints.md",sourceDirName:"api-section",slug:"/api-section/rest-blueprints",permalink:"/fr/docs/api-section/rest-blueprints",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/api-section/rest-blueprints.md",tags:[],version:"current",frontMatter:{title:"REST API"},sidebar:"someSidebar",previous:{title:"Groupes & Permissions",permalink:"/fr/docs/authentication-and-access-control/groups-and-permissions"},next:{title:"OpenAPI & Swagger UI",permalink:"/fr/docs/api-section/openapi-and-swagger-ui"}},p={},s=[{value:"The API Behavior",id:"the-api-behavior",level:2},{value:"The Resource and its Representation",id:"the-resource-and-its-representation",level:2},{value:"How to Add New Field",id:"how-to-add-new-field",level:3},{value:"Using Authentication",id:"using-authentication",level:2},{value:"Generating OpenAPI documentation",id:"generating-openapi-documentation",level:2}],u={toc:s};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"foal generate rest-api product --register\n")),(0,r.kt)("p",null,"Building a REST API is often a common task when creating an application. To avoid reinventing the wheel, FoalTS provides a CLI command to achieve this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"foal generate rest-api <name> [--register] [--auth]\n")),(0,r.kt)("p",null,"This command generates three files: an entity, a controller and the controller's test. Depending on your directory structure, they may be generated in different locations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"in the directories ",(0,r.kt)("inlineCode",{parentName:"li"},"src/app/controllers")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"src/app/entities")," if they exist"),(0,r.kt)("li",{parentName:"ul"},"or in the directories ",(0,r.kt)("inlineCode",{parentName:"li"},"controllers")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"entities"),".")),(0,r.kt)("p",null,"The generated controller already has a set of implemented routes ",(0,r.kt)("strong",{parentName:"p"},"that you can customize as you like"),". It defines a REST API and is ready to use. The only thing to do is to connect the controller to the ",(0,r.kt)("inlineCode",{parentName:"p"},"AppController")," or one of its children."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--register")," option automatically registers your controller in the ",(0,r.kt)("inlineCode",{parentName:"p"},"AppController"),".")),(0,r.kt)("h2",{id:"the-api-behavior"},"The API Behavior"),(0,r.kt)("p",null,"Below is a table summarizing how the generated API works:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"th"},"HTTP Method")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"th"},"CRUD")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"th"},"Entire Collection (e.g. ",(0,r.kt)("inlineCode",{parentName:"em"},"/products"),")")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"th"},"Specific Item (e.g. ",(0,r.kt)("inlineCode",{parentName:"em"},"/products/{id}"),")")),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"Read"),(0,r.kt)("td",{parentName:"tr",align:null},"200 (OK) - list of products"),(0,r.kt)("td",{parentName:"tr",align:null},"200 (OK) - the product ",(0,r.kt)("br",null)," 404 (Not Found)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},"Create"),(0,r.kt)("td",{parentName:"tr",align:null},"201 (Created) - the created product ",(0,r.kt)("br",null)," 400 (Bad Request) - the validation error"),(0,r.kt)("td",{parentName:"tr",align:null},"Not implemented"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PUT"),(0,r.kt)("td",{parentName:"tr",align:null},"Update/Replace"),(0,r.kt)("td",{parentName:"tr",align:null},"Not implemented"),(0,r.kt)("td",{parentName:"tr",align:null},"200 (OK) - the updated product ",(0,r.kt)("br",null)," 400 (Bad Request) - the validation error ",(0,r.kt)("br",null)," 404 (Not Found)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PATCH"),(0,r.kt)("td",{parentName:"tr",align:null},"Update/Modify"),(0,r.kt)("td",{parentName:"tr",align:null},"Not implemented"),(0,r.kt)("td",{parentName:"tr",align:null},"200 (OK) - the updated product ",(0,r.kt)("br",null)," 400 (Bad Request) - the validation error ",(0,r.kt)("br",null)," 404 (Not Found)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete"),(0,r.kt)("td",{parentName:"tr",align:null},"Not implemented"),(0,r.kt)("td",{parentName:"tr",align:null},"204 (No Content) ",(0,r.kt)("br",null)," 404 (Not Found)"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /<name>s")," routes also accept two optional query parameters ",(0,r.kt)("inlineCode",{parentName:"p"},"skip")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"take")," to handle ",(0,r.kt)("strong",{parentName:"p"},"pagination"),". If the parameters are not valid numbers, the controller responds with a 400 (Bad Request) status."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"skip")," - offset from where items should be taken."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"take")," - max number of items that should be taken.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /products?skip=10&take=20\n")),(0,r.kt)("h2",{id:"the-resource-and-its-representation"},"The Resource and its Representation"),(0,r.kt)("p",null,"Once your API is set up, you can define its attributes."),(0,r.kt)("p",null,"The entity generated by default should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class Product {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  text: string;\n\n}\n")),(0,r.kt)("p",null,"And the schema of your API (defined in the controller file) should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export const productSchhema = {\n  additionalProperties: false,\n  properties: {\n    text: { type: 'string', maxLength: 255 },\n  },\n  required: [ 'text' ],\n  type: 'object',\n};\n")),(0,r.kt)("p",null,"The entity is the ",(0,r.kt)("em",{parentName:"p"},"resource"),". It is the database model used internally on the server."),(0,r.kt)("p",null,"The schema is the ",(0,r.kt)("em",{parentName:"p"},"representation of the resource"),". It defines the interface of the API."),(0,r.kt)("p",null,"In simple scenarios, the two are very similar but they can differ much more in complex applications. A resource may have several representations and it may be made of several entities."),(0,r.kt)("h3",{id:"how-to-add-new-field"},"How to Add New Field"),(0,r.kt)("p",null,"For example, if you want to add a ",(0,r.kt)("inlineCode",{parentName:"p"},"sold")," boolean field whose default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", you can do the following:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"product.entity.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class Product {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  text: string;\n\n  @Column()\n  sold: boolean;\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"product.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export const productSchhema = {\n  additionalProperties: false,\n  properties: {\n    sold: { type: 'boolean', default: false },\n    text: { type: 'string', maxLength: 255 },\n  },\n  required: [ 'text' ],\n  type: 'object',\n};\n")),(0,r.kt)("h2",{id:"using-authentication"},"Using Authentication"),(0,r.kt)("p",null,"If you wish to attach a user to the resource, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--auth")," flag to do so."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"foal generate rest-api product --auth\n")),(0,r.kt)("p",null,"This flags adds an ",(0,r.kt)("inlineCode",{parentName:"p"},"owner: User")," column to your entity and uses it in the API."),(0,r.kt)("h2",{id:"generating-openapi-documentation"},"Generating OpenAPI documentation"),(0,r.kt)("p",null,"The generated controllers also have OpenAPI decorators on their methods to document the API."),(0,r.kt)("p",null,"In this way, when the ",(0,r.kt)("a",{parentName:"p",href:"/fr/docs/architecture/configuration"},"configuration key")," ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.openapi.useHooks")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", we can get a full documentation of the API using ",(0,r.kt)("a",{parentName:"p",href:"/fr/docs/api-section/openapi-and-swagger-ui"},"Swagger UI")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example of documentation",src:n(158).Z,width:"2538",height:"1298"}),"."))}d.isMDXComponent=!0},158:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rest-openapi-28b755aa0e71f5a2a6ec387ea2c8ec98.png"}}]);