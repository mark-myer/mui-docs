(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[22362],{502501:function(e,t,r){"use strict";r.d(t,{Z:function(){return j}});var n=r(577903),a=r(863363),i=r(778521),o=r(470079),s=r(653048),c=r(306029),l=r(360731),d=r(502894),u=r(632820),p=r(735250),f=(0,u.Z)((0,p.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),v=r(738633),m=r(639560),h=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],x=(0,l.Uu)("MuiAvatar"),g=function(e){var t=e.classes,r=e.variant,n=e.colorDefault;return(0,c.Z)({root:["root",r,n&&"colorDefault"],img:["img"],fallback:["fallback"]},v.$,t)},Z=(0,d.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})(function(e){var t=e.theme;return{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:(0,i.Z)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:(0,i.Z)({backgroundColor:t.palette.grey[400]},t.applyStyles("dark",{backgroundColor:t.palette.grey[600]})))}]}}),b=(0,d.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),y=(0,d.ZP)(f,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,t){return t.fallback}})({width:"75%",height:"75%"}),j=o.forwardRef(function(e,t){var r,c,l,d,u,f,v,j,w,M=x({props:e,name:"MuiAvatar"}),S=M.alt,P=M.children,k=M.className,z=M.component,T=void 0===z?"div":z,I=M.slots,C=M.slotProps,O=M.imgProps,R=M.sizes,N=M.src,_=M.srcSet,L=M.variant,H=(0,n.Z)(M,h),W=null,F=(c=(r=(0,i.Z)((0,i.Z)({},O),{},{src:N,srcSet:_})).crossOrigin,l=r.referrerPolicy,d=r.src,u=r.srcSet,f=o.useState(!1),j=(v=(0,a.Z)(f,2))[0],w=v[1],o.useEffect(function(){if(d||u){w(!1);var e=!0,t=new Image;return t.onload=function(){e&&w("loaded")},t.onerror=function(){e&&w("error")},t.crossOrigin=c,t.referrerPolicy=l,t.src=d,u&&(t.srcset=u),function(){e=!1}}},[c,l,d,u]),j),V=N||_,G=V&&"error"!==F,A=(0,i.Z)((0,i.Z)({},M),{},{colorDefault:!G,component:T,variant:void 0===L?"circular":L});delete A.ownerState;var D=g(A),B=(0,m.Z)("img",{className:D.img,elementType:b,externalForwardedProps:{slots:void 0===I?{}:I,slotProps:{img:(0,i.Z)((0,i.Z)({},O),(void 0===C?{}:C).img)}},additionalProps:{alt:S,src:N,srcSet:_,sizes:R},ownerState:A}),E=(0,a.Z)(B,2),q=E[0],U=E[1];return W=G?(0,p.jsx)(q,(0,i.Z)({},U)):P||0===P?P:V&&S?S[0]:(0,p.jsx)(y,{ownerState:A,className:D.fallback}),(0,p.jsx)(Z,(0,i.Z)((0,i.Z)({as:T,className:(0,s.default)(D.root,k),ref:t},H),{},{ownerState:A,children:W}))})},738633:function(e,t,r){"use strict";r.d(t,{$:function(){return i}});var n=r(344443),a=r(92358);function i(e){return(0,a.ZP)("MuiAvatar",e)}var o=(0,n.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);t.Z=o},823462:function(e,t,r){"use strict";var n,a=r(577903),i=r(234046),o=r(778521),s=r(470079),c=r(653048),l=r(306029),d=r(46110),u=r(489121),p=r(360731),f=r(502894),v=r(532785),m=r(307192),h=r(735250),x=["children","className","component","disabled","error","filled","focused","margin","required","variant"],g=(0,p.Uu)("MuiFormHelperText"),Z=function(e){var t=e.classes,r=e.contained,n=e.size,a=e.disabled,i=e.error,o=e.filled,s=e.focused,c=e.required,d={root:["root",a&&"disabled",i&&"error",n&&"size".concat((0,v.Z)(n)),r&&"contained",s&&"focused",o&&"filled",c&&"required"]};return(0,l.Z)(d,m.E,t)},b=(0,f.ZP)("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.size&&t["size".concat((0,v.Z)(r.size))],r.contained&&t.contained,r.filled&&t.filled]}})(function(e){var t,r=e.theme;return(0,o.Z)((0,o.Z)({color:(r.vars||r).palette.text.secondary},r.typography.caption),{},(t={textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0},(0,i.Z)(t,"&.".concat(m.Z.disabled),{color:(r.vars||r).palette.text.disabled}),(0,i.Z)(t,"&.".concat(m.Z.error),{color:(r.vars||r).palette.error.main}),(0,i.Z)(t,"variants",[{props:{size:"small"},style:{marginTop:4}},{props:function(e){return e.ownerState.contained},style:{marginLeft:14,marginRight:14}}]),t))}),y=s.forwardRef(function(e,t){var r=g({props:e,name:"MuiFormHelperText"}),i=r.children,s=r.className,l=r.component,p=void 0===l?"p":l,f=(r.disabled,r.error,r.filled,r.focused,r.margin,r.required,r.variant,(0,a.Z)(r,x)),v=(0,u.Z)(),m=(0,d.Z)({props:r,muiFormControl:v,states:["variant","size","disabled","error","filled","focused","required"]}),y=(0,o.Z)((0,o.Z)({},r),{},{component:p,contained:"filled"===m.variant||"outlined"===m.variant,variant:m.variant,size:m.size,disabled:m.disabled,error:m.error,filled:m.filled,focused:m.focused,required:m.required});delete y.ownerState;var j=Z(y);return(0,h.jsx)(b,(0,o.Z)((0,o.Z)({as:p,className:(0,c.default)(j.root,s),ref:t},f),{},{ownerState:y,children:" "===i?n||(n=(0,h.jsx)("span",{className:"notranslate",children:"​"})):i}))});t.Z=y},307192:function(e,t,r){"use strict";r.d(t,{E:function(){return i}});var n=r(344443),a=r(92358);function i(e){return(0,a.ZP)("MuiFormHelperText",e)}var o=(0,n.Z)("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]);t.Z=o},818346:function(e,t,r){"use strict";r.d(t,{ZP:function(){return C}});var n=r(577903),a=r(614030),i=r(234046),o=r(778521),s=r(393385),c=r.n(s),l=r(410231),d=r.n(l),u=r(758869),p=r.n(u),f=r(436578),v=r.n(f),m=r(470079),h=r(653048),x=r(476821),g=r(213591),Z=r(306029),b=r(502894),y=r(123280),j=r(17911),w=m.createContext(),M=r(748032),S=r(735250),P=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function k(e){var t=c()(e);return d()(t)?e:"".concat(t).concat(String(e).replace(String(t),"")||"px")}function z(e){var t=e.breakpoints,r=e.values,n="";v()(r).forEach(function(e){""===n&&0!==r[e]&&(n=e)});var a=v()(t).sort(function(e,r){return t[e]-t[r]});return a.slice(0,a.indexOf(n))}var T=(0,b.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState,n=r.container,i=r.direction,o=r.item,s=r.spacing,c=r.wrap,l=r.zeroMinWidth,u=r.breakpoints,p=[];n&&(p=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||e<=0)return[];if("string"==typeof e&&!d()(Number(e))||"number"==typeof e)return[r["spacing-xs-".concat(String(e))]];var n=[];return t.forEach(function(t){var a=e[t];Number(a)>0&&n.push(r["spacing-".concat(t,"-").concat(String(a))])}),n}(s,u,t));var f=[];return u.forEach(function(e){var n=r[e];n&&f.push(t["grid-".concat(e,"-").concat(String(n))])}),[t.root,n&&t.container,o&&t.item,l&&t.zeroMinWidth].concat((0,a.Z)(p),["row"!==i&&t["direction-xs-".concat(String(i))],"wrap"!==c&&t["wrap-xs-".concat(String(c))]],f)}})(function(e){var t=e.ownerState;return(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"}),t.item&&{margin:0}),t.zeroMinWidth&&{minWidth:0}),"wrap"!==t.wrap&&{flexWrap:t.wrap})},function(e){var t=e.theme,r=e.ownerState,n=(0,x.P$)({values:r.direction,breakpoints:t.breakpoints.values});return(0,x.k9)({theme:t},n,function(e){var t={flexDirection:e};return 0===e.indexOf("column")&&(t["& > .".concat(M.Z.item)]={maxWidth:"none"}),t})},function(e){var t=e.theme,r=e.ownerState,n=r.container,a=r.rowSpacing,o={};if(n&&0!==a){var s,c=(0,x.P$)({values:a,breakpoints:t.breakpoints.values});"object"==typeof c&&(s=z({breakpoints:t.breakpoints.values,values:c})),o=(0,x.k9)({theme:t},c,function(e,r){var n,a=t.spacing(e);return"0px"!==a?(0,i.Z)({marginTop:"-".concat(k(a))},"& > .".concat(M.Z.item),{paddingTop:k(a)}):null!==(n=s)&&void 0!==n&&n.includes(r)?{}:(0,i.Z)({marginTop:0},"& > .".concat(M.Z.item),{paddingTop:0})})}return o},function(e){var t=e.theme,r=e.ownerState,n=r.container,a=r.columnSpacing,o={};if(n&&0!==a){var s,c=(0,x.P$)({values:a,breakpoints:t.breakpoints.values});"object"==typeof c&&(s=z({breakpoints:t.breakpoints.values,values:c})),o=(0,x.k9)({theme:t},c,function(e,r){var n,a=t.spacing(e);return"0px"!==a?(0,i.Z)({width:"calc(100% + ".concat(k(a),")"),marginLeft:"-".concat(k(a))},"& > .".concat(M.Z.item),{paddingLeft:k(a)}):null!==(n=s)&&void 0!==n&&n.includes(r)?{}:(0,i.Z)({width:"100%",marginLeft:0},"& > .".concat(M.Z.item),{paddingLeft:0})})}return o},function(e){var t,r=e.theme,n=e.ownerState;return r.breakpoints.keys.reduce(function(e,a){var i={};if(n[a]&&(t=n[a]),!t)return e;if(!0===t)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var s=(0,x.P$)({values:n.columns,breakpoints:r.breakpoints.values}),c="object"==typeof s?s[a]:s;if(null==c)return e;var l="".concat(Math.round(t/c*1e8)/1e6,"%"),d={};if(n.container&&n.item&&0!==n.columnSpacing){var u=r.spacing(n.columnSpacing);if("0px"!==u){var f="calc(".concat(l," + ").concat(k(u),")");d={flexBasis:f,maxWidth:f}}}i=(0,o.Z)({flexBasis:l,flexGrow:0,maxWidth:l},d)}return 0===r.breakpoints.values[a]?p()(e,i):e[r.breakpoints.up(a)]=i,e},{})}),I=function(e){var t=e.classes,r=e.container,n=e.direction,i=e.item,o=e.spacing,s=e.wrap,c=e.zeroMinWidth,l=e.breakpoints,u=[];r&&(u=function(e,t){if(!e||e<=0)return[];if("string"==typeof e&&!d()(Number(e))||"number"==typeof e)return["spacing-xs-".concat(String(e))];var r=[];return t.forEach(function(t){var n=e[t];if(Number(n)>0){var a="spacing-".concat(t,"-").concat(String(n));r.push(a)}}),r}(o,l));var p=[];l.forEach(function(t){var r=e[t];r&&p.push("grid-".concat(t,"-").concat(String(r)))});var f={root:["root",r&&"container",i&&"item",c&&"zeroMinWidth"].concat((0,a.Z)(u),["row"!==n&&"direction-xs-".concat(String(n)),"wrap"!==s&&"wrap-xs-".concat(String(s))],p)};return(0,Z.Z)(f,M.H,t)},C=m.forwardRef(function(e,t){var r=(0,y.Z)({props:e,name:"MuiGrid"}),a=(0,j.Z)().breakpoints,i=(0,g.Z)(r),s=i.className,c=i.columns,l=i.columnSpacing,d=i.component,u=i.container,p=void 0!==u&&u,f=i.direction,v=i.item,x=i.rowSpacing,Z=i.spacing,b=void 0===Z?0:Z,M=i.wrap,k=i.zeroMinWidth,z=(0,n.Z)(i,P),C=m.useContext(w),O=p?c||12:C,R={},N=(0,o.Z)({},z);a.keys.forEach(function(e){null!=z[e]&&(R[e]=z[e],delete N[e])});var _=(0,o.Z)((0,o.Z)((0,o.Z)({},i),{},{columns:O,container:p,direction:void 0===f?"row":f,item:void 0!==v&&v,rowSpacing:x||b,columnSpacing:l||b,wrap:void 0===M?"wrap":M,zeroMinWidth:void 0!==k&&k,spacing:b},R),{},{breakpoints:a.keys}),L=I(_);return(0,S.jsx)(w.Provider,{value:O,children:(0,S.jsx)(T,(0,o.Z)({ownerState:_,className:(0,h.default)(L.root,s),as:void 0===d?"div":d,ref:t},N))})})},748032:function(e,t,r){"use strict";r.d(t,{H:function(){return o}});var n=r(614030),a=r(344443),i=r(92358);function o(e){return(0,i.ZP)("MuiGrid",e)}var s=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],c=(0,a.Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,n.Z)([0,1,2,3,4,5,6,7,8,9,10].map(function(e){return"spacing-xs-".concat(e)})),(0,n.Z)(["column-reverse","column","row-reverse","row"].map(function(e){return"direction-xs-".concat(e)})),(0,n.Z)(["nowrap","wrap-reverse","wrap"].map(function(e){return"wrap-xs-".concat(e)})),(0,n.Z)(s.map(function(e){return"grid-xs-".concat(e)})),(0,n.Z)(s.map(function(e){return"grid-sm-".concat(e)})),(0,n.Z)(s.map(function(e){return"grid-md-".concat(e)})),(0,n.Z)(s.map(function(e){return"grid-lg-".concat(e)})),(0,n.Z)(s.map(function(e){return"grid-xl-".concat(e)}))));t.Z=c},799199:function(e,t,r){"use strict";var n=r(577903),a=r(234046),i=r(778521),o=r(470079),s=r(653048),c=r(306029),l=r(621234),d=r(360731),u=r(502894),p=r(62188),f=r(214549),v=r(514933),m=r(668244),h=r(101285),x=r(961909),g=r(735250),Z=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],b=(0,d.Uu)("MuiListItemButton"),y=function(e){var t=e.alignItems,r=e.classes,n=e.dense,a=e.disabled,o=e.disableGutters,s=e.divider,l=e.selected,d=(0,c.Z)({root:["root",n&&"dense",!o&&"gutters",s&&"divider",a&&"disabled","flex-start"===t&&"alignItemsFlexStart",l&&"selected"]},x.t,r);return(0,i.Z)((0,i.Z)({},r),d)},j=(0,u.ZP)(f.Z,{shouldForwardProp:function(e){return(0,p.Z)(e)||"classes"===e},name:"MuiListItemButton",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.dense&&t.dense,"flex-start"===r.alignItems&&t.alignItemsFlexStart,r.divider&&t.divider,!r.disableGutters&&t.gutters]}})(function(e){var t,r=e.theme;return t={display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:r.transitions.create("background-color",{duration:r.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(r.vars||r).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,a.Z)(t,"&.".concat(x.Z.selected),(0,a.Z)({backgroundColor:r.vars?"rgba(".concat(r.vars.palette.primary.mainChannel," / ").concat(r.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity)},"&.".concat(x.Z.focusVisible),{backgroundColor:r.vars?"rgba(".concat(r.vars.palette.primary.mainChannel," / calc(").concat(r.vars.palette.action.selectedOpacity," + ").concat(r.vars.palette.action.focusOpacity,"))"):(0,l.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity+r.palette.action.focusOpacity)})),(0,a.Z)(t,"&.".concat(x.Z.selected,":hover"),{backgroundColor:r.vars?"rgba(".concat(r.vars.palette.primary.mainChannel," / calc(").concat(r.vars.palette.action.selectedOpacity," + ").concat(r.vars.palette.action.hoverOpacity,"))"):(0,l.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity+r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:r.vars?"rgba(".concat(r.vars.palette.primary.mainChannel," / ").concat(r.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity)}}),(0,a.Z)(t,"&.".concat(x.Z.focusVisible),{backgroundColor:(r.vars||r).palette.action.focus}),(0,a.Z)(t,"&.".concat(x.Z.disabled),{opacity:(r.vars||r).palette.action.disabledOpacity}),(0,a.Z)(t,"variants",[{props:function(e){return e.ownerState.divider},style:{borderBottom:"1px solid ".concat((r.vars||r).palette.divider),backgroundClip:"padding-box"}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:function(e){return!e.ownerState.disableGutters},style:{paddingLeft:16,paddingRight:16}},{props:function(e){return e.ownerState.dense},style:{paddingTop:4,paddingBottom:4}}]),t}),w=o.forwardRef(function(e,t){var r=b({props:e,name:"MuiListItemButton"}),a=r.alignItems,c=void 0===a?"center":a,l=r.autoFocus,d=void 0!==l&&l,u=r.component,p=void 0===u?"div":u,f=r.children,x=r.dense,w=void 0!==x&&x,M=r.disableGutters,S=void 0!==M&&M,P=r.divider,k=r.focusVisibleClassName,z=r.selected,T=r.className,I=(0,n.Z)(r,Z),C=o.useContext(h.Z),O=o.useMemo(function(){return{dense:w||C.dense||!1,alignItems:c,disableGutters:S}},[c,C.dense,w,S]),R=o.useRef(null);(0,v.Z)(function(){d&&R.current&&R.current.focus()},[d]);var N=(0,i.Z)((0,i.Z)({},r),{},{alignItems:c,dense:O.dense,disableGutters:S,divider:void 0!==P&&P,selected:void 0!==z&&z}),_=y(N),L=(0,m.Z)(R,t);return(0,g.jsx)(h.Z.Provider,{value:O,children:(0,g.jsx)(j,(0,i.Z)((0,i.Z)({ref:L,href:I.href||I.to,component:(I.href||I.to)&&"div"===p?"button":p,focusVisibleClassName:(0,s.default)(_.focusVisible,k),ownerState:N,className:(0,s.default)(_.root,T)},I),{},{classes:_,children:f}))})});t.Z=w},863426:function(e,t,r){"use strict";var n=r(778521),a=r(577903),i=r(470079),o=r(653048),s=r(306029),c=r(360731),l=r(502894),d=r(500088),u=r(101285),p=r(735250),f=["className"],v=(0,c.Uu)("MuiListItemIcon"),m=function(e){var t=e.alignItems,r=e.classes;return(0,s.Z)({root:["root","flex-start"===t&&"alignItemsFlexStart"]},d.f,r)},h=(0,l.ZP)("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,"flex-start"===r.alignItems&&t.alignItemsFlexStart]}})(function(e){var t=e.theme;return{minWidth:56,color:(t.vars||t).palette.action.active,flexShrink:0,display:"inline-flex",variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}}),x=i.forwardRef(function(e,t){var r=v({props:e,name:"MuiListItemIcon"}),s=r.className,c=(0,a.Z)(r,f),l=i.useContext(u.Z),d=(0,n.Z)((0,n.Z)({},r),{},{alignItems:l.alignItems}),x=m(d);return(0,p.jsx)(h,(0,n.Z)({className:(0,o.default)(x.root,s),ownerState:d,ref:t},c))});t.Z=x},53091:function(e,t,r){"use strict";var n=r(778521),a=r(577903),i=r(234046),o=r(470079),s=r(653048),c=r(306029),l=r(781097),d=r(101285),u=r(360731),p=r(502894),f=r(403124),v=r(735250),m=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],h=(0,u.Uu)("MuiListItemText"),x=function(e){var t=e.classes,r=e.inset,n=e.primary,a=e.secondary,i=e.dense;return(0,c.Z)({root:["root",r&&"inset",i&&"dense",n&&a&&"multiline"],primary:["primary"],secondary:["secondary"]},f.L,t)},g=(0,p.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[(0,i.Z)({},"& .".concat(f.Z.primary),t.primary),(0,i.Z)({},"& .".concat(f.Z.secondary),t.secondary),t.root,r.inset&&t.inset,r.primary&&r.secondary&&t.multiline,r.dense&&t.dense]}})({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4,variants:[{props:function(e){var t=e.ownerState;return t.primary&&t.secondary},style:{marginTop:6,marginBottom:6}},{props:function(e){return e.ownerState.inset},style:{paddingLeft:56}}]}),Z=o.forwardRef(function(e,t){var r=h({props:e,name:"MuiListItemText"}),i=r.children,c=r.className,u=r.disableTypography,p=void 0!==u&&u,f=r.inset,Z=r.primary,b=r.primaryTypographyProps,y=r.secondary,j=r.secondaryTypographyProps,w=(0,a.Z)(r,m),M=o.useContext(d.Z).dense,S=null!=Z?Z:i,P=y,k=(0,n.Z)((0,n.Z)({},r),{},{disableTypography:p,inset:void 0!==f&&f,primary:!!S,secondary:!!P,dense:M}),z=x(k);return null==S||S.type===l.Z||p||(S=(0,v.jsx)(l.Z,(0,n.Z)((0,n.Z)({variant:M?"body2":"body1",className:z.primary,component:null!=b&&b.variant?void 0:"span",display:"block"},b),{},{children:S}))),null==P||P.type===l.Z||p||(P=(0,v.jsx)(l.Z,(0,n.Z)((0,n.Z)({variant:"body2",className:z.secondary,color:"text.secondary",display:"block"},j),{},{children:P}))),(0,v.jsxs)(g,(0,n.Z)((0,n.Z)({className:(0,s.default)(z.root,c),ownerState:k,ref:t},w),{},{children:[S,P]}))});t.Z=Z},703296:function(e,t,r){"use strict";var n=r(778521),a=r(577903),i=r(234046),o=r(470079),s=r(653048),c=r(306029),l=r(360731),d=r(502894),u=r(667318),p=r(735250),f=["className","component","disableGutters","variant"],v=(0,l.Uu)("MuiToolbar"),m=function(e){var t=e.classes,r=e.disableGutters,n=e.variant;return(0,c.Z)({root:["root",!r&&"gutters",n]},u.N,t)},h=(0,d.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,!r.disableGutters&&t.gutters,t[r.variant]]}})(function(e){var t=e.theme;return{position:"relative",display:"flex",alignItems:"center",variants:[{props:function(e){return!e.ownerState.disableGutters},style:(0,i.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)})},{props:{variant:"dense"},style:{minHeight:48}},{props:{variant:"regular"},style:t.mixins.toolbar}]}}),x=o.forwardRef(function(e,t){var r=v({props:e,name:"MuiToolbar"}),i=r.className,o=r.component,c=void 0===o?"div":o,l=r.disableGutters,d=r.variant,u=(0,a.Z)(r,f),x=(0,n.Z)((0,n.Z)({},r),{},{component:c,disableGutters:void 0!==l&&l,variant:void 0===d?"regular":d}),g=m(x);return(0,p.jsx)(h,(0,n.Z)({as:c,className:(0,s.default)(g.root,i),ref:t,ownerState:x},u))});t.Z=x},667318:function(e,t,r){"use strict";r.d(t,{N:function(){return i}});var n=r(344443),a=r(92358);function i(e){return(0,a.ZP)("MuiToolbar",e)}var o=(0,n.Z)("MuiToolbar",["root","gutters","regular","dense"]);t.Z=o},404745:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ey}});var n,a,i,o,s,c,l,d,u,p,f,v,m,h,x=r(470079),g=r(294075),Z=r(863363),b=r(234046),y=r(778521),j=r(497628),w=r(44299),M=r(427260),S=r(68632),P=r(859861),k=r(781097),z=r(930115),T=r(692107);function I(){return(I=T?T.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}var C=r(885950),O=r(43416),R=r(608361),N=r(786427),_=r(799199),L=r(863426),H=r(53091),W=r(877925),F=r(863381),V=r(392493),G=r(248607),A=r(113446),D=r(923017),B=r(138101),E=r(258024),q=r(867385),U=r(988626),$=r(735250),X=[{id:"Build",children:[{id:"Authentication",icon:(0,$.jsx)(F.default,{}),active:!0},{id:"Database",icon:(0,$.jsx)(V.default,{})},{id:"Storage",icon:(0,$.jsx)(G.default,{})},{id:"Hosting",icon:(0,$.jsx)(A.default,{})},{id:"Functions",icon:(0,$.jsx)(D.default,{})},{id:"Machine learning",icon:(0,$.jsx)(B.default,{})}]},{id:"Quality",children:[{id:"Analytics",icon:(0,$.jsx)(q.default,{})},{id:"Performance",icon:(0,$.jsx)(E.default,{})},{id:"Test Lab",icon:(0,$.jsx)(U.default,{})}]}],Y={py:"2px",px:3,color:"rgba(255, 255, 255, 0.7)","&:hover, &:focus":{bgcolor:"rgba(255, 255, 255, 0.08)"}},Q={boxShadow:"0 -1px 0 rgb(255,255,255,0.1) inset",py:1.5,px:3};function J(e){var t=I({},e);return(0,$.jsx)(O.ZP,(0,y.Z)((0,y.Z)({variant:"permanent"},t),{},{children:(0,$.jsxs)(R.Z,{disablePadding:!0,children:[(0,$.jsx)(N.ZP,{sx:(0,y.Z)((0,y.Z)((0,y.Z)({},Y),Q),{},{fontSize:22,color:"#fff"}),children:"Paperbase"}),(0,$.jsxs)(N.ZP,{sx:(0,y.Z)((0,y.Z)({},Y),Q),children:[n||(n=(0,$.jsx)(L.Z,{children:(0,$.jsx)(W.default,{})})),a||(a=(0,$.jsx)(H.Z,{children:"Project Overview"}))]}),X.map(function(e){var t=e.id,r=e.children;return(0,$.jsxs)(P.Z,{sx:{bgcolor:"#101F33"},children:[(0,$.jsx)(N.ZP,{sx:{py:2,px:3},children:(0,$.jsx)(H.Z,{sx:{color:"#fff"},children:t})}),r.map(function(e){var t=e.id,r=e.icon,n=e.active;return(0,$.jsx)(N.ZP,{disablePadding:!0,children:(0,$.jsxs)(_.Z,{selected:n,sx:Y,children:[(0,$.jsx)(L.Z,{children:r}),(0,$.jsx)(H.Z,{children:t})]})},t)}),(0,$.jsx)(C.Z,{sx:{mt:2}})]},t)})]})}))}var K=r(980751),ee=r(703296),et=r(146803),er=r(818346),en=r(651600),ea=r(642378),ei=r(553093),eo=r(214077),es=r(770154),ec=r(229288);function el(){return(0,$.jsxs)(et.Z,{sx:{maxWidth:936,margin:"auto",overflow:"hidden"},children:[(0,$.jsx)(K.Z,{position:"static",color:"default",elevation:0,sx:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},children:(0,$.jsx)(ee.Z,{children:(0,$.jsxs)(er.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,$.jsx)(er.ZP,{item:!0,children:(0,$.jsx)(es.default,{color:"inherit",sx:{display:"block"}})}),(0,$.jsx)(er.ZP,{item:!0,xs:!0,children:(0,$.jsx)(ea.Z,{fullWidth:!0,placeholder:"Search by email address, phone number, or user UID",InputProps:{disableUnderline:!0,sx:{fontSize:"default"}},variant:"standard"})}),(0,$.jsxs)(er.ZP,{item:!0,children:[(0,$.jsx)(en.Z,{variant:"contained",sx:{mr:1},children:"Add user"}),(0,$.jsx)(ei.Z,{title:"Reload",children:(0,$.jsx)(eo.Z,{children:(0,$.jsx)(ec.default,{color:"inherit",sx:{display:"block"}})})})]})]})})}),(0,$.jsx)(k.Z,{sx:{my:5,mx:2},color:"text.secondary",align:"center",children:"No users for this project yet"})]})}var ed=r(502501),eu=r(403633),ep=r(542255),ef=r(343209),ev=r(777733),em=r(410911),eh="rgba(255, 255, 255, 0.7)";function ex(e){var t=e.onDrawerToggle;return(0,$.jsxs)(x.Fragment,{children:[(0,$.jsx)(K.Z,{color:"primary",position:"sticky",elevation:0,children:(0,$.jsx)(ee.Z,{children:(0,$.jsxs)(er.ZP,{container:!0,spacing:1,alignItems:"center",children:[(0,$.jsx)(er.ZP,{sx:{display:{sm:"none",xs:"block"}},item:!0,children:(0,$.jsx)(eo.Z,{color:"inherit","aria-label":"open drawer",onClick:t,edge:"start",children:i||(i=(0,$.jsx)(ep.default,{}))})}),o||(o=(0,$.jsx)(er.ZP,{item:!0,xs:!0})),(0,$.jsx)(er.ZP,{item:!0,children:(0,$.jsx)(z.Z,{href:"/",variant:"body2",sx:{textDecoration:"none",color:eh,"&:hover":{color:"common.white"}},rel:"noopener noreferrer",target:"_blank",children:"Go to docs"})}),s||(s=(0,$.jsx)(er.ZP,{item:!0,children:(0,$.jsx)(ei.Z,{title:"Alerts • No alerts",children:(0,$.jsx)(eo.Z,{color:"inherit",children:(0,$.jsx)(ef.default,{})})})})),(0,$.jsx)(er.ZP,{item:!0,children:(0,$.jsx)(eo.Z,{color:"inherit",sx:{p:.5},children:c||(c=(0,$.jsx)(ed.Z,{src:"/static/images/avatar/1.jpg",alt:"My Avatar"}))})})]})})}),(0,$.jsx)(K.Z,{component:"div",color:"primary",position:"static",elevation:0,sx:{zIndex:0},children:(0,$.jsx)(ee.Z,{children:(0,$.jsxs)(er.ZP,{container:!0,alignItems:"center",spacing:1,children:[l||(l=(0,$.jsx)(er.ZP,{item:!0,xs:!0,children:(0,$.jsx)(k.Z,{color:"inherit",variant:"h5",component:"h1",children:"Authentication"})})),(0,$.jsx)(er.ZP,{item:!0,children:(0,$.jsx)(en.Z,{sx:{borderColor:eh},variant:"outlined",color:"inherit",size:"small",children:"Web setup"})}),d||(d=(0,$.jsx)(er.ZP,{item:!0,children:(0,$.jsx)(ei.Z,{title:"Help",children:(0,$.jsx)(eo.Z,{color:"inherit",children:(0,$.jsx)(eu.default,{})})})}))]})})}),(0,$.jsx)(K.Z,{component:"div",position:"static",elevation:0,sx:{zIndex:0},children:u||(u=(0,$.jsxs)(em.Z,{value:0,textColor:"inherit",children:[(0,$.jsx)(ev.Z,{label:"Users"}),(0,$.jsx)(ev.Z,{label:"Sign-in method"}),(0,$.jsx)(ev.Z,{label:"Templates"}),(0,$.jsx)(ev.Z,{label:"Usage"})]}))})]})}function eg(){return(0,$.jsxs)(k.Z,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",p||(p=(0,$.jsx)(z.Z,{color:"inherit",href:"https://mui.com/",children:"Your Website"}))," ",new Date().getFullYear(),"."]})}var eZ=(0,j.Z)({palette:{primary:{light:"#63ccff",main:"#009be5",dark:"#006db3"}},typography:{h5:{fontWeight:500,fontSize:26,letterSpacing:.5}},shape:{borderRadius:8},components:{MuiTab:{defaultProps:{disableRipple:!0}}},mixins:{toolbar:{minHeight:48}}});function eb(){var e=x.useState(!1),t=(0,Z.Z)(e,2),r=t[0],n=t[1],a=(0,M.Z)(eZ.breakpoints.up("sm")),i=function(){n(!r)};return(0,$.jsx)(w.Z,{theme:eZ,children:(0,$.jsxs)(P.Z,{sx:{display:"flex",minHeight:"100vh"},children:[f||(f=(0,$.jsx)(S.ZP,{})),(0,$.jsxs)(P.Z,{component:"nav",sx:{width:{sm:256},flexShrink:{sm:0}},children:[a?null:(0,$.jsx)(J,{PaperProps:{style:{width:256}},variant:"temporary",open:r,onClose:i}),(0,$.jsx)(J,{PaperProps:{style:{width:256}},sx:{display:{sm:"block",xs:"none"}}})]}),(0,$.jsxs)(P.Z,{sx:{flex:1,display:"flex",flexDirection:"column"},children:[(0,$.jsx)(ex,{onDrawerToggle:i}),(0,$.jsx)(P.Z,{component:"main",sx:{flex:1,py:6,px:4,bgcolor:"#eaeff1"},children:v||(v=(0,$.jsx)(el,{}))}),(0,$.jsx)(P.Z,{component:"footer",sx:{p:2,bgcolor:"#eaeff1"},children:m||(m=(0,$.jsx)(eg,{}))})]})]})})}function ey(){return h||(h=(0,$.jsx)(g.Z,{title:"Paperbase theme - MUI",description:"A page that mimics Firebase.\n        This item includes theming using the theme provider component.",children:(0,$.jsx)(eb,{})}))}eZ=(0,y.Z)((0,y.Z)({},eZ),{},{components:{MuiDrawer:{styleOverrides:{paper:{backgroundColor:"#081627"}}},MuiButton:{styleOverrides:{root:{textTransform:"none"},contained:{boxShadow:"none","&:active":{boxShadow:"none"}}}},MuiTabs:{styleOverrides:{root:{marginLeft:eZ.spacing(1)},indicator:{height:3,borderTopLeftRadius:3,borderTopRightRadius:3,backgroundColor:eZ.palette.common.white}}},MuiTab:{styleOverrides:{root:(0,b.Z)({textTransform:"none",margin:"0 16px",minWidth:0,padding:0},eZ.breakpoints.up("md"),{padding:0,minWidth:0})}},MuiIconButton:{styleOverrides:{root:{padding:eZ.spacing(1)}}},MuiTooltip:{styleOverrides:{tooltip:{borderRadius:4}}},MuiDivider:{styleOverrides:{root:{backgroundColor:"rgb(255,255,255,0.15)"}}},MuiListItemButton:{styleOverrides:{root:{"&.Mui-selected":{color:"#4fc3f7"}}}},MuiListItemText:{styleOverrides:{primary:{fontSize:14,fontWeight:eZ.typography.fontWeightMedium}}},MuiListItemIcon:{styleOverrides:{root:{color:"inherit",minWidth:"auto",marginRight:eZ.spacing(2),"& svg":{fontSize:20}}}},MuiAvatar:{styleOverrides:{root:{width:32,height:32}}}}})},294075:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n,a=r(470079),i=r(248247),o=r(735250);function s(e){var t=e.children;return(0,o.jsxs)(a.Fragment,{children:[n||(n=(0,o.jsx)(i.Z,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex,nofollow"})})),t]})}},652266:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/premium-themes/paperbase",function(){return r(404745)}])},392493:function(e,t,r){"use strict";var n=r(11234);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(122268)),i=r(735250);t.default=(0,a.default)((0,i.jsx)("path",{d:"M19 13H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2M7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M19 3H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"}),"DnsRounded")},403633:function(e,t,r){"use strict";var n=r(11234);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(122268)),i=r(735250);t.default=(0,a.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 17h-2v-2h2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25"}),"Help")},877925:function(e,t,r){"use strict";var n=r(11234);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(122268)),i=r(735250);t.default=(0,a.default)((0,i.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home")},542255:function(e,t,r){"use strict";var n=r(11234);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(122268)),i=r(735250);t.default=(0,a.default)((0,i.jsx)("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu")},343209:function(e,t,r){"use strict";var n=r(11234);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(122268)),i=r(735250);t.default=(0,a.default)((0,i.jsx)("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z"}),"Notifications")},863381:function(e,t,r){"use strict";var n=r(11234);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(122268)),i=r(735250);t.default=(0,a.default)((0,i.jsx)("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"}),"People")},988626:function(e,t,r){"use strict";var n=r(11234);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(122268)),i=r(735250);t.default=(0,a.default)((0,i.jsx)("path",{d:"M10.82 12.49c.02-.16.04-.32.04-.49s-.02-.33-.04-.49l1.08-.82c.1-.07.12-.21.06-.32l-1.03-1.73c-.06-.11-.2-.15-.31-.11l-1.28.5c-.27-.2-.56-.36-.87-.49l-.2-1.33c0-.12-.11-.21-.24-.21H5.98c-.13 0-.24.09-.26.21l-.2 1.32c-.31.12-.6.3-.87.49l-1.28-.5c-.12-.05-.25 0-.31.11l-1.03 1.73c-.06.12-.03.25.07.33l1.08.82c-.02.16-.03.33-.03.49 0 .17.02.33.04.49l-1.09.83c-.1.07-.12.21-.06.32l1.03 1.73c.06.11.2.15.31.11l1.28-.5c.27.2.56.36.87.49l.2 1.32c.01.12.12.21.25.21h2.06c.13 0 .24-.09.25-.21l.2-1.32c.31-.12.6-.3.87-.49l1.28.5c.12.05.25 0 .31-.11l1.03-1.73c.06-.11.04-.24-.06-.32zM7 13.75c-.99 0-1.8-.78-1.8-1.75s.81-1.75 1.8-1.75 1.8.78 1.8 1.75S8 13.75 7 13.75M18 1.01 8 1c-1.1 0-2 .9-2 2v3h2V5h10v14H8v-1H6v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99"}),"PhonelinkSetup")},248607:function(e,t,r){"use strict";var n=r(11234);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(122268)),i=r(735250);t.default=(0,a.default)((0,i.jsx)("path",{d:"M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2M5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6z"}),"PhotoSizeSelectActual")},113446:function(e,t,r){"use strict";var n=r(11234);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(122268)),i=r(735250);t.default=(0,a.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39"}),"Public")},229288:function(e,t,r){"use strict";var n=r(11234);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(122268)),i=r(735250);t.default=(0,a.default)((0,i.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"}),"Refresh")},770154:function(e,t,r){"use strict";var n=r(11234);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(122268)),i=r(735250);t.default=(0,a.default)((0,i.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search")},867385:function(e,t,r){"use strict";var n=r(11234);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(122268)),i=r(735250);t.default=(0,a.default)((0,i.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"}),"Settings")},923017:function(e,t,r){"use strict";var n=r(11234);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(122268)),i=r(735250);t.default=(0,a.default)((0,i.jsx)("path",{d:"M7.77 6.76 6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12zM7 13h2v-2H7zm10-2h-2v2h2zm-6 2h2v-2h-2zm6.77-7.52-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12z"}),"SettingsEthernet")},138101:function(e,t,r){"use strict";var n=r(11234);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(122268)),i=r(735250);t.default=(0,a.default)((0,i.jsx)("path",{d:"M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6z"}),"SettingsInputComponent")},258024:function(e,t,r){"use strict";var n=r(11234);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(122268)),i=r(735250);t.default=(0,a.default)((0,i.jsx)("path",{d:"M9 1h6v2H9zm10.03 6.39 1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61M13 14h-2V8h2z"}),"Timer")}},function(e){e.O(0,[9535,73976,97146,56831,22274,89068,48003,45678,39987,71427,42378,62097,49774,92888,40179],function(){return e(e.s=652266)}),_N_E=e.O()}]);