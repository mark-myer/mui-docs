(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43e3],{502501:function(t,e,a){"use strict";a.d(e,{Z:function(){return w}});var n=a(577903),o=a(863363),r=a(778521),i=a(470079),s=a(653048),c=a(306029),l=a(360731),u=a(502894),d=a(632820),m=a(735250),h=(0,d.Z)((0,m.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),p=a(738633),g=a(639560),v=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],y=(0,l.Uu)("MuiAvatar"),b=function(t){var e=t.classes,a=t.variant,n=t.colorDefault;return(0,c.Z)({root:["root",a,n&&"colorDefault"],img:["img"],fallback:["fallback"]},p.$,e)},f=(0,u.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(t,e){var a=t.ownerState;return[e.root,e[a.variant],a.colorDefault&&e.colorDefault]}})(function(t){var e=t.theme;return{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:(0,r.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:(0,r.Z)({backgroundColor:e.palette.grey[400]},e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})))}]}}),x=(0,u.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(t,e){return e.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),k=(0,u.ZP)(h,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(t,e){return e.fallback}})({width:"75%",height:"75%"}),w=i.forwardRef(function(t,e){var a,c,l,u,d,h,p,w,Z,C=y({props:t,name:"MuiAvatar"}),j=C.alt,M=C.children,D=C.className,S=C.component,F=void 0===S?"div":S,z=C.slots,A=C.slotProps,P=C.imgProps,B=C.sizes,I=C.src,T=C.srcSet,H=C.variant,R=(0,n.Z)(C,v),L=null,U=(c=(a=(0,r.Z)((0,r.Z)({},P),{},{src:I,srcSet:T})).crossOrigin,l=a.referrerPolicy,u=a.src,d=a.srcSet,h=i.useState(!1),w=(p=(0,o.Z)(h,2))[0],Z=p[1],i.useEffect(function(){if(u||d){Z(!1);var t=!0,e=new Image;return e.onload=function(){t&&Z("loaded")},e.onerror=function(){t&&Z("error")},e.crossOrigin=c,e.referrerPolicy=l,e.src=u,d&&(e.srcset=d),function(){t=!1}}},[c,l,u,d]),w),q=I||T,_=q&&"error"!==U,N=(0,r.Z)((0,r.Z)({},C),{},{colorDefault:!_,component:F,variant:void 0===H?"circular":H});delete N.ownerState;var W=b(N),O=(0,g.Z)("img",{className:W.img,elementType:x,externalForwardedProps:{slots:void 0===z?{}:z,slotProps:{img:(0,r.Z)((0,r.Z)({},P),(void 0===A?{}:A).img)}},additionalProps:{alt:j,src:I,srcSet:T,sizes:B},ownerState:N}),V=(0,o.Z)(O,2),E=V[0],K=V[1];return L=_?(0,m.jsx)(E,(0,r.Z)({},K)):M||0===M?M:q&&j?j[0]:(0,m.jsx)(k,{ownerState:N,className:W.fallback}),(0,m.jsx)(f,(0,r.Z)((0,r.Z)({as:F,className:(0,s.default)(W.root,D),ref:e},R),{},{ownerState:N,children:L}))})},738633:function(t,e,a){"use strict";a.d(e,{$:function(){return r}});var n=a(344443),o=a(92358);function r(t){return(0,o.ZP)("MuiAvatar",t)}var i=(0,n.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);e.Z=i},59028:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return s}}),a(470079);var n,o=a(123873),r={en:{description:"Enable designers to generate production-ready code directly from the Material\xa0UI Figma Design Kit.",location:"/docs/pages/blog/introducing-sync-plugin.md",rendered:['<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="error-icon" viewBox="0 0 20 20">\n      <path fill-rule="evenodd" d="M2 7.4v5.2a2 2 0 0 0 .586 1.414l3.4 3.4A2 2 0 0 0 7.4 18h5.2a2 2 0 0 0 1.414-.586l3.4-3.4A2 2 0 0 0 18 12.6V7.4a2 2 0 0 0-.586-1.414l-3.4-3.4A2 2 0 0 0 12.6 2H7.4a2 2 0 0 0-1.414.586l-3.4 3.4A2 2 0 0 0 2 7.4Zm11.03-.43a.75.75 0 0 1 0 1.06L11.06 10l1.97 1.97a.75.75 0 1 1-1.06 1.06L10 11.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L8.94 10 6.97 8.03a.75.75 0 0 1 1.06-1.06L10 8.94l1.97-1.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="warning-icon" viewBox="0 0 20 20">\n      <path d="M2.33 17a.735.735 0 0 1-.665-.375.631.631 0 0 1-.094-.375.898.898 0 0 1 .115-.396L9.353 3.062a.621.621 0 0 1 .281-.27.85.85 0 0 1 .729 0 .622.622 0 0 1 .281.27l7.667 12.792c.07.125.108.257.114.396a.63.63 0 0 1-.093.375.842.842 0 0 1-.271.27.728.728 0 0 1-.394.105H2.33Zm7.664-2.5c.211 0 .39-.072.536-.214a.714.714 0 0 0 .218-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.531-.22.736.736 0 0 0-.536.215.714.714 0 0 0-.219.531c0 .212.072.39.215.536.143.146.32.219.531.219Zm0-2.5c.211 0 .39-.072.536-.216a.72.72 0 0 0 .218-.534v-2.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.531-.216.734.734 0 0 0-.536.216.72.72 0 0 0-.219.534v2.5c0 .212.072.39.215.534a.72.72 0 0 0 .531.216Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="success-icon" viewBox="0 0 20 20">\n      <path d="m8.938 10.875-1.25-1.23a.718.718 0 0 0-.521-.228.718.718 0 0 0-.521.229.73.73 0 0 0 0 1.062l1.77 1.771c.153.153.327.23.521.23a.718.718 0 0 0 .521-.23l3.896-3.896a.73.73 0 0 0 0-1.062.718.718 0 0 0-.52-.23.718.718 0 0 0-.521.23l-3.376 3.354ZM10 18a7.796 7.796 0 0 1-3.104-.625 8.065 8.065 0 0 1-2.552-1.719 8.064 8.064 0 0 1-1.719-2.552A7.797 7.797 0 0 1 2 10c0-1.111.208-2.15.625-3.115a8.064 8.064 0 0 1 4.27-4.26A7.797 7.797 0 0 1 10 2c1.111 0 2.15.208 3.115.625a8.096 8.096 0 0 1 4.26 4.26C17.792 7.851 18 8.89 18 10a7.797 7.797 0 0 1-.625 3.104 8.066 8.066 0 0 1-4.26 4.271A7.774 7.774 0 0 1 10 18Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="info-icon" viewBox="0 0 20 20">\n      <path d="M9.996 14c.21 0 .39-.072.535-.216a.72.72 0 0 0 .219-.534v-3.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.532-.216.734.734 0 0 0-.535.216.72.72 0 0 0-.219.534v3.5c0 .213.071.39.214.534a.72.72 0 0 0 .532.216Zm0-6.5c.21 0 .39-.071.535-.214a.714.714 0 0 0 .219-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.532-.219.736.736 0 0 0-.535.214.714.714 0 0 0-.219.532c0 .21.071.39.214.535.143.146.32.219.532.219Zm.01 10.5a7.81 7.81 0 0 1-3.11-.625 8.065 8.065 0 0 1-2.552-1.719 8.066 8.066 0 0 1-1.719-2.551A7.818 7.818 0 0 1 2 9.99c0-1.104.208-2.14.625-3.105a8.066 8.066 0 0 1 4.27-4.26A7.818 7.818 0 0 1 10.009 2a7.75 7.75 0 0 1 3.106.625 8.083 8.083 0 0 1 4.26 4.265A7.77 7.77 0 0 1 18 9.994a7.81 7.81 0 0 1-.625 3.11 8.066 8.066 0 0 1-1.719 2.552 8.083 8.083 0 0 1-2.546 1.719 7.77 7.77 0 0 1-3.104.625Z"/>\n      </symbol>\n      </svg>','\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n        <symbol id="anchor-link-icon" viewBox="0 0 12 6">\n          <path d="M8.9176 0.083252H7.1676C6.84677 0.083252 6.58427 0.345752 6.58427 0.666585C6.58427 0.987419 6.84677 1.24992 7.1676 1.24992H8.9176C9.8801 1.24992 10.6676 2.03742 10.6676 2.99992C10.6676 3.96242 9.8801 4.74992 8.9176 4.74992H7.1676C6.84677 4.74992 6.58427 5.01242 6.58427 5.33325C6.58427 5.65409 6.84677 5.91659 7.1676 5.91659H8.9176C10.5276 5.91659 11.8343 4.60992 11.8343 2.99992C11.8343 1.38992 10.5276 0.083252 8.9176 0.083252ZM3.6676 2.99992C3.6676 3.32075 3.9301 3.58325 4.25094 3.58325H7.75094C8.07177 3.58325 8.33427 3.32075 8.33427 2.99992C8.33427 2.67909 8.07177 2.41659 7.75094 2.41659H4.25094C3.9301 2.41659 3.6676 2.67909 3.6676 2.99992ZM4.83427 4.74992H3.08427C2.12177 4.74992 1.33427 3.96242 1.33427 2.99992C1.33427 2.03742 2.12177 1.24992 3.08427 1.24992H4.83427C5.1551 1.24992 5.4176 0.987419 5.4176 0.666585C5.4176 0.345752 5.1551 0.083252 4.83427 0.083252H3.08427C1.47427 0.083252 0.167603 1.38992 0.167603 2.99992C0.167603 4.60992 1.47427 5.91659 3.08427 5.91659H4.83427C5.1551 5.91659 5.4176 5.65409 5.4176 5.33325C5.4176 5.01242 5.1551 4.74992 4.83427 4.74992Z" />\n        </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n      <path d="M22.8481 4C22.8481 2.9 21.9481 2 20.8481 2H4.84814C3.74814 2 2.84814 2.9 2.84814 4V16C2.84814 17.1 3.74814 18 4.84814 18H18.8481L22.8481 22V4ZM16.8481 11H13.8481V14C13.8481 14.55 13.3981 15 12.8481 15C12.2981 15 11.8481 14.55 11.8481 14V11H8.84814C8.29814 11 7.84814 10.55 7.84814 10C7.84814 9.45 8.29814 9 8.84814 9H11.8481V6C11.8481 5.45 12.2981 5 12.8481 5C13.3981 5 13.8481 5.45 13.8481 6V9H16.8481C17.3981 9 17.8481 9.45 17.8481 10C17.8481 10.55 17.3981 11 16.8481 11Z" />\n      </symbol>\n      </svg>','<p>Over the last few years, we&#39;ve seen designers increasingly seeking out ways to participate more directly and collaborate more effectively in the development process.\nThe <a href="/store/items/figma-react/">Material\xa0UI Design Kit for Figma</a> was our first attempt to meet those needs by providing designers with one-to-one mockups of Material\xa0UI components for implementing custom design systems.\nBut it doesn&#39;t go far enough on its own to bridge the gap between design and code—the developer still needs to write the designer&#39;s custom styles from scratch.</p>\n<p>That got us thinking:\nWhat if designers could generate production-ready code directly from their design software to hand off to developers working with a Material\xa0UI codebase?</p>\n<p>That&#39;s why we created Sync, a Figma plugin for generating styles that can be copied and pasted straight into your Material\xa0UI app&#39;s theme.\nWe&#39;re happy to share that the beta version is <a href="https://www.figma.com/community/plugin/1336346114713490235/material-ui-sync">available now on Figma</a>. \uD83D\uDE80</p>\n<img src="/static/blog/introducing-sync-plugin/card.png" alt="Material\xa0UI Sync is a Figma plugin that lets you generate a theme from the Material\xa0UI for Figma Design Kit." width="1280" height="640" />\n\n<p>Let&#39;s take a look at some of its key features:</p>\n<h2 id="theme-customization"><a href="#theme-customization" class="title-link-to-anchor">Theme customization<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="theme-customization"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>Figma&#39;s local variables significantly matured the use of design tokens, making it possible to mirror Material\xa0UI more closely.\nSync relies on these local variables to generate code corresponding to each element and state.\n(As such, it requires <a href="https://github.com/mui/mui-design-kits/releases/tag/v5.16.0">v5.16.0 or later</a> of the Material\xa0UI Design Kit; earlier versions do not support local variables.)</p>\n<video preload="metadata" controls muted loop playsinline width="1584" height="1080">\n\xa0 <source src="/static/blog/introducing-sync-plugin/sync-theme.mp4" type="video/mp4">\n</video>\n\n<p>Visit the documentation to learn <a href="/material-ui/design-resources/material-ui-sync/#using-the-generated-theme">how to insert the generated code into your theme file</a>.</p>\n<h2 id="component-customization"><a href="#component-customization" class="title-link-to-anchor">Component customization<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="component-customization"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>You can fully customize a component&#39;s appearance across multiple states in the Design Kit and then generate the corresponding theme code.\nThis is one of the most exciting features because it enables designers to use the visual design tools they&#39;re already comfortable with to make changes to the code itself.</p>\n<video preload="metadata" controls muted loop playsinline width="1584" height="1080">\n\xa0 <source src="/static/blog/introducing-sync-plugin/sync-component.mp4" type="video/mp4">\n</video>\n\n<aside class="MuiCallout-root MuiCallout-warning">\n            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">\n<use class="MuiCode-copied-icon" xlink:href="#warning-icon" />\n</svg>\n            <div class="MuiCallout-content">\n            <p>While in beta, not all components are supported yet.\nWe&#39;ll expand component coverage progressively in the coming months.\nFor now, you can experiment with the Button, Switch, and Typography.</p>\n\n</div></aside><h2 id="quick-storybook-preview"><a href="#quick-storybook-preview" class="title-link-to-anchor">Quick Storybook preview<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="quick-storybook-preview"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>The Material\xa0UI Sync plugin also bakes in an embedded Storybook preview panel so that you can conveniently play around with your changes and see how they interact with other props and states available in the component API.</p>\n<video preload="metadata" autoplay muted loop playsinline width="1584" height="1080">\n\xa0 <source src="/static/blog/introducing-sync-plugin/sync-storybook.mp4" type="video/mp4">\n</video>\n\n<h2 id="try-sync-now"><a href="#try-sync-now" class="title-link-to-anchor">Try Sync now<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="try-sync-now"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>Get the beta version of Material\xa0UI Sync now, available for free in the <a href="https://www.figma.com/community/plugin/1336346114713490235/material-ui-sync">Figma Community</a>!</p>\n<p>There&#39;s still a lot to do, and we&#39;re looking forward to hearing from all of you <a href="https://github.com/mui/mui-design-kits/issues/10">who requested this plugin years ago</a>.</p>\n<ul>\n<li>Check out the documentation for <a href="/material-ui/design-resources/material-ui-sync/">the Sync plugin</a> and <a href="/material-ui/design-resources/material-ui-for-figma/">the Material\xa0UI Design Kit</a>.</li>\n<li>If you&#39;ve got any feedback, we&#39;d love to <a href="https://material-ui-sync.canny.io/">hear from you</a>.</li>\n</ul>\n<p>Happy designing! \uD83D\uDC68‍\uD83C\uDFA8</p>\n'],toc:[{text:"Theme customization",level:2,hash:"theme-customization",children:[]},{text:"Component customization",level:2,hash:"component-customization",children:[]},{text:"Quick Storybook preview",level:2,hash:"quick-storybook-preview",children:[]},{text:"Try Sync now",level:2,hash:"try-sync-now",children:[]}],title:"Material\xa0UI\xa0Sync:\xa0a Figma plugin that exports theme code",headers:{title:"Material\xa0UI\xa0Sync:\xa0a Figma plugin that exports theme code",description:"Enable designers to generate production-ready code directly from the Material\xa0UI Figma Design Kit.",date:"2024-04-30T00:00:00.000Z",authors:["danilo-leal","DavidCnoops"],tags:["Material UI","Product"],manualCard:"true",components:[],hooks:[]}}},i=a(735250);function s(){return n||(n=(0,i.jsx)(o.Z,{docs:r}))}},772568:function(t,e,a){"use strict";a.d(e,{Z:function(){return g}});var n,o,r=a(778521),i=a(915033),s=a.n(i),c=a(253405),l=a(859861),u=a(621234),d=a(170027),m=a(735250);function h(){return(0,m.jsx)(l.Z,{sx:{height:{xs:520,sm:278,md:269}}})}var p=s()(function(){return a.e(43825).then(a.bind(a,543825))},{loading:h,loadableGenerated:{webpack:function(){return[543825]}}});function g(){var t=(0,c.YD)({triggerOnce:!0,threshold:0,rootMargin:"500px"}),e=t.ref,a=t.inView;return(0,m.jsx)(l.Z,{ref:e,sx:function(t){return(0,r.Z)({background:"linear-gradient(180deg, #FFF 50%, \n          ".concat((t.vars||t).palette.primary[50]," 100%)\n        ")},t.applyDarkStyles({background:"linear-gradient(180deg, ".concat((t.vars||t).palette.primaryDark[900]," 50%,\n          ").concat((0,u.Fq)(t.palette.primary[900],.2)," 100%)\n          ")}))},children:(0,m.jsx)(d.Z,{bg:"transparent",cozy:!0,children:a?n||(n=(0,m.jsx)(p,{})):o||(o=(0,m.jsx)(h,{}))})})}},170027:function(t,e,a){"use strict";var n=a(778521),o=a(614030),r=a(577903),i=a(408011),s=a.n(i),c=a(470079),l=a(258350),u=a(859861),d=a(621234),m=a(735250),h=["bg","children","sx","cozy","noPaddingBottom"],p={white:{light:"common.white",dark:"primaryDark.900"},comfort:{light:"grey.50",dark:"primaryDark.900"},dim:{light:"primaryDark.700",dark:"primaryDark.700"},transparent:{light:"transparent",dark:"transparent"}},g=c.forwardRef(function(t,e){var a=t.bg,i=void 0===a?"white":a,c=t.children,g=t.sx,v=t.cozy,y=void 0!==v&&v,b=t.noPaddingBottom,f=void 0!==b&&b,x=(0,r.Z)(t,h);return(0,m.jsx)(u.Z,(0,n.Z)((0,n.Z)({ref:e},x),{},{sx:[function(t){return(0,n.Z)((0,n.Z)({},"gradient"===i?(0,n.Z)({background:"linear-gradient(#FFF 0%, ".concat((t.vars||t).palette.primary[50]," 100%)")},t.applyDarkStyles({background:"linear-gradient(".concat((t.vars||t).palette.primaryDark[900]," 0%, ").concat((0,d.Fq)(t.palette.primary[900],.2)," 100%)")})):(0,n.Z)({bgcolor:p[i].light},t.applyDarkStyles({bgcolor:p[i].dark}))),{},{py:y?{xs:6,sm:10,md:12}:{xs:4,sm:12,md:14},pb:f?"0 !important":void 0,overflow:"hidden"})}].concat((0,o.Z)(s()(g)?g:[g])),children:(0,m.jsx)(l.Z,{children:c})}))});e.Z=g},123873:function(t,e,a){"use strict";a.d(e,{Z:function(){return R},o:function(){return B}});var n,o,r,i,s,c=a(778521),l=a(234046),u=a(796801),d=a.n(u),m=a(470079),h=a(502894),p=a(621234),g=a(302312),v=a(389136),y=a(331116),b=a(885950),f=a(781097),x=a(502501),k=a(248247),w=a(259106),Z=a(95820),C=a(39253),j=a(318304),M=a(772568),D=a(284384),S=a(597683),F=a(42141),z=a(905636),A=a(215129),P=a(735250),B={oliviertassinari:{name:"Olivier Tassinari",avatar:"https://avatars.githubusercontent.com/u/3165635",github:"oliviertassinari"},mbrookes:{name:"Matt Brookes",avatar:"https://avatars.githubusercontent.com/u/357702",github:"mbrookes"},eps1lon:{name:"Sebastian Silbermann",avatar:"https://avatars.githubusercontent.com/u/12292047",github:"eps1lon"},mnajdova:{name:"Marija Najdova",avatar:"https://avatars.githubusercontent.com/u/4512430",github:"mnajdova"},michaldudak:{name:"Michał Dudak",avatar:"https://avatars.githubusercontent.com/u/4696105",github:"michaldudak"},siriwatknp:{name:"Siriwat Kunaporn",avatar:"https://avatars.githubusercontent.com/u/18292247",github:"siriwatknp"},"danilo-leal":{name:"Danilo Leal",avatar:"https://avatars.githubusercontent.com/u/67129314",github:"danilo-leal"},m4theushw:{name:"Matheus Wichman",avatar:"https://avatars.githubusercontent.com/u/42154031",github:"m4theushw"},flaviendelangle:{name:"Flavien Delangle",avatar:"https://avatars.githubusercontent.com/u/3309670",github:"flaviendelangle"},DanailH:{name:"Danail Hadjiatanasov",avatar:"https://avatars.githubusercontent.com/u/5858539",github:"DanailH"},alexfauquette:{name:"Alexandre Fauquette",avatar:"https://avatars.githubusercontent.com/u/45398769",github:"alexfauquette"},samuelsycamore:{name:"Sam Sycamore",avatar:"https://avatars.githubusercontent.com/u/71297412",github:"samuelsycamore"},josefreitas:{name:"Jos\xe9 Freitas",avatar:"https://avatars.githubusercontent.com/u/550141",github:"joserodolfofreitas"},cherniavskii:{name:"Andrew Cherniavskyi",avatar:"https://avatars.githubusercontent.com/u/13808724",github:"cherniavskii"},mikailaread:{name:"Mikaila Read",avatar:"https://avatars.githubusercontent.com/u/76401606",github:"mikailaread"},prakhargupta:{name:"Prakhar Gupta",avatar:"https://avatars.githubusercontent.com/u/92228082",github:"prakhargupta1"},richbustos:{name:"Rich Bustos",avatar:"https://avatars.githubusercontent.com/u/92274722",github:"richbustos"},colmtuite:{name:"Colm Tuite",avatar:"https://avatars.githubusercontent.com/u/805073",github:"colmtuite"},diegoandai:{name:"Diego Andai",avatar:"https://avatars.githubusercontent.com/u/16889233",github:"DiegoAndai"},DavidCnoops:{name:"David Cnoops",avatar:"https://avatars.githubusercontent.com/u/28001064",github:"DavidCnoops"},brijeshb42:{name:"Brijesh Bittu",avatar:"https://avatars.githubusercontent.com/u/717550?",github:"brijeshb42"}},I={back:"TopLayoutBlog-back",time:"TopLayoutBlog-time",container:"TopLayoutBlog-container"},T=(0,h.ZP)("div")(function(t){var e=t.theme;return{display:"flex",flexWrap:"wrap",marginBottom:e.spacing(2),"& .author":{display:"flex",alignItems:"center",paddingBottom:e.spacing(2),paddingRight:e.spacing(3),"& .MuiAvatar-root":{marginRight:e.spacing(1)}}}}),H=(0,h.ZP)("div")(function(t){var e,a,n=t.theme;return a={flexGrow:1,background:"linear-gradient(180deg, ".concat((n.vars||n).palette.grey[50]," 0%, #FFFFFF 100%)"),backgroundSize:"100% 500px",backgroundRepeat:"no-repeat"},(0,l.Z)(a,"& .".concat(I.back),{display:"flex",alignItems:"center",marginBottom:n.spacing(2),marginLeft:n.spacing(-1)}),(0,l.Z)(a,"& .".concat(I.container),(e={paddingTop:80,marginBottom:n.spacing(12),maxWidth:"calc(".concat(692,"px + ").concat(n.spacing(4),")")},(0,l.Z)(e,n.breakpoints.up("md"),{maxWidth:"calc(".concat(692,"px + ").concat(n.spacing(6),")")}),(0,l.Z)(e,n.breakpoints.up("lg"),{maxWidth:"calc(".concat(692,"px + ").concat(n.spacing(16),")")}),(0,l.Z)(e,"& h1",{marginBottom:n.spacing(3)}),e)),(0,l.Z)(a,"& .markdown-body",{lineHeight:1.7,"& img, & video":{border:"1px solid",borderColor:(n.vars||n).palette.grey[200],borderRadius:12,display:"block",margin:"auto",marginBottom:16},"& figure":{margin:0,padding:0,marginBottom:16,"& img, & video":{marginBottom:8}},"& figcaption":{color:(n.vars||n).palette.text.tertiary,fontSize:n.typography.pxToRem(14),textAlign:"center"},"& strong":{color:(n.vars||n).palette.grey[900]},"& summary":{padding:8,fontSize:n.typography.pxToRem(14),fontWeight:n.typography.fontWeightMedium,color:(n.vars||n).palette.grey[900]},"& details":{paddingLeft:16,paddingRight:16,background:(0,p.Fq)(n.palette.grey[50],.5),border:"1px solid",borderRadius:10,borderColor:(n.vars||n).palette.grey[200],transitionProperty:"all",transitionTiming:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"200ms","&:hover, &:focus-visible":{background:(n.vars||n).palette.grey[50],borderColor:(n.vars||n).palette.grey[300]}},"& th":{width:"100%",textAlign:"left",borderBottom:"3px solid rgba(62, 80, 96, 0.2) !important"},"& .blog-description":{fontSize:n.typography.pxToRem(13),marginTop:8,textAlign:"center",color:(n.vars||n).palette.grey[700],"& a":{color:"inherit",textDecoration:"underline"}},"& .MuiCode-root + .blog-description":{marginTop:-12}}),(0,l.Z)(a,"& .".concat(I.time),(0,c.Z)((0,c.Z)({color:(n.vars||n).palette.text.secondary},n.typography.caption),{},{fontWeight:500})),a},function(t){var e=t.theme;return e.applyDarkStyles({background:"linear-gradient(180deg, ".concat((0,p.Fq)(e.palette.primary[900],.2)," 0%, ").concat((e.vars||e).palette.primaryDark[900]," 100%)"),backgroundSize:"100% 1000px",backgroundRepeat:"no-repeat","& .markdown-body":{"& strong":{color:(e.vars||e).palette.grey[100]},"& summary":{color:(e.vars||e).palette.grey[300]},"& img, & video":{borderColor:(0,p.Fq)(e.palette.primaryDark[600],.5)},"& details":{background:(0,p.Fq)(e.palette.primary[900],.3),borderColor:(e.vars||e).palette.primaryDark[700],"&:hover, &:focus-visible":{background:(0,p.Fq)(e.palette.primary[900],.4),borderColor:(e.vars||e).palette.primaryDark[500]}},"& .blog-description":{color:(e.vars||e).palette.grey[500]}}})});function R(t){var e=(0,g.Z)(),a=t.className,l=t.docs,u=t.demos,h=t.demoComponents,p=t.srcComponents,R=l.en,L=R.description,U=R.rendered,q=R.title,_=R.headers,N=q||_.title,W=(0,v.useRouter)(),O=W.pathname.replace(/(.*)\/(.*)/,"$2"),V=(0,F.ln)(W.asPath).canonicalAsServer,E="true"===_.manualCard?"/static/blog/".concat(O,"/card.png"):"/edge-functions/og-image/?title=".concat(_.cardTitle||N,"&authors=").concat(_.authors.map(function(t){var e=B[t],a=e.github,n=e.name;return"".concat(n," @").concat(a)}).join(","),"&product=Blog");return(0,P.jsxs)(w.Z,{children:[n||(n=(0,P.jsx)(Z.Z,{})),(0,P.jsxs)(k.Z,{title:"".concat(N," - MUI"),description:L,largeCard:!0,disableAlternateLocale:!0,card:E,type:"article",children:[(0,P.jsx)("meta",{name:"author",content:_.authors.map(function(t){return B[t].name}).join(", ")}),(0,P.jsx)("meta",{property:"article:published_time",content:_.date}),(0,P.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:d()({"@context":"https://schema.org","@type":"Article",publisher:{"@type":"Organization",name:"MUI blog",url:"https://mui.com/blog/",logo:{"@type":"ImageObject",url:"https://mui.com/static/icons/512x512.png"}},author:{"@type":"Person",name:B[_.authors[0]].name,image:{"@type":"ImageObject",url:"".concat(B[_.authors[0]].avatar,"?s=",250),width:250,height:250},sameAs:["https://github.com/".concat(B[_.authors[0]].github)]},headline:N,url:"https://mui.com".concat(V),datePublished:_.date,dateModified:_.date,image:{"@type":"ImageObject",url:E,width:1280,height:640},keywords:_.tags.join(", "),description:L,mainEntityOfPage:{"@type":"WebPage","@id":"https://mui.com/blog/"}})}})]}),(0,P.jsxs)(H,{className:a,children:[(0,P.jsxs)(C.Z,{component:"main",className:I.container,children:[(0,P.jsxs)(A.r,(0,c.Z)((0,c.Z)({href:z.Z.blog},z.Z.blog.startsWith("http")&&{rel:"nofollow"}),{},{color:"primary",variant:"body2",className:I.back,children:[(0,P.jsx)(y.default,{fontSize:"small",sx:{mr:.5}}),"Back to blog"]})),_.title?(0,P.jsxs)(m.Fragment,{children:[(0,P.jsx)("time",{dateTime:_.date,className:I.time,children:new Intl.DateTimeFormat("en",{weekday:"long",year:"numeric",month:"short",day:"numeric"}).format(new Date(_.date))}),(0,P.jsx)(D.Z,{children:(0,P.jsx)("h1",{children:_.title})}),(0,P.jsx)(T,{children:_.authors.map(function(t){return(0,P.jsxs)("div",{className:"author",children:[(0,P.jsx)(x.Z,{sx:{width:36,height:36},alt:"",src:"".concat(B[t].avatar,"?s=",36),srcSet:"".concat(B[t].avatar,"?s=").concat(72," 2x, ").concat(B[t].avatar,"?s=").concat(108," 3x")}),(0,P.jsxs)("div",{children:[(0,P.jsx)(f.Z,{variant:"body2",fontWeight:"500",children:B[t].name}),(0,P.jsxs)(A.r,{href:"https://github.com/".concat(B[t].github),target:"_blank",rel:"noopener",color:"primary",variant:"body2",sx:{fontWeight:500},children:["@",B[t].github]})]})]},t)})})]}):null,U.map(function(t,a){return(0,P.jsx)(S.Z,{demos:u,demoComponents:h,srcComponents:p,renderedMarkdown:t,disableAd:!0,localizedDoc:l.en,renderedMarkdownOrDemo:t,theme:e,WrapperComponent:m.Fragment},a)})]}),o||(o=(0,P.jsx)(b.Z,{})),r||(r=(0,P.jsx)(M.Z,{})),i||(i=(0,P.jsx)(b.Z,{})),s||(s=(0,P.jsx)(j.Z,{}))]})]})}},84086:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/introducing-sync-plugin",function(){return a(59028)}])},331116:function(t,e,a){"use strict";var n=a(11234);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(a(122268)),r=a(735250);e.default=(0,o.default)((0,r.jsx)("path",{d:"M14.71 6.71a.996.996 0 0 0-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41"}),"ChevronLeftRounded")}},function(t){t.O(0,[49774,9535,73976,97146,59727,85925,17376,41373,15686,34800,22842,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,16067,40332,97683,83030,92888,40179],function(){return t(t.s=84086)}),_N_E=t.O()}]);