(this["webpackJsonppokedex-app"]=this["webpackJsonppokedex-app"]||[]).push([[0],[,,,function(e,t,n){},,,,,,,,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(9),a=n.n(s),i=(n(14),n(2)),o=n.n(i),j=n(7),u=n(5),h=n(0),p=function(){return Object(h.jsx)("h1",{children:"Kanto Pok\xe9dex"})},d=n(4),l=function(e){var t=e.search,n=e.filterPokemon,r=Object(c.useRef)();return Object(d.useEffect)((function(){r.current.focus()}),[]),Object(h.jsx)("div",{children:Object(h.jsx)("input",{ref:r,type:"text",value:t,onChange:function(e){return n(e.target.value)},placeholder:"Pokemon"})})},m=(n(17),function(e){var t=e.search,n=e.filterPokemon;return Object(h.jsxs)("div",{className:"header-container",children:[Object(h.jsx)(p,{}),Object(h.jsx)(l,{search:t,filterPokemon:n})]})}),b=n(8),f=(n(3),function(e){var t=e.image,n=e.name,c=t.other,r=Object.entries(c)[1][1];return Object(h.jsx)("img",{className:"pokemon-img",src:r.front_default,alt:n})}),x=function(e){var t=e.name,n=e.pokemonID.toString().padStart(3,"0");return Object(h.jsxs)("div",{className:"pokemon-name",children:[Object(h.jsx)("h2",{children:t}),"\xa0",Object(h.jsx)("h3",{children:"#".concat(n)})]})},O=(n(18),function(e){var t=e.type;return Object(h.jsxs)("div",{className:"type-container",children:[Object(h.jsx)("div",{className:"icon ".concat(t),children:Object(h.jsx)("img",{className:"icon-img",src:"icons/".concat(t,".svg"),alt:t})}),Object(h.jsx)("h4",{className:"type-name",children:t})]})}),g=function(e){var t=e.types;return Object(h.jsx)("div",{className:"pokemon-types",children:t.map((function(e,t){return Object(h.jsx)(O,{type:e.type.name},t)}))})},v=function(e){var t=e.height,n=e.weight;return Object(h.jsxs)("div",{className:"pokemon-info",children:[Object(h.jsxs)("div",{className:"pokemon-info-box",children:[Object(h.jsx)("span",{children:Object(h.jsxs)("strong",{children:[t/10,"m"]})}),Object(h.jsx)("h4",{children:"Height"})]}),Object(h.jsxs)("div",{className:"pokemon-info-box",children:[Object(h.jsx)("span",{children:Object(h.jsxs)("strong",{children:[n/10,"kg"]})}),Object(h.jsx)("h4",{children:"Weight"})]})]})},k=function(e){var t=e.types,n=e.height,c=e.weight,r=e.idName;return Object(h.jsxs)("div",{className:"pokemon-details",children:[Object(h.jsx)(x,{name:r.name,pokemonID:r.id}),Object(h.jsx)(v,{height:n,weight:c}),Object(h.jsx)(g,{types:t})]})},y=function(e){var t=e.pokemon,n=t.sprites,c=Object(b.a)(t,["sprites"]),r=c.types,s=c.height,a=c.weight,i=Object(b.a)(c,["types","height","weight"]);return Object(h.jsxs)("div",{className:"card",style:{backgroundImage:"url(types/".concat(r[0].type.name,".png)"),backgroundSize:"cover"},children:[Object(h.jsx)(f,{image:n,name:c.name}),Object(h.jsx)(k,{types:r,height:s,weight:a,idName:i})]})},N=(n(19),function(e){var t=e.pokemonArray;return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"card-container",children:t.map((function(e){return Object(h.jsx)(y,{pokemon:e},e.id)}))})})}),w=(n(20),function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),a=Object(u.a)(s,2),i=a[0],p=a[1],l=Object(c.useState)(""),b=Object(u.a)(l,2),f=b[0],x=b[1];Object(d.useEffect)((function(){(function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,r(t),p(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var O=function(){var e=Object(j.a)(o.a.mark((function e(){var t,n,c,r,s,a,i,j,u,h,p,d,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon?limit=151");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c=[],r=0;case 8:if(!(r<n.results.length)){e.next=21;break}return e.next=11,fetch(n.results[r].url);case 11:return s=e.sent,e.next=14,s.json();case 14:a=e.sent,i=a.id,j=a.name,u=a.height,h=a.weight,p=a.sprites,d=a.types,l={id:i,name:j,height:u,weight:h,sprites:p,types:d},c.push(l);case 18:r++,e.next=8;break;case 21:return e.abrupt("return",c);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{children:[Object(h.jsx)(m,{search:f,filterPokemon:function(e){var t=e.toString().toLowerCase().trim();if(""===t)return x(e),void p(n);var c=n.filter((function(e){return e.name.toLowerCase().includes(t)}));x(e),p(c)}}),Object(h.jsx)(N,{pokemonArray:i})]})}),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root")),S()}],[[21,1,2]]]);
//# sourceMappingURL=main.e9b7f560.chunk.js.map