(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69f3c528"],{"0393":function(e,n,t){"use strict";t("0481"),t("4069");var a=t("5530"),i=(t("210b"),t("604c")),s=t("d9bd");n["a"]=i["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return Object(a["a"])({},i["a"].options.computed.classes.call(this),{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(s["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(s["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,n){var t=this.getValue(e,n),a=this.getValue(e,n+1);e.isActive=this.toggleMethod(t),e.nextIsActive=this.toggleMethod(a)}}})},"0b2e":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-card",{staticClass:"pa-0 mx-auto",attrs:{flat:"","max-width":"500px"}},[t("v-card-title",{staticClass:"wrap-text"},[e._v("Frequently Asked Questions")]),t("v-card-subtitle",[e._v("Having a problem? See if your question is answered below.")]),t("v-row",{staticClass:"px-2",attrs:{justify:"center"}},[t("v-expansion-panels",{attrs:{accordion:"",multiple:""}},e._l(e.questions,(function(n,a){return t("v-expansion-panel",{key:a},[t("v-expansion-panel-header",[t("b",[e._v(e._s(n.question))])]),t("v-expansion-panel-content",[e._v(" "+e._s(n.answer)+" ")])],1)})),1)],1)],1)},i=[],s=t("2b0e"),o=t("314a"),r=s["a"].extend({name:"FAQ",data:function(){return{questions:[{question:"Where is my data stored?",answer:"All information is being stored locally on the device, or more specifically, in the browser through which you are accessing the application. There is no data transfer between the server and the application containing user generated data in any form."},{question:"Who can see my data?",answer:"Exchange of appreciation is only visible on the sending- and receiving user’s device. Your contact details are only shared with the users that have previously exchanged appreciation with you."},{question:"Why do you need my email address?",answer:"Your email address is required as form of unique identification when exchanging appreciation. The email address will not be verified as there is no communication to the server concerning personal data. So, for this prototype version, it is done in good faith that you fill out an email address that is unique to you."},{question:"The app was not granted persistent storage in the setup, is this a problem?",answer:"It is not immediately a problem if no persistent storage is granted, but the browser might clear the data when your device is running out of storage. Please be cautious of this. You can check if anything changed by going to the Permissions section on the Settings page."},{question:"I got a new device, how do I transfer my data?",answer:"It is not possible to transfer your local data to another device or browser as of this moment."},{question:"I just switched browsers and all of my data is gone.",answer:"All of the application data is stored locally in the browser. This means that switching browsers, even on the same device, will force you to start fresh. Your data is still available on the old browser. When you delete the browser or its storage, all application data will be lost as well. "},{question:"I updated my profile. Why do other people still see the old profile?",answer:"Your profile update remains on your local device. Other people will receive this update during the next appreciation exchange. Make sure that the 'Update contact details' box is checked when sending appreciation. This is under 'Advanced options' when the QR code is shown."},{question:"I am still in the browser and want to install the app. How do I do this?",answer:"You can access the installation instructions again through the Settings."}],iconConfig:o["a"]}}}),l=r,c=t("2877"),d=t("6544"),h=t.n(d),u=t("b0af"),p=t("99d9"),v=t("cd55"),f=t("49e2"),x=t("c865"),b=t("0393"),g=t("0fd9"),w=Object(c["a"])(l,a,i,!1,null,"4f5eb845",null);n["default"]=w.exports;h()(w,{VCard:u["a"],VCardSubtitle:p["b"],VCardTitle:p["d"],VExpansionPanel:v["a"],VExpansionPanelContent:f["a"],VExpansionPanelHeader:x["a"],VExpansionPanels:b["a"],VRow:g["a"]})},"210b":function(e,n,t){},"49e2":function(e,n,t){"use strict";var a=t("0789"),i=t("9d65"),s=t("a9ad"),o=t("3206"),r=t("80d2"),l=t("58df"),c=Object(l["a"])(i["a"],s["a"],Object(o["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel"));n["a"]=c.extend().extend({name:"v-expansion-panel-content",computed:{isActive:function(){return this.expansionPanel.isActive}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var n=this;return e(a["a"],this.showLazyContent((function(){return[e("div",n.setBackgroundColor(n.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:n.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(r["k"])(n))])]})))}})},c865:function(e,n,t){"use strict";var a=t("5530"),i=t("0789"),s=t("9d26"),o=t("a9ad"),r=t("3206"),l=t("5607"),c=t("80d2"),d=t("58df"),h=Object(d["a"])(o["a"],Object(r["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel"));n["a"]=h.extend().extend({name:"v-expansion-panel-header",directives:{ripple:l["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(c["k"])(this,"actions")||[this.$createElement(s["a"],this.expandIcon)];return this.$createElement(i["c"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var n=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button"},directives:[{name:"ripple",value:this.ripple}],on:Object(a["a"])({},this.$listeners,{click:this.onClick,mousedown:function(){return n.hasMousedown=!0},mouseup:function(){return n.hasMousedown=!1}})}),[Object(c["k"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},cd55:function(e,n,t){"use strict";var a=t("5530"),i=t("4e82"),s=t("3206"),o=t("80d2"),r=t("58df");n["a"]=Object(r["a"])(Object(i["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(s["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return Object(a["a"])({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.content&&(this.content.isBooted=!0),this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(o["k"])(this))}})}}]);
//# sourceMappingURL=chunk-69f3c528.9543b351.js.map