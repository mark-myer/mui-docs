(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32421],{696689:function(e,t,n){var o=n(371017)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=o},705794:function(e,t,n){var o=n(117431),i=o.createRender,a=o.getHeaders,c=o.getTitle,s=o.renderMarkdown;e.exports={createRender:i,getHeaders:a,getTitle:c,renderMarkdown:s}},117431:function(e,t,n){var o=n(582103).default,i=n(436578),a=n(113065).default,c=n(95018).default,s=n(315599).marked,r=n(891271),l=n(520740),u={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,headerPrefix:!1,headerIds:!1,mangle:!1},d=/---[\r\n]([\s\S]*)[\r\n]---/,p=/# (.*)[\r\n]/,h=/<p class="description">([\s\S]*?)<\/p>/,m=/(.*?):[\r\n]?\s+(\[[^\]]+\]|.*)/g,f=/^\s*$/,g=/[&<>"']/,F=/[&<>"']/g,b=/[<>"']|&(?!#?\w+;)/,y=/[<>"']|&(?!#?\w+;)/g,v={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},w=function(e){return v[e]};function D(e,t){if(t){if(g.test(e))return e.replace(F,w)}else if(b.test(e))return e.replace(y,w);return e}var S=["https://m2.material.io/","https://m3.material.io/","https://material.io/","https://getbootstrap.com/","https://icons.getbootstrap.com/","https://pictogrammers.com/","https://www.w3.org/","https://tailwindcss.com/","https://heroicons.com/","https://react-icons.github.io/","https://fontawesome.com/","https://www.radix-ui.com/","https://react-spectrum.adobe.com/","https://headlessui.com/","https://refine.dev/","https://scaffoldhub.io/","https://marmelab.com/"];e.exports={createRender:function(e){var t=e.headingHashes,n=e.toc,a=e.userLanguage,c=e.options,d={},p=-1;return function(h){var m=new s.Renderer;return m.heading=function(e,o){if(1===o||o>=4)return"<h".concat(o,">").concat(e,"</h").concat(o,">");var c,s=e.replace(/<a\b[^>]*>/gi,"").replace(/<\/a>/gi,"");s=s.replace(/<code\b[^>]*>/gi,"").replace(/<\/code>/gi,""),"en"===a?c=r(s,t):(p+=1,(c=i(t)[p])||(c=r(s,d)));var l=s.replace(/([^\s]\()/g,"$1&#8203;");if(2===o)n.push({text:l,level:o,hash:c,children:[]});else if(3===o){if(!n[n.length-1])throw Error("docs-infra: Missing parent level for: ".concat(s,"\n"));n[n.length-1].children.push({text:l,level:o,hash:c})}return["<h".concat(o,' id="').concat(c,'"><a href="#').concat(c,'" class="title-link-to-anchor">').concat(e,'<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a>'),'<button title="Post a comment" class="comment-link" data-feedback-hash="'.concat(c,'">'),'<svg><use xlink:href="#comment-link-icon" /></svg>',"</button>","</h".concat(o,">")].join("")},m.link=function(t,n,o){var i="";n&&(i+=' title="'.concat(n,'"')),S.some(function(e){return -1!==t.indexOf(e)})&&(i=' target="_blank" rel="noopener nofollow"');var s=t;return function(e,t,n){var o=new URL(e,"https://mui.com/");if(/\/{2,}$/.test(o.pathname))throw Error(["docs-infra: Duplicated trailing slashes. The following link:","[".concat(t,"](").concat(e,") in ").concat(n.location," has duplicated trailing slashes, please only add one."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("mui.com"===o.host){if("/"!==o.pathname[o.pathname.length-1])throw Error(["docs-infra: Missing trailing slash. The following link:","[".concat(t,"](").concat(e,") in ").concat(n.location," is missing a trailing slash, please add it."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("#"!==e[0]&&!(e.startsWith("https://")||e.startsWith("http://"))&&"/"!==e[0])throw Error(["docs-infra: Missing leading slash. The following link:","[".concat(t,"](").concat(e,") in ").concat(n.location," is missing a leading slash, please add it."),""].join("\n"))}}(t,o,e),"en"===a||0!==t.indexOf("/")||c.ignoreLanguagePages(t)||(s="/".concat(a).concat(t)),s.startsWith("".concat(c.env.SOURCE_CODE_REPO,"/blob/-/"))&&(s=s.replace("".concat(c.env.SOURCE_CODE_REPO,"/blob/-/"),"".concat(c.env.SOURCE_CODE_REPO,"/blob/v").concat(c.env.LIB_VERSION,"/"))),'<a href="'.concat(s,'"').concat(i,">").concat(o,"</a>")},m.code=function(e,t,n){var o,i=(t||"").match(/\S*/)[0],a=null===(o=(t||"").match(/title="([^"]*)"/))||void 0===o?void 0:o[1],c=l(e,i);return(null!=c&&c!==e&&(n=!0,e=c),e="".concat(e.replace(/\n$/,""),"\n"),i)?'<div class="MuiCode-root">'.concat(a?'<div class="MuiCode-title">'.concat(a,"</div>"):"",'<pre><code class="language-').concat(D(i,!0),'">').concat(n?e:D(e,!0),"</code></pre>").concat('<button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>',"\n"):"<pre><code>".concat(n?e:D(e,!0),"</code></pre>\n")},s.use({extensions:[{name:"callout",level:"block",start:function(e){var t=e.match(/:::/);return t?t.index:void 0},tokenizer:function(e){var t=/^ {0,3}(:{3,}(?=[^:\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~:]* *(?=\n|$)|$)/.exec(e);if(t){var n={type:"callout",raw:t[0],text:t[3].trim(),severity:t[2],tokens:[]};return this.lexer.blockTokens(n.text,n.tokens),n}},renderer:function(e){return'<aside class="MuiCallout-root MuiCallout-'.concat(e.severity,'">\n            ').concat(["info","success","warning","error"].includes(e.severity)?['<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">','<use class="MuiCode-copied-icon" xlink:href="#'.concat(e.severity,'-icon" />'),"</svg>"].join("\n"):"",'\n            <div class="MuiCallout-content">\n            ').concat(this.parser.parse(e.tokens),"\n</div></aside>")}}]}),s(h,o(o({},u),{},{renderer:m}))}},getContents:function(e){return e.replace(d,"").split(/^{{("(?:demo|component)":.*)}}$/gm).flatMap(function(e){return e.split(/^(<codeblock(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/codeblock>)$/gm)}).flatMap(function(e){return e.split(/^(<featureList(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/featureList>)$/gm)}).filter(function(e){return!f.test(e)})},getDescription:function(e){var t=e.match(h);if(null!==t)return t[1].trim().replace(/`/g,"")},getCodeblock:function(e){if(e.startsWith("<codeblock")){var t,n=null===(t=e.match(/^<codeblock [^>]*storageKey=["|'](\S*)["|'].*>/m))||void 0===t?void 0:t[1];return{type:"codeblock",data:c(e.matchAll(/^```((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*) ((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)\n((?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\n```/gm)).map(function(e){var t=a(e,4);return{language:t[1],tab:t[2],code:t[3]}}).filter(function(e){return void 0!==e.tab&&!f.test(e.code)}),storageKey:n}}},getFeatureList:function(e){if(e.startsWith("<featureList"))return['<ul class="feature-list">'].concat(c(e.split("\n").filter(function(e){return e.startsWith("- ")}).map(function(e){return e.slice(2)}).map(function(e){return"<li>".concat(e,"</li>")})),["</ul>"]).join("")},getHeaders:function(e){var t=e.match(d);if(!t)return{components:[]};t=t[1];try{for(var n,o={};null!==(n=m.exec(t));){var i=n[1],a=n[2].replace(/(.*)/,"$1");"["===a[0]?(a=(a=a.replace(/'/g,'"')).replace(/,\s+\]$/g,"]"),o[i]=JSON.parse(a)):o[i]=a.replace(/^'|'$/g,"")}return o.components?o.components=o.components.split(",").map(function(e){return e.trim()}).sort():o.components=[],o.hooks?o.hooks=o.hooks.split(",").map(function(e){return e.trim()}).sort():o.hooks=[],o}catch(e){throw Error("docs-infra: ".concat(e.message," in getHeader(markdown) with markdown: \n\n").concat(t,"\n"))}},getTitle:function(e){var t=e.match(p);return null===t?"":t[1].replace(/`/g,"")},renderMarkdown:function(e){return/[-*+] `([A-Za-z]+)`/g.test(e)?s.parse(e,u):s.parseInline(e,u).replace(/(\r?\n){2}/g,"<br>").replace(/\r?\n/g," ")}}},891271:function(e){e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function e(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=1===o?t:"".concat(t,"-").concat(o);return n[i]?e(t,n,o+1):(n[i]=!0,i)}(encodeURI(e.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g,"").replace(/[!@#$%^&*()=_+[\]{}`~;:'"|,.<>/?\s]+/g,"-").replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])\uFE0F?/g,"").replace(/-+/g,"-").replace(/^-|-$/g,"")),t)}},79665:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}}),n(470079);var o=n(512589),i=n(412007),a=JSON.parse('{"props":{"checked":{"type":{"name":"bool"}},"checkedIcon":{"type":{"name":"node"}},"classes":{"type":{"name":"object"},"additionalInfo":{"cssApi":true}},"color":{"type":{"name":"union","description":"\'default\'<br>&#124;&nbsp;\'primary\'<br>&#124;&nbsp;\'secondary\'<br>&#124;&nbsp;\'error\'<br>&#124;&nbsp;\'info\'<br>&#124;&nbsp;\'success\'<br>&#124;&nbsp;\'warning\'<br>&#124;&nbsp;string"},"default":"\'primary\'"},"defaultChecked":{"type":{"name":"bool"}},"disabled":{"type":{"name":"bool"}},"disableRipple":{"type":{"name":"bool"},"default":"false"},"edge":{"type":{"name":"enum","description":"\'end\'<br>&#124;&nbsp;\'start\'<br>&#124;&nbsp;false"},"default":"false"},"icon":{"type":{"name":"node"}},"id":{"type":{"name":"string"}},"inputProps":{"type":{"name":"object"}},"inputRef":{"type":{"name":"custom","description":"ref"}},"onChange":{"type":{"name":"func"},"signature":{"type":"function(event: React.ChangeEvent<HTMLInputElement>) => void","describedArgs":["event"]}},"required":{"type":{"name":"bool"},"default":"false"},"size":{"type":{"name":"union","description":"\'medium\'<br>&#124;&nbsp;\'small\'<br>&#124;&nbsp;string"},"default":"\'medium\'"},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"},"additionalInfo":{"sx":true}},"value":{"type":{"name":"any"}}},"name":"Switch","imports":["import Switch from \'@mui/material/Switch\';","import { Switch } from \'@mui/material\';"],"classes":[{"key":"checked","className":"Mui-checked","description":"State class applied to the internal `SwitchBase` component\'s `checked` class.","isGlobal":true},{"key":"colorPrimary","className":"MuiSwitch-colorPrimary","description":"Styles applied to the internal SwitchBase component\'s root element if `color=\\"primary\\"`.","isGlobal":false},{"key":"colorSecondary","className":"MuiSwitch-colorSecondary","description":"Styles applied to the internal SwitchBase component\'s root element if `color=\\"secondary\\"`.","isGlobal":false},{"key":"disabled","className":"Mui-disabled","description":"State class applied to the internal SwitchBase component\'s disabled class.","isGlobal":true},{"key":"edgeEnd","className":"MuiSwitch-edgeEnd","description":"Styles applied to the root element if `edge=\\"end\\"`.","isGlobal":false},{"key":"edgeStart","className":"MuiSwitch-edgeStart","description":"Styles applied to the root element if `edge=\\"start\\"`.","isGlobal":false},{"key":"input","className":"MuiSwitch-input","description":"Styles applied to the internal SwitchBase component\'s input element.","isGlobal":false},{"key":"root","className":"MuiSwitch-root","description":"Styles applied to the root element.","isGlobal":false},{"key":"sizeMedium","className":"MuiSwitch-sizeMedium","description":"Styles applied to the root element if `size=\\"medium\\"`.","isGlobal":false},{"key":"sizeSmall","className":"MuiSwitch-sizeSmall","description":"Styles applied to the root element if `size=\\"small\\"`.","isGlobal":false},{"key":"switchBase","className":"MuiSwitch-switchBase","description":"Styles applied to the internal `SwitchBase` component\'s `root` class.","isGlobal":false},{"key":"thumb","className":"MuiSwitch-thumb","description":"Styles used to create the thumb passed to the internal `SwitchBase` component `icon` prop.","isGlobal":false},{"key":"track","className":"MuiSwitch-track","description":"Styles applied to the track element.","isGlobal":false}],"spread":false,"themeDefaultProps":false,"muiName":"MuiSwitch","forwardsRefTo":"HTMLSpanElement","filename":"/packages/mui-material/src/Switch/Switch.js","inheritance":{"component":"IconButton","pathname":"/material-ui/api/icon-button/"},"demos":"<ul><li><a href=\\"/material-ui/react-switch/\\">Switch</a></li>\\n<li><a href=\\"/material-ui/react-transfer-list/\\">Transfer List</a></li></ul>","cssComponent":false}'),c=n(735250);function s(e){var t=e.descriptions,n=e.pageContent;return(0,c.jsx)(o.Z,{descriptions:t,pageContent:n})}s.getInitialProps=function(){var e=n(13504);return{descriptions:(0,i.Z)(e),pageContent:a}}},412007:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var o=n(705794),i=n(187509),a=/-([a-z]{2})\.json$/;function c(e){var t={},n={},c=[];return e.keys().forEach(function(e){e.match(a)?c.push(e):c=[e].concat(c)}),c.forEach(function(s){var r=s.match(a),l=null!==r?r[1]:"en",u=e(s)||null;if(null!==u&&u.componentDescription){var d=[],p=(0,o.createRender)({headingHashes:t,toc:d,userLanguage:l,location:c,options:{ignoreLanguagePages:i.LANGUAGES_IGNORE_PAGES,env:{SOURCE_CODE_REPO:""}}});u.componentDescription=p(u.componentDescription),u.componentDescriptionToc=d}n[l]=u}),n}},203656:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/api/switch",function(){return n(79665)}])},13504:function(e,t,n){var o={"./switch.json":155109};function i(e){return n(a(e))}function a(e){if(!n.o(o,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=a,e.exports=i,i.id=13504},36790:function(e,t,n){"use strict";function o(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return o}})},376757:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var o=n(136729),i=n(267765),a=n(861963);function c(e){return(c=i?a.bind():function(e){return e.__proto__||a(e)})(e)}function s(){try{var e=!Boolean.prototype.valueOf.call(o(Boolean,[],function(){}))}catch(e){}return(s=function(){return!!e})()}var r=n(931467),l=n(36790);function u(e){var t=s();return function(){var n,i=c(e);if(t){var a=c(this).constructor;n=o(i,arguments,a)}else n=i.apply(this,arguments);return function(e,t){if(t&&("object"==(0,r.Z)(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return(0,l.Z)(e)}(this,n)}}},206782:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var o=n(17800),i=n(303268),a=n(909101);function c(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=o(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i(e,"prototype",{writable:!1}),t&&(0,a.Z)(e,t)}},909101:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(267765);function i(e,t){return(i=o?o.bind():function(e,t){return e.__proto__=t,e})(e,t)}},155109:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"checked":{"description":"If <code>true</code>, the component is checked."},"checkedIcon":{"description":"The icon to display when the component is checked."},"classes":{"description":"Override or extend the styles applied to the component."},"color":{"description":"The color of the component. It supports both default and custom theme colors, which can be added as shown in the <a href=\\"https://mui.com/material-ui/customization/palette/#custom-colors\\">palette customization guide</a>."},"defaultChecked":{"description":"The default checked state. Use when the component is not controlled."},"disabled":{"description":"If <code>true</code>, the component is disabled."},"disableRipple":{"description":"If <code>true</code>, the ripple effect is disabled."},"edge":{"description":"If given, uses a negative margin to counteract the padding on one side (this is often helpful for aligning the left or right side of the icon with content above or below, without ruining the border size and shape)."},"icon":{"description":"The icon to display when the component is unchecked."},"id":{"description":"The id of the <code>input</code> element."},"inputProps":{"description":"<a href=\\"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes\\">Attributes</a> applied to the <code>input</code> element."},"inputRef":{"description":"Pass a ref to the <code>input</code> element."},"onChange":{"description":"Callback fired when the state is changed.","typeDescriptions":{"event":"The event source of the callback. You can pull out the new value by accessing <code>event.target.value</code> (string). You can pull out the new checked state by accessing <code>event.target.checked</code> (boolean)."}},"required":{"description":"If <code>true</code>, the <code>input</code> element is required."},"size":{"description":"The size of the component. <code>small</code> is equivalent to the dense switch styling."},"sx":{"description":"The system prop that allows defining system overrides as well as additional CSS styles."},"value":{"description":"The value of the component. The DOM API casts this to a string. The browser uses &quot;on&quot; as the default value."}},"classDescriptions":{"checked":{"description":"State class applied to {{nodeName}}.","nodeName":"the internal <code>SwitchBase</code> component&#39;s <code>checked</code> class"},"colorPrimary":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the internal SwitchBase component&#39;s root element","conditions":"<code>color=\\"primary\\"</code>"},"colorSecondary":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the internal SwitchBase component&#39;s root element","conditions":"<code>color=\\"secondary\\"</code>"},"disabled":{"description":"State class applied to {{nodeName}}.","nodeName":"the internal SwitchBase component&#39;s disabled class"},"edgeEnd":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>edge=\\"end\\"</code>"},"edgeStart":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>edge=\\"start\\"</code>"},"input":{"description":"Styles applied to {{nodeName}}.","nodeName":"the internal SwitchBase component&#39;s input element"},"root":{"description":"Styles applied to the root element."},"sizeMedium":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>size=\\"medium\\"</code>"},"sizeSmall":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>size=\\"small\\"</code>"},"switchBase":{"description":"Styles applied to {{nodeName}}.","nodeName":"the internal <code>SwitchBase</code> component&#39;s <code>root</code> class"},"thumb":{"description":"Styles used to create the thumb passed to the internal <code>SwitchBase</code> component <code>icon</code> prop."},"track":{"description":"Styles applied to {{nodeName}}.","nodeName":"the track element"}}}')}},function(e){e.O(0,[49774,9535,73976,97146,59727,85925,17376,17103,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,42378,20759,12589,92888,40179],function(){return e(e.s=203656)}),_N_E=e.O()}]);