(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd7ce02c"],{1394:function(t,e,a){"use strict";var n=a("cbc8"),i=a.n(n);i.a},"1b2c":function(t,e,a){},3074:function(t,e,a){},"38cb":function(t,e,a){"use strict";a("fb6a"),a("a9e3");var n=a("53ca"),i=a("a9ad"),s=a("7560"),r=a("3206"),o=a("80d2"),c=a("d9bd"),l=a("58df");e["a"]=Object(l["a"])(i["a"],Object(r["a"])("form"),s["a"]).extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:function(){return[]}},messages:{type:[String,Array],default:function(){return[]}},readonly:Boolean,rules:{type:Array,default:function(){return[]}},success:Boolean,successMessages:{type:[String,Array],default:function(){return[]}},validateOnBlur:Boolean,value:{required:!1}},data:function(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor:function(){if(!this.disabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError:function(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess:function(){return this.internalSuccessMessages.length>0||this.success},externalError:function(){return this.internalErrorMessages.length>0||this.error},hasMessages:function(){return this.validationTarget.length>0},hasState:function(){return!this.disabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages:function(){return this.genInternalMessages(this.errorMessages)},internalMessages:function(){return this.genInternalMessages(this.messages)},internalSuccessMessages:function(){return this.genInternalMessages(this.successMessages)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("input",t)}},shouldValidate:function(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations:function(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState:function(){if(!this.disabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget:function(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages.length>0?this.internalSuccessMessages:this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler:function(t,e){Object(o["h"])(t,e)||this.validate()},deep:!0},internalValue:function(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused:function(t){t||this.disabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting:function(){var t=this;setTimeout((function(){t.hasInput=!1,t.hasFocused=!1,t.isResetting=!1,t.validate()}),0)},hasError:function(t){this.shouldValidate&&this.$emit("update:error",t)},value:function(t){this.lazyValue=t}},beforeMount:function(){this.validate()},created:function(){this.form&&this.form.register(this)},beforeDestroy:function(){this.form&&this.form.unregister(this)},methods:{genInternalMessages:function(t){return t?Array.isArray(t)?t:[t]:[]},reset:function(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:void 0},resetValidation:function(){this.isResetting=!0},validate:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0,a=[];e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0);for(var i=0;i<this.rules.length;i++){var s=this.rules[i],r="function"===typeof s?s(e):s;!1===r||"string"===typeof r?a.push(r||""):"boolean"!==typeof r&&Object(c["b"])("Rules should return a string or boolean, received '".concat(Object(n["a"])(r),"' instead"),this)}return this.errorBucket=a,this.valid=0===a.length,this.valid}}})},4618:function(t,e,a){},"50c2":function(t,e,a){"use strict";var n=a("64bd"),i=a.n(n);i.a},"64bd":function(t,e,a){},"65d6":function(t,e,a){"use strict";var n=a("3074"),i=a.n(n);i.a},"6ca7":function(t,e,a){},7698:function(t,e,a){},"8ff2":function(t,e,a){},9057:function(t,e,a){"use strict";var n=a("7698"),i=a.n(n);i.a},"9db0":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-progress-linear",{staticClass:"progress-bar",attrs:{value:t.progressValue,color:"primary darken-3"}}),a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500",flat:"",tile:""}},[a("v-card-title",{staticClass:"title font-weight-regular justify-space-between pb-2 wrap-text"},[a("span",[t._v(t._s(t.stepTitle))]),a("v-avatar",{staticClass:"subheading white--text",attrs:{color:"primary",size:"28"},domProps:{textContent:t._s(t.step)}})],1),a("v-window",{attrs:{touchless:""},model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[a("v-window-item",{attrs:{value:1}},[a("SavedList",{attrs:{updatecb:t.updateAC}})],1),a("v-window-item",{attrs:{value:2}},[a("SendQR",{attrs:{ac:t.activeAC,updatecb:t.updateManualRequest}})],1),a("v-window-item",{attrs:{value:3}},[a("SendConfirmation",{attrs:{active:3===t.step,ac:t.activeAC,updatecb:t.acConfirmed}})],1),a("v-window-item",{attrs:{value:4}},[a("SendSummary",{attrs:{ac:t.activeAC}})],1)],1)],1),a("v-footer",{attrs:{absolute:"",padless:"",tile:""}},[a("v-card",{directives:[{name:"show",rawName:"v-show",value:t.step>1,expression:"step > 1"}],staticClass:"mx-auto",attrs:{"max-width":"500",width:"100%",color:"transparent",flat:"",tile:""}},[a("v-card-actions",[a("v-btn",{directives:[{name:"show",rawName:"v-show",value:2===t.step||3===t.step,expression:"step === 2 || step === 3"}],attrs:{text:""},on:{click:function(e){return t.changeView(-1)}}},[t._v(" Back ")]),a("v-spacer"),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:2===t.step,expression:"step === 2"}],attrs:{color:"primary",depressed:""},on:{click:function(e){return t.changeView(1)}}},[t._v(" Next ")]),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:4===t.step,expression:"step === 4"}],attrs:{color:"primary",depressed:""},on:{click:function(e){return t.$router.replace({name:"Sent"})}}},[t._v("Done")])],1)],1)],1),a("v-bottom-sheet",{attrs:{persistent:""},model:{value:t.sheet,callback:function(e){t.sheet=e},expression:"sheet"}},[a("v-sheet",{staticClass:"text-center pa-4",attrs:{height:"150px"}},[a("v-btn",{staticClass:"mx-4 my-2",attrs:{color:"error"},on:{click:t.cancelSend}},[t._v("Stop Sending")]),a("v-btn",{staticClass:"mx-4 my-2",attrs:{color:"primary"},on:{click:function(e){t.sheet=!t.sheet}}},[t._v("Stay")]),a("div",{staticClass:"py-3"},[t._v("Are you sure you want to cancel the sending process? This card will remain saved.")])],1)],1)],1)},i=[],s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._l(t.pendingACs,(function(e){return a("div",{key:e.id},[a("Card",{staticClass:"mx-auto z-raiser",attrs:{ac:e}}),a("v-card",{staticClass:"mx-auto px-6",attrs:{flat:"","max-width":"400",color:"tranparent"}},[a("v-card",{staticClass:"button-wrapper mx-auto pt-3",attrs:{color:"grey darken-3"}},[a("v-card-actions",[a("v-btn",{attrs:{dark:"",color:"error"},on:{click:function(a){return t.deleteCard(e)}}},[a("v-icon",[t._v("mdi-delete")])],1),a("v-spacer"),a("v-btn",{attrs:{dark:"",color:"blue"},on:{click:function(a){return t.sendCard(e)}}},[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-send")]),t._v(" Send ")],1)],1)],1)],1)],1)})),t.pendingACs<1?a("v-alert",{attrs:{text:"",type:"info"}},[a("div",[t._v("You have no saved cards yet! Create a card in order to send it.")]),a("v-row",{staticClass:"ma-0",attrs:{align:"center"}},[a("v-col",{staticClass:"grow ma-0 pa-1"}),a("v-col",{staticClass:"shrink ma-0 pa-1"},[a("v-btn",{attrs:{color:"green"},on:{click:function(e){return t.$router.replace({name:"Create"})}}},[a("v-icon",{staticClass:"pr-2",attrs:{color:"white"}},[t._v("mdi-plus ")]),t._v(" Create")],1)],1)],1)],1):t._e()],2)},o=[],c=a("2909"),l=a("ae8d"),u=a("fe0f"),d=s["a"].extend({name:"Saved",props:{updatecb:Function},components:{Card:l["a"]},data:function(){return{loading:!1}},methods:{sendCard:function(t){this.updatecb(t)},deleteCard:function(t){var e=this;this.loading||(this.loading=!0,u["a"].deleteAC(t.id).then((function(){return e.loading=!1})))}},computed:{pendingACs:function(){var t=u["a"].pendingACs;return Object(c["a"])(t).sort((function(t,e){return e.dateCreated-t.dateCreated}))}}}),h=d,p=(a("9057"),a("2877")),v=a("6544"),f=a.n(v),m=a("0798"),g=a("8336"),C=a("b0af"),b=a("99d9"),w=a("62ad"),x=a("132d"),k=a("0fd9"),_=a("2fa4"),y=Object(p["a"])(h,r,o,!1,null,"de16b1b0",null),V=y.exports;f()(y,{VAlert:m["a"],VBtn:g["a"],VCard:C["a"],VCardActions:b["a"],VCol:w["a"],VIcon:x["a"],VRow:k["a"],VSpacer:_["a"]});var S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-subheader",[t._v("Please let "+t._s(t.name)+" scan the QR code")]),a("QRGenerator",{attrs:{qrtext:t.minimizedAC,correction:t.currentCorrection}}),a("v-expansion-panels",{attrs:{flat:"",focusable:""}},[a("v-expansion-panel",{key:1},[a("v-expansion-panel-header",[t._v("Advanced options")]),a("v-expansion-panel-content",[a("v-checkbox",{attrs:{label:"Update contact info",disabled:t.concernsNewContact},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}}),t.concernsNewContact?a("v-alert",{staticClass:"caption",attrs:{type:"info",dense:""}},[t._v("Contact details must be included since the receiver is a new contact.")]):t._e(),a("v-card",{staticClass:"mx-auto mb-10",attrs:{flat:""}},[a("v-card-subtitle",{staticClass:"px-0"},[t._v("Trouble scanning? Try another correction level:")]),a("v-btn-toggle",{attrs:{mandatory:""},model:{value:t.currentCorrection,callback:function(e){t.currentCorrection=e},expression:"currentCorrection"}},[a("v-btn",{attrs:{value:t.errorCorrection.LOW}},[a("v-icon",[t._v(t._s(t.iconConfig.meterEmpty))])],1),a("v-btn",{attrs:{value:t.errorCorrection.MEDIUM}},[a("v-icon",[t._v(t._s(t.iconConfig.meterLow))])],1),a("v-btn",{attrs:{value:t.errorCorrection.QUARTILE}},[a("v-icon",[t._v(t._s(t.iconConfig.meterMedium))])],1),a("v-btn",{attrs:{value:t.errorCorrection.HIGH}},[a("v-icon",[t._v(t._s(t.iconConfig.meterFull))])],1)],1)],1)],1)],1)],1)],1)},E=[],A=(a("b0c0"),a("da41")),R=a("314a"),D=s["a"].extend({name:"SendQR",components:{QRGenerator:A["b"]},props:{ac:Object,updatecb:Function},data:function(){return{minimizedAC:"",checkbox:!1,currentCorrection:A["a"].MEDIUM,errorCorrection:A["a"],iconConfig:R["a"]}},methods:{generateMessage:function(){this.updatecb(this.checkbox),this.minimizedAC=this.ac?this.ac.receiver.isNewContact||this.checkbox?JSON.stringify(this.ac.minimize(!0)):JSON.stringify(this.ac.minimize(!1)):""}},computed:{name:function(){return this.ac?this.ac.receiver.name:""},concernsNewContact:function(){return!(!this.ac||!this.ac.receiver)&&this.ac.receiver.isNewContact}},mounted:function(){this.generateMessage(),this.concernsNewContact&&(this.checkbox=!0)},watch:{ac:function(){this.generateMessage()},checkbox:function(){this.generateMessage()},concernsNewContact:function(t){t&&(this.checkbox=!0)}}}),I=D,M=a("a609"),O=a("ac7c"),$=a("cd55"),T=a("49e2"),j=a("c865"),N=a("0393"),B=a("e0c7"),P=Object(p["a"])(I,S,E,!1,null,"0d083fa2",null),L=P.exports;f()(P,{VAlert:m["a"],VBtn:g["a"],VBtnToggle:M["a"],VCard:C["a"],VCardSubtitle:b["b"],VCheckbox:O["a"],VExpansionPanel:$["a"],VExpansionPanelContent:T["a"],VExpansionPanelHeader:j["a"],VExpansionPanels:N["a"],VIcon:x["a"],VSubheader:B["a"]});var F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-subheader",[t._v("Scan the confirmation code on "+t._s(t.name)+" their screen.")]),a("div",{staticClass:"d-flex justify-center"},[a("canvas",{ref:"canvas"})]),a("v-expansion-panels",{staticClass:"mt-3",attrs:{flat:"",focusable:""}},[a("v-expansion-panel",{key:1},[a("v-expansion-panel-header",[t._v("Advanced options")]),a("v-expansion-panel-content",[a("v-card",{staticClass:"mx-auto mb-10",attrs:{flat:""}},[a("v-card-subtitle",{staticClass:"px-0 pb-2"},[t._v("Problems with the camera? Control it manually:")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"red",dark:"",outlined:""},on:{click:function(e){return t.qrReader.stop()}}},[a("v-icon",[t._v(t._s(t.iconConfig.stop))]),t._v(" Stop ")],1),a("v-btn",{attrs:{color:"blue",dark:"",outlined:""},on:{click:function(e){return t.qrReader.start()}}},[a("v-icon",[t._v(t._s(t.iconConfig.start))]),t._v(" Start ")],1)],1)],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"360"},on:{"click:outside":t.dismissDialog},model:{value:t.showError,callback:function(e){t.showError=e},expression:"showError"}},[a("v-card",[a("v-card-title",{staticClass:"headline wrap-text"},[t._v("Error while reading QR")]),a("v-card-text",[t._v(" "+t._s(t.errorMessage)+" ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:t.dismissDialog}},[t._v(" Dismiss ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"360"},on:{"click:outside":t.dismissDialog},model:{value:t.showUpdatedContact,callback:function(e){t.showUpdatedContact=e},expression:"showUpdatedContact"}},[a("v-card",[a("v-card-title",{staticClass:"headline wrap-text"},[t._v("Updated contact details received")]),a("v-card-text",[a("PersonTile",{attrs:{person:t.localReceiver}}),a("div",{staticClass:"text-center"},[t._v("changed to")]),a("PersonTile",{attrs:{person:t.incomingPerson}})],1),a("v-card-actions",[a("v-btn",{attrs:{color:"error",text:""},on:{click:t.dismissDialog}},[t._v(" Discard ")]),a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:t.noUpdatedContact}},[t._v(" Dismiss ")]),a("v-btn",{attrs:{color:"primary",text:""},on:{click:t.updatedContact}},[t._v(" Update ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"360"},on:{"click:outside":t.dismissDialog},model:{value:t.showNewContact,callback:function(e){t.showNewContact=e},expression:"showNewContact"}},[a("v-card",[a("v-card-title",{staticClass:"headline wrap-text"},[t._v("New contact details received")]),a("v-card-text",[a("PersonTile",{attrs:{person:t.incomingPerson}})],1),a("v-card-actions",[a("v-btn",{attrs:{color:"error",text:""},on:{click:t.dismissDialog}},[t._v(" Discard ")]),a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:t.addNewContact}},[t._v(" Add contact ")])],1)],1)],1)],1)},U=[],q=a("6ed3"),z=a("7fca"),Q=a("2048"),H=a("61fa"),W=a("9eaa"),J=a("c342"),K=s["a"].extend({name:"SendConfirmation",props:{ac:Object,active:Boolean,updatecb:Function},components:{PersonTile:J["a"]},data:function(){return{qrReader:{},resultText:"",loading:!1,showError:!1,errorMessage:"",showUpdatedContact:!1,showNewContact:!1,localReceiver:void 0,personData:void 0,incomingCM:{},iconConfig:R["a"]}},methods:{handleError:function(t){this.errorMessage=t,this.showError=!0},handleNewContact:function(){this.showNewContact=!0},handleUpdatedContact:function(){this.showUpdatedContact=!0},parseResult:function(t){if(!this.loading){var e;this.loading=!0;try{e=JSON.parse(t)}catch(n){return this.handleError("Invalid data structure in QR Code.")}if(!this.checkResultValidity(e))return this.handleError("That is not a valid confirmation message.");if(this.localReceiver=Q["a"].personByEmail(e.e),e.p){if(!this.checkPersonValidity(e.p))return this.handleError("Incorrect contact details in package.");var a=e.p;if(a.e=e.e,this.personData=Object(q["a"])(a),this.incomingCM=e,this.ac.receiver.isNewContact)this.handleNewContact();else{if(e.e!==this.ac.receiver.email)return this.handleError("This confirmation is coming from a different person than you intended to send it to.");if(void 0===this.localReceiver)return this.handleError("Unexpected error occurred, Appreciation Card might be corrupt.");this.localReceiver.isEqual(this.personData)?this.confirmAC(e):this.handleUpdatedContact()}}else{if(this.ac.receiver.isNewContact)return this.handleError("No contact details found, although requested. Ask the other contact to include their details.");if(e.e!==this.ac.receiver.email)return this.handleError("This confirmation is coming from a different person than you intended to send it to.");if(e.d!==this.ac.dateCreated)return this.handleError("This confirmation is not matching the the outgoing appreciation.");this.confirmAC(e)}}},confirmAC:function(t){var e=this,a=this.ac.toACData();if(a.dateSent=t.n,a.state=2,u["a"].canObtainRewardToken(a)){a.token=z["b"].REWARD;var n=u["a"].canStreak;n>=0&&(a.streak=n+1,a.bonus=Object(z["c"])(n))}this.ac.receiver.isNewContact&&(a.receiver=t.e),u["a"].updateAC(a).then((function(t){return e.updatecb(t)}))},checkResultValidity:function(t){return!!(t.e&&t.d&&t.n)},checkPersonValidity:function(t){return!!t.n},dismissDialog:function(){this.loading=!1,this.showError=!1,this.showNewContact=!1,this.showUpdatedContact=!1,this.qrReader.start()},addNewContact:function(){var t=this;this.showNewContact=!1,this.personData&&Q["a"].addPerson(this.personData).then((function(){return t.confirmAC(t.incomingCM)}))},updatedContact:function(){var t=this;this.showUpdatedContact=!1,this.personData&&Q["a"].updatePerson(this.personData).then((function(){return t.confirmAC(t.incomingCM)}))},noUpdatedContact:function(){this.showUpdatedContact=!1,this.confirmAC(this.incomingCM)}},computed:{name:function(){return this.ac?this.ac.receiver.name:""},incomingPerson:function(){return this.personData?new W["a"](this.personData):void 0}},watch:{active:function(t){t?this.qrReader.start():this.qrReader.stop()}},mounted:function(){this.qrReader=new H["a"](this.$refs.canvas),this.qrReader.on("qrReceived",this.parseResult),this.qrReader.start()},beforeDestroy:function(){this.qrReader.stop()}}),G=K,Y=(a("65d6"),a("169a")),X=Object(p["a"])(G,F,U,!1,null,"776e137c",null),Z=X.exports;f()(X,{VBtn:g["a"],VCard:C["a"],VCardActions:b["a"],VCardSubtitle:b["b"],VCardText:b["c"],VCardTitle:b["d"],VDialog:Y["a"],VExpansionPanel:$["a"],VExpansionPanelContent:T["a"],VExpansionPanelHeader:j["a"],VExpansionPanels:N["a"],VIcon:x["a"],VSpacer:_["a"],VSubheader:B["a"]});var tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"full-height"},[a("v-container",{staticClass:"d-flex align-center justify-center full-height"},[a("v-card",{staticClass:"ma-auto",attrs:{flat:""}},[a("v-card-text",{staticClass:"text-center ma-auto"},[a("v-avatar",{attrs:{color:"success"}},[a("v-icon",{attrs:{color:"white"}},[t._v(t._s(t.iconConfig.success))])],1),a("br"),a("div",{staticClass:"text-center pa-2 display-1"},[t._v(" Success ")]),a("div",{staticClass:"text-center pa-2 body-1"},[t._v(" Appreciation was sent to "+t._s(t.receiverName)+" ")]),t.tokenReceived?t._e():a("div",{staticClass:"text-center pa-2 body-1"},[t._v(" No tokens received from this transaction ")]),t.tokenReceived?a("div",{staticClass:"text-center pa-2 body-1"},[t._v(" You received "+t._s(t.tokenConfig.REWARD_TOKENS_PER_CARD)+" "),a("v-icon",[t._v(t._s(t.iconConfig.rewardToken))]),t._v(" Reward Tokens. "),t.bonusReceived?a("div",[t._v(" Plus "+t._s(t.bonusReceived)+" Bonus Reward Tokens. ")]):t._e()],1):t._e()],1)],1)],1)],1)},et=[],at=s["a"].extend({name:"SendSummary",data:function(){return{iconConfig:R["a"],acModule:u["a"]}},props:{ac:Object},computed:{tokenConfig:function(){return u["a"].tokenConfig},receiverName:function(){return this.ac&&this.ac.receiver?this.ac.receiver.name:""},tokenReceived:function(){return!!this.ac&&this.ac.token===z["b"].REWARD},bonusReceived:function(){return this.ac?this.ac.bonus:0}}}),nt=at,it=(a("50c2"),a("8212")),st=a("a523"),rt=Object(p["a"])(nt,tt,et,!1,null,"a5f2bf96",null),ot=rt.exports;f()(rt,{VAvatar:it["a"],VCard:C["a"],VCardText:b["c"],VContainer:st["a"],VIcon:x["a"]});var ct=s["a"].extend({name:"Send",data:function(){return{step:0,activeAC:void 0,loading:!1,sheet:!1,manualRequest:!1}},components:{SendQR:L,SavedList:V,SendConfirmation:Z,SendSummary:ot},methods:{updateAC:function(t){this.activeAC=t,this.step=2},updateManualRequest:function(t){this.manualRequest=t},acConfirmed:function(t){this.activeAC=t,this.step=4},changeView:function(t){2===this.step&&-1===t?this.sheet=!0:1===this.step&&-1===t?this.$router.back():this.step+=t},cancelSend:function(){this.sheet=!1,this.activeAC=void 0,this.step=1}},computed:{stepTitle:function(){switch(this.step){case 1:return"Pick a card to send";case 2:return"Let other person scan";case 3:return"Scan QR confirmation";default:return"Transaction summary"}},progressValue:function(){return(this.step-1)*(100/3)}},beforeRouteLeave:function(t,e,a){this.step<2&&a(),this.step>3?a():"/"===t.path?(2===this.step?this.sheet=!0:this.step--,a(!1)):a()}}),lt=ct,ut=(a("f673"),a("288c")),dt=a("553a"),ht=a("8e36"),pt=a("8dd9"),vt=a("f665"),ft=a("1e6c"),mt=Object(p["a"])(lt,n,i,!1,null,"53a30a84",null);e["default"]=mt.exports;f()(mt,{VAvatar:it["a"],VBottomSheet:ut["a"],VBtn:g["a"],VCard:C["a"],VCardActions:b["a"],VCardTitle:b["d"],VFooter:dt["a"],VProgressLinear:ht["a"],VSheet:pt["a"],VSpacer:_["a"],VWindow:vt["a"],VWindowItem:ft["a"]})},ac7c:function(t,e,a){"use strict";a("d3b7"),a("25f0");var n=a("5530"),i=(a("6ca7"),a("ec29"),a("9d26")),s=a("c37a"),r=(a("4de4"),a("45fc"),a("5607")),o=a("2b0e"),c=o["a"].extend({name:"rippleable",directives:{ripple:r["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}}),l=a("80d2"),u=o["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:l["h"]}}}),d=a("58df"),h=Object(d["a"])(s["a"],c,u).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,a=this.internalValue;return this.isMultiple?!!Array.isArray(a)&&a.some((function(a){return t.valueComparator(a,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,a):Boolean(a):this.valueComparator(a,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.disabled||this.validationState?this.validationState:"primary"}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=this,e=s["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:function(e){e.preventDefault(),t.onChange()}},e):e},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,a=this.internalValue;if(this.isMultiple){Array.isArray(a)||(a=[]);var n=a.length;a=a.filter((function(a){return!t.valueComparator(a,e)})),a.length===n&&a.push(e)}else a=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(a,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(a,e)?null:e:!a;this.validate(!0,a),this.internalValue=a,this.hasColor=a}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}});e["a"]=h.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(n["a"])({},s["a"].options.computed.classes.call(this),{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.disabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(i["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(n["a"])({},this.attrs$,{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},ae8d:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-center perspective my-5"},[a("transition",{attrs:{name:"front"}},[a("v-card",{directives:[{name:"show",rawName:"v-show",value:t.swap,expression:"swap"}],staticClass:"mx-auto front-card",attrs:{color:t.ac.topic.color,"max-width":"400","min-height":"250",dark:"",raised:""},on:{click:function(e){t.swap=!t.swap}}},[a("v-list-item",{class:t.ac.topic.color+" darken-2"},[a("v-list-item-avatar",{staticClass:"headline justify-center",attrs:{color:t.person.color}},[t.person.image?t._e():a("span",{staticClass:"white--text",domProps:{textContent:t._s(t.person.initials)}}),t.person.image?a("img",{staticClass:"pa-1",attrs:{src:t.imageSource(t.person)}}):t._e()]),a("v-list-item-content",[a("v-list-item-title",{staticClass:"headline pr-10"},[t._v(t._s(t.person.name))]),a("v-list-item-subtitle",{staticClass:"pr-10"},[t._v(t._s(t.dateString))]),a("div",{staticClass:"card-icon py-1 px-1 caption text-center"},[a("v-icon",{staticClass:"pr-3 pl-4 pt-2",attrs:{"x-large":""}},[t._v(t._s(t.ac.topic.icon))]),a("br"),t.ac.streak>=0?a("v-icon",{attrs:{small:""}},[t._v(t._s(t.iconConfig.streak))]):t._e(),t.ac.streak>=0?a("span",{staticClass:"pr-1"},[t._v(t._s(t.ac.streak))]):t._e(),a("v-icon",{attrs:{small:""}},[t._v(t._s(t.senderReceiverTokenIcon))]),a("span",[t._v(t._s(t.tokensEarned))])],1)],1)],1),a("v-card-text",{staticClass:"py-2"},[a("span",{staticClass:"title font-weight-light word-break text-center white--text"},[t._v(t._s(t.ac.topic.text))])]),a("v-card-text",{staticClass:"pt-0 pb-4"},t._l(t.ac.subtopics,(function(e,n){return a("div",{key:n},[a("span",{staticClass:"white--text"},[t._v("- "+t._s(e.text))])])})),0),a("div",{staticClass:"rotate-icon pa-2"},[a("v-icon",[t._v(t._s(t.iconConfig.flip))])],1)],1)],1),a("transition",{attrs:{name:"back"}},[a("v-card",{directives:[{name:"show",rawName:"v-show",value:!t.swap,expression:"!swap"}],staticClass:"mx-auto back-card",attrs:{color:t.ac.topic.color,"max-width":"400","min-height":"240",dark:"",raised:""},on:{click:function(e){t.swap=!t.swap}}},[a("v-card-text",{staticClass:"pa-4  white--text"},[a("p",{staticClass:"text-justify mb-0"},[t._v(t._s(t.ac.message))])]),a("div",{staticClass:"rotate-icon pa-2"},[a("v-icon",[t._v(t._s(t.iconConfig.flip))])],1)],1)],1)],1)},i=[],s=a("2b0e"),r=a("7fca"),o=a("314a"),c=a("fe0f"),l=s["a"].extend({name:"Card",props:{ac:Object},data:function(){return{swap:!0,iconConfig:o["a"]}},computed:{person:function(){return this.ac?this.ac.state===r["a"].RECEIVED?this.ac.sender:this.ac.receiver:void 0},senderReceiverTokenIcon:function(){return this.ac.state===r["a"].SENT?o["a"].rewardToken:o["a"].awesomeToken},tokensEarned:function(){return this.ac.state===r["a"].RECEIVED?c["a"].tokenConfig.AWESOME_TOKENS_PER_CARD+this.ac.bonus:c["a"].tokenConfig.REWARD_TOKENS_PER_CARD+this.ac.bonus},dateString:function(){return this.ac?this.ac.state===r["a"].RECEIVED?"Received on "+new Date(this.ac.dateSent).toDateString():"Sent on "+new Date(this.ac.dateSent).toDateString():""}},methods:{imageSource:function(t){return t.image?a("1771")("./".concat(t.image.path)):""}}}),u=l,d=(a("1394"),a("2877")),h=a("6544"),p=a.n(h),v=a("b0af"),f=a("99d9"),m=a("132d"),g=a("da13"),C=a("8270"),b=a("5d23"),w=Object(d["a"])(u,n,i,!1,null,"bfe95d50",null);e["a"]=w.exports;p()(w,{VCard:v["a"],VCardText:f["c"],VIcon:m["a"],VListItem:g["a"],VListItemAvatar:C["a"],VListItemContent:b["a"],VListItemSubtitle:b["b"],VListItemTitle:b["c"]})},ba87:function(t,e,a){"use strict";a("a9e3");var n=a("5530"),i=(a("1b2c"),a("a9ad")),s=a("7560"),r=a("58df"),o=a("80d2"),c=Object(r["a"])(s["a"]).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render:function(t,e){var a=e.children,r=e.listeners,c=e.props,l={staticClass:"v-label",class:Object(n["a"])({"v-label--active":c.value,"v-label--is-disabled":c.disabled},Object(s["b"])(e)),attrs:{for:c.for,"aria-hidden":!c.for},on:r,style:{left:Object(o["f"])(c.left),right:Object(o["f"])(c.right),position:c.absolute?"absolute":"relative"},ref:"label"};return t("label",i["a"].options.methods.setTextColor(c.focused&&c.color,l),a)}});e["a"]=c},c37a:function(t,e,a){"use strict";a("99af"),a("4de4"),a("d81d"),a("a9e3"),a("ac1f"),a("1276");var n=a("5530"),i=(a("d191"),a("9d26")),s=a("ba87"),r=(a("8ff2"),a("a9ad")),o=a("7560"),c=a("58df"),l=a("80d2"),u=Object(c["a"])(r["a"],o["a"]).extend({name:"v-messages",props:{value:{type:Array,default:function(){return[]}}},methods:{genChildren:function(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage:function(t,e){return this.$createElement("div",{staticClass:"v-messages__message",key:e},Object(l["k"])(this,"default",{message:t,key:e})||[t])}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}}),d=u,h=a("7e2b"),p=a("38cb"),v=a("d9f7"),f=Object(c["a"])(h["a"],p["a"]),m=f.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data:function(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes:function(){return Object(n["a"])({"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.disabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&void 0!==this.loading,"v-input--is-readonly":this.readonly,"v-input--dense":this.dense},this.themeClasses)},computedId:function(){return this.id||"input-".concat(this._uid)},hasHint:function(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel:function(){return!(!this.$slots.label&&!this.label)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit(this.$_modelEvent,t)}},isDirty:function(){return!!this.lazyValue},isDisabled:function(){return this.disabled||this.readonly},isLabelActive:function(){return this.isDirty},messagesToDisplay:function(){var t=this;return this.hasHint?[this.hint]:this.hasMessages?this.validations.map((function(e){if("string"===typeof e)return e;var a=e(t.internalValue);return"string"===typeof a?a:""})).filter((function(t){return""!==t})):[]},showDetails:function(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.messagesToDisplay.length>0}},watch:{value:function(t){this.lazyValue=t}},beforeCreate:function(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent:function(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl:function(){return this.$createElement("div",{staticClass:"v-input__control"},[this.genInputSlot(),this.genMessages()])},genDefaultSlot:function(){return[this.genLabel(),this.$slots.default]},genIcon:function(t,e){var a=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=this["".concat(t,"Icon")],r="click:".concat(Object(l["n"])(t)),o=!(!this.listeners$[r]&&!e),c=Object(v["a"])({attrs:{"aria-label":o?Object(l["n"])(t).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.disabled,light:this.light},on:o?{click:function(t){t.preventDefault(),t.stopPropagation(),a.$emit(r,t),e&&e(t)},mouseup:function(t){t.preventDefault(),t.stopPropagation()}}:void 0},n);return this.$createElement("div",{staticClass:"v-input__icon",class:t?"v-input__icon--".concat(Object(l["n"])(t)):void 0},[this.$createElement(i["a"],c,s)])},genInputSlot:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:Object(l["f"])(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel:function(){return this.hasLabel?this.$createElement(s["a"],{props:{color:this.validationState,dark:this.dark,disabled:this.disabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages:function(){var t=this;return this.showDetails?this.$createElement(d,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:function(e){return Object(l["k"])(t,"message",e)}}}):null},genSlot:function(t,e,a){if(!a.length)return null;var n="".concat(t,"-").concat(e);return this.$createElement("div",{staticClass:"v-input__".concat(n),ref:n},a)},genPrependSlot:function(){var t=[];return this.$slots.prepend?t.push(this.$slots.prepend):this.prependIcon&&t.push(this.genIcon("prepend")),this.genSlot("prepend","outer",t)},genAppendSlot:function(){var t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","outer",t)},onClick:function(t){this.$emit("click",t)},onMouseDown:function(t){this.hasMouseDown=!0,this.$emit("mousedown",t)},onMouseUp:function(t){this.hasMouseDown=!1,this.$emit("mouseup",t)}},render:function(t){return t("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}});e["a"]=m},cbc8:function(t,e,a){},d191:function(t,e,a){},ec29:function(t,e,a){},f673:function(t,e,a){"use strict";var n=a("4618"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-cd7ce02c.ea62bc46.js.map