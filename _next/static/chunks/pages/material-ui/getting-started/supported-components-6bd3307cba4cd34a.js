(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[75385,39519,32670],{333897:function(e,a,t){var n=t(915012),i=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(i,""):e}},915012:function(e){var a=/\s/;e.exports=function(e){for(var t=e.length;t--&&a.test(e.charAt(t)););return t}},889678:function(e,a,t){var n=t(706627),i=t(885365),r=t(67948),o=Math.max,l=Math.min;e.exports=function(e,a,t){var m,s,c,p,u,d,g=0,h=!1,v=!1,f=!0;if("function"!=typeof e)throw TypeError("Expected a function");function b(a){var t=m,n=s;return m=s=void 0,g=a,p=e.apply(n,t)}function y(e){var t=e-d,n=e-g;return void 0===d||t>=a||t<0||v&&n>=c}function I(){var e,t,n,r=i();if(y(r))return U(r);u=setTimeout(I,(e=r-d,t=r-g,n=a-e,v?l(n,c-t):n))}function U(e){return(u=void 0,f&&m)?b(e):(m=s=void 0,p)}function x(){var e,t=i(),n=y(t);if(m=arguments,s=this,d=t,n){if(void 0===u)return g=e=d,u=setTimeout(I,a),h?b(e):p;if(v)return clearTimeout(u),u=setTimeout(I,a),b(d)}return void 0===u&&(u=setTimeout(I,a)),p}return a=r(a)||0,n(t)&&(h=!!t.leading,c=(v="maxWait"in t)?o(r(t.maxWait)||0,a):c,f="trailing"in t?!!t.trailing:f),x.cancel=function(){void 0!==u&&clearTimeout(u),g=0,m=d=s=u=void 0},x.flush=function(){return void 0===u?p:U(i())},x}},706627:function(e){e.exports=function(e){var a=typeof e;return null!=e&&("object"==a||"function"==a)}},885365:function(e,a,t){var n=t(573401);e.exports=function(){return n.Date.now()}},123763:function(e,a,t){var n=t(889678),i=t(706627);e.exports=function(e,a,t){var r=!0,o=!0;if("function"!=typeof e)throw TypeError("Expected a function");return i(t)&&(r="leading"in t?!!t.leading:r,o="trailing"in t?!!t.trailing:o),n(e,a,{leading:r,maxWait:a,trailing:o})}},67948:function(e,a,t){var n=t(333897),i=t(706627),r=t(42848),o=0/0,l=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(r(e))return o;if(i(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=i(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var t=m.test(e);return t||s.test(e)?c(e.slice(2),t?2:8):l.test(e)?o:+e}},437053:function(e,a,t){"use strict";var n=t(577903),i=t(778521),r=t(470079),o=t(653048),l=t(306029),m=t(901156),s=t(360731),c=t(502894),p=t(281935),u=t(735250),d=["className","component","padding","size","stickyHeader"],g=(0,s.Uu)("MuiTable"),h=function(e){var a=e.classes,t=e.stickyHeader;return(0,l.Z)({root:["root",t&&"stickyHeader"]},p.K,a)},v=(0,c.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[a.root,t.stickyHeader&&a.stickyHeader]}})(function(e){var a=e.theme;return{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,i.Z)((0,i.Z)({},a.typography.body2),{},{padding:a.spacing(2),color:(a.vars||a).palette.text.secondary,textAlign:"left",captionSide:"bottom"}),variants:[{props:function(e){return e.ownerState.stickyHeader},style:{borderCollapse:"separate"}}]}}),f="table",b=r.forwardRef(function(e,a){var t=g({props:e,name:"MuiTable"}),l=t.className,s=t.component,c=void 0===s?f:s,p=t.padding,b=void 0===p?"normal":p,y=t.size,I=void 0===y?"medium":y,U=t.stickyHeader,x=void 0!==U&&U,w=(0,n.Z)(t,d),Z=(0,i.Z)((0,i.Z)({},t),{},{component:c,padding:b,size:I,stickyHeader:x}),T=h(Z),D=r.useMemo(function(){return{padding:b,size:I,stickyHeader:x}},[b,I,x]);return(0,u.jsx)(m.Z.Provider,{value:D,children:(0,u.jsx)(v,(0,i.Z)({as:c,role:c===f?null:"table",ref:a,className:(0,o.default)(T.root,l),ownerState:Z},w))})});a.Z=b},901156:function(e,a,t){"use strict";var n=t(470079).createContext();a.Z=n},435142:function(e,a,t){"use strict";var n=t(470079).createContext();a.Z=n},281935:function(e,a,t){"use strict";t.d(a,{K:function(){return r}});var n=t(344443),i=t(92358);function r(e){return(0,i.ZP)("MuiTable",e)}var o=(0,n.Z)("MuiTable",["root","stickyHeader"]);a.Z=o},191469:function(e,a,t){"use strict";var n=t(778521),i=t(577903),r=t(470079),o=t(653048),l=t(306029),m=t(435142),s=t(360731),c=t(502894),p=t(36635),u=t(735250),d=["className","component"],g=(0,s.Uu)("MuiTableBody"),h=function(e){var a=e.classes;return(0,l.Z)({root:["root"]},p.j,a)},v=(0,c.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,a){return a.root}})({display:"table-row-group"}),f={variant:"body"},b="tbody",y=r.forwardRef(function(e,a){var t=g({props:e,name:"MuiTableBody"}),r=t.className,l=t.component,s=void 0===l?b:l,c=(0,i.Z)(t,d),p=(0,n.Z)((0,n.Z)({},t),{},{component:s}),y=h(p);return(0,u.jsx)(m.Z.Provider,{value:f,children:(0,u.jsx)(v,(0,n.Z)({className:(0,o.default)(y.root,r),as:s,ref:a,role:s===b?null:"rowgroup",ownerState:p},c))})});a.Z=y},36635:function(e,a,t){"use strict";t.d(a,{j:function(){return r}});var n=t(344443),i=t(92358);function r(e){return(0,i.ZP)("MuiTableBody",e)}var o=(0,n.Z)("MuiTableBody",["root"]);a.Z=o},84370:function(e,a,t){"use strict";var n=t(577903),i=t(234046),r=t(778521),o=t(470079),l=t(653048),m=t(306029),s=t(621234),c=t(532785),p=t(901156),u=t(435142),d=t(360731),g=t(502894),h=t(657596),v=t(735250),f=["align","className","component","padding","scope","size","sortDirection","variant"],b=(0,d.Uu)("MuiTableCell"),y=function(e){var a=e.classes,t=e.variant,n=e.align,i=e.padding,r=e.size,o={root:["root",t,e.stickyHeader&&"stickyHeader","inherit"!==n&&"align".concat((0,c.Z)(n)),"normal"!==i&&"padding".concat((0,c.Z)(i)),"size".concat((0,c.Z)(r))]};return(0,m.Z)(o,h.U,a)},I=(0,g.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[a.root,a[t.variant],a["size".concat((0,c.Z)(t.size))],"normal"!==t.padding&&a["padding".concat((0,c.Z)(t.padding))],"inherit"!==t.align&&a["align".concat((0,c.Z)(t.align))],t.stickyHeader&&a.stickyHeader]}})(function(e){var a=e.theme;return(0,r.Z)((0,r.Z)({},a.typography.body2),{},{display:"table-cell",verticalAlign:"inherit",borderBottom:a.vars?"1px solid ".concat(a.vars.palette.TableCell.border):"1px solid\n    ".concat("light"===a.palette.mode?(0,s.$n)((0,s.Fq)(a.palette.divider,1),.88):(0,s._j)((0,s.Fq)(a.palette.divider,1),.68)),textAlign:"left",padding:16,variants:[{props:{variant:"head"},style:{color:(a.vars||a).palette.text.primary,lineHeight:a.typography.pxToRem(24),fontWeight:a.typography.fontWeightMedium}},{props:{variant:"body"},style:{color:(a.vars||a).palette.text.primary}},{props:{variant:"footer"},style:{color:(a.vars||a).palette.text.secondary,lineHeight:a.typography.pxToRem(21),fontSize:a.typography.pxToRem(12)}},{props:{size:"small"},style:(0,i.Z)({padding:"6px 16px"},"&.".concat(h.Z.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}})},{props:{padding:"checkbox"},style:{width:48,padding:"0 0 0 4px"}},{props:{padding:"none"},style:{padding:0}},{props:{align:"left"},style:{textAlign:"left"}},{props:{align:"center"},style:{textAlign:"center"}},{props:{align:"right"},style:{textAlign:"right",flexDirection:"row-reverse"}},{props:{align:"justify"},style:{textAlign:"justify"}},{props:function(e){return e.ownerState.stickyHeader},style:{position:"sticky",top:0,zIndex:2,backgroundColor:(a.vars||a).palette.background.default}}]})}),U=o.forwardRef(function(e,a){var t,i=b({props:e,name:"MuiTableCell"}),m=i.align,s=i.className,c=i.component,d=i.padding,g=i.scope,h=i.size,U=i.sortDirection,x=i.variant,w=(0,n.Z)(i,f),Z=o.useContext(p.Z),T=o.useContext(u.Z),D=T&&"head"===T.variant,C=g;"td"===(t=c||(D?"th":"td"))?C=void 0:!C&&D&&(C="col");var k=x||T&&T.variant,M=(0,r.Z)((0,r.Z)({},i),{},{align:void 0===m?"inherit":m,component:t,padding:d||(Z&&Z.padding?Z.padding:"normal"),size:h||(Z&&Z.size?Z.size:"medium"),sortDirection:U,stickyHeader:"head"===k&&Z&&Z.stickyHeader,variant:k}),H=y(M),j=null;return U&&(j="asc"===U?"ascending":"descending"),(0,v.jsx)(I,(0,r.Z)({as:t,ref:a,className:(0,l.default)(H.root,s),"aria-sort":j,scope:C,ownerState:M},w))});a.Z=U},657596:function(e,a,t){"use strict";t.d(a,{U:function(){return r}});var n=t(344443),i=t(92358);function r(e){return(0,i.ZP)("MuiTableCell",e)}var o=(0,n.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);a.Z=o},77601:function(e,a,t){"use strict";var n=t(778521),i=t(577903),r=t(470079),o=t(653048),l=t(306029),m=t(435142),s=t(360731),c=t(502894),p=t(895701),u=t(735250),d=["className","component"],g=(0,s.Uu)("MuiTableHead"),h=function(e){var a=e.classes;return(0,l.Z)({root:["root"]},p.s,a)},v=(0,c.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,a){return a.root}})({display:"table-header-group"}),f={variant:"head"},b="thead",y=r.forwardRef(function(e,a){var t=g({props:e,name:"MuiTableHead"}),r=t.className,l=t.component,s=void 0===l?b:l,c=(0,i.Z)(t,d),p=(0,n.Z)((0,n.Z)({},t),{},{component:s}),y=h(p);return(0,u.jsx)(m.Z.Provider,{value:f,children:(0,u.jsx)(v,(0,n.Z)({as:s,className:(0,o.default)(y.root,r),ref:a,role:s===b?null:"rowgroup",ownerState:p},c))})});a.Z=y},895701:function(e,a,t){"use strict";t.d(a,{s:function(){return r}});var n=t(344443),i=t(92358);function r(e){return(0,i.ZP)("MuiTableHead",e)}var o=(0,n.Z)("MuiTableHead",["root"]);a.Z=o},118784:function(e,a,t){"use strict";var n=t(778521),i=t(577903),r=t(234046),o=t(470079),l=t(653048),m=t(306029),s=t(621234),c=t(435142),p=t(360731),u=t(502894),d=t(814395),g=t(735250),h=["className","component","hover","selected"],v=(0,p.Uu)("MuiTableRow"),f=function(e){var a=e.classes,t=e.selected,n=e.hover,i=e.head,r=e.footer;return(0,m.Z)({root:["root",t&&"selected",n&&"hover",i&&"head",r&&"footer"]},d.G,a)},b=(0,u.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[a.root,t.head&&a.head,t.footer&&a.footer]}})(function(e){var a,t=e.theme;return a={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},(0,r.Z)(a,"&.".concat(d.Z.hover,":hover"),{backgroundColor:(t.vars||t).palette.action.hover}),(0,r.Z)(a,"&.".concat(d.Z.selected),{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,s.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,s.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)}}),a}),y=o.forwardRef(function(e,a){var t=v({props:e,name:"MuiTableRow"}),r=t.className,m=t.component,s=void 0===m?"tr":m,p=t.hover,u=t.selected,d=(0,i.Z)(t,h),y=o.useContext(c.Z),I=(0,n.Z)((0,n.Z)({},t),{},{component:s,hover:void 0!==p&&p,selected:void 0!==u&&u,head:y&&"head"===y.variant,footer:y&&"footer"===y.variant}),U=f(I);return(0,g.jsx)(b,(0,n.Z)({as:s,ref:a,className:(0,l.default)(U.root,r),role:"tr"===s?null:"row",ownerState:I},d))});a.Z=y},814395:function(e,a,t){"use strict";t.d(a,{G:function(){return r}});var n=t(344443),i=t(92358);function r(e){return(0,i.ZP)("MuiTableRow",e)}var o=(0,n.Z)("MuiTableRow",["root","selected","hover","head","footer"]);a.Z=o},304996:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return U}});var n,i={};t.r(i),t.d(i,{demoComponents:function(){return y},demos:function(){return b},docs:function(){return f},srcComponents:function(){return I}});var r=t(778521);t(470079);var o=t(652755),l=t(437053),m=t(77601),s=t(191469),c=t(84370),p=t(118784),u=t(146803),d=t(781097),g=t(215129),h=t(735250),v=[{name:"Accordion",materialUI:"/material-ui/react-accordion/",materialDesign:"https://m1.material.io/components/expansion-panels.html"},{name:"Alert",materialUI:"/material-ui/react-alert"},{name:"App Bar: top",materialUI:"/material-ui/react-app-bar/",materialDesign:"https://m2.material.io/components/app-bars-top"},{name:"App Bar: bottom",materialUI:"/material-ui/react-app-bar#bottom-app-bar/",materialDesign:"https://m2.material.io/components/app-bars-bottom"},{name:"Autocomplete",materialUI:"/material-ui/react-autocomplete"},{name:"Banner",materialUI:"Composable",materialDesign:"https://m2.material.io/components/banners"},{name:"Avatar",materialUI:"/material-ui/react-avatar"},{name:"Badge",materialUI:"/material-ui/react-badge"},{name:"Bottom Navigation",materialUI:"/material-ui/react-bottom-navigation/",materialDesign:"https://m2.material.io/components/bottom-navigation"},{name:"Breadcrumbs",materialUI:"/material-ui/react-breadcrumbs"},{name:"Button",materialUI:"/material-ui/react-button/",materialDesign:"https://m2.material.io/components/buttons"},{name:"Floating Action Button",materialDesign:"https://m2.material.io/components/buttons-floating-action-button",materialUI:"/material-ui/react-floating-action-button"},{name:"Button Group",materialUI:"/material-ui/react-button-group"},{name:"Card",materialUI:"/material-ui/react-card/",materialDesign:"https://m2.material.io/components/cards"},{name:"Checkbox",materialUI:"/material-ui/react-checkbox/",materialDesign:"https://m2.material.io/components/checkboxes"},{name:"Chip",materialUI:"/material-ui/react-chip/",materialDesign:"https://m2.material.io/components/chips"},{name:"Data Grid",materialUI:"/x/react-data-grid/",materialDesign:"https://m2.material.io/components/data-tables"},{name:"Date Pickers",materialUI:"/x/react-date-pickers/getting-started/",materialDesign:"https://m2.material.io/components/date-pickers"},{name:"Dialog",materialUI:"/material-ui/react-dialog/",materialDesign:"https://m2.material.io/components/dialogs"},{name:"Divider",materialUI:"/material-ui/react-divider/",materialDesign:"https://m2.material.io/components/dividers"},{name:"Drawer",materialUI:"/material-ui/react-drawer/",materialDesign:"https://m2.material.io/components/navigation-drawer"},{name:"Icons",materialUI:"/material-ui/icons/",materialDesign:"https://m2.material.io/design/iconography/system-icons.html"},{name:"Image List",materialUI:"/material-ui/react-image-list/",materialDesign:"https://m2.material.io/components/image-lists"},{name:"Link",materialUI:"/material-ui/react-link/"},{name:"List",materialUI:"/material-ui/react-list/",materialDesign:"https://m2.material.io/components/lists"},{name:"Masonry",materialUI:"/material-ui/react-masonry/"},{name:"Material Icons",materialUI:"/material-ui/material-icons/",materialDesign:"https://fonts.google.com/icons"},{name:"Menu",materialUI:"/material-ui/react-menu/",materialDesign:"https://m2.material.io/components/menus"},{name:"Modal",materialUI:"/material-ui/react-modal/",materialDesign:"https://m2.material.io/components/dialogs"},{name:"Navigation Rail",materialDesign:"https://m2.material.io/components/navigation-rail"},{name:"Pagination",materialUI:"/material-ui/react-pagination/"},{name:"Paper",materialUI:"/material-ui/react-paper/",materialDesign:"https://m2.material.io/design/environment/elevation.html"},{name:"Progress",materialUI:"/material-ui/react-progress/",materialDesign:"https://m2.material.io/components/progress-indicators"},{name:"Radio Group",materialUI:"/material-ui/react-radio-button/",materialDesign:"https://m2.material.io/components/radio-buttons"},{name:"Rating",materialUI:"/material-ui/react-rating/"},{name:"Select",materialUI:"/material-ui/react-select/",materialDesign:"https://m2.material.io/components/menus#exposed-dropdown-menu"},{name:"Skeleton",materialUI:"/material-ui/react-skeleton/"},{name:"Slider",materialUI:"/material-ui/react-slider/",materialDesign:"https://m2.material.io/components/sliders"},{name:"Snackbar",materialUI:"/material-ui/react-snackbar/",materialDesign:"https://m2.material.io/components/snackbars"},{name:"Speed Dial",materialUI:"/material-ui/react-speed-dial"},{name:"Stepper",materialUI:"/material-ui/react-stepper/",materialDesign:"https://m1.material.io/components/steppers.html"},{name:"Switch",materialUI:"/material-ui/react-switch/",materialDesign:"https://m2.material.io/components/switches"},{name:"Table",materialUI:"/material-ui/react-table/",materialDesign:"https://m2.material.io/components/data-tables"},{name:"Tabs",materialUI:"/material-ui/react-tabs/",materialDesign:"https://m2.material.io/components/tabs"},{name:"Text Field",materialUI:"/material-ui/react-text-field/",materialDesign:"https://m2.material.io/components/text-fields"},{name:"Timeline",materialUI:"/material-ui/react-timeline/"},{name:"Toggle Button",materialUI:"/material-ui/react-toggle-button/"},{name:"Tooltip",materialUI:"/material-ui/react-tooltip/",materialDesign:"https://m2.material.io/components/tooltips"},{name:"Transfer List",materialUI:"/material-ui/react-transfer-list/"},{name:"Tree View",materialUI:"/x/react-tree-view/"},{name:"Typography",materialUI:"/material-ui/react-typography/",materialDesign:"https://m2.material.io/design/typography/the-type-system.html"}],f={en:{description:"The following is a list of Material Design components & features.",location:"/docs/data/material/getting-started/supported-components/supported-components.md",rendered:['<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="error-icon" viewBox="0 0 20 20">\n      <path fill-rule="evenodd" d="M2 7.4v5.2a2 2 0 0 0 .586 1.414l3.4 3.4A2 2 0 0 0 7.4 18h5.2a2 2 0 0 0 1.414-.586l3.4-3.4A2 2 0 0 0 18 12.6V7.4a2 2 0 0 0-.586-1.414l-3.4-3.4A2 2 0 0 0 12.6 2H7.4a2 2 0 0 0-1.414.586l-3.4 3.4A2 2 0 0 0 2 7.4Zm11.03-.43a.75.75 0 0 1 0 1.06L11.06 10l1.97 1.97a.75.75 0 1 1-1.06 1.06L10 11.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L8.94 10 6.97 8.03a.75.75 0 0 1 1.06-1.06L10 8.94l1.97-1.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="warning-icon" viewBox="0 0 20 20">\n      <path d="M2.33 17a.735.735 0 0 1-.665-.375.631.631 0 0 1-.094-.375.898.898 0 0 1 .115-.396L9.353 3.062a.621.621 0 0 1 .281-.27.85.85 0 0 1 .729 0 .622.622 0 0 1 .281.27l7.667 12.792c.07.125.108.257.114.396a.63.63 0 0 1-.093.375.842.842 0 0 1-.271.27.728.728 0 0 1-.394.105H2.33Zm7.664-2.5c.211 0 .39-.072.536-.214a.714.714 0 0 0 .218-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.531-.22.736.736 0 0 0-.536.215.714.714 0 0 0-.219.531c0 .212.072.39.215.536.143.146.32.219.531.219Zm0-2.5c.211 0 .39-.072.536-.216a.72.72 0 0 0 .218-.534v-2.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.531-.216.734.734 0 0 0-.536.216.72.72 0 0 0-.219.534v2.5c0 .212.072.39.215.534a.72.72 0 0 0 .531.216Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="success-icon" viewBox="0 0 20 20">\n      <path d="m8.938 10.875-1.25-1.23a.718.718 0 0 0-.521-.228.718.718 0 0 0-.521.229.73.73 0 0 0 0 1.062l1.77 1.771c.153.153.327.23.521.23a.718.718 0 0 0 .521-.23l3.896-3.896a.73.73 0 0 0 0-1.062.718.718 0 0 0-.52-.23.718.718 0 0 0-.521.23l-3.376 3.354ZM10 18a7.796 7.796 0 0 1-3.104-.625 8.065 8.065 0 0 1-2.552-1.719 8.064 8.064 0 0 1-1.719-2.552A7.797 7.797 0 0 1 2 10c0-1.111.208-2.15.625-3.115a8.064 8.064 0 0 1 4.27-4.26A7.797 7.797 0 0 1 10 2c1.111 0 2.15.208 3.115.625a8.096 8.096 0 0 1 4.26 4.26C17.792 7.851 18 8.89 18 10a7.797 7.797 0 0 1-.625 3.104 8.066 8.066 0 0 1-4.26 4.271A7.774 7.774 0 0 1 10 18Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="info-icon" viewBox="0 0 20 20">\n      <path d="M9.996 14c.21 0 .39-.072.535-.216a.72.72 0 0 0 .219-.534v-3.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.532-.216.734.734 0 0 0-.535.216.72.72 0 0 0-.219.534v3.5c0 .213.071.39.214.534a.72.72 0 0 0 .532.216Zm0-6.5c.21 0 .39-.071.535-.214a.714.714 0 0 0 .219-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.532-.219.736.736 0 0 0-.535.214.714.714 0 0 0-.219.532c0 .21.071.39.214.535.143.146.32.219.532.219Zm.01 10.5a7.81 7.81 0 0 1-3.11-.625 8.065 8.065 0 0 1-2.552-1.719 8.066 8.066 0 0 1-1.719-2.551A7.818 7.818 0 0 1 2 9.99c0-1.104.208-2.14.625-3.105a8.066 8.066 0 0 1 4.27-4.26A7.818 7.818 0 0 1 10.009 2a7.75 7.75 0 0 1 3.106.625 8.083 8.083 0 0 1 4.26 4.265A7.77 7.77 0 0 1 18 9.994a7.81 7.81 0 0 1-.625 3.11 8.066 8.066 0 0 1-1.719 2.552 8.083 8.083 0 0 1-2.546 1.719 7.77 7.77 0 0 1-3.104.625Z"/>\n      </symbol>\n      </svg>','\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n        <symbol id="anchor-link-icon" viewBox="0 0 12 6">\n          <path d="M8.9176 0.083252H7.1676C6.84677 0.083252 6.58427 0.345752 6.58427 0.666585C6.58427 0.987419 6.84677 1.24992 7.1676 1.24992H8.9176C9.8801 1.24992 10.6676 2.03742 10.6676 2.99992C10.6676 3.96242 9.8801 4.74992 8.9176 4.74992H7.1676C6.84677 4.74992 6.58427 5.01242 6.58427 5.33325C6.58427 5.65409 6.84677 5.91659 7.1676 5.91659H8.9176C10.5276 5.91659 11.8343 4.60992 11.8343 2.99992C11.8343 1.38992 10.5276 0.083252 8.9176 0.083252ZM3.6676 2.99992C3.6676 3.32075 3.9301 3.58325 4.25094 3.58325H7.75094C8.07177 3.58325 8.33427 3.32075 8.33427 2.99992C8.33427 2.67909 8.07177 2.41659 7.75094 2.41659H4.25094C3.9301 2.41659 3.6676 2.67909 3.6676 2.99992ZM4.83427 4.74992H3.08427C2.12177 4.74992 1.33427 3.96242 1.33427 2.99992C1.33427 2.03742 2.12177 1.24992 3.08427 1.24992H4.83427C5.1551 1.24992 5.4176 0.987419 5.4176 0.666585C5.4176 0.345752 5.1551 0.083252 4.83427 0.083252H3.08427C1.47427 0.083252 0.167603 1.38992 0.167603 2.99992C0.167603 4.60992 1.47427 5.91659 3.08427 5.91659H4.83427C5.1551 5.91659 5.4176 5.65409 5.4176 5.33325C5.4176 5.01242 5.1551 4.74992 4.83427 4.74992Z" />\n        </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n      <path d="M22.8481 4C22.8481 2.9 21.9481 2 20.8481 2H4.84814C3.74814 2 2.84814 2.9 2.84814 4V16C2.84814 17.1 3.74814 18 4.84814 18H18.8481L22.8481 22V4ZM16.8481 11H13.8481V14C13.8481 14.55 13.3981 15 12.8481 15C12.2981 15 11.8481 14.55 11.8481 14V11H8.84814C8.29814 11 7.84814 10.55 7.84814 10C7.84814 9.45 8.29814 9 8.84814 9H11.8481V6C11.8481 5.45 12.2981 5 12.8481 5C13.3981 5 13.8481 5.45 13.8481 6V9H16.8481C17.3981 9 17.8481 9.45 17.8481 10C17.8481 10.55 17.3981 11 16.8481 11Z" />\n      </symbol>\n      </svg>','<h1>Supported components</h1><p class="description">The following is a list of Material Design components & features.</p>\n\n<p>While we strive to follow the Material Design guidelines where practical (applying\ncommon sense where guidelines contradict - a more common occurrence than\none might expect), we do not expect to support every component, nor every\nfeature of every component, but rather to provide the building blocks to\nallow developers to create compelling user interfaces and experiences.</p>\n<p>If you wish to add support for a component or feature not highlighted\nhere, please search for the relevant <a href="https://github.com/mui/material-ui/issues?q=is%3Aopen+is%3Aclosed">GitHub Issue</a>, or create a new one\nto discuss the approach before submitting a pull request.</p>\n',{demo:"MaterialUIComponents.js",hideToolbar:!0,bg:!0}],toc:[],title:"Supported components",headers:{components:[]}}},b={"MaterialUIComponents.js":{module:"./MaterialUIComponents.js",raw:"import * as React from 'react';\nimport Table from '@mui/material/Table';\nimport TableHead from '@mui/material/TableHead';\nimport TableBody from '@mui/material/TableBody';\nimport TableCell from '@mui/material/TableCell';\nimport TableRow from '@mui/material/TableRow';\nimport Paper from '@mui/material/Paper';\nimport Typography from '@mui/material/Typography';\nimport { Link } from '@mui/docs/Link';\n\nconst components = [\n  {\n    name: 'Accordion',\n    materialUI: '/material-ui/react-accordion/',\n    materialDesign: 'https://m1.material.io/components/expansion-panels.html',\n  },\n  { name: 'Alert', materialUI: '/material-ui/react-alert' },\n  {\n    name: 'App Bar: top',\n    materialUI: '/material-ui/react-app-bar/',\n    materialDesign: 'https://m2.material.io/components/app-bars-top',\n  },\n  {\n    name: 'App Bar: bottom',\n    materialUI: '/material-ui/react-app-bar#bottom-app-bar/',\n    materialDesign: 'https://m2.material.io/components/app-bars-bottom',\n  },\n  { name: 'Autocomplete', materialUI: '/material-ui/react-autocomplete' },\n  {\n    name: 'Banner',\n    materialUI: 'Composable',\n    materialDesign: 'https://m2.material.io/components/banners',\n  },\n  { name: 'Avatar', materialUI: '/material-ui/react-avatar' },\n  { name: 'Badge', materialUI: '/material-ui/react-badge' },\n  {\n    name: 'Bottom Navigation',\n    materialUI: '/material-ui/react-bottom-navigation/',\n    materialDesign: 'https://m2.material.io/components/bottom-navigation',\n  },\n  { name: 'Breadcrumbs', materialUI: '/material-ui/react-breadcrumbs' },\n  {\n    name: 'Button',\n    materialUI: '/material-ui/react-button/',\n    materialDesign: 'https://m2.material.io/components/buttons',\n  },\n  {\n    name: 'Floating Action Button',\n    materialDesign:\n      'https://m2.material.io/components/buttons-floating-action-button',\n    materialUI: '/material-ui/react-floating-action-button',\n  },\n  { name: 'Button Group', materialUI: '/material-ui/react-button-group' },\n  {\n    name: 'Card',\n    materialUI: '/material-ui/react-card/',\n    materialDesign: 'https://m2.material.io/components/cards',\n  },\n  {\n    name: 'Checkbox',\n    materialUI: '/material-ui/react-checkbox/',\n    materialDesign: 'https://m2.material.io/components/checkboxes',\n  },\n  {\n    name: 'Chip',\n    materialUI: '/material-ui/react-chip/',\n    materialDesign: 'https://m2.material.io/components/chips',\n  },\n  {\n    name: 'Data Grid',\n    materialUI: '/x/react-data-grid/',\n    materialDesign: 'https://m2.material.io/components/data-tables',\n  },\n  {\n    name: 'Date Pickers',\n    materialUI: '/x/react-date-pickers/getting-started/',\n    materialDesign: 'https://m2.material.io/components/date-pickers',\n  },\n  {\n    name: 'Dialog',\n    materialUI: '/material-ui/react-dialog/',\n    materialDesign: 'https://m2.material.io/components/dialogs',\n  },\n  {\n    name: 'Divider',\n    materialUI: '/material-ui/react-divider/',\n    materialDesign: 'https://m2.material.io/components/dividers',\n  },\n  {\n    name: 'Drawer',\n    materialUI: '/material-ui/react-drawer/',\n    materialDesign: 'https://m2.material.io/components/navigation-drawer',\n  },\n  {\n    name: 'Icons',\n    materialUI: '/material-ui/icons/',\n    materialDesign: 'https://m2.material.io/design/iconography/system-icons.html',\n  },\n  {\n    name: 'Image List',\n    materialUI: '/material-ui/react-image-list/',\n    materialDesign: 'https://m2.material.io/components/image-lists',\n  },\n  { name: 'Link', materialUI: '/material-ui/react-link/' },\n  {\n    name: 'List',\n    materialUI: '/material-ui/react-list/',\n    materialDesign: 'https://m2.material.io/components/lists',\n  },\n  { name: 'Masonry', materialUI: '/material-ui/react-masonry/' },\n  {\n    name: 'Material Icons',\n    materialUI: '/material-ui/material-icons/',\n    materialDesign: 'https://fonts.google.com/icons',\n  },\n  {\n    name: 'Menu',\n    materialUI: '/material-ui/react-menu/',\n    materialDesign: 'https://m2.material.io/components/menus',\n  },\n  {\n    name: 'Modal',\n    materialUI: '/material-ui/react-modal/',\n    materialDesign: 'https://m2.material.io/components/dialogs',\n  },\n  {\n    name: 'Navigation Rail',\n    materialDesign: 'https://m2.material.io/components/navigation-rail',\n  },\n  { name: 'Pagination', materialUI: '/material-ui/react-pagination/' },\n  {\n    name: 'Paper',\n    materialUI: '/material-ui/react-paper/',\n    materialDesign: 'https://m2.material.io/design/environment/elevation.html',\n  },\n  {\n    name: 'Progress',\n    materialUI: '/material-ui/react-progress/',\n    materialDesign: 'https://m2.material.io/components/progress-indicators',\n  },\n  {\n    name: 'Radio Group',\n    materialUI: '/material-ui/react-radio-button/',\n    materialDesign: 'https://m2.material.io/components/radio-buttons',\n  },\n  { name: 'Rating', materialUI: '/material-ui/react-rating/' },\n  {\n    name: 'Select',\n    materialUI: '/material-ui/react-select/',\n    materialDesign: 'https://m2.material.io/components/menus#exposed-dropdown-menu',\n  },\n  { name: 'Skeleton', materialUI: '/material-ui/react-skeleton/' },\n  {\n    name: 'Slider',\n    materialUI: '/material-ui/react-slider/',\n    materialDesign: 'https://m2.material.io/components/sliders',\n  },\n  {\n    name: 'Snackbar',\n    materialUI: '/material-ui/react-snackbar/',\n    materialDesign: 'https://m2.material.io/components/snackbars',\n  },\n  { name: 'Speed Dial', materialUI: '/material-ui/react-speed-dial' },\n  {\n    name: 'Stepper',\n    materialUI: '/material-ui/react-stepper/',\n    materialDesign: 'https://m1.material.io/components/steppers.html',\n  },\n  {\n    name: 'Switch',\n    materialUI: '/material-ui/react-switch/',\n    materialDesign: 'https://m2.material.io/components/switches',\n  },\n  {\n    name: 'Table',\n    materialUI: '/material-ui/react-table/',\n    materialDesign: 'https://m2.material.io/components/data-tables',\n  },\n  {\n    name: 'Tabs',\n    materialUI: '/material-ui/react-tabs/',\n    materialDesign: 'https://m2.material.io/components/tabs',\n  },\n  {\n    name: 'Text Field',\n    materialUI: '/material-ui/react-text-field/',\n    materialDesign: 'https://m2.material.io/components/text-fields',\n  },\n  { name: 'Timeline', materialUI: '/material-ui/react-timeline/' },\n  { name: 'Toggle Button', materialUI: '/material-ui/react-toggle-button/' },\n  {\n    name: 'Tooltip',\n    materialUI: '/material-ui/react-tooltip/',\n    materialDesign: 'https://m2.material.io/components/tooltips',\n  },\n  { name: 'Transfer List', materialUI: '/material-ui/react-transfer-list/' },\n  { name: 'Tree View', materialUI: '/x/react-tree-view/' },\n  {\n    name: 'Typography',\n    materialUI: '/material-ui/react-typography/',\n    materialDesign: 'https://m2.material.io/design/typography/the-type-system.html',\n  },\n];\n\nexport default function MaterialUIComponents() {\n  return (\n    <Paper sx={{ width: '100%' }}>\n      <Table>\n        <TableHead>\n          <TableRow>\n            <TableCell>Components</TableCell>\n            <TableCell>Material Design</TableCell>\n            <TableCell>Material UI</TableCell>\n          </TableRow>\n        </TableHead>\n        <TableBody>\n          {components.map((component) => (\n            <TableRow key={component.name}>\n              <TableCell>\n                <Typography variant=\"body2\">{component.name}</Typography>\n              </TableCell>\n              <TableCell>\n                {component.materialDesign ? (\n                  <Link\n                    variant=\"body2\"\n                    data-no-markdown-link=\"true\"\n                    href={component.materialDesign}\n                  >\n                    {component.materialDesign.substring(8, 10) === 'm1'\n                      ? 'MD 1 (legacy)'\n                      : 'MD 2'}\n                  </Link>\n                ) : (\n                  'No guidelines'\n                )}\n              </TableCell>\n              <TableCell>\n                {component.materialUI &&\n                component.materialUI.indexOf('/material-ui') === 0 ? (\n                  <Link\n                    variant=\"body2\"\n                    data-no-markdown-link=\"true\"\n                    href={component.materialUI}\n                  >\n                    Native support\n                  </Link>\n                ) : null}\n                {component.materialUI && component.materialUI.indexOf('/x') === 0 ? (\n                  <Link\n                    variant=\"body2\"\n                    data-no-markdown-link=\"true\"\n                    href={component.materialUI}\n                  >\n                    Support in MUI X\n                  </Link>\n                ) : null}\n                {component.materialUI === 'Composable' ? 'Composable' : null}\n                {component.materialUI == null ? '❌ No support' : null}\n              </TableCell>\n            </TableRow>\n          ))}\n        </TableBody>\n      </Table>\n    </Paper>\n  );\n}\n"}};b.scope={process:{},import:{}};var y={"./MaterialUIComponents.js":function(){return(0,h.jsx)(u.Z,{sx:{width:"100%"},children:(0,h.jsxs)(l.Z,{children:[n||(n=(0,h.jsx)(m.Z,{children:(0,h.jsxs)(p.Z,{children:[(0,h.jsx)(c.Z,{children:"Components"}),(0,h.jsx)(c.Z,{children:"Material Design"}),(0,h.jsx)(c.Z,{children:"Material UI"})]})})),(0,h.jsx)(s.Z,{children:v.map(function(e){return(0,h.jsxs)(p.Z,{children:[(0,h.jsx)(c.Z,{children:(0,h.jsx)(d.Z,{variant:"body2",children:e.name})}),(0,h.jsx)(c.Z,{children:e.materialDesign?(0,h.jsx)(g.r,{variant:"body2","data-no-markdown-link":"true",href:e.materialDesign,children:"m1"===e.materialDesign.substring(8,10)?"MD 1 (legacy)":"MD 2"}):"No guidelines"}),(0,h.jsxs)(c.Z,{children:[e.materialUI&&0===e.materialUI.indexOf("/material-ui")?(0,h.jsx)(g.r,{variant:"body2","data-no-markdown-link":"true",href:e.materialUI,children:"Native support"}):null,e.materialUI&&0===e.materialUI.indexOf("/x")?(0,h.jsx)(g.r,{variant:"body2","data-no-markdown-link":"true",href:e.materialUI,children:"Support in MUI X"}):null,"Composable"===e.materialUI?"Composable":null,null==e.materialUI?"❌ No support":null]})]},e.name)})})]})})}},I={};function U(){return(0,h.jsx)(o.Z,(0,r.Z)({},i))}},652755:function(e,a,t){"use strict";t.d(a,{Z:function(){return I}});var n,i=t(778521),r=t(470079),o=t(639519),l=t.n(o),m=t(389136),s=t(302312),c=t(513182),p=t(597683),u=t(42141),d=t(162119),g=t(871379),h=t(775196),v=t(694366),f=t(74077),b=t(735250);function y(e){var a=e.mode,t=(0,c.tv)().setMode;return r.useEffect(function(){t(a)},[a,t]),null}function I(e){var a=(0,s.Z)(),t=(0,m.useRouter)(),o=(0,u.ln)(t.asPath).canonicalAs,l=e.disableAd,I=void 0!==l&&l,U=e.disableToc,x=e.disableCssVarsProvider,w=e.demos,Z=void 0===w?{}:w,T=e.docs,D=e.demoComponents,C=e.srcComponents,k=T[(0,g.fO)()]||T.en,M=o.startsWith("/joy-ui/")&&!(void 0!==x&&x),H=M?c.lL:r.Fragment,j=M?h.BrandingProvider:r.Fragment,R=(0,i.Z)({},M&&{mode:a.palette.mode});return(0,b.jsxs)(d.Z,{cardOptions:{description:k.headers.cardDescription,title:k.headers.cardTitle},description:k.description,disableAd:I,disableToc:void 0!==U&&U,location:k.location,title:k.title,toc:k.toc,children:[I?null:n||(n=(0,b.jsx)(h.BrandingProvider,{children:(0,b.jsx)(f.Z,{children:(0,b.jsx)(v.ZP,{})})})),(0,b.jsxs)(H,{children:[M&&(0,b.jsx)(y,{mode:a.palette.mode}),k.rendered.map(function(e,t){return(0,b.jsx)(p.Z,{demoComponents:D,demos:Z,disableAd:I,localizedDoc:k,renderedMarkdownOrDemo:e,srcComponents:C,theme:a,WrapperComponent:j,wrapperProps:R},"demos-section-".concat(t))})]})]})}y.propTypes={mode:l().oneOf(["light","dark"])}},499860:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/getting-started/supported-components",function(){return t(304996)}])},884835:function(e,a,t){"use strict";var n=t(311596);function i(){}function r(){}r.resetWarningCache=i,e.exports=function(){function e(e,a,t,i,r,o){if(o!==n){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function a(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:r,resetWarningCache:i};return t.PropTypes=t,t}},639519:function(e,a,t){e.exports=t(884835)()},311596:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[49774,9535,73976,97146,59727,85925,17376,41373,15686,34800,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,42378,20759,16067,40332,97683,92888,40179],function(){return e(e.s=499860)}),_N_E=e.O()}]);