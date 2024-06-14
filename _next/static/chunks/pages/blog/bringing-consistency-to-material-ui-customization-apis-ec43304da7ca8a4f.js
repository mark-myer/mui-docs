(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47195],{502501:function(e,t,a){"use strict";a.d(t,{Z:function(){return k}});var o=a(577903),n=a(863363),r=a(778521),i=a(470079),s=a(653048),c=a(306029),l=a(360731),d=a(502894),p=a(632820),m=a(735250),h=(0,p.Z)((0,m.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),u=a(738633),g=a(639560),v=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],b=(0,l.Uu)("MuiAvatar"),y=function(e){var t=e.classes,a=e.variant,o=e.colorDefault;return(0,c.Z)({root:["root",a,o&&"colorDefault"],img:["img"],fallback:["fallback"]},u.$,t)},f=(0,d.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],a.colorDefault&&t.colorDefault]}})(function(e){var t=e.theme;return{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:(0,r.Z)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:(0,r.Z)({backgroundColor:t.palette.grey[400]},t.applyStyles("dark",{backgroundColor:t.palette.grey[600]})))}]}}),x=(0,d.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),w=(0,d.ZP)(h,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,t){return t.fallback}})({width:"75%",height:"75%"}),k=i.forwardRef(function(e,t){var a,c,l,d,p,h,u,k,Z,C=b({props:e,name:"MuiAvatar"}),j=C.alt,S=C.children,P=C.className,M=C.component,z=void 0===M?"div":M,A=C.slots,D=C.slotProps,F=C.imgProps,T=C.sizes,I=C.src,B=C.srcSet,H=C.variant,R=(0,o.Z)(C,v),L=null,N=(c=(a=(0,r.Z)((0,r.Z)({},F),{},{src:I,srcSet:B})).crossOrigin,l=a.referrerPolicy,d=a.src,p=a.srcSet,h=i.useState(!1),k=(u=(0,n.Z)(h,2))[0],Z=u[1],i.useEffect(function(){if(d||p){Z(!1);var e=!0,t=new Image;return t.onload=function(){e&&Z("loaded")},t.onerror=function(){e&&Z("error")},t.crossOrigin=c,t.referrerPolicy=l,t.src=d,p&&(t.srcset=p),function(){e=!1}}},[c,l,d,p]),k),_=I||B,O=_&&"error"!==N,W=(0,r.Z)((0,r.Z)({},C),{},{colorDefault:!O,component:z,variant:void 0===H?"circular":H});delete W.ownerState;var q=y(W),V=(0,g.Z)("img",{className:q.img,elementType:x,externalForwardedProps:{slots:void 0===A?{}:A,slotProps:{img:(0,r.Z)((0,r.Z)({},F),(void 0===D?{}:D).img)}},additionalProps:{alt:j,src:I,srcSet:B,sizes:T},ownerState:W}),U=(0,n.Z)(V,2),E=U[0],G=U[1];return L=O?(0,m.jsx)(E,(0,r.Z)({},G)):S||0===S?S:_&&j?j[0]:(0,m.jsx)(w,{ownerState:W,className:q.fallback}),(0,m.jsx)(f,(0,r.Z)((0,r.Z)({as:z,className:(0,s.default)(q.root,P),ref:t},R),{},{ownerState:W,children:L}))})},738633:function(e,t,a){"use strict";a.d(t,{$:function(){return r}});var o=a(344443),n=a(92358);function r(e){return(0,n.ZP)("MuiAvatar",e)}var i=(0,o.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);t.Z=i},452460:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return s}}),a(470079);var o,n=a(123873),r={en:{description:"We're standardizing two key areas of the Material\xa0UI customization APIs to reduce complexity and cognitive overhead. Read on to learn what's changing.",location:"/docs/pages/blog/bringing-consistency-to-material-ui-customization-apis.md",rendered:['<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="error-icon" viewBox="0 0 20 20">\n      <path fill-rule="evenodd" d="M2 7.4v5.2a2 2 0 0 0 .586 1.414l3.4 3.4A2 2 0 0 0 7.4 18h5.2a2 2 0 0 0 1.414-.586l3.4-3.4A2 2 0 0 0 18 12.6V7.4a2 2 0 0 0-.586-1.414l-3.4-3.4A2 2 0 0 0 12.6 2H7.4a2 2 0 0 0-1.414.586l-3.4 3.4A2 2 0 0 0 2 7.4Zm11.03-.43a.75.75 0 0 1 0 1.06L11.06 10l1.97 1.97a.75.75 0 1 1-1.06 1.06L10 11.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L8.94 10 6.97 8.03a.75.75 0 0 1 1.06-1.06L10 8.94l1.97-1.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="warning-icon" viewBox="0 0 20 20">\n      <path d="M2.33 17a.735.735 0 0 1-.665-.375.631.631 0 0 1-.094-.375.898.898 0 0 1 .115-.396L9.353 3.062a.621.621 0 0 1 .281-.27.85.85 0 0 1 .729 0 .622.622 0 0 1 .281.27l7.667 12.792c.07.125.108.257.114.396a.63.63 0 0 1-.093.375.842.842 0 0 1-.271.27.728.728 0 0 1-.394.105H2.33Zm7.664-2.5c.211 0 .39-.072.536-.214a.714.714 0 0 0 .218-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.531-.22.736.736 0 0 0-.536.215.714.714 0 0 0-.219.531c0 .212.072.39.215.536.143.146.32.219.531.219Zm0-2.5c.211 0 .39-.072.536-.216a.72.72 0 0 0 .218-.534v-2.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.531-.216.734.734 0 0 0-.536.216.72.72 0 0 0-.219.534v2.5c0 .212.072.39.215.534a.72.72 0 0 0 .531.216Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="success-icon" viewBox="0 0 20 20">\n      <path d="m8.938 10.875-1.25-1.23a.718.718 0 0 0-.521-.228.718.718 0 0 0-.521.229.73.73 0 0 0 0 1.062l1.77 1.771c.153.153.327.23.521.23a.718.718 0 0 0 .521-.23l3.896-3.896a.73.73 0 0 0 0-1.062.718.718 0 0 0-.52-.23.718.718 0 0 0-.521.23l-3.376 3.354ZM10 18a7.796 7.796 0 0 1-3.104-.625 8.065 8.065 0 0 1-2.552-1.719 8.064 8.064 0 0 1-1.719-2.552A7.797 7.797 0 0 1 2 10c0-1.111.208-2.15.625-3.115a8.064 8.064 0 0 1 4.27-4.26A7.797 7.797 0 0 1 10 2c1.111 0 2.15.208 3.115.625a8.096 8.096 0 0 1 4.26 4.26C17.792 7.851 18 8.89 18 10a7.797 7.797 0 0 1-.625 3.104 8.066 8.066 0 0 1-4.26 4.271A7.774 7.774 0 0 1 10 18Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="info-icon" viewBox="0 0 20 20">\n      <path d="M9.996 14c.21 0 .39-.072.535-.216a.72.72 0 0 0 .219-.534v-3.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.532-.216.734.734 0 0 0-.535.216.72.72 0 0 0-.219.534v3.5c0 .213.071.39.214.534a.72.72 0 0 0 .532.216Zm0-6.5c.21 0 .39-.071.535-.214a.714.714 0 0 0 .219-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.532-.219.736.736 0 0 0-.535.214.714.714 0 0 0-.219.532c0 .21.071.39.214.535.143.146.32.219.532.219Zm.01 10.5a7.81 7.81 0 0 1-3.11-.625 8.065 8.065 0 0 1-2.552-1.719 8.066 8.066 0 0 1-1.719-2.551A7.818 7.818 0 0 1 2 9.99c0-1.104.208-2.14.625-3.105a8.066 8.066 0 0 1 4.27-4.26A7.818 7.818 0 0 1 10.009 2a7.75 7.75 0 0 1 3.106.625 8.083 8.083 0 0 1 4.26 4.265A7.77 7.77 0 0 1 18 9.994a7.81 7.81 0 0 1-.625 3.11 8.066 8.066 0 0 1-1.719 2.552 8.083 8.083 0 0 1-2.546 1.719 7.77 7.77 0 0 1-3.104.625Z"/>\n      </symbol>\n      </svg>','\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n        <symbol id="anchor-link-icon" viewBox="0 0 12 6">\n          <path d="M8.9176 0.083252H7.1676C6.84677 0.083252 6.58427 0.345752 6.58427 0.666585C6.58427 0.987419 6.84677 1.24992 7.1676 1.24992H8.9176C9.8801 1.24992 10.6676 2.03742 10.6676 2.99992C10.6676 3.96242 9.8801 4.74992 8.9176 4.74992H7.1676C6.84677 4.74992 6.58427 5.01242 6.58427 5.33325C6.58427 5.65409 6.84677 5.91659 7.1676 5.91659H8.9176C10.5276 5.91659 11.8343 4.60992 11.8343 2.99992C11.8343 1.38992 10.5276 0.083252 8.9176 0.083252ZM3.6676 2.99992C3.6676 3.32075 3.9301 3.58325 4.25094 3.58325H7.75094C8.07177 3.58325 8.33427 3.32075 8.33427 2.99992C8.33427 2.67909 8.07177 2.41659 7.75094 2.41659H4.25094C3.9301 2.41659 3.6676 2.67909 3.6676 2.99992ZM4.83427 4.74992H3.08427C2.12177 4.74992 1.33427 3.96242 1.33427 2.99992C1.33427 2.03742 2.12177 1.24992 3.08427 1.24992H4.83427C5.1551 1.24992 5.4176 0.987419 5.4176 0.666585C5.4176 0.345752 5.1551 0.083252 4.83427 0.083252H3.08427C1.47427 0.083252 0.167603 1.38992 0.167603 2.99992C0.167603 4.60992 1.47427 5.91659 3.08427 5.91659H4.83427C5.1551 5.91659 5.4176 5.65409 5.4176 5.33325C5.4176 5.01242 5.1551 4.74992 4.83427 4.74992Z" />\n        </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n      <path d="M22.8481 4C22.8481 2.9 21.9481 2 20.8481 2H4.84814C3.74814 2 2.84814 2.9 2.84814 4V16C2.84814 17.1 3.74814 18 4.84814 18H18.8481L22.8481 22V4ZM16.8481 11H13.8481V14C13.8481 14.55 13.3981 15 12.8481 15C12.2981 15 11.8481 14.55 11.8481 14V11H8.84814C8.29814 11 7.84814 10.55 7.84814 10C7.84814 9.45 8.29814 9 8.84814 9H11.8481V6C11.8481 5.45 12.2981 5 12.8481 5C13.3981 5 13.8481 5.45 13.8481 6V9H16.8481C17.3981 9 17.8481 9.45 17.8481 10C17.8481 10.55 17.3981 11 16.8481 11Z" />\n      </symbol>\n      </svg>','<p>The Material\xa0UI team is working on two initiatives to standardize the Material\xa0UI API: The first applies to overriding inner elements, and the second applies to component CSS classes.\nIn both cases, the purpose is to provide a more consistent developer experience for the community.</p>\n<p>Let&#39;s explore how these changes are taking shape:</p>\n<h2 id="inner-element-overrides"><a href="#inner-element-overrides" class="title-link-to-anchor">Inner element overrides<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="inner-element-overrides"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>Because Material\xa0UI components often contain multiple DOM nodes, it&#39;s common to need to modify the structure, behavior, and style of inner elements.\nFor example, you might want to modify the Slider&#39;s thumb element to grow in size when dragged:</p>\n<iframe src="https://codesandbox.io/embed/nw34ry?view=Editor+%2B+Preview&module=%2Fsrc%2FDemo.tsx&hidenavigation=1"\n     style="width:100%; height: 200px; border:0; border-radius: 4px; overflow:hidden;"\n     title="blog/material-ui-early-2024-standardization/slider-slots-example"\n     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"\n     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"\n   ></iframe>\n\n<p>You can achieve this by providing custom components through the <code>slots</code> prop.\nThe demo above provides a custom thumb component that uses the Slider&#39;s internal <code>dragging</code> and <code>focusedThumbIndex</code> states to change its appearance.\n<a href="https://codesandbox.io/p/sandbox/blog-material-ui-early-2024-deprecations-slider-slots-example-nw34ry?file=%2Fsrc%2FDemo.tsx">Open the CodeSandbox</a> to see the implementation.</p>\n<p>The problem is that this slot pattern exposed through the <code>slots</code> prop is not consistent across the library.\nSome components implement the <code>slots</code> prop, but others have a <code>components</code> prop, which works the same as the <code>slots</code> prop.\nOther components have props named <code>&lt;SlotName&gt;Component</code> for more specific use cases—for example, the Accordion features a <code>TransitionComponent</code> prop for implementing custom transitions.</p>\n<p>The same inconsistencies are found with the <code>slotProps</code> prop, which is used to provide custom props to inner elements.\nSome components have the <code>slotsProps</code> prop; others have a <code>componentsProps</code> prop; and still others have props named <code>&lt;SlotName&gt;Props</code>.</p>\n<p>This lack of consistency leads to unnecessary complexity for both developers and maintainers.\nTo resolve this, the <code>slots</code> and <code>slotProps</code> API will be standardized across all components, and the analogous APIs will be deprecated and eventually removed.</p>\n<h2 id="component-css-classes"><a href="#component-css-classes" class="title-link-to-anchor">Component CSS classes<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="component-css-classes"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>The most common way to customize a component&#39;s look and feel is to target its CSS classes.\nFor example, you might want to customize a Chip&#39;s primary color and set it to a different color when it&#39;s clickable:</p>\n<iframe src="https://codesandbox.io/embed/d7xqr6?view=Editor+%2B+Preview&module=%2Fsrc%2FDemo.tsx&hidenavigation=1"\n     style="width:100%; height: 200px; border:0; border-radius: 4px; overflow:hidden;"\n     title="blog/material-ui-early-2024-standardization/chip-classes-example"\n     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"\n     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"\n   ></iframe>\n\n<p>You can do this by targeting <code>chipClasses.colorPrimary</code> and <code>chipClasses.clickable</code>, respectively.\nThe demo above targets <code>.MuiChip-colorPrimary</code> and <code>.MuiChip-clickable.MuiChip-colorPrimary</code> to achieve this result.\n<a href="https://codesandbox.io/p/sandbox/blog-material-ui-early-2024-deprecations-chip-classes-example-d7xqr6?file=%2Fsrc%2FDemo.tsx">Open the CodeSandbox</a> to see the implementation.</p>\n<p>The problem is that you could also use the <code>chipClasses.clickableColorPrimary</code> composed class, which composes the atomic clickable and color classes.\nThese composed classes bloat the API without adding significant improvements: For example, this pattern adds 26 possible CSS classes to the Chip component.</p>\n<p>The composed classes also reduce the predictability of the CSS classes API, as the compose order and which props get composed are arbitrary decisions.\nThis adds unnecessary cognitive overhead for developers as well as significant complexity for maintainers.\nBecause of these issues, composed CSS classes will be deprecated and eventually removed in favor of atomic class alternatives.</p>\n<h2 id="standardization-process"><a href="#standardization-process" class="title-link-to-anchor">Standardization process<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="standardization-process"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>This initiative aims to improve the developer experience for the Material\xa0UI community.\nTo provide the smoothest migration from the inconsistent APIs, they will be deprecated first and removed later, giving you plenty of time to adjust.\nWith each deprecation, we&#39;ll update the <a href="https://mui.com/material-ui/migration/migrating-from-deprecated-apis/">migration guide</a> and provide <a href="https://github.com/mui/material-ui/tree/HEAD/packages/mui-codemod#deprecations">codemods</a> to simplify the process.</p>\n<p>As always, we&#39;d love to hear what you think! Please <a href="https://github.com/mui/material-ui/issues/new/choose">open a GitHub issue</a> if you encounter any unexpected behavior with the standardized APIs or if you have any other suggestions you&#39;d like us to discuss.</p>\n'],toc:[{text:"Inner element overrides",level:2,hash:"inner-element-overrides",children:[]},{text:"Component CSS classes",level:2,hash:"component-css-classes",children:[]},{text:"Standardization process",level:2,hash:"standardization-process",children:[]}],title:"Bringing consistency to Material\xa0UI customization APIs",headers:{title:"Bringing consistency to Material\xa0UI customization APIs",description:"We're standardizing two key areas of the Material\xa0UI customization APIs to reduce complexity and cognitive overhead. Read on to learn what's changing.",date:"2024-03-18T10:00:00.000Z",authors:["diegoandai"],tags:["Material UI","Product"],manualCard:"true",components:[],hooks:[]}}},i=a(735250);function s(){return o||(o=(0,i.jsx)(n.Z,{docs:r}))}},772568:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var o,n,r=a(778521),i=a(915033),s=a.n(i),c=a(253405),l=a(859861),d=a(621234),p=a(170027),m=a(735250);function h(){return(0,m.jsx)(l.Z,{sx:{height:{xs:520,sm:278,md:269}}})}var u=s()(function(){return a.e(43825).then(a.bind(a,543825))},{loading:h,loadableGenerated:{webpack:function(){return[543825]}}});function g(){var e=(0,c.YD)({triggerOnce:!0,threshold:0,rootMargin:"500px"}),t=e.ref,a=e.inView;return(0,m.jsx)(l.Z,{ref:t,sx:function(e){return(0,r.Z)({background:"linear-gradient(180deg, #FFF 50%, \n          ".concat((e.vars||e).palette.primary[50]," 100%)\n        ")},e.applyDarkStyles({background:"linear-gradient(180deg, ".concat((e.vars||e).palette.primaryDark[900]," 50%,\n          ").concat((0,d.Fq)(e.palette.primary[900],.2)," 100%)\n          ")}))},children:(0,m.jsx)(p.Z,{bg:"transparent",cozy:!0,children:a?o||(o=(0,m.jsx)(u,{})):n||(n=(0,m.jsx)(h,{}))})})}},170027:function(e,t,a){"use strict";var o=a(778521),n=a(614030),r=a(577903),i=a(408011),s=a.n(i),c=a(470079),l=a(258350),d=a(859861),p=a(621234),m=a(735250),h=["bg","children","sx","cozy","noPaddingBottom"],u={white:{light:"common.white",dark:"primaryDark.900"},comfort:{light:"grey.50",dark:"primaryDark.900"},dim:{light:"primaryDark.700",dark:"primaryDark.700"},transparent:{light:"transparent",dark:"transparent"}},g=c.forwardRef(function(e,t){var a=e.bg,i=void 0===a?"white":a,c=e.children,g=e.sx,v=e.cozy,b=void 0!==v&&v,y=e.noPaddingBottom,f=void 0!==y&&y,x=(0,r.Z)(e,h);return(0,m.jsx)(d.Z,(0,o.Z)((0,o.Z)({ref:t},x),{},{sx:[function(e){return(0,o.Z)((0,o.Z)({},"gradient"===i?(0,o.Z)({background:"linear-gradient(#FFF 0%, ".concat((e.vars||e).palette.primary[50]," 100%)")},e.applyDarkStyles({background:"linear-gradient(".concat((e.vars||e).palette.primaryDark[900]," 0%, ").concat((0,p.Fq)(e.palette.primary[900],.2)," 100%)")})):(0,o.Z)({bgcolor:u[i].light},e.applyDarkStyles({bgcolor:u[i].dark}))),{},{py:b?{xs:6,sm:10,md:12}:{xs:4,sm:12,md:14},pb:f?"0 !important":void 0,overflow:"hidden"})}].concat((0,n.Z)(s()(g)?g:[g])),children:(0,m.jsx)(l.Z,{children:c})}))});t.Z=g},123873:function(e,t,a){"use strict";a.d(t,{Z:function(){return R},o:function(){return T}});var o,n,r,i,s,c=a(778521),l=a(234046),d=a(796801),p=a.n(d),m=a(470079),h=a(502894),u=a(621234),g=a(302312),v=a(389136),b=a(331116),y=a(885950),f=a(781097),x=a(502501),w=a(248247),k=a(259106),Z=a(95820),C=a(39253),j=a(318304),S=a(772568),P=a(284384),M=a(597683),z=a(42141),A=a(905636),D=a(215129),F=a(735250),T={oliviertassinari:{name:"Olivier Tassinari",avatar:"https://avatars.githubusercontent.com/u/3165635",github:"oliviertassinari"},mbrookes:{name:"Matt Brookes",avatar:"https://avatars.githubusercontent.com/u/357702",github:"mbrookes"},eps1lon:{name:"Sebastian Silbermann",avatar:"https://avatars.githubusercontent.com/u/12292047",github:"eps1lon"},mnajdova:{name:"Marija Najdova",avatar:"https://avatars.githubusercontent.com/u/4512430",github:"mnajdova"},michaldudak:{name:"Michał Dudak",avatar:"https://avatars.githubusercontent.com/u/4696105",github:"michaldudak"},siriwatknp:{name:"Siriwat Kunaporn",avatar:"https://avatars.githubusercontent.com/u/18292247",github:"siriwatknp"},"danilo-leal":{name:"Danilo Leal",avatar:"https://avatars.githubusercontent.com/u/67129314",github:"danilo-leal"},m4theushw:{name:"Matheus Wichman",avatar:"https://avatars.githubusercontent.com/u/42154031",github:"m4theushw"},flaviendelangle:{name:"Flavien Delangle",avatar:"https://avatars.githubusercontent.com/u/3309670",github:"flaviendelangle"},DanailH:{name:"Danail Hadjiatanasov",avatar:"https://avatars.githubusercontent.com/u/5858539",github:"DanailH"},alexfauquette:{name:"Alexandre Fauquette",avatar:"https://avatars.githubusercontent.com/u/45398769",github:"alexfauquette"},samuelsycamore:{name:"Sam Sycamore",avatar:"https://avatars.githubusercontent.com/u/71297412",github:"samuelsycamore"},josefreitas:{name:"Jos\xe9 Freitas",avatar:"https://avatars.githubusercontent.com/u/550141",github:"joserodolfofreitas"},cherniavskii:{name:"Andrew Cherniavskyi",avatar:"https://avatars.githubusercontent.com/u/13808724",github:"cherniavskii"},mikailaread:{name:"Mikaila Read",avatar:"https://avatars.githubusercontent.com/u/76401606",github:"mikailaread"},prakhargupta:{name:"Prakhar Gupta",avatar:"https://avatars.githubusercontent.com/u/92228082",github:"prakhargupta1"},richbustos:{name:"Rich Bustos",avatar:"https://avatars.githubusercontent.com/u/92274722",github:"richbustos"},colmtuite:{name:"Colm Tuite",avatar:"https://avatars.githubusercontent.com/u/805073",github:"colmtuite"},diegoandai:{name:"Diego Andai",avatar:"https://avatars.githubusercontent.com/u/16889233",github:"DiegoAndai"},DavidCnoops:{name:"David Cnoops",avatar:"https://avatars.githubusercontent.com/u/28001064",github:"DavidCnoops"},brijeshb42:{name:"Brijesh Bittu",avatar:"https://avatars.githubusercontent.com/u/717550?",github:"brijeshb42"}},I={back:"TopLayoutBlog-back",time:"TopLayoutBlog-time",container:"TopLayoutBlog-container"},B=(0,h.ZP)("div")(function(e){var t=e.theme;return{display:"flex",flexWrap:"wrap",marginBottom:t.spacing(2),"& .author":{display:"flex",alignItems:"center",paddingBottom:t.spacing(2),paddingRight:t.spacing(3),"& .MuiAvatar-root":{marginRight:t.spacing(1)}}}}),H=(0,h.ZP)("div")(function(e){var t,a,o=e.theme;return a={flexGrow:1,background:"linear-gradient(180deg, ".concat((o.vars||o).palette.grey[50]," 0%, #FFFFFF 100%)"),backgroundSize:"100% 500px",backgroundRepeat:"no-repeat"},(0,l.Z)(a,"& .".concat(I.back),{display:"flex",alignItems:"center",marginBottom:o.spacing(2),marginLeft:o.spacing(-1)}),(0,l.Z)(a,"& .".concat(I.container),(t={paddingTop:80,marginBottom:o.spacing(12),maxWidth:"calc(".concat(692,"px + ").concat(o.spacing(4),")")},(0,l.Z)(t,o.breakpoints.up("md"),{maxWidth:"calc(".concat(692,"px + ").concat(o.spacing(6),")")}),(0,l.Z)(t,o.breakpoints.up("lg"),{maxWidth:"calc(".concat(692,"px + ").concat(o.spacing(16),")")}),(0,l.Z)(t,"& h1",{marginBottom:o.spacing(3)}),t)),(0,l.Z)(a,"& .markdown-body",{lineHeight:1.7,"& img, & video":{border:"1px solid",borderColor:(o.vars||o).palette.grey[200],borderRadius:12,display:"block",margin:"auto",marginBottom:16},"& figure":{margin:0,padding:0,marginBottom:16,"& img, & video":{marginBottom:8}},"& figcaption":{color:(o.vars||o).palette.text.tertiary,fontSize:o.typography.pxToRem(14),textAlign:"center"},"& strong":{color:(o.vars||o).palette.grey[900]},"& summary":{padding:8,fontSize:o.typography.pxToRem(14),fontWeight:o.typography.fontWeightMedium,color:(o.vars||o).palette.grey[900]},"& details":{paddingLeft:16,paddingRight:16,background:(0,u.Fq)(o.palette.grey[50],.5),border:"1px solid",borderRadius:10,borderColor:(o.vars||o).palette.grey[200],transitionProperty:"all",transitionTiming:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"200ms","&:hover, &:focus-visible":{background:(o.vars||o).palette.grey[50],borderColor:(o.vars||o).palette.grey[300]}},"& th":{width:"100%",textAlign:"left",borderBottom:"3px solid rgba(62, 80, 96, 0.2) !important"},"& .blog-description":{fontSize:o.typography.pxToRem(13),marginTop:8,textAlign:"center",color:(o.vars||o).palette.grey[700],"& a":{color:"inherit",textDecoration:"underline"}},"& .MuiCode-root + .blog-description":{marginTop:-12}}),(0,l.Z)(a,"& .".concat(I.time),(0,c.Z)((0,c.Z)({color:(o.vars||o).palette.text.secondary},o.typography.caption),{},{fontWeight:500})),a},function(e){var t=e.theme;return t.applyDarkStyles({background:"linear-gradient(180deg, ".concat((0,u.Fq)(t.palette.primary[900],.2)," 0%, ").concat((t.vars||t).palette.primaryDark[900]," 100%)"),backgroundSize:"100% 1000px",backgroundRepeat:"no-repeat","& .markdown-body":{"& strong":{color:(t.vars||t).palette.grey[100]},"& summary":{color:(t.vars||t).palette.grey[300]},"& img, & video":{borderColor:(0,u.Fq)(t.palette.primaryDark[600],.5)},"& details":{background:(0,u.Fq)(t.palette.primary[900],.3),borderColor:(t.vars||t).palette.primaryDark[700],"&:hover, &:focus-visible":{background:(0,u.Fq)(t.palette.primary[900],.4),borderColor:(t.vars||t).palette.primaryDark[500]}},"& .blog-description":{color:(t.vars||t).palette.grey[500]}}})});function R(e){var t=(0,g.Z)(),a=e.className,l=e.docs,d=e.demos,h=e.demoComponents,u=e.srcComponents,R=l.en,L=R.description,N=R.rendered,_=R.title,O=R.headers,W=_||O.title,q=(0,v.useRouter)(),V=q.pathname.replace(/(.*)\/(.*)/,"$2"),U=(0,z.ln)(q.asPath).canonicalAsServer,E="true"===O.manualCard?"/static/blog/".concat(V,"/card.png"):"/edge-functions/og-image/?title=".concat(O.cardTitle||W,"&authors=").concat(O.authors.map(function(e){var t=T[e],a=t.github,o=t.name;return"".concat(o," @").concat(a)}).join(","),"&product=Blog");return(0,F.jsxs)(k.Z,{children:[o||(o=(0,F.jsx)(Z.Z,{})),(0,F.jsxs)(w.Z,{title:"".concat(W," - MUI"),description:L,largeCard:!0,disableAlternateLocale:!0,card:E,type:"article",children:[(0,F.jsx)("meta",{name:"author",content:O.authors.map(function(e){return T[e].name}).join(", ")}),(0,F.jsx)("meta",{property:"article:published_time",content:O.date}),(0,F.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:p()({"@context":"https://schema.org","@type":"Article",publisher:{"@type":"Organization",name:"MUI blog",url:"https://mui.com/blog/",logo:{"@type":"ImageObject",url:"https://mui.com/static/icons/512x512.png"}},author:{"@type":"Person",name:T[O.authors[0]].name,image:{"@type":"ImageObject",url:"".concat(T[O.authors[0]].avatar,"?s=",250),width:250,height:250},sameAs:["https://github.com/".concat(T[O.authors[0]].github)]},headline:W,url:"https://mui.com".concat(U),datePublished:O.date,dateModified:O.date,image:{"@type":"ImageObject",url:E,width:1280,height:640},keywords:O.tags.join(", "),description:L,mainEntityOfPage:{"@type":"WebPage","@id":"https://mui.com/blog/"}})}})]}),(0,F.jsxs)(H,{className:a,children:[(0,F.jsxs)(C.Z,{component:"main",className:I.container,children:[(0,F.jsxs)(D.r,(0,c.Z)((0,c.Z)({href:A.Z.blog},A.Z.blog.startsWith("http")&&{rel:"nofollow"}),{},{color:"primary",variant:"body2",className:I.back,children:[(0,F.jsx)(b.default,{fontSize:"small",sx:{mr:.5}}),"Back to blog"]})),O.title?(0,F.jsxs)(m.Fragment,{children:[(0,F.jsx)("time",{dateTime:O.date,className:I.time,children:new Intl.DateTimeFormat("en",{weekday:"long",year:"numeric",month:"short",day:"numeric"}).format(new Date(O.date))}),(0,F.jsx)(P.Z,{children:(0,F.jsx)("h1",{children:O.title})}),(0,F.jsx)(B,{children:O.authors.map(function(e){return(0,F.jsxs)("div",{className:"author",children:[(0,F.jsx)(x.Z,{sx:{width:36,height:36},alt:"",src:"".concat(T[e].avatar,"?s=",36),srcSet:"".concat(T[e].avatar,"?s=").concat(72," 2x, ").concat(T[e].avatar,"?s=").concat(108," 3x")}),(0,F.jsxs)("div",{children:[(0,F.jsx)(f.Z,{variant:"body2",fontWeight:"500",children:T[e].name}),(0,F.jsxs)(D.r,{href:"https://github.com/".concat(T[e].github),target:"_blank",rel:"noopener",color:"primary",variant:"body2",sx:{fontWeight:500},children:["@",T[e].github]})]})]},e)})})]}):null,N.map(function(e,a){return(0,F.jsx)(M.Z,{demos:d,demoComponents:h,srcComponents:u,renderedMarkdown:e,disableAd:!0,localizedDoc:l.en,renderedMarkdownOrDemo:e,theme:t,WrapperComponent:m.Fragment},a)})]}),n||(n=(0,F.jsx)(y.Z,{})),r||(r=(0,F.jsx)(S.Z,{})),i||(i=(0,F.jsx)(y.Z,{})),s||(s=(0,F.jsx)(j.Z,{}))]})]})}},609375:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/bringing-consistency-to-material-ui-customization-apis",function(){return a(452460)}])},331116:function(e,t,a){"use strict";var o=a(11234);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(122268)),r=a(735250);t.default=(0,n.default)((0,r.jsx)("path",{d:"M14.71 6.71a.996.996 0 0 0-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41"}),"ChevronLeftRounded")}},function(e){e.O(0,[49774,9535,73976,97146,59727,85925,17376,41373,15686,34800,22842,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,16067,40332,97683,83030,92888,40179],function(){return e(e.s=609375)}),_N_E=e.O()}]);