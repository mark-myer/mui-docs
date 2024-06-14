(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[70811],{696689:function(e,t,n){var o=n(371017)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=o},705794:function(e,t,n){var o=n(117431),i=o.createRender,a=o.getHeaders,r=o.getTitle,s=o.renderMarkdown;e.exports={createRender:i,getHeaders:a,getTitle:r,renderMarkdown:s}},117431:function(e,t,n){var o=n(582103).default,i=n(436578),a=n(113065).default,r=n(95018).default,s=n(315599).marked,c=n(891271),l=n(520740),u={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,headerPrefix:!1,headerIds:!1,mangle:!1},d=/---[\r\n]([\s\S]*)[\r\n]---/,p=/# (.*)[\r\n]/,f=/<p class="description">([\s\S]*?)<\/p>/,m=/(.*?):[\r\n]?\s+(\[[^\]]+\]|.*)/g,h=/^\s*$/,g=/[&<>"']/,b=/[&<>"']/g,F=/[<>"']|&(?!#?\w+;)/,y=/[<>"']|&(?!#?\w+;)/g,v={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},D=function(e){return v[e]};function C(e,t){if(t){if(g.test(e))return e.replace(b,D)}else if(F.test(e))return e.replace(y,D);return e}var k=["https://m2.material.io/","https://m3.material.io/","https://material.io/","https://getbootstrap.com/","https://icons.getbootstrap.com/","https://pictogrammers.com/","https://www.w3.org/","https://tailwindcss.com/","https://heroicons.com/","https://react-icons.github.io/","https://fontawesome.com/","https://www.radix-ui.com/","https://react-spectrum.adobe.com/","https://headlessui.com/","https://refine.dev/","https://scaffoldhub.io/","https://marmelab.com/"];e.exports={createRender:function(e){var t=e.headingHashes,n=e.toc,a=e.userLanguage,r=e.options,d={},p=-1;return function(f){var m=new s.Renderer;return m.heading=function(e,o){if(1===o||o>=4)return"<h".concat(o,">").concat(e,"</h").concat(o,">");var r,s=e.replace(/<a\b[^>]*>/gi,"").replace(/<\/a>/gi,"");s=s.replace(/<code\b[^>]*>/gi,"").replace(/<\/code>/gi,""),"en"===a?r=c(s,t):(p+=1,(r=i(t)[p])||(r=c(s,d)));var l=s.replace(/([^\s]\()/g,"$1&#8203;");if(2===o)n.push({text:l,level:o,hash:r,children:[]});else if(3===o){if(!n[n.length-1])throw Error("docs-infra: Missing parent level for: ".concat(s,"\n"));n[n.length-1].children.push({text:l,level:o,hash:r})}return["<h".concat(o,' id="').concat(r,'"><a href="#').concat(r,'" class="title-link-to-anchor">').concat(e,'<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a>'),'<button title="Post a comment" class="comment-link" data-feedback-hash="'.concat(r,'">'),'<svg><use xlink:href="#comment-link-icon" /></svg>',"</button>","</h".concat(o,">")].join("")},m.link=function(t,n,o){var i="";n&&(i+=' title="'.concat(n,'"')),k.some(function(e){return -1!==t.indexOf(e)})&&(i=' target="_blank" rel="noopener nofollow"');var s=t;return function(e,t,n){var o=new URL(e,"https://mui.com/");if(/\/{2,}$/.test(o.pathname))throw Error(["docs-infra: Duplicated trailing slashes. The following link:","[".concat(t,"](").concat(e,") in ").concat(n.location," has duplicated trailing slashes, please only add one."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("mui.com"===o.host){if("/"!==o.pathname[o.pathname.length-1])throw Error(["docs-infra: Missing trailing slash. The following link:","[".concat(t,"](").concat(e,") in ").concat(n.location," is missing a trailing slash, please add it."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("#"!==e[0]&&!(e.startsWith("https://")||e.startsWith("http://"))&&"/"!==e[0])throw Error(["docs-infra: Missing leading slash. The following link:","[".concat(t,"](").concat(e,") in ").concat(n.location," is missing a leading slash, please add it."),""].join("\n"))}}(t,o,e),"en"===a||0!==t.indexOf("/")||r.ignoreLanguagePages(t)||(s="/".concat(a).concat(t)),s.startsWith("".concat(r.env.SOURCE_CODE_REPO,"/blob/-/"))&&(s=s.replace("".concat(r.env.SOURCE_CODE_REPO,"/blob/-/"),"".concat(r.env.SOURCE_CODE_REPO,"/blob/v").concat(r.env.LIB_VERSION,"/"))),'<a href="'.concat(s,'"').concat(i,">").concat(o,"</a>")},m.code=function(e,t,n){var o,i=(t||"").match(/\S*/)[0],a=null===(o=(t||"").match(/title="([^"]*)"/))||void 0===o?void 0:o[1],r=l(e,i);return(null!=r&&r!==e&&(n=!0,e=r),e="".concat(e.replace(/\n$/,""),"\n"),i)?'<div class="MuiCode-root">'.concat(a?'<div class="MuiCode-title">'.concat(a,"</div>"):"",'<pre><code class="language-').concat(C(i,!0),'">').concat(n?e:C(e,!0),"</code></pre>").concat('<button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>',"\n"):"<pre><code>".concat(n?e:C(e,!0),"</code></pre>\n")},s.use({extensions:[{name:"callout",level:"block",start:function(e){var t=e.match(/:::/);return t?t.index:void 0},tokenizer:function(e){var t=/^ {0,3}(:{3,}(?=[^:\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~:]* *(?=\n|$)|$)/.exec(e);if(t){var n={type:"callout",raw:t[0],text:t[3].trim(),severity:t[2],tokens:[]};return this.lexer.blockTokens(n.text,n.tokens),n}},renderer:function(e){return'<aside class="MuiCallout-root MuiCallout-'.concat(e.severity,'">\n            ').concat(["info","success","warning","error"].includes(e.severity)?['<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">','<use class="MuiCode-copied-icon" xlink:href="#'.concat(e.severity,'-icon" />'),"</svg>"].join("\n"):"",'\n            <div class="MuiCallout-content">\n            ').concat(this.parser.parse(e.tokens),"\n</div></aside>")}}]}),s(f,o(o({},u),{},{renderer:m}))}},getContents:function(e){return e.replace(d,"").split(/^{{("(?:demo|component)":.*)}}$/gm).flatMap(function(e){return e.split(/^(<codeblock(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/codeblock>)$/gm)}).flatMap(function(e){return e.split(/^(<featureList(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/featureList>)$/gm)}).filter(function(e){return!h.test(e)})},getDescription:function(e){var t=e.match(f);if(null!==t)return t[1].trim().replace(/`/g,"")},getCodeblock:function(e){if(e.startsWith("<codeblock")){var t,n=null===(t=e.match(/^<codeblock [^>]*storageKey=["|'](\S*)["|'].*>/m))||void 0===t?void 0:t[1];return{type:"codeblock",data:r(e.matchAll(/^```((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*) ((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)\n((?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\n```/gm)).map(function(e){var t=a(e,4);return{language:t[1],tab:t[2],code:t[3]}}).filter(function(e){return void 0!==e.tab&&!h.test(e.code)}),storageKey:n}}},getFeatureList:function(e){if(e.startsWith("<featureList"))return['<ul class="feature-list">'].concat(r(e.split("\n").filter(function(e){return e.startsWith("- ")}).map(function(e){return e.slice(2)}).map(function(e){return"<li>".concat(e,"</li>")})),["</ul>"]).join("")},getHeaders:function(e){var t=e.match(d);if(!t)return{components:[]};t=t[1];try{for(var n,o={};null!==(n=m.exec(t));){var i=n[1],a=n[2].replace(/(.*)/,"$1");"["===a[0]?(a=(a=a.replace(/'/g,'"')).replace(/,\s+\]$/g,"]"),o[i]=JSON.parse(a)):o[i]=a.replace(/^'|'$/g,"")}return o.components?o.components=o.components.split(",").map(function(e){return e.trim()}).sort():o.components=[],o.hooks?o.hooks=o.hooks.split(",").map(function(e){return e.trim()}).sort():o.hooks=[],o}catch(e){throw Error("docs-infra: ".concat(e.message," in getHeader(markdown) with markdown: \n\n").concat(t,"\n"))}},getTitle:function(e){var t=e.match(p);return null===t?"":t[1].replace(/`/g,"")},renderMarkdown:function(e){return/[-*+] `([A-Za-z]+)`/g.test(e)?s.parse(e,u):s.parseInline(e,u).replace(/(\r?\n){2}/g,"<br>").replace(/\r?\n/g," ")}}},891271:function(e){e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function e(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=1===o?t:"".concat(t,"-").concat(o);return n[i]?e(t,n,o+1):(n[i]=!0,i)}(encodeURI(e.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g,"").replace(/[!@#$%^&*()=_+[\]{}`~;:'"|,.<>/?\s]+/g,"-").replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])\uFE0F?/g,"").replace(/-+/g,"-").replace(/^-|-$/g,"")),t)}},466620:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}}),n(470079);var o=n(512589),i=n(412007),a=JSON.parse('{"props":{"align":{"type":{"name":"enum","description":"\'center\'<br>&#124;&nbsp;\'inherit\'<br>&#124;&nbsp;\'justify\'<br>&#124;&nbsp;\'left\'<br>&#124;&nbsp;\'right\'"},"default":"\'inherit\'"},"children":{"type":{"name":"node"}},"classes":{"type":{"name":"object"},"additionalInfo":{"cssApi":true}},"component":{"type":{"name":"elementType"}},"padding":{"type":{"name":"enum","description":"\'checkbox\'<br>&#124;&nbsp;\'none\'<br>&#124;&nbsp;\'normal\'"}},"scope":{"type":{"name":"string"}},"size":{"type":{"name":"union","description":"\'medium\'<br>&#124;&nbsp;\'small\'<br>&#124;&nbsp;string"}},"sortDirection":{"type":{"name":"enum","description":"\'asc\'<br>&#124;&nbsp;\'desc\'<br>&#124;&nbsp;false"}},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"},"additionalInfo":{"sx":true}},"variant":{"type":{"name":"union","description":"\'body\'<br>&#124;&nbsp;\'footer\'<br>&#124;&nbsp;\'head\'<br>&#124;&nbsp;string"}}},"name":"TableCell","imports":["import TableCell from \'@mui/material/TableCell\';","import { TableCell } from \'@mui/material\';"],"classes":[{"key":"alignCenter","className":"MuiTableCell-alignCenter","description":"Styles applied to the root element if `align=\\"center\\"`.","isGlobal":false},{"key":"alignJustify","className":"MuiTableCell-alignJustify","description":"Styles applied to the root element if `align=\\"justify\\"`.","isGlobal":false},{"key":"alignLeft","className":"MuiTableCell-alignLeft","description":"Styles applied to the root element if `align=\\"left\\"`.","isGlobal":false},{"key":"alignRight","className":"MuiTableCell-alignRight","description":"Styles applied to the root element if `align=\\"right\\"`.","isGlobal":false},{"key":"body","className":"MuiTableCell-body","description":"Styles applied to the root element if `variant=\\"body\\"` or `context.table.body`.","isGlobal":false},{"key":"footer","className":"MuiTableCell-footer","description":"Styles applied to the root element if `variant=\\"footer\\"` or `context.table.footer`.","isGlobal":false},{"key":"head","className":"MuiTableCell-head","description":"Styles applied to the root element if `variant=\\"head\\"` or `context.table.head`.","isGlobal":false},{"key":"paddingCheckbox","className":"MuiTableCell-paddingCheckbox","description":"Styles applied to the root element if `padding=\\"checkbox\\"`.","isGlobal":false},{"key":"paddingNone","className":"MuiTableCell-paddingNone","description":"Styles applied to the root element if `padding=\\"none\\"`.","isGlobal":false},{"key":"root","className":"MuiTableCell-root","description":"Styles applied to the root element.","isGlobal":false},{"key":"sizeMedium","className":"MuiTableCell-sizeMedium","description":"Styles applied to the root element if `size=\\"medium\\"`.","isGlobal":false},{"key":"sizeSmall","className":"MuiTableCell-sizeSmall","description":"Styles applied to the root element if `size=\\"small\\"`.","isGlobal":false},{"key":"stickyHeader","className":"MuiTableCell-stickyHeader","description":"Styles applied to the root element if `context.table.stickyHeader={true}`.","isGlobal":false}],"spread":true,"themeDefaultProps":true,"muiName":"MuiTableCell","forwardsRefTo":"HTMLTableCellElement","filename":"/packages/mui-material/src/TableCell/TableCell.js","inheritance":null,"demos":"<ul><li><a href=\\"/material-ui/react-table/\\">Table</a></li></ul>","cssComponent":false}'),r=n(735250);function s(e){var t=e.descriptions,n=e.pageContent;return(0,r.jsx)(o.Z,{descriptions:t,pageContent:n})}s.getInitialProps=function(){var e=n(316434);return{descriptions:(0,i.Z)(e),pageContent:a}}},412007:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var o=n(705794),i=n(187509),a=/-([a-z]{2})\.json$/;function r(e){var t={},n={},r=[];return e.keys().forEach(function(e){e.match(a)?r.push(e):r=[e].concat(r)}),r.forEach(function(s){var c=s.match(a),l=null!==c?c[1]:"en",u=e(s)||null;if(null!==u&&u.componentDescription){var d=[],p=(0,o.createRender)({headingHashes:t,toc:d,userLanguage:l,location:r,options:{ignoreLanguagePages:i.LANGUAGES_IGNORE_PAGES,env:{SOURCE_CODE_REPO:""}}});u.componentDescription=p(u.componentDescription),u.componentDescriptionToc=d}n[l]=u}),n}},202154:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/api/table-cell",function(){return n(466620)}])},316434:function(e,t,n){var o={"./table-cell.json":577082};function i(e){return n(a(e))}function a(e){if(!n.o(o,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=a,e.exports=i,i.id=316434},36790:function(e,t,n){"use strict";function o(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return o}})},376757:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var o=n(136729),i=n(267765),a=n(861963);function r(e){return(r=i?a.bind():function(e){return e.__proto__||a(e)})(e)}function s(){try{var e=!Boolean.prototype.valueOf.call(o(Boolean,[],function(){}))}catch(e){}return(s=function(){return!!e})()}var c=n(931467),l=n(36790);function u(e){var t=s();return function(){var n,i=r(e);if(t){var a=r(this).constructor;n=o(i,arguments,a)}else n=i.apply(this,arguments);return function(e,t){if(t&&("object"==(0,c.Z)(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return(0,l.Z)(e)}(this,n)}}},206782:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var o=n(17800),i=n(303268),a=n(909101);function r(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=o(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i(e,"prototype",{writable:!1}),t&&(0,a.Z)(e,t)}},909101:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(267765);function i(e,t){return(i=o?o.bind():function(e,t){return e.__proto__=t,e})(e,t)}},577082:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"The component renders a `<th>` element when the parent context is a header\\nor otherwise a `<td>` element.","propDescriptions":{"align":{"description":"Set the text-align on the table cell content.<br>Monetary or generally number fields <strong>should be right aligned</strong> as that allows you to add them up quickly in your head without having to worry about decimals."},"children":{"description":"The content of the component."},"classes":{"description":"Override or extend the styles applied to the component."},"component":{"description":"The component used for the root node. Either a string to use a HTML element or a component."},"padding":{"description":"Sets the padding applied to the cell. The prop defaults to the value (<code>&#39;default&#39;</code>) inherited from the parent Table component."},"scope":{"description":"Set scope attribute."},"size":{"description":"Specify the size of the cell. The prop defaults to the value (<code>&#39;medium&#39;</code>) inherited from the parent Table component."},"sortDirection":{"description":"Set aria-sort direction."},"sx":{"description":"The system prop that allows defining system overrides as well as additional CSS styles."},"variant":{"description":"Specify the cell type. The prop defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components."}},"classDescriptions":{"alignCenter":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>align=\\"center\\"</code>"},"alignJustify":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>align=\\"justify\\"</code>"},"alignLeft":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>align=\\"left\\"</code>"},"alignRight":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>align=\\"right\\"</code>"},"body":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"body\\"</code> or <code>context.table.body</code>"},"footer":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"footer\\"</code> or <code>context.table.footer</code>"},"head":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"head\\"</code> or <code>context.table.head</code>"},"paddingCheckbox":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>padding=\\"checkbox\\"</code>"},"paddingNone":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>padding=\\"none\\"</code>"},"root":{"description":"Styles applied to the root element."},"sizeMedium":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>size=\\"medium\\"</code>"},"sizeSmall":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>size=\\"small\\"</code>"},"stickyHeader":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>context.table.stickyHeader={true}</code>"}}}')}},function(e){e.O(0,[49774,9535,73976,97146,59727,85925,17376,17103,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,42378,20759,12589,92888,40179],function(){return e(e.s=202154)}),_N_E=e.O()}]);