(this["webpackJsonpsort-algo"]=this["webpackJsonpsort-algo"]||[]).push([[0],{12:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),c=a(6),i=a.n(c),s=(a(12),a(0)),o=function(t){return Object(s.jsxs)("div",{className:"data-size-form",children:[Object(s.jsx)("h2",{children:"Data Set Size:"}),Object(s.jsx)("p",{children:"Minimum = 15 | Maximum = what you can handle"}),Object(s.jsx)("input",{name:"dataSize",value:t.dataSize.size,onChange:t.dataSize.handleChange}),Object(s.jsxs)("div",{className:"data-size-form-buttons",children:[Object(s.jsx)("button",{onClick:function(){return t.dataSize.incrementSize(-1)},children:"-"}),Object(s.jsx)("button",{onClick:function(){return t.dataSize.incrementSize(1)},children:"+"})]})]})},d=a(5),u=function(t){for(var e=[t],a=0;a<t;a++)e[a]=45*Math.random()+1;return e},l=a(7),j=function(t,e,a){return e*a/Math.max.apply(Math,Object(l.a)(t))},h=function(t){var e=55/(2*(t.dataSet.length-1));return Object(s.jsxs)("div",{className:"data_container",children:[Object(s.jsx)("h2",{children:"Data:"}),Object(s.jsx)("div",{className:"data_set",children:t.dataSet.map((function(a,n){return Object(s.jsx)("div",{className:"data_bar",style:{height:"".concat(j(t.dataSet,a,45),"vh"),width:"".concat(e,"vw"),margin:"0 ".concat(e,"vw")}},n)}))}),Object(s.jsxs)("p",{children:["There are ",t.dataSet.length," random elements in the data set."]})]})},b=function(t){var e=t.slice();if(1===e.length)return e;for(var a=0;a<e.length-1;a++){for(var n=a,r=a+1;r<e.length;r++)e[r]<e[n]&&(n=r);var c=e[a];e[a]=e[n],e[n]=c}return e},O=function(t){return Object(s.jsx)("div",{children:Object(s.jsx)("button",{onClick:function(){return t.sortData(b)},children:"Selection Sort Test"})})},f=function(){var t=function(t){var e=Object(n.useState)(t),a=Object(d.a)(e,2),r=a[0],c=a[1],i=Object(n.useState)(u(r)),s=Object(d.a)(i,2),o=s[0],l=s[1];return{size:r,incrementSize:function(t){c((function(e){var a=e;return t>0?a+=t:a=a>-1*t+15?a+t:15,l(u(a)),a}))},handleChange:function(t){if(""===t.target.value||/^[0-9\b]+$/.test(t.target.value)&&parseInt(t.target.value)>=1){var e=parseInt(t.target.value)>15?parseInt(t.target.value):15;c(e),l(u(e))}},dataSet:o,sortData:function(t){l((function(e){return t(e)}))}}}(200);return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Sorting Algorithms"}),Object(s.jsx)("h3",{children:Object(s.jsx)("i",{children:"*still a work in progress don't flame :(*"})}),Object(s.jsx)(o,{dataSize:t}),Object(s.jsx)(h,{dataSet:t.dataSet}),Object(s.jsx)(O,{sortData:t.sortData})]})};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.50ed0469.chunk.js.map