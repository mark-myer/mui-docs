(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41881,39519,20897],{333897:function(e,t,i){var o=i(915012),n=/^\s+/;e.exports=function(e){return e?e.slice(0,o(e)+1).replace(n,""):e}},915012:function(e){var t=/\s/;e.exports=function(e){for(var i=e.length;i--&&t.test(e.charAt(i)););return i}},889678:function(e,t,i){var o=i(706627),n=i(885365),r=i(67948),a=Math.max,s=Math.min;e.exports=function(e,t,i){var c,d,l,p,u,m,g=0,f=!1,h=!1,v=!0;if("function"!=typeof e)throw TypeError("Expected a function");function w(t){var i=c,o=d;return c=d=void 0,g=t,p=e.apply(o,i)}function b(e){var i=e-m,o=e-g;return void 0===m||i>=t||i<0||h&&o>=l}function y(){var e,i,o,r=n();if(b(r))return k(r);u=setTimeout(y,(e=r-m,i=r-g,o=t-e,h?s(o,l-i):o))}function k(e){return(u=void 0,v&&c)?w(e):(c=d=void 0,p)}function x(){var e,i=n(),o=b(i);if(c=arguments,d=this,m=i,o){if(void 0===u)return g=e=m,u=setTimeout(y,t),f?w(e):p;if(h)return clearTimeout(u),u=setTimeout(y,t),w(m)}return void 0===u&&(u=setTimeout(y,t)),p}return t=r(t)||0,o(i)&&(f=!!i.leading,l=(h="maxWait"in i)?a(r(i.maxWait)||0,t):l,v="trailing"in i?!!i.trailing:v),x.cancel=function(){void 0!==u&&clearTimeout(u),g=0,c=m=d=u=void 0},x.flush=function(){return void 0===u?p:k(n())},x}},706627:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},885365:function(e,t,i){var o=i(573401);e.exports=function(){return o.Date.now()}},123763:function(e,t,i){var o=i(889678),n=i(706627);e.exports=function(e,t,i){var r=!0,a=!0;if("function"!=typeof e)throw TypeError("Expected a function");return n(i)&&(r="leading"in i?!!i.leading:r,a="trailing"in i?!!i.trailing:a),o(e,t,{leading:r,maxWait:t,trailing:a})}},67948:function(e,t,i){var o=i(333897),n=i(706627),r=i(42848),a=0/0,s=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,d=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(r(e))return a;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=o(e);var i=c.test(e);return i||d.test(e)?l(e.slice(2),i?2:8):s.test(e)?a:+e}},601509:function(e,t,i){"use strict";var o=i(778521),n=i(577903),r=i(470079),a=i(653048),s=i(306029),c=i(360731),d=i(502894),l=i(146803),p=i(270343),u=i(735250),m=["className","raised"],g=(0,c.Uu)("MuiCard"),f=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},p.y,t)},h=(0,d.ZP)(l.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})({overflow:"hidden"}),v=r.forwardRef(function(e,t){var i=g({props:e,name:"MuiCard"}),r=i.className,s=i.raised,c=void 0!==s&&s,d=(0,n.Z)(i,m),l=(0,o.Z)((0,o.Z)({},i),{},{raised:c}),p=f(l);return(0,u.jsx)(h,(0,o.Z)({className:(0,a.default)(p.root,r),elevation:c?8:void 0,ref:t,ownerState:l},d))});t.Z=v},270343:function(e,t,i){"use strict";i.d(t,{y:function(){return r}});var o=i(344443),n=i(92358);function r(e){return(0,n.ZP)("MuiCard",e)}var a=(0,o.Z)("MuiCard",["root"]);t.Z=a},923272:function(e,t,i){"use strict";var o=i(778521),n=i(577903),r=i(470079),a=i(653048),s=i(306029),c=i(360731),d=i(502894),l=i(308867),p=i(735250),u=["children","className","component","image","src","style"],m=(0,c.Uu)("MuiCardMedia"),g=function(e){var t=e.classes,i=e.isMediaComponent,o=e.isImageComponent;return(0,s.Z)({root:["root",i&&"media",o&&"img"]},l.a,t)},f=(0,d.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,t){var i=e.ownerState,o=i.isMediaComponent,n=i.isImageComponent;return[t.root,o&&t.media,n&&t.img]}})({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",variants:[{props:{isMediaComponent:!0},style:{width:"100%"}},{props:{isImageComponent:!0},style:{objectFit:"cover"}}]}),h=["video","audio","picture","iframe","img"],v=["picture","img"],w=r.forwardRef(function(e,t){var i=m({props:e,name:"MuiCardMedia"}),r=i.children,s=i.className,c=i.component,d=void 0===c?"div":c,l=i.image,w=i.src,b=i.style,y=(0,n.Z)(i,u),k=-1!==h.indexOf(d),x=!k&&l?(0,o.Z)({backgroundImage:'url("'.concat(l,'")')},b):b,C=(0,o.Z)((0,o.Z)({},i),{},{component:d,isMediaComponent:k,isImageComponent:-1!==v.indexOf(d)}),Z=g(C);return(0,p.jsx)(f,(0,o.Z)((0,o.Z)({className:(0,a.default)(Z.root,s),as:d,role:!k&&l?"img":void 0,ref:t,style:x,ownerState:C,src:k?l||w:void 0},y),{},{children:r}))});t.Z=w},308867:function(e,t,i){"use strict";i.d(t,{a:function(){return r}});var o=i(344443),n=i(92358);function r(e){return(0,n.ZP)("MuiCardMedia",e)}var a=(0,o.Z)("MuiCardMedia",["root","media","img"]);t.Z=a},320897:function(e,t,i){"use strict";var o=i(329172),n=i(502894),r=i(123280),a=(0,o.Z)({createStyledComponent:(0,n.ZP)("div",{name:"MuiGrid2",slot:"Root",overridesResolver:function(e,t){return t.root}}),componentName:"MuiGrid2",useThemeProps:function(e){return(0,r.Z)({props:e,name:"MuiGrid2"})}});t.Z=a},329172:function(e,t,i){"use strict";i.d(t,{Z:function(){return D}});var o=i(778521),n=i(863363),r=i(577903),a=i(614030),s=i(431114),c=i.n(s),d=i(470079),l=i(653048),p=i(207534),u=i(92358),m=i(306029),g=i(163226),f=i(153071),h=i(302312),v=i(213591),w=i(486967),b=i(234046),y=i(410231),k=i.n(y),x=i(408011),C=i.n(x),Z=i(949345);function j(e){return e?"Level".concat(e):""}function A(e){return e.unstable_level>0&&e.container}function S(e){return function(t){return"var(--Grid-".concat(t,"Spacing").concat(j(e.unstable_level),")")}}function M(e){return function(t){return 0===e.unstable_level?"var(--Grid-".concat(t,"Spacing)"):"var(--Grid-".concat(t,"Spacing").concat(j(e.unstable_level-1),")")}}function T(e){return 0===e.unstable_level?"var(--Grid-columns)":"var(--Grid-columns".concat(j(e.unstable_level-1),")")}var O=function(e){var t=e.theme,i=e.ownerState,o=S(i),n={};return(0,Z.t)(t.breakpoints,i.gridSize,function(e,t){var r={};!0===t&&(r={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===t&&(r={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"==typeof t&&(r={flexGrow:0,flexBasis:"auto",width:"calc(100% * ".concat(t," / ").concat(T(i)).concat(A(i)?" + ".concat(o("column")):"",")")}),e(n,r)}),n},W=function(e){var t=e.theme,i=e.ownerState,o={};return(0,Z.t)(t.breakpoints,i.gridOffset,function(e,t){var n={};"auto"===t&&(n={marginLeft:"auto"}),"number"==typeof t&&(n={marginLeft:0===t?"0px":"calc(100% * ".concat(t," / ").concat(T(i),")")}),e(o,n)}),o},E=function(e){var t=e.theme,i=e.ownerState;if(!i.container)return{};var o=A(i)?(0,b.Z)({},"--Grid-columns".concat(j(i.unstable_level)),T(i)):{"--Grid-columns":12};return(0,Z.t)(t.breakpoints,i.columns,function(e,t){e(o,(0,b.Z)({},"--Grid-columns".concat(j(i.unstable_level)),t))}),o},_=function(e){var t=e.theme,i=e.ownerState;if(!i.container)return{};var o=M(i),n=A(i)?(0,b.Z)({},"--Grid-rowSpacing".concat(j(i.unstable_level)),o("row")):{};return(0,Z.t)(t.breakpoints,i.rowSpacing,function(e,o){var r;e(n,(0,b.Z)({},"--Grid-rowSpacing".concat(j(i.unstable_level)),"string"==typeof o?o:null===(r=t.spacing)||void 0===r?void 0:r.call(t,o)))}),n},V=function(e){var t=e.theme,i=e.ownerState;if(!i.container)return{};var o=M(i),n=A(i)?(0,b.Z)({},"--Grid-columnSpacing".concat(j(i.unstable_level)),o("column")):{};return(0,Z.t)(t.breakpoints,i.columnSpacing,function(e,o){var r;e(n,(0,b.Z)({},"--Grid-columnSpacing".concat(j(i.unstable_level)),"string"==typeof o?o:null===(r=t.spacing)||void 0===r?void 0:r.call(t,o)))}),n},I=function(e){var t=e.theme,i=e.ownerState;if(!i.container)return{};var o={};return(0,Z.t)(t.breakpoints,i.direction,function(e,t){e(o,{flexDirection:t})}),o},G=function(e){var t=e.ownerState,i=S(t),n=M(t);return(0,o.Z)((0,o.Z)({minWidth:0,boxSizing:"border-box"},t.container&&(0,o.Z)((0,o.Z)({display:"flex",flexWrap:"wrap"},t.wrap&&"wrap"!==t.wrap&&{flexWrap:t.wrap}),{},{margin:"calc(".concat(i("row")," / -2) calc(").concat(i("column")," / -2)")},t.disableEqualOverflow&&{margin:"calc(".concat(i("row")," * -1) 0px 0px calc(").concat(i("column")," * -1)")})),(!t.container||A(t))&&(0,o.Z)({padding:"calc(".concat(n("row")," / 2) calc(").concat(n("column")," / 2)")},(t.disableEqualOverflow||t.parentDisableEqualOverflow)&&{padding:"".concat(n("row")," 0px 0px ").concat(n("column"))}))},H=function(e){var t=[];return c()(e).forEach(function(e){var i=(0,n.Z)(e,2),o=i[0],r=i[1];!1!==r&&void 0!==r&&t.push("grid-".concat(o,"-").concat(String(r)))}),t},P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"xs";function i(e){return void 0!==e&&("string"==typeof e&&!k()(Number(e))||"number"==typeof e&&e>0)}if(i(e))return["spacing-".concat(t,"-").concat(String(e))];if("object"==typeof e&&!C()(e)){var o=[];return c()(e).forEach(function(e){var t=(0,n.Z)(e,2),r=t[0],a=t[1];i(a)&&o.push("spacing-".concat(r,"-").concat(String(a)))}),o}return[]},B=i(735250),R=["className","children","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow","unstable_level"],N=(0,w.Z)(),q=(0,g.Z)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,t){return t.root}});function z(e){return(0,f.Z)({props:e,name:"MuiGrid",defaultTheme:N})}function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,i=e.useThemeProps,s=void 0===i?z:i,g=e.componentName,f=void 0===g?"MuiGrid":g,w=d.createContext(void 0),b=function(e,t){var i=e.container,o=e.direction,r=e.spacing,s=e.wrap,d=e.gridSize,l={root:["root",i&&"container","wrap"!==s&&"wrap-xs-".concat(String(s))].concat((0,a.Z)(void 0===o?[]:"object"==typeof o?c()(o).map(function(e){var t=(0,n.Z)(e,2),i=t[0],o=t[1];return"direction-".concat(i,"-").concat(o)}):["direction-xs-".concat(String(o))]),(0,a.Z)(H(d)),(0,a.Z)(i?P(r,t.breakpoints.keys[0]):[]))};return(0,m.Z)(l,function(e){return(0,u.ZP)(f,e)},{})},y=(void 0===t?q:t)(E,V,_,O,I,G,W),k=d.forwardRef(function(e,t){var i,a,u,m,g,f,k,x,C=(0,h.Z)(),Z=s(e),j=(0,v.Z)(Z),A=d.useContext(w),S=j.className,M=j.children,T=j.columns,O=j.container,W=j.component,E=j.direction,_=j.wrap,V=j.spacing,I=void 0===V?0:V,G=j.rowSpacing,H=j.columnSpacing,P=j.disableEqualOverflow,N=j.unstable_level,q=void 0===N?0:N,z=(0,r.Z)(j,R),D=P;q&&void 0!==P&&(D=e.disableEqualOverflow);var F={},L={},U={};c()(z).forEach(function(e){var t=(0,n.Z)(e,2),i=t[0],o=t[1];void 0!==C.breakpoints.values[i]?F[i]=o:void 0!==C.breakpoints.values[i.replace("Offset","")]?L[i.replace("Offset","")]=o:U[i]=o});var Q=null!==(i=e.columns)&&void 0!==i?i:q?void 0:void 0===T?12:T,J=null!==(a=e.spacing)&&void 0!==a?a:q?void 0:I,K=null!==(u=null!==(m=e.rowSpacing)&&void 0!==m?m:e.spacing)&&void 0!==u?u:q?void 0:void 0===G?I:G,X=null!==(g=null!==(f=e.columnSpacing)&&void 0!==f?f:e.spacing)&&void 0!==g?g:q?void 0:void 0===H?I:H,$=(0,o.Z)((0,o.Z)({},j),{},{level:q,columns:Q,container:void 0!==O&&O,direction:void 0===E?"row":E,wrap:void 0===_?"wrap":_,spacing:J,rowSpacing:K,columnSpacing:X,gridSize:F,gridOffset:L,disableEqualOverflow:null!==(k=null!==(x=D)&&void 0!==x?x:A)&&void 0!==k&&k,parentDisableEqualOverflow:A}),Y=b($,C),ee=(0,B.jsx)(y,(0,o.Z)((0,o.Z)({ref:t,as:void 0===W?"div":W,ownerState:$,className:(0,l.default)(Y.root,S)},U),{},{children:d.Children.map(M,function(e){if(d.isValidElement(e)&&(0,p.Z)(e,["Grid"])){var t;return d.cloneElement(e,{unstable_level:null!==(t=e.props.unstable_level)&&void 0!==t?t:q+1})}return e})}));return void 0!==D&&D!==(null!=A&&A)&&(ee=(0,B.jsx)(w.Provider,{value:D,children:ee})),ee});return k.muiName="Grid",k}},949345:function(e,t,i){"use strict";i.d(t,{t:function(){return d}});var o=i(408011),n=i.n(o),r=i(758869),a=i.n(r),s=i(436578),c=i.n(s),d=function(e,t,i){var o,r,s=e.keys[0];n()(t)?t.forEach(function(t,o){i(function(t,i){o<=e.keys.length-1&&(0===o?a()(t,i):t[e.up(e.keys[o])]=i)},t)}):t&&"object"==typeof t?(c()(t).length>e.keys.length?e.keys:(o=e.keys,r=c()(t),o.filter(function(e){return r.includes(e)}))).forEach(function(o){if(-1!==e.keys.indexOf(o)){var n=t[o];void 0!==n&&i(function(t,i){s===o?a()(t,i):t[e.up(o)]=i},n)}}):("number"==typeof t||"string"==typeof t)&&i(function(e,t){a()(e,t)},t)}},802121:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return O}});var o,n={};i.r(n),i.d(n,{demoComponents:function(){return M},demos:function(){return S},docs:function(){return A},srcComponents:function(){return T}});var r=i(778521),a=i(470079),s=i(652755),c=i(863363),d=i(859861),l=i(320897),p=i(856109),u=i(77924),m=i(601509),g=i(923272),f=i(781097),h=i(214077),v=i(814933),w=i(969368),b=i(621234),y=i(215129),k=i(871379),x=i(735250),C=[{title:"d-cide",description:"A progressive Web App to make rational decisions in workshops. It uses Material UI with a neumorphic custom theme.",image:"dcide.jpg",link:"https://d-cide.me/",source:"https://github.com/cjoecker/d-cide",dateAdded:"2020-07-01"},{title:"QuintoAndar",description:"QuintoAndar is a company that uses technology and design to simplify the rental of residential real estate.",image:"quintoandar.jpg",link:"https://www.quintoandar.com.br/",similarWebVisits:8500,dateAdded:"2019-05-08"},{title:"Bethesda.net",description:"The official site for Bethesda, publisher of Fallout, DOOM, Dishonored, Skyrim, Wolfenstein, The Elder Scrolls, more. Your source for news, features & community.",image:"bethesda.jpg",link:"https://bethesda.net/",similarWebVisits:4e3,dateAdded:"2019-01-01"},{title:"OpenClassrooms",description:"OpenClassrooms is an online platform offering top quality, education-to-employment programs and career coaching services for students worldwide. ",image:"openclassrooms.png",link:"https://openclassrooms.com/en/",similarWebVisits:6e3,dateAdded:"2018-01-24"},{title:"Codementor",description:"Codementor is the largest community for developer mentorship and an on-demand marketplace for software developers. Get instant coding help, build projects faster, and read programming tutorials from our community of developers.",image:"codementor.jpg",link:"https://www.codementor.io/",similarWebVisits:1500,dateAdded:"2018-01-24"},{title:"BARKS",description:"Japan Music Network. \uD83C\uDDEF\uD83C\uDDF5",image:"barks.jpg",link:"https://www.barks.jp/",similarWebVisits:3e3,dateAdded:"2019-01-01"},{title:"GovX",description:"Current & former uniformed professionals get exclusive access to deals on gear, apparel, tickets, travel and more.",image:"govx.jpg",link:"https://www.govx.com/",similarWebVisits:2e3,dateAdded:"2018-01-31"},{title:"Hijup",description:"A pioneering Muslim Fashion e-commerce site.",image:"hijup.jpg",link:"https://www.hijup.com/",similarWebVisits:328,dateAdded:"2018-01-18"},{title:"iFit",description:"Get the best personal training, right at home. Access hundreds of training programs, unique health tips, and expert advice that will lead you to a healthier lifestyle.",image:"ifit.jpg",link:"https://www.ifit.com/",similarWebVisits:304,dateAdded:"2019-01-01"},{title:"EQ3",description:"Modern Furniture & Accessories, designed in Canada, for everyday living.",image:"eq3.jpg",link:"https://www.eq3.com/ca/en",similarWebVisits:256,dateAdded:"2018-01-24"},{title:"Housecall Pro",description:"The #1 rated mobile software to run your home service business. Schedule, dispatch, GPS track employees, invoice, accept credit cards and get booked online. The marketing website is also built with Material UI: https://www.housecallpro.com/",image:"housecall.jpg",link:"https://pro.housecallpro.com/pro/log_in",similarWebVisits:1800,dateAdded:"2019-01-01"},{title:"CityAds",description:"CityAds Media: global technology platform for online performance marketing powered by big data",image:"cityads.jpg",link:"https://cityads.com/main",similarWebVisits:132,dateAdded:"2019-01-01"},{title:"EOS Toolkit",description:"EOSToolkit is the premier free, open source interface for managing EOS accounts. Create, transfer, stake, vote and more with Scatter!",image:"eostoolkit.jpg",link:"https://eostoolkit.io/",source:"https://github.com/eostoolkit/eostoolkit",stars:91,dateAdded:"2019-01-01"},{title:"The Media Ant",description:"India's Largest online marketing service provider, with more than 200K advertising options, and more than 1M satisfied customers.",image:"themediaant.jpg",link:"https://www.themediaant.com/",similarWebVisits:90,dateAdded:"2019-01-01"},{title:"Forex Bank",description:"Vi kan tilby kjapp og enkel valutaveksling, pengeoverf\xf8ringer, samt kj\xf8p av norsk veksel. \uD83C\uDDF3\uD83C\uDDF4",image:"forex.jpg",link:"https://www.forex.no/",similarWebVisits:95,dateAdded:"2018-01-24"},{title:"LessWrong",description:"LessWrong is a community blog devoted to the art of human rationality.",image:"lesswrong.jpg",link:"https://www.lesswrong.com/",similarWebVisits:1e3,dateAdded:"2018-01-28"},{title:"ODIGEO Connect",description:"Connect your hotel, B&B and apartment with Europe's #1 flight OTA and distribute it to millions of travellers.",image:"odigeo.jpg",link:"https://www.odigeoconnect.com/",dateAdded:"2019-01-01"},{title:"comet",description:"Comet lets you track code, experiments, and results on ML projects. It's fast, simple, and free for open source projects.",image:"comet.jpg",link:"https://www.comet.com/site/",similarWebVisits:180,dateAdded:"2019-01-01"},{title:"Pointer",description:"Revestimentos cer\xe2micos para pisos e paredes com qualidade e design acess\xedvel. A Pointer faz parte da Portobello e atua no Nordeste do Brasil. \uD83C\uDDE7\uD83C\uDDF7",image:"pointer.jpg",link:"https://www.pointer.com.br/",dateAdded:"2019-01-01"},{title:"Oneplanetcrowd",description:"Oneplanetcrowd is Europe's leading sustainable crowdfunding platform for People & Planet.",image:"oneplanetcrowd.jpg",link:"https://www.oneplanetcrowd.com/en",dateAdded:"2019-01-01"},{title:"CollegeAI",description:"Get a college recommendation and your chances using the best college predictor. Answer some questions and we'll calculate where you fit in best with our college finder and college matching tools. CollegeAI is an admissions and college counselor, college planner, and college chance calculator.",image:"collegeai.jpg",link:"https://collegeai.com",dateAdded:"2019-01-01"},{title:"react-admin",description:"The admin of an imaginary poster shop, used as a demo for the react-admin framework. Uses many material-ui components, including tables, forms, snackbars, buttons, and theming. The UI is responsive. The code is open-source!",image:"posters-galore.jpg",link:"https://marmelab.com/react-admin-demo/",source:"https://github.com/marmelab/react-admin",dateAdded:"2018-01-21",stars:18500},{title:"Builder Book",description:"Books to learn how to build full-stack, production-ready JavaScript web applications from scratch. Learn React, Material UI, Next, Express, Mongoose, MongoDB, third party APIs, and more.",image:"builderbook.jpg",link:"https://builderbook.org/",source:"https://github.com/async-labs/builderbook",stars:3e3,dateAdded:"2018-01-05"},{title:"Commit Swimming",description:"The #1 workout journal for coaches and swimmers.",image:"commitswimming.jpg",link:"https://commitswimming.com/",dateAdded:"2019-01-01"},{title:"EventHi",description:"Cannabis event platform to create and coordinate Cannabis events for the Cannabis community. Use our easy ticketing system, sponsor, and sell merchandise.",image:"eventhi.jpg",link:"https://eventhi.io/",dateAdded:"2019-01-01"},{title:"Iceberg Finder",description:"Whether spotting them from outer space, or standing on our coastline, IcebergFinder.com is your premier place for finding bergs in Newfoundland and Labrador.",image:"icebergfinder.jpg",link:"https://icebergfinder.com/",dateAdded:"2019-01-01"},{title:"MetaFact",description:"Metafact is a place to verify knowledge via the world's top experts. It's a platform to ask questions, learn the facts and share the truth.",image:"metafact.jpg",link:"https://metafact.io/",dateAdded:"2019-01-01"},{title:"AudioNodes",description:"Modular audio production suite with multi-track audio mixing, audio effects, parameter automation, MIDI editing, synthesis, cloud production, and more.",image:"audionodes.jpg",link:"https://www.audionodes.com/",dateAdded:"2018-01-07"},{title:"SlidesUp",description:"SlidesUp is a platform to help conference organizers plan their events.",image:"slidesup.jpg",link:"https://slidesup.com/",dateAdded:"2018-01-03"},{title:"Typekev",description:"The personal site of Kevin Gonzalez, featuring his witty chatbot.",image:"typekev.jpg",link:"https://typekev.com/",source:"https://github.com/typekev/typekev-site",stars:10,dateAdded:"2018-01-23"},{title:"npm registry browser",description:"An open source web app that lets you search the npm registry and browse packages details.",image:"npm-registry-browser.jpg",link:"https://topheman.github.io/npm-registry-browser/",source:"https://github.com/topheman/npm-registry-browser",stars:90,dateAdded:"2018-01-15"},{title:"Snippets Chrome Extension",description:"An open source Chrome extension allowing you to import and execute JavaScript code snippets from GitHub.",image:"snippets.jpg",link:"https://chrome.google.com/webstore/detail/snippets/dcibnkkafifbanoclgjbkmkbogijndin",source:"https://github.com/richardscarrott/snippets",stars:42,dateAdded:"2018-01-19"},{title:"Tree",description:"An open source top 100 documentaries (personal opinion) app with React Hooks and Material UI.",link:"https://tree.valleyease.me/",image:"tree.jpg",source:"https://github.com/ValleyZw/tree",stars:24,dateAdded:"2018-01-25"},{title:"TagSpaces",description:"TagSpaces is an offline, open source, file manager.It helps organizing your files and folders with tags and colors.",image:"tagspaces.jpg",link:"https://www.tagspaces.org/demo/",source:"https://github.com/tagspaces/tagspaces",stars:2500,dateAdded:"2019-11-01"},{title:"HiFiveWork",description:"HiFiveWork, the cool tool for leave management",image:"hifivework.png",link:"https://hifivework.com/",dateAdded:"2020-01-08"},{title:"FANSPO",description:"NBA trade machine and social analysis tools for the basketball community.",image:"tradenba.jpg",link:"https://fanspo.com/",similarWebVisits:417,dateAdded:"2020-01-20"},{title:"Backstage",description:"Backstage is an open platform by Spotify for building developer portals.",image:"backstage.jpg",link:"https://backstage.io",source:"https://github.com/backstage/backstage",stars:14300,dateAdded:"2020-08-31"},{title:"buybags",description:"buybags is a fashion shopping aggregator in Germany.",image:"buybags.jpg",link:"https://www.buybags.de/",dateAdded:"2020-10-08"},{title:"react-admin CRM demo",description:"A full-featured Customer Relationship Management app",image:"atomiccrm.jpg",link:"https://marmelab.com/react-admin-crm/",source:"https://github.com/marmelab/react-admin/tree/master/examples/crm",stars:18500,dateAdded:"2021-05-06"},{title:"MQTT Explorer",description:"A comprehensive MQTT Client which visualizes broker traffic in a hierarchical view. The protocol is used in many IoT and home automation scenarios, making integrating new services dead easy.",link:"https://mqtt-explorer.com/",source:"https://github.com/thomasnordquist/MQTT-Explorer",image:"mqtt-explorer.png",stars:1600,dateAdded:"2019-03-25"},{title:"Refine Foods demo",description:"A full-featured Admin panel app",image:"refine-foods.jpeg",link:"https://example.mui.admin.refine.dev/",source:"https://github.com/pankod/refine/tree/next/examples/fineFoods/admin/mui",stars:2415,dateAdded:"2022-06-21"}];function Z(e){return function(t,i){return i[e]<t[e]?-1:i[e]>t[e]?1:0}}var j={dateAdded:Z("dateAdded"),similarWebVisits:Z("similarWebVisits"),stars:Z("stars")},A={en:{description:"Check out these public apps using Material\xa0UI to get inspired for your next project.",location:"/docs/data/material/discover-more/showcase/showcase.md",rendered:['<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="error-icon" viewBox="0 0 20 20">\n      <path fill-rule="evenodd" d="M2 7.4v5.2a2 2 0 0 0 .586 1.414l3.4 3.4A2 2 0 0 0 7.4 18h5.2a2 2 0 0 0 1.414-.586l3.4-3.4A2 2 0 0 0 18 12.6V7.4a2 2 0 0 0-.586-1.414l-3.4-3.4A2 2 0 0 0 12.6 2H7.4a2 2 0 0 0-1.414.586l-3.4 3.4A2 2 0 0 0 2 7.4Zm11.03-.43a.75.75 0 0 1 0 1.06L11.06 10l1.97 1.97a.75.75 0 1 1-1.06 1.06L10 11.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L8.94 10 6.97 8.03a.75.75 0 0 1 1.06-1.06L10 8.94l1.97-1.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="warning-icon" viewBox="0 0 20 20">\n      <path d="M2.33 17a.735.735 0 0 1-.665-.375.631.631 0 0 1-.094-.375.898.898 0 0 1 .115-.396L9.353 3.062a.621.621 0 0 1 .281-.27.85.85 0 0 1 .729 0 .622.622 0 0 1 .281.27l7.667 12.792c.07.125.108.257.114.396a.63.63 0 0 1-.093.375.842.842 0 0 1-.271.27.728.728 0 0 1-.394.105H2.33Zm7.664-2.5c.211 0 .39-.072.536-.214a.714.714 0 0 0 .218-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.531-.22.736.736 0 0 0-.536.215.714.714 0 0 0-.219.531c0 .212.072.39.215.536.143.146.32.219.531.219Zm0-2.5c.211 0 .39-.072.536-.216a.72.72 0 0 0 .218-.534v-2.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.531-.216.734.734 0 0 0-.536.216.72.72 0 0 0-.219.534v2.5c0 .212.072.39.215.534a.72.72 0 0 0 .531.216Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="success-icon" viewBox="0 0 20 20">\n      <path d="m8.938 10.875-1.25-1.23a.718.718 0 0 0-.521-.228.718.718 0 0 0-.521.229.73.73 0 0 0 0 1.062l1.77 1.771c.153.153.327.23.521.23a.718.718 0 0 0 .521-.23l3.896-3.896a.73.73 0 0 0 0-1.062.718.718 0 0 0-.52-.23.718.718 0 0 0-.521.23l-3.376 3.354ZM10 18a7.796 7.796 0 0 1-3.104-.625 8.065 8.065 0 0 1-2.552-1.719 8.064 8.064 0 0 1-1.719-2.552A7.797 7.797 0 0 1 2 10c0-1.111.208-2.15.625-3.115a8.064 8.064 0 0 1 4.27-4.26A7.797 7.797 0 0 1 10 2c1.111 0 2.15.208 3.115.625a8.096 8.096 0 0 1 4.26 4.26C17.792 7.851 18 8.89 18 10a7.797 7.797 0 0 1-.625 3.104 8.066 8.066 0 0 1-4.26 4.271A7.774 7.774 0 0 1 10 18Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="info-icon" viewBox="0 0 20 20">\n      <path d="M9.996 14c.21 0 .39-.072.535-.216a.72.72 0 0 0 .219-.534v-3.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.532-.216.734.734 0 0 0-.535.216.72.72 0 0 0-.219.534v3.5c0 .213.071.39.214.534a.72.72 0 0 0 .532.216Zm0-6.5c.21 0 .39-.071.535-.214a.714.714 0 0 0 .219-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.532-.219.736.736 0 0 0-.535.214.714.714 0 0 0-.219.532c0 .21.071.39.214.535.143.146.32.219.532.219Zm.01 10.5a7.81 7.81 0 0 1-3.11-.625 8.065 8.065 0 0 1-2.552-1.719 8.066 8.066 0 0 1-1.719-2.551A7.818 7.818 0 0 1 2 9.99c0-1.104.208-2.14.625-3.105a8.066 8.066 0 0 1 4.27-4.26A7.818 7.818 0 0 1 10.009 2a7.75 7.75 0 0 1 3.106.625 8.083 8.083 0 0 1 4.26 4.265A7.77 7.77 0 0 1 18 9.994a7.81 7.81 0 0 1-.625 3.11 8.066 8.066 0 0 1-1.719 2.552 8.083 8.083 0 0 1-2.546 1.719 7.77 7.77 0 0 1-3.104.625Z"/>\n      </symbol>\n      </svg>','\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n        <symbol id="anchor-link-icon" viewBox="0 0 12 6">\n          <path d="M8.9176 0.083252H7.1676C6.84677 0.083252 6.58427 0.345752 6.58427 0.666585C6.58427 0.987419 6.84677 1.24992 7.1676 1.24992H8.9176C9.8801 1.24992 10.6676 2.03742 10.6676 2.99992C10.6676 3.96242 9.8801 4.74992 8.9176 4.74992H7.1676C6.84677 4.74992 6.58427 5.01242 6.58427 5.33325C6.58427 5.65409 6.84677 5.91659 7.1676 5.91659H8.9176C10.5276 5.91659 11.8343 4.60992 11.8343 2.99992C11.8343 1.38992 10.5276 0.083252 8.9176 0.083252ZM3.6676 2.99992C3.6676 3.32075 3.9301 3.58325 4.25094 3.58325H7.75094C8.07177 3.58325 8.33427 3.32075 8.33427 2.99992C8.33427 2.67909 8.07177 2.41659 7.75094 2.41659H4.25094C3.9301 2.41659 3.6676 2.67909 3.6676 2.99992ZM4.83427 4.74992H3.08427C2.12177 4.74992 1.33427 3.96242 1.33427 2.99992C1.33427 2.03742 2.12177 1.24992 3.08427 1.24992H4.83427C5.1551 1.24992 5.4176 0.987419 5.4176 0.666585C5.4176 0.345752 5.1551 0.083252 4.83427 0.083252H3.08427C1.47427 0.083252 0.167603 1.38992 0.167603 2.99992C0.167603 4.60992 1.47427 5.91659 3.08427 5.91659H4.83427C5.1551 5.91659 5.4176 5.65409 5.4176 5.33325C5.4176 5.01242 5.1551 4.74992 4.83427 4.74992Z" />\n        </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n      <path d="M22.8481 4C22.8481 2.9 21.9481 2 20.8481 2H4.84814C3.74814 2 2.84814 2.9 2.84814 4V16C2.84814 17.1 3.74814 18 4.84814 18H18.8481L22.8481 22V4ZM16.8481 11H13.8481V14C13.8481 14.55 13.3981 15 12.8481 15C12.2981 15 11.8481 14.55 11.8481 14V11H8.84814C8.29814 11 7.84814 10.55 7.84814 10C7.84814 9.45 8.29814 9 8.84814 9H11.8481V6C11.8481 5.45 12.2981 5 12.8481 5C13.3981 5 13.8481 5.45 13.8481 6V9H16.8481C17.3981 9 17.8481 9.45 17.8481 10C17.8481 10.55 17.3981 11 16.8481 11Z" />\n      </symbol>\n      </svg>','<h1>Showcase</h1><p class="description">Check out these public apps using Material\xa0UI to get inspired for your next project.</p>\n\n<p>This is a curated list of some of the best apps we&#39;ve seen that show off what&#39;s possible with Material\xa0UI. Are you also using it? <a href="https://github.com/mui/material-ui/issues/22426">Show us what you&#39;re building</a>! We&#39;d love to see it.</p>\n<hr>\n',{component:"modules/components/MaterialShowcase.js"}],toc:[],title:"Showcase",headers:{components:[]}}},S={};S.scope={process:{},import:{}};var M={},T={"modules/components/MaterialShowcase.js":function(){var e=a.useState("similarWebVisits"),t=(0,c.Z)(e,2),i=t[0],n=t[1],s=j[i],Z=(0,k.qM)();return(0,x.jsxs)(a.Fragment,{children:[(0,x.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center",gap:1,mb:3},children:[(0,x.jsx)(f.Z,{variant:"body2",color:"text.secondary",fontWeight:"semiBold",children:"Sort by:"}),(0,x.jsxs)(u.Z,{size:"small",color:"primary",value:i,onChange:function(e){n(e.target.value)},exclusive:!0,children:[(0,x.jsx)(p.Z,{value:"similarWebVisits",children:Z("traffic")}),(0,x.jsx)(p.Z,{value:"dateAdded",children:Z("newest")}),(0,x.jsx)(p.Z,{value:"stars",children:Z("stars")})]})]}),(0,x.jsx)(l.Z,{container:!0,spacing:3,children:C.filter(function(e){return void 0!==e[i]}).sort(s).map(function(e){return(0,x.jsx)(l.Z,{item:!0,xs:12,sm:6,children:e.image?(0,x.jsxs)(m.Z,{variant:"outlined",sx:function(e){return(0,r.Z)({height:"100%",display:"flex",flexDirection:"column",p:2,gap:2,borderRadius:1,backgroundColor:"".concat((0,b.Fq)(e.palette.grey[50],.3)),borderColor:"divider"},e.applyDarkStyles({backgroundColor:"".concat((0,b.Fq)(e.palette.primaryDark[700],.2)),borderColor:"divider"}))},children:[(0,x.jsx)("a",{href:e.link,rel:"noopener nofollow",target:"_blank",children:(0,x.jsx)(g.Z,{component:"img",loading:"lazy",width:"600",height:"450",src:"/static/images/showcase/".concat(e.image),title:e.title,sx:function(e){return(0,r.Z)({height:"auto",borderRadius:"6px",bgcolor:"currentColor",border:"1px solid",borderColor:"divider",color:"grey.100"},e.applyDarkStyles({color:"primaryDark.900"}))}})}),(0,x.jsxs)(d.Z,{sx:{flexGrow:1,display:"flex",flexDirection:"column",gap:.5},children:[(0,x.jsxs)(f.Z,{component:"h2",variant:"body1",fontWeight:"semiBold",sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,x.jsx)("span",{children:e.title}),e.source?(0,x.jsx)(h.Z,{href:e.source,target:"_blank","aria-label":"".concat(e.title," ").concat(Z("sourceCode")),children:o||(o=(0,x.jsx)(v.default,{fontSize:"small"}))}):null]}),(0,x.jsx)(f.Z,{variant:"body2",color:"text.secondary",flexGrow:1,children:e.description}),(0,x.jsxs)(f.Z,{variant:"caption",fontWeight:"semiBold",color:"text.secondary",mt:1,sx:{display:"flex",alignItems:"center",gap:.5},children:[(0,x.jsx)(w.default,{sx:{fontSize:17,opacity:.8}}),e.dateAdded]})]})]}):(0,x.jsx)(y.r,{variant:"body2",target:"_blank",rel:"noopener nofollow",href:e.link,gutterBottom:!0,children:Z("visit")})},e.title)})})]})}};function O(){return(0,x.jsx)(s.Z,(0,r.Z)((0,r.Z)({},n),{},{disableToc:!0}))}},652755:function(e,t,i){"use strict";i.d(t,{Z:function(){return y}});var o,n=i(778521),r=i(470079),a=i(639519),s=i.n(a),c=i(389136),d=i(302312),l=i(513182),p=i(597683),u=i(42141),m=i(162119),g=i(871379),f=i(775196),h=i(694366),v=i(74077),w=i(735250);function b(e){var t=e.mode,i=(0,l.tv)().setMode;return r.useEffect(function(){i(t)},[t,i]),null}function y(e){var t=(0,d.Z)(),i=(0,c.useRouter)(),a=(0,u.ln)(i.asPath).canonicalAs,s=e.disableAd,y=void 0!==s&&s,k=e.disableToc,x=e.disableCssVarsProvider,C=e.demos,Z=void 0===C?{}:C,j=e.docs,A=e.demoComponents,S=e.srcComponents,M=j[(0,g.fO)()]||j.en,T=a.startsWith("/joy-ui/")&&!(void 0!==x&&x),O=T?l.lL:r.Fragment,W=T?f.BrandingProvider:r.Fragment,E=(0,n.Z)({},T&&{mode:t.palette.mode});return(0,w.jsxs)(m.Z,{cardOptions:{description:M.headers.cardDescription,title:M.headers.cardTitle},description:M.description,disableAd:y,disableToc:void 0!==k&&k,location:M.location,title:M.title,toc:M.toc,children:[y?null:o||(o=(0,w.jsx)(f.BrandingProvider,{children:(0,w.jsx)(v.Z,{children:(0,w.jsx)(h.ZP,{})})})),(0,w.jsxs)(O,{children:[T&&(0,w.jsx)(b,{mode:t.palette.mode}),M.rendered.map(function(e,i){return(0,w.jsx)(p.Z,{demoComponents:A,demos:Z,disableAd:y,localizedDoc:M,renderedMarkdownOrDemo:e,srcComponents:S,theme:t,WrapperComponent:W,wrapperProps:E},"demos-section-".concat(i))})]})]})}b.propTypes={mode:s().oneOf(["light","dark"])}},493513:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/discover-more/showcase",function(){return i(802121)}])},884835:function(e,t,i){"use strict";var o=i(311596);function n(){}function r(){}r.resetWarningCache=n,e.exports=function(){function e(e,t,i,n,r,a){if(a!==o){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:n};return i.PropTypes=i,i}},639519:function(e,t,i){e.exports=i(884835)()},311596:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},969368:function(e,t,i){"use strict";var o=i(11234);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(i(122268)),r=i(735250);t.default=(0,n.default)((0,r.jsx)("path",{d:"M17 2c-.55 0-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1m2 18H5V10h14zm-8-7c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m-4 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m8 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m-4 4c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m-4 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m8 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1"}),"CalendarMonthRounded")}},function(e){e.O(0,[49774,9535,73976,97146,59727,85925,17376,41373,15686,34800,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,37654,11423,42378,20759,16067,40332,97683,92888,40179],function(){return e(e.s=493513)}),_N_E=e.O()}]);