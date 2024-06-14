"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[83846],{906657:function(e,t,n){n.d(t,{q:function(){return I}});var o=n(820064),r=n(470079),a=n(502894),i=n(123280),l=n(306029),s=n(996125),d=n(92358);function c(e){return(0,d.ZP)("MuiRichTreeView",e)}(0,n(344443).Z)("MuiRichTreeView",["root"]);var p=n(496100),u=n(856420),m=n(578810),v=n(788970),f=n(856117),h=n(565270),y=n(735250);let b=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"]},c,t)},g=(0,a.ZP)("ul",{name:"MuiRichTreeView",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:0,margin:0,listStyle:"none",outline:0,position:"relative"});function x({slots:e,slotProps:t,label:n,id:r,itemId:a,children:i}){let l=e?.item??v.k,d=(0,s.y)({elementType:l,externalSlotProps:t?.item,additionalProps:{itemId:a,id:r,label:n},ownerState:{itemId:a,label:n}});return(0,y.jsx)(l,(0,o.Z)({},d,{children:i}))}(0,f.b)(["MUI X: The `RichTreeView` component does not support JSX children.","If you want to add items, you need to use the `items` prop","Check the documentation for more details: https://mui.com/x/react-tree-view/rich-tree-view/items/"]);let I=r.forwardRef(function(e,t){let n=(0,i.Z)({props:e,name:"MuiRichTreeView"}),{pluginParams:r,slots:a,slotProps:l,otherProps:d}=(0,h.Y)({props:n,plugins:m.S,rootRef:t}),{getRootProps:c,contextValue:v,instance:f}=(0,p.G)(r),I=b(n),C=a?.root??g,w=(0,s.y)({elementType:C,externalSlotProps:l?.root,externalForwardedProps:d,className:I.root,getSlotProps:c,ownerState:n}),P=f.getItemsToRender(),Z=({label:e,itemId:t,id:n,children:o})=>(0,y.jsx)(x,{slots:a,slotProps:l,label:e,id:n,itemId:t,children:o?.map(Z)},t);return(0,y.jsx)(u.N,{value:v,children:(0,y.jsx)(C,(0,o.Z)({},w,{children:P.map(Z)}))})})},9651:function(e,t,n){n.d(t,{Ot:function(){return f},VQ:function(){return v},XP:function(){return m},ko:function(){return h}});var o=n(788249),r=n(820064),a=n(470079),i=n(502894),l=n(621234),s=n(872883),d=n(855366),c=n(423946),p=n(735250);let u=["visible"],m=(0,i.ZP)("li",{name:"MuiTreeItem2",slot:"Root",overridesResolver:(e,t)=>t.root})({listStyle:"none",margin:0,padding:0,outline:0}),v=(0,i.ZP)("div",{name:"MuiTreeItem2",slot:"Content",overridesResolver:(e,t)=>t.content,shouldForwardProp:e=>(0,c.x9)(e)&&"status"!==e&&"indentationAtItemLevel"!==e})(({theme:e})=>({padding:e.spacing(.5,1),borderRadius:e.shape.borderRadius,width:"100%",boxSizing:"border-box",display:"flex",alignItems:"center",gap:e.spacing(1),cursor:"pointer",WebkitTapHighlightColor:"transparent","&:hover":{backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},variants:[{props:{indentationAtItemLevel:!0},style:{paddingLeft:`calc(${e.spacing(1)} + var(--TreeView-itemChildrenIndentation) * var(--TreeView-itemDepth))`}},{props:({status:e})=>e.disabled,style:{opacity:(e.vars||e).palette.action.disabledOpacity,backgroundColor:"transparent"}},{props:({status:e})=>e.focused,style:{backgroundColor:(e.vars||e).palette.action.focus}},{props:({status:e})=>e.selected,style:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}}}},{props:({status:e})=>e.selected&&e.focused,style:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}}]})),f=(0,i.ZP)("div",{name:"MuiTreeItem2",slot:"Label",overridesResolver:(e,t)=>t.label})(({theme:e})=>(0,r.Z)({width:"100%",boxSizing:"border-box",minWidth:0,position:"relative"},e.typography.body1)),h=(0,i.ZP)("div",{name:"MuiTreeItem2",slot:"IconContainer",overridesResolver:(e,t)=>t.iconContainer})({width:16,display:"flex",flexShrink:0,justifyContent:"center","& svg":{fontSize:18}});(0,i.ZP)(s.Z,{name:"MuiTreeItem2",slot:"GroupTransition",overridesResolver:(e,t)=>t.groupTransition,shouldForwardProp:e=>(0,c.x9)(e)&&"indentationAtItemLevel"!==e})({margin:0,padding:0,paddingLeft:"var(--TreeView-itemChildrenIndentation)",variants:[{props:{indentationAtItemLevel:!0},style:{paddingLeft:0}}]}),(0,i.ZP)(a.forwardRef((e,t)=>{let{visible:n}=e,a=(0,o.Z)(e,u);return n?(0,p.jsx)(d.Z,(0,r.Z)({},a,{ref:t})):null}),{name:"MuiTreeItem2",slot:"Checkbox",overridesResolver:(e,t)=>t.checkbox})({padding:0})},898576:function(e,t,n){n.d(t,{G:function(){return d}});var o=n(820064);n(470079);var r=n(996125),a=n(576799),i=n(669341),l=n(952234),s=n(735250);function d(e){let t;let{slots:n,slotProps:d,status:c}=e,p=(0,i.E)(),u=(0,o.Z)({},p.icons.slots,{expandIcon:p.icons.slots.expandIcon??l.f,collapseIcon:p.icons.slots.collapseIcon??l.w}),m=p.icons.slotProps;t=n?.icon?"icon":c.expandable?c.expanded?"collapseIcon":"expandIcon":"endIcon";let v=n?.[t]??u[t],f=(0,r.y)({elementType:v,externalSlotProps:e=>(0,o.Z)({},(0,a.x)(m[t],e),(0,a.x)(d?.[t],e)),ownerState:{}});return v?(0,s.jsx)(v,(0,o.Z)({},f)):null}},259311:function(e,t,n){n.d(t,{Z:function(){return p}});var o=n(820064),r=n(470079),a=n(202294),i=n(503945),l=n(669341);let s=e=>Array.isArray(e)?e.length>0&&e.some(s):!!e,d=({itemId:e,children:t})=>{let{instance:n,selection:{multiSelect:o}}=(0,l.E)(),r={expandable:s(t),expanded:n.isItemExpanded(e),focused:n.isItemFocused(e),selected:n.isItemSelected(e),disabled:n.isItemDisabled(e)};return{interactions:{handleExpansion:t=>{if(r.disabled)return;r.focused||n.focusItem(t,e);let a=o&&(t.shiftKey||t.ctrlKey||t.metaKey);r.expandable&&!(a&&n.isItemExpanded(e))&&n.toggleItemExpansion(t,e)},handleSelection:t=>{if(r.disabled)return;r.focused||n.focusItem(t,e);let a=o&&(t.shiftKey||t.ctrlKey||t.metaKey);a?t.shiftKey?n.expandSelectionRange(t,e):n.selectItem(t,e,!0):n.selectItem(t,e,!1)},handleCheckboxSelection:t=>{let r=t.nativeEvent.shiftKey;o&&r?n.expandSelectionRange(t,e):n.selectItem(t,e,o,t.target.checked)}},status:r}};var c=n(865045);let p=e=>{let{runItemPlugins:t,selection:{multiSelect:n,disableSelection:s,checkboxSelection:p},disabledItemsFocusable:u,indentationAtItemLevel:m,instance:v,publicAPI:f}=(0,l.E)(),h=r.useContext(c.T),{id:y,itemId:b,label:g,children:x,rootRef:I}=e,{rootRef:C,contentRef:w}=t(e),{interactions:P,status:Z}=d({itemId:b,children:x}),T=v.getTreeItemIdAttribute(b,y),k=(0,i.Z)(I,C),R=r.useRef(null),S=e=>t=>{if(e.onFocus?.(t),t.defaultMuiPrevented)return;let n=!Z.disabled||u;!Z.focused&&n&&t.currentTarget===t.target&&v.focusItem(t,b)},M=e=>t=>{e.onBlur?.(t),t.defaultMuiPrevented||v.removeFocusedItem()},O=e=>t=>{e.onKeyDown?.(t),t.defaultMuiPrevented||v.handleItemKeyDown(t,b)},K=e=>t=>{e.onClick?.(t),!(t.defaultMuiPrevented||R.current?.contains(t.target))&&(P.handleExpansion(t),p||P.handleSelection(t))},E=e=>t=>{e.onMouseDown?.(t),!t.defaultMuiPrevented&&(t.shiftKey||t.ctrlKey||t.metaKey||Z.disabled)&&t.preventDefault()},_=e=>t=>{e.onChange?.(t),t.defaultMuiPrevented||s||Z.disabled||P.handleCheckboxSelection(t)};return{getRootProps:(t={})=>{let r;let i=(0,o.Z)({},(0,a._)(e),(0,a._)(t));n?r=Z.selected:Z.selected&&(r=!0);let l=(0,o.Z)({},i,{ref:k,role:"treeitem",tabIndex:v.canItemBeTabbed(b)?0:-1,id:T,"aria-expanded":Z.expandable?Z.expanded:void 0,"aria-selected":r,"aria-disabled":Z.disabled||void 0},t,{onFocus:S(i),onBlur:M(i),onKeyDown:O(i)});return m&&(l.style={"--TreeView-itemDepth":"function"==typeof h?h(b):h}),l},getContentProps:(e={})=>{let t=(0,a._)(e),n=(0,o.Z)({},t,e,{ref:w,onClick:K(t),onMouseDown:E(t),status:Z});return m&&(n.indentationAtItemLevel=!0),n},getGroupTransitionProps:(e={})=>{let t=(0,a._)(e),n=(0,o.Z)({},t,{unmountOnExit:!0,component:"ul",role:"group",in:Z.expanded,children:x},e);return m&&(n.indentationAtItemLevel=!0),n},getIconContainerProps:(e={})=>{let t=(0,a._)(e);return(0,o.Z)({},t,e)},getCheckboxProps:(e={})=>{let t=(0,a._)(e);return(0,o.Z)({},t,{visible:p,ref:R,checked:Z.selected,disabled:s||Z.disabled,tabIndex:-1},e,{onChange:_(t)})},getLabelProps:(t={})=>{let n=(0,o.Z)({},(0,a._)(e),(0,a._)(t));return(0,o.Z)({},n,{children:g},t)},rootRef:k,status:Z,publicAPI:f}}}}]);