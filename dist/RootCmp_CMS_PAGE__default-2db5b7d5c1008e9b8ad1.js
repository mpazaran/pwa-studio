(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{682:function(e,n,t){"use strict"
t.r(n)
var i=t(7),a=t.n(i),r=t(8),o=t.n(r),s=t(11),c=t.n(s),l=t(10),d=t.n(l),m=t(12),u=t.n(m),g=t(0),p=t.n(g),v=t(45),y=t.n(v),f=t(2),h=t.n(f),k=t(1),b=t(80),S=t(4),w=t(672),N=t(748),O=t.n(N),E=t(76),C=t(671),L=t(746),j=t.n(L),F=function(e){function CategoryTile(){return a()(this,CategoryTile),c()(this,d()(CategoryTile).apply(this,arguments))}return u()(CategoryTile,e),o()(CategoryTile,[{key:"render",value:function render(){var e=this.imagePath,n=this.props,t=n.classes,i=n.item,a={"--venia-image":e?"url(".concat(e,")"):"none"},r=e?p.a.createElement("img",{className:t.image,src:e,alt:i.name}):null
return p.a.createElement(E.b,{className:t.root,to:"/".concat(i.url_key).concat(".html")},p.a.createElement("span",{className:t.imageWrapper,style:a},r),p.a.createElement("span",{className:t.name},i.name))}},{key:"imagePath",get:function get(){var e=this.props.item,n=e.image,t=e.productImagePreview.items[0]
return n?Object(C.a)(n,{type:"image-category",width:480}):t?Object(C.a)(t.small_image,{type:"image-product",width:480}):null}}]),CategoryTile}(g.Component)
h()(F,"propTypes",{item:Object(k.shape)({image:k.string,name:k.string.isRequired,productImagePreview:Object(k.shape)({items:Object(k.arrayOf)(Object(k.shape)({small_image:k.string}))}),url_key:k.string.isRequired}).isRequired,classes:Object(k.shape)({item:k.string,image:k.string,imageWrapper:k.string,name:k.string}).isRequired})
var T=Object(S.a)(j.a)(F),_=t(745),D=t.n(_)
function ownKeys(e,n){var t=Object.keys(e)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,i)}return t}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{}
n%2?ownKeys(t,!0).forEach(function(n){h()(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var P=function(e){function CategoryList(){return a()(this,CategoryList),c()(this,d()(CategoryList).apply(this,arguments))}return u()(CategoryList,e),o()(CategoryList,[{key:"mapCategory",value:function mapCategory(e){return _objectSpread({},e,{productImagePreview:{items:e.productImagePreview.items.map(function(e){var n=e.small_image
return _objectSpread({},e,{small_image:"object"===y()(n)?n.url:n})})}})}},{key:"render",value:function render(){var e=this,n=this.props,t=n.id,i=n.classes
return p.a.createElement("div",{className:i.root},this.header,p.a.createElement(b.c,{query:D.a,variables:{id:t}},function(n){var t=n.loading,a=n.error,r=n.data
return a?p.a.createElement("div",{className:i.fetchError},"Data Fetch Error: ",p.a.createElement("pre",null,a.message)):t?w.a:0===r.category.children.length?p.a.createElement("div",{className:i.noResults},"No child categories found."):p.a.createElement("div",{className:i.content},r.category.children.map(function(n){return p.a.createElement(T,{item:e.mapCategory(n),key:n.url_key})}))}))}},{key:"header",get:function get(){var e=this.props,n=e.title,t=e.classes
return n?p.a.createElement("div",{className:t.header},p.a.createElement("h2",{className:t.title},p.a.createElement("span",null,n))):null}}]),CategoryList}(g.Component)
h()(P,"propTypes",{id:k.number,title:k.string,classes:Object(k.shape)({root:k.string,header:k.string,content:k.string})})
var R=Object(S.a)(O.a)(P),x=function(e){function CMS(){return a()(this,CMS),c()(this,d()(CMS).apply(this,arguments))}return u()(CMS,e),o()(CMS,[{key:"render",value:function render(){return p.a.createElement(R,{title:"Shop by category",id:2})}}]),CMS}(g.Component)
t.d(n,"default",function(){return x})},745:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"categoryList"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"category"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"children"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url_key"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url_path"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"children_count"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"path"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"productImagePreview"},name:{kind:"Name",value:"products"},arguments:[{kind:"Argument",name:{kind:"Name",value:"pageSize"},value:{kind:"IntValue",value:"1"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"small_image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}}]}}]}}]}}],loc:{start:0,end:501}}
t.loc.source={body:"# TODO: get only active categories from graphql when it is ready\nquery categoryList($id: Int!) {\n    category(id: $id) {\n        id\n        children {\n            id\n            name\n            url_key\n            url_path\n            children_count\n            path\n            image\n            productImagePreview: products(pageSize: 1) {\n                items {\n                    small_image {\n                        url\n                    }\n                }\n            }\n        }\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}
var i={}
function findOperation(e,n){for(var t=0;t<e.definitions.length;t++){var i=e.definitions[t]
if(i.name&&i.name.value==n)return i}}!function extractReferences(){t.definitions.forEach(function(e){if(e.name){var n=new Set
!function collectFragmentReferences(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value)
else if("VariableDefinition"===e.kind){var t=e.type
"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){collectFragmentReferences(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){collectFragmentReferences(e,n)}),e.definitions&&e.definitions.forEach(function(e){collectFragmentReferences(e,n)})}(e,n),i[e.name.value]=n}})}(),e.exports=t,e.exports.categoryList=function oneQuery(e,n){var t={kind:e.kind,definitions:[findOperation(e,n)]}
e.hasOwnProperty("loc")&&(t.loc=e.loc)
var a=i[n]||new Set,r=new Set,o=new Set
for(a.forEach(function(e){o.add(e)});o.size>0;){var s=o
o=new Set,s.forEach(function(e){r.has(e)||(r.add(e),(i[e]||new Set).forEach(function(e){o.add(e)}))})}return r.forEach(function(n){var i=findOperation(e,n)
i&&t.definitions.push(i)}),t}(t,"categoryList")},746:function(e,n,t){var i=t(747)
"string"==typeof i&&(i=[[e.i,i,""]])
var a={hmr:!0,transform:void 0,insertInto:void 0}
t(13)(i,a)
i.locals&&(e.exports=i.locals)},747:function(e,n,t){(n=e.exports=t(9)(!1)).push([e.i,".categoryTile-root-2VM {\n    display: block;\n    line-height: 1rem;\n    text-align: center;\n    width: 6rem;\n}\n\n.categoryTile-imageWrapper-f8x {\n    background-image: var(--venia-image);\n    background-position: 50% 50%;\n    background-size: cover;\n    border-radius: 50%;\n    box-shadow: 0 0 0 1px rgb(var(--venia-border));\n    display: block;\n    height: 5rem;\n    margin: 0 auto 1rem auto;\n    width: 5rem;\n}\n\n.categoryTile-image-1Kn {\n    height: 100%;\n    opacity: 0;\n    width: 100%;\n}\n\n.categoryTile-name-1ss {\n    display: block;\n}\n",""]),n.locals={root:"categoryTile-root-2VM",imageWrapper:"categoryTile-imageWrapper-f8x",image:"categoryTile-image-1Kn",name:"categoryTile-name-1ss"}},748:function(e,n,t){var i=t(749)
"string"==typeof i&&(i=[[e.i,i,""]])
var a={hmr:!0,transform:void 0,insertInto:void 0}
t(13)(i,a)
i.locals&&(e.exports=i.locals)},749:function(e,n,t){(n=e.exports=t(9)(!1)).push([e.i,".categoryList-root-3pu {\n    padding: 1rem;\n}\n\n.categoryList-header-3C7 {\n    margin-bottom: 2rem;\n    text-align: center;\n}\n\n.categoryList-title-3Rs {\n    text-transform: uppercase;\n}\n\n.categoryList-content-1SB {\n    display: grid;\n    grid-gap: 3rem 1rem;\n    grid-template-columns: repeat(auto-fit, 6rem);\n    justify-content: center;\n}\n\n.categoryList-fetchError-3_k {\n    background-color: rgb(var(--venia-warning-light));\n    color: rgb(var(--venia-warning-dark));\n}\n\n.categoryList-fetchingData-2Fz {\n    color: rgb(--venia-grey);\n}\n\n.categoryList-noResults-14B {\n}\n",""]),n.locals={root:"categoryList-root-3pu",header:"categoryList-header-3C7",title:"categoryList-title-3Rs",content:"categoryList-content-1SB",fetchError:"categoryList-fetchError-3_k",fetchingData:"categoryList-fetchingData-2Fz",noResults:"categoryList-noResults-14B categoryList-fetchingData-2Fz"}}}])
