(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[60668],{696689:function(e,t,n){var o=n(371017)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=o},705794:function(e,t,n){var o=n(117431),r=o.createRender,i=o.getHeaders,a=o.getTitle,s=o.renderMarkdown;e.exports={createRender:r,getHeaders:i,getTitle:a,renderMarkdown:s}},117431:function(e,t,n){var o=n(582103).default,r=n(436578),i=n(113065).default,a=n(95018).default,s=n(315599).marked,c=n(891271),u=n(520740),l={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,headerPrefix:!1,headerIds:!1,mangle:!1},p=/---[\r\n]([\s\S]*)[\r\n]---/,d=/# (.*)[\r\n]/,h=/<p class="description">([\s\S]*?)<\/p>/,f=/(.*?):[\r\n]?\s+(\[[^\]]+\]|.*)/g,m=/^\s*$/,F=/[&<>"']/,g=/[&<>"']/g,D=/[<>"']|&(?!#?\w+;)/,b=/[<>"']|&(?!#?\w+;)/g,v={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},y=function(e){return v[e]};function C(e,t){if(t){if(F.test(e))return e.replace(g,y)}else if(D.test(e))return e.replace(b,y);return e}var w=["https://m2.material.io/","https://m3.material.io/","https://material.io/","https://getbootstrap.com/","https://icons.getbootstrap.com/","https://pictogrammers.com/","https://www.w3.org/","https://tailwindcss.com/","https://heroicons.com/","https://react-icons.github.io/","https://fontawesome.com/","https://www.radix-ui.com/","https://react-spectrum.adobe.com/","https://headlessui.com/","https://refine.dev/","https://scaffoldhub.io/","https://marmelab.com/"];e.exports={createRender:function(e){var t=e.headingHashes,n=e.toc,i=e.userLanguage,a=e.options,p={},d=-1;return function(h){var f=new s.Renderer;return f.heading=function(e,o){if(1===o||o>=4)return"<h".concat(o,">").concat(e,"</h").concat(o,">");var a,s=e.replace(/<a\b[^>]*>/gi,"").replace(/<\/a>/gi,"");s=s.replace(/<code\b[^>]*>/gi,"").replace(/<\/code>/gi,""),"en"===i?a=c(s,t):(d+=1,(a=r(t)[d])||(a=c(s,p)));var u=s.replace(/([^\s]\()/g,"$1&#8203;");if(2===o)n.push({text:u,level:o,hash:a,children:[]});else if(3===o){if(!n[n.length-1])throw Error("docs-infra: Missing parent level for: ".concat(s,"\n"));n[n.length-1].children.push({text:u,level:o,hash:a})}return["<h".concat(o,' id="').concat(a,'"><a href="#').concat(a,'" class="title-link-to-anchor">').concat(e,'<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a>'),'<button title="Post a comment" class="comment-link" data-feedback-hash="'.concat(a,'">'),'<svg><use xlink:href="#comment-link-icon" /></svg>',"</button>","</h".concat(o,">")].join("")},f.link=function(t,n,o){var r="";n&&(r+=' title="'.concat(n,'"')),w.some(function(e){return -1!==t.indexOf(e)})&&(r=' target="_blank" rel="noopener nofollow"');var s=t;return function(e,t,n){var o=new URL(e,"https://mui.com/");if(/\/{2,}$/.test(o.pathname))throw Error(["docs-infra: Duplicated trailing slashes. The following link:","[".concat(t,"](").concat(e,") in ").concat(n.location," has duplicated trailing slashes, please only add one."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("mui.com"===o.host){if("/"!==o.pathname[o.pathname.length-1])throw Error(["docs-infra: Missing trailing slash. The following link:","[".concat(t,"](").concat(e,") in ").concat(n.location," is missing a trailing slash, please add it."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("#"!==e[0]&&!(e.startsWith("https://")||e.startsWith("http://"))&&"/"!==e[0])throw Error(["docs-infra: Missing leading slash. The following link:","[".concat(t,"](").concat(e,") in ").concat(n.location," is missing a leading slash, please add it."),""].join("\n"))}}(t,o,e),"en"===i||0!==t.indexOf("/")||a.ignoreLanguagePages(t)||(s="/".concat(i).concat(t)),s.startsWith("".concat(a.env.SOURCE_CODE_REPO,"/blob/-/"))&&(s=s.replace("".concat(a.env.SOURCE_CODE_REPO,"/blob/-/"),"".concat(a.env.SOURCE_CODE_REPO,"/blob/v").concat(a.env.LIB_VERSION,"/"))),'<a href="'.concat(s,'"').concat(r,">").concat(o,"</a>")},f.code=function(e,t,n){var o,r=(t||"").match(/\S*/)[0],i=null===(o=(t||"").match(/title="([^"]*)"/))||void 0===o?void 0:o[1],a=u(e,r);return(null!=a&&a!==e&&(n=!0,e=a),e="".concat(e.replace(/\n$/,""),"\n"),r)?'<div class="MuiCode-root">'.concat(i?'<div class="MuiCode-title">'.concat(i,"</div>"):"",'<pre><code class="language-').concat(C(r,!0),'">').concat(n?e:C(e,!0),"</code></pre>").concat('<button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>',"\n"):"<pre><code>".concat(n?e:C(e,!0),"</code></pre>\n")},s.use({extensions:[{name:"callout",level:"block",start:function(e){var t=e.match(/:::/);return t?t.index:void 0},tokenizer:function(e){var t=/^ {0,3}(:{3,}(?=[^:\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~:]* *(?=\n|$)|$)/.exec(e);if(t){var n={type:"callout",raw:t[0],text:t[3].trim(),severity:t[2],tokens:[]};return this.lexer.blockTokens(n.text,n.tokens),n}},renderer:function(e){return'<aside class="MuiCallout-root MuiCallout-'.concat(e.severity,'">\n            ').concat(["info","success","warning","error"].includes(e.severity)?['<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">','<use class="MuiCode-copied-icon" xlink:href="#'.concat(e.severity,'-icon" />'),"</svg>"].join("\n"):"",'\n            <div class="MuiCallout-content">\n            ').concat(this.parser.parse(e.tokens),"\n</div></aside>")}}]}),s(h,o(o({},l),{},{renderer:f}))}},getContents:function(e){return e.replace(p,"").split(/^{{("(?:demo|component)":.*)}}$/gm).flatMap(function(e){return e.split(/^(<codeblock(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/codeblock>)$/gm)}).flatMap(function(e){return e.split(/^(<featureList(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/featureList>)$/gm)}).filter(function(e){return!m.test(e)})},getDescription:function(e){var t=e.match(h);if(null!==t)return t[1].trim().replace(/`/g,"")},getCodeblock:function(e){if(e.startsWith("<codeblock")){var t,n=null===(t=e.match(/^<codeblock [^>]*storageKey=["|'](\S*)["|'].*>/m))||void 0===t?void 0:t[1];return{type:"codeblock",data:a(e.matchAll(/^```((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*) ((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)\n((?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\n```/gm)).map(function(e){var t=i(e,4);return{language:t[1],tab:t[2],code:t[3]}}).filter(function(e){return void 0!==e.tab&&!m.test(e.code)}),storageKey:n}}},getFeatureList:function(e){if(e.startsWith("<featureList"))return['<ul class="feature-list">'].concat(a(e.split("\n").filter(function(e){return e.startsWith("- ")}).map(function(e){return e.slice(2)}).map(function(e){return"<li>".concat(e,"</li>")})),["</ul>"]).join("")},getHeaders:function(e){var t=e.match(p);if(!t)return{components:[]};t=t[1];try{for(var n,o={};null!==(n=f.exec(t));){var r=n[1],i=n[2].replace(/(.*)/,"$1");"["===i[0]?(i=(i=i.replace(/'/g,'"')).replace(/,\s+\]$/g,"]"),o[r]=JSON.parse(i)):o[r]=i.replace(/^'|'$/g,"")}return o.components?o.components=o.components.split(",").map(function(e){return e.trim()}).sort():o.components=[],o.hooks?o.hooks=o.hooks.split(",").map(function(e){return e.trim()}).sort():o.hooks=[],o}catch(e){throw Error("docs-infra: ".concat(e.message," in getHeader(markdown) with markdown: \n\n").concat(t,"\n"))}},getTitle:function(e){var t=e.match(d);return null===t?"":t[1].replace(/`/g,"")},renderMarkdown:function(e){return/[-*+] `([A-Za-z]+)`/g.test(e)?s.parse(e,l):s.parseInline(e,l).replace(/(\r?\n){2}/g,"<br>").replace(/\r?\n/g," ")}}},891271:function(e){e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function e(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=1===o?t:"".concat(t,"-").concat(o);return n[r]?e(t,n,o+1):(n[r]=!0,r)}(encodeURI(e.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g,"").replace(/[!@#$%^&*()=_+[\]{}`~;:'"|,.<>/?\s]+/g,"-").replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])\uFE0F?/g,"").replace(/-+/g,"-").replace(/^-|-$/g,"")),t)}},991660:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}}),n(470079);var o=n(512589),r=n(412007),i=JSON.parse('{"props":{"addEndListener":{"type":{"name":"func"}},"children":{"type":{"name":"node"}},"classes":{"type":{"name":"object"},"additionalInfo":{"cssApi":true}},"collapsedSize":{"type":{"name":"union","description":"number<br>&#124;&nbsp;string"},"default":"\'0px\'"},"component":{"type":{"name":"custom","description":"element type"}},"easing":{"type":{"name":"union","description":"{ enter?: string, exit?: string }<br>&#124;&nbsp;string"}},"in":{"type":{"name":"bool"}},"orientation":{"type":{"name":"enum","description":"\'horizontal\'<br>&#124;&nbsp;\'vertical\'"},"default":"\'vertical\'"},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"},"additionalInfo":{"sx":true}},"timeout":{"type":{"name":"union","description":"\'auto\'<br>&#124;&nbsp;number<br>&#124;&nbsp;{ appear?: number, enter?: number, exit?: number }"},"default":"duration.standard"}},"name":"Collapse","imports":["import Collapse from \'@mui/material/Collapse\';","import { Collapse } from \'@mui/material\';"],"classes":[{"key":"entered","className":"MuiCollapse-entered","description":"Styles applied to the root element when the transition has entered.","isGlobal":false},{"key":"hidden","className":"MuiCollapse-hidden","description":"Styles applied to the root element when the transition has exited and `collapsedSize` = 0px.","isGlobal":false},{"key":"horizontal","className":"MuiCollapse-horizontal","description":"State class applied to the root element if `orientation=\\"horizontal\\"`.","isGlobal":false},{"key":"root","className":"MuiCollapse-root","description":"Styles applied to the root element.","isGlobal":false},{"key":"wrapper","className":"MuiCollapse-wrapper","description":"Styles applied to the outer wrapper element.","isGlobal":false},{"key":"wrapperInner","className":"MuiCollapse-wrapperInner","description":"Styles applied to the inner wrapper element.","isGlobal":false}],"spread":true,"themeDefaultProps":true,"muiName":"MuiCollapse","forwardsRefTo":"HTMLDivElement","filename":"/packages/mui-material/src/Collapse/Collapse.js","inheritance":{"component":"Transition","pathname":"https://reactcommunity.org/react-transition-group/transition/#Transition-props"},"demos":"<ul><li><a href=\\"/material-ui/react-card/\\">Card</a></li>\\n<li><a href=\\"/material-ui/react-list/\\">Lists</a></li>\\n<li><a href=\\"/material-ui/transitions/\\">Transitions</a></li></ul>","cssComponent":false}'),a=n(735250);function s(e){var t=e.descriptions,n=e.pageContent;return(0,a.jsx)(o.Z,{descriptions:t,pageContent:n})}s.getInitialProps=function(){var e=n(822626);return{descriptions:(0,r.Z)(e),pageContent:i}}},412007:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var o=n(705794),r=n(187509),i=/-([a-z]{2})\.json$/;function a(e){var t={},n={},a=[];return e.keys().forEach(function(e){e.match(i)?a.push(e):a=[e].concat(a)}),a.forEach(function(s){var c=s.match(i),u=null!==c?c[1]:"en",l=e(s)||null;if(null!==l&&l.componentDescription){var p=[],d=(0,o.createRender)({headingHashes:t,toc:p,userLanguage:u,location:a,options:{ignoreLanguagePages:r.LANGUAGES_IGNORE_PAGES,env:{SOURCE_CODE_REPO:""}}});l.componentDescription=d(l.componentDescription),l.componentDescriptionToc=p}n[u]=l}),n}},749964:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/api/collapse",function(){return n(991660)}])},822626:function(e,t,n){var o={"./collapse.json":47017};function r(e){return n(i(e))}function i(e){if(!n.o(o,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id=822626},36790:function(e,t,n){"use strict";function o(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return o}})},376757:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var o=n(136729),r=n(267765),i=n(861963);function a(e){return(a=r?i.bind():function(e){return e.__proto__||i(e)})(e)}function s(){try{var e=!Boolean.prototype.valueOf.call(o(Boolean,[],function(){}))}catch(e){}return(s=function(){return!!e})()}var c=n(931467),u=n(36790);function l(e){var t=s();return function(){var n,r=a(e);if(t){var i=a(this).constructor;n=o(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"==(0,c.Z)(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return(0,u.Z)(e)}(this,n)}}},206782:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var o=n(17800),r=n(303268),i=n(909101);function a(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=o(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r(e,"prototype",{writable:!1}),t&&(0,i.Z)(e,t)}},909101:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var o=n(267765);function r(e,t){return(r=o?o.bind():function(e,t){return e.__proto__=t,e})(e,t)}},47017:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"The Collapse transition is used by the\\n[Vertical Stepper](/material-ui/react-stepper/#vertical-stepper) StepContent component.\\nIt uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.","propDescriptions":{"addEndListener":{"description":"Add a custom transition end trigger. Called with the transitioning DOM node and a done callback. Allows for more fine grained transition end logic. Note: Timeouts are still used as a fallback if provided."},"children":{"description":"The content node to be collapsed."},"classes":{"description":"Override or extend the styles applied to the component."},"collapsedSize":{"description":"The width (horizontal) or height (vertical) of the container when collapsed."},"component":{"description":"The component used for the root node. Either a string to use a HTML element or a component.","requiresRef":true},"easing":{"description":"The transition timing function. You may specify a single easing or a object containing enter and exit values."},"in":{"description":"If <code>true</code>, the component will transition in."},"orientation":{"description":"The transition orientation."},"sx":{"description":"The system prop that allows defining system overrides as well as additional CSS styles."},"timeout":{"description":"The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object.<br>Set to &#39;auto&#39; to automatically calculate transition time based on height."}},"classDescriptions":{"entered":{"description":"Styles applied to {{nodeName}} when {{conditions}}.","nodeName":"the root element","conditions":"the transition has entered"},"hidden":{"description":"Styles applied to {{nodeName}} when {{conditions}}.","nodeName":"the root element","conditions":"the transition has exited and <code>collapsedSize</code> = 0px"},"horizontal":{"description":"State class applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>orientation=\\"horizontal\\"</code>"},"root":{"description":"Styles applied to the root element."},"wrapper":{"description":"Styles applied to {{nodeName}}.","nodeName":"the outer wrapper element"},"wrapperInner":{"description":"Styles applied to {{nodeName}}.","nodeName":"the inner wrapper element"}}}')}},function(e){e.O(0,[49774,9535,73976,97146,59727,85925,17376,17103,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,42378,20759,12589,92888,40179],function(){return e(e.s=749964)}),_N_E=e.O()}]);