(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29470],{696689:function(e,t,o){var n=o(371017)(function(e,t,o){return e+(o?"-":"")+t.toLowerCase()});e.exports=n},705794:function(e,t,o){var n=o(117431),i=n.createRender,r=n.getHeaders,a=n.getTitle,s=n.renderMarkdown;e.exports={createRender:i,getHeaders:r,getTitle:a,renderMarkdown:s}},117431:function(e,t,o){var n=o(582103).default,i=o(436578),r=o(113065).default,a=o(95018).default,s=o(315599).marked,c=o(891271),u=o(520740),l={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,headerPrefix:!1,headerIds:!1,mangle:!1},d=/---[\r\n]([\s\S]*)[\r\n]---/,p=/# (.*)[\r\n]/,f=/<p class="description">([\s\S]*?)<\/p>/,g=/(.*?):[\r\n]?\s+(\[[^\]]+\]|.*)/g,h=/^\s*$/,m=/[&<>"']/,F=/[&<>"']/g,b=/[<>"']|&(?!#?\w+;)/,v=/[<>"']|&(?!#?\w+;)/g,y={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},D=function(e){return y[e]};function w(e,t){if(t){if(m.test(e))return e.replace(F,D)}else if(b.test(e))return e.replace(v,D);return e}var k=["https://m2.material.io/","https://m3.material.io/","https://material.io/","https://getbootstrap.com/","https://icons.getbootstrap.com/","https://pictogrammers.com/","https://www.w3.org/","https://tailwindcss.com/","https://heroicons.com/","https://react-icons.github.io/","https://fontawesome.com/","https://www.radix-ui.com/","https://react-spectrum.adobe.com/","https://headlessui.com/","https://refine.dev/","https://scaffoldhub.io/","https://marmelab.com/"];e.exports={createRender:function(e){var t=e.headingHashes,o=e.toc,r=e.userLanguage,a=e.options,d={},p=-1;return function(f){var g=new s.Renderer;return g.heading=function(e,n){if(1===n||n>=4)return"<h".concat(n,">").concat(e,"</h").concat(n,">");var a,s=e.replace(/<a\b[^>]*>/gi,"").replace(/<\/a>/gi,"");s=s.replace(/<code\b[^>]*>/gi,"").replace(/<\/code>/gi,""),"en"===r?a=c(s,t):(p+=1,(a=i(t)[p])||(a=c(s,d)));var u=s.replace(/([^\s]\()/g,"$1&#8203;");if(2===n)o.push({text:u,level:n,hash:a,children:[]});else if(3===n){if(!o[o.length-1])throw Error("docs-infra: Missing parent level for: ".concat(s,"\n"));o[o.length-1].children.push({text:u,level:n,hash:a})}return["<h".concat(n,' id="').concat(a,'"><a href="#').concat(a,'" class="title-link-to-anchor">').concat(e,'<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a>'),'<button title="Post a comment" class="comment-link" data-feedback-hash="'.concat(a,'">'),'<svg><use xlink:href="#comment-link-icon" /></svg>',"</button>","</h".concat(n,">")].join("")},g.link=function(t,o,n){var i="";o&&(i+=' title="'.concat(o,'"')),k.some(function(e){return -1!==t.indexOf(e)})&&(i=' target="_blank" rel="noopener nofollow"');var s=t;return function(e,t,o){var n=new URL(e,"https://mui.com/");if(/\/{2,}$/.test(n.pathname))throw Error(["docs-infra: Duplicated trailing slashes. The following link:","[".concat(t,"](").concat(e,") in ").concat(o.location," has duplicated trailing slashes, please only add one."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("mui.com"===n.host){if("/"!==n.pathname[n.pathname.length-1])throw Error(["docs-infra: Missing trailing slash. The following link:","[".concat(t,"](").concat(e,") in ").concat(o.location," is missing a trailing slash, please add it."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("#"!==e[0]&&!(e.startsWith("https://")||e.startsWith("http://"))&&"/"!==e[0])throw Error(["docs-infra: Missing leading slash. The following link:","[".concat(t,"](").concat(e,") in ").concat(o.location," is missing a leading slash, please add it."),""].join("\n"))}}(t,n,e),"en"===r||0!==t.indexOf("/")||a.ignoreLanguagePages(t)||(s="/".concat(r).concat(t)),s.startsWith("".concat(a.env.SOURCE_CODE_REPO,"/blob/-/"))&&(s=s.replace("".concat(a.env.SOURCE_CODE_REPO,"/blob/-/"),"".concat(a.env.SOURCE_CODE_REPO,"/blob/v").concat(a.env.LIB_VERSION,"/"))),'<a href="'.concat(s,'"').concat(i,">").concat(n,"</a>")},g.code=function(e,t,o){var n,i=(t||"").match(/\S*/)[0],r=null===(n=(t||"").match(/title="([^"]*)"/))||void 0===n?void 0:n[1],a=u(e,i);return(null!=a&&a!==e&&(o=!0,e=a),e="".concat(e.replace(/\n$/,""),"\n"),i)?'<div class="MuiCode-root">'.concat(r?'<div class="MuiCode-title">'.concat(r,"</div>"):"",'<pre><code class="language-').concat(w(i,!0),'">').concat(o?e:w(e,!0),"</code></pre>").concat('<button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>',"\n"):"<pre><code>".concat(o?e:w(e,!0),"</code></pre>\n")},s.use({extensions:[{name:"callout",level:"block",start:function(e){var t=e.match(/:::/);return t?t.index:void 0},tokenizer:function(e){var t=/^ {0,3}(:{3,}(?=[^:\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~:]* *(?=\n|$)|$)/.exec(e);if(t){var o={type:"callout",raw:t[0],text:t[3].trim(),severity:t[2],tokens:[]};return this.lexer.blockTokens(o.text,o.tokens),o}},renderer:function(e){return'<aside class="MuiCallout-root MuiCallout-'.concat(e.severity,'">\n            ').concat(["info","success","warning","error"].includes(e.severity)?['<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">','<use class="MuiCode-copied-icon" xlink:href="#'.concat(e.severity,'-icon" />'),"</svg>"].join("\n"):"",'\n            <div class="MuiCallout-content">\n            ').concat(this.parser.parse(e.tokens),"\n</div></aside>")}}]}),s(f,n(n({},l),{},{renderer:g}))}},getContents:function(e){return e.replace(d,"").split(/^{{("(?:demo|component)":.*)}}$/gm).flatMap(function(e){return e.split(/^(<codeblock(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/codeblock>)$/gm)}).flatMap(function(e){return e.split(/^(<featureList(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/featureList>)$/gm)}).filter(function(e){return!h.test(e)})},getDescription:function(e){var t=e.match(f);if(null!==t)return t[1].trim().replace(/`/g,"")},getCodeblock:function(e){if(e.startsWith("<codeblock")){var t,o=null===(t=e.match(/^<codeblock [^>]*storageKey=["|'](\S*)["|'].*>/m))||void 0===t?void 0:t[1];return{type:"codeblock",data:a(e.matchAll(/^```((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*) ((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)\n((?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\n```/gm)).map(function(e){var t=r(e,4);return{language:t[1],tab:t[2],code:t[3]}}).filter(function(e){return void 0!==e.tab&&!h.test(e.code)}),storageKey:o}}},getFeatureList:function(e){if(e.startsWith("<featureList"))return['<ul class="feature-list">'].concat(a(e.split("\n").filter(function(e){return e.startsWith("- ")}).map(function(e){return e.slice(2)}).map(function(e){return"<li>".concat(e,"</li>")})),["</ul>"]).join("")},getHeaders:function(e){var t=e.match(d);if(!t)return{components:[]};t=t[1];try{for(var o,n={};null!==(o=g.exec(t));){var i=o[1],r=o[2].replace(/(.*)/,"$1");"["===r[0]?(r=(r=r.replace(/'/g,'"')).replace(/,\s+\]$/g,"]"),n[i]=JSON.parse(r)):n[i]=r.replace(/^'|'$/g,"")}return n.components?n.components=n.components.split(",").map(function(e){return e.trim()}).sort():n.components=[],n.hooks?n.hooks=n.hooks.split(",").map(function(e){return e.trim()}).sort():n.hooks=[],n}catch(e){throw Error("docs-infra: ".concat(e.message," in getHeader(markdown) with markdown: \n\n").concat(t,"\n"))}},getTitle:function(e){var t=e.match(p);return null===t?"":t[1].replace(/`/g,"")},renderMarkdown:function(e){return/[-*+] `([A-Za-z]+)`/g.test(e)?s.parse(e,l):s.parseInline(e,l).replace(/(\r?\n){2}/g,"<br>").replace(/\r?\n/g," ")}}},891271:function(e){e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function e(t,o){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=1===n?t:"".concat(t,"-").concat(n);return o[i]?e(t,o,n+1):(o[i]=!0,i)}(encodeURI(e.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g,"").replace(/[!@#$%^&*()=_+[\]{}`~;:'"|,.<>/?\s]+/g,"-").replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])\uFE0F?/g,"").replace(/-+/g,"-").replace(/^-|-$/g,"")),t)}},229998:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return s}}),o(470079);var n=o(512589),i=o(412007),r=JSON.parse('{"props":{"children":{"type":{"name":"node"}},"classes":{"type":{"name":"object"},"additionalInfo":{"cssApi":true}},"color":{"type":{"name":"union","description":"\'standard\'<br>&#124;&nbsp;\'primary\'<br>&#124;&nbsp;\'secondary\'<br>&#124;&nbsp;\'error\'<br>&#124;&nbsp;\'info\'<br>&#124;&nbsp;\'success\'<br>&#124;&nbsp;\'warning\'<br>&#124;&nbsp;string"},"default":"\'standard\'"},"disabled":{"type":{"name":"bool"},"default":"false"},"exclusive":{"type":{"name":"bool"},"default":"false"},"fullWidth":{"type":{"name":"bool"},"default":"false"},"onChange":{"type":{"name":"func"},"signature":{"type":"function(event: React.MouseEvent<HTMLElement>, value: any) => void","describedArgs":["event","value"]}},"orientation":{"type":{"name":"enum","description":"\'horizontal\'<br>&#124;&nbsp;\'vertical\'"},"default":"\'horizontal\'"},"size":{"type":{"name":"union","description":"\'small\'<br>&#124;&nbsp;\'medium\'<br>&#124;&nbsp;\'large\'<br>&#124;&nbsp;string"},"default":"\'medium\'"},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"},"additionalInfo":{"sx":true}},"value":{"type":{"name":"any"}}},"name":"ToggleButtonGroup","imports":["import ToggleButtonGroup from \'@mui/material/ToggleButtonGroup\';","import { ToggleButtonGroup } from \'@mui/material\';"],"classes":[{"key":"disabled","className":"Mui-disabled","description":"State class applied to the root element if `disabled={true}`.","isGlobal":true},{"key":"firstButton","className":"MuiToggleButtonGroup-firstButton","description":"Styles applied to the first button in the toggle button group.","isGlobal":false},{"key":"fullWidth","className":"MuiToggleButtonGroup-fullWidth","description":"Styles applied to the root element if `fullWidth={true}`.","isGlobal":false},{"key":"grouped","className":"MuiToggleButtonGroup-grouped","description":"Styles applied to the children.","isGlobal":false},{"key":"groupedHorizontal","className":"MuiToggleButtonGroup-groupedHorizontal","description":"Styles applied to the children if `orientation=\\"horizontal\\"`.","isGlobal":false,"isDeprecated":true},{"key":"groupedVertical","className":"MuiToggleButtonGroup-groupedVertical","description":"Styles applied to the children if `orientation=\\"vertical\\"`.","isGlobal":false,"isDeprecated":true},{"key":"horizontal","className":"MuiToggleButtonGroup-horizontal","description":"Styles applied to the root element if `orientation=\\"horizontal\\"`.","isGlobal":false},{"key":"lastButton","className":"MuiToggleButtonGroup-lastButton","description":"Styles applied to the last button in the toggle button group.","isGlobal":false},{"key":"middleButton","className":"MuiToggleButtonGroup-middleButton","description":"Styles applied to buttons in the middle of the toggle button group.","isGlobal":false},{"key":"root","className":"MuiToggleButtonGroup-root","description":"Styles applied to the root element.","isGlobal":false},{"key":"selected","className":"Mui-selected","description":"State class applied to the root element if `selected={true}`.","isGlobal":true},{"key":"vertical","className":"MuiToggleButtonGroup-vertical","description":"Styles applied to the root element if `orientation=\\"vertical\\"`.","isGlobal":false}],"spread":true,"themeDefaultProps":true,"muiName":"MuiToggleButtonGroup","forwardsRefTo":"HTMLDivElement","filename":"/packages/mui-material/src/ToggleButtonGroup/ToggleButtonGroup.js","inheritance":null,"demos":"<ul><li><a href=\\"/material-ui/react-toggle-button/\\">Toggle Button</a></li></ul>","cssComponent":false}'),a=o(735250);function s(e){var t=e.descriptions,o=e.pageContent;return(0,a.jsx)(n.Z,{descriptions:t,pageContent:o})}s.getInitialProps=function(){var e=o(617767);return{descriptions:(0,i.Z)(e),pageContent:r}}},412007:function(e,t,o){"use strict";o.d(t,{Z:function(){return a}});var n=o(705794),i=o(187509),r=/-([a-z]{2})\.json$/;function a(e){var t={},o={},a=[];return e.keys().forEach(function(e){e.match(r)?a.push(e):a=[e].concat(a)}),a.forEach(function(s){var c=s.match(r),u=null!==c?c[1]:"en",l=e(s)||null;if(null!==l&&l.componentDescription){var d=[],p=(0,n.createRender)({headingHashes:t,toc:d,userLanguage:u,location:a,options:{ignoreLanguagePages:i.LANGUAGES_IGNORE_PAGES,env:{SOURCE_CODE_REPO:""}}});l.componentDescription=p(l.componentDescription),l.componentDescriptionToc=d}o[u]=l}),o}},926242:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/api/toggle-button-group",function(){return o(229998)}])},617767:function(e,t,o){var n={"./toggle-button-group.json":694971};function i(e){return o(r(e))}function r(e){if(!o.o(n,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=617767},36790:function(e,t,o){"use strict";function n(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}o.d(t,{Z:function(){return n}})},376757:function(e,t,o){"use strict";o.d(t,{Z:function(){return l}});var n=o(136729),i=o(267765),r=o(861963);function a(e){return(a=i?r.bind():function(e){return e.__proto__||r(e)})(e)}function s(){try{var e=!Boolean.prototype.valueOf.call(n(Boolean,[],function(){}))}catch(e){}return(s=function(){return!!e})()}var c=o(931467),u=o(36790);function l(e){var t=s();return function(){var o,i=a(e);if(t){var r=a(this).constructor;o=n(i,arguments,r)}else o=i.apply(this,arguments);return function(e,t){if(t&&("object"==(0,c.Z)(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return(0,u.Z)(e)}(this,o)}}},206782:function(e,t,o){"use strict";o.d(t,{Z:function(){return a}});var n=o(17800),i=o(303268),r=o(909101);function a(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=n(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i(e,"prototype",{writable:!1}),t&&(0,r.Z)(e,t)}},909101:function(e,t,o){"use strict";o.d(t,{Z:function(){return i}});var n=o(267765);function i(e,t){return(i=n?n.bind():function(e,t){return e.__proto__=t,e})(e,t)}},694971:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"children":{"description":"The content of the component."},"classes":{"description":"Override or extend the styles applied to the component."},"color":{"description":"The color of the button when it is selected. It supports both default and custom theme colors, which can be added as shown in the <a href=\\"https://mui.com/material-ui/customization/palette/#custom-colors\\">palette customization guide</a>."},"disabled":{"description":"If <code>true</code>, the component is disabled. This implies that all ToggleButton children will be disabled."},"exclusive":{"description":"If <code>true</code>, only allow one of the child ToggleButton values to be selected."},"fullWidth":{"description":"If <code>true</code>, the button group will take up the full width of its container."},"onChange":{"description":"Callback fired when the value changes.","typeDescriptions":{"event":"The event source of the callback.","value":"of the selected buttons. When <code>exclusive</code> is true this is a single value; when false an array of selected values. If no value is selected and <code>exclusive</code> is true the value is null; when false an empty array."}},"orientation":{"description":"The component orientation (layout flow direction)."},"size":{"description":"The size of the component."},"sx":{"description":"The system prop that allows defining system overrides as well as additional CSS styles."},"value":{"description":"The currently selected value within the group or an array of selected values when <code>exclusive</code> is false.<br>The value must have reference equality with the option in order to be selected."}},"classDescriptions":{"disabled":{"description":"State class applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>disabled={true}</code>"},"firstButton":{"description":"Styles applied to {{nodeName}}.","nodeName":"the first button in the toggle button group"},"fullWidth":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>fullWidth={true}</code>"},"grouped":{"description":"Styles applied to {{nodeName}}.","nodeName":"the children"},"groupedHorizontal":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the children","conditions":"<code>orientation=\\"horizontal\\"</code>","deprecationInfo":"Combine the <a href=\\"/material-ui/api/toggle-button-group/#toggle-button-group-classes-horizontal\\">.MuiToggleButtonGroup-horizontal</a> and <a href=\\"/material-ui/api/toggle-button-group/#toggle-button-group-classes-grouped\\">.MuiToggleButtonGroup-grouped</a> classes instead. See <a href=\\"/material-ui/migration/migrating-from-deprecated-apis/\\">Migrating from deprecated APIs</a> for more details."},"groupedVertical":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the children","conditions":"<code>orientation=\\"vertical\\"</code>","deprecationInfo":"Combine the <a href=\\"/material-ui/api/toggle-button-group/#toggle-button-group-classes-vertical\\">.MuiToggleButtonGroup-vertical</a> and <a href=\\"/material-ui/api/toggle-button-group/#toggle-button-group-classes-grouped\\">.MuiToggleButtonGroup-grouped</a> classes instead. See <a href=\\"/material-ui/migration/migrating-from-deprecated-apis/\\">Migrating from deprecated APIs</a> for more details."},"horizontal":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>orientation=\\"horizontal\\"</code>"},"lastButton":{"description":"Styles applied to {{nodeName}}.","nodeName":"the last button in the toggle button group"},"middleButton":{"description":"Styles applied to {{nodeName}}.","nodeName":"buttons in the middle of the toggle button group"},"root":{"description":"Styles applied to the root element."},"selected":{"description":"State class applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>selected={true}</code>"},"vertical":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>orientation=\\"vertical\\"</code>"}}}')}},function(e){e.O(0,[49774,9535,73976,97146,59727,85925,17376,17103,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,42378,20759,12589,92888,40179],function(){return e(e.s=926242)}),_N_E=e.O()}]);