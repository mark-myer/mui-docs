(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18567],{502501:function(e,a,t){"use strict";t.d(a,{Z:function(){return w}});var n=t(577903),o=t(863363),i=t(778521),r=t(470079),s=t(653048),c=t(306029),l=t(360731),p=t(502894),u=t(632820),d=t(735250),h=(0,u.Z)((0,d.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),m=t(738633),g=t(639560),v=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],f=(0,l.Uu)("MuiAvatar"),b=function(e){var a=e.classes,t=e.variant,n=e.colorDefault;return(0,c.Z)({root:["root",t,n&&"colorDefault"],img:["img"],fallback:["fallback"]},m.$,a)},y=(0,p.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[a.root,a[t.variant],t.colorDefault&&a.colorDefault]}})(function(e){var a=e.theme;return{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(a.vars||a).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:(0,i.Z)({color:(a.vars||a).palette.background.default},a.vars?{backgroundColor:a.vars.palette.Avatar.defaultBg}:(0,i.Z)({backgroundColor:a.palette.grey[400]},a.applyStyles("dark",{backgroundColor:a.palette.grey[600]})))}]}}),k=(0,p.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,a){return a.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),x=(0,p.ZP)(h,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,a){return a.fallback}})({width:"75%",height:"75%"}),w=r.forwardRef(function(e,a){var t,c,l,p,u,h,m,w,C,Z=f({props:e,name:"MuiAvatar"}),j=Z.alt,D=Z.children,M=Z.className,P=Z.component,z=void 0===P?"div":P,A=Z.slots,F=Z.slotProps,T=Z.imgProps,S=Z.sizes,H=Z.src,I=Z.srcSet,B=Z.variant,R=(0,n.Z)(Z,v),_=null,U=(c=(t=(0,i.Z)((0,i.Z)({},T),{},{src:H,srcSet:I})).crossOrigin,l=t.referrerPolicy,p=t.src,u=t.srcSet,h=r.useState(!1),w=(m=(0,o.Z)(h,2))[0],C=m[1],r.useEffect(function(){if(p||u){C(!1);var e=!0,a=new Image;return a.onload=function(){e&&C("loaded")},a.onerror=function(){e&&C("error")},a.crossOrigin=c,a.referrerPolicy=l,a.src=p,u&&(a.srcset=u),function(){e=!1}}},[c,l,p,u]),w),V=H||I,L=V&&"error"!==U,N=(0,i.Z)((0,i.Z)({},Z),{},{colorDefault:!L,component:z,variant:void 0===B?"circular":B});delete N.ownerState;var W=b(N),X=(0,g.Z)("img",{className:W.img,elementType:k,externalForwardedProps:{slots:void 0===A?{}:A,slotProps:{img:(0,i.Z)((0,i.Z)({},T),(void 0===F?{}:F).img)}},additionalProps:{alt:j,src:H,srcSet:I,sizes:S},ownerState:N}),q=(0,o.Z)(X,2),G=q[0],O=q[1];return _=L?(0,d.jsx)(G,(0,i.Z)({},O)):D||0===D?D:V&&j?j[0]:(0,d.jsx)(x,{ownerState:N,className:W.fallback}),(0,d.jsx)(y,(0,i.Z)((0,i.Z)({as:z,className:(0,s.default)(W.root,M),ref:a},R),{},{ownerState:N,children:_}))})},738633:function(e,a,t){"use strict";t.d(a,{$:function(){return i}});var n=t(344443),o=t(92358);function i(e){return(0,o.ZP)("MuiAvatar",e)}var r=(0,n.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);a.Z=r},623895:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return s}}),t(470079);var n,o=t(123873),i={en:{description:"Support for time zones, Charts in alpha, Data Grid filtering, and more.",location:"/docs/pages/blog/mui-x-mid-v6-features.md",rendered:['<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="error-icon" viewBox="0 0 20 20">\n      <path fill-rule="evenodd" d="M2 7.4v5.2a2 2 0 0 0 .586 1.414l3.4 3.4A2 2 0 0 0 7.4 18h5.2a2 2 0 0 0 1.414-.586l3.4-3.4A2 2 0 0 0 18 12.6V7.4a2 2 0 0 0-.586-1.414l-3.4-3.4A2 2 0 0 0 12.6 2H7.4a2 2 0 0 0-1.414.586l-3.4 3.4A2 2 0 0 0 2 7.4Zm11.03-.43a.75.75 0 0 1 0 1.06L11.06 10l1.97 1.97a.75.75 0 1 1-1.06 1.06L10 11.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L8.94 10 6.97 8.03a.75.75 0 0 1 1.06-1.06L10 8.94l1.97-1.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="warning-icon" viewBox="0 0 20 20">\n      <path d="M2.33 17a.735.735 0 0 1-.665-.375.631.631 0 0 1-.094-.375.898.898 0 0 1 .115-.396L9.353 3.062a.621.621 0 0 1 .281-.27.85.85 0 0 1 .729 0 .622.622 0 0 1 .281.27l7.667 12.792c.07.125.108.257.114.396a.63.63 0 0 1-.093.375.842.842 0 0 1-.271.27.728.728 0 0 1-.394.105H2.33Zm7.664-2.5c.211 0 .39-.072.536-.214a.714.714 0 0 0 .218-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.531-.22.736.736 0 0 0-.536.215.714.714 0 0 0-.219.531c0 .212.072.39.215.536.143.146.32.219.531.219Zm0-2.5c.211 0 .39-.072.536-.216a.72.72 0 0 0 .218-.534v-2.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.531-.216.734.734 0 0 0-.536.216.72.72 0 0 0-.219.534v2.5c0 .212.072.39.215.534a.72.72 0 0 0 .531.216Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="success-icon" viewBox="0 0 20 20">\n      <path d="m8.938 10.875-1.25-1.23a.718.718 0 0 0-.521-.228.718.718 0 0 0-.521.229.73.73 0 0 0 0 1.062l1.77 1.771c.153.153.327.23.521.23a.718.718 0 0 0 .521-.23l3.896-3.896a.73.73 0 0 0 0-1.062.718.718 0 0 0-.52-.23.718.718 0 0 0-.521.23l-3.376 3.354ZM10 18a7.796 7.796 0 0 1-3.104-.625 8.065 8.065 0 0 1-2.552-1.719 8.064 8.064 0 0 1-1.719-2.552A7.797 7.797 0 0 1 2 10c0-1.111.208-2.15.625-3.115a8.064 8.064 0 0 1 4.27-4.26A7.797 7.797 0 0 1 10 2c1.111 0 2.15.208 3.115.625a8.096 8.096 0 0 1 4.26 4.26C17.792 7.851 18 8.89 18 10a7.797 7.797 0 0 1-.625 3.104 8.066 8.066 0 0 1-4.26 4.271A7.774 7.774 0 0 1 10 18Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="info-icon" viewBox="0 0 20 20">\n      <path d="M9.996 14c.21 0 .39-.072.535-.216a.72.72 0 0 0 .219-.534v-3.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.532-.216.734.734 0 0 0-.535.216.72.72 0 0 0-.219.534v3.5c0 .213.071.39.214.534a.72.72 0 0 0 .532.216Zm0-6.5c.21 0 .39-.071.535-.214a.714.714 0 0 0 .219-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.532-.219.736.736 0 0 0-.535.214.714.714 0 0 0-.219.532c0 .21.071.39.214.535.143.146.32.219.532.219Zm.01 10.5a7.81 7.81 0 0 1-3.11-.625 8.065 8.065 0 0 1-2.552-1.719 8.066 8.066 0 0 1-1.719-2.551A7.818 7.818 0 0 1 2 9.99c0-1.104.208-2.14.625-3.105a8.066 8.066 0 0 1 4.27-4.26A7.818 7.818 0 0 1 10.009 2a7.75 7.75 0 0 1 3.106.625 8.083 8.083 0 0 1 4.26 4.265A7.77 7.77 0 0 1 18 9.994a7.81 7.81 0 0 1-.625 3.11 8.066 8.066 0 0 1-1.719 2.552 8.083 8.083 0 0 1-2.546 1.719 7.77 7.77 0 0 1-3.104.625Z"/>\n      </symbol>\n      </svg>','\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n        <symbol id="anchor-link-icon" viewBox="0 0 12 6">\n          <path d="M8.9176 0.083252H7.1676C6.84677 0.083252 6.58427 0.345752 6.58427 0.666585C6.58427 0.987419 6.84677 1.24992 7.1676 1.24992H8.9176C9.8801 1.24992 10.6676 2.03742 10.6676 2.99992C10.6676 3.96242 9.8801 4.74992 8.9176 4.74992H7.1676C6.84677 4.74992 6.58427 5.01242 6.58427 5.33325C6.58427 5.65409 6.84677 5.91659 7.1676 5.91659H8.9176C10.5276 5.91659 11.8343 4.60992 11.8343 2.99992C11.8343 1.38992 10.5276 0.083252 8.9176 0.083252ZM3.6676 2.99992C3.6676 3.32075 3.9301 3.58325 4.25094 3.58325H7.75094C8.07177 3.58325 8.33427 3.32075 8.33427 2.99992C8.33427 2.67909 8.07177 2.41659 7.75094 2.41659H4.25094C3.9301 2.41659 3.6676 2.67909 3.6676 2.99992ZM4.83427 4.74992H3.08427C2.12177 4.74992 1.33427 3.96242 1.33427 2.99992C1.33427 2.03742 2.12177 1.24992 3.08427 1.24992H4.83427C5.1551 1.24992 5.4176 0.987419 5.4176 0.666585C5.4176 0.345752 5.1551 0.083252 4.83427 0.083252H3.08427C1.47427 0.083252 0.167603 1.38992 0.167603 2.99992C0.167603 4.60992 1.47427 5.91659 3.08427 5.91659H4.83427C5.1551 5.91659 5.4176 5.65409 5.4176 5.33325C5.4176 5.01242 5.1551 4.74992 4.83427 4.74992Z" />\n        </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n      <path d="M22.8481 4C22.8481 2.9 21.9481 2 20.8481 2H4.84814C3.74814 2 2.84814 2.9 2.84814 4V16C2.84814 17.1 3.74814 18 4.84814 18H18.8481L22.8481 22V4ZM16.8481 11H13.8481V14C13.8481 14.55 13.3981 15 12.8481 15C12.2981 15 11.8481 14.55 11.8481 14V11H8.84814C8.29814 11 7.84814 10.55 7.84814 10C7.84814 9.45 8.29814 9 8.84814 9H11.8481V6C11.8481 5.45 12.2981 5 12.8481 5C13.3981 5 13.8481 5.45 13.8481 6V9H16.8481C17.3981 9 17.8481 9.45 17.8481 10C17.8481 10.55 17.3981 11 16.8481 11Z" />\n      </symbol>\n      </svg>','<a href="https://github.com/mui/mui-x/releases/tag/v6.11.0">\n  <img src="/static/blog/mui-x-mid-v6-features/intro.png" alt="open release page" width="1384" height="346" style="margin-bottom: 16px;" />\n</a>\n\n<p>Since the first v6 stable release, we&#39;ve continuously rolled out new major features.\nNow that we&#39;ve reached <a href="https://github.com/mui/mui-x/releases/tag/v6.11.0">MUI\xa0X v6.11.0</a>, it&#39;s time to delve into the most recent additions to MUI\xa0X v6, and why you should get the latest version now.</p>\n<h2 id="table-of-contents"><a href="#table-of-contents" class="title-link-to-anchor">Table of contents<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="table-of-contents"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><ul>\n<li><a href="#date-pickers">Date Pickers</a><ul>\n<li><a href="#support-for-time-zones">Support for time zones</a></li>\n<li><a href="#digital-clock">Digital clock</a></li>\n</ul>\n</li>\n<li><a href="#data-grid">Data Grid</a><ul>\n<li><a href="#filter-on-column-headers">Filter on column headers</a> <a href="/x/introduction/licensing/#pro-plan" title="Pro plan"><span class="plan-pro"></span></a></li>\n<li><a href="#copy-and-paste">Copy and paste</a> <a href="/x/introduction/licensing/#premium-plan" title="premium plan"><span class="plan-premium"></span></a></li>\n</ul>\n</li>\n<li><a href="#charts-alpha-version">Charts - alpha version</a></li>\n<li><a href="#tree-view-is-moving-to-mui-x">Tree View is moving to MUI\xa0X</a></li>\n<li><a href="#feedback">Feedback</a></li>\n</ul>\n<h2 id="date-pickers"><a href="#date-pickers" class="title-link-to-anchor">Date Pickers<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="date-pickers"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><h3 id="support-for-time-zones"><a href="#support-for-time-zones" class="title-link-to-anchor">Support for time zones<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="support-for-time-zones"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>No more hassle displaying dates in the time zones of your choice. \uD83C\uDF0E</p>\n<p>You can effortlessly display and select dates and times in different time zones, without worrying about conversion logic or maintaining consistency with your backend.</p>\n<video preload="metadata" style="margin-bottom: 16px;" autoplay muted loop>\n  <source src="/static/blog/mui-x-mid-v6-features/timezone.mp4" type="video/mp4">\n</video>\n\n<p>Set the <code>timezone</code> prop to define which time zone the Date, Time, or DateTime should be displayed in.</p>\n<div class="MuiCode-root"><pre><code class="language-tsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TimePicker</span></span>\n  <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>\n  <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setValue<span class="token punctuation">}</span></span>\n  <span class="token attr-name">timezone</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Pacific/Honolulu<span class="token punctuation">"</span></span> <span class="token comment">// Can be in any timezone of your choice</span>\n  <span class="token attr-name">label</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'Rendered in "Pacific/Honolulu"\'</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<p>Check the <a href="https://mui.com/x/react-date-pickers/timezone/">full instructions</a> for more information on using this feature in your application.</p>\n<h3 id="digital-clock"><a href="#digital-clock" class="title-link-to-anchor">Digital clock<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="digital-clock"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>The digital clock is an alternative to the Time Pickers&#39; <a href="https://mui.com/x/react-date-pickers/time-clock/">analog clock</a>.\nThe original proposal was mainly focused on mobile devices, whereas the new interface is designed for a desktop experience for better time precision.\nThis new addition makes our Date Pickers even more versatile and user-friendly than before.\nIt&#39;s available as the default variant for desktops on both the <a href="https://mui.com/x/react-date-pickers/time-picker/">Time Picker</a> and the <a href="https://mui.com/x/react-date-pickers/date-time-picker/">Date Time Picker</a>.</p>\n<video preload="metadata" style="margin-bottom: 16px;" autoplay muted loop>\n  <source src="/static/blog/mui-x-mid-v6-features/digital_clock.mov" type="video/mp4">\n</video>\n\n<p>Check out all the possibilities in the <a href="https://mui.com/x/react-date-pickers/digital-clock/">Date Pickers—Digital clock documentation</a>, and let us know your thoughts!</p>\n<h2 id="data-grid"><a href="#data-grid" class="title-link-to-anchor">Data Grid<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="data-grid"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><h3 id="filter-on-column-headers"><a href="#filter-on-column-headers" class="title-link-to-anchor">Filter on column headers <a href="/x/introduction/licensing/#pro-plan" title="Pro plan"><span class="plan-pro"></span></a><span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="filter-on-column-headers"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>Filtering on column headers gives users the ability to quickly filter data without any additional menu.\nUse the the <code>unstable_headerFilters</code> prop to activate this feature.</p>\n<p>The new filter fields are displayed below the headers, and are synchronized with the filter panel.\nIf you prefer more simplicity, you can disable the default filter panel using the <code>disableColumnFilter</code> prop, and set filters to use only the default operator.</p>\n<video preload="metadata" style="margin-bottom: 16px;" autoplay muted loop playsinline>\n  <source src="/static/blog/mui-x-mid-v6-features/header_filter.mp4" type="video/mp4">\n</video>\n\n<p>For more details on how to use and customize the filters, check out its <a href="https://mui.com/x/react-data-grid/filtering/header-filters/">documentation page</a>.</p>\n<h3 id="copy-and-paste"><a href="#copy-and-paste" class="title-link-to-anchor">Copy and paste <a href="/x/introduction/licensing/#premium-plan" title="premium plan"><span class="plan-premium"></span></a><span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="copy-and-paste"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>After setting the <code>experimentalFeatures={{ clipboardPaste: true }}</code> prop, you can copy and paste data directly to and from your Data Grid.</p>\n<p>This new feature is extremely versatile, and you can exchange data from other fields, other grids, and even directly to and from the spreadsheet tool of your choice.</p>\n<video preload="metadata" style="margin-bottom: 16px;" autoplay muted loop playsinline>\n  <source src="/static/blog/mui-x-mid-v6-features/copy_paste.mov" type="video/mp4">\n</video>\n\n<p>This feature is integrated with the editing API, so pasted data can be persisted using the <code>processRowUpdate</code> prop to update your data source through your usual editing validation process.\nThe callbacks <code>clipboardPasteStart</code> and <code>clipboardPasteEnd</code> are fired during the clipboard paste operation, which can be useful for extra customizations around the event.</p>\n<p>For more details on how to use clipboard copy and paste, check out the <a href="https://mui.com/x/react-data-grid/clipboard/">Data Grid—Clipboard documentation</a>.</p>\n<h2 id="charts-alpha-version"><a href="#charts-alpha-version" class="title-link-to-anchor">Charts - alpha version<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="charts-alpha-version"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>We are delighted to announce the upcoming expansion of MUI\xa0X: a brand-new suite of components for building and customizing charts.</p>\n<p>With MUI\xa0X Charts, you can choose from a wide range of chart types, including line charts, bar charts, pie charts, area charts, scatter plots, and more.\nEach chart type is thoughtfully crafted with attention to detail, ensuring that the visual representations are not only aesthetically pleasing, but also highly effective in conveying complex data.</p>\n<p>And it ships with gorgeous palettes that were specially crafted by our designers!</p>\n<p>Check out the video below, highlighting some of our Charts:</p>\n<video preload="metadata" style="margin-bottom: 16px;" autoplay muted loop playsinline>\n  <source src="/static/blog/mui-x-mid-v6-features/charts_final_v1.mov" type="video/mp4">\n</video>\n\n<p>As we progress toward the stable version, we&#39;re committed to enhancing the overall experience for developers and users, so your feedback is fundamental!</p>\n<p>We will also steadily expand our portfolio with new chart types such as <a href="https://mui.com/x/react-charts/heat-map/">Heatmap</a>, <a href="https://mui.com/x/react-charts/funnel/">Funnel</a>, <a href="https://mui.com/x/react-charts/gantt/">Gantt</a>, and more.\nIf there&#39;s a specific chart visualization you&#39;d like us to prioritize, we encourage you to upvote the respective <a href="https://github.com/mui/mui-x/issues?q=is%3Aissue+is%3Aopen+label%3A%22component%3A+charts%22+label%3A%22waiting+for+%F0%9F%91%8D%22">issue on GitHub</a>.\nYour input can directly influence our development schedule, so don&#39;t hesitate to let us know what matters most to you!</p>\n<p><a href="https://mui.com/x/react-charts/">Get started with charts now!</a></p>\n<h2 id="tree-view-is-moving-to-mui-x"><a href="#tree-view-is-moving-to-mui-x" class="title-link-to-anchor">Tree View is moving to MUI\xa0X<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="tree-view-is-moving-to-mui-x"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>Tree View is being migrated from the <a href="https://mui.com/material-ui/about-the-lab/">lab</a> to MUI\xa0X, it will soon have a first Alpha release!</p>\n<p>The Tree View is a component that represents hierarchical in a tree-like format.\nThink of a file system navigator displaying folders and files or a navigation list.</p>\n<video preload="metadata" style="margin-bottom: 16px;" autoplay muted loop playsinline>\n  <source src="/static/blog/mui-x-mid-v6-features/treeview.mov" type="video/mp4">\n</video>\n\n<p>Keep on the look out on our next blog for the Tree View migration.</p>\n<p>We decided to migrate this component to MUI\xa0X as there are still many features that would be great to build (for example checkbox, drag &amp; drop, virtualization) and it&#39;s usually not a significant component of a design system.\nHead to <a href="https://mui-org.notion.site/X-FAQ-c33e9a7eabba4da1ad7f8c04f99044cc">MUI\xa0Core vs. MUI\xa0X</a> if you would like to learn more about this decision.</p>\n<h2 id="feedback"><a href="#feedback" class="title-link-to-anchor">Feedback<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="feedback"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>We are always happy to get feedback, so if you&#39;d like to share your pain points and use cases, please leave your contact info with us through <a href="https://forms.gle/vsBv6CLPz9h57xg8A">this Google Form</a>.\nAs usual, you&#39;re welcome to request new features, report bugs and join the discussion in MUI\xa0X <a href="https://github.com/mui/mui-x/issues">GitHub repository</a>.\nIf you haven&#39;t yet, join our growing community in the recently launched <a href="https://mui.com/r/discord/">MUI Discord server</a>.</p>\n<p>Cheers!</p>\n'],toc:[{text:"Table of contents",level:2,hash:"table-of-contents",children:[]},{text:"Date Pickers",level:2,hash:"date-pickers",children:[{text:"Support for time zones",level:3,hash:"support-for-time-zones"},{text:"Digital clock",level:3,hash:"digital-clock"}]},{text:"Data Grid",level:2,hash:"data-grid",children:[{text:'Filter on column headers <span class="plan-pro"></span>',level:3,hash:"filter-on-column-headers"},{text:'Copy and paste <span class="plan-premium"></span>',level:3,hash:"copy-and-paste"}]},{text:"Charts - alpha version",level:2,hash:"charts-alpha-version",children:[]},{text:"Tree View is moving to MUI\xa0X",level:2,hash:"tree-view-is-moving-to-mui-x",children:[]},{text:"Feedback",level:2,hash:"feedback",children:[]}],title:"MUI\xa0X v6.11.0. A roundup of all new features",headers:{title:"MUI\xa0X v6.11.0. A roundup of all new features",description:"Support for time zones, Charts in alpha, Data Grid filtering, and more.",date:"2023-08-14T00:00:00.000Z",authors:["richbustos","josefreitas"],manualCard:"true",tags:["MUI X","Product"],components:[],hooks:[]}}},r=t(735250);function s(){return n||(n=(0,r.jsx)(o.Z,{docs:i}))}},772568:function(e,a,t){"use strict";t.d(a,{Z:function(){return g}});var n,o,i=t(778521),r=t(915033),s=t.n(r),c=t(253405),l=t(859861),p=t(621234),u=t(170027),d=t(735250);function h(){return(0,d.jsx)(l.Z,{sx:{height:{xs:520,sm:278,md:269}}})}var m=s()(function(){return t.e(43825).then(t.bind(t,543825))},{loading:h,loadableGenerated:{webpack:function(){return[543825]}}});function g(){var e=(0,c.YD)({triggerOnce:!0,threshold:0,rootMargin:"500px"}),a=e.ref,t=e.inView;return(0,d.jsx)(l.Z,{ref:a,sx:function(e){return(0,i.Z)({background:"linear-gradient(180deg, #FFF 50%, \n          ".concat((e.vars||e).palette.primary[50]," 100%)\n        ")},e.applyDarkStyles({background:"linear-gradient(180deg, ".concat((e.vars||e).palette.primaryDark[900]," 50%,\n          ").concat((0,p.Fq)(e.palette.primary[900],.2)," 100%)\n          ")}))},children:(0,d.jsx)(u.Z,{bg:"transparent",cozy:!0,children:t?n||(n=(0,d.jsx)(m,{})):o||(o=(0,d.jsx)(h,{}))})})}},170027:function(e,a,t){"use strict";var n=t(778521),o=t(614030),i=t(577903),r=t(408011),s=t.n(r),c=t(470079),l=t(258350),p=t(859861),u=t(621234),d=t(735250),h=["bg","children","sx","cozy","noPaddingBottom"],m={white:{light:"common.white",dark:"primaryDark.900"},comfort:{light:"grey.50",dark:"primaryDark.900"},dim:{light:"primaryDark.700",dark:"primaryDark.700"},transparent:{light:"transparent",dark:"transparent"}},g=c.forwardRef(function(e,a){var t=e.bg,r=void 0===t?"white":t,c=e.children,g=e.sx,v=e.cozy,f=void 0!==v&&v,b=e.noPaddingBottom,y=void 0!==b&&b,k=(0,i.Z)(e,h);return(0,d.jsx)(p.Z,(0,n.Z)((0,n.Z)({ref:a},k),{},{sx:[function(e){return(0,n.Z)((0,n.Z)({},"gradient"===r?(0,n.Z)({background:"linear-gradient(#FFF 0%, ".concat((e.vars||e).palette.primary[50]," 100%)")},e.applyDarkStyles({background:"linear-gradient(".concat((e.vars||e).palette.primaryDark[900]," 0%, ").concat((0,u.Fq)(e.palette.primary[900],.2)," 100%)")})):(0,n.Z)({bgcolor:m[r].light},e.applyDarkStyles({bgcolor:m[r].dark}))),{},{py:f?{xs:6,sm:10,md:12}:{xs:4,sm:12,md:14},pb:y?"0 !important":void 0,overflow:"hidden"})}].concat((0,o.Z)(s()(g)?g:[g])),children:(0,d.jsx)(l.Z,{children:c})}))});a.Z=g},123873:function(e,a,t){"use strict";t.d(a,{Z:function(){return R},o:function(){return S}});var n,o,i,r,s,c=t(778521),l=t(234046),p=t(796801),u=t.n(p),d=t(470079),h=t(502894),m=t(621234),g=t(302312),v=t(389136),f=t(331116),b=t(885950),y=t(781097),k=t(502501),x=t(248247),w=t(259106),C=t(95820),Z=t(39253),j=t(318304),D=t(772568),M=t(284384),P=t(597683),z=t(42141),A=t(905636),F=t(215129),T=t(735250),S={oliviertassinari:{name:"Olivier Tassinari",avatar:"https://avatars.githubusercontent.com/u/3165635",github:"oliviertassinari"},mbrookes:{name:"Matt Brookes",avatar:"https://avatars.githubusercontent.com/u/357702",github:"mbrookes"},eps1lon:{name:"Sebastian Silbermann",avatar:"https://avatars.githubusercontent.com/u/12292047",github:"eps1lon"},mnajdova:{name:"Marija Najdova",avatar:"https://avatars.githubusercontent.com/u/4512430",github:"mnajdova"},michaldudak:{name:"Michał Dudak",avatar:"https://avatars.githubusercontent.com/u/4696105",github:"michaldudak"},siriwatknp:{name:"Siriwat Kunaporn",avatar:"https://avatars.githubusercontent.com/u/18292247",github:"siriwatknp"},"danilo-leal":{name:"Danilo Leal",avatar:"https://avatars.githubusercontent.com/u/67129314",github:"danilo-leal"},m4theushw:{name:"Matheus Wichman",avatar:"https://avatars.githubusercontent.com/u/42154031",github:"m4theushw"},flaviendelangle:{name:"Flavien Delangle",avatar:"https://avatars.githubusercontent.com/u/3309670",github:"flaviendelangle"},DanailH:{name:"Danail Hadjiatanasov",avatar:"https://avatars.githubusercontent.com/u/5858539",github:"DanailH"},alexfauquette:{name:"Alexandre Fauquette",avatar:"https://avatars.githubusercontent.com/u/45398769",github:"alexfauquette"},samuelsycamore:{name:"Sam Sycamore",avatar:"https://avatars.githubusercontent.com/u/71297412",github:"samuelsycamore"},josefreitas:{name:"Jos\xe9 Freitas",avatar:"https://avatars.githubusercontent.com/u/550141",github:"joserodolfofreitas"},cherniavskii:{name:"Andrew Cherniavskyi",avatar:"https://avatars.githubusercontent.com/u/13808724",github:"cherniavskii"},mikailaread:{name:"Mikaila Read",avatar:"https://avatars.githubusercontent.com/u/76401606",github:"mikailaread"},prakhargupta:{name:"Prakhar Gupta",avatar:"https://avatars.githubusercontent.com/u/92228082",github:"prakhargupta1"},richbustos:{name:"Rich Bustos",avatar:"https://avatars.githubusercontent.com/u/92274722",github:"richbustos"},colmtuite:{name:"Colm Tuite",avatar:"https://avatars.githubusercontent.com/u/805073",github:"colmtuite"},diegoandai:{name:"Diego Andai",avatar:"https://avatars.githubusercontent.com/u/16889233",github:"DiegoAndai"},DavidCnoops:{name:"David Cnoops",avatar:"https://avatars.githubusercontent.com/u/28001064",github:"DavidCnoops"},brijeshb42:{name:"Brijesh Bittu",avatar:"https://avatars.githubusercontent.com/u/717550?",github:"brijeshb42"}},H={back:"TopLayoutBlog-back",time:"TopLayoutBlog-time",container:"TopLayoutBlog-container"},I=(0,h.ZP)("div")(function(e){var a=e.theme;return{display:"flex",flexWrap:"wrap",marginBottom:a.spacing(2),"& .author":{display:"flex",alignItems:"center",paddingBottom:a.spacing(2),paddingRight:a.spacing(3),"& .MuiAvatar-root":{marginRight:a.spacing(1)}}}}),B=(0,h.ZP)("div")(function(e){var a,t,n=e.theme;return t={flexGrow:1,background:"linear-gradient(180deg, ".concat((n.vars||n).palette.grey[50]," 0%, #FFFFFF 100%)"),backgroundSize:"100% 500px",backgroundRepeat:"no-repeat"},(0,l.Z)(t,"& .".concat(H.back),{display:"flex",alignItems:"center",marginBottom:n.spacing(2),marginLeft:n.spacing(-1)}),(0,l.Z)(t,"& .".concat(H.container),(a={paddingTop:80,marginBottom:n.spacing(12),maxWidth:"calc(".concat(692,"px + ").concat(n.spacing(4),")")},(0,l.Z)(a,n.breakpoints.up("md"),{maxWidth:"calc(".concat(692,"px + ").concat(n.spacing(6),")")}),(0,l.Z)(a,n.breakpoints.up("lg"),{maxWidth:"calc(".concat(692,"px + ").concat(n.spacing(16),")")}),(0,l.Z)(a,"& h1",{marginBottom:n.spacing(3)}),a)),(0,l.Z)(t,"& .markdown-body",{lineHeight:1.7,"& img, & video":{border:"1px solid",borderColor:(n.vars||n).palette.grey[200],borderRadius:12,display:"block",margin:"auto",marginBottom:16},"& figure":{margin:0,padding:0,marginBottom:16,"& img, & video":{marginBottom:8}},"& figcaption":{color:(n.vars||n).palette.text.tertiary,fontSize:n.typography.pxToRem(14),textAlign:"center"},"& strong":{color:(n.vars||n).palette.grey[900]},"& summary":{padding:8,fontSize:n.typography.pxToRem(14),fontWeight:n.typography.fontWeightMedium,color:(n.vars||n).palette.grey[900]},"& details":{paddingLeft:16,paddingRight:16,background:(0,m.Fq)(n.palette.grey[50],.5),border:"1px solid",borderRadius:10,borderColor:(n.vars||n).palette.grey[200],transitionProperty:"all",transitionTiming:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"200ms","&:hover, &:focus-visible":{background:(n.vars||n).palette.grey[50],borderColor:(n.vars||n).palette.grey[300]}},"& th":{width:"100%",textAlign:"left",borderBottom:"3px solid rgba(62, 80, 96, 0.2) !important"},"& .blog-description":{fontSize:n.typography.pxToRem(13),marginTop:8,textAlign:"center",color:(n.vars||n).palette.grey[700],"& a":{color:"inherit",textDecoration:"underline"}},"& .MuiCode-root + .blog-description":{marginTop:-12}}),(0,l.Z)(t,"& .".concat(H.time),(0,c.Z)((0,c.Z)({color:(n.vars||n).palette.text.secondary},n.typography.caption),{},{fontWeight:500})),t},function(e){var a=e.theme;return a.applyDarkStyles({background:"linear-gradient(180deg, ".concat((0,m.Fq)(a.palette.primary[900],.2)," 0%, ").concat((a.vars||a).palette.primaryDark[900]," 100%)"),backgroundSize:"100% 1000px",backgroundRepeat:"no-repeat","& .markdown-body":{"& strong":{color:(a.vars||a).palette.grey[100]},"& summary":{color:(a.vars||a).palette.grey[300]},"& img, & video":{borderColor:(0,m.Fq)(a.palette.primaryDark[600],.5)},"& details":{background:(0,m.Fq)(a.palette.primary[900],.3),borderColor:(a.vars||a).palette.primaryDark[700],"&:hover, &:focus-visible":{background:(0,m.Fq)(a.palette.primary[900],.4),borderColor:(a.vars||a).palette.primaryDark[500]}},"& .blog-description":{color:(a.vars||a).palette.grey[500]}}})});function R(e){var a=(0,g.Z)(),t=e.className,l=e.docs,p=e.demos,h=e.demoComponents,m=e.srcComponents,R=l.en,_=R.description,U=R.rendered,V=R.title,L=R.headers,N=V||L.title,W=(0,v.useRouter)(),X=W.pathname.replace(/(.*)\/(.*)/,"$2"),q=(0,z.ln)(W.asPath).canonicalAsServer,G="true"===L.manualCard?"/static/blog/".concat(X,"/card.png"):"/edge-functions/og-image/?title=".concat(L.cardTitle||N,"&authors=").concat(L.authors.map(function(e){var a=S[e],t=a.github,n=a.name;return"".concat(n," @").concat(t)}).join(","),"&product=Blog");return(0,T.jsxs)(w.Z,{children:[n||(n=(0,T.jsx)(C.Z,{})),(0,T.jsxs)(x.Z,{title:"".concat(N," - MUI"),description:_,largeCard:!0,disableAlternateLocale:!0,card:G,type:"article",children:[(0,T.jsx)("meta",{name:"author",content:L.authors.map(function(e){return S[e].name}).join(", ")}),(0,T.jsx)("meta",{property:"article:published_time",content:L.date}),(0,T.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:u()({"@context":"https://schema.org","@type":"Article",publisher:{"@type":"Organization",name:"MUI blog",url:"https://mui.com/blog/",logo:{"@type":"ImageObject",url:"https://mui.com/static/icons/512x512.png"}},author:{"@type":"Person",name:S[L.authors[0]].name,image:{"@type":"ImageObject",url:"".concat(S[L.authors[0]].avatar,"?s=",250),width:250,height:250},sameAs:["https://github.com/".concat(S[L.authors[0]].github)]},headline:N,url:"https://mui.com".concat(q),datePublished:L.date,dateModified:L.date,image:{"@type":"ImageObject",url:G,width:1280,height:640},keywords:L.tags.join(", "),description:_,mainEntityOfPage:{"@type":"WebPage","@id":"https://mui.com/blog/"}})}})]}),(0,T.jsxs)(B,{className:t,children:[(0,T.jsxs)(Z.Z,{component:"main",className:H.container,children:[(0,T.jsxs)(F.r,(0,c.Z)((0,c.Z)({href:A.Z.blog},A.Z.blog.startsWith("http")&&{rel:"nofollow"}),{},{color:"primary",variant:"body2",className:H.back,children:[(0,T.jsx)(f.default,{fontSize:"small",sx:{mr:.5}}),"Back to blog"]})),L.title?(0,T.jsxs)(d.Fragment,{children:[(0,T.jsx)("time",{dateTime:L.date,className:H.time,children:new Intl.DateTimeFormat("en",{weekday:"long",year:"numeric",month:"short",day:"numeric"}).format(new Date(L.date))}),(0,T.jsx)(M.Z,{children:(0,T.jsx)("h1",{children:L.title})}),(0,T.jsx)(I,{children:L.authors.map(function(e){return(0,T.jsxs)("div",{className:"author",children:[(0,T.jsx)(k.Z,{sx:{width:36,height:36},alt:"",src:"".concat(S[e].avatar,"?s=",36),srcSet:"".concat(S[e].avatar,"?s=").concat(72," 2x, ").concat(S[e].avatar,"?s=").concat(108," 3x")}),(0,T.jsxs)("div",{children:[(0,T.jsx)(y.Z,{variant:"body2",fontWeight:"500",children:S[e].name}),(0,T.jsxs)(F.r,{href:"https://github.com/".concat(S[e].github),target:"_blank",rel:"noopener",color:"primary",variant:"body2",sx:{fontWeight:500},children:["@",S[e].github]})]})]},e)})})]}):null,U.map(function(e,t){return(0,T.jsx)(P.Z,{demos:p,demoComponents:h,srcComponents:m,renderedMarkdown:e,disableAd:!0,localizedDoc:l.en,renderedMarkdownOrDemo:e,theme:a,WrapperComponent:d.Fragment},t)})]}),o||(o=(0,T.jsx)(b.Z,{})),i||(i=(0,T.jsx)(D.Z,{})),r||(r=(0,T.jsx)(b.Z,{})),s||(s=(0,T.jsx)(j.Z,{}))]})]})}},663877:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/mui-x-mid-v6-features",function(){return t(623895)}])},331116:function(e,a,t){"use strict";var n=t(11234);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=n(t(122268)),i=t(735250);a.default=(0,o.default)((0,i.jsx)("path",{d:"M14.71 6.71a.996.996 0 0 0-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41"}),"ChevronLeftRounded")}},function(e){e.O(0,[49774,9535,73976,97146,59727,85925,17376,41373,15686,34800,22842,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,16067,40332,97683,83030,92888,40179],function(){return e(e.s=663877)}),_N_E=e.O()}]);