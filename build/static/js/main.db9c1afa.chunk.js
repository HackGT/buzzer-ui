(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(e,t,n){},144:function(e,t,n){},226:function(e,t,n){e.exports=n(388)},334:function(e,t,n){},388:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(44),c=n.n(s),i=(n(143),n(96)),r=n(36),l=n(54),u=n(55),m=n(59),h=n(56),g=n(60),p=n(30),v=n(396),f=[{key:"0",text:"Live Site",value:"live_site"},{key:"1",text:"Twitter",value:"twitter"},{key:"2",text:"Twilio",value:"twilio"},{key:"3",text:"Slack",value:"slack"}],d=(n(144),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).state={},e}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(v.a,{className:"dropdownCustom",name:"droppy",compact:!0,placeholder:"Select Client",onChange:function(t,n){var a=n.value;return e.props.onClientChange(a)},fluid:!0,selection:!0,options:f})}}]),t}(a.Component)),b=n(394),C=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).state={},e}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.config;return Object.keys(this.props.config).map(function(n){switch(t[n]){case"string":return o.a.createElement(b.a,{className:"inputCustom",placeholder:n,onChange:function(t,a){var o=a.value;return e.props.onConfigChange(o,n)}});case"boolean":return o.a.createElement(v.a,{placeholder:""+n,className:"dropdownCustom",compact:!0,fluid:!0,selection:!0,options:[{key:"0",text:"True",value:!0},{key:"1",text:"False",value:!1}],onChange:function(t,a){var o=a.value;return e.props.onConfigChange(o,n)}});case"string-array":return o.a.createElement(b.a,{className:"inputCustom",placeholder:"Input all "+n,onChange:function(t,a){var o=a.value;return e.props.onConfigChange(o.split(","),n)}})}})}}]),t}(a.Component),j={live_site:{title:"string",icon:"string"},slack:{channels:"string-array",at_channel:"boolean",at_here:"boolean"},twilio:{numbers:"string-array",groups:"string-array"},twitter:{_:"boolean"}},O=n(398),w=n(389),y=n(395),E=(n(334),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).state={client:""},e.onDataChange=e.onDataChange.bind(Object(p.a)(Object(p.a)(e))),e.onConfigChange=e.onConfigChange.bind(Object(p.a)(Object(p.a)(e))),e.close=e.close.bind(Object(p.a)(Object(p.a)(e))),e}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"column"},o.a.createElement(O.a,{as:"h1"},"Buzzer UI"))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"column"},o.a.createElement(d,{onClientChange:function(t){e.setState({client:t})}}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"column"},o.a.createElement(b.a,{className:"inputCustom",placeholder:"Message",onChange:function(t,n){var a=n.value;return e.setState({message:a})}}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"column"},o.a.createElement(C,{config:j[this.state.client]||{},onConfigChange:this.onConfigChange}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"column"},o.a.createElement(w.a,{content:"Submit",onClick:function(t,n){n.value;return e.onSendNotification()}}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"column"},o.a.createElement(y.a,{open:this.state.open,onCancel:this.close,onConfirm:this.close,content:'Message: "'+this.state.message+'" sent to '+this.state.client}))))}},{key:"close",value:function(){this.setState({open:!1})}},{key:"onSendNotification",value:function(){var e,t,n;e=this.state.message,t=this.state.client,n=this.state[this.state.client],fetch("http://0.0.0.0:8080/graphql",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:"query send_message($message:String!, $plugins:PluginMaster!) {\n  send_message(message: $message, plugins: $plugins) {\n    plugin\n    errors {\n      error\n      message\n    }\n  }\n}",variables:{message:e,plugins:Object(r.a)({},t,Object(i.a)({},n))}})}).then(function(e){return e.json()}).then(function(e){return console.log("Success!",e),!0});this.setState({open:!0})}},{key:"onDataChange",value:function(e,t){this.setState(Object(r.a)({},t,e))}},{key:"onConfigChange",value:function(e,t){var n=this;console.log(e,t),this.setState(function(a){return Object(r.a)({},n.state.client,Object(i.a)({},a[n.state.client],Object(r.a)({},t,e)))})}}]),t}(a.Component));n(387),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[226,1,2]]]);
//# sourceMappingURL=main.db9c1afa.chunk.js.map