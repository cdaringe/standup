(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5775:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return N}});var n=r(264),o=r(3232);var a=r(9682);function c(e){return function(e){if(Array.isArray(e))return(0,o.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=r(6866),s=r(6903);function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function u(e){var t,r,n="";if("string"===typeof e||"number"===typeof e)n+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=u(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function m(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=u(e))&&(n&&(n+=" "),n+=t);return n}var f=r(9231);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var p=function(e){var t=e.member,r=e.className,o=void 0===r?"":r,a=e.virtual,c=l(e,["member","className","virtual"]);return(0,n.jsx)("input",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({type:"text",placeholder:"Teammate name",defaultValue:t.name,className:m(o,!a&&!t.name&&"border-4 border-red-500")},c))};function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=function(e){return(0,n.jsx)("svg",h(h({width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd"},e),{},{children:(0,n.jsx)("path",{d:"M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m-9-14c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6-5h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z"})}))};function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=function(e){var t=e.team,r=e.handleTeamChange,o=e.handleTeamDelete,a=e.className,i=l(e,["team","handleTeamChange","handleTeamDelete","className"]),s=t.members.every((function(e){return!!e.name}));return(0,n.jsxs)("div",y(y({},i),{},{className:m(a,"m-2","p-2","border-blue-400","border-2","rounded","inline-block","max-w-lg","w-full","align-top"),children:[(0,n.jsx)("input",{type:"text",defaultValue:t.name,placeholder:"Team Name",onBlur:function(e){var n=e.currentTarget.value.trim();n&&r(y(y({},t),{},{name:n}))},className:m(!t.name&&"border-red-500 border-b-2","text-2xl","border-b")}),(0,n.jsx)("h3",{className:"mt-2",children:"Teammates"}),(0,n.jsx)("ul",{style:{listStyleType:"katakana"},className:"list-inside",children:[].concat(c(t.members),[s?{name:""}:null]).filter(Boolean).map((function(e,o){return(0,n.jsxs)("li",{className:"mb-1",children:[(0,n.jsx)(p,{className:"inline-block",member:e,virtual:o===t.members.length,onBlur:function(n){var a=n.currentTarget.value.trim(),c=t.members.map((function(t,r){return y(y({},t),{},{name:e===t?a:t.name})}));o===t.members.length&&c.push({name:a}),console.log({members:c}),r(y(y({},t),{},{members:c}))}}),(0,n.jsx)(j,{stroke:"gray",fill:"lightgray",className:"inline-block transform hover:shadow-lg hover:rotate-12 cursor-pointer",onClick:function(){r(y(y({},t),{},{members:t.members.filter((function(t){return t!==e}))}))}})]},"".concat(o,"_").concat(e.name))}))}),(0,n.jsxs)("div",{children:[(0,n.jsx)("button",{className:"bg-blue-600 text-white p-2 pl-10 pr-10 mt-4 rounded-md",type:"button",children:"Save"}),(0,n.jsx)("button",{type:"button",className:"bg-red-600 text-white p-2 pl-4 pr-4 mt-4 rounded-md float-right",children:"Delete",onClick:function(){return o(t)}})]})]}))},g=function(e){var t=e.onLaunch,r=(0,f.useState)(!1),o=r[0],a=r[1];return(0,n.jsx)("div",{id:"doit",children:(0,n.jsxs)("div",{id:"launch",children:[(0,n.jsx)("div",{className:"pt-4",children:(0,n.jsx)("h1",{className:"contents",children:"standup"})}),(0,n.jsx)("div",{className:"pt-4",children:(0,n.jsx)("h4",{className:"contents",children:"and more,"})}),(0,n.jsx)("div",{className:"pt-4",children:(0,n.jsx)("h2",{className:"contents",children:"but less boring"})}),(0,n.jsx)("button",{className:"block m-auto mt-4 brb ".concat(o?"pressed":""),onMouseDown:function(){return a(!0)},onMouseUp:function(){t(),setTimeout((function(){return a(!1)}),100)},children:(0,n.jsx)("span",{children:"Do it live!"})})]})})},x=[{text:"dvd",href:"https://dvd.js.org"},{text:"fish",href:"https://fish.js.org"}];function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(){var e=(0,s.y2)(),t=e.teamState,r=e.update,o=function(e){r(P(P({},t),{},{teams:t.teams.filter((function(t){return t!==e}))}))};return(0,n.jsxs)("div",{className:"p-2",children:[(0,n.jsx)(g,{onLaunch:function(){if(t.teams.length)console.log("teams found! launching");else{var e=document.getElementById("edit-teams");e||console.error("unable to find edit-teams"),null===e||void 0===e||e.scrollIntoView({behavior:"smooth"})}}}),(0,n.jsx)("h1",{id:"edit-teams",className:"m-auto text-3xl text-center",children:"Edit your teams!"}),t.teams.map((function(e,a){return(0,n.jsx)(O,{team:e,handleTeamChange:function(e){r(P(P({},t),{},{teams:t.teams.map((function(t,r){return a===r?e:t}))}))},handleTeamDelete:o},e.id)})),(0,n.jsx)("div",{children:(0,n.jsx)("button",{type:"button",className:"p-2 pl-10 pr-10 bg-green-500 text-white rounded-md m-auto mt-2 mb-2 block",onClick:function(){r(P(P({},t),{},{teams:[].concat(c(t.teams),[{id:String(Date.now()),name:"",members:[]}])}))},children:"+ Add team"})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{id:"edit-teams",className:"m-auto mt-8 text-3xl text-center",children:"Rad stuff"}),(0,n.jsx)("ul",{className:"list-disc list-inside p-2 text-3xl",children:x.map((function(e){var r=e.text,o=e.href;return(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:o,onClick:function(e){e.preventDefault(),function(e,t){var r=e.teams,n=e.activeTeam,o=r.find((function(e){return e.id===n}))||r[0];if(!o)throw new Error("no team available");var a=new URL(t);a.searchParams.append("names",o.members.map((function(e){return encodeURIComponent(e.name)})).join(",")),window.location.href=a.toString()}(t,o)},children:r})})}))})]})]})}},4010:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5775)}])}},function(e){e.O(0,[888,179],(function(){return t=4010,e(e.s=t);var t}));var t=e.O();_N_E=t}]);