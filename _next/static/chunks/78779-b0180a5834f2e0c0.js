(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[78779],{553769:function(e,t,n){"use strict";var r=n(778521),a=n(676326),o=n(863363),i=n(577903),s=n(234046),l=n(470079);n(672037);var d=n(653048),u=n(306029),c=n(360731),p=n(502894),f=n(872883),m=n(146803),h=n(131470),g=n(607812),x=n(639560),v=n(355522),y=n(735250),b=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","slots","slotProps","TransitionComponent","TransitionProps"],Z=(0,c.Uu)("MuiAccordion"),j=function(e){var t=e.classes,n=e.square,r=e.expanded,a=e.disabled,o=e.disableGutters;return(0,u.Z)({root:["root",!n&&"rounded",r&&"expanded",a&&"disabled",!o&&"gutters"],region:["region"]},v.k,t)},k=(0,p.ZP)(m.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,s.Z)({},"& .".concat(v.Z.region),t.region),t.root,!n.square&&t.rounded,!n.disableGutters&&t.gutters]}})(function(e){var t,n=e.theme,r={duration:n.transitions.duration.shortest};return t={position:"relative",transition:n.transitions.create(["margin"],r),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(n.vars||n).palette.divider,transition:n.transitions.create(["opacity","background-color"],r)},"&:first-of-type":{"&::before":{display:"none"}}},(0,s.Z)(t,"&.".concat(v.Z.expanded),{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}}),(0,s.Z)(t,"&.".concat(v.Z.disabled),{backgroundColor:(n.vars||n).palette.action.disabledBackground}),t},function(e){var t=e.theme;return{variants:[{props:function(e){return!e.square},style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(t.vars||t).shape.borderRadius,borderTopRightRadius:(t.vars||t).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(t.vars||t).shape.borderRadius,borderBottomRightRadius:(t.vars||t).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:function(e){return!e.disableGutters},style:(0,s.Z)({},"&.".concat(v.Z.expanded),{margin:"16px 0"})}]}}),_=l.forwardRef(function(e,t){var n=Z({props:e,name:"MuiAccordion"}),s=n.children,u=n.className,c=n.defaultExpanded,p=n.disabled,m=void 0!==p&&p,v=n.disableGutters,_=void 0!==v&&v,w=n.expanded,M=n.onChange,C=n.square,D=void 0!==C&&C,R=n.slots,I=n.slotProps,S=n.TransitionComponent,A=n.TransitionProps,P=(0,i.Z)(n,b),T=(0,g.Z)({controlled:w,default:void 0!==c&&c,name:"Accordion",state:"expanded"}),G=(0,o.Z)(T,2),U=G[0],z=G[1],B=l.useCallback(function(e){z(!U),M&&M(e,!U)},[U,M,z]),L=l.Children.toArray(s),N=(0,a.Z)(L),V=N[0],E=N.slice(1),F=l.useMemo(function(){return{expanded:U,disabled:m,disableGutters:_,toggle:B}},[U,m,_,B]),O=(0,r.Z)((0,r.Z)({},n),{},{square:D,disabled:m,disableGutters:_,expanded:U}),q=j(O),W=(0,r.Z)({transition:S},void 0===R?{}:R),H=(0,r.Z)({transition:A},void 0===I?{}:I),K=(0,x.Z)("transition",{elementType:f.Z,externalForwardedProps:{slots:W,slotProps:H},ownerState:O}),J=(0,o.Z)(K,2),Y=J[0],X=J[1];return(0,y.jsxs)(k,(0,r.Z)((0,r.Z)({className:(0,d.default)(q.root,u),ref:t,ownerState:O,square:D},P),{},{children:[(0,y.jsx)(h.Z.Provider,{value:F,children:V}),(0,y.jsx)(Y,(0,r.Z)((0,r.Z)({in:U,timeout:"auto"},X),{},{children:(0,y.jsx)("div",{"aria-labelledby":V.props.id,id:V.props["aria-controls"],role:"region",className:q.region,children:E})}))]}))});t.Z=_},131470:function(e,t,n){"use strict";var r=n(470079).createContext({});t.Z=r},355522:function(e,t,n){"use strict";n.d(t,{k:function(){return o}});var r=n(344443),a=n(92358);function o(e){return(0,a.ZP)("MuiAccordion",e)}var i=(0,r.Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]);t.Z=i},811716:function(e,t,n){"use strict";var r=n(778521),a=n(577903),o=n(470079),i=n(653048),s=n(306029),l=n(360731),d=n(502894),u=n(431374),c=n(735250),p=["className"],f=(0,l.Uu)("MuiAccordionDetails"),m=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},u.s,t)},h=(0,d.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(e,t){return t.root}})(function(e){return{padding:e.theme.spacing(1,2,2)}}),g=o.forwardRef(function(e,t){var n=f({props:e,name:"MuiAccordionDetails"}),o=n.className,s=(0,a.Z)(n,p),l=m(n);return(0,c.jsx)(h,(0,r.Z)({className:(0,i.default)(l.root,o),ref:t,ownerState:n},s))});t.Z=g},431374:function(e,t,n){"use strict";n.d(t,{s:function(){return o}});var r=n(344443),a=n(92358);function o(e){return(0,a.ZP)("MuiAccordionDetails",e)}var i=(0,r.Z)("MuiAccordionDetails",["root"]);t.Z=i},517283:function(e,t,n){"use strict";var r=n(778521),a=n(577903),o=n(234046),i=n(470079),s=n(653048),l=n(306029),d=n(360731),u=n(502894),c=n(214549),p=n(131470),f=n(648058),m=n(735250),h=["children","className","expandIcon","focusVisibleClassName","onClick"],g=(0,d.Uu)("MuiAccordionSummary"),x=function(e){var t=e.classes,n=e.expanded,r=e.disabled,a=e.disableGutters;return(0,l.Z)({root:["root",n&&"expanded",r&&"disabled",!a&&"gutters"],focusVisible:["focusVisible"],content:["content",n&&"expanded",!a&&"contentGutters"],expandIconWrapper:["expandIconWrapper",n&&"expanded"]},f.i,t)},v=(0,u.ZP)(c.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:function(e,t){return t.root}})(function(e){var t,n=e.theme,r={duration:n.transitions.duration.shortest};return t={display:"flex",minHeight:48,padding:n.spacing(0,2),transition:n.transitions.create(["min-height","background-color"],r)},(0,o.Z)(t,"&.".concat(f.Z.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,o.Z)(t,"&.".concat(f.Z.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),(0,o.Z)(t,"&:hover:not(.".concat(f.Z.disabled,")"),{cursor:"pointer"}),(0,o.Z)(t,"variants",[{props:function(e){return!e.disableGutters},style:(0,o.Z)({},"&.".concat(f.Z.expanded),{minHeight:64})}]),t}),y=(0,u.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:function(e,t){return t.content}})(function(e){var t=e.theme;return{display:"flex",flexGrow:1,margin:"12px 0",variants:[{props:function(e){return!e.disableGutters},style:(0,o.Z)({transition:t.transitions.create(["margin"],{duration:t.transitions.duration.shortest})},"&.".concat(f.Z.expanded),{margin:"20px 0"})}]}}),b=(0,u.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:function(e,t){return t.expandIconWrapper}})(function(e){var t=e.theme;return(0,o.Z)({display:"flex",color:(t.vars||t).palette.action.active,transform:"rotate(0deg)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})},"&.".concat(f.Z.expanded),{transform:"rotate(180deg)"})}),Z=i.forwardRef(function(e,t){var n=g({props:e,name:"MuiAccordionSummary"}),o=n.children,l=n.className,d=n.expandIcon,u=n.focusVisibleClassName,c=n.onClick,f=(0,a.Z)(n,h),Z=i.useContext(p.Z),j=Z.disabled,k=void 0!==j&&j,_=Z.disableGutters,w=Z.expanded,M=Z.toggle,C=(0,r.Z)((0,r.Z)({},n),{},{expanded:w,disabled:k,disableGutters:_}),D=x(C);return(0,m.jsxs)(v,(0,r.Z)((0,r.Z)({focusRipple:!1,disableRipple:!0,disabled:k,component:"div","aria-expanded":w,className:(0,s.default)(D.root,l),focusVisibleClassName:(0,s.default)(D.focusVisible,u),onClick:function(e){M&&M(e),c&&c(e)},ref:t,ownerState:C},f),{},{children:[(0,m.jsx)(y,{className:D.content,ownerState:C,children:o}),d&&(0,m.jsx)(b,{className:D.expandIconWrapper,ownerState:C,children:d})]}))});t.Z=Z},648058:function(e,t,n){"use strict";n.d(t,{i:function(){return o}});var r=n(344443),a=n(92358);function o(e){return(0,a.ZP)("MuiAccordionSummary",e)}var i=(0,r.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]);t.Z=i},183338:function(e,t,n){"use strict";n.d(t,{Rt:function(){return E},ZP:function(){return F},oP:function(){return V}});var r,a,o,i,s,l,d,u,c,p,f,m,h=n(234046),g=n(863363),x=n(778521),v=n(470079),y=n(502894),b=n(621234),Z=n(859861),j=n(651600),k=n(320897),_=n(611507),w=n(781097),M=n(786310),C=n(69723),D=n(443527),R=n(787385),I=n(170027),S=n(694776),A=n(535350),P=n(317549),T=n(465989),G=n(748550),U=n(589534),z=n(215129),B=n(735250),L=["Components","Branding","Iconography"],N=(0,y.ZP)("img")(function(e){var t=e.theme;return(0,x.Z)({transition:"0.4s",display:"block",height:"auto",borderRadius:6,border:"1px solid",borderColor:t.palette.divider,filter:"drop-shadow(-2px 4px 6px ".concat((0,b.Fq)(t.palette.grey[500],.5),")")},t.applyDarkStyles({filter:"drop-shadow(-2px 4px 6px ".concat((0,b.Fq)(t.palette.common.black,.2),")"),borderColor:t.palette.primaryDark[600]}))});function V(e){var t=e.fadeIn;return(0,B.jsx)(_.Z,{in:t,timeout:500,children:(0,B.jsxs)(Z.Z,{sx:[{width:"100%",height:"100%","& img":{position:"absolute",left:"50%",width:{xs:220,sm:300},"&:nth-of-type(1)":{top:120,transform:"translate(-70%)"},"&:nth-of-type(2)":{top:80,transform:"translate(-50%)"},"&:nth-of-type(3)":{top:40,transform:"translate(-30%)"}},"&:hover":{"& img":{filter:"drop-shadow(-16px 12px 20px rgba(61, 71, 82, 0.2))","&:nth-of-type(1)":{top:0,transform:"scale(0.8) translate(-110%) rotateY(30deg)"},"&:nth-of-type(2)":{top:40,transform:"scale(0.8) translate(-60%) rotateY(30deg)"},"&:nth-of-type(3)":{top:40,transform:"scale(0.8) translate(-10%) rotateY(30deg)"}}}},function(e){return e.applyDarkStyles({"&:hover":{"& img":{filter:"drop-shadow(-16px 12px 20px rgba(0, 0, 0, 0.4))"}}})}],children:[(0,B.jsx)(N,{src:"/static/branding/design-kits/Button-light.jpeg",alt:"Material UI Button component variations in the Figma Design Kit.",loading:"lazy",sx:function(e){return e.applyDarkStyles({content:"url(/static/branding/design-kits/Button-dark.jpeg)"})}}),(0,B.jsx)(N,{src:"/static/branding/design-kits/Alert-light.jpeg",alt:"Material UI Alert component variations in the Figma Design Kit.",loading:"lazy",sx:function(e){return e.applyDarkStyles({content:"url(/static/branding/design-kits/Alert-dark.jpeg)"})}}),(0,B.jsx)(N,{src:"/static/branding/design-kits/Slider-light.jpeg",alt:"Material UI Slider component variations in the Figma Design Kit.",loading:"lazy",sx:function(e){return e.applyDarkStyles({content:"url(/static/branding/design-kits/Slider-dark.jpeg)"})}})]})})}function E(){return(0,B.jsxs)(U.Z.Info,{"data-mui-color-scheme":"dark",children:[(0,B.jsxs)(Z.Z,{sx:{display:"flex",alignItems:"center",gap:1,mb:.5},children:[r||(r=(0,B.jsx)(w.Z,{variant:"body2",fontWeight:"semiBold",children:"Available in:"})),(0,B.jsxs)(Z.Z,{sx:{display:"flex",gap:1,"& >img":{width:20,height:20}},children:[a||(a=(0,B.jsx)("img",{src:"/static/branding/design-kits/figma-logo.svg",alt:"Figma logo.",loading:"lazy"})),o||(o=(0,B.jsx)("img",{src:"/static/branding/design-kits/sketch-logo.svg",alt:"Sketch logo.",loading:"lazy"})),i||(i=(0,B.jsx)("img",{src:"/static/branding/design-kits/adobexd-logo.svg",alt:"Adobe XD logo.",loading:"lazy"}))]})]}),s||(s=(0,B.jsx)(w.Z,{variant:"body2",color:"text.secondary",mb:2,children:"We frequently update them to stay up-to-date with the latest release."})),(0,B.jsxs)(Z.Z,{sx:{display:"flex",flexDirection:{xs:"column",sm:"row"},gap:1.5},children:[l||(l=(0,B.jsx)(j.Z,{component:z.r,variant:"contained",size:"small",noLinkStyle:!0,href:"https://mui.com/store/?utm_source=marketing&utm_medium=referral&utm_campaign=design-cta2#design",endIcon:(0,B.jsx)(M.default,{}),children:"Buy it now"})),(0,B.jsx)(j.Z,{component:z.r,variant:"outlined",size:"small",color:"secondary",href:"https://www.figma.com/community/file/912837788133317724/material-ui-for-figma-and-mui-x",startIcon:(0,B.jsx)("img",{src:"/static/branding/design-kits/figma-logo.svg",alt:"",loading:"lazy",style:{width:16,height:16}}),children:"Figma Preview"})]})]})}function F(){var e,t=v.useState(L[0]),n=(0,g.Z)(t,2),r=n[0],a=n[1],o=(e={},(0,h.Z)(e,L[0],d||(d=(0,B.jsx)(R.default,{fontSize:"small"}))),(0,h.Z)(e,L[1],u||(u=(0,B.jsx)(C.default,{fontSize:"small"}))),(0,h.Z)(e,L[2],c||(c=(0,B.jsx)(D.default,{fontSize:"small"}))),e);return(0,B.jsx)(I.Z,{bg:"gradient",cozy:!0,children:(0,B.jsxs)(k.Z,{container:!0,spacing:2,alignItems:"center",children:[(0,B.jsxs)(k.Z,{md:6,sx:{minWidth:0},children:[p||(p=(0,B.jsx)(S.Z,{overline:"Design Kits",title:(0,B.jsxs)(w.Z,{variant:"h2",children:["Enhance your ",(0,B.jsx)(A.Z,{children:"design workflow"})]}),description:"The Design Kits contain many of the Material UI components with states, variations, colors, typography, and icons."})),(0,B.jsxs)(P.Z,{desktopColumns:2,sx:{m:-2,p:2},children:[L.map(function(e){return(0,B.jsx)(T.Z,{selected:e===r,onClick:function(){return a(e)},children:(0,B.jsx)(P.C,{icon:v.cloneElement(o[e],e===r?{color:"primary"}:{}),title:e})},e)}),f||(f=(0,B.jsx)(G.Z,{component:z.r,href:"https://mui.com/store/?utm_source=marketing&utm_medium=referral&utm_campaign=design-cta3#design",noLinkStyle:!0}))]})]}),(0,B.jsx)(k.Z,{xs:12,md:6,children:(0,B.jsxs)(U.Z,{children:[(0,B.jsxs)(U.Z.Demo,{sx:{overflow:"clip",height:{xs:240,sm:390}},children:[(0,B.jsx)(V,{fadeIn:"Components"===r}),(0,B.jsx)(_.Z,{in:"Branding"===r,timeout:500,children:(0,B.jsx)(N,{src:"/static/branding/design-kits/Colors-light.jpeg",alt:"Available colors on the Material UI Kit.",loading:"lazy",width:"300",sx:function(e){return(0,x.Z)({width:{sm:400},position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},e.applyDarkStyles({content:"url(/static/branding/design-kits/Colors-dark.jpeg)"}))}})}),(0,B.jsx)(_.Z,{in:"Iconography"===r,timeout:500,children:(0,B.jsx)(N,{src:"/static/branding/design-kits/Icons-light.jpeg",alt:"A bunch of icons available with the Material UI Design Kits.",loading:"lazy",width:"300",sx:function(e){return(0,x.Z)({width:{sm:500},position:"absolute",left:"50%",top:60,transform:"translate(-40%)"},e.applyDarkStyles({content:"url(/static/branding/design-kits/Icons-dark.jpeg)"}))}})})]}),m||(m=(0,B.jsx)(E,{}))]})})]})})}},947479:function(e,t,n){"use strict";n.d(t,{Z:function(){return M}});var r,a,o,i,s,l,d=n(470079),u=n(621234),c=n(859861),p=n(320897),f=n(608361),m=n(786427),h=n(781097),g=n(810727),x=n(962604),v=n(190800),y=n(77718),b=n(170027),Z=n(694776),j=n(535350),k=n(215129),_=n(905636),w=n(735250);function M(e){var t=e.noFaq;return(0,w.jsx)(b.Z,{cozy:!0,"data-mui-color-scheme":"dark",sx:{color:"text.secondary",background:function(e){return"linear-gradient(180deg, ".concat((e.vars||e).palette.primaryDark[900]," 50%, \n          ").concat((0,u.Fq)(e.palette.primary[800],.2)," 100%), ").concat((e.vars||e).palette.primaryDark[900])}},children:t?(0,w.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[r||(r=(0,w.jsx)(Z.Z,{alwaysCenter:!0,overline:"Community",title:(0,w.jsxs)(h.Z,{variant:"h2",children:["Join our ",(0,w.jsx)(j.Z,{children:"global community"})]}),description:(0,w.jsx)(d.Fragment,{children:"Material UI wouldn't be possible without our global community of contributors. Join us today to get help when you need it, and lend a hand when you can."})})),(0,w.jsx)(y.Z,{primaryUrl:_.Z.materialDocs,secondaryLabel:"View templates",secondaryUrl:_.Z.freeTemplates,altInstallation:"npm install @mui/material @emotion/react @emotion/styled"})]}):(0,w.jsxs)(p.Z,{container:!0,spacing:{xs:6,sm:10},alignItems:"center",children:[(0,w.jsxs)(p.Z,{xs:12,sm:6,children:[a||(a=(0,w.jsx)(Z.Z,{overline:"Community",title:(0,w.jsxs)(h.Z,{variant:"h2",children:["Join our ",(0,w.jsx)(j.Z,{children:"global community"})]}),description:(0,w.jsx)(d.Fragment,{children:"Material UI wouldn't be possible without our global community of contributors. Join us today to get help when you need it, and lend a hand when you can."})})),(0,w.jsx)(y.Z,{primaryUrl:_.Z.materialDocs,secondaryLabel:"View templates",secondaryUrl:_.Z.freeTemplates,altInstallation:"npm install @mui/material @emotion/react @emotion/styled"})]}),(0,w.jsx)(p.Z,{xs:12,sm:6,children:(0,w.jsxs)(f.Z,{sx:{"& > li":{alignItems:"flex-start"}},children:[(0,w.jsxs)(m.ZP,{sx:{p:0,mb:4,gap:2.5},children:[o||(o=(0,w.jsx)(v.O,{icon:(0,w.jsx)(g.default,{color:"primary"})})),i||(i=(0,w.jsxs)("div",{children:[(0,w.jsx)(h.Z,{color:"text.primary",fontWeight:"semiBold",gutterBottom:!0,children:"Material UI vs. Base UI"}),(0,w.jsx)(h.Z,{children:"Material UI implements Google's Material Design whereas Base UI features many of the same components, but without the Material Design implementation."})]}))]}),(0,w.jsxs)(m.ZP,{sx:{p:0,gap:2.5},children:[s||(s=(0,w.jsx)(v.O,{icon:(0,w.jsx)(x.default,{color:"primary"})})),l||(l=(0,w.jsxs)("div",{children:[(0,w.jsx)(h.Z,{color:"text.primary",fontWeight:"semiBold",gutterBottom:!0,children:"Does it support Material Design 3?"}),(0,w.jsxs)(h.Z,{children:["The adoption of Material Design 3 is tentatively planned for Material UI v7. See the"," ",(0,w.jsx)(k.r,{href:"https://mui.com/versions/#release-schedule",children:"the release schedule"})," ","and follow"," ",(0,w.jsx)(k.r,{href:"https://github.com/mui/material-ui/issues/29345",children:"this GitHub issue"})," ","for future updates."]})]}))]})]})})]})})}},176307:function(e,t,n){"use strict";var r=n(582103).default,a=n(725598),o=n(429442),i=n(758869);a(t,"__esModule",{value:!0}),function(e,t){for(var n in t)a(e,n,{enumerable:!0,get:t[n]})}(t,{noSSR:function(){return u},default:function(){return c}});var s=n(427597),l=(n(470079),s._(n(677370)));function d(e){return{default:(null==e?void 0:e.default)||e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}function c(e,t){var n=l.default,a={loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};e instanceof o?a.loader=function(){return e}:"function"==typeof e?a.loader=e:"object"==typeof e&&(a=r(r({},a),e));var i=(a=r(r({},a),t)).loader;return(a.loadableGenerated&&(a=r(r({},a),a.loadableGenerated),delete a.loadableGenerated),"boolean"!=typeof a.ssr||a.ssr)?n(r(r({},a),{},{loader:function(){return null!=i?i().then(d):o.resolve(d(function(){return null}))}})):(delete a.webpack,delete a.modules,u(n,a))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(a(t.default,"__esModule",{value:!0}),i(t.default,t),e.exports=t.default)},787677:function(e,t,n){"use strict";var r=n(725598);r(t,"__esModule",{value:!0}),r(t,"LoadableContext",{enumerable:!0,get:function(){return a}});var a=n(427597)._(n(470079)).default.createContext(null)},677370:function(e,t,n){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/var r=n(582103).default,a=n(950422).default,o=n(691738).default,i=n(91854).default,s=n(725598),l=n(758869),d=n(408011),u=n(125127),c=n(429442);s(t,"__esModule",{value:!0}),s(t,"default",{enumerable:!0,get:function(){return Z}});var p=n(427597)._(n(470079)),f=n(787677),m=[],h=[],g=!1;function x(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(function(e){return n.loading=!1,n.loaded=e,e}).catch(function(e){throw n.loading=!1,n.error=e,e}),n}var v=function(){function e(t,n){a(this,e),this._loadFn=t,this._opts=n,this._callbacks=new u,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"==typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},n.delay)),"number"==typeof n.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},n.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(t){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=r(r({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function y(e){return function(e,t){var n=l({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function a(){if(!r){var t=new v(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!g){var o=n.webpack?n.webpack():n.modules;o&&h.push(function(e){var t,n=i(o);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(e.includes(r))return a()}}catch(e){n.e(e)}finally{n.f()}})}function s(e,t){a(),(o=p.default.useContext(f.LoadableContext))&&d(n.modules)&&n.modules.forEach(function(e){o(e)});var o,i=p.default.useSyncExternalStore(r.subscribe,r.getCurrentValue,r.getCurrentValue);return p.default.useImperativeHandle(t,function(){return{retry:r.retry}},[]),p.default.useMemo(function(){var t;return i.loading||i.error?p.default.createElement(n.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:r.retry}):i.loaded?p.default.createElement((t=i.loaded)&&t.default?t.default:t,e):null},[e,i])}return s.preload=function(){return a()},s.displayName="LoadableComponent",p.default.forwardRef(s)}(x,e)}function b(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return c.all(n).then(function(){if(e.length)return b(e,t)})}y.preloadAll=function(){return new c(function(e,t){b(m).then(e,t)})},y.preloadReady=function(e){return void 0===e&&(e=[]),new c(function(t){var n=function(){return g=!0,t()};b(h,e).then(n,n)})},window.__NEXT_PRELOADREADY=y.preloadReady;var Z=y},915033:function(e,t,n){e.exports=n(176307)},786310:function(e,t,n){"use strict";var r=n(11234);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(122268)),o=n(735250);t.default=(0,a.default)((0,o.jsx)("path",{d:"M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01"}),"ChevronRightRounded")},810727:function(e,t,n){"use strict";var r=n(11234);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(122268)),o=n(735250);t.default=(0,a.default)((0,o.jsx)("path",{d:"M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2V1h-2zm0 15H5l5-6zm9-15h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"}),"Compare")},962604:function(e,t,n){"use strict";var r=n(11234);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(122268)),o=n(735250);t.default=(0,a.default)((0,o.jsx)("path",{d:"m2.53 19.65 1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61m19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6M7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34z"}),"StyleRounded")},787385:function(e,t,n){"use strict";var r=n(11234);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(122268)),o=n(735250);t.default=(0,a.default)((0,o.jsx)("path",{d:"M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5m0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3"}),"ToggleOnRounded")},443527:function(e,t,n){"use strict";var r=n(11234);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(122268)),o=n(735250);t.default=(0,a.default)((0,o.jsx)("path",{d:"M13 14v6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1m-9 7h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1M3 4v6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1m12.95-1.6L11.7 6.64c-.39.39-.39 1.02 0 1.41l4.25 4.25c.39.39 1.02.39 1.41 0l4.25-4.25c.39-.39.39-1.02 0-1.41L17.37 2.4c-.39-.39-1.03-.39-1.42 0"}),"WidgetsRounded")},676326:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(263309),a=n(801894),o=n(667970),i=n(249441);function s(e){return(0,r.Z)(e)||(0,a.Z)(e)||(0,o.Z)(e)||(0,i.Z)()}}}]);