(window["webpackJsonpredux-todo"]=window["webpackJsonpredux-todo"]||[]).push([[0],{121:function(e,t,n){e.exports={card:"src-features-todos-organisms-list-style-module__card--200_m",done:"src-features-todos-organisms-list-style-module__done--1N2TR",taskText:"src-features-todos-organisms-list-style-module__taskText--2HLjw"}},166:function(e,t,n){e.exports={wrapper:"src-features--core-molecules-menu-style-module__wrapper--13-Og",link:"src-features--core-molecules-menu-style-module__link--1aKhZ"}},167:function(e,t,n){e.exports={wrapper:"src-features--core-molecules-form-item-style-module__wrapper--2-UTF",vertical:"src-features--core-molecules-form-item-style-module__vertical--2DTXu"}},17:function(e,t,n){"use strict";var a=n(187);n.d(t,"serviceWorker",(function(){return a}));var r=n(260);n.d(t,"BaseTemplate",(function(){return r.a}));var o=n(205);n.d(t,"FormItem",(function(){return o.a}));var c=n(92);n.d(t,"Container",(function(){return c.a}));var i=n(206);n.d(t,"createDataStore",(function(){return i.a}));var l=n(207);n.o(l,"ls")&&n.d(t,"ls",(function(){return l.ls})),n.o(l,"mapRoutesSchemaToJsx")&&n.d(t,"mapRoutesSchemaToJsx",(function(){return l.mapRoutesSchemaToJsx}));var s=n(208);n.d(t,"mapRoutesSchemaToJsx",(function(){return s.a}));var u=n(209);n.d(t,"ls",(function(){return u.a}))},187:function(e,t,n){"use strict";n.r(t),n.d(t,"register",(function(){return r})),n.d(t,"unregister",(function(){return c}));var a=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function r(e){if("serviceWorker"in navigator){if(new URL("/effector-compare",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/effector-compare","/service-worker.js");a?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):o(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):o(t,e)}))}}function o(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}function c(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(26),r=n(0),o=n.n(r),c=n(2),i=n.n(c),l=n(167),s=n.n(l),u=function(e){var t=e.children,n=e.label,r=e.vertical;return o.a.createElement("div",{className:i()(s.a.wrapper,Object(a.a)({},s.a.vertical,r))},o.a.createElement("label",null,n,":"),o.a.createElement("div",null,t))}},206:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(26),r=n(119),o=n(9);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=function(e){var t=e.initialValue,n=Object(r.a)(e,["initialValue"]),a={loading:!1,data:t,error:null},c=Object(o.e)({handler:n.loadData}),l=Object(o.g)(a);return l.on(c.pending,(function(e,t){return i({},e,{loading:t})})).on(c.done,(function(e,t){return i({},e,{data:t.result,error:null})})).on(c.fail,(function(e,t){return i({},e,{error:t.error.message})})),{$store:l,loadData:c}}},207:function(e,t){},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(42),r=n(0),o=n.n(r),c=function(e){return Object.entries(e).map((function(e){var t=Object(a.a)(e,2),n=t[0],r=t[1];return o.a.createElement(r,{path:"/effector-compare"+n,key:n})}))}},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={getKey:function(e){switch(e.type){case"LOCALE":return e.type}}}},260:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(92),c=(n(188),n(16)),i=n.n(c),l=n(118),s=n(204),u=n(166),m=n.n(u),f=[{intl:"menu.todos",path:"/",icon:"unordered-list"},{intl:"menu.sequences",path:"/sequences",icon:"ordered-list"},{intl:"menu.about",path:"/about",icon:"user"},{intl:"menu.settings",path:"/settings",icon:"setting"}],d=function(){return r.a.createElement("ul",{className:m.a.wrapper},f.map((function(e){var t=e.intl,n=e.path,a=e.icon;return r.a.createElement("li",{key:n},r.a.createElement(l.a,{className:m.a.link,to:"/effector-compare"+n},r.a.createElement(i.a,{type:a}),r.a.createElement(s.a,{id:t})))})))},p=n(26),b=n(9),v=Object(b.f)();function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}Object(b.g)({}).on(v,(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},t)}));var g=n(60),j=n.n(g);n.d(t,"a",(function(){return y}));var y=function(e){var t=e.children,n=e.pageTitle,a=void 0===n?"@mabunny repo":n;return r.a.createElement("div",{className:j.a.wrapper},r.a.createElement("div",{className:j.a.header},r.a.createElement(o.a,null,r.a.createElement("div",{className:j.a.headerContainer},r.a.createElement("div",null,a),r.a.createElement(d,null)))),r.a.createElement("div",{className:j.a.content},r.a.createElement("div",{className:j.a.contentPaper},t),r.a.createElement("div",{className:j.a.footer},r.a.createElement(o.a,null,"@mabunny repo",", ",(new Date).getFullYear()))))}},263:function(e,t,n){e.exports={wrapper:"src-features--core-atoms-container-style-module__wrapper--3HEqC"}},277:function(e,t,n){e.exports=n(600)},599:function(e,t,n){},60:function(e,t,n){e.exports={wrapper:"src-features--core-templates-base-template-style-module__wrapper--29jfN",header:"src-features--core-templates-base-template-style-module__header--3saGR",headerContainer:"src-features--core-templates-base-template-style-module__headerContainer--r1tf3",menu:"src-features--core-templates-base-template-style-module__menu--22-LA",content:"src-features--core-templates-base-template-style-module__content--3N1MR",contentPaper:"src-features--core-templates-base-template-style-module__contentPaper--JcCqh",footer:"src-features--core-templates-base-template-style-module__footer--3xY5G"}},600:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),c=n(7),i=n.n(c),l=n(163),s=n(273),u=n(31),m=n(165),f=n.n(m),d=n(262),p=n(9),b=n(113),v=n(17),O=function(){return new Promise((function(e,t){var n=localStorage.getItem("tasks");setTimeout((function(){n?e(JSON.parse(n)):t(n)}),1e3)}))},g=function(e){localStorage.setItem("tasks",JSON.stringify(e))},j=n(267),y=n.n(j).a.create({baseURL:"/effector-compare/"}),E=function(e){var t=e.localeCode;return y.get("locales/".concat(t,".json"))},h=Object(p.f)(),w=n(28);!function(e){e.en_US="en-US",e.ru_RU="ru-RU"}(a||(a={}));var k=b.union.apply(void 0,Object(w.a)(Object.values(a))),T=v.ls.getKey({type:"LOCALE"}),_=Object(v.createDataStore)({initialValue:{},loadData:function(){var e=Object(d.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E({localeCode:t});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),D=_.$store,C=_.loadData,S=Object(p.g)(null);S.on(h,(function(e,t){return t})),S.watch((function(e){null!==e&&(C(e),localStorage.setItem(T,e))}));var P=localStorage.getItem(T);if(P){var x=k("persistedData")(P);x instanceof b.ValidationError?localStorage.removeItem(T):h(x)}var N,q=n(118),R=(n(396),n(271)),U=n.n(R),A=(n(87),n(73)),I=n.n(A),L=(n(400),n(272)),M=n.n(L),W=n(42),J=n(13),B=n.n(J),F=(n(149),n(74)),z=n.n(F),K=(n(407),n(120)),V=n.n(K),G=(n(218),n(115)),H=n.n(G),Y=n(219),$=n(26),X=Object(p.e)({handler:function(){return O()}}),Z=Object(p.f)(),Q=Object(p.f)(),ee=Object(p.f)(),te=Object(p.f)(),ne=Object(p.f)(),ae=Object(p.f)();function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(n,!0).forEach((function(t){Object($.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}!function(e){e.justDoneTasks="justDoneTasks",e.justUndoneTasks="justUndoneTasks",e.allTasks="allTasks"}(N||(N={}));var ce=Object(p.g)({loading:!1,data:[]});ce.on(X,(function(e){return oe({},e,{loading:!0})})).on(X.done,(function(e,t){return oe({},e,{data:t.result})})).on(X.fail,(function(e){return oe({},e,{data:[]})})).on(X.finally,(function(e){return oe({},e,{loading:!1,initialized:!0})})).on(Q,(function(e,t){return oe({},e,{data:[].concat(Object(w.a)(e.data),[t])})})).on(ee,(function(e,t){var n=t.taskTimestamp;return oe({},e,{data:e.data.filter((function(e){return e.timestamp!==n}))})})).on(ne,(function(e,t){var n=t.todoTimestamp,a=t.doneTimestamp,r=t.flag;return oe({},e,{data:e.data.map((function(e){return e.timestamp===n?oe({},e,{isDone:r,doneTimestamp:a}):e}))})}));var ie={dates:[B()().add(-1,"week").startOf("week").startOf("day"),B()().endOf("week").endOf("day")],filterString:"",filterType:N.allTasks,initialized:!1},le=Object(p.g)(ie);le.on(ae,(function(e,t){return oe({},e,{},t)}));var se=ce.map((function(e){return Object(w.a)(e.data).reverse()})),ue=Object(p.b)(se,le,(function(e,t){var n=t.filterType,a=t.filterString,r=t.dates,o=Object(w.a)(e);switch(n){case N.justDoneTasks:o=o.filter((function(e){return e.isDone}));break;case N.justUndoneTasks:o=o.filter((function(e){return!e.isDone}))}return r&&(o=o.filter((function(e){var t=B()(e.timestamp).startOf("day"),n=Object(W.a)(r,2),a=n[0],o=n[1],c=t.isSameOrAfter(a),i=t.isSameOrBefore(o);return!(!c||!i)}))),a&&(o=o.filter((function(e){return e.description.toUpperCase().includes(a.toUpperCase())}))),o}));Object(p.b)(ce,le,(function(e,t){return{data:e.data,initialized:t.initialized}})).watch((function(e){var t=e.data;e.initialized&&g(t)})),Z.watch((function(e){Q(oe({},e,{isDone:!1,timestamp:(new Date).getTime()}))})),te.watch((function(e){var t=e.flag?(new Date).getTime():void 0;ne(oe({},e,{doneTimestamp:t}))}));var me=function(e){var t=e.className,n=Object(Y.a)().formatMessage,a=Object(r.useState)(""),c=Object(W.a)(a,2),i=c[0],l=c[1],s=Object(r.useState)(!1),u=Object(W.a)(s,2),m=u[0],f=u[1],d=Object(r.useCallback)((function(){i?(Z({description:i}),l(""),f(!1)):f(!0)}),[i]),p=Object(r.useCallback)((function(e){l(e.target.value)}),[]),b=Object(r.useCallback)((function(e){"Enter"===e.key&&(e.preventDefault(),d())}),[d]),v=Object(r.useCallback)((function(e){e.preventDefault(),d()}),[d]);return o.a.createElement(V.a,{onSubmit:v,className:t},o.a.createElement(H.a.Title,{level:4},n({id:"tasks.form.addTask"})),o.a.createElement(V.a.Item,{label:n({id:"tasks.form.description"}),validateStatus:m?"error":"success",required:!0,extra:m?n({id:"tasks.form.enterDescription"}):""},o.a.createElement(I.a.TextArea,{value:i,onChange:p,onKeyDown:b,rows:4})),o.a.createElement(V.a.Item,null,o.a.createElement(z.a,{type:"primary",htmlType:"submit"},n({id:"tasks.form.add"}))))},fe=(n(542),n(270)),de=n.n(fe),pe=(n(240),n(164)),be=n.n(pe),ve=(n(188),n(16)),Oe=n.n(ve),ge=(n(241),n(116)),je=n.n(ge),ye=(n(546),n(269)),Ee=n.n(ye),he=n(2),we=n.n(he),ke=n(34),Te=n(121),_e=n.n(Te),De=function(e){var t=e.itemClassName,n=Object(u.a)(ue,(function(e){var n=e.description,a=e.doneTimestamp,r=e.isDone,c=e.timestamp,i=new Date(c),l=a?new Date(a):void 0,s=o.a.createElement(be.a,{type:"flex",gutter:8},o.a.createElement(je.a,null,o.a.createElement(Ee.a,{checked:r,onChange:function(e){return te({todoTimestamp:c,flag:!r})}})),o.a.createElement(je.a,null,o.a.createElement(Oe.a,{type:"close",onClick:function(){return ee({taskTimestamp:c})}})));return o.a.createElement(o.a.Fragment,null,o.a.createElement(de.a,{size:"small",extra:s,title:o.a.createElement(ke.a,{value:i,hour:"numeric",minute:"numeric",day:"numeric",month:"long"}),className:we()(t,_e.a.card,{fade:r}),key:c},o.a.createElement(H.a.Paragraph,{className:_e.a.taskText},n),!!l&&o.a.createElement("div",{className:_e.a.done},o.a.createElement("span",null,o.a.createElement(Oe.a,{type:"check-circle"})),o.a.createElement("span",null,o.a.createElement("span",null,o.a.createElement(ke.a,{value:l,hour:"numeric",minute:"numeric",day:"numeric",month:"long"}))))))}));return o.a.createElement(o.a.Fragment,null,n)},Ce=(n(246),n(76)),Se=n.n(Ce),Pe=n(204),xe=function(e){var t=e.value,n=e.onChange,a=Object(r.useMemo)((function(){return{width:"200px"}}),[]),c=Object(r.useCallback)((function(e){"string"===typeof e&&n(e)}),[n]);return o.a.createElement(r.Fragment,null,o.a.createElement(Se.a,{value:t,style:a,onChange:c},Object.values(N).map((function(e){return o.a.createElement(Se.a.Option,{key:e,value:e},o.a.createElement(Pe.a,{id:"tasks.filterTypesSelect.".concat(e)}))}))))},Ne=n(78),qe=n.n(Ne),Re=B()().localeData().longDateFormat("L"),Ue=function(){var e=Object(u.b)(le),t=e.dates,n=e.filterString,a=e.filterType,c=Object(u.c)({store:ce,keys:[],fn:function(e){return{loading:e.loading}}}).loading,i=Object(r.useCallback)((function(e){ae({filterType:e})}),[]),l=Object(r.useCallback)((function(e){ae({filterString:e.target.value})}),[]),s=Object(r.useCallback)((function(e){var t=Object(W.a)(e,2),n=t[0],a=t[1];ae(n&&a?{dates:[n,a]}:{dates:null})}),[]);return Object(r.useEffect)((function(){X()}),[]),o.a.createElement(U.a,{spinning:c},o.a.createElement("div",{className:qe.a.grid},o.a.createElement("div",{className:qe.a.filter},o.a.createElement("div",null,o.a.createElement(xe,{value:a,onChange:i})),o.a.createElement("div",null,o.a.createElement(M.a.RangePicker,{allowClear:!0,onChange:s,format:Re,value:t||void 0,style:{width:"289px"}})),o.a.createElement("div",null,o.a.createElement(I.a.Search,{value:n,onChange:l,placeholder:"\u041f\u043e\u0438\u0441\u043a..."}))),o.a.createElement(me,{className:qe.a.form}),o.a.createElement("div",{className:qe.a.list},o.a.createElement(De,{itemClassName:qe.a.listItem}))))},Ae=function(e){var t=e.children;return o.a.createElement(v.BaseTemplate,{pageTitle:"Todos"},o.a.createElement(v.Container,null,t))},Ie=function(e){var t=e.style,n=Object(u.b)(S),c=Object(r.useCallback)((function(e){h(e)}),[]);return o.a.createElement(Se.a,{style:t,value:n||void 0,onChange:c},Object.values(a).map((function(e){return o.a.createElement(Se.a.Option,{value:e,key:e},o.a.createElement(Pe.a,{id:"settings.languagesSelect.".concat(e)}))})))},Le=function(){return o.a.createElement("div",null,o.a.createElement(v.FormItem,{label:o.a.createElement(Pe.a,{id:"settings.languagesSelect"}),vertical:!0},o.a.createElement(Ie,{style:{width:"250px"}})))},Me=Object(p.f)(),We=Object(p.f)(),Je=Object(p.f)(),Be=Object(p.f)(),Fe=Object(p.f)(),ze=Object(p.f)(),Ke=Object(p.f)();function Ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var Ge=Object(p.g)([]);Ge.on(We,(function(e,t){return e.concat(t)})).on(Je,(function(e,t){var n=t.item,a=t.timeout;return e.map((function(e){return n.timestamp===e.timestamp?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ve(n,!0).forEach((function(t){Object($.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ve(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{timeout:a}):e}))})).on(Be,(function(e,t){var n=t.filter;return e.filter(n)})),Me.watch((function(e){var t=e.handler,n=Math.floor(10*Math.random())+1,a=(new Date).getTime(),r={delayInSec:n,handler:t,task:function(){return setTimeout((function(){t(r),Fe({filter:function(e){return a!==e.timestamp}})}),1e3*n)},timestamp:a};We(r)})),Ge.watch((function(e){if(!e.some((function(e){var t=e.timeout;return Boolean(t)}))){var t=e[0];if(t){var n=t.task();Je({item:t,timeout:n})}}})),Ge.watch(console.log),Object(p.j)(Ge,Fe,(function(e,t){return{sequences:e,filter:t.filter}})).watch((function(e){var t=e.filter;e.sequences.forEach((function(e){!t(e)&&e.timeout&&clearTimeout(e.timeout)})),Be({filter:t})}));var He=Object(p.g)([]);He.on(ze,(function(e,t){return e.concat(t)})).reset(Ke);var Ye=n(96),$e=n.n(Ye),Xe=function(){var e=Object(Y.a)(),t=e.formatMessage,n=e.formatDate,a=Object(u.b)(He),c=Object(r.useCallback)((function(){Fe({filter:function(){return!1}}),Ke()}),[]),i=Object(r.useCallback)((function(){c()}),[c]),l=Object(r.useMemo)((function(){return new Array(3).fill(void 0).map((function(e,a){return o.a.createElement("div",{key:a},o.a.createElement(z.a,{onClick:function(){Me({handler:function(e){var r=e.delayInSec,o=n(new Date,{hour:"numeric",minute:"numeric",day:"numeric",month:"numeric",year:"numeric"});ze(t({id:"sequences.logMessage"},{index:a+1,date:o,delay:r}))}})}},o.a.createElement(Pe.a,{id:"sequences.button".concat(a+1)})))}))}),[n,t]);return Object(r.useEffect)((function(){return function(){c()}}),[c]),o.a.createElement("div",{className:$e.a.wrapper},o.a.createElement("div",{className:$e.a.buttons},l),o.a.createElement("div",null,o.a.createElement(I.a.TextArea,{className:$e.a.textarea,readOnly:!0,rows:17,value:a.join("\n")})),o.a.createElement("div",{className:$e.a.footer},o.a.createElement(z.a,{onClick:i},o.a.createElement(Pe.a,{id:"sequences.reset"}))))},Ze={"/":function(){return o.a.createElement(Ae,null,o.a.createElement(Ue,null))},"/about":function(){return o.a.createElement(v.BaseTemplate,{pageTitle:"About me"},o.a.createElement(v.Container,null,"Its page about me!"))},"/settings":function(){return o.a.createElement(v.BaseTemplate,null,o.a.createElement(v.Container,null,o.a.createElement(Le,null)))},"/sequences":function(){return o.a.createElement(v.BaseTemplate,{pageTitle:o.a.createElement(Pe.a,{id:"sequences"})},o.a.createElement(v.Container,null,o.a.createElement(Xe,null)))}},Qe=function(){return o.a.createElement(q.b,null,Object(v.mapRoutesSchemaToJsx)(Ze))};n(599);i.a.render(o.a.createElement((function(){var e=Object(u.b)(D),t=Object(u.b)(S);return Object(r.useEffect)((function(){if(!t){var e=Object(s.a)();Object.values(a).map(String).includes(e)?h(e):h(Object.values(a)[0])}}),[t]),null!==t&&Object.keys(e.data).length?o.a.createElement(l.a,{locale:t,messages:e.data},o.a.createElement(Qe,null)):null}),null),document.getElementById("root")),v.serviceWorker.unregister()},78:function(e,t,n){e.exports={grid:"src-features-todos-organisms-root-style-module__grid--kneSM",filter:"src-features-todos-organisms-root-style-module__filter--2MCgq",form:"src-features-todos-organisms-root-style-module__form--G-Uyz",list:"src-features-todos-organisms-root-style-module__list--2tvYs"}},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(119),r=n(0),o=n.n(r),c=n(2),i=n.n(c),l=n(263),s=n.n(l),u=function(e){var t=e.children,n=e.className,c=e.style,l=Object(r.useMemo)((function(){if(c){c.width,c.margin;return Object(a.a)(c,["width","margin"])}}),[c]);return o.a.createElement("div",{className:i()(s.a.wrapper,n),style:l},t)}},96:function(e,t,n){e.exports={wrapper:"src-features-sequences-organisms-root-style-module__wrapper--2mX6h",buttons:"src-features-sequences-organisms-root-style-module__buttons--1nNpe",textarea:"src-features-sequences-organisms-root-style-module__textarea--2p4uA",footer:"src-features-sequences-organisms-root-style-module__footer--H1lLk"}}},[[277,1,2]]]);
//# sourceMappingURL=main.58608812.chunk.js.map