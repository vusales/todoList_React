(this.webpackJsonpnew_lesson=this.webpackJsonpnew_lesson||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),a=n(8),c=n.n(a),d=(n(13),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),s(e),a(e),c(e)}))}),o=n(2),l=n(3),r=n(5),b=n(4),j=n(6),u=n(0),h=function(e){Object(r.a)(n,e);var t=Object(b.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={saveBtnDisabled:"hidden",BtnGroupDisabled:"visible",disabled:!0,disabledAll:i.props.disabled,inptVal:i.props.inputValue},i.newText=s.a.createRef(),i.container=s.a.createRef(),i.Edit=i.Edit.bind(Object(j.a)(i)),i.Remove=i.Remove.bind(Object(j.a)(i)),i.Save=i.Save.bind(Object(j.a)(i)),i}return Object(l.a)(n,[{key:"Edit",value:function(){this.setState({saveBtnDisabled:"visible",BtnGroupDisabled:"hidden"})}},{key:"Save",value:function(){this.setState({saveBtnDisabled:"hidden",BtnGroupDisabled:"visible",inptVal:this.newText.current.value})}},{key:"Remove",value:function(){this.container.current.remove()}},{key:"render",value:function(){return Object(u.jsx)(s.a.Fragment,{children:Object(u.jsx)("div",{className:"original-todo col-12 p-3",style:{visibility:" ".concat(this.state.disabledAll),position:"relative"},ref:this.container,children:Object(u.jsxs)("div",{className:" td-con d-flex flex-column p-1",children:[Object(u.jsxs)("div",{className:" td  d-flex align-items-center justify-content-around p-2",style:{visibility:"".concat(this.state.BtnGroupDisabled),width:"100%"},children:[Object(u.jsx)("div",{className:"p-div",children:Object(u.jsx)("p",{children:this.state.inptVal})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"btn todo-btn",onClick:this.Edit,children:"Edit"}),Object(u.jsx)("button",{className:"btn todo-btn ms-2",onClick:this.Remove,children:"Remove"})]})]}),Object(u.jsxs)("div",{className:" td  d-flex align-items-center justify-content-around p-2",style:{visibility:"".concat(this.state.saveBtnDisabled),position:"absolute",bottom:0,width:"97.5%"},children:[Object(u.jsx)("div",{className:"p-div",children:Object(u.jsx)("textarea",{ref:this.newText,children:this.state.inptVal})}),Object(u.jsx)("button",{className:"btn todo-btn",onClick:this.Save,children:"Save"})]})]})})})}}]),n}(s.a.Component),v=function(e){Object(r.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={inputText:[],todoDisabled:"hidden"},e.AddTodo=e.AddTodo.bind(Object(j.a)(e)),e.text=s.a.createRef(),e}return Object(l.a)(n,[{key:"AddTodo",value:function(){this.setState({inputText:this.state.inputText.concat(this.text.current.value),todoDisabled:"visible"}),this.text.current.value=""}},{key:"render",value:function(){var e=this;return Object(u.jsxs)(s.a.Fragment,{children:[Object(u.jsxs)("div",{className:"col-12 p-3",children:[Object(u.jsx)("div",{children:Object(u.jsx)("h2",{children:"New Todo"})}),Object(u.jsxs)("div",{className:"form-group d-flex",children:[Object(u.jsx)("input",{className:"form-control",placeholder:"New Todo",name:"newTodo",ref:this.text}),Object(u.jsx)("button",{className:"btn todo-btn lg ms-1",onClick:this.AddTodo,children:" ADD TODO "})]})]}),this.state.inputText.map((function(t,n){return Object(u.jsx)(h,{disabled:e.state.todoDisabled,inputValue:t},n)}))]})}}]),n}(s.a.Component),O=function(e){Object(r.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsx)(s.a.Fragment,{children:Object(u.jsxs)("div",{className:"col-12 p-3",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"GET TO WORK!"}),Object(u.jsx)("p",{children:"An animated Todo list made with React Hooks"})]}),Object(u.jsx)("hr",{})]})})}}]),n}(s.a.Component),x=function(e){Object(r.a)(n,e);var t=Object(b.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={},i.text=s.a.createRef(),i}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsx)(s.a.Fragment,{children:Object(u.jsx)("div",{className:"container p-5 mt-5 todo-container",children:Object(u.jsxs)("div",{className:"p-5 ",children:[Object(u.jsx)(O,{}),Object(u.jsx)(v,{})]})})})}}]),n}(s.a.Component);c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),d()}},[[15,1,2]]]);
//# sourceMappingURL=main.5cc758a5.chunk.js.map