(self.webpackChunkmomentum=self.webpackChunkmomentum||[]).push([[648],{60565:(e,n,t)=>{(e.exports=t(23645)(!1)).push([e.id,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* The full transition is in here rather than overridden because such a quick transition seems to create jank if inherited then overridden here. Also because normal fade is used inside this component as well. */\n.fade-very-fast-enter-active[data-v-1f07f8e0], .fade-very-fast-leave-active[data-v-1f07f8e0] { transition: opacity 0.1s var(--a-curve);\n}\n.fade-very-fast-enter[data-v-1f07f8e0], .fade-very-fast-leave-to[data-v-1f07f8e0] { opacity: 0;\n}\n.add[data-v-1f07f8e0] { cursor: pointer;\n}\n",""])},50648:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>i});var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"focus-content"},[t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("three-col-layout",{staticClass:"focus-row",scopedSlots:e._u([{key:"center",fn:function(){return[t("div",{staticClass:"todays-focus",attrs:{"data-test":"focus-empty"},on:{mouseover:e.hoverOn,mouseleave:e.hoverOff}},[t("transition",{attrs:{name:"fade-very-fast",mode:"out-in"}},[e.showAdd?t("span",{key:"1",staticClass:"add",attrs:{"data-test":"add-focus"},on:{click:function(n){return e.$emit("add-focus")}}},[e._v("+ Add a focus")]):t("span",{key:"2"},[t("transition",{attrs:{name:"fade-fast",mode:"out-in"}},[t("span",{key:e.message,staticClass:"default",attrs:{"data-test":"message"}},[e._v(e._s(e.message))])])],1)])],1)]},proxy:!0}])})],1)],1)};s._withStripped=!0;var a=t(51940);const o={name:"PomodoroEmptyFocus",components:{ThreeColLayout:t(73304).Z},mixins:[a.Z],props:{message:{type:String,default:"Focus"}},data:()=>({showAdd:!1}),methods:{hoverOn(){this.$touch||(clearTimeout(this.timer),this.timer=setTimeout((()=>{this.showAdd=!0}),200))},hoverOff(){this.$touch||(clearTimeout(this.timer),this.showAdd=!1)}}};t(1871);var r=(0,t(51900).Z)(o,s,[],!1,null,"1f07f8e0",null);r.options.__file="source/addins-vue/focus/pomodoro/PomodoroEmptyFocus.vue";const i=r.exports},1871:(e,n,t)=>{var s=t(60565);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),(0,t(45346).Z)("f078463e",s,!1,{ssrId:!0})}}]);