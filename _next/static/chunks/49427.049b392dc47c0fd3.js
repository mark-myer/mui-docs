"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[49427],{756992:function(o,e,r){var t=r(778521),n=r(577903),i=r(470079),a=r(653048),s=r(306029),l=r(502894),c=r(123280),u=r(453586),p=r(5101),f=r(207315),Z=r(735250),d=["position","className"],m=function(o){var e=o.position,r=o.classes,t={root:["root",e&&(0,f.Z)(e)]};return(0,s.Z)(t,p.a,r)},v=(0,l.ZP)("ul",{name:"MuiTimeline",slot:"Root",overridesResolver:function(o,e){var r=o.ownerState;return[e.root,r.position&&e[(0,f.Z)(r.position)]]}})({display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1}),x=i.forwardRef(function(o,e){var r=(0,c.Z)({props:o,name:"MuiTimeline"}),s=r.position,l=void 0===s?"right":s,p=r.className,f=(0,n.Z)(r,d),x=(0,t.Z)((0,t.Z)({},r),{},{position:l}),g=m(x),h=i.useMemo(function(){return{position:l}},[l]);return(0,Z.jsx)(u.Z.Provider,{value:h,children:(0,Z.jsx)(v,(0,t.Z)({className:(0,a.default)(g.root,p),ownerState:x,ref:e},f))})});e.Z=x},453586:function(o,e,r){var t=r(470079).createContext({});e.Z=t},5101:function(o,e,r){r.d(e,{a:function(){return n}});var t=r(92358);function n(o){return(0,t.ZP)("MuiTimeline",o)}var i=(0,r(344443).Z)("MuiTimeline",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);e.Z=i},157144:function(o,e,r){var t=r(778521),n=r(577903),i=r(470079),a=r(653048),s=r(306029),l=r(502894),c=r(123280),u=r(164547),p=r(735250),f=["className"],Z=function(o){var e=o.classes;return(0,s.Z)({root:["root"]},u.$,e)},d=(0,l.ZP)("span",{name:"MuiTimelineConnector",slot:"Root",overridesResolver:function(o,e){return e.root}})(function(o){var e=o.theme;return{width:2,backgroundColor:(e.vars||e).palette.grey[400],flexGrow:1}}),m=i.forwardRef(function(o,e){var r=(0,c.Z)({props:o,name:"MuiTimelineConnector"}),i=r.className,s=(0,n.Z)(r,f),l=Z(r);return(0,p.jsx)(d,(0,t.Z)({className:(0,a.default)(l.root,i),ownerState:r,ref:e},s))});e.Z=m},164547:function(o,e,r){r.d(e,{$:function(){return n}});var t=r(92358);function n(o){return(0,t.ZP)("MuiTimelineConnector",o)}var i=(0,r(344443).Z)("MuiTimelineConnector",["root"]);e.Z=i},944250:function(o,e,r){var t=r(577903),n=r(778521),i=r(470079),a=r(653048),s=r(502894),l=r(123280),c=r(306029),u=r(781097),p=r(453586),f=r(136714),Z=r(207315),d=r(735250),m=["className"],v=function(o){var e=o.position,r=o.classes,t={root:["root",(0,Z.Z)(e)]};return(0,c.Z)(t,f.e,r)},x=(0,s.ZP)(u.Z,{name:"MuiTimelineContent",slot:"Root",overridesResolver:function(o,e){var r=o.ownerState;return[e.root,e[(0,Z.Z)(r.position)]]}})(function(o){var e=o.ownerState;return(0,n.Z)({flex:1,padding:"6px 16px",textAlign:"left"},"left"===e.position&&{textAlign:"right"})}),g=i.forwardRef(function(o,e){var r=(0,l.Z)({props:o,name:"MuiTimelineContent"}),s=r.className,c=(0,t.Z)(r,m),u=i.useContext(p.Z).position,f=(0,n.Z)((0,n.Z)({},r),{},{position:u||"right"}),Z=v(f);return(0,d.jsx)(x,(0,n.Z)({component:"div",className:(0,a.default)(Z.root,s),ownerState:f,ref:e},c))});e.Z=g},136714:function(o,e,r){r.d(e,{e:function(){return n}});var t=r(92358);function n(o){return(0,t.ZP)("MuiTimelineContent",o)}var i=(0,r(344443).Z)("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);e.Z=i},410616:function(o,e,r){var t=r(577903),n=r(778521),i=r(470079),a=r(653048),s=r(502894),l=r(123280),c=r(532785),u=r(306029),p=r(577895),f=r(735250),Z=["className","color","variant"],d=function(o){var e=o.color,r=o.variant,t=o.classes,n={root:["root",r,"inherit"!==e&&"".concat(r).concat((0,c.Z)(e))]};return(0,u.Z)(n,p.B,t)},m=(0,s.ZP)("span",{name:"MuiTimelineDot",slot:"Root",overridesResolver:function(o,e){var r=o.ownerState;return[e.root,e["inherit"!==r.color&&"".concat(r.variant).concat((0,c.Z)(r.color))],e[r.variant]]}})(function(o){var e=o.ownerState,r=o.theme;return(0,n.Z)((0,n.Z)({display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:(r.vars||r).shadows[1],margin:"11.5px 0"},"filled"===e.variant&&(0,n.Z)({borderColor:"transparent"},"inherit"!==e.color&&(0,n.Z)({},"grey"===e.color?{color:(r.vars||r).palette.grey[50],backgroundColor:(r.vars||r).palette.grey[400]}:{color:(r.vars||r).palette[e.color].contrastText,backgroundColor:(r.vars||r).palette[e.color].main}))),"outlined"===e.variant&&(0,n.Z)({boxShadow:"none",backgroundColor:"transparent"},"inherit"!==e.color&&(0,n.Z)({},"grey"===e.color?{borderColor:(r.vars||r).palette.grey[400]}:{borderColor:(r.vars||r).palette[e.color].main})))}),v=i.forwardRef(function(o,e){var r=(0,l.Z)({props:o,name:"MuiTimelineDot"}),i=r.className,s=r.color,c=r.variant,u=(0,t.Z)(r,Z),p=(0,n.Z)((0,n.Z)({},r),{},{color:void 0===s?"grey":s,variant:void 0===c?"filled":c}),v=d(p);return(0,f.jsx)(m,(0,n.Z)({className:(0,a.default)(v.root,i),ownerState:p,ref:e},u))});e.Z=v},577895:function(o,e,r){r.d(e,{B:function(){return n}});var t=r(92358);function n(o){return(0,t.ZP)("MuiTimelineDot",o)}var i=(0,r(344443).Z)("MuiTimelineDot",["root","filled","outlined","filledGrey","outlinedGrey","filledPrimary","outlinedPrimary","filledSecondary","outlinedSecondary"]);e.Z=i},188201:function(o,e,r){var t=r(577903),n=r(234046),i=r(778521),a=r(470079),s=r(653048),l=r(71156),c=r(502894),u=r(123280),p=r(306029),f=r(136714),Z=r(943662),d=r(453586),m=r(747559),v=r(207315),x=r(735250),g=["position","className"],h=function(o){var e=o.position,r=o.classes,t=o.hasOppositeContent,n={root:["root",(0,v.Z)(e),!t&&"missingOppositeContent"]};return(0,p.Z)(n,m.g,r)},y=(0,c.ZP)("li",{name:"MuiTimelineItem",slot:"Root",overridesResolver:function(o,e){var r=o.ownerState;return[e.root,e[(0,v.Z)(r.position)]]}})(function(o){var e,r=o.ownerState;return(0,i.Z)((0,i.Z)((0,i.Z)({listStyle:"none",display:"flex",position:"relative",minHeight:70},"left"===r.position&&{flexDirection:"row-reverse"}),("alternate"===r.position||"alternate-reverse"===r.position)&&(0,n.Z)({},"&:nth-of-type(".concat("alternate"===r.position?"even":"odd",")"),(e={flexDirection:"row-reverse"},(0,n.Z)(e,"& .".concat(f.Z.root),{textAlign:"right"}),(0,n.Z)(e,"& .".concat(Z.Z.root),{textAlign:"left"}),e))),!r.hasOppositeContent&&{"&::before":{content:'""',flex:1,padding:"6px 16px"}})}),b=a.forwardRef(function(o,e){var r=(0,u.Z)({props:o,name:"MuiTimelineItem"}),n=r.position,c=r.className,p=(0,t.Z)(r,g),f=a.useContext(d.Z).position,Z=!1;a.Children.forEach(r.children,function(o){(0,l.Z)(o,["TimelineOppositeContent"])&&(Z=!0)});var m=(0,i.Z)((0,i.Z)({},r),{},{position:n||f||"right",hasOppositeContent:Z}),v=h(m),b=a.useMemo(function(){return{position:m.position}},[m.position]);return(0,x.jsx)(d.Z.Provider,{value:b,children:(0,x.jsx)(y,(0,i.Z)({className:(0,s.default)(v.root,c),ownerState:m,ref:e},p))})});e.Z=b},747559:function(o,e,r){r.d(e,{g:function(){return n}});var t=r(92358);function n(o){return(0,t.ZP)("MuiTimelineItem",o)}var i=(0,r(344443).Z)("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse","missingOppositeContent"]);e.Z=i},943662:function(o,e,r){r.d(e,{W:function(){return n}});var t=r(92358);function n(o){return(0,t.ZP)("MuiTimelineOppositeContent",o)}var i=(0,r(344443).Z)("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);e.Z=i},827893:function(o,e,r){var t=r(778521),n=r(577903),i=r(470079),a=r(653048),s=r(306029),l=r(502894),c=r(123280),u=r(464724),p=r(735250),f=["className"],Z=function(o){var e=o.classes;return(0,s.Z)({root:["root"]},u.A,e)},d=(0,l.ZP)("div",{name:"MuiTimelineSeparator",slot:"Root",overridesResolver:function(o,e){return e.root}})({display:"flex",flexDirection:"column",flex:0,alignItems:"center"}),m=i.forwardRef(function(o,e){var r=(0,c.Z)({props:o,name:"MuiTimelineSeparator"}),i=r.className,s=(0,n.Z)(r,f),l=Z(r);return(0,p.jsx)(d,(0,t.Z)({className:(0,a.default)(l.root,i),ownerState:r,ref:e},s))});e.Z=m},464724:function(o,e,r){r.d(e,{A:function(){return n}});var t=r(92358);function n(o){return(0,t.ZP)("MuiTimelineSeparator",o)}var i=(0,r(344443).Z)("MuiTimelineSeparator",["root"]);e.Z=i},207315:function(o,e,r){r.d(e,{Z:function(){return n}});var t=r(532785);function n(o){return"alternate-reverse"===o?"positionAlternateReverse":"position".concat((0,t.Z)(o))}},949427:function(o,e,r){r.r(e),r.d(e,{default:function(){return j}});var t,n,i,a,s=r(234046),l=r(778521),c=r(621234),u=r(859861),p=r(601509),f=r(611507),Z=r(781097),d=r(756992),m=r(747559),v=r(188201),x=r(827893),g=r(164547),h=r(157144),y=r(136714),b=r(944250),C=r(577895),w=r(410616),S=r(735250);function j(){var o;return(0,S.jsx)(f.Z,{in:!0,timeout:700,children:(0,S.jsxs)(p.Z,{variant:"outlined",sx:function(o){return(0,l.Z)({p:2,pb:1,display:"flex",alignItems:"flex-start",borderColor:"grey.200",boxShadow:"0px 4px 8px ".concat((0,c.Fq)(o.palette.grey[200],.6))},o.applyDarkStyles({bgcolor:"primaryDark.900",borderColor:"primaryDark.700",boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.2)"}))},children:[(0,S.jsx)(u.Z,{sx:function(o){return(0,l.Z)({height:24,width:24,display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",fontSize:"0.75rem",fontWeight:700,borderRadius:.3,bgcolor:"primary.50",color:"primary.600",border:"1px solid",borderColor:"primary.100"},o.applyDarkStyles({bgcolor:"primary.900",color:"primary.50",borderColor:"primary.800"}))},children:"1"}),(0,S.jsxs)(u.Z,{sx:{ml:2,flex:1},children:[t||(t=(0,S.jsx)(Z.Z,{variant:"body2",color:"text.primary",gutterBottom:!0,children:"Install one of our production-ready libraries to get your next app started inevitably successful:"})),(0,S.jsxs)(d.Z,{sx:[(o={pl:0,py:0,my:0},(0,s.Z)(o,"& .".concat(m.Z.root),{minHeight:24,"&::before":{display:"none"}}),(0,s.Z)(o,"& .".concat(C.Z.root),{zIndex:1,padding:"3px",boxShadow:"none",margin:"15px 0",border:"none",bgcolor:"primary.500"}),(0,s.Z)(o,"& .".concat(g.Z.root),{margin:"-8px 0",bgcolor:"primary.100"}),(0,s.Z)(o,"& .".concat(y.Z.root),{fontSize:"0.875rem",color:"grey.800"}),o),function(o){var e;return o.applyDarkStyles((e={},(0,s.Z)(e,"& .".concat(g.Z.root),{bgcolor:"primary.900"}),(0,s.Z)(e,"& .".concat(y.Z.root),{color:"grey.100"}),e))}],children:[n||(n=(0,S.jsxs)(v.Z,{children:[(0,S.jsxs)(x.Z,{children:[(0,S.jsx)(w.Z,{}),(0,S.jsx)(h.Z,{})]}),(0,S.jsx)(b.Z,{children:"Material UI"})]})),i||(i=(0,S.jsxs)(v.Z,{children:[(0,S.jsxs)(x.Z,{children:[(0,S.jsx)(w.Z,{}),(0,S.jsx)(h.Z,{})]}),(0,S.jsx)(b.Z,{children:"Base UI"})]})),a||(a=(0,S.jsxs)(v.Z,{children:[(0,S.jsx)(x.Z,{children:(0,S.jsx)(w.Z,{})}),(0,S.jsx)(b.Z,{children:"Joy UI"})]}))]})]})]})})}}}]);