(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[31483],{696689:function(e,t,n){var o=n(371017)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=o},705794:function(e,t,n){var o=n(117431),i=o.createRender,r=o.getHeaders,a=o.getTitle,s=o.renderMarkdown;e.exports={createRender:i,getHeaders:r,getTitle:a,renderMarkdown:s}},117431:function(e,t,n){var o=n(582103).default,i=n(436578),r=n(113065).default,a=n(95018).default,s=n(315599).marked,c=n(891271),u=n(520740),l={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,headerPrefix:!1,headerIds:!1,mangle:!1},p=/---[\r\n]([\s\S]*)[\r\n]---/,d=/# (.*)[\r\n]/,f=/<p class="description">([\s\S]*?)<\/p>/,h=/(.*?):[\r\n]?\s+(\[[^\]]+\]|.*)/g,m=/^\s*$/,F=/[&<>"']/,g=/[&<>"']/g,b=/[<>"']|&(?!#?\w+;)/,D=/[<>"']|&(?!#?\w+;)/g,v={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},y=function(e){return v[e]};function w(e,t){if(t){if(F.test(e))return e.replace(g,y)}else if(b.test(e))return e.replace(D,y);return e}var C=["https://m2.material.io/","https://m3.material.io/","https://material.io/","https://getbootstrap.com/","https://icons.getbootstrap.com/","https://pictogrammers.com/","https://www.w3.org/","https://tailwindcss.com/","https://heroicons.com/","https://react-icons.github.io/","https://fontawesome.com/","https://www.radix-ui.com/","https://react-spectrum.adobe.com/","https://headlessui.com/","https://refine.dev/","https://scaffoldhub.io/","https://marmelab.com/"];e.exports={createRender:function(e){var t=e.headingHashes,n=e.toc,r=e.userLanguage,a=e.options,p={},d=-1;return function(f){var h=new s.Renderer;return h.heading=function(e,o){if(1===o||o>=4)return"<h".concat(o,">").concat(e,"</h").concat(o,">");var a,s=e.replace(/<a\b[^>]*>/gi,"").replace(/<\/a>/gi,"");s=s.replace(/<code\b[^>]*>/gi,"").replace(/<\/code>/gi,""),"en"===r?a=c(s,t):(d+=1,(a=i(t)[d])||(a=c(s,p)));var u=s.replace(/([^\s]\()/g,"$1&#8203;");if(2===o)n.push({text:u,level:o,hash:a,children:[]});else if(3===o){if(!n[n.length-1])throw Error("docs-infra: Missing parent level for: ".concat(s,"\n"));n[n.length-1].children.push({text:u,level:o,hash:a})}return["<h".concat(o,' id="').concat(a,'"><a href="#').concat(a,'" class="title-link-to-anchor">').concat(e,'<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a>'),'<button title="Post a comment" class="comment-link" data-feedback-hash="'.concat(a,'">'),'<svg><use xlink:href="#comment-link-icon" /></svg>',"</button>","</h".concat(o,">")].join("")},h.link=function(t,n,o){var i="";n&&(i+=' title="'.concat(n,'"')),C.some(function(e){return -1!==t.indexOf(e)})&&(i=' target="_blank" rel="noopener nofollow"');var s=t;return function(e,t,n){var o=new URL(e,"https://mui.com/");if(/\/{2,}$/.test(o.pathname))throw Error(["docs-infra: Duplicated trailing slashes. The following link:","[".concat(t,"](").concat(e,") in ").concat(n.location," has duplicated trailing slashes, please only add one."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("mui.com"===o.host){if("/"!==o.pathname[o.pathname.length-1])throw Error(["docs-infra: Missing trailing slash. The following link:","[".concat(t,"](").concat(e,") in ").concat(n.location," is missing a trailing slash, please add it."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("#"!==e[0]&&!(e.startsWith("https://")||e.startsWith("http://"))&&"/"!==e[0])throw Error(["docs-infra: Missing leading slash. The following link:","[".concat(t,"](").concat(e,") in ").concat(n.location," is missing a leading slash, please add it."),""].join("\n"))}}(t,o,e),"en"===r||0!==t.indexOf("/")||a.ignoreLanguagePages(t)||(s="/".concat(r).concat(t)),s.startsWith("".concat(a.env.SOURCE_CODE_REPO,"/blob/-/"))&&(s=s.replace("".concat(a.env.SOURCE_CODE_REPO,"/blob/-/"),"".concat(a.env.SOURCE_CODE_REPO,"/blob/v").concat(a.env.LIB_VERSION,"/"))),'<a href="'.concat(s,'"').concat(i,">").concat(o,"</a>")},h.code=function(e,t,n){var o,i=(t||"").match(/\S*/)[0],r=null===(o=(t||"").match(/title="([^"]*)"/))||void 0===o?void 0:o[1],a=u(e,i);return(null!=a&&a!==e&&(n=!0,e=a),e="".concat(e.replace(/\n$/,""),"\n"),i)?'<div class="MuiCode-root">'.concat(r?'<div class="MuiCode-title">'.concat(r,"</div>"):"",'<pre><code class="language-').concat(w(i,!0),'">').concat(n?e:w(e,!0),"</code></pre>").concat('<button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>',"\n"):"<pre><code>".concat(n?e:w(e,!0),"</code></pre>\n")},s.use({extensions:[{name:"callout",level:"block",start:function(e){var t=e.match(/:::/);return t?t.index:void 0},tokenizer:function(e){var t=/^ {0,3}(:{3,}(?=[^:\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~:]* *(?=\n|$)|$)/.exec(e);if(t){var n={type:"callout",raw:t[0],text:t[3].trim(),severity:t[2],tokens:[]};return this.lexer.blockTokens(n.text,n.tokens),n}},renderer:function(e){return'<aside class="MuiCallout-root MuiCallout-'.concat(e.severity,'">\n            ').concat(["info","success","warning","error"].includes(e.severity)?['<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">','<use class="MuiCode-copied-icon" xlink:href="#'.concat(e.severity,'-icon" />'),"</svg>"].join("\n"):"",'\n            <div class="MuiCallout-content">\n            ').concat(this.parser.parse(e.tokens),"\n</div></aside>")}}]}),s(f,o(o({},l),{},{renderer:h}))}},getContents:function(e){return e.replace(p,"").split(/^{{("(?:demo|component)":.*)}}$/gm).flatMap(function(e){return e.split(/^(<codeblock(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/codeblock>)$/gm)}).flatMap(function(e){return e.split(/^(<featureList(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/featureList>)$/gm)}).filter(function(e){return!m.test(e)})},getDescription:function(e){var t=e.match(f);if(null!==t)return t[1].trim().replace(/`/g,"")},getCodeblock:function(e){if(e.startsWith("<codeblock")){var t,n=null===(t=e.match(/^<codeblock [^>]*storageKey=["|'](\S*)["|'].*>/m))||void 0===t?void 0:t[1];return{type:"codeblock",data:a(e.matchAll(/^```((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*) ((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)\n((?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\n```/gm)).map(function(e){var t=r(e,4);return{language:t[1],tab:t[2],code:t[3]}}).filter(function(e){return void 0!==e.tab&&!m.test(e.code)}),storageKey:n}}},getFeatureList:function(e){if(e.startsWith("<featureList"))return['<ul class="feature-list">'].concat(a(e.split("\n").filter(function(e){return e.startsWith("- ")}).map(function(e){return e.slice(2)}).map(function(e){return"<li>".concat(e,"</li>")})),["</ul>"]).join("")},getHeaders:function(e){var t=e.match(p);if(!t)return{components:[]};t=t[1];try{for(var n,o={};null!==(n=h.exec(t));){var i=n[1],r=n[2].replace(/(.*)/,"$1");"["===r[0]?(r=(r=r.replace(/'/g,'"')).replace(/,\s+\]$/g,"]"),o[i]=JSON.parse(r)):o[i]=r.replace(/^'|'$/g,"")}return o.components?o.components=o.components.split(",").map(function(e){return e.trim()}).sort():o.components=[],o.hooks?o.hooks=o.hooks.split(",").map(function(e){return e.trim()}).sort():o.hooks=[],o}catch(e){throw Error("docs-infra: ".concat(e.message," in getHeader(markdown) with markdown: \n\n").concat(t,"\n"))}},getTitle:function(e){var t=e.match(d);return null===t?"":t[1].replace(/`/g,"")},renderMarkdown:function(e){return/[-*+] `([A-Za-z]+)`/g.test(e)?s.parse(e,l):s.parseInline(e,l).replace(/(\r?\n){2}/g,"<br>").replace(/\r?\n/g," ")}}},891271:function(e){e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function e(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=1===o?t:"".concat(t,"-").concat(o);return n[i]?e(t,n,o+1):(n[i]=!0,i)}(encodeURI(e.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g,"").replace(/[!@#$%^&*()=_+[\]{}`~;:'"|,.<>/?\s]+/g,"-").replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])\uFE0F?/g,"").replace(/-+/g,"-").replace(/^-|-$/g,"")),t)}},124169:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}}),n(470079);var o=n(512589),i=n(412007),r=JSON.parse('{"props":{"ariaLabel":{"type":{"name":"string"},"required":true},"children":{"type":{"name":"node"}},"classes":{"type":{"name":"object"},"additionalInfo":{"cssApi":true}},"direction":{"type":{"name":"enum","description":"\'down\'<br>&#124;&nbsp;\'left\'<br>&#124;&nbsp;\'right\'<br>&#124;&nbsp;\'up\'"},"default":"\'up\'"},"FabProps":{"type":{"name":"object"},"default":"{}"},"hidden":{"type":{"name":"bool"},"default":"false"},"icon":{"type":{"name":"node"}},"onClose":{"type":{"name":"func"},"signature":{"type":"function(event: object, reason: string) => void","describedArgs":["event","reason"]}},"onOpen":{"type":{"name":"func"},"signature":{"type":"function(event: object, reason: string) => void","describedArgs":["event","reason"]}},"open":{"type":{"name":"bool"}},"openIcon":{"type":{"name":"node"}},"slotProps":{"type":{"name":"shape","description":"{ transition?: func<br>&#124;&nbsp;object }"},"default":"{}"},"slots":{"type":{"name":"shape","description":"{ transition?: elementType }"},"default":"{}"},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"},"additionalInfo":{"sx":true}},"TransitionComponent":{"type":{"name":"elementType"},"default":"Zoom\\n* @deprecated Use `slots.transition` instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/)","deprecated":true,"deprecationInfo":"Use <code>slots.transition</code> instead. This prop will be removed in v7. <a href=\\"/material-ui/migration/migrating-from-deprecated-apis/\\">How to migrate</a>"},"transitionDuration":{"type":{"name":"union","description":"number<br>&#124;&nbsp;{ appear?: number, enter?: number, exit?: number }"},"default":"{\\n  enter: theme.transitions.duration.enteringScreen,\\n  exit: theme.transitions.duration.leavingScreen,\\n}"},"TransitionProps":{"type":{"name":"object"},"deprecated":true,"deprecationInfo":"Use <code>slotProps.transition</code> instead. This prop will be removed in v7. <a href=\\"/material-ui/migration/migrating-from-deprecated-apis/\\">How to migrate</a>"}},"name":"SpeedDial","imports":["import SpeedDial from \'@mui/material/SpeedDial\';","import { SpeedDial } from \'@mui/material\';"],"slots":[{"name":"transition","description":"The component that renders the transition.\\n[Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.","default":"{}","class":null}],"classes":[{"key":"actions","className":"MuiSpeedDial-actions","description":"Styles applied to the actions (`children` wrapper) element.","isGlobal":false},{"key":"actionsClosed","className":"MuiSpeedDial-actionsClosed","description":"Styles applied to the actions (`children` wrapper) element if `open={false}`.","isGlobal":false},{"key":"directionDown","className":"MuiSpeedDial-directionDown","description":"Styles applied to the root element if direction=\\"down\\"","isGlobal":false},{"key":"directionLeft","className":"MuiSpeedDial-directionLeft","description":"Styles applied to the root element if direction=\\"left\\"","isGlobal":false},{"key":"directionRight","className":"MuiSpeedDial-directionRight","description":"Styles applied to the root element if direction=\\"right\\"","isGlobal":false},{"key":"directionUp","className":"MuiSpeedDial-directionUp","description":"Styles applied to the root element if direction=\\"up\\"","isGlobal":false},{"key":"fab","className":"MuiSpeedDial-fab","description":"Styles applied to the Fab component.","isGlobal":false},{"key":"root","className":"MuiSpeedDial-root","description":"Styles applied to the root element.","isGlobal":false}],"spread":true,"themeDefaultProps":true,"muiName":"MuiSpeedDial","forwardsRefTo":"HTMLDivElement","filename":"/packages/mui-material/src/SpeedDial/SpeedDial.js","inheritance":null,"demos":"<ul><li><a href=\\"/material-ui/react-speed-dial/\\">Speed Dial</a></li></ul>","cssComponent":false}'),a=n(735250);function s(e){var t=e.descriptions,n=e.pageContent;return(0,a.jsx)(o.Z,{descriptions:t,pageContent:n})}s.getInitialProps=function(){var e=n(668373);return{descriptions:(0,i.Z)(e),pageContent:r}}},412007:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var o=n(705794),i=n(187509),r=/-([a-z]{2})\.json$/;function a(e){var t={},n={},a=[];return e.keys().forEach(function(e){e.match(r)?a.push(e):a=[e].concat(a)}),a.forEach(function(s){var c=s.match(r),u=null!==c?c[1]:"en",l=e(s)||null;if(null!==l&&l.componentDescription){var p=[],d=(0,o.createRender)({headingHashes:t,toc:p,userLanguage:u,location:a,options:{ignoreLanguagePages:i.LANGUAGES_IGNORE_PAGES,env:{SOURCE_CODE_REPO:""}}});l.componentDescription=d(l.componentDescription),l.componentDescriptionToc=p}n[u]=l}),n}},809448:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/api/speed-dial",function(){return n(124169)}])},668373:function(e,t,n){var o={"./speed-dial.json":534435};function i(e){return n(r(e))}function r(e){if(!n.o(o,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=r,e.exports=i,i.id=668373},36790:function(e,t,n){"use strict";function o(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return o}})},376757:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var o=n(136729),i=n(267765),r=n(861963);function a(e){return(a=i?r.bind():function(e){return e.__proto__||r(e)})(e)}function s(){try{var e=!Boolean.prototype.valueOf.call(o(Boolean,[],function(){}))}catch(e){}return(s=function(){return!!e})()}var c=n(931467),u=n(36790);function l(e){var t=s();return function(){var n,i=a(e);if(t){var r=a(this).constructor;n=o(i,arguments,r)}else n=i.apply(this,arguments);return function(e,t){if(t&&("object"==(0,c.Z)(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return(0,u.Z)(e)}(this,n)}}},206782:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var o=n(17800),i=n(303268),r=n(909101);function a(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=o(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i(e,"prototype",{writable:!1}),t&&(0,r.Z)(e,t)}},909101:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(267765);function i(e,t){return(i=o?o.bind():function(e,t){return e.__proto__=t,e})(e,t)}},534435:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"ariaLabel":{"description":"The aria-label of the button element. Also used to provide the <code>id</code> for the <code>SpeedDial</code> element and its children."},"children":{"description":"SpeedDialActions to display when the SpeedDial is <code>open</code>."},"classes":{"description":"Override or extend the styles applied to the component."},"direction":{"description":"The direction the actions open relative to the floating action button."},"FabProps":{"description":"Props applied to the <a href=\\"/material-ui/api/fab/\\"><code>Fab</code></a> element."},"hidden":{"description":"If <code>true</code>, the SpeedDial is hidden."},"icon":{"description":"The icon to display in the SpeedDial Fab. The <code>SpeedDialIcon</code> component provides a default Icon with animation."},"onClose":{"description":"Callback fired when the component requests to be closed.","typeDescriptions":{"event":"The event source of the callback.","reason":"Can be: <code>&quot;toggle&quot;</code>, <code>&quot;blur&quot;</code>, <code>&quot;mouseLeave&quot;</code>, <code>&quot;escapeKeyDown&quot;</code>."}},"onOpen":{"description":"Callback fired when the component requests to be open.","typeDescriptions":{"event":"The event source of the callback.","reason":"Can be: <code>&quot;toggle&quot;</code>, <code>&quot;focus&quot;</code>, <code>&quot;mouseEnter&quot;</code>."}},"open":{"description":"If <code>true</code>, the component is shown."},"openIcon":{"description":"The icon to display in the SpeedDial Fab when the SpeedDial is open."},"slotProps":{"description":"The props used for each slot inside."},"slots":{"description":"The components used for each slot inside."},"sx":{"description":"The system prop that allows defining system overrides as well as additional CSS styles."},"TransitionComponent":{"description":"The component used for the transition. <a href=\\"/material-ui/transitions/#transitioncomponent-prop\\">Follow this guide</a> to learn more about the requirements for this component."},"transitionDuration":{"description":"The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object."},"TransitionProps":{"description":"Props applied to the transition element. By default, the element is based on this <a href=\\"https://reactcommunity.org/react-transition-group/transition/\\"><code>Transition</code></a> component."}},"classDescriptions":{"actions":{"description":"Styles applied to {{nodeName}}.","nodeName":"the actions (<code>children</code> wrapper) element"},"actionsClosed":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the actions (<code>children</code> wrapper) element","conditions":"<code>open={false}</code>"},"directionDown":{"description":"Styles applied to the root element if direction=&quot;down&quot;"},"directionLeft":{"description":"Styles applied to the root element if direction=&quot;left&quot;"},"directionRight":{"description":"Styles applied to the root element if direction=&quot;right&quot;"},"directionUp":{"description":"Styles applied to the root element if direction=&quot;up&quot;"},"fab":{"description":"Styles applied to {{nodeName}}.","nodeName":"the Fab component"},"root":{"description":"Styles applied to the root element."}},"slotDescriptions":{"transition":"The component that renders the transition. <a href=\\"/material-ui/transitions/#transitioncomponent-prop\\">Follow this guide</a> to learn more about the requirements for this component."}}')}},function(e){e.O(0,[49774,9535,73976,97146,59727,85925,17376,17103,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,42378,20759,12589,92888,40179],function(){return e(e.s=809448)}),_N_E=e.O()}]);