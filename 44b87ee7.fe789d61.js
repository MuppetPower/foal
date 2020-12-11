(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{125:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(250)),p={title:"OpenAPI & Swagger UI"},i={unversionedId:"api-section/openapi-and-swagger-ui",id:"version-1.x/api-section/openapi-and-swagger-ui",isDocsHomePage:!1,title:"OpenAPI & Swagger UI",description:"Introduction",source:"@site/versioned_docs/version-1.x/api-section/openapi-and-swagger-ui.md",slug:"/api-section/openapi-and-swagger-ui",permalink:"/foal/docs/1.x/api-section/openapi-and-swagger-ui",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/api-section/openapi-and-swagger-ui.md",version:"1.x",sidebar:"someSidebar",previous:{title:"REST API",permalink:"/foal/docs/1.x/api-section/rest-blueprints"},next:{title:"Public API & CORS Requests",permalink:"/foal/docs/1.x/api-section/public-api-and-cors-requests"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"OpenAPI",id:"openapi",children:[{value:"The Basics",id:"the-basics",children:[]},{value:"The Other Operation Decorators",id:"the-other-operation-decorators",children:[]},{value:"Don&#39;t Repeat Yourself and Decorate Sub-Controllers",id:"dont-repeat-yourself-and-decorate-sub-controllers",children:[]},{value:"Use Existing Hooks",id:"use-existing-hooks",children:[]}]},{value:"Swagger UI",id:"swagger-ui",children:[{value:"Simple case",id:"simple-case",children:[]},{value:"With an URL",id:"with-an-url",children:[]},{value:"Several APIs or Versions",id:"several-apis-or-versions",children:[]},{value:"Using a Static File",id:"using-a-static-file",children:[]}]},{value:"Advanced",id:"advanced",children:[{value:"Using Controller Properties",id:"using-controller-properties",children:[]},{value:"The <code>OpenAPI</code> service",id:"the-openapi-service",children:[]},{value:"In-Depth Overview",id:"in-depth-overview",children:[]},{value:"Define and Reuse Components",id:"define-and-reuse-components",children:[]},{value:"Generate and Save a Specification File with a Shell Script",id:"generate-and-save-a-specification-file-with-a-shell-script",children:[]},{value:"Common Error with <code>createOpenApiDocument</code>",id:"common-error-with-createopenapidocument",children:[]},{value:"Extend Swagger UI options",id:"extend-swagger-ui-options",children:[]}]}],l={rightToc:c};function s(e){var n=e.components,p=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,p,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"OpenAPI Specification")," (formerly known as Swagger Specification) is an API description format for REST APIs. An OpenAPI ",Object(o.b)("em",{parentName:"p"},"document")," allows developers to describe entirely an API."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Swagger UI")," is a graphical interface to visualize and interact with the API\u2019s resources. It is automatically generated from one or several OpenAPI documents."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://editor.swagger.io/"}),"Example of OpenAPI document and Swagger Visualisation"))),Object(o.b)("h2",{id:"openapi"},"OpenAPI"),Object(o.b)("h3",{id:"the-basics"},"The Basics"),Object(o.b)("p",null,"The first thing to do is to add the ",Object(o.b)("inlineCode",{parentName:"p"},"@ApiInfo")," decorator to the root controller of the API. Two attributes are required: the ",Object(o.b)("inlineCode",{parentName:"p"},"title")," of the application and the ",Object(o.b)("inlineCode",{parentName:"p"},"version")," of the OpenAPI document."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { ApiInfo } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\n// @ApiServer({\n//   url: '/api'\n// })\nexport class ApiController {\n  // ...\n}\n")),Object(o.b)("p",null,"Then each controller method can be documented with the ",Object(o.b)("inlineCode",{parentName:"p"},"@ApiOperation")," decorator."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { ApiOperation, Get } from '@foal/core';\n\n// ...\nexport class ApiController {\n  @Get('/products')\n  @ApiOperation({\n    responses: {\n      200: {\n        content: {\n          'application/json': {\n            schema: {\n              items: {\n                properties: {\n                  name: { type: 'string' }\n                }\n                type: 'object',\n                required: [ 'name' ]\n              },\n              type: 'array',\n            }\n          }\n        }\n        description: 'successful operation'\n      }\n    },\n    summary: 'Return a list of all the products.'\n  })\n  readProducts() {\n    // ...\n  }\n}\n")),Object(o.b)("p",null,"Calling ",Object(o.b)("inlineCode",{parentName:"p"},"createOpenApiDocument(ApiController)")," will generate and return the below document (presented in YAML here but the actual returned value is a JS object). This function can be imported from the ",Object(o.b)("inlineCode",{parentName:"p"},"@foal/core")," package."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"openapi: 3.0.0\ninfo:\n  title: 'A Great API'\n  version: 1.0.0\npaths:\n  /products:\n    get:\n      responses:\n        200:\n          content:\n            application/json:\n              schema:\n                type: array\n                items:\n                  type: object\n                  properties:\n                    name:\n                      type: string\n                  required:\n                  - name\n          description: successful operation\n      summary: 'Return a list of all the products.'\n")),Object(o.b)("h3",{id:"the-other-operation-decorators"},"The Other Operation Decorators"),Object(o.b)("p",null,"Using the ",Object(o.b)("inlineCode",{parentName:"p"},"@ApiOperation")," decorator can sometimes be cumbersome. That is why FoalTS provides other alternative decorators to improve code readability."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Operation Decorators"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiOperationSummary"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiOperationId"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiOperationDescription"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiServer"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiRequestBody"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiSecurityRequirement"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiDefineTag"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiExternalDoc"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiUseTag"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiParameter"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiResponse"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiCallback"))))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { ApiOperation, ApiResponse, Get } from '@foal/core';\n// ...\nexport class ApiController {\n\n  @Get('/products')\n  @ApiOperation({\n    responses: {\n      200: {\n        description: 'successful operation'\n      },\n      404: {\n        description: 'not found'\n      },\n    }\n  })\n  readProducts() {\n    // ...\n  }\n\n  // is equivalent to\n\n  @Get('/products')\n  @ApiResponse(200, { description: 'successful operation' })\n  @ApiResponse(404, { description: 'not found' })\n  readProducts() {\n    // ...\n  }\n\n}\n")),Object(o.b)("h3",{id:"dont-repeat-yourself-and-decorate-sub-controllers"},"Don't Repeat Yourself and Decorate Sub-Controllers"),Object(o.b)("p",null,"Large applications can have many subcontrollers. FoalTS automatically resolves the paths for you and allows you to share common specifications between several operations."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { ApiDeprecated, ApiInfo, ApiResponse, controller, Get } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\nexport class ApiController {\n  subControllers = [\n    controller('/products', ProductController)\n  ];\n}\n\n// All the operations of this controller and\n// its subcontrollers should be deprecated.\n@ApiDeprecated()\nclass ProductController {\n\n  @Get()\n  @ApiResponse(200, { description: 'successful operation' })\n  readProducts() {\n    // ...\n  }\n\n  @Get('/:productId')\n  @ApiResponse(200, { description: 'successful operation' })\n  @ApiResponse(404, { description: 'not found' })\n  readProduct() {\n    // ...\n  }\n\n}\n")),Object(o.b)("p",null,"The document generated by ",Object(o.b)("inlineCode",{parentName:"p"},"createOpenAPIDocument")," will then look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"openapi: 3.0.0\ninfo:\n  title: 'A Great API'\n  version: 1.0.0\npaths:\n  /products: # The path is computed automatically\n    get:\n      deprecated: true # The operation is deprecated\n      responses:\n        200:\n          description: successful operation\n  /products/{productId}: # The path is computed automatically\n    get:\n      deprecated: true # The operation is deprecated\n      responses:\n        200:\n          description: successful operation\n        404:\n          description: not found\n")),Object(o.b)("h3",{id:"use-existing-hooks"},"Use Existing Hooks"),Object(o.b)("p",null,"The addition of these decorators can sometimes be quite redundant with existing hooks. For example, if we want to write OpenAPI documentation for authentication and validation of the request body, we may end up with something like this."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"@JWTRequired()\n@ApiSecurityRequirement({ bearerAuth: [] })\n@ApiDefineSecurityScheme('bearerAuth', {\n  type: 'http',\n  scheme: 'bearer',\n  bearerFormat: 'JWT'\n})\nexport class ApiController {\n  \n  @Post('/products')\n  @ValidateBody(schema)\n  @ApiRequestBody({\n     required: true,\n     content: {\n       'application/json': { schema }\n     }\n  })\n  createProducts() {\n    \n  }\n\n}\n")),Object(o.b)("p",null,"To avoid this, it is possible to generate the OpenAPI documentation from the validation and authentication hooks using the ",Object(o.b)("inlineCode",{parentName:"p"},"openapi")," option."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"@JWTRequired({ openapi: true })\nexport class ApiController {\n  \n  @Post('/products')\n  @ValidateBody(schema, { openapi: true })\n  createProducts() {\n    // ...\n  }\n\n}\n")),Object(o.b)("p",null,"More simply, you can globally set the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/foal/docs/1.x/deployment-and-environments/configuration"}),"configuration key")," ",Object(o.b)("inlineCode",{parentName:"p"},"setting.openapi.useHooks")," to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," so that each authentication and validation hooks generates documentation."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  openapi:\n    useHooks: true\n")),Object(o.b)("p",null,"Note that this global configuration can always be override by setting the ",Object(o.b)("inlineCode",{parentName:"p"},"openapi")," option on each hook."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export class ApiController {\n  \n  @Post('/products')\n  // Generate automatically the OpenAPI spec for the request body\n  @ValidateBody(schema)\n  // Choose to write a customize spec for the path parameters\n  @ValidateParams(schema2, { openapi: false })\n  @ApiParameter( ... )\n  createProducts() {\n    // ...\n  }\n\n}\n")),Object(o.b)("h2",{id:"swagger-ui"},"Swagger UI"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Example of Swagger UI",src:t(308).default})),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install @foal/swagger\n")),Object(o.b)("h3",{id:"simple-case"},"Simple case"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"app.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { ApiController, OpenApiController } from './controllers';\n\nexport class AppController {\n  subControllers = [\n    controller('/api', ApiController),\n    controller('/swagger', OpenApiController)\n  ]\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"open-api.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { SwaggerController } from '@foal/swagger';\n\nimport { ApiController } from './api.controller';\n\nexport class OpenApiController extends SwaggerController {\n  options = { controllerClass: ApiController };\n}\n\n")),Object(o.b)("p",null,"Opening the browser at the path ",Object(o.b)("inlineCode",{parentName:"p"},"/swagger")," will display the documentation of the ",Object(o.b)("inlineCode",{parentName:"p"},"ApiController"),"."),Object(o.b)("h3",{id:"with-an-url"},"With an URL"),Object(o.b)("p",null,"If needed, you can also specify the URL of a custom OpenAPI file (YAML or JSON)."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { SwaggerController } from '@foal/swagger';\n\nexport class OpenApiController extends SwaggerController {\n  options = { url: 'https://petstore.swagger.io/v2/swagger.json' };\n}\n\n")),Object(o.b)("h3",{id:"several-apis-or-versions"},"Several APIs or Versions"),Object(o.b)("p",null,"Some applications may serve several APIs (for example two versions of a same API). Here is an example on how to handle this."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Example of several versions",src:t(309).default})),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"app.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { controller } from '@foal/core';\n\nimport { ApiV1Controller, ApiV2ontroller, OpenApiController } from './controllers';\n\nexport class AppController {\n  subControllers = [\n    controller('/api', ApiV1Controller),\n    controller('/api/v2', ApiV2Controller),\n    controller('/swagger', OpenApiController),\n  ]\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"open-api.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { SwaggerController } from '@foal/swagger';\n\nimport { ApiV1Controller } from './api-v1.controller';\nimport { ApiV2Controller } from './api-v2.controller';\n\nexport class OpenApiController extends SwaggerController {\n  options = [\n    { name: 'v1', controllerClass: ApiV1Controller },\n    { name: 'v2', controllerClass: ApiV2Controller, primary: true },\n  ]\n}\n")),Object(o.b)("h3",{id:"using-a-static-file"},"Using a Static File"),Object(o.b)("p",null,"If you prefer to write manually your OpenAPI document, you can add an ",Object(o.b)("inlineCode",{parentName:"p"},"openapi.yml")," file in the ",Object(o.b)("inlineCode",{parentName:"p"},"public/")," directory and configure your ",Object(o.b)("inlineCode",{parentName:"p"},"SwaggerController")," as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { SwaggerController } from '@foal/swagger';\n\nexport class OpenApiController extends SwaggerController {\n  options = { url: '/openapi.yml' };\n}\n\n")),Object(o.b)("h2",{id:"advanced"},"Advanced"),Object(o.b)("h3",{id:"using-controller-properties"},"Using Controller Properties"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { ApiRequestBody, IApiRequestBody, Post } from '@foal/core';\n\nclass ApiController {\n\n  requestBody: IApiRequestBody = {\n    content: {\n      'application/json': {\n        schema: {\n          type: 'object'\n        }\n      }\n    },\n    required: true\n  };\n\n  @Post('/products')\n  // This is invalid:\n  // @ApiRequestBody(this.requestBody)\n  // This is valid:\n  @ApiRequestBody(controller => controller.requestBody)\n  createProduct() {\n    // ...\n  }\n\n}\n")),Object(o.b)("h3",{id:"the-openapi-service"},"The ",Object(o.b)("inlineCode",{parentName:"h3"},"OpenAPI")," service"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency, Get, HttpResponseOK, OpenAPI } from '@foal/core';\n\nimport { ApiController } from './api.controller';\n\nexport class OpenApiController {\n  @dependency\n  openapi: OpenAPI;\n\n  @Get('/openapi.json')\n  readDocument() {\n    return new HttpResponseOK(\n      this.openapi.createDocument(ApiController)\n    );\n  }\n}\n")),Object(o.b)("h3",{id:"in-depth-overview"},"In-Depth Overview"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"FoalTS automatically resolves the path items and operations based on your controller paths.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { ApiResponse, Get, Post } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\nexport class ApiController {\n\n  @Get('/products')\n  @ApiResponse(200, { description: 'successful operation' })\n  readProducts() {\n    // ...\n  }\n\n  @Post('/products')\n  @ApiResponse(200, { description: 'successful operation' })\n  createProduct() {\n    // ...\n  }\n\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'openapi: 3.0.0\ninfo:\n  title: \'A Great API\'\n  version: 1.0.0\npaths:\n  /products: # Foal automatically puts the "get" and "post" operations under the same path item as required by OpenAPI rules.\n    get:\n      responses:\n        200:\n          description: successful operation\n    post:\n      responses:\n        200:\n          description: successful operation\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The decorators ",Object(o.b)("inlineCode",{parentName:"li"},"@ApiServer"),", ",Object(o.b)("inlineCode",{parentName:"li"},"@ApiSecurityRequirement")," and ",Object(o.b)("inlineCode",{parentName:"li"},"@ApiExternalDocs")," have a different behavior depending on if they decorate the root controller or a subcontroller / a method.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example with the root controller")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { ApiResponse, ApiServer } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\n@ApiServer({ url: 'http://example.com' })\nexport class ApiController {\n\n  // ...\n\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"openapi: 3.0.0\ninfo:\n  title: 'A Great API'\n  version: 1.0.0\npaths:\n  # ...\nservers:\n- url: http://example.com\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example with a subcontroller / a method")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { ApiResponse, ApiServer, Get } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\nexport class ApiController {\n\n  @Get('/')\n  @ApiServer({ url: 'http://example.com' })\n  @ApiResponse(200, { description: 'successful operation' })\n  index() {\n    // ...\n  }\n\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"openapi: 3.0.0\ninfo:\n  title: 'A Great API'\n  version: 1.0.0\npaths:\n  /:\n    get:\n      responses:\n        200:\n          description: successful operation\n      servers:\n      - url: http://example.com\n")),Object(o.b)("h3",{id:"define-and-reuse-components"},"Define and Reuse Components"),Object(o.b)("p",null,"OpenAPI allows you to define and reuse components. Here is a way to achieve this with Foal."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { ApiInfo, ApiDefineSchema, Get } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\n@ApiDefineSchema('product', {\n  type: 'object',\n  properties: {\n    name: { type: 'string' }\n  }\n  required: [ 'name' ]\n})\nexport class ApiController {\n\n  @Get('/products/:productId')\n  @ApiResponse(200, {\n    content: {\n      'application/json': {\n        schema: { $ref: '#/components/schema/product' }\n      }\n    }\n  })\n  readProducts() {\n    // ...\n  }\n\n  @Get('/products')\n  @ApiResponse(200, {\n    content: {\n      'application/json': {\n        schema: {\n          type: 'array',\n          items: { $ref: '#/components/schema/product' }\n        }\n      }\n    }\n  })\n  readProducts() {\n    // ...\n  }\n\n}\n")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Component Decorators"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiDefineSchema"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiDefineResponse"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiDefineParameter"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiDefineExample"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiDefineRequestBody"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiDefineHeader"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiDefineSecurityScheme"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiDefineLink"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@ApiDefineCallback"))))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"}," The ",Object(o.b)("inlineCode",{parentName:"p"},"@ApiDefineXXX")," decorators can be added to any controllers or methods but they always define components in the global scope.")),Object(o.b)("h3",{id:"generate-and-save-a-specification-file-with-a-shell-script"},"Generate and Save a Specification File with a Shell Script"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"foal generate script generate-openapi-doc\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"src/scripts/generate-openapi-doc.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// std\nimport { writeFileSync } from 'fs';\n\n// 3p\nimport { createOpenApiDocument } from '@foal/core';\nimport { stringify } from 'yamljs';\n\n// App\nimport { ApiController } from '../app/controllers';\n\nexport async function main() {\n  const document = createOpenApiDocument(ApiController);\n  const yamlDocument = stringify(document);\n\n  writeFileSync('openapi.yml', yamlDocument, 'utf8');\n}\n\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm run build:scripts\nfoal run generate-openapi-doc\n")),Object(o.b)("h3",{id:"common-error-with-createopenapidocument"},"Common Error with ",Object(o.b)("inlineCode",{parentName:"h3"},"createOpenApiDocument")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// ...\nexport class ApiController {\n  @Get('/products/:id')\n  getProduct() {\n    return new HttpResponseOK();\n  }\n\n  @Put('/products/:productId')\n  updateProduct() {\n    return new HttpResponseOK();\n  }\n}\n")),Object(o.b)("p",null,"This example will throw this error."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Error: Templated paths with the same hierarchy but different templated names MUST NOT exist as they are identical.\n  Path 1: /products/{id}\n  Path 2: /products/{productId}\n")),Object(o.b)("p",null,"OpenAPI does not support paths that are identical with different parameter names. Here is a way to solve this issue:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// ...\nexport class ApiController {\n  @Get('/products/:productId')\n  getProduct() {\n    return new HttpResponseOK();\n  }\n\n  @Put('/products/:productId')\n  updateProduct() {\n    return new HttpResponseOK();\n  }\n}\n")),Object(o.b)("h3",{id:"extend-swagger-ui-options"},"Extend Swagger UI options"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://swagger.io/docs/open-source-tools/swagger-ui/usage/configuration/"}),"Swagger UI options")," can be extended using the ",Object(o.b)("inlineCode",{parentName:"p"},"uiOptions")," property."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { SwaggerController } from '@foal/swagger';\n\nimport { ApiController } from './api.controller';\n\nexport class OpenApiController extends SwaggerController {\n  options = { controllerClass: ApiController };\n\n  uiOptions = { docExpansion: 'full' };\n}\n\n")))}s.isMDXComponent=!0},250:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(t),u=r,m=b["".concat(p,".").concat(u)]||b[u]||d[u]||o;return t?a.a.createElement(m,i(i({ref:n},l),{},{components:t})):a.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=t[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},308:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/swagger-a641f2dfd065149a6d8c2e98ccad465e.png"},309:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/swagger3-3d35a6bde1ec1156853e65e4be372e6e.png"}}]);