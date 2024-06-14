(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[51978],{696689:function(e,o,t){var n=t(371017)(function(e,o,t){return e+(t?"-":"")+o.toLowerCase()});e.exports=n},705794:function(e,o,t){var n=t(117431),i=n.createRender,a=n.getHeaders,r=n.getTitle,s=n.renderMarkdown;e.exports={createRender:i,getHeaders:a,getTitle:r,renderMarkdown:s}},117431:function(e,o,t){var n=t(582103).default,i=t(436578),a=t(113065).default,r=t(95018).default,s=t(315599).marked,c=t(891271),l=t(520740),u={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,headerPrefix:!1,headerIds:!1,mangle:!1},d=/---[\r\n]([\s\S]*)[\r\n]---/,p=/# (.*)[\r\n]/,m=/<p class="description">([\s\S]*?)<\/p>/,f=/(.*?):[\r\n]?\s+(\[[^\]]+\]|.*)/g,h=/^\s*$/,g=/[&<>"']/,F=/[&<>"']/g,D=/[<>"']|&(?!#?\w+;)/,v=/[<>"']|&(?!#?\w+;)/g,b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},y=function(e){return b[e]};function C(e,o){if(o){if(g.test(e))return e.replace(F,y)}else if(D.test(e))return e.replace(v,y);return e}var M=["https://m2.material.io/","https://m3.material.io/","https://material.io/","https://getbootstrap.com/","https://icons.getbootstrap.com/","https://pictogrammers.com/","https://www.w3.org/","https://tailwindcss.com/","https://heroicons.com/","https://react-icons.github.io/","https://fontawesome.com/","https://www.radix-ui.com/","https://react-spectrum.adobe.com/","https://headlessui.com/","https://refine.dev/","https://scaffoldhub.io/","https://marmelab.com/"];e.exports={createRender:function(e){var o=e.headingHashes,t=e.toc,a=e.userLanguage,r=e.options,d={},p=-1;return function(m){var f=new s.Renderer;return f.heading=function(e,n){if(1===n||n>=4)return"<h".concat(n,">").concat(e,"</h").concat(n,">");var r,s=e.replace(/<a\b[^>]*>/gi,"").replace(/<\/a>/gi,"");s=s.replace(/<code\b[^>]*>/gi,"").replace(/<\/code>/gi,""),"en"===a?r=c(s,o):(p+=1,(r=i(o)[p])||(r=c(s,d)));var l=s.replace(/([^\s]\()/g,"$1&#8203;");if(2===n)t.push({text:l,level:n,hash:r,children:[]});else if(3===n){if(!t[t.length-1])throw Error("docs-infra: Missing parent level for: ".concat(s,"\n"));t[t.length-1].children.push({text:l,level:n,hash:r})}return["<h".concat(n,' id="').concat(r,'"><a href="#').concat(r,'" class="title-link-to-anchor">').concat(e,'<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a>'),'<button title="Post a comment" class="comment-link" data-feedback-hash="'.concat(r,'">'),'<svg><use xlink:href="#comment-link-icon" /></svg>',"</button>","</h".concat(n,">")].join("")},f.link=function(o,t,n){var i="";t&&(i+=' title="'.concat(t,'"')),M.some(function(e){return -1!==o.indexOf(e)})&&(i=' target="_blank" rel="noopener nofollow"');var s=o;return function(e,o,t){var n=new URL(e,"https://mui.com/");if(/\/{2,}$/.test(n.pathname))throw Error(["docs-infra: Duplicated trailing slashes. The following link:","[".concat(o,"](").concat(e,") in ").concat(t.location," has duplicated trailing slashes, please only add one."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("mui.com"===n.host){if("/"!==n.pathname[n.pathname.length-1])throw Error(["docs-infra: Missing trailing slash. The following link:","[".concat(o,"](").concat(e,") in ").concat(t.location," is missing a trailing slash, please add it."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("#"!==e[0]&&!(e.startsWith("https://")||e.startsWith("http://"))&&"/"!==e[0])throw Error(["docs-infra: Missing leading slash. The following link:","[".concat(o,"](").concat(e,") in ").concat(t.location," is missing a leading slash, please add it."),""].join("\n"))}}(o,n,e),"en"===a||0!==o.indexOf("/")||r.ignoreLanguagePages(o)||(s="/".concat(a).concat(o)),s.startsWith("".concat(r.env.SOURCE_CODE_REPO,"/blob/-/"))&&(s=s.replace("".concat(r.env.SOURCE_CODE_REPO,"/blob/-/"),"".concat(r.env.SOURCE_CODE_REPO,"/blob/v").concat(r.env.LIB_VERSION,"/"))),'<a href="'.concat(s,'"').concat(i,">").concat(n,"</a>")},f.code=function(e,o,t){var n,i=(o||"").match(/\S*/)[0],a=null===(n=(o||"").match(/title="([^"]*)"/))||void 0===n?void 0:n[1],r=l(e,i);return(null!=r&&r!==e&&(t=!0,e=r),e="".concat(e.replace(/\n$/,""),"\n"),i)?'<div class="MuiCode-root">'.concat(a?'<div class="MuiCode-title">'.concat(a,"</div>"):"",'<pre><code class="language-').concat(C(i,!0),'">').concat(t?e:C(e,!0),"</code></pre>").concat('<button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>',"\n"):"<pre><code>".concat(t?e:C(e,!0),"</code></pre>\n")},s.use({extensions:[{name:"callout",level:"block",start:function(e){var o=e.match(/:::/);return o?o.index:void 0},tokenizer:function(e){var o=/^ {0,3}(:{3,}(?=[^:\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~:]* *(?=\n|$)|$)/.exec(e);if(o){var t={type:"callout",raw:o[0],text:o[3].trim(),severity:o[2],tokens:[]};return this.lexer.blockTokens(t.text,t.tokens),t}},renderer:function(e){return'<aside class="MuiCallout-root MuiCallout-'.concat(e.severity,'">\n            ').concat(["info","success","warning","error"].includes(e.severity)?['<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">','<use class="MuiCode-copied-icon" xlink:href="#'.concat(e.severity,'-icon" />'),"</svg>"].join("\n"):"",'\n            <div class="MuiCallout-content">\n            ').concat(this.parser.parse(e.tokens),"\n</div></aside>")}}]}),s(m,n(n({},u),{},{renderer:f}))}},getContents:function(e){return e.replace(d,"").split(/^{{("(?:demo|component)":.*)}}$/gm).flatMap(function(e){return e.split(/^(<codeblock(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/codeblock>)$/gm)}).flatMap(function(e){return e.split(/^(<featureList(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/featureList>)$/gm)}).filter(function(e){return!h.test(e)})},getDescription:function(e){var o=e.match(m);if(null!==o)return o[1].trim().replace(/`/g,"")},getCodeblock:function(e){if(e.startsWith("<codeblock")){var o,t=null===(o=e.match(/^<codeblock [^>]*storageKey=["|'](\S*)["|'].*>/m))||void 0===o?void 0:o[1];return{type:"codeblock",data:r(e.matchAll(/^```((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*) ((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)\n((?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\n```/gm)).map(function(e){var o=a(e,4);return{language:o[1],tab:o[2],code:o[3]}}).filter(function(e){return void 0!==e.tab&&!h.test(e.code)}),storageKey:t}}},getFeatureList:function(e){if(e.startsWith("<featureList"))return['<ul class="feature-list">'].concat(r(e.split("\n").filter(function(e){return e.startsWith("- ")}).map(function(e){return e.slice(2)}).map(function(e){return"<li>".concat(e,"</li>")})),["</ul>"]).join("")},getHeaders:function(e){var o=e.match(d);if(!o)return{components:[]};o=o[1];try{for(var t,n={};null!==(t=f.exec(o));){var i=t[1],a=t[2].replace(/(.*)/,"$1");"["===a[0]?(a=(a=a.replace(/'/g,'"')).replace(/,\s+\]$/g,"]"),n[i]=JSON.parse(a)):n[i]=a.replace(/^'|'$/g,"")}return n.components?n.components=n.components.split(",").map(function(e){return e.trim()}).sort():n.components=[],n.hooks?n.hooks=n.hooks.split(",").map(function(e){return e.trim()}).sort():n.hooks=[],n}catch(e){throw Error("docs-infra: ".concat(e.message," in getHeader(markdown) with markdown: \n\n").concat(o,"\n"))}},getTitle:function(e){var o=e.match(p);return null===o?"":o[1].replace(/`/g,"")},renderMarkdown:function(e){return/[-*+] `([A-Za-z]+)`/g.test(e)?s.parse(e,u):s.parseInline(e,u).replace(/(\r?\n){2}/g,"<br>").replace(/\r?\n/g," ")}}},891271:function(e){e.exports=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function e(o,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=1===n?o:"".concat(o,"-").concat(n);return t[i]?e(o,t,n+1):(t[i]=!0,i)}(encodeURI(e.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g,"").replace(/[!@#$%^&*()=_+[\]{}`~;:'"|,.<>/?\s]+/g,"-").replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])\uFE0F?/g,"").replace(/-+/g,"-").replace(/^-|-$/g,"")),o)}},721958:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return s}}),t(470079);var n=t(512589),i=t(412007),a=JSON.parse('{"props":{"children":{"type":{"name":"node"}},"color":{"type":{"name":"union","description":"\'danger\'<br>&#124;&nbsp;\'neutral\'<br>&#124;&nbsp;\'primary\'<br>&#124;&nbsp;\'success\'<br>&#124;&nbsp;\'warning\'<br>&#124;&nbsp;string"},"default":"\'neutral\'","additionalInfo":{"joy-color":true}},"component":{"type":{"name":"elementType"}},"invertedColors":{"type":{"name":"bool"},"default":"false"},"layout":{"type":{"name":"union","description":"\'center\'<br>&#124;&nbsp;\'fullscreen\'<br>&#124;&nbsp;string"},"default":"\'center\'"},"maxWidth":{"type":{"name":"union","description":"number<br>&#124;&nbsp;string"}},"minWidth":{"type":{"name":"union","description":"number<br>&#124;&nbsp;string"}},"orientation":{"type":{"name":"enum","description":"\'horizontal\'<br>&#124;&nbsp;\'vertical\'"},"default":"\'vertical\'"},"size":{"type":{"name":"union","description":"\'sm\'<br>&#124;&nbsp;\'md\'<br>&#124;&nbsp;\'lg\'<br>&#124;&nbsp;string"},"default":"\'md\'","additionalInfo":{"joy-size":true}},"slotProps":{"type":{"name":"shape","description":"{ root?: func<br>&#124;&nbsp;object }"},"default":"{}"},"slots":{"type":{"name":"shape","description":"{ root?: elementType }"},"default":"{}","additionalInfo":{"slotsApi":true}},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"},"additionalInfo":{"sx":true}},"variant":{"type":{"name":"union","description":"\'outlined\'<br>&#124;&nbsp;\'plain\'<br>&#124;&nbsp;\'soft\'<br>&#124;&nbsp;\'solid\'<br>&#124;&nbsp;string"},"default":"\'outlined\'","additionalInfo":{"joy-variant":true}}},"name":"ModalDialog","imports":["import ModalDialog from \'@mui/joy/ModalDialog\';","import { ModalDialog } from \'@mui/joy\';"],"slots":[{"name":"root","description":"The component that renders the root.","default":"\'div\'","class":"MuiModalDialog-root"}],"classes":[{"key":"colorContext","className":"MuiModalDialog-colorContext","description":"Class name applied to the root element when color inversion is triggered.","isGlobal":false},{"key":"colorDanger","className":"MuiModalDialog-colorDanger","description":"Class name applied to the root element if `color=\\"danger\\"`.","isGlobal":false},{"key":"colorNeutral","className":"MuiModalDialog-colorNeutral","description":"Class name applied to the root element if `color=\\"neutral\\"`.","isGlobal":false},{"key":"colorPrimary","className":"MuiModalDialog-colorPrimary","description":"Class name applied to the root element if `color=\\"primary\\"`.","isGlobal":false},{"key":"colorSuccess","className":"MuiModalDialog-colorSuccess","description":"Class name applied to the root element if `color=\\"success\\"`.","isGlobal":false},{"key":"colorWarning","className":"MuiModalDialog-colorWarning","description":"Class name applied to the root element if `color=\\"warning\\"`.","isGlobal":false},{"key":"layoutCenter","className":"MuiModalDialog-layoutCenter","description":"Class name applied to the root element if `layout=\\"center\\"`.","isGlobal":false},{"key":"layoutFullscreen","className":"MuiModalDialog-layoutFullscreen","description":"Class name applied to the root element if `layout=\\"fullscreen\\"`.","isGlobal":false},{"key":"sizeLg","className":"MuiModalDialog-sizeLg","description":"Class name applied to the root element if `size=\\"lg\\"`.","isGlobal":false},{"key":"sizeMd","className":"MuiModalDialog-sizeMd","description":"Class name applied to the root element if `size=\\"md\\"`.","isGlobal":false},{"key":"sizeSm","className":"MuiModalDialog-sizeSm","description":"Class name applied to the root element if `size=\\"sm\\"`.","isGlobal":false},{"key":"variantOutlined","className":"MuiModalDialog-variantOutlined","description":"Class name applied to the root element if `variant=\\"outlined\\"`.","isGlobal":false},{"key":"variantPlain","className":"MuiModalDialog-variantPlain","description":"Class name applied to the root element if `variant=\\"plain\\"`.","isGlobal":false},{"key":"variantSoft","className":"MuiModalDialog-variantSoft","description":"Class name applied to the root element if `variant=\\"soft\\"`.","isGlobal":false},{"key":"variantSolid","className":"MuiModalDialog-variantSolid","description":"Class name applied to the root element if `variant=\\"solid\\"`.","isGlobal":false}],"spread":true,"themeDefaultProps":true,"muiName":"JoyModalDialog","forwardsRefTo":"HTMLDivElement","filename":"/packages/mui-joy/src/ModalDialog/ModalDialog.tsx","inheritance":null,"demos":"<ul><li><a href=\\"/joy-ui/react-modal/\\">Modal</a></li></ul>","cssComponent":false}'),r=t(735250);function s(e){var o=e.descriptions,t=e.pageContent;return(0,r.jsx)(n.Z,{descriptions:o,pageContent:t})}s.getInitialProps=function(){var e=t(929134);return{descriptions:(0,i.Z)(e),pageContent:a}}},412007:function(e,o,t){"use strict";t.d(o,{Z:function(){return r}});var n=t(705794),i=t(187509),a=/-([a-z]{2})\.json$/;function r(e){var o={},t={},r=[];return e.keys().forEach(function(e){e.match(a)?r.push(e):r=[e].concat(r)}),r.forEach(function(s){var c=s.match(a),l=null!==c?c[1]:"en",u=e(s)||null;if(null!==u&&u.componentDescription){var d=[],p=(0,n.createRender)({headingHashes:o,toc:d,userLanguage:l,location:r,options:{ignoreLanguagePages:i.LANGUAGES_IGNORE_PAGES,env:{SOURCE_CODE_REPO:""}}});u.componentDescription=p(u.componentDescription),u.componentDescriptionToc=d}t[l]=u}),t}},227373:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/joy-ui/api/modal-dialog",function(){return t(721958)}])},929134:function(e,o,t){var n={"./modal-dialog.json":473690};function i(e){return t(a(e))}function a(e){if(!t.o(n,e)){var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=a,e.exports=i,i.id=929134},36790:function(e,o,t){"use strict";function n(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(o,{Z:function(){return n}})},376757:function(e,o,t){"use strict";t.d(o,{Z:function(){return u}});var n=t(136729),i=t(267765),a=t(861963);function r(e){return(r=i?a.bind():function(e){return e.__proto__||a(e)})(e)}function s(){try{var e=!Boolean.prototype.valueOf.call(n(Boolean,[],function(){}))}catch(e){}return(s=function(){return!!e})()}var c=t(931467),l=t(36790);function u(e){var o=s();return function(){var t,i=r(e);if(o){var a=r(this).constructor;t=n(i,arguments,a)}else t=i.apply(this,arguments);return function(e,o){if(o&&("object"==(0,c.Z)(o)||"function"==typeof o))return o;if(void 0!==o)throw TypeError("Derived constructors may only return object or undefined");return(0,l.Z)(e)}(this,t)}}},206782:function(e,o,t){"use strict";t.d(o,{Z:function(){return r}});var n=t(17800),i=t(303268),a=t(909101);function r(e,o){if("function"!=typeof o&&null!==o)throw TypeError("Super expression must either be null or a function");e.prototype=n(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i(e,"prototype",{writable:!1}),o&&(0,a.Z)(e,o)}},909101:function(e,o,t){"use strict";t.d(o,{Z:function(){return i}});var n=t(267765);function i(e,o){return(i=n?n.bind():function(e,o){return e.__proto__=o,e})(e,o)}},473690:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"children":{"description":"The content of the component."},"color":{"description":"The color of the component. It supports those theme colors that make sense for this component."},"component":{"description":"The component used for the root node. Either a string to use a HTML element or a component."},"invertedColors":{"description":"If <code>true</code>, the children with an implicit color prop invert their colors to match the component&#39;s variant and color."},"layout":{"description":"The layout of the dialog"},"maxWidth":{"description":"The maximum width of the component."},"minWidth":{"description":"The minimum width of the component."},"orientation":{"description":"The component orientation."},"size":{"description":"The size of the component."},"slotProps":{"description":"The props used for each slot inside."},"slots":{"description":"The components used for each slot inside."},"sx":{"description":"The system prop that allows defining system overrides as well as additional CSS styles."},"variant":{"description":"The <a href=\\"https://mui.com/joy-ui/main-features/global-variants/\\">global variant</a> to use."}},"classDescriptions":{"colorContext":{"description":"Class name applied to {{nodeName}} when {{conditions}}.","nodeName":"the root element","conditions":"color inversion is triggered"},"colorDanger":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"danger\\"</code>"},"colorNeutral":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"neutral\\"</code>"},"colorPrimary":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"primary\\"</code>"},"colorSuccess":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"success\\"</code>"},"colorWarning":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"warning\\"</code>"},"layoutCenter":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>layout=\\"center\\"</code>"},"layoutFullscreen":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>layout=\\"fullscreen\\"</code>"},"sizeLg":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>size=\\"lg\\"</code>"},"sizeMd":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>size=\\"md\\"</code>"},"sizeSm":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>size=\\"sm\\"</code>"},"variantOutlined":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"outlined\\"</code>"},"variantPlain":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"plain\\"</code>"},"variantSoft":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"soft\\"</code>"},"variantSolid":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"solid\\"</code>"}},"slotDescriptions":{"root":"The component that renders the root."}}')}},function(e){e.O(0,[49774,9535,73976,97146,59727,85925,17376,17103,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,42378,20759,12589,92888,40179],function(){return e(e.s=227373)}),_N_E=e.O()}]);