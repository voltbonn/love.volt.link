(this["webpackJsonplove.volt.link"]=this["webpackJsonplove.volt.link"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){var r=n(20).negotiateLanguages;function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["en"],n=Object.keys(e);if(0===n.length)return null;var a=r(t,n,{defaultLocale:n[0],strategy:"lookup"});return 0===a.length?null:e[a[0]]}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["en"],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"locale",a=e.map((function(e){return e[n]})).filter(Boolean);if(0===a.length)return null;var c=r(t,a,{defaultLocale:a[0],strategy:"lookup"});return 0===c.length?null:e.filter((function(e){return e[n]===c[0]}))}e.exports={fluentByObject:a,fluentByArray:c,fluentByAny:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["en"],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(Array.isArray(e)){var r=c(e,t);Array.isArray(r)&&r.length>0&&(e=r[0].value)}else"object"===typeof e&&(e=a(e,t));return"string"!==typeof e&&(e=n),e}}},44:function(e,t,n){},50:function(e,t,n){var r={"./de.ftl":[58,3],"./en.ftl":[59,4]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=50,e.exports=a},51:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Volt Frauen auf der Kennedy Br\xfccke.fb9a88db.jpg"},55:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/image.ae23e239.jpg"},56:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/image-1.1a7f7139.jpg"},57:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(36),i=n.n(c),o=(n(44),n(19)),s=n(6),l=n(5),u=(n(45),n(10)),j=n(4),f=n(9),b=n(22),d=n(26),h=n(20),p=n(3),g=Object.keys({de:"Deutsch (German)",en:"English"}),O="en";function v(e){return m.apply(this,arguments)}function m(){return(m=Object(f.a)(Object(j.a)().mark((function e(t){var r,a,c;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(50)("./"+t+".ftl");case 2:return r=e.sent,e.next=5,fetch(r.default);case 5:return a=e.sent,e.next=8,a.text();case 8:return c=e.sent,e.abrupt("return",Object(u.a)({},t,new d.b(c)));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return w.apply(this,arguments)}function w(){return(w=Object(f.a)(Object(j.a)().mark((function e(t){var n,r;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(v));case 2:return n=e.sent,r=n.reduce((function(e,t){return Object.assign(e,t)})),e.abrupt("return",Object(j.a)().mark((function e(){var n,a,c,i;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=Object(s.a)(t),e.prev=1,n.s();case 3:if((a=n.n()).done){e.next=11;break}return c=a.value,(i=new d.a(c)).addResource(r[c]),e.next=9,i;case 9:e.next=3;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),n.e(e.t0);case 16:return e.prev=16,n.f(),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[1,13,16,19]])})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){var t=e.userLocales,n=e.children,a=e.onLocaleChange,c=Object(r.useState)(function(){var e=new d.a("");return e.addResource(new d.b("")),new b.c([e])}()),i=Object(l.a)(c,2),o=i[0],s=i[1];return Object(r.useEffect)((function(){function e(){return(e=Object(f.a)(Object(j.a)().mark((function e(){var n,r,c;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(h.negotiateLanguages)(t,g,{defaultLocale:O}),a&&a(n),e.next=4,x(n);case 4:r=e.sent,(c=new b.c(r())).userLocales=t,c.defaultLocale=O,c.supportedLocales=g,s(c);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t,a]),o?Object(p.jsx)(b.a,{l10n:o,children:n}):Object(p.jsx)("div",{children:"Loading texts\u2026"})}n(51),n(34);var k=n(2);function L(){var e=Object(r.useState)(navigator.languages),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){var e=window.localStorage.getItem("locale")||null;a("string"===typeof e&&""!==e?[e]:navigator.languages)}),[a]),Object(r.useEffect)((function(){if(window.umami){var e=navigator.languages;if(e||Array.isArray(e)){var t,n=Object(s.a)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value,a=(r=r.toLowerCase()).split("-")[0];"string"===typeof a&&""!==a&&window.umami.trackEvent("L: "+a)}}catch(c){n.e(c)}finally{n.f()}}}}),[]),Object(r.useEffect)((function(){var e=function(e){var t=(e.detail||{}).locale||null;null===t?n&&Array.isArray(n)&&n.length>0&&(a(navigator.languages),window.localStorage.removeItem("locale")):(a([t]),window.localStorage.setItem("locale",t))};return window.addEventListener("change_locale",e),function(){window.removeEventListener("change_locale",e)}}),[n,a]),Object(p.jsxs)(y,{userLocales:n,children:[Object(p.jsx)("div",{className:"app_wrapper",children:Object(p.jsx)(k.a,{})}),Object(p.jsx)(o.b,{})]})}var E=n(37),A=n(13),B=n(12),_=n(16),S=n(35),D=n.n(S),N=function(e){return Object(p.jsx)(b.b,Object(B.a)(Object(B.a)({},e),{},{elems:Object(B.a)({br:Object(p.jsx)("br",{})},e.elems),children:Object(p.jsx)(a.a.Fragment,{children:e.children})}),e.id)};function V(e,t,n){var r=e.properties||{},a=r.locale||"en",c=r.text||n||"";t&&Array.isArray(t)||(t=[a]);var i=r.translations||[];if(Array.isArray(i)){i=[{locale:a,text:c}].concat(Object(A.a)(i));var o=D.a.fluentByArray(i,t,"locale");o.length>0&&(c=o[0].text)}return c}function z(){return(z=Object(f.a)(Object(j.a)().mark((function e(){var t;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[{title:"Liebe Gr\xfc\xdfe euch und euren Lieben aus Bonn!",text:"Ebenso wie Zeus in der griechischen Mythologie haben wir uns in Europa verliebt. Daher ist der Valentinstag nicht nur ein wichtiger Tag f\xfcr uns, um unsere Liebe gegen\xfcber unseren N\xe4chsten auszudr\xfccken, sondern auch um unsere Liebe f\xfcr Europa immer wieder neu entfachen zu lassen. Wenn es Dir genauso geht, schlie\xdf Dich uns gerne an! \n\n    Just like Zeus in Greek mythology, we have fallen in love with Europe. Therefore, Valentine's Day is not only an important day for us to express our love to our loved ones, but also to reignite our love for Europe. If you feel the same way, feel free to join us!",images:[n(54).default]},{title:"Des bisous de Paris !",text:"Belle f\xeate de l\u2019amour \xe0 tous et \xe0 toutes ! Chez Volt, on c\xe9l\xe8bre l\u2019amour et la fraternit\xe9 entre les peuples europ\xe9ens. Et on fait de la politique autrement, ensemble ! Dans la bienveillance et la coop\xe9ration citoyenne. Rejoignez-nous ! Et soutenez notre \xe9quipe candidate et le programme que VOUS nous avez inspir\xe9 pour les \xe9lections municipales dans le 9eme arrondissement !",images:[n(55).default,n(56).default]}],e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){(function(){return z.apply(this,arguments)})().then((function(e){a(e),console.log(e)}))}),[]),Object(p.jsx)(p.Fragment,{children:n.map((function(e,t){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:e.title}),Object(p.jsx)("p",{children:e.text}),e.images.map((function(t,n){return Object(p.jsx)("img",{src:t,alt:e.title},n)}))]},t)}))})}function F(){var e=function(){var e=a.a.useContext(_.a);return Object(B.a)(Object(B.a)({},e),{},{userLocales:e.userLocales||[],getString:function(t,n,r){return e.getString(t,n,r||" ")},fluentByAny:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return D.a.fluentByAny(t,e.userLocales,n)},translateBlock:V})}(),t=e.getString,n=t("website_title"),r=n,c=t("join_link");return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(E.a,{children:[Object(p.jsx)("title",{children:n}),Object(p.jsx)("meta",{name:"title",content:n}),Object(p.jsx)("meta",{name:"og:title",content:n}),Object(p.jsx)("meta",{name:"twitter:title",content:n}),Object(p.jsx)("meta",{name:"description",content:r}),Object(p.jsx)("meta",{name:"og:description",content:r}),Object(p.jsx)("meta",{name:"twitter:description",content:r})]}),Object(p.jsx)("div",{alt:"logo",className:"logo"}),Object(p.jsx)("h1",{className:"center_box",style:{textAlign:"center"},children:Object(p.jsx)(N,{id:"website_title"})}),Object(p.jsx)("br",{}),Object(p.jsx)("nav",{children:Object(p.jsx)(o.a,{href:c,children:Object(p.jsx)("button",{children:"Join Volt"})})}),Object(p.jsx)("div",{className:"center_box",style:{textAlign:"center"},children:Object(p.jsx)(N,{id:"into_text",elems:{strong:Object(p.jsx)("strong",{}),p:Object(p.jsx)("p",{}),p_one:Object(p.jsx)("p",{style:{marginBlockEnd:"0"}}),h2:Object(p.jsx)("h2",{style:{marginBlockEnd:"20px"}})}})}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)(C,{}),Object(p.jsx)(k.a,{})]})}var I=Object(o.c)([{path:"/",element:Object(p.jsx)(L,{}),children:[{path:"/",element:Object(p.jsx)(F,{})},{path:"*",element:Object(p.jsx)(F,{})}]}]);window.addEventListener("popstate",(function(){window.umami&&window.umami.trackView(window.location.pathname+window.location.search+window.location.hash)})),i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(k.c,{router:I,fallbackElement:"Loading\u2026"})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.cc1053e8.chunk.js.map