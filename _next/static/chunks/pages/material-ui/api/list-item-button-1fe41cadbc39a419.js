(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[35383],{696689:function(e,t,n){var o=n(371017)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=o},705794:function(e,t,n){var o=n(117431),i=o.createRender,s=o.getHeaders,a=o.getTitle,r=o.renderMarkdown;e.exports={createRender:i,getHeaders:s,getTitle:a,renderMarkdown:r}},117431:function(e,t,n){var o=n(582103).default,i=n(436578),s=n(113065).default,a=n(95018).default,r=n(315599).marked,c=n(891271),u=n(520740),l={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,headerPrefix:!1,headerIds:!1,mangle:!1},d=/---[\r\n]([\s\S]*)[\r\n]---/,p=/# (.*)[\r\n]/,f=/<p class="description">([\s\S]*?)<\/p>/,m=/(.*?):[\r\n]?\s+(\[[^\]]+\]|.*)/g,h=/^\s*$/,F=/[&<>"']/,g=/[&<>"']/g,b=/[<>"']|&(?!#?\w+;)/,v=/[<>"']|&(?!#?\w+;)/g,D={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},y=function(e){return D[e]};function C(e,t){if(t){if(F.test(e))return e.replace(g,y)}else if(b.test(e))return e.replace(v,y);return e}var k=["https://m2.material.io/","https://m3.material.io/","https://material.io/","https://getbootstrap.com/","https://icons.getbootstrap.com/","https://pictogrammers.com/","https://www.w3.org/","https://tailwindcss.com/","https://heroicons.com/","https://react-icons.github.io/","https://fontawesome.com/","https://www.radix-ui.com/","https://react-spectrum.adobe.com/","https://headlessui.com/","https://refine.dev/","https://scaffoldhub.io/","https://marmelab.com/"];e.exports={createRender:function(e){var t=e.headingHashes,n=e.toc,s=e.userLanguage,a=e.options,d={},p=-1;return function(f){var m=new r.Renderer;return m.heading=function(e,o){if(1===o||o>=4)return"<h".concat(o,">").concat(e,"</h").concat(o,">");var a,r=e.replace(/<a\b[^>]*>/gi,"").replace(/<\/a>/gi,"");r=r.replace(/<code\b[^>]*>/gi,"").replace(/<\/code>/gi,""),"en"===s?a=c(r,t):(p+=1,(a=i(t)[p])||(a=c(r,d)));var u=r.replace(/([^\s]\()/g,"$1&#8203;");if(2===o)n.push({text:u,level:o,hash:a,children:[]});else if(3===o){if(!n[n.length-1])throw Error("docs-infra: Missing parent level for: ".concat(r,"\n"));n[n.length-1].children.push({text:u,level:o,hash:a})}return["<h".concat(o,' id="').concat(a,'"><a href="#').concat(a,'" class="title-link-to-anchor">').concat(e,'<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a>'),'<button title="Post a comment" class="comment-link" data-feedback-hash="'.concat(a,'">'),'<svg><use xlink:href="#comment-link-icon" /></svg>',"</button>","</h".concat(o,">")].join("")},m.link=function(t,n,o){var i="";n&&(i+=' title="'.concat(n,'"')),k.some(function(e){return -1!==t.indexOf(e)})&&(i=' target="_blank" rel="noopener nofollow"');var r=t;return function(e,t,n){var o=new URL(e,"https://mui.com/");if(/\/{2,}$/.test(o.pathname))throw Error(["docs-infra: Duplicated trailing slashes. The following link:","[".concat(t,"](").concat(e,") in ").concat(n.location," has duplicated trailing slashes, please only add one."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("mui.com"===o.host){if("/"!==o.pathname[o.pathname.length-1])throw Error(["docs-infra: Missing trailing slash. The following link:","[".concat(t,"](").concat(e,") in ").concat(n.location," is missing a trailing slash, please add it."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("#"!==e[0]&&!(e.startsWith("https://")||e.startsWith("http://"))&&"/"!==e[0])throw Error(["docs-infra: Missing leading slash. The following link:","[".concat(t,"](").concat(e,") in ").concat(n.location," is missing a leading slash, please add it."),""].join("\n"))}}(t,o,e),"en"===s||0!==t.indexOf("/")||a.ignoreLanguagePages(t)||(r="/".concat(s).concat(t)),r.startsWith("".concat(a.env.SOURCE_CODE_REPO,"/blob/-/"))&&(r=r.replace("".concat(a.env.SOURCE_CODE_REPO,"/blob/-/"),"".concat(a.env.SOURCE_CODE_REPO,"/blob/v").concat(a.env.LIB_VERSION,"/"))),'<a href="'.concat(r,'"').concat(i,">").concat(o,"</a>")},m.code=function(e,t,n){var o,i=(t||"").match(/\S*/)[0],s=null===(o=(t||"").match(/title="([^"]*)"/))||void 0===o?void 0:o[1],a=u(e,i);return(null!=a&&a!==e&&(n=!0,e=a),e="".concat(e.replace(/\n$/,""),"\n"),i)?'<div class="MuiCode-root">'.concat(s?'<div class="MuiCode-title">'.concat(s,"</div>"):"",'<pre><code class="language-').concat(C(i,!0),'">').concat(n?e:C(e,!0),"</code></pre>").concat('<button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>',"\n"):"<pre><code>".concat(n?e:C(e,!0),"</code></pre>\n")},r.use({extensions:[{name:"callout",level:"block",start:function(e){var t=e.match(/:::/);return t?t.index:void 0},tokenizer:function(e){var t=/^ {0,3}(:{3,}(?=[^:\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~:]* *(?=\n|$)|$)/.exec(e);if(t){var n={type:"callout",raw:t[0],text:t[3].trim(),severity:t[2],tokens:[]};return this.lexer.blockTokens(n.text,n.tokens),n}},renderer:function(e){return'<aside class="MuiCallout-root MuiCallout-'.concat(e.severity,'">\n            ').concat(["info","success","warning","error"].includes(e.severity)?['<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">','<use class="MuiCode-copied-icon" xlink:href="#'.concat(e.severity,'-icon" />'),"</svg>"].join("\n"):"",'\n            <div class="MuiCallout-content">\n            ').concat(this.parser.parse(e.tokens),"\n</div></aside>")}}]}),r(f,o(o({},l),{},{renderer:m}))}},getContents:function(e){return e.replace(d,"").split(/^{{("(?:demo|component)":.*)}}$/gm).flatMap(function(e){return e.split(/^(<codeblock(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/codeblock>)$/gm)}).flatMap(function(e){return e.split(/^(<featureList(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/featureList>)$/gm)}).filter(function(e){return!h.test(e)})},getDescription:function(e){var t=e.match(f);if(null!==t)return t[1].trim().replace(/`/g,"")},getCodeblock:function(e){if(e.startsWith("<codeblock")){var t,n=null===(t=e.match(/^<codeblock [^>]*storageKey=["|'](\S*)["|'].*>/m))||void 0===t?void 0:t[1];return{type:"codeblock",data:a(e.matchAll(/^```((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*) ((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)\n((?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\n```/gm)).map(function(e){var t=s(e,4);return{language:t[1],tab:t[2],code:t[3]}}).filter(function(e){return void 0!==e.tab&&!h.test(e.code)}),storageKey:n}}},getFeatureList:function(e){if(e.startsWith("<featureList"))return['<ul class="feature-list">'].concat(a(e.split("\n").filter(function(e){return e.startsWith("- ")}).map(function(e){return e.slice(2)}).map(function(e){return"<li>".concat(e,"</li>")})),["</ul>"]).join("")},getHeaders:function(e){var t=e.match(d);if(!t)return{components:[]};t=t[1];try{for(var n,o={};null!==(n=m.exec(t));){var i=n[1],s=n[2].replace(/(.*)/,"$1");"["===s[0]?(s=(s=s.replace(/'/g,'"')).replace(/,\s+\]$/g,"]"),o[i]=JSON.parse(s)):o[i]=s.replace(/^'|'$/g,"")}return o.components?o.components=o.components.split(",").map(function(e){return e.trim()}).sort():o.components=[],o.hooks?o.hooks=o.hooks.split(",").map(function(e){return e.trim()}).sort():o.hooks=[],o}catch(e){throw Error("docs-infra: ".concat(e.message," in getHeader(markdown) with markdown: \n\n").concat(t,"\n"))}},getTitle:function(e){var t=e.match(p);return null===t?"":t[1].replace(/`/g,"")},renderMarkdown:function(e){return/[-*+] `([A-Za-z]+)`/g.test(e)?r.parse(e,l):r.parseInline(e,l).replace(/(\r?\n){2}/g,"<br>").replace(/\r?\n/g," ")}}},891271:function(e){e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function e(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=1===o?t:"".concat(t,"-").concat(o);return n[i]?e(t,n,o+1):(n[i]=!0,i)}(encodeURI(e.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g,"").replace(/[!@#$%^&*()=_+[\]{}`~;:'"|,.<>/?\s]+/g,"-").replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])\uFE0F?/g,"").replace(/-+/g,"-").replace(/^-|-$/g,"")),t)}},394605:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}}),n(470079);var o=n(512589),i=n(412007),s=JSON.parse('{"props":{"alignItems":{"type":{"name":"enum","description":"\'center\'<br>&#124;&nbsp;\'flex-start\'"},"default":"\'center\'"},"autoFocus":{"type":{"name":"bool"},"default":"false"},"children":{"type":{"name":"node"}},"classes":{"type":{"name":"object"},"additionalInfo":{"cssApi":true}},"component":{"type":{"name":"elementType"}},"dense":{"type":{"name":"bool"},"default":"false"},"disabled":{"type":{"name":"bool"},"default":"false"},"disableGutters":{"type":{"name":"bool"},"default":"false"},"divider":{"type":{"name":"bool"},"default":"false"},"focusVisibleClassName":{"type":{"name":"string"}},"selected":{"type":{"name":"bool"},"default":"false"},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"},"additionalInfo":{"sx":true}}},"name":"ListItemButton","imports":["import ListItemButton from \'@mui/material/ListItemButton\';","import { ListItemButton } from \'@mui/material\';"],"classes":[{"key":"alignItemsFlexStart","className":"MuiListItemButton-alignItemsFlexStart","description":"Styles applied to the component element if `alignItems=\\"flex-start\\"`.","isGlobal":false},{"key":"dense","className":"MuiListItemButton-dense","description":"Styles applied to the component element if dense.","isGlobal":false},{"key":"disabled","className":"Mui-disabled","description":"State class applied to the inner `component` element if `disabled={true}`.","isGlobal":true},{"key":"divider","className":"MuiListItemButton-divider","description":"Styles applied to the inner `component` element if `divider={true}`.","isGlobal":false},{"key":"focusVisible","className":"Mui-focusVisible","description":"State class applied to the `component`\'s `focusVisibleClassName` prop.","isGlobal":true},{"key":"gutters","className":"MuiListItemButton-gutters","description":"Styles applied to the inner `component` element unless `disableGutters={true}`.","isGlobal":false},{"key":"root","className":"MuiListItemButton-root","description":"Styles applied to the root element.","isGlobal":false},{"key":"selected","className":"Mui-selected","description":"State class applied to the root element if `selected={true}`.","isGlobal":true}],"spread":true,"themeDefaultProps":true,"muiName":"MuiListItemButton","forwardsRefTo":"HTMLDivElement","filename":"/packages/mui-material/src/ListItemButton/ListItemButton.js","inheritance":{"component":"ButtonBase","pathname":"/material-ui/api/button-base/"},"demos":"<ul><li><a href=\\"/material-ui/react-list/\\">Lists</a></li></ul>","cssComponent":false}'),a=n(735250);function r(e){var t=e.descriptions,n=e.pageContent;return(0,a.jsx)(o.Z,{descriptions:t,pageContent:n})}r.getInitialProps=function(){var e=n(86529);return{descriptions:(0,i.Z)(e),pageContent:s}}},412007:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var o=n(705794),i=n(187509),s=/-([a-z]{2})\.json$/;function a(e){var t={},n={},a=[];return e.keys().forEach(function(e){e.match(s)?a.push(e):a=[e].concat(a)}),a.forEach(function(r){var c=r.match(s),u=null!==c?c[1]:"en",l=e(r)||null;if(null!==l&&l.componentDescription){var d=[],p=(0,o.createRender)({headingHashes:t,toc:d,userLanguage:u,location:a,options:{ignoreLanguagePages:i.LANGUAGES_IGNORE_PAGES,env:{SOURCE_CODE_REPO:""}}});l.componentDescription=p(l.componentDescription),l.componentDescriptionToc=d}n[u]=l}),n}},438308:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/api/list-item-button",function(){return n(394605)}])},86529:function(e,t,n){var o={"./list-item-button.json":744556};function i(e){return n(s(e))}function s(e){if(!n.o(o,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=s,e.exports=i,i.id=86529},36790:function(e,t,n){"use strict";function o(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return o}})},376757:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var o=n(136729),i=n(267765),s=n(861963);function a(e){return(a=i?s.bind():function(e){return e.__proto__||s(e)})(e)}function r(){try{var e=!Boolean.prototype.valueOf.call(o(Boolean,[],function(){}))}catch(e){}return(r=function(){return!!e})()}var c=n(931467),u=n(36790);function l(e){var t=r();return function(){var n,i=a(e);if(t){var s=a(this).constructor;n=o(i,arguments,s)}else n=i.apply(this,arguments);return function(e,t){if(t&&("object"==(0,c.Z)(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return(0,u.Z)(e)}(this,n)}}},206782:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var o=n(17800),i=n(303268),s=n(909101);function a(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=o(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i(e,"prototype",{writable:!1}),t&&(0,s.Z)(e,t)}},909101:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(267765);function i(e,t){return(i=o?o.bind():function(e,t){return e.__proto__=t,e})(e,t)}},744556:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"alignItems":{"description":"Defines the <code>align-items</code> style property."},"autoFocus":{"description":"If <code>true</code>, the list item is focused during the first mount. Focus will also be triggered if the value changes from false to true."},"children":{"description":"The content of the component if a <code>ListItemSecondaryAction</code> is used it must be the last child."},"classes":{"description":"Override or extend the styles applied to the component."},"component":{"description":"The component used for the root node. Either a string to use a HTML element or a component."},"dense":{"description":"If <code>true</code>, compact vertical padding designed for keyboard and mouse input is used. The prop defaults to the value inherited from the parent List component."},"disabled":{"description":"If <code>true</code>, the component is disabled."},"disableGutters":{"description":"If <code>true</code>, the left and right padding is removed."},"divider":{"description":"If <code>true</code>, a 1px light border is added to the bottom of the list item."},"focusVisibleClassName":{"description":"This prop can help identify which element has keyboard focus. The class name will be applied when the element gains the focus through keyboard interaction. It&#39;s a polyfill for the <a href=\\"https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo\\">CSS :focus-visible selector</a>. The rationale for using this feature <a href=\\"https://github.com/WICG/focus-visible/blob/HEAD/explainer.md\\">is explained here</a>. A <a href=\\"https://github.com/WICG/focus-visible\\">polyfill can be used</a> to apply a <code>focus-visible</code> class to other components if needed."},"selected":{"description":"Use to apply selected styling."},"sx":{"description":"The system prop that allows defining system overrides as well as additional CSS styles."}},"classDescriptions":{"alignItemsFlexStart":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the component element","conditions":"<code>alignItems=\\"flex-start\\"</code>"},"dense":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the component element","conditions":"dense"},"disabled":{"description":"State class applied to {{nodeName}} if {{conditions}}.","nodeName":"the inner <code>component</code> element","conditions":"<code>disabled={true}</code>"},"divider":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the inner <code>component</code> element","conditions":"<code>divider={true}</code>"},"focusVisible":{"description":"State class applied to {{nodeName}}.","nodeName":"the <code>component</code>&#39;s <code>focusVisibleClassName</code> prop"},"gutters":{"description":"Styles applied to {{nodeName}} unless {{conditions}}.","nodeName":"the inner <code>component</code> element","conditions":"<code>disableGutters={true}</code>"},"root":{"description":"Styles applied to the root element."},"selected":{"description":"State class applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>selected={true}</code>"}}}')}},function(e){e.O(0,[49774,9535,73976,97146,59727,85925,17376,17103,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,42378,20759,12589,92888,40179],function(){return e(e.s=438308)}),_N_E=e.O()}]);