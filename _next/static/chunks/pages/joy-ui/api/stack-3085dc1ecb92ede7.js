(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50089],{696689:function(e,t,n){var o=n(371017)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=o},705794:function(e,t,n){var o=n(117431),r=o.createRender,a=o.getHeaders,c=o.getTitle,i=o.renderMarkdown;e.exports={createRender:r,getHeaders:a,getTitle:c,renderMarkdown:i}},117431:function(e,t,n){var o=n(582103).default,r=n(436578),a=n(113065).default,c=n(95018).default,i=n(315599).marked,s=n(891271),u=n(520740),l={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,headerPrefix:!1,headerIds:!1,mangle:!1},p=/---[\r\n]([\s\S]*)[\r\n]---/,d=/# (.*)[\r\n]/,f=/<p class="description">([\s\S]*?)<\/p>/,h=/(.*?):[\r\n]?\s+(\[[^\]]+\]|.*)/g,m=/^\s*$/,F=/[&<>"']/,g=/[&<>"']/g,b=/[<>"']|&(?!#?\w+;)/,D=/[<>"']|&(?!#?\w+;)/g,v={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},y=function(e){return v[e]};function k(e,t){if(t){if(F.test(e))return e.replace(g,y)}else if(b.test(e))return e.replace(D,y);return e}var w=["https://m2.material.io/","https://m3.material.io/","https://material.io/","https://getbootstrap.com/","https://icons.getbootstrap.com/","https://pictogrammers.com/","https://www.w3.org/","https://tailwindcss.com/","https://heroicons.com/","https://react-icons.github.io/","https://fontawesome.com/","https://www.radix-ui.com/","https://react-spectrum.adobe.com/","https://headlessui.com/","https://refine.dev/","https://scaffoldhub.io/","https://marmelab.com/"];e.exports={createRender:function(e){var t=e.headingHashes,n=e.toc,a=e.userLanguage,c=e.options,p={},d=-1;return function(f){var h=new i.Renderer;return h.heading=function(e,o){if(1===o||o>=4)return"<h".concat(o,">").concat(e,"</h").concat(o,">");var c,i=e.replace(/<a\b[^>]*>/gi,"").replace(/<\/a>/gi,"");i=i.replace(/<code\b[^>]*>/gi,"").replace(/<\/code>/gi,""),"en"===a?c=s(i,t):(d+=1,(c=r(t)[d])||(c=s(i,p)));var u=i.replace(/([^\s]\()/g,"$1&#8203;");if(2===o)n.push({text:u,level:o,hash:c,children:[]});else if(3===o){if(!n[n.length-1])throw Error("docs-infra: Missing parent level for: ".concat(i,"\n"));n[n.length-1].children.push({text:u,level:o,hash:c})}return["<h".concat(o,' id="').concat(c,'"><a href="#').concat(c,'" class="title-link-to-anchor">').concat(e,'<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a>'),'<button title="Post a comment" class="comment-link" data-feedback-hash="'.concat(c,'">'),'<svg><use xlink:href="#comment-link-icon" /></svg>',"</button>","</h".concat(o,">")].join("")},h.link=function(t,n,o){var r="";n&&(r+=' title="'.concat(n,'"')),w.some(function(e){return -1!==t.indexOf(e)})&&(r=' target="_blank" rel="noopener nofollow"');var i=t;return function(e,t,n){var o=new URL(e,"https://mui.com/");if(/\/{2,}$/.test(o.pathname))throw Error(["docs-infra: Duplicated trailing slashes. The following link:","[".concat(t,"](").concat(e,") in ").concat(n.location," has duplicated trailing slashes, please only add one."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("mui.com"===o.host){if("/"!==o.pathname[o.pathname.length-1])throw Error(["docs-infra: Missing trailing slash. The following link:","[".concat(t,"](").concat(e,") in ").concat(n.location," is missing a trailing slash, please add it."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("#"!==e[0]&&!(e.startsWith("https://")||e.startsWith("http://"))&&"/"!==e[0])throw Error(["docs-infra: Missing leading slash. The following link:","[".concat(t,"](").concat(e,") in ").concat(n.location," is missing a leading slash, please add it."),""].join("\n"))}}(t,o,e),"en"===a||0!==t.indexOf("/")||c.ignoreLanguagePages(t)||(i="/".concat(a).concat(t)),i.startsWith("".concat(c.env.SOURCE_CODE_REPO,"/blob/-/"))&&(i=i.replace("".concat(c.env.SOURCE_CODE_REPO,"/blob/-/"),"".concat(c.env.SOURCE_CODE_REPO,"/blob/v").concat(c.env.LIB_VERSION,"/"))),'<a href="'.concat(i,'"').concat(r,">").concat(o,"</a>")},h.code=function(e,t,n){var o,r=(t||"").match(/\S*/)[0],a=null===(o=(t||"").match(/title="([^"]*)"/))||void 0===o?void 0:o[1],c=u(e,r);return(null!=c&&c!==e&&(n=!0,e=c),e="".concat(e.replace(/\n$/,""),"\n"),r)?'<div class="MuiCode-root">'.concat(a?'<div class="MuiCode-title">'.concat(a,"</div>"):"",'<pre><code class="language-').concat(k(r,!0),'">').concat(n?e:k(e,!0),"</code></pre>").concat('<button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>',"\n"):"<pre><code>".concat(n?e:k(e,!0),"</code></pre>\n")},i.use({extensions:[{name:"callout",level:"block",start:function(e){var t=e.match(/:::/);return t?t.index:void 0},tokenizer:function(e){var t=/^ {0,3}(:{3,}(?=[^:\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~:]* *(?=\n|$)|$)/.exec(e);if(t){var n={type:"callout",raw:t[0],text:t[3].trim(),severity:t[2],tokens:[]};return this.lexer.blockTokens(n.text,n.tokens),n}},renderer:function(e){return'<aside class="MuiCallout-root MuiCallout-'.concat(e.severity,'">\n            ').concat(["info","success","warning","error"].includes(e.severity)?['<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">','<use class="MuiCode-copied-icon" xlink:href="#'.concat(e.severity,'-icon" />'),"</svg>"].join("\n"):"",'\n            <div class="MuiCallout-content">\n            ').concat(this.parser.parse(e.tokens),"\n</div></aside>")}}]}),i(f,o(o({},l),{},{renderer:h}))}},getContents:function(e){return e.replace(p,"").split(/^{{("(?:demo|component)":.*)}}$/gm).flatMap(function(e){return e.split(/^(<codeblock(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/codeblock>)$/gm)}).flatMap(function(e){return e.split(/^(<featureList(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/featureList>)$/gm)}).filter(function(e){return!m.test(e)})},getDescription:function(e){var t=e.match(f);if(null!==t)return t[1].trim().replace(/`/g,"")},getCodeblock:function(e){if(e.startsWith("<codeblock")){var t,n=null===(t=e.match(/^<codeblock [^>]*storageKey=["|'](\S*)["|'].*>/m))||void 0===t?void 0:t[1];return{type:"codeblock",data:c(e.matchAll(/^```((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*) ((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)\n((?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\n```/gm)).map(function(e){var t=a(e,4);return{language:t[1],tab:t[2],code:t[3]}}).filter(function(e){return void 0!==e.tab&&!m.test(e.code)}),storageKey:n}}},getFeatureList:function(e){if(e.startsWith("<featureList"))return['<ul class="feature-list">'].concat(c(e.split("\n").filter(function(e){return e.startsWith("- ")}).map(function(e){return e.slice(2)}).map(function(e){return"<li>".concat(e,"</li>")})),["</ul>"]).join("")},getHeaders:function(e){var t=e.match(p);if(!t)return{components:[]};t=t[1];try{for(var n,o={};null!==(n=h.exec(t));){var r=n[1],a=n[2].replace(/(.*)/,"$1");"["===a[0]?(a=(a=a.replace(/'/g,'"')).replace(/,\s+\]$/g,"]"),o[r]=JSON.parse(a)):o[r]=a.replace(/^'|'$/g,"")}return o.components?o.components=o.components.split(",").map(function(e){return e.trim()}).sort():o.components=[],o.hooks?o.hooks=o.hooks.split(",").map(function(e){return e.trim()}).sort():o.hooks=[],o}catch(e){throw Error("docs-infra: ".concat(e.message," in getHeader(markdown) with markdown: \n\n").concat(t,"\n"))}},getTitle:function(e){var t=e.match(d);return null===t?"":t[1].replace(/`/g,"")},renderMarkdown:function(e){return/[-*+] `([A-Za-z]+)`/g.test(e)?i.parse(e,l):i.parseInline(e,l).replace(/(\r?\n){2}/g,"<br>").replace(/\r?\n/g," ")}}},891271:function(e){e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function e(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=1===o?t:"".concat(t,"-").concat(o);return n[r]?e(t,n,o+1):(n[r]=!0,r)}(encodeURI(e.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g,"").replace(/[!@#$%^&*()=_+[\]{}`~;:'"|,.<>/?\s]+/g,"-").replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])\uFE0F?/g,"").replace(/-+/g,"-").replace(/^-|-$/g,"")),t)}},209750:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}}),n(470079);var o=n(512589),r=n(412007),a=JSON.parse('{"props":{"children":{"type":{"name":"node"}},"component":{"type":{"name":"elementType"}},"direction":{"type":{"name":"union","description":"\'column-reverse\'<br>&#124;&nbsp;\'column\'<br>&#124;&nbsp;\'row-reverse\'<br>&#124;&nbsp;\'row\'<br>&#124;&nbsp;Array&lt;\'column-reverse\'<br>&#124;&nbsp;\'column\'<br>&#124;&nbsp;\'row-reverse\'<br>&#124;&nbsp;\'row\'&gt;<br>&#124;&nbsp;object"}},"divider":{"type":{"name":"node"}},"spacing":{"type":{"name":"union","description":"Array&lt;number<br>&#124;&nbsp;string&gt;<br>&#124;&nbsp;number<br>&#124;&nbsp;object<br>&#124;&nbsp;string"}},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"},"additionalInfo":{"sx":true}},"useFlexGap":{"type":{"name":"bool"}}},"name":"Stack","imports":["import Stack from \'@mui/joy/Stack\';","import { Stack } from \'@mui/joy\';"],"slots":[{"name":"root","description":"The component that renders the root.","default":"\'div\'","class":"MuiStack-root"}],"classes":[],"spread":true,"themeDefaultProps":true,"muiName":"JoyStack","forwardsRefTo":"HTMLElement","filename":"/packages/mui-joy/src/Stack/Stack.tsx","inheritance":null,"demos":"<ul><li><a href=\\"/joy-ui/react-stack/\\">Stack</a></li></ul>","cssComponent":true}'),c=n(735250);function i(e){var t=e.descriptions,n=e.pageContent;return(0,c.jsx)(o.Z,{descriptions:t,pageContent:n})}i.getInitialProps=function(){var e=n(730559);return{descriptions:(0,r.Z)(e),pageContent:a}}},412007:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var o=n(705794),r=n(187509),a=/-([a-z]{2})\.json$/;function c(e){var t={},n={},c=[];return e.keys().forEach(function(e){e.match(a)?c.push(e):c=[e].concat(c)}),c.forEach(function(i){var s=i.match(a),u=null!==s?s[1]:"en",l=e(i)||null;if(null!==l&&l.componentDescription){var p=[],d=(0,o.createRender)({headingHashes:t,toc:p,userLanguage:u,location:c,options:{ignoreLanguagePages:r.LANGUAGES_IGNORE_PAGES,env:{SOURCE_CODE_REPO:""}}});l.componentDescription=d(l.componentDescription),l.componentDescriptionToc=p}n[u]=l}),n}},411225:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/joy-ui/api/stack",function(){return n(209750)}])},730559:function(e,t,n){var o={"./stack.json":140999};function r(e){return n(a(e))}function a(e){if(!n.o(o,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=730559},36790:function(e,t,n){"use strict";function o(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return o}})},376757:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var o=n(136729),r=n(267765),a=n(861963);function c(e){return(c=r?a.bind():function(e){return e.__proto__||a(e)})(e)}function i(){try{var e=!Boolean.prototype.valueOf.call(o(Boolean,[],function(){}))}catch(e){}return(i=function(){return!!e})()}var s=n(931467),u=n(36790);function l(e){var t=i();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=o(r,arguments,a)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"==(0,s.Z)(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return(0,u.Z)(e)}(this,n)}}},206782:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var o=n(17800),r=n(303268),a=n(909101);function c(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=o(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r(e,"prototype",{writable:!1}),t&&(0,a.Z)(e,t)}},909101:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var o=n(267765);function r(e,t){return(r=o?o.bind():function(e,t){return e.__proto__=t,e})(e,t)}},140999:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"children":{"description":"The content of the component."},"component":{"description":"The component used for the root node. Either a string to use a HTML element or a component."},"direction":{"description":"Defines the <code>flex-direction</code> style property. It is applied for all screen sizes."},"divider":{"description":"Add an element between each child."},"spacing":{"description":"Defines the space between immediate children."},"sx":{"description":"The system prop, which allows defining system overrides as well as additional CSS styles."},"useFlexGap":{"description":"If <code>true</code>, the CSS flexbox <code>gap</code> is used instead of applying <code>margin</code> to children.<br>While CSS <code>gap</code> removes the <a href=\\"https://mui.com/joy-ui/react-stack/#limitations\\">known limitations</a>, it is not fully supported in some browsers. We recommend checking <a href=\\"https://caniuse.com/?search=flex%20gap\\">https://caniuse.com/?search=flex%20gap</a> before using this flag.<br>To enable this flag globally, follow the <a href=\\"https://mui.com/joy-ui/customization/themed-components/#default-props\\">theme&#39;s default props</a> configuration."}},"classDescriptions":{},"slotDescriptions":{"root":"The component that renders the root."}}')}},function(e){e.O(0,[49774,9535,73976,97146,59727,85925,17376,17103,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,42378,20759,12589,92888,40179],function(){return e(e.s=411225)}),_N_E=e.O()}]);