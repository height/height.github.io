webpackJsonp([3],{"5G+W":function(t,e){},sCES:function(t,e){},x35b:function(t,e,n){"use strict";function r(t){n("5G+W"),n("sCES")}function o(t,e){(0,t.commit)(J,e)}Object.defineProperty(e,"__esModule",{value:!0});var a={};n.d(a,"addFoo",function(){return o});var i={};n.d(i,"editorData",function(){return X});var u=n("VCXJ"),c=n("9rMa"),l=u.a.extend({name:"app",computed:{menu:function(){return this.$router.options.routes.map(function(t){return{link:t.path,title:t.meta.title}})}}}),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("hello, Vue")]),t._v(" "),n("ul",t._l(t.menu,function(e){return n("li",[n("router-link",{attrs:{to:e.link}},[t._v(t._s(e.title))])],1)})),t._v(" "),n("router-view",{staticClass:"page"})],1)},f=[],p={render:s,staticRenderFns:f},h=p,d=n("X4nt"),v=r,m=d(l,h,!1,v,"data-v-44f6aeaf",null),b=m.exports,y=n("zO6J"),_=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,a){function i(t){try{c(r.next(t))}catch(t){a(t)}}function u(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(i,u)}c((r=r.apply(t,e||[])).next())})},w=this&&this.__generator||function(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,a&&(i=a[2&n[0]?"return":n[0]?"throw":"next"])&&!(i=i.call(a,n[1])).done)return i;switch(a=0,i&&(n=[0,i.value]),n[0]){case 0:case 1:i=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,a=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(i=c.trys,!(i=i.length>0&&i[i.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){c.label=n[1];break}if(6===n[0]&&c.label<i[1]){c.label=i[1],i=n;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(n);break}i[2]&&c.ops.pop(),c.trys.pop();continue}n=e.call(t,c)}catch(t){n=[6,t],a=0}finally{o=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,a,i,u,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return u={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},x=u.a.extend({data:function(){return{a:"aaaaaaaaaaaaa"}},methods:{run:function(){return _(this,void 0,void 0,function(){return w(this,function(t){return console.log(this.a),[2]})})}}}),g=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"home"},[t._v("\n  首页\n")])},k=[],E={render:g,staticRenderFns:k},C=E,S=n("X4nt"),F=S(x,C,!1,null,null,null),O=F.exports;u.a.use(y.a);var D,G=new y.a({routes:[{path:"/",component:O,meta:{title:"首页"}},{path:"/async",component:function(t){return n.e(1).then(n.bind(null,"y2y0")).then(t)},meta:{title:"异步 chunk"}},{path:"/vuex",component:function(t){return n.e(0).then(n.bind(null,"t9zu")).then(t)},meta:{title:"vuex"}}]}),J="ADD_FOO",X=function(t){return t.editor},$=(D={},D[J]=function(t,e){console.info(e),t.editor.push(e)},D),z={state:{editor:[1,2,3]},mutations:$};u.a.use(c.a);var M=new c.a.Store({actions:a,getters:i,modules:{editor:z},strict:!1,plugins:[]});u.a.config.productionTip=!1,u.a.use(c.a);var P=document.title;G.beforeEach(function(t,e,n){var r;r="/"===t.path?P:t.meta.title+" - "+P,document.title=r,n()}),new u.a({el:"#app",store:M,router:G,render:function(t){return t(b)}})}},["x35b"]);