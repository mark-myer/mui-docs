(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64153,39519],{333897:function(e,n,t){var o=t(915012),i=/^\s+/;e.exports=function(e){return e?e.slice(0,o(e)+1).replace(i,""):e}},915012:function(e){var n=/\s/;e.exports=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},889678:function(e,n,t){var o=t(706627),i=t(885365),a=t(67948),r=Math.max,s=Math.min;e.exports=function(e,n,t){var l,c,d,u,p,m,v=0,f=!1,h=!1,g=!0;if("function"!=typeof e)throw TypeError("Expected a function");function y(n){var t=l,o=c;return l=c=void 0,v=n,u=e.apply(o,t)}function w(e){var t=e-m,o=e-v;return void 0===m||t>=n||t<0||h&&o>=d}function b(){var e,t,o,a=i();if(w(a))return x(a);p=setTimeout(b,(e=a-m,t=a-v,o=n-e,h?s(o,d-t):o))}function x(e){return(p=void 0,g&&l)?y(e):(l=c=void 0,u)}function C(){var e,t=i(),o=w(t);if(l=arguments,c=this,m=t,o){if(void 0===p)return v=e=m,p=setTimeout(b,n),f?y(e):u;if(h)return clearTimeout(p),p=setTimeout(b,n),y(m)}return void 0===p&&(p=setTimeout(b,n)),u}return n=a(n)||0,o(t)&&(f=!!t.leading,d=(h="maxWait"in t)?r(a(t.maxWait)||0,n):d,g="trailing"in t?!!t.trailing:g),C.cancel=function(){void 0!==p&&clearTimeout(p),v=0,l=m=c=p=void 0},C.flush=function(){return void 0===p?u:x(i())},C}},706627:function(e){e.exports=function(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)}},885365:function(e,n,t){var o=t(573401);e.exports=function(){return o.Date.now()}},123763:function(e,n,t){var o=t(889678),i=t(706627);e.exports=function(e,n,t){var a=!0,r=!0;if("function"!=typeof e)throw TypeError("Expected a function");return i(t)&&(a="leading"in t?!!t.leading:a,r="trailing"in t?!!t.trailing:r),o(e,n,{leading:a,maxWait:n,trailing:r})}},67948:function(e,n,t){var o=t(333897),i=t(706627),a=t(42848),r=0/0,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return r;if(i(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=i(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=o(e);var t=l.test(e);return t||c.test(e)?d(e.slice(2),t?2:8):s.test(e)?r:+e}},230849:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var o={};t.r(o),t.d(o,{demoComponents:function(){return l},demos:function(){return s},docs:function(){return r},srcComponents:function(){return c}});var i=t(778521);t(470079);var a=t(652755),r={en:{description:"Our vision is to provide an elegant React implementation of the Material Design guidelines that can be customized to fully match your brand.",location:"/docs/data/material/discover-more/vision/vision.md",rendered:['<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="error-icon" viewBox="0 0 20 20">\n      <path fill-rule="evenodd" d="M2 7.4v5.2a2 2 0 0 0 .586 1.414l3.4 3.4A2 2 0 0 0 7.4 18h5.2a2 2 0 0 0 1.414-.586l3.4-3.4A2 2 0 0 0 18 12.6V7.4a2 2 0 0 0-.586-1.414l-3.4-3.4A2 2 0 0 0 12.6 2H7.4a2 2 0 0 0-1.414.586l-3.4 3.4A2 2 0 0 0 2 7.4Zm11.03-.43a.75.75 0 0 1 0 1.06L11.06 10l1.97 1.97a.75.75 0 1 1-1.06 1.06L10 11.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L8.94 10 6.97 8.03a.75.75 0 0 1 1.06-1.06L10 8.94l1.97-1.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="warning-icon" viewBox="0 0 20 20">\n      <path d="M2.33 17a.735.735 0 0 1-.665-.375.631.631 0 0 1-.094-.375.898.898 0 0 1 .115-.396L9.353 3.062a.621.621 0 0 1 .281-.27.85.85 0 0 1 .729 0 .622.622 0 0 1 .281.27l7.667 12.792c.07.125.108.257.114.396a.63.63 0 0 1-.093.375.842.842 0 0 1-.271.27.728.728 0 0 1-.394.105H2.33Zm7.664-2.5c.211 0 .39-.072.536-.214a.714.714 0 0 0 .218-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.531-.22.736.736 0 0 0-.536.215.714.714 0 0 0-.219.531c0 .212.072.39.215.536.143.146.32.219.531.219Zm0-2.5c.211 0 .39-.072.536-.216a.72.72 0 0 0 .218-.534v-2.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.531-.216.734.734 0 0 0-.536.216.72.72 0 0 0-.219.534v2.5c0 .212.072.39.215.534a.72.72 0 0 0 .531.216Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="success-icon" viewBox="0 0 20 20">\n      <path d="m8.938 10.875-1.25-1.23a.718.718 0 0 0-.521-.228.718.718 0 0 0-.521.229.73.73 0 0 0 0 1.062l1.77 1.771c.153.153.327.23.521.23a.718.718 0 0 0 .521-.23l3.896-3.896a.73.73 0 0 0 0-1.062.718.718 0 0 0-.52-.23.718.718 0 0 0-.521.23l-3.376 3.354ZM10 18a7.796 7.796 0 0 1-3.104-.625 8.065 8.065 0 0 1-2.552-1.719 8.064 8.064 0 0 1-1.719-2.552A7.797 7.797 0 0 1 2 10c0-1.111.208-2.15.625-3.115a8.064 8.064 0 0 1 4.27-4.26A7.797 7.797 0 0 1 10 2c1.111 0 2.15.208 3.115.625a8.096 8.096 0 0 1 4.26 4.26C17.792 7.851 18 8.89 18 10a7.797 7.797 0 0 1-.625 3.104 8.066 8.066 0 0 1-4.26 4.271A7.774 7.774 0 0 1 10 18Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="info-icon" viewBox="0 0 20 20">\n      <path d="M9.996 14c.21 0 .39-.072.535-.216a.72.72 0 0 0 .219-.534v-3.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.532-.216.734.734 0 0 0-.535.216.72.72 0 0 0-.219.534v3.5c0 .213.071.39.214.534a.72.72 0 0 0 .532.216Zm0-6.5c.21 0 .39-.071.535-.214a.714.714 0 0 0 .219-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.532-.219.736.736 0 0 0-.535.214.714.714 0 0 0-.219.532c0 .21.071.39.214.535.143.146.32.219.532.219Zm.01 10.5a7.81 7.81 0 0 1-3.11-.625 8.065 8.065 0 0 1-2.552-1.719 8.066 8.066 0 0 1-1.719-2.551A7.818 7.818 0 0 1 2 9.99c0-1.104.208-2.14.625-3.105a8.066 8.066 0 0 1 4.27-4.26A7.818 7.818 0 0 1 10.009 2a7.75 7.75 0 0 1 3.106.625 8.083 8.083 0 0 1 4.26 4.265A7.77 7.77 0 0 1 18 9.994a7.81 7.81 0 0 1-.625 3.11 8.066 8.066 0 0 1-1.719 2.552 8.083 8.083 0 0 1-2.546 1.719 7.77 7.77 0 0 1-3.104.625Z"/>\n      </symbol>\n      </svg>','\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n        <symbol id="anchor-link-icon" viewBox="0 0 12 6">\n          <path d="M8.9176 0.083252H7.1676C6.84677 0.083252 6.58427 0.345752 6.58427 0.666585C6.58427 0.987419 6.84677 1.24992 7.1676 1.24992H8.9176C9.8801 1.24992 10.6676 2.03742 10.6676 2.99992C10.6676 3.96242 9.8801 4.74992 8.9176 4.74992H7.1676C6.84677 4.74992 6.58427 5.01242 6.58427 5.33325C6.58427 5.65409 6.84677 5.91659 7.1676 5.91659H8.9176C10.5276 5.91659 11.8343 4.60992 11.8343 2.99992C11.8343 1.38992 10.5276 0.083252 8.9176 0.083252ZM3.6676 2.99992C3.6676 3.32075 3.9301 3.58325 4.25094 3.58325H7.75094C8.07177 3.58325 8.33427 3.32075 8.33427 2.99992C8.33427 2.67909 8.07177 2.41659 7.75094 2.41659H4.25094C3.9301 2.41659 3.6676 2.67909 3.6676 2.99992ZM4.83427 4.74992H3.08427C2.12177 4.74992 1.33427 3.96242 1.33427 2.99992C1.33427 2.03742 2.12177 1.24992 3.08427 1.24992H4.83427C5.1551 1.24992 5.4176 0.987419 5.4176 0.666585C5.4176 0.345752 5.1551 0.083252 4.83427 0.083252H3.08427C1.47427 0.083252 0.167603 1.38992 0.167603 2.99992C0.167603 4.60992 1.47427 5.91659 3.08427 5.91659H4.83427C5.1551 5.91659 5.4176 5.65409 5.4176 5.33325C5.4176 5.01242 5.1551 4.74992 4.83427 4.74992Z" />\n        </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n      <path d="M22.8481 4C22.8481 2.9 21.9481 2 20.8481 2H4.84814C3.74814 2 2.84814 2.9 2.84814 4V16C2.84814 17.1 3.74814 18 4.84814 18H18.8481L22.8481 22V4ZM16.8481 11H13.8481V14C13.8481 14.55 13.3981 15 12.8481 15C12.2981 15 11.8481 14.55 11.8481 14V11H8.84814C8.29814 11 7.84814 10.55 7.84814 10C7.84814 9.45 8.29814 9 8.84814 9H11.8481V6C11.8481 5.45 12.2981 5 12.8481 5C13.3981 5 13.8481 5.45 13.8481 6V9H16.8481C17.3981 9 17.8481 9.45 17.8481 10C17.8481 10.55 17.3981 11 16.8481 11Z" />\n      </symbol>\n      </svg>','<h1>Vision</h1><p class="description">Our vision is to provide an elegant React implementation of the Material Design guidelines that can be customized to fully match your brand.</p>\n\n<p>The Material Design guidelines are an incredible starting point, but they do not provide guidance on all aspects or needs of an application. In addition to the guidelines-specific implementation, we want Material\xa0UI to become whatever is generally useful for application development, all in the spirit of the Material Design guidelines.</p>\n<p>Therefore, Material\xa0UI will be not only be an implementation of the Material Design guidelines, but a general use UI library of components that are needed by many. This generalized use doesn&#39;t imply any other design methodology. It also means we will have components or combinations that are simply not addressed in the design guidelines.</p>\n<p>We will focus on providing all the low-level tools needed to build a rich user-interface with React. Once we implement the Material Design guidelines (which is a bar set quite high), you should be able to take advantage of it for your own business with any style customization needed. We want to see companies succeeding using Material\xa0UI in a way that matches their brand, close to the material philosophy or not. We don&#39;t want them to feel that their UI simply looks like another Google product.</p>\n<p>From a developer&#39;s point of view, we want Material\xa0UI to:</p>\n<ul>\n<li>Deliver on fully encapsulated / composable React components.</li>\n<li>Be themeable / customizable.</li>\n<li>Be cross browser compatible and accessible.</li>\n<li>Promote developer joy, a sense of community, and an environment where new and experienced developers can learn from each other.</li>\n</ul>\n'],toc:[],title:"Vision",headers:{components:[]}}},s={};s.scope={process:{},import:{}};var l={},c={},d=t(735250);function u(){return(0,d.jsx)(a.Z,(0,i.Z)({},o))}},652755:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var o,i=t(778521),a=t(470079),r=t(639519),s=t.n(r),l=t(389136),c=t(302312),d=t(513182),u=t(597683),p=t(42141),m=t(162119),v=t(871379),f=t(775196),h=t(694366),g=t(74077),y=t(735250);function w(e){var n=e.mode,t=(0,d.tv)().setMode;return a.useEffect(function(){t(n)},[n,t]),null}function b(e){var n=(0,c.Z)(),t=(0,l.useRouter)(),r=(0,p.ln)(t.asPath).canonicalAs,s=e.disableAd,b=void 0!==s&&s,x=e.disableToc,C=e.disableCssVarsProvider,T=e.demos,M=void 0===T?{}:T,H=e.docs,Z=e.demoComponents,_=e.srcComponents,O=H[(0,v.fO)()]||H.en,A=r.startsWith("/joy-ui/")&&!(void 0!==C&&C),V=A?d.lL:a.Fragment,k=A?f.BrandingProvider:a.Fragment,E=(0,i.Z)({},A&&{mode:n.palette.mode});return(0,y.jsxs)(m.Z,{cardOptions:{description:O.headers.cardDescription,title:O.headers.cardTitle},description:O.description,disableAd:b,disableToc:void 0!==x&&x,location:O.location,title:O.title,toc:O.toc,children:[b?null:o||(o=(0,y.jsx)(f.BrandingProvider,{children:(0,y.jsx)(g.Z,{children:(0,y.jsx)(h.ZP,{})})})),(0,y.jsxs)(V,{children:[A&&(0,y.jsx)(w,{mode:n.palette.mode}),O.rendered.map(function(e,t){return(0,y.jsx)(u.Z,{demoComponents:Z,demos:M,disableAd:b,localizedDoc:O,renderedMarkdownOrDemo:e,srcComponents:_,theme:n,WrapperComponent:k,wrapperProps:E},"demos-section-".concat(t))})]})]})}w.propTypes={mode:s().oneOf(["light","dark"])}},819933:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/discover-more/vision",function(){return t(230849)}])},884835:function(e,n,t){"use strict";var o=t(311596);function i(){}function a(){}a.resetWarningCache=i,e.exports=function(){function e(e,n,t,i,a,r){if(r!==o){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:a,resetWarningCache:i};return t.PropTypes=t,t}},639519:function(e,n,t){e.exports=t(884835)()},311596:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[49774,9535,73976,97146,59727,85925,17376,41373,15686,34800,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,42378,20759,16067,40332,97683,92888,40179],function(){return e(e.s=819933)}),_N_E=e.O()}]);