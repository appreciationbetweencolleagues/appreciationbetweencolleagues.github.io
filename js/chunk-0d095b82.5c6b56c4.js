(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d095b82"],{"0798":function(t,e,a){"use strict";a("caad");var i=a("5530"),s=a("ade3"),n=(a("0c18"),a("10d2")),r=a("afdd"),o=a("9d26"),c=a("f2e7"),l=a("7560"),d=a("f40d"),v=a("58df"),h=a("d9bd");e["a"]=Object(v["a"])(n["a"],c["a"],d["a"]).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(s["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(r["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(o["a"],{props:{color:e}},"$cancel")])},__cachedIcon:function(){return this.computedIcon?this.$createElement(o["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(i["a"])({},n["a"].options.computed.classes.call(this),{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||l["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(h["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,a){},"15d4":function(t,e,a){},"2e90":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.hasNoContact?a("v-alert",{attrs:{type:"info",dense:""}},[t._v(" You have cards without contact info. You can assign a known contact to them manually. ")]):t._e(),t.acs&&t.acs.length>0?a("v-list",{attrs:{dark:""}},t._l(t.acs,(function(e){return a("v-list-item",{key:e.id,class:e.topic.color+" darken-2 px-3",attrs:{color:e.topic.color,dense:"",dark:""},on:{click:function(a){t.active=e}}},[a("v-list-item-avatar",{staticClass:"headline justify-center my-3",attrs:{color:t.senderReceiver(e).color,size:36}},[t.senderReceiver(e).image?t._e():a("span",{staticClass:"white--text",domProps:{textContent:t._s(t.senderReceiver(e).initials)}}),t.senderReceiver(e).image?a("img",{staticClass:"pa-1",attrs:{src:t.imageSource(t.senderReceiver(e))}}):t._e()]),a("v-list-item-content",{staticClass:"py-1"},[a("v-list-item-title",{staticClass:"pr-9"},[t._v(t._s(t.senderReceiver(e).name))]),a("v-list-item-subtitle",{staticClass:"pr-9"},[t._v(t._s(t.dateString(e)))]),a("div",{staticClass:"streak-icon"},[e.streak>=0?a("v-icon",{attrs:{small:""}},[t._v(t._s(t.iconConfig.streak))]):t._e(),a("v-icon",{staticClass:"py-3 pr-2",attrs:{large:""}},[t._v(t._s(e.topic.icon))])],1)],1)],1)})),1):t._e(),a("v-dialog",{attrs:{"content-class":"ma-2 pa-0 no-shadow",dark:"",persistent:""},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[a("v-card",{attrs:{color:"transparent",flat:""}},[t.isActive?a("Card",{staticClass:"mx-auto z-raiser",attrs:{ac:t.active}}):t._e(),a("v-card",{staticClass:"mx-auto px-6",attrs:{flat:"","max-width":"400",color:"transparent"}},[a("v-card",{staticClass:"button-wrapper mx-auto pt-3",attrs:{color:"grey darken-3"}},[a("v-card-actions",[a("v-btn",{attrs:{dark:"",small:"",color:"warning"},on:{click:function(e){t.archiveDialog=!0}}},[a("v-icon",[t._v(t._s(t.iconConfig.archive))])],1),a("v-spacer"),t.canAssign?a("v-btn",{attrs:{dark:"",small:"",color:"success"},on:{click:function(e){t.assignDialog=!0}}},[a("v-icon",[t._v(t._s(t.iconConfig.addcontact))]),a("span",{staticClass:"ml-1"},[t._v(" Assign")])],1):t._e(),a("v-btn",{attrs:{dark:"",small:"",color:"info"},on:{click:function(e){t.active=void 0}}},[a("v-icon",[t._v(t._s(t.iconConfig.close))]),a("span",{staticClass:"ml-1"},[t._v(" Close")])],1)],1),t.archiveMessage.length>0||t.assignMessage.length>0?a("v-card-text",[a("span",{domProps:{textContent:t._s(t.archiveMessage)}}),a("span",{domProps:{textContent:t._s(t.assignMessage)}})]):t._e()],1)],1)],1)],1),a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.archiveDialog,callback:function(e){t.archiveDialog=e},expression:"archiveDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Archive card")]),a("v-card-text",{staticClass:"pb-2"},[t._v("Are you sure that you want to archive this Appreciation Card? Your tokens will not be affected.")]),a("v-card-actions",[a("v-btn",{attrs:{color:"primary",disabled:t.archiveLoading,text:""},on:{click:function(e){t.archiveDialog=!1}}},[t._v("Cancel")]),a("v-spacer"),a("v-btn",{attrs:{color:"error",disabled:t.archiveLoading,loading:t.archiveLoading,text:""},on:{click:t.archiveAC}},[t._v("Archive")])],1)],1)],1),a("v-dialog",{attrs:{persistent:"","max-width":"320"},model:{value:t.assignDialog,callback:function(e){t.assignDialog=e},expression:"assignDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Assign Contact")]),a("v-card-text",{staticClass:"pb-2"},[a("v-list-item-group",{attrs:{"active-class":"green--text"},model:{value:t.selectedContact,callback:function(e){t.selectedContact=e},expression:"selectedContact"}},[t._l(t.sortedPeople,(function(e,i){return[a("v-list-item",{key:2*i,attrs:{value:e}},[a("v-list-item-avatar",{staticClass:"justify-center",attrs:{color:e.color}},[e.image?t._e():a("span",{staticClass:"white--text",domProps:{textContent:t._s(e.initials)}}),e.image?a("img",{staticClass:"pa-1",attrs:{src:t.imageSource(e)}}):t._e()]),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1)],1),i+1<t.sortedPeople.length?a("v-divider",{key:2*i+1}):t._e()]}))],2)],1),a("v-card-actions",[a("v-btn",{attrs:{color:"primary",disabled:t.assignLoading,text:""},on:{click:function(e){t.assignDialog=!1}}},[t._v("Cancel")]),a("v-spacer"),a("v-btn",{attrs:{color:"error",disabled:t.assignLoading||!t.selectedContact,loading:t.assignLoading,text:""},on:{click:t.assignAC}},[t._v("Assign")])],1)],1)],1)],1)},s=[],n=(a("7db0"),a("b0c0"),a("2909")),r=a("2b0e"),o=a("ae8d"),c=a("314a"),l=a("fe0f"),d=a("7fca"),v=a("2048"),h=r["a"].extend({name:"List",components:{Card:o["a"]},props:{acs:Array},data:function(){return{active:void 0,iconConfig:c["a"],archiveLoading:!1,archiveMessage:"",archiveDialog:!1,assignLoading:!1,assignMessage:"",assignDialog:!1,selectedContact:void 0}},methods:{imageSource:function(t){return t.image?a("1771")("./".concat(t.image.path)):""},archiveAC:function(){var t=this;if(this.archiveLoading=!0,void 0===this.active)return this.archiveLoading=!1,this.archiveDialog=!1,void(this.archiveMessage="Something went wrong while archiving the Appreciation Card.");l["a"].archiveAC(this.active).then((function(e){if(!e)return t.archiveLoading=!1,t.archiveDialog=!1,void(t.archiveMessage="Something went wrong while archiving the Appreciation Card.");t.archiveLoading=!1,t.archiveDialog=!1,t.active=void 0}))},assignAC:function(){var t=this;if(this.archiveLoading=!0,void 0===this.active||void 0===this.selectedContact)return this.assignLoading=!1,this.assignDialog=!1,void(this.assignMessage="Something went wrong while archiving the Appreciation Card.");var e=this.active.toACData();e.receiver=this.selectedContact.email,l["a"].updateAC(e).then((function(e){if(!e)return t.assignLoading=!1,t.assignDialog=!1,void(t.assignMessage="Something went wrong while archiving the Appreciation Card.");t.assignLoading=!1,t.assignDialog=!1,t.active=void 0}))},dateString:function(t){return t.state===d["a"].RECEIVED?"Received on "+new Date(t.dateSent).toDateString():"Sent on "+new Date(t.dateSent).toDateString()},senderReceiver:function(t){return t.state===d["a"].RECEIVED?t.sender:t.receiver}},computed:{isActive:function(){return!!this.active},canAssign:function(){return!!this.active&&this.active.receiver.isNewContact},mobile:function(){return"xs"===this.$vuetify.breakpoint.name},sortedPeople:function(){var t=Object(n["a"])(v["a"].allPeople);return Object(n["a"])(t.sort((function(t,e){return t.name<e.name?-1:t.name>e.name?1:0})))},hasNoContact:function(){return!!this.acs.find((function(t){return t.receiver.isNewContact}))}},beforeRouteLeave:function(t,e,a){this.isActive?(this.active=void 0,a(!1)):a()}}),u=h,p=(a("d1fa"),a("2877")),g=a("6544"),m=a.n(g),f=a("0798"),C=a("8336"),_=a("b0af"),b=a("99d9"),w=a("169a"),x=a("ce7e"),k=a("132d"),E=a("8860"),A=a("da13"),D=a("8270"),y=a("5d23"),S=a("1baa"),L=a("2fa4"),V=Object(p["a"])(u,i,s,!1,null,"987e6132",null);e["a"]=V.exports;m()(V,{VAlert:f["a"],VBtn:C["a"],VCard:_["a"],VCardActions:b["a"],VCardText:b["c"],VCardTitle:b["d"],VDialog:w["a"],VDivider:x["a"],VIcon:k["a"],VList:E["a"],VListItem:A["a"],VListItemAvatar:D["a"],VListItemContent:y["a"],VListItemGroup:S["a"],VListItemSubtitle:y["b"],VListItemTitle:y["c"],VSpacer:L["a"]})},"404f":function(t,e,a){"use strict";var i=a("84e0"),s=a.n(i);s.a},"84e0":function(t,e,a){},"8ce9":function(t,e,a){},ae8d:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-center perspective my-5"},[a("transition",{attrs:{name:"front"}},[a("v-card",{directives:[{name:"show",rawName:"v-show",value:t.swap,expression:"swap"}],staticClass:"mx-auto front-card",attrs:{color:t.ac.topic.color,"max-width":"400","min-height":"250",dark:"",raised:""},on:{click:function(e){t.swap=!t.swap}}},[a("v-list-item",{class:t.ac.topic.color+" darken-2"},[a("v-list-item-avatar",{staticClass:"headline justify-center",attrs:{color:t.person.color}},[t.person.image?t._e():a("span",{staticClass:"white--text",domProps:{textContent:t._s(t.person.initials)}}),t.person.image?a("img",{staticClass:"pa-1",attrs:{src:t.imageSource(t.person)}}):t._e()]),a("v-list-item-content",[a("v-list-item-title",{staticClass:"headline pr-10"},[t._v(t._s(t.person.name))]),a("v-list-item-subtitle",{staticClass:"pr-10"},[t._v(t._s(t.dateString))]),a("div",{staticClass:"card-icon py-1 px-1 caption text-center"},[a("v-icon",{staticClass:"pr-3 pl-4 pt-2",attrs:{"x-large":""}},[t._v(t._s(t.ac.topic.icon))]),a("br"),t.ac.streak>=0?a("v-icon",{attrs:{small:""}},[t._v(t._s(t.iconConfig.streak))]):t._e(),t.ac.streak>=0?a("span",{staticClass:"pr-1"},[t._v(t._s(t.ac.streak))]):t._e(),a("v-icon",{attrs:{small:""}},[t._v(t._s(t.senderReceiverTokenIcon))]),a("span",[t._v(t._s(t.tokensEarned))])],1)],1)],1),a("v-card-text",{staticClass:"py-2"},[a("span",{staticClass:"title font-weight-light word-break text-center white--text"},[t._v(t._s(t.ac.topic.text))])]),a("v-card-text",{staticClass:"pt-0 pb-4"},t._l(t.ac.subtopics,(function(e,i){return a("div",{key:i},[a("span",{staticClass:"white--text"},[t._v("- "+t._s(e.text))])])})),0),a("div",{staticClass:"rotate-icon pa-2"},[a("v-icon",[t._v(t._s(t.iconConfig.flip))])],1)],1)],1),a("transition",{attrs:{name:"back"}},[a("v-card",{directives:[{name:"show",rawName:"v-show",value:!t.swap,expression:"!swap"}],staticClass:"mx-auto back-card",attrs:{color:t.ac.topic.color,"max-width":"400","min-height":"240",dark:"",raised:""},on:{click:function(e){t.swap=!t.swap}}},[a("v-card-text",{staticClass:"pa-4  white--text"},[a("p",{staticClass:"text-justify mb-0"},[t._v(t._s(t.ac.message))])]),a("div",{staticClass:"rotate-icon pa-2"},[a("v-icon",[t._v(t._s(t.iconConfig.flip))])],1)],1)],1)],1)},s=[],n=a("2b0e"),r=a("7fca"),o=a("314a"),c=a("fe0f"),l=n["a"].extend({name:"Card",props:{ac:Object},data:function(){return{swap:!0,iconConfig:o["a"]}},computed:{person:function(){return this.ac?this.ac.state===r["a"].RECEIVED?this.ac.sender:this.ac.receiver:void 0},senderReceiverTokenIcon:function(){return this.ac.state===r["a"].SENT||this.ac.state===r["a"].REMOTE?o["a"].rewardToken:o["a"].awesomeToken},tokensEarned:function(){return this.ac.state===r["a"].RECEIVED?c["a"].tokenConfig.AWESOME_TOKENS_PER_CARD+this.ac.bonus:this.ac.state===r["a"].REMOTE?c["a"].tokenConfig.REWARD_TOKENS_PER_REMOTE+this.ac.bonus:c["a"].tokenConfig.REWARD_TOKENS_PER_CARD+this.ac.bonus},dateString:function(){return this.ac?this.ac.state===r["a"].RECEIVED?"Received on "+new Date(this.ac.dateSent).toDateString():"Sent on "+new Date(this.ac.dateSent).toDateString():""}},methods:{imageSource:function(t){return t.image?a("1771")("./".concat(t.image.path)):""}}}),d=l,v=(a("404f"),a("2877")),h=a("6544"),u=a.n(h),p=a("b0af"),g=a("99d9"),m=a("132d"),f=a("da13"),C=a("8270"),_=a("5d23"),b=Object(v["a"])(d,i,s,!1,null,"10bb091b",null);e["a"]=b.exports;u()(b,{VCard:p["a"],VCardText:g["c"],VIcon:m["a"],VListItem:f["a"],VListItemAvatar:C["a"],VListItemContent:_["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"]})},afdd:function(t,e,a){"use strict";var i=a("8336");e["a"]=i["a"]},ce7e:function(t,e,a){"use strict";var i=a("5530"),s=(a("8ce9"),a("7560"));e["a"]=s["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(i["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(i["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},d1fa:function(t,e,a){"use strict";var i=a("15d4"),s=a.n(i);s.a}}]);
//# sourceMappingURL=chunk-0d095b82.5c6b56c4.js.map