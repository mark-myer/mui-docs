(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[31232,39519],{258350:function(e,t,r){"use strict";var n=r(896798),i=r(532785),o=r(502894),a=r(123280),s=(0,n.Z)({createStyledComponent:(0,o.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["maxWidth".concat((0,i.Z)(String(r.maxWidth)))],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,a.Z)({props:e,name:"MuiContainer"})}});t.Z=s},823462:function(e,t,r){"use strict";var n,i=r(577903),o=r(234046),a=r(778521),s=r(470079),d=r(653048),u=r(306029),c=r(46110),l=r(489121),p=r(360731),f=r(502894),m=r(532785),v=r(307192),h=r(735250),x=["children","className","component","disabled","error","filled","focused","margin","required","variant"],Z=(0,p.Uu)("MuiFormHelperText"),b=function(e){var t=e.classes,r=e.contained,n=e.size,i=e.disabled,o=e.error,a=e.filled,s=e.focused,d=e.required,c={root:["root",i&&"disabled",o&&"error",n&&"size".concat((0,m.Z)(n)),r&&"contained",s&&"focused",a&&"filled",d&&"required"]};return(0,u.Z)(c,v.E,t)},g=(0,f.ZP)("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.size&&t["size".concat((0,m.Z)(r.size))],r.contained&&t.contained,r.filled&&t.filled]}})(function(e){var t,r=e.theme;return(0,a.Z)((0,a.Z)({color:(r.vars||r).palette.text.secondary},r.typography.caption),{},(t={textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0},(0,o.Z)(t,"&.".concat(v.Z.disabled),{color:(r.vars||r).palette.text.disabled}),(0,o.Z)(t,"&.".concat(v.Z.error),{color:(r.vars||r).palette.error.main}),(0,o.Z)(t,"variants",[{props:{size:"small"},style:{marginTop:4}},{props:function(e){return e.ownerState.contained},style:{marginLeft:14,marginRight:14}}]),t))}),y=s.forwardRef(function(e,t){var r=Z({props:e,name:"MuiFormHelperText"}),o=r.children,s=r.className,u=r.component,p=void 0===u?"p":u,f=(r.disabled,r.error,r.filled,r.focused,r.margin,r.required,r.variant,(0,i.Z)(r,x)),m=(0,l.Z)(),v=(0,c.Z)({props:r,muiFormControl:m,states:["variant","size","disabled","error","filled","focused","required"]}),y=(0,a.Z)((0,a.Z)({},r),{},{component:p,contained:"filled"===v.variant||"outlined"===v.variant,variant:v.variant,size:v.size,disabled:v.disabled,error:v.error,filled:v.filled,focused:v.focused,required:v.required});delete y.ownerState;var T=b(y);return(0,h.jsx)(g,(0,a.Z)((0,a.Z)({as:p,className:(0,d.default)(T.root,s),ref:t},f),{},{ownerState:y,children:" "===o?n||(n=(0,h.jsx)("span",{className:"notranslate",children:"​"})):o}))});t.Z=y},307192:function(e,t,r){"use strict";r.d(t,{E:function(){return o}});var n=r(344443),i=r(92358);function o(e){return(0,i.ZP)("MuiFormHelperText",e)}var a=(0,n.Z)("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]);t.Z=a},896798:function(e,t,r){"use strict";r.d(t,{Z:function(){return T}});var n=r(577903),i=r(234046),o=r(778521),a=r(436578),s=r.n(a),d=r(470079),u=r(653048),c=r(92358),l=r(306029),p=r(538941),f=r(153071),m=r(163226),v=r(486967),h=r(735250),x=["className","component","disableGutters","fixed","maxWidth","classes"],Z=(0,v.Z)(),b=(0,m.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["maxWidth".concat((0,p.Z)(String(r.maxWidth)))],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),g=function(e){return(0,f.Z)({props:e,name:"MuiContainer",defaultTheme:Z})},y=function(e,t){var r=e.classes,n=e.fixed,i=e.disableGutters,o=e.maxWidth,a={root:["root",o&&"maxWidth".concat((0,p.Z)(String(o))),n&&"fixed",i&&"disableGutters"]};return(0,l.Z)(a,function(e){return(0,c.ZP)(t,e)},r)};function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,r=e.useThemeProps,a=void 0===r?g:r,c=e.componentName,l=void 0===c?"MuiContainer":c,p=(void 0===t?b:t)(function(e){var t=e.theme,r=e.ownerState;return(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto"},!r.disableGutters&&(0,i.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))},function(e){var t=e.theme;return e.ownerState.fixed&&s()(t.breakpoints.values).reduce(function(e,r){var n=t.breakpoints.values[r];return 0!==n&&(e[t.breakpoints.up(r)]={maxWidth:"".concat(n).concat(t.breakpoints.unit)}),e},{})},function(e){var t=e.theme,r=e.ownerState;return(0,o.Z)((0,o.Z)({},"xs"===r.maxWidth&&(0,i.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)})),r.maxWidth&&"xs"!==r.maxWidth&&(0,i.Z)({},t.breakpoints.up(r.maxWidth),{maxWidth:"".concat(t.breakpoints.values[r.maxWidth]).concat(t.breakpoints.unit)}))});return d.forwardRef(function(e,t){var r=a(e),i=r.className,s=r.component,d=void 0===s?"div":s,c=r.disableGutters,f=r.fixed,m=r.maxWidth,v=(r.classes,(0,n.Z)(r,x)),Z=(0,o.Z)((0,o.Z)({},r),{},{component:d,disableGutters:void 0!==c&&c,fixed:void 0!==f&&f,maxWidth:void 0===m?"lg":m}),b=y(Z,l);return(0,h.jsx)(p,(0,o.Z)({as:d,ownerState:Z,className:(0,u.default)(b.root,i),ref:t},v))})}},640829:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/experiments/docs/demos",function(){return r(879785)}])},884835:function(e,t,r){"use strict";var n=r(311596);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,o,a){if(a!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return r.PropTypes=r,r}},639519:function(e,t,r){e.exports=r(884835)()},311596:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[49774,9535,73976,97146,59727,85925,17376,41373,15686,34800,1351,28937,49807,27779,1945,40188,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,42378,20759,16067,40332,97683,93548,92888,40179],function(){return e(e.s=640829)}),_N_E=e.O()}]);