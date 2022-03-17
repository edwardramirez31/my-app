(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{146:function(e,t,a){},267:function(e,t,a){"use strict";a.r(t);var n=a(14),r=a.n(n),c=a(29),s=a(313),u=a(70),o=a(301),i=a(314),d=function(e){return e.task.tasks},l=function(e){return e.task.loading},p=(a(146),a(24)),b=a(315),j=a(303),f=a(304),x=a(132),O=a(0),k=a(86),h=a(17),v=a(69),m=Object(v.b)({name:"task",initialState:{tasks:[],loading:!1,error:null},reducers:{addTask:function(e,t){e.loading=!0},addTaskSuccess:function(e,t){e.tasks=[].concat(Object(h.a)(e.tasks),[Object(p.a)(Object(p.a)({},t.payload),{},{isUpdating:!1})]),e.loading=!1},addTaskError:function(e,t){e.error=t.payload,e.loading=!1},getTask:function(e){e.loading=!0},getTaskSuccess:function(e,t){var a=t.payload.map((function(e){return Object(p.a)(Object(p.a)({},e),{},{isUpdating:!1})}));e.tasks=[].concat(Object(h.a)(e.tasks),Object(h.a)(a)),e.loading=!1},getTaskError:function(e,t){e.error=t.payload,e.loading=!1},removeTask:function(e,t){e.tasks=e.tasks.filter((function(e){return e.id!==t.payload}))},setIsUpdating:function(e,t){var a=e.tasks.map((function(e){return e.id===t.payload?Object(p.a)(Object(p.a)({},e),{},{isUpdating:!0}):e}));e.tasks=a},updateTask:function(e,t){e.loading=!0},updateTaskSuccess:function(e,t){var a=t.payload,n=e.tasks.map((function(e){return e.id===a.id?Object(p.a)(Object(p.a)({},a),{},{isUpdating:!1}):e}));e.tasks=n,e.loading=!1}}}),g=m.actions,y=g.addTask,T=g.addTaskSuccess,w=g.addTaskError,S=g.getTask,U=g.getTaskSuccess,C=g.getTaskError,I=g.removeTask,E=g.setIsUpdating,B=g.updateTask,A=g.updateTaskSuccess,q=m.reducer,F=a(9),J=function(){var e=Object(c.b)(),t=k.a().shape({text:k.b().required("This is required")});return Object(F.jsx)(x.a,{initialValues:{text:""},validationSchema:t,onSubmit:function(t,a){e(y(Object(p.a)(Object(p.a)({},t),{},{completed:!1}))),a.resetForm()},children:function(e){var t=e.values,a=e.errors,n=e.touched,r=e.handleChange,c=e.handleSubmit,s=e.handleBlur;return Object(F.jsxs)("form",{style:{display:"flex",alignItems:"baseline",justifyContent:"space-around"},onSubmit:c,children:[Object(F.jsx)(b.a,{label:"Add a text",style:{width:"85%"},name:"text",value:t.text,onChange:r,error:Boolean(n.text&&a.text),helperText:n.text&&a.text,onBlur:s}),Object(F.jsx)(j.a,{type:"submit",variant:"contained",color:"primary",endIcon:Object(F.jsx)(f.a,{children:"send"}),style:{width:"10%"},children:"Add"})]})}})},R=a(302),W=a(23),z=a(305),D=a(306),L=a(316),N=a(308),V=a(309),G=a(307),H=a(310),K=a(311),M=a(312),P=function(e){var t=e.id,a=e.text,n=e.completed,r=e.isUpdating,s=Object(O.useState)(a),o=Object(W.a)(s,2),i=o[0],d=o[1],l=Object(c.b)();return Object(F.jsxs)(z.a,{button:!0,children:[Object(F.jsx)(D.a,{children:Object(F.jsx)(L.a,{edge:"start",checked:n,tabIndex:-1,disableRipple:!0,onClick:function(){return l(B({id:t,text:i,completed:!n}))}})}),Object(F.jsx)(N.a,{children:r?Object(F.jsx)(b.a,{value:i,onChange:function(e){d(e.target.value)},fullWidth:!0}):Object(F.jsx)(u.a,{children:i})}),Object(F.jsx)(V.a,{children:r?Object(F.jsx)(G.a,{edge:"end","aria-label":"comments",onClick:function(){return l(B({text:i,id:t,completed:n}))},children:Object(F.jsx)(M.a,{color:"primary"})}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(G.a,{edge:"end",onClick:function(){return l(E(t))},children:Object(F.jsx)(H.a,{color:"primary"})}),Object(F.jsx)(G.a,{edge:"end",onClick:function(){return l(I(t))},children:Object(F.jsx)(K.a,{color:"secondary"})})]})})]})},Q=function(){var e=Object(c.b)(),t=Object(c.c)(d);return Object(O.useEffect)((function(){t.length||e(S())})),Object(F.jsx)(R.a,{children:t.map((function(e){return Object(F.jsx)(P,{id:e.id,text:e.text,completed:e.completed,isUpdating:e.isUpdating},e.id)}))})},X=function(){var e=Object(c.c)(l);return Object(F.jsx)("div",{className:"App",children:Object(F.jsxs)(s.a,{maxWidth:"md",children:[Object(F.jsx)(u.a,{variant:"h3",children:"To-Do App"}),Object(F.jsx)(o.a,{style:{padding:20},children:Object(F.jsx)(J,{})}),e&&Object(F.jsx)(i.a,{}),Object(F.jsx)(Q,{})]})})},Y=a(133),Z=a(16),$=a.n(Z),_=a(20),ee=a(50),te=a(13),ae=a(12),ne=a(131),re=a.n(ne).a.create({baseURL:"https://edwardramirez.pythonanywhere.com"}),ce=function(){function e(){Object(te.a)(this,e)}return Object(ae.a)(e,null,[{key:"getTasks",value:function(){var e=Object(ee.a)($.a.mark((function e(){var t;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re.get("/");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getTaskById",value:function(){var e=Object(ee.a)($.a.mark((function e(t){var a;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re.get("/task/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteTask",value:function(){var e=Object(ee.a)($.a.mark((function e(t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re.delete("/task/".concat(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateTask",value:function(){var e=Object(ee.a)($.a.mark((function e(t,a){var n;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re.put("/task/".concat(t,"/"),a);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"createTask",value:function(){var e=Object(ee.a)($.a.mark((function e(t){var a;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re.post("/",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),se=ce,ue=$.a.mark(pe),oe=$.a.mark(be),ie=$.a.mark(je),de=$.a.mark(fe),le=$.a.mark(xe);function pe(e){var t,a,n;return $.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,Object(_.b)([se,"createTask"],t);case 4:return a=r.sent,r.next=7,Object(_.d)(T(a));case 7:r.next=14;break;case 9:return r.prev=9,r.t0=r.catch(1),n=r.t0,r.next=14,Object(_.d)(w(n.message));case 14:case"end":return r.stop()}}),ue,null,[[1,9]])}function be(){var e,t;return $.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(_.b)([se,"getTasks"]);case 3:return e=a.sent,a.next=6,Object(_.d)(U(e));case 6:a.next=13;break;case 8:return a.prev=8,a.t0=a.catch(0),t=a.t0,a.next=13,Object(_.d)(C(t.message));case 13:case"end":return a.stop()}}),oe,null,[[0,8]])}function je(e){var t,a;return $.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(_.b)([se,"deleteTask"],t);case 4:n.next=10;break;case 6:n.prev=6,n.t0=n.catch(1),a=n.t0,console.log(a.message);case 10:case"end":return n.stop()}}),ie,null,[[1,6]])}function fe(e){var t,a,n,r,c,s;return $.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.payload,a=t.id,n=t.text,r=t.completed,u.prev=1,u.next=4,Object(_.b)([se,"updateTask"],a,{text:n,completed:r});case 4:return c=u.sent,u.next=7,Object(_.d)(A(c));case 7:u.next=14;break;case 9:return u.prev=9,u.t0=u.catch(1),s=u.t0,u.next=14,Object(_.d)(C(s.message));case 14:case"end":return u.stop()}}),de,null,[[1,9]])}function xe(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(_.a)([Object(_.e)(y,pe),Object(_.e)(S,be),Object(_.e)(I,je),Object(_.e)(B,fe)]);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),le,null,[[0,5]])}var Oe=$.a.mark(ke);function ke(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(_.a)([Object(_.c)(xe)]);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),Oe,null,[[0,5]])}var he=Object(Y.a)(),ve=Object(v.a)({reducer:{task:q},middleware:function(e){return e({thunk:!1}).concat(he)}});he.run(ke);var me=ve;r.a.render(Object(F.jsx)(c.a,{store:me,children:Object(F.jsx)(X,{})}),document.getElementById("root"))}},[[267,1,2]]]);
//# sourceMappingURL=main.fb53c64c.chunk.js.map