"use strict";(self.webpackChunkmomentum=self.webpackChunkmomentum||[]).push([[9035],{68481:(e,t,i)=>{i.d(t,{Z:()=>s});const s={inserted:function(e,t){var i;if(!1===(null==t?void 0:t.value))return;const s=null==e||null===(i=e.value)||void 0===i?void 0:i.length;e.select(),(s||0===s)&&(e.setSelectionRange(s,s),e.scrollLeft=e.scrollWidth)}}},19035:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r});var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"form-row",class:{searching:e.typeAheadVisible}},[i("label",{attrs:{for:"current-timezone"}},[e._v("Location")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.enteredTimezone,expression:"enteredTimezone",modifiers:{trim:!0}},{name:"soft-focus",rawName:"v-soft-focus"}],staticClass:"current-timezone",class:{pulse:-1!==e.componentFieldWarnings.indexOf("timeZoneId")},attrs:{id:"current-timezone",type:"text",name:"current-timezone",placeholder:"Type a location",spellcheck:"false",autocomplete:"off","data-test":"timezone-input"},domProps:{value:e.enteredTimezone},on:{keyup:e.checkSearch,focus:function(e){return e.target.select()},input:function(t){t.target.composing||(e.enteredTimezone=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.typeAheadVisible,expression:"typeAheadVisible"}],staticClass:"typeahead",attrs:{"data-test":"timezone-dropdown"}},[i("ul",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"searching"},[i("li",[e._v("Searching...")])]),e._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:e.showList,expression:"showList"}],staticClass:"dropdown-list"},e._l(e.suggestionList,(function(t,s){return i("li",{key:s,class:t.displayName===e.hoveredTimezone.displayName?"hovered":"",attrs:{"data-test":"timezone-result"},on:{click:e.chooseLocation,mouseover:function(i){return e.hover(t,s)}}},[i("span",{staticClass:"location"},[e._v(e._s(t.name))]),e._v(" "),i("span",{staticClass:"timezone"},[e._v(e._s(t.offsetString))])])})),0),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.notFound,expression:"notFound"}],staticClass:"none-found",attrs:{"data-test":"not-found"}},[e._v("No locations found.")])])]),e._v(" "),i("div",[i("label",[e._v("Name")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.name,expression:"name",modifiers:{trim:!0}}],staticClass:"timezone-name",class:{pulse:-1!==e.componentFieldWarnings.indexOf("name")},attrs:{type:"text",name:"timezone-name",spellcheck:"false","data-test":"name-input",autocomplete:"off"},domProps:{value:e.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onEnter(t)},change:e.setName,input:function(t){t.target.composing||(e.name=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])])};s._withStripped=!0;var n=i(325);const o={name:"Timezone",directives:{SoftFocus:i(68481).Z},props:{value:{type:Object,default:null},onEnter:{type:Function,default:()=>{}},onUpdate:{type:Function,default:()=>{}},onBlur:{type:Function,default:()=>{}},componentFieldWarnings:{type:Array,default:()=>[]}},data:()=>({notFound:!1,showList:!1,suggestionList:[],typeAheadVisible:!1,loading:!1,selectedTimezone:{},enteredTimezone:"",hoveredTimezone:{},name:""}),watch:{value:{handler(e){e&&(this.selectedTimezone={id:e.timeZoneId,name:e.timeZoneName,currentOffset:e.currentOffset},this.enteredTimezone=this.selectedTimezone.name||"",this.name=e.name&&e.name.trim()||"")},immediate:!0,deep:!0}},mounted(){this.loadingSearch=0},methods:{checkSearch(e){if(27===e.keyCode)e.preventDefault(),e.stopPropagation(),this.revertLocation();else{if(37===e.keyCode||39===e.keyCode)return;if(9===e.keyCode&&e.shiftKey||16===e.keyCode)return void this.showDropdown();if(13===e.keyCode){if(!this.suggestionList.length)return;this.chooseLocation(),e.stopImmediatePropagation()}else if(38===e.keyCode){if(e.preventDefault(),e.stopImmediatePropagation(),!this.suggestionList.length)return;this.selected=0===this.selected?this.suggestionList.length-1:this.selected-1,this.hoveredTimezone=this.suggestionList[this.selected]}else if(40===e.keyCode){if(e.preventDefault(),e.stopImmediatePropagation(),!this.suggestionList.length)return;this.selected=this.selected===this.suggestionList.length-1?0:this.selected+1,this.hoveredTimezone=this.suggestionList[this.selected]}else{let e="string"==typeof this.enteredTimezone?this.enteredTimezone.trim().length:0,t=(new Date).getTime();this.triggeredSearchAt=t,e>2&&setTimeout((()=>{t===this.triggeredSearchAt&&this.searchForLocation(),this.triggeredOnce=!0}),this.triggeredOnce?300:0),e<3&&this.closeDropdown(),e||this.revertLocation()}}},showDropdown(){this.suggestionList.length>0?this.showList=!0:this.searchForLocation()},closeDropdown(){this.typeAheadVisible=!1,this.loading=!1,this.showList=!1,this.notFound=!1},hover(e,t){this.hoveredTimezone=e,this.selected=t},revertName(){this.$name.val(this.model?this.model.get("name"):""),this.$name.blur()},revertLocation(){this.suggestionList=[],this.enteredTimezone=this.timezone,this.$emit("input",{name:this.name,timeZoneId:null,timeZoneName:null,currentOffset:0}),this.closeDropdown()},searchForLocation(){let e=this.enteredTimezone,t=e.indexOf(",");t>=0&&(e=e.substr(0,t)),e.trim().length&&this.lastQuery!==e&&(this.lastQuery=e,this.loadingSearch++,this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this.typeAheadVisible=!0,this.loading=!0}),300),n.Z.findTimezone(e).then((e=>{if(this.loadingSearch--,this.notFound=!1,e&&0===this.loadingSearch){if(this.suggestionList=e,this.suggestionMap={},!this.suggestionList.length)return 0===this.loadingSearch&&(this.notFound=!0),this.showList=!1,this.timeout&&clearTimeout(this.timeout),void(this.loading=!1);this.suggestionList.forEach((e=>{this.suggestionMap[e.name]=e})),this.showList=!0,this.hoveredTimezone=this.suggestionList[0],this.selected=0,this.typeAheadVisible=!0,this.timeout&&clearTimeout(this.timeout),this.loading=!1}})).catch((e=>{this.loadingSearch--,this.timeout&&clearTimeout(this.timeout),this.loading=!1,console.error(e)})))},chooseLocation(){this.selectedTimezone=this.hoveredTimezone,this.enteredTimezone=this.selectedTimezone.name,this.name||(this.name=this.selectedTimezone.shortName),this.closeDropdown();let e=this.getResult();this.$emit("input",e)},getResult(){return{name:m.utils.capitalizeFirstLetter(this.name),timeZoneId:this.selectedTimezone.id,timeZoneName:this.selectedTimezone.name,currentOffset:this.selectedTimezone.currentOffset}},setName(){this.$emit("input",this.getResult())},isFormValid(){let e=!this.$name.val().trim().length;return this.enteredTimezone.length>0&&!e&&(this.selectedTimezone||this.model)},updateSaveButtonState(e){this.saveDisabled=!this.isFormValid(e),this.$save.toggleClass("disabled",this.saveDisabled),e&&e.keyCode===mConst("keyEscape")?this.revertName():!this.saveDisabled&&e&&e.keyCode===mConst("keyReturn")&&this.update(!0,!0)},checkForContent(){this.noContent=!this.$el.querySelector(".editable-content").innerHTML.length||"&nbsp;"===this.$el.querySelector(".editable-content").innerHTML},update(){this.checkForContent(),this.onUpdate(this.enteredContent())},enteredContent(){let e=this.$el.querySelector(".editable-content").innerText;return"&nbsp;"===e?"":e},enter(e){e.preventDefault(),this.$el.querySelector(".editable-content").innerHTML.length||(this.paddedContent="&nbsp;"),this.onEnter(this.enteredContent())},blur(){this.editing&&(this.$el.querySelector(".editable-content").innerHTML.length||(this.paddedContent="&nbsp;"),this.onBlur(this.enteredContent()))},tab(e){e.preventDefault(),this.blur()}}};var a=(0,i(51900).Z)(o,s,[],!1,null,null,null);a.options.__file="source/addins-vue/baseMetric/components/TimezoneSelector.vue";const r=a.exports}}]);