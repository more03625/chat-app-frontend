(this["webpackJsonpchat-app-frontend"]=this["webpackJsonpchat-app-frontend"]||[]).push([[5],{100:function(e,t,a){},101:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var n=a(41),c=a.n(n),s=a(42),r=a(134),i=a(47),o=a(0),d=(a(80),a(9)),l=a(13),j=a(15),u=a(2);function b(){return Object(u.jsxs)("div",{className:"topbarContainer",children:[Object(u.jsx)(j.a,{}),Object(u.jsx)("div",{className:"topbarLeft",children:Object(u.jsx)(d.b,{to:"/",style:{textDecoration:"none"},children:Object(u.jsx)("span",{className:"logo",children:"Chat Now"})})}),Object(u.jsx)("div",{className:"topbarCenter"}),Object(u.jsxs)("div",{className:"topbarRight",children:[Object(u.jsxs)("div",{className:"topbarLinks",children:[Object(u.jsx)("span",{className:"topbarLink"}),Object(u.jsx)("span",{className:"topbarLink"})]}),Object(u.jsxs)("div",{className:"topbarIcons",children:[Object(u.jsx)("div",{className:"topbarIconItem",children:Object(u.jsx)("span",{className:""})}),Object(u.jsx)("div",{className:"topbarIconItem",children:Object(u.jsx)("span",{className:""})}),Object(u.jsx)("div",{className:"topbarIconItem",children:Object(u.jsx)("span",{className:""})})]}),Object(u.jsx)(d.b,{to:"/profile/rahulmore",children:Object(u.jsx)("img",{src:"https://lh3.googleusercontent.com/ogw/ADea4I708VJFYx3XKTF8u0dK-w-WsiENrtFo3h5q5flbpbM=s32-c-mo",alt:"Rahul More",className:"topbarImg"})}),Object(u.jsx)("span",{className:"topbarIconItem",children:Object(l.d)().data.name}),Object(u.jsx)("span",{className:"topbarIconItem",onClick:l.e,children:"Logout"})]})]})}a(81);var m=a(38),O=a.n(m);a(99);function p(e){var t=e.conversations,a=Object(o.useState)(null),n=Object(i.a)(a,2),r=n[0],d=n[1],j=t.members.find((function(e){return e!==Object(l.d)().data._id})),b=function(){var e=Object(s.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.b+l.a.getUser,a={userId:j},e.next=4,O.a.post(t,a);case 4:n=e.sent,d(n.data.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){b()}),[Object(l.d)().data._id,t]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"conversation",children:[Object(u.jsx)("img",{src:null===r||void 0===r?void 0:r.profile,alt:null===r||void 0===r?void 0:r.name,className:"conversationImage"}),Object(u.jsx)("span",{className:"conversationName",children:null===r||void 0===r?void 0:r.name})]})})}a(100);function h(e){var t=e.message,a=e.own;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:a?"messages own":"messages",children:[Object(u.jsx)("div",{className:"messageTop",children:Object(u.jsx)("p",{className:"messageText",children:t.text})}),Object(u.jsx)("div",{className:"messageBottom",children:new Date(t.createdAt).toDateString()})]})})}a(101);var v=a(102);function f(){var e=Object(o.useState)(!1),t=Object(i.a)(e,2),a=(t[0],t[1]),n=Object(o.useState)([]),d=Object(i.a)(n,2),j=d[0],m=d[1],f=Object(o.useState)(null),x=Object(i.a)(f,2),g=x[0],N=x[1],I=Object(o.useState)(null),w=Object(i.a)(I,2),k=w[0],S=w[1],_=Object(o.useState)(""),C=Object(i.a)(_,2),E=C[0],M=C[1],y=Object(o.useState)(null),B=Object(i.a)(y,2),F=B[0],D=B[1],T=Object(o.useState)([]),L=Object(i.a)(T,2),R=L[0],W=L[1],A=Object(o.useRef)(),J=Object(o.useRef)();Object(o.useEffect)((function(){J.current=Object(v.io)(l.c),J.current.on("getMessage",(function(e){D({sender:e.senderId,text:e.text,createdAt:Date.now()})}))}),[]),Object(o.useEffect)((function(){F&&(null===g||void 0===g?void 0:g.members.includes(F.sender))&&S((function(e){return[].concat(Object(r.a)(e),[F])}))}),[F,g]);var U=function(){var e=Object(s.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.prev=1,t=l.b+l.a.conversations+"/"+Object(l.d)().data._id,e.next=5,O.a.get(t);case 5:n=e.sent,m(n.data.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("err ===> "+e.t0);case 12:a(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(s.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.prev=1,t=l.b+l.a.messages+"/"+(null===g||void 0===g?void 0:g._id),e.next=5,O.a.get(t);case 5:n=e.sent,S(n.data.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:a(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(s.a)(c.a.mark((function e(t){var a,n,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(null!==E&&""!==E||(W({message:"Please enter a message"}),0))){e.next=18;break}return W({}),a={sender:Object(l.d)().data._id,text:E,conversationId:g._id},n=void 0!==g.members?g.members.find((function(e){return e!==Object(l.d)().data._id})):g._id,J.current.emit("sendMessage",{senderId:Object(l.d)().data._id,receiverId:n,text:E}),e.prev=6,s=l.b+l.a.messages,e.next=10,O.a.post(s,a);case 10:i=e.sent,S([].concat(Object(r.a)(k),[i.data.data])),M(""),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(6),console.log("There is an error!");case 18:case"end":return e.stop()}}),e,null,[[6,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){J.current.emit("addUser",Object(l.d)().data._id),J.current.on("getUsers",(function(e){}))}),[Object(l.d)().data]),Object(o.useEffect)((function(){var e;null===(e=A.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[k]),Object(o.useEffect)((function(){(null===g||void 0===g?void 0:g._id)&&V()}),[g]),Object(o.useEffect)((function(){U()}),[Object(l.d)().data._id]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{}),Object(u.jsxs)("div",{className:"messanger",children:[Object(u.jsx)("div",{className:"chatMenu",children:Object(u.jsxs)("div",{className:"chatMenuWrapper",children:[Object(u.jsx)("input",{placeholder:"Search for freinds...",className:"chatMenuInput"}),j.map((function(e,t){return Object(u.jsx)("div",{onClick:function(){return N(e)},children:Object(u.jsx)(p,{conversations:e})},t)}))]})}),Object(u.jsx)("div",{className:"chatBox",children:Object(u.jsx)("div",{className:"chatBoxWrapper",children:g?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"chatBoxTop",children:(null===k||void 0===k?void 0:k.length)>0?k.map((function(e,t){return Object(u.jsx)("div",{ref:A,children:Object(u.jsx)(h,{message:e,own:e.sender===Object(l.d)().data._id})},t)})):Object(u.jsx)("span",{className:"initConversation",children:"Start Chatting!"})}),Object(u.jsxs)("div",{className:"chatBoxBottom",children:[Object(u.jsx)("input",{type:"text",name:"chat",placeholder:"Write what's on your mind?",className:"chatMessageInput",defaultValue:E,onChange:function(e){return M(e.target.value)}}),Object(u.jsx)("button",{className:"chatSubmitButton",onClick:K,children:"Send"})]}),Object(u.jsx)("span",{className:"text-danger",children:R.message})]}):Object(u.jsx)("span",{className:"noConversationText",children:"Choose conversation to start messaging!"})})}),Object(u.jsx)("div",{className:"chatOnline"})]})]})}},80:function(e,t,a){},81:function(e,t,a){},99:function(e,t,a){}}]);
//# sourceMappingURL=5.bff1f25f.chunk.js.map