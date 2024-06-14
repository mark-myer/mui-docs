(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[52141],{696689:function(e,t,i){var n=i(371017)(function(e,t,i){return e+(i?"-":"")+t.toLowerCase()});e.exports=n},705794:function(e,t,i){var n=i(117431),o=n.createRender,r=n.getHeaders,a=n.getTitle,s=n.renderMarkdown;e.exports={createRender:o,getHeaders:r,getTitle:a,renderMarkdown:s}},117431:function(e,t,i){var n=i(582103).default,o=i(436578),r=i(113065).default,a=i(95018).default,s=i(315599).marked,c=i(891271),l=i(520740),u={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,headerPrefix:!1,headerIds:!1,mangle:!1},d=/---[\r\n]([\s\S]*)[\r\n]---/,p=/# (.*)[\r\n]/,f=/<p class="description">([\s\S]*?)<\/p>/,h=/(.*?):[\r\n]?\s+(\[[^\]]+\]|.*)/g,m=/^\s*$/,v=/[&<>"']/,g=/[&<>"']/g,F=/[<>"']|&(?!#?\w+;)/,D=/[<>"']|&(?!#?\w+;)/g,b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},y=function(e){return b[e]};function x(e,t){if(t){if(v.test(e))return e.replace(g,y)}else if(F.test(e))return e.replace(D,y);return e}var w=["https://m2.material.io/","https://m3.material.io/","https://material.io/","https://getbootstrap.com/","https://icons.getbootstrap.com/","https://pictogrammers.com/","https://www.w3.org/","https://tailwindcss.com/","https://heroicons.com/","https://react-icons.github.io/","https://fontawesome.com/","https://www.radix-ui.com/","https://react-spectrum.adobe.com/","https://headlessui.com/","https://refine.dev/","https://scaffoldhub.io/","https://marmelab.com/"];e.exports={createRender:function(e){var t=e.headingHashes,i=e.toc,r=e.userLanguage,a=e.options,d={},p=-1;return function(f){var h=new s.Renderer;return h.heading=function(e,n){if(1===n||n>=4)return"<h".concat(n,">").concat(e,"</h").concat(n,">");var a,s=e.replace(/<a\b[^>]*>/gi,"").replace(/<\/a>/gi,"");s=s.replace(/<code\b[^>]*>/gi,"").replace(/<\/code>/gi,""),"en"===r?a=c(s,t):(p+=1,(a=o(t)[p])||(a=c(s,d)));var l=s.replace(/([^\s]\()/g,"$1&#8203;");if(2===n)i.push({text:l,level:n,hash:a,children:[]});else if(3===n){if(!i[i.length-1])throw Error("docs-infra: Missing parent level for: ".concat(s,"\n"));i[i.length-1].children.push({text:l,level:n,hash:a})}return["<h".concat(n,' id="').concat(a,'"><a href="#').concat(a,'" class="title-link-to-anchor">').concat(e,'<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a>'),'<button title="Post a comment" class="comment-link" data-feedback-hash="'.concat(a,'">'),'<svg><use xlink:href="#comment-link-icon" /></svg>',"</button>","</h".concat(n,">")].join("")},h.link=function(t,i,n){var o="";i&&(o+=' title="'.concat(i,'"')),w.some(function(e){return -1!==t.indexOf(e)})&&(o=' target="_blank" rel="noopener nofollow"');var s=t;return function(e,t,i){var n=new URL(e,"https://mui.com/");if(/\/{2,}$/.test(n.pathname))throw Error(["docs-infra: Duplicated trailing slashes. The following link:","[".concat(t,"](").concat(e,") in ").concat(i.location," has duplicated trailing slashes, please only add one."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("mui.com"===n.host){if("/"!==n.pathname[n.pathname.length-1])throw Error(["docs-infra: Missing trailing slash. The following link:","[".concat(t,"](").concat(e,") in ").concat(i.location," is missing a trailing slash, please add it."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("#"!==e[0]&&!(e.startsWith("https://")||e.startsWith("http://"))&&"/"!==e[0])throw Error(["docs-infra: Missing leading slash. The following link:","[".concat(t,"](").concat(e,") in ").concat(i.location," is missing a leading slash, please add it."),""].join("\n"))}}(t,n,e),"en"===r||0!==t.indexOf("/")||a.ignoreLanguagePages(t)||(s="/".concat(r).concat(t)),s.startsWith("".concat(a.env.SOURCE_CODE_REPO,"/blob/-/"))&&(s=s.replace("".concat(a.env.SOURCE_CODE_REPO,"/blob/-/"),"".concat(a.env.SOURCE_CODE_REPO,"/blob/v").concat(a.env.LIB_VERSION,"/"))),'<a href="'.concat(s,'"').concat(o,">").concat(n,"</a>")},h.code=function(e,t,i){var n,o=(t||"").match(/\S*/)[0],r=null===(n=(t||"").match(/title="([^"]*)"/))||void 0===n?void 0:n[1],a=l(e,o);return(null!=a&&a!==e&&(i=!0,e=a),e="".concat(e.replace(/\n$/,""),"\n"),o)?'<div class="MuiCode-root">'.concat(r?'<div class="MuiCode-title">'.concat(r,"</div>"):"",'<pre><code class="language-').concat(x(o,!0),'">').concat(i?e:x(e,!0),"</code></pre>").concat('<button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>',"\n"):"<pre><code>".concat(i?e:x(e,!0),"</code></pre>\n")},s.use({extensions:[{name:"callout",level:"block",start:function(e){var t=e.match(/:::/);return t?t.index:void 0},tokenizer:function(e){var t=/^ {0,3}(:{3,}(?=[^:\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~:]* *(?=\n|$)|$)/.exec(e);if(t){var i={type:"callout",raw:t[0],text:t[3].trim(),severity:t[2],tokens:[]};return this.lexer.blockTokens(i.text,i.tokens),i}},renderer:function(e){return'<aside class="MuiCallout-root MuiCallout-'.concat(e.severity,'">\n            ').concat(["info","success","warning","error"].includes(e.severity)?['<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">','<use class="MuiCode-copied-icon" xlink:href="#'.concat(e.severity,'-icon" />'),"</svg>"].join("\n"):"",'\n            <div class="MuiCallout-content">\n            ').concat(this.parser.parse(e.tokens),"\n</div></aside>")}}]}),s(f,n(n({},u),{},{renderer:h}))}},getContents:function(e){return e.replace(d,"").split(/^{{("(?:demo|component)":.*)}}$/gm).flatMap(function(e){return e.split(/^(<codeblock(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/codeblock>)$/gm)}).flatMap(function(e){return e.split(/^(<featureList(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/featureList>)$/gm)}).filter(function(e){return!m.test(e)})},getDescription:function(e){var t=e.match(f);if(null!==t)return t[1].trim().replace(/`/g,"")},getCodeblock:function(e){if(e.startsWith("<codeblock")){var t,i=null===(t=e.match(/^<codeblock [^>]*storageKey=["|'](\S*)["|'].*>/m))||void 0===t?void 0:t[1];return{type:"codeblock",data:a(e.matchAll(/^```((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*) ((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)\n((?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\n```/gm)).map(function(e){var t=r(e,4);return{language:t[1],tab:t[2],code:t[3]}}).filter(function(e){return void 0!==e.tab&&!m.test(e.code)}),storageKey:i}}},getFeatureList:function(e){if(e.startsWith("<featureList"))return['<ul class="feature-list">'].concat(a(e.split("\n").filter(function(e){return e.startsWith("- ")}).map(function(e){return e.slice(2)}).map(function(e){return"<li>".concat(e,"</li>")})),["</ul>"]).join("")},getHeaders:function(e){var t=e.match(d);if(!t)return{components:[]};t=t[1];try{for(var i,n={};null!==(i=h.exec(t));){var o=i[1],r=i[2].replace(/(.*)/,"$1");"["===r[0]?(r=(r=r.replace(/'/g,'"')).replace(/,\s+\]$/g,"]"),n[o]=JSON.parse(r)):n[o]=r.replace(/^'|'$/g,"")}return n.components?n.components=n.components.split(",").map(function(e){return e.trim()}).sort():n.components=[],n.hooks?n.hooks=n.hooks.split(",").map(function(e){return e.trim()}).sort():n.hooks=[],n}catch(e){throw Error("docs-infra: ".concat(e.message," in getHeader(markdown) with markdown: \n\n").concat(t,"\n"))}},getTitle:function(e){var t=e.match(p);return null===t?"":t[1].replace(/`/g,"")},renderMarkdown:function(e){return/[-*+] `([A-Za-z]+)`/g.test(e)?s.parse(e,u):s.parseInline(e,u).replace(/(\r?\n){2}/g,"<br>").replace(/\r?\n/g," ")}}},891271:function(e){e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function e(t,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=1===n?t:"".concat(t,"-").concat(n);return i[o]?e(t,i,n+1):(i[o]=!0,o)}(encodeURI(e.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g,"").replace(/[!@#$%^&*()=_+[\]{}`~;:'"|,.<>/?\s]+/g,"-").replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])\uFE0F?/g,"").replace(/-+/g,"-").replace(/^-|-$/g,"")),t)}},992820:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return s}}),i(470079);var n=i(512589),o=i(412007),r=JSON.parse('{"props":{"absolute":{"type":{"name":"bool"},"default":"false"},"children":{"type":{"name":"node"}},"classes":{"type":{"name":"object"},"additionalInfo":{"cssApi":true}},"component":{"type":{"name":"elementType"}},"flexItem":{"type":{"name":"bool"},"default":"false"},"light":{"type":{"name":"bool"},"default":"false","deprecated":true,"deprecationInfo":"Use &lt;Divider sx={{ opacity: 0.6 }} /&gt; (or any opacity or color) instead. See <a href=\\"/material-ui/migration/migrating-from-deprecated-apis/\\">Migrating from deprecated APIs</a> for more details."},"orientation":{"type":{"name":"enum","description":"\'horizontal\'<br>&#124;&nbsp;\'vertical\'"},"default":"\'horizontal\'"},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"},"additionalInfo":{"sx":true}},"textAlign":{"type":{"name":"enum","description":"\'center\'<br>&#124;&nbsp;\'left\'<br>&#124;&nbsp;\'right\'"},"default":"\'center\'"},"variant":{"type":{"name":"union","description":"\'fullWidth\'<br>&#124;&nbsp;\'inset\'<br>&#124;&nbsp;\'middle\'<br>&#124;&nbsp;string"},"default":"\'fullWidth\'"}},"name":"Divider","imports":["import Divider from \'@mui/material/Divider\';","import { Divider } from \'@mui/material\';"],"classes":[{"key":"absolute","className":"MuiDivider-absolute","description":"Styles applied to the root element if `absolute={true}`.","isGlobal":false},{"key":"flexItem","className":"MuiDivider-flexItem","description":"Styles applied to the root element if `flexItem={true}`.","isGlobal":false},{"key":"fullWidth","className":"MuiDivider-fullWidth","description":"Styles applied to the root element if `variant=\\"fullWidth\\"`.","isGlobal":false},{"key":"inset","className":"MuiDivider-inset","description":"Styles applied to the root element if `variant=\\"inset\\"`.","isGlobal":false},{"key":"light","className":"MuiDivider-light","description":"Styles applied to the root element if `light={true}`.","isGlobal":false,"isDeprecated":true},{"key":"middle","className":"MuiDivider-middle","description":"Styles applied to the root element if `variant=\\"middle\\"`.","isGlobal":false},{"key":"root","className":"MuiDivider-root","description":"Styles applied to the root element.","isGlobal":false},{"key":"textAlignLeft","className":"MuiDivider-textAlignLeft","description":"Styles applied to the root element if `textAlign=\\"left\\" orientation=\\"horizontal\\"`.","isGlobal":false},{"key":"textAlignRight","className":"MuiDivider-textAlignRight","description":"Styles applied to the root element if `textAlign=\\"right\\" orientation=\\"horizontal\\"`.","isGlobal":false},{"key":"vertical","className":"MuiDivider-vertical","description":"Styles applied to the root element if `orientation=\\"vertical\\"`.","isGlobal":false},{"key":"withChildren","className":"MuiDivider-withChildren","description":"Styles applied to the root element if divider have text.","isGlobal":false},{"key":"withChildrenVertical","className":"MuiDivider-withChildrenVertical","description":"Styles applied to the root element if divider have text and `orientation=\\"vertical\\"`.","isGlobal":false,"isDeprecated":true},{"key":"wrapper","className":"MuiDivider-wrapper","description":"Styles applied to the span children element if `orientation=\\"horizontal\\"`.","isGlobal":false},{"key":"wrapperVertical","className":"MuiDivider-wrapperVertical","description":"Styles applied to the span children element if `orientation=\\"vertical\\"`.","isGlobal":false}],"spread":true,"themeDefaultProps":true,"muiName":"MuiDivider","forwardsRefTo":"HTMLHRElement","filename":"/packages/mui-material/src/Divider/Divider.js","inheritance":null,"demos":"<ul><li><a href=\\"/material-ui/react-divider/\\">Divider</a></li>\\n<li><a href=\\"/material-ui/react-list/\\">Lists</a></li></ul>","cssComponent":false}'),a=i(735250);function s(e){var t=e.descriptions,i=e.pageContent;return(0,a.jsx)(n.Z,{descriptions:t,pageContent:i})}s.getInitialProps=function(){var e=i(309284);return{descriptions:(0,o.Z)(e),pageContent:r}}},412007:function(e,t,i){"use strict";i.d(t,{Z:function(){return a}});var n=i(705794),o=i(187509),r=/-([a-z]{2})\.json$/;function a(e){var t={},i={},a=[];return e.keys().forEach(function(e){e.match(r)?a.push(e):a=[e].concat(a)}),a.forEach(function(s){var c=s.match(r),l=null!==c?c[1]:"en",u=e(s)||null;if(null!==u&&u.componentDescription){var d=[],p=(0,n.createRender)({headingHashes:t,toc:d,userLanguage:l,location:a,options:{ignoreLanguagePages:o.LANGUAGES_IGNORE_PAGES,env:{SOURCE_CODE_REPO:""}}});u.componentDescription=p(u.componentDescription),u.componentDescriptionToc=d}i[l]=u}),i}},5129:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/api/divider",function(){return i(992820)}])},309284:function(e,t,i){var n={"./divider.json":538908};function o(e){return i(r(e))}function r(e){if(!i.o(n,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=309284},36790:function(e,t,i){"use strict";function n(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}i.d(t,{Z:function(){return n}})},376757:function(e,t,i){"use strict";i.d(t,{Z:function(){return u}});var n=i(136729),o=i(267765),r=i(861963);function a(e){return(a=o?r.bind():function(e){return e.__proto__||r(e)})(e)}function s(){try{var e=!Boolean.prototype.valueOf.call(n(Boolean,[],function(){}))}catch(e){}return(s=function(){return!!e})()}var c=i(931467),l=i(36790);function u(e){var t=s();return function(){var i,o=a(e);if(t){var r=a(this).constructor;i=n(o,arguments,r)}else i=o.apply(this,arguments);return function(e,t){if(t&&("object"==(0,c.Z)(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return(0,l.Z)(e)}(this,i)}}},206782:function(e,t,i){"use strict";i.d(t,{Z:function(){return a}});var n=i(17800),o=i(303268),r=i(909101);function a(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=n(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),o(e,"prototype",{writable:!1}),t&&(0,r.Z)(e,t)}},909101:function(e,t,i){"use strict";i.d(t,{Z:function(){return o}});var n=i(267765);function o(e,t){return(o=n?n.bind():function(e,t){return e.__proto__=t,e})(e,t)}},538908:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"absolute":{"description":"Absolutely position the element."},"children":{"description":"The content of the component."},"classes":{"description":"Override or extend the styles applied to the component."},"component":{"description":"The component used for the root node. Either a string to use a HTML element or a component."},"flexItem":{"description":"If <code>true</code>, a vertical divider will have the correct height when used in flex container. (By default, a vertical divider will have a calculated height of <code>0px</code> if it is the child of a flex container.)"},"light":{"description":"If <code>true</code>, the divider will have a lighter color."},"orientation":{"description":"The component orientation."},"sx":{"description":"The system prop that allows defining system overrides as well as additional CSS styles."},"textAlign":{"description":"The text alignment."},"variant":{"description":"The variant to use."}},"classDescriptions":{"absolute":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>absolute={true}</code>"},"flexItem":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>flexItem={true}</code>"},"fullWidth":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"fullWidth\\"</code>"},"inset":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"inset\\"</code>"},"light":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>light={true}</code>"},"middle":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"middle\\"</code>"},"root":{"description":"Styles applied to the root element."},"textAlignLeft":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>textAlign=\\"left\\" orientation=\\"horizontal\\"</code>"},"textAlignRight":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>textAlign=\\"right\\" orientation=\\"horizontal\\"</code>"},"vertical":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>orientation=\\"vertical\\"</code>"},"withChildren":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"divider have text"},"withChildrenVertical":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"divider have text and <code>orientation=\\"vertical\\"</code>","deprecationInfo":"Combine the <a href=\\"/material-ui/api/divider/#divider-classes-withChildren\\">.MuiDivider-withChildren</a> and <a href=\\"/material-ui/api/divider/#divider-classes-vertical\\">.MuiDivider-vertical</a> classes instead."},"wrapper":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the span children element","conditions":"<code>orientation=\\"horizontal\\"</code>"},"wrapperVertical":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the span children element","conditions":"<code>orientation=\\"vertical\\"</code>"}}}')}},function(e){e.O(0,[49774,9535,73976,97146,59727,85925,17376,17103,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,42378,20759,12589,92888,40179],function(){return e(e.s=5129)}),_N_E=e.O()}]);