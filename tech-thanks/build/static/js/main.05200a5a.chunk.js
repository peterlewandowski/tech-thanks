(this["webpackJsonptech-thanks"]=this["webpackJsonptech-thanks"]||[]).push([[0],{185:function(e,t){var n=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"dev-1655583966512-81073867018500";e.exports=function(e){switch(e){case"production":case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:n,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"development":case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:n,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};case"betanet":return{networkId:"betanet",nodeUrl:"https://rpc.betanet.near.org",contractName:n,walletUrl:"https://wallet.betanet.near.org",helperUrl:"https://helper.betanet.near.org",explorerUrl:"https://explorer.betanet.near.org"};case"local":return{networkId:"local",nodeUrl:"http://localhost:3030",keyPath:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).HOME,"/.near/validator_key.json"),walletUrl:"http://localhost:4000/wallet",contractName:n};case"test":case"ci":return{networkId:"shared-test",nodeUrl:"https://rpc.ci-testnet.near.org",contractName:n,masterAccount:"test.near"};case"ci-betanet":return{networkId:"shared-test-staging",nodeUrl:"https://rpc.ci-betanet.near.org",contractName:n,masterAccount:"test.near"};default:throw Error("Unconfigured environment '".concat(e,"'. Can be configured in src/config.js."))}}},192:function(e){e.exports=JSON.parse('{"leaderboard":[{"id":1,"name":"todd albert","email":"todd@bocacode.com","thankcoins":54},{"id":2,"name":"nikki ","email":"todd@bocacode.com","thankcoins":54},{"id":3,"name":"todd albert","email":"todd@bocacode.com","thankcoins":54},{"id":4,"name":"todd albert","email":"todd@bocacode.com","thankcoins":54}],"givers":[{"id":1,"address":"1234","thankcoins":5,"history":[{"id":1,"title":"Gave to Todd Alber","amount":10,"date":"1/2/2022"},{"id":2,"title":"Gave to Nikki ","amount":5,"date":"3/23/2022"},{"id":3,"title":"Gave to Zack","amount":13,"date":"422/2022"}]},{"id":2,"address":"3333","thankcoins":5,"history":[{"id":4,"title":"Gave to Todd Alber","amount":10,"date":"1/2/2022"},{"id":5,"title":"Gave to Nikki ","amount":5,"date":"3/23/2022"},{"id":6,"title":"Gave to Zack","amount":13,"date":"422/2022"}]},{"id":3,"address":"4444","thankcoins":5,"history":[{"id":7,"title":"Gave to Todd Alber","amount":10,"date":"1/2/2022"},{"id":8,"title":"Gave to Nikki ","amount":5,"date":"3/23/2022"},{"id":9,"title":"Gave to Zack","amount":13,"date":"422/2022"}]}],"videos":[{"id":1,"title":"deploying on react ","url":"https://www.youtube.com/watch?v=e-IfT5CI-Gw"},{"id":2,"title":"How to mint on near","url":"https://www.youtube.com/watch?v=Rt_cmIq12lo"},{"id":3,"title":"near 101 ","url":"https://youtu.be/m6LJUpPPHoE?t=2365"}]}')},223:function(e,t,n){},230:function(e,t){},240:function(e,t){},258:function(e,t){},287:function(e,t,n){},309:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(182),o=n.n(c),i=n(7),s=n(382),d=n(376),l=n(52),j=n(19),h=(n(223),n(2));var u=function(){return Object(h.jsx)("div",{className:"footer",children:Object(h.jsx)("p",{style:{alignContent:"center"},children:"\xa9 2022 TechThanks"})})},b=n(372),O=n(373),x=n(387),m=n(384),p=n(383),f=n(379),w=n(386),v=n(388),g=(n(225),Object(a.createContext)()),k=function(e){var t=e.children,n=g.Provider,r=Object(a.useState)({}),c=Object(i.a)(r,2),o={user:c[0],setUser:c[1]};return Object(h.jsx)(n,{value:o,children:t})},y=n(16),C=n(18),S=n(90),N=n(185),T=n.n(N)()("production");function E(){return(E=Object(C.a)(Object(y.a)().mark((function e(){var t;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.connect)(Object.assign({deps:{keyStore:new S.keyStores.BrowserLocalStorageKeyStore}},T));case 2:return t=e.sent,window.walletConnection=new S.WalletConnection(t),window.accountId=window.walletConnection.getAccountId(),window.account=t.account(window.accountId),e.next=8,new S.Contract(window.walletConnection.account(),T.contractName,{viewMethods:["get_greeting"],changeMethods:["set_greeting"]});case 8:window.contract=e.sent;case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){window.walletConnection.requestSignIn(T.contractName)}function _(){return(_=Object(C.a)(Object(y.a)().mark((function e(t){var n;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.contract.set_greeting({args:{message:t}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){return I.apply(this,arguments)}function I(){return(I=Object(C.a)(Object(y.a)().mark((function e(){var t;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.contract.get_greeting();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){var t=e.isDark,n=e.setIsDark,r=Object(j.f)(),c=Object(a.useContext)(g),o=(c.user,c.setUser,function(e){window.walletConnection.signOut(),window.location.replace(window.location.origin+window.location.pathname),r("/")});return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(p.a,{sx:{flexGrow:1},children:Object(h.jsx)(m.a,{position:"static",children:Object(h.jsxs)(w.a,{children:[Object(h.jsx)(x.a,{component:l.b,to:"/",sx:{flexGrow:1},children:Object(h.jsx)(v.a,{variant:"h6",sx:{flexGrow:1,display:{md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem"},children:"TechThanks"})}),Object(h.jsxs)(x.a,{onClick:function(){return n(!t)},sx:{flexShrink:0},children:[t&&Object(h.jsx)(b.a,{}),!t&&Object(h.jsx)(O.a,{})]}),window.walletConnection.isSignedIn()?Object(h.jsxs)("span",{children:[Object(h.jsx)(f.a,{color:"inherit",onClick:function(){return r("/thanker")},children:"Dashboard"}),Object(h.jsx)(f.a,{color:"inherit",onClick:o(),children:"Sign Out"})]}):Object(h.jsx)("span",{children:Object(h.jsx)(f.a,{color:"inherit",type:"primary",onClick:U,children:"Sign in!"})})]})})})})}var D=n(380),F=n(381),G=n(389),H=n(392),P=n(391),R=n(390);function L(){return Object(h.jsxs)(G.a,{sx:{maxWidth:330},children:[Object(h.jsx)(R.a,{component:"img",height:300,image:"https://pbs.twimg.com/profile_images/750772068040540160/GL2d26px_400x400.jpg",alt:"rick",sx:{padding:5}}),Object(h.jsxs)(P.a,{children:[Object(h.jsx)(v.a,{variant:"h6",color:"text.secondary",fontWeight:"bold",children:"Damian Montero - Ex Senior Software Engineer at Skype"}),Object(h.jsx)(v.a,{variant:"body1",color:"text.secondary",fontWeight:"bold",children:"$109.95"})]}),Object(h.jsx)(H.a,{sx:{px:2},children:Object(h.jsx)(f.a,{fullWidth:!0,variant:"contained",color:"primary",children:"Add To Cart"})})]})}function M(){return Object(h.jsx)(D.a,{maxWidth:"lg",children:Object(h.jsxs)(F.a,{container:!0,spacing:2,children:[Object(h.jsx)(F.a,{item:!0,xs:4,children:Object(h.jsx)(L,{})}),Object(h.jsx)(F.a,{item:!0,xs:4,children:Object(h.jsx)(L,{})}),Object(h.jsx)(F.a,{item:!0,xs:4,children:Object(h.jsx)(L,{})}),Object(h.jsx)(F.a,{item:!0,xs:4,children:Object(h.jsx)(L,{})}),Object(h.jsx)(F.a,{item:!0,xs:4,children:Object(h.jsx)(L,{})}),Object(h.jsx)(F.a,{item:!0,xs:4,children:Object(h.jsx)(L,{})})]})})}var Y=n(193),J=n(187),K=Object(Y.a)({palette:{mode:"light"}}),B=Object(Y.a)({palette:{mode:"dark",background:{default:J.a[900]}}}),q=(n(287),n(393)),z=n(189),Z=n.n(z);function V(){var e=Object(j.f)();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(p.a,{sx:{m:1,display:"flex",alignItems:"center",justifyContent:"center",height:325},children:[Object(h.jsxs)(q.a,{variant:"extended",size:"medium",color:"primary","aria-label":"add",onClick:function(){e("/thanker")},children:[Object(h.jsx)(Z.a,{sx:{mr:1}}),"Get Started"]}),Object(h.jsx)("div",{className:"textBlock",children:Object(h.jsxs)("div",{className:"allText",children:[Object(h.jsx)("p",{className:"textHeader"}),Object(h.jsx)("p",{className:"textHeader"})]})})]})})}var Q=n(3),$=n(9),X=n(369),ee=n(377),te=n(6),ne=function(){var e=Object(C.a)(Object(y.a)().mark((function e(){return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",W());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=[{field:"id",headerName:"#",width:50},{field:"name",headerName:"Name",width:175},{field:"email",headerName:"Email",width:200,editable:!0},{field:"thankcoins",headerName:"ThankCoins",width:125,editable:!0}],re=.2,ce=Object($.a)(ee.a)((function(e){var t=e.theme;return Object(Q.a)({},"& .".concat(te.b.row,".even"),{backgroundColor:t.palette.grey[100],"&:hover, &.Mui-hovered":{backgroundColor:Object(X.a)(t.palette.primary.main,re),"@media (hover: none)":{backgroundColor:"transparent"}},"&.Mui-selected":{backgroundColor:Object(X.a)(t.palette.primary.main,re+t.palette.action.selectedOpacity),"&:hover, &.Mui-hovered":{backgroundColor:Object(X.a)(t.palette.primary.main,re+t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:Object(X.a)(t.palette.primary.main,re+t.palette.action.selectedOpacity)}}}})}));function oe(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){}),[]),Object(a.useEffect)((function(){var e=function(){var e=Object(C.a)(Object(y.a)().mark((function e(){return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ne().then((function(e){var t=JSON.parse(e).leaderboard;console.log("leaderboard",t),r(t)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var c=n.map((function(e){return{id:e.id,name:e.name,email:e.email,thankcoins:e.thankcoins}}));return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(D.a,{maxWidth:"sm",children:Object(h.jsxs)(p.a,{sx:{height:400,width:"100%"},children:[Object(h.jsx)(v.a,{variant:"h5",sx:{p:1,fontFamily:"monospace",fontWeight:300,letterSpacing:".3rem",color:"inherit",textDecoration:"none",textAlign:"center"},children:"Leaderboard"}),Object(h.jsx)(ce,{rows:c,columns:ae,getRowClassName:function(e){return e.indexRelativeToCurrentPage,"even"}})]})})})}var ie=function(){return Object(h.jsx)(D.a,{maxWidth:"lg",children:Object(h.jsx)(oe,{})})};function se(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(V,{}),Object(h.jsx)(ie,{})]})}var de=n(375),le=function(){var e=Object(C.a)(Object(y.a)().mark((function e(t){var n,a,r,c;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(new TextEncoder).encode(t),e.next=3,crypto.subtle.digest("SHA-256",n);case 3:return a=e.sent,r=Array.from(new Uint8Array(a)),c=r.map((function(e){return e.toString(16).padStart(2,"0")})).join(""),e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),je=n(106),he=n.n(je);function ue(){var e=Object(j.f)(),t=Object(a.useContext)(g),n=(t.user,t.setUser,Object(a.useState)("")),r=Object(i.a)(n,2),c=r[0],o=r[1],s=Object(a.useState)(""),d=Object(i.a)(s,2),l=(d[0],d[1]),u=Object(j.g)().hash;Object(a.useEffect)((function(){window.walletConnection.isSignedIn()&&e("/store")}),[]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"You've been lucky enough to receive some ThankCoins! Type to cash them out!"}),c?Object(h.jsxs)("div",{children:["Welcome ",Object(h.jsx)("b",{children:c}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"You've been an amazing mentor to someone that wants to thank you personally with 5 Tech Thank Stars because of how amazing you are.",Object(h.jsx)("br",{}),Object(h.jsx)("img",{src:"https://media.giphy.com/media/4YY5Yh1qSeCMwQbrnf/giphy.gif"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"What's next? ",Object(h.jsx)("br",{}),"Simple! Accept your stars!!! ",Object(h.jsx)("br",{}),"You'll need your own Near Wallet.",Object(h.jsx)("br",{}),"Have one or not just click here to login or create your own:",Object(h.jsxs)(q.a,{variant:"extended",onClick:function(){return console.log("handleLogin"),void U()},children:[Object(h.jsx)(he.a,{sx:{mr:1}}),"Login or Create wallet!"]})]}):Object(h.jsxs)("div",{children:["We need the email the person that thanked you used:",Object(h.jsx)(de.a,{placeholder:"Your Email",onChange:function(e){l(e.target.value),le(e.target.value).then((function(t){t==u&&o(e.target.value)}))}})]})]})}n(191);function be(){var e=Object(a.useContext)(g).user;return Object(h.jsx)("div",{children:Object(h.jsxs)("h3",{children:["Today you have ",e.thankcoins," ThankCoins! WOO HOO!"]})})}var Oe=[{field:"id",headerName:"#",width:90},{field:"date",headerName:"Date",width:150},{field:"amount",headerName:"ThankCoins",width:150,editable:!0},{field:"title",headerName:"Sent to",width:150,editable:!0}];function xe(){var e=Object(a.useContext)(g).user,t=Object(a.useState)([]),n=Object(i.a)(t,2),r=n[0],c=n[1];Object(a.useEffect)((function(){c(e.history)}),[]);var o=r.map((function(e){return{id:e.id,date:e.date,amount:e.amount,title:e.title}}));return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(D.a,{maxWidth:"sm",children:[Object(h.jsx)(v.a,{children:Object(h.jsx)("b",{children:"Your History:"})}),Object(h.jsx)(p.a,{sx:{height:400,width:"100%"},children:Object(h.jsx)(ee.a,{rows:o,columns:Oe})})]})})}var me=n(192);function pe(){var e=Object(a.useContext)(g),t=e.user,n=e.setUser,r=Object(j.f)();Object(a.useEffect)((function(){var e=function(){var e=Object(C.a)(Object(y.a)().mark((function e(){return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"1234",W().then((function(e){var t=JSON.parse(e).givers[0];console.log("giverProfile",t),n(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var c=function(){!function(e){_.apply(this,arguments)}(JSON.stringify(me))};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(D.a,{maxWidth:"lg",children:Object(h.jsx)(p.a,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center,"},children:t.address?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(be,{}),Object(h.jsx)("div",{children:Object(h.jsxs)(q.a,{variant:"extended",onClick:function(){return r("/send")},children:[Object(h.jsx)(he.a,{sx:{mr:1}}),"Give Thanks!"]})}),Object(h.jsx)(xe,{})]}):Object(h.jsx)(h.Fragment,{children:"Loading..."})})}),Object(h.jsx)("div",{onClick:function(){c()},children:"..."})]})}var fe=function(){var e=Object(a.useContext)(g),t=e.user,n=(e.setUser,Object(a.useState)(0)),r=Object(i.a)(n,2),c=r[0],o=r[1],s=Object(a.useState)(""),d=Object(i.a)(s,2),l=d[0],j=d[1],u=Object(a.useState)(""),b=Object(i.a)(u,2),O=b[0],x=b[1];Object(a.useEffect)((function(){var e=function(){var e=Object(C.a)(Object(y.a)().mark((function e(t){return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:le(t).then((function(e){x(("localhost"==window.location.hostname?"http://localhost:3000":"https://"+window.location.hostname)+"/thanks/"+e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();l&&c>0&&e(l)}),[l,c]);var m=function(e){o(e.target.id)};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Let's thank that Mentor that got you into tech"}),Object(h.jsxs)("div",{id:"whowethank",children:["Who are we thanking:    ",Object(h.jsx)(de.a,{placeholder:"Their email",onChange:function(e){j(e.target.value)}})]}),Object(h.jsxs)("div",{id:"starSelection",children:[0==t.thankcoins?Object(h.jsx)("div",{children:"No stars to give today. wait until tomorrow"}):"",t.thankcoins>0?Object(h.jsx)("div",{className:" "+(c>0?"chosen":""),id:"1",onClick:m,children:"\ud83c\udf1f"}):"",t.thankcoins>1?Object(h.jsx)("div",{className:" "+(c>1?"chosen":""),id:"2",onClick:m,children:"\ud83c\udf1f\ud83c\udf1f"}):"",t.thankcoins>2?Object(h.jsx)("div",{className:" "+(c>2?"chosen":""),id:"3",onClick:m,children:"\ud83c\udf1f\ud83c\udf1f\ud83c\udf1f"}):"",t.thankcoins>3?Object(h.jsx)("div",{className:" "+(c>3?"chosen":""),id:"4",onClick:m,children:"\ud83c\udf1f\ud83c\udf1f\ud83c\udf1f\ud83c\udf1f"}):"",t.thankcoins>4?Object(h.jsx)("div",{className:" "+(c>4?"chosen":""),id:"5",onClick:m,children:"\ud83c\udf1f\ud83c\udf1f\ud83c\udf1f\ud83c\udf1f\ud83c\udf1f"}):""]}),O?Object(h.jsxs)("div",{children:["You've chose to send  ",c," \ud83c\udf1f's to ",l,Object(h.jsx)("br",{}),Object(h.jsx)("b",{children:Object(h.jsx)("a",{href:O,children:O})})]}):""]})};var we=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(h.jsx)(k,{children:Object(h.jsxs)(s.a,{theme:n?B:K,children:[Object(h.jsx)(d.a,{}),Object(h.jsxs)(l.a,{children:[Object(h.jsx)(A,{isDark:n,setIsDark:r}),Object(h.jsxs)(j.c,{children:[Object(h.jsx)(j.a,{path:"/",element:Object(h.jsx)(se,{})}),Object(h.jsx)(j.a,{path:"/thanker",element:Object(h.jsx)(pe,{})}),Object(h.jsx)(j.a,{path:"/send",element:Object(h.jsx)(fe,{})}),Object(h.jsx)(j.a,{path:"/thanks/:hash",element:Object(h.jsx)(ue,{})}),Object(h.jsx)(j.a,{path:"/store",element:Object(h.jsx)(M,{})})]}),Object(h.jsx)(u,{})]})]})})},ve=o.a.createRoot(document.getElementById("root"));window.nearInitPromise=function(){return E.apply(this,arguments)}().then((function(){ve.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(we,{})}))})).catch(console.error)}},[[309,1,2]]]);
//# sourceMappingURL=main.05200a5a.chunk.js.map