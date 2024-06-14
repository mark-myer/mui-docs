"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25816],{502501:function(e,t,r){r.d(t,{Z:function(){return k}});var a=r(577903),o=r(863363),n=r(778521),i=r(470079),s=r(653048),l=r(306029),c=r(360731),u=r(502894),d=r(632820),m=r(735250),h=(0,d.Z)((0,m.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),p=r(738633),g=r(639560),f=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],v=(0,c.Uu)("MuiAvatar"),y=function(e){var t=e.classes,r=e.variant,a=e.colorDefault;return(0,l.Z)({root:["root",r,a&&"colorDefault"],img:["img"],fallback:["fallback"]},p.$,t)},x=(0,u.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})(function(e){var t=e.theme;return{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:(0,n.Z)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:(0,n.Z)({backgroundColor:t.palette.grey[400]},t.applyStyles("dark",{backgroundColor:t.palette.grey[600]})))}]}}),b=(0,u.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),w=(0,u.ZP)(h,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,t){return t.fallback}})({width:"75%",height:"75%"}),k=i.forwardRef(function(e,t){var r,l,c,u,d,h,p,k,S,Z=v({props:e,name:"MuiAvatar"}),j=Z.alt,D=Z.children,P=Z.className,z=Z.component,I=void 0===z?"div":z,M=Z.slots,R=Z.slotProps,A=Z.imgProps,C=Z.sizes,F=Z.src,q=Z.srcSet,U=Z.variant,E=(0,a.Z)(Z,f),W=null,B=(l=(r=(0,n.Z)((0,n.Z)({},A),{},{src:F,srcSet:q})).crossOrigin,c=r.referrerPolicy,u=r.src,d=r.srcSet,h=i.useState(!1),k=(p=(0,o.Z)(h,2))[0],S=p[1],i.useEffect(function(){if(u||d){S(!1);var e=!0,t=new Image;return t.onload=function(){e&&S("loaded")},t.onerror=function(){e&&S("error")},t.crossOrigin=l,t.referrerPolicy=c,t.src=u,d&&(t.srcset=d),function(){e=!1}}},[l,c,u,d]),k),N=F||q,G=N&&"error"!==B,O=(0,n.Z)((0,n.Z)({},Z),{},{colorDefault:!G,component:I,variant:void 0===U?"circular":U});delete O.ownerState;var T=y(O),_=(0,g.Z)("img",{className:T.img,elementType:b,externalForwardedProps:{slots:void 0===M?{}:M,slotProps:{img:(0,n.Z)((0,n.Z)({},A),(void 0===R?{}:R).img)}},additionalProps:{alt:j,src:F,srcSet:q,sizes:C},ownerState:O}),H=(0,o.Z)(_,2),J=H[0],L=H[1];return W=G?(0,m.jsx)(J,(0,n.Z)({},L)):D||0===D?D:N&&j?j[0]:(0,m.jsx)(w,{ownerState:O,className:T.fallback}),(0,m.jsx)(x,(0,n.Z)((0,n.Z)({as:I,className:(0,s.default)(T.root,P),ref:t},E),{},{ownerState:O,children:W}))})},738633:function(e,t,r){r.d(t,{$:function(){return n}});var a=r(344443),o=r(92358);function n(e){return(0,o.ZP)("MuiAvatar",e)}var i=(0,a.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);t.Z=i},225816:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var a,o=r(778521),n=r(621234),i=r(502501),s=r(859861),l=r(781097),c=r(320897),u=r(735250),d=[{title:"5.8M",metadata:"Weekly downloads on npm"},{title:"90.5k",metadata:"Stars on GitHub"},{title:"2.9k",metadata:"Open-source contributors"},{title:"18.9k",metadata:"Followers on X"}];function m(){return(0,u.jsx)(s.Z,{"data-mui-color-scheme":"dark",sx:function(e){return{pt:{xs:1,sm:2.5},pb:{xs:2,sm:3},pl:{xs:2,sm:0},pr:0,display:"flex",justifyContent:"center",gap:{xs:0,sm:1},width:"100%",flexWrap:"wrap",background:"linear-gradient(180deg, ".concat((0,n.Fq)(e.palette.primary[900],.1)," 2%, transparent 80%)")}},children:d.map(function(e){return(0,u.jsxs)(s.Z,{sx:{width:{xs:"50%",sm:200},p:{xs:1,sm:0}},children:[(0,u.jsx)(l.Z,{variant:"h4",component:"h3",fontWeight:"semiBold",sx:function(e){return(0,o.Z)({textAlign:{xs:"left",sm:"center"},color:"primary.main"},e.applyDarkStyles({color:"primary.200"}))},children:e.title}),(0,u.jsx)(l.Z,{variant:"body2",color:"text.secondary",sx:{textAlign:{xs:"left",sm:"center"}},children:e.metadata})]},e.title)})})}var h=[{quote:"\"We've relied on Material UI really heavily. I override a lot of default styles to try and make things our own, but the time we save with complex components like the Autocomplete and the Data Grid are so worth it. Every other library I try has 80% of what I'm looking for when it comes to complex use cases, Material UI has it all under one roof which is a huge help for our small team.\"",profile:{avatarSrc:"https://avatars.githubusercontent.com/u/21114044?s=58",avatarSrcSet:"https://avatars.githubusercontent.com/u/21114044?s=116 2x",name:"Kyle Gill",role:"Engineer & Designer",company:(0,u.jsx)("img",{src:"/static/branding/companies/particl-dark.svg",width:"90",height:"16",alt:"Particl logo",loading:"lazy"})}},{quote:"\"Material UI looks great and lets us deliver fast, thanks to their solid API design and documentation - it's refreshing to use a component library where you get everything you need from their site rather than Stack\xa0Overflow. We think the upcoming version, with extra themes and customizability, will make Material UI even more of a game changer. We're extremely grateful to the team for the time and effort spent maintaining the project.\"",profile:{avatarSrc:"https://avatars.githubusercontent.com/u/197016?s=58",avatarSrcSet:"https://avatars.githubusercontent.com/u/197016?s=116 2x",name:"Jean-Laurent de Morlhon",role:"VP of Engineering",company:(0,u.jsx)("img",{src:"/static/branding/companies/docker-blue.svg",width:"81",height:"21",alt:"Docker logo",loading:"lazy"})}},{quote:"\"Material UI offers a wide variety of high quality components that have allowed us to ship features faster. It has been used by more than a hundred engineers in our organization. What's more, Material UI's well architected customization system has allowed us to differentiate ourselves in the marketplace.\"",profile:{avatarSrc:"https://avatars.githubusercontent.com/u/28296253?s=58",avatarSrcSet:"https://avatars.githubusercontent.com/u/28296253?s=116 2x",name:"Joona Rahko",role:"Staff Software Engineer",company:(0,u.jsx)("img",{src:"/static/branding/companies/unity-blue.svg",width:"56",height:"21",alt:"Unity logo",loading:"lazy"})}},{quote:'"After much research on React component libraries, we decided to ditch our in-house library for Material UI, using its powerful customization system to implement our Design System. This simple move did a rare thing in engineering: it lowered our maintenance costs while enhancing both developer and customer experience. All of this was done without sacrificing the organization\'s branding and visual identity."',profile:{avatarSrc:"https://avatars.githubusercontent.com/u/732422?s=58",avatarSrcSet:"https://avatars.githubusercontent.com/u/732422?s=116 2x",name:"Gustavo de Paula",role:"Specialist Software Engineer",company:(0,u.jsx)("img",{src:"/static/branding/companies/loggi-blue.svg",width:"61",height:"20",alt:"Loggi logo",loading:"lazy"})}}];function p(e){var t=e.quote,r=e.profile;return(0,u.jsxs)(s.Z,{sx:{p:3,height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",color:"#FFF"},children:[(0,u.jsx)(l.Z,{sx:{mb:2.5,lineHeight:1.6,color:"grey.200",fontSize:function(e){return e.typography.pxToRem(15)}},children:t}),(0,u.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center",gap:1.5},children:[(0,u.jsx)(s.Z,{sx:function(e){return{p:.5,border:"1px solid",borderColor:"primary.800",bgcolor:(0,n.Fq)(e.palette.primary[900],.5),borderRadius:99}},children:(0,u.jsx)(i.Z,{srcSet:r.avatarSrcSet,src:r.avatarSrc,alt:"".concat(r.name,"'s profile picture"),slotProps:{img:{loading:"lazy"}},sx:{width:36,height:36}})}),(0,u.jsxs)("div",{children:[(0,u.jsx)(l.Z,{variant:"body2",fontWeight:"semiBold",color:"text.primary",children:r.name}),(0,u.jsx)(l.Z,{variant:"body2",color:"text.secondary",children:r.role})]}),(0,u.jsx)(s.Z,{sx:{ml:"auto"},children:r.company})]})]})}function g(){return(0,u.jsxs)(c.Z,{container:!0,sx:function(e){return{mt:4,backgroundColor:"rgba(255,255,255,0.01)",border:"1px solid",borderColor:"divider",borderRadius:1,overflow:"clip","> :nth-of-type(1)":{borderBottom:"1px solid ".concat(e.palette.primaryDark[700])},"> :nth-of-type(2)":{borderBottom:"1px solid ".concat(e.palette.primaryDark[700]),borderRight:{xs:0,sm:"1px solid ".concat(e.palette.primaryDark[700])}},"> :nth-of-type(3)":{borderBottom:"1px solid ".concat(e.palette.primaryDark[700])},"> :nth-of-type(4)":{borderRight:{xs:0,sm:"1px solid ".concat(e.palette.primaryDark[700])},borderBottom:{xs:"1px solid ".concat(e.palette.primaryDark[700]),sm:0}}}},children:[a||(a=(0,u.jsx)(m,{})),h.map(function(e){return(0,u.jsx)(c.Z,{xs:12,sm:6,children:(0,u.jsx)(p,(0,o.Z)({},e))},e.profile.name)})]})}}}]);