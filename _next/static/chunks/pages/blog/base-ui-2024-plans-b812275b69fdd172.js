(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25479],{502501:function(a,t,e){"use strict";e.d(t,{Z:function(){return x}});var n=e(577903),s=e(863363),o=e(778521),i=e(470079),r=e(653048),c=e(306029),l=e(360731),p=e(502894),u=e(632820),d=e(735250),h=(0,u.Z)((0,d.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),m=e(738633),g=e(639560),b=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],v=(0,l.Uu)("MuiAvatar"),f=function(a){var t=a.classes,e=a.variant,n=a.colorDefault;return(0,c.Z)({root:["root",e,n&&"colorDefault"],img:["img"],fallback:["fallback"]},m.$,t)},y=(0,p.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(a,t){var e=a.ownerState;return[t.root,t[e.variant],e.colorDefault&&t.colorDefault]}})(function(a){var t=a.theme;return{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:(0,o.Z)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:(0,o.Z)({backgroundColor:t.palette.grey[400]},t.applyStyles("dark",{backgroundColor:t.palette.grey[600]})))}]}}),k=(0,p.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(a,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),w=(0,p.ZP)(h,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(a,t){return t.fallback}})({width:"75%",height:"75%"}),x=i.forwardRef(function(a,t){var e,c,l,p,u,h,m,x,Z,C=v({props:a,name:"MuiAvatar"}),j=C.alt,M=C.children,A=C.className,S=C.component,P=void 0===S?"div":S,D=C.slots,I=C.slotProps,B=C.imgProps,H=C.sizes,T=C.src,F=C.srcSet,z=C.variant,R=(0,n.Z)(C,b),U=null,q=(c=(e=(0,o.Z)((0,o.Z)({},B),{},{src:T,srcSet:F})).crossOrigin,l=e.referrerPolicy,p=e.src,u=e.srcSet,h=i.useState(!1),x=(m=(0,s.Z)(h,2))[0],Z=m[1],i.useEffect(function(){if(p||u){Z(!1);var a=!0,t=new Image;return t.onload=function(){a&&Z("loaded")},t.onerror=function(){a&&Z("error")},t.crossOrigin=c,t.referrerPolicy=l,t.src=p,u&&(t.srcset=u),function(){a=!1}}},[c,l,p,u]),x),V=T||F,W=V&&"error"!==q,L=(0,o.Z)((0,o.Z)({},C),{},{colorDefault:!W,component:P,variant:void 0===z?"circular":z});delete L.ownerState;var N=f(L),O=(0,g.Z)("img",{className:N.img,elementType:k,externalForwardedProps:{slots:void 0===D?{}:D,slotProps:{img:(0,o.Z)((0,o.Z)({},B),(void 0===I?{}:I).img)}},additionalProps:{alt:j,src:T,srcSet:F,sizes:H},ownerState:L}),G=(0,s.Z)(O,2),_=G[0],E=G[1];return U=W?(0,d.jsx)(_,(0,o.Z)({},E)):M||0===M?M:V&&j?j[0]:(0,d.jsx)(w,{ownerState:L,className:N.fallback}),(0,d.jsx)(y,(0,o.Z)((0,o.Z)({as:P,className:(0,r.default)(N.root,A),ref:t},R),{},{ownerState:L,children:U}))})},738633:function(a,t,e){"use strict";e.d(t,{$:function(){return o}});var n=e(344443),s=e(92358);function o(a){return(0,s.ZP)("MuiAvatar",a)}var i=(0,n.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);t.Z=i},383209:function(a,t,e){"use strict";e.r(t),e.d(t,{default:function(){return r}}),e(470079);var n,s=e(123873),o={en:{description:"The unstyled component library will get a stable release, lots of new components, and even better DX in 2024.",location:"/docs/pages/blog/base-ui-2024-plans.md",rendered:['<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="error-icon" viewBox="0 0 20 20">\n      <path fill-rule="evenodd" d="M2 7.4v5.2a2 2 0 0 0 .586 1.414l3.4 3.4A2 2 0 0 0 7.4 18h5.2a2 2 0 0 0 1.414-.586l3.4-3.4A2 2 0 0 0 18 12.6V7.4a2 2 0 0 0-.586-1.414l-3.4-3.4A2 2 0 0 0 12.6 2H7.4a2 2 0 0 0-1.414.586l-3.4 3.4A2 2 0 0 0 2 7.4Zm11.03-.43a.75.75 0 0 1 0 1.06L11.06 10l1.97 1.97a.75.75 0 1 1-1.06 1.06L10 11.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L8.94 10 6.97 8.03a.75.75 0 0 1 1.06-1.06L10 8.94l1.97-1.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="warning-icon" viewBox="0 0 20 20">\n      <path d="M2.33 17a.735.735 0 0 1-.665-.375.631.631 0 0 1-.094-.375.898.898 0 0 1 .115-.396L9.353 3.062a.621.621 0 0 1 .281-.27.85.85 0 0 1 .729 0 .622.622 0 0 1 .281.27l7.667 12.792c.07.125.108.257.114.396a.63.63 0 0 1-.093.375.842.842 0 0 1-.271.27.728.728 0 0 1-.394.105H2.33Zm7.664-2.5c.211 0 .39-.072.536-.214a.714.714 0 0 0 .218-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.531-.22.736.736 0 0 0-.536.215.714.714 0 0 0-.219.531c0 .212.072.39.215.536.143.146.32.219.531.219Zm0-2.5c.211 0 .39-.072.536-.216a.72.72 0 0 0 .218-.534v-2.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.531-.216.734.734 0 0 0-.536.216.72.72 0 0 0-.219.534v2.5c0 .212.072.39.215.534a.72.72 0 0 0 .531.216Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="success-icon" viewBox="0 0 20 20">\n      <path d="m8.938 10.875-1.25-1.23a.718.718 0 0 0-.521-.228.718.718 0 0 0-.521.229.73.73 0 0 0 0 1.062l1.77 1.771c.153.153.327.23.521.23a.718.718 0 0 0 .521-.23l3.896-3.896a.73.73 0 0 0 0-1.062.718.718 0 0 0-.52-.23.718.718 0 0 0-.521.23l-3.376 3.354ZM10 18a7.796 7.796 0 0 1-3.104-.625 8.065 8.065 0 0 1-2.552-1.719 8.064 8.064 0 0 1-1.719-2.552A7.797 7.797 0 0 1 2 10c0-1.111.208-2.15.625-3.115a8.064 8.064 0 0 1 4.27-4.26A7.797 7.797 0 0 1 10 2c1.111 0 2.15.208 3.115.625a8.096 8.096 0 0 1 4.26 4.26C17.792 7.851 18 8.89 18 10a7.797 7.797 0 0 1-.625 3.104 8.066 8.066 0 0 1-4.26 4.271A7.774 7.774 0 0 1 10 18Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="info-icon" viewBox="0 0 20 20">\n      <path d="M9.996 14c.21 0 .39-.072.535-.216a.72.72 0 0 0 .219-.534v-3.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.532-.216.734.734 0 0 0-.535.216.72.72 0 0 0-.219.534v3.5c0 .213.071.39.214.534a.72.72 0 0 0 .532.216Zm0-6.5c.21 0 .39-.071.535-.214a.714.714 0 0 0 .219-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.532-.219.736.736 0 0 0-.535.214.714.714 0 0 0-.219.532c0 .21.071.39.214.535.143.146.32.219.532.219Zm.01 10.5a7.81 7.81 0 0 1-3.11-.625 8.065 8.065 0 0 1-2.552-1.719 8.066 8.066 0 0 1-1.719-2.551A7.818 7.818 0 0 1 2 9.99c0-1.104.208-2.14.625-3.105a8.066 8.066 0 0 1 4.27-4.26A7.818 7.818 0 0 1 10.009 2a7.75 7.75 0 0 1 3.106.625 8.083 8.083 0 0 1 4.26 4.265A7.77 7.77 0 0 1 18 9.994a7.81 7.81 0 0 1-.625 3.11 8.066 8.066 0 0 1-1.719 2.552 8.083 8.083 0 0 1-2.546 1.719 7.77 7.77 0 0 1-3.104.625Z"/>\n      </symbol>\n      </svg>','\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n        <symbol id="anchor-link-icon" viewBox="0 0 12 6">\n          <path d="M8.9176 0.083252H7.1676C6.84677 0.083252 6.58427 0.345752 6.58427 0.666585C6.58427 0.987419 6.84677 1.24992 7.1676 1.24992H8.9176C9.8801 1.24992 10.6676 2.03742 10.6676 2.99992C10.6676 3.96242 9.8801 4.74992 8.9176 4.74992H7.1676C6.84677 4.74992 6.58427 5.01242 6.58427 5.33325C6.58427 5.65409 6.84677 5.91659 7.1676 5.91659H8.9176C10.5276 5.91659 11.8343 4.60992 11.8343 2.99992C11.8343 1.38992 10.5276 0.083252 8.9176 0.083252ZM3.6676 2.99992C3.6676 3.32075 3.9301 3.58325 4.25094 3.58325H7.75094C8.07177 3.58325 8.33427 3.32075 8.33427 2.99992C8.33427 2.67909 8.07177 2.41659 7.75094 2.41659H4.25094C3.9301 2.41659 3.6676 2.67909 3.6676 2.99992ZM4.83427 4.74992H3.08427C2.12177 4.74992 1.33427 3.96242 1.33427 2.99992C1.33427 2.03742 2.12177 1.24992 3.08427 1.24992H4.83427C5.1551 1.24992 5.4176 0.987419 5.4176 0.666585C5.4176 0.345752 5.1551 0.083252 4.83427 0.083252H3.08427C1.47427 0.083252 0.167603 1.38992 0.167603 2.99992C0.167603 4.60992 1.47427 5.91659 3.08427 5.91659H4.83427C5.1551 5.91659 5.4176 5.65409 5.4176 5.33325C5.4176 5.01242 5.1551 4.74992 4.83427 4.74992Z" />\n        </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n      <path d="M22.8481 4C22.8481 2.9 21.9481 2 20.8481 2H4.84814C3.74814 2 2.84814 2.9 2.84814 4V16C2.84814 17.1 3.74814 18 4.84814 18H18.8481L22.8481 22V4ZM16.8481 11H13.8481V14C13.8481 14.55 13.3981 15 12.8481 15C12.2981 15 11.8481 14.55 11.8481 14V11H8.84814C8.29814 11 7.84814 10.55 7.84814 10C7.84814 9.45 8.29814 9 8.84814 9H11.8481V6C11.8481 5.45 12.2981 5 12.8481 5C13.3981 5 13.8481 5.45 13.8481 6V9H16.8481C17.3981 9 17.8481 9.45 17.8481 10C17.8481 10.55 17.3981 11 16.8481 11Z" />\n      </symbol>\n      </svg>','<p>The <a href="/blog/introducing-base-ui/">story of Base\xa0UI</a> began several years ago—long before headless React component libraries skyrocketed in popularity—when we started to imagine a world in which Material\xa0UI could exist without Material Design.</p>\n<p>We&#39;re super excited to share that this dream is becoming a reality!\nThis year will see a lot of investment in Base\xa0UI as we expand the team and focus hard on a stable release (tentatively planned for late 2024), which will come full of new components, features, and improvements.</p>\n<p>Let&#39;s walk through some of the things we&#39;re cooking up.</p>\n<h2 id="a-larger-set-of-components"><a href="#a-larger-set-of-components" class="title-link-to-anchor">A larger set of components<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="a-larger-set-of-components"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>Base\xa0UI today offers a modest set of components and hooks, including some slightly more complex ones such as <a href="/base-ui/react-autocomplete/">Autocomplete</a> and <a href="/base-ui/react-number-input/">Number Input</a>.\nHowever, we&#39;re aware that the package is still missing many primitive components that developers would need in order to adopt it for real-world applications.\nFear not, because we&#39;re working hard to ship more components with the stable release, including:</p>\n<table>\n<thead>\n<tr>\n<th align="left">Components to be added</th>\n<th align="right"></th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">Accordion</td>\n<td align="right"><a href="https://github.com/mui/base-ui/issues/25">View&nbsp;the&nbsp;GitHub&nbsp;issue&nbsp;→</a></td>\n</tr>\n<tr>\n<td align="left">Alert Dialog</td>\n<td align="right"><a href="https://github.com/mui/base-ui/issues/83">View the GitHub issue&nbsp;→</a></td>\n</tr>\n<tr>\n<td align="left">Checkbox</td>\n<td align="right"><a href="https://github.com/mui/base-ui/issues/24">View the GitHub issue&nbsp;→</a></td>\n</tr>\n<tr>\n<td align="left">Collapsible</td>\n<td align="right"><a href="https://github.com/mui/base-ui/issues/84">View the GitHub issue&nbsp;→</a></td>\n</tr>\n<tr>\n<td align="left">Drawer</td>\n<td align="right"><a href="https://github.com/mui/base-ui/issues/38">View the GitHub issue&nbsp;→</a></td>\n</tr>\n<tr>\n<td align="left">Radio Group</td>\n<td align="right"><a href="https://github.com/mui/base-ui/issues/26">View the GitHub issue&nbsp;→</a></td>\n</tr>\n<tr>\n<td align="left">Tooltip</td>\n<td align="right"><a href="https://github.com/mui/base-ui/issues/32">View the GitHub issue&nbsp;→</a></td>\n</tr>\n</tbody></table>\n<p>And potentially more!\nWe&#39;d love for you to chime in and help us prioritize, so keep an eye on <a href="https://github.com/mui/base-ui/issues">the open issues</a>.</p>\n<h2 id="improved-customization-api"><a href="#improved-customization-api" class="title-link-to-anchor">Improved customization API<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="improved-customization-api"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>Currently, Base\xa0UI components can be customized to your heart&#39;s content using the <code>slots</code> and <code>slotProps</code> props.\n(Read more about them in the &quot;<a href="/base-ui/guides/overriding-component-structure/">Overriding component structure</a>&quot; guide.)</p>\n<div class="MuiCode-root"><pre><code class="language-tsx"><span class="token comment">// Example of the slots prop</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span> <span class="token attr-name">slots</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> listbox<span class="token operator">:</span> <span class="token string">\'ol\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>First option<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Option</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>First option<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>First option<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Option</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Option</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Second option<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Second option<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Option</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Select</span></span><span class="token punctuation">></span></span>\n\n<span class="token comment">// Example of the slotProps prop</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Badge</span></span> <span class="token attr-name">slotProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> badge<span class="token operator">:</span> <span class="token punctuation">{</span> className<span class="token operator">:</span> <span class="token string">\'my-badge\'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<p>This API, while powerful, has proven to be less than ideal in some instances.\nMost notably, it&#39;s too lengthy and complicated to write and read when used with libraries such as Tailwind\xa0CSS.\nAdditionally, since the <code>slots</code> and the corresponding <code>slotProps</code> are not related in terms of TypeScript types, it&#39;s possible to introduce bugs or have the compiler complain about valid code.</p>\n<p>To address these issues, we&#39;re considering adopting a new API that would assign a discrete subcomponent to each DOM node—the pattern favored by many other headless component libraries (think: <code>&lt;Slider.Track /&gt;</code>, <code>&lt;Slider.Thumb /&gt;</code>, etc.).\nThis pattern has the potential to radically improve the customization experience, both for styles and structure.</p>\n<p>We are still fleshing out the API and implementation details.\nIf you have any questions or remarks about this change, chime in on <a href="https://github.com/mui/base-ui/discussions/157">the RFC on GitHub</a>.</p>\n<p>We know that a significant number of projects depend on the existing API, and we want to assure you that one of our top priorities is to provide a smooth migration experience.</p>\n<h2 id="more-thorough-animation-support"><a href="#more-thorough-animation-support" class="title-link-to-anchor">More thorough animation support<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="more-thorough-animation-support"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>Animation is a key element for adding delight to any application.\nWe&#39;ve already kicked off work on animation support by releasing the <a href="/base-ui/react-transitions/#css-transition">CSS Transition</a> and <a href="/base-ui/react-transitions/#css-animation">CSS Animation</a> components, as well as the <code>useTransitionTrigger</code> and <code>useTransitionStateManager</code> hooks.\nThey&#39;re currently available for use with the Popup, Menu, and Select, and the plan is to extend support to more components while also adding more features.</p>\n<iframe src="https://codesandbox.io/embed/3pdm56?view=preview&module=%2Fdemo.tsx&hidenavigation=1"\n     style="width:100%; height: 300px; border:0; border-radius: 4px; overflow:hidden;"\n     title="/blog/base-ui-2024-plans/"\n     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"\n     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"\n   ></iframe>\n\n<p class="blog-description">The CSS Animation transition is exaggerated here for the sake of demonstration.</p>\n\n<h2 id="getting-many-issues-out-of-the-way"><a href="#getting-many-issues-out-of-the-way" class="title-link-to-anchor">Getting many issues out of the way<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="getting-many-issues-out-of-the-way"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>The core of what Base\xa0UI strives to deliver out of the box is first-class accessibility and an intuitive API for extensive customization.\nWe&#39;ve earmarked several issues we want to tackle before the stable release in areas such as keyboard navigation, better ARIA support, focus styles, and more.</p>\n<h2 id="a-more-independent-product"><a href="#a-more-independent-product" class="title-link-to-anchor">A more independent product<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="a-more-independent-product"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>So far, all Base\xa0UI-related development has happened within the <a href="https://github.com/mui/material-ui">Material\xa0UI GitHub repository</a>.\nThat made a lot of sense in the beginning because we didn&#39;t intend for Base\xa0UI to be a standalone product at the time.\nAs a result of this early decision, we&#39;ve seen that some developers are hesitant to try it out because of the apparent association with Material Design.\nRest assured that Base\xa0UI <em>is</em> a standalone library, and it doesn&#39;t come packaged with <em>any</em> default styles or themes.</p>\n<img alt="Material\xa0UI vs. Base\xa0UI: independent but related products." src="/static/blog/base-ui-2024-plans/material-vs-base.png" width="1200" height="450" loading="lazy" />\n\n<p>Base\xa0UI is no longer <em>merely</em> &quot;Material\xa0UI without the styles&quot;—as we&#39;ve seen with developer trends over the last few years, the potential for growth and adoption of headless components could actually dwarf Material\xa0UI in the near future.\nTo acknowledge that Base\xa0UI has the potential to outgrow Material\xa0UI, we plan to move it to its own dedicated GitHub repository for more focused communication and collaboration with the community that&#39;s growing around it.</p>\n<aside class="MuiCallout-root MuiCallout-success">\n            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">\n<use class="MuiCode-copied-icon" xlink:href="#success-icon" />\n</svg>\n            <div class="MuiCallout-content">\n            <p>The new repository is live－<a href="https://github.com/mui/base-ui">check it out on GitHub</a>!</p>\n\n</div></aside><h2 id="help-us-on-the-ride"><a href="#help-us-on-the-ride" class="title-link-to-anchor">Help us on the ride<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="help-us-on-the-ride"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>We&#39;d love to hear your feedback.\nThe best place to share your ideas and requests is in <a href="https://github.com/mui/base-ui/issues">the GitHub repository</a>.\nCheck out the existing issues and add your thoughts, and feel free to open your own issue if you don&#39;t see your concerns addressed elsewhere.</p>\n<p>Happy development! \uD83D\uDC4B</p>\n'],toc:[{text:"A larger set of components",level:2,hash:"a-larger-set-of-components",children:[]},{text:"Improved customization API",level:2,hash:"improved-customization-api",children:[]},{text:"More thorough animation support",level:2,hash:"more-thorough-animation-support",children:[]},{text:"Getting many issues out of the way",level:2,hash:"getting-many-issues-out-of-the-way",children:[]},{text:"A more independent product",level:2,hash:"a-more-independent-product",children:[]},{text:"Help us on the ride",level:2,hash:"help-us-on-the-ride",children:[]}],title:"An exciting year ahead for Base\xa0UI",headers:{title:"An exciting year ahead for Base\xa0UI",description:"The unstyled component library will get a stable release, lots of new components, and even better DX in 2024.",date:"2024-02-13T00:00:00.000Z",authors:["danilo-leal","michaldudak","colmtuite","oliviertassinari"],tags:["Base UI","Product"],manualCard:"true",components:[],hooks:[]}}},i=e(735250);function r(){return n||(n=(0,i.jsx)(s.Z,{docs:o}))}},772568:function(a,t,e){"use strict";e.d(t,{Z:function(){return g}});var n,s,o=e(778521),i=e(915033),r=e.n(i),c=e(253405),l=e(859861),p=e(621234),u=e(170027),d=e(735250);function h(){return(0,d.jsx)(l.Z,{sx:{height:{xs:520,sm:278,md:269}}})}var m=r()(function(){return e.e(43825).then(e.bind(e,543825))},{loading:h,loadableGenerated:{webpack:function(){return[543825]}}});function g(){var a=(0,c.YD)({triggerOnce:!0,threshold:0,rootMargin:"500px"}),t=a.ref,e=a.inView;return(0,d.jsx)(l.Z,{ref:t,sx:function(a){return(0,o.Z)({background:"linear-gradient(180deg, #FFF 50%, \n          ".concat((a.vars||a).palette.primary[50]," 100%)\n        ")},a.applyDarkStyles({background:"linear-gradient(180deg, ".concat((a.vars||a).palette.primaryDark[900]," 50%,\n          ").concat((0,p.Fq)(a.palette.primary[900],.2)," 100%)\n          ")}))},children:(0,d.jsx)(u.Z,{bg:"transparent",cozy:!0,children:e?n||(n=(0,d.jsx)(m,{})):s||(s=(0,d.jsx)(h,{}))})})}},170027:function(a,t,e){"use strict";var n=e(778521),s=e(614030),o=e(577903),i=e(408011),r=e.n(i),c=e(470079),l=e(258350),p=e(859861),u=e(621234),d=e(735250),h=["bg","children","sx","cozy","noPaddingBottom"],m={white:{light:"common.white",dark:"primaryDark.900"},comfort:{light:"grey.50",dark:"primaryDark.900"},dim:{light:"primaryDark.700",dark:"primaryDark.700"},transparent:{light:"transparent",dark:"transparent"}},g=c.forwardRef(function(a,t){var e=a.bg,i=void 0===e?"white":e,c=a.children,g=a.sx,b=a.cozy,v=void 0!==b&&b,f=a.noPaddingBottom,y=void 0!==f&&f,k=(0,o.Z)(a,h);return(0,d.jsx)(p.Z,(0,n.Z)((0,n.Z)({ref:t},k),{},{sx:[function(a){return(0,n.Z)((0,n.Z)({},"gradient"===i?(0,n.Z)({background:"linear-gradient(#FFF 0%, ".concat((a.vars||a).palette.primary[50]," 100%)")},a.applyDarkStyles({background:"linear-gradient(".concat((a.vars||a).palette.primaryDark[900]," 0%, ").concat((0,u.Fq)(a.palette.primary[900],.2)," 100%)")})):(0,n.Z)({bgcolor:m[i].light},a.applyDarkStyles({bgcolor:m[i].dark}))),{},{py:v?{xs:6,sm:10,md:12}:{xs:4,sm:12,md:14},pb:y?"0 !important":void 0,overflow:"hidden"})}].concat((0,s.Z)(r()(g)?g:[g])),children:(0,d.jsx)(l.Z,{children:c})}))});t.Z=g},123873:function(a,t,e){"use strict";e.d(t,{Z:function(){return R},o:function(){return H}});var n,s,o,i,r,c=e(778521),l=e(234046),p=e(796801),u=e.n(p),d=e(470079),h=e(502894),m=e(621234),g=e(302312),b=e(389136),v=e(331116),f=e(885950),y=e(781097),k=e(502501),w=e(248247),x=e(259106),Z=e(95820),C=e(39253),j=e(318304),M=e(772568),A=e(284384),S=e(597683),P=e(42141),D=e(905636),I=e(215129),B=e(735250),H={oliviertassinari:{name:"Olivier Tassinari",avatar:"https://avatars.githubusercontent.com/u/3165635",github:"oliviertassinari"},mbrookes:{name:"Matt Brookes",avatar:"https://avatars.githubusercontent.com/u/357702",github:"mbrookes"},eps1lon:{name:"Sebastian Silbermann",avatar:"https://avatars.githubusercontent.com/u/12292047",github:"eps1lon"},mnajdova:{name:"Marija Najdova",avatar:"https://avatars.githubusercontent.com/u/4512430",github:"mnajdova"},michaldudak:{name:"Michał Dudak",avatar:"https://avatars.githubusercontent.com/u/4696105",github:"michaldudak"},siriwatknp:{name:"Siriwat Kunaporn",avatar:"https://avatars.githubusercontent.com/u/18292247",github:"siriwatknp"},"danilo-leal":{name:"Danilo Leal",avatar:"https://avatars.githubusercontent.com/u/67129314",github:"danilo-leal"},m4theushw:{name:"Matheus Wichman",avatar:"https://avatars.githubusercontent.com/u/42154031",github:"m4theushw"},flaviendelangle:{name:"Flavien Delangle",avatar:"https://avatars.githubusercontent.com/u/3309670",github:"flaviendelangle"},DanailH:{name:"Danail Hadjiatanasov",avatar:"https://avatars.githubusercontent.com/u/5858539",github:"DanailH"},alexfauquette:{name:"Alexandre Fauquette",avatar:"https://avatars.githubusercontent.com/u/45398769",github:"alexfauquette"},samuelsycamore:{name:"Sam Sycamore",avatar:"https://avatars.githubusercontent.com/u/71297412",github:"samuelsycamore"},josefreitas:{name:"Jos\xe9 Freitas",avatar:"https://avatars.githubusercontent.com/u/550141",github:"joserodolfofreitas"},cherniavskii:{name:"Andrew Cherniavskyi",avatar:"https://avatars.githubusercontent.com/u/13808724",github:"cherniavskii"},mikailaread:{name:"Mikaila Read",avatar:"https://avatars.githubusercontent.com/u/76401606",github:"mikailaread"},prakhargupta:{name:"Prakhar Gupta",avatar:"https://avatars.githubusercontent.com/u/92228082",github:"prakhargupta1"},richbustos:{name:"Rich Bustos",avatar:"https://avatars.githubusercontent.com/u/92274722",github:"richbustos"},colmtuite:{name:"Colm Tuite",avatar:"https://avatars.githubusercontent.com/u/805073",github:"colmtuite"},diegoandai:{name:"Diego Andai",avatar:"https://avatars.githubusercontent.com/u/16889233",github:"DiegoAndai"},DavidCnoops:{name:"David Cnoops",avatar:"https://avatars.githubusercontent.com/u/28001064",github:"DavidCnoops"},brijeshb42:{name:"Brijesh Bittu",avatar:"https://avatars.githubusercontent.com/u/717550?",github:"brijeshb42"}},T={back:"TopLayoutBlog-back",time:"TopLayoutBlog-time",container:"TopLayoutBlog-container"},F=(0,h.ZP)("div")(function(a){var t=a.theme;return{display:"flex",flexWrap:"wrap",marginBottom:t.spacing(2),"& .author":{display:"flex",alignItems:"center",paddingBottom:t.spacing(2),paddingRight:t.spacing(3),"& .MuiAvatar-root":{marginRight:t.spacing(1)}}}}),z=(0,h.ZP)("div")(function(a){var t,e,n=a.theme;return e={flexGrow:1,background:"linear-gradient(180deg, ".concat((n.vars||n).palette.grey[50]," 0%, #FFFFFF 100%)"),backgroundSize:"100% 500px",backgroundRepeat:"no-repeat"},(0,l.Z)(e,"& .".concat(T.back),{display:"flex",alignItems:"center",marginBottom:n.spacing(2),marginLeft:n.spacing(-1)}),(0,l.Z)(e,"& .".concat(T.container),(t={paddingTop:80,marginBottom:n.spacing(12),maxWidth:"calc(".concat(692,"px + ").concat(n.spacing(4),")")},(0,l.Z)(t,n.breakpoints.up("md"),{maxWidth:"calc(".concat(692,"px + ").concat(n.spacing(6),")")}),(0,l.Z)(t,n.breakpoints.up("lg"),{maxWidth:"calc(".concat(692,"px + ").concat(n.spacing(16),")")}),(0,l.Z)(t,"& h1",{marginBottom:n.spacing(3)}),t)),(0,l.Z)(e,"& .markdown-body",{lineHeight:1.7,"& img, & video":{border:"1px solid",borderColor:(n.vars||n).palette.grey[200],borderRadius:12,display:"block",margin:"auto",marginBottom:16},"& figure":{margin:0,padding:0,marginBottom:16,"& img, & video":{marginBottom:8}},"& figcaption":{color:(n.vars||n).palette.text.tertiary,fontSize:n.typography.pxToRem(14),textAlign:"center"},"& strong":{color:(n.vars||n).palette.grey[900]},"& summary":{padding:8,fontSize:n.typography.pxToRem(14),fontWeight:n.typography.fontWeightMedium,color:(n.vars||n).palette.grey[900]},"& details":{paddingLeft:16,paddingRight:16,background:(0,m.Fq)(n.palette.grey[50],.5),border:"1px solid",borderRadius:10,borderColor:(n.vars||n).palette.grey[200],transitionProperty:"all",transitionTiming:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"200ms","&:hover, &:focus-visible":{background:(n.vars||n).palette.grey[50],borderColor:(n.vars||n).palette.grey[300]}},"& th":{width:"100%",textAlign:"left",borderBottom:"3px solid rgba(62, 80, 96, 0.2) !important"},"& .blog-description":{fontSize:n.typography.pxToRem(13),marginTop:8,textAlign:"center",color:(n.vars||n).palette.grey[700],"& a":{color:"inherit",textDecoration:"underline"}},"& .MuiCode-root + .blog-description":{marginTop:-12}}),(0,l.Z)(e,"& .".concat(T.time),(0,c.Z)((0,c.Z)({color:(n.vars||n).palette.text.secondary},n.typography.caption),{},{fontWeight:500})),e},function(a){var t=a.theme;return t.applyDarkStyles({background:"linear-gradient(180deg, ".concat((0,m.Fq)(t.palette.primary[900],.2)," 0%, ").concat((t.vars||t).palette.primaryDark[900]," 100%)"),backgroundSize:"100% 1000px",backgroundRepeat:"no-repeat","& .markdown-body":{"& strong":{color:(t.vars||t).palette.grey[100]},"& summary":{color:(t.vars||t).palette.grey[300]},"& img, & video":{borderColor:(0,m.Fq)(t.palette.primaryDark[600],.5)},"& details":{background:(0,m.Fq)(t.palette.primary[900],.3),borderColor:(t.vars||t).palette.primaryDark[700],"&:hover, &:focus-visible":{background:(0,m.Fq)(t.palette.primary[900],.4),borderColor:(t.vars||t).palette.primaryDark[500]}},"& .blog-description":{color:(t.vars||t).palette.grey[500]}}})});function R(a){var t=(0,g.Z)(),e=a.className,l=a.docs,p=a.demos,h=a.demoComponents,m=a.srcComponents,R=l.en,U=R.description,q=R.rendered,V=R.title,W=R.headers,L=V||W.title,N=(0,b.useRouter)(),O=N.pathname.replace(/(.*)\/(.*)/,"$2"),G=(0,P.ln)(N.asPath).canonicalAsServer,_="true"===W.manualCard?"/static/blog/".concat(O,"/card.png"):"/edge-functions/og-image/?title=".concat(W.cardTitle||L,"&authors=").concat(W.authors.map(function(a){var t=H[a],e=t.github,n=t.name;return"".concat(n," @").concat(e)}).join(","),"&product=Blog");return(0,B.jsxs)(x.Z,{children:[n||(n=(0,B.jsx)(Z.Z,{})),(0,B.jsxs)(w.Z,{title:"".concat(L," - MUI"),description:U,largeCard:!0,disableAlternateLocale:!0,card:_,type:"article",children:[(0,B.jsx)("meta",{name:"author",content:W.authors.map(function(a){return H[a].name}).join(", ")}),(0,B.jsx)("meta",{property:"article:published_time",content:W.date}),(0,B.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:u()({"@context":"https://schema.org","@type":"Article",publisher:{"@type":"Organization",name:"MUI blog",url:"https://mui.com/blog/",logo:{"@type":"ImageObject",url:"https://mui.com/static/icons/512x512.png"}},author:{"@type":"Person",name:H[W.authors[0]].name,image:{"@type":"ImageObject",url:"".concat(H[W.authors[0]].avatar,"?s=",250),width:250,height:250},sameAs:["https://github.com/".concat(H[W.authors[0]].github)]},headline:L,url:"https://mui.com".concat(G),datePublished:W.date,dateModified:W.date,image:{"@type":"ImageObject",url:_,width:1280,height:640},keywords:W.tags.join(", "),description:U,mainEntityOfPage:{"@type":"WebPage","@id":"https://mui.com/blog/"}})}})]}),(0,B.jsxs)(z,{className:e,children:[(0,B.jsxs)(C.Z,{component:"main",className:T.container,children:[(0,B.jsxs)(I.r,(0,c.Z)((0,c.Z)({href:D.Z.blog},D.Z.blog.startsWith("http")&&{rel:"nofollow"}),{},{color:"primary",variant:"body2",className:T.back,children:[(0,B.jsx)(v.default,{fontSize:"small",sx:{mr:.5}}),"Back to blog"]})),W.title?(0,B.jsxs)(d.Fragment,{children:[(0,B.jsx)("time",{dateTime:W.date,className:T.time,children:new Intl.DateTimeFormat("en",{weekday:"long",year:"numeric",month:"short",day:"numeric"}).format(new Date(W.date))}),(0,B.jsx)(A.Z,{children:(0,B.jsx)("h1",{children:W.title})}),(0,B.jsx)(F,{children:W.authors.map(function(a){return(0,B.jsxs)("div",{className:"author",children:[(0,B.jsx)(k.Z,{sx:{width:36,height:36},alt:"",src:"".concat(H[a].avatar,"?s=",36),srcSet:"".concat(H[a].avatar,"?s=").concat(72," 2x, ").concat(H[a].avatar,"?s=").concat(108," 3x")}),(0,B.jsxs)("div",{children:[(0,B.jsx)(y.Z,{variant:"body2",fontWeight:"500",children:H[a].name}),(0,B.jsxs)(I.r,{href:"https://github.com/".concat(H[a].github),target:"_blank",rel:"noopener",color:"primary",variant:"body2",sx:{fontWeight:500},children:["@",H[a].github]})]})]},a)})})]}):null,q.map(function(a,e){return(0,B.jsx)(S.Z,{demos:p,demoComponents:h,srcComponents:m,renderedMarkdown:a,disableAd:!0,localizedDoc:l.en,renderedMarkdownOrDemo:a,theme:t,WrapperComponent:d.Fragment},e)})]}),s||(s=(0,B.jsx)(f.Z,{})),o||(o=(0,B.jsx)(M.Z,{})),i||(i=(0,B.jsx)(f.Z,{})),r||(r=(0,B.jsx)(j.Z,{}))]})]})}},158706:function(a,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/base-ui-2024-plans",function(){return e(383209)}])},331116:function(a,t,e){"use strict";var n=e(11234);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(e(122268)),o=e(735250);t.default=(0,s.default)((0,o.jsx)("path",{d:"M14.71 6.71a.996.996 0 0 0-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41"}),"ChevronLeftRounded")}},function(a){a.O(0,[49774,9535,73976,97146,59727,85925,17376,41373,15686,34800,22842,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,16067,40332,97683,83030,92888,40179],function(){return a(a.s=158706)}),_N_E=a.O()}]);