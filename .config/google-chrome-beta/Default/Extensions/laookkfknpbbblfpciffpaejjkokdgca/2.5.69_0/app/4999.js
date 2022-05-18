(self.webpackChunkmomentum=self.webpackChunkmomentum||[]).push([[4999],{47281:(t,a,n)=>{(t.exports=n(23645)(!1)).push([t.id,"\n.onboarding-intro[data-v-783babda] { padding: var(--modal-padding); padding-bottom: var(--modal-step-container-bottom-padding);\n\t\t--curve: ease;\n\n\t\t--step-1-duration: 2s;\n\t\t--step-1-transition: var(--step-1-duration) ease;\n\n\t\t/*\n\t\t--step-2-duration: 2s;\n\t\t--step-2-transition: var(--step-2-duration) ease;\n\n\t\t--step-3-duration: 0.8s;\n\t\t--step-3-transition: var(--step-2-duration) ease;\n\t\t*/\n}\n.onboarding-intro .title[data-v-783babda] { margin: 2rem 0 1rem !important; white-space: nowrap;\n}\n\t\t\t/* nowrap ensures accurate measurement. <br> will be inserted if needed  */\n\n\t\t/*.onboarding-bg { position: absolute; bottom: -30px; left: 0; z-index: -1; pointer-events: none; }*/\n\t\t\t/*.onboarding-bg img { width: 760px; margin-left: -80px; opacity: 0.125; vertical-align: top; }*/\n\n\n\t/* INTRO ANIMATION */\n\n\t/* general animation css */\n.intro-animation-active[data-v-783babda] { opacity: 0; transform: translateY(20px); transition: all 2s ease-out;\n}\n.intro-animation-active.show[data-v-783babda] { opacity: 1; transform: translateY(0);\n}\n.intro-animation-active .onboarding-bg[data-v-783babda] { opacity: 0; transform: translateY(16px) scale(0.85); transition: all calc(var(--step-1-duration)) var(--curve);\n}\n.intro-animation-active.show .onboarding-bg[data-v-783babda] { opacity: 1; transform: translateY(0) scale(1);\n}\n.intro-animation-active .footer[data-v-783babda] { opacity: 0;\n}\n\n\t/* .step-1 */\n/*\t\t.step-1 .content { transform: translateY(60px); transition: var(--step-1-duration); }\n\n\t\t\t.step-1 .title { opacity: 0; transform: translateY(0px) scale(0.85); transition: var(--step-1-transition); transition-delay: 0s; white-space: nowrap; }\n\t\t\t\t.step-1 span { opacity: 0; }\n\t\t\t\t\t.step-1 .title .welcome { margin-left: var(--title-margin-left); opacity: 1; transition-delay: var(--welcome-delay); }\n\t\t\t\t\t.step-1 .title .to-momentum { transition-delay: calc(var(--welcome-delay) + 300ms); }\n\t\t\t\t\t.step-1 .title .name, .step-1 .title .comma { transition-delay: calc(var(--welcome-delay) + 500ms); }\n\t\t\t\t\t.step-1 .title .name.translate { display: inline-block; transform: translateX(20%); transition: opacity var(--step-1-duration) var(--curve) calc(var(--welcome-delay) + 500ms), transform calc(var(--step-1-duration) * 0.7) var(--curve) calc(var(--welcome-delay) + 500ms); }\n\n\t\t\t.step-1 .subheading { display: none; }\n\n\t\t.step-1 .footer { opacity: 0; }*/\n\n\n\t/* .step-1-active */\n/*\t\t.step-1-active .content { transform: translateY(38px); }\n\n\t\t\t.step-1-active .title { opacity: 1; transform: translateY(0px) scale(1); }\n\t\t\t.step-1-active span { --name-reveal-duration: 1.5s; --welcome-delay: calc(var(--step-1-duration) - 0ms); transition: all var(--name-reveal-duration) ease-in-out; }\n\n\t\t\t\t.step-1-active .title .welcome { margin-left: 0; }\n\t\t\t\t.step-1-active .title .to-momentum, .step-1-active .title .name, .step-1-active .title .comma { opacity: 1; }\n\t\t\t\t.step-1-active .title .name.translate { display: inline-block; transform: none; }*/\n\n\n\t/* .step-1 */\n.step-1 .content[data-v-783babda] { transform: translateY(80px); transition: var(--step-1-transition);\n}\n.step-1 .title[data-v-783babda], .step-1 .subheading[data-v-783babda] { opacity: 0; transition: var(--step-1-transition);\n}\n.step-1 .title[data-v-783babda] {\n}\n.step-1 .welcome[data-v-783babda] { display: block;\n}\n.step-1 .subheading[data-v-783babda] { transform: translateY(16px);\n}\n.step-1 .footer[data-v-783babda] { opacity: 0; transform: translateY(10px); transition-duration: 0s;\n}\n\n\n\t/* step-1-active */\n.step-1-active .content[data-v-783babda] { transform: translateY(0);\n}\n.step-1-active .title[data-v-783babda], .step-1-active .subheading[data-v-783babda] { opacity: 1;\n}\n.step-1-active .subheading[data-v-783babda] { transform: translateY(0px); transition-delay: 1000ms;\n}\n.step-1-active .footer[data-v-783babda] { opacity: 1; transform: translateY(0); transition: calc(var(--step-1-transition)); transition-delay: 1000ms; transition-duration: calc(var(--step-1-duration) - 500ms);\n}\n",""])},4999:(t,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>o});var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"onboarding-intro",class:[{"intro-animation-active":t.introAnimationActive,show:t.showApp},t.animationCLassList],attrs:{"data-test":"welcome"}},[n("div",{staticClass:"content"},[n("h2",{staticClass:"title",style:{"--title-margin-left":t.titleMarginLeft+"px"},attrs:{id:t.$options.titleId}},[n("span",{staticClass:"welcome"},[t._v("Welcome ")]),n("span",{staticClass:"to-momentum"},[t._v("to Momentum")]),n("span",{staticClass:"comma"},[t._v(", ")]),n("span",{staticClass:"name"},[t._v(t._s(t.displayName)+".")])]),t._v(" "),n("div",{staticClass:"subheading"},[t._v("Momentum is a peaceful start page that keeps you focused on what's most important.")])])])};e._withStripped=!0;const i={name:"Intro1",titleId:"onboarding-modal-title",animationSteps:[{classes:"step-1",timeout:0},{classes:"step-1 step-1-active",timeout:40}],data:()=>({showApp:!1,introAnimationActive:!0,activeAnimationStepIndex:0,titleMarginLeft:0,displayName:m.models.customization.get("displayname")}),computed:{animationCLassList(){return this.$options.animationSteps[this.activeAnimationStepIndex].classes}},mounted(){this.renderIntro()},methods:{renderIntro(){let t=document.getElementById(this.$options.titleId),a=t.closest(".content"),n="span:not(.welcome)";if(t.offsetWidth>a.offsetWidth){let a=t.querySelector(".name");t.insertBefore(document.createElement("br"),a),n="span:not(.welcome):not(.name)",m.utils.addClass(a,"translate")}t.querySelectorAll(n).forEach((t=>{this.titleMarginLeft+=t.offsetWidth})),setTimeout((()=>{this.showApp=!0}),100),this.$options.animationSteps.forEach(((t,a)=>{setTimeout((()=>{this.activeAnimationStepIndex=a,a===this.$options.animationSteps.length-1&&setTimeout((()=>{this.introAnimationActive=!1,this.$emit("showFooter")}),2e3)}),t.timeout)}))}}};n(97892);var s=(0,n(51900).Z)(i,e,[],!1,null,"783babda",null);s.options.__file="source/addins-vue/modal/onboarding/Welcome.vue";const o=s.exports},97892:(t,a,n)=>{var e=n(47281);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),e.locals&&(t.exports=e.locals),(0,n(45346).Z)("12867c49",e,!1,{ssrId:!0})}}]);