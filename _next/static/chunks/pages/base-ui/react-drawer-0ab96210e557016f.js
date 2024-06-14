(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43918,39519],{333897:function(e,o,n){var t=n(915012),a=/^\s+/;e.exports=function(e){return e?e.slice(0,t(e)+1).replace(a,""):e}},915012:function(e){var o=/\s/;e.exports=function(e){for(var n=e.length;n--&&o.test(e.charAt(n)););return n}},889678:function(e,o,n){var t=n(706627),a=n(885365),s=n(67948),r=Math.max,i=Math.min;e.exports=function(e,o,n){var c,p,l,d,u,m,h=0,v=!1,f=!1,g=!0;if("function"!=typeof e)throw TypeError("Expected a function");function x(o){var n=c,t=p;return c=p=void 0,h=o,d=e.apply(t,n)}function y(e){var n=e-m,t=e-h;return void 0===m||n>=o||n<0||f&&t>=l}function b(){var e,n,t,s=a();if(y(s))return w(s);u=setTimeout(b,(e=s-m,n=s-h,t=o-e,f?i(t,l-n):t))}function w(e){return(u=void 0,g&&c)?x(e):(c=p=void 0,d)}function C(){var e,n=a(),t=y(n);if(c=arguments,p=this,m=n,t){if(void 0===u)return h=e=m,u=setTimeout(b,o),v?x(e):d;if(f)return clearTimeout(u),u=setTimeout(b,o),x(m)}return void 0===u&&(u=setTimeout(b,o)),d}return o=s(o)||0,t(n)&&(v=!!n.leading,l=(f="maxWait"in n)?r(s(n.maxWait)||0,o):l,g="trailing"in n?!!n.trailing:g),C.cancel=function(){void 0!==u&&clearTimeout(u),h=0,c=m=p=u=void 0},C.flush=function(){return void 0===u?d:w(a())},C}},706627:function(e){e.exports=function(e){var o=typeof e;return null!=e&&("object"==o||"function"==o)}},696689:function(e,o,n){var t=n(371017)(function(e,o,n){return e+(n?"-":"")+o.toLowerCase()});e.exports=t},885365:function(e,o,n){var t=n(573401);e.exports=function(){return t.Date.now()}},123763:function(e,o,n){var t=n(889678),a=n(706627);e.exports=function(e,o,n){var s=!0,r=!0;if("function"!=typeof e)throw TypeError("Expected a function");return a(n)&&(s="leading"in n?!!n.leading:s,r="trailing"in n?!!n.trailing:r),t(e,o,{leading:s,maxWait:o,trailing:r})}},67948:function(e,o,n){var t=n(333897),a=n(706627),s=n(42848),r=0/0,i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,p=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(s(e))return r;if(a(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=a(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=t(e);var n=c.test(e);return n||p.test(e)?l(e.slice(2),n?2:8):i.test(e)?r:+e}},740201:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return h}});var t={};n.r(t),n.d(t,{demoComponents:function(){return l},demos:function(){return p},docs:function(){return c},srcComponents:function(){return d}});var a=n(778521),s=n(577903);n(470079);var r=n(916613),i=n(853301),c={en:{description:"Navigation drawers (also known as sidebars) provide ergonomic access to different destinations without taking the user out of context.",location:"/docs/data/base/components/drawer/drawer.md",rendered:['<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="error-icon" viewBox="0 0 20 20">\n      <path fill-rule="evenodd" d="M2 7.4v5.2a2 2 0 0 0 .586 1.414l3.4 3.4A2 2 0 0 0 7.4 18h5.2a2 2 0 0 0 1.414-.586l3.4-3.4A2 2 0 0 0 18 12.6V7.4a2 2 0 0 0-.586-1.414l-3.4-3.4A2 2 0 0 0 12.6 2H7.4a2 2 0 0 0-1.414.586l-3.4 3.4A2 2 0 0 0 2 7.4Zm11.03-.43a.75.75 0 0 1 0 1.06L11.06 10l1.97 1.97a.75.75 0 1 1-1.06 1.06L10 11.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L8.94 10 6.97 8.03a.75.75 0 0 1 1.06-1.06L10 8.94l1.97-1.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="warning-icon" viewBox="0 0 20 20">\n      <path d="M2.33 17a.735.735 0 0 1-.665-.375.631.631 0 0 1-.094-.375.898.898 0 0 1 .115-.396L9.353 3.062a.621.621 0 0 1 .281-.27.85.85 0 0 1 .729 0 .622.622 0 0 1 .281.27l7.667 12.792c.07.125.108.257.114.396a.63.63 0 0 1-.093.375.842.842 0 0 1-.271.27.728.728 0 0 1-.394.105H2.33Zm7.664-2.5c.211 0 .39-.072.536-.214a.714.714 0 0 0 .218-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.531-.22.736.736 0 0 0-.536.215.714.714 0 0 0-.219.531c0 .212.072.39.215.536.143.146.32.219.531.219Zm0-2.5c.211 0 .39-.072.536-.216a.72.72 0 0 0 .218-.534v-2.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.531-.216.734.734 0 0 0-.536.216.72.72 0 0 0-.219.534v2.5c0 .212.072.39.215.534a.72.72 0 0 0 .531.216Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="success-icon" viewBox="0 0 20 20">\n      <path d="m8.938 10.875-1.25-1.23a.718.718 0 0 0-.521-.228.718.718 0 0 0-.521.229.73.73 0 0 0 0 1.062l1.77 1.771c.153.153.327.23.521.23a.718.718 0 0 0 .521-.23l3.896-3.896a.73.73 0 0 0 0-1.062.718.718 0 0 0-.52-.23.718.718 0 0 0-.521.23l-3.376 3.354ZM10 18a7.796 7.796 0 0 1-3.104-.625 8.065 8.065 0 0 1-2.552-1.719 8.064 8.064 0 0 1-1.719-2.552A7.797 7.797 0 0 1 2 10c0-1.111.208-2.15.625-3.115a8.064 8.064 0 0 1 4.27-4.26A7.797 7.797 0 0 1 10 2c1.111 0 2.15.208 3.115.625a8.096 8.096 0 0 1 4.26 4.26C17.792 7.851 18 8.89 18 10a7.797 7.797 0 0 1-.625 3.104 8.066 8.066 0 0 1-4.26 4.271A7.774 7.774 0 0 1 10 18Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="info-icon" viewBox="0 0 20 20">\n      <path d="M9.996 14c.21 0 .39-.072.535-.216a.72.72 0 0 0 .219-.534v-3.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.532-.216.734.734 0 0 0-.535.216.72.72 0 0 0-.219.534v3.5c0 .213.071.39.214.534a.72.72 0 0 0 .532.216Zm0-6.5c.21 0 .39-.071.535-.214a.714.714 0 0 0 .219-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.532-.219.736.736 0 0 0-.535.214.714.714 0 0 0-.219.532c0 .21.071.39.214.535.143.146.32.219.532.219Zm.01 10.5a7.81 7.81 0 0 1-3.11-.625 8.065 8.065 0 0 1-2.552-1.719 8.066 8.066 0 0 1-1.719-2.551A7.818 7.818 0 0 1 2 9.99c0-1.104.208-2.14.625-3.105a8.066 8.066 0 0 1 4.27-4.26A7.818 7.818 0 0 1 10.009 2a7.75 7.75 0 0 1 3.106.625 8.083 8.083 0 0 1 4.26 4.265A7.77 7.77 0 0 1 18 9.994a7.81 7.81 0 0 1-.625 3.11 8.066 8.066 0 0 1-1.719 2.552 8.083 8.083 0 0 1-2.546 1.719 7.77 7.77 0 0 1-3.104.625Z"/>\n      </symbol>\n      </svg>','\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n        <symbol id="anchor-link-icon" viewBox="0 0 12 6">\n          <path d="M8.9176 0.083252H7.1676C6.84677 0.083252 6.58427 0.345752 6.58427 0.666585C6.58427 0.987419 6.84677 1.24992 7.1676 1.24992H8.9176C9.8801 1.24992 10.6676 2.03742 10.6676 2.99992C10.6676 3.96242 9.8801 4.74992 8.9176 4.74992H7.1676C6.84677 4.74992 6.58427 5.01242 6.58427 5.33325C6.58427 5.65409 6.84677 5.91659 7.1676 5.91659H8.9176C10.5276 5.91659 11.8343 4.60992 11.8343 2.99992C11.8343 1.38992 10.5276 0.083252 8.9176 0.083252ZM3.6676 2.99992C3.6676 3.32075 3.9301 3.58325 4.25094 3.58325H7.75094C8.07177 3.58325 8.33427 3.32075 8.33427 2.99992C8.33427 2.67909 8.07177 2.41659 7.75094 2.41659H4.25094C3.9301 2.41659 3.6676 2.67909 3.6676 2.99992ZM4.83427 4.74992H3.08427C2.12177 4.74992 1.33427 3.96242 1.33427 2.99992C1.33427 2.03742 2.12177 1.24992 3.08427 1.24992H4.83427C5.1551 1.24992 5.4176 0.987419 5.4176 0.666585C5.4176 0.345752 5.1551 0.083252 4.83427 0.083252H3.08427C1.47427 0.083252 0.167603 1.38992 0.167603 2.99992C0.167603 4.60992 1.47427 5.91659 3.08427 5.91659H4.83427C5.1551 5.91659 5.4176 5.65409 5.4176 5.33325C5.4176 5.01242 5.1551 4.74992 4.83427 4.74992Z" />\n        </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n      <path d="M22.8481 4C22.8481 2.9 21.9481 2 20.8481 2H4.84814C3.74814 2 2.84814 2.9 2.84814 4V16C2.84814 17.1 3.74814 18 4.84814 18H18.8481L22.8481 22V4ZM16.8481 11H13.8481V14C13.8481 14.55 13.3981 15 12.8481 15C12.2981 15 11.8481 14.55 11.8481 14V11H8.84814C8.29814 11 7.84814 10.55 7.84814 10C7.84814 9.45 8.29814 9 8.84814 9H11.8481V6C11.8481 5.45 12.2981 5 12.8481 5C13.3981 5 13.8481 5.45 13.8481 6V9H16.8481C17.3981 9 17.8481 9.45 17.8481 10C17.8481 10.55 17.3981 11 16.8481 11Z" />\n      </symbol>\n      </svg>','<h1>Drawer \uD83D\uDEA7</h1><p class="description">Navigation drawers (also known as sidebars) provide ergonomic access to different destinations without taking the user out of context.</p>\n\n<aside class="MuiCallout-root MuiCallout-warning">\n            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">\n<use class="MuiCode-copied-icon" xlink:href="#warning-icon" />\n</svg>\n            <div class="MuiCallout-content">\n            <p>The Base\xa0UI Drawer component isn&#39;t available yet, but you can upvote <a href="https://github.com/mui/base-ui/issues/38">this GitHub issue</a> to see it arrive sooner.</p>\n\n</div></aside>'],toc:[],title:"React Drawer component",headers:{productId:"base-ui",title:"React Drawer component",githubLabel:"component: drawer",components:[],hooks:[]}}},p={};p.scope={process:{},import:{}};var l={},d={},u=n(735250),m=["userLanguage"];function h(e){e.userLanguage;var o=(0,s.Z)(e,m);return(0,u.jsx)(r.Z,(0,a.Z)((0,a.Z)({},t),o))}h.getLayout=function(e){return(0,u.jsx)(i.ZP,{children:e})}},473510:function(e,o,n){"use strict";n.d(o,{H:function(){return d},Z:function(){return m}});var t=n(614030),a=n(778521);n(470079);var s=n(389136),r=n(502894),i=n(859861),c=n(787735),p=n(215129),l=n(735250),d=50,u=(0,r.ZP)(p.r)(function(e){var o=e.theme;return(0,a.Z)({minHeight:30,minWidth:0,padding:o.spacing(.5,1),border:"1px solid",borderColor:"transparent",fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightSemiBold,fontSize:o.typography.pxToRem(14),color:(o.vars||o).palette.text.secondary,borderRadius:"8px","&:hover":{background:(o.vars||o).palette.grey[50],borderColor:(o.vars||o).palette.divider,color:(o.vars||o).palette.text.primary}},o.applyDarkStyles({"&:hover":{borderColor:(o.vars||o).palette.divider,background:(o.vars||o).palette.primaryDark[700]},"&.Mui-selected":{color:(o.vars||o).palette.primary[300]}}))});function m(e){var o,n=e.activeTab,a=e.children,r=e.markdown.headers,p=(0,s.useRouter)(),d=(0,c.qM)(),m=p.pathname.endsWith("[docsTab]")?p.pathname.replace("[docsTab]",""):p.pathname,h="".concat(m.endsWith("/")?m:"".concat(m,"/")),v=[{key:"",label:d("api-docs.demos"),href:m}].concat((0,t.Z)((null===(o=r.components)||void 0===o?void 0:o.length)>0?[{key:"components-api",label:d("api-docs.componentsApi"),href:"".concat(h,"components-api")}]:[]),(0,t.Z)(r.hooks&&r.hooks.length>0?[{key:"hooks-api",label:d("api-docs.hooksApi"),href:"".concat(h,"hooks-api")}]:[]));return(0,l.jsxs)(i.Z,{className:"component-tabs",sx:{display:"inline"},children:[(0,l.jsx)(i.Z,{component:"nav",className:"component-tabs",sx:{position:"sticky",top:57,mt:2,mx:{xs:-2,sm:-1},backgroundColor:"background.default",borderBottom:1,borderColor:"divider",zIndex:1e3,display:"inline-flex",py:1,gap:.5,"&::before":{content:"''",position:"absolute",bottom:0,left:{"":"1px","components-api":"67px","hooks-api":"198px"}[n],width:{"":"62px","components-api":"127px","hooks-api":"86px"}[n],height:"2px",backgroundColor:"primary.light"}},children:v.map(function(e){return(0,l.jsx)(u,{href:e.href,"aria-current":n===e.key?"page":void 0,className:e.key.includes("api")?"skip-algolia-crawler":"",sx:{color:n===e.key?"primary.main":"inherit"},children:e.label},e.key)})}),a]})}},916613:function(e,o,n){"use strict";n.d(o,{Z:function(){return K}});var t,a,s,r,i,c,p,l=n(778521),d=n(614030),u=n(863363),m=n(436578),h=n.n(m),v=n(470079),f=n(639519),g=n.n(f),x=n(389136),y=n(696689),b=n.n(y),w=n(302312),C=n(513182),j=n(871379),k=n(83803),H=n(949110),T=n(284384),Z=n(53453),D=n(986993),M=n(809463),P=n(619252),_=n(735250);function S(e){var o,n=e.hash,t=e.text,a=e.level,s=(0,j.qM)();return(0,_.jsx)(k.N,{title:(o={demos:s("api-docs.demos"),import:s("api-docs.import"),props:s("api-docs.props"),"theme-default-props":s("api-docs.themeDefaultProps"),inheritance:s("api-docs.inheritance"),slots:s("api-docs.slots"),classes:s("api-docs.classes"),css:s("api-docs.css")})[n]||o[t]||t||n,hash:n,level:void 0===a?"h2":a})}function L(e){var o=e.descriptions,n=e.pageContents,i=e.defaultLayout,c=void 0===i?"table":i,p=e.layoutStorageKey,l=void 0===p?P.aB:p,u=(0,j.qM)(),m=(0,j.fO)(),f=(0,x.useRouter)();return v.useEffect(function(){var e=f.asPath.indexOf("#")>=0?f.asPath.split("#")[1]:null;f.isReady&&e&&e.indexOf("-unstyled")>=0&&f.replace({hash:"".concat(e.replace("-unstyled",""))},null,{shallow:!0})},[f]),h()(n).map(function(e){var i=n[e],p=i.cssComponent,h=i.filename,f=i.forwardsRefTo,g=i.inheritance,x=i.name,y=i.props,w=i.spread,C=i.slots,j=i.classes,k=i.imports,P=(0,d.Z)(j).sort(function(e,o){return e.className.localeCompare(o.className)}),L=o[e][m],N=L.classDescriptions,A=L.propDescriptions,O=L.slotDescriptions,E=h.includes("mui-joy"),V=h.includes("mui-base"),B="";E?B="/joy-ui/customization/overriding-component-structure/":V&&(B="/base-ui/guides/overriding-component-structure/");var I=u("api-docs.refRootElement");null==f&&(I=u("api-docs.refNotHeld"));var z="";w&&(z=u("api-docs.spreadHint").replace(/{{spreadHintElement}}/,g?'<a href="'.concat(g.pathname,'">').concat(g.component,"</a>"):u("api-docs.nativeElement")));var R="";g&&"Transition"===g.component&&(R=u("api-docs.inheritanceSuffixTransition"));var W=b()(x),q=k.join("\n// ".concat(u("or"),"\n"));return(0,_.jsxs)(v.Fragment,{children:[(0,_.jsxs)(T.Z,{children:[(0,_.jsx)(S,{hash:W,text:"".concat(x," API")}),(0,_.jsx)(S,{text:"import",hash:"".concat(W,"-import"),level:"h3"}),(0,_.jsx)(H.HighlightedCode,{code:q,language:"jsx"}),k.length>1&&(0,_.jsx)("p",{dangerouslySetInnerHTML:{__html:u("api-docs.importDifference")}}),(0,_.jsx)(Z.Z,{properties:y,propertiesDescriptions:A,componentName:x,spreadHint:z,level:"h3",titleHash:"".concat(W,"-props"),defaultLayout:c,layoutStorageKey:l.props}),t||(t=(0,_.jsx)("br",{})),p&&(0,_.jsxs)(v.Fragment,{children:[(0,_.jsx)("span",{dangerouslySetInnerHTML:{__html:u("api-docs.cssComponent").replace(/{{name}}/,i.name)}}),a||(a=(0,_.jsx)("br",{})),s||(s=(0,_.jsx)("br",{}))]}),(0,_.jsx)("div",{className:"MuiCallout-root MuiCallout-info",dangerouslySetInnerHTML:{__html:I},style:{alignItems:"baseline",gap:"4px",marginTop:0}}),g&&(0,_.jsxs)(v.Fragment,{children:[(0,_.jsx)(S,{text:"inheritance",hash:"".concat(W,"-inheritance"),level:"h3"}),(0,_.jsx)("span",{dangerouslySetInnerHTML:{__html:u("api-docs.inheritanceDescription").replace(/{{component}}/,g.component).replace(/{{pathname}}/,g.pathname).replace(/{{suffix}}/,R).replace(/{{name}}/,i.name)}})]}),i.themeDefaultProps&&(0,_.jsxs)(v.Fragment,{children:[(0,_.jsx)(S,{text:"theme-default-props",hash:"".concat(x,"-theme-default-props"),level:"h4"}),(0,_.jsx)("span",{dangerouslySetInnerHTML:{__html:u("api-docs.themeDefaultPropsDescription").replace(/{{muiName}}/,i.muiName).replace(/{{defaultPropsLink}}/,E?"/joy-ui/customization/themed-components/#theme-default-props":"/material-ui/customization/theme-components/#theme-default-props")}})]}),(0,_.jsx)(M.Z,{componentSlots:C,slotDescriptions:O,componentName:x,titleHash:"".concat(W,"-slots"),level:"h3",spreadHint:B&&u("api-docs.slotDescription").replace(/{{slotGuideLink}}/,B),defaultLayout:c,layoutStorageKey:l.slots}),(0,_.jsx)(D.Z,{componentClasses:P,componentName:i.name,classDescriptions:N,spreadHint:u("api-docs.classesDescription"),titleHash:"".concat(W,"-classes"),level:"h3",defaultLayout:c,layoutStorageKey:l.classes})]}),(0,_.jsx)("svg",{style:{display:"none"},xmlns:"http://www.w3.org/2000/svg",children:r||(r=(0,_.jsx)("symbol",{id:"anchor-link-icon",viewBox:"0 0 16 16",children:(0,_.jsx)("path",{d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})}))})]},"component-api-".concat(e))})}function N(e){var o,n=e.hash,t=e.text,a=e.level,s=(0,j.qM)();return(0,_.jsx)(k.N,{hash:n,title:(o={demos:s("api-docs.demos"),import:s("api-docs.import"),"hook-name":s("api-docs.hookName"),parameters:s("api-docs.parameters"),"return-value":s("api-docs.returnValue")})[n]||o[t]||t||n,level:void 0===a?"h2":a})}function A(e){var o=e.descriptions,n=e.pagesContents,t=e.defaultLayout,a=void 0===t?"table":t,s=e.layoutStorageKey,r=void 0===s?P.aB:s,p=(0,j.fO)(),l=(0,j.qM)();return h()(n).map(function(e){var t=n[e],s=t.name,d=t.parameters,u=t.returnValue,m=t.imports,f=o[e][p],g=f.parametersDescriptions,x=f.returnValueDescriptions,y=b()(s),w=m.join("\n// ".concat(l("or"),"\n"));return(0,_.jsxs)(v.Fragment,{children:[(0,_.jsxs)(T.Z,{children:[(0,_.jsx)(N,{hash:y,text:"".concat(s," API")}),(0,_.jsx)(N,{text:"import",hash:"".concat(y,"-import"),level:"h3"}),(0,_.jsx)(H.HighlightedCode,{code:w,language:"jsx"}),m.length>1&&(0,_.jsx)("p",{dangerouslySetInnerHTML:{__html:l("api-docs.importDifference")}}),h()(d).length>0?(0,_.jsx)(Z.Z,{properties:d,propertiesDescriptions:g,componentName:s,hooksParameters:!0,level:"h3",title:"api-docs.parameters",titleHash:"".concat(y,"-parameters"),defaultLayout:a,layoutStorageKey:r}):(0,_.jsx)("span",{children:l("api-docs.hooksNoParameters")}),(0,_.jsx)(Z.Z,{properties:u,propertiesDescriptions:x,componentName:s,showOptionalAbbr:!0,hooksReturnValue:!0,level:"h3",title:"api-docs.returnValue",titleHash:"".concat(y,"-return-value"),defaultLayout:a,layoutStorageKey:r}),i||(i=(0,_.jsx)("br",{}))]}),(0,_.jsx)("svg",{style:{display:"none"},xmlns:"http://www.w3.org/2000/svg",children:c||(c=(0,_.jsx)("symbol",{id:"anchor-link-icon",viewBox:"0 0 16 16",children:(0,_.jsx)("path",{d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})}))})]},"hook-api-".concat(e))})}var O=n(512589),E=n(597683),V=n(42141),B=n(162119),I=n(775196),z=n(694366),R=n(853301),W=n(473510),q=n(74077);function F(e){var o=e.mode,n=(0,C.tv)().setMode;return v.useEffect(function(){n(o)},[o,n]),null}function K(e){var o,n=(0,w.Z)(),t=(0,x.useRouter)(),a=v.useState(null!==(o=t.query.docsTab)&&void 0!==o?o:""),s=(0,u.Z)(a,2),r=s[0],i=s[1],c=(0,V.ln)(t.asPath).canonicalAs,m=e.disableAd,f=void 0!==m&&m,g=e.disableToc,y=e.demos,k=void 0===y?{}:y,H=e.docs,T=e.demoComponents,M=e.srcComponents,P=e.componentsApiDescriptions,S=e.componentsApiPageContents,N=e.hooksApiDescriptions,K=e.hooksApiPageContents,U=(0,j.fO)(),$=(0,j.qM)();v.useEffect(function(){var e;i(null!==(e=t.query.docsTab)&&void 0!==e?e:"")},[t.query.docsTab]);var G=H[U]||H.en,X=G.toc;function Y(e,o){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=[];return h()(n).forEach(function(n){t.push({text:n,hash:"".concat(e,"-").concat(o,"-").concat(n),children:[]})}),{text:function(e,o){var n={demos:e("api-docs.demos"),import:e("api-docs.import"),"hook-name":e("api-docs.hookName"),parameters:e("api-docs.parameters"),"return-value":e("api-docs.returnValue")};if(!n.hasOwnProperty(o))throw TypeError("Unable to translate header '".concat(o,"'. Did you mean one of '").concat(h()(n).join("', '"),"'"));return n[o]||o}($,o),hash:"".concat(e,"-").concat(o),children:t}}var J=[];function Q(e,o){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{inheritance:!1,themeDefaultProps:!1};return{text:(0,O.q)($,o),hash:"".concat(e,"-").concat(o),children:[].concat((0,d.Z)(n.inheritance?[{text:$("api-docs.inheritance"),hash:"inheritance",children:[]}]:[]),(0,d.Z)(n.themeDefaultProps?[{text:$("api-docs.themeDefaultProps"),hash:"theme-default-props",children:[]}]:[]))}}K&&h()(K).forEach(function(e){var o=K[e],n=o.name,t=o.parameters,a=o.returnValue,s=b()(n),r=[Y(s,"import"),Y(s,"parameters",void 0===t?{}:t),Y(s,"return-value",void 0===a?{}:a)].filter(Boolean);J.push({text:n,hash:s,children:r})});var ee=[];S&&h()(S).forEach(function(e){var o=P[e][U].componentDescriptionToc,n=S[e],t=n.name,a=n.inheritance,s=n.slots,r=n.themeDefaultProps,i=n.classes,c=n.props,p=b()(t),l=[Q(p,"import")].concat((0,d.Z)(void 0===o?[]:o),[(0,Z.m)({t:$,componentName:p,componentProps:c,inheritance:a,themeDefaultProps:r,hash:"".concat(p,"-props")}),(null==s?void 0:s.length)>0&&Q(p,"slots")],(0,d.Z)((0,D.A)({t:$,componentName:p,componentClasses:i,hash:"".concat(p,"-classes")}))).filter(Boolean);ee.push({text:t,hash:p,children:l})});for(var eo=c.startsWith("/joy-ui/"),en=eo?C.lL:v.Fragment,et=eo?I.BrandingProvider:v.Fragment,ea=(0,l.Z)({},eo&&{mode:n.palette.mode}),es=[],er=0,ei=!1;er<G.rendered.length&&!ei;){var ec=G.rendered[er];ec.component&&ec.component.indexOf("Tabs")>=0&&(ei=!0),es.push((0,_.jsx)(E.Z,{activeTab:r,demoComponents:T,demos:k,disableAd:f,localizedDoc:G,renderedMarkdownOrDemo:ec,srcComponents:M,theme:n,WrapperComponent:et,wrapperProps:ea},"common-elements-".concat(er))),er+=1}var ep=X;"hooks-api"===r&&(ep=J),"components-api"===r&&(ep=ee);var el=G.rendered.some(function(e){return"object"==typeof e&&!!e.component&&"modules/components/ComponentPageTabs.js"===e.component});return(0,_.jsx)(B.Z,{cardOptions:{description:G.headers.cardDescription,title:G.headers.cardTitle},description:G.description,disableAd:f,disableToc:void 0!==g&&g,location:G.location,title:G.title,toc:ep,disableLayout:!0,hasTabs:el,children:(0,_.jsxs)("div",{style:{"--MuiDocs-header-height":el?"".concat(R.Hx+W.H,"px"):"".concat(R.Hx,"px")},children:[f?null:(0,_.jsx)(I.BrandingProvider,{children:(0,_.jsx)(q.Z,{classSelector:el?".component-tabs":void 0,children:p||(p=(0,_.jsx)(z.ZP,{}))})}),(0,_.jsxs)(en,{children:[eo&&(0,_.jsx)(F,{mode:n.palette.mode}),es,""===r&&G.rendered.slice(er).map(function(e,o){return(0,_.jsx)(E.Z,{activeTab:r,demoComponents:T,demos:k,disableAd:f,localizedDoc:G,renderedMarkdownOrDemo:e,srcComponents:M,theme:n,WrapperComponent:et,wrapperProps:ea},"demos-section-".concat(o))}),"components-api"===r&&(0,_.jsx)(L,{descriptions:P,pageContents:S}),"hooks-api"===r&&(0,_.jsx)(A,{descriptions:N,pagesContents:K})]})]})})}F.propTypes={mode:g().oneOf(["light","dark"])}},70187:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/base-ui/react-drawer",function(){return n(740201)}])},884835:function(e,o,n){"use strict";var t=n(311596);function a(){}function s(){}s.resetWarningCache=a,e.exports=function(){function e(e,o,n,a,s,r){if(r!==t){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function o(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:o,element:e,elementType:e,instanceOf:o,node:e,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:s,resetWarningCache:a};return n.PropTypes=n,n}},639519:function(e,o,n){e.exports=n(884835)()},311596:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[49774,9535,73976,97146,59727,85925,17376,41373,15686,34800,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,42378,20759,16067,40332,97683,12589,92888,40179],function(){return e(e.s=70187)}),_N_E=e.O()}]);