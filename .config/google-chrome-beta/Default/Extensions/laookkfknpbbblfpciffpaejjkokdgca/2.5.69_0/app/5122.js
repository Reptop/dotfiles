(self.webpackChunkmomentum=self.webpackChunkmomentum||[]).push([[5122],{48713:(e,t,i)=>{"use strict";i.d(t,{Z:()=>u});var s=i(20144),a=i(88026),n=i(51726),o=i.n(n),r=i(34952),d=i(12096),l=i(60607);let p={};const c={bind:function(e,t){m.utils.isTouchDevice()&&(e.dataset.justBoundMobileClickHandler=!0,setTimeout((()=>{e.dataset.justBoundMobileClickHandler=!1}),100),e.dataset.mobileClickHandlerId=Math.random().toString(36).substring(7),p[e.dataset.mobileClickHandlerId]=t.value,e.addEventListener("click",t.value))},unbind:function(e){m.utils.isTouchDevice()&&(e.removeEventListener("click",p[e.dataset.mobileClickHandlerId]),delete p[e.dataset.mobileClickHandlerId],delete e.dataset.mobileClickHandlerId,delete e.dataset.justBoundMobileClickHandler)}};s.Z.use(a.Z,{name:"unreactive"}),s.Z.use(o()),s.Z.use(r.InlineSvgPlugin),s.Z.prototype.$xhr=l.Z,s.Z.prototype.$e=d.Z,s.Z.directive("mobile-click",c),new s.Z({bb:()=>({conditionalFeatures:m.conditionalFeatures,teamInfo:m.models.teamInfo,date:m.models.date,balance:m.models.balanceMode})}),s.Z.mixin({unreactive:()=>({$touch:m.utils.isTouchDevice()}),computed:{$plus:()=>m.conditionalFeatures.featureEnabled("plus"),$team:()=>m.conditionalFeatures.featureEnabled("team"),$admin:()=>m.models.teamInfo&&m.models.teamInfo.get("team")&&m.models.teamInfo.get("team").userIsAdmin}});const u=s.Z},19195:(e,t,i)=>{"use strict";i.d(t,{FZ:()=>n,Ox:()=>d,TF:()=>r,cl:()=>o,mX:()=>l});var s=i(22005),a=i(23145);const n={mixins:[i(44614).Z],data:()=>({collection:new s.F}),unreactive:()=>({type:"",Model:null,dataService:null,names:{}}),computed:{emptyMessage(){return`No ${this.nameLCP} yet`},data(){return this.collection.loaded||this.refresh(),this.collection},visible(){return a.Fl[this.visibleSetting]}},created(){this.dataService||console.warn('No dataService property detected, please connect a dataService property in "unreactive"'),this.$e.$on(this.type+":refresh",this.refresh),this.$e.$on("resetCollections",this.resetCollection)},destroyed(){this.$e.$off(this.type+":refresh",this.refresh),this.$e.$off("resetCollections",this.resetCollection)},methods:{refresh({queryParams:e,mode:t}={}){return new Promise(((i,s)=>{this.dataService.get({queryParams:e,mode:t,success:e=>{this.addItemsToCollection(e),i()},failure:e=>{console.error(e),s(e)}})}))},addItemsToCollection(e,t=this.collection){const i=t.items,s=e.map((e=>e.id));return Object.keys(i).forEach((e=>{s.includes(e)||this.$delete(i,e)})),e.forEach((e=>{const t=e.id;let s;t in i?s=i[t]:(s=new this.Model,this.$set(i,t,s)),s.updateData(e)})),this.$set(t,"loaded",!0),e},add(e){const t=e.id=m.utils.uuidv4();this.$set(this.data.items,t,e);const i=this.getAddRequestBody(e);return this.dataService.add(t,i).catch((e=>{throw this.$delete(this.data.items,t),e}))},update(e,t){const i=this.getUpdateRequestBody(e,t);return this.dataService.update(e.id,i)},delete(e){return this.dataService.delete(e.id).then((()=>{this.$delete(this.data.items,e.id)}))},archive(e){return this.$set(e,"archived",!0),this.dataService.update(e.id,{archived:!0}).catch((t=>{throw this.$set(e,"archived",!1),t}))},unarchive(e){return this.$set(e,"archived",!1),this.dataService.update(e.id,{archived:!1}).catch((t=>{throw this.$set(e,"archived",!0),t}))},getAddRequestBody(e){const t={};return e.props.forEach((i=>{void 0!==e.editProps[i]&&(t[i]=e.editProps[i])})),t},getUpdateRequestBody(e){const t={};return e.getChanges().forEach((i=>t[i]=e.editProps[i])),t},resetCollection(){this.collection=new s.F}}},o={data:()=>({listPinnedValues:{}}),computed:{pinnedItems(){return this.data.loaded?Object.values(this.data.items).filter((e=>e.pinned&&!e.archived)):[]}},methods:{considerPinnedInList(e){return this.listPinnedValues[e.id]??e.pinned},sortPinned(e,t,i){const s=this.considerPinnedInList(e),a=this.considerPinnedInList(t);return s&&!a?-1:!s&&a?1:(i="function"==typeof i?i(e,t):i)||(e.id>t.id?-1:e.id<t.id?1:0)},togglePinned(e){const t=this.listPinnedValues[e.id];e.id in this.listPinnedValues||(this.listPinnedValues[e.id]=e.pinned),e.pinned=!e.pinned,this.dataService.update(e.id,{pinned:e.pinned}).catch((()=>{e.pinned=!e.pinned,this.listPinnedValues[e.id]=t}))},clearRecentlyChangedItems(){this.listPinnedValues={}}}},r={created(){this.assignRandomItem()},watch:{"randomItem.pinned"(e){e&&this.assignRandomItem()},"randomItem.archived"(e){e&&this.assignRandomItem()},randomItem(){this.randomItem||this.assignRandomItem()},"dashItems.length"(e){e||this.assignRandomItem()},"itemsArray.length"(e,t){!t&&e&&this.assignRandomItem()}},computed:{itemsArray(){return Object.values(this.data.items)},showRandom(){return a.ax["showRandomMetric-"+this.nameCS]},randomItem(){return Object.values(this.data.items).find((e=>e.random))},dashItems(){const e=!this.randomItem||!this.showRandom&&this.pinnedItems.length?[...this.pinnedItems]:[this.randomItem,...this.pinnedItems];return this.dashSort&&e.sort(this.dashSort),e}},methods:{getRandomItem(e){const t=Object.values(e).filter((e=>!e.pinned&&!e.archived));return t[m.utils.getRandomIntBetween(0,t.length-1)]},assignRandomItem(){const e=this.$watch("data.loaded",(t=>{if(t){this.clearRandomItem();const t=this.getRandomItem(this.data.items);t&&(t.random=!0),this.$nextTick((()=>e()))}}),{immediate:!0})},clearRandomItem(){this.randomItem&&(this.randomItem.random=!1)}}},d={computed:{selectedItem(){return Object.values(this.data.items).find((e=>e.selected))}},methods:{clearSelectedItem(){this.selectedItem&&(this.selectedItem.selected=!1)}}},l={data:()=>({mockCollection:new s.F}),computed:{data(){return this.mockCollection.loaded?this.mockCollection:(this.collection.loaded||this.refresh(),this.collection)}},methods:{addMockData(e){this.addItemsToCollection(e,this.mockCollection),this.mockCollection.loaded=!0},clearMockData(){this.mockCollection=new s.F}}}},71999:(e,t,i)=>{"use strict";i.d(t,{X:()=>a});const s=m.workers.serviceWorker.bus,a={mixins:[{methods:{_mergeQueryParams(...e){return Object.assign.apply(null,[{},this.queryParams.all||{}].concat(e))},_buildQueryString(...e){const t=new URLSearchParams(this._mergeQueryParams.apply(null,e)).toString();return t?"?"+t:""}}}],unreactive:()=>({type:"",path:"",mode:"sync",queryParams:{get:{},update:{}}}),created(){this.type||console.error("dataSyncServiceMixin Error: You must declare a type in unreactive")},methods:{get({path:e=this.path||this.type,success:t,failure:i,queryParams:a,mode:n=this.mode}={}){return e+=this._buildQueryString(this.queryParams.get,a),s.sendRecurringCrossTabMessage({msgId:this.type+":refreshed",handler:"get",args:[this.type,{path:e,env:this._getEnv(),mode:n}],success:t,failure:i})},add(e,t,{path:i=this.path||this.type,mode:a=this.mode}={}){return s.sendMessage({handler:"create",args:[this.type,e,t,{path:i,mode:a,env:this._getEnv()}]})},update(e,t,{path:i=this.path||this.type,mode:a=this.mode,queryParams:n}={}){return s.sendMessage({handler:"update",args:[this.type,e,t,{path:i,mode:a,env:this._getEnv(),queryString:this._buildQueryString(this.queryParams.update,n)}]})},delete(e,{path:t=this.path||this.type,mode:i=this.mode}={}){return s.sendMessage({handler:"delete",args:[this.type,e,{path:t,mode:i,env:this._getEnv()}]})},_getEnv:()=>({token:localStorage.getItem("token"),clientUuid:localStorage.getItem("client_uuid"),apiUrl:m.globals.urlRootApi,version:m.globals.version})}}},92664:(e,t,i)=>{"use strict";i.d(t,{H:()=>a,Z:()=>s});const s={data:()=>({id:"",archived:null,selected:!1,editProps:{}}),methods:{updateData(e){this.props.forEach((t=>this[t]=e[t])),e.id&&(this.id=e.id)},revertChanges(){this.editProps={}},getChanges(){let e=[];return this.editProps&&this.props.forEach((t=>{Array.isArray(this[t])||Array.isArray(this.editProps[t])?m.utils.arraysAreEqual(this[t],this.editProps[t])||e.push(t):this[t]!==this.editProps[t]&&e.push(t)})),e},commitChanges(){this.beforeCommitChanges&&this.beforeCommitChanges(),this.props.forEach((e=>{void 0!==this.editProps[e]&&(this[e]=this.editProps[e])})),this.revertChanges()},copyProperties(){for(let e of this.props)Array.isArray(this[e])?this.$set(this.editProps,e,[...this[e]]):"object"==typeof this[e]&&null!==this[e]?this.$set(this.editProps,e,{...this[e]}):this.$set(this.editProps,e,this[e])}}},a={maxCharPerLine:14,computed:{brokenName(){return m.utils.lineBreakString(m.utils.removeTags(this.name),this.$options.maxCharPerLine)}}}},44614:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a});var s=i(94326);const a={unreactive:()=>({names:{}}),computed:{nameLCP(){return this.names.lowerCasePlural||this.type.replace(/([A-Z])/g," $1").trim().toLowerCase()},nameLCS(){return this.names.lowerCaseSingular||(0,s.C5)(this.nameLCP)},nameCP(){return this.names.capitalizedPlural||m.utils.capitalizeWords(this.nameLCP)},nameCS(){return this.names.capitalizedSingular||m.utils.capitalizeWords(this.nameLCS)}}}},85122:(e,t,i)=>{"use strict";i.r(t);var s=i(48713),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"modal-base",attrs:{"data-test":"modal-base"}},[i("transition",{attrs:{name:e.transitionName,appear:""},on:{"after-leave":e.afterStepLeave}},[e.stepActive?i(e.activeStep.component||"Popup",e._b({tag:"component",staticClass:"modal-component",attrs:{"force-active-sub-step-index":e.forceActiveSubStepIndex,plans:e.plans,sales:e.sales},on:{destroy:e.destroyModal,stepComplete:e.handleStepCompletion,subStepComplete:e.handleSubStepCompletion,goToSubStep:e.goToSubStep,beforeSubStepEnter:e.beforeSubStepEnter,afterSubStepLeave:e.afterSubStepLeave,upgrade:e.showUpgrade,skipOnboarding:e.skipOnboarding,targetElementMissing:e.handleElementMissingError}},"component",e.activeStep,!1)):e._e()],1)],1)};a._withStripped=!0;var n=i(1609),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"popup nipple",class:[e.nippleClass,e.pulseAnimation?"popup-pulse":""],style:e.popupStyles,attrs:{"data-test":"popup","data-test-id":e.id}},[s("div",{staticClass:"app"},[s("header",{staticClass:"popup-header"},[s("h3",{staticClass:"popup-title"},[e._v(e._s(e.headerText))]),e._v(" "),s("div",{staticClass:"popup-hide icon-wrapper icon-wrapper-close",on:{click:e.close}},[s("inline-svg",{staticClass:"icon icon-cancel",attrs:{src:i(52545)}})],1)]),e._v(" "),s("div",{staticClass:"popup-body",domProps:{textContent:e._s(e.bodyText)}}),e._v(" "),s("div",{staticClass:"popup-footer"},[[e.hideNext?e._e():s("button",{staticClass:"button button-primary next",attrs:{"data-test":"next"},on:{click:e.completeStep}},[e._v(e._s(e.nextButtonText))]),e._v(" "),e.hideSkip?e._e():s("span",{staticClass:"opt-out"},[e._v("\n\t\t\t\t\tSeen these already? "),s("span",{staticClass:"opt-out-button",on:{click:e.skipOnboarding}},[e._v("Skip")])])],e._v(" "),[e.ctaCallback?s("span",{staticClass:"button button-primary",class:e.ctaClasses,on:{click:e.clickCta}},[e._v(e._s(e.ctaText))]):e._e(),e._v(" "),e.secondaryCallback?s("span",{staticClass:"button-secondary",class:e.secondaryClasses,on:{click:e.clickSecondary}},[e._v(e._s(e.secondaryText))]):e._e()]],2)])])};o._withStripped=!0;const r={name:"Popup",customNipplePositionId:"customNipplePosition",props:{id:{type:String,required:!0},targetElementSelector:{type:String,required:!0},elementReadyEvent:{type:String,default:""},position:{type:String,default:"top-right"},headerText:{type:String,default:""},bodyText:{type:String,default:""},ctaText:{type:String,default:"Learn more…"},ctaCallback:{type:Function,default:null},ctaClasses:{type:String,default:""},secondaryText:{type:String,default:""},secondaryCallback:{type:Function,default:null},secondaryClasses:{type:String,default:""},hideCallback:{type:Function,default:null},nextButtonText:{type:String,default:"Next"},windowEdgePadding:{type:Number,default:7},targetDistance:{type:Number,default:0},pulseAnimation:{type:Boolean,default:!0},hideSkip:{type:Boolean,default:!1},hideNext:{type:Boolean,default:!1}},data:()=>({nippleClass:"",popupStyles:{}}),mounted(){this.$e.listenTo(m,"globalEvent:window:resize devPanelToggled",this.handleResize);const e=this.getTargetElement();e?this.setPosition(e):this.elementReadyEvent&&m.on(this.elementReadyEvent,this.setPosition),m.sendEvent("Onboarding","Step displayed",this.id)},destroyed(){this.$e.stopListening(m,"globalEvent:window:resize",this.handleResize)},methods:{calculatePosition(e,t){try{const i=()=>v>h-l-this.windowEdgePadding?`${Math.round(h-v-this.windowEdgePadding)}px`:"",s=()=>h-S<l+this.windowEdgePadding?`${Math.round(h-S-this.windowEdgePadding)}px`:"",a=e=>e<this.windowEdgePadding?this.windowEdgePadding-e:0,n=e=>`${e}: ${u-p}px`;let o={},r="",d=e.getBoundingClientRect(),l=350,p=0,c=6,u=33,h=window.innerWidth,m=(d.right-d.left)/2+d.left,v=m-u-c,S=h-m-u-c,g=d.bottom+this.targetDistance,f=window.innerHeight-d.top+this.targetDistance;switch(t){case"top-left":p=a(S),p&&(r=n("right")),o={left:"auto",right:`${S+p}px`,bottom:`${f}px`,"max-width":s()};break;case"top-right":p=a(v),p&&(r=n("left")),o={left:`${v+p}px`,top:"auto",bottom:`${f}px`,"max-width":i()};break;case"bottom-left":p=a(S),p&&(r=n("right")),o={left:"auto",right:`${S+p}px`,top:`${g}px`,"max-width":s()};break;case"bottom-right":p=a(v),p&&(r=n("left")),o={left:`${v+p}px`,top:`${g}px`,"max-width":i()}}return{popupCss:o,nipplePositionOverride:r}}catch(e){return this.$emit("targetElementMissing"),{}}},getNippleClass(){switch(this.position){case"top-left":return"nipple-bottom-right";case"top-right":return"nipple-bottom-left";case"bottom-left":return"nipple-top-right";case"bottom-right":return"nipple-top-left"}},setPosition(e=this.getTargetElement()){let t=this.calculatePosition(e,this.position);this.popupStyles=t.popupCss,this.nippleClass=this.getNippleClass(),t.nipplePositionOverride?this.createStyleElement(this.$options.customNipplePositionId,`.popup[class*=nipple]:after { ${t.nipplePositionOverride} !important; }`):this.removeStyleElement(this.$options.customNipplePositionId)},handleResize(e){!0===e?this.$nextTick(this.setPosition):(clearTimeout(this.timeout),this.timeout=setTimeout(this.setPosition,1e3))},clickCta(){m.sendEvent("Onboarding","CTA clicked",this.id),this.ctaCallback&&this.ctaCallback()},clickSecondary(){m.sendEvent("Onboarding","Secondary clicked",this.id),this.secondaryCallback&&this.secondaryCallback()},completeStep(e){e||m.sendEvent("Onboarding","Step completed",this.id),this.$emit("stepComplete")},skipOnboarding(){m.sendEvent("Onboarding","Skipped",this.id),this.$emit("skipOnboarding")},close(e){e||m.sendEvent("Onboarding","Popup closed",this.id),this.hideCallback&&this.hideCallback(),this.hideNext?this.$emit("destroy"):this.$emit("stepComplete")},createStyleElement(e,t){let i=document.createElement("style"),s=document.createTextNode(t);i.setAttribute("id",e),i.setAttribute("type","text/css"),i.appendChild(s),document.head.appendChild(i)},removeStyleElement(e){let t=document.head.querySelector(`#${e}`);t&&t.parentNode.removeChild(t)},getTargetElement(){return document.querySelector(this.targetElementSelector)}}};i(41777);var d=i(51900),l=(0,d.Z)(r,o,[],!1,null,"285b2a26",null);l.options.__file="source/addins-vue/modal/common/Popup.vue";const p=l.exports;var c=i(94333),u=i(59),h=i(73228),v=i(83947),S=i(70261);const g=m.utils.getUserState();function f(e=g.state){var t;let i={};return null===(t=u.C[e])||void 0===t||t.forEach((e=>{var t;b(null===(t=u.U[e])||void 0===t?void 0:t.disabledBrowsers)||(i[e]=u.U[e])})),i}function b(e){return(null==e?void 0:e.includes(m.utils.getBrowserName()))||(null==e?void 0:e.includes("Mobile"))&&m.utils.isTouchDevice()}const y={name:"ModalManager",customStylesId:"custom-step-css",customSubStepStylesId:"custom-sub-step-css",components:{Popup:p},data:()=>({activeStep:{},stepActive:!1,forceActiveSubStepIndex:null,activeSubStepIndex:0,plans:{},sales:{}}),unreactive:()=>({allocatedDefinitions:{}}),computed:{transitionName(){return this.activeStep.transitionName||(["top-right","top-left"].includes(this.activeStep.position)?"fade-slide-up":"fade-slide-down")},activeSubStep(){return this.activeStep&&this.activeStep.subSteps&&this.activeStep.subSteps[this.activeSubStepIndex]||null}},watch:{activeStep(e){null!=e&&e.getPlanInfo&&!Object.keys(this.plans).length&&this.getPlanInfo().then((({plans:e={},sales:t={}}={})=>{this.plans=e,this.sales=t||{}}))}},created(){m.modals={stepsEnum:h.os,definitions:u.U},m.on("onboarding:initiate",this.initiateOnboardingStep),m.on("modal:forceStep",this.forceStep),m.on("modal:close",this.destroyModal),m.on("modal:showUpgrade",this.showUpgrade),m.once("modal:loadOnboarding",this.loadOnboarding),m.trigger("modalManager:created")},destroyed(){m.off("onboarding:initiate",this.initiateOnboardingStep),m.off("modal:forceStep",this.forceStep),m.off("modal:close",this.destroyModal),m.off("modal:showUpgrade",this.showUpgrade),m.off("modal:loadOnboarding",this.loadOnboarding),delete m.modals,this.clearAllCustomStyles()},methods:{async loadOnboarding(){const e=()=>m.trigger("onboarding:stepsAnalyzed",{onboardingSkipped:!0});try{if(localStorage.getItem("onboarding:skip"))return e();if(this.allocatedDefinitions=Object.keys(v.V).length&&null!==(t=S.Z.experiments)&&void 0!==t&&t.length?function(){var e;const t=function(e=g.state){var t;let i={};return null===(t=v.$[e])||void 0===t||t.forEach((e=>{var t;b(null===(t=v.V[e])||void 0===t?void 0:t.disabledBrowsers)||(i[e]=v.V[e])})),i}(),i=f();if(!t)return i;let s={};return null===(e=S.Z.experiments)||void 0===e||e.forEach((e=>{let a=t[e.experimentName];if(!a)return;const n=a.variants[e.variantName];n&&n.steps.forEach((function(e){var t;s[e]={...u.U[e]},null!==(t=n.overrides)&&void 0!==t&&t[e]&&(s[e]=Object.assign(s[e],n.overrides[e])),n.deleteSteps&&n.deleteSteps.forEach((e=>{delete i[e]}))}))})),Object.assign(i,s)}():f(),Object.keys(this.activeStep).length)return;await n.Z.refresh({mode:"cache"});let[i,s]=this.getActiveStep();if(!i||!Object.keys(i).length)return e();if(await n.Z.refresh({mode:"server"}),[i,s]=this.getActiveStep(),!i||!Object.keys(i).length)return e();this.activeStep=i,this.activeSubStepIndex=s,m.introductionActive?m.trigger("onboarding:stepsAnalyzed",{keepAppsHidden:this.activeStep.hideOtherApps}):this.initiateOnboardingStep()}catch(t){console.error(t),e()}var t},updateStepActiveProperties(e,{deactivate:t,activeSubStepIndex:i}={}){t?(this.$delete(e,"activeSubStepIndex"),this.$delete(e,"active")):(e.active||this.$set(e,"active",!0),e.subSteps&&this.$set(e,"activeSubStepIndex",i))},async forceStep(e,t,{completeCurrentStep:i}={}){this.stepActive&&(i?await this.handleStepCompletion({skipGettingNextStep:!0}):this.destroyModal()),this.$nextTick((()=>{void 0!==t?this.activeSubStepIndex=t:void 0!==e.firstSubStep&&(this.activeSubStepIndex=e.firstSubStep()),this.activeStep=e,this.updateStepActiveProperties(this.activeStep,{activeSubStepIndex:this.activeSubStepIndex}),this.setCustomStyles(),this.stepActive=!0}))},getActiveStep(){for(let t in this.allocatedDefinitions){if(!this.allocatedDefinitions.hasOwnProperty(t))continue;let i=this.allocatedDefinitions[t],s=this.getStepInCollection(i);var e;if((!s||!["complete","dismissed","legacy"].includes(s.status))&&this.userMeetsDateRestrictions(i)&&this.checkPrerequisiteStepComplete(i))return[i,(null==s||null===(e=s.data)||void 0===e?void 0:e.activeSubStepIndex)||0]}return[]},userMeetsDateRestrictions(e){let t=localStorage.getItem("user:createTime");return!!t&&new Date(t)>new Date(e.userCreatedTimeGate||m.constants.defaultOnboardingStepUserCreatedTimeGate)},checkPrerequisiteStepComplete(e){var t;return!e.prerequisite||"complete"===(null===(t=this.getStepInCollection(e.prerequisite))||void 0===t?void 0:t.status)},handleSubStepCompletion(e){const t="modal:subStepCompletionIntercepted";!0===e&&this.$e.off(t),this.activeSubStep.interceptNextStep&&!0!==e?(this.$e.off(t),this.$e.on(t,this.handleSubStepCompletion.bind(this,!0)),this.$e.trigger("modal:interceptSubStepCompletion")):this.activeStep.subSteps&&this.activeSubStepIndex<this.activeStep.subSteps.length-1?(m.sendEvent("Onboarding","Sub-step completed",this.activeSubStep.name),this.activeSubStepIndex++,this.updateStepActiveProperties(this.activeStep,{activeSubStepIndex:this.activeSubStepIndex}),this.currentStepIsAllocated()&&this.saveStepProgress(this.activeStep,this.activeSubStepIndex)):(m.sendEvent("Onboarding","Sub-step completed",this.activeSubStep.name),this.handleStepCompletion())},async handleStepCompletion({skipGettingNextStep:e,dismissed:t}={}){m.sendEvent("Onboarding","Step completed",this.activeStep.name),this.currentStepIsAllocated()&&await this.saveStepProgress(this.activeStep,this.activeSubStepIndex,t?"dismissed":"complete"),this.stepActive=!1,this.activeSubStepIndex=0,this.updateStepActiveProperties(this.activeStep,{deactivate:!0}),e&&this.clearStepStyles()},currentStepIsAllocated(){return this.activeStep.id in this.allocatedDefinitions},async saveStepProgress(e,t,i="active"){let s=this.getStepInCollection(e);if(s){s.copyProperties(),s.editProps.status=i,s.editProps.data||(s.editProps.data={}),s.editProps.data.activeSubStepIndex=t;try{await n.Z.update(s),s.commitChanges()}catch(e){console.error(e),s.revertChanges()}}else{s=new n.Z.Model,s.updateData({name:e.id,status:i,data:{activeSubStepIndex:t}});try{await n.Z.add(s)}catch(e){console.error(e)}}e.alsoCompletesSteps&&["complete","dismissed"].includes(i)&&await Promise.all(e.alsoCompletesSteps.map((e=>{const t=u.U[e],s=this.getStepInCollection(t);return s&&["complete","dismissed"].includes(s.status)?Promise.resolve():this.saveStepProgress(t,void 0,i)})))},getStepInCollection:e=>("string"==typeof e&&(e=u.U[e]),Object.values(n.Z.data.items).find((t=>!(!e.legacyId||"legacy"!==t.status||t.name!==e.legacyId)||t.name===e.id))),initiateOnboardingStep(){this.activeStep&&Object.keys(this.activeStep).length&&(this.updateStepActiveProperties(this.activeStep,{activeSubStepIndex:this.activeSubStepIndex}),this.setCustomStyles(),this.stepActive=!0)},destroyModal(){this.activeSubStepIndex=0,this.updateStepActiveProperties(this.activeStep,{deactivate:!0}),this.clearAllCustomStyles(),this.stepActive=!1},skipOnboarding(){localStorage.setItem("onboarding:skip",!0),this.destroyModal()},goToSubStep(e){this.activeSubStepIndex=e,this.updateStepActiveProperties(this.activeStep,{activeSubStepIndex:this.activeSubStepIndex})},showUpgrade(){m.utils.useInAppUpgrade()?m.utils.useAppleAppPayment()&&m.isLoggedIn()?m.utils.openAppleUpgrade():this.forceStep(u.U[h.os.UPGRADE],void 0,{completeCurrentStep:!0}):m.commandManager.execute("window.account.open.login","/upgrade")},handleElementMissingError(){this.$set(this.activeStep,"error",!0)},setCustomStyles(){this.applyStepStyles(),this.applySubStepStyles()},clearAllCustomStyles(){this.clearStepStyles(),this.clearSubStepStyles()},clearStepStyles(){this.removeStyleElement(this.$options.customStylesId)},clearSubStepStyles(){this.removeStyleElement(this.$options.customSubStepStylesId)},applyStepStyles(){var e;null!==(e=this.activeStep)&&void 0!==e&&e.customCss&&this.createStyleElement(this.$options.customStylesId,this.activeStep.customCss)},applySubStepStyles(){var e;null!==(e=this.activeSubStep)&&void 0!==e&&e.customCss&&this.createStyleElement(this.$options.customSubStepStylesId,this.activeSubStep.customCss)},createStyleElement(e,t){let i=document.createElement("style"),s=document.createTextNode(t);i.setAttribute("id",e),i.setAttribute("type","text/css"),i.appendChild(s),document.head.appendChild(i)},removeStyleElement(e){let t=document.head.querySelector(`#${e}`);t&&t.parentNode.removeChild(t)},afterStepLeave(){this.clearStepStyles();const[e,t]=this.getActiveStep();e&&Object.keys(e).length?(this.activeStep=e,this.activeSubStepIndex=t,this.initiateOnboardingStep()):m.models.notificationManager.displayPendingMessages()},beforeSubStepEnter(){this.applySubStepStyles()},afterSubStepLeave(){this.clearSubStepStyles()},getPlanInfo:()=>new Promise(((e,t)=>{$.ajax(m.globals.urlRootApi+"account/plans").done((i=>{i||t(),localStorage.getItem("sale:force")&&m.utils.isDev()&&(i.personal.sales={yearly:c.om}),e(i.personal)})).fail(t)}))}};i(18542);var C=(0,d.Z)(y,a,[],!1,null,"dae7a036",null);C.options.__file="source/addins-vue/modal/ModalManager.vue";const x=C.exports;if(!m.modals){const e=new s.Z({render:e=>e(x)}).$mount();document.querySelector(".apps .full").appendChild(e.$el)}},1609:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var s=i(48713),a=i(19195),n=i(71999);const o=new(s.Z.extend({name:"OnboardingStepDataService",mixins:[n.X],unreactive:()=>({type:"onboardingSteps",path:"onboarding_steps",queryParams:{update:{update_mask:"*"}}})}));var r=i(92664);const d=s.Z.extend({name:"OnboardingStepModel",mixins:[r.Z],data:()=>({id:"",name:"",status:"",data:{}}),unreactive:()=>({props:["name","data","status"]})}),l=new(s.Z.extend({name:"OnboardingStepCollection",mixins:[a.FZ],unreactive:()=>({type:"onboardingSteps",Model:d,dataService:o}),methods:{getAddRequestBody(e){let t={};return e.props.forEach((i=>t[i]=e[i])),t},getUpdateRequestBody(e){let t={};return e.props.forEach((i=>t[i]=e.editProps[i])),t}}}))},22005:(e,t,i)=>{"use strict";i.d(t,{F:()=>a});var s=i(48713);function a(){return new s.Z.observable({loaded:!1,items:{}})}},2296:(e,t,i)=>{(e.exports=i(23645)(!1)).push([e.id,"\n.modal-component[data-v-dae7a036] {\n\t/* Overrides because onboarding is always light mode */\n\t--color-icon: #333;\n\t--icon-wrapper-bg: rgba(0,0,0,0.05);\n\t--modal-padding: 40px;\n}\n.fade-slide-down-enter-active[data-v-dae7a036], .fade-slide-down-leave-active[data-v-dae7a036] { transition: all 0.5s ease-out;\n}\n.fade-slide-down-enter[data-v-dae7a036], .fade-slide-down-leave-to[data-v-dae7a036] { opacity: 0; transform: translateY(0px);\n}\n.fade-slide-up-enter-active[data-v-dae7a036], .fade-slide-up-leave-active[data-v-dae7a036] { transition: all 0.5s ease-out;\n}\n.fade-slide-up-enter[data-v-dae7a036], .fade-slide-up-leave-to[data-v-dae7a036] { opacity: 0; transform: translateY(0px);\n}\n[data-v-dae7a036] .opt-out { margin-bottom: 0px; opacity: 0.45; font-size: 0.8125rem; line-height: 1.4;\n}\n[data-v-dae7a036] .opt-out-button { margin-left: -3px; padding: 3px; cursor: pointer; text-decoration: underline; white-space: nowrap;\n}\n[data-v-dae7a036] .opt-out-button:hover { opacity: 0.75;\n}\n",""])},99354:(e,t,i)=>{(e.exports=i(23645)(!1)).push([e.id,"\n.popup[data-v-285b2a26] { width: 390px; position: fixed; z-index: 100; overflow: visible;\n}\n.popup.popup-pulse[data-v-285b2a26]:before { animation: 1.8s popup-pulse-data-v-285b2a26 infinite forwards; position: absolute; top: 0; right: 0; bottom: 0; left: 0; z-index: -1; opacity: 0; border-radius: 20px; --size: 26px; box-shadow: inset 0 0 var(--size) calc(var(--size)*0.5) white, 0 0 var(--size) calc(var(--size)*0.5) white; content: '';\n}\n@keyframes popup-pulse-data-v-285b2a26 {\n0% { opacity: 0.6; transform: scale(1);\n}\n\t\t\t/*0.1% { opacity: 0.6; }*/\n100% { opacity: 0; transform: scale(1.15);\n}\n}\n.app[data-v-285b2a26] { --app-padding: 26px; position: relative;\n}\n.popup-header[data-v-285b2a26] { padding-right: 20px; display: flex; justify-content: space-between; align-items: flex-start;\n}\n.popup-title[data-v-285b2a26] { margin: 0 0 8px;\n}\n.popup-hide[data-v-285b2a26] { margin: 8px; padding: 13px; position: absolute; top: 0; right: 0; z-index: 1; display: flex; align-items: center; justify-content: center;\n}\n.popup-body[data-v-285b2a26] { padding-right: 20px; font-size: 0.9375rem; line-height: 1.5;\n}\n.popup-footer[data-v-285b2a26] { margin: 14px 0 -1px; display: flex; align-items: center;\n}\n.button-primary[data-v-285b2a26] { margin-right: 15px;\n}\n.button-secondary[data-v-285b2a26] { padding: 0 10px; align-self: stretch; display: flex; align-items: center; opacity: 0.7; cursor: pointer; font-size: 14px; font-weight: 500;\n}\n.button-secondary[data-v-285b2a26]:hover { opacity: 0.85;\n}\n.button-secondary[data-v-285b2a26]:hover:active { opacity: 0.7;\n}\n",""])},23645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=function(e,t){var i,s=e[1]||"",a=e[3];if(!a)return s;if(t&&"function"==typeof btoa){var n=(i=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),o=a.sources.map((function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"}));return[s].concat(o).concat([n]).join("\n")}return[s].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i})).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var s={},a=0;a<this.length;a++){var n=this[a][0];null!=n&&(s[n]=!0)}for(a=0;a<e.length;a++){var o=e[a];null!=o[0]&&s[o[0]]||(i&&!o[2]?o[2]=i:i&&(o[2]="("+o[2]+") and ("+i+")"),t.push(o))}},t}},52545:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTIuOTgyIDIxMi45ODIiPjxwYXRoIGQ9Ik0xMzEuODA0IDEwNi40OTFsNzUuOTM2LTc1LjkzNmM2Ljk5LTYuOTkgNi45OS0xOC4zMjMgMC0yNS4zMTItNi45OS02Ljk5LTE4LjMyMi02Ljk5LTI1LjMxMiAwTDEwNi40OTEgODEuMTggMzAuNTU0IDUuMjQyYy02Ljk5LTYuOTktMTguMzIyLTYuOTktMjUuMzEyIDAtNi45ODkgNi45OS02Ljk4OSAxOC4zMjMgMCAyNS4zMTJsNzUuOTM3IDc1LjkzNi03NS45MzcgNzUuOTM3Yy02Ljk4OSA2Ljk5LTYuOTg5IDE4LjMyMyAwIDI1LjMxMiA2Ljk5IDYuOTkgMTguMzIyIDYuOTkgMjUuMzEyIDBsNzUuOTM3LTc1LjkzNyA3NS45MzcgNzUuOTM3YzYuOTg5IDYuOTkgMTguMzIyIDYuOTkgMjUuMzEyIDAgNi45OS02Ljk5IDYuOTktMTguMzIyIDAtMjUuMzEybC03NS45MzYtNzUuOTM2eiIgLz48L3N2Zz4K"},51900:(e,t,i)=>{"use strict";function s(e,t,i,s,a,n,o,r){var d,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=i,l._compiled=!0),s&&(l.functional=!0),n&&(l._scopeId="data-v-"+n),o?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=d):a&&(d=r?function(){a.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:a),d)if(l.functional){l._injectStyles=d;var p=l.render;l.render=function(e,t){return d.call(t),p(e,t)}}else{var c=l.beforeCreate;l.beforeCreate=c?[].concat(c,d):[d]}return{exports:e,options:l}}i.d(t,{Z:()=>s})},18542:(e,t,i)=>{var s=i(2296);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),(0,i(45346).Z)("70ce7b8a",s,!1,{ssrId:!0})},41777:(e,t,i)=>{var s=i(99354);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),(0,i(45346).Z)("b51e2996",s,!1,{ssrId:!0})},45346:(e,t,i)=>{"use strict";function s(e,t){for(var i=[],s={},a=0;a<t.length;a++){var n=t[a],o=n[0],r={id:e+":"+a,css:n[1],media:n[2],sourceMap:n[3]};s[o]?s[o].parts.push(r):i.push(s[o]={id:o,parts:[r]})}return i}i.d(t,{Z:()=>m});var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var n={},o=a&&(document.head||document.getElementsByTagName("head")[0]),r=null,d=0,l=!1,p=function(){},c=null,u="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e,t,i,a){l=i,c=a||{};var o=s(e,t);return v(o),function(t){for(var i=[],a=0;a<o.length;a++){var r=o[a];(d=n[r.id]).refs--,i.push(d)}for(t?v(o=s(e,t)):o=[],a=0;a<i.length;a++){var d;if(0===(d=i[a]).refs){for(var l=0;l<d.parts.length;l++)d.parts[l]();delete n[d.id]}}}}function v(e){for(var t=0;t<e.length;t++){var i=e[t],s=n[i.id];if(s){s.refs++;for(var a=0;a<s.parts.length;a++)s.parts[a](i.parts[a]);for(;a<i.parts.length;a++)s.parts.push(g(i.parts[a]));s.parts.length>i.parts.length&&(s.parts.length=i.parts.length)}else{var o=[];for(a=0;a<i.parts.length;a++)o.push(g(i.parts[a]));n[i.id]={id:i.id,refs:1,parts:o}}}}function S(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function g(e){var t,i,s=document.querySelector("style["+u+'~="'+e.id+'"]');if(s){if(l)return p;s.parentNode.removeChild(s)}if(h){var a=d++;s=r||(r=S()),t=y.bind(null,s,a,!1),i=y.bind(null,s,a,!0)}else s=S(),t=C.bind(null,s),i=function(){s.parentNode.removeChild(s)};return t(e),function(s){if(s){if(s.css===e.css&&s.media===e.media&&s.sourceMap===e.sourceMap)return;t(e=s)}else i()}}var f,b=(f=[],function(e,t){return f[e]=t,f.filter(Boolean).join("\n")});function y(e,t,i,s){var a=i?"":s.css;if(e.styleSheet)e.styleSheet.cssText=b(t,a);else{var n=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(n,o[t]):e.appendChild(n)}}function C(e,t){var i=t.css,s=t.media,a=t.sourceMap;if(s&&e.setAttribute("media",s),c.ssrId&&e.setAttribute(u,t.id),a&&(i+="\n/*# sourceURL="+a.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}}}]);