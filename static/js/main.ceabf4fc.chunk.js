(this.webpackJsonprct=this.webpackJsonprct||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(7),c=a.n(o),s=(a(13),a(1)),r=a(2),d=a(5),l=a(4),m=a(3),u=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={descHeight:0},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.setState({descHeight:this.divRef.clientHeight})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"todo-item",onClick:function(){return e.props.handleOnclick(e.props.item.id)}},i.a.createElement("h3",{className:"todo-heading"},this.props.item.heading),i.a.createElement("p",{className:"todo-desc",ref:function(t){return e.divRef=t}},this.props.item.desc),i.a.createElement("div",{className:"todo-date"},this.props.item.date.toLocaleDateString()),i.a.createElement("div",{className:"todo-time"},this.props.item.time.from.toLocaleTimeString().slice(0,5)," -"," ",this.props.item.time.to.toLocaleTimeString().slice(0,5)))}}]),a}(n.Component),h=[{id:1,heading:"Take out the trash",desc:"This should be done fast.",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!0},{id:2,heading:"Grocery shoppping",desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium odio quia doloribus accusamus illum dolorem, dolores minima ad. At, ratione provident recusandae incidunt eaque consequuntur cupiditate exercitationem eligendi ipsum, veniam suscipit assumenda aspernatur vitae tempora! Quibusdam esse ipsa assumenda, adipisci eos dolores nostrum, modi sapiente libero totam quaerat minima magni? ",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!1},{id:3,heading:"Clean gecko tank",desc:"This should be done fast.",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!1},{id:4,heading:"Mow lawn",desc:"This should be done fast.",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!0},{id:5,heading:"Catch up on Arrested Develepment",desc:"This should be done fast.",date:new Date(2020,5,20),time:{from:new Date(2020,5,20,6,24,0),to:new Date(2020,5,20,7,45,0)},completed:!1}],p=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={open:!1},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:this.props.item.show?"modal modal-show":"modal modal-hide",onClick:function(t){return e.props.handleOutclick(t,e.props.item.id)}},i.a.createElement("div",{className:"modal-content"},i.a.createElement("h3",{className:"todo-heading"},this.props.item.heading),i.a.createElement("span",{className:"close",onClick:function(){return e.props.handleOnclick(e.props.item.id)}},"\xd7"),i.a.createElement("p",{className:"todo-desc",ref:function(t){return e.divRef=t}},this.props.item.desc),i.a.createElement("div",{className:"todo-date"},this.props.item.date.toLocaleDateString()),i.a.createElement("div",{className:"todo-time"},this.props.item.time.from.toLocaleTimeString().slice(0,5)," -"," ",this.props.item.time.to.toLocaleTimeString().slice(0,5))))}}]),a}(n.Component),f=(a(14),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a),e=t.call(this);var n=h.map((function(e){return e.show=!1,e}));return e.state={todos:n},e.handleOnclick=e.handleOnclick.bind(Object(d.a)(e)),e.handleOutclick=e.handleOutclick.bind(Object(d.a)(e)),e}return Object(r.a)(a,[{key:"handleOnclick",value:function(e){this.setState((function(t){return t.todos.map((function(t){return t.id===e&&(t.show=!t.show),t}))}))}},{key:"handleOutclick",value:function(e,t){"modal modal-show"===e.target.className&&this.handleOnclick(t)}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return i.a.createElement(u,{key:t.id,item:t,handleOnclick:e.handleOnclick})})),a=this.state.todos.map((function(t){return i.a.createElement(p,{key:t.id,item:t,handleOnclick:e.handleOnclick,handleOutclick:e.handleOutclick})}));return i.a.createElement("div",{className:"todos"},i.a.createElement("h1",null,"Work"),t,a)}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.ceabf4fc.chunk.js.map