(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82060,39519],{333897:function(n,e,t){var o=t(915012),a=/^\s+/;n.exports=function(n){return n?n.slice(0,o(n)+1).replace(a,""):n}},915012:function(n){var e=/\s/;n.exports=function(n){for(var t=n.length;t--&&e.test(n.charAt(t)););return t}},889678:function(n,e,t){var o=t(706627),a=t(885365),s=t(67948),r=Math.max,i=Math.min;n.exports=function(n,e,t){var l,c,d,p,u,m,f=0,g=!1,h=!1,y=!0;if("function"!=typeof n)throw TypeError("Expected a function");function v(e){var t=l,o=c;return l=c=void 0,f=e,p=n.apply(o,t)}function x(n){var t=n-m,o=n-f;return void 0===m||t>=e||t<0||h&&o>=d}function b(){var n,t,o,s=a();if(x(s))return k(s);u=setTimeout(b,(n=s-m,t=s-f,o=e-n,h?i(o,d-t):o))}function k(n){return(u=void 0,y&&l)?v(n):(l=c=void 0,p)}function C(){var n,t=a(),o=x(t);if(l=arguments,c=this,m=t,o){if(void 0===u)return f=n=m,u=setTimeout(b,e),g?v(n):p;if(h)return clearTimeout(u),u=setTimeout(b,e),v(m)}return void 0===u&&(u=setTimeout(b,e)),p}return e=s(e)||0,o(t)&&(g=!!t.leading,d=(h="maxWait"in t)?r(s(t.maxWait)||0,e):d,y="trailing"in t?!!t.trailing:y),C.cancel=function(){void 0!==u&&clearTimeout(u),f=0,l=m=c=u=void 0},C.flush=function(){return void 0===u?p:k(a())},C}},706627:function(n){n.exports=function(n){var e=typeof n;return null!=n&&("object"==e||"function"==e)}},885365:function(n,e,t){var o=t(573401);n.exports=function(){return o.Date.now()}},123763:function(n,e,t){var o=t(889678),a=t(706627);n.exports=function(n,e,t){var s=!0,r=!0;if("function"!=typeof n)throw TypeError("Expected a function");return a(t)&&(s="leading"in t?!!t.leading:s,r="trailing"in t?!!t.trailing:r),o(n,e,{leading:s,maxWait:e,trailing:r})}},67948:function(n,e,t){var o=t(333897),a=t(706627),s=t(42848),r=0/0,i=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt;n.exports=function(n){if("number"==typeof n)return n;if(s(n))return r;if(a(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=a(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=o(n);var t=l.test(n);return t||c.test(n)?d(n.slice(2),t?2:8):i.test(n)?r:+n}},593154:function(n,e,t){"use strict";t.r(e),t.d(e,{boxClasses:function(){return a.Z},default:function(){return o.Z}});var o=t(859861),a=t(761276)},388259:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return o.Z},getTypographyUtilityClass:function(){return a.f},typographyClasses:function(){return a.Z}});var o=t(781097),a=t(400196)},704248:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return y}});var o={};t.r(o),t.d(o,{demoComponents:function(){return g},demos:function(){return f},docs:function(){return m},srcComponents:function(){return h}});var a=t(778521),s=t(470079),r=t.t(s,2),i=t(652755),l=t(388259),c=t(593154),d=t(781097),p=t(859861),u=t(735250),m={en:{description:"Use these shorthand utilities for quickly configuring the position of an element.",location:"/docs/data/system/positions/positions.md",rendered:['<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="error-icon" viewBox="0 0 20 20">\n      <path fill-rule="evenodd" d="M2 7.4v5.2a2 2 0 0 0 .586 1.414l3.4 3.4A2 2 0 0 0 7.4 18h5.2a2 2 0 0 0 1.414-.586l3.4-3.4A2 2 0 0 0 18 12.6V7.4a2 2 0 0 0-.586-1.414l-3.4-3.4A2 2 0 0 0 12.6 2H7.4a2 2 0 0 0-1.414.586l-3.4 3.4A2 2 0 0 0 2 7.4Zm11.03-.43a.75.75 0 0 1 0 1.06L11.06 10l1.97 1.97a.75.75 0 1 1-1.06 1.06L10 11.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L8.94 10 6.97 8.03a.75.75 0 0 1 1.06-1.06L10 8.94l1.97-1.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="warning-icon" viewBox="0 0 20 20">\n      <path d="M2.33 17a.735.735 0 0 1-.665-.375.631.631 0 0 1-.094-.375.898.898 0 0 1 .115-.396L9.353 3.062a.621.621 0 0 1 .281-.27.85.85 0 0 1 .729 0 .622.622 0 0 1 .281.27l7.667 12.792c.07.125.108.257.114.396a.63.63 0 0 1-.093.375.842.842 0 0 1-.271.27.728.728 0 0 1-.394.105H2.33Zm7.664-2.5c.211 0 .39-.072.536-.214a.714.714 0 0 0 .218-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.531-.22.736.736 0 0 0-.536.215.714.714 0 0 0-.219.531c0 .212.072.39.215.536.143.146.32.219.531.219Zm0-2.5c.211 0 .39-.072.536-.216a.72.72 0 0 0 .218-.534v-2.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.531-.216.734.734 0 0 0-.536.216.72.72 0 0 0-.219.534v2.5c0 .212.072.39.215.534a.72.72 0 0 0 .531.216Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="success-icon" viewBox="0 0 20 20">\n      <path d="m8.938 10.875-1.25-1.23a.718.718 0 0 0-.521-.228.718.718 0 0 0-.521.229.73.73 0 0 0 0 1.062l1.77 1.771c.153.153.327.23.521.23a.718.718 0 0 0 .521-.23l3.896-3.896a.73.73 0 0 0 0-1.062.718.718 0 0 0-.52-.23.718.718 0 0 0-.521.23l-3.376 3.354ZM10 18a7.796 7.796 0 0 1-3.104-.625 8.065 8.065 0 0 1-2.552-1.719 8.064 8.064 0 0 1-1.719-2.552A7.797 7.797 0 0 1 2 10c0-1.111.208-2.15.625-3.115a8.064 8.064 0 0 1 4.27-4.26A7.797 7.797 0 0 1 10 2c1.111 0 2.15.208 3.115.625a8.096 8.096 0 0 1 4.26 4.26C17.792 7.851 18 8.89 18 10a7.797 7.797 0 0 1-.625 3.104 8.066 8.066 0 0 1-4.26 4.271A7.774 7.774 0 0 1 10 18Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="info-icon" viewBox="0 0 20 20">\n      <path d="M9.996 14c.21 0 .39-.072.535-.216a.72.72 0 0 0 .219-.534v-3.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.532-.216.734.734 0 0 0-.535.216.72.72 0 0 0-.219.534v3.5c0 .213.071.39.214.534a.72.72 0 0 0 .532.216Zm0-6.5c.21 0 .39-.071.535-.214a.714.714 0 0 0 .219-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.532-.219.736.736 0 0 0-.535.214.714.714 0 0 0-.219.532c0 .21.071.39.214.535.143.146.32.219.532.219Zm.01 10.5a7.81 7.81 0 0 1-3.11-.625 8.065 8.065 0 0 1-2.552-1.719 8.066 8.066 0 0 1-1.719-2.551A7.818 7.818 0 0 1 2 9.99c0-1.104.208-2.14.625-3.105a8.066 8.066 0 0 1 4.27-4.26A7.818 7.818 0 0 1 10.009 2a7.75 7.75 0 0 1 3.106.625 8.083 8.083 0 0 1 4.26 4.265A7.77 7.77 0 0 1 18 9.994a7.81 7.81 0 0 1-.625 3.11 8.066 8.066 0 0 1-1.719 2.552 8.083 8.083 0 0 1-2.546 1.719 7.77 7.77 0 0 1-3.104.625Z"/>\n      </symbol>\n      </svg>','\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n        <symbol id="anchor-link-icon" viewBox="0 0 12 6">\n          <path d="M8.9176 0.083252H7.1676C6.84677 0.083252 6.58427 0.345752 6.58427 0.666585C6.58427 0.987419 6.84677 1.24992 7.1676 1.24992H8.9176C9.8801 1.24992 10.6676 2.03742 10.6676 2.99992C10.6676 3.96242 9.8801 4.74992 8.9176 4.74992H7.1676C6.84677 4.74992 6.58427 5.01242 6.58427 5.33325C6.58427 5.65409 6.84677 5.91659 7.1676 5.91659H8.9176C10.5276 5.91659 11.8343 4.60992 11.8343 2.99992C11.8343 1.38992 10.5276 0.083252 8.9176 0.083252ZM3.6676 2.99992C3.6676 3.32075 3.9301 3.58325 4.25094 3.58325H7.75094C8.07177 3.58325 8.33427 3.32075 8.33427 2.99992C8.33427 2.67909 8.07177 2.41659 7.75094 2.41659H4.25094C3.9301 2.41659 3.6676 2.67909 3.6676 2.99992ZM4.83427 4.74992H3.08427C2.12177 4.74992 1.33427 3.96242 1.33427 2.99992C1.33427 2.03742 2.12177 1.24992 3.08427 1.24992H4.83427C5.1551 1.24992 5.4176 0.987419 5.4176 0.666585C5.4176 0.345752 5.1551 0.083252 4.83427 0.083252H3.08427C1.47427 0.083252 0.167603 1.38992 0.167603 2.99992C0.167603 4.60992 1.47427 5.91659 3.08427 5.91659H4.83427C5.1551 5.91659 5.4176 5.65409 5.4176 5.33325C5.4176 5.01242 5.1551 4.74992 4.83427 4.74992Z" />\n        </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n      <path d="M22.8481 4C22.8481 2.9 21.9481 2 20.8481 2H4.84814C3.74814 2 2.84814 2.9 2.84814 4V16C2.84814 17.1 3.74814 18 4.84814 18H18.8481L22.8481 22V4ZM16.8481 11H13.8481V14C13.8481 14.55 13.3981 15 12.8481 15C12.2981 15 11.8481 14.55 11.8481 14V11H8.84814C8.29814 11 7.84814 10.55 7.84814 10C7.84814 9.45 8.29814 9 8.84814 9H11.8481V6C11.8481 5.45 12.2981 5 12.8481 5C13.3981 5 13.8481 5.45 13.8481 6V9H16.8481C17.3981 9 17.8481 9.45 17.8481 10C17.8481 10.55 17.3981 11 16.8481 11Z" />\n      </symbol>\n      </svg>','<h1>Positions</h1><p class="description">Use these shorthand utilities for quickly configuring the position of an element.</p>\n\n<h2 id="z-index"><a href="#z-index" class="title-link-to-anchor">z-index<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="z-index"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2>',{demo:"ZIndex.js",defaultCodeOpen:!1,bg:!0},'<div class="MuiCode-root"><pre><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Box</span></span> <span class="token attr-name">sx</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token string">\'tooltip\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Box</span></span> <span class="token attr-name">sx</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token string">\'modal\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="api"><a href="#api" class="title-link-to-anchor">API<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a><button title="Post a comment" class="comment-link" data-feedback-hash="api"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><div class="MuiCode-root"><pre><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> positions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@mui/system\'</span><span class="token punctuation">;</span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<table>\n<thead>\n<tr>\n<th align="left">Import name</th>\n<th align="left">Prop</th>\n<th align="left">CSS property</th>\n<th align="left">Theme key</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left"><code>position</code></td>\n<td align="left"><code>position</code></td>\n<td align="left"><code>position</code></td>\n<td align="left">none</td>\n</tr>\n<tr>\n<td align="left"><code>zIndex</code></td>\n<td align="left"><code>zIndex</code></td>\n<td align="left"><code>z-index</code></td>\n<td align="left"><a href="/material-ui/customization/default-theme/?expand-path=$.zIndex"><code>zIndex</code></a></td>\n</tr>\n<tr>\n<td align="left"><code>top</code></td>\n<td align="left"><code>top</code></td>\n<td align="left"><code>top</code></td>\n<td align="left">none</td>\n</tr>\n<tr>\n<td align="left"><code>right</code></td>\n<td align="left"><code>right</code></td>\n<td align="left"><code>right</code></td>\n<td align="left">none</td>\n</tr>\n<tr>\n<td align="left"><code>bottom</code></td>\n<td align="left"><code>bottom</code></td>\n<td align="left"><code>bottom</code></td>\n<td align="left">none</td>\n</tr>\n<tr>\n<td align="left"><code>left</code></td>\n<td align="left"><code>left</code></td>\n<td align="left"><code>left</code></td>\n<td align="left">none</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"z-index",level:2,hash:"z-index",children:[]},{text:"API",level:2,hash:"api",children:[]}],title:"Positions",headers:{components:[]}}},f={"ZIndex.js":{module:"./ZIndex.js",raw:"import * as React from 'react';\nimport Typography from '@mui/material/Typography';\nimport Box from '@mui/material/Box';\n\nexport default function ZIndex() {\n  return (\n    <Typography\n      component=\"div\"\n      variant=\"body1\"\n      style={{\n        height: 100,\n        width: '100%',\n        position: 'relative',\n      }}\n    >\n      <Box\n        sx={{\n          bgcolor: (theme) =>\n            theme.palette.mode === 'dark' ? '#101010' : 'grey.600',\n          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.50'),\n          border: '1px solid',\n          borderColor: (theme) =>\n            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',\n          p: 2,\n          borderRadius: 2,\n          fontSize: '0.875rem',\n          fontWeight: '700',\n          position: 'absolute',\n          top: 40,\n          left: '40%',\n          zIndex: 'tooltip',\n        }}\n      >\n        z-index tooltip\n      </Box>\n      <Box\n        sx={{\n          bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'grey.800' : '#fff'),\n          color: (theme) =>\n            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',\n          border: '1px solid',\n          borderColor: (theme) =>\n            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',\n          p: 2,\n          borderRadius: 2,\n          fontSize: '0.875rem',\n          fontWeight: '700',\n          position: 'absolute',\n          top: 0,\n          left: '43%',\n          zIndex: 'modal',\n        }}\n      >\n        z-index modal\n      </Box>\n    </Typography>\n  );\n}\n",moduleTS:"./ZIndex.js",rawTS:"import * as React from 'react';\nimport Typography from '@mui/material/Typography';\nimport Box from '@mui/material/Box';\n\nexport default function ZIndex() {\n  return (\n    <Typography\n      component=\"div\"\n      variant=\"body1\"\n      style={{\n        height: 100,\n        width: '100%',\n        position: 'relative',\n      }}\n    >\n      <Box\n        sx={{\n          bgcolor: (theme) =>\n            theme.palette.mode === 'dark' ? '#101010' : 'grey.600',\n          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.50'),\n          border: '1px solid',\n          borderColor: (theme) =>\n            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',\n          p: 2,\n          borderRadius: 2,\n          fontSize: '0.875rem',\n          fontWeight: '700',\n          position: 'absolute',\n          top: 40,\n          left: '40%',\n          zIndex: 'tooltip',\n        }}\n      >\n        z-index tooltip\n      </Box>\n      <Box\n        sx={{\n          bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'grey.800' : '#fff'),\n          color: (theme) =>\n            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',\n          border: '1px solid',\n          borderColor: (theme) =>\n            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',\n          p: 2,\n          borderRadius: 2,\n          fontSize: '0.875rem',\n          fontWeight: '700',\n          position: 'absolute',\n          top: 0,\n          left: '43%',\n          zIndex: 'modal',\n        }}\n      >\n        z-index modal\n      </Box>\n    </Typography>\n  );\n}\n"}};f.scope={process:{},import:{react:r,"@mui/material/Typography":l,"@mui/material/Box":c}};var g={"./ZIndex.js":function(){return(0,u.jsxs)(d.Z,{component:"div",variant:"body1",style:{height:100,width:"100%",position:"relative"},children:[(0,u.jsx)(p.Z,{sx:{bgcolor:function(n){return"dark"===n.palette.mode?"#101010":"grey.600"},color:function(n){return"dark"===n.palette.mode?"grey.300":"grey.50"},border:"1px solid",borderColor:function(n){return"dark"===n.palette.mode?"grey.800":"grey.300"},p:2,borderRadius:2,fontSize:"0.875rem",fontWeight:"700",position:"absolute",top:40,left:"40%",zIndex:"tooltip"},children:"z-index tooltip"}),(0,u.jsx)(p.Z,{sx:{bgcolor:function(n){return"dark"===n.palette.mode?"grey.800":"#fff"},color:function(n){return"dark"===n.palette.mode?"grey.300":"grey.800"},border:"1px solid",borderColor:function(n){return"dark"===n.palette.mode?"grey.800":"grey.300"},p:2,borderRadius:2,fontSize:"0.875rem",fontWeight:"700",position:"absolute",top:0,left:"43%",zIndex:"modal"},children:"z-index modal"})]})}},h={};function y(){return(0,u.jsx)(i.Z,(0,a.Z)({},o))}},652755:function(n,e,t){"use strict";t.d(e,{Z:function(){return b}});var o,a=t(778521),s=t(470079),r=t(639519),i=t.n(r),l=t(389136),c=t(302312),d=t(513182),p=t(597683),u=t(42141),m=t(162119),f=t(871379),g=t(775196),h=t(694366),y=t(74077),v=t(735250);function x(n){var e=n.mode,t=(0,d.tv)().setMode;return s.useEffect(function(){t(e)},[e,t]),null}function b(n){var e=(0,c.Z)(),t=(0,l.useRouter)(),r=(0,u.ln)(t.asPath).canonicalAs,i=n.disableAd,b=void 0!==i&&i,k=n.disableToc,C=n.disableCssVarsProvider,w=n.demos,z=void 0===w?{}:w,Z=n.docs,T=n.demoComponents,I=n.srcComponents,B=Z[(0,f.fO)()]||Z.en,M=r.startsWith("/joy-ui/")&&!(void 0!==C&&C),j=M?d.lL:s.Fragment,H=M?g.BrandingProvider:s.Fragment,P=(0,a.Z)({},M&&{mode:e.palette.mode});return(0,v.jsxs)(m.Z,{cardOptions:{description:B.headers.cardDescription,title:B.headers.cardTitle},description:B.description,disableAd:b,disableToc:void 0!==k&&k,location:B.location,title:B.title,toc:B.toc,children:[b?null:o||(o=(0,v.jsx)(g.BrandingProvider,{children:(0,v.jsx)(y.Z,{children:(0,v.jsx)(h.ZP,{})})})),(0,v.jsxs)(j,{children:[M&&(0,v.jsx)(x,{mode:e.palette.mode}),B.rendered.map(function(n,t){return(0,v.jsx)(p.Z,{demoComponents:T,demos:z,disableAd:b,localizedDoc:B,renderedMarkdownOrDemo:n,srcComponents:I,theme:e,WrapperComponent:H,wrapperProps:P},"demos-section-".concat(t))})]})]})}x.propTypes={mode:i().oneOf(["light","dark"])}},285839:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/system/positions",function(){return t(704248)}])},884835:function(n,e,t){"use strict";var o=t(311596);function a(){}function s(){}s.resetWarningCache=a,n.exports=function(){function n(n,e,t,a,s,r){if(r!==o){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:s,resetWarningCache:a};return t.PropTypes=t,t}},639519:function(n,e,t){n.exports=t(884835)()},311596:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(n){n.O(0,[49774,9535,73976,97146,59727,85925,17376,41373,15686,34800,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,42378,20759,16067,40332,97683,92888,40179],function(){return n(n.s=285839)}),_N_E=n.O()}]);