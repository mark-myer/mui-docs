(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74568],{253160:function(e,n,t){t(983882),e.exports=t(568801).Object.freeze},983882:function(e,n,t){var r=t(961280),i=t(90207).onFreeze;t(776014)("freeze",function(e){return function(n){return e&&r(n)?e(i(n)):n}})},77792:function(e,n,t){"use strict";t.d(n,{h:function(){return s}});var r=t(863363),i=t(470079),o=t(373555),u=t(503945),l=t(140329),a=t(377686),c=t(735250),s=i.forwardRef(function(e,n){var t=e.children,s=e.container,d=e.disablePortal,f=void 0!==d&&d,v=i.useState(null),h=(0,r.Z)(v,2),g=h[0],m=h[1],p=(0,u.Z)(i.isValidElement(t)?t.ref:null,n);return((0,l.Z)(function(){!f&&m(("function"==typeof s?s():s)||document.body)},[s,f]),(0,l.Z)(function(){if(g&&!f)return(0,a.Z)(n,g),function(){(0,a.Z)(n,null)}},[n,g,f]),f)?i.isValidElement(t)?i.cloneElement(t,{ref:p}):(0,c.jsx)(i.Fragment,{children:t}):(0,c.jsx)(i.Fragment,{children:g?o.createPortal(t,g):g})})},687740:function(e,n,t){"use strict";t.d(n,{d:function(){return o},n:function(){return u}});var r=t(92358),i="base";function o(e,n){var t=r._v[n];return t?"".concat(i,"--").concat(t):"".concat(i,"-").concat(e,"-").concat(n)}function u(e){return void 0!==r._v[e]}},182326:function(e,n,t){"use strict";t.d(n,{s:function(){return i}});var r=t(687740);function i(e,n){var t={};return n.forEach(function(n){t[n]=(0,r.d)(e,n)}),t}},460589:function(e,n,t){"use strict";t.d(n,{U:function(){return s}});var r=t(778521),i=t(863363),o=t(470079),u=t(14002),l=t(503945),a=t(202294),c=t(411182);function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.disabled,t=void 0!==n&&n,s=e.focusableWhenDisabled,d=e.href,f=e.rootRef,v=e.tabIndex,h=e.to,g=e.type,m=e.rootElementName,p=o.useRef(),b=o.useState(!1),Z=(0,i.Z)(b,2),x=Z[0],k=Z[1],C=(0,u.Z)(),y=C.isFocusVisibleRef,w=C.onFocus,S=C.onBlur,I=C.ref,N=o.useState(!1),V=(0,i.Z)(N,2),F=V[0],D=V[1];t&&!s&&F&&D(!1),o.useEffect(function(){y.current=F},[F,y]);var P=(0,c.F)({rootElementName:null!=m?m:d||h?"a":void 0,componentName:"Button"}),E=(0,i.Z)(P,2),M=E[0],R=E[1],A=function(){var e=p.current;return"BUTTON"===M||"INPUT"===M&&["button","submit","reset"].includes(null==e?void 0:e.type)||"A"===M&&(null==e?void 0:e.href)},T=(0,l.Z)(R,f,I,p),_={};return void 0!==v&&(_.tabIndex=v),"BUTTON"===M?(_.type=null!=g?g:"button",s?_["aria-disabled"]=t:_.disabled=t):"INPUT"===M?g&&["button","submit","reset"].includes(g)&&(s?_["aria-disabled"]=t:_.disabled=t):""!==M&&(d||h||(_.role="button",_.tabIndex=null!=v?v:0),t&&(_["aria-disabled"]=t,_.tabIndex=s?null!=v?v:0:-1)),{getRootProps:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=(0,r.Z)((0,r.Z)({},(0,a._)(e)),(0,a._)(n)),o=(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({type:g},i),_),n),{},{onBlur:function(e){var n;S(e),!1===y.current&&D(!1),null===(n=i.onBlur)||void 0===n||n.call(i,e)},onClick:function(e){if(!t){var n;null===(n=i.onClick)||void 0===n||n.call(i,e)}},onFocus:function(e){var n,t;p.current||(p.current=e.currentTarget),w(e),!0===y.current&&(D(!0),null===(t=i.onFocusVisible)||void 0===t||t.call(i,e)),null===(n=i.onFocus)||void 0===n||n.call(i,e)},onKeyDown:function(e){var n,r;null===(n=i.onKeyDown)||void 0===n||n.call(i,e),!e.defaultMuiPrevented&&(e.target!==e.currentTarget||A()||" "!==e.key||e.preventDefault(),e.target!==e.currentTarget||" "!==e.key||t||k(!0),e.target!==e.currentTarget||A()||"Enter"!==e.key||t||(null===(r=i.onClick)||void 0===r||r.call(i,e),e.preventDefault()))},onKeyUp:function(e){var n,r;e.target===e.currentTarget&&k(!1),null===(n=i.onKeyUp)||void 0===n||n.call(i,e),e.target!==e.currentTarget||A()||t||" "!==e.key||e.defaultMuiPrevented||null===(r=i.onClick)||void 0===r||r.call(i,e)},onMouseDown:function(e){var n;t||(k(!0),document.addEventListener("mouseup",function(){k(!1)},{once:!0})),null===(n=i.onMouseDown)||void 0===n||n.call(i,e)},onMouseLeave:function(e){var n;F&&e.preventDefault(),null===(n=i.onMouseLeave)||void 0===n||n.call(i,e)},ref:T});return delete o.onFocusVisible,o},focusVisible:F,setFocusVisible:D,active:x,rootRef:T}}},765670:function(e,n,t){"use strict";t.d(n,{B:function(){return l}});var r=t(863363),i=t(470079),o=t(140329),u=t(538502);function l(e,n){var t=i.useContext(u.s);if(null===t)throw Error("useCompoundItem must be used within a useCompoundParent");var l=t.registerItem,a=i.useState("function"==typeof e?void 0:e),c=(0,r.Z)(a,2),s=c[0],d=c[1];return(0,o.Z)(function(){var t=l(e,n),r=t.id,i=t.deregister;return d(r),i},[l,n,e]),{id:s,index:void 0!==s?t.getItemIndex(s):-1,totalItemCount:t.totalSubitemCount}}},538502:function(e,n,t){"use strict";t.d(n,{Y:function(){return f},s:function(){return d}});var r=t(863363),i=t(147805),o=t.n(i),u=t(481395),l=t.n(u),a=t(125127),c=t.n(a),s=t(470079),d=s.createContext(null);function f(){var e=s.useState(new(l())),n=(0,r.Z)(e,2),t=n[0],i=n[1],u=s.useRef(new(c())),a=s.useCallback(function(e){u.current.delete(e),i(function(n){var t=new(l())(n);return t.delete(e),t})},[]),d=s.useCallback(function(e,n){var t;return t="function"==typeof e?e(u.current):e,u.current.add(t),i(function(e){var r=new(l())(e);return r.set(t,n),r}),{id:t,deregister:function(){return a(t)}}},[a]),f=s.useMemo(function(){var e;return(e=o()(t.keys()).map(function(e){var n=t.get(e);return{key:e,subitem:n}})).sort(function(e,n){var t=e.subitem.ref.current,r=n.subitem.ref.current;return null===t||null===r||t===r?0:t.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}),new(l())(e.map(function(e){return[e.key,e.subitem]}))},[t]),v=s.useCallback(function(e){return o()(f.keys()).indexOf(e)},[f]);return{contextValue:s.useMemo(function(){return{getItemIndex:v,registerItem:d,totalSubitemCount:t.size}},[v,d,t.size]),subitems:f}}},276689:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=t(470079).createContext(null)},33725:function(e,n,t){"use strict";t.d(n,{F:function(){return r}});var r={blur:"list:blur",focus:"list:focus",itemClick:"list:itemClick",itemHover:"list:itemHover",itemsChange:"list:itemsChange",keyDown:"list:keyDown",resetHighlight:"list:resetHighlight",highlightLast:"list:highlightLast",textNavigation:"list:textNavigation",clearSelection:"list:clearSelection"}},391399:function(e,n,t){"use strict";t.d(n,{Ce:function(){return l},R$:function(){return a},Rl:function(){return u}});var r=t(778521),i=t(614030),o=t(33725);function u(e,n,t){var r,i,o,u=t.items,l=t.isItemDisabled,a=t.disableListWrap,c=t.disabledItemsFocusable,s=t.itemComparer,d=t.focusManagement,f=u.length-1,v=null==e?-1:u.findIndex(function(n){return s(n,e)}),h=!a;switch(n){case"reset":if(-1==("DOM"===d?0:-1))return null;i=0,o="next",h=!1;break;case"start":i=0,o="next",h=!1;break;case"end":i=f,o="previous",h=!1;break;default:var g=v+n;g<0?!h&&-1!==v||Math.abs(n)>1?(i=0,o="next"):(i=f,o="previous"):g>f?!h||Math.abs(n)>1?(i=f,o="previous"):(i=0,o="next"):(i=g,o=n>=0?"next":"previous")}var m=function(e,n,t,r,i,o){if(0===t.length||!r&&t.every(function(e,n){return i(e,n)}))return -1;for(var u=e;;){if(!o&&"next"===n&&u===t.length||!o&&"previous"===n&&-1===u)return -1;if(!(!r&&i(t[u],u)))return u;u+="next"===n?1:-1,o&&(u=(u+t.length)%t.length)}}(i,o,u,c,l,h);return -1!==m||null===e||l(e,v)?null!==(r=u[m])&&void 0!==r?r:null:e}function l(e,n,t){var o=t.itemComparer,u=t.isItemDisabled,l=t.selectionMode,a=t.items,c=n.selectedValues,s=a.findIndex(function(n){return o(e,n)});if(u(e,s))return n;var d="none"===l?[]:"single"===l?o(c[0],e)?c:[e]:c.some(function(n){return o(n,e)})?c.filter(function(n){return!o(n,e)}):[].concat((0,i.Z)(c),[e]);return(0,r.Z)((0,r.Z)({},n),{},{selectedValues:d,highlightedValue:e})}function a(e,n){var t,i,a,c,s,d,f,v,h=n.type,g=n.context;switch(h){case o.F.keyDown:return function(e,n,t){var i=n.highlightedValue,o=t.orientation,a=t.pageSize;switch(e){case"Home":return(0,r.Z)((0,r.Z)({},n),{},{highlightedValue:u(i,"start",t)});case"End":return(0,r.Z)((0,r.Z)({},n),{},{highlightedValue:u(i,"end",t)});case"PageUp":return(0,r.Z)((0,r.Z)({},n),{},{highlightedValue:u(i,-a,t)});case"PageDown":return(0,r.Z)((0,r.Z)({},n),{},{highlightedValue:u(i,a,t)});case"ArrowUp":if("vertical"!==o)break;return(0,r.Z)((0,r.Z)({},n),{},{highlightedValue:u(i,-1,t)});case"ArrowDown":if("vertical"!==o)break;return(0,r.Z)((0,r.Z)({},n),{},{highlightedValue:u(i,1,t)});case"ArrowLeft":if("vertical"===o)break;return(0,r.Z)((0,r.Z)({},n),{},{highlightedValue:u(i,"horizontal-ltr"===o?-1:1,t)});case"ArrowRight":if("vertical"===o)break;return(0,r.Z)((0,r.Z)({},n),{},{highlightedValue:u(i,"horizontal-ltr"===o?1:-1,t)});case"Enter":case" ":if(null===n.highlightedValue)break;return l(n.highlightedValue,n,t)}return n}(n.key,e,g);case o.F.itemClick:return l(n.item,e,g);case o.F.blur:return"DOM"===g.focusManagement?e:(0,r.Z)((0,r.Z)({},e),{},{highlightedValue:null});case o.F.textNavigation:return function(e,n,t){for(var i=t.items,o=t.isItemDisabled,l=t.disabledItemsFocusable,a=t.getItemAsString,c=n.length>1,s=c?e.highlightedValue:u(e.highlightedValue,1,t),d=0;d<i.length&&s&&(c||e.highlightedValue!==s);d+=1){if(function(e,n,t){var r,i=null===(r=t(e))||void 0===r?void 0:r.trim().toLowerCase();return!!i&&0!==i.length&&0===i.indexOf(n)}(s,n,a)&&(!o(s,i.indexOf(s))||l))return(0,r.Z)((0,r.Z)({},e),{},{highlightedValue:s});s=u(s,1,t)}return e}(e,n.searchString,g);case o.F.itemsChange:return t=n.items,i=n.previousItems,s=g.itemComparer,d=g.focusManagement,f=null,null!=e.highlightedValue?f=null!==(c=t.find(function(n){return s(n,e.highlightedValue)}))&&void 0!==c?c:null:"DOM"===d&&0===i.length&&(f=u(null,"reset",g)),v=(null!==(a=e.selectedValues)&&void 0!==a?a:[]).filter(function(e){return t.some(function(n){return s(n,e)})}),(0,r.Z)((0,r.Z)({},e),{},{highlightedValue:f,selectedValues:v});case o.F.resetHighlight:return(0,r.Z)((0,r.Z)({},e),{},{highlightedValue:u(null,"reset",g)});case o.F.highlightLast:return(0,r.Z)((0,r.Z)({},e),{},{highlightedValue:u(null,"end",g)});case o.F.clearSelection:return(0,r.Z)((0,r.Z)({},e),{},{selectedValues:[],highlightedValue:u(null,"reset",g)});default:return e}}},430097:function(e,n,t){"use strict";t.d(n,{s:function(){return p}});var r=t(863363),i=t(778521),o=t(470079),u=t(503945),l=t(33725),a=t(391399),c=t(9366),s=t(131159),d=t(202294),f={},v=function(){},h=function(e,n){return e===n},g=function(){return!1},m=function(e){return"string"==typeof e?e:String(e)};function p(e){var n,t,p=e.controlledProps,b=e.disabledItemsFocusable,Z=void 0!==b&&b,x=e.disableListWrap,k=void 0!==x&&x,C=e.focusManagement,y=void 0===C?"activeDescendant":C,w=e.getInitialState,S=e.getItemDomElement,I=e.getItemId,N=e.isItemDisabled,V=void 0===N?g:N,F=e.rootRef,D=e.onStateChange,P=void 0===D?v:D,E=e.items,M=e.itemComparer,R=void 0===M?h:M,A=e.getItemAsString,T=void 0===A?m:A,_=e.onChange,j=e.onHighlightChange,O=e.onItemsChange,z=e.orientation,L=void 0===z?"vertical":z,U=e.pageSize,H=void 0===U?5:U,B=e.reducerActionContext,K=void 0===B?f:B,W=e.selectionMode,X=void 0===W?"single":W,$=e.stateReducer,G=e.componentName,J=o.useRef(null),Y=(0,u.Z)(F,J),q=o.useCallback(function(e,n,t){if(null==j||j(e,n,t),"DOM"===y&&null!=n&&(t===l.F.itemClick||t===l.F.keyDown||t===l.F.textNavigation)){var r;null==S||null===(r=S(n))||void 0===r||r.focus()}},[S,j,y]),Q=o.useMemo(function(){return{highlightedValue:R,selectedValues:function(e,n){return(0,s.H)(e,n,R)}}},[R]),ee=o.useCallback(function(e,n,t,r,i){switch(null==P||P(e,n,t,r,i),n){case"highlightedValue":q(e,t,r);break;case"selectedValues":null==_||_(e,t,r)}},[q,_,P]),en=o.useMemo(function(){return{disabledItemsFocusable:Z,disableListWrap:k,focusManagement:y,isItemDisabled:V,itemComparer:R,items:E,getItemAsString:T,onHighlightChange:q,orientation:L,pageSize:H,selectionMode:X,stateComparers:Q}},[Z,k,y,V,R,E,T,q,L,H,X,Q]),et=(void 0===w?function(){return{highlightedValue:null,selectedValues:[]}}:w)(),er=null!=$?$:a.R$,ei=o.useMemo(function(){return(0,i.Z)((0,i.Z)({},K),en)},[K,en]),eo=(0,c.r)({reducer:er,actionContext:ei,initialState:et,controlledProps:void 0===p?f:p,stateComparers:Q,onStateChange:ee,componentName:void 0===G?"useList":G}),eu=(0,r.Z)(eo,2),el=eu[0],ea=eu[1],ec=el.highlightedValue,es=el.selectedValues,ed=(n=function(e,n){return ea({type:l.F.textNavigation,event:n,searchString:e})},t=o.useRef({searchString:"",lastTime:null}),o.useCallback(function(e){if(1===e.key.length&&" "!==e.key){var r=t.current,i=e.key.toLowerCase(),o=performance.now();r.searchString.length>0&&r.lastTime&&o-r.lastTime>500?r.searchString=i:(1!==r.searchString.length||i!==r.searchString)&&(r.searchString+=i),r.lastTime=o,n(r.searchString,e)}},[n])),ef=o.useRef([]);o.useEffect(function(){(0,s.H)(ef.current,E,R)||(ea({type:l.F.itemsChange,event:null,items:E,previousItems:ef.current}),ef.current=E,null==O||O(E))},[E,R,ea,O]);var ev=o.useCallback(function(e){var n=(null!=es?es:[]).some(function(n){return null!=n&&R(e,n)});return{focusable:"DOM"===y,highlighted:null!=ec&&R(e,ec),selected:n}},[R,es,ec,y]),eh=o.useMemo(function(){return{dispatch:ea,getItemState:ev}},[ea,ev]);return o.useDebugValue({state:el}),{contextValue:eh,dispatch:ea,getRootProps:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,d._)(e);return(0,i.Z)((0,i.Z)((0,i.Z)({},e),{},{"aria-activedescendant":"activeDescendant"===y&&null!=ec?I(ec):void 0,tabIndex:"DOM"===y?-1:0,ref:Y},n),{},{onBlur:function(e){var t,r;null===(t=n.onBlur)||void 0===t||t.call(n,e),e.defaultMuiPrevented||null!==(r=J.current)&&void 0!==r&&r.contains(e.relatedTarget)||ea({type:l.F.blur,event:e})},onKeyDown:function(e){if(null===(t=n.onKeyDown)||void 0===t||t.call(n,e),!e.defaultMuiPrevented){var t,r=["Home","End","PageUp","PageDown"];"vertical"===L?r.push("ArrowUp","ArrowDown"):r.push("ArrowLeft","ArrowRight"),"activeDescendant"===y&&r.push(" ","Enter"),r.includes(e.key)&&e.preventDefault(),ea({type:l.F.keyDown,key:e.key,event:e}),ed(e)}}})},rootRef:Y,state:el}}},377961:function(e,n,t){"use strict";t.d(n,{J:function(){return a}});var r=t(778521),i=t(470079),o=t(202294),u=t(33725),l=t(276689);function a(e){var n,t=e.handlePointerOverEvents,a=void 0!==t&&t,c=e.item,s=i.useContext(l.Z);if(!s)throw Error("useListItem must be used within a ListProvider");var d=s.dispatch,f=(0,s.getItemState)(c),v=f.highlighted,h=f.selected,g=f.focusable,m=i.useCallback(function(e){return function(n){var t;null===(t=e.onClick)||void 0===t||t.call(e,n),n.defaultPrevented||d({type:u.F.itemClick,item:c,event:n})}},[d,c]),p=i.useCallback(function(e){return function(n){var t;null===(t=e.onMouseOver)||void 0===t||t.call(e,n),n.defaultPrevented||d({type:u.F.itemHover,item:c,event:n})}},[d,c]);return g&&(n=v?0:-1),{getRootProps:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,o._)(e);return(0,r.Z)((0,r.Z)({},e),{},{onClick:m(t),onPointerOver:a?p(t):void 0,tabIndex:n})},highlighted:v,selected:h}}},851692:function(e,n,t){"use strict";t.d(n,{A:function(){return l},T:function(){return u}});var r=t(470079),i=t(735250),o=r.createContext({disableDefaultClasses:!1});function u(e){var n=r.useContext(o).disableDefaultClasses;return function(t){return n?"":e(t)}}function l(e){var n=e.disableDefaultClasses,t=e.children,u=r.useMemo(function(){return{disableDefaultClasses:null!=n&&n}},[n]);return(0,i.jsx)(o.Provider,{value:u,children:t})}},318692:function(e,n,t){"use strict";t.d(n,{$:function(){return o}});var r=t(778521),i=t(306806);function o(e,n,t){return void 0===e||(0,i.X)(e)?n:(0,r.Z)((0,r.Z)({},n),{},{ownerState:(0,r.Z)((0,r.Z)({},n.ownerState),t)})}},131159:function(e,n,t){"use strict";function r(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e,n){return e===n};return e.length===n.length&&e.every(function(e,r){return t(e,n[r])})}t.d(n,{H:function(){return r}})},947569:function(e,n,t){"use strict";t.d(n,{f:function(){return i}});var r=t(778521);function i(e,n){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=(0,r.Z)((0,r.Z)({},t),e(t));return(0,r.Z)((0,r.Z)({},i),n(i))}}},202294:function(e,n,t){"use strict";t.d(n,{_:function(){return o}});var r=t(436578),i=t.n(r);function o(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(void 0===e)return{};var t={};return i()(e).filter(function(t){return t.match(/^on[A-Z]/)&&"function"==typeof e[t]&&!n.includes(t)}).forEach(function(n){t[n]=e[n]}),t}},306806:function(e,n,t){"use strict";function r(e){return"string"==typeof e}t.d(n,{X:function(){return r}})},43866:function(e,n,t){"use strict";t.d(n,{L:function(){return c}});var r=t(778521),i=t(436578),o=t.n(i),u=t(653048),l=t(202294);function a(e){if(void 0===e)return{};var n={};return o()(e).filter(function(n){return!(n.match(/^on[A-Z]/)&&"function"==typeof e[n])}).forEach(function(t){n[t]=e[t]}),n}function c(e){var n=e.getSlotProps,t=e.additionalProps,i=e.externalSlotProps,c=e.externalForwardedProps,s=e.className;if(!n){var d=(0,u.default)(null==t?void 0:t.className,s,null==c?void 0:c.className,null==i?void 0:i.className),f=(0,r.Z)((0,r.Z)((0,r.Z)({},null==t?void 0:t.style),null==c?void 0:c.style),null==i?void 0:i.style),v=(0,r.Z)((0,r.Z)((0,r.Z)({},t),c),i);return d.length>0&&(v.className=d),o()(f).length>0&&(v.style=f),{props:v,internalRef:void 0}}var h=(0,l._)((0,r.Z)((0,r.Z)({},c),i)),g=a(i),m=a(c),p=n(h),b=(0,u.default)(null==p?void 0:p.className,null==t?void 0:t.className,s,null==c?void 0:c.className,null==i?void 0:i.className),Z=(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},null==p?void 0:p.style),null==t?void 0:t.style),null==c?void 0:c.style),null==i?void 0:i.style),x=(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},p),t),m),g);return b.length>0&&(x.className=b),o()(Z).length>0&&(x.style=Z),{props:x,internalRef:p.ref}}},576799:function(e,n,t){"use strict";function r(e,n,t){return"function"==typeof e?e(n,t):e}t.d(n,{x:function(){return r}})},9366:function(e,n,t){"use strict";t.d(n,{r:function(){return f}});var r=t(863363),i=t(778521),o=t(436578),u=t.n(o),l=t(470079);function a(e,n){return e===n}var c={},s=function(){};function d(e,n){var t=(0,i.Z)({},e);return u()(n).forEach(function(e){void 0!==n[e]&&(t[e]=n[e])}),t}function f(e){var n,t,o,f,v,h,g,m,p=l.useRef(null),b=e.reducer,Z=e.initialState,x=e.controlledProps,k=void 0===x?c:x,C=e.stateComparers,y=void 0===C?c:C,w=e.onStateChange,S=void 0===w?s:w,I=e.actionContext;e.componentName,l.useRef(k);var N=l.useCallback(function(e,n){return p.current=n,b(d(e,k),n)},[k,b]),V=l.useReducer(N,Z),F=(0,r.Z)(V,2),D=F[0],P=F[1],E=l.useCallback(function(e){P((0,i.Z)((0,i.Z)({},e),{},{context:I}))},[I]);return t=(n={nextState:D,initialState:Z,stateComparers:null!=y?y:c,onStateChange:null!=S?S:s,controlledProps:k,lastActionRef:p}).nextState,o=n.initialState,f=n.stateComparers,v=n.onStateChange,h=n.controlledProps,g=n.lastActionRef,m=l.useRef(o),l.useEffect(function(){if(null!==g.current){var e=d(m.current,h);u()(t).forEach(function(n){var r,i,o,u=null!==(r=f[n])&&void 0!==r?r:a,l=t[n],c=e[n];(null!=c||null==l)&&(null==c||null!=l)&&(null==c||null==l||u(l,c))||null==v||v(null!==(i=g.current.event)&&void 0!==i?i:null,n,l,null!==(o=g.current.type)&&void 0!==o?o:"",t)}),m.current=t,g.current=null}},[m,t,g,v,f,h]),[d(D,k),E]}},411182:function(e,n,t){"use strict";t.d(n,{F:function(){return o}});var r=t(863363),i=t(470079);function o(e){var n=e.rootElementName;e.componentName;var t=i.useState((void 0===n?"":n).toUpperCase()),o=(0,r.Z)(t,2),u=o[0],l=o[1];return[u,i.useCallback(function(e){var n;l(null!==(n=null==e?void 0:e.tagName)&&void 0!==n?n:"")},[])]}},996125:function(e,n,t){"use strict";t.d(n,{y:function(){return s}});var r=t(778521),i=t(577903),o=t(503945),u=t(318692),l=t(43866),a=t(576799),c=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function s(e){var n,t=e.elementType,s=e.externalSlotProps,d=e.ownerState,f=e.skipResolvingSlotProps,v=(0,i.Z)(e,c),h=void 0!==f&&f?{}:(0,a.x)(s,d),g=(0,l.L)((0,r.Z)((0,r.Z)({},v),{},{externalSlotProps:h})),m=g.props,p=g.internalRef,b=(0,o.Z)(p,null==h?void 0:h.ref,null===(n=e.additionalProps)||void 0===n?void 0:n.ref);return(0,u.$)(t,(0,r.Z)((0,r.Z)({},m),{},{ref:b}),d)}},163226:function(e,n,t){"use strict";var r=(0,t(423946).ZP)();n.Z=r},921123:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return S}});var r,i,o,u,l=t(863363),a=t(778521),c=t(564376),s=t(470079),d=t(482891),f=t(866743),v=t(60289),h=t(202724),g=t(357226),m=t(163226),p=t(735250),b={100:"#DAECFF",200:"#99CCF3",400:"#3399FF",500:"#007FFF",600:"#0072E5",900:"#003A75"},Z={50:"#f6f8fa",100:"#eaeef2",200:"#d0d7de",300:"#afb8c1",400:"#8c959f",500:"#6e7781",600:"#57606a",700:"#424a53",800:"#32383f",900:"#24292f"},x=(0,m.Z)("ul")(function(e){var n=e.theme;return'\n  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";\n  font-size: 0.875rem;\n  box-sizing: border-box;\n  padding: 6px;\n  margin: 12px 0;\n  min-width: 200px;\n  border-radius: 12px;\n  overflow: auto;\n  outline: 0;\n  background: '.concat("dark"===n.palette.mode?Z[900]:"#fff",";\n  border: 1px solid ").concat("dark"===n.palette.mode?Z[700]:Z[200],";\n  color: ").concat("dark"===n.palette.mode?Z[300]:Z[900],";\n  box-shadow: 0 1px 3px rgba(31,35,40,0.12), 0 8px 24px rgba(66,74,83,0.12);\n  z-index: 1;\n  ")}),k=(0,m.Z)(v.s)(function(e){var n=e.theme;return"\n  list-style: none;\n  padding: 6px;\n  margin: 2px 0;\n  border-radius: 8px;\n  cursor: default;\n  user-select: none;\n  &:last-of-type {\n    border-bottom: none;\n  }\n  &.".concat(h.r.focusVisible," {\n    outline: 3px solid ").concat("dark"===n.palette.mode?b[600]:b[200],";\n    background-color: ").concat("dark"===n.palette.mode?Z[800]:Z[100],";\n    color: ").concat("dark"===n.palette.mode?Z[300]:Z[900],";\n  }\n  &.").concat(h.r.disabled," {\n    color: ").concat("dark"===n.palette.mode?Z[700]:Z[400],";\n  }\n  &:hover:not(.").concat(h.r.disabled,") {\n    background-color: ").concat("dark"===n.palette.mode?Z[800]:Z[100],";\n    color: ").concat("dark"===n.palette.mode?Z[300]:Z[900],";\n  }\n  ")}),C=(0,m.Z)(f.j)(function(e){var n=e.theme;return'\n  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";;\n  font-size: 0.875rem;\n  box-sizing: border-box;\n  min-height: calc(1.5em + 22px);\n  border-radius: 12px;\n  padding: 12px 16px;\n  line-height: 1.5;\n  background: '.concat("dark"===n.palette.mode?Z[900]:"#fff",";\n  border: 1px solid ").concat("dark"===n.palette.mode?Z[700]:Z[200],";\n  color: ").concat("dark"===n.palette.mode?Z[300]:Z[900],";\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 120ms;\n  &:hover {\n    background: ").concat("dark"===n.palette.mode?Z[800]:Z[50],";\n    border-color: ").concat("dark"===n.palette.mode?Z[600]:Z[300],";\n  }\n  &:focus {\n    border-color: ").concat(b[400],";\n    outline: 3px solid ").concat("dark"===n.palette.mode?b[500]:b[200],";\n  }\n  ")}),y=(0,m.Z)("div")(r||(r=(0,c.Z)(["\n  max-width: 800px;\n  min-height: calc(100vh - 40px);\n  box-sizing: border-box;\n  margin: 20px auto;\n  padding: 20px;\n  border-radius: 4px;\n"]))),w=(0,m.Z)(function(e){return(0,p.jsx)("li",(0,a.Z)((0,a.Z)({},e),{},{role:"separator"}))})("\n  height: 0;\n  margin: 8px -6px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  list-style: none;\n");function S(){var e=s.useState(!1),n=(0,l.Z)(e,2),t=n[0],r=n[1],a=function(e){return function(){console.log("Clicked on ".concat(e))}};return(0,p.jsx)(y,{children:(0,p.jsxs)(g.L,{open:t,onOpenChange:function(e,n){r(n)},children:[i||(i=(0,p.jsx)(C,{children:"Create new..."})),(0,p.jsxs)(d.v,{slots:{listbox:x},slotProps:{root:{placement:"bottom-start",id:"simple-menu"}},children:[(0,p.jsx)(k,{onClick:a("New repository"),children:"New repository"}),(0,p.jsx)(k,{onClick:a("Import repository"),children:"Import repository"}),o||(o=(0,p.jsx)(w,{})),(0,p.jsx)(k,{onClick:a("New codespace"),children:"New codespace"}),(0,p.jsx)(k,{onClick:a("New gist"),children:"New gist"}),u||(u=(0,p.jsx)(w,{})),(0,p.jsx)(k,{onClick:a("New organization"),children:"New organization"})]})]})})}},74412:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/experiments/base/menu",function(){return t(921123)}])},564376:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(253160),i=t(175196);function o(e,n){return n||(n=e.slice(0)),r(i(e,{raw:{value:r(n)}}))}}},function(e){e.O(0,[28562,1478,49774,92888,40179],function(){return e(e.s=74412)}),_N_E=e.O()}]);