(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{67:function(n,e,t){"use strict";t.d(e,"a",function(){return m}),t.d(e,"b",function(){return p});var r=t(18),a=t(0),o=t.n(a),i=t(32),u=t(14),c=(t(4),t(5)),l=t(13),s=t(16);o.a.Component;o.a.Component;var m=function(n){function e(){return n.apply(this,arguments)||this}Object(r.a)(e,n);var t=e.prototype;return t.handleClick=function(n,e){try{this.props.onClick&&this.props.onClick(n)}catch(t){throw n.preventDefault(),t}n.defaultPrevented||0!==n.button||this.props.target&&"_self"!==this.props.target||function(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}(n)||(n.preventDefault(),(this.props.replace?e.replace:e.push)(this.props.to))},t.render=function(){var n=this,e=this.props,t=e.innerRef,r=(e.replace,e.to),a=Object(l.a)(e,["innerRef","replace","to"]);return o.a.createElement(i.d.Consumer,null,function(e){e||Object(s.a)(!1);var i="string"===typeof r?Object(u.c)(r,null,null,e.location):r,l=i?e.history.createHref(i):"";return o.a.createElement("a",Object(c.a)({},a,{onClick:function(t){return n.handleClick(t,e.history)},href:l,ref:t}))})},e}(o.a.Component);function p(n){var e=n["aria-current"],t=void 0===e?"page":e,r=n.activeClassName,a=void 0===r?"active":r,u=n.activeStyle,p=n.className,f=n.exact,d=n.isActive,h=n.location,b=n.strict,g=n.style,v=n.to,x=Object(l.a)(n,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","strict","style","to"]),w="object"===typeof v?v.pathname:v,y=w&&w.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1");return o.a.createElement(i.d.Consumer,null,function(n){n||Object(s.a)(!1);var e=h?h.pathname:n.location.pathname,r=y?Object(i.e)(e,{path:y,exact:f,strict:b}):null,l=!!(d?d(r,n.location):r),w=l?function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.filter(function(n){return n}).join(" ")}(p,a):p,E=l?Object(c.a)({},g,u):g;return o.a.createElement(m,Object(c.a)({"aria-current":l&&t||null,className:w,style:E,to:v},x))})}},94:function(n,e,t){"use strict";var r=t(31),a=t(67),o=t(0),i=t.n(o),u=t(22);function c(){var n=Object(r.a)(["\n  font-size: 23px;\n"]);return c=function(){return n},n}function l(){var n=Object(r.a)(["\n  color: ",";\n  font-size: 25px;\n"]);return l=function(){return n},n}function s(){var n=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  height: 30px;\n  font-size: 24px;\n  font-weight: bold;\n  color: ",";\n"]);return s=function(){return n},n}var m=Object(u.default)(a.a)(s(),function(n){return n.theme.colors.white}),p=u.default.div(l(),function(n){return n.theme.colors.yellow}),f=Object(u.default)(p)(c());e.a=function(){return i.a.createElement(m,{to:"/"},i.a.createElement(f,null,"|"),i.a.createElement("div",null,"myzen"),i.a.createElement(p,null,"."))}},95:function(n,e,t){"use strict";t.r(e);var r=t(91),a=t(29),o=t(32),i={logout:t(15).d};e.default=Object(r.a)(o.f,Object(a.c)(null,i))(function(n){var e=n.logout,t=n.history;return e(),t.push("/"),null})},96:function(n,e,t){"use strict";t.r(e);var r=t(31),a=t(44),o=t(0),i=t.n(o),u=t(22);function c(){var n=Object(r.a)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.6;\n"]);return c=function(){return n},n}function l(){var n=Object(r.a)(["\n  font-family: 'Merriweather', serif;\n  font-size: 14px;\n  line-height: 1.65;\n  font-weight: 100;\n  color: ",";\n  margin-top: 20px;\n  margin-bottom: 10px;\n\n  @media (min-width: 1600px) {\n    margin-top: 30px;\n    margin-bottom: 20px;\n  }\n"]);return l=function(){return n},n}function s(){var n=Object(r.a)(["\n  font-size: 18px;\n  font-weight: 600;\n  color: ",";\n"]);return s=function(){return n},n}function m(){var n=Object(r.a)(["\n  position: absolute;\n  height: 60px;\n  width: 60px;\n  transform: translateY(-80px);\n  border-radius: 50%;\n"]);return m=function(){return n},n}function p(){var n=Object(r.a)(["\n  max-width: 75%;\n  margin: 0 auto;\n\n  @media (min-width: 1600px) {\n    max-width: 65%;\n  }\n"]);return p=function(){return n},n}function f(){var n=Object(r.a)(["\n  width: 350px;\n  max-width: 70%;\n  box-sizing: border-box;\n  margin: 0 auto;\n  padding: 60px 0;\n  border-radius: 20px;\n  background-image: url('/images/login-page/abstractr-background.png');\n  background-size: cover;\n\n  @media (min-width: 1600px) {\n    width: 380px;\n  }\n"]);return f=function(){return n},n}function d(){var n=Object(r.a)(["\n  position: relative;\n  z-index: 8;\n  margin-top: auto;\n  margin-bottom: auto;\n"]);return d=function(){return n},n}var h=u.default.div(d()),b=u.default.div(f()),g=u.default.div(p()),v=u.default.img(m()),x=u.default.h2(s(),function(n){return n.theme.colors.primaryBlue}),w=u.default.p(l(),function(n){return n.theme.colors.primaryDarkGray}),y=u.default.h4(c(),function(n){return n.theme.colors.primaryBlue}),E=function(n){var e=n.data;return i.a.createElement(h,null,e.map(function(n){return i.a.createElement(b,{key:n.id},i.a.createElement(g,null,i.a.createElement(v,{src:n.image,alt:"Photo of ".concat(n.position)}),i.a.createElement(x,null,n.name),i.a.createElement(w,null,'"'.concat(n.description,'"')),i.a.createElement(y,null,"Position: ",n.position)))}))},j=t(67),O=t(94);function k(){var n=Object(r.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  top: 0;\n\n  &:checked + label::after {\n    transform: translate(-50%, -50%) scale(1);\n  }\n"]);return k=function(){return n},n}function C(){var n=Object(r.a)(["\n  position: relative;\n  width: 14px;\n  height: 14px;\n  margin-right: 10px;\n  background-color: ",";\n  border: 2px solid ",";\n  border-radius: 4px;\n  cursor: pointer;\n\n  &::after {\n    content: '';\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0);\n    background-image: url('/images/login-page/tick.svg');\n    background-size: cover;\n    transition: transform 0.15s;\n  }\n"]);return C=function(){return n},n}function z(){var n=Object(r.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n\n  label {\n    cursor: pointer;\n  }\n"]);return z=function(){return n},n}var B=u.default.div(z()),P=u.default.label(C(),function(n){return n.theme.colors.white},function(n){return n.theme.colors.primaryBlue}),S=u.default.input(k()),A=function(n){var e=n.name,t=n.placeholder,r=n.value,a=n.onChange;return i.a.createElement(B,null,i.a.createElement(S,{type:"checkbox",id:e,checked:r,onChange:function(){return a(!r)}}),i.a.createElement(P,{htmlFor:e}),i.a.createElement("label",{htmlFor:e},t))};function N(){var n=Object(r.a)(["\n  position: absolute;\n  font-size: 13px;\n  color: ",";\n"]);return N=function(){return n},n}function D(){var n=Object(r.a)(["\n  width: 100%;\n  margin-top: 26px;\n  margin-bottom: 5px;\n  padding: 10px 25px 8px 2px;\n  font-size: 14px;\n  color: ",";\n  border: none;\n  border-bottom: 1px solid ",";\n  ","\n\n  &::placeholder {\n    color: ",";\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus + "," {\n    width: 100%;\n  }\n\n  &:focus + "," + "," {\n    color: ",";\n  }\n"]);return D=function(){return n},n}function G(){var n=Object(r.a)(["\n  position: absolute;\n  width: 15px;\n  right: 3px;\n  bottom: 8px;\n  color: ",";\n  transition: 0.5s;\n  font-size: 18px;\n\n  ","\n"]);return G=function(){return n},n}function M(){var n=Object(r.a)(["\n  position: absolute;\n  width: 0;\n  height: 1px;\n  bottom: 5px;\n  left: 0;\n  background-color: ",";\n  transition: 0.3s;\n"]);return M=function(){return n},n}function q(){var n=Object(r.a)(["\n  position: relative;\n  display: flex;\n"]);return q=function(){return n},n}var Z=u.default.div(q()),_=u.default.div(M(),function(n){return n.theme.colors.primaryBlue}),$=u.default.div(G(),function(n){return n.theme.colors.loginPageInputPlaceholder},function(n){return n.error&&"\n      color: ".concat(n.theme.colors.redErrorColor,";\n  ")}),F=u.default.input(D(),function(n){return n.theme.colors.primaryDarkGray},function(n){return n.theme.colors.loginPageInputBorder},function(n){return n.error&&"\n      border-bottom-color: ".concat(n.theme.colors.redErrorColor,";\n  ")},function(n){return n.theme.colors.loginPageInputPlaceholder},_,_,$,function(n){return n.theme.colors.primaryBlue}),I=u.default.div(N(),function(n){return n.theme.colors.redErrorColor}),K=function(n){var e=n.type,t=n.placeholder,r=n.value,a=n.children,o=n.error,u=n.onChange;return i.a.createElement(i.a.Fragment,null,i.a.createElement(Z,null,i.a.createElement(F,{type:e,value:r,placeholder:t,error:o&&o.length>0,onChange:function(n){var e=n.target.value;return u(e)}}),i.a.createElement(_,null),i.a.createElement($,{error:o&&o.length>0},a)),i.a.createElement(I,null,o))};function T(){var n=Object(r.a)(["\n  color: ",";\n  margin-left: 44px;\n  background-color: ",";\n  cursor: pointer;\n  position: relative;\n\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: -3px;\n    left: 0;\n    width: 0;\n    height: 1px;\n    background-color: ",";\n    transition: 0.2s;\n  }\n\n  &:hover {\n    &::after {\n      width: 100%;\n    }\n  }\n\n  &:focus {\n    outline: none;\n\n    &::after {\n      width: 100%;\n    }\n  }\n"]);return T=function(){return n},n}function L(){var n=Object(r.a)(["\n  padding: 13px 42px;\n  font-size: 15px;\n  color: ",";\n  background-color: ",";\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: 0.2s;\n\n  &:hover {\n    background-color: ",";\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:active {\n    box-shadow: none;\n  }\n"]);return L=function(){return n},n}function J(){var n=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  margin-top: 30px;\n"]);return J=function(){return n},n}function R(){var n=Object(r.a)(["\n  margin-top: 30px;\n  transition: color 0.3s;\n\n  &:hover {\n    color: ",";\n  }\n"]);return R=function(){return n},n}function Y(){var n=Object(r.a)(["\n  margin-top: 28px;\n"]);return Y=function(){return n},n}var H=u.default.form(Y()),U=u.default.div(R(),function(n){return n.theme.colors.primaryBlue}),Q=u.default.div(J()),V=u.default.button(L(),function(n){return n.theme.colors.white},function(n){return n.theme.colors.primaryGreen},function(n){return n.theme.colors.primaryBlue}),W=Object(u.default)(j.a)(T(),function(n){return n.theme.colors.primaryBlue},function(n){return n.theme.colors.white},function(n){return n.theme.colors.primaryBlue}),X=function(n){var e=n.errors,t=n.onSubmit,r=Object(o.useState)(""),u=Object(a.a)(r,2),c=u[0],l=u[1],s=Object(o.useState)(""),m=Object(a.a)(s,2),p=m[0],f=m[1],d=Object(o.useState)(""),h=Object(a.a)(d,2),b=h[0],g=h[1],v=Object(o.useState)(!0),x=Object(a.a)(v,2),w=x[0],y=x[1];return i.a.createElement(H,{onSubmit:function(n){return t(n,c,p,b,w)}},i.a.createElement(K,{type:"text",placeholder:"Name",value:c,error:e.name[0],onChange:l},i.a.createElement("span",{className:"icon-user"})),i.a.createElement(K,{type:"email",placeholder:"Email",value:p,error:e.email[0],onChange:f},i.a.createElement("span",{className:"icon-mail"})),i.a.createElement(K,{type:"password",placeholder:"Password (6-20 characters)",value:b,error:e.password[0],onChange:g},i.a.createElement("span",{className:"icon-lock_outline"})),i.a.createElement(U,null,i.a.createElement(A,{name:"enable_email",placeholder:"Enable emails",value:w,onChange:y})),i.a.createElement(Q,null,i.a.createElement(V,null,"Sign Up"),i.a.createElement(W,{to:"/dashboard/"},"Skip")))},nn=function(n,e){var t=[];switch(n){case"name":e.length>15&&t.push("Name is too long. Max 15 characters"),e.length<2&&t.push("Name is too short. Min 2 characters"),e.match(/^\w{2,15}$/g)||t.push("Name is invalid");break;case"email":e.length>30&&t.push("Email is invalid"),e.length<5&&t.push("Email is invalid"),e.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g)||t.push("Email is invalid");break;case"password":e.length>20&&t.push("Password is too long. Max 20 characters"),e.length<6&&t.push("Password is too short. Min 6 characters"),e.match(/^\w{2,20}$/g)||t.push("Password is invalid")}return t};function en(){var n=Object(r.a)(["\n  position: absolute;\n  width: 10px;\n  z-index: 10;\n  top: 70px;\n  left: 40px;\n\n  svg {\n    max-width: 40px;\n  }\n"]);return en=function(){return n},n}function tn(){var n=Object(r.a)(["\n  top: auto;\n  right: auto;\n  left: 40px;\n  bottom: 60px;\n"]);return tn=function(){return n},n}function rn(){var n=Object(r.a)(["\n  position: absolute;\n  top: 120px;\n  right: 40px;\n"]);return rn=function(){return n},n}function an(){var n=Object(r.a)(["\n  position: absolute;\n  left: 0;\n  bottom: 20px;\n  max-width: 60%;\n\n  @media (min-width: 1600px) {\n    max-width: 45%;\n  }\n"]);return an=function(){return n},n}function on(){var n=Object(r.a)(["\n  position: absolute;\n  right: 0;\n  top: 30px;\n  max-width: 60%;\n\n  @media (min-width: 1600px) {\n    max-width: 45%;\n  }\n"]);return on=function(){return n},n}function un(){var n=Object(r.a)(["\n  margin-top: 30px;\n  font-size: 14px;\n  line-height: 20px;\n  color: ",";\n\n  a {\n    color: ",";\n  }\n"]);return un=function(){return n},n}function cn(){var n=Object(r.a)(["\n  width: 280px;\n\n  @media (max-width: 800px) {\n    width: 320px;\n  }\n\n  @media (max-width: 457px) {\n    width: 280px;\n  }\n\n  @media (max-width: 350px) {\n    width: 260px;\n  }\n"]);return cn=function(){return n},n}function ln(){var n=Object(r.a)(["\n  margin-left: 50px;\n  margin-top: 30px;\n"]);return ln=function(){return n},n}function sn(){var n=Object(r.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 50%;\n  height: 100vh;\n  min-height: 520px;\n  background-color: ",";\n\n  @media (max-width: 960px) {\n    display: none;\n  }\n\n  @media (min-width: 1750px) {\n    width: 40%;\n  }\n"]);return sn=function(){return n},n}function mn(){var n=Object(r.a)(["\n  width: 50%;\n  display: flex;\n  justify-content: center;\n\n  @media (max-width: 960px) {\n    width: 100%;\n    min-height: 100vh;\n    box-sizing: border-box;\n    align-items: center;\n  }\n\n  @media (min-width: 1750px) {\n    width: 60%;\n  }\n"]);return mn=function(){return n},n}function pn(){var n=Object(r.a)(["\n  color: ",";\n  position: relative;\n  transition: 0.5s;\n\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: 1px;\n    left: 0;\n    width: 100%;\n    border-bottom: 1px solid ",";\n    transition: 0.5s;\n  }\n\n  &:hover {\n    color: ",";\n\n    &::after {\n      border-bottom-color: ",";\n    }\n  }\n\n  &:focus {\n    outline: none;\n    color: ",";\n\n    &::after {\n      border-bottom-color: ",";\n    }\n  }\n"]);return pn=function(){return n},n}function fn(){var n=Object(r.a)(["\n  font-size: 36px;\n  font-weight: bold;\n  line-height: 45px;\n  color: ",";\n  margin-bottom: 22px;\n\n  @media (max-width: 350px) {\n    font-size: 30px;\n  }\n"]);return fn=function(){return n},n}function dn(){var n=Object(r.a)(["\n  display: flex;\n  align-items: center;\n"]);return dn=function(){return n},n}var hn=function(){return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"41.4",height:"53.83",viewBox:"0 0 41.4 40.83"},i.a.createElement("path",{id:"Path_122","data-name":"Path 122",d:"M5585.78-11070.409s-.591,6.787,4.314,11.6,13.422,6.938,19.3,2.454,12.878-15.937,12.878-15.937,2.741-2.795,0-7.18a30.034,30.034,0,0,0-10.964-10.357c-4.578-2.59-7.347,0-7.347,0s-9.4,5.974-13.865,10.357S5585.78-11070.409,5585.78-11070.409Z",transform:"matrix(0.995, -0.105, 0.105, 0.995, -4395.836, 11618.035)",fill:"#3D4CA5"}))},bn=function(){return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"66.967",height:"63.383",viewBox:"0 0 66.967 63.383"},i.a.createElement("path",{id:"Path_122","data-name":"Path 122",d:"M5587.16-11781.33c-9.064-8.437-8.542-9.415-8.542-11.944a9.472,9.472,0,0,1,1.4-4.651,66.131,66.131,0,0,1,11.084-13.533,71.226,71.226,0,0,1,14.959-9.821,20.058,20.058,0,0,1,6.224-1.144c3.194,0,3.386.361,11.439,9.016s20.771,25.6,20.771,25.6,5.253,7.573-7.331,19.669c-4.971,4.777-9.492,7.125-13.44,8.3-5.294,1.585-8.846.31-8.846.31S5596.225-11772.894,5587.16-11781.33Z",transform:"translate(-5578.613 11822.424)",fill:"#ff6683"}))},gn=function(n){var e=n.feedbackData,t=Object(o.useState)({name:[""],email:[""],password:[""]}),r=Object(a.a)(t,2),u=r[0],c=r[1];return i.a.createElement(vn,null,i.a.createElement(yn,null,i.a.createElement(On,null,i.a.createElement(xn,null,"Getting Started"),i.a.createElement(wn,{to:"/login"},"Already have an account?"),i.a.createElement(X,{errors:u,onSubmit:function(n,e,t,r,a){n.preventDefault();var o={name:[""],email:[""],password:[""]};o.name=nn("name",e),o.email=nn("email",t),o.password=nn("password",r),c(o),console.log("emailIsChecked",a)}}),i.a.createElement(kn,null,"By singing up, you agree to MyZen"," ",i.a.createElement(j.a,{to:"/terms-of-conditions"},"Terms of Conditions")," and"," ",i.a.createElement(j.a,{to:"/privacy-policy"},"Privacy Policy")))),i.a.createElement(En,null,i.a.createElement(jn,null,i.a.createElement(O.a,null)),i.a.createElement(E,{data:e}),i.a.createElement(zn,{src:"/images/login-page/TurquoiseAbstract.png",alt:"TurquoiseAbstract"}),i.a.createElement(Cn,{src:"/images/login-page/YellowAbstract.png",alt:"TurquoiseAbstract"}),i.a.createElement(Bn,null,i.a.createElement(hn,null)),i.a.createElement(Pn,null,i.a.createElement(hn,null)),i.a.createElement(Sn,null,i.a.createElement(bn,null))))},vn=u.default.div(dn()),xn=u.default.h2(fn(),function(n){return n.theme.colors.primaryBlue}),wn=Object(u.default)(j.a)(pn(),function(n){return n.theme.colors.primaryDarkGray},function(n){return n.theme.colors.primaryDarkGray},function(n){return n.theme.colors.primaryBlue},function(n){return n.theme.colors.primaryBlue},function(n){return n.theme.colors.primaryBlue},function(n){return n.theme.colors.primaryBlue}),yn=u.default.div(mn()),En=u.default.div(sn(),function(n){return n.theme.colors.primaryBlue}),jn=u.default.div(ln()),On=u.default.div(cn()),kn=u.default.p(un(),function(n){return n.theme.colors.primaryLightGray},function(n){return n.theme.colors.primaryDarkGray}),Cn=u.default.img(on()),zn=u.default.img(an()),Bn=u.default.div(rn()),Pn=Object(u.default)(Bn)(tn()),Sn=u.default.div(en());gn.defaultProps={feedbackData:[{id:0,image:"/images/login-page/founder.png",name:"Alex Sarakuz",position:"Founder",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi atque voluptatum harum quidem dignissimos, deserunt facere iusto recusandae alias nostrum repellendus natus dicta vel soluta est obcaecati. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi atque voluptatum harum quidem dignissimos, deserunt facere iusto recusandae alias nostrum repellendus natus dicta vel soluta est obcaecati."}]};e.default=gn}}]);
//# sourceMappingURL=LogoutPage.9713e88b.chunk.js.map