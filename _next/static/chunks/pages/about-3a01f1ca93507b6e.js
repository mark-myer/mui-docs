(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12521],{190800:function(t,e,a){"use strict";a.d(e,{O:function(){return h},r:function(){return m}});var o=a(577903),n=a(778521);a(470079);var i=a(621234),r=a(859861),s=a(146803),l=a(781097),c=a(215129),u=a(735250),d=["classNameDescription","classNameTitle","description","icon","link","svg","title","titleProps"];function h(t){var e=t.icon;return(0,u.jsx)(r.Z,{sx:function(t){return(0,n.Z)({width:36,height:36,display:"flex",justifyContent:"center",alignItems:"center",flexShrink:0,borderRadius:1,border:"1px solid",borderColor:"primary.200",bgcolor:"primary.50",boxShadow:"0px 0 0 2px ".concat((0,i.Fq)(t.palette.primary[500],.1),", 0px 2px 12px 0px rgba(234, 237, 241, 0.3) inset"),"& .MuiSvgIcon-root":{fontSize:t.typography.pxToRem(18)}},t.applyDarkStyles({borderColor:(0,i.Fq)(t.palette.primary[400],.25),bgcolor:(0,i.Fq)(t.palette.primary[900],.2),boxShadow:"0 0 0 2px ".concat((0,i.Fq)(t.palette.primary[600],.1),", 0px 2px 12px 0px rgba(0, 0, 0, 0.25) inset")}))},children:e})}function m(t){var e=t.classNameDescription,a=t.classNameTitle,r=t.description,m=t.icon,g=t.link,p=t.svg,b=t.title,x=t.titleProps,f=(0,o.Z)(t,d);return(0,u.jsxs)(s.Z,(0,n.Z)((0,n.Z)((0,n.Z)({variant:"outlined",component:g?c.r:"div",href:g},g?{noLinkStyle:!0,prefetch:!1}:{}),{},{sx:function(t){return(0,n.Z)({p:2.5,height:"100%",background:"".concat((t.vars||t).palette.gradients.linearSubtle)},t.applyDarkStyles({bgcolor:(0,i.Fq)(t.palette.primaryDark[800],.25),background:"".concat((t.vars||t).palette.gradients.linearSubtle),borderColor:"primaryDark.700"}))}},f),{},{children:[p&&p,m&&(0,u.jsx)(h,{icon:m}),(0,u.jsx)(l.Z,(0,n.Z)((0,n.Z)({fontWeight:"semiBold",component:"h3",color:"text.primary",variant:"body2",mt:m?2:0,mb:r?.5:0,className:a},x),{},{children:b})),(0,u.jsx)(l.Z,{variant:"body2",color:"text.secondary",className:e,children:r})]}))}},502501:function(t,e,a){"use strict";a.d(e,{Z:function(){return k}});var o=a(577903),n=a(863363),i=a(778521),r=a(470079),s=a(653048),l=a(306029),c=a(360731),u=a(502894),d=a(632820),h=a(735250),m=(0,d.Z)((0,h.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),g=a(738633),p=a(639560),b=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],x=(0,c.Uu)("MuiAvatar"),f=function(t){var e=t.classes,a=t.variant,o=t.colorDefault;return(0,l.Z)({root:["root",a,o&&"colorDefault"],img:["img"],fallback:["fallback"]},g.$,e)},y=(0,u.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(t,e){var a=t.ownerState;return[e.root,e[a.variant],a.colorDefault&&e.colorDefault]}})(function(t){var e=t.theme;return{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:(0,i.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:(0,i.Z)({backgroundColor:e.palette.grey[400]},e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})))}]}}),v=(0,u.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(t,e){return e.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),j=(0,u.ZP)(m,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(t,e){return e.fallback}})({width:"75%",height:"75%"}),k=r.forwardRef(function(t,e){var a,l,c,u,d,m,g,k,w,Z=x({props:t,name:"MuiAvatar"}),C=Z.alt,S=Z.children,I=Z.className,M=Z.component,D=void 0===M?"div":M,P=Z.slots,A=Z.slotProps,U=Z.imgProps,T=Z.sizes,z=Z.src,E=Z.srcSet,L=Z.variant,R=(0,o.Z)(Z,b),N=null,B=(l=(a=(0,i.Z)((0,i.Z)({},U),{},{src:z,srcSet:E})).crossOrigin,c=a.referrerPolicy,u=a.src,d=a.srcSet,m=r.useState(!1),k=(g=(0,n.Z)(m,2))[0],w=g[1],r.useEffect(function(){if(u||d){w(!1);var t=!0,e=new Image;return e.onload=function(){t&&w("loaded")},e.onerror=function(){t&&w("error")},e.crossOrigin=l,e.referrerPolicy=c,e.src=u,d&&(e.srcset=d),function(){t=!1}}},[l,c,u,d]),k),F=z||E,W=F&&"error"!==B,_=(0,i.Z)((0,i.Z)({},Z),{},{colorDefault:!W,component:D,variant:void 0===L?"circular":L});delete _.ownerState;var O=f(_),X=(0,p.Z)("img",{className:O.img,elementType:v,externalForwardedProps:{slots:void 0===P?{}:P,slotProps:{img:(0,i.Z)((0,i.Z)({},U),(void 0===A?{}:A).img)}},additionalProps:{alt:C,src:z,srcSet:E,sizes:T},ownerState:_}),G=(0,n.Z)(X,2),H=G[0],K=G[1];return N=W?(0,h.jsx)(H,(0,i.Z)({},K)):S||0===S?S:F&&C?C[0]:(0,h.jsx)(j,{ownerState:_,className:O.fallback}),(0,h.jsx)(y,(0,i.Z)((0,i.Z)({as:D,className:(0,s.default)(O.root,I),ref:e},R),{},{ownerState:_,children:N}))})},738633:function(t,e,a){"use strict";a.d(e,{$:function(){return i}});var o=a(344443),n=a(92358);function i(t){return(0,n.ZP)("MuiAvatar",t)}var r=(0,o.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);e.Z=r},729062:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return tI}});var o,n,i,r,s,l,c,u,d,h,m,g,p,b,x,f,y,v,j,k,w,Z,C,S,I,M,D,P=a(885950),A=a(95820),U=a(318304),T=a(564376),z=a(778521),E=a(859861),L=a(781097),R=a(502894),N=a(616887),B=a(170027),F=a(535350),W=a(735250),_=[{number:"2014",metadata:"The starting year"},{number:"100%",metadata:"Remote global team"},{number:"20+",metadata:"Countries represented"}];function O(){return(0,W.jsx)(E.Z,{sx:{display:"flex",justifyContent:"center",gap:2},children:_.map(function(t){return(0,W.jsxs)(E.Z,{sx:{height:"100%",width:{xs:"100%",sm:200}},children:[(0,W.jsx)(L.Z,{component:"p",variant:"h4",fontWeight:"bold",sx:function(t){return(0,z.Z)({textAlign:{xs:"left",sm:"center"},color:"primary.main"},t.applyDarkStyles({color:"primary.200"}))},children:t.number}),(0,W.jsx)(L.Z,{color:"text.secondary",sx:{textAlign:{xs:"left",sm:"center"}},children:t.metadata})]},t.number)})})}var X=a(694776),G=[{img:"/static/branding/about/group-photo/teide-group.jpg",title:"A group photo of the MUI crew posing near the base of Mount Teide at the start of the hike."},{img:"/static/branding/about/group-photo/skiers.jpg",title:"MUI team members standing lined-up in the snow with their skigear."},{img:"/static/branding/about/group-photo/group-photo.jpg",title:"Photo of the MUI team in front of the pool at our accommodations in Tenerife"},{img:"/static/branding/about/group-photo/team-dinner.png",title:"Members of the MUI team sitting around a large wooden dining table."},{img:"/static/branding/about/group-photo/working-table-tenerife.png",title:"The Toolpad team working together on a heads-down moment in Tenerife."},{img:"/static/branding/about/group-photo/scuba-gear.png",title:"MUI team members and their diving instructors pose in scuba gear before a scuba diving lesson."},{img:"/static/branding/about/group-photo/outdoor-focus-group.png",title:"An impromptu focus group gathered next to the pool to discuss cross-team marketing strategies."},{img:"/static/branding/about/group-photo/working-table-portugal.png",title:"MUI team members working together on a heads-down moment in Portugal."},{img:"/static/branding/about/group-photo/snow-tea.png",title:"The team shares a cup of tea up in the mountains of Chamonix, France."},{img:"/static/branding/about/group-photo/portugal-sight-seeing.png",title:"MUI team selfie while sightseeing in Lisbon, Portugal."}],H=(0,R.ZP)("div")(function(){return{display:"flex",gap:16,justifyContent:"center"}}),K=(0,R.ZP)("img")(function(t){var e=t.theme;return(0,z.Z)({width:400,height:300,boxSizing:"content-box",objectFit:"cover",borderRadius:e.shape.borderRadius,border:"1px solid",borderColor:(e.vars||e).palette.divider,boxShadow:"0px 2px 8px ".concat((e.vars||e).palette.grey[200]),transition:"all 100ms ease"},e.applyDarkStyles({borderColor:(e.vars||e).palette.primaryDark[600],boxShadow:"0px 2px 8px ".concat((e.vars||e).palette.common.black)}))}),q=(0,N.keyframes)(o||(o=(0,T.Z)(["\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-100%)\n  }\n"])));function J(){return(0,W.jsxs)(E.Z,{sx:function(t){return(0,z.Z)({borderRadius:1,overflow:"hidden",position:"relative",minWidth:"100%",display:"flex",gap:2,my:5,"& > div":{animation:"".concat(q," 120s linear infinite")},"&::before, &::after":{background:"linear-gradient(to right, #FFF 0%, rgba(255, 255, 255, 0) 100%)",content:"''",height:"100%",position:"absolute",width:200,zIndex:1,pointerEvents:"none"},"&::before":{right:{xs:-64,sm:-20},top:0,transform:"rotateZ(180deg)"},"&::after":{left:{xs:-64,sm:-20},top:0}},t.applyDarkStyles({"&::before, &::after":{background:"linear-gradient(to right, ".concat((t.vars||t).palette.primaryDark[900]," 0%, rgba(0, 0, 0, 0) 100%)")}}))},children:[(0,W.jsx)(H,{children:G.map(function(t,e){return(0,W.jsx)(K,{src:t.img,alt:t.title,loading:e>2?"lazy":void 0,fetchPriority:e>2?void 0:"high"},e)})}),(0,W.jsx)(H,{"aria-hidden":"true",children:G.map(function(t,e){return(0,W.jsx)(K,{src:t.img,alt:t.title,loading:"lazy"},e)})})]})}function V(){return n||(n=(0,W.jsxs)(B.Z,{cozy:!0,bg:"gradient",children:[(0,W.jsx)(X.Z,{alwaysCenter:!0,overline:"About us",title:(0,W.jsxs)(L.Z,{variant:"h2",component:"h1",children:["We're on a mission to make ",(0,W.jsx)("br",{})," ",(0,W.jsx)(F.Z,{children:"building better UIs effortless"})]}),description:"Together, we are enabling developers & designers to bring stunning UIs to life with unrivalled speed and ease."}),(0,W.jsx)(J,{}),(0,W.jsx)(O,{})]}))}var Y=a(323521),Q=a(470079),$=a(502501),tt=a(651600),te=a(258350),ta=a(214077),to=a(320897),tn=a(146803),ti=a(553093),tr=a(796839),ts=a(647342),tl=a(814933),tc=a(188684),tu=a(215129),td=a(905636),th=JSON.parse('[{"name":"Olivier Tassinari","title":"Co-founder, CEO","location":"Paris, France","locationCountry":"fr","about":"Exercise addict and lifelong learner","twitter":"olivtassinari","github":"oliviertassinari"},{"name":"Matt Brookes","title":"Co-founder, Head of Sales","location":"London, UK","locationCountry":"gb","about":"When I\'m not \uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDCBB, I\'m \uD83E\uDDD7\uD83C\uDFFC‍♂️","twitter":"randomtechdude","github":"mbrookes"},{"name":"Marija Najdova","title":"Engineering Manager - Core","location":"Skopje, North Macedonia","locationCountry":"mk","about":"I do karate \uD83E\uDD4B and read \uD83D\uDCDA. A lot!","twitter":"marijanajdova","github":"mnajdova"},{"name":"Danail Hadjiatanasov","title":"Engineering Manager - X","location":"Sofia, Bulgaria","locationCountry":"bg","about":"Boringly normal, geek deep down. I like \uD83D\uDE97  and \uD83C\uDFC2","twitter":"danail_h","github":"DanailH"},{"name":"Michał Dudak","title":"Software Engineer - Core","location":"Silesia, Poland","locationCountry":"pl","about":"Motorcyclist, gamer, and coder (UI and more!)","twitter":"michaldudak","github":"michaldudak"},{"name":"Siriwat Kunaporn","title":"Software Engineer - Core","location":"Bangkok, Thailand","locationCountry":"th","about":"UI Lover and ⛷ skiing newbie.","twitter":"siriwatknp","github":"siriwatknp"},{"name":"Danilo Leal","title":"Lead Designer","location":"S\xe3o Paulo, Brazil","locationCountry":"br","about":"Music production, hiking, and traveling!","github":"danilo-leal","twitter":"danilobleal"},{"name":"Flavien Delangle","title":"Tech Lead - X","location":"Lille, France","about":"Love cycling \uD83D\uDEB4‍♂️ and reading \uD83D\uDCDA","locationCountry":"fr","github":"flaviendelangle"},{"name":"Alexandre Fauquette","title":"Software Engineer - X","location":"Nancy, France","locationCountry":"fr","about":"Love hacking and cycling \uD83D\uDEB4‍♂️","twitter":"AleFauquette","github":"alexfauquette"},{"name":"Bharat Kashyap","title":"Software Engineer - Toolpad","location":"New Delhi, India","locationCountry":"in","about":"Trains \uD83D\uDE85 , architecture \uD83C\uDFDB️ , and psychology \uD83E\uDDE0 ","twitter":"bharattttttt","github":"bharatkashyap"},{"name":"Jan Potoms","title":"Tech Lead - Toolpad","location":"Brussels, Belgium","locationCountry":"be","about":"Always curious, I enjoy cinema and hiking","github":"janpot"},{"name":"Prakhar Gupta","title":"Product Manager - Toolpad","location":"New Delhi, India","locationCountry":"in","about":"Into sports and hiking!","twitter":"gprakhar123","github":"prakhargupta1"},{"name":"Jos\xe9 Freitas","title":"Technical Product Manager - X","location":"Augsburg, Germany","locationCountry":"de","about":"Art, fiction, and bar philosophy","twitter":"zehdefreitas","github":"joserodolfofreitas"},{"name":"Andrii Cherniavskyi","title":"Tech Lead - X","location":"Wrocław, Poland","locationCountry":"pl","about":"Love playing music - electric and bass guitar \uD83C\uDFB8","twitter":"iamcherniavskii","github":"cherniavskii"},{"name":"Sam Sycamore","title":"Developer Advocate","location":"Saint Paul, Minnesota, USA","locationCountry":"us","about":"Musician and edible wild plant enthusiast \uD83C\uDF31","twitter":"tanoaksam","github":"samuelsycamore"},{"name":"Pedro Ferreira","title":"Software Engineer - Toolpad","location":"Porto, Portugal","locationCountry":"pt","about":"Passionate about videogames and football","github":"apedroferreira"},{"name":"Greg Abaoag","title":"Executive Assistant","location":"Philippines","locationCountry":"ph","about":"Loves DIY, singing and learning","github":"zannager"},{"name":"Tina Deinekhovska","title":"Business Administrator","location":"London, UK","locationCountry":"gb","about":"Empathic art-lover, incurable optimist keen on biking, gardening","github":"TinaDein"},{"name":"Lukas Tyla","title":"Software Engineer - X","location":"Vilnius, Lithuania","locationCountry":"lt","about":"Learning and experimenting \uD83D\uDCDA","github":"LukasTy"},{"name":"Bilal Shafi","title":"Software Engineer - X","location":"Islamabad, Pakistan","locationCountry":"pk","about":"DIY \uD83D\uDEE0️, Learning \uD83D\uDCDA and \uD83C\uDFD3","twitter":"MBilalShafi","github":"MBilalShafi"},{"name":"Albert Yu","title":"Software Engineer - Core","location":"Hong Kong","locationCountry":"hk","about":"Minimalist, dog lover \uD83C\uDFD4\uD83D\uDC15","github":"mj12albert","twitter":"mj12albert"},{"name":"Mikaila Read","title":"Senior People & Culture Partner","location":"Newcastle Upon Tyne, UK","locationCountry":"gb","about":"\uD83E\uDDD7‍♂️ Amateur indoor climber & ex-philosophy geek","github":"mikailaread"},{"name":"Romain Gr\xe9goire","title":"Software Engineer - X","location":"Montr\xe9al, Canada","locationCountry":"ca","about":"Open-source tinkerer","github":"romgrk"},{"name":"Victor Zanivan","title":"Senior Designer - Core","location":"S\xe3o Paulo, Brazil","locationCountry":"br","about":"Very geek \uD83C\uDFAE and love to watch/play football ⚽️","github":"zanivan","twitter":"Zanivan_"},{"name":"Diego Andai","title":"Software Engineer - Core","location":"Santiago, Chile","locationCountry":"cl","about":"I love tennis \uD83C\uDFBE and cats \uD83D\uDC08","twitter":"DiegoAndaiC","github":"DiegoAndai"},{"name":"Brijesh Bittu","title":"Software Engineer - Core","location":"Bengaluru, India","locationCountry":"in","about":"\uD83C\uDFCA\uD83C\uDFFC Swimming and \uD83D\uDE97 driving newbie. Loves cooking.","github":"brijeshb42"},{"name":"David Cnoops","title":"Design Engineer - Core","location":"Leuven, Belgium","locationCountry":"be","about":"Volleyball, Cycling, Parenting, Movies","github":"DavidCnoops"},{"name":"Raffaella Luzi","title":"Head of Operations","location":"Rome, Italy","locationCountry":"it","about":"NYT crossword \uD83D\uDCDD in one hand and a croissant \uD83E\uDD50 in the other","github":"rluzists1"},{"name":"Nora Leonte","title":"Design Engineer - X","location":"Cluj-Napoca, Romania","locationCountry":"ro","about":"Art enthusiast \uD83C\uDFA8 outdoor person \uD83C\uDF33 animal lover \uD83D\uDC3E","github":"noraleonte"},{"name":"Michel Engelen","title":"React Community Engineer - X","location":"Zeven, Germany","locationCountry":"de","about":"Geeking out on Badminton \uD83C\uDFF8, everything Japan \uD83C\uDDEF\uD83C\uDDF5 and Pizza \uD83C\uDF55","twitter":"jsNerdic","github":"michelengelen"},{"name":"Vadym Raksha","title":"Product Engineer - Store","location":"Prague, Czech Republic","locationCountry":"cz","about":"Product experience geek \uD83D\uDECB, Mediterranean vibes \uD83C\uDF4A","twitter":"vadym_raksha","github":"hasdfa"},{"name":"Nadja Kovacev","title":"Talent & Culture Partner","location":"Novi Sad, Serbia","locationCountry":"rs","about":"\uD83E\uDDE0 Psychology geek, \uD83C\uDFC2 amateur snowboarder, and \uD800\uDCE1 pottery enthusiast."},{"name":"James Nelson","title":"Software Engineer - Base UI","location":"Gold Coast, Australia","locationCountry":"au","about":"Enjoy creating open source libraries and reading about AI \uD83E\uDD16","twitter":"atomiksdev","github":"atomiks"},{"name":"Aar\xf3n Garc\xeda","title":"Design Engineer - Core","location":"Alicante, Spain","locationCountry":"es","about":"Minimalism, web development, user experience, football, cycling","twitter":"aarongarciah","github":"aarongarciah"},{"name":"Jose Quintas","title":"React Engineer - X","location":"Amsterdam, Netherlands","locationCountry":"nl","about":"A general knowledge gatherer. Gamer and programmer in the off hours.","github":"JCQuintas"},{"name":"Arthur Balduini","title":"React Engineer - X","location":"Paris, France","locationCountry":"fr","about":"Cooking \uD83C\uDF73, plant caring \uD83E\uDEB4 and literature \uD83D\uDCD6","github":"arthurbalduini"},{"name":"Kenan Yusuf","title":"Design Engineer - X","location":"London, UK","locationCountry":"gb","about":"Amateur cook, DIYer, and film photographer","github":"KenanYusuf","twitter":"KebabYusuf"},{"name":"Nikita Ossei","title":"Customer Support","location":"London, United Kingdom","locationCountry":"gb","about":"Astrology ♊️, learning \uD83D\uDCDA and designing stuff \uD83C\uDFA8","github":"nikitaa24"}]');function tm(t){var e;return(0,W.jsxs)(tn.Z,{variant:"outlined",sx:(0,z.Z)({p:2,height:"100%"},t.sx),children:[(0,W.jsxs)(E.Z,{sx:{display:"flex",alignItems:"flex-start",flexWrap:"wrap","& > div":{minWidth:"clamp(0px, (150px - 100%) * 999 ,100%)"}},children:[(0,W.jsx)(ti.Z,{title:t.location||!1,placement:"right-end",describeChild:!0,PopperProps:{popperOptions:{modifiers:[{name:"offset",options:{offset:[3,2]}}]}},children:(0,W.jsxs)(E.Z,{sx:{position:"relative",display:"inline-block"},children:[(0,W.jsx)($.Z,(0,z.Z)((0,z.Z)({variant:"rounded",imgProps:{width:"70",height:"70",loading:"lazy"},src:t.src,alt:t.name},(null===(e=t.src)||void 0===e?void 0:e.startsWith("https://avatars.githubusercontent.com"))&&{src:"".concat(t.src,"?s=70"),srcSet:"".concat(t.src,"?s=140 2x")}),{},{sx:function(t){return(0,z.Z)({width:70,height:70,borderRadius:1,border:"1px solid",borderColor:"grey.100",backgroundColor:"primary.50"},t.applyDarkStyles({backgroundColor:"primary.900",borderColor:"primaryDark.500"}))}})),(0,W.jsx)(E.Z,{sx:function(t){return(0,z.Z)({width:24,height:24,display:"flex",justifyContent:"center",position:"absolute",bottom:0,right:0,backgroundColor:"#FFF",borderRadius:40,border:"2px solid",borderColor:"primary.50",boxShadow:"0px 2px 6px rgba(0, 0, 0, 0.1)",transform:"translateX(50%)",overflow:"hidden"},t.applyDarkStyles({borderColor:"primary.200"}))},children:(0,W.jsx)("img",{loading:"lazy",height:"20",width:"40",src:"https://flagcdn.com/".concat(t.locationCountry,".svg"),alt:""})})]})}),(0,W.jsxs)(E.Z,{sx:{mt:-.5,mr:-.5,ml:"auto"},children:[t.github&&(0,W.jsx)(ta.Z,{"aria-label":"".concat(t.name," GitHub profile"),component:"a",href:"https://github.com/".concat(t.github),target:"_blank",rel:"noopener",children:(0,W.jsx)(tl.default,{fontSize:"small",sx:{color:"grey.500"}})}),t.twitter&&(0,W.jsx)(ta.Z,{"aria-label":"".concat(t.name," X profile"),component:"a",href:"https://x.com/".concat(t.twitter),target:"_blank",rel:"noopener",children:(0,W.jsx)(ts.default,{fontSize:"small",sx:{color:"grey.500"}})}),t.linkedin&&(0,W.jsx)(ta.Z,{"aria-label":"".concat(t.name," LinkedIn profile"),component:"a",href:"https://www.linkedin.com/".concat(t.linkedin),target:"_blank",rel:"noopener",children:(0,W.jsx)(tc.default,{fontSize:"small",sx:{color:"grey.500"}})})]})]}),(0,W.jsx)(L.Z,{variant:"body2",fontWeight:"bold",sx:{mt:2,mb:.5},children:t.name}),(0,W.jsx)(L.Z,{variant:"body2",color:"text.secondary",children:t.title}),t.about&&(0,W.jsx)(P.Z,{sx:{my:1.5}}),t.about&&(0,W.jsx)(L.Z,{variant:"body2",color:"text.tertiary",children:t.about})]})}var tg=[{name:"Sebastian Silbermann",github:"eps1lon",title:"Material\xa0UI, everything Open Source",location:"Berlin, Germany",locationCountry:"de",src:"https://avatars.githubusercontent.com/u/12292047",twitter:"sebsilbermann"},{name:"Ryan Cogswell",github:"ryancogswell",title:"Stack\xa0Overflow top contributor",location:"Minnesota, United States",locationCountry:"us",src:"https://avatars.githubusercontent.com/u/287804"},{name:"Yan Lee",github:"AGDholo",title:"Chinese docs",location:"China",locationCountry:"cn",src:"https://avatars.githubusercontent.com/u/13300332"},{name:"Jairon Alves Lima",github:"jaironalves",title:"Brazilian Portuguese docs",location:"S\xe3o Paulo, Brazil",locationCountry:"br",src:"https://avatars.githubusercontent.com/u/29267813"},{name:"Danica Shen",github:"DDDDDanica",title:"Chinese docs",location:"Ireland",locationCountry:"ie",src:"https://avatars.githubusercontent.com/u/12678455"}],tp=[{name:"Hai Nguyen",github:"hai-cea",twitter:"haicea",title:"Material\xa0UI, v0.x creator",location:"Dallas, US",locationCountry:"us",src:"https://avatars.githubusercontent.com/u/2007468"},{name:"Nathan Marks",github:"nathanmarks",title:"Material\xa0UI, v1.x co-creator",location:"Toronto, CA",locationCountry:"ca",src:"https://avatars.githubusercontent.com/u/4420103"},{name:"Kevin Ross",github:"rosskevin",twitter:"rosskevin",title:"Material\xa0UI, flow",location:"Franklin, US",locationCountry:"us",src:"https://avatars.githubusercontent.com/u/136564"},{name:"Sebastian Sebald",github:"sebald",twitter:"sebastiansebald",title:"Material\xa0UI",location:"Freiburg, Germany",locationCountry:"de",src:"https://avatars.githubusercontent.com/u/985701"},{name:"Ken Gregory",github:"kgregory",title:"Material\xa0UI",location:"New Jersey, US",locationCountry:"us",src:"https://avatars.githubusercontent.com/u/3155127"},{name:"Tom Crockett",github:"pelotom",twitter:"pelotom",title:"Material\xa0UI",location:"Los Angeles, US",locationCountry:"us",src:"https://avatars.githubusercontent.com/u/128019"},{name:"Maik Marschner",github:"leMaik",twitter:"leMaikOfficial",title:"Material\xa0UI",location:"Hannover, Germany",locationCountry:"de",src:"https://avatars.githubusercontent.com/u/5544859"},{name:"Oleg Slobodskoi",github:"kof",twitter:"oleg008",title:"Material\xa0UI, JSS",location:"Berlin, Germany",locationCountry:"de",src:"https://avatars.githubusercontent.com/u/52824"},{name:"Dmitriy Kovalenko",github:"dmtrKovalenko",twitter:"goose_plus_plus",title:"MUI\xa0X Date Pickers",location:"Kharkiv, Ukraine",locationCountry:"ua",src:"https://avatars.githubusercontent.com/u/16926049"},{name:"Josh Wooding",github:"joshwooding",twitter:"JoshWooding_",title:"Material\xa0UI, J.P. Morgan",location:"London, UK",locationCountry:"gb",src:"https://avatars.githubusercontent.com/u/12938082"}];function tb(){return(0,W.jsxs)(Q.Fragment,{children:[(0,W.jsxs)(B.Z,{cozy:!0,children:[(0,W.jsxs)(E.Z,{sx:{my:4,display:"flex",flexDirection:"column"},children:[i||(i=(0,W.jsx)(X.Z,{overline:"Team",title:(0,W.jsxs)(L.Z,{variant:"h2",id:"muiers",children:["Meet the ",(0,W.jsx)(F.Z,{children:"MUIers"})]}),description:"Contributing from all corners of the world, MUI is a global, fully-remote team & community."})),(0,W.jsx)(tt.Z,{component:tu.r,noLinkStyle:!0,href:td.Z.careers,endIcon:r||(r=(0,W.jsx)(tr.default,{fontSize:"small"})),variant:"contained",sx:{width:{xs:"100%",sm:"fit-content"}},children:"View careers"})]}),(0,W.jsx)(to.Z,{container:!0,spacing:2,children:th.map(function(t){var e=(0,z.Z)({src:"/static/branding/about/".concat(t.name.split(" ").map(function(t){return t.toLowerCase()}).join("-"),".png")},t);return(0,W.jsx)(to.Z,{xs:12,sm:6,md:3,children:(0,W.jsx)(tm,(0,z.Z)({},e))},e.name)})})]}),s||(s=(0,W.jsx)(P.Z,{})),(0,W.jsx)(E.Z,{"data-mui-color-scheme":"dark",sx:{bgcolor:"common.black"},children:(0,W.jsxs)(te.Z,{sx:{py:{xs:4,sm:8}},children:[l||(l=(0,W.jsx)(L.Z,{component:"h3",variant:"h4",color:"primary.200",fontWeight:"semiBold",children:"Community contributors"})),(0,W.jsx)(L.Z,{color:"text.secondary",sx:{maxWidth:{md:500}},children:"Special members of the community deserve a shout-out for their ever-lasting impact on MUI's products."}),(0,W.jsx)(to.Z,{container:!0,spacing:2,mt:2,children:tg.map(function(t){return(0,W.jsx)(to.Z,{xs:12,sm:6,md:3,children:(0,W.jsx)(tm,(0,z.Z)((0,z.Z)({},t),{},{sx:{bgcolor:"primaryDark.600"}}))},t.name)})}),(0,W.jsx)(P.Z,{sx:{my:{xs:2,sm:6}}}),c||(c=(0,W.jsx)(L.Z,{component:"h3",variant:"h4",color:"warning.300",fontWeight:"semiBold",children:"Community emeriti"})),(0,W.jsx)(L.Z,{color:"text.secondary",sx:{maxWidth:{md:500}},children:"We honor some no-longer-active core team members who have made valuable contributions in the past. They advise us from time to time."}),(0,W.jsx)(to.Z,{container:!0,spacing:2,mt:2,children:tp.map(function(t){return(0,W.jsx)(to.Z,{xs:12,sm:6,md:3,children:(0,W.jsx)(tm,(0,z.Z)((0,z.Z)({},t),{},{sx:{bgcolor:"primaryDark.600"}}))},t.name)})})]})})]})}var tx=a(551759),tf=a(279193),ty=a(805350),tv=a(190800);function tj(t){var e=t.children,a=t.title,o=t.icon;return(0,W.jsxs)(tn.Z,{variant:"outlined",sx:function(t){return(0,z.Z)({p:3,height:"100%",display:"flex",flexDirection:"column",background:"".concat((t.vars||t).palette.gradients.linearSubtle)},t.applyDarkStyles({background:"".concat((t.vars||t).palette.gradients.linearSubtle)}))},children:[(0,W.jsx)(tv.O,{icon:o}),(0,W.jsx)(L.Z,{fontWeight:"bold",component:"h3",color:"text.primary",variant:"body2",mt:2,mb:.5,children:a}),e]})}function tk(){return(0,W.jsxs)(B.Z,{cozy:!0,children:[(0,W.jsx)(X.Z,{overline:"Support us",title:(0,W.jsxs)(L.Z,{variant:"h2",sx:{mb:4},children:["Learn how to support",u||(u=(0,W.jsx)("br",{}))," ",d||(d=(0,W.jsx)(F.Z,{children:"MUI's growth"}))]}),description:""}),(0,W.jsxs)(to.Z,{container:!0,spacing:3,children:[(0,W.jsx)(to.Z,{xs:12,sm:6,md:4,children:(0,W.jsxs)(tj,{icon:h||(h=(0,W.jsx)(tx.default,{fontSize:"small",color:"primary"})),title:"Give feedback",children:[(0,W.jsxs)(L.Z,{variant:"body2",color:"text.secondary",sx:{mb:1},children:["Tell us what and where we can improve or share your happy moments with us! You can also up or downvote any page on our documentation. ",m||(m=(0,W.jsx)("br",{})),g||(g=(0,W.jsx)("br",{}))," And lastly, from time to time, we send our community a survey for more structured feedback, you're always invited to participate to share your thoughts."]}),(0,W.jsxs)(tt.Z,{component:"a",size:"small",variant:"outlined",fullWidth:!0,href:"https://github.com/mui/material-ui/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc",endIcon:p||(p=(0,W.jsx)(tr.default,{})),sx:{mt:"auto"},children:["Leave your feedback"," "]})]})}),(0,W.jsx)(to.Z,{xs:12,sm:6,md:4,children:(0,W.jsxs)(tj,{icon:b||(b=(0,W.jsx)(tf.default,{fontSize:"small",color:"primary"})),title:"Join the community",children:[(0,W.jsx)(L.Z,{variant:"body2",color:"text.secondary",sx:{mb:1},children:"Become a member of a huge community of developers supporting MUI. You can:"}),(0,W.jsxs)(E.Z,{component:"ul",sx:{typography:"body2",color:"text.secondary",pl:2,mb:2},children:[x||(x=(0,W.jsxs)("li",{children:["Add new features by"," ",(0,W.jsx)(tu.r,{href:"https://github.com/mui/material-ui/blob/HEAD/CONTRIBUTING.md#your-first-pull-request",children:"submitting a pull request"}),"."]})),f||(f=(0,W.jsxs)("li",{children:["Fix bugs or"," ",(0,W.jsx)(tu.r,{href:"https://github.com/mui/material-ui/tree/HEAD/docs",children:"improve our documentation"}),"."]})),y||(y=(0,W.jsxs)("li",{children:["Help others by reviewing and commenting on existing"," ",(0,W.jsx)(tu.r,{href:"https://github.com/mui/material-ui/pulls",children:"PRs"})," and"," ",(0,W.jsx)(tu.r,{href:"https://github.com/mui/material-ui/issues",children:"issues"}),"."]})),v||(v=(0,W.jsxs)("li",{children:["Help ",(0,W.jsx)(tu.r,{href:"https://crowdin.com/project/material-ui-docs",children:"translate"})," the documentation."]})),j||(j=(0,W.jsxs)("li",{children:["Answer questions on"," ",(0,W.jsx)(tu.r,{href:"https://stackoverflow.com/questions/tagged/material-ui",children:"Stack\xa0Overflow"}),"."]}))]}),(0,W.jsx)(tt.Z,{component:"a",size:"small",variant:"outlined",fullWidth:!0,href:"https://github.com/mui/material-ui",endIcon:k||(k=(0,W.jsx)(tr.default,{})),sx:{mt:"auto"},children:"See the repository"})]})}),(0,W.jsx)(to.Z,{xs:12,sm:6,md:4,children:(0,W.jsxs)(tj,{icon:w||(w=(0,W.jsx)(ty.default,{fontSize:"small",color:"primary"})),title:"Support us financially",children:[(0,W.jsxs)(L.Z,{variant:"body2",color:"text.secondary",sx:{mb:1},children:["If you use MUI in a commercial project and would like to support its continued development by becoming a Sponsor, or in a side or hobby project and would like to become a Backer, you can do so through ","Open\xa0Collective",".",Z||(Z=(0,W.jsx)("br",{})),C||(C=(0,W.jsx)("br",{})),"All funds donated are managed transparently, and Sponsors receive recognition in the README and on the MUI home page."]}),(0,W.jsx)(tt.Z,{component:"a",size:"small",variant:"outlined",fullWidth:!0,href:"https://opencollective.com/mui-org",endIcon:S||(S=(0,W.jsx)(tr.default,{})),sx:{mt:"auto"},children:"See Open\xa0Collective"})]})})]})]})}function tw(){return(0,W.jsxs)(B.Z,{bg:"gradient",sx:{p:{sm:8}},children:[(0,W.jsxs)(E.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",position:"relative"},children:[I||(I=(0,W.jsx)(X.Z,{alwaysCenter:!0,overline:"Join us",title:(0,W.jsxs)(L.Z,{variant:"h2",children:[(0,W.jsx)(F.Z,{children:"Build the next generation"}),(0,W.jsx)("br",{})," of tools for UI development"]}),description:"Together, we are enabling developers & designers to bring stunning UIs to life with unrivalled speed and ease."})),(0,W.jsx)(tt.Z,{component:tu.r,noLinkStyle:!0,href:td.Z.careers,endIcon:M||(M=(0,W.jsx)(tr.default,{fontSize:"small"})),variant:"contained",sx:{width:{xs:"100%",sm:"fit-content"}},children:"View careers"})]}),(0,W.jsx)(E.Z,{component:"img",src:"/static/branding/about/illustrations/team-globe-distribution-light.png",alt:"A map illustration with pins loosely positioned where team members from MUI are located.",loading:"lazy",sx:function(t){return(0,z.Z)({mt:-20,display:{xs:"none",sm:"block"},width:"100%",aspectRatio:"231/145"},t.applyDarkStyles({content:"url(/static/branding/about/illustrations/team-globe-distribution-dark.png)"}))}})]})}var tZ=a(248247),tC=a(259106),tS=a(48392);function tI(){return D||(D=(0,W.jsxs)(tC.Z,{children:[(0,W.jsx)(tZ.Z,{title:"About us - MUI",description:"MUI is a 100% remote globally distributed team, supported by a community of thousands of developers all across the world.",card:"/static/social-previews/about-preview.jpg"}),(0,W.jsx)(tS.Z,{}),(0,W.jsx)(A.Z,{}),(0,W.jsxs)("main",{id:"main-content",children:[(0,W.jsx)(V,{}),(0,W.jsx)(P.Z,{}),(0,W.jsx)(Y.Z,{}),(0,W.jsx)(P.Z,{}),(0,W.jsx)(tb,{}),(0,W.jsx)(P.Z,{}),(0,W.jsx)(tk,{}),(0,W.jsx)(P.Z,{}),(0,W.jsx)(tw,{}),(0,W.jsx)(P.Z,{})]}),(0,W.jsx)(U.Z,{})]}))}},323521:function(t,e,a){"use strict";a.d(e,{Z:function(){return y}});var o,n,i=a(778521),r=a(859861),s=a(651600),l=a(320897),c=a(146803),u=a(781097),d=a(796839),h=a(215129),m=a(535350),g=a(905636),p=a(170027),b=a(694776),x=a(735250),f=[{title:"Put community first \uD83D\uDC99",description:"We never lose sight of who we're serving and why.",lightIcon:"url(/static/branding/about/illustrations/community-light.svg)",darkIcon:"url(/static/branding/about/illustrations/community-dark.svg)",width:92,height:84},{title:"Avoid bureaucracy \uD83D\uDEAB",description:"We're so not corporate — and we like it that way.",lightIcon:"url(/static/branding/about/illustrations/bureaucracy-light.svg)",darkIcon:"url(/static/branding/about/illustrations/bureaucracy-dark.svg)",width:81,height:94},{title:'Chase "better" \uD83C\uDF31',description:"We're driven by an unending desire to improve.",lightIcon:"url(/static/branding/about/illustrations/better-light.svg)",darkIcon:"url(/static/branding/about/illustrations/better-dark.svg)",width:89,height:89},{title:"Trust and deliver together \uD83D\uDE80",description:"We choose to cultivate unity as the core of achievement.",lightIcon:"url(/static/branding/about/illustrations/trust-light.svg)",darkIcon:"url(/static/branding/about/illustrations/trust-dark.svg)",width:75,height:92}];function y(){return(0,x.jsxs)(p.Z,{cozy:!0,children:[o||(o=(0,x.jsx)(b.Z,{overline:"Our values",title:(0,x.jsxs)(u.Z,{variant:"h2",children:["The MUI ",(0,x.jsx)(m.Z,{children:"team pact"})]}),description:"They explain the behaviors and mindsets we actively encourage, discourage, and why. They serve as a guide toward better decision-making, results, and experiences at work."})),(0,x.jsx)(s.Z,{component:h.r,noLinkStyle:!0,href:g.Z.handbook,endIcon:n||(n=(0,x.jsx)(d.default,{fontSize:"small"})),variant:"contained",sx:{width:{xs:"100%",sm:"fit-content"}},children:"View our handbook"}),(0,x.jsx)(l.Z,{container:!0,spacing:3,sx:{mt:{xs:1,sm:2}},children:f.map(function(t){var e=t.title,a=t.description,o=t.darkIcon,n=t.lightIcon,s=t.height,d=t.width;return(0,x.jsx)(l.Z,{xs:12,md:3,children:(0,x.jsxs)(c.Z,{variant:"outlined",sx:function(t){return(0,i.Z)({p:4,height:"100%",display:"flex",flexDirection:"column",alignItems:"space-between",gap:1.5,background:"".concat((t.vars||t).palette.gradients.linearSubtle)},t.applyDarkStyles({bgcolor:"primaryDark.900",background:"".concat((t.vars||t).palette.gradients.linearSubtle),borderColor:"primaryDark.700"}))},children:[(0,x.jsx)(r.Z,{sx:{height:94},children:(0,x.jsx)(r.Z,{width:d,height:s,sx:function(t){return(0,i.Z)({background:"".concat(n)},t.applyDarkStyles({background:"".concat(o)}))}})}),(0,x.jsxs)(r.Z,{sx:{flexGrow:1},children:[(0,x.jsx)(u.Z,{fontWeight:"bold",component:"h3",variant:"body2",sx:function(t){return(0,i.Z)({mb:.5,color:(t.vars||t).palette.text.primary,"&::first-letter":{mr:.1,fontSize:t.typography.pxToRem(16),color:(t.vars||t).palette.primary.main}},t.applyDarkStyles({"&::first-letter":{color:(t.vars||t).palette.primary[400]}}))},children:e}),(0,x.jsx)(u.Z,{variant:"body2",color:"text.secondary",children:a})]})]})},e)})})]})}},535350:function(t,e,a){"use strict";var o=(0,a(502894).ZP)("span")(function(t){var e=t.theme,a=t.color,o=void 0===a?"primary":a;return{background:"linear-gradient(90deg, ".concat((e.vars||e).palette[o][400]," 5%, ").concat((e.vars||e).palette[o].main," 90%)"),WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}});e.Z=o},681665:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return a(729062)}])},551759:function(t,e,a){"use strict";var o=a(11234);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(a(122268)),i=a(735250);e.default=(0,n.default)((0,i.jsx)("path",{d:"M20 6h-1v8c0 .55-.45 1-1 1H6v1c0 1.1.9 2 2 2h10l4 4V8c0-1.1-.9-2-2-2m-3 5V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13l4-4h9c1.1 0 2-.9 2-2"}),"ForumRounded")},805350:function(t,e,a){"use strict";var o=a(11234);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(a(122268)),i=a(735250);e.default=(0,n.default)((0,i.jsx)("path",{d:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m0 13c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1zm-6-7c.55 0 1-.45 1-1s-.45-1-1-1h-1v-.01c0-.55-.45-1-1-1s-1 .45-1 1V8h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1h-3c-.55 0-1 .45-1 1s.45 1 1 1h1c0 .55.45 1 1 1s1-.45 1-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1z"}),"LocalAtmRounded")},279193:function(t,e,a){"use strict";var o=a(11234);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(a(122268)),i=a(735250);e.default=(0,n.default)((0,i.jsx)("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V18c0 .35-.07.69-.18 1H22c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5"}),"PeopleRounded")}},function(t){t.O(0,[49774,9535,73976,97146,59727,85925,56831,22274,89068,48003,45678,31082,39987,71427,75794,53301,66215,83030,27803,20897,92888,40179],function(){return t(t.s=681665)}),_N_E=t.O()}]);