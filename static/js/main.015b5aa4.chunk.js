(this["webpackJsonpcurso-react-alura"]=this["webpackJsonpcurso-react-alura"]||[]).push([[0],{120:function(e,t,a){e.exports=a(404)},124:function(e,t,a){},403:function(e,t,a){},404:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(14),o=a.n(l),c=(a(124),a(119)),i=a(29),s=a(30),u=a(32),m=a(31),v=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Autores"),r.a.createElement("th",null,"Livros"),r.a.createElement("th",null,"Pre\xe7os"),r.a.createElement("th",null,"Remover")))},h=function(e){var t=e.autores.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t.nome),r.a.createElement("td",null,t.livro),r.a.createElement("td",null,t.preco),r.a.createElement("td",null,r.a.createElement("button",{className:"waves-effect waves-light indigo lighten-2 btn",onClick:function(){e.removeAutor(a)}},"Remover")))}));return r.a.createElement("tbody",null,t)},p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.autores,a=e.removeAutor;return r.a.createElement("table",null,r.a.createElement(v,null),r.a.createElement(h,{autores:t,removeAutor:a}))}}]),a}(n.Component),E=function(){return r.a.createElement("nav",null,r.a.createElement("div",{class:"nav-wrapper indigo lighten-2"},r.a.createElement("a",{href:"/",class:"brand-logo"},"Autores"),r.a.createElement("ul",{id:"nav-mobile",class:"right"},r.a.createElement("li",null,r.a.createElement("a",{href:"#autores"},"Autores")),r.a.createElement("li",null,r.a.createElement("a",{href:"#livros"},"Livros")),r.a.createElement("li",null,r.a.createElement("a",{href:"#sobre"},"Sobre")))))},f=a(114),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).inputListener=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(f.a)({},a,r))},n.formSubmit=function(){n.props.submitListener(n.state),n.setState(n.stateInicial)},n.stateInicial={nome:"",livro:"",preco:""},n.state=n.stateInicial,n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.nome,a=e.livro,n=e.preco;return r.a.createElement("form",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s4"},r.a.createElement("label",{className:"input-field",htmlFor:"nome"},"Nome"),r.a.createElement("input",{id:"nome",type:"text",name:"nome",value:t,onChange:this.inputListener,className:"validade"})),r.a.createElement("div",{className:"input-field col s4"},r.a.createElement("label",{className:"input-field",htmlFor:"livro"},"Livro"),r.a.createElement("input",{id:"livro",type:"text",name:"livro",value:a,onChange:this.inputListener,className:"validade"})),r.a.createElement("div",{className:"input-field col s4"},r.a.createElement("label",{className:"input-field",htmlFor:"preco"},"Pre\xe7o"),r.a.createElement("input",{id:"preco",type:"text",name:"preco",value:n,onChange:this.inputListener}))),r.a.createElement("button",{onClick:this.formSubmit,type:"button",className:"waves-effect waves-light indigo lighten-2 btn"},"Salvar"))}}]),a}(n.Component),b=(a(125),a(126),a(403),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={autores:[{nome:"Meng",livro:"React",preco:"1000"},{nome:"Hai",livro:"Java",preco:"99"},{nome:"Long",livro:"Design",preco:"150"},{nome:"Lee",livro:"DevOps",preco:"100"}]},e.removeAutor=function(t){var a=e.state.autores;e.setState({autores:a.filter((function(e,a){return a!==t}))})},e.submitListener=function(t){e.setState({autores:[].concat(Object(c.a)(e.state.autores),[t])})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(E,null),r.a.createElement("div",{className:"container mb-10"},r.a.createElement(p,{className:"centered highlight",autores:this.state.autores,removeAutor:this.removeAutor}),r.a.createElement(d,{submitListener:this.submitListener})))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[120,1,2]]]);
//# sourceMappingURL=main.015b5aa4.chunk.js.map