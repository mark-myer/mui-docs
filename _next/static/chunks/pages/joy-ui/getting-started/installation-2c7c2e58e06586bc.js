(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19635,39519],{333897:function(n,a,t){var e=t(915012),s=/^\s+/;n.exports=function(n){return n?n.slice(0,e(n)+1).replace(s,""):n}},915012:function(n){var a=/\s/;n.exports=function(n){for(var t=n.length;t--&&a.test(n.charAt(t)););return t}},889678:function(n,a,t){var e=t(706627),s=t(885365),o=t(67948),c=Math.max,i=Math.min;n.exports=function(n,a,t){var l,r,p,u,d,h,f=0,m=!1,g=!1,v=!0;if("function"!=typeof n)throw TypeError("Expected a function");function y(a){var t=l,e=r;return l=r=void 0,f=a,u=n.apply(e,t)}function k(n){var t=n-h,e=n-f;return void 0===h||t>=a||t<0||g&&e>=p}function b(){var n,t,e,o=s();if(k(o))return C(o);d=setTimeout(b,(n=o-h,t=o-f,e=a-n,g?i(e,p-t):e))}function C(n){return(d=void 0,v&&l)?y(n):(l=r=void 0,u)}function w(){var n,t=s(),e=k(t);if(l=arguments,r=this,h=t,e){if(void 0===d)return f=n=h,d=setTimeout(b,a),m?y(n):u;if(g)return clearTimeout(d),d=setTimeout(b,a),y(h)}return void 0===d&&(d=setTimeout(b,a)),u}return a=o(a)||0,e(t)&&(m=!!t.leading,p=(g="maxWait"in t)?c(o(t.maxWait)||0,a):p,v="trailing"in t?!!t.trailing:v),w.cancel=function(){void 0!==d&&clearTimeout(d),f=0,l=h=r=d=void 0},w.flush=function(){return void 0===d?u:C(s())},w}},706627:function(n){n.exports=function(n){var a=typeof n;return null!=n&&("object"==a||"function"==a)}},885365:function(n,a,t){var e=t(573401);n.exports=function(){return e.Date.now()}},123763:function(n,a,t){var e=t(889678),s=t(706627);n.exports=function(n,a,t){var o=!0,c=!0;if("function"!=typeof n)throw TypeError("Expected a function");return s(t)&&(o="leading"in t?!!t.leading:o,c="trailing"in t?!!t.trailing:c),e(n,a,{leading:o,maxWait:a,trailing:c})}},67948:function(n,a,t){var e=t(333897),s=t(706627),o=t(42848),c=0/0,i=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,r=/^0o[0-7]+$/i,p=parseInt;n.exports=function(n){if("number"==typeof n)return n;if(o(n))return c;if(s(n)){var a="function"==typeof n.valueOf?n.valueOf():n;n=s(a)?a+"":a}if("string"!=typeof n)return 0===n?n:+n;n=e(n);var t=l.test(n);return t||r.test(n)?p(n.slice(2),t?2:8):i.test(n)?c:+n}},880329:function(n,a,t){"use strict";t.r(a),t.d(a,{default:function(){return u}});var e={};t.r(e),t.d(e,{demoComponents:function(){return l},demos:function(){return i},docs:function(){return c},srcComponents:function(){return r}});var s=t(778521);t(470079);var o=t(652755),c={en:{description:"Install Joy\xa0UI, a library of beautifully designed React UI components.",location:"/docs/data/joy/getting-started/installation/installation.md",rendered:['<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="error-icon" viewBox="0 0 20 20">\n      <path fill-rule="evenodd" d="M2 7.4v5.2a2 2 0 0 0 .586 1.414l3.4 3.4A2 2 0 0 0 7.4 18h5.2a2 2 0 0 0 1.414-.586l3.4-3.4A2 2 0 0 0 18 12.6V7.4a2 2 0 0 0-.586-1.414l-3.4-3.4A2 2 0 0 0 12.6 2H7.4a2 2 0 0 0-1.414.586l-3.4 3.4A2 2 0 0 0 2 7.4Zm11.03-.43a.75.75 0 0 1 0 1.06L11.06 10l1.97 1.97a.75.75 0 1 1-1.06 1.06L10 11.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L8.94 10 6.97 8.03a.75.75 0 0 1 1.06-1.06L10 8.94l1.97-1.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="warning-icon" viewBox="0 0 20 20">\n      <path d="M2.33 17a.735.735 0 0 1-.665-.375.631.631 0 0 1-.094-.375.898.898 0 0 1 .115-.396L9.353 3.062a.621.621 0 0 1 .281-.27.85.85 0 0 1 .729 0 .622.622 0 0 1 .281.27l7.667 12.792c.07.125.108.257.114.396a.63.63 0 0 1-.093.375.842.842 0 0 1-.271.27.728.728 0 0 1-.394.105H2.33Zm7.664-2.5c.211 0 .39-.072.536-.214a.714.714 0 0 0 .218-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.531-.22.736.736 0 0 0-.536.215.714.714 0 0 0-.219.531c0 .212.072.39.215.536.143.146.32.219.531.219Zm0-2.5c.211 0 .39-.072.536-.216a.72.72 0 0 0 .218-.534v-2.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.531-.216.734.734 0 0 0-.536.216.72.72 0 0 0-.219.534v2.5c0 .212.072.39.215.534a.72.72 0 0 0 .531.216Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="success-icon" viewBox="0 0 20 20">\n      <path d="m8.938 10.875-1.25-1.23a.718.718 0 0 0-.521-.228.718.718 0 0 0-.521.229.73.73 0 0 0 0 1.062l1.77 1.771c.153.153.327.23.521.23a.718.718 0 0 0 .521-.23l3.896-3.896a.73.73 0 0 0 0-1.062.718.718 0 0 0-.52-.23.718.718 0 0 0-.521.23l-3.376 3.354ZM10 18a7.796 7.796 0 0 1-3.104-.625 8.065 8.065 0 0 1-2.552-1.719 8.064 8.064 0 0 1-1.719-2.552A7.797 7.797 0 0 1 2 10c0-1.111.208-2.15.625-3.115a8.064 8.064 0 0 1 4.27-4.26A7.797 7.797 0 0 1 10 2c1.111 0 2.15.208 3.115.625a8.096 8.096 0 0 1 4.26 4.26C17.792 7.851 18 8.89 18 10a7.797 7.797 0 0 1-.625 3.104 8.066 8.066 0 0 1-4.26 4.271A7.774 7.774 0 0 1 10 18Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="info-icon" viewBox="0 0 20 20">\n      <path d="M9.996 14c.21 0 .39-.072.535-.216a.72.72 0 0 0 .219-.534v-3.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.532-.216.734.734 0 0 0-.535.216.72.72 0 0 0-.219.534v3.5c0 .213.071.39.214.534a.72.72 0 0 0 .532.216Zm0-6.5c.21 0 .39-.071.535-.214a.714.714 0 0 0 .219-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.532-.219.736.736 0 0 0-.535.214.714.714 0 0 0-.219.532c0 .21.071.39.214.535.143.146.32.219.532.219Zm.01 10.5a7.81 7.81 0 0 1-3.11-.625 8.065 8.065 0 0 1-2.552-1.719 8.066 8.066 0 0 1-1.719-2.551A7.818 7.818 0 0 1 2 9.99c0-1.104.208-2.14.625-3.105a8.066 8.066 0 0 1 4.27-4.26A7.818 7.818 0 0 1 10.009 2a7.75 7.75 0 0 1 3.106.625 8.083 8.083 0 0 1 4.26 4.265A7.77 7.77 0 0 1 18 9.994a7.81 7.81 0 0 1-.625 3.11 8.066 8.066 0 0 1-1.719 2.552 8.083 8.083 0 0 1-2.546 1.719 7.77 7.77 0 0 1-3.104.625Z"/>\n      </symbol>\n      </svg>','\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n        <symbol id="anchor-link-icon" viewBox="0 0 12 6">\n          <path d="M8.9176 0.083252H7.1676C6.84677 0.083252 6.58427 0.345752 6.58427 0.666585C6.58427 0.987419 6.84677 1.24992 7.1676 1.24992H8.9176C9.8801 1.24992 10.6676 2.03742 10.6676 2.99992C10.6676 3.96242 9.8801 4.74992 8.9176 4.74992H7.1676C6.84677 4.74992 6.58427 5.01242 6.58427 5.33325C6.58427 5.65409 6.84677 5.91659 7.1676 5.91659H8.9176C10.5276 5.91659 11.8343 4.60992 11.8343 2.99992C11.8343 1.38992 10.5276 0.083252 8.9176 0.083252ZM3.6676 2.99992C3.6676 3.32075 3.9301 3.58325 4.25094 3.58325H7.75094C8.07177 3.58325 8.33427 3.32075 8.33427 2.99992C8.33427 2.67909 8.07177 2.41659 7.75094 2.41659H4.25094C3.9301 2.41659 3.6676 2.67909 3.6676 2.99992ZM4.83427 4.74992H3.08427C2.12177 4.74992 1.33427 3.96242 1.33427 2.99992C1.33427 2.03742 2.12177 1.24992 3.08427 1.24992H4.83427C5.1551 1.24992 5.4176 0.987419 5.4176 0.666585C5.4176 0.345752 5.1551 0.083252 4.83427 0.083252H3.08427C1.47427 0.083252 0.167603 1.38992 0.167603 2.99992C0.167603 4.60992 1.47427 5.91659 3.08427 5.91659H4.83427C5.1551 5.91659 5.4176 5.65409 5.4176 5.33325C5.4176 5.01242 5.1551 4.74992 4.83427 4.74992Z" />\n        </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n      <path d="M22.8481 4C22.8481 2.9 21.9481 2 20.8481 2H4.84814C3.74814 2 2.84814 2.9 2.84814 4V16C2.84814 17.1 3.74814 18 4.84814 18H18.8481L22.8481 22V4ZM16.8481 11H13.8481V14C13.8481 14.55 13.3981 15 12.8481 15C12.2981 15 11.8481 14.55 11.8481 14V11H8.84814C8.29814 11 7.84814 10.55 7.84814 10C7.84814 9.45 8.29814 9 8.84814 9H11.8481V6C11.8481 5.45 12.2981 5 12.8481 5C13.3981 5 13.8481 5.45 13.8481 6V9H16.8481C17.3981 9 17.8481 9.45 17.8481 10C17.8481 10.55 17.3981 11 16.8481 11Z" />\n      </symbol>\n      </svg>','<h1>Installation</h1><p class="description">Install Joy\xa0UI, a library of beautifully designed React UI components.</p>\n\n<h2 id="default-installation"><a href="#default-installation" class="title-link-to-anchor">Default installation<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="default-installation"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>Run one of the following commands to add Joy\xa0UI to your project:</p>\n<aside class="MuiCallout-root MuiCallout-info">\n            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">\n<use class="MuiCode-copied-icon" xlink:href="#info-icon" />\n</svg>\n            <div class="MuiCallout-content">\n            <p>The <code>next</code> tag is used to download the latest <b>pre-release</b>, v6 version. Remove it to get the current stable version.</p>\n\n</div></aside><!-- #default-branch-switch -->\n\n',{type:"codeblock",data:[{language:"bash",tab:"npm",code:"npm install @mui/joy@next @emotion/react @emotion/styled"},{language:"bash",tab:"yarn",code:"yarn add @mui/joy@next @emotion/react @emotion/styled"},{language:"bash",tab:"pnpm",code:"pnpm add @mui/joy@next @emotion/react @emotion/styled"}],storageKey:"package-manager"},'<h3 id="peer-dependencies"><a href="#peer-dependencies" class="title-link-to-anchor">Peer dependencies<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="peer-dependencies"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><!-- #react-peer-version -->\n\n<p>Please note that <a href="https://www.npmjs.com/package/react">react</a> and <a href="https://www.npmjs.com/package/react-dom">react-dom</a> are peer dependencies, meaning you should ensure they are installed before installing Joy\xa0UI.</p>\n<div class="MuiCode-root"><pre><code class="language-json"><span class="token property">"peerDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">"react"</span><span class="token operator">:</span> <span class="token string">"^17.0.0 || ^18.0.0"</span><span class="token punctuation">,</span>\n  <span class="token property">"react-dom"</span><span class="token operator">:</span> <span class="token string">"^17.0.0 || ^18.0.0"</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="inter-font"><a href="#inter-font" class="title-link-to-anchor">Inter font<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="inter-font"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>Joy\xa0UI uses the <a href="https://rsms.me/inter/">Inter</a>\nfont by default.\nAdd it to your project via <a href="https://fontsource.org/">Fontsource</a>, or with the Google Fonts CDN.</p>\n<h3 id="fontsource"><a href="#fontsource" class="title-link-to-anchor">Fontsource<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="fontsource"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>Run one of the following commands to add Inter through Fontsource to your Joy\xa0UI project:</p>\n',{type:"codeblock",data:[{language:"bash",tab:"npm",code:"npm install @fontsource/inter"},{language:"bash",tab:"yarn",code:"yarn add @fontsource/inter"},{language:"bash",tab:"pnpm",code:"pnpm add @fontsource/inter"}],storageKey:"package-manager"},'<p>Then you can import it in your entry point like this:</p>\n<div class="MuiCode-root"><pre><code class="language-tsx"><span class="token keyword">import</span> <span class="token string">\'@fontsource/inter\'</span><span class="token punctuation">;</span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h3 id="google-web-fonts"><a href="#google-web-fonts" class="title-link-to-anchor">Google Web Fonts<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="google-web-fonts"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>To install Inter through the Google Web Fonts CDN, add the following code inside your project&#39;s <code>&lt;head /&gt;</code> tag:</p>\n<div class="MuiCode-root"><pre><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>preconnect<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://fonts.googleapis.com<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>preconnect<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://fonts.gstatic.com<span class="token punctuation">"</span></span> <span class="token attr-name">crossorigin</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>\n  <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span>\n  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;display=swap<span class="token punctuation">"</span></span>\n<span class="token punctuation">/></span></span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n'],toc:[{text:"Default installation",level:2,hash:"default-installation",children:[{text:"Peer dependencies",level:3,hash:"peer-dependencies"}]},{text:"Inter font",level:2,hash:"inter-font",children:[{text:"Fontsource",level:3,hash:"fontsource"},{text:"Google Web Fonts",level:3,hash:"google-web-fonts"}]}],title:"Installation",headers:{components:[]}}},i={};i.scope={process:{},import:{}};var l={},r={},p=t(735250);function u(){return(0,p.jsx)(o.Z,(0,s.Z)((0,s.Z)({},e),{},{disableAd:!0}))}},652755:function(n,a,t){"use strict";t.d(a,{Z:function(){return b}});var e,s=t(778521),o=t(470079),c=t(639519),i=t.n(c),l=t(389136),r=t(302312),p=t(513182),u=t(597683),d=t(42141),h=t(162119),f=t(871379),m=t(775196),g=t(694366),v=t(74077),y=t(735250);function k(n){var a=n.mode,t=(0,p.tv)().setMode;return o.useEffect(function(){t(a)},[a,t]),null}function b(n){var a=(0,r.Z)(),t=(0,l.useRouter)(),c=(0,d.ln)(t.asPath).canonicalAs,i=n.disableAd,b=void 0!==i&&i,C=n.disableToc,w=n.disableCssVarsProvider,x=n.demos,M=void 0===x?{}:x,T=n.docs,Z=n.demoComponents,j=n.srcComponents,H=T[(0,f.fO)()]||T.en,I=c.startsWith("/joy-ui/")&&!(void 0!==w&&w),P=I?p.lL:o.Fragment,_=I?m.BrandingProvider:o.Fragment,A=(0,s.Z)({},I&&{mode:a.palette.mode});return(0,y.jsxs)(h.Z,{cardOptions:{description:H.headers.cardDescription,title:H.headers.cardTitle},description:H.description,disableAd:b,disableToc:void 0!==C&&C,location:H.location,title:H.title,toc:H.toc,children:[b?null:e||(e=(0,y.jsx)(m.BrandingProvider,{children:(0,y.jsx)(v.Z,{children:(0,y.jsx)(g.ZP,{})})})),(0,y.jsxs)(P,{children:[I&&(0,y.jsx)(k,{mode:a.palette.mode}),H.rendered.map(function(n,t){return(0,y.jsx)(u.Z,{demoComponents:Z,demos:M,disableAd:b,localizedDoc:H,renderedMarkdownOrDemo:n,srcComponents:j,theme:a,WrapperComponent:_,wrapperProps:A},"demos-section-".concat(t))})]})]})}k.propTypes={mode:i().oneOf(["light","dark"])}},287706:function(n,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/joy-ui/getting-started/installation",function(){return t(880329)}])},884835:function(n,a,t){"use strict";var e=t(311596);function s(){}function o(){}o.resetWarningCache=s,n.exports=function(){function n(n,a,t,s,o,c){if(c!==e){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function a(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:a,element:n,elementType:n,instanceOf:a,node:n,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:o,resetWarningCache:s};return t.PropTypes=t,t}},639519:function(n,a,t){n.exports=t(884835)()},311596:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(n){n.O(0,[49774,9535,73976,97146,59727,85925,17376,41373,15686,34800,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,42378,20759,16067,40332,97683,92888,40179],function(){return n(n.s=287706)}),_N_E=n.O()}]);