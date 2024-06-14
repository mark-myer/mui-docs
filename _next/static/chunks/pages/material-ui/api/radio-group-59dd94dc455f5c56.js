(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13135],{696689:function(e,t,n){var o=n(371017)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=o},705794:function(e,t,n){var o=n(117431),r=o.createRender,a=o.getHeaders,i=o.getTitle,c=o.renderMarkdown;e.exports={createRender:r,getHeaders:a,getTitle:i,renderMarkdown:c}},117431:function(e,t,n){var o=n(582103).default,r=n(436578),a=n(113065).default,i=n(95018).default,c=n(315599).marked,u=n(891271),s=n(520740),l={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,headerPrefix:!1,headerIds:!1,mangle:!1},p=/---[\r\n]([\s\S]*)[\r\n]---/,d=/# (.*)[\r\n]/,f=/<p class="description">([\s\S]*?)<\/p>/,h=/(.*?):[\r\n]?\s+(\[[^\]]+\]|.*)/g,F=/^\s*$/,m=/[&<>"']/,g=/[&<>"']/g,v=/[<>"']|&(?!#?\w+;)/,D=/[<>"']|&(?!#?\w+;)/g,b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},C=function(e){return b[e]};function y(e,t){if(t){if(m.test(e))return e.replace(g,C)}else if(v.test(e))return e.replace(D,C);return e}var w=["https://m2.material.io/","https://m3.material.io/","https://material.io/","https://getbootstrap.com/","https://icons.getbootstrap.com/","https://pictogrammers.com/","https://www.w3.org/","https://tailwindcss.com/","https://heroicons.com/","https://react-icons.github.io/","https://fontawesome.com/","https://www.radix-ui.com/","https://react-spectrum.adobe.com/","https://headlessui.com/","https://refine.dev/","https://scaffoldhub.io/","https://marmelab.com/"];e.exports={createRender:function(e){var t=e.headingHashes,n=e.toc,a=e.userLanguage,i=e.options,p={},d=-1;return function(f){var h=new c.Renderer;return h.heading=function(e,o){if(1===o||o>=4)return"<h".concat(o,">").concat(e,"</h").concat(o,">");var i,c=e.replace(/<a\b[^>]*>/gi,"").replace(/<\/a>/gi,"");c=c.replace(/<code\b[^>]*>/gi,"").replace(/<\/code>/gi,""),"en"===a?i=u(c,t):(d+=1,(i=r(t)[d])||(i=u(c,p)));var s=c.replace(/([^\s]\()/g,"$1&#8203;");if(2===o)n.push({text:s,level:o,hash:i,children:[]});else if(3===o){if(!n[n.length-1])throw Error("docs-infra: Missing parent level for: ".concat(c,"\n"));n[n.length-1].children.push({text:s,level:o,hash:i})}return["<h".concat(o,' id="').concat(i,'"><a href="#').concat(i,'" class="title-link-to-anchor">').concat(e,'<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a>'),'<button title="Post a comment" class="comment-link" data-feedback-hash="'.concat(i,'">'),'<svg><use xlink:href="#comment-link-icon" /></svg>',"</button>","</h".concat(o,">")].join("")},h.link=function(t,n,o){var r="";n&&(r+=' title="'.concat(n,'"')),w.some(function(e){return -1!==t.indexOf(e)})&&(r=' target="_blank" rel="noopener nofollow"');var c=t;return function(e,t,n){var o=new URL(e,"https://mui.com/");if(/\/{2,}$/.test(o.pathname))throw Error(["docs-infra: Duplicated trailing slashes. The following link:","[".concat(t,"](").concat(e,") in ").concat(n.location," has duplicated trailing slashes, please only add one."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("mui.com"===o.host){if("/"!==o.pathname[o.pathname.length-1])throw Error(["docs-infra: Missing trailing slash. The following link:","[".concat(t,"](").concat(e,") in ").concat(n.location," is missing a trailing slash, please add it."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("#"!==e[0]&&!(e.startsWith("https://")||e.startsWith("http://"))&&"/"!==e[0])throw Error(["docs-infra: Missing leading slash. The following link:","[".concat(t,"](").concat(e,") in ").concat(n.location," is missing a leading slash, please add it."),""].join("\n"))}}(t,o,e),"en"===a||0!==t.indexOf("/")||i.ignoreLanguagePages(t)||(c="/".concat(a).concat(t)),c.startsWith("".concat(i.env.SOURCE_CODE_REPO,"/blob/-/"))&&(c=c.replace("".concat(i.env.SOURCE_CODE_REPO,"/blob/-/"),"".concat(i.env.SOURCE_CODE_REPO,"/blob/v").concat(i.env.LIB_VERSION,"/"))),'<a href="'.concat(c,'"').concat(r,">").concat(o,"</a>")},h.code=function(e,t,n){var o,r=(t||"").match(/\S*/)[0],a=null===(o=(t||"").match(/title="([^"]*)"/))||void 0===o?void 0:o[1],i=s(e,r);return(null!=i&&i!==e&&(n=!0,e=i),e="".concat(e.replace(/\n$/,""),"\n"),r)?'<div class="MuiCode-root">'.concat(a?'<div class="MuiCode-title">'.concat(a,"</div>"):"",'<pre><code class="language-').concat(y(r,!0),'">').concat(n?e:y(e,!0),"</code></pre>").concat('<button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>',"\n"):"<pre><code>".concat(n?e:y(e,!0),"</code></pre>\n")},c.use({extensions:[{name:"callout",level:"block",start:function(e){var t=e.match(/:::/);return t?t.index:void 0},tokenizer:function(e){var t=/^ {0,3}(:{3,}(?=[^:\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~:]* *(?=\n|$)|$)/.exec(e);if(t){var n={type:"callout",raw:t[0],text:t[3].trim(),severity:t[2],tokens:[]};return this.lexer.blockTokens(n.text,n.tokens),n}},renderer:function(e){return'<aside class="MuiCallout-root MuiCallout-'.concat(e.severity,'">\n            ').concat(["info","success","warning","error"].includes(e.severity)?['<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">','<use class="MuiCode-copied-icon" xlink:href="#'.concat(e.severity,'-icon" />'),"</svg>"].join("\n"):"",'\n            <div class="MuiCallout-content">\n            ').concat(this.parser.parse(e.tokens),"\n</div></aside>")}}]}),c(f,o(o({},l),{},{renderer:h}))}},getContents:function(e){return e.replace(p,"").split(/^{{("(?:demo|component)":.*)}}$/gm).flatMap(function(e){return e.split(/^(<codeblock(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/codeblock>)$/gm)}).flatMap(function(e){return e.split(/^(<featureList(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/featureList>)$/gm)}).filter(function(e){return!F.test(e)})},getDescription:function(e){var t=e.match(f);if(null!==t)return t[1].trim().replace(/`/g,"")},getCodeblock:function(e){if(e.startsWith("<codeblock")){var t,n=null===(t=e.match(/^<codeblock [^>]*storageKey=["|'](\S*)["|'].*>/m))||void 0===t?void 0:t[1];return{type:"codeblock",data:i(e.matchAll(/^```((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*) ((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)\n((?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\n```/gm)).map(function(e){var t=a(e,4);return{language:t[1],tab:t[2],code:t[3]}}).filter(function(e){return void 0!==e.tab&&!F.test(e.code)}),storageKey:n}}},getFeatureList:function(e){if(e.startsWith("<featureList"))return['<ul class="feature-list">'].concat(i(e.split("\n").filter(function(e){return e.startsWith("- ")}).map(function(e){return e.slice(2)}).map(function(e){return"<li>".concat(e,"</li>")})),["</ul>"]).join("")},getHeaders:function(e){var t=e.match(p);if(!t)return{components:[]};t=t[1];try{for(var n,o={};null!==(n=h.exec(t));){var r=n[1],a=n[2].replace(/(.*)/,"$1");"["===a[0]?(a=(a=a.replace(/'/g,'"')).replace(/,\s+\]$/g,"]"),o[r]=JSON.parse(a)):o[r]=a.replace(/^'|'$/g,"")}return o.components?o.components=o.components.split(",").map(function(e){return e.trim()}).sort():o.components=[],o.hooks?o.hooks=o.hooks.split(",").map(function(e){return e.trim()}).sort():o.hooks=[],o}catch(e){throw Error("docs-infra: ".concat(e.message," in getHeader(markdown) with markdown: \n\n").concat(t,"\n"))}},getTitle:function(e){var t=e.match(d);return null===t?"":t[1].replace(/`/g,"")},renderMarkdown:function(e){return/[-*+] `([A-Za-z]+)`/g.test(e)?c.parse(e,l):c.parseInline(e,l).replace(/(\r?\n){2}/g,"<br>").replace(/\r?\n/g," ")}}},891271:function(e){e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function e(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=1===o?t:"".concat(t,"-").concat(o);return n[r]?e(t,n,o+1):(n[r]=!0,r)}(encodeURI(e.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g,"").replace(/[!@#$%^&*()=_+[\]{}`~;:'"|,.<>/?\s]+/g,"-").replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])\uFE0F?/g,"").replace(/-+/g,"-").replace(/^-|-$/g,"")),t)}},864303:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}}),n(470079);var o=n(512589),r=n(412007),a=JSON.parse('{"props":{"children":{"type":{"name":"node"}},"defaultValue":{"type":{"name":"any"}},"name":{"type":{"name":"string"}},"onChange":{"type":{"name":"func"},"signature":{"type":"function(event: React.ChangeEvent<HTMLInputElement>, value: string) => void","describedArgs":["event","value"]}},"value":{"type":{"name":"any"}}},"name":"RadioGroup","imports":["import RadioGroup from \'@mui/material/RadioGroup\';","import { RadioGroup } from \'@mui/material\';"],"classes":[{"key":"error","className":"Mui-error","description":"State class applied to the root element if `error={true}`.","isGlobal":true},{"key":"root","className":"MuiRadioGroup-root","description":"Styles applied to the root element.","isGlobal":false},{"key":"row","className":"MuiRadioGroup-row","description":"Styles applied to the root element if `row={true}`.","isGlobal":false}],"spread":true,"themeDefaultProps":false,"muiName":"MuiRadioGroup","forwardsRefTo":"HTMLDivElement","filename":"/packages/mui-material/src/RadioGroup/RadioGroup.js","inheritance":{"component":"FormGroup","pathname":"/material-ui/api/form-group/"},"demos":"<ul><li><a href=\\"/material-ui/react-radio-button/\\">Radio Group</a></li></ul>","cssComponent":false}'),i=n(735250);function c(e){var t=e.descriptions,n=e.pageContent;return(0,i.jsx)(o.Z,{descriptions:t,pageContent:n})}c.getInitialProps=function(){var e=n(294631);return{descriptions:(0,r.Z)(e),pageContent:a}}},412007:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(705794),r=n(187509),a=/-([a-z]{2})\.json$/;function i(e){var t={},n={},i=[];return e.keys().forEach(function(e){e.match(a)?i.push(e):i=[e].concat(i)}),i.forEach(function(c){var u=c.match(a),s=null!==u?u[1]:"en",l=e(c)||null;if(null!==l&&l.componentDescription){var p=[],d=(0,o.createRender)({headingHashes:t,toc:p,userLanguage:s,location:i,options:{ignoreLanguagePages:r.LANGUAGES_IGNORE_PAGES,env:{SOURCE_CODE_REPO:""}}});l.componentDescription=d(l.componentDescription),l.componentDescriptionToc=p}n[s]=l}),n}},514172:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/api/radio-group",function(){return n(864303)}])},294631:function(e,t,n){var o={"./radio-group.json":475075};function r(e){return n(a(e))}function a(e){if(!n.o(o,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=294631},36790:function(e,t,n){"use strict";function o(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return o}})},376757:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var o=n(136729),r=n(267765),a=n(861963);function i(e){return(i=r?a.bind():function(e){return e.__proto__||a(e)})(e)}function c(){try{var e=!Boolean.prototype.valueOf.call(o(Boolean,[],function(){}))}catch(e){}return(c=function(){return!!e})()}var u=n(931467),s=n(36790);function l(e){var t=c();return function(){var n,r=i(e);if(t){var a=i(this).constructor;n=o(r,arguments,a)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"==(0,u.Z)(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return(0,s.Z)(e)}(this,n)}}},206782:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(17800),r=n(303268),a=n(909101);function i(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=o(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r(e,"prototype",{writable:!1}),t&&(0,a.Z)(e,t)}},909101:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var o=n(267765);function r(e,t){return(r=o?o.bind():function(e,t){return e.__proto__=t,e})(e,t)}},475075:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"children":{"description":"The content of the component."},"defaultValue":{"description":"The default value. Use when the component is not controlled."},"name":{"description":"The name used to reference the value of the control. If you don&#39;t provide this prop, it falls back to a randomly generated name."},"onChange":{"description":"Callback fired when a radio button is selected.","typeDescriptions":{"event":"The event source of the callback.","value":"The value of the selected radio button. You can pull out the new value by accessing <code>event.target.value</code> (string)."}},"value":{"description":"Value of the selected radio button. The DOM API casts this to a string."}},"classDescriptions":{"error":{"description":"State class applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>error={true}</code>"},"root":{"description":"Styles applied to the root element."},"row":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>row={true}</code>"}}}')}},function(e){e.O(0,[49774,9535,73976,97146,59727,85925,17376,17103,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,42378,20759,12589,92888,40179],function(){return e(e.s=514172)}),_N_E=e.O()}]);