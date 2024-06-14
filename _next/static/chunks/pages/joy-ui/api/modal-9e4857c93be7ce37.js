(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30202],{696689:function(e,t,o){var n=o(371017)(function(e,t,o){return e+(o?"-":"")+t.toLowerCase()});e.exports=n},705794:function(e,t,o){var n=o(117431),r=n.createRender,a=n.getHeaders,c=n.getTitle,s=n.renderMarkdown;e.exports={createRender:r,getHeaders:a,getTitle:c,renderMarkdown:s}},117431:function(e,t,o){var n=o(582103).default,r=o(436578),a=o(113065).default,c=o(95018).default,s=o(315599).marked,i=o(891271),u=o(520740),l={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,headerPrefix:!1,headerIds:!1,mangle:!1},d=/---[\r\n]([\s\S]*)[\r\n]---/,p=/# (.*)[\r\n]/,f=/<p class="description">([\s\S]*?)<\/p>/,h=/(.*?):[\r\n]?\s+(\[[^\]]+\]|.*)/g,m=/^\s*$/,F=/[&<>"']/,b=/[&<>"']/g,g=/[<>"']|&(?!#?\w+;)/,v=/[<>"']|&(?!#?\w+;)/g,D={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},y=function(e){return D[e]};function k(e,t){if(t){if(F.test(e))return e.replace(b,y)}else if(g.test(e))return e.replace(v,y);return e}var w=["https://m2.material.io/","https://m3.material.io/","https://material.io/","https://getbootstrap.com/","https://icons.getbootstrap.com/","https://pictogrammers.com/","https://www.w3.org/","https://tailwindcss.com/","https://heroicons.com/","https://react-icons.github.io/","https://fontawesome.com/","https://www.radix-ui.com/","https://react-spectrum.adobe.com/","https://headlessui.com/","https://refine.dev/","https://scaffoldhub.io/","https://marmelab.com/"];e.exports={createRender:function(e){var t=e.headingHashes,o=e.toc,a=e.userLanguage,c=e.options,d={},p=-1;return function(f){var h=new s.Renderer;return h.heading=function(e,n){if(1===n||n>=4)return"<h".concat(n,">").concat(e,"</h").concat(n,">");var c,s=e.replace(/<a\b[^>]*>/gi,"").replace(/<\/a>/gi,"");s=s.replace(/<code\b[^>]*>/gi,"").replace(/<\/code>/gi,""),"en"===a?c=i(s,t):(p+=1,(c=r(t)[p])||(c=i(s,d)));var u=s.replace(/([^\s]\()/g,"$1&#8203;");if(2===n)o.push({text:u,level:n,hash:c,children:[]});else if(3===n){if(!o[o.length-1])throw Error("docs-infra: Missing parent level for: ".concat(s,"\n"));o[o.length-1].children.push({text:u,level:n,hash:c})}return["<h".concat(n,' id="').concat(c,'"><a href="#').concat(c,'" class="title-link-to-anchor">').concat(e,'<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a>'),'<button title="Post a comment" class="comment-link" data-feedback-hash="'.concat(c,'">'),'<svg><use xlink:href="#comment-link-icon" /></svg>',"</button>","</h".concat(n,">")].join("")},h.link=function(t,o,n){var r="";o&&(r+=' title="'.concat(o,'"')),w.some(function(e){return -1!==t.indexOf(e)})&&(r=' target="_blank" rel="noopener nofollow"');var s=t;return function(e,t,o){var n=new URL(e,"https://mui.com/");if(/\/{2,}$/.test(n.pathname))throw Error(["docs-infra: Duplicated trailing slashes. The following link:","[".concat(t,"](").concat(e,") in ").concat(o.location," has duplicated trailing slashes, please only add one."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("mui.com"===n.host){if("/"!==n.pathname[n.pathname.length-1])throw Error(["docs-infra: Missing trailing slash. The following link:","[".concat(t,"](").concat(e,") in ").concat(o.location," is missing a trailing slash, please add it."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("#"!==e[0]&&!(e.startsWith("https://")||e.startsWith("http://"))&&"/"!==e[0])throw Error(["docs-infra: Missing leading slash. The following link:","[".concat(t,"](").concat(e,") in ").concat(o.location," is missing a leading slash, please add it."),""].join("\n"))}}(t,n,e),"en"===a||0!==t.indexOf("/")||c.ignoreLanguagePages(t)||(s="/".concat(a).concat(t)),s.startsWith("".concat(c.env.SOURCE_CODE_REPO,"/blob/-/"))&&(s=s.replace("".concat(c.env.SOURCE_CODE_REPO,"/blob/-/"),"".concat(c.env.SOURCE_CODE_REPO,"/blob/v").concat(c.env.LIB_VERSION,"/"))),'<a href="'.concat(s,'"').concat(r,">").concat(n,"</a>")},h.code=function(e,t,o){var n,r=(t||"").match(/\S*/)[0],a=null===(n=(t||"").match(/title="([^"]*)"/))||void 0===n?void 0:n[1],c=u(e,r);return(null!=c&&c!==e&&(o=!0,e=c),e="".concat(e.replace(/\n$/,""),"\n"),r)?'<div class="MuiCode-root">'.concat(a?'<div class="MuiCode-title">'.concat(a,"</div>"):"",'<pre><code class="language-').concat(k(r,!0),'">').concat(o?e:k(e,!0),"</code></pre>").concat('<button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>',"\n"):"<pre><code>".concat(o?e:k(e,!0),"</code></pre>\n")},s.use({extensions:[{name:"callout",level:"block",start:function(e){var t=e.match(/:::/);return t?t.index:void 0},tokenizer:function(e){var t=/^ {0,3}(:{3,}(?=[^:\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~:]* *(?=\n|$)|$)/.exec(e);if(t){var o={type:"callout",raw:t[0],text:t[3].trim(),severity:t[2],tokens:[]};return this.lexer.blockTokens(o.text,o.tokens),o}},renderer:function(e){return'<aside class="MuiCallout-root MuiCallout-'.concat(e.severity,'">\n            ').concat(["info","success","warning","error"].includes(e.severity)?['<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">','<use class="MuiCode-copied-icon" xlink:href="#'.concat(e.severity,'-icon" />'),"</svg>"].join("\n"):"",'\n            <div class="MuiCallout-content">\n            ').concat(this.parser.parse(e.tokens),"\n</div></aside>")}}]}),s(f,n(n({},l),{},{renderer:h}))}},getContents:function(e){return e.replace(d,"").split(/^{{("(?:demo|component)":.*)}}$/gm).flatMap(function(e){return e.split(/^(<codeblock(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/codeblock>)$/gm)}).flatMap(function(e){return e.split(/^(<featureList(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/featureList>)$/gm)}).filter(function(e){return!m.test(e)})},getDescription:function(e){var t=e.match(f);if(null!==t)return t[1].trim().replace(/`/g,"")},getCodeblock:function(e){if(e.startsWith("<codeblock")){var t,o=null===(t=e.match(/^<codeblock [^>]*storageKey=["|'](\S*)["|'].*>/m))||void 0===t?void 0:t[1];return{type:"codeblock",data:c(e.matchAll(/^```((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*) ((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)\n((?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\n```/gm)).map(function(e){var t=a(e,4);return{language:t[1],tab:t[2],code:t[3]}}).filter(function(e){return void 0!==e.tab&&!m.test(e.code)}),storageKey:o}}},getFeatureList:function(e){if(e.startsWith("<featureList"))return['<ul class="feature-list">'].concat(c(e.split("\n").filter(function(e){return e.startsWith("- ")}).map(function(e){return e.slice(2)}).map(function(e){return"<li>".concat(e,"</li>")})),["</ul>"]).join("")},getHeaders:function(e){var t=e.match(d);if(!t)return{components:[]};t=t[1];try{for(var o,n={};null!==(o=h.exec(t));){var r=o[1],a=o[2].replace(/(.*)/,"$1");"["===a[0]?(a=(a=a.replace(/'/g,'"')).replace(/,\s+\]$/g,"]"),n[r]=JSON.parse(a)):n[r]=a.replace(/^'|'$/g,"")}return n.components?n.components=n.components.split(",").map(function(e){return e.trim()}).sort():n.components=[],n.hooks?n.hooks=n.hooks.split(",").map(function(e){return e.trim()}).sort():n.hooks=[],n}catch(e){throw Error("docs-infra: ".concat(e.message," in getHeader(markdown) with markdown: \n\n").concat(t,"\n"))}},getTitle:function(e){var t=e.match(p);return null===t?"":t[1].replace(/`/g,"")},renderMarkdown:function(e){return/[-*+] `([A-Za-z]+)`/g.test(e)?s.parse(e,l):s.parseInline(e,l).replace(/(\r?\n){2}/g,"<br>").replace(/\r?\n/g," ")}}},891271:function(e){e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function e(t,o){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=1===n?t:"".concat(t,"-").concat(n);return o[r]?e(t,o,n+1):(o[r]=!0,r)}(encodeURI(e.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g,"").replace(/[!@#$%^&*()=_+[\]{}`~;:'"|,.<>/?\s]+/g,"-").replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])\uFE0F?/g,"").replace(/-+/g,"-").replace(/^-|-$/g,"")),t)}},315892:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return s}}),o(470079);var n=o(512589),r=o(412007),a=JSON.parse('{"props":{"children":{"type":{"name":"custom","description":"element"},"required":true},"open":{"type":{"name":"bool"},"required":true},"component":{"type":{"name":"elementType"}},"container":{"type":{"name":"union","description":"HTML element<br>&#124;&nbsp;func"}},"disableAutoFocus":{"type":{"name":"bool"},"default":"false"},"disableEnforceFocus":{"type":{"name":"bool"},"default":"false"},"disableEscapeKeyDown":{"type":{"name":"bool"},"default":"false"},"disablePortal":{"type":{"name":"bool"},"default":"false"},"disableRestoreFocus":{"type":{"name":"bool"},"default":"false"},"disableScrollLock":{"type":{"name":"bool"},"default":"false"},"hideBackdrop":{"type":{"name":"bool"},"default":"false"},"keepMounted":{"type":{"name":"bool"},"default":"false"},"onClose":{"type":{"name":"func"},"signature":{"type":"function(event: object, reason: string) => void","describedArgs":["event","reason"]}},"slotProps":{"type":{"name":"shape","description":"{ backdrop?: func<br>&#124;&nbsp;object, root?: func<br>&#124;&nbsp;object }"},"default":"{}"},"slots":{"type":{"name":"shape","description":"{ backdrop?: elementType, root?: elementType }"},"default":"{}","additionalInfo":{"slotsApi":true}},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"},"additionalInfo":{"sx":true}}},"name":"Modal","imports":["import Modal from \'@mui/joy/Modal\';","import { Modal } from \'@mui/joy\';"],"slots":[{"name":"root","description":"The component that renders the root.","default":"\'div\'","class":"MuiModal-root"},{"name":"backdrop","description":"The component that renders the backdrop.","default":"\'div\'","class":"MuiModal-backdrop"}],"classes":[{"key":"hidden","className":"MuiModal-hidden","description":"Class name applied to the root element when open is false.","isGlobal":false}],"spread":true,"themeDefaultProps":false,"muiName":"JoyModal","forwardsRefTo":"HTMLDivElement","filename":"/packages/mui-joy/src/Modal/Modal.tsx","inheritance":null,"demos":"<ul><li><a href=\\"/joy-ui/react-modal/\\">Modal</a></li></ul>","cssComponent":false}'),c=o(735250);function s(e){var t=e.descriptions,o=e.pageContent;return(0,c.jsx)(n.Z,{descriptions:t,pageContent:o})}s.getInitialProps=function(){var e=o(782849);return{descriptions:(0,r.Z)(e),pageContent:a}}},412007:function(e,t,o){"use strict";o.d(t,{Z:function(){return c}});var n=o(705794),r=o(187509),a=/-([a-z]{2})\.json$/;function c(e){var t={},o={},c=[];return e.keys().forEach(function(e){e.match(a)?c.push(e):c=[e].concat(c)}),c.forEach(function(s){var i=s.match(a),u=null!==i?i[1]:"en",l=e(s)||null;if(null!==l&&l.componentDescription){var d=[],p=(0,n.createRender)({headingHashes:t,toc:d,userLanguage:u,location:c,options:{ignoreLanguagePages:r.LANGUAGES_IGNORE_PAGES,env:{SOURCE_CODE_REPO:""}}});l.componentDescription=p(l.componentDescription),l.componentDescriptionToc=d}o[u]=l}),o}},544448:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/joy-ui/api/modal",function(){return o(315892)}])},782849:function(e,t,o){var n={"./modal.json":175373};function r(e){return o(a(e))}function a(e){if(!o.o(n,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=a,e.exports=r,r.id=782849},36790:function(e,t,o){"use strict";function n(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}o.d(t,{Z:function(){return n}})},376757:function(e,t,o){"use strict";o.d(t,{Z:function(){return l}});var n=o(136729),r=o(267765),a=o(861963);function c(e){return(c=r?a.bind():function(e){return e.__proto__||a(e)})(e)}function s(){try{var e=!Boolean.prototype.valueOf.call(n(Boolean,[],function(){}))}catch(e){}return(s=function(){return!!e})()}var i=o(931467),u=o(36790);function l(e){var t=s();return function(){var o,r=c(e);if(t){var a=c(this).constructor;o=n(r,arguments,a)}else o=r.apply(this,arguments);return function(e,t){if(t&&("object"==(0,i.Z)(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return(0,u.Z)(e)}(this,o)}}},206782:function(e,t,o){"use strict";o.d(t,{Z:function(){return c}});var n=o(17800),r=o(303268),a=o(909101);function c(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=n(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r(e,"prototype",{writable:!1}),t&&(0,a.Z)(e,t)}},909101:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var n=o(267765);function r(e,t){return(r=n?n.bind():function(e,t){return e.__proto__=t,e})(e,t)}},175373:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"children":{"description":"A single child content element.","requiresRef":true},"component":{"description":"The component used for the root node. Either a string to use a HTML element or a component."},"container":{"description":"An HTML element or function that returns one. The <code>container</code> will have the portal children appended to it.<br>You can also provide a callback, which is called in a React layout effect. This lets you set the container from a ref, and also makes server-side rendering possible.<br>By default, it uses the body of the top-level document object, so it&#39;s simply <code>document.body</code> most of the time."},"disableAutoFocus":{"description":"If <code>true</code>, the modal will not automatically shift focus to itself when it opens, and replace it to the last focused element when it closes. This also works correctly with any modal children that have the <code>disableAutoFocus</code> prop.<br>Generally this should never be set to <code>true</code> as it makes the modal less accessible to assistive technologies, like screen readers."},"disableEnforceFocus":{"description":"If <code>true</code>, the modal will not prevent focus from leaving the modal while open.<br>Generally this should never be set to <code>true</code> as it makes the modal less accessible to assistive technologies, like screen readers."},"disableEscapeKeyDown":{"description":"If <code>true</code>, hitting escape will not fire the <code>onClose</code> callback."},"disablePortal":{"description":"The <code>children</code> will be under the DOM hierarchy of the parent component."},"disableRestoreFocus":{"description":"If <code>true</code>, the modal will not restore focus to previously focused element once modal is hidden or unmounted."},"disableScrollLock":{"description":"Disable the scroll lock behavior."},"hideBackdrop":{"description":"If <code>true</code>, the backdrop is not rendered."},"keepMounted":{"description":"Always keep the children in the DOM. This prop can be useful in SEO situation or when you want to maximize the responsiveness of the Modal."},"onClose":{"description":"Callback fired when the component requests to be closed. The <code>reason</code> parameter can optionally be used to control the response to <code>onClose</code>.","typeDescriptions":{"event":"The event source of the callback.","reason":"Can be: <code>&quot;escapeKeyDown&quot;</code>, <code>&quot;backdropClick&quot;</code>, <code>&quot;closeClick&quot;</code>."}},"open":{"description":"If <code>true</code>, the component is shown."},"slotProps":{"description":"The props used for each slot inside."},"slots":{"description":"The components used for each slot inside."},"sx":{"description":"The system prop that allows defining system overrides as well as additional CSS styles."}},"classDescriptions":{"hidden":{"description":"Class name applied to {{nodeName}} when {{conditions}}.","nodeName":"the root element","conditions":"open is false"}},"slotDescriptions":{"backdrop":"The component that renders the backdrop.","root":"The component that renders the root."}}')}},function(e){e.O(0,[49774,9535,73976,97146,59727,85925,17376,17103,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,42378,20759,12589,92888,40179],function(){return e(e.s=544448)}),_N_E=e.O()}]);