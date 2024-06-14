(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47695],{437053:function(e,n,t){"use strict";var a=t(577903),o=t(778521),r=t(470079),i=t(653048),s=t(306029),l=t(901156),c=t(360731),d=t(502894),u=t(281935),p=t(735250),h=["className","component","padding","size","stickyHeader"],m=(0,c.Uu)("MuiTable"),v=function(e){var n=e.classes,t=e.stickyHeader;return(0,s.Z)({root:["root",t&&"stickyHeader"]},u.K,n)},g=(0,d.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.stickyHeader&&n.stickyHeader]}})(function(e){var n=e.theme;return{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,o.Z)((0,o.Z)({},n.typography.body2),{},{padding:n.spacing(2),color:(n.vars||n).palette.text.secondary,textAlign:"left",captionSide:"bottom"}),variants:[{props:function(e){return e.ownerState.stickyHeader},style:{borderCollapse:"separate"}}]}}),f="table",b=r.forwardRef(function(e,n){var t=m({props:e,name:"MuiTable"}),s=t.className,c=t.component,d=void 0===c?f:c,u=t.padding,b=void 0===u?"normal":u,y=t.size,w=void 0===y?"medium":y,x=t.stickyHeader,k=void 0!==x&&x,Z=(0,a.Z)(t,h),T=(0,o.Z)((0,o.Z)({},t),{},{component:d,padding:b,size:w,stickyHeader:k}),C=v(T),j=r.useMemo(function(){return{padding:b,size:w,stickyHeader:k}},[b,w,k]);return(0,p.jsx)(l.Z.Provider,{value:j,children:(0,p.jsx)(g,(0,o.Z)({as:d,role:d===f?null:"table",ref:n,className:(0,i.default)(C.root,s),ownerState:T},Z))})});n.Z=b},901156:function(e,n,t){"use strict";var a=t(470079).createContext();n.Z=a},435142:function(e,n,t){"use strict";var a=t(470079).createContext();n.Z=a},281935:function(e,n,t){"use strict";t.d(n,{K:function(){return r}});var a=t(344443),o=t(92358);function r(e){return(0,o.ZP)("MuiTable",e)}var i=(0,a.Z)("MuiTable",["root","stickyHeader"]);n.Z=i},191469:function(e,n,t){"use strict";var a=t(778521),o=t(577903),r=t(470079),i=t(653048),s=t(306029),l=t(435142),c=t(360731),d=t(502894),u=t(36635),p=t(735250),h=["className","component"],m=(0,c.Uu)("MuiTableBody"),v=function(e){var n=e.classes;return(0,s.Z)({root:["root"]},u.j,n)},g=(0,d.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,n){return n.root}})({display:"table-row-group"}),f={variant:"body"},b="tbody",y=r.forwardRef(function(e,n){var t=m({props:e,name:"MuiTableBody"}),r=t.className,s=t.component,c=void 0===s?b:s,d=(0,o.Z)(t,h),u=(0,a.Z)((0,a.Z)({},t),{},{component:c}),y=v(u);return(0,p.jsx)(l.Z.Provider,{value:f,children:(0,p.jsx)(g,(0,a.Z)({className:(0,i.default)(y.root,r),as:c,ref:n,role:c===b?null:"rowgroup",ownerState:u},d))})});n.Z=y},36635:function(e,n,t){"use strict";t.d(n,{j:function(){return r}});var a=t(344443),o=t(92358);function r(e){return(0,o.ZP)("MuiTableBody",e)}var i=(0,a.Z)("MuiTableBody",["root"]);n.Z=i},84370:function(e,n,t){"use strict";var a=t(577903),o=t(234046),r=t(778521),i=t(470079),s=t(653048),l=t(306029),c=t(621234),d=t(532785),u=t(901156),p=t(435142),h=t(360731),m=t(502894),v=t(657596),g=t(735250),f=["align","className","component","padding","scope","size","sortDirection","variant"],b=(0,h.Uu)("MuiTableCell"),y=function(e){var n=e.classes,t=e.variant,a=e.align,o=e.padding,r=e.size,i={root:["root",t,e.stickyHeader&&"stickyHeader","inherit"!==a&&"align".concat((0,d.Z)(a)),"normal"!==o&&"padding".concat((0,d.Z)(o)),"size".concat((0,d.Z)(r))]};return(0,l.Z)(i,v.U,n)},w=(0,m.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.variant],n["size".concat((0,d.Z)(t.size))],"normal"!==t.padding&&n["padding".concat((0,d.Z)(t.padding))],"inherit"!==t.align&&n["align".concat((0,d.Z)(t.align))],t.stickyHeader&&n.stickyHeader]}})(function(e){var n=e.theme;return(0,r.Z)((0,r.Z)({},n.typography.body2),{},{display:"table-cell",verticalAlign:"inherit",borderBottom:n.vars?"1px solid ".concat(n.vars.palette.TableCell.border):"1px solid\n    ".concat("light"===n.palette.mode?(0,c.$n)((0,c.Fq)(n.palette.divider,1),.88):(0,c._j)((0,c.Fq)(n.palette.divider,1),.68)),textAlign:"left",padding:16,variants:[{props:{variant:"head"},style:{color:(n.vars||n).palette.text.primary,lineHeight:n.typography.pxToRem(24),fontWeight:n.typography.fontWeightMedium}},{props:{variant:"body"},style:{color:(n.vars||n).palette.text.primary}},{props:{variant:"footer"},style:{color:(n.vars||n).palette.text.secondary,lineHeight:n.typography.pxToRem(21),fontSize:n.typography.pxToRem(12)}},{props:{size:"small"},style:(0,o.Z)({padding:"6px 16px"},"&.".concat(v.Z.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}})},{props:{padding:"checkbox"},style:{width:48,padding:"0 0 0 4px"}},{props:{padding:"none"},style:{padding:0}},{props:{align:"left"},style:{textAlign:"left"}},{props:{align:"center"},style:{textAlign:"center"}},{props:{align:"right"},style:{textAlign:"right",flexDirection:"row-reverse"}},{props:{align:"justify"},style:{textAlign:"justify"}},{props:function(e){return e.ownerState.stickyHeader},style:{position:"sticky",top:0,zIndex:2,backgroundColor:(n.vars||n).palette.background.default}}]})}),x=i.forwardRef(function(e,n){var t,o=b({props:e,name:"MuiTableCell"}),l=o.align,c=o.className,d=o.component,h=o.padding,m=o.scope,v=o.size,x=o.sortDirection,k=o.variant,Z=(0,a.Z)(o,f),T=i.useContext(u.Z),C=i.useContext(p.Z),j=C&&"head"===C.variant,R=m;"td"===(t=d||(j?"th":"td"))?R=void 0:!R&&j&&(R="col");var M=k||C&&C.variant,H=(0,r.Z)((0,r.Z)({},o),{},{align:void 0===l?"inherit":l,component:t,padding:h||(T&&T.padding?T.padding:"normal"),size:v||(T&&T.size?T.size:"medium"),sortDirection:x,stickyHeader:"head"===M&&T&&T.stickyHeader,variant:M}),A=y(H),P=null;return x&&(P="asc"===x?"ascending":"descending"),(0,g.jsx)(w,(0,r.Z)({as:t,ref:n,className:(0,s.default)(A.root,c),"aria-sort":P,scope:R,ownerState:H},Z))});n.Z=x},657596:function(e,n,t){"use strict";t.d(n,{U:function(){return r}});var a=t(344443),o=t(92358);function r(e){return(0,o.ZP)("MuiTableCell",e)}var i=(0,a.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);n.Z=i},118784:function(e,n,t){"use strict";var a=t(778521),o=t(577903),r=t(234046),i=t(470079),s=t(653048),l=t(306029),c=t(621234),d=t(435142),u=t(360731),p=t(502894),h=t(814395),m=t(735250),v=["className","component","hover","selected"],g=(0,u.Uu)("MuiTableRow"),f=function(e){var n=e.classes,t=e.selected,a=e.hover,o=e.head,r=e.footer;return(0,l.Z)({root:["root",t&&"selected",a&&"hover",o&&"head",r&&"footer"]},h.G,n)},b=(0,p.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.head&&n.head,t.footer&&n.footer]}})(function(e){var n,t=e.theme;return n={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},(0,r.Z)(n,"&.".concat(h.Z.hover,":hover"),{backgroundColor:(t.vars||t).palette.action.hover}),(0,r.Z)(n,"&.".concat(h.Z.selected),{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,c.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,c.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)}}),n}),y=i.forwardRef(function(e,n){var t=g({props:e,name:"MuiTableRow"}),r=t.className,l=t.component,c=void 0===l?"tr":l,u=t.hover,p=t.selected,h=(0,o.Z)(t,v),y=i.useContext(d.Z),w=(0,a.Z)((0,a.Z)({},t),{},{component:c,hover:void 0!==u&&u,selected:void 0!==p&&p,head:y&&"head"===y.variant,footer:y&&"footer"===y.variant}),x=f(w);return(0,m.jsx)(b,(0,a.Z)({as:c,ref:n,className:(0,s.default)(x.root,r),role:"tr"===c?null:"row",ownerState:w},h))});n.Z=y},814395:function(e,n,t){"use strict";t.d(n,{G:function(){return r}});var a=t(344443),o=t(92358);function r(e){return(0,o.ZP)("MuiTableRow",e)}var i=(0,a.Z)("MuiTableRow",["root","selected","hover","head","footer"]);n.Z=i},290828:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return C}});var a,o={};t.r(o),t.d(o,{demoComponents:function(){return Z},demos:function(){return k},docs:function(){return x},srcComponents:function(){return T}});var r=t(135693),i=t(195095),s=t(778521),l=t(470079),c=t(52538),d=t.n(c),u=t(652755),p=l.createContext(null),h=t(859861),m=t(437053),v=t(191469),g=t(84370),f=t(118784),b=t(781097),y=t(215129),w=t(735250),x={en:{description:"You can come back to this page and switch the version of the docs you're reading at any time.",location:"/docs/src/pages/versions/versions.md",rendered:['<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="error-icon" viewBox="0 0 20 20">\n      <path fill-rule="evenodd" d="M2 7.4v5.2a2 2 0 0 0 .586 1.414l3.4 3.4A2 2 0 0 0 7.4 18h5.2a2 2 0 0 0 1.414-.586l3.4-3.4A2 2 0 0 0 18 12.6V7.4a2 2 0 0 0-.586-1.414l-3.4-3.4A2 2 0 0 0 12.6 2H7.4a2 2 0 0 0-1.414.586l-3.4 3.4A2 2 0 0 0 2 7.4Zm11.03-.43a.75.75 0 0 1 0 1.06L11.06 10l1.97 1.97a.75.75 0 1 1-1.06 1.06L10 11.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L8.94 10 6.97 8.03a.75.75 0 0 1 1.06-1.06L10 8.94l1.97-1.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="warning-icon" viewBox="0 0 20 20">\n      <path d="M2.33 17a.735.735 0 0 1-.665-.375.631.631 0 0 1-.094-.375.898.898 0 0 1 .115-.396L9.353 3.062a.621.621 0 0 1 .281-.27.85.85 0 0 1 .729 0 .622.622 0 0 1 .281.27l7.667 12.792c.07.125.108.257.114.396a.63.63 0 0 1-.093.375.842.842 0 0 1-.271.27.728.728 0 0 1-.394.105H2.33Zm7.664-2.5c.211 0 .39-.072.536-.214a.714.714 0 0 0 .218-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.531-.22.736.736 0 0 0-.536.215.714.714 0 0 0-.219.531c0 .212.072.39.215.536.143.146.32.219.531.219Zm0-2.5c.211 0 .39-.072.536-.216a.72.72 0 0 0 .218-.534v-2.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.531-.216.734.734 0 0 0-.536.216.72.72 0 0 0-.219.534v2.5c0 .212.072.39.215.534a.72.72 0 0 0 .531.216Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="success-icon" viewBox="0 0 20 20">\n      <path d="m8.938 10.875-1.25-1.23a.718.718 0 0 0-.521-.228.718.718 0 0 0-.521.229.73.73 0 0 0 0 1.062l1.77 1.771c.153.153.327.23.521.23a.718.718 0 0 0 .521-.23l3.896-3.896a.73.73 0 0 0 0-1.062.718.718 0 0 0-.52-.23.718.718 0 0 0-.521.23l-3.376 3.354ZM10 18a7.796 7.796 0 0 1-3.104-.625 8.065 8.065 0 0 1-2.552-1.719 8.064 8.064 0 0 1-1.719-2.552A7.797 7.797 0 0 1 2 10c0-1.111.208-2.15.625-3.115a8.064 8.064 0 0 1 4.27-4.26A7.797 7.797 0 0 1 10 2c1.111 0 2.15.208 3.115.625a8.096 8.096 0 0 1 4.26 4.26C17.792 7.851 18 8.89 18 10a7.797 7.797 0 0 1-.625 3.104 8.066 8.066 0 0 1-4.26 4.271A7.774 7.774 0 0 1 10 18Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="info-icon" viewBox="0 0 20 20">\n      <path d="M9.996 14c.21 0 .39-.072.535-.216a.72.72 0 0 0 .219-.534v-3.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.532-.216.734.734 0 0 0-.535.216.72.72 0 0 0-.219.534v3.5c0 .213.071.39.214.534a.72.72 0 0 0 .532.216Zm0-6.5c.21 0 .39-.071.535-.214a.714.714 0 0 0 .219-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.532-.219.736.736 0 0 0-.535.214.714.714 0 0 0-.219.532c0 .21.071.39.214.535.143.146.32.219.532.219Zm.01 10.5a7.81 7.81 0 0 1-3.11-.625 8.065 8.065 0 0 1-2.552-1.719 8.066 8.066 0 0 1-1.719-2.551A7.818 7.818 0 0 1 2 9.99c0-1.104.208-2.14.625-3.105a8.066 8.066 0 0 1 4.27-4.26A7.818 7.818 0 0 1 10.009 2a7.75 7.75 0 0 1 3.106.625 8.083 8.083 0 0 1 4.26 4.265A7.77 7.77 0 0 1 18 9.994a7.81 7.81 0 0 1-.625 3.11 8.066 8.066 0 0 1-1.719 2.552 8.083 8.083 0 0 1-2.546 1.719 7.77 7.77 0 0 1-3.104.625Z"/>\n      </symbol>\n      </svg>','\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n        <symbol id="anchor-link-icon" viewBox="0 0 12 6">\n          <path d="M8.9176 0.083252H7.1676C6.84677 0.083252 6.58427 0.345752 6.58427 0.666585C6.58427 0.987419 6.84677 1.24992 7.1676 1.24992H8.9176C9.8801 1.24992 10.6676 2.03742 10.6676 2.99992C10.6676 3.96242 9.8801 4.74992 8.9176 4.74992H7.1676C6.84677 4.74992 6.58427 5.01242 6.58427 5.33325C6.58427 5.65409 6.84677 5.91659 7.1676 5.91659H8.9176C10.5276 5.91659 11.8343 4.60992 11.8343 2.99992C11.8343 1.38992 10.5276 0.083252 8.9176 0.083252ZM3.6676 2.99992C3.6676 3.32075 3.9301 3.58325 4.25094 3.58325H7.75094C8.07177 3.58325 8.33427 3.32075 8.33427 2.99992C8.33427 2.67909 8.07177 2.41659 7.75094 2.41659H4.25094C3.9301 2.41659 3.6676 2.67909 3.6676 2.99992ZM4.83427 4.74992H3.08427C2.12177 4.74992 1.33427 3.96242 1.33427 2.99992C1.33427 2.03742 2.12177 1.24992 3.08427 1.24992H4.83427C5.1551 1.24992 5.4176 0.987419 5.4176 0.666585C5.4176 0.345752 5.1551 0.083252 4.83427 0.083252H3.08427C1.47427 0.083252 0.167603 1.38992 0.167603 2.99992C0.167603 4.60992 1.47427 5.91659 3.08427 5.91659H4.83427C5.1551 5.91659 5.4176 5.65409 5.4176 5.33325C5.4176 5.01242 5.1551 4.74992 4.83427 4.74992Z" />\n        </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n      <path d="M22.8481 4C22.8481 2.9 21.9481 2 20.8481 2H4.84814C3.74814 2 2.84814 2.9 2.84814 4V16C2.84814 17.1 3.74814 18 4.84814 18H18.8481L22.8481 22V4ZM16.8481 11H13.8481V14C13.8481 14.55 13.3981 15 12.8481 15C12.2981 15 11.8481 14.55 11.8481 14V11H8.84814C8.29814 11 7.84814 10.55 7.84814 10C7.84814 9.45 8.29814 9 8.84814 9H11.8481V6C11.8481 5.45 12.2981 5 12.8481 5C13.3981 5 13.8481 5.45 13.8481 6V9H16.8481C17.3981 9 17.8481 9.45 17.8481 10C17.8481 10.55 17.3981 11 16.8481 11Z" />\n      </symbol>\n      </svg>','<h1>Material\xa0UI Versions</h1><p class="description">You can come back to this page and switch the version of the docs you\'re reading at any time.</p>\n\n<h2 id="released-versions"><a href="#released-versions" class="title-link-to-anchor">Released versions<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="released-versions"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>The most recent stable version (✓) is recommended for use in production.</p>\n',{demo:"pages/versions/ReleasedVersions.js",hideToolbar:!0,bg:"inline"},'<h2 id="latest-versions"><a href="#latest-versions" class="title-link-to-anchor">Latest versions<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="latest-versions"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>Here you can find the latest unreleased documentation and code.\nYou can use it to see what changes are coming and provide better feedback to contributors.</p>\n',{demo:"pages/versions/LatestVersions.js",hideToolbar:!0,bg:"inline"},'<h2 id="versioning-strategy"><a href="#versioning-strategy" class="title-link-to-anchor">Versioning strategy<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="versioning-strategy"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>Stability ensures that reusable components and libraries, tutorials, tools, and learned practices don&#39;t become obsolete unexpectedly.\nStability is essential for the ecosystem around Material\xa0UI to thrive.</p>\n<p>This document contains the practices that are followed to provide you with a leading-edge UI library, balanced with stability, ensuring that future changes are always introduced predictably.</p>\n<p>MUI&#39;s open-source projects follow <a href="https://semver.org/">Semantic Versioning 2.0.0</a>.\nThis means that the version numbers have three parts: <code>major.minor.patch</code>.\nThe version number is incremented based on the level of change included in the release.</p>\n<ul>\n<li><strong>Major releases</strong> contain significant new features, some developer assistance is expected during the update.\nThese releases include <a href="#what-doesnt-count-as-a-breaking-change">breaking changes</a>.\nWhen updating to a new major release, you may need to run update scripts, refactor code, run additional tests, and learn new APIs.</li>\n<li><strong>Minor releases</strong> contain important new features.\nMinor releases are fully backward-compatible; no developer assistance is expected during the update, but you can optionally modify your apps and libraries to begin using new APIs, features, and capabilities that were added in the release.</li>\n<li><strong>Patch releases</strong> are low risk, contain bug fixes and small new features.\nNo developer assistance is expected during the update.</li>\n</ul>\n<h2 id="what-doesnt-count-as-a-breaking-change"><a href="#what-doesnt-count-as-a-breaking-change" class="title-link-to-anchor">What doesn&#39;t count as a breaking change?<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="what-doesnt-count-as-a-breaking-change"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>We call &quot;breaking changes&quot; those that require updating your codebase when upgrading to a new version, with the exception of:</p>\n<ul>\n<li><strong>APIs starting with &quot;unstable_&quot;</strong>. These are provided as experimental features whose APIs we are not yet confident in.\nBy releasing these with an <code>unstable_</code> prefix, we can iterate faster and get to a stable API sooner, or simply learn that we don&#39;t need the API/feature in the first place.</li>\n<li><strong>APIs documented as experimental</strong>. Same as the above.</li>\n<li><strong>Undocumented APIs and internal data structures</strong>. If you access internal properties, there is no warranty. You are on your own.</li>\n<li><strong>Development warnings</strong>. Since these don&#39;t affect production behavior, we may add new warnings or modify existing warnings in between major versions.\nIn fact, this is what allows us to reliably warn about upcoming breaking changes.</li>\n<li><strong>Pre-releases versions</strong>. We provide pre-release versions as a way to test new features early, but we need the flexibility to make changes based on what we learn in the pre-release period.\nIf you use these versions, note that APIs may change before the stable release.</li>\n<li><strong>Small CSS changes</strong>. Visual design changes that have a very low probability of negatively impacting your UI are not considered breaking.</li>\n</ul>\n<h2 id="release-frequency"><a href="#release-frequency" class="title-link-to-anchor">Release frequency<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="release-frequency"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>A regular schedule of releases helps you plan and coordinate your updates with the continuing evolution of MUI.</p>\n<p>In general, you can expect the following release cycle:</p>\n<ul>\n<li>A <strong>major</strong> release every 12 months.</li>\n<li>1-3 <strong>minor</strong> releases for each major release.</li>\n<li>A <strong>patch</strong> release every week (anytime for an urgent bug fix).</li>\n</ul>\n<h2 id="release-schedule"><a href="#release-schedule" class="title-link-to-anchor">Release schedule<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="release-schedule"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><table>\n<thead>\n<tr>\n<th align="left">Date</th>\n<th align="left">Version</th>\n<th align="left">Status</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">Q4 2024</td>\n<td align="left">v7.0.0</td>\n<td align="left">Work started</td>\n</tr>\n<tr>\n<td align="left">Q2 2024</td>\n<td align="left">v6.0.0</td>\n<td align="left">Work started</td>\n</tr>\n<tr>\n<td align="left">September 2021</td>\n<td align="left">v5.0.0</td>\n<td align="left">Released</td>\n</tr>\n<tr>\n<td align="left">May 2019</td>\n<td align="left">v4.0.0</td>\n<td align="left">Released</td>\n</tr>\n<tr>\n<td align="left">September 2018</td>\n<td align="left">v3.0.0</td>\n<td align="left">Released</td>\n</tr>\n<tr>\n<td align="left">May 2018</td>\n<td align="left">v1.0.0</td>\n<td align="left">Released</td>\n</tr>\n</tbody></table>\n<p>You can follow the <a href="https://github.com/mui/material-ui/milestones">milestones</a> for a more detailed overview.</p>\n<aside class="MuiCallout-root MuiCallout-warning">\n            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">\n<use class="MuiCode-copied-icon" xlink:href="#warning-icon" />\n</svg>\n            <div class="MuiCallout-content">\n            <p><strong>Disclaimer</strong>: We operate in a dynamic environment, and things are subject to change. The information provided is intended to outline the general framework direction, for informational purposes only. We may decide to add or remove new items at any time, depending on our capability to deliver while meeting our quality standards. The development, releases, and timing of any features or functionality remain at the sole discretion of MUI. The roadmap does not represent a commitment, obligation, or promise to deliver at any time.</p>\n\n</div></aside><h2 id="deprecation-practices"><a href="#deprecation-practices" class="title-link-to-anchor">Deprecation practices<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="deprecation-practices"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>Sometimes &quot;breaking changes&quot;, such as the removal of support for select APIs and features, are necessary.\nTo make these transitions as easy as possible:</p>\n<ul>\n<li>The number of breaking changes is minimized, and migration tools are provided when possible (for example codemods).</li>\n<li>The deprecation policy described below is followed so that you have time to update your apps to the latest APIs and best practices.</li>\n</ul>\n<h3 id="deprecation-policy"><a href="#deprecation-policy" class="title-link-to-anchor">Deprecation policy<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="deprecation-policy"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><ul>\n<li>Deprecated features are announced in the changelog, and when possible, with warnings at runtime.</li>\n<li>When a deprecation is announced, recommended update path is provided.</li>\n<li>Existing use of a stable API during the deprecation period is supported, so your code will keep working during that period.</li>\n</ul>\n'],toc:[{text:"Released versions",level:2,hash:"released-versions",children:[]},{text:"Latest versions",level:2,hash:"latest-versions",children:[]},{text:"Versioning strategy",level:2,hash:"versioning-strategy",children:[]},{text:"What doesn&#39;t count as a breaking change?",level:2,hash:"what-doesnt-count-as-a-breaking-change",children:[]},{text:"Release frequency",level:2,hash:"release-frequency",children:[]},{text:"Release schedule",level:2,hash:"release-schedule",children:[]},{text:"Deprecation practices",level:2,hash:"deprecation-practices",children:[{text:"Deprecation policy",level:3,hash:"deprecation-policy"}]}],title:"Material\xa0UI Versions",headers:{components:[]}}},k={"pages/versions/ReleasedVersions.js":{module:"./ReleasedVersions.js",raw:"import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Table from '@mui/material/Table';\nimport TableBody from '@mui/material/TableBody';\nimport TableCell from '@mui/material/TableCell';\nimport TableRow from '@mui/material/TableRow';\nimport Typography from '@mui/material/Typography';\nimport { Link } from '@mui/docs/Link';\nimport VersionsContext from 'docs/src/pages/versions/VersionsContext';\n\nconst GITHUB_RELEASE_BASE_URL = 'https://github.com/mui/material-ui/releases/tag/';\n\nfunction ReleasedVersions() {\n  const versions = React.useContext(VersionsContext);\n\n  return (\n    <Box sx={{ minHeight: 33 * 11, overflow: 'auto', width: '100%' }}>\n      <Table>\n        <TableBody>\n          {versions.map((doc) => (\n            <TableRow key={doc.version}>\n              <TableCell>\n                <Typography variant=\"body2\">\n                  {doc.version}\n                  {doc.version === `v${process.env.LIB_VERSION}` ? ' ✓' : ''}\n                </Typography>\n              </TableCell>\n              <TableCell>\n                <Link variant=\"body2\" rel=\"nofollow\" href={doc.url}>\n                  Documentation\n                </Link>\n              </TableCell>\n              <TableCell>\n                {doc.version.length >= 6 &&\n                doc.version.indexOf('pre-release') === -1 ? (\n                  <Link\n                    variant=\"body2\"\n                    rel=\"nofollow\"\n                    href={`${GITHUB_RELEASE_BASE_URL}${doc.version}`}\n                  >\n                    Release notes\n                  </Link>\n                ) : null}\n              </TableCell>\n            </TableRow>\n          ))}\n        </TableBody>\n      </Table>\n    </Box>\n  );\n}\n\nexport default ReleasedVersions;\n"},"pages/versions/LatestVersions.js":{module:"./LatestVersions.js",raw:'import * as React from \'react\';\nimport Box from \'@mui/material/Box\';\nimport Table from \'@mui/material/Table\';\nimport TableBody from \'@mui/material/TableBody\';\nimport TableCell from \'@mui/material/TableCell\';\nimport TableRow from \'@mui/material/TableRow\';\nimport Typography from \'@mui/material/Typography\';\nimport { Link } from \'@mui/docs/Link\';\n\nfunction LatestVersions() {\n  return (\n    <Box sx={{ width: \'100%\' }}>\n      <Table>\n        <TableBody>\n          <TableRow>\n            <TableCell>\n              <Typography variant="body2">master branch</Typography>\n            </TableCell>\n            <TableCell>\n              <Link\n                variant="body2"\n                rel="nofollow"\n                href="https://material-ui.netlify.app/"\n              >\n                Documentation\n              </Link>\n            </TableCell>\n            <TableCell>\n              <Link\n                variant="body2"\n                href="https://github.com/mui/material-ui/tree/master"\n              >\n                Source code\n              </Link>\n            </TableCell>\n          </TableRow>\n          <TableRow>\n            <TableCell>\n              <Typography variant="body2">next branch</Typography>\n            </TableCell>\n            <TableCell>\n              <Link\n                variant="body2"\n                rel="nofollow"\n                href="https://next--material-ui.netlify.app/"\n              >\n                Documentation\n              </Link>\n            </TableCell>\n            <TableCell>\n              <Link\n                variant="body2"\n                href="https://github.com/mui/material-ui/tree/next"\n              >\n                Source code\n              </Link>\n            </TableCell>\n          </TableRow>\n        </TableBody>\n      </Table>\n    </Box>\n  );\n}\n\nexport default LatestVersions;\n'}};k.scope={process:{},import:{}};var Z={"./ReleasedVersions.js":function(){var e=l.useContext(p);return(0,w.jsx)(h.Z,{sx:{minHeight:363,overflow:"auto",width:"100%"},children:(0,w.jsx)(m.Z,{children:(0,w.jsx)(v.Z,{children:e.map(function(e){return(0,w.jsxs)(f.Z,{children:[(0,w.jsx)(g.Z,{children:(0,w.jsxs)(b.Z,{variant:"body2",children:[e.version,e.version==="v".concat("6.0.0-alpha.10")?" ✓":""]})}),(0,w.jsx)(g.Z,{children:(0,w.jsx)(y.r,{variant:"body2",rel:"nofollow",href:e.url,children:"Documentation"})}),(0,w.jsx)(g.Z,{children:e.version.length>=6&&-1===e.version.indexOf("pre-release")?(0,w.jsx)(y.r,{variant:"body2",rel:"nofollow",href:"".concat("https://github.com/mui/material-ui/releases/tag/").concat(e.version),children:"Release notes"}):null})]},e.version)})})})})},"./LatestVersions.js":function(){return(0,w.jsx)(h.Z,{sx:{width:"100%"},children:a||(a=(0,w.jsx)(m.Z,{children:(0,w.jsxs)(v.Z,{children:[(0,w.jsxs)(f.Z,{children:[(0,w.jsx)(g.Z,{children:(0,w.jsx)(b.Z,{variant:"body2",children:"master branch"})}),(0,w.jsx)(g.Z,{children:(0,w.jsx)(y.r,{variant:"body2",rel:"nofollow",href:"https://material-ui.netlify.app/",children:"Documentation"})}),(0,w.jsx)(g.Z,{children:(0,w.jsx)(y.r,{variant:"body2",href:"https://github.com/mui/material-ui/tree/master",children:"Source code"})})]}),(0,w.jsxs)(f.Z,{children:[(0,w.jsx)(g.Z,{children:(0,w.jsx)(b.Z,{variant:"body2",children:"next branch"})}),(0,w.jsx)(g.Z,{children:(0,w.jsx)(y.r,{variant:"body2",rel:"nofollow",href:"https://next--material-ui.netlify.app/",children:"Documentation"})}),(0,w.jsx)(g.Z,{children:(0,w.jsx)(y.r,{variant:"body2",href:"https://github.com/mui/material-ui/tree/next",children:"Source code"})})]})]})}))})}},T={};function C(e){var n=e.versions;return(0,w.jsx)(p.Provider,{value:n,children:(0,w.jsx)(u.Z,(0,s.Z)({},o))})}function j(e){return e.replace("v","").split(".").map(function(e){return+e+1e3}).join(".")}function R(){return(R=(0,i.Z)((0,r.Z)().mark(function e(){var n,t;return(0,r.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/mui/material-ui-docs/branches",{headers:{Authorization:""}});case 2:return n=e.sent,e.next=5,n.text();case 5:if(t=e.sent,!(200!==n.status)){e.next=8;break}throw Error(t);case 8:return e.abrupt("return",JSON.parse(t));case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}C.getInitialProps=(0,i.Z)((0,r.Z)().mark(function e(){var n,t,a;return(0,r.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=["latest","l10n","next","migration","material-ui.com"],e.next=3,function(){return R.apply(this,arguments)}();case 3:return t=e.sent,a=[],t.forEach(function(e){if(-1===n.indexOf(e.name)){var t=e.name;a.push({version:t,url:"https://".concat(t.replace(/\./g,"-"),".mui.com")})}}),a.push({version:"v".concat("6.0.0-alpha.10"),url:"https://mui.com"}),a.push({version:"v0",url:"https://v0.mui.com"}),a.sort(function(e,n){return j(n.version).localeCompare(j(e.version))}),t.find(function(e){return"next"===e.name})&&!a.find(function(e){return/beta|alpha/.test(e.version)})&&a.unshift({version:"v".concat(Number(a[0].version[1])+1," pre-release"),url:"https://next.mui.com"}),e.abrupt("return",{versions:d()(a,"version")});case 11:case"end":return e.stop()}},e)}))},652755:function(e,n,t){"use strict";t.d(n,{Z:function(){return w}});var a,o=t(778521),r=t(470079),i=t(639519),s=t.n(i),l=t(389136),c=t(302312),d=t(513182),u=t(597683),p=t(42141),h=t(162119),m=t(871379),v=t(775196),g=t(694366),f=t(74077),b=t(735250);function y(e){var n=e.mode,t=(0,d.tv)().setMode;return r.useEffect(function(){t(n)},[n,t]),null}function w(e){var n=(0,c.Z)(),t=(0,l.useRouter)(),i=(0,p.ln)(t.asPath).canonicalAs,s=e.disableAd,w=void 0!==s&&s,x=e.disableToc,k=e.disableCssVarsProvider,Z=e.demos,T=void 0===Z?{}:Z,C=e.docs,j=e.demoComponents,R=e.srcComponents,M=C[(0,m.fO)()]||C.en,H=i.startsWith("/joy-ui/")&&!(void 0!==k&&k),A=H?d.lL:r.Fragment,P=H?v.BrandingProvider:r.Fragment,B=(0,o.Z)({},H&&{mode:n.palette.mode});return(0,b.jsxs)(h.Z,{cardOptions:{description:M.headers.cardDescription,title:M.headers.cardTitle},description:M.description,disableAd:w,disableToc:void 0!==x&&x,location:M.location,title:M.title,toc:M.toc,children:[w?null:a||(a=(0,b.jsx)(v.BrandingProvider,{children:(0,b.jsx)(f.Z,{children:(0,b.jsx)(g.ZP,{})})})),(0,b.jsxs)(A,{children:[H&&(0,b.jsx)(y,{mode:n.palette.mode}),M.rendered.map(function(e,t){return(0,b.jsx)(u.Z,{demoComponents:j,demos:T,disableAd:w,localizedDoc:M,renderedMarkdownOrDemo:e,srcComponents:R,theme:n,WrapperComponent:P,wrapperProps:B},"demos-section-".concat(t))})]})]})}y.propTypes={mode:s().oneOf(["light","dark"])}},160564:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions",function(){return t(290828)}])}},function(e){e.O(0,[49774,9535,73976,97146,59727,85925,17376,41373,15686,34800,76601,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,42378,20759,16067,40332,97683,92888,40179],function(){return e(e.s=160564)}),_N_E=e.O()}]);