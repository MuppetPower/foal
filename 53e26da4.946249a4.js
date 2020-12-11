(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),a=(n(0),n(250)),i={title:"Auth Controllers and Hooks"},s={unversionedId:"tutorials/multi-user-todo-list/5-auth-controllers-and-hooks",id:"version-1.x/tutorials/multi-user-todo-list/5-auth-controllers-and-hooks",isDocsHomePage:!1,title:"Auth Controllers and Hooks",description:"So far, you have defined the User model and written a script to create new users with their password and email address. The next step is to create a controller to log users in or out.",source:"@site/versioned_docs/version-1.x/tutorials/multi-user-todo-list/5-auth-controllers-and-hooks.md",slug:"/tutorials/multi-user-todo-list/5-auth-controllers-and-hooks",permalink:"/foal/docs/1.x/tutorials/multi-user-todo-list/5-auth-controllers-and-hooks",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/tutorials/multi-user-todo-list/5-auth-controllers-and-hooks.md",version:"1.x",sidebar:"someSidebar",previous:{title:"The Shell Scripts",permalink:"/foal/docs/1.x/tutorials/multi-user-todo-list/3-the-shell-scripts"},next:{title:"Todos & Ownership",permalink:"/foal/docs/1.x/tutorials/multi-user-todo-list/6-todos-and-ownership"}},l=[{value:"The Login and Main Pages",id:"the-login-and-main-pages",children:[]},{value:"Login Controllers",id:"login-controllers",children:[]},{value:"The TokenRequired Hook",id:"the-tokenrequired-hook",children:[]}],c={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"So far, you have defined the ",Object(a.b)("inlineCode",{parentName:"p"},"User")," model and written a script to create new users with their password and email address. The next step is to create a controller to log users in or out."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Before this, you must provide a ",Object(a.b)("em",{parentName:"p"},"secret")," to the authentication system. You can generate such one with the following command:"),Object(a.b)("pre",{parentName:"blockquote"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"foal createsecret\n")),Object(a.b)("p",{parentName:"blockquote"},"Then create a ",Object(a.b)("inlineCode",{parentName:"p"},".env")," file containing your secret at the root of your project."),Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("em",{parentName:"p"},".env")),Object(a.b)("pre",{parentName:"blockquote"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"SETTINGS_SESSION_SECRET=my-secret\n"))),Object(a.b)("p",null,"Here is the architecture that we want:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Users load the page ",Object(a.b)("inlineCode",{parentName:"li"},"/signin"),", enter their credentials and then are redirected to the page ",Object(a.b)("inlineCode",{parentName:"li"},"/")," if the credentials are correct. If they are not, users are redirected to ",Object(a.b)("inlineCode",{parentName:"li"},"/signin?bad_credentials=true"),". The ",Object(a.b)("inlineCode",{parentName:"li"},"bad_credentials")," parameter tells the page to show the error message ",Object(a.b)("inlineCode",{parentName:"li"},"Invalid email or password"),"."),Object(a.b)("li",{parentName:"ol"},"Users can view, create and delete their todos in the page ",Object(a.b)("inlineCode",{parentName:"li"},"/"),"."),Object(a.b)("li",{parentName:"ol"},"When they click the button ",Object(a.b)("inlineCode",{parentName:"li"},"Log out"),", they are deconnected and redirected to the page ",Object(a.b)("inlineCode",{parentName:"li"},"/signin"),".")),Object(a.b)("p",null,"When the user presses the ",Object(a.b)("inlineCode",{parentName:"p"},"Log in")," button in the login page, the page requests ",Object(a.b)("inlineCode",{parentName:"p"},"POST /auth/login")," with the credentials as body."),Object(a.b)("p",null,"When the user presses the ",Object(a.b)("inlineCode",{parentName:"p"},"Log out")," button in the todo-list page, the page requests ",Object(a.b)("inlineCode",{parentName:"p"},"GET /auth/logout"),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"In this scenario, the authentication process is handled with sessions and http redirections. You will not use ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/JSON_Web_Token#Use"}),"JWT tokens")," which are sometimes used in ",Object(a.b)("em",{parentName:"p"},"Single Page Applications")," (SPA).")),Object(a.b)("h2",{id:"the-login-and-main-pages"},"The Login and Main Pages"),Object(a.b)("p",null,"Download the html, css and js files by clicking ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://foalts.org/multi-user-todo-list-v1.zip"}),"here"),"."),Object(a.b)("p",null,"Empty the ",Object(a.b)("inlineCode",{parentName:"p"},"public/")," directory."),Object(a.b)("p",null,"Then move ",Object(a.b)("inlineCode",{parentName:"p"},"script.js")," and ",Object(a.b)("inlineCode",{parentName:"p"},"style.css")," to ",Object(a.b)("inlineCode",{parentName:"p"},"public/")," and the ",Object(a.b)("inlineCode",{parentName:"p"},"index.html"),", ",Object(a.b)("inlineCode",{parentName:"p"},"signin.html")," and ",Object(a.b)("inlineCode",{parentName:"p"},"signup.html")," files to a new directory ",Object(a.b)("inlineCode",{parentName:"p"},"templates/")," at the root of your project."),Object(a.b)("p",null,"Open the ",Object(a.b)("inlineCode",{parentName:"p"},"app.controller.ts")," file and add three new routes to serve the pages."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { controller, Get, render } from '@foal/core';\n\nimport { ApiController } from './controllers';\n\nexport class AppController {\n  subControllers = [\n    controller('/api', ApiController)\n  ];\n\n  @Get('/')\n  index() {\n    return render('templates/index.html');\n  }\n\n  @Get('/signin')\n  signin() {\n    return render('templates/signin.html');\n  }\n\n  @Get('/signup')\n  signup() {\n    return render('templates/signup.html');\n  }\n}\n\n")),Object(a.b)("p",null,"Open your browser and go to ",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:3001/signin"),". The login page should show up."),Object(a.b)("h2",{id:"login-controllers"},"Login Controllers"),Object(a.b)("p",null,"The next step is to create a controller that logs the users in or out and redirects them after the operation succeeds or fails. It needs two routes ",Object(a.b)("inlineCode",{parentName:"p"},"/login")," and ",Object(a.b)("inlineCode",{parentName:"p"},"/logout"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"foal generate controller auth --register\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The ",Object(a.b)("inlineCode",{parentName:"p"},"--register")," flag directly adds a new line in ",Object(a.b)("inlineCode",{parentName:"p"},"app.controller.ts")," to declare the ",Object(a.b)("inlineCode",{parentName:"p"},"AuthController")," as a sub-controller of ",Object(a.b)("inlineCode",{parentName:"p"},"AppController"),".")),Object(a.b)("p",null,"Open the new file ",Object(a.b)("inlineCode",{parentName:"p"},"auth.controller.ts")," and replace its content."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"// 3p\nimport {\n  Context, dependency, HttpResponseRedirect, Post, removeSessionCookie,\n  Session, setSessionCookie, TokenRequired, ValidateBody, verifyPassword\n} from '@foal/core';\nimport { TypeORMStore } from '@foal/typeorm';\nimport { getRepository } from 'typeorm';\n\nimport { User } from '../entities';\n\nexport class AuthController {\n  @dependency\n  store: TypeORMStore;\n\n  @Post('/login')\n  // Validate the request body.\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n        email: { type: 'string', format: 'email' },\n        password: { type: 'string' }\n    },\n    required: ['email', 'password'],\n    type: 'object',\n  })\n  async login(ctx: Context) {\n    const user = await getRepository(User).findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      // Redirect the user to /signin if the authentication fails.\n      return new HttpResponseRedirect('/signin?bad_credentials=true');\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      // Redirect the user to /signin if the authentication fails.\n      return new HttpResponseRedirect('/signin?bad_credentials=true');\n    }\n\n    // Create a session associated with the user.\n    const session = await this.store.createAndSaveSessionFromUser(user);\n\n    // Redirect the user to the home page on success.\n    const response = new HttpResponseRedirect('/');\n    // Save the session token in a cookie in order to authenticate\n    // the user in future requests.\n    setSessionCookie(response, session.getToken());\n    return response;\n  }\n\n  @Post('/logout')\n  @TokenRequired({\n    cookie: true,\n    extendLifeTimeOrUpdate: false,\n    redirectTo: '/signin',\n    store: TypeORMStore,\n  })\n  async logout(ctx: Context<User, Session>) {\n    // Destroy the user session.\n    await this.store.destroy(ctx.session.sessionID);\n\n    // Redirect the user to the home page on success.\n    const response = new HttpResponseRedirect('/signin');\n    // Remove the cookie where the session token is stored.\n    removeSessionCookie(response);\n    return response;\n  }\n}\n\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Writting ",Object(a.b)("inlineCode",{parentName:"p"},"getRepository(User).findOne({ email: email, password: password })")," cannot work since the password needs to be hashed.")),Object(a.b)("p",null,"Go back to your browser and try to log in with the email ",Object(a.b)("inlineCode",{parentName:"p"},"john@foalts.org")," and the password ",Object(a.b)("inlineCode",{parentName:"p"},"mary_password"),". You are redirected to the same page and the message ",Object(a.b)("inlineCode",{parentName:"p"},"Invalid email or password.")," shows up. Now use the password ",Object(a.b)("inlineCode",{parentName:"p"},"john_password")," and try to log in. You are redirected to the todo-list page where all todos are listed. If you click on the button ",Object(a.b)("inlineCode",{parentName:"p"},"Log out")," you are then redirected to the login page!"),Object(a.b)("h2",{id:"the-tokenrequired-hook"},"The TokenRequired Hook"),Object(a.b)("p",null,"Great, so far you can authenticate users. But as you have not yet added access control to the todo-list page and the API, unauthenticated users can still access it."),Object(a.b)("p",null,"The usual way to handle authorization is to use a ",Object(a.b)("em",{parentName:"p"},"hook"),". In this case, you are going to use the built-in hook ",Object(a.b)("inlineCode",{parentName:"p"},"TokenRequired")," which returns a 401 error or redirects the user if user is not logged in. "),Object(a.b)("p",null,"Update ",Object(a.b)("inlineCode",{parentName:"p"},"app.controller.ts"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { controller, Get, render, TokenRequired } from '@foal/core';\nimport { TypeORMStore } from '@foal/typeorm';\n\nimport { ApiController, AuthController } from './controllers';\n\nexport class AppController {\n\n  @Get('/')\n  @TokenRequired({\n    // The session token is expected to be in a cookie.\n    cookie: true,\n    // Redirect the user to /signin if user is not logged in.\n    redirectTo: '/signin',\n    // Specify the \"store\" where the session was created.\n    store: TypeORMStore\n  })\n  index() {\n    ...\n  }\n\n  ...\n\n}\n")),Object(a.b)("p",null,"Update ",Object(a.b)("inlineCode",{parentName:"p"},"api.controller.ts"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import {\n  Context, Delete, Get, HttpResponseCreated, HttpResponseNoContent,\n  HttpResponseNotFound, HttpResponseOK, Post,\n  TokenRequired, ValidateBody, ValidatePathParam\n} from '@foal/core';\nimport { fetchUser, TypeORMStore } from '@foal/typeorm';\nimport { getRepository } from 'typeorm';\n\nimport { Todo, User } from '../entities';\n\n\n@TokenRequired({\n  cookie: true,\n  store: TypeORMStore,\n  // Make ctx.user be an instance of User.\n  user: fetchUser(User),\n})\nexport class ApiController {\n\n  ...\n\n}\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"When a hook decorates a controller class, it applies to all the routes of the controller and its sub-controllers.")),Object(a.b)("p",null,"Go to ",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:3001"),". If you are not logged in you should be redirected to the login page."))}p.isMDXComponent=!0},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=o,h=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return n?r.a.createElement(h,s(s({ref:t},c),{},{components:n})):r.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);