(this["webpackJsonptime-zones"]=this["webpackJsonptime-zones"]||[]).push([[0],{20:function(e,a,t){e.exports=t(33)},33:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(18),o=t.n(l),c=t(6),i=t(2),s=t(3),m=t(10),d=t(1),u=t.n(d);var v=function(e){var a=e.autofocus,t=void 0!==a&&a,n=e.changeValue,l=e.clearInput,o=e.defaultValue,c=void 0===o?"":o,i=e.id,d=e.placeholder,v=u.a.tz.names().sort().map((function(e){return e.replace(/_/g," ")})),f=r.a.useState([]),b=Object(s.a)(f,2),h=b[0],g=b[1],E=r.a.useState(c.replace(/_/g," ")),p=Object(s.a)(E,2),N=p[0],w=p[1];return r.a.createElement("h4",{"aria-level":"4",id:"converted-time-lbl"},r.a.createElement("input",{role:"searchbox",autoFocus:t,className:"w-75",id:i,name:"converted-time-lbl-input",onChange:function(e){var a=e.target.value;l&&l(void 0),w(a);var t=[];a.length&&(t=[].concat(Object(m.a)(t),Object(m.a)(v.filter((function(e){return e.toLowerCase().includes(a.toLowerCase())}))))),g(Array.from(new Set(Object(m.a)(t))))},type:"text",placeholder:d,"aria-placeholder":d,value:N,maxLength:100}),r.a.createElement("div",{id:"suggestion-list",style:{maxHeight:"50vh",overflow:"scroll",position:"fixed",zIndex:2,WebkitOverflowScrolling:"touch"}},r.a.createElement("h6",{"aria-level":"6"},r.a.createElement("ul",{className:"list-group"},h.length>0?h.map((function(e,a){return r.a.createElement("li",{className:"list-group-item list-group-item-action",key:a,onClick:function(){return a=e,g([]),w(a),void n(a.replace(/ /g,"_"));var a}},e.replace(/_/g," "))})):null))))};var f=function(){var e=r.a.useState(new Date),a=Object(s.a)(e,2),t=a[0],n=a[1];return r.a.useEffect((function(){var e=setInterval((function(){n(new Date)}),1e3);return function(){return clearInterval(e)}})),t};var b=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=e.toISOString(),r=t||u.a.tz.guess(),l=r.replace(/_/g," "),o=u()(n),c=u.a.tz.zone(r).abbr(o),i=u.a.tz.zone(a).abbr(o),s=o.tz(r).format("HH:mm:ss MMM DD, YYYY"),m=o.tz(a).format("HH:mm:ss MMM DD, YYYY");return{firstAbbr:c,firstTZ:l,fmtTime1:s,fmtTime2:m,secondAbbr:i}};var h=function(){var e=r.a.useState("UTC"),a=Object(s.a)(e,2),t=a[0],n=a[1],l=b(f(),t),o=l.firstAbbr,c=l.fmtTime1,i=l.fmtTime2,m=l.firstTZ,d=l.secondAbbr;return r.a.createElement("div",{className:"time-conversion container",style:{minHeight:"75vh"}},r.a.createElement("div",{className:"row mb-3",id:"fromto"},r.a.createElement("div",{className:"col text-right",id:"labels-from"},r.a.createElement("h1",null,"From")),r.a.createElement("div",{className:"col text-left",id:"labels-to"},r.a.createElement("h1",null,"To"))),r.a.createElement("div",{className:"row mb-3",id:"labels"},r.a.createElement("div",{className:"col text-right",id:"local-time-lbl-box"},r.a.createElement("h4",{"aria-level":"4",id:"local-time-lbl"},"Local time (",m,")")),r.a.createElement("div",{className:"col",id:"converted-time-lbl-box"},r.a.createElement(v,{autofocus:!0,changeValue:n,defaultValue:t,id:"converted-time-lbl-input",placeholder:"Time zone"}))),r.a.createElement("div",{className:"row",id:"times"},r.a.createElement("div",{className:"col text-right",id:"local-time-box"},r.a.createElement("h4",{"aria-level":"4",id:"local-time"},c," (",o,")")),r.a.createElement("div",{className:"col",id:"converted-time-box"},r.a.createElement("h4",{"aria-level":"4",id:"converted-time"},i," (",d,")"))))};var g=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",{className:"w-100 mt-5",style:{bottom:0}},r.a.createElement("hr",{style:{marginTop:0}}),r.a.createElement("div",{className:"page-footer text-center ml-1 mr-1",style:{paddingBottom:"5px"}},"Copyright \xa9 ",e," ",r.a.createElement("a",{href:"https://en.wikinews.org/wiki/User:Acagastya",target:"_blank",rel:"noopener noreferrer"},"acagastya"),". This project is licensed under"," ",r.a.createElement("a",{href:"https://opensource.org/licenses/BSD-3-Clause",target:"_blank",rel:"noopener noreferrer"},"BSD-3-Clause license"),"."))};var E=function(){var e=u.a.tz.guess(),a=r.a.useState(e),t=Object(s.a)(a,2),n=t[0],l=t[1],o=r.a.useState("UTC"),c=Object(s.a)(o,2),i=c[0],m=c[1],d=b(f(),i,n),h=d.firstAbbr,g=d.fmtTime1,E=d.fmtTime2,p=d.secondAbbr;return r.a.createElement("div",{className:"time-conversion container",style:{minHeight:"75vh"}},r.a.createElement("div",{className:"row mb-3",id:"fromto"},r.a.createElement("div",{className:"col text-right",id:"labels-from"},r.a.createElement("h1",null,"From")),r.a.createElement("div",{className:"col text-left",id:"labels-to"},r.a.createElement("h1",null,"To"))),r.a.createElement("div",{className:"row mb-3",id:"labels"},r.a.createElement("div",{className:"col text-right",id:"first-time-lbl-box"},r.a.createElement(v,{autofocus:!0,changeValue:l,defaultValue:n,id:"first-time-lbl-input",placeholder:"First time zone"})),r.a.createElement("div",{className:"col",id:"second-time-lbl-box"},r.a.createElement(v,{changeValue:m,defaultValue:i,id:"second-time-lbl-input",placeholder:"Second time zone"}))),r.a.createElement("div",{className:"row",id:"times"},r.a.createElement("div",{className:"col text-right",id:"first-time-box"},r.a.createElement("h4",{"aria-level":"4",id:"first-time"},g," (",h,")")),r.a.createElement("div",{className:"col",id:"second-time-box"},r.a.createElement("h4",{"aria-level":"4",id:"second-time"},E," (",p,")"))))};function p(e){var a=e.chosenTime,t=e.convertedTime,n=e.TZ1,l=e.TZ2,o=u()(a,"HH:mm:ss DD MMM, YYYY"),c=u()(t,"HH:mm:ss MMM DD, YYYY"),i=u.a.tz.zone(n).abbr(o),s=u.a.tz.zone(l).abbr(c);return r.a.createElement("div",{className:"mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",null,n.replace(/_/g," "))),r.a.createElement("div",{className:"col"},r.a.createElement("h1",null,l.replace(/_/g," ")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},a," (",i,")"),r.a.createElement("div",{className:"col"},t," (",s,")")))}function N(e){var a=e.msg;return r.a.createElement("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert"},a,r.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))}var w=function(){var e=u()(new Date),a=e.format("YYYY-MM-DD"),t=u.a.tz.guess(),n=e.format("HH:mm"),l=r.a.useState(a),o=Object(s.a)(l,2),c=o[0],i=o[1],m=r.a.useState(n),d=Object(s.a)(m,2),f=d[0],b=d[1],h=r.a.useState(t),g=Object(s.a)(h,2),E=g[0],w=g[1],x=r.a.useState("UTC"),z=Object(s.a)(x,2),Y=z[0],y=z[1],S=r.a.useState(""),D=Object(s.a)(S,2),T=D[0],k=D[1],M=r.a.useState(void 0),C=Object(s.a)(M,2),O=C[0],H=C[1],j=r.a.useState(void 0),V=Object(s.a)(j,2),A=V[0],F=V[1];return r.a.createElement("div",{className:"container",style:{minHeight:"75vh"}},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),k(""),H(void 0),F(void 0);var a=u()(c);if(!a.isValid())return k("Chosen date is not valid."),void console.warn(T);if(u()("01-18-2038","MM-DD-YYYY").unix()-a.unix()<0)return k("Chosen date is outside the maximum permissible limit."),void console.warn(T);var t=a.format("YYYY-MM-DD"),n=f,r="".concat(t," ").concat(n),l=u.a.tz(r,E);if(!l.isValid)return k("Error occurred while parsing time."),void console.warn(T);if(u.a.tz.names().indexOf(E)<0)k("Selected timezone does not exist.");else if(u.a.tz.names().indexOf(Y)<0)k("Destination timezone does not exist.");else{F(l.tz(E).format("HH:mm:ss MMM DD, YYYY"));var o=l.tz(Y).format("HH:mm:ss MMM DD, YYYY");H(o)}}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"choose-date"},"Choose date"),r.a.createElement("input",{"aria-describedby":"choose-date",className:"form-control",id:"choose-date",max:"2038-01-18",min:e,name:"choose-date",onChange:function(e){i(e.target.value),H(void 0)},placeholder:"Enter date",type:"date",value:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"choose-time"},"Choose time"),r.a.createElement("input",{"aria-describedby":"choose-time",className:"form-control",id:"choose-time",name:"choose-time",onChange:function(e){b(e.target.value),H(void 0)},placeholder:"Enter time",type:"time",value:f})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"choose-from-timezone"},"Set timezone"),r.a.createElement(v,{autofocus:!1,changeValue:w,clearInput:H,defaultValue:E,id:"choose-from-timezone",placeholder:"Set timezone"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"convert-to-timezone"},"Convert to timezone"),r.a.createElement(v,{autofocus:!1,changeValue:y,clearInput:H,defaultValue:Y,id:"convert-to-timezone",placeholder:"Convert to timezone"})),r.a.createElement("button",{type:"submit",className:"btn btn-success"},"Convert")),!0===!!T?r.a.createElement(N,{msg:T}):!0===!!O?r.a.createElement(p,{chosenTime:A,convertedTime:O,TZ1:E,TZ2:Y}):null)};var x=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-danger mb-4"},r.a.createElement(c.b,{className:"navbar-brand",to:"/"},r.a.createElement("span",{role:"img","aria-label":"time convertor"},(new Date).getSeconds()%2?"\u23f3":"\u231b\ufe0f")," ","time convertor"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"nav-link",to:"/help"},"Help")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"nav-link",to:"/future"},"Future")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"nav-link",to:"/from-to"},"From-to")))))};var z=function(){var e=u.a.tz.guess(),a=u.a.tz.zone(e).abbr(u()());return r.a.createElement("div",{className:"container",style:{minHeight:"75vh"}},r.a.createElement("ol",null,r.a.createElement("li",null,"Use the"," ",r.a.createElement(c.b,{to:"/",style:{background:"lavender",borderRadius:"5px",padding:"2px 5px"}},"homepage")," ","to convert your ",r.a.createElement("span",{className:"font-weight-bold"},"current time")," ","(",a,") to other timezone."),r.a.createElement("li",null,"Use the"," ",r.a.createElement(c.b,{to:"/future",style:{background:"lavender",borderRadius:"5px",padding:"2px 5px"}},"/future")," ","to convert a ",r.a.createElement("span",{className:"font-weight-bold"},"future date")," ","between different timezones."),r.a.createElement("li",null,"Use the"," ",r.a.createElement(c.b,{to:"/from-to",style:{background:"lavender",borderRadius:"5px",padding:"2px 5px"}},"/from-to")," ","to convert",r.a.createElement("span",{className:"font-weight-bold"}," current time")," between different timezones.")))};var Y=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"container-fluid",style:{maxWidth:"100vw",overflow:"hidden",padding:0}},r.a.createElement(x,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{component:z,path:"/help"}),r.a.createElement(i.a,{component:E,path:"/from-to"}),r.a.createElement(i.a,{component:w,path:"/future"}),r.a.createElement(i.a,{component:h,path:"/"})),r.a.createElement(g,null)))},y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/acagastya.github.io/time-zones",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/acagastya.github.io/time-zones","/service-worker.js");y?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(a,e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.6bb8bf9e.chunk.js.map