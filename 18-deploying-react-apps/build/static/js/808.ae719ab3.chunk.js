"use strict";(self.webpackChunkreact_complete_guide=self.webpackChunkreact_complete_guide||[]).push([[808],{808:function(e,t,s){s.r(t),s.d(t,{default:function(){return _}});var n=s(791),c=s(880),r=s(523),i="QuoteItem_item__+nEL1",u=s(184),o=function(e){return(0,u.jsxs)("li",{className:i,children:[(0,u.jsxs)("figure",{children:[(0,u.jsx)("blockquote",{children:(0,u.jsx)("p",{children:e.text})}),(0,u.jsx)("figcaption",{children:e.author})]}),(0,u.jsx)(r.rU,{className:"btn",to:"/quotes/".concat(e.id),children:"View Fullscreen"})]})},a="QuoteList_list__7EY5o",d="QuoteList_sorting__y2GSj",l=function(e){var t,s,r=(0,c.k6)(),i=(0,c.TH)(),l="asc"===new URLSearchParams(i.search).get("sort"),h=(t=e.quotes,s=l,t.sort((function(e,t){return s?e.id>t.id?1:-1:e.id<t.id?1:-1})));return(0,u.jsxs)(n.Fragment,{children:[(0,u.jsx)("div",{className:d,children:(0,u.jsxs)("button",{onClick:function(){r.push({pathname:i.pathname,search:"?sort=".concat(l?"desc":"asc")})},children:["Sort ",l?"Descending":"Ascending"]})}),(0,u.jsx)("ul",{className:a,children:h.map((function(e){return(0,u.jsx)(o,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},h=s(147),x="NoQuotesFound_noquotes__t1lWd",f=function(){return(0,u.jsxs)("div",{className:x,children:[(0,u.jsx)("p",{children:"No quotes found!"}),(0,u.jsx)(r.rU,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})},j=s(995),m=s(853),_=function(){var e=(0,j.Z)(m.Lf,!0),t=e.sendRequest,s=e.status,c=e.data,r=e.error;return(0,n.useEffect)((function(){t()}),[t]),"pending"===s?(0,u.jsx)("div",{className:"centered",children:(0,u.jsx)(h.Z,{})}):r?(0,u.jsx)("p",{className:"centered focused",children:r}):"completed"!==s||c&&0!==c.length?(0,u.jsx)(l,{quotes:c}):(0,u.jsx)(f,{})}}}]);
//# sourceMappingURL=808.ae719ab3.chunk.js.map