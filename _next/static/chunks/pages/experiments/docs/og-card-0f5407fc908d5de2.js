(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91649,39519],{333897:function(e,n,t){var o=t(915012),i=/^\s+/;e.exports=function(e){return e?e.slice(0,o(e)+1).replace(i,""):e}},915012:function(e){var n=/\s/;e.exports=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},889678:function(e,n,t){var o=t(706627),i=t(885365),a=t(67948),s=Math.max,r=Math.min;e.exports=function(e,n,t){var c,d,l,p,u,h,m=0,v=!1,f=!1,g=!0;if("function"!=typeof e)throw TypeError("Expected a function");function w(n){var t=c,o=d;return c=d=void 0,m=n,p=e.apply(o,t)}function y(e){var t=e-h,o=e-m;return void 0===h||t>=n||t<0||f&&o>=l}function b(){var e,t,o,a=i();if(y(a))return x(a);u=setTimeout(b,(e=a-h,t=a-m,o=n-e,f?r(o,l-t):o))}function x(e){return(u=void 0,g&&c)?w(e):(c=d=void 0,p)}function C(){var e,t=i(),o=y(t);if(c=arguments,d=this,h=t,o){if(void 0===u)return m=e=h,u=setTimeout(b,n),v?w(e):p;if(f)return clearTimeout(u),u=setTimeout(b,n),w(h)}return void 0===u&&(u=setTimeout(b,n)),p}return n=a(n)||0,o(t)&&(v=!!t.leading,l=(f="maxWait"in t)?s(a(t.maxWait)||0,n):l,g="trailing"in t?!!t.trailing:g),C.cancel=function(){void 0!==u&&clearTimeout(u),m=0,c=h=d=u=void 0},C.flush=function(){return void 0===u?p:x(i())},C}},706627:function(e){e.exports=function(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)}},885365:function(e,n,t){var o=t(573401);e.exports=function(){return o.Date.now()}},123763:function(e,n,t){var o=t(889678),i=t(706627);e.exports=function(e,n,t){var a=!0,s=!0;if("function"!=typeof e)throw TypeError("Expected a function");return i(t)&&(a="leading"in t?!!t.leading:a,s="trailing"in t?!!t.trailing:s),o(e,n,{leading:a,maxWait:n,trailing:s})}},67948:function(e,n,t){var o=t(333897),i=t(706627),a=t(42848),s=0/0,r=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,d=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=i(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=o(e);var t=c.test(e);return t||d.test(e)?l(e.slice(2),t?2:8):r.test(e)?s:+e}},148027:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var o={};t.r(o),t.d(o,{demoComponents:function(){return c},demos:function(){return r},docs:function(){return s},srcComponents:function(){return d}});var i=t(778521);t(470079);var a=t(652755),s={en:{description:"How the docs platform generate Open Graph card images.",location:"/docs/pages/experiments/docs/og-card.md",rendered:['<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="error-icon" viewBox="0 0 20 20">\n      <path fill-rule="evenodd" d="M2 7.4v5.2a2 2 0 0 0 .586 1.414l3.4 3.4A2 2 0 0 0 7.4 18h5.2a2 2 0 0 0 1.414-.586l3.4-3.4A2 2 0 0 0 18 12.6V7.4a2 2 0 0 0-.586-1.414l-3.4-3.4A2 2 0 0 0 12.6 2H7.4a2 2 0 0 0-1.414.586l-3.4 3.4A2 2 0 0 0 2 7.4Zm11.03-.43a.75.75 0 0 1 0 1.06L11.06 10l1.97 1.97a.75.75 0 1 1-1.06 1.06L10 11.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L8.94 10 6.97 8.03a.75.75 0 0 1 1.06-1.06L10 8.94l1.97-1.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="warning-icon" viewBox="0 0 20 20">\n      <path d="M2.33 17a.735.735 0 0 1-.665-.375.631.631 0 0 1-.094-.375.898.898 0 0 1 .115-.396L9.353 3.062a.621.621 0 0 1 .281-.27.85.85 0 0 1 .729 0 .622.622 0 0 1 .281.27l7.667 12.792c.07.125.108.257.114.396a.63.63 0 0 1-.093.375.842.842 0 0 1-.271.27.728.728 0 0 1-.394.105H2.33Zm7.664-2.5c.211 0 .39-.072.536-.214a.714.714 0 0 0 .218-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.531-.22.736.736 0 0 0-.536.215.714.714 0 0 0-.219.531c0 .212.072.39.215.536.143.146.32.219.531.219Zm0-2.5c.211 0 .39-.072.536-.216a.72.72 0 0 0 .218-.534v-2.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.531-.216.734.734 0 0 0-.536.216.72.72 0 0 0-.219.534v2.5c0 .212.072.39.215.534a.72.72 0 0 0 .531.216Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="success-icon" viewBox="0 0 20 20">\n      <path d="m8.938 10.875-1.25-1.23a.718.718 0 0 0-.521-.228.718.718 0 0 0-.521.229.73.73 0 0 0 0 1.062l1.77 1.771c.153.153.327.23.521.23a.718.718 0 0 0 .521-.23l3.896-3.896a.73.73 0 0 0 0-1.062.718.718 0 0 0-.52-.23.718.718 0 0 0-.521.23l-3.376 3.354ZM10 18a7.796 7.796 0 0 1-3.104-.625 8.065 8.065 0 0 1-2.552-1.719 8.064 8.064 0 0 1-1.719-2.552A7.797 7.797 0 0 1 2 10c0-1.111.208-2.15.625-3.115a8.064 8.064 0 0 1 4.27-4.26A7.797 7.797 0 0 1 10 2c1.111 0 2.15.208 3.115.625a8.096 8.096 0 0 1 4.26 4.26C17.792 7.851 18 8.89 18 10a7.797 7.797 0 0 1-.625 3.104 8.066 8.066 0 0 1-4.26 4.271A7.774 7.774 0 0 1 10 18Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="info-icon" viewBox="0 0 20 20">\n      <path d="M9.996 14c.21 0 .39-.072.535-.216a.72.72 0 0 0 .219-.534v-3.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.532-.216.734.734 0 0 0-.535.216.72.72 0 0 0-.219.534v3.5c0 .213.071.39.214.534a.72.72 0 0 0 .532.216Zm0-6.5c.21 0 .39-.071.535-.214a.714.714 0 0 0 .219-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.532-.219.736.736 0 0 0-.535.214.714.714 0 0 0-.219.532c0 .21.071.39.214.535.143.146.32.219.532.219Zm.01 10.5a7.81 7.81 0 0 1-3.11-.625 8.065 8.065 0 0 1-2.552-1.719 8.066 8.066 0 0 1-1.719-2.551A7.818 7.818 0 0 1 2 9.99c0-1.104.208-2.14.625-3.105a8.066 8.066 0 0 1 4.27-4.26A7.818 7.818 0 0 1 10.009 2a7.75 7.75 0 0 1 3.106.625 8.083 8.083 0 0 1 4.26 4.265A7.77 7.77 0 0 1 18 9.994a7.81 7.81 0 0 1-.625 3.11 8.066 8.066 0 0 1-1.719 2.552 8.083 8.083 0 0 1-2.546 1.719 7.77 7.77 0 0 1-3.104.625Z"/>\n      </symbol>\n      </svg>','\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n        <symbol id="anchor-link-icon" viewBox="0 0 12 6">\n          <path d="M8.9176 0.083252H7.1676C6.84677 0.083252 6.58427 0.345752 6.58427 0.666585C6.58427 0.987419 6.84677 1.24992 7.1676 1.24992H8.9176C9.8801 1.24992 10.6676 2.03742 10.6676 2.99992C10.6676 3.96242 9.8801 4.74992 8.9176 4.74992H7.1676C6.84677 4.74992 6.58427 5.01242 6.58427 5.33325C6.58427 5.65409 6.84677 5.91659 7.1676 5.91659H8.9176C10.5276 5.91659 11.8343 4.60992 11.8343 2.99992C11.8343 1.38992 10.5276 0.083252 8.9176 0.083252ZM3.6676 2.99992C3.6676 3.32075 3.9301 3.58325 4.25094 3.58325H7.75094C8.07177 3.58325 8.33427 3.32075 8.33427 2.99992C8.33427 2.67909 8.07177 2.41659 7.75094 2.41659H4.25094C3.9301 2.41659 3.6676 2.67909 3.6676 2.99992ZM4.83427 4.74992H3.08427C2.12177 4.74992 1.33427 3.96242 1.33427 2.99992C1.33427 2.03742 2.12177 1.24992 3.08427 1.24992H4.83427C5.1551 1.24992 5.4176 0.987419 5.4176 0.666585C5.4176 0.345752 5.1551 0.083252 4.83427 0.083252H3.08427C1.47427 0.083252 0.167603 1.38992 0.167603 2.99992C0.167603 4.60992 1.47427 5.91659 3.08427 5.91659H4.83427C5.1551 5.91659 5.4176 5.65409 5.4176 5.33325C5.4176 5.01242 5.1551 4.74992 4.83427 4.74992Z" />\n        </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n      <path d="M22.8481 4C22.8481 2.9 21.9481 2 20.8481 2H4.84814C3.74814 2 2.84814 2.9 2.84814 4V16C2.84814 17.1 3.74814 18 4.84814 18H18.8481L22.8481 22V4ZM16.8481 11H13.8481V14C13.8481 14.55 13.3981 15 12.8481 15C12.2981 15 11.8481 14.55 11.8481 14V11H8.84814C8.29814 11 7.84814 10.55 7.84814 10C7.84814 9.45 8.29814 9 8.84814 9H11.8481V6C11.8481 5.45 12.2981 5 12.8481 5C13.3981 5 13.8481 5.45 13.8481 6V9H16.8481C17.3981 9 17.8481 9.45 17.8481 10C17.8481 10.55 17.3981 11 16.8481 11Z" />\n      </symbol>\n      </svg>','<h1>OG Image</h1><p class="description">How the docs platform generate Open Graph card images.</p>\n\n<h2 id="the-edge-function"><a href="#the-edge-function" class="title-link-to-anchor">The edge function<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="the-edge-function"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>The URL <code>mui.com/edge-functions/og-image</code> can be queried with 4 search parameters:</p>\n<ul>\n<li><code>product</code>: the text element displayed next to the MUI logo</li>\n<li><code>title</code>: the title which can contains <code>\\*</code> to delimit the highlighted (in blue) text sections</li>\n<li><code>description</code>: a paragraph added under the main title</li>\n<li><code>authors</code>: the GitHub username of the authors. It should be divided by a coma.</li>\n</ul>\n<h2 id="usage-with-markdown"><a href="#usage-with-markdown" class="title-link-to-anchor">Usage with Markdown<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="usage-with-markdown"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>By default, the card is generated using the page title and description.\nYou can override this behavior by providing different/specific <code>cardTitle</code> and <code>cardDescription</code> in the Markdown header, like so:</p>\n<div class="MuiCode-root"><pre><code class="language-markup">--\ncardTitle: A *different* title than the page title\ncardDecription: The word &quot;different&quot; on the title is highlighted\n--\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="card-design-preview"><a href="#card-design-preview" class="title-link-to-anchor">Card design preview<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="card-design-preview"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>Visit <a href="https://stackblitz.com/edit/vitejs-vite-ukeejd?file=src%2FApp.tsx">this StackBlitz demo</a> to see how the card looks like without having to run a random page on an OG preview site.</p>\n'],toc:[{text:"The edge function",level:2,hash:"the-edge-function",children:[]},{text:"Usage with Markdown",level:2,hash:"usage-with-markdown",children:[]},{text:"Card design preview",level:2,hash:"card-design-preview",children:[]}],title:"OG Image",headers:{components:[]}}},r={};r.scope={process:{},import:{}};var c={},d={},l=t(735250);function p(){return(0,l.jsx)(a.Z,(0,i.Z)({},o))}},652755:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var o,i=t(778521),a=t(470079),s=t(639519),r=t.n(s),c=t(389136),d=t(302312),l=t(513182),p=t(597683),u=t(42141),h=t(162119),m=t(871379),v=t(775196),f=t(694366),g=t(74077),w=t(735250);function y(e){var n=e.mode,t=(0,l.tv)().setMode;return a.useEffect(function(){t(n)},[n,t]),null}function b(e){var n=(0,d.Z)(),t=(0,c.useRouter)(),s=(0,u.ln)(t.asPath).canonicalAs,r=e.disableAd,b=void 0!==r&&r,x=e.disableToc,C=e.disableCssVarsProvider,k=e.demos,T=void 0===k?{}:k,H=e.docs,M=e.demoComponents,Z=e.srcComponents,O=H[(0,m.fO)()]||H.en,_=s.startsWith("/joy-ui/")&&!(void 0!==C&&C),A=_?l.lL:a.Fragment,P=_?v.BrandingProvider:a.Fragment,E=(0,i.Z)({},_&&{mode:n.palette.mode});return(0,w.jsxs)(h.Z,{cardOptions:{description:O.headers.cardDescription,title:O.headers.cardTitle},description:O.description,disableAd:b,disableToc:void 0!==x&&x,location:O.location,title:O.title,toc:O.toc,children:[b?null:o||(o=(0,w.jsx)(v.BrandingProvider,{children:(0,w.jsx)(g.Z,{children:(0,w.jsx)(f.ZP,{})})})),(0,w.jsxs)(A,{children:[_&&(0,w.jsx)(y,{mode:n.palette.mode}),O.rendered.map(function(e,t){return(0,w.jsx)(p.Z,{demoComponents:M,demos:T,disableAd:b,localizedDoc:O,renderedMarkdownOrDemo:e,srcComponents:Z,theme:n,WrapperComponent:P,wrapperProps:E},"demos-section-".concat(t))})]})]})}y.propTypes={mode:r().oneOf(["light","dark"])}},116840:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/experiments/docs/og-card",function(){return t(148027)}])},884835:function(e,n,t){"use strict";var o=t(311596);function i(){}function a(){}a.resetWarningCache=i,e.exports=function(){function e(e,n,t,i,a,s){if(s!==o){var r=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:a,resetWarningCache:i};return t.PropTypes=t,t}},639519:function(e,n,t){e.exports=t(884835)()},311596:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[49774,9535,73976,97146,59727,85925,17376,41373,15686,34800,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,42378,20759,16067,40332,97683,92888,40179],function(){return e(e.s=116840)}),_N_E=e.O()}]);