(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e){e.exports={form:{name:"",type:"",stability:""},selectedDiscs:{putters:{vos:[],os:[],stable:[],us:[],vus:[]},midranges:{vos:[],os:[],stable:[],us:[],vus:[]},fairway:{vos:[],os:[],stable:[],us:[],vus:[]},control:{vos:[],os:[],stable:[],us:[],vus:[]},distance:{vos:[],os:[],stable:[],us:[],vus:[]}}}},14:function(e,t,a){e.exports=a(22)},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),s=a.n(r),c=(a(20),a(13)),i=a(6),o=a(8),u=a(1),m=a(2),h=a(4),d=a(3),b=a(7),p=a(5),v=a(10),f=a.n(v),E=function(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:e.name}," ",e.title),l.a.createElement("input",{name:e.name,value:e.value,onChange:e.handleChange.bind(void 0)}))},y=function(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:e.name}," ",e.title),l.a.createElement("select",{name:e.name,defaultValue:e.value,value:e.value,onChange:e.handleChange.bind(void 0)},l.a.createElement("option",{value:"",disabled:!0},e.placeholder),e.options.map(function(e){return l.a.createElement("option",{key:e.title,value:e.value,label:e.title},e.title)})))},O=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit},l.a.createElement(E,{title:"Disc Name",value:this.props.form.name,name:"name",placeholder:"Choose disc",handleChange:this.props.handleChange}),l.a.createElement(y,{title:"Disc Type",value:this.props.form.type,name:"type",options:[{title:"Putter",value:"putters"},{title:"Midrange",value:"midranges"},{title:"Fairway",value:"fairway"},{title:"Control",value:"control"},{title:"Distance",value:"distance"}],placeholder:"Choose disc type",handleChange:this.props.handleChange}),l.a.createElement(y,{title:"Disc Stability",value:this.props.form.stability,name:"stability",options:[{title:"Very Overstable",value:"vos"},{title:"Overstable",value:"os"},{title:"Stable",value:"stable"},{title:"Understable",value:"us"},{title:"Very Understable",value:"vus"}],placeholder:"Choose disc stability",handleChange:this.props.handleChange}),l.a.createElement("button",{type:"submit"},"Add Disc"))}}]),t}(l.a.Component),g=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=[];return this.props.value&&this.props.value.forEach(function(t){return e.push(l.a.createElement("p",{key:t},t))}),l.a.createElement("td",{className:"cell"},e)}}]),t}(l.a.Component),j=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"renderCell",value:function(e){var t=e;return l.a.createElement(g,{value:t})}},{key:"render",value:function(){var e=this.props,t={putters:[],midranges:[],fairway:[],control:[],distance:[]};for(var a in e.selectedDiscs)for(var n in e.selectedDiscs[a])t[a].push(this.renderCell(e.selectedDiscs[a][n]));return l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Bag Matrix"),l.a.createElement("th",null,"Very OS"),l.a.createElement("th",null,"OS"),l.a.createElement("th",null,"Stable"),l.a.createElement("th",null,"US"),l.a.createElement("th",null,"Very US"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Putter"),t.putters),l.a.createElement("tr",null,l.a.createElement("th",null,"Midrange"),t.midranges),l.a.createElement("tr",null,l.a.createElement("th",null,"Fairway"),t.fairway),l.a.createElement("tr",null,l.a.createElement("th",null,"Control"),t.control),l.a.createElement("tr",null,l.a.createElement("th",null,"Distance"),t.distance)))}}]),t}(l.a.Component),C=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("button",{className:"screenshotter",onClick:this.props.onClick,type:"button"},"Take screenshot!")}}]),t}(l.a.Component),k=(a(21),a(12)),S=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).takeScreenshot=function(e){var t=document.getElementsByTagName("canvas")[0];t&&document.body.removeChild(t),f()(document.getElementsByTagName("table")[0]).then(function(e){document.body.appendChild(e)})},a.state=k,a.screenshotElement=l.a.createRef(),a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a.takeScreenshot=a.takeScreenshot.bind(Object(b.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){var t=e.target.name,a=e.target.value;this.setState(function(e){return{form:Object(o.a)({},e.form,Object(i.a)({},t,a))}})}},{key:"handleSubmit",value:function(e){var t=this.state.form.name,a=this.state.form.type,n=this.state.form.stability;this.setState(function(e){return{selectedDiscs:Object(o.a)({},e.selectedDiscs,Object(i.a)({},a,Object(o.a)({},e.selectedDiscs[a],Object(i.a)({},n,[].concat(Object(c.a)(e.selectedDiscs[a][n]),[t]))))),form:{name:"",type:"",stability:""}}},function(){console.log("Disc added!")}),e.preventDefault()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("header",null),l.a.createElement("main",null,l.a.createElement(j,{ref:function(t){return e.screenshotElement=t},selectedDiscs:this.state.selectedDiscs}),l.a.createElement(O,{form:this.state.form,handleSubmit:this.handleSubmit,handleChange:this.handleChange}),l.a.createElement(C,{onClick:this.takeScreenshot})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.c2dbb658.chunk.js.map