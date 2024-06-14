(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[35621],{696689:function(e,n,o){var t=o(371017)(function(e,n,o){return e+(o?"-":"")+n.toLowerCase()});e.exports=t},705794:function(e,n,o){var t=o(117431),a=t.createRender,i=t.getHeaders,s=t.getTitle,r=t.renderMarkdown;e.exports={createRender:a,getHeaders:i,getTitle:s,renderMarkdown:r}},117431:function(e,n,o){var t=o(582103).default,a=o(436578),i=o(113065).default,s=o(95018).default,r=o(315599).marked,c=o(891271),l=o(520740),d={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,headerPrefix:!1,headerIds:!1,mangle:!1},p=/---[\r\n]([\s\S]*)[\r\n]---/,u=/# (.*)[\r\n]/,m=/<p class="description">([\s\S]*?)<\/p>/,f=/(.*?):[\r\n]?\s+(\[[^\]]+\]|.*)/g,h=/^\s*$/,g=/[&<>"']/,b=/[&<>"']/g,F=/[<>"']|&(?!#?\w+;)/,v=/[<>"']|&(?!#?\w+;)/g,D={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},C=function(e){return D[e]};function y(e,n){if(n){if(g.test(e))return e.replace(b,C)}else if(F.test(e))return e.replace(v,C);return e}var N=["https://m2.material.io/","https://m3.material.io/","https://material.io/","https://getbootstrap.com/","https://icons.getbootstrap.com/","https://pictogrammers.com/","https://www.w3.org/","https://tailwindcss.com/","https://heroicons.com/","https://react-icons.github.io/","https://fontawesome.com/","https://www.radix-ui.com/","https://react-spectrum.adobe.com/","https://headlessui.com/","https://refine.dev/","https://scaffoldhub.io/","https://marmelab.com/"];e.exports={createRender:function(e){var n=e.headingHashes,o=e.toc,i=e.userLanguage,s=e.options,p={},u=-1;return function(m){var f=new r.Renderer;return f.heading=function(e,t){if(1===t||t>=4)return"<h".concat(t,">").concat(e,"</h").concat(t,">");var s,r=e.replace(/<a\b[^>]*>/gi,"").replace(/<\/a>/gi,"");r=r.replace(/<code\b[^>]*>/gi,"").replace(/<\/code>/gi,""),"en"===i?s=c(r,n):(u+=1,(s=a(n)[u])||(s=c(r,p)));var l=r.replace(/([^\s]\()/g,"$1&#8203;");if(2===t)o.push({text:l,level:t,hash:s,children:[]});else if(3===t){if(!o[o.length-1])throw Error("docs-infra: Missing parent level for: ".concat(r,"\n"));o[o.length-1].children.push({text:l,level:t,hash:s})}return["<h".concat(t,' id="').concat(s,'"><a href="#').concat(s,'" class="title-link-to-anchor">').concat(e,'<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a>'),'<button title="Post a comment" class="comment-link" data-feedback-hash="'.concat(s,'">'),'<svg><use xlink:href="#comment-link-icon" /></svg>',"</button>","</h".concat(t,">")].join("")},f.link=function(n,o,t){var a="";o&&(a+=' title="'.concat(o,'"')),N.some(function(e){return -1!==n.indexOf(e)})&&(a=' target="_blank" rel="noopener nofollow"');var r=n;return function(e,n,o){var t=new URL(e,"https://mui.com/");if(/\/{2,}$/.test(t.pathname))throw Error(["docs-infra: Duplicated trailing slashes. The following link:","[".concat(n,"](").concat(e,") in ").concat(o.location," has duplicated trailing slashes, please only add one."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("mui.com"===t.host){if("/"!==t.pathname[t.pathname.length-1])throw Error(["docs-infra: Missing trailing slash. The following link:","[".concat(n,"](").concat(e,") in ").concat(o.location," is missing a trailing slash, please add it."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("#"!==e[0]&&!(e.startsWith("https://")||e.startsWith("http://"))&&"/"!==e[0])throw Error(["docs-infra: Missing leading slash. The following link:","[".concat(n,"](").concat(e,") in ").concat(o.location," is missing a leading slash, please add it."),""].join("\n"))}}(n,t,e),"en"===i||0!==n.indexOf("/")||s.ignoreLanguagePages(n)||(r="/".concat(i).concat(n)),r.startsWith("".concat(s.env.SOURCE_CODE_REPO,"/blob/-/"))&&(r=r.replace("".concat(s.env.SOURCE_CODE_REPO,"/blob/-/"),"".concat(s.env.SOURCE_CODE_REPO,"/blob/v").concat(s.env.LIB_VERSION,"/"))),'<a href="'.concat(r,'"').concat(a,">").concat(t,"</a>")},f.code=function(e,n,o){var t,a=(n||"").match(/\S*/)[0],i=null===(t=(n||"").match(/title="([^"]*)"/))||void 0===t?void 0:t[1],s=l(e,a);return(null!=s&&s!==e&&(o=!0,e=s),e="".concat(e.replace(/\n$/,""),"\n"),a)?'<div class="MuiCode-root">'.concat(i?'<div class="MuiCode-title">'.concat(i,"</div>"):"",'<pre><code class="language-').concat(y(a,!0),'">').concat(o?e:y(e,!0),"</code></pre>").concat('<button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>',"\n"):"<pre><code>".concat(o?e:y(e,!0),"</code></pre>\n")},r.use({extensions:[{name:"callout",level:"block",start:function(e){var n=e.match(/:::/);return n?n.index:void 0},tokenizer:function(e){var n=/^ {0,3}(:{3,}(?=[^:\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~:]* *(?=\n|$)|$)/.exec(e);if(n){var o={type:"callout",raw:n[0],text:n[3].trim(),severity:n[2],tokens:[]};return this.lexer.blockTokens(o.text,o.tokens),o}},renderer:function(e){return'<aside class="MuiCallout-root MuiCallout-'.concat(e.severity,'">\n            ').concat(["info","success","warning","error"].includes(e.severity)?['<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">','<use class="MuiCode-copied-icon" xlink:href="#'.concat(e.severity,'-icon" />'),"</svg>"].join("\n"):"",'\n            <div class="MuiCallout-content">\n            ').concat(this.parser.parse(e.tokens),"\n</div></aside>")}}]}),r(m,t(t({},d),{},{renderer:f}))}},getContents:function(e){return e.replace(p,"").split(/^{{("(?:demo|component)":.*)}}$/gm).flatMap(function(e){return e.split(/^(<codeblock(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/codeblock>)$/gm)}).flatMap(function(e){return e.split(/^(<featureList(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/featureList>)$/gm)}).filter(function(e){return!h.test(e)})},getDescription:function(e){var n=e.match(m);if(null!==n)return n[1].trim().replace(/`/g,"")},getCodeblock:function(e){if(e.startsWith("<codeblock")){var n,o=null===(n=e.match(/^<codeblock [^>]*storageKey=["|'](\S*)["|'].*>/m))||void 0===n?void 0:n[1];return{type:"codeblock",data:s(e.matchAll(/^```((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*) ((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)\n((?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\n```/gm)).map(function(e){var n=i(e,4);return{language:n[1],tab:n[2],code:n[3]}}).filter(function(e){return void 0!==e.tab&&!h.test(e.code)}),storageKey:o}}},getFeatureList:function(e){if(e.startsWith("<featureList"))return['<ul class="feature-list">'].concat(s(e.split("\n").filter(function(e){return e.startsWith("- ")}).map(function(e){return e.slice(2)}).map(function(e){return"<li>".concat(e,"</li>")})),["</ul>"]).join("")},getHeaders:function(e){var n=e.match(p);if(!n)return{components:[]};n=n[1];try{for(var o,t={};null!==(o=f.exec(n));){var a=o[1],i=o[2].replace(/(.*)/,"$1");"["===i[0]?(i=(i=i.replace(/'/g,'"')).replace(/,\s+\]$/g,"]"),t[a]=JSON.parse(i)):t[a]=i.replace(/^'|'$/g,"")}return t.components?t.components=t.components.split(",").map(function(e){return e.trim()}).sort():t.components=[],t.hooks?t.hooks=t.hooks.split(",").map(function(e){return e.trim()}).sort():t.hooks=[],t}catch(e){throw Error("docs-infra: ".concat(e.message," in getHeader(markdown) with markdown: \n\n").concat(n,"\n"))}},getTitle:function(e){var n=e.match(u);return null===n?"":n[1].replace(/`/g,"")},renderMarkdown:function(e){return/[-*+] `([A-Za-z]+)`/g.test(e)?r.parse(e,d):r.parseInline(e,d).replace(/(\r?\n){2}/g,"<br>").replace(/\r?\n/g," ")}}},891271:function(e){e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function e(n,o){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=1===t?n:"".concat(n,"-").concat(t);return o[a]?e(n,o,t+1):(o[a]=!0,a)}(encodeURI(e.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g,"").replace(/[!@#$%^&*()=_+[\]{}`~;:'"|,.<>/?\s]+/g,"-").replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])\uFE0F?/g,"").replace(/-+/g,"-").replace(/^-|-$/g,"")),n)}},332691:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return r}}),o(470079);var t=o(512589),a=o(412007),i=JSON.parse('{"props":{"anchorOrigin":{"type":{"name":"shape","description":"{ horizontal: \'left\'<br>&#124;&nbsp;\'right\', vertical: \'bottom\'<br>&#124;&nbsp;\'top\' }"},"default":"{\\n  vertical: \'top\',\\n  horizontal: \'right\',\\n}"},"badgeContent":{"type":{"name":"node"},"default":"\'\'"},"badgeInset":{"type":{"name":"union","description":"number<br>&#124;&nbsp;string"},"default":"0"},"children":{"type":{"name":"node"}},"color":{"type":{"name":"union","description":"\'danger\'<br>&#124;&nbsp;\'neutral\'<br>&#124;&nbsp;\'primary\'<br>&#124;&nbsp;\'success\'<br>&#124;&nbsp;\'warning\'<br>&#124;&nbsp;string"},"default":"\'primary\'","additionalInfo":{"joy-color":true}},"component":{"type":{"name":"elementType"}},"invisible":{"type":{"name":"bool"},"default":"false"},"max":{"type":{"name":"number"},"default":"99"},"showZero":{"type":{"name":"bool"},"default":"false"},"size":{"type":{"name":"union","description":"\'sm\'<br>&#124;&nbsp;\'md\'<br>&#124;&nbsp;\'lg\'<br>&#124;&nbsp;string"},"default":"\'md\'","additionalInfo":{"joy-size":true}},"slotProps":{"type":{"name":"shape","description":"{ badge?: func<br>&#124;&nbsp;object, root?: func<br>&#124;&nbsp;object }"},"default":"{}"},"slots":{"type":{"name":"shape","description":"{ badge?: elementType, root?: elementType }"},"default":"{}","additionalInfo":{"slotsApi":true}},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"},"additionalInfo":{"sx":true}},"variant":{"type":{"name":"union","description":"\'outlined\'<br>&#124;&nbsp;\'plain\'<br>&#124;&nbsp;\'soft\'<br>&#124;&nbsp;\'solid\'<br>&#124;&nbsp;string"},"default":"\'solid\'","additionalInfo":{"joy-variant":true}}},"name":"Badge","imports":["import Badge from \'@mui/joy/Badge\';","import { Badge } from \'@mui/joy\';"],"slots":[{"name":"root","description":"The component that renders the root.","default":"\'span\'","class":"MuiBadge-root"},{"name":"badge","description":"The component that renders the badge.","default":"\'span\'","class":"MuiBadge-badge"}],"classes":[{"key":"anchorOriginBottomLeft","className":"MuiBadge-anchorOriginBottomLeft","description":"Class name applied to the badge `span` element if `anchorOrigin={{ \'bottom\', \'left\' }}`.","isGlobal":false},{"key":"anchorOriginBottomRight","className":"MuiBadge-anchorOriginBottomRight","description":"Class name applied to the badge `span` element if `anchorOrigin={{ \'bottom\', \'right\' }}`.","isGlobal":false},{"key":"anchorOriginTopLeft","className":"MuiBadge-anchorOriginTopLeft","description":"Class name applied to the badge `span` element if `anchorOrigin={{ \'top\', \'left\' }}`.","isGlobal":false},{"key":"anchorOriginTopRight","className":"MuiBadge-anchorOriginTopRight","description":"Class name applied to the badge `span` element if `anchorOrigin={{ \'top\', \'right\' }}`.","isGlobal":false},{"key":"colorContext","className":"MuiBadge-colorContext","description":"Class name applied to the root element when color inversion is triggered.","isGlobal":false},{"key":"colorDanger","className":"MuiBadge-colorDanger","description":"Class name applied to the badge `span` element if `color=\\"danger\\"`.","isGlobal":false},{"key":"colorNeutral","className":"MuiBadge-colorNeutral","description":"Class name applied to the badge `span` element if `color=\\"neutral\\"`.","isGlobal":false},{"key":"colorPrimary","className":"MuiBadge-colorPrimary","description":"Class name applied to the badge `span` element if `color=\\"primary\\"`.","isGlobal":false},{"key":"colorSuccess","className":"MuiBadge-colorSuccess","description":"Class name applied to the badge `span` element if `color=\\"success\\"`.","isGlobal":false},{"key":"colorWarning","className":"MuiBadge-colorWarning","description":"Class name applied to the badge `span` element if `color=\\"warning\\"`.","isGlobal":false},{"key":"invisible","className":"MuiBadge-invisible","description":"State class applied to the badge `span` element if `invisible={true}`.","isGlobal":false},{"key":"locationInside","className":"MuiBadge-locationInside","description":"State class applied to the badge `span` element if `location=\\"inside\\"`.","isGlobal":false},{"key":"locationOutside","className":"MuiBadge-locationOutside","description":"State class applied to the badge `span` element if `location=\\"outside\\"`.","isGlobal":false},{"key":"sizeLg","className":"MuiBadge-sizeLg","description":"Class name applied to the badge `span` element if `size=\\"lg\\"`.","isGlobal":false},{"key":"sizeMd","className":"MuiBadge-sizeMd","description":"Class name applied to the badge `span` element if `size=\\"md\\"`.","isGlobal":false},{"key":"sizeSm","className":"MuiBadge-sizeSm","description":"Class name applied to the badge `span` element if `size=\\"sm\\"`.","isGlobal":false},{"key":"variantOutlined","className":"MuiBadge-variantOutlined","description":"Class name applied to the badge `span` element if `variant=\\"outlined\\"`.","isGlobal":false},{"key":"variantPlain","className":"MuiBadge-variantPlain","description":"Class name applied to the root element if `variant=\\"plain\\"`.","isGlobal":false},{"key":"variantSoft","className":"MuiBadge-variantSoft","description":"Class name applied to the badge `span` element if `variant=\\"soft\\"`.","isGlobal":false},{"key":"variantSolid","className":"MuiBadge-variantSolid","description":"Class name applied to the badge `span` element if `variant=\\"solid\\"`.","isGlobal":false}],"spread":true,"themeDefaultProps":true,"muiName":"JoyBadge","forwardsRefTo":"HTMLSpanElement","filename":"/packages/mui-joy/src/Badge/Badge.tsx","inheritance":null,"demos":"<ul><li><a href=\\"/joy-ui/react-badge/\\">Badge</a></li></ul>","cssComponent":false}'),s=o(735250);function r(e){var n=e.descriptions,o=e.pageContent;return(0,s.jsx)(t.Z,{descriptions:n,pageContent:o})}r.getInitialProps=function(){var e=o(977996);return{descriptions:(0,a.Z)(e),pageContent:i}}},412007:function(e,n,o){"use strict";o.d(n,{Z:function(){return s}});var t=o(705794),a=o(187509),i=/-([a-z]{2})\.json$/;function s(e){var n={},o={},s=[];return e.keys().forEach(function(e){e.match(i)?s.push(e):s=[e].concat(s)}),s.forEach(function(r){var c=r.match(i),l=null!==c?c[1]:"en",d=e(r)||null;if(null!==d&&d.componentDescription){var p=[],u=(0,t.createRender)({headingHashes:n,toc:p,userLanguage:l,location:s,options:{ignoreLanguagePages:a.LANGUAGES_IGNORE_PAGES,env:{SOURCE_CODE_REPO:""}}});d.componentDescription=u(d.componentDescription),d.componentDescriptionToc=p}o[l]=d}),o}},234516:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/joy-ui/api/badge",function(){return o(332691)}])},977996:function(e,n,o){var t={"./badge.json":98748};function a(e){return o(i(e))}function i(e){if(!o.o(t,e)){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}a.keys=function(){return Object.keys(t)},a.resolve=i,e.exports=a,a.id=977996},36790:function(e,n,o){"use strict";function t(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}o.d(n,{Z:function(){return t}})},376757:function(e,n,o){"use strict";o.d(n,{Z:function(){return d}});var t=o(136729),a=o(267765),i=o(861963);function s(e){return(s=a?i.bind():function(e){return e.__proto__||i(e)})(e)}function r(){try{var e=!Boolean.prototype.valueOf.call(t(Boolean,[],function(){}))}catch(e){}return(r=function(){return!!e})()}var c=o(931467),l=o(36790);function d(e){var n=r();return function(){var o,a=s(e);if(n){var i=s(this).constructor;o=t(a,arguments,i)}else o=a.apply(this,arguments);return function(e,n){if(n&&("object"==(0,c.Z)(n)||"function"==typeof n))return n;if(void 0!==n)throw TypeError("Derived constructors may only return object or undefined");return(0,l.Z)(e)}(this,o)}}},206782:function(e,n,o){"use strict";o.d(n,{Z:function(){return s}});var t=o(17800),a=o(303268),i=o(909101);function s(e,n){if("function"!=typeof n&&null!==n)throw TypeError("Super expression must either be null or a function");e.prototype=t(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a(e,"prototype",{writable:!1}),n&&(0,i.Z)(e,n)}},909101:function(e,n,o){"use strict";o.d(n,{Z:function(){return a}});var t=o(267765);function a(e,n){return(a=t?t.bind():function(e,n){return e.__proto__=n,e})(e,n)}},98748:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"anchorOrigin":{"description":"The anchor of the badge."},"badgeContent":{"description":"The content rendered within the badge."},"badgeInset":{"description":"The inset of the badge. Support shorthand syntax as described in <a href=\\"https://developer.mozilla.org/en-US/docs/Web/CSS/inset\\">https://developer.mozilla.org/en-US/docs/Web/CSS/inset</a>."},"children":{"description":"The badge will be added relative to this node."},"color":{"description":"The color of the component. It supports those theme colors that make sense for this component."},"component":{"description":"The component used for the root node. Either a string to use a HTML element or a component."},"invisible":{"description":"If <code>true</code>, the badge is invisible."},"max":{"description":"Max count to show."},"showZero":{"description":"Controls whether the badge is hidden when <code>badgeContent</code> is zero."},"size":{"description":"The size of the component."},"slotProps":{"description":"The props used for each slot inside."},"slots":{"description":"The components used for each slot inside."},"sx":{"description":"The system prop that allows defining system overrides as well as additional CSS styles."},"variant":{"description":"The <a href=\\"https://mui.com/joy-ui/main-features/global-variants/\\">global variant</a> to use."}},"classDescriptions":{"anchorOriginBottomLeft":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the badge <code>span</code> element","conditions":"<code>anchorOrigin={{ \'bottom\', \'left\' }}</code>"},"anchorOriginBottomRight":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the badge <code>span</code> element","conditions":"<code>anchorOrigin={{ \'bottom\', \'right\' }}</code>"},"anchorOriginTopLeft":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the badge <code>span</code> element","conditions":"<code>anchorOrigin={{ \'top\', \'left\' }}</code>"},"anchorOriginTopRight":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the badge <code>span</code> element","conditions":"<code>anchorOrigin={{ \'top\', \'right\' }}</code>"},"colorContext":{"description":"Class name applied to {{nodeName}} when {{conditions}}.","nodeName":"the root element","conditions":"color inversion is triggered"},"colorDanger":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the badge <code>span</code> element","conditions":"<code>color=\\"danger\\"</code>"},"colorNeutral":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the badge <code>span</code> element","conditions":"<code>color=\\"neutral\\"</code>"},"colorPrimary":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the badge <code>span</code> element","conditions":"<code>color=\\"primary\\"</code>"},"colorSuccess":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the badge <code>span</code> element","conditions":"<code>color=\\"success\\"</code>"},"colorWarning":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the badge <code>span</code> element","conditions":"<code>color=\\"warning\\"</code>"},"invisible":{"description":"State class applied to {{nodeName}} if {{conditions}}.","nodeName":"the badge <code>span</code> element","conditions":"<code>invisible={true}</code>"},"locationInside":{"description":"State class applied to {{nodeName}} if {{conditions}}.","nodeName":"the badge <code>span</code> element","conditions":"<code>location=\\"inside\\"</code>"},"locationOutside":{"description":"State class applied to {{nodeName}} if {{conditions}}.","nodeName":"the badge <code>span</code> element","conditions":"<code>location=\\"outside\\"</code>"},"sizeLg":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the badge <code>span</code> element","conditions":"<code>size=\\"lg\\"</code>"},"sizeMd":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the badge <code>span</code> element","conditions":"<code>size=\\"md\\"</code>"},"sizeSm":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the badge <code>span</code> element","conditions":"<code>size=\\"sm\\"</code>"},"variantOutlined":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the badge <code>span</code> element","conditions":"<code>variant=\\"outlined\\"</code>"},"variantPlain":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"plain\\"</code>"},"variantSoft":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the badge <code>span</code> element","conditions":"<code>variant=\\"soft\\"</code>"},"variantSolid":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the badge <code>span</code> element","conditions":"<code>variant=\\"solid\\"</code>"}},"slotDescriptions":{"badge":"The component that renders the badge.","root":"The component that renders the root."}}')}},function(e){e.O(0,[49774,9535,73976,97146,59727,85925,17376,17103,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,42378,20759,12589,92888,40179],function(){return e(e.s=234516)}),_N_E=e.O()}]);