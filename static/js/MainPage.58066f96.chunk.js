(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{67:function(n,t,e){"use strict";e.d(t,"a",function(){return f}),e.d(t,"b",function(){return p});var r=e(18),a=e(0),i=e.n(a),o=e(32),u=e(14),l=(e(4),e(5)),c=e(13),d=e(16);i.a.Component;i.a.Component;var f=function(n){function t(){return n.apply(this,arguments)||this}Object(r.a)(t,n);var e=t.prototype;return e.handleClick=function(n,t){try{this.props.onClick&&this.props.onClick(n)}catch(e){throw n.preventDefault(),e}n.defaultPrevented||0!==n.button||this.props.target&&"_self"!==this.props.target||function(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}(n)||(n.preventDefault(),(this.props.replace?t.replace:t.push)(this.props.to))},e.render=function(){var n=this,t=this.props,e=t.innerRef,r=(t.replace,t.to),a=Object(c.a)(t,["innerRef","replace","to"]);return i.a.createElement(o.d.Consumer,null,function(t){t||Object(d.a)(!1);var o="string"===typeof r?Object(u.c)(r,null,null,t.location):r,c=o?t.history.createHref(o):"";return i.a.createElement("a",Object(l.a)({},a,{onClick:function(e){return n.handleClick(e,t.history)},href:c,ref:e}))})},t}(i.a.Component);function p(n){var t=n["aria-current"],e=void 0===t?"page":t,r=n.activeClassName,a=void 0===r?"active":r,u=n.activeStyle,p=n.className,m=n.exact,s=n.isActive,h=n.location,x=n.strict,b=n.style,v=n.to,g=Object(c.a)(n,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","strict","style","to"]),w="object"===typeof v?v.pathname:v,j=w&&w.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1");return i.a.createElement(o.d.Consumer,null,function(n){n||Object(d.a)(!1);var t=h?h.pathname:n.location.pathname,r=j?Object(o.e)(t,{path:j,exact:m,strict:x}):null,c=!!(s?s(r,n.location):r),w=c?function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return t.filter(function(n){return n}).join(" ")}(p,a):p,E=c?Object(l.a)({},b,u):b;return i.a.createElement(f,Object(l.a)({"aria-current":c&&e||null,className:w,style:E,to:v},g))})}},94:function(n,t,e){"use strict";var r=e(31),a=e(67),i=e(0),o=e.n(i),u=e(22);function l(){var n=Object(r.a)(["\n  font-size: 23px;\n"]);return l=function(){return n},n}function c(){var n=Object(r.a)(["\n  color: ",";\n  font-size: 25px;\n"]);return c=function(){return n},n}function d(){var n=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  height: 30px;\n  font-size: 24px;\n  font-weight: bold;\n  color: ",";\n"]);return d=function(){return n},n}var f=Object(u.default)(a.a)(d(),function(n){return n.theme.colors.white}),p=u.default.div(c(),function(n){return n.theme.colors.yellow}),m=Object(u.default)(p)(l());t.a=function(){return o.a.createElement(f,{to:"/"},o.a.createElement(m,null,"|"),o.a.createElement("div",null,"myzen"),o.a.createElement(p,null,"."))}},97:function(n,t,e){"use strict";e.r(t);var r=e(31),a=e(0),i=e.n(a),o=e(22);function u(){var n=Object(r.a)(["\n  box-sizing: border-box;\n  padding-left: 20px;\n  padding-right: 20px;\n  max-width: 1600px;\n  margin: 0 auto;\n"]);return u=function(){return n},n}var l=o.default.div(u()),c=function(n){var t=n.children;return i.a.createElement(l,null,t)},d=e(94),f=e(67);function p(){var n=Object(r.a)(["\n  @media (max-width: 700px) {\n    width: 50px;\n    height: 50px;\n    border-radius: 10px;\n    background-color: ",";\n  }\n"]);return p=function(){return n},n}function m(){var n=Object(r.a)(["\n  color: ",";\n"]);return m=function(){return n},n}function s(){var n=Object(r.a)(["\n  margin-left: 20px;\n  color: ",";\n  font-size: 14px;\n"]);return s=function(){return n},n}function h(){var n=Object(r.a)(["\n  display: flex;\n\n  @media (max-width: 700px) {\n    display: none;\n  }\n"]);return h=function(){return n},n}function x(){var n=Object(r.a)(["\n  color: ",";\n  position: relative;\n\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    height: 1px;\n    width: 0;\n    background-color: ",";\n    transition: width 0.2s;\n  }\n\n  &:hover {\n    &::after {\n      width: 100%;\n    }\n  }\n\n  &.active {\n    &::after {\n      width: 100%;\n    }\n  }\n"]);return x=function(){return n},n}function b(){var n=Object(r.a)(["\n  margin-right: 30px;\n  font-size: 14px;\n  font-weight: 100;\n"]);return b=function(){return n},n}function v(){var n=Object(r.a)(["\n  display: flex;\n  margin-left: 90px;\n\n  @media (max-width: 700px) {\n    display: none;\n  }\n"]);return v=function(){return n},n}function g(){var n=Object(r.a)(["\n  display: flex;\n  align-items: center;\n"]);return g=function(){return n},n}function w(){var n=Object(r.a)(["\n  position: relative;\n  z-index: 5;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 20px;\n  color: ",";\n"]);return w=function(){return n},n}var j=o.default.div(w(),function(n){return n.theme.colors.white}),E=o.default.div(g()),O=o.default.ul(v()),y=o.default.li(b()),k=Object(o.default)(f.b)(x(),function(n){return n.theme.colors.white},function(n){return n.theme.colors.white}),z=o.default.ul(h()),C=o.default.li(s(),function(n){return n.theme.colors.darkYellow}),N=Object(o.default)(f.b)(m(),function(n){return n.theme.colors.black}),Y=o.default.div(p(),function(n){return n.theme.colors.lightYellow}),A=function(){return i.a.createElement(j,null,i.a.createElement(E,null,i.a.createElement(d.a,null),i.a.createElement(O,null,i.a.createElement(y,null,i.a.createElement(k,{to:"/",activeClassName:"active"},"Home")),i.a.createElement(y,null,i.a.createElement(k,{to:"/recruit"},"Recruit")),i.a.createElement(y,null,i.a.createElement(k,{to:"/find-a-work"},"Find a work")),i.a.createElement(y,null,i.a.createElement(k,{to:"/about"},"About")))),i.a.createElement(E,null,i.a.createElement(z,null,i.a.createElement(C,null,i.a.createElement(N,{to:"/login"},"Login")),i.a.createElement(C,null,i.a.createElement(N,{to:"/register"},"Sign up"))),i.a.createElement(Y,null)))};function K(){var n=Object(r.a)(["\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  bottom: 15px;\n  left: 120px;\n  transform: rotate(15deg);\n  background-color: ",";\n  border-radius: 10px;\n  z-index: 8;\n"]);return K=function(){return n},n}function R(){var n=Object(r.a)(["\n  position: absolute;\n  bottom: -20px;\n  left: 0;\n  width: 90px;\n  height: 90px;\n  transform: rotate(15deg);\n  background-color: ",";\n  border-radius: 30px;\n  z-index: 6;\n"]);return R=function(){return n},n}function D(){var n=Object(r.a)(["\n  position: absolute;\n  bottom: 30px;\n  left: -170px;\n  width: 243px;\n  height: 243px;\n  border-radius: 56px;\n  z-index: 7;\n  background-color: ",";\n  transform: rotate(15deg);\n\n  @media (max-width: 1300px) {\n    left: -200px;\n  }\n"]);return D=function(){return n},n}function L(){var n=Object(r.a)([""]);return L=function(){return n},n}function S(){var n=Object(r.a)(["\n  position: absolute;\n  width: 700px;\n  height: 519px;\n  transform: rotate(13deg);\n  top: -426px;\n  right: -330px;\n  background-color: ",";\n  border-radius: 154px;\n  z-index: 5;\n\n  @media (min-width: 1700px) {\n    right: -230px;\n  }\n\n  @media (min-width: 1850px) {\n    width: 900px;\n    right: -230px;\n  }\n\n  @media (min-width: 1980px) {\n    width: 1000px;\n    right: -300px;\n    top: -400px;\n  }\n\n  @media (min-width: 2190px) {\n    width: 1000px;\n    right: -200px;\n    top: -360px;\n  }\n"]);return S=function(){return n},n}function B(){var n=Object(r.a)(["\n  position: absolute;\n  min-width: 70%;\n  width: 1356px;\n  height: 1091px;\n  left: -361.49px;\n  top: -469.06px;\n  border-radius: 314px;\n  transform: rotate(14deg);\n  background-color: ",";\n  z-index: 6;\n\n  @media (max-width: 1455px) {\n    width: 1262px;\n  }\n\n  @media (max-width: 1300px) {\n    width: 1062px;\n  }\n\n  @media (max-width: 1115px) {\n    width: 1000px;\n  }\n\n  @media (max-width: 700px) {\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    transform: rotate(0);\n    border-radius: 0;\n  }\n"]);return B=function(){return n},n}function H(){var n=Object(r.a)(["\n  top: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: 4;\n"]);return H=function(){return n},n}function J(){var n=Object(r.a)(["\n  display: block;\n  padding: 13px 42px;\n  color: ",";\n"]);return J=function(){return n},n}function $(){var n=Object(r.a)(["\n  padding: 0;\n  font-size: 15px;\n  background-color: ",";\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: 0.2s;\n  margin-bottom: 40px;\n\n  &:hover {\n    background-color: ",";\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:active {\n    box-shadow: none;\n  }\n"]);return $=function(){return n},n}function q(){var n=Object(r.a)(["\n  max-width: 300px;\n  margin-top: 40px;\n  margin-bottom: 40px;\n  font-size: 16px;\n  line-height: 1.6;\n  color: ",";\n\n  @media (max-width: 700px) {\n    margin: 50px auto;\n  }\n"]);return q=function(){return n},n}function F(){var n=Object(r.a)(["\n  max-width: 500px;\n  font-size: 60px;\n  font-weight: 900;\n  color: ",";\n\n  @media (max-width: 700px) {\n    margin-left: auto;\n    margin-right: auto;\n  }\n"]);return F=function(){return n},n}function G(){var n=Object(r.a)(["\n  position: relative;\n  z-index: 20;\n  margin-top: 15vh;\n  margin-left: 184px;\n\n  @media (max-width: 1300px) {\n    margin-left: 70px;\n  }\n\n  @media (max-width: 700px) {\n    width: 100%;\n    text-align: center;\n    margin-left: 0;\n  }\n"]);return G=function(){return n},n}function P(){var n=Object(r.a)(["\n  position: relative;\n  min-height: 100vh;\n"]);return P=function(){return n},n}var _=o.default.div(P()),I=o.default.div(G()),M=o.default.h2(F(),function(n){return n.theme.colors.white}),Q=o.default.p(q(),function(n){return n.theme.colors.white}),T=o.default.button($(),function(n){return n.theme.colors.primaryGreen},function(n){return n.theme.colors.yellow}),U=Object(o.default)(f.a)(J(),function(n){return n.theme.colors.white}),V=o.default.div(H()),W=o.default.div(B(),function(n){return n.theme.colors.primaryDarkBlue}),X=o.default.div(S(),function(n){return n.theme.colors.lightYellow}),Z=o.default.div(L()),nn=o.default.div(D(),function(n){return n.theme.colors.lightYellow}),tn=o.default.div(R(),function(n){return n.theme.colors.cyan}),en=o.default.div(K(),function(n){return n.theme.colors.lightRed});t.default=function(){return i.a.createElement(_,null,i.a.createElement(c,null,i.a.createElement(A,null),i.a.createElement(I,null,i.a.createElement(M,null,"You hate routine, right?"),i.a.createElement(Q,null,"Lorem ipsum dolor sit, amet cotetur adipisicing elit. Beatae illum quidem facilis adipisc voltum vero excepturi aut."),i.a.createElement(T,null,i.a.createElement(U,{to:"/dashboard"},"Let's get started")))),i.a.createElement(V,null,i.a.createElement(W,null),i.a.createElement(X,null),i.a.createElement(Z,null),i.a.createElement(nn,null),i.a.createElement(tn,null),i.a.createElement(en,null)))}}}]);
//# sourceMappingURL=MainPage.58066f96.chunk.js.map