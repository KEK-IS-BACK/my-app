(this.webpackJsonpsocial=this.webpackJsonpsocial||[]).push([[0],{13:function(e,t,n){e.exports={nav:"Sidebar_nav__3uaWb",nav__list:"Sidebar_nav__list__1eedY",nav__item:"Sidebar_nav__item__3DjAa",nav__link:"Sidebar_nav__link__zkpMR",active:"Sidebar_active__2p9pw"}},15:function(e,t,n){e.exports={profilPreview:"ProfileInfo_profilPreview__2mC7n",profileInfo:"ProfileInfo_profileInfo__3vxjZ"}},163:function(e,t,n){},265:function(e,t,n){},266:function(e,t,n){},267:function(e,t,n){},286:function(e,t,n){e.exports={background:"Profile_background__2_7SO"}},287:function(e,t,n){},288:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(1),a=n.n(r),i=n(66),c=n.n(i),o=n(16),u=n(17),l=n(19),d=n(18),j=n(14),b=n(12),f=(n(163),n(13)),p=n.n(f),h=n(89),O=n.n(h),m=n(70),_=n.n(m),x=function(e){return Object(s.jsxs)(j.b,{to:"/friends/".concat(e.id),className:_.a.friend,children:[Object(s.jsx)("div",{className:_.a.friend__img}),Object(s.jsx)("p",{className:_.a.friend__name,children:e.name})]})},g=function(e){var t=e.friends.map((function(e){return Object(s.jsx)(x,{name:e.name,id:e.id},e.id)}));return Object(s.jsxs)("div",{className:O.a.friends,children:[Object(s.jsx)("h2",{children:"Friends"}),Object(s.jsx)("div",{className:O.a.friends__body,children:t})]})},v=function(e){return Object(s.jsxs)("nav",{className:p.a.nav,children:[Object(s.jsxs)("ul",{className:p.a.nav__list,children:[Object(s.jsx)("li",{className:p.a.nav__item,children:Object(s.jsx)(j.b,{to:"/profile",activeClassName:p.a.active,className:p.a.nav__link,children:"Profile"})}),Object(s.jsx)("li",{className:p.a.nav__item,children:Object(s.jsx)(j.b,{to:"/dialogs",activeClassName:p.a.active,className:p.a.nav__link,children:"Messages"})}),Object(s.jsx)("li",{className:p.a.nav__item,children:Object(s.jsx)(j.b,{to:"/news",activeClassName:p.a.active,className:p.a.nav__link,children:"News"})}),Object(s.jsx)("li",{className:p.a.nav__item,children:Object(s.jsx)(j.b,{to:"/music",activeClassName:p.a.active,className:p.a.nav__link,children:"Music"})}),Object(s.jsx)("li",{className:p.a.nav__item,children:Object(s.jsx)(j.b,{to:"/users",activeClassName:p.a.active,className:p.a.nav__link,children:"Users"})}),Object(s.jsx)("li",{className:p.a.nav__item,children:Object(s.jsx)(j.b,{to:"/settings",activeClassName:p.a.active,className:p.a.nav__link,children:"Settings"})})]}),Object(s.jsx)(g,{friends:e.sidebar.friends})]})},w=n(34),P=n.n(w),N=function(e){return Object(s.jsx)("div",{className:P.a.message,children:e.text})},y=function(e){return Object(s.jsx)("div",{className:P.a.chats__item,children:Object(s.jsx)(j.b,{to:"/dialogs/"+e.id,children:e.name})})},C=n(38),S=n(5),k="ADD-MESSAGE",U={chats:[{id:1,name:"Artem"},{id:2,name:"Lisa"},{id:3,name:"Ivan"},{id:4,name:"Oleg"},{id:5,name:"Dima"}],messages:[{id:1,text:"Hi"},{id:2,text:"How are you?"},{id:3,text:"Are you here?"},{id:4,text:"Yes"}]},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(S.a)(Object(S.a)({},e),{},{messages:[].concat(Object(C.a)(e.messages),[{id:0,text:t.newMessageText}])});default:return e}},A=n(125),E=n(126),D=function(e){return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(s.jsx)(A.a,{component:"textarea",name:"newMessageText"}),Object(s.jsx)("button",{children:"Send"})]})},F=D=Object(E.a)({form:"newMessage"})(D),T=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).onSubmit=function(t){e.props.sendMessage(t.newMessageText)},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsx)(F,{onSubmit:this.onSubmit})}}]),n}(a.a.Component),M=function(e){return Object(s.jsxs)("div",{className:P.a.dialogs,children:[Object(s.jsx)("div",{className:P.a.chats,children:e.chatsElements}),Object(s.jsxs)("div",{className:P.a.messages,children:[Object(s.jsx)("div",{children:e.messagesElements}),Object(s.jsx)("div",{children:Object(s.jsx)(T,{sendMessage:e.sendMessage})})]})]})},L=n(10),R=function(e){return{isAuth:e.auth.isAuth}},z=n(9),B=Object(z.d)(Object(L.b)((function(e){return{chatsElements:e.messagesPage.chats.map((function(e){return Object(s.jsx)(y,{id:e.id,name:e.name},e.id)})),messagesElements:e.messagesPage.messages.map((function(e){return Object(s.jsx)(N,{id:e.id,text:e.text},e.id)})),newMessageText:e.messagesPage.newMessageText}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:k,newMessageText:e}}(t))}}})),(function(e){var t=function(t){Object(l.a)(r,t);var n=Object(d.a)(r);function r(){return Object(o.a)(this,r),n.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return this.props.isAuth?Object(s.jsx)(e,Object(S.a)({},this.props)):Object(s.jsx)(b.a,{to:"/login"})}}]),r}(a.a.Component);return Object(L.b)(R)(t)}))(M),G=(n(265),function(e){return Object(s.jsx)("div",{children:"Music"})}),H=(n(266),function(e){return Object(s.jsx)("div",{children:"Settings"})}),W=(n(267),function(e){return Object(s.jsx)("div",{children:"News"})}),q=n(39),J=n.n(q),K=n(40),Q=n.n(K),X=function(e){return Object(s.jsxs)("div",{className:Q.a.user,id:e.user.id,children:[Object(s.jsxs)("div",{className:Q.a.userPreview,children:[Object(s.jsx)(j.b,{to:"profile/".concat(e.user.id),children:Object(s.jsx)("div",{className:Q.a.userImage,children:Object(s.jsx)("img",{src:e.user.photos.small?e.user.photos.small:"https://i.pinimg.com/736x/18/bd/82/18bd826512e6828dc615ca1b12ed728f.jpg",alt:""})})}),e.user.followed?Object(s.jsx)("button",{disabled:e.btnFolllowDisabled.some((function(t){return t===e.user.id})),onClick:function(){e.unfollow(e.user.id)},children:"Unfollow"}):Object(s.jsx)("button",{disabled:e.btnFolllowDisabled.some((function(t){return t===e.user.id})),onClick:function(){e.follow(e.user.id)},children:"Follow"})]}),Object(s.jsx)("div",{className:Q.a.userBody,children:Object(s.jsxs)("div",{className:Q.a.mainInfo,children:[Object(s.jsx)("h3",{children:e.user.name}),Object(s.jsx)("p",{className:Q.a.status,children:e.user.status})]})})]})},Y=n(47),Z=function(e){for(var t=[],n=Math.ceil(e.totalUsersCount/e.pageUsersCount),a=1;a<=n;a++)t.push(a);var i=Object(r.useState)(10),c=Object(Y.a)(i,2),o=c[0],u=(c[1],Object(r.useState)(1)),l=Object(Y.a)(u,2),d=l[0],j=l[1],b=Math.ceil(n/o);return t=t.filter((function(e){return e>=(d-1)*o+1&&e<=d*o})),Object(s.jsxs)("div",{className:J.a.pagination,children:[d>1&&Object(s.jsx)("button",{onClick:function(){j(d-1)},children:"Prev"}),t.map((function(t){return Object(s.jsx)("div",{className:"".concat(J.a.pagination__item," ").concat(e.currentPage===t?J.a.currentPage:""),onClick:function(n){e.onPageChange(t)},children:t},t)})),d<b&&Object(s.jsx)("button",{onClick:function(){j(d+1)},children:"Next"})]})},V=function(e){return Object(s.jsxs)("div",{className:J.a.pageUsers,children:[Object(s.jsx)(Z,{totalUsersCount:e.totalUsersCount,pageUsersCount:e.pageUsersCount,currentPage:e.currentPage,onPageChange:e.onPageChange}),Object(s.jsx)("div",{className:J.a.users,children:e.users.map((function(t){return Object(s.jsx)(X,{user:t,btnFolllowDisabled:e.btnFolllowDisabled},t.id)}))})]})},$=n(11),ee=n.n($),te=n(23),ne=n(130).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"ebb06d53-de0f-4fa2-a45f-a265c0570398"}}),se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return ne.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},re=function(e){return ne.post("follow/"+e).then((function(e){return e.data}))},ae=function(e){return ne.delete("follow/"+e).then((function(e){return e.data}))},ie=function(){return ne.get("auth/me").then((function(e){return e.data}))},ce=function(e,t,n){return ne.post("auth/login",{email:e,password:t,rememberMe:n})},oe=function(){return ne.delete("auth/login")},ue=function(e){return ne.get("profile/"+e).then((function(e){return e.data}))},le=function(e){return ne.get("profile/status/"+e)},de=function(e){return ne.put("profile/status/",{status:e})},je=function(e,t,n,s){return e.map((function(e){return e[t]===n?Object(S.a)(Object(S.a)({},e),s):e}))},be="FOLLOW",fe="UNFOLLOW",pe="SET_USERS",he="SET_TOTAL_USERS_COUNT",Oe="SET_PAGE_USERS_COUNT",me="SET_CURRENT_PAGE",_e="TOGGLE_IS_FETCHING",xe="TOGGLE_BTN_FOLLOW_DISABLED",ge={users:[],totalUsersCount:0,pageUsersCount:8,currentPage:1,isFetching:!0,btnFolllowDisabled:[]},ve=function(e){return{type:_e,isFetching:e}},we=function(e,t){return{type:xe,userId:e,value:t}},Pe=function(){var e=Object(te.a)(ee.a.mark((function e(t,n,s,r){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(we(n,!0)),e.next=3,s;case 3:0===e.sent.resultCode&&t(r),t(we(n,!1));case 6:case"end":return e.stop()}}),e)})));return function(t,n,s,r){return e.apply(this,arguments)}}(),Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be:return Object(S.a)(Object(S.a)({},e),{},{users:je(e.users,"id",t.userId,{followed:!0})});case fe:return Object(S.a)(Object(S.a)({},e),{},{users:je(e.users,"id",t.userId,{followed:!1})});case pe:return Object(S.a)(Object(S.a)({},e),{},{users:Object(C.a)(t.users)});case Oe:return Object(S.a)(Object(S.a)({},e),{},{pageUsersCount:t.count});case he:return Object(S.a)(Object(S.a)({},e),{},{totalUsersCount:t.count});case me:return Object(S.a)(Object(S.a)({},e),{},{currentPage:t.currentPage});case _e:return Object(S.a)(Object(S.a)({},e),{},{isFetching:t.isFetching});case xe:return Object(S.a)(Object(S.a)({},e),{},{btnFolllowDisabled:t.value?[].concat(Object(C.a)(e.btnFolllowDisabled),[t.userId]):e.btnFolllowDisabled.filter((function(e){return e!==t.userId}))});default:return e}},ye=n.p+"static/media/preloader.b331515a.gif",Ce=function(e){return Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:ye,alt:"Preloader"})})},Se=function(e){return e.usersPage.users},ke=function(e){return e.usersPage.totalUsersCount},Ue=function(e){return e.usersPage.pageUsersCount},Ie=function(e){return e.usersPage.currentPage},Ae=function(e){return e.usersPage.isFetching},Ee=function(e){return e.usersPage.btnFolllowDisabled},De=function(e){return e.auth.id},Fe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).onPageChange=function(t){e.props.setCurrentPage(t),e.props.getUsers(t,e.props.pageUsersCount)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageUsersCount)}},{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[this.props.isFetching?Object(s.jsx)(Ce,{}):null,Object(s.jsx)(V,{totalUsersCount:this.props.totalUsersCount,pageUsersCount:this.props.pageUsersCount,currentPage:this.props.currentPage,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,onPageChange:this.onPageChange,btnFolllowDisabled:this.props.btnFolllowDisabled})]})}}]),n}(a.a.Component),Te=Object(L.b)((function(e){return{users:Se(e),totalUsersCount:ke(e),pageUsersCount:Ue(e),currentPage:Ie(e),isFetching:Ae(e),btnFolllowDisabled:Ee(e)}}),{follow:function(e){return function(t){Pe(t,e,re(e),function(e){return{type:be,userId:e}}(e))}},unfollow:function(e){return function(t){Pe(t,e,ae(e),function(e){return{type:fe,userId:e}}(e))}},setCurrentPage:function(e){return{type:me,currentPage:e}},getUsers:function(e,t){return function(){var n=Object(te.a)(ee.a.mark((function n(s){var r;return ee.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(ve(!0)),n.next=3,se(e,t);case 3:r=n.sent,s((i=r.items,{type:pe,users:i})),s((a=r.totalCount,{type:he,count:a})),s(ve(!1));case 7:case"end":return n.stop()}var a,i}),n)})));return function(e){return n.apply(this,arguments)}}()}})(Fe),Me=(n(286),"ADD-POST"),Le="SET_USER_PROFILE",Re="SET_STATUS",ze={posts:[{id:1,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, modi!",likeCount:10},{id:2,text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat molestiae quia provident animi, sapiente iure.",likeCount:15},{id:3,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sint est illo corrupti deserunt numquam dignissimos minus consequuntur eveniet doloremque.",likeCount:20}],userProfile:null,status:""},Be=function(e){return{type:Le,userProfile:e}},Ge=function(e){return{type:Re,status:e}},He=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Me:return Object(S.a)(Object(S.a)({},e),{},{posts:[].concat(Object(C.a)(e.posts),[{id:0,text:t.newPostText,likeCount:0}]),newPostText:""});case Le:return Object(S.a)(Object(S.a)({},e),{},{userProfile:t.userProfile});case Re:return Object(S.a)(Object(S.a)({},e),{},{status:t.status});default:return e}},We=(n(287),n(95)),qe=n.n(We),Je=function(e){return Object(s.jsxs)("div",{className:qe.a.item,children:[Object(s.jsx)("img",{src:"https://avatars.mds.yandex.net/get-zen_doc/1245815/pub_5c740fefe6ece300b3a765d5_5c74104c513e0c00b3800148/scale_1200",alt:"avatar"}),Object(s.jsx)("p",{className:qe.a.text,children:e.message}),Object(s.jsxs)("span",{children:["like",e.likeCount]})]})},Ke=function(e){return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(s.jsx)(A.a,{component:"textarea",name:"newPostText"}),Object(s.jsx)("button",{children:"Add"})]})},Qe=Ke=Object(E.a)({form:"newPost"})(Ke),Xe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).onSubmit=function(t){e.props.addPost(t.newPostText)},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsx)(Qe,{onSubmit:this.onSubmit})}}]),n}(a.a.Component),Ye=function(e){var t=e.posts.map((function(e){return Object(s.jsx)(Je,{message:e.text,likeCount:e.likeCount},e.id)}));return Object(s.jsxs)("div",{children:["My posts",Object(s.jsxs)("div",{children:["New post",Object(s.jsx)(Xe,{addPost:e.addPost})]}),t]})},Ze=Object(L.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(function(e){return{type:Me,newPostText:e}}(t))}}}))(Ye),Ve=n(15),$e=n.n(Ve),et=function(e){var t=Object(r.useState)(!1),n=Object(Y.a)(t,2),a=n[0],i=n[1],c=Object(r.useState)(e.status),o=Object(Y.a)(c,2),u=o[0],l=o[1];Object(r.useEffect)((function(){l(e.status)}),[e.status]);var d=function(){i(!a)};return Object(s.jsx)(s.Fragment,{children:a?Object(s.jsx)("div",{children:Object(s.jsx)("input",{onBlur:function(){d(),e.updateStatus(u)},autoFocus:!0,value:u,onChange:function(e){!function(e){l(e.target.value)}(e)}})}):Object(s.jsx)("div",{children:Object(s.jsx)("span",{onDoubleClick:d,children:u||"---"})})})},tt=function(e){return Object(s.jsxs)("div",{className:$e.a.profilPreview,children:[Object(s.jsx)("div",{className:$e.a.profilPreview__image,children:Object(s.jsx)("img",{src:e.userProfile.photos.large,alt:""})}),Object(s.jsxs)("div",{className:$e.a.profileInfo,children:[Object(s.jsx)("h2",{className:$e.a.profileInfo__fullName,children:e.userProfile.fullName}),Object(s.jsx)(et,{status:e.status,updateStatus:e.updateStatus}),Object(s.jsxs)("div",{className:$e.a.profileInfo__userId,children:["ID: ",e.userProfile.userId]}),Object(s.jsxs)("p",{className:$e.a.profileInfo__aboutMe,children:["About me: ",e.userProfile.aboutMe]}),Object(s.jsxs)("div",{className:$e.a.profileInfo__contacts,children:["\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",Object(s.jsx)("div",{className:$e.a.profileInfo__facebook,children:e.userProfile.contacts.facebook}),Object(s.jsx)("div",{className:$e.a.profileInfo__website,children:e.userProfile.contacts.website}),Object(s.jsx)("div",{className:$e.a.profileInfo__vk,children:e.userProfile.contacts.vk}),Object(s.jsx)("div",{className:$e.a.profileInfo__twitter,children:e.userProfile.contacts.twitter}),Object(s.jsx)("div",{className:$e.a.profileInfo__instagram,children:e.userProfile.contacts.instagram}),Object(s.jsx)("div",{className:$e.a.profileInfo__youtube,children:e.userProfile.contacts.youtube}),Object(s.jsx)("div",{className:$e.a.profileInfo__github,children:e.userProfile.contacts.github}),Object(s.jsx)("div",{className:$e.a.profileInfo__mainLink,children:e.userProfile.contacts.mainLink})]}),Object(s.jsx)("div",{className:$e.a.profileInfo__aboutJob,children:e.userProfile.lookingForAJob?"\u0412 \u043f\u043e\u0438\u0441\u043a\u0430\u0445 \u0440\u0430\u0431\u043e\u0442\u044b":"\u041d\u0435 \u0432 \u043f\u043e\u0438\u0441\u043a\u0430\u0445 \u0440\u0430\u0431\u043e\u0442\u044b"})]})]})},nt=function(e){return e.userProfile?Object(s.jsxs)("div",{children:[Object(s.jsx)(tt,{userProfile:e.userProfile,status:e.status,updateStatus:e.updateStatus}),Object(s.jsx)(Ze,{store:e.store})]}):Object(s.jsx)(Ce,{})},st=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId||this.props.authUserId||null;null!==e?(this.props.getProfile(e),this.props.getStatus(e)):this.props.history.push("/login")}},{key:"render",value:function(){return Object(s.jsx)(nt,{userProfile:this.props.userProfile,isAuth:this.props.isAuth,status:this.props.status,updateStatus:this.props.updateStatus})}}]),n}(a.a.Component),rt=Object(z.d)(Object(L.b)((function(e){return{userProfile:e.profilePage.userProfile,status:e.profilePage.status,authUserId:De(e)}}),{setUserProfile:Be,getProfile:function(e){return function(){var t=Object(te.a)(ee.a.mark((function t(n){var s;return ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ue(e);case 2:s=t.sent,n(Be(s));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(te.a)(ee.a.mark((function t(n){var s;return ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,le(e);case 2:200===(s=t.sent).status&&n(Ge(s.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(te.a)(ee.a.mark((function t(n){return ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,de(e);case 2:200===t.sent.status&&n(Ge(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),b.f)(st),at=n(57),it=n.n(at),ct=function(e){return Object(s.jsxs)("header",{className:it.a.header,children:[Object(s.jsx)("div",{className:it.a.logo,children:Object(s.jsx)("img",{src:"https://purepng.com/public/uploads/large/purepng.com-coca-cola-logococa-colacokecarbonated-soft-drinksoft-drink-1411527233248xlp4z.png",alt:"Logo",className:it.a.img})}),Object(s.jsx)("div",{className:it.a.header__login,children:e.isAuth?Object(s.jsxs)("div",{children:[e.login,Object(s.jsx)("button",{onClick:e.logout,children:"Logout"})]}):Object(s.jsx)(j.b,{to:"/login",children:" Login "})})]})},ot=n(42),ut="SET_USER_DATA",lt="DELETE_USER_DATA",dt={id:null,login:null,email:null,isAuth:!1},jt=function(e,t,n){return{type:ut,data:{id:e,login:t,email:n}}},bt=function(){return function(){var e=Object(te.a)(ee.a.mark((function e(t){var n,s,r,a,i;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie();case 2:n=e.sent,s=n.data,r=s.id,a=s.login,i=s.email,0===n.resultCode&&t(jt(r,a,i));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ft=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ut:return Object(S.a)(Object(S.a)(Object(S.a)({},e),t.data),{},{isAuth:!0});case lt:return Object(S.a)(Object(S.a)({},e),{},{id:null,login:null,email:null,isAuth:!1});default:return e}},pt=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsx)(ct,Object(S.a)({},this.props))}}]),n}(a.a.Component),ht=Object(L.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth}}),{setAuthUserData:jt,authMe:bt,logout:function(){return function(){var e=Object(te.a)(ee.a.mark((function e(t){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe();case 2:0===e.sent.data.resultCode&&t({type:lt});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(pt),Ot=n(132),mt=function(e){var t=e.input,n=e.meta,r=Object(Ot.a)(e,["input","meta"]);return Object(s.jsxs)("div",{children:[Object(s.jsx)("input",Object(S.a)(Object(S.a)({},t),r)),n.touched&&n.error&&Object(s.jsx)("span",{children:"Error"})]})},_t=function(e){if(!e)return"Field is required"},xt=function(e){return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(s.jsx)("div",{children:Object(s.jsx)(A.a,{placeholder:"Email",component:mt,name:"email",validate:[_t]})}),Object(s.jsx)("div",{children:Object(s.jsx)(A.a,{placeholder:"Password",component:mt,name:"password",type:"password"})}),Object(s.jsx)("div",{children:Object(s.jsxs)("label",{children:[Object(s.jsx)(A.a,{type:"checkbox",component:mt,name:"rememberMe"}),"Remember me"]})}),Object(s.jsx)("div",{children:e.error&&Object(s.jsx)("span",{children:e.error})}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"Login"})})]})},gt=xt=Object(E.a)({form:"login"})(xt),vt=function(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{children:"Login"}),Object(s.jsx)(gt,{onSubmit:e.onSubmit})]})},wt=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).onSubmit=function(t){e.props.login(t.email,t.password,t.rememberMe)},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsx)(vt,{onSubmit:this.onSubmit})}}]),n}(a.a.Component),Pt=Object(L.b)((function(e){return{state:e}}),{login:function(e,t,n){return function(){var s=Object(te.a)(ee.a.mark((function s(r){var a;return ee.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,ce(e,t,n);case 2:0===(a=s.sent).data.resultCode?r(bt()):r(Object(ot.a)("login",{_error:a.data.messages[0]}));case 4:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()}})(wt),Nt="INITIALIZE_APP",yt={isAppInitialized:!1},Ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Nt:return Object(S.a)(Object(S.a)({},e),{},{isAppInitialized:!0});default:return e}},St=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.isAppInitialized||this.props.initializeApp()}},{key:"render",value:function(){return this.props.isAppInitialized?Object(s.jsx)(j.a,{children:Object(s.jsxs)("div",{className:"app-wrapper",children:[Object(s.jsx)(ht,{}),Object(s.jsx)(v,{sidebar:this.props.store.getState().sidebar}),Object(s.jsxs)("div",{className:"app-wrapper__content",children:[Object(s.jsx)(b.b,{path:"/profile/:userId?",render:function(){return Object(s.jsx)(rt,{})}}),Object(s.jsx)(b.b,{path:"/dialogs",render:function(){return Object(s.jsx)(B,{})}}),Object(s.jsx)(b.b,{path:"/login",render:function(){return Object(s.jsx)(Pt,{})}}),Object(s.jsx)(b.b,{path:"/users",render:function(){return Object(s.jsx)(Te,{})}}),Object(s.jsx)(b.b,{path:"/music",render:function(){return Object(s.jsx)(G,{})}}),Object(s.jsx)(b.b,{path:"/news",render:function(){return Object(s.jsx)(W,{})}}),Object(s.jsx)(b.b,{path:"/settings",render:function(){return Object(s.jsx)(H,{})}})]})]})}):Object(s.jsx)(Ce,{})}}]),n}(a.a.Component),kt=Object(L.b)((function(e){return{isAppInitialized:e.initial.isAppInitialized}}),{authMe:bt,initializeApp:function(){return function(){var e=Object(te.a)(ee.a.mark((function e(t){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t(bt())]);case 2:t({type:Nt});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(St),Ut={friends:[{id:1,name:"Andrew"},{id:2,name:"Sasha"},{id:3,name:"Sveta"}]},It=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ut,t=arguments.length>1?arguments[1]:void 0;return t.type,e},At=n(131),Et=n(127),Dt=Object(z.c)({profilePage:He,messagesPage:I,usersPage:Ne,sidebar:It,auth:ft,form:Et.a,initial:Ct}),Ft=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||z.d,Tt=Object(z.e)(Dt,Ft(Object(z.a)(At.a))),Mt=Tt;window.store=Tt;var Lt=function(){c.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(L.a,{store:Mt,children:Object(s.jsx)(kt,{store:Mt})})}),document.getElementById("root"))};Lt(),Mt.subscribe(Lt)},34:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__3fCPD",chats:"Dialogs_chats__1pDCm",chats__item:"Dialogs_chats__item__1-mQ0",messages:"Dialogs_messages__3fniF",message:"Dialogs_message__2AMul"}},39:function(e,t,n){e.exports={users:"Users_users__1xUty",pagination:"Users_pagination__2wLk0",pagination__item:"Users_pagination__item__1hm2h",currentPage:"Users_currentPage__16Ljn"}},40:function(e,t,n){e.exports={user:"User_user__12evB",userPreview:"User_userPreview__1Jtuz",userBody:"User_userBody__1tOAM",userImage:"User_userImage__14-Uy"}},57:function(e,t,n){e.exports={header:"Header_header__3cZAb",logo:"Header_logo__2-UrO",img:"Header_img__2_X7A"}},70:function(e,t,n){e.exports={friend:"Friend_friend__3U-Pm",friend__name:"Friend_friend__name__2p_WQ",friend__img:"Friend_friend__img__GMeLK"}},89:function(e,t,n){e.exports={friends__body:"Friends_friends__body__2cg2W"}},95:function(e,t,n){e.exports={item:"Post_item__2s9vK",text:"Post_text__398nB"}}},[[288,1,2]]]);
//# sourceMappingURL=main.145c46a1.chunk.js.map