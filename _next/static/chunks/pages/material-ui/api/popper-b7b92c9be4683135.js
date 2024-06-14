(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68295],{696689:function(e,t,n){var o=n(371017)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=o},705794:function(e,t,n){var o=n(117431),r=o.createRender,a=o.getHeaders,i=o.getTitle,s=o.renderMarkdown;e.exports={createRender:r,getHeaders:a,getTitle:i,renderMarkdown:s}},117431:function(e,t,n){var o=n(582103).default,r=n(436578),a=n(113065).default,i=n(95018).default,s=n(315599).marked,c=n(891271),u=n(520740),p={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,headerPrefix:!1,headerIds:!1,mangle:!1},l=/---[\r\n]([\s\S]*)[\r\n]---/,d=/# (.*)[\r\n]/,f=/<p class="description">([\s\S]*?)<\/p>/,h=/(.*?):[\r\n]?\s+(\[[^\]]+\]|.*)/g,m=/^\s*$/,b=/[&<>"']/,F=/[&<>"']/g,g=/[<>"']|&(?!#?\w+;)/,v=/[<>"']|&(?!#?\w+;)/g,D={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},y=function(e){return D[e]};function w(e,t){if(t){if(b.test(e))return e.replace(F,y)}else if(g.test(e))return e.replace(v,y);return e}var E=["https://m2.material.io/","https://m3.material.io/","https://material.io/","https://getbootstrap.com/","https://icons.getbootstrap.com/","https://pictogrammers.com/","https://www.w3.org/","https://tailwindcss.com/","https://heroicons.com/","https://react-icons.github.io/","https://fontawesome.com/","https://www.radix-ui.com/","https://react-spectrum.adobe.com/","https://headlessui.com/","https://refine.dev/","https://scaffoldhub.io/","https://marmelab.com/"];e.exports={createRender:function(e){var t=e.headingHashes,n=e.toc,a=e.userLanguage,i=e.options,l={},d=-1;return function(f){var h=new s.Renderer;return h.heading=function(e,o){if(1===o||o>=4)return"<h".concat(o,">").concat(e,"</h").concat(o,">");var i,s=e.replace(/<a\b[^>]*>/gi,"").replace(/<\/a>/gi,"");s=s.replace(/<code\b[^>]*>/gi,"").replace(/<\/code>/gi,""),"en"===a?i=c(s,t):(d+=1,(i=r(t)[d])||(i=c(s,l)));var u=s.replace(/([^\s]\()/g,"$1&#8203;");if(2===o)n.push({text:u,level:o,hash:i,children:[]});else if(3===o){if(!n[n.length-1])throw Error("docs-infra: Missing parent level for: ".concat(s,"\n"));n[n.length-1].children.push({text:u,level:o,hash:i})}return["<h".concat(o,' id="').concat(i,'"><a href="#').concat(i,'" class="title-link-to-anchor">').concat(e,'<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a>'),'<button title="Post a comment" class="comment-link" data-feedback-hash="'.concat(i,'">'),'<svg><use xlink:href="#comment-link-icon" /></svg>',"</button>","</h".concat(o,">")].join("")},h.link=function(t,n,o){var r="";n&&(r+=' title="'.concat(n,'"')),E.some(function(e){return -1!==t.indexOf(e)})&&(r=' target="_blank" rel="noopener nofollow"');var s=t;return function(e,t,n){var o=new URL(e,"https://mui.com/");if(/\/{2,}$/.test(o.pathname))throw Error(["docs-infra: Duplicated trailing slashes. The following link:","[".concat(t,"](").concat(e,") in ").concat(n.location," has duplicated trailing slashes, please only add one."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("mui.com"===o.host){if("/"!==o.pathname[o.pathname.length-1])throw Error(["docs-infra: Missing trailing slash. The following link:","[".concat(t,"](").concat(e,") in ").concat(n.location," is missing a trailing slash, please add it."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("#"!==e[0]&&!(e.startsWith("https://")||e.startsWith("http://"))&&"/"!==e[0])throw Error(["docs-infra: Missing leading slash. The following link:","[".concat(t,"](").concat(e,") in ").concat(n.location," is missing a leading slash, please add it."),""].join("\n"))}}(t,o,e),"en"===a||0!==t.indexOf("/")||i.ignoreLanguagePages(t)||(s="/".concat(a).concat(t)),s.startsWith("".concat(i.env.SOURCE_CODE_REPO,"/blob/-/"))&&(s=s.replace("".concat(i.env.SOURCE_CODE_REPO,"/blob/-/"),"".concat(i.env.SOURCE_CODE_REPO,"/blob/v").concat(i.env.LIB_VERSION,"/"))),'<a href="'.concat(s,'"').concat(r,">").concat(o,"</a>")},h.code=function(e,t,n){var o,r=(t||"").match(/\S*/)[0],a=null===(o=(t||"").match(/title="([^"]*)"/))||void 0===o?void 0:o[1],i=u(e,r);return(null!=i&&i!==e&&(n=!0,e=i),e="".concat(e.replace(/\n$/,""),"\n"),r)?'<div class="MuiCode-root">'.concat(a?'<div class="MuiCode-title">'.concat(a,"</div>"):"",'<pre><code class="language-').concat(w(r,!0),'">').concat(n?e:w(e,!0),"</code></pre>").concat('<button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>',"\n"):"<pre><code>".concat(n?e:w(e,!0),"</code></pre>\n")},s.use({extensions:[{name:"callout",level:"block",start:function(e){var t=e.match(/:::/);return t?t.index:void 0},tokenizer:function(e){var t=/^ {0,3}(:{3,}(?=[^:\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~:]* *(?=\n|$)|$)/.exec(e);if(t){var n={type:"callout",raw:t[0],text:t[3].trim(),severity:t[2],tokens:[]};return this.lexer.blockTokens(n.text,n.tokens),n}},renderer:function(e){return'<aside class="MuiCallout-root MuiCallout-'.concat(e.severity,'">\n            ').concat(["info","success","warning","error"].includes(e.severity)?['<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">','<use class="MuiCode-copied-icon" xlink:href="#'.concat(e.severity,'-icon" />'),"</svg>"].join("\n"):"",'\n            <div class="MuiCallout-content">\n            ').concat(this.parser.parse(e.tokens),"\n</div></aside>")}}]}),s(f,o(o({},p),{},{renderer:h}))}},getContents:function(e){return e.replace(l,"").split(/^{{("(?:demo|component)":.*)}}$/gm).flatMap(function(e){return e.split(/^(<codeblock(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/codeblock>)$/gm)}).flatMap(function(e){return e.split(/^(<featureList(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/featureList>)$/gm)}).filter(function(e){return!m.test(e)})},getDescription:function(e){var t=e.match(f);if(null!==t)return t[1].trim().replace(/`/g,"")},getCodeblock:function(e){if(e.startsWith("<codeblock")){var t,n=null===(t=e.match(/^<codeblock [^>]*storageKey=["|'](\S*)["|'].*>/m))||void 0===t?void 0:t[1];return{type:"codeblock",data:i(e.matchAll(/^```((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*) ((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)\n((?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\n```/gm)).map(function(e){var t=a(e,4);return{language:t[1],tab:t[2],code:t[3]}}).filter(function(e){return void 0!==e.tab&&!m.test(e.code)}),storageKey:n}}},getFeatureList:function(e){if(e.startsWith("<featureList"))return['<ul class="feature-list">'].concat(i(e.split("\n").filter(function(e){return e.startsWith("- ")}).map(function(e){return e.slice(2)}).map(function(e){return"<li>".concat(e,"</li>")})),["</ul>"]).join("")},getHeaders:function(e){var t=e.match(l);if(!t)return{components:[]};t=t[1];try{for(var n,o={};null!==(n=h.exec(t));){var r=n[1],a=n[2].replace(/(.*)/,"$1");"["===a[0]?(a=(a=a.replace(/'/g,'"')).replace(/,\s+\]$/g,"]"),o[r]=JSON.parse(a)):o[r]=a.replace(/^'|'$/g,"")}return o.components?o.components=o.components.split(",").map(function(e){return e.trim()}).sort():o.components=[],o.hooks?o.hooks=o.hooks.split(",").map(function(e){return e.trim()}).sort():o.hooks=[],o}catch(e){throw Error("docs-infra: ".concat(e.message," in getHeader(markdown) with markdown: \n\n").concat(t,"\n"))}},getTitle:function(e){var t=e.match(d);return null===t?"":t[1].replace(/`/g,"")},renderMarkdown:function(e){return/[-*+] `([A-Za-z]+)`/g.test(e)?s.parse(e,p):s.parseInline(e,p).replace(/(\r?\n){2}/g,"<br>").replace(/\r?\n/g," ")}}},891271:function(e){e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function e(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=1===o?t:"".concat(t,"-").concat(o);return n[r]?e(t,n,o+1):(n[r]=!0,r)}(encodeURI(e.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g,"").replace(/[!@#$%^&*()=_+[\]{}`~;:'"|,.<>/?\s]+/g,"-").replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])\uFE0F?/g,"").replace(/-+/g,"-").replace(/^-|-$/g,"")),t)}},866753:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}}),n(470079);var o=n(512589),r=n(412007),a=JSON.parse('{"props":{"open":{"type":{"name":"bool"},"required":true},"anchorEl":{"type":{"name":"union","description":"HTML element<br>&#124;&nbsp;object<br>&#124;&nbsp;func"}},"children":{"type":{"name":"union","description":"node<br>&#124;&nbsp;func"}},"component":{"type":{"name":"elementType"}},"components":{"type":{"name":"shape","description":"{ Root?: elementType }"},"default":"{}","deprecated":true,"deprecationInfo":"use the <code>slots</code> prop instead. This prop will be removed in v7. <a href=\\"/material-ui/migration/migrating-from-deprecated-apis/\\">How to migrate</a>."},"componentsProps":{"type":{"name":"shape","description":"{ root?: func<br>&#124;&nbsp;object }"},"default":"{}","deprecated":true,"deprecationInfo":"use the <code>slotProps</code> prop instead. This prop will be removed in v7. <a href=\\"/material-ui/migration/migrating-from-deprecated-apis/\\">How to migrate</a>."},"container":{"type":{"name":"union","description":"HTML element<br>&#124;&nbsp;func"}},"disablePortal":{"type":{"name":"bool"},"default":"false"},"keepMounted":{"type":{"name":"bool"},"default":"false"},"modifiers":{"type":{"name":"arrayOf","description":"Array&lt;{ data?: object, effect?: func, enabled?: bool, fn?: func, name?: any, options?: object, phase?: \'afterMain\'<br>&#124;&nbsp;\'afterRead\'<br>&#124;&nbsp;\'afterWrite\'<br>&#124;&nbsp;\'beforeMain\'<br>&#124;&nbsp;\'beforeRead\'<br>&#124;&nbsp;\'beforeWrite\'<br>&#124;&nbsp;\'main\'<br>&#124;&nbsp;\'read\'<br>&#124;&nbsp;\'write\', requires?: Array&lt;string&gt;, requiresIfExists?: Array&lt;string&gt; }&gt;"}},"placement":{"type":{"name":"enum","description":"\'auto-end\'<br>&#124;&nbsp;\'auto-start\'<br>&#124;&nbsp;\'auto\'<br>&#124;&nbsp;\'bottom-end\'<br>&#124;&nbsp;\'bottom-start\'<br>&#124;&nbsp;\'bottom\'<br>&#124;&nbsp;\'left-end\'<br>&#124;&nbsp;\'left-start\'<br>&#124;&nbsp;\'left\'<br>&#124;&nbsp;\'right-end\'<br>&#124;&nbsp;\'right-start\'<br>&#124;&nbsp;\'right\'<br>&#124;&nbsp;\'top-end\'<br>&#124;&nbsp;\'top-start\'<br>&#124;&nbsp;\'top\'"},"default":"\'bottom\'"},"popperOptions":{"type":{"name":"shape","description":"{ modifiers?: array, onFirstUpdate?: func, placement?: \'auto-end\'<br>&#124;&nbsp;\'auto-start\'<br>&#124;&nbsp;\'auto\'<br>&#124;&nbsp;\'bottom-end\'<br>&#124;&nbsp;\'bottom-start\'<br>&#124;&nbsp;\'bottom\'<br>&#124;&nbsp;\'left-end\'<br>&#124;&nbsp;\'left-start\'<br>&#124;&nbsp;\'left\'<br>&#124;&nbsp;\'right-end\'<br>&#124;&nbsp;\'right-start\'<br>&#124;&nbsp;\'right\'<br>&#124;&nbsp;\'top-end\'<br>&#124;&nbsp;\'top-start\'<br>&#124;&nbsp;\'top\', strategy?: \'absolute\'<br>&#124;&nbsp;\'fixed\' }"},"default":"{}"},"popperRef":{"type":{"name":"custom","description":"ref"}},"slotProps":{"type":{"name":"shape","description":"{ root?: func<br>&#124;&nbsp;object }"},"default":"{}"},"slots":{"type":{"name":"shape","description":"{ root?: elementType }"},"default":"{}"},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"},"additionalInfo":{"sx":true}},"transition":{"type":{"name":"bool"},"default":"false"}},"name":"Popper","imports":["import Popper from \'@mui/material/Popper\';","import { Popper } from \'@mui/material\';"],"classes":[],"spread":true,"themeDefaultProps":false,"muiName":"MuiPopper","forwardsRefTo":"HTMLDivElement","filename":"/packages/mui-material/src/Popper/Popper.tsx","inheritance":null,"demos":"<ul><li><a href=\\"/material-ui/react-autocomplete/\\">Autocomplete</a></li>\\n<li><a href=\\"/material-ui/react-menu/\\">Menu</a></li>\\n<li><a href=\\"/material-ui/react-popper/\\">Popper</a></li></ul>","cssComponent":false}'),i=n(735250);function s(e){var t=e.descriptions,n=e.pageContent;return(0,i.jsx)(o.Z,{descriptions:t,pageContent:n})}s.getInitialProps=function(){var e=n(17428);return{descriptions:(0,r.Z)(e),pageContent:a}}},412007:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(705794),r=n(187509),a=/-([a-z]{2})\.json$/;function i(e){var t={},n={},i=[];return e.keys().forEach(function(e){e.match(a)?i.push(e):i=[e].concat(i)}),i.forEach(function(s){var c=s.match(a),u=null!==c?c[1]:"en",p=e(s)||null;if(null!==p&&p.componentDescription){var l=[],d=(0,o.createRender)({headingHashes:t,toc:l,userLanguage:u,location:i,options:{ignoreLanguagePages:r.LANGUAGES_IGNORE_PAGES,env:{SOURCE_CODE_REPO:""}}});p.componentDescription=d(p.componentDescription),p.componentDescriptionToc=l}n[u]=p}),n}},644440:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/api/popper",function(){return n(866753)}])},17428:function(e,t,n){var o={"./popper.json":434090};function r(e){return n(a(e))}function a(e){if(!n.o(o,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=17428},36790:function(e,t,n){"use strict";function o(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return o}})},376757:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var o=n(136729),r=n(267765),a=n(861963);function i(e){return(i=r?a.bind():function(e){return e.__proto__||a(e)})(e)}function s(){try{var e=!Boolean.prototype.valueOf.call(o(Boolean,[],function(){}))}catch(e){}return(s=function(){return!!e})()}var c=n(931467),u=n(36790);function p(e){var t=s();return function(){var n,r=i(e);if(t){var a=i(this).constructor;n=o(r,arguments,a)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"==(0,c.Z)(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return(0,u.Z)(e)}(this,n)}}},206782:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(17800),r=n(303268),a=n(909101);function i(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=o(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r(e,"prototype",{writable:!1}),t&&(0,a.Z)(e,t)}},909101:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var o=n(267765);function r(e,t){return(r=o?o.bind():function(e,t){return e.__proto__=t,e})(e,t)}},434090:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"anchorEl":{"description":"An HTML element, <a href=\\"https://popper.js.org/docs/v2/virtual-elements/\\">virtualElement</a>, or a function that returns either. It&#39;s used to set the position of the popper. The return value will passed as the reference object of the Popper instance."},"children":{"description":"Popper render function or node."},"component":{"description":"The component used for the root node. Either a string to use a HTML element or a component."},"components":{"description":"The components used for each slot inside the Popper. Either a string to use a HTML element or a component."},"componentsProps":{"description":"The props used for each slot inside the Popper."},"container":{"description":"An HTML element or function that returns one. The <code>container</code> will have the portal children appended to it.<br>You can also provide a callback, which is called in a React layout effect. This lets you set the container from a ref, and also makes server-side rendering possible.<br>By default, it uses the body of the top-level document object, so it&#39;s simply <code>document.body</code> most of the time."},"disablePortal":{"description":"The <code>children</code> will be under the DOM hierarchy of the parent component."},"keepMounted":{"description":"Always keep the children in the DOM. This prop can be useful in SEO situation or when you want to maximize the responsiveness of the Popper."},"modifiers":{"description":"Popper.js is based on a &quot;plugin-like&quot; architecture, most of its features are fully encapsulated &quot;modifiers&quot;.<br>A modifier is a function that is called each time Popper.js needs to compute the position of the popper. For this reason, modifiers should be very performant to avoid bottlenecks. To learn how to create a modifier, <a href=\\"https://popper.js.org/docs/v2/modifiers/\\">read the modifiers documentation</a>."},"open":{"description":"If <code>true</code>, the component is shown."},"placement":{"description":"Popper placement."},"popperOptions":{"description":"Options provided to the <a href=\\"https://popper.js.org/docs/v2/constructors/#options\\"><code>Popper.js</code></a> instance."},"popperRef":{"description":"A ref that points to the used popper instance."},"slotProps":{"description":"The props used for each slot inside the Popper."},"slots":{"description":"The components used for each slot inside the Popper. Either a string to use a HTML element or a component."},"sx":{"description":"The system prop that allows defining system overrides as well as additional CSS styles."},"transition":{"description":"Help supporting a react-transition-group/Transition component."}},"classDescriptions":{}}')}},function(e){e.O(0,[49774,9535,73976,97146,59727,85925,17376,17103,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,42378,20759,12589,92888,40179],function(){return e(e.s=644440)}),_N_E=e.O()}]);