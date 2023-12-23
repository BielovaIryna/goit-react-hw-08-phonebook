"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[482],{6482:function(e,r,l){l.r(r),l.d(r,{default:function(){return m}});var i=l(1309),n=l(5350),a=l(7438),s=l(7236),d=l(9055),o=l(502),t=l(9434),u=l(2032),c=l(184);function m(){var e=(0,t.I0)(),r=(0,i.ff)("pink.500","pink.900");return(0,c.jsx)(o.t,{children:(0,c.jsxs)(n.NI,{onSubmit:function(r){r.preventDefault();var l={name:r.currentTarget.elements.userName.value,email:r.currentTarget.elements.userEmail.value,password:r.currentTarget.elements.userPassword.value};console.log(l),e((0,u.yY)(l))},maxW:"xs",children:[(0,c.jsxs)(a.l,{mb:2,children:["Name:",(0,c.jsx)(s.I,{type:"text",name:"userName",placeholder:"Andre Onana",required:!0,size:["sm",null,"sm","md","lg"],focusBorderColor:r,mb:2})]}),(0,c.jsxs)(a.l,{children:["Mail:",(0,c.jsx)(s.I,{type:"email",name:"userEmail",placeholder:"user@gmail.com",required:!0,size:["sm",null,"sm","md","lg"],focusBorderColor:r,mb:2})]}),(0,c.jsxs)(a.l,{mb:2,children:["Password:",(0,c.jsx)(s.I,{type:"text",name:"userPassword",placeholder:"*******",required:!0,size:["sm",null,"sm","md","lg"],focusBorderColor:r,mb:2})]}),(0,c.jsx)(d.z,{variant:"baseStyle",type:"submit",children:"Sign Up"})]})})}},5350:function(e,r,l){l.d(r,{NI:function(){return N},NJ:function(){return k},e:function(){return g}});var i=l(1413),n=l(5987),a=l(9439),s=l(9886),d=l(4591),o=l(5597),t=l(6516),u=l(2996),c=l(1665),m=l(6992),v=l(2791),p=l(184),f=["id","isRequired","isInvalid","isDisabled","isReadOnly"],h=["getRootProps","htmlProps"],b=(0,s.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),x=(0,a.Z)(b,2),Z=x[0],g=x[1],I=(0,s.k)({strict:!1,name:"FormControlContext"}),y=(0,a.Z)(I,2),q=y[0],k=y[1];var N=(0,o.G)((function(e,r){var l=(0,t.jC)("Form",e),s=function(e){var r=e.id,l=e.isRequired,s=e.isInvalid,o=e.isDisabled,t=e.isReadOnly,u=(0,n.Z)(e,f),c=(0,v.useId)(),p=r||"field-".concat(c),h="".concat(p,"-label"),b="".concat(p,"-feedback"),x="".concat(p,"-helptext"),Z=(0,v.useState)(!1),g=(0,a.Z)(Z,2),I=g[0],y=g[1],q=(0,v.useState)(!1),k=(0,a.Z)(q,2),N=k[0],R=k[1],P=(0,v.useState)(!1),_=(0,a.Z)(P,2),F=_[0],j=_[1],C=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:x},e),{},{ref:(0,d.lq)(r,(function(e){e&&R(!0)}))})}),[x]),B=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:r,"data-focus":(0,m.PB)(F),"data-disabled":(0,m.PB)(o),"data-invalid":(0,m.PB)(s),"data-readonly":(0,m.PB)(t),id:void 0!==e.id?e.id:h,htmlFor:void 0!==e.htmlFor?e.htmlFor:p})}),[p,o,F,s,t,h]),T=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:b},e),{},{ref:(0,d.lq)(r,(function(e){e&&y(!0)})),"aria-live":"polite"})}),[b]),O=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)((0,i.Z)({},e),u),{},{ref:r,role:"group","data-focus":(0,m.PB)(F),"data-disabled":(0,m.PB)(o),"data-invalid":(0,m.PB)(s),"data-readonly":(0,m.PB)(t)})}),[u,o,F,s,t]),S=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!l,isInvalid:!!s,isReadOnly:!!t,isDisabled:!!o,isFocused:!!F,onFocus:function(){return j(!0)},onBlur:function(){return j(!1)},hasFeedbackText:I,setHasFeedbackText:y,hasHelpText:N,setHasHelpText:R,id:p,labelId:h,feedbackId:b,helpTextId:x,htmlProps:u,getHelpTextProps:C,getErrorMessageProps:T,getRootProps:O,getLabelProps:B,getRequiredIndicatorProps:S}}((0,u.Lr)(e)),o=s.getRootProps,b=(s.htmlProps,(0,n.Z)(s,h)),x=(0,m.cx)("chakra-form-control",e.className);return(0,p.jsx)(q,{value:b,children:(0,p.jsx)(Z,{value:l,children:(0,p.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},o({},r)),{},{className:x,__css:l.container}))})})}));N.displayName="FormControl",(0,o.G)((function(e,r){var l=k(),n=g(),a=(0,m.cx)("chakra-form__helper-text",e.className);return(0,p.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},null==l?void 0:l.getHelpTextProps(e,r)),{},{__css:n.helperText,className:a}))})).displayName="FormHelperText"},7438:function(e,r,l){l.d(r,{l:function(){return v}});var i=l(1413),n=l(5987),a=l(5350),s=l(5597),d=l(6516),o=l(2996),t=l(1665),u=l(6992),c=l(184),m=["className","children","requiredIndicator","optionalIndicator"],v=(0,s.G)((function(e,r){var l,s=(0,d.mq)("FormLabel",e),v=(0,o.Lr)(e),f=(v.className,v.children),h=v.requiredIndicator,b=void 0===h?(0,c.jsx)(p,{}):h,x=v.optionalIndicator,Z=void 0===x?null:x,g=(0,n.Z)(v,m),I=(0,a.NJ)(),y=null!=(l=null==I?void 0:I.getLabelProps(g,r))?l:(0,i.Z)({ref:r},g);return(0,c.jsxs)(t.m.label,(0,i.Z)((0,i.Z)({},y),{},{className:(0,u.cx)("chakra-form__label",v.className),__css:(0,i.Z)({display:"block",textAlign:"start"},s),children:[f,(null==I?void 0:I.isRequired)?b:Z]}))}));v.displayName="FormLabel";var p=(0,s.G)((function(e,r){var l=(0,a.NJ)(),n=(0,a.e)();if(!(null==l?void 0:l.isRequired))return null;var s=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(t.m.span,(0,i.Z)((0,i.Z)({},null==l?void 0:l.getRequiredIndicatorProps(e,r)),{},{__css:n.requiredIndicator,className:s}))}));p.displayName="RequiredIndicator"},7236:function(e,r,l){l.d(r,{I:function(){return h}});var i=l(1413),n=l(5987),a=l(5350),s=l(6992),d=["isDisabled","isInvalid","isReadOnly","isRequired"],o=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function t(e){var r=function(e){var r,l,d,t=(0,a.NJ)(),u=e.id,c=e.disabled,m=e.readOnly,v=e.required,p=e.isRequired,f=e.isInvalid,h=e.isReadOnly,b=e.isDisabled,x=e.onFocus,Z=e.onBlur,g=(0,n.Z)(e,o),I=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==t?void 0:t.hasFeedbackText)&&(null==t?void 0:t.isInvalid)&&I.push(t.feedbackId);(null==t?void 0:t.hasHelpText)&&I.push(t.helpTextId);return(0,i.Z)((0,i.Z)({},g),{},{"aria-describedby":I.join(" ")||void 0,id:null!=u?u:null==t?void 0:t.id,isDisabled:null!=(r=null!=c?c:b)?r:null==t?void 0:t.isDisabled,isReadOnly:null!=(l=null!=m?m:h)?l:null==t?void 0:t.isReadOnly,isRequired:null!=(d=null!=v?v:p)?d:null==t?void 0:t.isRequired,isInvalid:null!=f?f:null==t?void 0:t.isInvalid,onFocus:(0,s.v0)(null==t?void 0:t.onFocus,x),onBlur:(0,s.v0)(null==t?void 0:t.onBlur,Z)})}(e),l=r.isDisabled,t=r.isInvalid,u=r.isReadOnly,c=r.isRequired,m=(0,n.Z)(r,d);return(0,i.Z)((0,i.Z)({},m),{},{disabled:l,readOnly:u,required:c,"aria-invalid":(0,s.Qm)(t),"aria-required":(0,s.Qm)(c),"aria-readonly":(0,s.Qm)(u)})}var u=l(5597),c=l(6516),m=l(2996),v=l(1665),p=l(184),f=["htmlSize"],h=(0,u.G)((function(e,r){var l=e.htmlSize,a=(0,n.Z)(e,f),d=(0,c.jC)("Input",a),o=t((0,m.Lr)(a)),u=(0,s.cx)("chakra-input",e.className);return(0,p.jsx)(v.m.input,(0,i.Z)((0,i.Z)({size:l},o),{},{__css:d.field,ref:r,className:u}))}));h.displayName="Input",h.id="Input"}}]);
//# sourceMappingURL=482.1d37dd3a.chunk.js.map