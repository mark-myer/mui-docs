"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59227],{357226:function(e,r,o){o.d(r,{L:function(){return i}}),o(470079);var t=o(568179),n=o(252191),a=o(735250);function i(e){var r=e.children,o=e.open,i=e.defaultOpen,l=e.onOpenChange,s=(0,n.x)({defaultOpen:i,onOpenChange:l,open:o}).contextValue;return(0,a.jsx)(t.D.Provider,{value:s,children:r})}},252191:function(e,r,o){o.d(r,{x:function(){return s}});var t=o(863363),n=o(470079),a=o(9366),i=o(85463);function l(e,r){switch(r.type){case i.Q.blur:case i.Q.escapeKeyDown:return{open:!1,changeReason:r.event};case i.Q.toggle:return{open:!e.open,changeReason:r.event};case i.Q.open:return{open:!0,changeReason:r.event};case i.Q.close:return{open:!1,changeReason:r.event};default:throw Error("Unhandled action")}}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.defaultOpen,o=e.onOpenChange,s=e.open,c=e.componentName,d=n.useState(""),u=(0,t.Z)(d,2),v=u[0],p=u[1],f=n.useState(null),g=(0,t.Z)(f,2),m=g[0],Z=g[1],h=n.useRef(null),z=n.useCallback(function(e,r,t,n){"open"===r&&(null==o||o(e,t)),h.current=n},[o]),S=n.useMemo(function(){return void 0!==s?{open:s}:{}},[s]),x=(0,a.r)({controlledProps:S,initialState:r?{open:!0,changeReason:null}:{open:!1,changeReason:null},onStateChange:z,reducer:l,componentName:void 0===c?"useDropdown":c}),w=(0,t.Z)(x,2),y=w[0],P=w[1];return n.useEffect(function(){y.open||null===h.current||h.current===i.Q.blur||null==m||m.focus()},[y.open,m]),{contextValue:{state:y,dispatch:P,popupId:v,registerPopup:p,registerTrigger:Z,triggerElement:m},open:y.open}}},493652:function(e,r,o){o.d(r,{z:function(){return u}});var t=o(778521),n=o(470079),a=o(503945),i=o(568179),l=o(85463),s=o(460589),c=o(947569),d=o(202294);function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.disabled,o=e.focusableWhenDisabled,u=e.rootRef,v=n.useContext(i.D);if(null===v)throw Error("useMenuButton: no menu context available.");var p=v.state,f=v.dispatch,g=v.registerTrigger,m=v.popupId,Z=(0,s.U)({disabled:void 0!==r&&r,focusableWhenDisabled:o,rootRef:u}),h=Z.getRootProps,z=Z.rootRef,S=Z.active,x=(0,a.Z)(z,g),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{onClick:function(r){var o;null===(o=e.onClick)||void 0===o||o.call(e,r),r.defaultMuiPrevented||f({type:l.Q.toggle,event:r})},onKeyDown:function(r){var o;null===(o=e.onKeyDown)||void 0===o||o.call(e,r),r.defaultMuiPrevented||"ArrowDown"!==r.key&&"ArrowUp"!==r.key||(r.preventDefault(),f({type:l.Q.open,event:r}))}}};return{active:S,getRootProps:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=(0,d._)(e),o=(0,c.f)(w,h);return(0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)({"aria-haspopup":"menu","aria-expanded":p.open,"aria-controls":m},e),r),o(r)),{},{tabIndex:0,ref:x})},open:p.open,rootRef:x}}},844813:function(e,r,o){o.d(r,{Z:function(){return w}});var t=o(577903),n=o(863363),a=o(778521),i=o(470079),l=o(306029),s=o(538941),c=o(233684),d=o(718428),u=o(446759),v=o(82106),p=o(735250),f=(0,v.Z)((0,p.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),g=o(572472),m=o(195738),Z=["alt","color","size","variant","src","srcSet","children","component","slots","slotProps"],h=function(e){var r=e.size,o=e.variant,t=e.color,n=e.src,a=e.srcSet,i={root:["root",o&&"variant".concat((0,s.Z)(o)),t&&"color".concat((0,s.Z)(t)),r&&"size".concat((0,s.Z)(r))],img:[(n||a)&&"img"],fallback:["fallback"]};return(0,l.Z)(i,g.$,{})},z=(0,u.Z)("div",{name:"JoyAvatar",slot:"Root",overridesResolver:function(e,r){return r.root}})(function(e){var r,o=e.theme,t=e.ownerState;return(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({"--Icon-color":"neutral"!==t.color||"solid"===t.variant?"currentColor":o.vars.palette.text.icon},o.typography["title-".concat(t.size)]),"sm"===t.size&&{width:"var(--Avatar-size, 2rem)",height:"var(--Avatar-size, 2rem)",fontSize:"calc(var(--Avatar-size, 2rem) * 0.4375)"}),"md"===t.size&&{width:"var(--Avatar-size, 2.5rem)",height:"var(--Avatar-size, 2.5rem)",fontSize:"calc(var(--Avatar-size, 2.5rem) * 0.4)"}),"lg"===t.size&&{width:"var(--Avatar-size, 3rem)",height:"var(--Avatar-size, 3rem)",fontSize:"calc(var(--Avatar-size, 3rem) * 0.375)"}),{},{marginInlineStart:"var(--Avatar-marginInlineStart)",boxShadow:"var(--Avatar-ring)",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,lineHeight:1,overflow:"hidden",borderRadius:"var(--Avatar-radius, 50%)",userSelect:"none"},null===(r=o.variants[t.variant])||void 0===r?void 0:r[t.color])}),S=(0,u.Z)("img",{name:"JoyAvatar",slot:"Img",overridesResolver:function(e,r){return r.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),x=(0,u.Z)(f,{name:"JoyAvatar",slot:"Fallback",overridesResolver:function(e,r){return r.fallback}})({width:"64%",height:"64%"}),w=i.forwardRef(function(e,r){var o,l,s,u,v,f,g,w,y,P=(0,c.Z)({props:e,name:"JoyAvatar"}),b=i.useContext(m.a),A=P.alt,D=P.color,R=P.size,C=P.variant,I=P.src,M=P.srcSet,k=P.children,N=P.component,j=P.slots,B=P.slotProps,J=(0,t.Z)(P,Z),F=e.variant||(null==b?void 0:b.variant)||(void 0===C?"soft":C),O=e.color||(null==b?void 0:b.color)||(void 0===D?"neutral":D),T=e.size||(null==b?void 0:b.size)||(void 0===R?"md":R),G=null,E=(0,a.Z)((0,a.Z)({},P),{},{color:O,size:T,variant:F,grouped:!!b}),Q=h(E),W=(0,a.Z)((0,a.Z)({},J),{},{component:N,slots:void 0===j?{}:j,slotProps:void 0===B?{}:B}),L=(0,d.Z)("root",{ref:r,className:Q.root,elementType:z,externalForwardedProps:W,ownerState:E}),_=(0,n.Z)(L,2),K=_[0],U=_[1],V=(0,d.Z)("img",{additionalProps:{alt:A,src:I,srcSet:M},className:Q.img,elementType:S,externalForwardedProps:W,ownerState:E}),$=(0,n.Z)(V,2),H=$[0],X=$[1],q=(0,d.Z)("fallback",{className:Q.fallback,elementType:x,externalForwardedProps:W,ownerState:E}),Y=(0,n.Z)(q,2),ee=Y[0],er=Y[1],eo=(l=(o=(0,a.Z)((0,a.Z)({},X),{},{src:I,srcSet:M})).crossOrigin,s=o.referrerPolicy,u=o.src,v=o.srcSet,f=i.useState(!1),w=(g=(0,n.Z)(f,2))[0],y=g[1],i.useEffect(function(){if(u||v){y(!1);var e=!0,r=new Image;return r.onload=function(){e&&y("loaded")},r.onerror=function(){e&&y("error")},r.crossOrigin=l,r.referrerPolicy=s,u&&(r.src=u),v&&(r.srcset=v),function(){e=!1}}},[l,s,u,v]),w);return G=(I||M)&&"error"!==eo?(0,p.jsx)(H,(0,a.Z)({},X)):null!=k?k:A?A[0]:(0,p.jsx)(ee,(0,a.Z)({},er)),(0,p.jsx)(K,(0,a.Z)((0,a.Z)({},U),{},{children:G}))})},572472:function(e,r,o){o.d(r,{$:function(){return n}});var t=o(255551);function n(e){return(0,t.d6)("MuiAvatar",e)}var a=(0,t.sI)("MuiAvatar",["root","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","fallback","sizeSm","sizeMd","sizeLg","img","variantOutlined","variantSoft","variantSolid"]);r.Z=a},195738:function(e,r,o){o.d(r,{a:function(){return g}});var t=o(863363),n=o(577903),a=o(778521),i=o(470079),l=o(653048),s=o(306029),c=o(233684),d=o(446759),u=o(199933),v=o(718428),p=o(735250),f=["className","color","component","size","variant","children","slots","slotProps"],g=i.createContext(void 0),m=(0,d.Z)("div",{name:"JoyAvatarGroup",slot:"Root",overridesResolver:function(e,r){return r.root}})(function(e){var r=e.ownerState,o=e.theme;return(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},"sm"===r.size&&{"--AvatarGroup-gap":"-0.375rem","--Avatar-ringSize":"2px"}),"md"===r.size&&{"--AvatarGroup-gap":"-0.5rem","--Avatar-ringSize":"2px"}),"lg"===r.size&&{"--AvatarGroup-gap":"-0.625rem","--Avatar-ringSize":"4px"}),{},{"--Avatar-ring":"0 0 0 var(--Avatar-ringSize) var(--Avatar-ringColor, ".concat(o.vars.palette.background.surface,")"),"--Avatar-marginInlineStart":"var(--AvatarGroup-gap)",display:"flex",marginInlineStart:"calc(-1 * var(--AvatarGroup-gap))"})}),Z=i.forwardRef(function(e,r){var o=(0,c.Z)({props:e,name:"JoyAvatarGroup"}),d=o.className,Z=o.color,h=o.component,z=void 0===h?"div":h,S=o.size,x=void 0===S?"md":S,w=o.variant,y=o.children,P=o.slots,b=o.slotProps,A=(0,n.Z)(o,f),D=i.useMemo(function(){return(0,a.Z)((0,a.Z)({},o),{},{color:Z,component:z,size:x,variant:w})},[Z,z,o,x,w]),R=(0,s.Z)({root:["root"]},u.m,{}),C=(0,v.Z)("root",{ref:r,className:(0,l.default)(R.root,d),elementType:m,externalForwardedProps:(0,a.Z)((0,a.Z)({},A),{},{component:z,slots:void 0===P?{}:P,slotProps:void 0===b?{}:b}),ownerState:D}),I=(0,t.Z)(C,2),M=I[0],k=I[1];return(0,p.jsx)(g.Provider,{value:D,children:(0,p.jsx)(M,(0,a.Z)((0,a.Z)({},k),{},{children:y}))})});r.Z=Z},199933:function(e,r,o){o.d(r,{m:function(){return n}});var t=o(255551);function n(e){return(0,t.d6)("MuiAvatarGroup",e)}var a=(0,t.sI)("MuiAvatarGroup",["root"]);r.Z=a},264126:function(e,r,o){var t=o(863363),n=o(577903),a=o(778521),i=o(470079),l=o(493652),s=o(306029),c=o(538941),d=o(445939),u=o(233684),v=o(718428),p=o(111404),f=o(483126),g=o(446759),m=o(850776),Z=o(735250),h=["children","color","component","disabled","endDecorator","loading","loadingPosition","loadingIndicator","size","slotProps","slots","startDecorator","variant"],z=function(e){var r=e.color,o=e.disabled,t=e.fullWidth,n=e.size,a=e.variant,i=e.loading,l={root:["root",o&&"disabled",t&&"fullWidth",a&&"variant".concat((0,c.Z)(a)),r&&"color".concat((0,c.Z)(r)),n&&"size".concat((0,c.Z)(n)),i&&"loading"],startDecorator:["startDecorator"],endDecorator:["endDecorator"],loadingIndicatorCenter:["loadingIndicatorCenter"]};return(0,s.Z)(l,d.l,{})},S=(0,g.Z)("button",{name:"JoyMenuButton",slot:"Root",overridesResolver:function(e,r){return r.root}})(f.f),x=(0,g.Z)("span",{name:"JoyMenuButton",slot:"StartDecorator",overridesResolver:function(e,r){return r.startDecorator}})({"--Icon-margin":"0 0 0 calc(var(--Button-gap) / -2)","--CircularProgress-margin":"0 0 0 calc(var(--Button-gap) / -2)",display:"inherit",marginRight:"var(--Button-gap)"}),w=(0,g.Z)("span",{name:"JoyMenuButton",slot:"EndDecorator",overridesResolver:function(e,r){return r.endDecorator}})({"--Icon-margin":"0 calc(var(--Button-gap) / -2) 0 0","--CircularProgress-margin":"0 calc(var(--Button-gap) / -2) 0 0",display:"inherit",marginLeft:"var(--Button-gap)"}),y=(0,g.Z)("span",{name:"JoyMenuButton",slot:"LoadingCenter",overridesResolver:function(e,r){return r.loadingIndicatorCenter}})(function(e){var r,o,t,n,i=e.theme,l=e.ownerState;return(0,a.Z)({display:"inherit",position:"absolute",left:"50%",transform:"translateX(-50%)",color:null===(r=i.variants[l.variant])||void 0===r?void 0:null===(o=r[l.color])||void 0===o?void 0:o.color},l.disabled&&{color:null===(t=i.variants["".concat(l.variant,"Disabled")])||void 0===t?void 0:null===(n=t[l.color])||void 0===n?void 0:n.color})}),P=i.forwardRef(function(e,r){var o,s=(0,u.Z)({props:e,name:"JoyMenuButton"}),c=s.children,d=s.color,f=void 0===d?"neutral":d,g=s.component,P=s.disabled,b=s.endDecorator,A=s.loading,D=void 0!==A&&A,R=s.loadingPosition,C=void 0===R?"center":R,I=s.loadingIndicator,M=s.size,k=s.slotProps,N=s.slots,j=s.startDecorator,B=s.variant,J=(0,n.Z)(s,h),F=i.useContext(m.Z),O=e.variant||F.variant||(void 0===B?"outlined":B),T=e.size||F.size||(void 0===M?"md":M),G=null!==(o=e.disabled)&&void 0!==o?o:F.disabled||void 0!==P&&P||D,E=(0,l.z)({rootRef:r,disabled:G}),Q=E.getRootProps,W=E.open,L=E.active,_=null!=I?I:(0,Z.jsx)(p.Z,{color:f,thickness:{sm:2,md:3,lg:4}[T]||3}),K=(0,a.Z)((0,a.Z)({},s),{},{active:L,color:f,disabled:G,open:W,size:T,variant:O}),U=z(K),V=(0,a.Z)((0,a.Z)({},J),{},{component:g,slots:void 0===N?{}:N,slotProps:void 0===k?{}:k}),$=(0,v.Z)("root",{elementType:S,getSlotProps:Q,externalForwardedProps:V,ref:r,ownerState:K,className:U.root}),H=(0,t.Z)($,2),X=H[0],q=H[1],Y=(0,v.Z)("startDecorator",{className:U.startDecorator,elementType:x,externalForwardedProps:V,ownerState:K}),ee=(0,t.Z)(Y,2),er=ee[0],eo=ee[1],et=(0,v.Z)("endDecorator",{className:U.endDecorator,elementType:w,externalForwardedProps:V,ownerState:K}),en=(0,t.Z)(et,2),ea=en[0],ei=en[1],el=(0,v.Z)("loadingIndicatorCenter",{className:U.loadingIndicatorCenter,elementType:y,externalForwardedProps:V,ownerState:K}),es=(0,t.Z)(el,2),ec=es[0],ed=es[1];return(0,Z.jsxs)(X,(0,a.Z)((0,a.Z)({},q),{},{children:[(j||D&&"start"===C)&&(0,Z.jsx)(er,(0,a.Z)((0,a.Z)({},eo),{},{children:D&&"start"===C?_:j})),c,D&&"center"===C&&(0,Z.jsx)(ec,(0,a.Z)((0,a.Z)({},ed),{},{children:_})),(b||D&&"end"===C)&&(0,Z.jsx)(ea,(0,a.Z)((0,a.Z)({},ei),{},{children:D&&"end"===C?_:b}))]}))});r.Z=P},445939:function(e,r,o){o.d(r,{l:function(){return n}});var t=o(255551);function n(e){return(0,t.d6)("MuiMenuButton",e)}var a=(0,t.sI)("MuiMenuButton",["root","colorPrimary","colorNeutral","colorDanger","colorInfo","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid","disabled","sizeSm","sizeMd","sizeLg","fullWidth","startDecorator","endDecorator","loading","loadingIndicatorCenter"]);r.Z=a}}]);