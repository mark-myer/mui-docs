(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50443],{520740:function(e,t,n){var o=n(582103).default,a=n(156512);n(373231),n(611911),n(998196),n(522404),n(233787),n(846425),n(12331),n(544094),n(543257),e.exports=function(e,t){var n;switch(t){case"ts":n=a.languages.tsx;break;case"js":n=a.languages.jsx;break;case"sh":throw Error(['docs-infra: Unsupported language: "sh" in:',"","```sh",e,"```","",'Use "bash" instead.',""].join("\n"));case"diff":(n=o({},a.languages.diff)).deleted=/^[-].*$/m;break;default:n=a.languages[t]}if(!n){if(t)throw Error('unsupported language: "'.concat(t,'", "').concat(e,'"'));n=a.languages.jsx}return a.highlight(e,n)}},949110:function(e,t,n){"use strict";n.r(t),n.d(t,{HighlightedCode:function(){return f}});var o=n(577903),a=n(234046),i=n(778521),r=n(470079),c=n(520740),s=n.n(c),l=n(626656),d=n(502894),u=n(637706),p=n(637654),m=n(735250),h=["code","copyButtonHidden","copyButtonProps","language","plainStyle","parentComponent","preComponent"],v=(0,d.ZP)("pre")(function(e){var t,n=e.theme;return t={margin:0,color:"hsl(60deg 30% 96.08%)",WebkitOverflowScrolling:"touch",maxWidth:"calc(100vw - 32px)"},(0,a.Z)(t,n.breakpoints.up("md"),{maxWidth:"calc(100vw - 32px - 16px)"}),(0,a.Z)(t,"& code",(0,i.Z)((0,i.Z)({},n.typography.caption),{},{fontFamily:n.typography.fontFamilyCode,fontWeight:400,WebkitFontSmoothing:"subpixel-antialiased"})),t}),f=r.forwardRef(function(e,t){var n=e.code,a=e.copyButtonHidden,c=e.copyButtonProps,d=e.language,f=e.plainStyle,g=e.parentComponent,Z=void 0===g?f?"div":p.G:g,x=e.preComponent,y=void 0===x?f?v:"pre":x,b=(0,o.Z)(e,h),k=r.useMemo(function(){return s()(n.trim(),d)},[n,d]),w=(0,u.YA)();return(0,m.jsx)(Z,(0,i.Z)((0,i.Z)({ref:t},b),{},{children:(0,m.jsxs)("div",(0,i.Z)((0,i.Z)({className:"MuiCode-root"},w),{},{children:[void 0!==a&&a?null:(0,m.jsx)(l.a,{children:(0,m.jsx)(u.xe,(0,i.Z)({code:n},c))}),(0,m.jsx)(y,{children:(0,m.jsx)("code",{className:"language-".concat(d),dangerouslySetInnerHTML:{__html:k}})})]}))}))})},923272:function(e,t,n){"use strict";var o=n(778521),a=n(577903),i=n(470079),r=n(653048),c=n(306029),s=n(360731),l=n(502894),d=n(308867),u=n(735250),p=["children","className","component","image","src","style"],m=(0,s.Uu)("MuiCardMedia"),h=function(e){var t=e.classes,n=e.isMediaComponent,o=e.isImageComponent;return(0,c.Z)({root:["root",n&&"media",o&&"img"]},d.a,t)},v=(0,l.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState,o=n.isMediaComponent,a=n.isImageComponent;return[t.root,o&&t.media,a&&t.img]}})({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",variants:[{props:{isMediaComponent:!0},style:{width:"100%"}},{props:{isImageComponent:!0},style:{objectFit:"cover"}}]}),f=["video","audio","picture","iframe","img"],g=["picture","img"],Z=i.forwardRef(function(e,t){var n=m({props:e,name:"MuiCardMedia"}),i=n.children,c=n.className,s=n.component,l=void 0===s?"div":s,d=n.image,Z=n.src,x=n.style,y=(0,a.Z)(n,p),b=-1!==f.indexOf(l),k=!b&&d?(0,o.Z)({backgroundImage:'url("'.concat(d,'")')},x):x,w=(0,o.Z)((0,o.Z)({},n),{},{component:l,isMediaComponent:b,isImageComponent:-1!==g.indexOf(l)}),C=h(w);return(0,u.jsx)(v,(0,o.Z)((0,o.Z)({className:(0,r.default)(C.root,c),as:l,role:!b&&d?"img":void 0,ref:t,style:k,ownerState:w,src:b?d||Z:void 0},y),{},{children:i}))});t.Z=Z},308867:function(e,t,n){"use strict";n.d(t,{a:function(){return i}});var o=n(344443),a=n(92358);function i(e){return(0,a.ZP)("MuiCardMedia",e)}var r=(0,o.Z)("MuiCardMedia",["root","media","img"]);t.Z=r},192573:function(e,t,n){"use strict";n.d(t,{Z:function(){return Y}});var o=n(863363),a=n(778521),i=n(577903),r=n(234046),c=n(393385),s=n.n(c),l=n(147805),d=n.n(l),u=n(470079),p=n(653048),m=n(325530),h=n(506926),v=n(306029),f=n(264027),g=n(532785),Z=n(169659),x=n(607812),y=n(852339),b=n(668244),k=n(632820),w=n(735250),C=(0,k.Z)((0,w.jsx)("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),S=(0,k.Z)((0,w.jsx)("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder"),j=n(360731),R=n(502894),M=n(644978),F=n(399993),z=["value"],I=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"],L=(0,j.Uu)("MuiRating");function P(e,t){var n;return null==e?e:Number((Math.round(e/t)*t).toFixed((n=t.toString().split(".")[1])?n.length:0))}var B=function(e){var t=e.classes,n=e.size,o=e.readOnly,a=e.disabled,i=e.emptyValueFocused,r=e.focusVisible,c={root:["root","size".concat((0,g.Z)(n)),a&&"disabled",r&&"focusVisible",o&&"readOnly"],label:["label","pristine"],labelEmptyValue:[i&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return(0,v.Z)(c,F.s,t)},A=(0,R.ZP)("span",{name:"MuiRating",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,r.Z)({},"& .".concat(F.Z.visuallyHidden),t.visuallyHidden),t.root,t["size".concat((0,g.Z)(n.size))],n.readOnly&&t.readOnly]}})(function(e){var t,n=e.theme;return t={display:"inline-flex",position:"relative",fontSize:n.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",width:"min-content",WebkitTapHighlightColor:"transparent"},(0,r.Z)(t,"&.".concat(F.Z.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity,pointerEvents:"none"}),(0,r.Z)(t,"&.".concat(F.Z.focusVisible," .").concat(F.Z.iconActive),{outline:"1px solid #999"}),(0,r.Z)(t,"& .".concat(F.Z.visuallyHidden),h.Z),(0,r.Z)(t,"variants",[{props:{size:"small"},style:{fontSize:n.typography.pxToRem(18)}},{props:{size:"large"},style:{fontSize:n.typography.pxToRem(30)}},{props:function(e){return e.ownerState.readOnly},style:{pointerEvents:"none"}}]),t}),O=(0,R.ZP)("label",{name:"MuiRating",slot:"Label",overridesResolver:function(e,t){var n=e.ownerState;return[t.label,n.emptyValueFocused&&t.labelEmptyValueActive]}})({cursor:"inherit",variants:[{props:function(e){return e.ownerState.emptyValueFocused},style:{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"}}]}),E=(0,R.ZP)("span",{name:"MuiRating",slot:"Icon",overridesResolver:function(e,t){var n=e.ownerState;return[t.icon,n.iconEmpty&&t.iconEmpty,n.iconFilled&&t.iconFilled,n.iconHover&&t.iconHover,n.iconFocus&&t.iconFocus,n.iconActive&&t.iconActive]}})(function(e){var t=e.theme;return{display:"flex",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest}),pointerEvents:"none",variants:[{props:function(e){return e.ownerState.iconActive},style:{transform:"scale(1.2)"}},{props:function(e){return e.ownerState.iconEmpty},style:{color:(t.vars||t).palette.action.disabled}}]}}),H=(0,R.ZP)("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:function(e){return(0,M.Z)(e)&&"iconActive"!==e},overridesResolver:function(e,t){var n=e.iconActive;return[t.decimal,n&&t.iconActive]}})({position:"relative",variants:[{props:function(e){return e.iconActive},style:{transform:"scale(1.2)"}}]});function N(e){e.value;var t=(0,i.Z)(e,z);return(0,w.jsx)("span",(0,a.Z)({},t))}function T(e){var t=e.classes,n=e.disabled,o=e.emptyIcon,i=e.focus,r=e.getLabelText,c=e.highlightSelectedOnly,s=e.hover,l=e.icon,d=e.IconContainerComponent,m=e.isActive,h=e.itemValue,v=e.labelProps,f=e.name,g=e.onBlur,x=e.onChange,y=e.onClick,b=e.onFocus,k=e.readOnly,C=e.ownerState,S=e.ratingValue,j=e.ratingValueRounded,R=c?h===S:h<=S,M=h<=s,F=h<=i,z=h===j,I=(0,Z.Z)(),L=(0,w.jsx)(E,{as:d,value:h,className:(0,p.default)(t.icon,R?t.iconFilled:t.iconEmpty,M&&t.iconHover,F&&t.iconFocus,m&&t.iconActive),ownerState:(0,a.Z)((0,a.Z)({},C),{},{iconEmpty:!R,iconFilled:R,iconHover:M,iconFocus:F,iconActive:m}),children:o&&!R?o:l});return k?(0,w.jsx)("span",(0,a.Z)((0,a.Z)({},v),{},{children:L})):(0,w.jsxs)(u.Fragment,{children:[(0,w.jsxs)(O,(0,a.Z)((0,a.Z)({ownerState:(0,a.Z)((0,a.Z)({},C),{},{emptyValueFocused:void 0}),htmlFor:I},v),{},{children:[L,(0,w.jsx)("span",{className:t.visuallyHidden,children:r(h)})]})),(0,w.jsx)("input",{className:t.visuallyHidden,onFocus:b,onBlur:g,onChange:x,onClick:y,disabled:n,value:h,id:I,type:"radio",name:f,checked:z})]})}var V=(0,w.jsx)(C,{fontSize:"inherit"}),D=(0,w.jsx)(S,{fontSize:"inherit"});function W(e){return"".concat(e," Star").concat(1!==e?"s":"")}var Y=u.forwardRef(function(e,t){var n=L({name:"MuiRating",props:e}),r=n.className,c=n.defaultValue,l=void 0===c?null:c,h=n.disabled,v=void 0!==h&&h,g=n.emptyIcon,k=void 0===g?D:g,C=n.emptyLabelText,S=void 0===C?"Empty":C,j=n.getLabelText,R=void 0===j?W:j,M=n.highlightSelectedOnly,F=void 0!==M&&M,z=n.icon,E=void 0===z?V:z,Y=n.IconContainerComponent,_=void 0===Y?N:Y,q=n.max,G=void 0===q?5:q,U=n.name,X=n.onChange,$=n.onChangeActive,K=n.onMouseLeave,J=n.onMouseMove,Q=n.precision,ee=void 0===Q?1:Q,et=n.readOnly,en=void 0!==et&&et,eo=n.size,ea=n.value,ei=(0,i.Z)(n,I),er=(0,Z.Z)(U),ec=(0,x.Z)({controlled:ea,default:l,name:"Rating"}),es=(0,o.Z)(ec,2),el=es[0],ed=es[1],eu=P(el,ee),ep=(0,f.V)(),em=u.useState({hover:-1,focus:-1}),eh=(0,o.Z)(em,2),ev=eh[0],ef=ev.hover,eg=ev.focus,eZ=eh[1],ex=eu;-1!==ef&&(ex=ef),-1!==eg&&(ex=eg);var ey=(0,y.Z)(),eb=ey.isFocusVisibleRef,ek=ey.onBlur,ew=ey.onFocus,eC=ey.ref,eS=u.useState(!1),ej=(0,o.Z)(eS,2),eR=ej[0],eM=ej[1],eF=u.useRef(),ez=(0,b.Z)(eC,eF,t),eI=function(e){var t=""===e.target.value?null:s()(e.target.value);-1!==ef&&(t=ef),ed(t),X&&X(e,t)},eL=function(e){(0!==e.clientX||0!==e.clientY)&&(eZ({hover:-1,focus:-1}),ed(null),X&&s()(e.target.value)===eu&&X(e,null))},eP=function(e){ew(e),!0===eb.current&&eM(!0);var t=s()(e.target.value);eZ(function(e){return{hover:e.hover,focus:t}})},eB=function(e){-1===ef&&(ek(e),!1===eb.current&&eM(!1),eZ(function(e){return{hover:e.hover,focus:-1}}))},eA=u.useState(!1),eO=(0,o.Z)(eA,2),eE=eO[0],eH=eO[1],eN=(0,a.Z)((0,a.Z)({},n),{},{defaultValue:l,disabled:v,emptyIcon:k,emptyLabelText:S,emptyValueFocused:eE,focusVisible:eR,getLabelText:R,icon:E,IconContainerComponent:_,max:G,precision:ee,readOnly:en,size:void 0===eo?"medium":eo}),eT=B(eN);return(0,w.jsxs)(A,(0,a.Z)((0,a.Z)({ref:ez,onMouseMove:function(e){J&&J(e);var t=eF.current.getBoundingClientRect(),n=t.right,o=t.left,a=t.width,i=P(G*(ep?(n-e.clientX)/a:(e.clientX-o)/a)+ee/2,ee);i=(0,m.Z)(i,ee,G),eZ(function(e){return e.hover===i&&e.focus===i?e:{hover:i,focus:i}}),eM(!1),$&&ef!==i&&$(e,i)},onMouseLeave:function(e){K&&K(e),eZ({hover:-1,focus:-1}),$&&-1!==ef&&$(e,-1)},className:(0,p.default)(eT.root,r,en&&"MuiRating-readOnly"),ownerState:eN,role:en?"img":null,"aria-label":en?R(ex):null},ei),{},{children:[d()(Array(G)).map(function(e,t){var n=t+1,o={classes:eT,disabled:v,emptyIcon:k,focus:eg,getLabelText:R,highlightSelectedOnly:F,hover:ef,icon:E,IconContainerComponent:_,name:er,onBlur:eB,onChange:eI,onClick:eL,onFocus:eP,ratingValue:ex,ratingValueRounded:eu,readOnly:en,ownerState:eN},i=n===Math.ceil(ex)&&(-1!==ef||-1!==eg);if(ee<1){var r=d()(Array(1/ee));return(0,w.jsx)(H,{className:(0,p.default)(eT.decimal,i&&eT.iconActive),ownerState:eN,iconActive:i,children:r.map(function(e,t){var i=P(n-1+(t+1)*ee,ee);return(0,w.jsx)(T,(0,a.Z)((0,a.Z)({},o),{},{isActive:!1,itemValue:i,labelProps:{style:r.length-1===t?{}:{width:i===ex?"".concat((t+1)*ee*100,"%"):"0%",overflow:"hidden",position:"absolute"}}}),i)})},n)}return(0,w.jsx)(T,(0,a.Z)((0,a.Z)({},o),{},{isActive:i,itemValue:n}),n)}),!en&&!v&&(0,w.jsxs)(O,{className:(0,p.default)(eT.label,eT.labelEmptyValue),ownerState:eN,children:[(0,w.jsx)("input",{className:eT.visuallyHidden,value:"",id:"".concat(er,"-empty"),type:"radio",name:er,checked:null==eu,onFocus:function(){return eH(!0)},onBlur:function(){return eH(!1)},onChange:eI}),(0,w.jsx)("span",{className:eT.visuallyHidden,children:S})]})]}))})},399993:function(e,t,n){"use strict";n.d(t,{s:function(){return i}});var o=n(344443),a=n(92358);function i(e){return(0,a.ZP)("MuiRating",e)}var r=(0,o.Z)("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]);t.Z=r},472853:function(e,t,n){"use strict";var o,a=n(577903),i=n(863363),r=n(614030),c=n(234046),s=n(778521),l=n(431114),d=n.n(l),u=n(470079),p=n(653048),m=n(306029),h=n(621234),v=n(532785),f=n(696793),g=n(360731),Z=n(502894),x=n(280393),y=n(735250),b=["className","color","edge","size","sx"],k=(0,g.Uu)("MuiSwitch"),w=function(e){var t=e.classes,n=e.edge,o=e.size,a=e.color,i=e.checked,r=e.disabled,c={root:["root",n&&"edge".concat((0,v.Z)(n)),"size".concat((0,v.Z)(o))],switchBase:["switchBase","color".concat((0,v.Z)(a)),i&&"checked",r&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},l=(0,m.Z)(c,x.H,t);return(0,s.Z)((0,s.Z)({},t),l)},C=(0,Z.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.edge&&t["edge".concat((0,v.Z)(n.edge))],t["size".concat((0,v.Z)(n.size))]]}})({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:(o={width:40,height:24,padding:7},(0,c.Z)(o,"& .".concat(x.Z.thumb),{width:16,height:16}),(0,c.Z)(o,"& .".concat(x.Z.switchBase),(0,c.Z)({padding:4},"&.".concat(x.Z.checked),{transform:"translateX(16px)"})),o)}]}),S=(0,Z.ZP)(f.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(e,t){var n=e.ownerState;return[t.switchBase,(0,c.Z)({},"& .".concat(x.Z.input),t.input),"default"!==n.color&&t["color".concat((0,v.Z)(n.color))]]}})(function(e){var t,n=e.theme;return t={position:"absolute",top:0,left:0,zIndex:1,color:n.vars?n.vars.palette.Switch.defaultColor:"".concat("light"===n.palette.mode?n.palette.common.white:n.palette.grey[300]),transition:n.transitions.create(["left","transform"],{duration:n.transitions.duration.shortest})},(0,c.Z)(t,"&.".concat(x.Z.checked),{transform:"translateX(20px)"}),(0,c.Z)(t,"&.".concat(x.Z.disabled),{color:n.vars?n.vars.palette.Switch.defaultDisabledColor:"".concat("light"===n.palette.mode?n.palette.grey[100]:n.palette.grey[600])}),(0,c.Z)(t,"&.".concat(x.Z.checked," + .").concat(x.Z.track),{opacity:.5}),(0,c.Z)(t,"&.".concat(x.Z.disabled," + .").concat(x.Z.track),{opacity:n.vars?n.vars.opacity.switchTrackDisabled:"".concat("light"===n.palette.mode?.12:.2)}),(0,c.Z)(t,"& .".concat(x.Z.input),{left:"-100%",width:"300%"}),t},function(e){var t=e.theme;return{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,h.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:(0,r.Z)(d()(t.palette).filter(function(e){var t=(0,i.Z)(e,2)[1];return t&&t.main&&t.light}).map(function(e){var n,o=(0,i.Z)(e,1)[0];return{props:{color:o},style:(n={},(0,c.Z)(n,"&.".concat(x.Z.checked),(0,c.Z)({color:(t.vars||t).palette[o].main,"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[o].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,h.Fq)(t.palette[o].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(x.Z.disabled),{color:t.vars?t.vars.palette.Switch["".concat(o,"DisabledColor")]:"".concat("light"===t.palette.mode?(0,h.$n)(t.palette[o].main,.62):(0,h._j)(t.palette[o].main,.55))})),(0,c.Z)(n,"&.".concat(x.Z.checked," + .").concat(x.Z.track),{backgroundColor:(t.vars||t).palette[o].main}),n)}}))}}),j=(0,Z.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(e,t){return t.track}})(function(e){var t=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:"".concat("light"===t.palette.mode?t.palette.common.black:t.palette.common.white),opacity:t.vars?t.vars.opacity.switchTrack:"".concat("light"===t.palette.mode?.38:.3)}}),R=(0,Z.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(e,t){return t.thumb}})(function(e){var t=e.theme;return{boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}}),M=u.forwardRef(function(e,t){var n=k({props:e,name:"MuiSwitch"}),o=n.className,i=n.color,r=n.edge,c=n.size,l=n.sx,d=(0,a.Z)(n,b),u=(0,s.Z)((0,s.Z)({},n),{},{color:void 0===i?"primary":i,edge:void 0!==r&&r,size:void 0===c?"medium":c}),m=w(u),h=(0,y.jsx)(R,{className:m.thumb,ownerState:u});return(0,y.jsxs)(C,{className:(0,p.default)(m.root,o),sx:l,ownerState:u,children:[(0,y.jsx)(S,(0,s.Z)((0,s.Z)({type:"checkbox",icon:h,checkedIcon:h,ref:t,ownerState:u},d),{},{classes:(0,s.Z)((0,s.Z)({},m),{},{root:m.switchBase})})),(0,y.jsx)(j,{className:m.track,ownerState:u})]})});t.Z=M},280393:function(e,t,n){"use strict";n.d(t,{H:function(){return i}});var o=n(344443),a=n(92358);function i(e){return(0,a.ZP)("MuiSwitch",e)}var r=(0,o.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]);t.Z=r},696793:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var o=n(778521),a=n(863363),i=n(577903),r=n(470079),c=n(653048),s=n(306029),l=n(532785),d=n(62188),u=n(502894),p=n(607812),m=n(489121),h=n(214549),v=n(344443),f=n(92358);function g(e){return(0,f.ZP)("PrivateSwitchBase",e)}(0,v.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var Z=n(735250),x=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],y=function(e){var t=e.classes,n=e.checked,o=e.disabled,a=e.edge,i={root:["root",n&&"checked",o&&"disabled",a&&"edge".concat((0,l.Z)(a))],input:["input"]};return(0,s.Z)(i,g,t)},b=(0,u.ZP)(h.Z)({padding:9,borderRadius:"50%",variants:[{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:function(e){var t=e.edge,n=e.ownerState;return"start"===t&&"small"!==n.size},style:{marginLeft:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}},{props:function(e){var t=e.edge,n=e.ownerState;return"end"===t&&"small"!==n.size},style:{marginRight:-12}}]}),k=(0,u.ZP)("input",{shouldForwardProp:d.Z})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),w=r.forwardRef(function(e,t){var n=e.autoFocus,r=e.checked,s=e.checkedIcon,l=e.className,d=e.defaultChecked,u=e.disabled,h=e.disableFocusRipple,v=void 0!==h&&h,f=e.edge,g=e.icon,w=e.id,C=e.inputProps,S=e.inputRef,j=e.name,R=e.onBlur,M=e.onChange,F=e.onFocus,z=e.readOnly,I=e.required,L=e.tabIndex,P=e.type,B=e.value,A=(0,i.Z)(e,x),O=(0,p.Z)({controlled:r,default:!!d,name:"SwitchBase",state:"checked"}),E=(0,a.Z)(O,2),H=E[0],N=E[1],T=(0,m.Z)(),V=u;T&&void 0===V&&(V=T.disabled);var D="checkbox"===P||"radio"===P,W=(0,o.Z)((0,o.Z)({},e),{},{checked:H,disabled:V,disableFocusRipple:v,edge:void 0!==f&&f}),Y=y(W);return(0,Z.jsxs)(b,(0,o.Z)((0,o.Z)({component:"span",className:(0,c.default)(Y.root,l),centerRipple:!0,focusRipple:!v,disabled:V,tabIndex:null,role:void 0,onFocus:function(e){F&&F(e),T&&T.onFocus&&T.onFocus(e)},onBlur:function(e){R&&R(e),T&&T.onBlur&&T.onBlur(e)},ownerState:W,ref:t},A),{},{children:[(0,Z.jsx)(k,(0,o.Z)((0,o.Z)({autoFocus:n,checked:r,defaultChecked:d,className:Y.input,disabled:V,id:D?w:void 0,name:j,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;N(t),M&&M(e,t)}},readOnly:z,ref:S,required:void 0!==I&&I,ownerState:W,tabIndex:L,type:P},"checkbox"===P&&void 0===B?{}:{value:B}),C)),H?s:g]}))})},589534:function(e,t,n){"use strict";var o=n(577903),a=n(778521),i=n(614030),r=n(408011),c=n.n(r),s=n(470079),l=n(859861),d=n(735250),u=["sx"],p=s.forwardRef(function(e,t){return(0,d.jsx)(l.Z,(0,a.Z)((0,a.Z)({ref:t},e),{},{sx:[function(e){return(0,a.Z)({position:"relative",border:"1px solid",background:"".concat((e.vars||e).palette.gradients.linearSubtle),borderColor:"grey.100"},e.applyDarkStyles({background:"".concat((e.vars||e).palette.gradients.linearSubtle),borderColor:"primaryDark.700"}))}].concat((0,i.Z)(c()(e.sx)?e.sx:[e.sx]))}))}),m=s.forwardRef(function(e,t){return(0,d.jsx)(l.Z,(0,a.Z)((0,a.Z)({ref:t},e),{},{sx:(0,a.Z)({color:"#fff",p:2,bgcolor:"common.black",border:"1px solid",borderColor:"primaryDark.700",borderTop:0,colorScheme:"dark",overflow:"clip"},e.sx)}))});function h(e){var t=e.sx,n=(0,o.Z)(e,u);return(0,d.jsx)(l.Z,(0,a.Z)((0,a.Z)({},n),{},{sx:[{display:"flex",flexDirection:"column","& > div:first-of-type":{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"},"& > div:last-of-type":{borderBottomLeftRadius:"12px",borderBottomRightRadius:"12px"}}].concat((0,i.Z)(c()(t)?t:[t]))}))}h.Demo=p,h.Info=m,t.Z=h},854731:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var o,a,i,r=n(778521),c=n(863363),s=n(577903),l=n(470079),d=n(621234),u=n(859861),p=n(214077),m=n(781097),h=n(717061),v=n(55499),f=n(215129),g=n(905636),Z=n(735250),x=["appeared","stylingContent"];function y(e){var t=e.appeared,n=e.stylingContent,y=(0,s.Z)(e,x),b=l.useState(!1),k=(0,c.Z)(b,2),w=k[0],C=k[1],S=(0,Z.jsxs)(l.Fragment,{children:[o||(o=(0,Z.jsx)(m.Z,{fontWeight:"bold",variant:"body2",children:"Own the styling!"})),(0,Z.jsxs)(m.Z,{color:"text.secondary",variant:"body2",children:["Build your own design system using the"," ",(0,Z.jsx)(f.r,{href:g.Z.theming,children:"sophisticated theming features"}),". You can also start by using Google's Material Design."]})]});return(0,Z.jsxs)(u.Z,(0,r.Z)((0,r.Z)({"data-mui-color-scheme":"dark"},y),{},{sx:(0,r.Z)({position:"absolute",bottom:0,transform:w||!t?"translateY(100%)":"translateY(0)",transition:"0.3s",left:0,right:0,p:2,background:function(e){var t=e.palette;return(0,d.Fq)(t.common.black,.5)},backdropFilter:"blur(8px)",zIndex:1,borderTop:"1px solid",borderColor:"divider",borderRadius:"0 0 10px 10px"},y.sx),children:[(0,Z.jsx)(p.Z,{"aria-label":w?"show":"hide",onClick:function(){return C(function(e){return!e})},sx:{position:"absolute",zIndex:2,transition:"0.3s",right:16,bottom:"100%",transform:w||!t?"translateY(-10px)":"translateY(50%)",opacity:t?1:0,bgcolor:"primary.600","&:hover, &.Mui-focused":{bgcolor:"primary.700"}},children:w?a||(a=(0,Z.jsx)(h.default,{fontSize:"small"})):i||(i=(0,Z.jsx)(v.default,{fontSize:"small"}))}),n||S]}))}},627678:function(e,t,n){"use strict";var o=n(778521),a=n(502894),i=n(621234),r=n(423946),c=(0,a.ZP)("div",{shouldForwardProp:function(e){return(0,r.x9)(e)&&"endLine"!==e&&"startLine"!==e&&"lineHeight"!==e}})(function(e){var t=e.theme,n=e.startLine,a=void 0===n?0:n,r=e.endLine,c=void 0===r?a:r,s=e.lineHeight,l=void 0===s?"0.75rem":s;return(0,o.Z)((0,o.Z)({borderRadius:2,pointerEvents:"none",position:"absolute",left:-1,right:0,top:"calc(".concat(l," * 1.5 * ").concat(a,")"),height:"calc(".concat(l," * 1.5 * ").concat(c-a+1,")"),transition:"0.3s"},t.typography.caption),{},{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / 0.15)"):(0,i.Fq)(t.palette.primary.main,.1),border:"1px solid",borderColor:(t.vars||t).palette.primary.dark})});t.Z=c},350443:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return $}});var o,a,i,r,c=n(234046),s=n(863363),l=n(577903),d=n(408011),u=n.n(d),p=n(470079),m=n(17911),h=n(497628),v=n(44299),f=n(621234),g=n(859861),Z=n(623477),x=n(651600),y=n(949110),b=n(778521),k=n(432216),w=n(923272),C=n(601509),S=n(472853),j=n(781097),R=n(815577),M=n(192573),F=n(471788),z=n(735250),I=["onElementChange"],L=p.createContext(void 0),P=function(e,t){return function(n){var o=p.useRef(null),a=p.useContext(L);return(0,z.jsx)(p.Fragment,{children:(0,z.jsx)(e,(0,b.Z)((0,b.Z)({ref:o},n),{},{onMouseOver:function(e){e.stopPropagation(),a&&o.current&&a({id:t.id,target:o.current,name:t.name})}}))})}};function B(e){var t,n,o=e.onElementChange,a=(0,l.Z)(e,I),i=p.useRef(null),r=p.useState({id:null,name:null,target:null}),c=(0,s.Z)(r,2),d=c[0],u=c[1],m=p.useMemo(function(){return(0,F.Z)(function(e){u(e)},200)},[]);return p.useEffect(function(){o&&o(d)},[d,o]),(0,z.jsx)(L.Provider,{value:m,children:(0,z.jsxs)(g.Z,(0,b.Z)((0,b.Z)({ref:i},a),{},{onMouseLeave:function(){return m({id:null,name:null,target:null})},sx:(0,b.Z)({position:"relative"},a.sx),children:[a.children,i.current&&d.target&&(0,z.jsx)(g.Z,{sx:(0,b.Z)({border:"1px solid",borderColor:"#0072E5",pointerEvents:"none",position:"absolute",zIndex:10,transition:"none !important"},(t=i.current.getBoundingClientRect(),{top:(n=d.target.getBoundingClientRect()).top-t.top,left:n.left-t.left,width:"".concat(n.width,"px"),height:"".concat(n.height,"px")})),children:(0,z.jsx)(g.Z,{sx:{bgcolor:"#0072E5",borderTopLeftRadius:"2px",borderTopRightRadius:"2px",px:.5,position:"absolute",top:0,transform:"translateY(-100%)",left:-1},children:(0,z.jsx)(j.Z,{color:"#fff",fontSize:"0.625rem",fontWeight:500,sx:{display:"block"},children:d.name})})})]}))})}var A=P(C.Z,{id:"card",name:"Card"}),O=P(w.Z,{id:"cardmedia",name:"CardMedia"}),E=P(R.Z,{id:"stack",name:"Stack"}),H=P(R.Z,{id:"stack2",name:"Stack"}),N=P(R.Z,{id:"stack3",name:"Stack"}),T=P(j.Z,{id:"typography",name:"Typography"}),V=P(k.Z,{id:"chip",name:"Chip"}),D=P(M.Z,{id:"rating",name:"Rating"}),W=P(S.Z,{id:"switch",name:"Switch"});function Y(e){var t=p.useState(!0),n=(0,s.Z)(t,2),i=n[0],r=n[1];return(0,z.jsxs)(A,(0,b.Z)((0,b.Z)({},e),{},{sx:{p:2},children:[(0,z.jsx)(O,{component:"img",alt:"Yosemite National Park",height:"100",image:"/static/images/cards/yosemite.jpeg",sx:{borderRadius:.5}}),(0,z.jsxs)(E,{alignItems:"center",direction:"row",spacing:3,mt:2,useFlexGap:!0,children:[(0,z.jsxs)(H,{direction:"column",spacing:.5,useFlexGap:!0,children:[o||(o=(0,z.jsx)(T,{fontWeight:"semiBold",children:"Yosemite National Park, California, USA"})),(0,z.jsxs)(N,{direction:"row",spacing:1,useFlexGap:!0,children:[(0,z.jsx)(V,{label:i?"Active":"Inactive",color:i?"success":"default",size:"small",sx:{width:"fit-content",fontSize:12,height:20,px:0,zIndex:2}}),a||(a=(0,z.jsx)(D,{name:"Rating component",defaultValue:4,size:"small"}))]})]}),(0,z.jsx)(W,{inputProps:{"aria-label":i?"Active":"Inactive"},checked:i,onChange:function(e){return r(e.target.checked)},sx:{ml:"auto"}})]})]}))}var _=n(631887),q=n(854731),G=n(627678),U=["vars"],X={card:[0,20],cardmedia:[1,5],stack:[6,19],stack2:[7,16],typography:8,stack3:[9,16],chip:[10,14],rating:15,switch:18};function $(){var e,t,n,o=(0,m.Z)(),a=(o.vars,(0,l.Z)(o,U)),d=a.palette.mode,b=p.useState({id:null,name:null,target:null}),k=(0,s.Z)(b,2),w=k[0],C=k[1],S=p.useState(!1),j=(0,s.Z)(S,2),R=j[0],M=j[1],F=p.useMemo(function(){var e;return R?(0,h.Z)(a,{palette:{background:{default:"dark"===d?a.palette.primaryDark[900]:a.palette.grey[50]}},shape:{borderRadius:12},shadows:["none","0px 4px 20px 0px hsla(210, 14%, 28%, 0.2)"],components:{MuiCard:{styleOverrides:{root:{boxShadow:"dark"===d?"0px 4px 12px rgba(0, 0, 0, 0.4)":"0px 4px 12px rgba(61, 71, 82, 0.1)",backgroundColor:"dark"===d?a.palette.primaryDark[800]:"#fff",border:"1px solid",borderColor:"dark"===d?a.palette.primaryDark[700]:a.palette.grey[200]}}},MuiAvatar:{styleOverrides:{root:{width:50,height:50,borderRadius:99}}},MuiSwich:null===(e=a.components)||void 0===e?void 0:e.MuiSwitch,MuiChip:{styleOverrides:{filled:{fontWeight:"medium","&.MuiChip-colorSuccess":{backgroundColor:"dark"===d?a.palette.success[900]:a.palette.success[100],color:"dark"===d?a.palette.success[100]:a.palette.success[900]},"&.MuiChip-colorDefault":{backgroundColor:"dark"===d?a.palette.primaryDark[700]:a.palette.grey[100],color:"dark"===d?a.palette.grey[200]:a.palette.grey[800]}}}}}}):(0,h.Z)({palette:{mode:a.palette.mode}})},[R,a,d]),I=w.id?X[w.id]:null;return null!==I&&(t=u()(I)?I[0]:I,n=u()(I)?I[1]:t),(0,z.jsx)(_.Z,{preview:(0,z.jsx)(g.Z,{sx:{minHeight:200,width:"100%"},children:(0,z.jsx)(v.Z,{theme:F,children:(0,z.jsx)(B,{onElementChange:C,sx:{minWidth:300,width:"100%",maxWidth:"100%"},children:i||(i=(0,z.jsx)(Y,{}))})})}),code:(0,z.jsxs)(g.Z,{sx:{position:"relative"},children:[(0,z.jsxs)(g.Z,{sx:(e={pb:1.5,display:"flex",alignItems:"center",gap:1,right:0,zIndex:10},(0,c.Z)(e,"& .".concat(Z.Z.root),{borderRadius:40,padding:"2px 10px",fontSize:"0.75rem",lineHeight:1.5}),(0,c.Z)(e,"& .MuiButton-outlinedPrimary",{backgroundColor:(0,f.Fq)(a.palette.primary[900],.5)}),e),children:[(0,z.jsx)(x.Z,{size:"small",variant:"outlined",color:R?"secondary":"primary",onClick:function(){M(!1)},children:"Material Design"}),(0,z.jsx)(x.Z,{size:"small",variant:"outlined",color:R?"primary":"secondary",onClick:function(){M(!0)},children:"Custom Theme"})]}),r||(r=(0,z.jsx)(y.HighlightedCode,{copyButtonHidden:!0,plainStyle:!0,code:'\n<Card>\n  <CardMedia\n    component="img"\n    alt="Yosemite National Park"\n    image="/static/images/cards/yosemite.jpeg"\n  />\n  <Stack direction="row" alignItems="center" spacing={3} p={2} useFlexGap>\n    <Stack direction="column" spacing={0.5} useFlexGap>\n      <Typography>Yosemite National Park, California, USA</Typography>\n      <Stack direction="row" spacing={1} useFlexGap>\n        <Chip\n          size="small"\n          label={active ? \'Active\' : \'Inactive\'}\n          color={active ? \'success\' : \'default\'}\n        />\n        <Rating defaultValue={4} size="small" />\n      </Stack>\n    </Stack>\n    <Switch checked={active} />\n  </Stack>\n</Card>\n',language:"jsx"})),void 0!==t&&(0,z.jsx)(G.Z,{startLine:t,endLine:n}),(0,z.jsx)(q.Z,{appeared:R,sx:{mx:-2,mb:-2}})]})})}},631887:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var o=n(778521),a=n(859861),i=n(611507),r=n(626656),c=n(589534),s=n(735250);function l(e){var t=e.preview,n=e.code,l=e.sx;return(0,s.jsx)(i.Z,{in:!0,timeout:700,children:(0,s.jsxs)(a.Z,{sx:(0,o.Z)({display:"flex",flexDirection:"column",height:"100%","& > div:first-of-type":{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"},"& > div:last-of-type":{borderBottomLeftRadius:"12px",borderBottomRightRadius:"12px"}},l),children:[(0,s.jsx)(c.Z.Demo,{sx:{display:"flex",position:"relative",justifyContent:"center",alignItems:"center",minHeight:220,p:2},children:t}),(0,s.jsx)(c.Z.Info,{"data-mui-color-scheme":"dark",sx:{p:2,borderTop:0},children:(0,s.jsx)(r.a,{children:n})})]})})}},717061:function(e,t,n){"use strict";var o=n(11234);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(122268)),i=n(735250);t.default=(0,a.default)((0,i.jsx)("path",{d:"M8.12 14.71 12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.38 1.03.39 1.42 0"}),"KeyboardArrowUpRounded")}}]);