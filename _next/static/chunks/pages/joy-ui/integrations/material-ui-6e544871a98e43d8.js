(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[23591,39519],{333897:function(n,s,a){var t=a(915012),e=/^\s+/;n.exports=function(n){return n?n.slice(0,t(n)+1).replace(e,""):n}},915012:function(n){var s=/\s/;n.exports=function(n){for(var a=n.length;a--&&s.test(n.charAt(a)););return a}},889678:function(n,s,a){var t=a(706627),e=a(885365),o=a(67948),p=Math.max,c=Math.min;n.exports=function(n,s,a){var l,i,r,u,k,d,m=0,h=!1,y=!1,g=!0;if("function"!=typeof n)throw TypeError("Expected a function");function v(s){var a=l,t=i;return l=i=void 0,m=s,u=n.apply(t,a)}function f(n){var a=n-d,t=n-m;return void 0===d||a>=s||a<0||y&&t>=r}function C(){var n,a,t,o=e();if(f(o))return w(o);k=setTimeout(C,(n=o-d,a=o-m,t=s-n,y?c(t,r-a):t))}function w(n){return(k=void 0,g&&l)?v(n):(l=i=void 0,u)}function b(){var n,a=e(),t=f(a);if(l=arguments,i=this,d=a,t){if(void 0===k)return m=n=d,k=setTimeout(C,s),h?v(n):u;if(y)return clearTimeout(k),k=setTimeout(C,s),v(d)}return void 0===k&&(k=setTimeout(C,s)),u}return s=o(s)||0,t(a)&&(h=!!a.leading,r=(y="maxWait"in a)?p(o(a.maxWait)||0,s):r,g="trailing"in a?!!a.trailing:g),b.cancel=function(){void 0!==k&&clearTimeout(k),m=0,l=d=i=k=void 0},b.flush=function(){return void 0===k?u:w(e())},b}},706627:function(n){n.exports=function(n){var s=typeof n;return null!=n&&("object"==s||"function"==s)}},885365:function(n,s,a){var t=a(573401);n.exports=function(){return t.Date.now()}},123763:function(n,s,a){var t=a(889678),e=a(706627);n.exports=function(n,s,a){var o=!0,p=!0;if("function"!=typeof n)throw TypeError("Expected a function");return e(a)&&(o="leading"in a?!!a.leading:o,p="trailing"in a?!!a.trailing:p),t(n,s,{leading:o,maxWait:s,trailing:p})}},67948:function(n,s,a){var t=a(333897),e=a(706627),o=a(42848),p=0/0,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,i=/^0o[0-7]+$/i,r=parseInt;n.exports=function(n){if("number"==typeof n)return n;if(o(n))return p;if(e(n)){var s="function"==typeof n.valueOf?n.valueOf():n;n=e(s)?s+"":s}if("string"!=typeof n)return 0===n?n:+n;n=t(n);var a=l.test(n);return a||i.test(n)?r(n.slice(2),a?2:8):c.test(n)?p:+n}},771473:function(n,s,a){"use strict";a.r(s),a.d(s,{default:function(){return u}});var t={};a.r(t),a.d(t,{demoComponents:function(){return l},demos:function(){return c},docs:function(){return p},srcComponents:function(){return i}});var e=a(778521);a(470079);var o=a(652755),p={en:{description:"Learn how to use Joy\xa0UI and Material\xa0UI together in the same project.",location:"/docs/data/joy/integrations/material-ui/material-ui.md",rendered:['<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="error-icon" viewBox="0 0 20 20">\n      <path fill-rule="evenodd" d="M2 7.4v5.2a2 2 0 0 0 .586 1.414l3.4 3.4A2 2 0 0 0 7.4 18h5.2a2 2 0 0 0 1.414-.586l3.4-3.4A2 2 0 0 0 18 12.6V7.4a2 2 0 0 0-.586-1.414l-3.4-3.4A2 2 0 0 0 12.6 2H7.4a2 2 0 0 0-1.414.586l-3.4 3.4A2 2 0 0 0 2 7.4Zm11.03-.43a.75.75 0 0 1 0 1.06L11.06 10l1.97 1.97a.75.75 0 1 1-1.06 1.06L10 11.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L8.94 10 6.97 8.03a.75.75 0 0 1 1.06-1.06L10 8.94l1.97-1.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="warning-icon" viewBox="0 0 20 20">\n      <path d="M2.33 17a.735.735 0 0 1-.665-.375.631.631 0 0 1-.094-.375.898.898 0 0 1 .115-.396L9.353 3.062a.621.621 0 0 1 .281-.27.85.85 0 0 1 .729 0 .622.622 0 0 1 .281.27l7.667 12.792c.07.125.108.257.114.396a.63.63 0 0 1-.093.375.842.842 0 0 1-.271.27.728.728 0 0 1-.394.105H2.33Zm7.664-2.5c.211 0 .39-.072.536-.214a.714.714 0 0 0 .218-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.531-.22.736.736 0 0 0-.536.215.714.714 0 0 0-.219.531c0 .212.072.39.215.536.143.146.32.219.531.219Zm0-2.5c.211 0 .39-.072.536-.216a.72.72 0 0 0 .218-.534v-2.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.531-.216.734.734 0 0 0-.536.216.72.72 0 0 0-.219.534v2.5c0 .212.072.39.215.534a.72.72 0 0 0 .531.216Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="success-icon" viewBox="0 0 20 20">\n      <path d="m8.938 10.875-1.25-1.23a.718.718 0 0 0-.521-.228.718.718 0 0 0-.521.229.73.73 0 0 0 0 1.062l1.77 1.771c.153.153.327.23.521.23a.718.718 0 0 0 .521-.23l3.896-3.896a.73.73 0 0 0 0-1.062.718.718 0 0 0-.52-.23.718.718 0 0 0-.521.23l-3.376 3.354ZM10 18a7.796 7.796 0 0 1-3.104-.625 8.065 8.065 0 0 1-2.552-1.719 8.064 8.064 0 0 1-1.719-2.552A7.797 7.797 0 0 1 2 10c0-1.111.208-2.15.625-3.115a8.064 8.064 0 0 1 4.27-4.26A7.797 7.797 0 0 1 10 2c1.111 0 2.15.208 3.115.625a8.096 8.096 0 0 1 4.26 4.26C17.792 7.851 18 8.89 18 10a7.797 7.797 0 0 1-.625 3.104 8.066 8.066 0 0 1-4.26 4.271A7.774 7.774 0 0 1 10 18Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="info-icon" viewBox="0 0 20 20">\n      <path d="M9.996 14c.21 0 .39-.072.535-.216a.72.72 0 0 0 .219-.534v-3.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.532-.216.734.734 0 0 0-.535.216.72.72 0 0 0-.219.534v3.5c0 .213.071.39.214.534a.72.72 0 0 0 .532.216Zm0-6.5c.21 0 .39-.071.535-.214a.714.714 0 0 0 .219-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.532-.219.736.736 0 0 0-.535.214.714.714 0 0 0-.219.532c0 .21.071.39.214.535.143.146.32.219.532.219Zm.01 10.5a7.81 7.81 0 0 1-3.11-.625 8.065 8.065 0 0 1-2.552-1.719 8.066 8.066 0 0 1-1.719-2.551A7.818 7.818 0 0 1 2 9.99c0-1.104.208-2.14.625-3.105a8.066 8.066 0 0 1 4.27-4.26A7.818 7.818 0 0 1 10.009 2a7.75 7.75 0 0 1 3.106.625 8.083 8.083 0 0 1 4.26 4.265A7.77 7.77 0 0 1 18 9.994a7.81 7.81 0 0 1-.625 3.11 8.066 8.066 0 0 1-1.719 2.552 8.083 8.083 0 0 1-2.546 1.719 7.77 7.77 0 0 1-3.104.625Z"/>\n      </symbol>\n      </svg>','\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n        <symbol id="anchor-link-icon" viewBox="0 0 12 6">\n          <path d="M8.9176 0.083252H7.1676C6.84677 0.083252 6.58427 0.345752 6.58427 0.666585C6.58427 0.987419 6.84677 1.24992 7.1676 1.24992H8.9176C9.8801 1.24992 10.6676 2.03742 10.6676 2.99992C10.6676 3.96242 9.8801 4.74992 8.9176 4.74992H7.1676C6.84677 4.74992 6.58427 5.01242 6.58427 5.33325C6.58427 5.65409 6.84677 5.91659 7.1676 5.91659H8.9176C10.5276 5.91659 11.8343 4.60992 11.8343 2.99992C11.8343 1.38992 10.5276 0.083252 8.9176 0.083252ZM3.6676 2.99992C3.6676 3.32075 3.9301 3.58325 4.25094 3.58325H7.75094C8.07177 3.58325 8.33427 3.32075 8.33427 2.99992C8.33427 2.67909 8.07177 2.41659 7.75094 2.41659H4.25094C3.9301 2.41659 3.6676 2.67909 3.6676 2.99992ZM4.83427 4.74992H3.08427C2.12177 4.74992 1.33427 3.96242 1.33427 2.99992C1.33427 2.03742 2.12177 1.24992 3.08427 1.24992H4.83427C5.1551 1.24992 5.4176 0.987419 5.4176 0.666585C5.4176 0.345752 5.1551 0.083252 4.83427 0.083252H3.08427C1.47427 0.083252 0.167603 1.38992 0.167603 2.99992C0.167603 4.60992 1.47427 5.91659 3.08427 5.91659H4.83427C5.1551 5.91659 5.4176 5.65409 5.4176 5.33325C5.4176 5.01242 5.1551 4.74992 4.83427 4.74992Z" />\n        </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n      <path d="M22.8481 4C22.8481 2.9 21.9481 2 20.8481 2H4.84814C3.74814 2 2.84814 2.9 2.84814 4V16C2.84814 17.1 3.74814 18 4.84814 18H18.8481L22.8481 22V4ZM16.8481 11H13.8481V14C13.8481 14.55 13.3981 15 12.8481 15C12.2981 15 11.8481 14.55 11.8481 14V11H8.84814C8.29814 11 7.84814 10.55 7.84814 10C7.84814 9.45 8.29814 9 8.84814 9H11.8481V6C11.8481 5.45 12.2981 5 12.8481 5C13.3981 5 13.8481 5.45 13.8481 6V9H16.8481C17.3981 9 17.8481 9.45 17.8481 10C17.8481 10.55 17.3981 11 16.8481 11Z" />\n      </symbol>\n      </svg>','<h1>Using Joy\xa0UI and Material\xa0UI together</h1><p class="description">Learn how to use Joy\xa0UI and Material\xa0UI together in the same project.</p>\n\n<h2 id="introduction"><a href="#introduction" class="title-link-to-anchor">Introduction<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="introduction"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>There are two main use cases for using them together:</p>\n<ol>\n<li>Your existing project already uses Material\xa0UI but you&#39;re willing to explore the new components and style Joy\xa0UI offers.</li>\n<li>You&#39;ve started your project with Joy\xa0UI but you find a key component you need is missing.</li>\n</ol>\n<aside class="MuiCallout-root MuiCallout-info">\n            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">\n<use class="MuiCode-copied-icon" xlink:href="#info-icon" />\n</svg>\n            <div class="MuiCallout-content">\n            <p>Once Joy\xa0UI reaches component parity with Material\xa0UI, we recommend that you <strong><em>choose one or the other</em></strong>. Not only do they have a different design language (and therefore a different theme structure) but they would increase your bundle size as well as potentially create unnecessary complexities.</p>\n\n</div></aside><p>Additionally, keep these in mind when using them together:</p>\n<ul>\n<li>Both of them use <a href="/system/getting-started/">MUI\xa0System</a> as their style engine, which uses React context for theming.</li>\n<li>Theme scoping must be done on one of the libraries.</li>\n</ul>\n<h3 id="prerequisites"><a href="#prerequisites" class="title-link-to-anchor">Prerequisites<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="prerequisites"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><ul>\n<li>Have <code>@mui/material</code> and <code>@mui/joy</code> installed in your project.</li>\n<li>The version of both libraries must be <a href="https://github.com/mui/material-ui/releases/tag/v5.12.0">v5.12.0</a> or higher.</li>\n</ul>\n<h2 id="set-up-the-providers"><a href="#set-up-the-providers" class="title-link-to-anchor">Set up the providers<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="set-up-the-providers"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>Render Joy\xa0UI&#39;s <code>CssVarsProvider</code> inside Material\xa0UI&#39;s provider and use <code>THEME_ID</code> to separate the themes from each other.</p>\n<div class="MuiCode-root"><pre><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>\n  extendTheme <span class="token keyword">as</span> materialExtendTheme<span class="token punctuation">,</span>\n  CssVarsProvider <span class="token keyword">as</span> MaterialCssVarsProvider<span class="token punctuation">,</span>\n  <span class="token constant">THEME_ID</span> <span class="token keyword">as</span> <span class="token constant">MATERIAL_THEME_ID</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@mui/material/styles\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> CssVarsProvider <span class="token keyword">as</span> JoyCssVarsProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@mui/joy/styles\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> CssBaseline <span class="token keyword">from</span> <span class="token string">\'@mui/material/CssBaseline\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> materialTheme <span class="token operator">=</span> <span class="token function">materialExtendTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MaterialCssVarsProvider</span></span> <span class="token attr-name">theme</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token constant">MATERIAL_THEME_ID</span><span class="token punctuation">]</span><span class="token operator">:</span> materialTheme <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">JoyCssVarsProvider</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CssBaseline</span></span> <span class="token attr-name">enableColorScheme</span> <span class="token punctuation">/></span></span>\n        <span class="token operator">...</span>Material <span class="token constant">UI</span> and Joy <span class="token constant">UI</span> components\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">JoyCssVarsProvider</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MaterialCssVarsProvider</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<iframe src="https://codesandbox.io/embed/using-joy-ui-and-material-ui-together-qrsz2h?module=%2Fdemo.tsx&fontsize=14&hidenavigation=1&theme=dark&view=preview"\n     style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"\n     title="Joy\xa0UI - Human Interface Guidelines Typography System"\n     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"\n     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"\n   ></iframe>\n\n<h3 id="sync-the-color-mode"><a href="#sync-the-color-mode" class="title-link-to-anchor">Sync the color mode<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="sync-the-color-mode"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>To sync the color mode between the providers, call <code>setMode</code> from both of the libraries:</p>\n<div class="MuiCode-root"><pre><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> useColorScheme <span class="token keyword">as</span> useJoyColorScheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@mui/joy/styles\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useColorScheme <span class="token keyword">as</span> useMaterialColorScheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@mui/material/styles\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">ModeToggle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> mode<span class="token punctuation">,</span> <span class="token literal-property property">setMode</span><span class="token operator">:</span> setMaterialMode <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useMaterialColorScheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">setMode</span><span class="token operator">:</span> setJoyMode <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useJoyColorScheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>mounted<span class="token punctuation">,</span> setMounted<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  React<span class="token punctuation">.</span><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">setMounted</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>mounted<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// prevent server-side rendering mismatch</span>\n    <span class="token comment">// because `mode` is undefined on the server.</span>\n    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">IconButton</span></span>\n      <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token function">setMaterialMode</span><span class="token punctuation">(</span>mode <span class="token operator">===</span> <span class="token string">\'dark\'</span> <span class="token operator">?</span> <span class="token string">\'light\'</span> <span class="token operator">:</span> <span class="token string">\'dark\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">setJoyMode</span><span class="token punctuation">(</span>mode <span class="token operator">===</span> <span class="token string">\'dark\'</span> <span class="token operator">?</span> <span class="token string">\'light\'</span> <span class="token operator">:</span> <span class="token string">\'dark\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span><span class="token comment">/** You can use `mode` from Joy UI or Material UI since they are synced **/</span><span class="token punctuation">}</span>\n      <span class="token punctuation">{</span>mode <span class="token operator">===</span> <span class="token string">\'dark\'</span> <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DarkMode</span></span> <span class="token punctuation">/></span></span> <span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">LightMode</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">IconButton</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h3 id="default-mode"><a href="#default-mode" class="title-link-to-anchor">Default mode<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="default-mode"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>If you want to change the <code>defaultMode</code>, you have to specify the prop to both of the providers:</p>\n<div class="MuiCode-root"><pre><code class="language-js"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MaterialCssVarsProvider</span></span>\n  <span class="token attr-name">defaultMode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>system<span class="token punctuation">"</span></span>\n  <span class="token attr-name">theme</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token constant">MATERIAL_THEME_ID</span><span class="token punctuation">]</span><span class="token operator">:</span> materialTheme <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">JoyCssVarsProvider</span></span> <span class="token attr-name">defaultMode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>system<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CssBaseline</span></span> <span class="token attr-name">enableColorScheme</span> <span class="token punctuation">/></span></span>\n    <span class="token operator">...</span>Material <span class="token constant">UI</span> and Joy <span class="token constant">UI</span> components\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">JoyCssVarsProvider</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MaterialCssVarsProvider</span></span><span class="token punctuation">></span></span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="caveat"><a href="#caveat" class="title-link-to-anchor">Caveat<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="caveat"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>Both libraries have the same class name prefix:</p>\n<div class="MuiCode-root"><pre><code class="language-js"><span class="token keyword">import</span> MaterialTypography<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  typographyClasses <span class="token keyword">as</span> materialTypographyClasses<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@mui/material/Typography\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> JoyTypography<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  typographyClasses <span class="token keyword">as</span> joyTyographyClasses<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@mui/joy/Typography\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Stack <span class="token keyword">from</span> <span class="token string">\'@mui/material/Stack\'</span><span class="token punctuation">;</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stack</span></span>\n  <span class="token attr-name">sx</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n    <span class="token comment">// similar to `&amp; .${joyTyographyClasses.root}`</span>\n    <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&amp; .</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>materialTypographyClasses<span class="token punctuation">.</span>root<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">\'red\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">></span></span>\n  <span class="token punctuation">{</span><span class="token comment">/* Both components are red. */</span><span class="token punctuation">}</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MaterialTypography</span></span><span class="token punctuation">></span></span>Red<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MaterialTypography</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">JoyTypography</span></span><span class="token punctuation">></span></span>Red<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">JoyTypography</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Stack</span></span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<p>Joy\xa0UI and Material\xa0UI components have a different name for <a href="/joy-ui/customization/themed-components/#component-identifier">theming the components</a>. For example, Joy\xa0UI&#39;s Button uses <code>JoyButton</code> whereas Material\xa0UI&#39;s Button uses <code>MuiButton</code>.</p>\n'],toc:[{text:"Introduction",level:2,hash:"introduction",children:[{text:"Prerequisites",level:3,hash:"prerequisites"}]},{text:"Set up the providers",level:2,hash:"set-up-the-providers",children:[{text:"Sync the color mode",level:3,hash:"sync-the-color-mode"},{text:"Default mode",level:3,hash:"default-mode"}]},{text:"Caveat",level:2,hash:"caveat",children:[]}],title:"Using Joy\xa0UI and Material\xa0UI together",headers:{components:[]}}},c={};c.scope={process:{},import:{}};var l={},i={},r=a(735250);function u(){return(0,r.jsx)(o.Z,(0,e.Z)({},t))}},652755:function(n,s,a){"use strict";a.d(s,{Z:function(){return C}});var t,e=a(778521),o=a(470079),p=a(639519),c=a.n(p),l=a(389136),i=a(302312),r=a(513182),u=a(597683),k=a(42141),d=a(162119),m=a(871379),h=a(775196),y=a(694366),g=a(74077),v=a(735250);function f(n){var s=n.mode,a=(0,r.tv)().setMode;return o.useEffect(function(){a(s)},[s,a]),null}function C(n){var s=(0,i.Z)(),a=(0,l.useRouter)(),p=(0,k.ln)(a.asPath).canonicalAs,c=n.disableAd,C=void 0!==c&&c,w=n.disableToc,b=n.disableCssVarsProvider,x=n.demos,M=void 0===x?{}:x,T=n.docs,I=n.demoComponents,j=n.srcComponents,P=T[(0,m.fO)()]||T.en,E=p.startsWith("/joy-ui/")&&!(void 0!==b&&b),H=E?r.lL:o.Fragment,U=E?h.BrandingProvider:o.Fragment,_=(0,e.Z)({},E&&{mode:s.palette.mode});return(0,v.jsxs)(d.Z,{cardOptions:{description:P.headers.cardDescription,title:P.headers.cardTitle},description:P.description,disableAd:C,disableToc:void 0!==w&&w,location:P.location,title:P.title,toc:P.toc,children:[C?null:t||(t=(0,v.jsx)(h.BrandingProvider,{children:(0,v.jsx)(g.Z,{children:(0,v.jsx)(y.ZP,{})})})),(0,v.jsxs)(H,{children:[E&&(0,v.jsx)(f,{mode:s.palette.mode}),P.rendered.map(function(n,a){return(0,v.jsx)(u.Z,{demoComponents:I,demos:M,disableAd:C,localizedDoc:P,renderedMarkdownOrDemo:n,srcComponents:j,theme:s,WrapperComponent:U,wrapperProps:_},"demos-section-".concat(a))})]})]})}f.propTypes={mode:c().oneOf(["light","dark"])}},252005:function(n,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/joy-ui/integrations/material-ui",function(){return a(771473)}])},884835:function(n,s,a){"use strict";var t=a(311596);function e(){}function o(){}o.resetWarningCache=e,n.exports=function(){function n(n,s,a,e,o,p){if(p!==t){var c=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function s(){return n}n.isRequired=n;var a={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:s,element:n,elementType:n,instanceOf:s,node:n,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:o,resetWarningCache:e};return a.PropTypes=a,a}},639519:function(n,s,a){n.exports=a(884835)()},311596:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(n){n.O(0,[49774,9535,73976,97146,59727,85925,17376,41373,15686,34800,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,42378,20759,16067,40332,97683,92888,40179],function(){return n(n.s=252005)}),_N_E=n.O()}]);