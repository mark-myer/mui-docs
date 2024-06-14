(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[96271],{696689:function(e,t,o){var n=o(371017)(function(e,t,o){return e+(o?"-":"")+t.toLowerCase()});e.exports=n},705794:function(e,t,o){var n=o(117431),a=n.createRender,r=n.getHeaders,i=n.getTitle,s=n.renderMarkdown;e.exports={createRender:a,getHeaders:r,getTitle:i,renderMarkdown:s}},117431:function(e,t,o){var n=o(582103).default,a=o(436578),r=o(113065).default,i=o(95018).default,s=o(315599).marked,c=o(891271),l=o(520740),u={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,headerPrefix:!1,headerIds:!1,mangle:!1},d=/---[\r\n]([\s\S]*)[\r\n]---/,p=/# (.*)[\r\n]/,m=/<p class="description">([\s\S]*?)<\/p>/,f=/(.*?):[\r\n]?\s+(\[[^\]]+\]|.*)/g,h=/^\s*$/,F=/[&<>"']/,g=/[&<>"']/g,b=/[<>"']|&(?!#?\w+;)/,v=/[<>"']|&(?!#?\w+;)/g,D={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},C=function(e){return D[e]};function y(e,t){if(t){if(F.test(e))return e.replace(g,C)}else if(b.test(e))return e.replace(v,C);return e}var x=["https://m2.material.io/","https://m3.material.io/","https://material.io/","https://getbootstrap.com/","https://icons.getbootstrap.com/","https://pictogrammers.com/","https://www.w3.org/","https://tailwindcss.com/","https://heroicons.com/","https://react-icons.github.io/","https://fontawesome.com/","https://www.radix-ui.com/","https://react-spectrum.adobe.com/","https://headlessui.com/","https://refine.dev/","https://scaffoldhub.io/","https://marmelab.com/"];e.exports={createRender:function(e){var t=e.headingHashes,o=e.toc,r=e.userLanguage,i=e.options,d={},p=-1;return function(m){var f=new s.Renderer;return f.heading=function(e,n){if(1===n||n>=4)return"<h".concat(n,">").concat(e,"</h").concat(n,">");var i,s=e.replace(/<a\b[^>]*>/gi,"").replace(/<\/a>/gi,"");s=s.replace(/<code\b[^>]*>/gi,"").replace(/<\/code>/gi,""),"en"===r?i=c(s,t):(p+=1,(i=a(t)[p])||(i=c(s,d)));var l=s.replace(/([^\s]\()/g,"$1&#8203;");if(2===n)o.push({text:l,level:n,hash:i,children:[]});else if(3===n){if(!o[o.length-1])throw Error("docs-infra: Missing parent level for: ".concat(s,"\n"));o[o.length-1].children.push({text:l,level:n,hash:i})}return["<h".concat(n,' id="').concat(i,'"><a href="#').concat(i,'" class="title-link-to-anchor">').concat(e,'<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a>'),'<button title="Post a comment" class="comment-link" data-feedback-hash="'.concat(i,'">'),'<svg><use xlink:href="#comment-link-icon" /></svg>',"</button>","</h".concat(n,">")].join("")},f.link=function(t,o,n){var a="";o&&(a+=' title="'.concat(o,'"')),x.some(function(e){return -1!==t.indexOf(e)})&&(a=' target="_blank" rel="noopener nofollow"');var s=t;return function(e,t,o){var n=new URL(e,"https://mui.com/");if(/\/{2,}$/.test(n.pathname))throw Error(["docs-infra: Duplicated trailing slashes. The following link:","[".concat(t,"](").concat(e,") in ").concat(o.location," has duplicated trailing slashes, please only add one."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("mui.com"===n.host){if("/"!==n.pathname[n.pathname.length-1])throw Error(["docs-infra: Missing trailing slash. The following link:","[".concat(t,"](").concat(e,") in ").concat(o.location," is missing a trailing slash, please add it."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("#"!==e[0]&&!(e.startsWith("https://")||e.startsWith("http://"))&&"/"!==e[0])throw Error(["docs-infra: Missing leading slash. The following link:","[".concat(t,"](").concat(e,") in ").concat(o.location," is missing a leading slash, please add it."),""].join("\n"))}}(t,n,e),"en"===r||0!==t.indexOf("/")||i.ignoreLanguagePages(t)||(s="/".concat(r).concat(t)),s.startsWith("".concat(i.env.SOURCE_CODE_REPO,"/blob/-/"))&&(s=s.replace("".concat(i.env.SOURCE_CODE_REPO,"/blob/-/"),"".concat(i.env.SOURCE_CODE_REPO,"/blob/v").concat(i.env.LIB_VERSION,"/"))),'<a href="'.concat(s,'"').concat(a,">").concat(n,"</a>")},f.code=function(e,t,o){var n,a=(t||"").match(/\S*/)[0],r=null===(n=(t||"").match(/title="([^"]*)"/))||void 0===n?void 0:n[1],i=l(e,a);return(null!=i&&i!==e&&(o=!0,e=i),e="".concat(e.replace(/\n$/,""),"\n"),a)?'<div class="MuiCode-root">'.concat(r?'<div class="MuiCode-title">'.concat(r,"</div>"):"",'<pre><code class="language-').concat(y(a,!0),'">').concat(o?e:y(e,!0),"</code></pre>").concat('<button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>',"\n"):"<pre><code>".concat(o?e:y(e,!0),"</code></pre>\n")},s.use({extensions:[{name:"callout",level:"block",start:function(e){var t=e.match(/:::/);return t?t.index:void 0},tokenizer:function(e){var t=/^ {0,3}(:{3,}(?=[^:\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~:]* *(?=\n|$)|$)/.exec(e);if(t){var o={type:"callout",raw:t[0],text:t[3].trim(),severity:t[2],tokens:[]};return this.lexer.blockTokens(o.text,o.tokens),o}},renderer:function(e){return'<aside class="MuiCallout-root MuiCallout-'.concat(e.severity,'">\n            ').concat(["info","success","warning","error"].includes(e.severity)?['<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">','<use class="MuiCode-copied-icon" xlink:href="#'.concat(e.severity,'-icon" />'),"</svg>"].join("\n"):"",'\n            <div class="MuiCallout-content">\n            ').concat(this.parser.parse(e.tokens),"\n</div></aside>")}}]}),s(m,n(n({},u),{},{renderer:f}))}},getContents:function(e){return e.replace(d,"").split(/^{{("(?:demo|component)":.*)}}$/gm).flatMap(function(e){return e.split(/^(<codeblock(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/codeblock>)$/gm)}).flatMap(function(e){return e.split(/^(<featureList(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/featureList>)$/gm)}).filter(function(e){return!h.test(e)})},getDescription:function(e){var t=e.match(m);if(null!==t)return t[1].trim().replace(/`/g,"")},getCodeblock:function(e){if(e.startsWith("<codeblock")){var t,o=null===(t=e.match(/^<codeblock [^>]*storageKey=["|'](\S*)["|'].*>/m))||void 0===t?void 0:t[1];return{type:"codeblock",data:i(e.matchAll(/^```((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*) ((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)\n((?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\n```/gm)).map(function(e){var t=r(e,4);return{language:t[1],tab:t[2],code:t[3]}}).filter(function(e){return void 0!==e.tab&&!h.test(e.code)}),storageKey:o}}},getFeatureList:function(e){if(e.startsWith("<featureList"))return['<ul class="feature-list">'].concat(i(e.split("\n").filter(function(e){return e.startsWith("- ")}).map(function(e){return e.slice(2)}).map(function(e){return"<li>".concat(e,"</li>")})),["</ul>"]).join("")},getHeaders:function(e){var t=e.match(d);if(!t)return{components:[]};t=t[1];try{for(var o,n={};null!==(o=f.exec(t));){var a=o[1],r=o[2].replace(/(.*)/,"$1");"["===r[0]?(r=(r=r.replace(/'/g,'"')).replace(/,\s+\]$/g,"]"),n[a]=JSON.parse(r)):n[a]=r.replace(/^'|'$/g,"")}return n.components?n.components=n.components.split(",").map(function(e){return e.trim()}).sort():n.components=[],n.hooks?n.hooks=n.hooks.split(",").map(function(e){return e.trim()}).sort():n.hooks=[],n}catch(e){throw Error("docs-infra: ".concat(e.message," in getHeader(markdown) with markdown: \n\n").concat(t,"\n"))}},getTitle:function(e){var t=e.match(p);return null===t?"":t[1].replace(/`/g,"")},renderMarkdown:function(e){return/[-*+] `([A-Za-z]+)`/g.test(e)?s.parse(e,u):s.parseInline(e,u).replace(/(\r?\n){2}/g,"<br>").replace(/\r?\n/g," ")}}},891271:function(e){e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function e(t,o){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=1===n?t:"".concat(t,"-").concat(n);return o[a]?e(t,o,n+1):(o[a]=!0,a)}(encodeURI(e.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g,"").replace(/[!@#$%^&*()=_+[\]{}`~;:'"|,.<>/?\s]+/g,"-").replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])\uFE0F?/g,"").replace(/-+/g,"-").replace(/^-|-$/g,"")),t)}},739399:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return s}}),o(470079);var n=o(512589),a=o(412007),r=JSON.parse('{"props":{"color":{"type":{"name":"union","description":"\'danger\'<br>&#124;&nbsp;\'neutral\'<br>&#124;&nbsp;\'primary\'<br>&#124;&nbsp;\'success\'<br>&#124;&nbsp;\'warning\'<br>&#124;&nbsp;string"},"default":"\'neutral\'","additionalInfo":{"joy-color":true}},"endDecorator":{"type":{"name":"node"}},"error":{"type":{"name":"bool"},"default":"false"},"maxRows":{"type":{"name":"union","description":"number<br>&#124;&nbsp;string"}},"minRows":{"type":{"name":"union","description":"number<br>&#124;&nbsp;string"},"default":"1"},"size":{"type":{"name":"union","description":"\'sm\'<br>&#124;&nbsp;\'md\'<br>&#124;&nbsp;\'lg\'<br>&#124;&nbsp;string"},"default":"\'md\'","additionalInfo":{"joy-size":true}},"startDecorator":{"type":{"name":"node"}},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"},"additionalInfo":{"sx":true}},"variant":{"type":{"name":"union","description":"\'outlined\'<br>&#124;&nbsp;\'plain\'<br>&#124;&nbsp;\'soft\'<br>&#124;&nbsp;\'solid\'<br>&#124;&nbsp;string"},"default":"\'outlined\'","additionalInfo":{"joy-variant":true}}},"name":"Textarea","imports":["import Textarea from \'@mui/joy/Textarea\';","import { Textarea } from \'@mui/joy\';"],"slots":[{"name":"root","description":"The component that renders the root.","default":"\'div\'","class":"MuiTextarea-root"},{"name":"textarea","description":"The component that renders the textarea.","default":"\'textarea\'","class":"MuiTextarea-textarea"},{"name":"startDecorator","description":"The component that renders the start decorator.","default":"\'div\'","class":"MuiTextarea-startDecorator"},{"name":"endDecorator","description":"The component that renders the end decorator.","default":"\'div\'","class":"MuiTextarea-endDecorator"}],"classes":[{"key":"colorContext","className":"MuiTextarea-colorContext","description":"Class name applied to the root element when color inversion is triggered.","isGlobal":false},{"key":"colorDanger","className":"MuiTextarea-colorDanger","description":"Class name applied to the root element if `color=\\"danger\\"`.","isGlobal":false},{"key":"colorNeutral","className":"MuiTextarea-colorNeutral","description":"Class name applied to the root element if `color=\\"neutral\\"`.","isGlobal":false},{"key":"colorPrimary","className":"MuiTextarea-colorPrimary","description":"Class name applied to the root element if `color=\\"primary\\"`.","isGlobal":false},{"key":"colorSuccess","className":"MuiTextarea-colorSuccess","description":"Class name applied to the root element if `color=\\"success\\"`.","isGlobal":false},{"key":"colorWarning","className":"MuiTextarea-colorWarning","description":"Class name applied to the root element if `color=\\"warning\\"`.","isGlobal":false},{"key":"disabled","className":"Mui-disabled","description":"Class name applied to the root element if `disabled={true}`.","isGlobal":true},{"key":"error","className":"Mui-error","description":"State class applied to the root element if `error={true}`.","isGlobal":true},{"key":"focused","className":"Mui-focused","description":"Class name applied to the root element if the component is focused.","isGlobal":true},{"key":"formControl","className":"MuiTextarea-formControl","description":"Class name applied to the root element if the component is a descendant of `FormControl`.","isGlobal":false},{"key":"sizeLg","className":"MuiTextarea-sizeLg","description":"Class name applied to the root element if `size=\\"lg\\"`.","isGlobal":false},{"key":"sizeMd","className":"MuiTextarea-sizeMd","description":"Class name applied to the root element if `size=\\"md\\"`.","isGlobal":false},{"key":"sizeSm","className":"MuiTextarea-sizeSm","description":"Class name applied to the root element if `size=\\"sm\\"`.","isGlobal":false},{"key":"variantOutlined","className":"MuiTextarea-variantOutlined","description":"Class name applied to the root element if `variant=\\"outlined\\"`.","isGlobal":false},{"key":"variantPlain","className":"MuiTextarea-variantPlain","description":"Class name applied to the root element if `variant=\\"plain\\"`.","isGlobal":false},{"key":"variantSoft","className":"MuiTextarea-variantSoft","description":"Class name applied to the root element if `variant=\\"soft\\"`.","isGlobal":false}],"spread":false,"themeDefaultProps":true,"muiName":"JoyTextarea","forwardsRefTo":"HTMLDivElement","filename":"/packages/mui-joy/src/Textarea/Textarea.tsx","inheritance":null,"demos":"<ul><li><a href=\\"/joy-ui/react-textarea/\\">Textarea</a></li></ul>","cssComponent":false}'),i=o(735250);function s(e){var t=e.descriptions,o=e.pageContent;return(0,i.jsx)(n.Z,{descriptions:t,pageContent:o})}s.getInitialProps=function(){var e=o(752069);return{descriptions:(0,a.Z)(e),pageContent:r}}},412007:function(e,t,o){"use strict";o.d(t,{Z:function(){return i}});var n=o(705794),a=o(187509),r=/-([a-z]{2})\.json$/;function i(e){var t={},o={},i=[];return e.keys().forEach(function(e){e.match(r)?i.push(e):i=[e].concat(i)}),i.forEach(function(s){var c=s.match(r),l=null!==c?c[1]:"en",u=e(s)||null;if(null!==u&&u.componentDescription){var d=[],p=(0,n.createRender)({headingHashes:t,toc:d,userLanguage:l,location:i,options:{ignoreLanguagePages:a.LANGUAGES_IGNORE_PAGES,env:{SOURCE_CODE_REPO:""}}});u.componentDescription=p(u.componentDescription),u.componentDescriptionToc=d}o[l]=u}),o}},265018:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/joy-ui/api/textarea",function(){return o(739399)}])},752069:function(e,t,o){var n={"./textarea.json":300528};function a(e){return o(r(e))}function r(e){if(!o.o(n,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id=752069},36790:function(e,t,o){"use strict";function n(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}o.d(t,{Z:function(){return n}})},376757:function(e,t,o){"use strict";o.d(t,{Z:function(){return u}});var n=o(136729),a=o(267765),r=o(861963);function i(e){return(i=a?r.bind():function(e){return e.__proto__||r(e)})(e)}function s(){try{var e=!Boolean.prototype.valueOf.call(n(Boolean,[],function(){}))}catch(e){}return(s=function(){return!!e})()}var c=o(931467),l=o(36790);function u(e){var t=s();return function(){var o,a=i(e);if(t){var r=i(this).constructor;o=n(a,arguments,r)}else o=a.apply(this,arguments);return function(e,t){if(t&&("object"==(0,c.Z)(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return(0,l.Z)(e)}(this,o)}}},206782:function(e,t,o){"use strict";o.d(t,{Z:function(){return i}});var n=o(17800),a=o(303268),r=o(909101);function i(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=n(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a(e,"prototype",{writable:!1}),t&&(0,r.Z)(e,t)}},909101:function(e,t,o){"use strict";o.d(t,{Z:function(){return a}});var n=o(267765);function a(e,t){return(a=n?n.bind():function(e,t){return e.__proto__=t,e})(e,t)}},300528:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"color":{"description":"The color of the component. It supports those theme colors that make sense for this component."},"endDecorator":{"description":"Trailing adornment for this input."},"error":{"description":"If <code>true</code>, the <code>input</code> will indicate an error. The prop defaults to the value (<code>false</code>) inherited from the parent FormControl component."},"maxRows":{"description":"Maximum number of rows to display."},"minRows":{"description":"Minimum number of rows to display."},"size":{"description":"The size of the component."},"startDecorator":{"description":"Leading adornment for this input."},"sx":{"description":"The system prop that allows defining system overrides as well as additional CSS styles."},"variant":{"description":"The <a href=\\"https://mui.com/joy-ui/main-features/global-variants/\\">global variant</a> to use."}},"classDescriptions":{"colorContext":{"description":"Class name applied to {{nodeName}} when {{conditions}}.","nodeName":"the root element","conditions":"color inversion is triggered"},"colorDanger":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"danger\\"</code>"},"colorNeutral":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"neutral\\"</code>"},"colorPrimary":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"primary\\"</code>"},"colorSuccess":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"success\\"</code>"},"colorWarning":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"warning\\"</code>"},"disabled":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>disabled={true}</code>"},"error":{"description":"State class applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>error={true}</code>"},"focused":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"the component is focused"},"formControl":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"the component is a descendant of <code>FormControl</code>"},"sizeLg":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>size=\\"lg\\"</code>"},"sizeMd":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>size=\\"md\\"</code>"},"sizeSm":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>size=\\"sm\\"</code>"},"variantOutlined":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"outlined\\"</code>"},"variantPlain":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"plain\\"</code>"},"variantSoft":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"soft\\"</code>"}},"slotDescriptions":{"endDecorator":"The component that renders the end decorator.","root":"The component that renders the root.","startDecorator":"The component that renders the start decorator.","textarea":"The component that renders the textarea."}}')}},function(e){e.O(0,[49774,9535,73976,97146,59727,85925,17376,17103,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,42378,20759,12589,92888,40179],function(){return e(e.s=265018)}),_N_E=e.O()}]);