(this["webpackJsonpsort-algo"]=this["webpackJsonpsort-algo"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(6),o=n.n(i),s=(n(12),n(2)),c=n(7),l=n(0),u=function(e){return Object(l.jsxs)("div",{className:"statistics",children:[Object(l.jsxs)("h3",{children:["There are ",e.length," random elements in the data set"]}),Object(l.jsxs)("h4",{children:["Comparisons: ",e.statistics.comparisons," | Swaps & Insertions:"," ",e.statistics.swaps]})]})},d=function(e,t){return 72*t/Math.max.apply(Math,Object(c.a)(e))},h=function(e){var t,n=(t=e.dataSet.length,85/(1.1*(t-1)));return Object(l.jsxs)("div",{className:"data_container",children:[Object(l.jsx)(u,{statistics:e.statistics,length:e.dataSet.length}),Object(l.jsx)("div",{className:"data_set",children:e.dataSet.map((function(t,a){return Object(l.jsx)("div",{className:"data_bar",style:{height:"".concat(d(e.dataSet,t),"vh"),width:"".concat(n,"vw"),margin:"0 ".concat(n/10,"vw")}},a)}))})]})},b=function(e){var t=[];if(e.length<=1)return t;for(var n=e.slice(),a=n.length,r=0;r<a-1;r++){for(var i=!1,o=0;o<a-r-1;o++)if(t.push(["compare",o,o+1]),n[o]>n[o+1]){t.push(["swap",o,o+1]);var s=n[o];n[o]=n[o+1],n[o+1]=s,i=!0}if(t.push(["key",a-r-1]),!i)return t}return t},f=function(e){var t=e.slice(),n=[];if(t.length<=1)return n;for(var a=0;a<t.length-1;a++){var r=a;n.push(["key",a]);for(var i=a+1;i<t.length;i++)t[i]<t[r]&&(r=i),n.push(["compare",r,i]);n.push(["swap",a,r]);var o=t[a];t[a]=t[r],t[r]=o}return n},p=function(e){var t=e.slice(),n=[];if(t.length<=1)return n;for(var a=1;a<t.length;a++){var r=t[a],i=a-1;for(a<t.length-1&&n.push(["key",a]),n.push(["compare",i,i+1]);i>=0&&t[i]>r;)n.push(["swap",i,i+1]),t[i+1]=t[i],t[i]=r,t[--i]>r&&n.push(["compare",i,i+1])}return n},g=function e(t,n,a,r,i){if(n<a){var o=Math.floor((n+a)/2);e(r,n,o,t,i),e(r,o+1,a,t,i),j(t,n,o,a,r,i)}},j=function(e,t,n,a,r,i){var o=t,s=n+1,c=t;for(i.push(["key",n]);o<=n&&s<=a;)i.push(["compare",o,s]),r[o]<r[s]?(i.push(["swap",c,r[o]]),e[c]=r[o],o++):(i.push(["swap",c,r[s]]),e[c]=r[s],s++),c++;for(;o<=n;)i.push(["swap",c,r[o]]),e[c]=r[o],o++,c++;for(;s<=a;)i.push(["swap",c,r[s]]),e[c]=r[s],s++,c++},m=function(e){var t=[];if(e.length<=1)return t;var n=e.slice(),a=e.slice();return g(n,0,n.length-1,a,t),t},S=function(e,t,n,a){a.push(["swap",t,n]);var r=e[t];e[t]=e[n],e[n]=r},v=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},O=function e(t,n,a,r){if(n<a){var i=k(t,n,a,r);e(t,n,i-1,r),e(t,i+1,a,r)}},k=function(e,t,n,a){var r=v(t,n);a.push(["key",r]),S(e,r,n,a);for(var i=e[n],o=t-1,s=t;s<n;s++)e[s]<i&&(o++,a.push(["compare",o,s]),S(e,o,s,a));return a.push(["compare",o+1,n]),S(e,o+1,n,a),o+1},x=function e(t,n,a,r){if(n<a){var i=w(t,n,a,r);e(t,n,i,r),e(t,i+1,a,r)}},w=function(e,t,n,a){var r=v(t,n);S(e,r,t,a);var i=e[t];a.push(["key",r]);for(var o=t,s=n;;){for(;e[o]<i;)o++;for(;e[s]>i;)s--;if(a.push(["compare",o,s]),o>=s)return s;S(e,o,s,a)}},y=function(e,t){var n=[];if(e.length<=1)return n;var a=e.slice();return t?O(a,0,a.length-1,n):x(a,0,a.length-1,n),n},_="steelblue",C=2,I=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),r=n[0],i=n[1],o=Object(a.useState)(!1),c=Object(s.a)(o,2),l=c[0],u=c[1],h=Object(a.useState)(0),g=Object(s.a)(h,2),j=g[0],S=g[1],v=Object(a.useState)(0),O=Object(s.a)(v,2),k=O[0],x=O[1],w=function(){var t=e.length/100;return C/(t*t)},I=function(e){for(var t,n,a,r=(t=w(),n=1,a=50,Math.min(Math.max(t,n),a)),o=function(t){setTimeout((function(){e[t].style.backgroundColor="seagreen",t===e.length-1&&setTimeout((function(){i(!1),u(!0)}),1e3)}),t*r)},s=0;s<e.length;s++)o(s)},N=function(t,n){for(var a=w()*n,r=document.getElementsByClassName("data_bar"),i=0,o=0,c=0,l=1.5*e.length,u=setInterval((function(){S(o),x(c)}),l),h=function(n){var l=Object(s.a)(t[n],3),h=l[0],b=l[1],f=l[2],p=r[b].style,g=f<e.length&&Number.isInteger(f),j=r[g?f:b].style;switch(h){case"key":setTimeout((function(){i!==b&&(r[i].style.backgroundColor=_,p.backgroundColor="crimson",i=b),n===t.length-1&&(S(o),x(c),I(r),clearInterval(u))}),n*a);break;case"compare":setTimeout((function(){o++,b!==i&&(p.backgroundColor="yellow"),f!==i&&(j.backgroundColor="magenta")}),n*a),setTimeout((function(){b!==i&&(p.backgroundColor=_),f!==i&&(j.backgroundColor=_),n===t.length-1&&(r[i].style.backgroundColor=_,S(o),x(c),I(r),clearInterval(u))}),(n+1)*a);break;case"swap":setTimeout((function(){if(c++,g){var a=p.height;p.height=j.height,j.height=a}else{var s=d(e,f);p.height="".concat(s,"vh")}n===t.length-1&&(r[i].style.backgroundColor=_,S(o),x(c),I(r),clearInterval(u))}),n*a);break;default:console.error("Unknown operator??????")}},b=0;b<t.length;b++)h(b)};return{functions:{sortData:function(t){i(!0),u(!0);var n=[],a=1;switch(t){case"bubble":n=b(e),a=.5;break;case"selection":n=f(e);break;case"insertion":n=p(e);break;case"merge":n=m(e),a=5;break;case"quick_lom":n=y(e,!0),a=5;break;case"quick_hor":n=y(e,!1),a=5;break;default:return u(!1),i(!1),void console.error("No algorithm specified :/")}N(n,a)},setBaseSpeed:function(e){C=1/parseFloat(e.target.value)},resetSorted:function(){u(!1),S(0),x(0)}},properties:{animating:r,isSorted:l,statistics:{comparisons:j,swaps:k}}}},N=function(e,t){for(var n=[e],a=0;a<e;a++)n[a]=Math.random()*t+1;return n},D=function(e){return Object(l.jsxs)("div",{className:"input_section",style:{display:e.isDisabled?"none":"inline"},children:[Object(l.jsx)("h3",{children:"Generate Data:"}),Object(l.jsx)("input",{type:"range",className:"slider data",min:25,max:500,defaultValue:100,onInput:e.dataSize.handleChange,onChange:e.dataSize.handleChange,disabled:e.isDisabled}),Object(l.jsxs)("div",{className:"button_list array_button",children:[Object(l.jsx)("button",{onClick:e.dataSize.regenerateNewData,disabled:e.isDisabled,children:"Make New Array"}),Object(l.jsx)("button",{id:"undo_sort",onClick:e.dataSize.undoSort,disabled:!e.isSorted||e.isDisabled,style:{display:!e.isSorted||e.isDisabled?"none":"inline-block",marginLeft:"1rem"},children:"Undo Sort"})]})]})},M=function(e){return Object(l.jsxs)("div",{className:"button_list sort_button",children:[Object(l.jsxs)("select",{name:"algos",id:"algo-drop",value:e.selectedAlgo,onChange:e.changeAlgo,children:[Object(l.jsxs)("optgroup",{label:"O(n\xb2)",children:[Object(l.jsx)("option",{value:"bubble",children:"Bubble Sort"}),Object(l.jsx)("option",{value:"selection",children:"Selection Sort"}),Object(l.jsx)("option",{value:"insertion",children:"Insertion Sort"})]}),Object(l.jsxs)("optgroup",{label:"O(n\xb7log(n))",children:[Object(l.jsx)("option",{value:"merge",children:"Merge Sort"}),Object(l.jsx)("option",{value:"quick_lom",children:"Quick Sort (Lomuto Partitioning)"}),Object(l.jsx)("option",{value:"quick_hor",children:"Quick Sort (Hoare Partitioning)"})]})]}),Object(l.jsx)("button",{onClick:function(){e.sortProps.infoState.setAlgo(e.selectedAlgo),e.sortProps.infoState.toggleInfoBox()},children:"Algo Info"}),Object(l.jsx)("button",{onClick:function(){return e.sortProps.sortData(e.selectedAlgo)},disabled:e.sortProps.isDisabled||e.sortProps.isSorted,style:{display:e.sortProps.isDisabled||e.sortProps.isSorted?"none":"inline"},children:"Sort Data"})]})},A=function(e){var t=Object(a.useState)("bubble"),n=Object(s.a)(t,2),r=n[0],i=n[1];return Object(l.jsxs)("div",{className:"input_section sort_section",style:{display:e.isDisabled?"none":"inline"},children:[Object(l.jsx)("h3",{children:"Sort Speed:"}),Object(l.jsx)("input",{type:"range",className:"slider sort",min:.1,max:1,step:1e-5,defaultValue:.5,onInput:e.setSpeed,onChange:e.setSpeed,disabled:e.isDisabled}),Object(l.jsx)(M,{selectedAlgo:r,changeAlgo:function(t){e.infoState.setAlgo(t.target.value),i(t.target.value)},sortProps:e})]})},B=function(){return Object(l.jsxs)("div",{id:"title",children:[Object(l.jsx)("h1",{children:"Sorting Algorithms"}),Object(l.jsx)("h4",{children:Object(l.jsx)("i",{children:"WARNING: Animation contains flashing lights"})}),Object(l.jsxs)("h5",{children:["\xa9 2021 John Marcus Mabanta \xb7"," ",Object(l.jsx)("a",{href:"https://github.com/jmmabanta/sort-algo",target:"_blank",rel:"noopener noreferrer",children:"Source Code"})]})]})},P=function(e){return Object(l.jsxs)("div",{id:"toolbar",className:e.animState.properties.animating?"hide":"show",children:[Object(l.jsx)(B,{}),Object(l.jsx)(D,{dataSize:e.dataState.functions,isDisabled:e.animState.properties.animating,isSorted:e.animState.properties.isSorted}),Object(l.jsx)(A,{sortData:e.animState.functions.sortData,setSpeed:e.animState.functions.setBaseSpeed,isDisabled:e.animState.properties.animating,isSorted:e.animState.properties.isSorted,infoState:e.infoState})]})},T={bubble:{name:"Bubble Sort",url:"https://en.wikipedia.org/wiki/Bubble_sort"},selection:{name:"Selection Sort",url:"https://en.wikipedia.org/wiki/Selection_sort"},insertion:{name:"Insertion Sort",url:"https://en.wikipedia.org/wiki/Insertion_sort"},merge:{name:"Merge Sort",url:"https://en.wikipedia.org/wiki/Merge_sort"},quick_lom:{name:"Quick Sort",url:"https://en.wikipedia.org/wiki/Quick_sort"},quick_hor:{name:"Quick Sort",url:"https://en.wikipedia.org/wiki/Quicksort#Hoare_partition_scheme"}},q=function(e){return Object(l.jsxs)("div",{id:"infobox",style:{display:e.infoState.isEnabled?"flex":"none"},children:[Object(l.jsx)("div",{id:"wikipedia",children:Object(l.jsx)("iframe",{src:T[e.infoState.algoInfo].url,title:T[e.infoState.algoInfo].name})}),Object(l.jsx)("button",{onClick:function(){return e.infoState.toggleInfoBox(!1)},children:"X"}),Object(l.jsxs)("h2",{children:[T[e.infoState.algoInfo].name," Info"]})]})},E=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)("bubble"),o=Object(s.a)(i,2),c=o[0],l=o[1];return{isEnabled:n,algoInfo:c,toggleInfoBox:function(e){r(void 0===e?function(e){return!e}:e)},setAlgo:function(e){l(e)}}},Q=function(){var e=function(e,t){var n,r=Object(a.useState)(N(e,t)),i=Object(s.a)(r,2),o=i[0],c=i[1],l=function(){n();for(var e=document.getElementsByClassName("data_bar"),t=0;t<e.length;t++)e[t].style.backgroundColor=_};return{functions:{handleChange:function(e){var n=parseFloat(e.target.value),a=25*Math.ceil(n/25);c((function(e){return N(a,t)})),l()},regenerateNewData:function(){c((function(e){return N(e.length,t)})),l()},undoSort:function(){l();for(var e=document.getElementsByClassName("data_bar"),t=0;t<e.length;t++)e[t].style.height="".concat(d(o,o[t]),"vh")},setResetSorted:function(e){n=e}},dataSet:o}}(100,45),t=I(e.dataSet),n=E();return e.functions.setResetSorted(t.functions.resetSorted),Object(l.jsxs)("div",{id:"app",children:[Object(l.jsx)(h,{dataSet:e.dataSet,statistics:t.properties.statistics}),Object(l.jsx)(P,{dataState:e,animState:t,infoState:n}),Object(l.jsx)(q,{infoState:n})]})};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(Q,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.85140486.chunk.js.map