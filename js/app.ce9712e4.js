(function(){var t={8852:function(t,e,n){"use strict";var r=n(9242),o=n(3396);function a(t,e,n,r,a,i){const u=(0,o.up)("router-link"),c=(0,o.up)("v-cart-icon"),s=(0,o.up)("v-main-vrapper");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",null,[(0,o.Wm)(u,{class:"nav-link",to:"/","active-class":"active-link"},{default:(0,o.w5)((()=>[(0,o.Uk)("Каталог")])),_:1}),(0,o.Wm)(u,{to:"/cart"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{"products-number":t.GET_TOTAL_PRODUCTS_CART},null,8,["products-number"])])),_:1})]),(0,o.Wm)(s)],64)}const i={class:"v-main-wrapper"};function u(t,e,n,r,a,u){const c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(c)])}var c=n(65),s={name:"v-main-wrapper",data(){return{title:"Online-magazine"}},computed:{...(0,c.Se)(["CART"])},methods:{},watch:{},mounted(){}},d=n(89);const l=(0,d.Z)(s,[["render",u]]);var p=l,f=n(7139);const m={class:"v-cart-icon"},v={class:"v-cart-icon__text"};function _(t,e,n,r,a,i){return(0,o.wg)(),(0,o.iD)("div",m,[(0,o._)("p",v,(0,f.zw)(n.productsNumber>19?10*Math.floor(n.productsNumber/10)+"+":n.productsNumber),1)])}var g={name:"v-cart-icon",props:{productsNumber:{type:Number,default(){return 0}}}};const h=(0,d.Z)(g,[["render",_],["__scopeId","data-v-ebcd316a"]]);var T=h,O={name:"App",components:{VCartIcon:T,vMainVrapper:p},computed:{...(0,c.Se)(["CART","GET_TOTAL_PRODUCTS_CART"])}};const C=(0,d.Z)(O,[["render",a]]);var b=C,y=n(4161);const E="https://functional-e67bd-default-rtdb.firebaseio.com/";var R={GET_PRODUCTS_FROM_API({commit:t}){return(0,y.Z)(`${E}products.json`,{method:"GET"}).then((e=>(t("SET_PRODUCT_TO_STATE",e.data),e.data))).catch((t=>(console.log(t),t)))},ADD_TO_CART({commit:t},e){t("SET_CART",e)},DELETE_FROM_CART({commit:t},e){t("REMOVE_FROM_CART",e)},INCREMENT_FROM_CART({commit:t},e){t("INCREMENT",e)},DECREMENT_FROM_CART({commit:t},e){t("DECREMENT",e)}},A=(n(7658),{SET_PRODUCT_TO_STATE:(t,e)=>{t.products=e},SET_CART:(t,e)=>{if(t.cart.length){let n=!1;t.cart.map((t=>{t.article===e.article&&(n=!0,t.quantity++)})),n||(e.quantity=1,t.cart.push(e))}else e.quantity=1,t.cart.push(e)},REMOVE_FROM_CART:(t,e)=>{t.cart.length&&t.cart.splice(e,1)},INCREMENT:(t,e)=>{t.cart[e].quantity++},DECREMENT:(t,e)=>{t.cart[e].quantity>1&&t.cart[e].quantity--}}),w={PRODUCTS(t){return t.products},CART(t){return t.cart},GET_TOTAL_PRODUCTS_CART(t){if(t.cart.length){const e=[...t.cart];return e.reduce(((t,e)=>e.hasOwnProperty("quantity")?t+e.quantity:t),0)}return 0}};const D=(0,c.MT)({state:{products:[],cart:[]},mutations:A,actions:R,getters:w});var j=D,P=n(2483);const S={class:"v-catalog"},M=(0,o._)("h1",null,"Е-Каталог",-1),N={class:"v-catalog__list"};function k(t,e,n,r,a,i){const u=(0,o.up)("v-select"),c=(0,o.up)("v-catalog-item");return(0,o.wg)(),(0,o.iD)("div",S,[M,(0,o.Wm)(u,{onEmitOptionValue:i.sortByCategories},null,8,["onEmitOptionValue"]),(0,o._)("div",N,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.filteredProducts,(t=>((0,o.wg)(),(0,o.j4)(c,{key:t.article,product_data:t,onAdToCart:i.addToCart},null,8,["product_data","onAdToCart"])))),128))])])}const U={class:"v-catalog-item"},x=["src"],F={class:"v-catalog-item__name"},V={class:"v-catalog-item__price"};function I(t,e,r,a,i,u){return(0,o.wg)(),(0,o.iD)("div",U,[(0,o._)("img",{class:"v-catalog-item__image",src:n(990)("./"+r.product_data.image),alt:"img"},null,8,x),(0,o._)("p",F,(0,f.zw)(r.product_data.name),1),(0,o._)("p",V,"Цена: "+(0,f.zw)(Math.round(10*parseFloat(r.product_data.price)/10))+" тг.",1),(0,o._)("button",{class:"v-catalog-item__add_to_cart_btn btn",onClick:e[0]||(e[0]=(...t)=>u.adToCart&&u.adToCart(...t))},"Добавить")])}var q={name:"v-catalog-item",props:{product_data:{type:Object,default(){return{}}}},methods:{adToCart(){this.$emit("adToCart",this.product_data)}}};const L=(0,d.Z)(q,[["render",I]]);var G=L;const Z=t=>((0,o.dD)("data-v-fc77977e"),t=t(),(0,o.Cn)(),t),B={class:"v-select"},W=Z((()=>(0,o._)("option",{value:"all"},"все",-1))),z=Z((()=>(0,o._)("option",{value:"Мужские"},"Мужские",-1))),$=Z((()=>(0,o._)("option",{value:"Женские"},"Женские",-1))),H=[W,z,$];function K(t,e,n,a,i,u){return(0,o.wg)(),(0,o.iD)("div",B,[(0,o.wy)((0,o._)("select",{class:"v-select__select","onUpdate:modelValue":e[0]||(e[0]=t=>i.selectedOption=t),onChange:e[1]||(e[1]=(...t)=>u.emitOptionValue&&u.emitOptionValue(...t))},H,544),[[r.bM,i.selectedOption]])])}var Y={name:"v-select",props:{options:{type:Array,default(){return[]}}},data(){return{selectedOption:"all"}},mounted(){this.$emit("emitOptionValue",this.selectedOption)},methods:{emitOptionValue(){this.$emit("emitOptionValue",this.selectedOption)}}};const J=(0,d.Z)(Y,[["render",K],["__scopeId","data-v-fc77977e"]]);var Q=J,X={name:"v-catalog",components:{vCatalogItem:G,vSelect:Q},props:{},data(){return{sortedProducts:[]}},computed:{...(0,c.Se)(["PRODUCTS"]),filteredProducts(){return this.sortedProducts.length?this.sortedProducts:this.PRODUCTS}},methods:{...(0,c.nv)(["GET_PRODUCTS_FROM_API","ADD_TO_CART"]),addToCart(t){this.ADD_TO_CART(t)},sortByCategories(t){this.sortedProducts=[];const e=Object.values(this.PRODUCTS);this.sortedProducts=e.filter((e=>e.category===t))}},mounted(){this.GET_PRODUCTS_FROM_API()}};const tt=(0,d.Z)(X,[["render",k]]);var et=tt;const nt=[{path:"/",name:"home",component:et},{path:"/cart",name:"cart",component:()=>n.e(975).then(n.bind(n,8975))}],rt=(0,P.p7)({history:(0,P.PO)("/testvue/"),routes:nt});var ot=rt;(0,r.ri)(b).use(j).use(ot).mount("#app")},990:function(t,e,n){var r={"./1.jpg":7097,"./2.jpg":7253,"./3.jpg":9672,"./4.jpg":2668,"./5.jpg":1279,"./6.jpeg":9899,"./7.jpg":9511};function o(t){var e=a(t);return n(e)}function a(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id=990},7097:function(t,e,n){"use strict";t.exports=n.p+"img/1.91dbd12e.jpg"},7253:function(t,e,n){"use strict";t.exports=n.p+"img/2.cf849a2d.jpg"},9672:function(t,e,n){"use strict";t.exports=n.p+"img/3.fade5a54.jpg"},2668:function(t,e,n){"use strict";t.exports=n.p+"img/4.e89586de.jpg"},1279:function(t,e,n){"use strict";t.exports=n.p+"img/5.a2f663fd.jpg"},9899:function(t,e,n){"use strict";t.exports=n.p+"img/6.f38872e4.jpeg"},9511:function(t,e,n){"use strict";t.exports=n.p+"img/7.5b4ad3d1.jpg"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(d=0;d<t.length;d++){r=t[d][0],o=t[d][1],a=t[d][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){t.splice(d--,1);var s=o();void 0!==s&&(e=s)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+".5a290454.js"}}(),function(){n.miniCssF=function(t){return"css/"+t+".d110ad37.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="testvue:";n.l=function(r,o,a,i){if(t[r])t[r].push(o);else{var u,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var l=s[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==e+a){u=l;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+a),u.src=r),t[r]=[o];var p=function(e,n){u.onerror=u.onload=null,clearTimeout(f);var o=t[r];if(delete t[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/testvue/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,a.parentNode&&a.parentNode.removeChild(a),o(c)}};return a.onerror=a.onload=i,a.href=e,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===t||a===e))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===t||a===e)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),u=n.p+i;if(e(i,u))return o();t(r,u,null,o,a)}))},o={143:0};n.f.miniCss=function(t,e){var n={975:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(e),u=new Error,c=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],u=r[1],c=r[2],s=0;if(i.some((function(e){return 0!==t[e]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var d=c(n)}for(e&&e(r);s<i.length;s++)a=i[s],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(d)},r=self["webpackChunktestvue"]=self["webpackChunktestvue"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8852)}));r=n.O(r)})();
//# sourceMappingURL=app.ce9712e4.js.map