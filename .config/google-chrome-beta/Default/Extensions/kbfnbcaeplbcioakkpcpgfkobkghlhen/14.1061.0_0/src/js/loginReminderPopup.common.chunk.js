(self.webpackChunk=self.webpackChunk||[]).push([[8600],{53874:(e,n,t)=>{t.d(n,{o:()=>l});var o=t(29511),i=t(27378);const r=async()=>{var e;return null===(e=await(0,o.O)().bgRpc.api.checkAuthPermissions())||void 0===e||e},a=async()=>{var e;return null===(e=await(0,o.O)().bgRpc.api.requestAuthPermissions())||void 0===e||e};function l({checkPermissions:e=r,requestPermissions:n=a}={}){return function({checkPermissions:e,requestPermissions:n}){const[t,o]=(0,i.useState)(),r=Boolean(t),[a,l]=(0,i.useState)(!1);return{needPermissions:r,requestingPermissions:a,bindSignIn:n=>()=>{r||a||e().then((e=>{e?(o(void 0),n()):o((e=>n))}))},onRequestPermissions:()=>{a||(l(!0),n().then((e=>{l(!1),e&&(o(void 0),null==t||t())})))}}}({checkPermissions:e,requestPermissions:n})}},1371:(e,n,t)=>{t.r(n),t.d(n,{LoginReminderPopup:()=>d,LoginReminderPopupView:()=>g});var o=t(5872),i=t(88326),r=t(62111),a=t(27378),l=t(19106),s=t(53874),c=t(24606),m=t(61658);const u=a.createElement(a.Fragment,null,a.createElement("h1",null,"Looks like you got signed out!"),a.createElement("p",null,"In order to continue receiving your personalized Grammarly suggestions, please sign back in.")),p=a.createElement(a.Fragment,null,a.createElement("h1",null,"You’re missing out on your Grammarly Premium features."),a.createElement("h2",null,"Sign back in to receive"),a.createElement("ul",null,a.createElement("li",null,"Advanced grammar checks"),a.createElement("li",null,"Vocabulary enhancements"))),d=({openSignInDialogFromLoginReminder:e,...n})=>{a.useEffect((()=>{l.J.loginReminderPopupShow(),(0,r.T)().loginReminderPopupShow()}),[]);const{bindSignIn:t,...o}=(0,s.o)(),i=t(e);return a.createElement(g,{...o,onSignIn:i,...n})},g=({isFlipped:e,reminderType:n,remove:t,disableLoginReminder:r,closeLoginReminder:l,onSignIn:s,needPermissions:d,requestingPermissions:g,onRequestPermissions:_})=>{const k=(0,o.cs)(m.gButtonPopup,m.loginReminder,d&&m.permission,m[n],e&&m.isFlipped,e&&m.flipped);return a.createElement("div",{className:k},a.createElement("div",{className:(0,o.cs)(m.popupFooter,e&&m.isFlipped)},"▲"),a.createElement(i.M,{clickHandler:()=>{l(),t()}},a.createElement("button",{className:m.close})),d?a.createElement(a.Fragment,null,a.createElement("h1",null,"Chrome requires your permission to let Grammarly sign you in"),a.createElement("p",null,"Please follow your browser′s prompts to allow Grammarly to read grammarly.com site data."),a.createElement("div",null,a.createElement(c.z,{kind:"success",onClick:_},"Allow ",a.createElement(c.g,null,"and continue to sign in"))),a.createElement("footer",null,g?a.createElement(a.Fragment,null,"We are requesting your browser to grant permission."):a.createElement(a.Fragment,null,"Next, your browser will ask you to grant permission."))):a.createElement(a.Fragment,null,"free"===n?u:p,a.createElement("div",{className:m.buttonsContainer},a.createElement(c.z,{kind:"success",onClick:s,className:m.mainButton},"Sign back in"),a.createElement(c.z,{kind:"link",onClick:r,className:m.secondaryButton},"Don’t show this again"))))}},61658:e=>{e.exports={gButtonPopup:"_1kF5v",newDataControl:"_2DXpn",showWrapper:"jbUGk",flipped:"_33Y70",title:"_3j0IH",icon:"_3mzPB",button:"_3ayiu",buttonText:"_3iTGv",popupFooter:"_1Pn79",isFlipped:"mrPCR",settings:"_1wln3",loginSSOPopup:"_3VfKv",text:"_1igtd",bold:"_233YR",link:"_3Zolz",secondary:"_3CC0d",firstTime:"eytxh",close:"_1Q8MJ",disable:"_2GBXV",gdocs:"_1rwC7",gdocsBeta:"_3Nt7c",header:"_2QN8E",headerUnavailable:"_3oKby",cardsIcon:"_2p0cU",bubbleArrow:"_3P-V4",unavailablePopup:"_3ItKT",loginReminder:"_3nwkh",permission:"_3t67i",buttonsContainer:"_1o9Lo",mainButton:"_2Ltwz",secondaryButton:"_1gDFt",onboarding:"_36Myk",chipmunkGButtonCalloutPopup:"_1BqSc",closeWrapper:"_1iSkp",containerContents:"_3-RfQ",container:"_3DqWc",containerHeaderDefault:"tSLDM",containerKeyboardQRCodeImageBlock:"_35_s3",qrcode:"_25Ol6",containerBrandToneImageBlock:"_26_GC",img:"_38WyO",containerSnippetImageBlock:"g-PwS",containerLlamaAdoptionImageBlock:"_2rwye",containerOwnerActivationImageBlock:"AUmvb",containerGraduationImageBlock:"_2k9Eq",containerHeaderImageBlock:"_2u4gj",containerTitle:"_3SP28",containerText:"w2FY9",containerButton:"_3p4LT",dismiss:"_1CkBd",warningPopup:"dcXJa",btn:"_36yMW",warning:"_3IVIe",ctaBtnGroup:"_1Bbg8",ctaButton:"_1mTiW",later:"_22eWb",managedSSOControl:"nF7Y6",illustration:"ThWjl",signInWithSSO:"_3cCtR",signInWithSSO2:"_2Z9Lo"}}}]);