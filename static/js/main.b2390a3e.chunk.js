(this.webpackJsonpcolor=this.webpackJsonpcolor||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(5),r=c.n(a),l=c(8),i=c(4),o=c.n(i),j=c(6),d=c(2),m=(c(14),c.p+"static/media/icon-company.6f78ffb3.svg"),b=c.p+"static/media/icon-location.f11c5487.svg",u=c.p+"static/media/icon-twitter.f6a2a695.svg",h=c.p+"static/media/icon-website.b7923f6c.svg",O=c(0),x=function(e){var t=e.login,c=e.bio,s=e.avatar_url,n=(e.url,e.name),a=e.created_at,r=e.public_repos,l=(e.public_gists,e.followers),i=e.following,o=e.twitter_username,j=e.location,d=e.blog,x=e.company,p=function(e){return e||"Not Available"};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"img-section",children:Object(O.jsx)("img",{className:"logo",src:s,alt:""})}),Object(O.jsxs)("div",{className:"desc-section",children:[Object(O.jsxs)("div",{className:"desc",children:[Object(O.jsx)("div",{className:"title",children:n}),Object(O.jsx)("div",{className:"date",children:a}),Object(O.jsx)("div",{className:"user",children:t}),Object(O.jsx)("div",{className:"info",style:{color:c&&"light-text"},children:c||"This profile has no bio"})]}),Object(O.jsxs)("div",{className:"stat",children:[Object(O.jsxs)("div",{className:"repo",children:[Object(O.jsx)("h3",{children:"Repos"}),Object(O.jsx)("p",{children:r})]}),Object(O.jsxs)("div",{className:"follower",children:[Object(O.jsx)("h3",{children:"Followers"}),Object(O.jsx)("p",{children:l})]}),Object(O.jsxs)("div",{className:"following",children:[Object(O.jsx)("h3",{children:"Following"}),Object(O.jsx)("p",{children:i})]})]}),Object(O.jsxs)("div",{className:"contact",children:[Object(O.jsxs)("div",{className:"location each-contact",children:[Object(O.jsx)("img",{src:b,alt:"",srcset:""}),Object(O.jsx)("div",{className:"loc",children:p(j)})]}),Object(O.jsxs)("div",{className:"twitter each-contact",children:[Object(O.jsx)("img",{src:u,alt:"",srcset:""}),Object(O.jsx)("div",{className:"twitt",children:p(o)})]}),Object(O.jsxs)("div",{className:"link each-contact",children:[Object(O.jsx)("img",{src:h,alt:"",srcset:""}),Object(O.jsx)("div",{className:"link",children:p(d)})]}),Object(O.jsxs)("div",{className:"company each-contact",children:[Object(O.jsx)("img",{src:m,alt:"",srcset:""}),Object(O.jsx)("div",{className:"comp",children:p(x)})]})]})]})]})},p=c(7),v=c.p+"static/media/icon-moon.cce754ce.svg",f=c.p+"static/media/icon-sun.f28a8996.svg";var g=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!1),r=Object(d.a)(a,2),i=(r[0],r[1]),m=Object(s.useState)("octocat"),b=Object(d.a)(m,2),u=b[0],h=b[1],g=Object(s.useState)(!0),y=Object(d.a)(g,2),N=y[0],w=y[1];document.querySelector(":root"),N?(document.documentElement.style.setProperty("--body","#f6f8ff"),document.documentElement.style.setProperty("--primary-clr","#fff"),document.documentElement.style.setProperty("--color","#111"),document.documentElement.style.setProperty("--filter","brightness(0)"),document.documentElement.style.setProperty("--stat","#F6F8FF")):(document.documentElement.style.setProperty("--body","#141D2F"),document.documentElement.style.setProperty("--primary-clr","#1E2A47"),document.documentElement.style.setProperty("--color","#fff"),document.documentElement.style.setProperty("--filter","brightness(50)"),document.documentElement.style.setProperty("--stat","#141D2F"));var E=function(){var e=Object(j.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.github.com/users/".concat(u));case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,console.log(c),n(c),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),i(!0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){E()}),[u]),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("div",{className:"nav",children:[Object(O.jsx)("div",{className:"logo",children:"devfinder"}),Object(O.jsxs)("div",{className:"toggle",onClick:function(){return w(!N)},children:[Object(O.jsx)("p",{children:N?"Dark":"Light"}),N?Object(O.jsx)("img",{src:v,alt:""}):Object(O.jsx)("img",{src:f,alt:""})]})]}),Object(O.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),console.log(c)},style:{"box-shadow":!N&&"none"},children:[Object(O.jsx)(p.a,{className:"search"}),Object(O.jsx)("input",{type:"text",value:u,onChange:function(e){h(e.target.value)}}),c.hasOwnProperty("message")&&Object(O.jsx)("p",{class:"err",children:"No Result Found"}),Object(O.jsx)("button",{type:"submit",children:"Search"})]}),Object(O.jsx)("div",{className:"result",style:{"box-shadow":!N&&"none"},children:Object(O.jsx)(x,Object(l.a)({},c))})]})})};r.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(g,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b2390a3e.chunk.js.map