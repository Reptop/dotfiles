(self.webpackChunkmomentum=self.webpackChunkmomentum||[]).push([[9589],{61778:(t,e,i)=>{(t.exports=i(23645)(!1)).push([t.id,"\n.percent-format[data-v-c19f4aa6] { top: 65%; opacity: 1; font-size: 25%;\n}\n@media screen and (max-width: 450px) {\n.percent-format[data-v-c19f4aa6] { margin-bottom: -3px; top: auto; font-size: 62%;\n}\n}\n",""])},89728:(t,e,i)=>{(t.exports=i(23645)(!1)).push([t.id,"\n.resize-wrapper.tr-height[data-v-0f8972b1] { transition: height var(--duration) ease;\n}\n.resize-wrapper.tr-width[data-v-0f8972b1] { display: flex; justify-content: center; transition: width var(--duration) ease;\n}\n.resize-wrapper.tr-height.tr-width[data-v-0f8972b1] { transition: height var(--duration) ease, width var(--duration) ease;\n}\n.resize-wrapper.hide-overflow[data-v-0f8972b1] { overflow: hidden;\n}\n.resize-wrapper.tr-width > div[data-v-0f8972b1] { width: fit-content;\n}\n.smooth-height-fade-enter-active[data-v-0f8972b1] { transition: opacity var(--transition-duration) cubic-bezier(.85,-0.18,.66,.66);\n}\n.smooth-height-fade-leave-active[data-v-0f8972b1] { position: absolute !important; top: 0; right: 0; left: 0; transition: opacity var(--transition-duration) cubic-bezier(.33,.13,.33,1.26);\n}\n.smooth-height-fade-enter[data-v-0f8972b1], .smooth-height-fade-leave-to[data-v-0f8972b1] { opacity: 0;\n}\n.smooth-width-fade-enter-active[data-v-0f8972b1] { transition: opacity var(--transition-duration) cubic-bezier(.85,-0.18,.66,.66);\n}\n.smooth-width-fade-leave-active[data-v-0f8972b1] { position: absolute; top: 0; left: 50%; transform: translateX(-50%); transition: opacity var(--transition-duration) cubic-bezier(.33,.13,.33,1.26);\n}\n.smooth-width-fade-enter[data-v-0f8972b1], .smooth-width-fade-leave-to[data-v-0f8972b1] { opacity: 0;\n}\n.smooth-height-slide-left-enter-active[data-v-0f8972b1], .smooth-height-slide-left-leave-active[data-v-0f8972b1],\n.smooth-height-slide-right-enter-active[data-v-0f8972b1], .smooth-height-slide-right-leave-active[data-v-0f8972b1] { transition: transform 300ms ease;\n}\n.smooth-height-slide-left-leave-active[data-v-0f8972b1], .smooth-height-slide-right-leave-active[data-v-0f8972b1] { position: absolute; top: 0; right: 0; left: 0;\n}\n.smooth-height-slide-left-leave-to[data-v-0f8972b1], .smooth-height-slide-right-enter[data-v-0f8972b1] { transform: translateX(-100%);\n}\n.smooth-height-slide-left-enter[data-v-0f8972b1], .smooth-height-slide-right-leave-to[data-v-0f8972b1] { transform: translateX(100%);\n}\n",""])},98217:t=>{t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCI+PC9jaXJjbGU+PC9zdmc+Cg=="},99589:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>x});var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("three-col-layout",{staticClass:"app-container clock center-clock has-dash-icon",class:{"show-anyway":t.showAnyway.includes("clock")},attrs:{"data-show-anyway":"clock","data-test":"center-clock"},scopedSlots:t._u([{key:"left",fn:function(){return[o("transition",{attrs:{name:"fade",mode:"out-in"}},[t.$touch?t._e():o("quick-nav",{key:t.activeClock,attrs:{region:"center",options:t.centerOptions,active:t.activeClock},on:{"switch-to":t.switchClock}})],1)]},proxy:!0},{key:"center",fn:function(){return[o("smooth-reflow",{attrs:{height:!1,width:!0,"transition-duration":1e3,duration:100,transition:"smooth-width-fade"}},[o("div",{directives:[{name:"mobile-click",rawName:"v-mobile-click",value:t.toggleDropdown.bind(null,!0),expression:"toggleDropdown.bind(null, true)"}],key:t.activeClock},[t.percentClock?o("percent-clock"):o("default-clock")],1)])]},proxy:!0},{key:"right",fn:function(){return[o(t.$touch?"ToastMenu":"Dropdown",{tag:"component",attrs:{"on-dash":!0,active:t.dropdownActive,"section-title":"Clock Settings"},on:{toggle:t.toggleDropdown},scopedSlots:t._u([{key:"header",fn:function(){return[t.$touch?o("quick-nav-options-list",{attrs:{options:t.centerOptions,active:t.activeClock},on:{"switch-to":t.switchClock}}):t._e()]},proxy:!0}])},[t._v(" "),t.percentClock?o("dropdown-option",{attrs:{name:"Edit Schedule","data-test":"edit-schedule"},nativeOn:{click:function(e){return t.openScheduleSettings(e)}}}):o("li",{staticClass:"dropdown-list-item has-toggle",class:{on:!t.hour12clock},attrs:{"data-test":"hour-format"},on:{click:t.switchBetween12and24hr}},[o("span",{staticClass:"dropdown-list-label"},[t._v("24-hour clock")]),t._v(" "),o("span",{staticClass:"toggle-slider"},[o("inline-svg",{staticClass:"toggle-switch",attrs:{src:i(98217)}})],1)])],1)]},proxy:!0}])})};o._withStripped=!0;var a=i(51940),s=i(83214),n=i(23145),r=i(72606),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"default-clock",attrs:{"data-test":"default-clock"}},[i("div",{staticClass:"time",attrs:{"data-test":"default-clock-time"}},[t._v(t._s(t.date.getTimeString()))])])};h._withStripped=!0;const l={name:"DefaultClock",mixins:[a.Z],computed:{hour12clock(){return this.updateTime(),n.ax.hour12clock},date:()=>m.models.date},methods:{updateTime(){this.date.set("date",m.date())}}};var c=i(51900),d=(0,c.Z)(l,h,[],!1,null,null,null);d.options.__file="source/addins-vue/clock/DefaultClock.vue";const u=d.exports;var p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"percent-clock",attrs:{"data-test":"percent-clock"}},[i("div",{staticClass:"time"},[t._v("\n\t\t"+t._s(t.balance.get("percent"))),i("span",{staticClass:"format percent-format"},[t._v("%")])])])};p._withStripped=!0;const f={name:"PercentClock",mixins:[a.Z],computed:{balance:()=>m.models.balanceMode}};i(74920);var v=(0,c.Z)(f,p,[],!1,null,"c19f4aa6",null);v.options.__file="source/addins-vue/clock/PercentClock.vue";const w=v.exports;var g=i(73304),k=i(65001);const b={name:"Clock",components:{ThreeColLayout:g.Z,SmoothReflow:r.default,DefaultClock:u,PercentClock:w,ToastMenu:()=>i.e(9994).then(i.bind(i,99994)),Dropdown:()=>i.e(8692).then(i.bind(i,88692)),DropdownOption:()=>i.e(2672).then(i.bind(i,2672)),QuickNav:()=>i.e(3157).then(i.bind(i,33157)),QuickNavOptionsList:()=>i.e(3165).then(i.bind(i,93165))},mixins:[a.Z],unreactive:()=>({centerOptions:s.Z,showAnyway:k.Z}),data:()=>({dropdownActive:!1}),computed:{activeClock(){return this.percentClock?"percent":"clock"},percentClock:{get:()=>n.ax.percentClock,set(t){n.ax.percentClock=t}},hour12clock:{get:()=>n.ax.hour12clock,set(t){n.ax.hour12clock=t}}},methods:{switchClock(t){if("pomodoro"===t){if(!this.$plus)return;this.$emit("pomodoro-show",!0)}else this.percentClock="percent"===t;this.dropdownActive=!1},toggleDropdown(t=!this.dropdownActive){t&&m.sendEvent(this.percentClock?"Percent Clock":"Clock","Show dropdown"),this.dropdownActive=t},switchBetween12and24hr(){this.hour12clock=!this.hour12clock,m.sendEvent("Clock","Toggle format",this.hour12clock?"12h":"24h")},openScheduleSettings(){this.$plus?(m.commandManager.executeAsync("settings.display",null,{scheduleVisible:!0,section:"balance"}),this.dropdownActive=!1,m.sendEvent("Percent Clock","Edit schedule")):m.cmd("modal.open","UPSELL_BALANCE_MODE",{sourceEvent:"Dash: percent clock"})}}};var C=(0,c.Z)(b,o,[],!1,null,null,null);C.options.__file="source/addins-vue/clock/Clock.vue";const x=C.exports},72606:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>h});var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"resize-wrapper",class:{"tr-height":t.height,"tr-width":t.width,"hide-overflow":t.hideOverflow&&t.resizing},style:{"--duration":t.resizeDuration+"ms","--transition-duration":(null===t.transitionDuration?t.duration:t.transitionDuration)+"ms",height:t.wrapperHeight,width:t.wrapperWidth},attrs:{"data-smooth-reflow-id":t.id,"data-test":"smooth-reflow","data-test-transitioning":t.resizing||t.transitionActive}},[i("div",{directives:[{name:"resize-sensor",rawName:"v-resize-sensor",value:t.handleResize,expression:"handleResize"}]},[i("transition",{attrs:{name:t.transition,duration:null===t.transitionDuration?t.duration:t.transitionDuration},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter,"enter-cancelled":t.enterCancelled,"before-leave":t.beforeLeave,leave:t.leave,"after-leave":t.afterLeave,"leave-cancelled":t.leaveCancelled}},[t._t("default")],2)],1)])};o._withStripped=!0;var a=i(28249),s=i(51940);const n={name:"SmoothReflow",directives:{ResizeSensor:a.Z},mixins:[s.Z],props:{height:{type:Boolean,default:!0},width:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},duration:{type:Number,default:500},transitionDuration:{type:Number,default:null},nested:{type:Boolean,default:!1},hideOverflow:{type:Boolean,default:!1},transition:{type:String,default:"smooth-height-fade"}},data:()=>({id:Math.random().toString(36).substring(7),wrapperHeightPx:"",wrapperWidthPx:"",auto:!0,resizing:!1,transitionActive:!1,ancestors:[]}),computed:{wrapperHeight(){return!this.height||this.disabled||this.auto||!this.wrapperHeightPx?"auto":this.wrapperHeightPx},wrapperWidth(){return this.width?this.disabled||this.auto||!this.wrapperWidthPx?"auto":this.wrapperWidthPx:""},resizeDuration(){return null===this.transitionDuration?this.duration:this.transitionActive?this.transitionDuration:this.duration}},created(){this.$e.$on("pauseSmoothReflow:"+this.id,this.pauseSmoothReflow),this.$e.$on("resumeSmoothReflow:"+this.id,this.resumeSmoothReflow)},mounted(){this.nested?(this.$nextTick(this.findSmoothReflowAncestors),setTimeout((()=>{this.auto=!1,this.setExplicitDimensions()}),500)):(this.auto=!1,this.setExplicitDimensions())},destroyed(){this.$e.$off("pauseSmoothReflow:"+this.id,this.pauseSmoothReflow),this.$e.$off("resumeSmoothReflow:"+this.id,this.resumeSmoothReflow)},methods:{async handleResize(t){this.auto||(this.resizing=!0,clearTimeout(this.timeout),this.nested&&this.ancestors.length&&(this.ancestors.forEach((t=>this.$e.$emit("pauseSmoothReflow:"+t))),await this.$nextTick()),this.height&&(this.wrapperHeightPx=t.height+"px"),this.width&&(this.wrapperWidthPx=t.width+"px"),this.timeout=setTimeout((()=>{this.nested&&this.ancestors.length&&this.ancestors.forEach((t=>this.$e.$emit("resumeSmoothReflow:"+t))),this.resizing=!1}),this.duration))},findSmoothReflowAncestors(){let t,e=!0;for(;e;)t=(t&&t.parentElement||this.$el.parentElement).closest("[data-smooth-reflow-id]"),t?this.ancestors.push(t.getAttribute("data-smooth-reflow-id")):e=!1},pauseSmoothReflow(){this.auto=!0},resumeSmoothReflow(){this.auto=!1,this.setExplicitDimensions()},setExplicitDimensions(){this.$refs.wrapper&&(this.height&&(this.wrapperHeightPx=this.$refs.wrapper.clientHeight+"px"),this.width&&(this.wrapperWidthPx=this.$refs.wrapper.clientWidth+"px"))},beforeEnter(t){this.transitionActive=!0,this.$emit("beforeEnter",t)},enter(t){this.$emit("enter",t)},afterEnter(t){this.transitionActive=!1,this.$emit("afterEnter",t)},enterCancelled(t){this.$emit("afterEnter",t)},beforeLeave(t){this.transitionActive=!0,this.$emit("beforeLeave",t)},leave(t){this.$emit("leave",t)},afterLeave(t){this.transitionActive=!1,this.$emit("afterLeave",t)},leaveCancelled(t){this.$emit("leaveCancelled",t)}}};i(38732);var r=(0,i(51900).Z)(n,o,[],!1,null,"0f8972b1",null);r.options.__file="source/addins-vue/shared_components/SmoothReflow.vue";const h=r.exports},74920:(t,e,i)=>{var o=i(61778);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals),(0,i(45346).Z)("42238270",o,!1,{ssrId:!0})},38732:(t,e,i)=>{var o=i(89728);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals),(0,i(45346).Z)("07262056",o,!1,{ssrId:!0})}}]);