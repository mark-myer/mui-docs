(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[39167],{696689:function(e,t,o){var n=o(371017)(function(e,t,o){return e+(o?"-":"")+t.toLowerCase()});e.exports=n},705794:function(e,t,o){var n=o(117431),i=n.createRender,a=n.getHeaders,s=n.getTitle,r=n.renderMarkdown;e.exports={createRender:i,getHeaders:a,getTitle:s,renderMarkdown:r}},117431:function(e,t,o){var n=o(582103).default,i=o(436578),a=o(113065).default,s=o(95018).default,r=o(315599).marked,c=o(891271),l=o(520740),d={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,headerPrefix:!1,headerIds:!1,mangle:!1},u=/---[\r\n]([\s\S]*)[\r\n]---/,p=/# (.*)[\r\n]/,m=/<p class="description">([\s\S]*?)<\/p>/,h=/(.*?):[\r\n]?\s+(\[[^\]]+\]|.*)/g,f=/^\s*$/,b=/[&<>"']/,g=/[&<>"']/g,F=/[<>"']|&(?!#?\w+;)/,v=/[<>"']|&(?!#?\w+;)/g,y={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},D=function(e){return y[e]};function C(e,t){if(t){if(b.test(e))return e.replace(g,D)}else if(F.test(e))return e.replace(v,D);return e}var k=["https://m2.material.io/","https://m3.material.io/","https://material.io/","https://getbootstrap.com/","https://icons.getbootstrap.com/","https://pictogrammers.com/","https://www.w3.org/","https://tailwindcss.com/","https://heroicons.com/","https://react-icons.github.io/","https://fontawesome.com/","https://www.radix-ui.com/","https://react-spectrum.adobe.com/","https://headlessui.com/","https://refine.dev/","https://scaffoldhub.io/","https://marmelab.com/"];e.exports={createRender:function(e){var t=e.headingHashes,o=e.toc,a=e.userLanguage,s=e.options,u={},p=-1;return function(m){var h=new r.Renderer;return h.heading=function(e,n){if(1===n||n>=4)return"<h".concat(n,">").concat(e,"</h").concat(n,">");var s,r=e.replace(/<a\b[^>]*>/gi,"").replace(/<\/a>/gi,"");r=r.replace(/<code\b[^>]*>/gi,"").replace(/<\/code>/gi,""),"en"===a?s=c(r,t):(p+=1,(s=i(t)[p])||(s=c(r,u)));var l=r.replace(/([^\s]\()/g,"$1&#8203;");if(2===n)o.push({text:l,level:n,hash:s,children:[]});else if(3===n){if(!o[o.length-1])throw Error("docs-infra: Missing parent level for: ".concat(r,"\n"));o[o.length-1].children.push({text:l,level:n,hash:s})}return["<h".concat(n,' id="').concat(s,'"><a href="#').concat(s,'" class="title-link-to-anchor">').concat(e,'<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a>'),'<button title="Post a comment" class="comment-link" data-feedback-hash="'.concat(s,'">'),'<svg><use xlink:href="#comment-link-icon" /></svg>',"</button>","</h".concat(n,">")].join("")},h.link=function(t,o,n){var i="";o&&(i+=' title="'.concat(o,'"')),k.some(function(e){return -1!==t.indexOf(e)})&&(i=' target="_blank" rel="noopener nofollow"');var r=t;return function(e,t,o){var n=new URL(e,"https://mui.com/");if(/\/{2,}$/.test(n.pathname))throw Error(["docs-infra: Duplicated trailing slashes. The following link:","[".concat(t,"](").concat(e,") in ").concat(o.location," has duplicated trailing slashes, please only add one."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("mui.com"===n.host){if("/"!==n.pathname[n.pathname.length-1])throw Error(["docs-infra: Missing trailing slash. The following link:","[".concat(t,"](").concat(e,") in ").concat(o.location," is missing a trailing slash, please add it."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("#"!==e[0]&&!(e.startsWith("https://")||e.startsWith("http://"))&&"/"!==e[0])throw Error(["docs-infra: Missing leading slash. The following link:","[".concat(t,"](").concat(e,") in ").concat(o.location," is missing a leading slash, please add it."),""].join("\n"))}}(t,n,e),"en"===a||0!==t.indexOf("/")||s.ignoreLanguagePages(t)||(r="/".concat(a).concat(t)),r.startsWith("".concat(s.env.SOURCE_CODE_REPO,"/blob/-/"))&&(r=r.replace("".concat(s.env.SOURCE_CODE_REPO,"/blob/-/"),"".concat(s.env.SOURCE_CODE_REPO,"/blob/v").concat(s.env.LIB_VERSION,"/"))),'<a href="'.concat(r,'"').concat(i,">").concat(n,"</a>")},h.code=function(e,t,o){var n,i=(t||"").match(/\S*/)[0],a=null===(n=(t||"").match(/title="([^"]*)"/))||void 0===n?void 0:n[1],s=l(e,i);return(null!=s&&s!==e&&(o=!0,e=s),e="".concat(e.replace(/\n$/,""),"\n"),i)?'<div class="MuiCode-root">'.concat(a?'<div class="MuiCode-title">'.concat(a,"</div>"):"",'<pre><code class="language-').concat(C(i,!0),'">').concat(o?e:C(e,!0),"</code></pre>").concat('<button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>',"\n"):"<pre><code>".concat(o?e:C(e,!0),"</code></pre>\n")},r.use({extensions:[{name:"callout",level:"block",start:function(e){var t=e.match(/:::/);return t?t.index:void 0},tokenizer:function(e){var t=/^ {0,3}(:{3,}(?=[^:\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~:]* *(?=\n|$)|$)/.exec(e);if(t){var o={type:"callout",raw:t[0],text:t[3].trim(),severity:t[2],tokens:[]};return this.lexer.blockTokens(o.text,o.tokens),o}},renderer:function(e){return'<aside class="MuiCallout-root MuiCallout-'.concat(e.severity,'">\n            ').concat(["info","success","warning","error"].includes(e.severity)?['<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">','<use class="MuiCode-copied-icon" xlink:href="#'.concat(e.severity,'-icon" />'),"</svg>"].join("\n"):"",'\n            <div class="MuiCallout-content">\n            ').concat(this.parser.parse(e.tokens),"\n</div></aside>")}}]}),r(m,n(n({},d),{},{renderer:h}))}},getContents:function(e){return e.replace(u,"").split(/^{{("(?:demo|component)":.*)}}$/gm).flatMap(function(e){return e.split(/^(<codeblock(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/codeblock>)$/gm)}).flatMap(function(e){return e.split(/^(<featureList(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/featureList>)$/gm)}).filter(function(e){return!f.test(e)})},getDescription:function(e){var t=e.match(m);if(null!==t)return t[1].trim().replace(/`/g,"")},getCodeblock:function(e){if(e.startsWith("<codeblock")){var t,o=null===(t=e.match(/^<codeblock [^>]*storageKey=["|'](\S*)["|'].*>/m))||void 0===t?void 0:t[1];return{type:"codeblock",data:s(e.matchAll(/^```((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*) ((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)\n((?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\n```/gm)).map(function(e){var t=a(e,4);return{language:t[1],tab:t[2],code:t[3]}}).filter(function(e){return void 0!==e.tab&&!f.test(e.code)}),storageKey:o}}},getFeatureList:function(e){if(e.startsWith("<featureList"))return['<ul class="feature-list">'].concat(s(e.split("\n").filter(function(e){return e.startsWith("- ")}).map(function(e){return e.slice(2)}).map(function(e){return"<li>".concat(e,"</li>")})),["</ul>"]).join("")},getHeaders:function(e){var t=e.match(u);if(!t)return{components:[]};t=t[1];try{for(var o,n={};null!==(o=h.exec(t));){var i=o[1],a=o[2].replace(/(.*)/,"$1");"["===a[0]?(a=(a=a.replace(/'/g,'"')).replace(/,\s+\]$/g,"]"),n[i]=JSON.parse(a)):n[i]=a.replace(/^'|'$/g,"")}return n.components?n.components=n.components.split(",").map(function(e){return e.trim()}).sort():n.components=[],n.hooks?n.hooks=n.hooks.split(",").map(function(e){return e.trim()}).sort():n.hooks=[],n}catch(e){throw Error("docs-infra: ".concat(e.message," in getHeader(markdown) with markdown: \n\n").concat(t,"\n"))}},getTitle:function(e){var t=e.match(p);return null===t?"":t[1].replace(/`/g,"")},renderMarkdown:function(e){return/[-*+] `([A-Za-z]+)`/g.test(e)?r.parse(e,d):r.parseInline(e,d).replace(/(\r?\n){2}/g,"<br>").replace(/\r?\n/g," ")}}},891271:function(e){e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function e(t,o){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=1===n?t:"".concat(t,"-").concat(n);return o[i]?e(t,o,n+1):(o[i]=!0,i)}(encodeURI(e.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g,"").replace(/[!@#$%^&*()=_+[\]{}`~;:'"|,.<>/?\s]+/g,"-").replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])\uFE0F?/g,"").replace(/-+/g,"-").replace(/^-|-$/g,"")),t)}},219905:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return r}}),o(470079);var n=o(512589),i=o(412007),a=JSON.parse('{"props":{"checked":{"type":{"name":"bool"}},"checkedIcon":{"type":{"name":"node"}},"className":{"type":{"name":"string"}},"color":{"type":{"name":"union","description":"\'danger\'<br>&#124;&nbsp;\'primary\'<br>&#124;&nbsp;\'success\'<br>&#124;&nbsp;\'warning\'<br>&#124;&nbsp;string"},"default":"\'neutral\'","additionalInfo":{"joy-color":true}},"component":{"type":{"name":"elementType"}},"defaultChecked":{"type":{"name":"bool"}},"disabled":{"type":{"name":"bool"}},"disableIcon":{"type":{"name":"bool"},"default":"false"},"label":{"type":{"name":"node"}},"name":{"type":{"name":"string"}},"onChange":{"type":{"name":"func"},"signature":{"type":"function(event: React.ChangeEvent<HTMLInputElement>) => void","describedArgs":["event"]}},"overlay":{"type":{"name":"bool"},"default":"false"},"readOnly":{"type":{"name":"bool"}},"required":{"type":{"name":"bool"}},"size":{"type":{"name":"union","description":"\'sm\'<br>&#124;&nbsp;\'md\'<br>&#124;&nbsp;\'lg\'<br>&#124;&nbsp;string"},"default":"\'md\'","additionalInfo":{"joy-size":true}},"slotProps":{"type":{"name":"shape","description":"{ action?: func<br>&#124;&nbsp;object, icon?: func<br>&#124;&nbsp;object, input?: func<br>&#124;&nbsp;object, label?: func<br>&#124;&nbsp;object, radio?: func<br>&#124;&nbsp;object, root?: func<br>&#124;&nbsp;object }"},"default":"{}"},"slots":{"type":{"name":"shape","description":"{ action?: elementType, icon?: elementType, input?: elementType, label?: elementType, radio?: elementType, root?: elementType }"},"default":"{}","additionalInfo":{"slotsApi":true}},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"},"additionalInfo":{"sx":true}},"uncheckedIcon":{"type":{"name":"node"}},"value":{"type":{"name":"any"}},"variant":{"type":{"name":"union","description":"\'outlined\'<br>&#124;&nbsp;\'plain\'<br>&#124;&nbsp;\'soft\'<br>&#124;&nbsp;\'solid\'<br>&#124;&nbsp;string"},"default":"\'outlined\'","additionalInfo":{"joy-variant":true}}},"name":"Radio","imports":["import Radio from \'@mui/joy/Radio\';","import { Radio } from \'@mui/joy\';"],"slots":[{"name":"root","description":"The component that renders the root.","default":"\'span\'","class":"MuiRadio-root"},{"name":"radio","description":"The component that renders the radio.","default":"\'span\'","class":"MuiRadio-radio"},{"name":"icon","description":"The component that renders the icon.","default":"\'span\'","class":"MuiRadio-icon"},{"name":"action","description":"The component that renders the action.","default":"\'span\'","class":"MuiRadio-action"},{"name":"input","description":"The component that renders the input.","default":"\'input\'","class":"MuiRadio-input"},{"name":"label","description":"The component that renders the label.","default":"\'label\'","class":"MuiRadio-label"}],"classes":[{"key":"checked","className":"Mui-checked","description":"State class applied to the root, action slots if `checked`.","isGlobal":true},{"key":"colorContext","className":"MuiRadio-colorContext","description":"Class name applied to the root element when color inversion is triggered.","isGlobal":false},{"key":"colorDanger","className":"MuiRadio-colorDanger","description":"Class name applied to the root element if `color=\\"danger\\"`.","isGlobal":false},{"key":"colorNeutral","className":"MuiRadio-colorNeutral","description":"Class name applied to the root element if `color=\\"neutral\\"`.","isGlobal":false},{"key":"colorPrimary","className":"MuiRadio-colorPrimary","description":"Class name applied to the root element if `color=\\"primary\\"`.","isGlobal":false},{"key":"colorSuccess","className":"MuiRadio-colorSuccess","description":"Class name applied to the root element if `color=\\"success\\"`.","isGlobal":false},{"key":"colorWarning","className":"MuiRadio-colorWarning","description":"Class name applied to the root element if `color=\\"warning\\"`.","isGlobal":false},{"key":"disabled","className":"Mui-disabled","description":"State class applied to the root, action slots if `disabled`.","isGlobal":true},{"key":"focusVisible","className":"Mui-focusVisible","description":"Class name applied to the root element if the switch has visible focus","isGlobal":true},{"key":"sizeLg","className":"MuiRadio-sizeLg","description":"Class name applied to the root element if `size=\\"lg\\"`.","isGlobal":false},{"key":"sizeMd","className":"MuiRadio-sizeMd","description":"Class name applied to the root element if `size=\\"md\\"`.","isGlobal":false},{"key":"sizeSm","className":"MuiRadio-sizeSm","description":"Class name applied to the root element if `size=\\"sm\\"`.","isGlobal":false},{"key":"variantOutlined","className":"MuiRadio-variantOutlined","description":"Class name applied to the root element if `variant=\\"outlined\\"`.","isGlobal":false},{"key":"variantSoft","className":"MuiRadio-variantSoft","description":"Class name applied to the root element if `variant=\\"soft\\"`.","isGlobal":false},{"key":"variantSolid","className":"MuiRadio-variantSolid","description":"Class name applied to the root element if `variant=\\"solid\\"`.","isGlobal":false}],"spread":false,"themeDefaultProps":true,"muiName":"JoyRadio","forwardsRefTo":"HTMLSpanElement","filename":"/packages/mui-joy/src/Radio/Radio.tsx","inheritance":null,"demos":"<ul><li><a href=\\"/joy-ui/react-radio-button/\\">Radio</a></li></ul>","cssComponent":false}'),s=o(735250);function r(e){var t=e.descriptions,o=e.pageContent;return(0,s.jsx)(n.Z,{descriptions:t,pageContent:o})}r.getInitialProps=function(){var e=o(77771);return{descriptions:(0,i.Z)(e),pageContent:a}}},412007:function(e,t,o){"use strict";o.d(t,{Z:function(){return s}});var n=o(705794),i=o(187509),a=/-([a-z]{2})\.json$/;function s(e){var t={},o={},s=[];return e.keys().forEach(function(e){e.match(a)?s.push(e):s=[e].concat(s)}),s.forEach(function(r){var c=r.match(a),l=null!==c?c[1]:"en",d=e(r)||null;if(null!==d&&d.componentDescription){var u=[],p=(0,n.createRender)({headingHashes:t,toc:u,userLanguage:l,location:s,options:{ignoreLanguagePages:i.LANGUAGES_IGNORE_PAGES,env:{SOURCE_CODE_REPO:""}}});d.componentDescription=p(d.componentDescription),d.componentDescriptionToc=u}o[l]=d}),o}},767481:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/joy-ui/api/radio",function(){return o(219905)}])},77771:function(e,t,o){var n={"./radio.json":292601};function i(e){return o(a(e))}function a(e){if(!o.o(n,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=a,e.exports=i,i.id=77771},36790:function(e,t,o){"use strict";function n(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}o.d(t,{Z:function(){return n}})},376757:function(e,t,o){"use strict";o.d(t,{Z:function(){return d}});var n=o(136729),i=o(267765),a=o(861963);function s(e){return(s=i?a.bind():function(e){return e.__proto__||a(e)})(e)}function r(){try{var e=!Boolean.prototype.valueOf.call(n(Boolean,[],function(){}))}catch(e){}return(r=function(){return!!e})()}var c=o(931467),l=o(36790);function d(e){var t=r();return function(){var o,i=s(e);if(t){var a=s(this).constructor;o=n(i,arguments,a)}else o=i.apply(this,arguments);return function(e,t){if(t&&("object"==(0,c.Z)(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return(0,l.Z)(e)}(this,o)}}},206782:function(e,t,o){"use strict";o.d(t,{Z:function(){return s}});var n=o(17800),i=o(303268),a=o(909101);function s(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=n(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i(e,"prototype",{writable:!1}),t&&(0,a.Z)(e,t)}},909101:function(e,t,o){"use strict";o.d(t,{Z:function(){return i}});var n=o(267765);function i(e,t){return(i=n?n.bind():function(e,t){return e.__proto__=t,e})(e,t)}},292601:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"checked":{"description":"If <code>true</code>, the component is checked."},"checkedIcon":{"description":"The icon to display when the component is checked."},"className":{"description":"Class name applied to the root element."},"color":{"description":"The color of the component. It supports those theme colors that make sense for this component."},"component":{"description":"The component used for the root node. Either a string to use a HTML element or a component."},"defaultChecked":{"description":"The default checked state. Use when the component is not controlled."},"disabled":{"description":"If <code>true</code>, the component is disabled."},"disableIcon":{"description":"If <code>true</code>, the checked icon is removed and the selected variant is applied on the <code>action</code> element instead."},"label":{"description":"The label element at the end the radio."},"name":{"description":"The <code>name</code> attribute of the input."},"onChange":{"description":"Callback fired when the state is changed.","typeDescriptions":{"event":"The event source of the callback. You can pull out the new value by accessing <code>event.target.value</code> (string). You can pull out the new checked state by accessing <code>event.target.checked</code> (boolean)."}},"overlay":{"description":"If <code>true</code>, the root element&#39;s position is set to initial which allows the action area to fill the nearest positioned parent. This prop is useful for composing Radio with ListItem component."},"readOnly":{"description":"If <code>true</code>, the component is read only."},"required":{"description":"If <code>true</code>, the <code>input</code> element is required."},"size":{"description":"The size of the component."},"slotProps":{"description":"The props used for each slot inside."},"slots":{"description":"The components used for each slot inside."},"sx":{"description":"The system prop that allows defining system overrides as well as additional CSS styles."},"uncheckedIcon":{"description":"The icon to display when the component is not checked."},"value":{"description":"The value of the component. The DOM API casts this to a string."},"variant":{"description":"The <a href=\\"https://mui.com/joy-ui/main-features/global-variants/\\">global variant</a> to use."}},"classDescriptions":{"checked":{"description":"State class applied to {{nodeName}}, {{conditions}}.","nodeName":"the root","conditions":"action slots if <code>checked</code>"},"colorContext":{"description":"Class name applied to {{nodeName}} when {{conditions}}.","nodeName":"the root element","conditions":"color inversion is triggered"},"colorDanger":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"danger\\"</code>"},"colorNeutral":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"neutral\\"</code>"},"colorPrimary":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"primary\\"</code>"},"colorSuccess":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"success\\"</code>"},"colorWarning":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"warning\\"</code>"},"disabled":{"description":"State class applied to {{nodeName}}, {{conditions}}.","nodeName":"the root","conditions":"action slots if <code>disabled</code>"},"focusVisible":{"description":"Class name applied to the root element if the switch has visible focus"},"sizeLg":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>size=\\"lg\\"</code>"},"sizeMd":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>size=\\"md\\"</code>"},"sizeSm":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>size=\\"sm\\"</code>"},"variantOutlined":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"outlined\\"</code>"},"variantSoft":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"soft\\"</code>"},"variantSolid":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"solid\\"</code>"}},"slotDescriptions":{"action":"The component that renders the action.","icon":"The component that renders the icon.","input":"The component that renders the input.","label":"The component that renders the label.","radio":"The component that renders the radio.","root":"The component that renders the root."}}')}},function(e){e.O(0,[49774,9535,73976,97146,59727,85925,17376,17103,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,42378,20759,12589,92888,40179],function(){return e(e.s=767481)}),_N_E=e.O()}]);