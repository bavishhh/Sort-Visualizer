(this.webpackJsonpvisualsort=this.webpackJsonpvisualsort||[]).push([[0],[,,,,,,,,,function(t,e,a){t.exports=a(18)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),s=a(8),i=a.n(s),o=(a(14),a(15),a(1)),c=a(5),l=a(4),u=a(3),h=a(2),d=a(6),m=function t(e){Object(o.a)(this,t),this.array=e,this.n=e.length,this.sorted=!1},y=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var r;return Object(o.a)(this,a),(r=e.call(this,t)).i=0,r.j=0,r}return Object(c.a)(a,[{key:"reset",value:function(){return this.sorted=!1,this.i=0,this.j=-1,[-1,-1]}},{key:"step",value:function(){var t=!1;if(this.i===this.n||this.j===this.n-this.i-1&&this.sorted?t=!0:this.j===this.n-this.i-1&&(this.j=0,this.i++,this.sorted=!0),this.array[this.j]>this.array[this.j+1]){var e=this.array[this.j];this.array[this.j]=this.array[this.j+1],this.array[this.j+1]=e,this.sorted=!1,this.j++}else this.j++;return[this.array,this.j,this.j+1,t]}}]),a}(m),p=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var r;return Object(o.a)(this,a),(r=e.call(this,t)).auxarray=[],r.steps=[],r.curr_step=0,r.sorted=!1,r.compute_steps(),r}return a}(m),g=(a(16),function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var r;return Object(o.a)(this,a),(r=e.call(this,t)).generateArray=r.generateArray.bind(Object(l.a)(r)),r.sort=r.sort.bind(Object(l.a)(r)),r.state={array:[],currentIndex:[],length:40,speed:50,sorting:!1,sortAlgo:0,timer:null},r}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.generateArray()}},{key:"generateArray",value:function(){var t=this;this.setState({array:Array.from({length:this.state.length},(function(){return 10+Math.floor(1e3*Math.random())})),currentIndex:[]},(function(){t.props.updateArray(t.state.array,t.state.currentIndex)}))}},{key:"sort",value:function(){var t,e=this,a=this.state.array;0===this.state.sortAlgo?t=new y(a):1===this.state.sortAlgo&&(t=new p(a));var r=t.reset(),n=Object(d.a)(r,2),s=n[0],i=n[1],o=!1,c=setInterval((function(){var r=t.step(),n=Object(d.a)(r,4);a=n[0],s=n[1],i=n[2],o=n[3],e.setState({array:a,currentIndex:[s,i],sorting:!0,timer:c},(function(){e.props.updateArray(e.state.array,e.state.currentIndex)})),o&&(e.setState({currentIndex:[],sorting:!1,timer:null},(function(){e.props.updateArray(e.state.array,e.state.currentIndex)})),clearInterval(c))}),1.5*this.state.speed)}},{key:"stop",value:function(){var t=this;clearInterval(this.state.timer),this.setState({sorting:!1,timer:null,currentIndex:[]},(function(){t.props.updateArray(t.state.array,t.state.currentIndex)}))}},{key:"render",value:function(){var t=this;return n.a.createElement("div",{className:"toolbar"},n.a.createElement("div",{className:"controlPanel alignLeft"},n.a.createElement("span",{className:"ProjectTitle alignLeft"},"VisualSort"),n.a.createElement("span",{className:"algoButtonContainer"},n.a.createElement("div",null,["Bubble Sort"].map((function(e,a){return n.a.createElement("button",{disabled:t.state.sorting,key:a,className:t.state.sortAlgo===a?"selectedAlgoButton":"algoButton",onClick:function(){t.setState({sortAlgo:a})}},e)})))),n.a.createElement("span",null,n.a.createElement("button",{disabled:this.state.sorting,className:"generateArrayButton",onClick:this.generateArray},"Generate Array")),n.a.createElement("span",{className:"controlLabel"},"Array Length:"),n.a.createElement("span",null,n.a.createElement("input",{type:"range",min:"10",max:"100",value:this.state.length,disabled:this.state.sorting,className:"arrayLenghtSelector controlSelector",onChange:function(e){t.setState({length:e.target.value})}})),n.a.createElement("span",{className:"controlLabel"},"Speed:"),n.a.createElement("span",null,n.a.createElement("input",{type:"range",min:"10",max:"100",disabled:this.state.sorting,value:110-this.state.speed,className:"speedSelector controlSelector",onChange:function(e){t.setState({speed:110-e.target.value})}})),n.a.createElement("span",null,n.a.createElement("button",{className:"sortButton",onClick:function(){t.state.sorting?t.stop():t.sort()}},this.state.sorting?"Stop":"Sort"))))}}]),a}(r.Component)),v=(a(17),function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var r;return Object(o.a)(this,a),(r=e.call(this,t)).updateArray=r.updateArray.bind(Object(l.a)(r)),r.state={array:[],currentIndex:[]},r}return Object(c.a)(a,[{key:"updateArray",value:function(t,e){this.setState({array:t,currentIndex:e})}},{key:"render",value:function(){var t=this,e=this.state.array,a=this.state.currentIndex;return n.a.createElement("div",null,n.a.createElement(g,{updateArray:this.updateArray}),n.a.createElement("div",{id:"arrayBarContainer"},e.length?e.map((function(e,r){var s="".concat(.4*window.screen.width/t.state.array.length,"px");return n.a.createElement("div",{key:r,className:a.includes(r)?"currentArrayBar arrayBar":"arrayBar",style:{width:s,height:"".concat(e/1500*window.screen.height,"px")}})})):null))}}]),a}(r.Component));var f=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.21b29b17.chunk.js.map