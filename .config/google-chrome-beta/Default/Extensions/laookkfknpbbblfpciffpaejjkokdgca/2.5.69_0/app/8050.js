(self.webpackChunkmomentum=self.webpackChunkmomentum||[]).push([[8050],{49591:(t,n,e)=>{(t.exports=e(23645)(!1)).push([t.id,"\n.call[data-v-308d0d94] { width: 100%; max-width: 840px; margin: 2rem 1rem 0; padding: 30px; display: flex; background: var(--color-bg); color: var(--color-text); border-radius: 4px;\n}\n.call-content[data-v-308d0d94] { margin-right: 1rem; flex: 1 0 auto; text-align: left;\n}\n.call .heading[data-v-308d0d94] { margin-bottom: 0.38em; font-size: 1.1875rem; font-weight: bold;\n}\n.call .description[data-v-308d0d94] { width: 600px; opacity: 0.8; line-height: 1.3;\n}\n.call-cta[data-v-308d0d94] { display: flex; align-items: center;\n}\n.call .button[data-v-308d0d94] { padding: 10px 30px; font-size: 14px; background: var(--color-button); opacity: 0.8; box-shadow: none;\n}\n.call .button[data-v-308d0d94]:hover { opacity: 1;\n}\n.call .button[data-v-308d0d94]:active { background: var(--color-button);\n}\n",""])},98050:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>r});var a=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"tour-fullscreen",attrs:{"data-test":"tour-end"}},[a("div",{staticClass:"cta"},[a("div",{staticClass:"heading"},[t._v(t._s(t.heading))]),t._v(" "),a("div",{staticClass:"subheading",domProps:{innerHTML:t._s(t.subheading)}}),t._v(" "),a("div",{staticClass:"button",attrs:{"data-test":"end"},on:{click:function(n){return t.$emit("next")}}},[t._v(t._s(t.buttonText)),a("inline-svg",{staticClass:"icon icon-next",attrs:{src:e(79557)}})],1)]),t._v(" "),t.bannerActive?a("div",{staticClass:"call"},[a("div",{staticClass:"call-content"},[a("div",{staticClass:"heading"},[t._v(t._s(t.bannerHeading))]),t._v(" "),a("div",{staticClass:"description"},[t._v(t._s(t.bannerSubheading))])]),t._v(" "),a("div",{staticClass:"call-cta"},[a("a",{staticClass:"button call-button",attrs:{target:"_blank",href:t.bannerButtonLink},on:{click:t.bannerEvent}},[t._v(t._s(t.bannerButtonText))])])]):t._e()])};a._withStripped=!0;var i=e(23145);const d={name:"TourEnd",props:{heading:{type:String,default:`Let's go, ${i.ax.displayname}!`},subheading:{type:String,default:""},buttonText:{type:String,default:""},bannerHeading:{type:String,default:""},bannerSubheading:{type:String,default:""},bannerButtonText:{type:String,default:""},bannerButtonLink:{type:String,default:""}},computed:{bannerActive(){return this.bannerHeading||this.bannerSubheading||this.bannerButtonText||this.bannerButtonLink}},mounted(){window.addEventListener("keyup",this.handleKey)},destroyed(){window.removeEventListener("keyup",this.handleKey)},methods:{handleKey(t){"Enter"===t.code&&this.$emit("next")},bannerEvent(){m.sendEvent("Onboarding","Ready",this.bannerButtonText+" clicked")}}};e(44151);var s=(0,e(51900).Z)(d,a,[],!1,null,"308d0d94",null);s.options.__file="source/addins-vue/modal/onboarding/TourEnd.vue";const r=s.exports},44151:(t,n,e)=>{var a=e(49591);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals),(0,e(45346).Z)("78c4c27e",a,!1,{ssrId:!0})}}]);