(this.webpackJsonpsocial=this.webpackJsonpsocial||[]).push([[0],{101:function(e,t,n){e.exports={item:"Post_item__2s9vK",text:"Post_text__398nB"}},102:function(e,t,n){e.exports={footer:"Footer_footer__NfIRm"}},103:function(e,t,n){e.exports={loginForm__field:"LoginFormInput_loginForm__field__39n9_",loginForm__input:"LoginFormInput_loginForm__input__2VbJ5",error:"LoginFormInput_error__2_SJ4",error__wrap:"LoginFormInput_error__wrap__3NNqZ",error__icon:"LoginFormInput_error__icon__95dj-",error__text:"LoginFormInput_error__text__1kqYQ"}},104:function(e,t,n){e.exports={field:"Input_field__1rkRl",field__input:"Input_field__input__2btAz"}},105:function(e,t,n){e.exports={loginPage:"Login_loginPage__3dPPG",loginPage__body:"Login_loginPage__body__1SQDO"}},14:function(e,t,n){e.exports={sidebar:"Sidebar_sidebar__33x66",sidebar__list:"Sidebar_sidebar__list__8BL8K",sidebar__item:"Sidebar_sidebar__item__2ATpl",sidebar__link:"Sidebar_sidebar__link__2TqHb",active:"Sidebar_active__2p9pw"}},142:function(e,t,n){e.exports={profilePreview:"ProfilePreview_profilePreview__Hy2Tw"}},174:function(e,t,n){},276:function(e,t,n){},277:function(e,t,n){},278:function(e,t,n){},297:function(e,t,n){e.exports={background:"Profile_background__2_7SO"}},298:function(e,t,n){},299:function(e,t,n){},30:function(e,t,n){e.exports={account:"Account_account__f9498",account__body:"Account_account__body__3a--q",account__login:"Account_account__login__AsoWU",account__photo:"Account_account__photo__3fp-A",account__settings:"Account_account__settings__3gDgz",account__settingsArrow:"Account_account__settingsArrow__356vT",account__settingsBody:"Account_account__settingsBody__1MexS",active:"Account_active__FilB-",account__settingsBtn:"Account_account__settingsBtn__2D0Tz"}},300:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),s=n.n(a),c=n(71),i=n.n(c),o=n(17),u=n(18),l=n(20),d=n(19),j=n(13),b=(n(174),n(14)),_=n.n(b),p=n(12),f=n(95),h=n.n(f),m=n(76),O=n.n(m),g=function(e){return Object(r.jsxs)(p.b,{to:"/friends/".concat(e.id),className:O.a.friend,children:[Object(r.jsx)("div",{className:O.a.friend__img}),Object(r.jsx)("p",{className:O.a.friend__name,children:e.name})]})},x=function(e){var t=e.friends.map((function(e){return Object(r.jsx)(g,{name:e.name,id:e.id},e.id)}));return Object(r.jsxs)("div",{className:h.a.friends,children:[Object(r.jsx)("h2",{children:"Friends"}),Object(r.jsx)("div",{className:h.a.friends__body,children:t})]})},v=n(138),P=n.n(v),w=function(e){return Object(r.jsxs)("nav",{className:P()(_.a.sidebar),children:[Object(r.jsxs)("ul",{className:_.a.sidebar__list,children:[Object(r.jsx)("li",{className:_.a.sidebar__item,children:Object(r.jsx)(p.b,{to:"/profile",activeClassName:_.a.active,className:_.a.sidebar__link,children:"Profile"})}),Object(r.jsx)("li",{className:_.a.sidebar__item,children:Object(r.jsx)(p.b,{to:"/dialogs",activeClassName:_.a.active,className:_.a.sidebar__link,children:"Messages"})}),Object(r.jsx)("li",{className:_.a.sidebar__item,children:Object(r.jsx)(p.b,{to:"/news",activeClassName:_.a.active,className:_.a.sidebar__link,children:"News"})}),Object(r.jsx)("li",{className:_.a.sidebar__item,children:Object(r.jsx)(p.b,{to:"/music",activeClassName:_.a.active,className:_.a.sidebar__link,children:"Music"})}),Object(r.jsx)("li",{className:_.a.sidebar__item,children:Object(r.jsx)(p.b,{to:"/users",activeClassName:_.a.active,className:_.a.sidebar__link,children:"Users"})}),Object(r.jsx)("li",{className:_.a.sidebar__item,children:Object(r.jsx)(p.b,{to:"/settings",activeClassName:_.a.active,className:_.a.sidebar__link,children:"Settings"})})]}),Object(r.jsx)(x,{friends:e.sidebar.friends})]})},N=n(36),A=n.n(N),C=function(e){return Object(r.jsx)("div",{className:A.a.message,children:e.text})},y=function(e){return Object(r.jsx)("div",{className:A.a.chats__item,children:Object(r.jsx)(p.b,{to:"/dialogs/"+e.id,children:e.name})})},S=n(42),U=n(3),F="ADD-MESSAGE",I={chats:[{id:1,name:"Artem"},{id:2,name:"Lisa"},{id:3,name:"Ivan"},{id:4,name:"Oleg"},{id:5,name:"Dima"}],messages:[{id:1,text:"Hi"},{id:2,text:"How are you?"},{id:3,text:"Are you here?"},{id:4,text:"Yes"}]},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(U.a)(Object(U.a)({},e),{},{messages:[].concat(Object(S.a)(e.messages),[{id:0,text:t.newMessageText}])});default:return e}},E=n(135),T=n(136),D=function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)(E.a,{component:"textarea",name:"newMessageText"}),Object(r.jsx)("button",{children:"Send"})]})},L=D=Object(T.a)({form:"newMessage"})(D),M=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onSubmit=function(t){e.props.sendMessage(t.newMessageText)},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)(L,{onSubmit:this.onSubmit})}}]),n}(s.a.Component),R=function(e){return Object(r.jsxs)("div",{className:A.a.dialogs,children:[Object(r.jsx)("div",{className:A.a.chats,children:e.chatsElements}),Object(r.jsxs)("div",{className:A.a.messages,children:[Object(r.jsx)("div",{children:e.messagesElements}),Object(r.jsx)("div",{children:Object(r.jsx)(M,{sendMessage:e.sendMessage})})]})]})},B=n(11),J=function(e){return{isAuth:e.auth.isAuth}},z=n(10),H=Object(z.d)(Object(B.b)((function(e){return{chatsElements:e.messagesPage.chats.map((function(e){return Object(r.jsx)(y,{id:e.id,name:e.name},e.id)})),messagesElements:e.messagesPage.messages.map((function(e){return Object(r.jsx)(C,{id:e.id,text:e.text},e.id)})),newMessageText:e.messagesPage.newMessageText}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:F,newMessageText:e}}(t))}}})),(function(e){var t=function(t){Object(l.a)(a,t);var n=Object(d.a)(a);function a(){return Object(o.a)(this,a),n.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(r.jsx)(e,Object(U.a)({},this.props)):Object(r.jsx)(j.a,{to:"/login"})}}]),a}(s.a.Component);return Object(B.b)(J)(t)}))(R),Q=(n(276),function(e){return Object(r.jsx)("div",{children:"Music"})}),V=(n(277),function(e){return Object(r.jsx)("div",{children:"Settings"})}),G=(n(278),function(e){return Object(r.jsx)("div",{children:"News"})}),Y=n(43),q=n.n(Y),K=n(44),W=n.n(K),Z=function(e){return Object(r.jsxs)("div",{className:W.a.user,id:e.user.id,children:[Object(r.jsxs)("div",{className:W.a.userPreview,children:[Object(r.jsx)(p.b,{to:"profile/".concat(e.user.id),children:Object(r.jsx)("div",{className:W.a.userImage,children:Object(r.jsx)("img",{src:e.user.photos.small?e.user.photos.small:"https://i.pinimg.com/736x/18/bd/82/18bd826512e6828dc615ca1b12ed728f.jpg",alt:""})})}),e.user.followed?Object(r.jsx)("button",{disabled:e.btnFolllowDisabled.some((function(t){return t===e.user.id})),onClick:function(){e.unfollow(e.user.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:e.btnFolllowDisabled.some((function(t){return t===e.user.id})),onClick:function(){e.follow(e.user.id)},children:"Follow"})]}),Object(r.jsx)("div",{className:W.a.userBody,children:Object(r.jsxs)("div",{className:W.a.mainInfo,children:[Object(r.jsx)("h3",{children:e.user.name}),Object(r.jsx)("p",{className:W.a.status,children:e.user.status})]})})]})},X=n(25),$=function(e){for(var t=[],n=Math.ceil(e.totalUsersCount/e.pageUsersCount),s=1;s<=n;s++)t.push(s);var c=Object(a.useState)(10),i=Object(X.a)(c,2),o=i[0],u=(i[1],Object(a.useState)(1)),l=Object(X.a)(u,2),d=l[0],j=l[1],b=Math.ceil(n/o);return t=t.filter((function(e){return e>=(d-1)*o+1&&e<=d*o})),Object(r.jsxs)("div",{className:q.a.pagination,children:[d>1&&Object(r.jsx)("button",{onClick:function(){j(d-1)},children:"Prev"}),t.map((function(t){return Object(r.jsx)("div",{className:"".concat(q.a.pagination__item," ").concat(e.currentPage===t?q.a.currentPage:""),onClick:function(n){e.onPageChange(t)},children:t},t)})),d<b&&Object(r.jsx)("button",{onClick:function(){j(d+1)},children:"Next"})]})},ee=function(e){return Object(r.jsxs)("div",{className:q.a.pageUsers,children:[Object(r.jsx)($,{totalUsersCount:e.totalUsersCount,pageUsersCount:e.pageUsersCount,currentPage:e.currentPage,onPageChange:e.onPageChange}),Object(r.jsx)("div",{className:q.a.users,children:e.users.map((function(t){return Object(r.jsx)(Z,{user:t,btnFolllowDisabled:e.btnFolllowDisabled},t.id)}))}),Object(r.jsx)($,{totalUsersCount:e.totalUsersCount,pageUsersCount:e.pageUsersCount,currentPage:e.currentPage,onPageChange:e.onPageChange})]})},te=n(9),ne=n.n(te),re=n(16),ae=n(141).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"ebb06d53-de0f-4fa2-a45f-a265c0570398"}}),se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return ae.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},ce=function(e){return ae.post("follow/"+e).then((function(e){return e.data}))},ie=function(e){return ae.delete("follow/"+e).then((function(e){return e.data}))},oe=function(){return ae.get("auth/me").then((function(e){return e.data}))},ue=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return ae.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},le=function(){return ae.delete("auth/login")},de=function(){return ae.get("security/get-captcha-url")},je=function(e){return ae.get("profile/"+e).then((function(e){return e.data}))},be=function(e){return ae.get("profile/status/"+e)},_e=function(e){return ae.put("profile/status/",{status:e})},pe=function(e){var t=new FormData;return t.append("image",e),ae.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},fe=function(e){return ae.put("profile/",e)},he=function(e,t,n,r){return e.map((function(e){return e[t]===n?Object(U.a)(Object(U.a)({},e),r):e}))},me="FOLLOW",Oe="UNFOLLOW",ge="SET_USERS",xe="SET_TOTAL_USERS_COUNT",ve="SET_PAGE_USERS_COUNT",Pe="SET_CURRENT_PAGE",we="TOGGLE_IS_FETCHING",Ne="TOGGLE_BTN_FOLLOW_DISABLED",Ae={users:[],totalUsersCount:0,pageUsersCount:8,currentPage:1,isFetching:!0,btnFolllowDisabled:[]},Ce=function(e){return{type:we,isFetching:e}},ye=function(e,t){return{type:Ne,userId:e,value:t}},Se=function(){var e=Object(re.a)(ne.a.mark((function e(t,n,r,a){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(ye(n,!0)),e.next=3,r;case 3:0===e.sent.resultCode&&t(a),t(ye(n,!1));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case me:return Object(U.a)(Object(U.a)({},e),{},{users:he(e.users,"id",t.userId,{followed:!0})});case Oe:return Object(U.a)(Object(U.a)({},e),{},{users:he(e.users,"id",t.userId,{followed:!1})});case ge:return Object(U.a)(Object(U.a)({},e),{},{users:Object(S.a)(t.users)});case ve:return Object(U.a)(Object(U.a)({},e),{},{pageUsersCount:t.count});case xe:return Object(U.a)(Object(U.a)({},e),{},{totalUsersCount:t.count});case Pe:return Object(U.a)(Object(U.a)({},e),{},{currentPage:t.currentPage});case we:return Object(U.a)(Object(U.a)({},e),{},{isFetching:t.isFetching});case Ne:return Object(U.a)(Object(U.a)({},e),{},{btnFolllowDisabled:t.value?[].concat(Object(S.a)(e.btnFolllowDisabled),[t.userId]):e.btnFolllowDisabled.filter((function(e){return e!==t.userId}))});default:return e}},Fe=n.p+"static/media/preloader.b331515a.gif",Ie=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:Fe,alt:"Preloader"})})},ke=function(e){return e.usersPage.users},Ee=function(e){return e.usersPage.totalUsersCount},Te=function(e){return e.usersPage.pageUsersCount},De=function(e){return e.usersPage.currentPage},Le=function(e){return e.usersPage.isFetching},Me=function(e){return e.usersPage.btnFolllowDisabled},Re=function(e){return e.auth.isAuth},Be=function(e){return e.auth.id},Je=function(e){return e.auth.captchaUrl},ze=function(e){return e.profilePage.userProfile.photos},He=function(e){return e.profilePage.ownerProfile?e.profilePage.ownerProfile.photos.small:void 0},Qe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChange=function(t){e.props.setCurrentPage(t),e.props.getUsers(t,e.props.pageUsersCount)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageUsersCount)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)(Ie,{}):null,Object(r.jsx)(ee,{totalUsersCount:this.props.totalUsersCount,pageUsersCount:this.props.pageUsersCount,currentPage:this.props.currentPage,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,onPageChange:this.onPageChange,btnFolllowDisabled:this.props.btnFolllowDisabled})]})}}]),n}(s.a.Component),Ve=Object(B.b)((function(e){return{users:ke(e),totalUsersCount:Ee(e),pageUsersCount:Te(e),currentPage:De(e),isFetching:Le(e),btnFolllowDisabled:Me(e)}}),{follow:function(e){return function(t){Se(t,e,ce(e),function(e){return{type:me,userId:e}}(e))}},unfollow:function(e){return function(t){Se(t,e,ie(e),function(e){return{type:Oe,userId:e}}(e))}},setCurrentPage:function(e){return{type:Pe,currentPage:e}},getUsers:function(e,t){return function(){var n=Object(re.a)(ne.a.mark((function n(r){var a;return ne.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(Ce(!0)),n.next=3,se(e,t);case 3:a=n.sent,r((c=a.items,{type:ge,users:c})),r((s=a.totalCount,{type:xe,count:s})),r(Ce(!1));case 7:case"end":return n.stop()}var s,c}),n)})));return function(e){return n.apply(this,arguments)}}()}})(Qe),Ge=(n(297),"ADD-POST"),Ye="SET_USER_PROFILE",qe="SET_STATUS",Ke="profilePage/SET_OWNER_PROFILE",We={posts:[{id:1,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, modi!",likeCount:10},{id:2,text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat molestiae quia provident animi, sapiente iure.",likeCount:15},{id:3,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sint est illo corrupti deserunt numquam dignissimos minus consequuntur eveniet doloremque.",likeCount:20}],ownerProfile:null,userProfile:null,status:""},Ze=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t?{type:Ke,userProfile:e}:{type:Ye,userProfile:e}},Xe=function(e){return{type:qe,status:e}},$e=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(){var n=Object(re.a)(ne.a.mark((function n(r){var a;return ne.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,je(e);case 2:a=n.sent,r(Ze(a,t));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ge:return Object(U.a)(Object(U.a)({},e),{},{posts:[].concat(Object(S.a)(e.posts),[{id:0,text:t.newPostText,likeCount:0}]),newPostText:""});case Ke:return Object(U.a)(Object(U.a)({},e),{},{ownerProfile:t.userProfile});case Ye:return Object(U.a)(Object(U.a)({},e),{},{userProfile:t.userProfile});case qe:return Object(U.a)(Object(U.a)({},e),{},{status:t.status});default:return e}},tt=(n(298),n(101)),nt=n.n(tt),rt=function(e){return Object(r.jsxs)("div",{className:nt.a.item,children:[Object(r.jsx)("img",{src:"https://avatars.mds.yandex.net/get-zen_doc/1245815/pub_5c740fefe6ece300b3a765d5_5c74104c513e0c00b3800148/scale_1200",alt:"avatar"}),Object(r.jsx)("p",{className:nt.a.text,children:e.message}),Object(r.jsxs)("span",{children:["like",e.likeCount]})]})},at=function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)(E.a,{component:"textarea",name:"newPostText"}),Object(r.jsx)("button",{children:"Add"})]})},st=at=Object(T.a)({form:"newPost"})(at),ct=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onSubmit=function(t){e.props.addPost(t.newPostText)},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)(st,{onSubmit:this.onSubmit})}}]),n}(s.a.Component),it=function(e){var t=e.posts.map((function(e){return Object(r.jsx)(rt,{message:e.text,likeCount:e.likeCount},e.id)}));return Object(r.jsxs)("div",{children:["My posts",Object(r.jsxs)("div",{children:["New post",Object(r.jsx)(ct,{addPost:e.addPost})]}),t]})},ot=Object(B.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(function(e){return{type:Ge,newPostText:e}}(t))}}}))(it),ut=n(142),lt=n.n(ut),dt=n(45),jt=n.n(dt),bt=function(e){var t=Object(a.useState)(!1),n=Object(X.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)(e.status),o=Object(X.a)(i,2),u=o[0],l=o[1];Object(a.useEffect)((function(){l(e.status)}),[e.status]);var d=function(){c(!s)};return Object(r.jsx)(r.Fragment,{children:s?Object(r.jsx)("div",{children:Object(r.jsx)("input",{onBlur:function(){d(),e.updateStatus(u)},autoFocus:!0,value:u,onChange:function(e){!function(e){l(e.target.value)}(e)}})}):Object(r.jsxs)("div",{children:["\u0421\u0442\u0430\u0442\u0443\u0441:",Object(r.jsx)("span",{onDoubleClick:d,children:u||"---"})]})})},_t=Object(T.a)({form:"editProfileInfo"})((function(e){var t=e.handleSubmit,n=e.contacts;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(r.jsxs)("div",{children:["\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f:",Object(r.jsx)(E.a,{component:"input",placeholder:"\u0418\u0432\u0430\u043d\u043e\u0432 \u0418\u0432\u0430\u043d \u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447",name:"fullName"})]}),Object(r.jsxs)("div",{children:["\u041e\u0431\u043e \u043c\u043d\u0435:",Object(r.jsx)(E.a,{component:"input",placeholder:"\u041d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u043b\u043e\u0432 \u043e \u0441\u0435\u0431\u0435",name:"aboutMe"})]}),Object(r.jsxs)("div",{children:["\u0412 \u043f\u043e\u0438\u0441\u043a\u0430\u0445 \u0440\u0430\u0431\u043e\u0442\u044b?",Object(r.jsx)(E.a,{component:"input",type:"checkbox",name:"lookingForAJob"})]}),Object(r.jsxs)("div",{children:["\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438:",Object(r.jsx)("div",{children:Object(r.jsx)(E.a,{component:"textarea",placeholder:"\u041d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u043b\u043e\u0432 \u043e \u0441\u0432\u043e\u0438\u0445 \u043d\u0430\u0432\u044b\u043a\u0430\u0445",name:"lookingForAJobDescription"})})]}),Object(r.jsxs)("div",{children:["\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:",Object.keys(n).map((function(e){return Object(r.jsxs)("div",{children:[e,":",Object(r.jsx)(E.a,{component:"input",name:"contacts."+e,placeholder:e},e)]})}))]}),Object(r.jsx)("button",{type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(r.jsx)("button",{children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]})})),pt=function(e){var t=e.userProfile,n=e.status,a=e.updateStatus,s=e.toggleIsEditMode;return Object(r.jsxs)("div",{className:jt.a.profileInfo,children:[Object(r.jsx)("h2",{className:jt.a.profileInfo__fullName,children:t.fullName}),Object(r.jsx)(bt,{status:n,updateStatus:a}),Object(r.jsx)("hr",{}),Object(r.jsxs)("p",{children:["\u041e\u0431\u043e \u043c\u043d\u0435: ",t.aboutMe]}),Object(r.jsxs)("div",{className:jt.a.profileInfo__userId,children:["ID: ",t.userId]}),Object(r.jsxs)("div",{className:jt.a.profileInfo__contacts,children:["\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",Object(r.jsx)(ft,{contacts:t.contacts})]}),Object(r.jsxs)("div",{className:jt.a.profileInfo__aboutJob,children:[t.lookingForAJob?"\u0412 \u043f\u043e\u0438\u0441\u043a\u0430\u0445 \u0440\u0430\u0431\u043e\u0442\u044b":"\u041d\u0435 \u0432 \u043f\u043e\u0438\u0441\u043a\u0430\u0445 \u0440\u0430\u0431\u043e\u0442\u044b.",Object(r.jsxs)("div",{children:["\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438: ",t.lookingForAJobDescription]})]}),Object(r.jsx)("button",{onClick:s,children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]})},ft=function(e){var t=e.contacts;return Object.keys(t).map((function(e){return Object(r.jsxs)("div",{className:jt.a.contact,children:[e,": ",t[e]]},e)}))},ht=function(e){var t=Object(a.useState)(!1),n=Object(X.a)(t,2),s=n[0],c=n[1],i=function(){c(!s)};return s?Object(r.jsx)(_t,{updateProfileInfo:e.updateProfileInfo,onSubmit:function(t){e.updateProfileInfo(t),i()},initialValues:e.userProfile,contacts:e.userProfile.contacts}):Object(r.jsx)(pt,Object(U.a)(Object(U.a)({},e),{},{toggleIsEditMode:i}))},mt=n(37),Ot=n.n(mt),gt=n.p+"static/media/profilePhoto.768fa2a6.jpg",xt=Object(B.b)((function(e){return{profilePhotos:ze(e)}}),{setProfilePhoto:function(e){return function(){var t=Object(re.a)(ne.a.mark((function t(n){var r;return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,pe(e);case 2:r=t.sent,n({type:"profilePage/SET_PROFILE_PHOTO",photos:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.profilePhotos,n=e.setProfilePhoto;return Object(r.jsx)("div",{className:Ot.a.cardPhoto,children:Object(r.jsxs)("div",{className:Ot.a.profilePhoto,children:[Object(r.jsx)("div",{className:Ot.a.profilePhoto__img,children:Object(r.jsx)("img",{src:t.large||gt,alt:"ProfilePhoto"})}),Object(r.jsxs)("div",{className:Ot.a.profilePhoto__cardButtons,children:[Object(r.jsx)("input",{type:"file",id:Ot.a.updateProfilePhotoInput,onChange:function(e){e.target.files[0]&&n(e.target.files[0])}}),Object(r.jsx)("label",{htmlFor:Ot.a.updateProfilePhotoInput,className:Ot.a.labelUpdateProfilePhoto,children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e"})]})]})})})),vt=function(e){return Object(r.jsxs)("div",{className:lt.a.profilePreview,children:[Object(r.jsx)(xt,{}),Object(r.jsx)(ht,{userProfile:e.userProfile,status:e.status,updateStatus:e.updateStatus,updateProfileInfo:e.updateProfileInfo})]})},Pt=function(e){return e.userProfile?Object(r.jsxs)("div",{children:[Object(r.jsx)(vt,{userProfile:e.userProfile,status:e.status,updateStatus:e.updateStatus,updateProfileInfo:e.updateProfileInfo}),Object(r.jsx)(ot,{store:e.store})]}):Object(r.jsx)(Ie,{})},wt=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).requestUserProfile=function(){var t=e.props.match.params.userId||e.props.authUserId||null;null!==t?(e.props.getProfile(t),e.props.getStatus(t)):e.props.history.push("/login")},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.requestUserProfile()}},{key:"componentDidUpdate",value:function(e,t){e.match.params.userId!==this.props.match.params.userId&&this.requestUserProfile()}},{key:"render",value:function(){return Object(r.jsx)(Pt,{userProfile:this.props.userProfile,isAuth:this.props.isAuth,status:this.props.status,updateStatus:this.props.updateStatus,updateProfileInfo:this.props.updateProfileInfo})}}]),n}(s.a.Component),Nt=Object(z.d)(Object(B.b)((function(e){return{userProfile:e.profilePage.userProfile,status:e.profilePage.status,authUserId:Be(e)}}),{setUserProfile:Ze,getProfile:$e,getStatus:function(e){return function(){var t=Object(re.a)(ne.a.mark((function t(n){var r;return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,be(e);case 2:200===(r=t.sent).status&&n(Xe(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(re.a)(ne.a.mark((function t(n){return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_e(e);case 2:200===t.sent.status&&n(Xe(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateProfileInfo:function(e){return function(){var t=Object(re.a)(ne.a.mark((function t(n,r){var a;return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.id,t.next=3,fe(e);case 3:0===t.sent.data.resultCode&&n($e(a));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}),j.g)(wt),At=n(51),Ct=n.n(At),yt=n(30),St=n.n(yt),Ut=function(e){var t=Object(a.useState)(!1),n=Object(X.a)(t,2),s=n[0],c=n[1];return Object(r.jsxs)("div",{className:St.a.account,children:[Object(r.jsxs)(p.b,{to:"profile/",className:St.a.account__body,children:[Object(r.jsx)("div",{className:St.a.account__login,children:e.login}),Object(r.jsx)("img",{src:e.smallPhoto||gt,alt:"",className:St.a.account__photo})]}),Object(r.jsx)("div",{className:St.a.account__settings,onClick:function(){c(!s)},children:Object(r.jsx)("div",{className:St.a.account__settingsArrow})}),Object(r.jsx)("div",{className:"".concat(St.a.account__settingsBody," ").concat(s&&St.a.active),children:Object(r.jsx)("button",{onClick:e.logout,className:St.a.account__settingsBtn,children:"\u0412\u044b\u0439\u0442\u0438"})})]})},Ft=function(e){return Object(r.jsx)("header",{className:Ct.a.header,children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:Ct.a.header__body,children:[Object(r.jsx)("div",{children:Object(r.jsx)(p.b,{to:"/",className:Ct.a.logo,children:"Social Network"})}),e.isAuth?Object(r.jsx)(Ut,{smallPhoto:e.smallPhoto,login:e.login,logout:e.logout}):Object(r.jsx)("div",{className:Ct.a.btnLogin,children:Object(r.jsx)(p.b,{to:"/login",className:Ct.a.btnLogin__link,children:"\u0412\u043e\u0439\u0442\u0438"})})]})})})},It=n(33),kt="SET_USER_DATA",Et="DELETE_USER_DATA",Tt="SET_CAPTCHA_URL_SUCCESS",Dt={id:null,login:null,email:null,isAuth:!1,captchaUrl:null},Lt=function(e,t,n){return{type:kt,data:{id:e,login:t,email:n}}},Mt=function(){return function(){var e=Object(re.a)(ne.a.mark((function e(t){var n,r,a,s,c;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe();case 2:n=e.sent,r=n.data,a=r.id,s=r.login,c=r.email,0===n.resultCode&&t(Lt(a,s,c));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Rt=function(){return function(){var e=Object(re.a)(ne.a.mark((function e(t){var n;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de();case 2:n=e.sent,t((r=n.data.url,{type:Tt,captchaUrl:r}));case 4:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}()},Bt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case kt:return Object(U.a)(Object(U.a)(Object(U.a)({},e),t.data),{},{isAuth:!0});case Et:return Object(U.a)(Object(U.a)({},e),{},{id:null,login:null,email:null,isAuth:!1});case Tt:return Object(U.a)(Object(U.a)({},e),{},{captchaUrl:t.captchaUrl});default:return e}},Jt=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.isAuth}},{key:"render",value:function(){return Object(r.jsx)(Ft,Object(U.a)({},this.props))}}]),n}(s.a.Component),zt=Object(B.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth,smallPhoto:He(e)}}),{setAuthUserData:Lt,authMe:Mt,logout:function(){return function(){var e=Object(re.a)(ne.a.mark((function e(t){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le();case 2:0===e.sent.data.resultCode&&t({type:Et});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Jt),Ht="INITIALIZE_APP",Qt={isAppInitialized:!1},Vt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ht:return Object(U.a)(Object(U.a)({},e),{},{isAppInitialized:!0});default:return e}},Gt=n(102),Yt=n.n(Gt),qt=function(){return Object(r.jsx)("footer",{className:Yt.a.footer,children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:Yt.a.footer__body,children:"Footer"})})})},Kt=n(38),Wt=n.n(Kt),Zt=function(e){if(!e)return"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"},Xt=n(75),$t=n(103),en=n.n($t),tn=n(61),nn=n.n(tn),rn=function(e){var t=e.error;return Object(r.jsx)("div",{className:nn.a.error,children:Object(r.jsxs)("div",{className:nn.a.error__wrap,children:[Object(r.jsx)("div",{className:nn.a.error__icon,children:Object(r.jsx)("div",{})}),Object(r.jsx)("div",{className:nn.a.error__text,children:t})]})})},an=function(e){var t=e.input,n=e.meta,a=n.touched,s=n.error,c=Object(Xt.a)(e,["input","meta"]);return Object(r.jsxs)("div",{className:en.a.loginForm__field,children:[Object(r.jsx)("input",Object(U.a)(Object(U.a)(Object(U.a)({},t),c),{},{className:en.a.loginForm__input})),a&&s&&Object(r.jsx)(rn,{error:s})]})},sn=n(62),cn=n.n(sn),on=n(104),un=n.n(on),ln=function(e){var t=e.input,n=e.meta,a=n.error,s=n.touched,c=(e.validators,Object(Xt.a)(e,["input","meta","validators"]));return Object(r.jsxs)("div",{className:un.a.field,children:[Object(r.jsx)("input",Object(U.a)(Object(U.a)(Object(U.a)({},t),c),{},{className:un.a.field__input})),s&&a&&Object(r.jsx)(rn,{error:a})]})},dn=function(e){return Object(r.jsxs)("div",{className:cn.a.captcha,children:[Object(r.jsxs)("div",{className:cn.a.captcha__body,children:[Object(r.jsx)("img",{className:cn.a.captcha__img,src:e.captchaUrl,alt:"captcha"}),Object(r.jsx)("div",{className:cn.a.captcha__btnUpdate,onClick:function(){e.setCaptcha()},children:Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAjFJREFUWIXt17trFVEQBvDfTTAafBVCooKoxEQLEQVBC7WwSaNIQCvrWIgW/hFWPkqxMTZ21goRFAsRbNRCAzGRgMRHgsGIMRghuRZnb7hZdzd7NtqIHwwsO3u+b84yM2dOTXl04CSOYR+2YQNqmMYYnuMh7uN7BHch9uMufqJe0r7hBnbkcHbhFvqKhNfhJuYjhNP2A5exuom3B+OJfyZPfA+GVyCcthfYid14n/L9hoOY+oPiDfuED+n3tZR4D55iU96vSYgG8RITQhJ2CInZi60FawvRjtcFOxjCabQWcLTgFF4V8KRtEVdyPljAVbRFbGZVsmahbABdmMsRvxgh3Ixu5XIJodyynNdXIN4otWUDWCs0jrRjxNL6/RvidTiT4+ivIE5k/2jB0QySKdypGEAMRmrCoXI45RgVulcVdOKIUJJFWMCTihr/8Q+hJj5pJipqHRA6bgN1PCKubocrirfjcwbfeRkvi+xNxQD6c/j2xgQwLrTZWLQJbT3reFc2gKricC2H81LZAKZXIH5B9kwwifVlA6gLI/aaCOE2YcDJG0jONX9cNgdGcVaYdvLQKoxtQwU8D4TyJ3moR+yMUE6DwmH1MVnfKVxgerG5YO1bHBJO20VkJdxkwQ6q2picm1JWtneLm2yXs2fYkvdbZlLiDbQLJRRzJ0zbnHA1K8obfRiwtE83oyfxz0YIz+I2dhUJ05SNJbARJ3BcOFi2J+/m8RXvhNvSY9zDlzKkvwAlMqwV14HgBgAAAABJRU5ErkJggg==",alt:""})})]}),Object(r.jsx)("div",{children:Object(r.jsx)(E.a,{component:ln,name:"captcha",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u0441 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438",validate:[Zt]})})]})},jn=function(e){var t=Object(a.useState)(!1),n=Object(X.a)(t,2),s=n[0],c=n[1];return Object(r.jsxs)("div",{className:Wt.a.loginForm,children:[Object(r.jsx)("h1",{className:Wt.a.loginForm__title,children:"\u0412\u0445\u043e\u0434"}),Object(r.jsxs)("form",{onSubmit:e.handleSubmit((function(t){c(!0),e.login(t.email,t.password,t.rememberMe,t.captcha).then((function(){c(!1)}))})),className:Wt.a.loginForm__body,children:[Object(r.jsx)(E.a,{placeholder:"Email",component:an,name:"email",className:Wt.a.loginForm__input}),Object(r.jsx)(E.a,{placeholder:"Password",component:an,name:"password",type:"password",className:Wt.a.loginForm__input}),Object(r.jsxs)("label",{className:Wt.a.loginForm__rememberMe,children:[" \u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f:",Object(r.jsx)(E.a,{type:"checkbox",component:"input",name:"rememberMe"})]}),e.captchaUrl&&Object(r.jsx)(dn,{setCaptcha:e.setCaptcha,captchaUrl:e.captchaUrl}),Object(r.jsx)("div",{children:e.error&&Object(r.jsx)("span",{children:e.error})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",disabled:s,className:Wt.a.loginForm__btnSubmit,children:"\u0412\u043e\u0439\u0442\u0438"})})]})]})},bn=jn=Object(T.a)({form:"login",validate:function(e){var t={};return e.email?/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(e.email)||(t.email="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email "):t.email="\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435",e.password||(t.password="\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),t}})(jn),_n=n(105),pn=n.n(_n),fn=Object(B.b)((function(e){return{captchaUrl:Je(e),isAuth:Re(e)}}),{login:function(e,t,n,r){return function(){var a=Object(re.a)(ne.a.mark((function a(s,c){var i;return ne.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,ue(e,t,n,r);case 2:0===(i=a.sent).data.resultCode?(s(Mt()),s($e(c().auth.id,!0))):(10===i.data.resultCode&&s(Rt()),s(Object(It.a)("login",{_error:i.data.messages[0]})));case 4:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},setCaptcha:Rt})((function(e){return e.isAuth?Object(r.jsx)(j.a,{to:"/profile"}):Object(r.jsx)("div",{className:pn.a.loginPage,children:Object(r.jsx)("div",{className:pn.a.loginPage__body,children:Object(r.jsx)(bn,{onSubmit:e.onSubmit,setCaptcha:e.setCaptcha,captchaUrl:e.captchaUrl,login:e.login})})})})),hn=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.isAppInitialized||this.props.initializeApp()}},{key:"render",value:function(){return this.props.isAppInitialized?Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)(zt,{className:"app__header"}),Object(r.jsx)("div",{className:"app__content",children:Object(r.jsxs)(j.d,{children:[Object(r.jsx)(j.b,{path:"/login",render:function(){return Object(r.jsx)(fn,{})}}),Object(r.jsxs)("div",{className:"app__body",children:[Object(r.jsx)(w,{sidebar:this.props.store.getState().sidebar}),Object(r.jsxs)("main",{className:"app__main",children:[Object(r.jsx)(j.b,{path:"/profile/:userId?",render:function(){return Object(r.jsx)(Nt,{})}}),Object(r.jsx)(j.b,{path:"/dialogs",render:function(){return Object(r.jsx)(H,{})}}),Object(r.jsx)(j.b,{path:"/users",render:function(){return Object(r.jsx)(Ve,{})}}),Object(r.jsx)(j.b,{path:"/music",render:function(){return Object(r.jsx)(Q,{})}}),Object(r.jsx)(j.b,{path:"/news",render:function(){return Object(r.jsx)(G,{})}}),Object(r.jsx)(j.b,{path:"/settings",render:function(){return Object(r.jsx)(V,{})}})]})]})]})}),Object(r.jsx)(qt,{className:"app__footer"})]}):Object(r.jsx)(Ie,{})}}]),n}(s.a.Component),mn=Object(B.b)((function(e){return{isAppInitialized:e.initial.isAppInitialized,isAuth:Re(e)}}),{authMe:Mt,initializeApp:function(){return function(){var e=Object(re.a)(ne.a.mark((function e(t,n){var r;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t(Mt())]);case 2:if(!(r=n()).auth.isAuth){e.next=6;break}return e.next=6,t($e(r.auth.id,!0));case 6:t({type:Ht}),console.log("State \u043f\u0440\u043e\u0438\u043d\u0438\u0437\u0438\u0430\u043b\u0438\u0437\u0440\u043e\u0432\u0430\u043d");case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}})(hn),On={friends:[{id:1,name:"Andrew"},{id:2,name:"Sasha"},{id:3,name:"Sveta"}]},gn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:On,t=arguments.length>1?arguments[1]:void 0;return t.type,e},xn=n(143),vn=n(137),Pn=Object(z.c)({profilePage:et,messagesPage:k,usersPage:Ue,sidebar:gn,auth:Bt,form:vn.a,initial:Vt}),wn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||z.d,Nn=Object(z.e)(Pn,wn(Object(z.a)(xn.a))),An=Nn;window.store=Nn;n(299);var Cn=function(){i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(p.a,{children:Object(r.jsx)(B.a,{store:An,children:Object(r.jsx)(mn,{store:An})})})}),document.getElementById("root"))};Cn(),An.subscribe(Cn)},36:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__3fCPD",chats:"Dialogs_chats__1pDCm",chats__item:"Dialogs_chats__item__1-mQ0",messages:"Dialogs_messages__3fniF",message:"Dialogs_message__2AMul"}},37:function(e,t,n){e.exports={cardPhoto:"ProfileCardPhoto_cardPhoto__2wwwm",profilePhoto:"ProfileCardPhoto_profilePhoto__26Ab4",profilePhoto__img:"ProfileCardPhoto_profilePhoto__img__2RaZd",profilePhoto__cardButtons:"ProfileCardPhoto_profilePhoto__cardButtons__3wjUb",btnDeletePhoto:"ProfileCardPhoto_btnDeletePhoto__utEsS",updateProfilePhotoInput:"ProfileCardPhoto_updateProfilePhotoInput__aCKsB",labelUpdateProfilePhoto:"ProfileCardPhoto_labelUpdateProfilePhoto__3LCjR"}},38:function(e,t,n){e.exports={loginForm:"LoginForm_loginForm__2wf0T",loginForm__title:"LoginForm_loginForm__title__2RgIC",loginForm__body:"LoginForm_loginForm__body__15Vi1",loginForm__rememberMe:"LoginForm_loginForm__rememberMe__ZHYaa",loginForm__btnSubmit:"LoginForm_loginForm__btnSubmit__1ujiY"}},43:function(e,t,n){e.exports={users:"Users_users__1xUty",pagination:"Users_pagination__2wLk0",pagination__item:"Users_pagination__item__1hm2h",currentPage:"Users_currentPage__16Ljn"}},44:function(e,t,n){e.exports={user:"User_user__12evB",userPreview:"User_userPreview__1Jtuz",userBody:"User_userBody__1tOAM",userImage:"User_userImage__14-Uy"}},45:function(e,t,n){e.exports={contact:"ProfileData_contact__1oyMx",profileInfo:"ProfileData_profileInfo__2dTZD"}},51:function(e,t,n){e.exports={header:"Header_header__3cZAb",header__body:"Header_header__body__2UrTT",logo:"Header_logo__2-UrO",btnLogin:"Header_btnLogin__liwdM",btnLogin__link:"Header_btnLogin__link__1IOVk"}},61:function(e,t,n){e.exports={error:"Error_error__2y6yd",error__wrap:"Error_error__wrap__28bs2",error__icon:"Error_error__icon__1x4zA",error__text:"Error_error__text__2cCE7"}},62:function(e,t,n){e.exports={captcha:"Captcha_captcha__Lau5b",captcha__body:"Captcha_captcha__body__1Ind9",captcha__img:"Captcha_captcha__img__2yONt",captcha__btnUpdate:"Captcha_captcha__btnUpdate__13RSN"}},76:function(e,t,n){e.exports={friend:"Friend_friend__3U-Pm",friend__name:"Friend_friend__name__2p_WQ",friend__img:"Friend_friend__img__GMeLK"}},95:function(e,t,n){e.exports={friends__body:"Friends_friends__body__2cg2W"}}},[[300,1,2]]]);
//# sourceMappingURL=main.f4a8bbb4.chunk.js.map