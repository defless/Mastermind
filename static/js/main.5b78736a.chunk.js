(this.webpackJsonpmastermind=this.webpackJsonpmastermind||[]).push([[0],[,,,,,function(t,e,n){t.exports=n(13)},,,,,function(t,e,n){},function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(4),i=n.n(r),c=(n(10),n(2)),l=n(1),s=(n(11),n(12),["red","green","blue","orange","pink","purple"]);var u=function(t){Object.assign([],t.totalAtempts);return o.a.createElement("div",{id:"scores"},t.totalAtempts.map((function(t){return o.a.createElement("p",null,"Gagn\xe9es en ",t.value,":",t.count)})))},m=function(t){var e=[];return o.a.createElement("div",{id:"generatebtn"},o.a.createElement("button",{onClick:function(){!function(){var t=0;e=[];for(var n=0;n<4;n++)t=Math.round(5*Math.random()),e.push(s[t]),console.log(t)}(),t.setSolution(e),console.log(e)}},"Generate Random Solution"))},p=function(t){var e=Object(a.useState)(),n=Object(l.a)(e,2),r=n[0],i=n[1],s=Object(a.useState)(),u=Object(l.a)(s,2),m=u[0],p=u[1],g=Object(a.useState)(),f=Object(l.a)(g,2),E=f[0],v=f[1],O=Object(a.useState)(),j=Object(l.a)(O,2),h=j[0],A=j[1],S=Object(a.useState)(0),k=Object(l.a)(S,2),P=k[0],w=k[1],C=Object(a.useState)(0),X=Object(l.a)(C,2),T=X[0],y=X[1],B=Object(a.useState)(0),R=Object(l.a)(B,2),x=R[0],G=R[1],J=[],M=!1;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"proposition"},o.a.createElement(b,{atempts:x,setPX:i}),o.a.createElement(b,{atempts:x,setPX:p}),o.a.createElement(b,{atempts:x,setPX:v}),o.a.createElement(b,{atempts:x,setPX:A}),o.a.createElement("button",{onClick:function(){J.push(r,m,E,h),function(){var e=Object.assign([],J),n=Object.assign([],t.solution);G(x+=1);for(var a=0;a<e.length;a++)e[a]===n[a]&&(w(P+=1),n[a]="Noir",e[a]="noir");for(var o=0;o<e.length;o++)for(var r=0;r<n.length;r++)e[o]===n[r]&&(y(T+=1),n[r]="Blanc",e[o]="blanc");if(4!==P&&t.addProposition([].concat(Object(c.a)(t.propositions),[{atempts:x,b:T,n:P,prop:J}])),4===P&&4===t.solution.length){alert("Tu as trouv\xe9 !"),t.addProposition([]),t.setTotalAtempt([].concat(Object(c.a)(t.totalAtempts),[x]));for(a=0;a<t.totalAtempts.length;a++)t.totalAtempts[a].value===x&&(t.totalAtempts[a].count+=1,M=!0);!1===M&&(t.setTotalAtempt([].concat(Object(c.a)(t.totalAtempts),[{value:x,count:1}])),M=!0),G(0),t.setSolution()}if(16===x){alert("Tu as perdu !"),t.addProposition([]);for(a=0;a<t.totalAtempts.length;a++)t.totalAtempts[a].value===x&&(t.totalAtempts[a].count+=1,M=!0);!1===M&&(t.setTotalAtempt([].concat(Object(c.a)(t.totalAtempts),[{value:16,count:1}])),M=!0),G(0),t.setSolution()}}(),w(0),y(0)}},"Submit proposition")),o.a.createElement(d,{propositions:t.propositions}))},d=function(t){return o.a.createElement("div",{id:"history"},t.propositions.map((function(t){return o.a.createElement("div",{class:"history_item"},t.prop.map((function(t){return o.a.createElement("button",{style:{backgroundColor:t},class:"dropbtn"})})),o.a.createElement("h3",null,"Blanches ",t.b),o.a.createElement("h3",null,"Noires ",t.n),o.a.createElement("h3",null,"Tentatives ",t.atempts))})))},b=function(t){var e=Object(a.useState)("white"),n=Object(l.a)(e,2),r=n[0],i=n[1];return o.a.createElement("div",{class:"dropdown"},o.a.createElement("button",{style:{backgroundColor:r},class:"dropbtn"}),o.a.createElement("div",{class:"dropdown-content"},o.a.createElement("span",{onClick:function(e){i(e.target.id),t.setPX(e.target.id)},id:"red",title:"1"},"Rouge"),o.a.createElement("span",{onClick:function(e){i(e.target.id),t.setPX(e.target.id)},id:"green",title:"2"},"Vert"),o.a.createElement("span",{onClick:function(e){i(e.target.id),t.setPX(e.target.id)},id:"blue",title:"3"},"Bleu"),o.a.createElement("span",{onClick:function(e){i(e.target.id),t.setPX(e.target.id)},id:"orange",title:"4"},"Orange"),o.a.createElement("span",{onClick:function(e){i(e.target.id),t.setPX(e.target.id)},id:"pink",title:"5"},"Rose"),o.a.createElement("span",{onClick:function(e){i(e.target.id),t.setPX(e.target.id)},id:"purple",title:"6"},"Violet")))},g=function(){var t=Object(a.useState)([]),e=Object(l.a)(t,2),n=e[0],r=e[1],i=Object(a.useState)([]),c=Object(l.a)(i,2),s=c[0],d=c[1],b=Object(a.useState)([]),g=Object(l.a)(b,2),f=g[0],E=g[1];return o.a.createElement("section",null,o.a.createElement("div",{id:"menubtns"},o.a.createElement(m,{setSolution:r}),o.a.createElement("button",{onClick:function(t){r([]),d([])}},"Abandonner"),o.a.createElement(u,{totalAtempts:f})),o.a.createElement(p,{totalAtempts:f,setTotalAtempt:E,propositions:s,addProposition:d,setSolution:r,solution:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.5b78736a.chunk.js.map