(this["webpackJsonpchat-app-frontend"]=this["webpackJsonpchat-app-frontend"]||[]).push([[1],{13:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return a})),n.d(e,"d",(function(){return s})),n.d(e,"c",(function(){return i})),n.d(e,"e",(function(){return r}));var c=n(15),o="localhost:3000"===window.location.host?"http://localhost:5256":"https://chat-now-backend.herokuapp.com",a={conversations:"/api/conversations",messages:"/api/messages",signup:"/api/auth/register",login:"/api/auth/login",getUser:"/api/auth/getUser"},s=function(){return JSON.parse(localStorage.getItem("chat-app-auth"))},i="localhost:3000"===window.location.host?"ws://localhost:8900":"https://chat-now-socket.herokuapp.com:8900",r=function(){c.b.success("Logged out successfully!"),localStorage.removeItem("chat-app-auth"),setTimeout((function(){window.location.href="/login"}),2e3)}},25:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n.n(c),a=n(17),s=n.n(a),i=(n(25),n(9)),r=n(1),u=n(13),l=n(2),h=function(t){var e=Object(r.f)(),n=t.component;return Object(c.useEffect)((function(){null!==Object(u.d)()?e.push("/"):e.push("/login")}),[]),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(n,{})})},p=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(3),n.e(5)]).then(n.bind(null,137))})),j=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,138))})),d=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,135))}));var b=function(){return Object(l.jsx)(i.a,{children:Object(l.jsx)(c.Suspense,{fallback:Object(l.jsx)("div",{children:"This is form fallback!"}),children:Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{exact:!0,path:"/login",children:Object(l.jsx)(h,{component:j})}),Object(l.jsx)(r.a,{exact:!0,path:"/register",children:Object(l.jsx)(h,{component:d})}),Object(l.jsx)(r.a,{exact:!0,path:"/",children:Object(l.jsx)(h,{component:p})})]})})})},f=function(t){t&&t instanceof Function&&n.e(8).then(n.bind(null,136)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),o(t),a(t),s(t)}))};s.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),f()}},[[31,2,4]]]);
//# sourceMappingURL=main.c96110e5.chunk.js.map