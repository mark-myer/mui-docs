(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[39752],{696689:function(e,t,n){var o=n(371017)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=o},705794:function(e,t,n){var o=n(117431),a=o.createRender,r=o.getHeaders,i=o.getTitle,c=o.renderMarkdown;e.exports={createRender:a,getHeaders:r,getTitle:i,renderMarkdown:c}},117431:function(e,t,n){var o=n(582103).default,a=n(436578),r=n(113065).default,i=n(95018).default,c=n(315599).marked,s=n(891271),u=n(520740),l={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,headerPrefix:!1,headerIds:!1,mangle:!1},p=/---[\r\n]([\s\S]*)[\r\n]---/,d=/# (.*)[\r\n]/,h=/<p class="description">([\s\S]*?)<\/p>/,f=/(.*?):[\r\n]?\s+(\[[^\]]+\]|.*)/g,m=/^\s*$/,F=/[&<>"']/,g=/[&<>"']/g,y=/[<>"']|&(?!#?\w+;)/,v=/[<>"']|&(?!#?\w+;)/g,b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},D=function(e){return b[e]};function C(e,t){if(t){if(F.test(e))return e.replace(g,D)}else if(y.test(e))return e.replace(v,D);return e}var w=["https://m2.material.io/","https://m3.material.io/","https://material.io/","https://getbootstrap.com/","https://icons.getbootstrap.com/","https://pictogrammers.com/","https://www.w3.org/","https://tailwindcss.com/","https://heroicons.com/","https://react-icons.github.io/","https://fontawesome.com/","https://www.radix-ui.com/","https://react-spectrum.adobe.com/","https://headlessui.com/","https://refine.dev/","https://scaffoldhub.io/","https://marmelab.com/"];e.exports={createRender:function(e){var t=e.headingHashes,n=e.toc,r=e.userLanguage,i=e.options,p={},d=-1;return function(h){var f=new c.Renderer;return f.heading=function(e,o){if(1===o||o>=4)return"<h".concat(o,">").concat(e,"</h").concat(o,">");var i,c=e.replace(/<a\b[^>]*>/gi,"").replace(/<\/a>/gi,"");c=c.replace(/<code\b[^>]*>/gi,"").replace(/<\/code>/gi,""),"en"===r?i=s(c,t):(d+=1,(i=a(t)[d])||(i=s(c,p)));var u=c.replace(/([^\s]\()/g,"$1&#8203;");if(2===o)n.push({text:u,level:o,hash:i,children:[]});else if(3===o){if(!n[n.length-1])throw Error("docs-infra: Missing parent level for: ".concat(c,"\n"));n[n.length-1].children.push({text:u,level:o,hash:i})}return["<h".concat(o,' id="').concat(i,'"><a href="#').concat(i,'" class="title-link-to-anchor">').concat(e,'<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a>'),'<button title="Post a comment" class="comment-link" data-feedback-hash="'.concat(i,'">'),'<svg><use xlink:href="#comment-link-icon" /></svg>',"</button>","</h".concat(o,">")].join("")},f.link=function(t,n,o){var a="";n&&(a+=' title="'.concat(n,'"')),w.some(function(e){return -1!==t.indexOf(e)})&&(a=' target="_blank" rel="noopener nofollow"');var c=t;return function(e,t,n){var o=new URL(e,"https://mui.com/");if(/\/{2,}$/.test(o.pathname))throw Error(["docs-infra: Duplicated trailing slashes. The following link:","[".concat(t,"](").concat(e,") in ").concat(n.location," has duplicated trailing slashes, please only add one."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("mui.com"===o.host){if("/"!==o.pathname[o.pathname.length-1])throw Error(["docs-infra: Missing trailing slash. The following link:","[".concat(t,"](").concat(e,") in ").concat(n.location," is missing a trailing slash, please add it."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("#"!==e[0]&&!(e.startsWith("https://")||e.startsWith("http://"))&&"/"!==e[0])throw Error(["docs-infra: Missing leading slash. The following link:","[".concat(t,"](").concat(e,") in ").concat(n.location," is missing a leading slash, please add it."),""].join("\n"))}}(t,o,e),"en"===r||0!==t.indexOf("/")||i.ignoreLanguagePages(t)||(c="/".concat(r).concat(t)),c.startsWith("".concat(i.env.SOURCE_CODE_REPO,"/blob/-/"))&&(c=c.replace("".concat(i.env.SOURCE_CODE_REPO,"/blob/-/"),"".concat(i.env.SOURCE_CODE_REPO,"/blob/v").concat(i.env.LIB_VERSION,"/"))),'<a href="'.concat(c,'"').concat(a,">").concat(o,"</a>")},f.code=function(e,t,n){var o,a=(t||"").match(/\S*/)[0],r=null===(o=(t||"").match(/title="([^"]*)"/))||void 0===o?void 0:o[1],i=u(e,a);return(null!=i&&i!==e&&(n=!0,e=i),e="".concat(e.replace(/\n$/,""),"\n"),a)?'<div class="MuiCode-root">'.concat(r?'<div class="MuiCode-title">'.concat(r,"</div>"):"",'<pre><code class="language-').concat(C(a,!0),'">').concat(n?e:C(e,!0),"</code></pre>").concat('<button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>',"\n"):"<pre><code>".concat(n?e:C(e,!0),"</code></pre>\n")},c.use({extensions:[{name:"callout",level:"block",start:function(e){var t=e.match(/:::/);return t?t.index:void 0},tokenizer:function(e){var t=/^ {0,3}(:{3,}(?=[^:\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~:]* *(?=\n|$)|$)/.exec(e);if(t){var n={type:"callout",raw:t[0],text:t[3].trim(),severity:t[2],tokens:[]};return this.lexer.blockTokens(n.text,n.tokens),n}},renderer:function(e){return'<aside class="MuiCallout-root MuiCallout-'.concat(e.severity,'">\n            ').concat(["info","success","warning","error"].includes(e.severity)?['<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">','<use class="MuiCode-copied-icon" xlink:href="#'.concat(e.severity,'-icon" />'),"</svg>"].join("\n"):"",'\n            <div class="MuiCallout-content">\n            ').concat(this.parser.parse(e.tokens),"\n</div></aside>")}}]}),c(h,o(o({},l),{},{renderer:f}))}},getContents:function(e){return e.replace(p,"").split(/^{{("(?:demo|component)":.*)}}$/gm).flatMap(function(e){return e.split(/^(<codeblock(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/codeblock>)$/gm)}).flatMap(function(e){return e.split(/^(<featureList(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/featureList>)$/gm)}).filter(function(e){return!m.test(e)})},getDescription:function(e){var t=e.match(h);if(null!==t)return t[1].trim().replace(/`/g,"")},getCodeblock:function(e){if(e.startsWith("<codeblock")){var t,n=null===(t=e.match(/^<codeblock [^>]*storageKey=["|'](\S*)["|'].*>/m))||void 0===t?void 0:t[1];return{type:"codeblock",data:i(e.matchAll(/^```((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*) ((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)\n((?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\n```/gm)).map(function(e){var t=r(e,4);return{language:t[1],tab:t[2],code:t[3]}}).filter(function(e){return void 0!==e.tab&&!m.test(e.code)}),storageKey:n}}},getFeatureList:function(e){if(e.startsWith("<featureList"))return['<ul class="feature-list">'].concat(i(e.split("\n").filter(function(e){return e.startsWith("- ")}).map(function(e){return e.slice(2)}).map(function(e){return"<li>".concat(e,"</li>")})),["</ul>"]).join("")},getHeaders:function(e){var t=e.match(p);if(!t)return{components:[]};t=t[1];try{for(var n,o={};null!==(n=f.exec(t));){var a=n[1],r=n[2].replace(/(.*)/,"$1");"["===r[0]?(r=(r=r.replace(/'/g,'"')).replace(/,\s+\]$/g,"]"),o[a]=JSON.parse(r)):o[a]=r.replace(/^'|'$/g,"")}return o.components?o.components=o.components.split(",").map(function(e){return e.trim()}).sort():o.components=[],o.hooks?o.hooks=o.hooks.split(",").map(function(e){return e.trim()}).sort():o.hooks=[],o}catch(e){throw Error("docs-infra: ".concat(e.message," in getHeader(markdown) with markdown: \n\n").concat(t,"\n"))}},getTitle:function(e){var t=e.match(d);return null===t?"":t[1].replace(/`/g,"")},renderMarkdown:function(e){return/[-*+] `([A-Za-z]+)`/g.test(e)?c.parse(e,l):c.parseInline(e,l).replace(/(\r?\n){2}/g,"<br>").replace(/\r?\n/g," ")}}},891271:function(e){e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function e(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=1===o?t:"".concat(t,"-").concat(o);return n[a]?e(t,n,o+1):(n[a]=!0,a)}(encodeURI(e.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g,"").replace(/[!@#$%^&*()=_+[\]{}`~;:'"|,.<>/?\s]+/g,"-").replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])\uFE0F?/g,"").replace(/-+/g,"-").replace(/^-|-$/g,"")),t)}},215242:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}}),n(470079);var o=n(512589),a=n(412007),r=JSON.parse('{"props":{"action":{"type":{"name":"node"}},"avatar":{"type":{"name":"node"}},"classes":{"type":{"name":"object"},"additionalInfo":{"cssApi":true}},"component":{"type":{"name":"elementType"}},"disableTypography":{"type":{"name":"bool"},"default":"false"},"subheader":{"type":{"name":"node"}},"subheaderTypographyProps":{"type":{"name":"object"}},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"},"additionalInfo":{"sx":true}},"title":{"type":{"name":"node"}},"titleTypographyProps":{"type":{"name":"object"}}},"name":"CardHeader","imports":["import CardHeader from \'@mui/material/CardHeader\';","import { CardHeader } from \'@mui/material\';"],"classes":[{"key":"action","className":"MuiCardHeader-action","description":"Styles applied to the action element.","isGlobal":false},{"key":"avatar","className":"MuiCardHeader-avatar","description":"Styles applied to the avatar element.","isGlobal":false},{"key":"content","className":"MuiCardHeader-content","description":"Styles applied to the content wrapper element.","isGlobal":false},{"key":"root","className":"MuiCardHeader-root","description":"Styles applied to the root element.","isGlobal":false},{"key":"subheader","className":"MuiCardHeader-subheader","description":"Styles applied to the subheader Typography element.","isGlobal":false},{"key":"title","className":"MuiCardHeader-title","description":"Styles applied to the title Typography element.","isGlobal":false}],"spread":true,"themeDefaultProps":true,"muiName":"MuiCardHeader","forwardsRefTo":"HTMLDivElement","filename":"/packages/mui-material/src/CardHeader/CardHeader.js","inheritance":null,"demos":"<ul><li><a href=\\"/material-ui/react-card/\\">Card</a></li></ul>","cssComponent":false}'),i=n(735250);function c(e){var t=e.descriptions,n=e.pageContent;return(0,i.jsx)(o.Z,{descriptions:t,pageContent:n})}c.getInitialProps=function(){var e=n(507401);return{descriptions:(0,a.Z)(e),pageContent:r}}},412007:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(705794),a=n(187509),r=/-([a-z]{2})\.json$/;function i(e){var t={},n={},i=[];return e.keys().forEach(function(e){e.match(r)?i.push(e):i=[e].concat(i)}),i.forEach(function(c){var s=c.match(r),u=null!==s?s[1]:"en",l=e(c)||null;if(null!==l&&l.componentDescription){var p=[],d=(0,o.createRender)({headingHashes:t,toc:p,userLanguage:u,location:i,options:{ignoreLanguagePages:a.LANGUAGES_IGNORE_PAGES,env:{SOURCE_CODE_REPO:""}}});l.componentDescription=d(l.componentDescription),l.componentDescriptionToc=p}n[u]=l}),n}},271e3:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/api/card-header",function(){return n(215242)}])},507401:function(e,t,n){var o={"./card-header.json":329862};function a(e){return n(r(e))}function r(e){if(!n.o(o,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=r,e.exports=a,a.id=507401},36790:function(e,t,n){"use strict";function o(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return o}})},376757:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var o=n(136729),a=n(267765),r=n(861963);function i(e){return(i=a?r.bind():function(e){return e.__proto__||r(e)})(e)}function c(){try{var e=!Boolean.prototype.valueOf.call(o(Boolean,[],function(){}))}catch(e){}return(c=function(){return!!e})()}var s=n(931467),u=n(36790);function l(e){var t=c();return function(){var n,a=i(e);if(t){var r=i(this).constructor;n=o(a,arguments,r)}else n=a.apply(this,arguments);return function(e,t){if(t&&("object"==(0,s.Z)(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return(0,u.Z)(e)}(this,n)}}},206782:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(17800),a=n(303268),r=n(909101);function i(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=o(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a(e,"prototype",{writable:!1}),t&&(0,r.Z)(e,t)}},909101:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var o=n(267765);function a(e,t){return(a=o?o.bind():function(e,t){return e.__proto__=t,e})(e,t)}},329862:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"action":{"description":"The action to display in the card header."},"avatar":{"description":"The Avatar element to display."},"classes":{"description":"Override or extend the styles applied to the component."},"component":{"description":"The component used for the root node. Either a string to use a HTML element or a component."},"disableTypography":{"description":"If <code>true</code>, <code>subheader</code> and <code>title</code> won&#39;t be wrapped by a Typography component. This can be useful to render an alternative Typography variant by wrapping the <code>title</code> text, and optional <code>subheader</code> text with the Typography component."},"subheader":{"description":"The content of the component."},"subheaderTypographyProps":{"description":"These props will be forwarded to the subheader (as long as disableTypography is not <code>true</code>)."},"sx":{"description":"The system prop that allows defining system overrides as well as additional CSS styles."},"title":{"description":"The content of the component."},"titleTypographyProps":{"description":"These props will be forwarded to the title (as long as disableTypography is not <code>true</code>)."}},"classDescriptions":{"action":{"description":"Styles applied to {{nodeName}}.","nodeName":"the action element"},"avatar":{"description":"Styles applied to {{nodeName}}.","nodeName":"the avatar element"},"content":{"description":"Styles applied to {{nodeName}}.","nodeName":"the content wrapper element"},"root":{"description":"Styles applied to the root element."},"subheader":{"description":"Styles applied to {{nodeName}}.","nodeName":"the subheader Typography element"},"title":{"description":"Styles applied to {{nodeName}}.","nodeName":"the title Typography element"}}}')}},function(e){e.O(0,[49774,9535,73976,97146,59727,85925,17376,17103,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,42378,20759,12589,92888,40179],function(){return e(e.s=271e3)}),_N_E=e.O()}]);