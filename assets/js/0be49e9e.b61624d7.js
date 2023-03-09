"use strict";(self.webpackChunktest_web=self.webpackChunktest_web||[]).push([[283],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>g});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},i=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return t?o.createElement(g,c(c({ref:n},i),{},{components:t})):o.createElement(g,c({ref:n},i))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,c[1]=l;for(var u=2;u<a;u++)c[u]=t[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},270:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=t(7462),r=(t(7294),t(3905));const a={sidebar_position:2},c="Mongoose",l={unversionedId:"Note/Mongoose",id:"Note/Mongoose",title:"Mongoose",description:"1. \u5b89\u88ddMongoose",source:"@site/docs/Note/Mongoose.md",sourceDirName:"Note",slug:"/Note/Mongoose",permalink:"/docusaurus/docs/Note/Mongoose",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Express",permalink:"/docusaurus/docs/Note/Express"},next:{title:"RestfulAPI",permalink:"/docusaurus/docs/Note/RestfulAPI"}},s={},u=[{value:"1. \u5b89\u88ddMongoose",id:"1-\u5b89\u88ddmongoose",level:2},{value:"2. \u9023\u7dda\u81f3\u8cc7\u6599\u5eab",id:"2-\u9023\u7dda\u81f3\u8cc7\u6599\u5eab",level:2},{value:"3. \u5efa\u7acbSchema",id:"3-\u5efa\u7acbschema",level:2},{value:"4. CRUD",id:"4-crud",level:2}],i={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mongoose"},"Mongoose"),(0,r.kt)("h2",{id:"1-\u5b89\u88ddmongoose"},"1. \u5b89\u88ddMongoose"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b89\u88ddMongoose:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install --save mongoose\n")),(0,r.kt)("h2",{id:"2-\u9023\u7dda\u81f3\u8cc7\u6599\u5eab"},"2. \u9023\u7dda\u81f3\u8cc7\u6599\u5eab"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8207MongoDB\u5efa\u7acb\u9023\u7dda:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// ./app.js\nconst mongoose = require('mongoose');\n\nmongoose.connect('mongodb://username:userpassword@host:port/database', {\n  useNewUrlParser: true\n})  // \u9023\u7dda\u81f3\u8cc7\u6599\u5eab\n\nconst db = mongoose.connection;  // \u53d6\u5f97\u9023\u7dda\u72c0\u614b\ndb.on('error', (err) => console.error('connection error', err));  // \u9023\u7dda\u7570\u5e38\ndb.once('open', (db) => console.log('Connected to MongoDB'));     // \u9023\u7dda\u6210\u529f\n")),(0,r.kt)("h2",{id:"3-\u5efa\u7acbschema"},"3. \u5efa\u7acbSchema"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5efa\u7acbSchema:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u4ee5practice.js\u70ba\u4f8b\n// ./modules/practice.js\nconst mongoose = require('mongoose');\n\nlet PracticeSchema = new mongoose.Schema(\n    {\n        code: {\n            type: String,   // \u8cc7\u6599\u578b\u614b\n            required: true, // required\u8868\u793a\u5fc5\u9808\u8f38\u5165\uff0c\u672a\u8f38\u5165\u6703\u56de\u5831\u932f\u8aa4\n            enum: [\"LEARNER\", \"WRITER\", \"EDITOR\", \"ADMIN\"]  // enum\u8868\u793a\u9650\u5236\u8f38\u5165\u5167\u5bb9\uff0c\u8f38\u5165\u5176\u4ed6\u6771\u897f\u6703\u56de\u5831\u932f\u8aa4\n        },\n        status: {\n            type: Boolean,\n            default: true   // default\u8868\u793a\u9810\u8a2d\u503c\uff0c\u672a\u8ce6\u503c\u6642\u6703\u8f38\u5165\u8a72\u503c\n        }\n    },\n    {\n        timestamps: true,   // timestamps\u70batrue\u6642\u6703\u81ea\u52d5\u589e\u52a0createdAt\u53caupdatedAt\u6b04\u4f4d\n        versionKey: false   // versionKey\u70bafalse\u6642\u4e0d\u6703\u986f\u793aversion\u6b04\u4f4d\n    },\n);\n\nPracticeSchema.set('collection', 'practice_for_James');         // \u5c07Schema\u9023\u81f3\u8cc7\u6599\u5eab\nmodule.exports = mongoose.model('practice', PracticeSchema);    // \u5c07Schema\u7de8\u8b6f\u6210Model\n")),(0,r.kt)("h2",{id:"4-crud"},"4. CRUD"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5148\u5f15\u5165Model:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const practice = require('./modules/practice');\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const doc1 = new practice(  // \u5efa\u7acbdoc1\n  {\n    code: "LEARNER",\n    status: true\n  }\n);\nconst doc2 = new practice( // \u5efa\u7acbdoc2\n  {\n    code: "ADMIN",\n    status: false\n  }\n);\nconst docs = [doc1, doc2]; // \u5f59\u96c6\u6210docs\n\npractice.insertMany(docs)  // \u65b0\u589e\u81f3\u8cc7\u6599\u5eab\n  .then(function () {\n    console.log("Created!");\n  })\n  .catch(function (err) {\n    console.log(err);\n  });\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function Find(){\n  const A = await practice.find({status: true}); // \u62ec\u865f\u5167\u53ef\u8a2d\u5b9a\u5c0b\u627e\u689d\u4ef6\n  console.log(A);\n}\n\nFind();\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'practice.updateOne({code:"ADMIN"}, {$set: {status: false}}) // updateOne({\u6b32\u66f4\u6539\u9805\u76ee}, {$set: {\u6b32\u66f4\u6539\u6578\u503c}})\n  .then(function () {\n    console.log("Updated!");\n  })\n  .catch(function (err) {\n    console.log(err);\n  });\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Delete:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'practice.deleteMany({code: "EDITOR"})  // deleteMany({\u6b32\u522a\u9664\u9805\u76ee})\n  .then(function () {\n    console.log("Deleted!");\n  })\n  .catch(function (err) {\n    console.log(err);\n  });\n')))}d.isMDXComponent=!0}}]);