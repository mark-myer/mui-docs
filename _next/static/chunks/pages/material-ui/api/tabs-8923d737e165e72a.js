(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7098],{696689:function(e,t,o){var n=o(371017)(function(e,t,o){return e+(o?"-":"")+t.toLowerCase()});e.exports=n},705794:function(e,t,o){var n=o(117431),a=n.createRender,i=n.getHeaders,r=n.getTitle,l=n.renderMarkdown;e.exports={createRender:a,getHeaders:i,getTitle:r,renderMarkdown:l}},117431:function(e,t,o){var n=o(582103).default,a=o(436578),i=o(113065).default,r=o(95018).default,l=o(315599).marked,s=o(891271),c=o(520740),u={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,headerPrefix:!1,headerIds:!1,mangle:!1},d=/---[\r\n]([\s\S]*)[\r\n]---/,p=/# (.*)[\r\n]/,f=/<p class="description">([\s\S]*?)<\/p>/,h=/(.*?):[\r\n]?\s+(\[[^\]]+\]|.*)/g,m=/^\s*$/,b=/[&<>"']/,F=/[&<>"']/g,v=/[<>"']|&(?!#?\w+;)/,g=/[<>"']|&(?!#?\w+;)/g,y={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},D=function(e){return y[e]};function w(e,t){if(t){if(b.test(e))return e.replace(F,D)}else if(v.test(e))return e.replace(g,D);return e}var S=["https://m2.material.io/","https://m3.material.io/","https://material.io/","https://getbootstrap.com/","https://icons.getbootstrap.com/","https://pictogrammers.com/","https://www.w3.org/","https://tailwindcss.com/","https://heroicons.com/","https://react-icons.github.io/","https://fontawesome.com/","https://www.radix-ui.com/","https://react-spectrum.adobe.com/","https://headlessui.com/","https://refine.dev/","https://scaffoldhub.io/","https://marmelab.com/"];e.exports={createRender:function(e){var t=e.headingHashes,o=e.toc,i=e.userLanguage,r=e.options,d={},p=-1;return function(f){var h=new l.Renderer;return h.heading=function(e,n){if(1===n||n>=4)return"<h".concat(n,">").concat(e,"</h").concat(n,">");var r,l=e.replace(/<a\b[^>]*>/gi,"").replace(/<\/a>/gi,"");l=l.replace(/<code\b[^>]*>/gi,"").replace(/<\/code>/gi,""),"en"===i?r=s(l,t):(p+=1,(r=a(t)[p])||(r=s(l,d)));var c=l.replace(/([^\s]\()/g,"$1&#8203;");if(2===n)o.push({text:c,level:n,hash:r,children:[]});else if(3===n){if(!o[o.length-1])throw Error("docs-infra: Missing parent level for: ".concat(l,"\n"));o[o.length-1].children.push({text:c,level:n,hash:r})}return["<h".concat(n,' id="').concat(r,'"><a href="#').concat(r,'" class="title-link-to-anchor">').concat(e,'<span class="anchor-icon"><svg><use xlink:href="#anchor-link-icon" /></svg></span></a>'),'<button title="Post a comment" class="comment-link" data-feedback-hash="'.concat(r,'">'),'<svg><use xlink:href="#comment-link-icon" /></svg>',"</button>","</h".concat(n,">")].join("")},h.link=function(t,o,n){var a="";o&&(a+=' title="'.concat(o,'"')),S.some(function(e){return -1!==t.indexOf(e)})&&(a=' target="_blank" rel="noopener nofollow"');var l=t;return function(e,t,o){var n=new URL(e,"https://mui.com/");if(/\/{2,}$/.test(n.pathname))throw Error(["docs-infra: Duplicated trailing slashes. The following link:","[".concat(t,"](").concat(e,") in ").concat(o.location," has duplicated trailing slashes, please only add one."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("mui.com"===n.host){if("/"!==n.pathname[n.pathname.length-1])throw Error(["docs-infra: Missing trailing slash. The following link:","[".concat(t,"](").concat(e,") in ").concat(o.location," is missing a trailing slash, please add it."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("#"!==e[0]&&!(e.startsWith("https://")||e.startsWith("http://"))&&"/"!==e[0])throw Error(["docs-infra: Missing leading slash. The following link:","[".concat(t,"](").concat(e,") in ").concat(o.location," is missing a leading slash, please add it."),""].join("\n"))}}(t,n,e),"en"===i||0!==t.indexOf("/")||r.ignoreLanguagePages(t)||(l="/".concat(i).concat(t)),l.startsWith("".concat(r.env.SOURCE_CODE_REPO,"/blob/-/"))&&(l=l.replace("".concat(r.env.SOURCE_CODE_REPO,"/blob/-/"),"".concat(r.env.SOURCE_CODE_REPO,"/blob/v").concat(r.env.LIB_VERSION,"/"))),'<a href="'.concat(l,'"').concat(a,">").concat(n,"</a>")},h.code=function(e,t,o){var n,a=(t||"").match(/\S*/)[0],i=null===(n=(t||"").match(/title="([^"]*)"/))||void 0===n?void 0:n[1],r=c(e,a);return(null!=r&&r!==e&&(o=!0,e=r),e="".concat(e.replace(/\n$/,""),"\n"),a)?'<div class="MuiCode-root">'.concat(i?'<div class="MuiCode-title">'.concat(i,"</div>"):"",'<pre><code class="language-').concat(w(a,!0),'">').concat(o?e:w(e,!0),"</code></pre>").concat('<button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><span class="MuiCode-copy-label">Copy</span><span class="MuiCode-copied-label">Copied</span><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>',"\n"):"<pre><code>".concat(o?e:w(e,!0),"</code></pre>\n")},l.use({extensions:[{name:"callout",level:"block",start:function(e){var t=e.match(/:::/);return t?t.index:void 0},tokenizer:function(e){var t=/^ {0,3}(:{3,}(?=[^:\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~:]* *(?=\n|$)|$)/.exec(e);if(t){var o={type:"callout",raw:t[0],text:t[3].trim(),severity:t[2],tokens:[]};return this.lexer.blockTokens(o.text,o.tokens),o}},renderer:function(e){return'<aside class="MuiCallout-root MuiCallout-'.concat(e.severity,'">\n            ').concat(["info","success","warning","error"].includes(e.severity)?['<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">','<use class="MuiCode-copied-icon" xlink:href="#'.concat(e.severity,'-icon" />'),"</svg>"].join("\n"):"",'\n            <div class="MuiCallout-content">\n            ').concat(this.parser.parse(e.tokens),"\n</div></aside>")}}]}),l(f,n(n({},u),{},{renderer:h}))}},getContents:function(e){return e.replace(d,"").split(/^{{("(?:demo|component)":.*)}}$/gm).flatMap(function(e){return e.split(/^(<codeblock(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/codeblock>)$/gm)}).flatMap(function(e){return e.split(/^(<featureList(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/featureList>)$/gm)}).filter(function(e){return!m.test(e)})},getDescription:function(e){var t=e.match(f);if(null!==t)return t[1].trim().replace(/`/g,"")},getCodeblock:function(e){if(e.startsWith("<codeblock")){var t,o=null===(t=e.match(/^<codeblock [^>]*storageKey=["|'](\S*)["|'].*>/m))||void 0===t?void 0:t[1];return{type:"codeblock",data:r(e.matchAll(/^```((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*) ((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)\n((?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\n```/gm)).map(function(e){var t=i(e,4);return{language:t[1],tab:t[2],code:t[3]}}).filter(function(e){return void 0!==e.tab&&!m.test(e.code)}),storageKey:o}}},getFeatureList:function(e){if(e.startsWith("<featureList"))return['<ul class="feature-list">'].concat(r(e.split("\n").filter(function(e){return e.startsWith("- ")}).map(function(e){return e.slice(2)}).map(function(e){return"<li>".concat(e,"</li>")})),["</ul>"]).join("")},getHeaders:function(e){var t=e.match(d);if(!t)return{components:[]};t=t[1];try{for(var o,n={};null!==(o=h.exec(t));){var a=o[1],i=o[2].replace(/(.*)/,"$1");"["===i[0]?(i=(i=i.replace(/'/g,'"')).replace(/,\s+\]$/g,"]"),n[a]=JSON.parse(i)):n[a]=i.replace(/^'|'$/g,"")}return n.components?n.components=n.components.split(",").map(function(e){return e.trim()}).sort():n.components=[],n.hooks?n.hooks=n.hooks.split(",").map(function(e){return e.trim()}).sort():n.hooks=[],n}catch(e){throw Error("docs-infra: ".concat(e.message," in getHeader(markdown) with markdown: \n\n").concat(t,"\n"))}},getTitle:function(e){var t=e.match(p);return null===t?"":t[1].replace(/`/g,"")},renderMarkdown:function(e){return/[-*+] `([A-Za-z]+)`/g.test(e)?l.parse(e,u):l.parseInline(e,u).replace(/(\r?\n){2}/g,"<br>").replace(/\r?\n/g," ")}}},891271:function(e){e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function e(t,o){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=1===n?t:"".concat(t,"-").concat(n);return o[a]?e(t,o,n+1):(o[a]=!0,a)}(encodeURI(e.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g,"").replace(/[!@#$%^&*()=_+[\]{}`~;:'"|,.<>/?\s]+/g,"-").replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])\uFE0F?/g,"").replace(/-+/g,"-").replace(/^-|-$/g,"")),t)}},301570:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return l}}),o(470079);var n=o(512589),a=o(412007),i=JSON.parse('{"props":{"action":{"type":{"name":"custom","description":"ref"}},"allowScrollButtonsMobile":{"type":{"name":"bool"},"default":"false"},"aria-label":{"type":{"name":"string"}},"aria-labelledby":{"type":{"name":"string"}},"centered":{"type":{"name":"bool"},"default":"false"},"children":{"type":{"name":"node"}},"classes":{"type":{"name":"object"},"additionalInfo":{"cssApi":true}},"component":{"type":{"name":"elementType"}},"indicatorColor":{"type":{"name":"union","description":"\'primary\'<br>&#124;&nbsp;\'secondary\'<br>&#124;&nbsp;string"},"default":"\'primary\'"},"onChange":{"type":{"name":"func"},"signature":{"type":"function(event: React.SyntheticEvent, value: any) => void","describedArgs":["event","value"]}},"orientation":{"type":{"name":"enum","description":"\'horizontal\'<br>&#124;&nbsp;\'vertical\'"},"default":"\'horizontal\'"},"ScrollButtonComponent":{"type":{"name":"elementType"},"default":"TabScrollButton"},"scrollButtons":{"type":{"name":"enum","description":"\'auto\'<br>&#124;&nbsp;false<br>&#124;&nbsp;true"},"default":"\'auto\'"},"selectionFollowsFocus":{"type":{"name":"bool"}},"slotProps":{"type":{"name":"shape","description":"{ endScrollButtonIcon?: func<br>&#124;&nbsp;object, startScrollButtonIcon?: func<br>&#124;&nbsp;object }"},"default":"{}"},"slots":{"type":{"name":"shape","description":"{ EndScrollButtonIcon?: elementType, StartScrollButtonIcon?: elementType }"},"default":"{}"},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"},"additionalInfo":{"sx":true}},"TabIndicatorProps":{"type":{"name":"object"},"default":"{}"},"TabScrollButtonProps":{"type":{"name":"object"},"default":"{}"},"textColor":{"type":{"name":"enum","description":"\'inherit\'<br>&#124;&nbsp;\'primary\'<br>&#124;&nbsp;\'secondary\'"},"default":"\'primary\'"},"value":{"type":{"name":"any"}},"variant":{"type":{"name":"enum","description":"\'fullWidth\'<br>&#124;&nbsp;\'scrollable\'<br>&#124;&nbsp;\'standard\'"},"default":"\'standard\'"},"visibleScrollbar":{"type":{"name":"bool"},"default":"false"}},"name":"Tabs","imports":["import Tabs from \'@mui/material/Tabs\';","import { Tabs } from \'@mui/material\';"],"classes":[{"key":"centered","className":"MuiTabs-centered","description":"Styles applied to the flex container element if `centered={true}` & `!variant=\\"scrollable\\"`.","isGlobal":false},{"key":"fixed","className":"MuiTabs-fixed","description":"Styles applied to the tablist element if `!variant=\\"scrollable\\"`\\b\\b\\b.","isGlobal":false},{"key":"flexContainer","className":"MuiTabs-flexContainer","description":"Styles applied to the flex container element.","isGlobal":false},{"key":"flexContainerVertical","className":"MuiTabs-flexContainerVertical","description":"Styles applied to the flex container element if `orientation=\\"vertical\\"`.","isGlobal":false},{"key":"hideScrollbar","className":"MuiTabs-hideScrollbar","description":"Styles applied to the tablist element if `variant=\\"scrollable\\"` and `visibleScrollbar={false}`.","isGlobal":false},{"key":"indicator","className":"MuiTabs-indicator","description":"Styles applied to the TabIndicator component.","isGlobal":false},{"key":"root","className":"MuiTabs-root","description":"Styles applied to the root element.","isGlobal":false},{"key":"scrollableX","className":"MuiTabs-scrollableX","description":"Styles applied to the tablist element if `variant=\\"scrollable\\"` and `orientation=\\"horizontal\\"`.","isGlobal":false},{"key":"scrollableY","className":"MuiTabs-scrollableY","description":"Styles applied to the tablist element if `variant=\\"scrollable\\"` and `orientation=\\"vertical\\"`.","isGlobal":false},{"key":"scrollButtons","className":"MuiTabs-scrollButtons","description":"Styles applied to the ScrollButtonComponent component.","isGlobal":false},{"key":"scrollButtonsHideMobile","className":"MuiTabs-scrollButtonsHideMobile","description":"Styles applied to the ScrollButtonComponent component if `allowScrollButtonsMobile={true}`.","isGlobal":false},{"key":"scroller","className":"MuiTabs-scroller","description":"Styles applied to the tablist element.","isGlobal":false},{"key":"vertical","className":"MuiTabs-vertical","description":"Styles applied to the root element if `orientation=\\"vertical\\"`.","isGlobal":false}],"spread":true,"themeDefaultProps":true,"muiName":"MuiTabs","forwardsRefTo":"HTMLDivElement","filename":"/packages/mui-material/src/Tabs/Tabs.js","inheritance":null,"demos":"<ul><li><a href=\\"/material-ui/react-tabs/\\">Tabs</a></li></ul>","cssComponent":false}'),r=o(735250);function l(e){var t=e.descriptions,o=e.pageContent;return(0,r.jsx)(n.Z,{descriptions:t,pageContent:o})}l.getInitialProps=function(){var e=o(244986);return{descriptions:(0,a.Z)(e),pageContent:i}}},412007:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var n=o(705794),a=o(187509),i=/-([a-z]{2})\.json$/;function r(e){var t={},o={},r=[];return e.keys().forEach(function(e){e.match(i)?r.push(e):r=[e].concat(r)}),r.forEach(function(l){var s=l.match(i),c=null!==s?s[1]:"en",u=e(l)||null;if(null!==u&&u.componentDescription){var d=[],p=(0,n.createRender)({headingHashes:t,toc:d,userLanguage:c,location:r,options:{ignoreLanguagePages:a.LANGUAGES_IGNORE_PAGES,env:{SOURCE_CODE_REPO:""}}});u.componentDescription=p(u.componentDescription),u.componentDescriptionToc=d}o[c]=u}),o}},854538:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/api/tabs",function(){return o(301570)}])},244986:function(e,t,o){var n={"./tabs.json":780680};function a(e){return o(i(e))}function i(e){if(!o.o(n,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id=244986},36790:function(e,t,o){"use strict";function n(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}o.d(t,{Z:function(){return n}})},376757:function(e,t,o){"use strict";o.d(t,{Z:function(){return u}});var n=o(136729),a=o(267765),i=o(861963);function r(e){return(r=a?i.bind():function(e){return e.__proto__||i(e)})(e)}function l(){try{var e=!Boolean.prototype.valueOf.call(n(Boolean,[],function(){}))}catch(e){}return(l=function(){return!!e})()}var s=o(931467),c=o(36790);function u(e){var t=l();return function(){var o,a=r(e);if(t){var i=r(this).constructor;o=n(a,arguments,i)}else o=a.apply(this,arguments);return function(e,t){if(t&&("object"==(0,s.Z)(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return(0,c.Z)(e)}(this,o)}}},206782:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var n=o(17800),a=o(303268),i=o(909101);function r(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=n(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a(e,"prototype",{writable:!1}),t&&(0,i.Z)(e,t)}},909101:function(e,t,o){"use strict";o.d(t,{Z:function(){return a}});var n=o(267765);function a(e,t){return(a=n?n.bind():function(e,t){return e.__proto__=t,e})(e,t)}},780680:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"action":{"description":"Callback fired when the component mounts. This is useful when you want to trigger an action programmatically. It supports two actions: <code>updateIndicator()</code> and <code>updateScrollButtons()</code>"},"allowScrollButtonsMobile":{"description":"If <code>true</code>, the scroll buttons aren&#39;t forced hidden on mobile. By default the scroll buttons are hidden on mobile and takes precedence over <code>scrollButtons</code>."},"aria-label":{"description":"The label for the Tabs as a string."},"aria-labelledby":{"description":"An id or list of ids separated by a space that label the Tabs."},"centered":{"description":"If <code>true</code>, the tabs are centered. This prop is intended for large views."},"children":{"description":"The content of the component."},"classes":{"description":"Override or extend the styles applied to the component."},"component":{"description":"The component used for the root node. Either a string to use a HTML element or a component."},"indicatorColor":{"description":"Determines the color of the indicator."},"onChange":{"description":"Callback fired when the value changes.","typeDescriptions":{"event":"The event source of the callback. <strong>Warning</strong>: This is a generic event not a change event.","value":"We default to the index of the child (number)"}},"orientation":{"description":"The component orientation (layout flow direction)."},"ScrollButtonComponent":{"description":"The component used to render the scroll buttons."},"scrollButtons":{"description":"<p>Determine behavior of scroll buttons when tabs are set to scroll:</p>\\n<ul>\\n<li><code>auto</code> will only present them when not all the items are visible.</li>\\n<li><code>true</code> will always present them.</li>\\n<li><code>false</code> will never present them.</li>\\n</ul>\\n<p>By default the scroll buttons are hidden on mobile.\\nThis behavior can be disabled with <code>allowScrollButtonsMobile</code>.</p>\\n"},"selectionFollowsFocus":{"description":"If <code>true</code> the selected tab changes on focus. Otherwise it only changes on activation."},"slotProps":{"description":"The extra props for the slot components. You can override the existing props or add new ones."},"slots":{"description":"The components used for each slot inside."},"sx":{"description":"The system prop that allows defining system overrides as well as additional CSS styles."},"TabIndicatorProps":{"description":"Props applied to the tab indicator element."},"TabScrollButtonProps":{"description":"Props applied to the <a href=\\"/material-ui/api/tab-scroll-button/\\"><code>TabScrollButton</code></a> element."},"textColor":{"description":"Determines the color of the <code>Tab</code>."},"value":{"description":"The value of the currently selected <code>Tab</code>. If you don&#39;t want any selected <code>Tab</code>, you can set this prop to <code>false</code>."},"variant":{"description":"<p>Determines additional display behavior of the tabs:</p>\\n<ul>\\n<li><code>scrollable</code> will invoke scrolling properties and allow for horizontally\\n scrolling (or swiping) of the tab bar.</li>\\n<li><code>fullWidth</code> will make the tabs grow to use all the available space,\\n which should be used for small views, like on mobile.</li>\\n<li><code>standard</code> will render the default state.</li>\\n</ul>\\n"},"visibleScrollbar":{"description":"If <code>true</code>, the scrollbar is visible. It can be useful when displaying a long vertical list of tabs."}},"classDescriptions":{"centered":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the flex container element","conditions":"<code>centered={true}</code> &amp; <code>!variant=\\"scrollable\\"</code>"},"fixed":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the tablist element","conditions":"<code>!variant=\\"scrollable\\"</code>\\b\\b\\b"},"flexContainer":{"description":"Styles applied to {{nodeName}}.","nodeName":"the flex container element"},"flexContainerVertical":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the flex container element","conditions":"<code>orientation=\\"vertical\\"</code>"},"hideScrollbar":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the tablist element","conditions":"<code>variant=\\"scrollable\\"</code> and <code>visibleScrollbar={false}</code>"},"indicator":{"description":"Styles applied to {{nodeName}}.","nodeName":"the TabIndicator component"},"root":{"description":"Styles applied to the root element."},"scrollableX":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the tablist element","conditions":"<code>variant=\\"scrollable\\"</code> and <code>orientation=\\"horizontal\\"</code>"},"scrollableY":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the tablist element","conditions":"<code>variant=\\"scrollable\\"</code> and <code>orientation=\\"vertical\\"</code>"},"scrollButtons":{"description":"Styles applied to {{nodeName}}.","nodeName":"the ScrollButtonComponent component"},"scrollButtonsHideMobile":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the ScrollButtonComponent component","conditions":"<code>allowScrollButtonsMobile={true}</code>"},"scroller":{"description":"Styles applied to {{nodeName}}.","nodeName":"the tablist element"},"vertical":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>orientation=\\"vertical\\"</code>"}}}')}},function(e){e.O(0,[49774,9535,73976,97146,59727,85925,17376,17103,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,42378,20759,12589,92888,40179],function(){return e(e.s=854538)}),_N_E=e.O()}]);