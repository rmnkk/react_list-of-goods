(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(3),s=n.n(r),c=n(1),u=n(4),l=n(5),i=n(7),b=n(6),g=(n(13),function(t){var e=t.goods;return a.a.createElement("ul",null,e.map((function(t){return a.a.createElement("li",{key:t},t)})))}),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(t){Object(i.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={goods:[],isShown:!1},t.start=function(){t.setState((function(t){return{goods:[].concat(h),isShown:!t.isShown}}))},t.reverse=function(){t.setState((function(t){return{goods:Object(c.a)(t.goods.reverse())}}))},t.sortByAlphabet=function(){t.setState((function(t){return{goods:Object(c.a)(t.goods.sort((function(t,e){return t.localeCompare(e)})))}}))},t.reset=function(){t.setState({goods:[].concat(h)})},t.sortByLength=function(){t.setState((function(t){return{goods:Object(c.a)(t.goods.sort((function(t,e){return t.replace(/\s/g,"").length-e.replace(/\s/g,"").length})))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.isShown;return a.a.createElement("div",{className:"App"},!t&&a.a.createElement("button",{type:"button",onClick:this.start},"Show goods"),a.a.createElement(g,{goods:this.state.goods}),t&&a.a.createElement("div",{className:"buttons"},a.a.createElement("button",{className:"button",type:"button",onClick:this.reverse},"Reverse"),a.a.createElement("button",{className:"button",type:"button",onClick:this.sortByAlphabet},"Sort alphabetically"),a.a.createElement("button",{className:"button",type:"button",onClick:this.reset},"Reset"),a.a.createElement("button",{className:"button",type:"button",onClick:this.sortByLength},"Sort by words length")))}}]),n}(a.a.Component);s.a.render(a.a.createElement(p,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.763cfa21.chunk.js.map