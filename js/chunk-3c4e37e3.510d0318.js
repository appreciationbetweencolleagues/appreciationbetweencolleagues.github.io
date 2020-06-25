(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c4e37e3"],{"0798":function(t,e,a){"use strict";a("caad");var i=a("5530"),s=a("ade3"),n=(a("0c18"),a("10d2")),r=a("afdd"),o=a("9d26"),c=a("f2e7"),l=a("7560"),d=a("f40d"),v=a("58df"),u=a("d9bd");e["a"]=Object(v["a"])(n["a"],c["a"],d["a"]).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(s["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(r["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(o["a"],{props:{color:e}},"$cancel")])},__cachedIcon:function(){return this.computedIcon?this.$createElement(o["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(i["a"])({},n["a"].options.computed.classes.call(this),{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||l["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(u["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,a){},1394:function(t,e,a){"use strict";var i=a("cbc8"),s=a.n(i);s.a},"2e90":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.acs&&t.acs.length>0?a("v-list",{attrs:{dark:""}},t._l(t.acs,(function(e){return a("v-list-item",{key:e.id,class:e.topic.color+" darken-2 px-3",attrs:{color:e.topic.color,dense:"",dark:""},on:{click:function(a){t.active=e}}},[a("v-list-item-avatar",{staticClass:"headline justify-center my-3",attrs:{color:t.senderReceiver(e).color,size:36}},[t.senderReceiver(e).image?t._e():a("span",{staticClass:"white--text",domProps:{textContent:t._s(t.senderReceiver(e).initials)}}),t.senderReceiver(e).image?a("img",{staticClass:"pa-1",attrs:{src:t.imageSource(t.senderReceiver(e))}}):t._e()]),a("v-list-item-content",{staticClass:"py-1"},[a("v-list-item-title",{staticClass:"pr-9"},[t._v(t._s(t.senderReceiver(e).name))]),a("v-list-item-subtitle",{staticClass:"pr-9"},[t._v(t._s(t.dateString(e)))]),a("div",{staticClass:"streak-icon"},[e.streak>=0?a("v-icon",{attrs:{small:""}},[t._v(t._s(t.iconConfig.streak))]):t._e(),a("v-icon",{staticClass:"py-3 pr-2",attrs:{large:""}},[t._v(t._s(e.topic.icon))])],1)],1)],1)})),1):t._e(),a("v-dialog",{attrs:{"content-class":"ma-2 pa-0 no-shadow",dark:"",persistent:""},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[a("v-card",{attrs:{color:"transparent",flat:""}},[t.isActive?a("Card",{staticClass:"mx-auto z-raiser",attrs:{ac:t.active}}):t._e(),a("v-card",{staticClass:"mx-auto px-6",attrs:{flat:"","max-width":"400",color:"transparent"}},[a("v-card",{staticClass:"button-wrapper mx-auto pt-3",attrs:{color:"grey darken-3"}},[a("v-card-actions",[a("v-btn",{attrs:{dark:"",color:"warning"},on:{click:function(e){t.archiveDialog=!0}}},[a("v-icon",[t._v(t._s(t.iconConfig.archive))]),t._v(" Archive ")],1),a("span",{domProps:{textContent:t._s(t.archiveMessage)}}),a("v-spacer"),a("v-btn",{attrs:{dark:"",color:"info"},on:{click:function(e){t.active=void 0}}},[a("v-icon",[t._v(t._s(t.iconConfig.close))]),t._v(" Close ")],1)],1)],1)],1)],1)],1),a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.archiveDialog,callback:function(e){t.archiveDialog=e},expression:"archiveDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Archive card")]),a("v-card-text",{staticClass:"pb-2"},[t._v("Are you sure that you want to archive this Appreciation Card? Your tokens will not be affected.")]),a("v-card-actions",[a("v-btn",{attrs:{color:"primary",disabled:t.archiveLoading,text:""},on:{click:function(e){t.archiveDialog=!1}}},[t._v("Cancel")]),a("v-spacer"),a("v-btn",{attrs:{color:"error",disabled:t.archiveLoading,loading:t.archiveLoading,text:""},on:{click:t.archiveAC}},[t._v("Archive")])],1)],1)],1)],1)},s=[],n=a("2b0e"),r=a("ae8d"),o=a("314a"),c=a("fe0f"),l=a("7fca"),d=n["a"].extend({name:"List",components:{Card:r["a"]},props:{acs:Array},data:function(){return{active:void 0,iconConfig:o["a"],archiveLoading:!1,archiveMessage:"",archiveDialog:!1}},methods:{imageSource:function(t){return t.image?a("1771")("./".concat(t.image.path)):""},archiveAC:function(){var t=this;this.archiveLoading=!0,void 0!==this.active&&c["a"].archiveAC(this.active).then((function(e){if(!e)return t.archiveLoading=!1,t.archiveDialog=!1,void(t.archiveMessage="Something went wrong while archiving the Appreciation Card.");t.archiveLoading=!1,t.archiveDialog=!1,t.active=void 0}))},dateString:function(t){return t.state===l["a"].RECEIVED?"Received on "+new Date(t.dateSent).toDateString():"Sent on "+new Date(t.dateSent).toDateString()},senderReceiver:function(t){return t.state===l["a"].RECEIVED?t.sender:t.receiver}},computed:{isActive:function(){return!!this.active}},beforeRouteLeave:function(t,e,a){this.isActive?(this.active=void 0,a(!1)):a()}}),v=d,u=(a("8de5"),a("2877")),h=a("6544"),p=a.n(h),f=a("8336"),m=a("b0af"),C=a("99d9"),g=a("169a"),_=a("132d"),b=a("8860"),w=a("da13"),x=a("8270"),k=a("5d23"),y=a("2fa4"),S=Object(u["a"])(v,i,s,!1,null,"559a5039",null);e["a"]=S.exports;p()(S,{VBtn:f["a"],VCard:m["a"],VCardActions:C["a"],VCardText:C["c"],VCardTitle:C["d"],VDialog:g["a"],VIcon:_["a"],VList:b["a"],VListItem:w["a"],VListItemAvatar:x["a"],VListItemContent:k["a"],VListItemSubtitle:k["b"],VListItemTitle:k["c"],VSpacer:y["a"]})},"4aee":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500",flat:"",tile:""}},[a("v-card-title",{staticClass:"title font-weight-regular justify-space-between wrap-text"},[a("span",[t._v("Overview of sent appreciation")])]),a("v-card-subtitle",[t._v("Click on a listing to view the card.")]),a("List",{attrs:{acs:t.sentACs}}),t.sentACs<1?a("v-alert",{attrs:{text:"",type:"info"}},[a("div",[t._v("You have not sent any Appreciation Cards yet!")])]):t._e()],1)},s=[],n=a("2909"),r=a("2b0e"),o=a("2e90"),c=a("fe0f"),l=r["a"].extend({name:"Sent",components:{List:o["a"]},computed:{sentACs:function(){var t=c["a"].sentACs;return Object(n["a"])(t).sort((function(t,e){return e.dateSent-t.dateSent}))}},methods:{timeString:function(t){var e=new Date(t);return e.toDateString()}}}),d=l,v=a("2877"),u=a("6544"),h=a.n(u),p=a("0798"),f=a("b0af"),m=a("99d9"),C=Object(v["a"])(d,i,s,!1,null,"c9c6ee7e",null);e["default"]=C.exports;h()(C,{VAlert:p["a"],VCard:f["a"],VCardSubtitle:m["b"],VCardTitle:m["d"]})},"8de5":function(t,e,a){"use strict";var i=a("aad2"),s=a.n(i);s.a},aad2:function(t,e,a){},ae8d:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-center perspective my-5"},[a("transition",{attrs:{name:"front"}},[a("v-card",{directives:[{name:"show",rawName:"v-show",value:t.swap,expression:"swap"}],staticClass:"mx-auto front-card",attrs:{color:t.ac.topic.color,"max-width":"400","min-height":"250",dark:"",raised:""},on:{click:function(e){t.swap=!t.swap}}},[a("v-list-item",{class:t.ac.topic.color+" darken-2"},[a("v-list-item-avatar",{staticClass:"headline justify-center",attrs:{color:t.person.color}},[t.person.image?t._e():a("span",{staticClass:"white--text",domProps:{textContent:t._s(t.person.initials)}}),t.person.image?a("img",{staticClass:"pa-1",attrs:{src:t.imageSource(t.person)}}):t._e()]),a("v-list-item-content",[a("v-list-item-title",{staticClass:"headline pr-10"},[t._v(t._s(t.person.name))]),a("v-list-item-subtitle",{staticClass:"pr-10"},[t._v(t._s(t.dateString))]),a("div",{staticClass:"card-icon py-1 px-1 caption text-center"},[a("v-icon",{staticClass:"pr-3 pl-4 pt-2",attrs:{"x-large":""}},[t._v(t._s(t.ac.topic.icon))]),a("br"),t.ac.streak>=0?a("v-icon",{attrs:{small:""}},[t._v(t._s(t.iconConfig.streak))]):t._e(),t.ac.streak>=0?a("span",{staticClass:"pr-1"},[t._v(t._s(t.ac.streak))]):t._e(),a("v-icon",{attrs:{small:""}},[t._v(t._s(t.senderReceiverTokenIcon))]),a("span",[t._v(t._s(t.tokensEarned))])],1)],1)],1),a("v-card-text",{staticClass:"py-2"},[a("span",{staticClass:"title font-weight-light word-break text-center white--text"},[t._v(t._s(t.ac.topic.text))])]),a("v-card-text",{staticClass:"pt-0 pb-4"},t._l(t.ac.subtopics,(function(e,i){return a("div",{key:i},[a("span",{staticClass:"white--text"},[t._v("- "+t._s(e.text))])])})),0),a("div",{staticClass:"rotate-icon pa-2"},[a("v-icon",[t._v(t._s(t.iconConfig.flip))])],1)],1)],1),a("transition",{attrs:{name:"back"}},[a("v-card",{directives:[{name:"show",rawName:"v-show",value:!t.swap,expression:"!swap"}],staticClass:"mx-auto back-card",attrs:{color:t.ac.topic.color,"max-width":"400","min-height":"240",dark:"",raised:""},on:{click:function(e){t.swap=!t.swap}}},[a("v-card-text",{staticClass:"pa-4  white--text"},[a("p",{staticClass:"text-justify mb-0"},[t._v(t._s(t.ac.message))])]),a("div",{staticClass:"rotate-icon pa-2"},[a("v-icon",[t._v(t._s(t.iconConfig.flip))])],1)],1)],1)],1)},s=[],n=a("2b0e"),r=a("7fca"),o=a("314a"),c=a("fe0f"),l=n["a"].extend({name:"Card",props:{ac:Object},data:function(){return{swap:!0,iconConfig:o["a"]}},computed:{person:function(){return this.ac?this.ac.state===r["a"].RECEIVED?this.ac.sender:this.ac.receiver:void 0},senderReceiverTokenIcon:function(){return this.ac.state===r["a"].SENT?o["a"].rewardToken:o["a"].awesomeToken},tokensEarned:function(){return this.ac.state===r["a"].RECEIVED?c["a"].tokenConfig.AWESOME_TOKENS_PER_CARD+this.ac.bonus:c["a"].tokenConfig.REWARD_TOKENS_PER_CARD+this.ac.bonus},dateString:function(){return this.ac?this.ac.state===r["a"].RECEIVED?"Received on "+new Date(this.ac.dateSent).toDateString():"Sent on "+new Date(this.ac.dateSent).toDateString():""}},methods:{imageSource:function(t){return t.image?a("1771")("./".concat(t.image.path)):""}}}),d=l,v=(a("1394"),a("2877")),u=a("6544"),h=a.n(u),p=a("b0af"),f=a("99d9"),m=a("132d"),C=a("da13"),g=a("8270"),_=a("5d23"),b=Object(v["a"])(d,i,s,!1,null,"bfe95d50",null);e["a"]=b.exports;h()(b,{VCard:p["a"],VCardText:f["c"],VIcon:m["a"],VListItem:C["a"],VListItemAvatar:g["a"],VListItemContent:_["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"]})},afdd:function(t,e,a){"use strict";var i=a("8336");e["a"]=i["a"]},cbc8:function(t,e,a){}}]);
//# sourceMappingURL=chunk-3c4e37e3.510d0318.js.map