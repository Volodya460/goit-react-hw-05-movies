"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[357],{357:function(n,e,t){t.r(e);var r=t(439),c=t(689),a=t(791),u=t(757),i=t(184);e.default=function(){var n=(0,a.useState)([]),e=(0,r.Z)(n,2),t=e[0],o=e[1],s=(0,c.UO)().movieId;return(0,a.useEffect)((function(){(0,u.Hx)(s).then((function(n){o(n.data.results)})).catch((function(n){return alert(n.message)}))}),[s]),(0,i.jsx)(i.Fragment,{children:0!==t.length?(0,i.jsx)("ul",{children:t.map((function(n){return(0,i.jsxs)("li",{children:[(0,i.jsxs)("h3",{children:["Author:",n.author]}),(0,i.jsx)("p",{children:n.content})]},n.id)}))}):(0,i.jsx)("p",{children:"There are no reviews"})})}},757:function(n,e,t){t.d(e,{Hx:function(){return h},WK:function(){return d},Y5:function(){return f},uV:function(){return l},wr:function(){return s}});var r=t(861),c=t(687),a=t.n(c),u=t(243),i="9391d9eb657d7ce69073c80004150e40",o="https://api.themoviedb.org/3/";function s(){return u.Z.get("".concat(o,"trending/all/day?api_key=").concat(i))}function f(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=u.Z.get("".concat(o,"movie/").concat(e,"?api_key=").concat(i,"&language=en-US")),n.abrupt("return",t);case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return u.Z.get("".concat(o,"movie/").concat(n,"/credits?api_key=").concat(i,"&language=en-US"))}function h(n){return u.Z.get("".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(i,"&language=en-US&"))}function d(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"search/movie?api_key=").concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=357.39552683.chunk.js.map