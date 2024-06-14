(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[49799],{190800:function(e,t,n){"use strict";n.d(t,{O:function(){return p},r:function(){return f}});var r=n(577903),i=n(778521);n(470079);var o=n(621234),a=n(859861),c=n(146803),u=n(781097),s=n(215129),l=n(735250),d=["classNameDescription","classNameTitle","description","icon","link","svg","title","titleProps"];function p(e){var t=e.icon;return(0,l.jsx)(a.Z,{sx:function(e){return(0,i.Z)({width:36,height:36,display:"flex",justifyContent:"center",alignItems:"center",flexShrink:0,borderRadius:1,border:"1px solid",borderColor:"primary.200",bgcolor:"primary.50",boxShadow:"0px 0 0 2px ".concat((0,o.Fq)(e.palette.primary[500],.1),", 0px 2px 12px 0px rgba(234, 237, 241, 0.3) inset"),"& .MuiSvgIcon-root":{fontSize:e.typography.pxToRem(18)}},e.applyDarkStyles({borderColor:(0,o.Fq)(e.palette.primary[400],.25),bgcolor:(0,o.Fq)(e.palette.primary[900],.2),boxShadow:"0 0 0 2px ".concat((0,o.Fq)(e.palette.primary[600],.1),", 0px 2px 12px 0px rgba(0, 0, 0, 0.25) inset")}))},children:t})}function f(e){var t=e.classNameDescription,n=e.classNameTitle,a=e.description,f=e.icon,m=e.link,v=e.svg,h=e.title,g=e.titleProps,b=(0,r.Z)(e,d);return(0,l.jsxs)(c.Z,(0,i.Z)((0,i.Z)((0,i.Z)({variant:"outlined",component:m?s.r:"div",href:m},m?{noLinkStyle:!0,prefetch:!1}:{}),{},{sx:function(e){return(0,i.Z)({p:2.5,height:"100%",background:"".concat((e.vars||e).palette.gradients.linearSubtle)},e.applyDarkStyles({bgcolor:(0,o.Fq)(e.palette.primaryDark[800],.25),background:"".concat((e.vars||e).palette.gradients.linearSubtle),borderColor:"primaryDark.700"}))}},b),{},{children:[v&&v,f&&(0,l.jsx)(p,{icon:f}),(0,l.jsx)(u.Z,(0,i.Z)((0,i.Z)({fontWeight:"semiBold",component:"h3",color:"text.primary",variant:"body2",mt:f?2:0,mb:a?.5:0,className:n},g),{},{children:h})),(0,l.jsx)(u.Z,{variant:"body2",color:"text.secondary",className:t,children:a})]}))}},818346:function(e,t,n){"use strict";n.d(t,{ZP:function(){return R}});var r=n(577903),i=n(614030),o=n(234046),a=n(778521),c=n(393385),u=n.n(c),s=n(410231),l=n.n(s),d=n(758869),p=n.n(d),f=n(436578),m=n.n(f),v=n(470079),h=n(653048),g=n(476821),b=n(213591),y=n(306029),x=n(502894),w=n(123280),k=n(17911),Z=v.createContext(),_=n(748032),S=n(735250),j=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function M(e){var t=u()(e);return l()(t)?e:"".concat(t).concat(String(e).replace(String(t),"")||"px")}function C(e){var t=e.breakpoints,n=e.values,r="";m()(n).forEach(function(e){""===r&&0!==n[e]&&(r=e)});var i=m()(t).sort(function(e,n){return t[e]-t[n]});return i.slice(0,i.indexOf(r))}var W=(0,x.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState,r=n.container,o=n.direction,a=n.item,c=n.spacing,u=n.wrap,s=n.zeroMinWidth,d=n.breakpoints,p=[];r&&(p=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||e<=0)return[];if("string"==typeof e&&!l()(Number(e))||"number"==typeof e)return[n["spacing-xs-".concat(String(e))]];var r=[];return t.forEach(function(t){var i=e[t];Number(i)>0&&r.push(n["spacing-".concat(t,"-").concat(String(i))])}),r}(c,d,t));var f=[];return d.forEach(function(e){var r=n[e];r&&f.push(t["grid-".concat(e,"-").concat(String(r))])}),[t.root,r&&t.container,a&&t.item,s&&t.zeroMinWidth].concat((0,i.Z)(p),["row"!==o&&t["direction-xs-".concat(String(o))],"wrap"!==u&&t["wrap-xs-".concat(String(u))]],f)}})(function(e){var t=e.ownerState;return(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"}),t.item&&{margin:0}),t.zeroMinWidth&&{minWidth:0}),"wrap"!==t.wrap&&{flexWrap:t.wrap})},function(e){var t=e.theme,n=e.ownerState,r=(0,g.P$)({values:n.direction,breakpoints:t.breakpoints.values});return(0,g.k9)({theme:t},r,function(e){var t={flexDirection:e};return 0===e.indexOf("column")&&(t["& > .".concat(_.Z.item)]={maxWidth:"none"}),t})},function(e){var t=e.theme,n=e.ownerState,r=n.container,i=n.rowSpacing,a={};if(r&&0!==i){var c,u=(0,g.P$)({values:i,breakpoints:t.breakpoints.values});"object"==typeof u&&(c=C({breakpoints:t.breakpoints.values,values:u})),a=(0,g.k9)({theme:t},u,function(e,n){var r,i=t.spacing(e);return"0px"!==i?(0,o.Z)({marginTop:"-".concat(M(i))},"& > .".concat(_.Z.item),{paddingTop:M(i)}):null!==(r=c)&&void 0!==r&&r.includes(n)?{}:(0,o.Z)({marginTop:0},"& > .".concat(_.Z.item),{paddingTop:0})})}return a},function(e){var t=e.theme,n=e.ownerState,r=n.container,i=n.columnSpacing,a={};if(r&&0!==i){var c,u=(0,g.P$)({values:i,breakpoints:t.breakpoints.values});"object"==typeof u&&(c=C({breakpoints:t.breakpoints.values,values:u})),a=(0,g.k9)({theme:t},u,function(e,n){var r,i=t.spacing(e);return"0px"!==i?(0,o.Z)({width:"calc(100% + ".concat(M(i),")"),marginLeft:"-".concat(M(i))},"& > .".concat(_.Z.item),{paddingLeft:M(i)}):null!==(r=c)&&void 0!==r&&r.includes(n)?{}:(0,o.Z)({width:"100%",marginLeft:0},"& > .".concat(_.Z.item),{paddingLeft:0})})}return a},function(e){var t,n=e.theme,r=e.ownerState;return n.breakpoints.keys.reduce(function(e,i){var o={};if(r[i]&&(t=r[i]),!t)return e;if(!0===t)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var c=(0,g.P$)({values:r.columns,breakpoints:n.breakpoints.values}),u="object"==typeof c?c[i]:c;if(null==u)return e;var s="".concat(Math.round(t/u*1e8)/1e6,"%"),l={};if(r.container&&r.item&&0!==r.columnSpacing){var d=n.spacing(r.columnSpacing);if("0px"!==d){var f="calc(".concat(s," + ").concat(M(d),")");l={flexBasis:f,maxWidth:f}}}o=(0,a.Z)({flexBasis:s,flexGrow:0,maxWidth:s},l)}return 0===n.breakpoints.values[i]?p()(e,o):e[n.breakpoints.up(i)]=o,e},{})}),N=function(e){var t=e.classes,n=e.container,r=e.direction,o=e.item,a=e.spacing,c=e.wrap,u=e.zeroMinWidth,s=e.breakpoints,d=[];n&&(d=function(e,t){if(!e||e<=0)return[];if("string"==typeof e&&!l()(Number(e))||"number"==typeof e)return["spacing-xs-".concat(String(e))];var n=[];return t.forEach(function(t){var r=e[t];if(Number(r)>0){var i="spacing-".concat(t,"-").concat(String(r));n.push(i)}}),n}(a,s));var p=[];s.forEach(function(t){var n=e[t];n&&p.push("grid-".concat(t,"-").concat(String(n)))});var f={root:["root",n&&"container",o&&"item",u&&"zeroMinWidth"].concat((0,i.Z)(d),["row"!==r&&"direction-xs-".concat(String(r)),"wrap"!==c&&"wrap-xs-".concat(String(c))],p)};return(0,y.Z)(f,_.H,t)},R=v.forwardRef(function(e,t){var n=(0,w.Z)({props:e,name:"MuiGrid"}),i=(0,k.Z)().breakpoints,o=(0,b.Z)(n),c=o.className,u=o.columns,s=o.columnSpacing,l=o.component,d=o.container,p=void 0!==d&&d,f=o.direction,m=o.item,g=o.rowSpacing,y=o.spacing,x=void 0===y?0:y,_=o.wrap,M=o.zeroMinWidth,C=(0,r.Z)(o,j),R=v.useContext(Z),D=p?u||12:R,E={},P=(0,a.Z)({},C);i.keys.forEach(function(e){null!=C[e]&&(E[e]=C[e],delete P[e])});var T=(0,a.Z)((0,a.Z)((0,a.Z)({},o),{},{columns:D,container:p,direction:void 0===f?"row":f,item:void 0!==m&&m,rowSpacing:g||x,columnSpacing:s||x,wrap:void 0===_?"wrap":_,zeroMinWidth:void 0!==M&&M,spacing:x},E),{},{breakpoints:i.keys}),z=N(T);return(0,S.jsx)(Z.Provider,{value:D,children:(0,S.jsx)(W,(0,a.Z)({ownerState:T,className:(0,h.default)(z.root,c),as:void 0===l?"div":l,ref:t},P))})})},748032:function(e,t,n){"use strict";n.d(t,{H:function(){return a}});var r=n(614030),i=n(344443),o=n(92358);function a(e){return(0,o.ZP)("MuiGrid",e)}var c=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],u=(0,i.Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,r.Z)([0,1,2,3,4,5,6,7,8,9,10].map(function(e){return"spacing-xs-".concat(e)})),(0,r.Z)(["column-reverse","column","row-reverse","row"].map(function(e){return"direction-xs-".concat(e)})),(0,r.Z)(["nowrap","wrap-reverse","wrap"].map(function(e){return"wrap-xs-".concat(e)})),(0,r.Z)(c.map(function(e){return"grid-xs-".concat(e)})),(0,r.Z)(c.map(function(e){return"grid-sm-".concat(e)})),(0,r.Z)(c.map(function(e){return"grid-md-".concat(e)})),(0,r.Z)(c.map(function(e){return"grid-lg-".concat(e)})),(0,r.Z)(c.map(function(e){return"grid-xl-".concat(e)}))));t.Z=u},526878:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var r,i,o=n(885950),a=n(248247),c=n(259106),u=n(95820),s=n(815577),l=n(781097),d=n(170027),p=n(694776),f=n(535350),m=n(916479),v=n(735250);function h(){return(0,v.jsx)(d.Z,{cozy:!0,noPaddingBottom:!0,children:(0,v.jsx)(p.Z,{alwaysCenter:!0,overline:(0,v.jsxs)(s.Z,{direction:"row",justifyContent:"center",alignItems:"center",children:[(0,v.jsx)(m.Z,{loading:"eager",width:28,height:28,name:"product-core",sx:{mr:1}})," ","MUI Core"]}),title:(0,v.jsxs)(l.Z,{component:"h1",variant:"h2",sx:{textAlign:"center"},gutterBottom:!0,children:["Ready to use components ",r||(r=(0,v.jsx)(f.Z,{children:"free forever"}))]}),description:"Get a growing list of React components and utilities, ready-to-use, free forever, and with accessibility always in mind. We've built the foundational UI blocks for your design system so you don't have to."})})}var g=n(818346),b=n(190800),y=[{title:"Material UI",description:"An open-source React component library that implements Google's Material Design.",link:"/material-ui/"},{title:"Joy UI",description:"An open-source React component library that implements MUI's own in-house design principles.",link:"/joy-ui/getting-started/"},{title:"Base UI",description:"A library of unstyled React components and low-level hooks. With Base UI, you gain complete control over your app's CSS and accessibility features.",link:"/base-ui/"},{title:"MUI System",description:"A set of CSS utilities to help you build custom designs more efficiently. It makes it possible to rapidly lay out custom designs.",link:"/system/getting-started/"}];function x(){return(0,v.jsx)(d.Z,{cozy:!0,children:(0,v.jsx)(g.ZP,{container:!0,spacing:2,children:y.map(function(e){var t=e.title,n=e.description,r=e.link;return(0,v.jsx)(g.ZP,{item:!0,xs:12,md:6,children:(0,v.jsx)(b.r,{link:r,title:t,description:n,titleProps:{component:"h2"}})},t)})})})}var w=n(318304),k=n(48392),Z=n(600507);function _(){return i||(i=(0,v.jsxs)(c.Z,{children:[(0,v.jsx)(a.Z,{title:"MUI Core: Ready-to-use React components, free forever",description:"Get a growing list of React components, ready-to-use, free forever and with accessibility always in mind.",card:"/static/social-previews/core-preview.jpg"}),(0,v.jsx)(k.Z,{}),(0,v.jsx)(u.Z,{gitHubRepository:"https://github.com/mui/material-ui"}),(0,v.jsxs)("main",{id:"main-content",children:[(0,v.jsx)(h,{}),(0,v.jsx)(x,{}),(0,v.jsx)(o.Z,{}),(0,v.jsx)(Z.Z,{}),(0,v.jsx)(o.Z,{})]}),(0,v.jsx)(w.Z,{stackOverflowUrl:"https://stackoverflow.com/questions/tagged/material-ui"})]}))}},600507:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r,i=n(915033),o=n.n(i),a=n(621234),c=n(859861),u=n(781097),s=n(170027),l=n(694776),d=n(535350),p=n(735250),f=o()(function(){return Promise.all([n.e(20897),n.e(25816)]).then(n.bind(n,225816))},{loadableGenerated:{webpack:function(){return[225816]}}});function m(){return(0,p.jsx)(c.Z,{"data-mui-color-scheme":"dark",sx:function(e){return{background:"linear-gradient(180deg, ".concat((0,a.Fq)(e.palette.primaryDark[800],.8),"2%, ").concat(e.palette.primaryDark[900]," 80%), ").concat(e.palette.primaryDark[900])}},children:r||(r=(0,p.jsxs)(s.Z,{bg:"transparent",cozy:!0,children:[(0,p.jsx)(l.Z,{overline:"Join the community",title:(0,p.jsxs)(u.Z,{variant:"h2",component:"h2",children:["Supported by thousands of ",(0,p.jsx)(d.Z,{children:"developers and designers"})]})}),(0,p.jsx)(f,{})]}))})}},535350:function(e,t,n){"use strict";var r=(0,n(502894).ZP)("span")(function(e){var t=e.theme,n=e.color,r=void 0===n?"primary":n;return{background:"linear-gradient(90deg, ".concat((t.vars||t).palette[r][400]," 5%, ").concat((t.vars||t).palette[r].main," 90%)"),WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}});t.Z=r},176307:function(e,t,n){"use strict";var r=n(582103).default,i=n(725598),o=n(429442),a=n(758869);i(t,"__esModule",{value:!0}),function(e,t){for(var n in t)i(e,n,{enumerable:!0,get:t[n]})}(t,{noSSR:function(){return l},default:function(){return d}});var c=n(427597),u=(n(470079),c._(n(677370)));function s(e){return{default:(null==e?void 0:e.default)||e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}function d(e,t){var n=u.default,i={loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};e instanceof o?i.loader=function(){return e}:"function"==typeof e?i.loader=e:"object"==typeof e&&(i=r(r({},i),e));var a=(i=r(r({},i),t)).loader;return(i.loadableGenerated&&(i=r(r({},i),i.loadableGenerated),delete i.loadableGenerated),"boolean"!=typeof i.ssr||i.ssr)?n(r(r({},i),{},{loader:function(){return null!=a?a().then(s):o.resolve(s(function(){return null}))}})):(delete i.webpack,delete i.modules,l(n,i))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(i(t.default,"__esModule",{value:!0}),a(t.default,t),e.exports=t.default)},787677:function(e,t,n){"use strict";var r=n(725598);r(t,"__esModule",{value:!0}),r(t,"LoadableContext",{enumerable:!0,get:function(){return i}});var i=n(427597)._(n(470079)).default.createContext(null)},677370:function(e,t,n){"use strict";/**
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
*/var r=n(582103).default,i=n(950422).default,o=n(691738).default,a=n(91854).default,c=n(725598),u=n(758869),s=n(408011),l=n(125127),d=n(429442);c(t,"__esModule",{value:!0}),c(t,"default",{enumerable:!0,get:function(){return w}});var p=n(427597)._(n(470079)),f=n(787677),m=[],v=[],h=!1;function g(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(function(e){return n.loading=!1,n.loaded=e,e}).catch(function(e){throw n.loading=!1,n.error=e,e}),n}var b=function(){function e(t,n){i(this,e),this._loadFn=t,this._opts=n,this._callbacks=new l,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"==typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},n.delay)),"number"==typeof n.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},n.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(t){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=r(r({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function y(e){return function(e,t){var n=u({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function i(){if(!r){var t=new b(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!h){var o=n.webpack?n.webpack():n.modules;o&&v.push(function(e){var t,n=a(o);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(e.includes(r))return i()}}catch(e){n.e(e)}finally{n.f()}})}function c(e,t){i(),(o=p.default.useContext(f.LoadableContext))&&s(n.modules)&&n.modules.forEach(function(e){o(e)});var o,a=p.default.useSyncExternalStore(r.subscribe,r.getCurrentValue,r.getCurrentValue);return p.default.useImperativeHandle(t,function(){return{retry:r.retry}},[]),p.default.useMemo(function(){var t;return a.loading||a.error?p.default.createElement(n.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:r.retry}):a.loaded?p.default.createElement((t=a.loaded)&&t.default?t.default:t,e):null},[e,a])}return c.preload=function(){return i()},c.displayName="LoadableComponent",p.default.forwardRef(c)}(g,e)}function x(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return d.all(n).then(function(){if(e.length)return x(e,t)})}y.preloadAll=function(){return new d(function(e,t){x(m).then(e,t)})},y.preloadReady=function(e){return void 0===e&&(e=[]),new d(function(t){var n=function(){return h=!0,t()};x(v,e).then(n,n)})},window.__NEXT_PRELOADREADY=y.preloadReady;var w=y},170351:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core",function(){return n(526878)}])},915033:function(e,t,n){e.exports=n(176307)}},function(e){e.O(0,[49774,9535,73976,97146,59727,85925,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,83030,27803,92888,40179],function(){return e(e.s=170351)}),_N_E=e.O()}]);