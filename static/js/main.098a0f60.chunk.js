(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(17)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),s=n.n(c),o=n(1),u=n.n(o),l=n(3),i=n(2),m=(n(12),n(13),n(14),function(e){var t=e.posts,n=e.viewPostUser,a=e.setPostDetails,c=e.postId,s=e.setPostId;return r.a.createElement("div",{className:"PostsList"},r.a.createElement("h2",null,"Posts:"),r.a.createElement("ul",{className:"PostsList__list"},t.map((function(e){var t=e.userId,o=e.title,u=e.id;return r.a.createElement("li",{className:"PostsList__item",key:u},r.a.createElement("div",null,r.a.createElement("b",null,"[User #",t,"]:"),o),r.a.createElement("button",{onClick:function(){!function(e){c===e?(s(0),a([])):(s(e),n(e))}(u)},type:"button",className:"PostsList__button button"},u===c?"Close":"Open"))}))))}),p=(n(15),n(16),"https://mate-api.herokuapp.com");function f(e){return d.apply(this,arguments)}function d(){return(d=Object(l.a)(u.a.mark((function e(t){var n,a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/comments/"));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.next=8,a.data;case 8:return r=e.sent,c=r.filter((function(e){return e.postId===t})),e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return fetch("".concat(p,"/comments/").concat(e),{method:"DELETE"})}var E=function(e){var t=e.setComments,n=e.postId,c=Object(a.useState)(""),s=Object(i.a)(c,2),o=s[0],u=s[1],l=Object(a.useState)(""),m=Object(i.a)(l,2),d=m[0],b=m[1],E=Object(a.useState)(""),h=Object(i.a)(E,2),v=h[0],_=h[1],N=function(e){e.preventDefault(),o&&d&&v&&(function(e,t,n,a){return fetch("".concat(p,"/comments/"),{method:"POST",body:JSON.stringify({name:e,email:t,body:n,postId:a})})}(o,d,v,n).then((function(){return f(n).then(t)})),u(""),b(""),_(""))};return r.a.createElement("form",{className:"NewCommentForm",onSubmit:function(e){return N(e)}},r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:o,onChange:function(e){return u(e.target.value)}})),r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:d,onChange:function(e){return b(e.target.value)}})),r.a.createElement("div",{className:"form-field"},r.a.createElement("textarea",{name:"body",placeholder:"Type body here",className:"NewCommentForm__input",value:v,onChange:function(e){return _(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a body"))},h=function(e){var t=e.postDetails,n=e.postId,c=t.title,s=t.body,o=t.id,m=Object(a.useState)([]),p=Object(i.a)(m,2),d=p[0],h=p[1],v=Object(a.useState)(!0),_=Object(i.a)(v,2),N=_[0],y=_[1];function j(){return(j=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){f(n).then((function(e){return h(e)}))}),[d]),r.a.createElement("div",{className:"PostDetails"},r.a.createElement("h2",null,"Post details:"),o&&r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"PostDetails__post"},r.a.createElement("h3",null,c),r.a.createElement("p",null,s)),r.a.createElement("section",{className:"PostDetails__comments"},r.a.createElement("button",{type:"button",className:"button",onClick:function(){y((function(){return!N}))}},"".concat(N?"Hide":"Show"," ").concat(d.length," commnets")),r.a.createElement("ul",{className:"PostDetails__list"},N&&d.map((function(e){return r.a.createElement("li",{className:"PostDetails__list-item"},r.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return function(e){return j.apply(this,arguments)}(e.id)}},"X"),r.a.createElement("p",null,e.name),r.a.createElement("p",null,e.body))})))),r.a.createElement("section",null,r.a.createElement("div",{className:"PostDetails__form-wrapper"},r.a.createElement(E,{setComments:h,postId:n})))))};function v(){return(v=Object(l.a)(u.a.mark((function e(t){var n,a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/posts"));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.next=8,a.data;case 8:if(r=e.sent,0!==+t){e.next=11;break}return e.abrupt("return",r);case 11:return c=r.filter((function(e){return e.userId===+t})),e.abrupt("return",c);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return N.apply(this,arguments)}function N(){return(N=Object(l.a)(u.a.mark((function e(t){var n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/posts/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.next=8,a.data;case 8:return r=e.sent,e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),o=Object(i.a)(s,2),p=o[0],f=o[1],d=Object(a.useState)([]),b=Object(i.a)(d,2),E=b[0],N=b[1],y=Object(a.useState)(0),j=Object(i.a)(y,2),O=j[0],w=j[1];function x(){return(x=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t);case 2:n=e.sent,N((function(){return n}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){(function(e){return v.apply(this,arguments)})(p).then(c)}),[p]),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App__header"},r.a.createElement("label",null,"Select a user: \xa0",r.a.createElement("select",{className:"App__user-selector",onChange:function(e){f(e.target.value)}},r.a.createElement("option",{value:"0"},"All users"),r.a.createElement("option",{value:"1"},"Leanne Graham"),r.a.createElement("option",{value:"2"},"Ervin Howell"),r.a.createElement("option",{value:"3"},"Clementine Bauch"),r.a.createElement("option",{value:"4"},"Patricia Lebsack"),r.a.createElement("option",{value:"5"},"Chelsey Dietrich"),r.a.createElement("option",{value:"6"},"Mrs. Dennis Schulist"),r.a.createElement("option",{value:"7"},"Kurtis Weissnat"),r.a.createElement("option",{value:"8"},"Nicholas Runolfsdottir V"),r.a.createElement("option",{value:"9"},"Glenna Reichert"),r.a.createElement("option",{value:"10"},"Leanne Graham")))),r.a.createElement("main",{className:"App__main"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(m,{viewPostUser:function(e){return x.apply(this,arguments)},posts:n,postDetails:E,selectedUser:p,setPostDetails:N,postId:O,setPostId:w})),r.a.createElement("div",{className:"App__content"},r.a.createElement(h,{postDetails:E,postId:O}))))};s.a.render(r.a.createElement(y,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.098a0f60.chunk.js.map