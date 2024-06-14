(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[88842],{696689:function(t,e,n){var o=n(371017)(function(t,e,n){return t+(n?"-":"")+e.toLowerCase()});t.exports=o},705794:function(t,e,n){var o=n(117431),r=o.createRender,a=o.getHeaders,i=o.getTitle,c=o.renderMarkdown;t.exports={createRender:r,getHeaders:a,getTitle:i,renderMarkdown:c}},117431:function(t,e,n){var o=n(582103).default,r=n(436578),a=n(113065).default,i=n(95018).default,c=n(315599).marked,s=n(891271),u=n(520740),l={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,headerPrefix:!1,headerIds:!1,mangle:!1},p=/---[\r\n]([\s\S]*)[\r\n]---/,d=/# (.*)[\r\n]/,f=/<p class="description">([\s\S]*?)<\/p>/,F=/(.*?):[\r\n]?\s+(\[[^\]]+\]|.*)/g,h=/^\s*$/,m=/[&<>"']/,g=/[&<>"']/g,v=/[<>"']|&(?!#?\w+;)/,D=/[<>"']|&(?!#?\w+;)/g,b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},C=function(t){return b[t]};function y(t,e){if(e){if(m.test(t))return t.replace(g,C)}else if(v.test(t))return t.replace(D,C);return t}var E=["https://m2.material.io/","https://m3.material.io/","https://material.io/","https://getbootstrap.com/","https://icons.getbootstrap.com/","https://pictogrammers.com/","https://www.w3.org/","https://tailwindcss.com/","https://heroicons.com/","https://react-icons.github.io/","https://fontawesome.com/","https://www.radix-ui.com/","https://react-spectrum.adobe.com/","https://headlessui.com/","https://refine.dev/","https://scaffoldhub.io/","https://marmelab.com/"];t.exports={createRender:function(t){var e=t.headingHashes,n=t.toc,a=t.userLanguage,i=t.options,p={},d=-1;return function(f){var F=new c.Renderer;return F.heading=function(t,o){if(1===o||o>=4)return"<h".concat(o,">").concat(t,"</h").concat(o,">");var i,c=t.replace(/<a\b[^>]*>/gi,"").replace(/<\/a>/gi,"");c=c.replace(/<code\b[^>]*>/gi,"").replace(/<\/code>/gi,""),"en"===a?i=s(c,e):(d+=1,(i=r(e)[d])||(i=s(c,p)));var u=c.replace(/([^\s]\()/g,"$1&#8203;");if(2===o)n.push({text:u,level:o,hash:i,children:[]});else if(3===o){if(!n[n.length-1])throw Error("docs-infra: Missing parent level for: ".concat(c,"\n"));n[n.length-1].children.push({text:u,level:o,hash:i})}return["<h".concat(o,' id="').concat(i,'"><a href="#').concat(i,'" class="title-link-to-anchor">').concat(t,'<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a>'),'<button title="Post a comment" class="comment-link" data-feedback-hash="'.concat(i,'">'),'<svg><use xlink:href="#comment-link-icon" /></svg>',"</button>","</h".concat(o,">")].join("")},F.link=function(e,n,o){var r="";n&&(r+=' title="'.concat(n,'"')),E.some(function(t){return -1!==e.indexOf(t)})&&(r=' target="_blank" rel="noopener nofollow"');var c=e;return function(t,e,n){var o=new URL(t,"https://mui.com/");if(/\/{2,}$/.test(o.pathname))throw Error(["docs-infra: Duplicated trailing slashes. The following link:","[".concat(e,"](").concat(t,") in ").concat(n.location," has duplicated trailing slashes, please only add one."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("mui.com"===o.host){if("/"!==o.pathname[o.pathname.length-1])throw Error(["docs-infra: Missing trailing slash. The following link:","[".concat(e,"](").concat(t,") in ").concat(n.location," is missing a trailing slash, please add it."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("#"!==t[0]&&!(t.startsWith("https://")||t.startsWith("http://"))&&"/"!==t[0])throw Error(["docs-infra: Missing leading slash. The following link:","[".concat(e,"](").concat(t,") in ").concat(n.location," is missing a leading slash, please add it."),""].join("\n"))}}(e,o,t),"en"===a||0!==e.indexOf("/")||i.ignoreLanguagePages(e)||(c="/".concat(a).concat(e)),c.startsWith("".concat(i.env.SOURCE_CODE_REPO,"/blob/-/"))&&(c=c.replace("".concat(i.env.SOURCE_CODE_REPO,"/blob/-/"),"".concat(i.env.SOURCE_CODE_REPO,"/blob/v").concat(i.env.LIB_VERSION,"/"))),'<a href="'.concat(c,'"').concat(r,">").concat(o,"</a>")},F.code=function(t,e,n){var o,r=(e||"").match(/\S*/)[0],a=null===(o=(e||"").match(/title="([^"]*)"/))||void 0===o?void 0:o[1],i=u(t,r);return(null!=i&&i!==t&&(n=!0,t=i),t="".concat(t.replace(/\n$/,""),"\n"),r)?'<div class="MuiCode-root">'.concat(a?'<div class="MuiCode-title">'.concat(a,"</div>"):"",'<pre><code class="language-').concat(y(r,!0),'">').concat(n?t:y(t,!0),"</code></pre>").concat('<button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>',"\n"):"<pre><code>".concat(n?t:y(t,!0),"</code></pre>\n")},c.use({extensions:[{name:"callout",level:"block",start:function(t){var e=t.match(/:::/);return e?e.index:void 0},tokenizer:function(t){var e=/^ {0,3}(:{3,}(?=[^:\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~:]* *(?=\n|$)|$)/.exec(t);if(e){var n={type:"callout",raw:e[0],text:e[3].trim(),severity:e[2],tokens:[]};return this.lexer.blockTokens(n.text,n.tokens),n}},renderer:function(t){return'<aside class="MuiCallout-root MuiCallout-'.concat(t.severity,'">\n            ').concat(["info","success","warning","error"].includes(t.severity)?['<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">','<use class="MuiCode-copied-icon" xlink:href="#'.concat(t.severity,'-icon" />'),"</svg>"].join("\n"):"",'\n            <div class="MuiCallout-content">\n            ').concat(this.parser.parse(t.tokens),"\n</div></aside>")}}]}),c(f,o(o({},l),{},{renderer:F}))}},getContents:function(t){return t.replace(p,"").split(/^{{("(?:demo|component)":.*)}}$/gm).flatMap(function(t){return t.split(/^(<codeblock(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/codeblock>)$/gm)}).flatMap(function(t){return t.split(/^(<featureList(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/featureList>)$/gm)}).filter(function(t){return!h.test(t)})},getDescription:function(t){var e=t.match(f);if(null!==e)return e[1].trim().replace(/`/g,"")},getCodeblock:function(t){if(t.startsWith("<codeblock")){var e,n=null===(e=t.match(/^<codeblock [^>]*storageKey=["|'](\S*)["|'].*>/m))||void 0===e?void 0:e[1];return{type:"codeblock",data:i(t.matchAll(/^```((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*) ((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)\n((?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\n```/gm)).map(function(t){var e=a(t,4);return{language:e[1],tab:e[2],code:e[3]}}).filter(function(t){return void 0!==t.tab&&!h.test(t.code)}),storageKey:n}}},getFeatureList:function(t){if(t.startsWith("<featureList"))return['<ul class="feature-list">'].concat(i(t.split("\n").filter(function(t){return t.startsWith("- ")}).map(function(t){return t.slice(2)}).map(function(t){return"<li>".concat(t,"</li>")})),["</ul>"]).join("")},getHeaders:function(t){var e=t.match(p);if(!e)return{components:[]};e=e[1];try{for(var n,o={};null!==(n=F.exec(e));){var r=n[1],a=n[2].replace(/(.*)/,"$1");"["===a[0]?(a=(a=a.replace(/'/g,'"')).replace(/,\s+\]$/g,"]"),o[r]=JSON.parse(a)):o[r]=a.replace(/^'|'$/g,"")}return o.components?o.components=o.components.split(",").map(function(t){return t.trim()}).sort():o.components=[],o.hooks?o.hooks=o.hooks.split(",").map(function(t){return t.trim()}).sort():o.hooks=[],o}catch(t){throw Error("docs-infra: ".concat(t.message," in getHeader(markdown) with markdown: \n\n").concat(e,"\n"))}},getTitle:function(t){var e=t.match(d);return null===e?"":e[1].replace(/`/g,"")},renderMarkdown:function(t){return/[-*+] `([A-Za-z]+)`/g.test(t)?c.parse(t,l):c.parseInline(t,l).replace(/(\r?\n){2}/g,"<br>").replace(/\r?\n/g," ")}}},891271:function(t){t.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function t(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=1===o?e:"".concat(e,"-").concat(o);return n[r]?t(e,n,o+1):(n[r]=!0,r)}(encodeURI(t.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g,"").replace(/[!@#$%^&*()=_+[\]{}`~;:'"|,.<>/?\s]+/g,"-").replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])\uFE0F?/g,"").replace(/-+/g,"-").replace(/^-|-$/g,"")),e)}},849974:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return c}}),n(470079);var o=n(512589),r=n(412007),a=JSON.parse('{"props":{"children":{"type":{"name":"node"}},"classes":{"type":{"name":"object"},"additionalInfo":{"cssApi":true}},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"},"additionalInfo":{"sx":true}}},"name":"ListItemAvatar","imports":["import ListItemAvatar from \'@mui/material/ListItemAvatar\';","import { ListItemAvatar } from \'@mui/material\';"],"classes":[{"key":"alignItemsFlexStart","className":"MuiListItemAvatar-alignItemsFlexStart","description":"Styles applied to the root element when the parent `ListItem` uses `alignItems=\\"flex-start\\"`.","isGlobal":false},{"key":"root","className":"MuiListItemAvatar-root","description":"Styles applied to the root element.","isGlobal":false}],"spread":true,"themeDefaultProps":true,"muiName":"MuiListItemAvatar","forwardsRefTo":"HTMLDivElement","filename":"/packages/mui-material/src/ListItemAvatar/ListItemAvatar.js","inheritance":null,"demos":"<ul><li><a href=\\"/material-ui/react-list/\\">Lists</a></li></ul>","cssComponent":false}'),i=n(735250);function c(t){var e=t.descriptions,n=t.pageContent;return(0,i.jsx)(o.Z,{descriptions:e,pageContent:n})}c.getInitialProps=function(){var t=n(196635);return{descriptions:(0,r.Z)(t),pageContent:a}}},412007:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var o=n(705794),r=n(187509),a=/-([a-z]{2})\.json$/;function i(t){var e={},n={},i=[];return t.keys().forEach(function(t){t.match(a)?i.push(t):i=[t].concat(i)}),i.forEach(function(c){var s=c.match(a),u=null!==s?s[1]:"en",l=t(c)||null;if(null!==l&&l.componentDescription){var p=[],d=(0,o.createRender)({headingHashes:e,toc:p,userLanguage:u,location:i,options:{ignoreLanguagePages:r.LANGUAGES_IGNORE_PAGES,env:{SOURCE_CODE_REPO:""}}});l.componentDescription=d(l.componentDescription),l.componentDescriptionToc=p}n[u]=l}),n}},925006:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/api/list-item-avatar",function(){return n(849974)}])},196635:function(t,e,n){var o={"./list-item-avatar.json":402208};function r(t){return n(a(t))}function a(t){if(!n.o(o,t)){var e=Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=a,t.exports=r,r.id=196635},36790:function(t,e,n){"use strict";function o(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,{Z:function(){return o}})},376757:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var o=n(136729),r=n(267765),a=n(861963);function i(t){return(i=r?a.bind():function(t){return t.__proto__||a(t)})(t)}function c(){try{var t=!Boolean.prototype.valueOf.call(o(Boolean,[],function(){}))}catch(t){}return(c=function(){return!!t})()}var s=n(931467),u=n(36790);function l(t){var e=c();return function(){var n,r=i(t);if(e){var a=i(this).constructor;n=o(r,arguments,a)}else n=r.apply(this,arguments);return function(t,e){if(e&&("object"==(0,s.Z)(e)||"function"==typeof e))return e;if(void 0!==e)throw TypeError("Derived constructors may only return object or undefined");return(0,u.Z)(t)}(this,n)}}},206782:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var o=n(17800),r=n(303268),a=n(909101);function i(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=o(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),r(t,"prototype",{writable:!1}),e&&(0,a.Z)(t,e)}},909101:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var o=n(267765);function r(t,e){return(r=o?o.bind():function(t,e){return t.__proto__=e,t})(t,e)}},402208:function(t){"use strict";t.exports=JSON.parse('{"componentDescription":"A simple wrapper to apply `List` styles to an `Avatar`.","propDescriptions":{"children":{"description":"The content of the component, normally an <code>Avatar</code>."},"classes":{"description":"Override or extend the styles applied to the component."},"sx":{"description":"The system prop that allows defining system overrides as well as additional CSS styles."}},"classDescriptions":{"alignItemsFlexStart":{"description":"Styles applied to {{nodeName}} when {{conditions}}.","nodeName":"the root element","conditions":"the parent <code>ListItem</code> uses <code>alignItems=\\"flex-start\\"</code>"},"root":{"description":"Styles applied to the root element."}}}')}},function(t){t.O(0,[49774,9535,73976,97146,59727,85925,17376,17103,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,42378,20759,12589,92888,40179],function(){return t(t.s=925006)}),_N_E=t.O()}]);