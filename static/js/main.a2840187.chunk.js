(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(28)},21:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),i=(a(21),a(29)),d=a(30),u=a(31),o=a(1),m=a(4),s=a(34),b=Object(n.createContext)(),f=function(e){var t=Object(n.useState)([{id:1,title:"Backlog",cards:[{name:"tasks 1",stage:0,cid:Object(s.a)()},{name:"tasks 2",stage:0,cid:Object(s.a)()}]},{id:2,title:"Todo",cards:[]},{id:3,title:"InProgress",cards:[]},{id:4,title:"Done",cards:[]}]),a=Object(m.a)(t,2),c=a[0],l=a[1];return r.a.createElement(b.Provider,{value:[c,l]},e.children)};var E=function(){var e=Object(n.useContext)(b),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(m.a)(l,2),d=i[0],u=i[1];return r.a.createElement("div",null,r.a.createElement("h3",null,"Add Backlog"),r.a.createElement("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault();var t={name:d,stage:0,cid:Object(s.a)()},n=a.filter(function(e){return 1===e.id});n[0].cards.push(t);var r=a.map(function(e){return 1===e.id?Object(o.a)({},e,{cards:n[0].cards}):e});c(r),u("")}},r.a.createElement("input",{type:"text",name:"backlog",id:"backlog",placeholder:"Enter Backlog Name",value:d,onChange:function(e){var t=e.currentTarget.value;(/^[^!-\/:-@\[-`{-~]+$/.test(t)||""===t)&&u(t)}}),r.a.createElement("button",{className:"btn-primary",type:"submit",id:"submit",disabled:d.length<=2},"Add Backlog")))},g=a(33);function p(){var e=Object(n.useContext)(b),t=Object(m.a)(e,2),a=t[0],c=t[1],l=function(e,t){var n=a.map(function(a){return a.id===e?a.cards.filter(function(e){if(e.cid===t)return e}):a}),r={name:n[e-1][0].name,stage:e-2,cid:n[e-1][0].cid},l=a.map(function(a){return a.id===e-1?(a.cards.push(r),Object(o.a)({},a,{cards:a.cards})):a.id===e?Object(o.a)({},a,{cards:a.cards.filter(function(e){return e.cid!==t})}):a});c(l)},s=function(e,t){var n=a.map(function(a){return a.id===e?a.cards.filter(function(e){if(e.cid===t)return e}):a}),r={name:n[e-1][0].name,stage:e,cid:n[e-1][0].cid},l=a.map(function(a){return a.id===e+1?(a.cards.push(r),Object(o.a)({},a,{cards:a.cards})):a.id===e?Object(o.a)({},a,{cards:a.cards.filter(function(e){return e.cid!==t})}):a});c(l)};return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(d.a,{className:"mt-2"},r.a.createElement(u.a,{lg:12},r.a.createElement("h3",null,"View Backlog Details")),r.a.createElement(g.a,{direction:"horizontal",gap:4},r.a.createElement(u.a,{lg:3,className:"border p-1 text-center"},"Backlog"),r.a.createElement(u.a,{lg:3,className:"border p-1 text-center"},"ToDo"),r.a.createElement(u.a,{lg:3,className:"border p-1 text-center"},"InProgress"),r.a.createElement(u.a,{lg:3,className:"border p-1 text-center"},"Done")),r.a.createElement(g.a,{direction:"horizontal",gap:4},a.map(function(e){return r.a.createElement(u.a,{lg:3,key:e.id,className:"mt-3"},e.cards.map(function(t,a){return r.a.createElement("div",{key:t.cid},r.a.createElement("p",null,t.name),r.a.createElement("p",null,r.a.createElement("button",{className:"btn-primary mybtn",onClick:function(){return l(e.id,t.cid)},disabled:1===e.id||4===e.id},"<"),r.a.createElement("button",{className:"btn-primary mybtn",onClick:function(){return s(e.id,t.cid)},disabled:4===e.id},">"),r.a.createElement("button",{className:"btn-danger mybtn",onClick:function(){return a=e.id,t.cid,void alert(a);var a},disabled:1!==e.id},"x")))}))})))))}var v=function(){return r.a.createElement(f,null,r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(d.a,{className:"mt-5"},r.a.createElement(u.a,{lg:12},r.a.createElement(E,null),r.a.createElement("hr",null)),r.a.createElement(u.a,{lg:12},r.a.createElement(p,null))))))},j=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,32)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),c(e),l(e)})};a(26);l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null))),j()}},[[12,3,2]]]);
//# sourceMappingURL=main.a2840187.chunk.js.map