"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[995],{2995:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var r=t(9434),o=t(6916),a=function(e){return e.contactsStore.contacts},s=function(e){return e.contactsStore.isLoading},u=function(e){return e.contactsStore.error},c=(0,o.P1)([a,function(e){return e.filterStore.filter}],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),i=t(2791),l=t(3634),d=t(9439),f=t(1686),m=t(1309),h=t(5350),x=t(7438),p=t(7236),b=t(9055),j=t(184),v=function(){var e=(0,i.useState)(""),n=(0,d.Z)(e,2),t=n[0],o=n[1],s=(0,i.useState)(""),u=(0,d.Z)(s,2),c=u[0],v=u[1],k=(0,r.v9)(a),g=(0,r.I0)(),y=(0,m.ff)("pink.500","pink.900"),C=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":o(r);break;case"phone":v(r);break;default:return}};return(0,j.jsxs)(h.NI,{isRequired:!0,as:"form",onSubmit:function(e){e.preventDefault();var n={name:t,number:c};k.some((function(e){return e.name.toLowerCase().trim()===n.name.toLowerCase().trim()}))?f.Notify.failure("".concat(n.name," already exists")):(g((0,l.uK)(n)),console.log(n),o(""),v(""))},mb:4,maxW:"xs",children:[(0,j.jsxs)(x.l,{mb:2,children:["Name:"," "]}),(0,j.jsx)(p.I,{type:"text",name:"name",value:t,onChange:C,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0,mb:2,placeholder:"Andre Tan",size:["sm",null,"sm","md","lg"],focusBorderColor:y}),(0,j.jsxs)(x.l,{mb:2,children:["Phone:"," "]}),(0,j.jsx)(p.I,{type:"tel",name:"phone",value:c,onChange:C,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",required:!0,placeholder:"+380632535566",mb:2,size:["sm",null,"sm","md","lg"],focusBorderColor:y}),(0,j.jsx)(b.z,{type:"submit",variant:"baseStyle",children:"Submit"})]})},k=t(1774),g=function(e){var n=e.contact,t=e.del;return(0,j.jsxs)("li",{children:[n.name,":",(0,j.jsx)("span",{children:n.phone}),(0,j.jsx)("button",{type:"button",onClick:t,children:"Delete"})]})},y=function(){var e=(0,r.v9)(c),n=(0,r.I0)();return(0,j.jsx)("ul",{children:e.map((function(e){return(0,j.jsx)(g,{contact:e,del:function(){return t=e.id,void n((0,l.GK)(t));var t}},e.id)}))})},C=t(502),w=t(9589),S=t(824),z=t(2715),_=function(){var e=(0,r.v9)(a),n=(0,r.v9)(s),t=(0,r.v9)(u),o=(0,r.I0)();return(0,i.useEffect)((function(){o((0,l.yF)())}),[o]),(0,j.jsxs)(C.t,{children:[(0,j.jsx)(w.X,{as:"h1",size:"3xl",textTransform:"uppercase",textAlign:"center",mb:4,children:" Phonebook"}),(0,j.jsx)(v,{}),null!==t&&(0,j.jsx)("p",{children:"error"}),n&&(0,j.jsx)(k.Z,{}),e.length>0?(0,j.jsxs)(S.xu,{children:[(0,j.jsx)(w.X,{as:"h2",size:"2xl",textTransform:"uppercase",textAlign:"center",mb:4,children:"Contacts"}),(0,j.jsx)(y,{})]}):(0,j.jsx)(z.x,{children:"Unfortunately you don't have any contacts in your Phonebook"})]})}}}]);
//# sourceMappingURL=995.7bd73a6d.chunk.js.map