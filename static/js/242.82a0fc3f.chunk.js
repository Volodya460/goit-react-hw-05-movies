"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[242],{757:function(n,e,t){t.d(e,{Hx:function(){return f},WK:function(){return h},Y5:function(){return p},uV:function(){return l},wr:function(){return s}});var r=t(861),i=t(687),a=t.n(i),c=t(243),o="9391d9eb657d7ce69073c80004150e40",u="https://api.themoviedb.org/3/";function s(){return c.Z.get("".concat(u,"trending/all/day?api_key=").concat(o))}function p(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.Z.get("".concat(u,"movie/").concat(e,"?api_key=").concat(o,"&language=en-US")),n.abrupt("return",t);case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return c.Z.get("".concat(u,"movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"))}function f(n){return c.Z.get("".concat(u,"movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&"))}function h(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"search/movie?api_key=").concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},242:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,i,a,c,o=t(861),u=t(439),s=t(687),p=t.n(s),d=t(757),l=t(791),f=t(87),h=t(689),g=t(168),b=t(934),m=b.Z.button(r||(r=(0,g.Z)(["\n  display: inline-block;\n  width: 35px;\n  height: 26px;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #bdbdbd;\n  border-radius: 0.25rem;\n  background-image: url('https://img.icons8.com/ios-filled/256/search--v1.png');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),x=b.Z.form(i||(i=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),v=b.Z.span(a||(a=(0,g.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),y=b.Z.input(c||(c=(0,g.Z)(["\n  display: inline-block;\n  width: 200px;\n  font: inherit;\n  font-size: 20px;\n  padding-left: 4px;\n  padding-right: 4px;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #bdbdbd;\n  border-radius: 0.25rem;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),k=t(184),w=function(){var n=(0,l.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1],i=(0,f.lr)(),a=(0,u.Z)(i,2),c=a[0],s=a[1],g=c.get("query"),b=(0,h.TH)();return(0,l.useEffect)((function(){function n(){return(n=(0,o.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,null!==g){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,(0,d.WK)(g);case 5:e=n.sent,r(e),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),alert(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[g]),(0,k.jsxs)(k.Fragment,{children:[" ",(0,k.jsxs)(x,{onSubmit:function(n){n.preventDefault(),""===n.target.elements.query.value.trim()&&alert("Right something");var e=n.target;s({query:e.elements.query.value}),e.reset()},children:[(0,k.jsx)(y,{name:"query",color:"secondary",id:"outlined-basic",label:"Search Film",variant:"outlined"}),(0,k.jsx)(m,{type:"submit",variant:"outlined",size:"medium",sx:{ml:2},children:(0,k.jsx)(v,{children:"Search"})})]}),t&&(0,k.jsx)("ul",{children:t.map((function(n){return(0,k.jsx)("li",{children:(0,k.jsx)(f.rU,{to:"/movies/".concat(n.id),state:{from:b},children:n.title})},n.id)}))})]})}}}]);
//# sourceMappingURL=242.82a0fc3f.chunk.js.map