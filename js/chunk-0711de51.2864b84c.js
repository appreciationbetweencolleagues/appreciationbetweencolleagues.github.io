(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0711de51"],{1192:function(t,e,a){},"2b22":function(t,e,a){"use strict";var n=a("1192"),s=a.n(n);s.a},4328:function(t,e,a){},"7d7f":function(t,e,a){"use strict";var n=a("4328"),s=a.n(n);s.a},"976f":function(t,e,a){"use strict";var n=a("f550"),s=a.n(n);s.a},a06d:function(t,e,a){"use strict";var n=a("d3f9"),s=a.n(n);s.a},d3f9:function(t,e,a){},e19a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-progress-linear",{staticClass:"progress-bar",attrs:{value:t.progressValue,color:"primary darken-3"}}),a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500",flat:"",tile:""}},[a("v-card-title",{staticClass:"title font-weight-regular justify-space-between pb-2 wrap-text"},[a("span",[t._v(t._s(t.stepTitle))]),a("v-avatar",{staticClass:"subheading white--text",attrs:{color:"primary",size:"28"},domProps:{textContent:t._s(t.step)}})],1),a("v-window",{attrs:{touchless:""},model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[a("v-window-item",{attrs:{value:1}},[a("ReceiveCard",{attrs:{active:1===t.step,updatecb:t.updateAC}})],1),a("v-window-item",{attrs:{value:2}},[a("ReceiveConfirmation",{attrs:{options:t.receiveOptions}})],1),a("v-window-item",{attrs:{value:3}},[a("ReceiveSummary",{attrs:{ac:t.receiveOptions.ac}})],1)],1)],1),a("v-footer",{attrs:{absolute:"",padless:"",tile:""}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500",width:"100%",color:"transparent",flat:"",tile:""}},[a("v-card-actions",[a("v-btn",{directives:[{name:"show",rawName:"v-show",value:2===t.step||3===t.step,expression:"step === 2 || step === 3"}],attrs:{text:""},on:{click:function(e){return t.changeView(-1)}}},[t._v(" Back ")]),a("v-spacer"),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:2===t.step,expression:"step === 2"}],attrs:{disabled:t.nextDisabled,loading:t.nextDisabled,color:"primary",depressed:""},on:{click:function(e){return t.changeView(1)}}},[t._v(" Next ")]),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:3===t.step,expression:"step === 3"}],attrs:{color:"primary",depressed:""},on:{click:function(e){return t.$router.replace({name:"Received"})}}},[t._v("View Card")])],1)],1)],1),a("v-bottom-sheet",{attrs:{persistent:""},model:{value:t.sheet,callback:function(e){t.sheet=e},expression:"sheet"}},[a("v-sheet",{staticClass:"text-center pa-4",attrs:{height:"150px"}},[a("v-btn",{staticClass:"mx-4 my-2",attrs:{color:"error"},on:{click:t.cancelSend}},[t._v("Discard")]),a("v-btn",{staticClass:"mx-4 my-2",attrs:{color:"primary"},on:{click:function(e){t.sheet=!t.sheet}}},[t._v("Stay")]),a("div",{staticClass:"py-3"},[t._v("Are you sure you want to discard the transaction?")])],1)],1)],1)},s=[],i=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-subheader",[t._v("Scan the QR code from the other persons screen.")]),a("div",{staticClass:"d-flex justify-center"},[a("canvas",{ref:"canvas"})]),a("v-expansion-panels",{staticClass:"mt-3",attrs:{flat:"",focusable:""}},[a("v-expansion-panel",{key:1},[a("v-expansion-panel-header",[t._v("Advanced options")]),a("v-expansion-panel-content",[a("v-card",{staticClass:"mx-auto mb-10",attrs:{flat:""}},[a("v-card-subtitle",{staticClass:"px-0 pb-2"},[t._v("Problems with the camera? Control it manually:")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"red",dark:"",outlined:""},on:{click:function(e){return t.qrReader.stop()}}},[a("v-icon",[t._v(t._s(t.iconConfig.stop))]),t._v(" Stop ")],1),a("v-btn",{attrs:{color:"blue",dark:"",outlined:""},on:{click:function(e){return t.qrReader.start()}}},[a("v-icon",[t._v(t._s(t.iconConfig.start))]),t._v(" Start ")],1)],1)],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"360"},on:{"click:outside":t.dismissDialog},model:{value:t.showError,callback:function(e){t.showError=e},expression:"showError"}},[a("v-card",[a("v-card-title",{staticClass:"headline wrap-text"},[t._v("Error while reading QR")]),a("v-card-text",[t._v(" "+t._s(t.errorMessage)+" ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:t.dismissDialog}},[t._v(" Dismiss ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"360"},on:{"click:outside":t.dismissDialog},model:{value:t.showUpdatedContact,callback:function(e){t.showUpdatedContact=e},expression:"showUpdatedContact"}},[a("v-card",[a("v-card-title",{staticClass:"headline wrap-text"},[t._v("Updated contact details received")]),a("v-card-text",[a("PersonTile",{attrs:{person:t.localSender}}),a("div",{staticClass:"text-center"},[t._v("changed to")]),a("PersonTile",{attrs:{person:t.incomingPerson}})],1),a("v-card-actions",[a("v-btn",{attrs:{color:"error",text:""},on:{click:t.dismissDialog}},[t._v(" Discard ")]),a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:t.noUpdatedContact}},[t._v(" Dismiss ")]),a("v-btn",{attrs:{color:"primary",text:""},on:{click:t.updatedContact}},[t._v(" Update ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"360"},on:{"click:outside":t.dismissDialog},model:{value:t.showNewContact,callback:function(e){t.showNewContact=e},expression:"showNewContact"}},[a("v-card",[a("v-card-title",{staticClass:"headline wrap-text"},[t._v("New contact details received")]),a("v-card-text",[a("PersonTile",{attrs:{person:t.incomingPerson}})],1),a("v-card-actions",[a("v-btn",{attrs:{color:"error",text:""},on:{click:t.dismissDialog}},[t._v(" Discard ")]),a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:t.addNewContact}},[t._v(" Add contact ")])],1)],1)],1)],1)},o=[],c=a("6ed3"),d=a("7fca"),l=a("2048"),u=a("fe0f"),h=a("61fa"),v=a("c342"),p=a("9eaa"),f=a("314a"),m=i["a"].extend({name:"ReceiveCard",components:{PersonTile:v["a"]},data:function(){return{qrReader:{},resultText:"",loading:!1,extraDetails:!1,alreadyKnown:!1,addedPerson:!1,showError:!1,errorMessage:"",showUpdatedContact:!1,showNewContact:!1,localSender:void 0,personData:void 0,incomingMAC:{},shared:!1,iconConfig:f["a"]}},props:{active:Boolean,updatecb:Function},methods:{handleError:function(t){this.errorMessage=t,this.showError=!0},handleNewContact:function(){this.showNewContact=!0},handleUpdatedContact:function(){this.showUpdatedContact=!0},parseResult:function(t){if(!this.loading){var e;this.loading=!0;try{e=JSON.parse(t)}catch(n){return this.handleError("Invalid data structure in QR Code.")}if(!this.checkACValidity(e))return this.handleError("That is not a valid Appreciation Card.");if(this.localSender=l["a"].personByEmail(e.e),e.p){if(this.extraDetails=!0,this.alreadyKnown=!(void 0===this.localSender||!this.localSender.isNewContact),!this.checkPersonValidity(e.p))return this.handleError("Invalid contact details found in package.");var a=e.p;a.e=e.e,this.personData=Object(c["a"])(a),this.incomingMAC=e,this.localSender?this.localSender.isEqual(this.personData)?this.addAC(e):this.handleUpdatedContact():this.handleNewContact()}else{if(!this.localSender)return this.handleError("This person is not in your contacts, please ask him to upgrade the details.");this.addAC(e)}}},dismissDialog:function(){this.loading=!1,this.showError=!1,this.showUpdatedContact=!1,this.showNewContact=!1,this.qrReader.start()},addNewContact:function(){var t=this;this.showNewContact=!1,this.personData&&l["a"].addPerson(this.personData).then((function(){return t.addAC(t.incomingMAC)}))},updatedContact:function(){var t=this;this.showUpdatedContact=!1,this.personData&&l["a"].updatePerson(this.personData).then((function(){return t.addAC(t.incomingMAC)}))},noUpdatedContact:function(){this.showUpdatedContact=!1,this.addAC(this.incomingMAC)},addAC:function(t){var e=this,a=u["a"].acByMinimizedAC(t);if(a)console.log("duplicate"),this.loading=!1,this.qrReader.stop(),this.updatecb({request:this.extraDetails,known:this.alreadyKnown,ac:a,found:!0});else{var n=Object(d["d"])(t);u["a"].canObtainAwesomeToken(n)&&(n.token=d["b"].AWESOME),u["a"].addAC(n).then((function(t){e.loading=!1,e.qrReader.stop(),e.updatecb({request:e.extraDetails,known:e.alreadyKnown,ac:t,found:!1,shared:e.shared})}))}},checkACValidity:function(t){return!!(t.e&&t.m&&t.d&&t.t&&t.s)},checkPersonValidity:function(t){return!!t.n}},computed:{incomingPerson:function(){return this.personData?new p["a"](this.personData):void 0}},watch:{active:function(t){t?this.qrReader.start():this.qrReader.stop()}},mounted:function(){var t=this.$route.params.ac;this.qrReader=new h["a"](this.$refs.canvas),this.qrReader.on("qrReceived",this.parseResult),t?(this.shared=!0,this.parseResult(decodeURI(t))):this.qrReader.start()},beforeDestroy:function(){this.qrReader.stop()}}),C=m,w=(a("2b22"),a("2877")),x=a("6544"),b=a.n(x),g=a("8336"),_=a("b0af"),k=a("99d9"),V=a("169a"),y=a("cd55"),R=a("49e2"),E=a("c865"),S=a("0393"),A=a("132d"),D=a("2fa4"),P=a("e0c7"),N=Object(w["a"])(C,r,o,!1,null,"65da5a48",null),M=N.exports;b()(N,{VBtn:g["a"],VCard:_["a"],VCardActions:k["a"],VCardSubtitle:k["b"],VCardText:k["c"],VCardTitle:k["d"],VDialog:V["a"],VExpansionPanel:y["a"],VExpansionPanelContent:R["a"],VExpansionPanelHeader:E["a"],VExpansionPanels:S["a"],VIcon:A["a"],VSpacer:D["a"],VSubheader:P["a"]});var T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-subheader",[t._v("Please let "+t._s(t.name)+" scan the QR code")]),a("QRGenerator",{staticClass:"mx-auto qr-canvas",attrs:{qrtext:t.confirmMsg,correction:t.currentCorrection}}),a("v-alert",{staticClass:"caption mt-3",attrs:{type:"warning",dense:"",border:"left"}},[t._v(t._s(t.name)+" cannot complete the sending process without this confirmation QR code.")]),a("v-expansion-panels",{attrs:{flat:"",focusable:""}},[a("v-expansion-panel",{key:1},[a("v-expansion-panel-header",[t._v("Advanced options")]),a("v-expansion-panel-content",[a("v-card",{staticClass:"mx-auto mb-10",attrs:{flat:""}},[a("v-card-subtitle",{staticClass:"px-0"},[t._v("Trouble scanning? Try another correction level:")]),a("v-btn-toggle",{attrs:{mandatory:""},model:{value:t.currentCorrection,callback:function(e){t.currentCorrection=e},expression:"currentCorrection"}},[a("v-btn",{attrs:{value:t.errorCorrection.LOW}},[a("v-icon",[t._v(t._s(t.iconConfig.meterEmpty))])],1),a("v-btn",{attrs:{value:t.errorCorrection.MEDIUM}},[a("v-icon",[t._v(t._s(t.iconConfig.meterLow))])],1),a("v-btn",{attrs:{value:t.errorCorrection.QUARTILE}},[a("v-icon",[t._v(t._s(t.iconConfig.meterMedium))])],1),a("v-btn",{attrs:{value:t.errorCorrection.HIGH}},[a("v-icon",[t._v(t._s(t.iconConfig.meterFull))])],1)],1)],1)],1)],1)],1)],1)},q=[],O=(a("b0c0"),a("da41")),U=i["a"].extend({name:"ReceiveConfirmation",components:{QRGenerator:O["b"]},props:{options:Object},data:function(){return{confirmMsg:"",currentCorrection:O["a"].MEDIUM,errorCorrection:O["a"],iconConfig:f["a"]}},methods:{generateMessage:function(){this.confirmMsg=this.options.ac?this.options.request?JSON.stringify(this.options.ac.confirm(!0)):JSON.stringify(this.options.ac.confirm(!1)):""}},computed:{name:function(){return this.options?this.options.ac.sender.name:""},email:function(){return this.options?this.options.ac.sender.email:""},newContact:function(){return!!this.options&&(this.options.request&&!this.options.known)},updateRequested:function(){return!!this.options&&(this.options.request&&this.options.known)}},watch:{ac:function(){this.generateMessage()}},mounted:function(){this.generateMessage()}}),j=U,I=(a("7d7f"),a("0798")),B=a("a609"),Q=Object(w["a"])(j,T,q,!1,null,"e8691818",null),$=Q.exports;b()(Q,{VAlert:I["a"],VBtn:g["a"],VBtnToggle:B["a"],VCard:_["a"],VCardSubtitle:k["b"],VExpansionPanel:y["a"],VExpansionPanelContent:R["a"],VExpansionPanelHeader:E["a"],VExpansionPanels:S["a"],VIcon:A["a"],VSubheader:P["a"]});var L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"full-height"},[a("v-container",{staticClass:"d-flex align-center justify-center full-height"},[a("v-card",{staticClass:"ma-auto",attrs:{flat:""}},[a("v-card-text",{staticClass:"text-center ma-auto"},[a("v-avatar",{attrs:{color:"success"}},[a("v-icon",{attrs:{color:"white"}},[t._v(t._s(t.iconConfig.success))])],1),a("div",{staticClass:"text-center pa-2 display-1"},[t._v(" Success ")]),a("div",{staticClass:"text-center pa-2 body-1"},[t._v(" Appreciation received from "+t._s(t.senderName)+" ")]),t.tokenReceived?t._e():a("div",{staticClass:"text-center pa-2 body-1"},[t._v(" No tokens received from this transaction ")]),t.tokenReceived?a("div",{staticClass:"text-center pa-2 body-1"},[t._v(" You received "+t._s(t.tokenConfig.AWESOME_TOKENS_PER_CARD)+" "),a("v-icon",[t._v(t._s(t.iconConfig.awesomeToken))]),t._v(" Awesome Tokens ")],1):t._e()],1)],1)],1)],1)},W=[],J=i["a"].extend({name:"ReceiveSummary",data:function(){return{iconConfig:f["a"]}},props:{ac:Object},computed:{tokenConfig:function(){return u["a"].tokenConfig},senderName:function(){return this.ac&&this.ac.sender?this.ac.sender.name:""},tokenReceived:function(){return!!this.ac&&this.ac.token===d["b"].AWESOME}}}),K=J,H=(a("a06d"),a("8212")),F=a("a523"),G=Object(w["a"])(K,L,W,!1,null,"149ab497",null),z=G.exports;b()(G,{VAvatar:H["a"],VCard:_["a"],VCardText:k["c"],VContainer:F["a"],VIcon:A["a"]});var Y=i["a"].extend({name:"Receive",components:{ReceiveCard:M,ReceiveConfirmation:$,ReceiveSummary:z},data:function(){return{step:0,receiveOptions:{},loading:!1,sheet:!1,nextDisabled:!1}},methods:{updateAC:function(t){this.receiveOptions=t,t.shared?this.step=3:(this.buttonShown(),this.step=2)},buttonShown:function(){var t=this;this.nextDisabled=!0,setTimeout((function(){return t.nextDisabled=!1}),8e3)},changeView:function(t){2===this.step&&-1===t?this.sheet=!0:1===this.step&&-1===t?this.$router.back():this.step+=t},cancelSend:function(){this.sheet=!1,this.step=1}},computed:{stepTitle:function(){switch(this.step){case 1:return"Scan QR code";case 2:return"Let other person scan";default:return"Transaction summary"}},progressValue:function(){return 50*(this.step-1)}},beforeRouteLeave:function(t,e,a){this.step<2?a():"/"===t.path?(2===this.step?this.sheet=!0:this.step--,a(!1)):a()}}),X=Y,Z=(a("976f"),a("288c")),tt=a("553a"),et=a("8e36"),at=a("8dd9"),nt=a("f665"),st=a("1e6c"),it=Object(w["a"])(X,n,s,!1,null,"ea602120",null);e["default"]=it.exports;b()(it,{VAvatar:H["a"],VBottomSheet:Z["a"],VBtn:g["a"],VCard:_["a"],VCardActions:k["a"],VCardTitle:k["d"],VFooter:tt["a"],VProgressLinear:et["a"],VSheet:at["a"],VSpacer:D["a"],VWindow:nt["a"],VWindowItem:st["a"]})},f550:function(t,e,a){}}]);
//# sourceMappingURL=chunk-0711de51.2864b84c.js.map