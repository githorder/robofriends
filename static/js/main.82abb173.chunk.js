(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(7),a=n.n(r),s=(n(12),n(13),n(2)),o=n(3),i=n(5),l=n(4),h=n(0),u=function(e){var t=e.name,n=e.id,c=e.email;return Object(h.jsxs)("div",{className:"shadow-4 mw5 dib bg-light-blue br3 pa1 pa4-ns ma2 ba b--black-10 tc grow",children:[Object(h.jsx)("img",{className:"h4 w4 pa2",src:"https://robohash.org/".concat(n,".png?200x200"),alt:"robot-card"}),Object(h.jsx)("h2",{className:"f5",children:t}),Object(h.jsx)("p",{className:"gray",children:c})]})},b=function(e){var t=e.robots;return Object(h.jsx)("div",{className:"flex flex-wrap justify-center",children:t.map((function(e){return Object(h.jsx)(u,{name:e.name,id:e.id,email:e.email},e.id)}))})},j=(n(15),function(e){var t=e.SearchChange;return Object(h.jsx)("input",{className:"pv3 mb3 input-reset ba b--washed-blue tc",onChange:t,type:"search",placeholder:"search robots"})}),d=(n(16),function(){return Object(h.jsx)("h1",{className:"ttu fw3 light-blue f1 lh-title",children:"robofriends"})}),f=n(20),m=function(){return Object(h.jsxs)("div",{className:"tc",children:[Object(h.jsx)("h1",{className:"ttu fw3 light-blue f1 lh-title",children:"Loading"}),Object(h.jsx)(f.a,{color:"#0080ff"})]})},O=(n(17),function(e){var t=e.children;return Object(h.jsx)("div",{className:"scrollBar overflow-scroll",children:t})}),p=function(){return Object(h.jsx)("h1",{className:"tc light-blue",children:"Something went wrong"})},x=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(o.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(h.jsx)(p,{}):this.props.children}}]),n}(c.Component),v=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:"",failedToFetch:!1},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})})).catch((function(){return e.setState({failedToFetch:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,c=e.failedToFetch,r=t.length?t.filter((function(e){return e.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())})):[];return t.length||c?c?Object(h.jsx)(p,{}):Object(h.jsxs)("div",{className:"tc",children:[Object(h.jsx)(d,{}),Object(h.jsx)(j,{SearchChange:this.onSearchChange}),Object(h.jsx)(O,{children:Object(h.jsx)(x,{children:Object(h.jsx)(b,{robots:r})})})]}):Object(h.jsx)(m,{})}}]),n}(c.Component);a.a.render(Object(h.jsx)(v,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.82abb173.chunk.js.map