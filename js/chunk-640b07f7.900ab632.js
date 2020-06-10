(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-640b07f7"],{"0798":function(t,e,a){"use strict";a("caad");var i=a("5530"),s=a("ade3"),n=(a("0c18"),a("10d2")),r=a("afdd"),o=a("9d26"),c=a("f2e7"),d=a("7560"),l=a("f40d"),h=a("58df"),u=a("d9bd");e["a"]=Object(h["a"])(n["a"],c["a"],l["a"]).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(s["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(r["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(o["a"],{props:{color:e}},"$cancel")])},__cachedIcon:function(){return this.computedIcon?this.$createElement(o["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(i["a"])({},n["a"].options.computed.classes.call(this),{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||d["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(u["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,a){},4638:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"pa-0 mx-auto",attrs:{flat:"","max-width":"500px"}},[a("v-card-title",{staticClass:"wrap-text"},[t._v("Starter Guide")]),a("v-card-subtitle",[t._v("Overview of all core features of the application.")]),a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("Appreciation Cards")]),a("v-card-text",{staticClass:"pb-0"},[t._v(" The primary focus of the application is to appreciate the efforts and achievements of fellow users. This is done through the exchange of "),a("b",[t._v("Appreciation Cards")]),t._v(". These digital cards contain the context and reasoning behind the appreciation. "),a("br"),a("br"),t._v(" An example can be seen below. Click on the card to flip it and reveal the additional reasoning! ")]),a("Card",{staticClass:"mx-auto",attrs:{ac:t.ac}})],1),a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("Creating Cards")]),a("v-card-text",[t._v(" Before you can share your appreciation to another user through the app, you first need to create a card. This can be done by clicking on the Create button on the home screen. "),a("v-card",{staticClass:"pa-1 my-1 text-center white--text mx-auto my-1",attrs:{color:"green",width:"96px","max-width":"100%"}},[a("v-icon",{attrs:{color:"white"}},[t._v(t._s(t.iconConfig.create))]),a("br"),a("span",[t._v("Create")])],1),t._v(" You will need to specify the receiver, and then pick a topic and up to three subtopics from a predetermined list. It is also possible to write these yourself! You can then write additional reasoning that will appear on the back of the card. "),a("v-alert",{staticClass:"caption mt-3",attrs:{type:"warning",dense:"",border:"left"}},[t._v(" This app is "),a("strong",[t._v("not authorised")]),t._v(" to be used for any "),a("strong",[t._v("company sensitive information")]),t._v(". Please only enter personal information without reference to any company specific data. ")])],1)],1),a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("Sending Cards")]),a("v-card-text",[t._v(" Created cards will appear in your list of saved cards. This list can be accessed by pressing send on the home screen. The red dot indicates the number of previously created Appreciation Cards which have yet to be sent. "),a("v-card",{staticClass:"pa-1 my-1 text-center white--text mx-auto mt-3 mb-1",attrs:{color:"blue",width:"96px","max-width":"100%"}},[a("v-badge",{staticClass:"badge-lineheight",attrs:{color:"red",content:1,value:1}},[a("v-icon",{attrs:{color:"white"}},[t._v(t._s(t.iconConfig.send))]),a("br"),a("span",[t._v("Send")])],1)],1),t._v(" Cards are transferred through QR codes. This means that you will have to physically visit the receiving user in order to transfer the Appreciation Card. Let the receiver scan the QR code on your screen. Secondly, scan the confirmation QR code on their screen. Contact details may be exchanged during this process. ")],1)],1),a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("Receiving Cards")]),a("v-card-text",[t._v(" When somebody wants to send you a card, click on the Receive button on the home screen. "),a("v-card",{staticClass:"pa-1 my-1 text-center white--text mx-auto my-1",attrs:{color:"deep-orange",width:"96px","max-width":"100%"}},[a("v-icon",{attrs:{color:"white"}},[t._v(t._s(t.iconConfig.receive))]),a("br"),a("span",[t._v("Receive")])],1),t._v(" Scan the QR code that will be visible on the screen of the other user who sent the card. You will be notified if the transaction includes contact details. You can decide what to do with these new details. "),a("b",[t._v("Let the sending user scan the confirmation QR code off your screen.")]),t._v(" The other user cannot finish the sending process without scanning the confirmation code. ")],1)],1),a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("Tokens")]),a("v-card-text",[t._v(" The exchange of Appreciation Cards are awarded with tokens. "),a("v-card",{staticClass:"mx-auto pa-2 my-1",attrs:{flat:""}},[a("v-row",[a("v-col",{staticClass:"pa-1"},[a("v-card",{staticClass:"pa-2 text-center",attrs:{outlined:""}},[a("v-icon",{attrs:{"x-large":"",color:"blue"}},[t._v(t._s(t.iconConfig.rewardToken)+" ")]),a("br"),a("span",[t._v("Reward Tokens")])],1)],1),a("v-col",{staticClass:"pa-1"},[a("v-card",{staticClass:"pa-2 text-center",attrs:{outlined:""}},[a("v-icon",{attrs:{"x-large":"",color:"red"}},[t._v(t._s(t.iconConfig.awesomeToken))]),a("br"),a("span",[t._v("Awesome Tokens")])],1)],1)],1)],1),t._v(" Reward tokens will be awarded for giving appreciation to other users. Awesome tokens are awarded for receiving appreciation. Tokens have both a joint and user bound limit. These limits are shown on the Tokens page, which can be accessed by clicking on your token balance in the top right corner. "),a("br"),a("br"),t._v(" The tokens cannot be spent on anything at this time. ")],1)],1),a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("Contacts")]),a("v-card-text",[t._v(" Contacts are other users of the application that you have previously exchanged apprecation with. They are added automatically in the first exchange process, provided that you accepted to add them to your contacts. "),a("br"),a("br"),t._v(" If you have updated your profile data, and want others to see the change, you will have to include your contact details again in a card exchange. Only the sending user can initiate this process. ")])],1),a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("That is all for now!")]),a("v-card-text",[t._v(" These are the main features of the application. If you have any further questions, you can revisit this guide or take a look at the FAQ. "),a("v-card",{staticClass:"pa-1 my-1 text-center white--text mx-auto my-1",attrs:{color:"light-blue",width:"96px","max-width":"100%",dark:""}},[a("v-icon",[t._v(t._s(t.iconConfig.help))]),a("br"),a("span",[t._v("FAQ")])],1),t._v(" If you have any issues, please report them through the report tool on the home screen. "),a("v-card",{staticClass:"pa-1 my-1 text-center mx-auto my-1",attrs:{width:"128px","max-width":"100%",outlined:"",light:""}},[a("v-icon",[t._v(t._s(t.iconConfig.report))]),a("br"),a("span",[t._v("Report an Issue")])],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.$router.replace({path:"/"})}}},[t._v("All done")])],1)],1)],1)},s=[],n=a("2b0e"),r=(a("4de4"),a("caad"),a("d81d"),a("2532"),a("d4ec")),o=a("bee2"),c=a("9eaa"),d=a("2514"),l=function(){function t(e){Object(r["a"])(this,t),this._id=e.id?e.id:-1,this._sender=new c["a"]({name:"Alice",email:"alice@alice.alice",deleted:!1}),this._receiver=new c["a"]({name:"Bob",email:"bob@bob.bob",deleted:!1}),this._message=e.message,this._dateCreated=e.dateCreated,this._dateSent=e.dateSent,this._state=e.state,this._topic=d["a"].topicById(e.topic),this._subtopics=this._topic.subtopics.filter((function(t){return e.subtopics.includes(t.id)}))}return Object(o["a"])(t,[{key:"minimize",value:function(t){var e={e:this._sender.email,m:this._message,d:this._dateCreated,t:this._topic.id,s:this._subtopics.map((function(t){return t.id}))};return t&&(e.p=this._sender.minimize(!1)),e}},{key:"toACData",value:function(){var t={id:this._id,sender:this._sender.email,receiver:this._receiver.email,message:this._message,dateCreated:this._dateCreated,dateSent:this._dateSent,state:this._state,topic:this._topic.id,subtopics:this._subtopics.map((function(t){return t.id}))};return t}},{key:"confirm",value:function(t){var e={e:this._receiver.email,d:this._dateCreated,n:this.dateSent};return t&&(e.p=this._receiver.minimize(!1)),e}},{key:"equals",value:function(t){return this._sender.email===t.e&&this._dateCreated===t.d}},{key:"id",get:function(){return this._id}},{key:"sender",get:function(){return this._sender}},{key:"receiver",get:function(){return this._receiver}},{key:"message",get:function(){return this._message}},{key:"dateCreated",get:function(){return this._dateCreated}},{key:"dateSent",get:function(){return this._dateSent},set:function(t){this._dateSent=t}},{key:"state",get:function(){return this._state},set:function(t){this._state=t}},{key:"topic",get:function(){return this._topic}},{key:"subtopics",get:function(){return this._subtopics}}]),t}(),h=l,u=a("ae8d"),p=a("314a"),v=n["a"].extend({name:"Guide",components:{Card:u["a"]},data:function(){return{ac:new h({id:999999,sender:"",receiver:"",dateCreated:1586354737600,dateSent:1586354737600,message:"You took proactive action to find a solution for Alice's problem by comparing the old file with the new file. You did not wait for a request to help, instead you proactively offered your expertise to help solve the problem. You demonstrated the key value of accountability. You saw the problem, you owned it and solved it, without being asked to do so.",state:3,topic:4,subtopics:[3,4]}),iconConfig:p["a"]}}}),f=v,m=a("2877"),_=a("6544"),b=a.n(_),g=a("0798"),C=a("4ca6"),w=a("8336"),y=a("b0af"),x=a("99d9"),k=a("62ad"),T=a("132d"),S=a("0fd9"),E=a("2fa4"),A=Object(m["a"])(f,i,s,!1,null,"857d8b98",null);e["default"]=A.exports;b()(A,{VAlert:g["a"],VBadge:C["a"],VBtn:w["a"],VCard:y["a"],VCardActions:x["a"],VCardSubtitle:x["b"],VCardText:x["c"],VCardTitle:x["d"],VCol:k["a"],VIcon:T["a"],VRow:S["a"],VSpacer:E["a"]})},"5e40":function(t,e,a){},ae8d:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-center perspective my-5"},[a("transition",{attrs:{name:"front"}},[a("v-card",{directives:[{name:"show",rawName:"v-show",value:t.swap,expression:"swap"}],staticClass:"mx-auto front-card",attrs:{color:t.ac.topic.color,"max-width":"400","min-height":"250",dark:"",raised:""},on:{click:function(e){t.swap=!t.swap}}},[a("v-list-item",{class:t.ac.topic.color+" darken-2"},[a("v-list-item-avatar",{staticClass:"headline justify-center",attrs:{color:t.person.color}},[t.person.image?t._e():a("span",{staticClass:"white--text",domProps:{textContent:t._s(t.person.initials)}}),t.person.image?a("img",{staticClass:"pa-1",attrs:{src:t.imageSource(t.person)}}):t._e()]),a("v-list-item-content",[a("v-list-item-title",{staticClass:"headline pr-10"},[t._v(t._s(t.person.name))]),a("v-list-item-subtitle",{staticClass:"pr-10"},[t._v(t._s(t.dateString))]),a("div",{staticClass:"card-icon py-1 px-1 caption text-center"},[a("v-icon",{staticClass:"pr-3 pl-4 pt-2",attrs:{"x-large":""}},[t._v(t._s(t.ac.topic.icon))]),a("br"),t.ac.streak>=0?a("v-icon",{attrs:{small:""}},[t._v(t._s(t.iconConfig.streak))]):t._e(),t.ac.streak>=0?a("span",{staticClass:"pr-1"},[t._v(t._s(t.ac.streak))]):t._e(),a("v-icon",{attrs:{small:""}},[t._v(t._s(t.senderReceiverTokenIcon))]),a("span",[t._v(t._s(t.tokensEarned))])],1)],1)],1),a("v-card-text",{staticClass:"py-2"},[a("span",{staticClass:"title font-weight-light word-break text-center white--text"},[t._v(t._s(t.ac.topic.text))])]),a("v-card-text",{staticClass:"pt-0 pb-4"},t._l(t.ac.subtopics,(function(e,i){return a("div",{key:i},[a("span",{staticClass:"white--text"},[t._v("- "+t._s(e.text))])])})),0),a("div",{staticClass:"rotate-icon pa-2"},[a("v-icon",[t._v(t._s(t.iconConfig.flip))])],1)],1)],1),a("transition",{attrs:{name:"back"}},[a("v-card",{directives:[{name:"show",rawName:"v-show",value:!t.swap,expression:"!swap"}],staticClass:"mx-auto back-card",attrs:{color:t.ac.topic.color,"max-width":"400","min-height":"240",dark:"",raised:""},on:{click:function(e){t.swap=!t.swap}}},[a("v-card-text",{staticClass:"pa-4  white--text"},[a("p",{staticClass:"text-justify mb-0"},[t._v(t._s(t.ac.message))])]),a("div",{staticClass:"rotate-icon pa-2"},[a("v-icon",[t._v(t._s(t.iconConfig.flip))])],1)],1)],1)],1)},s=[],n=a("2b0e"),r=a("7fca"),o=a("d4ec"),c=a("bee2"),d=a("99de"),l=a("7e84"),h=a("262e"),u=a("9eaa"),p=function(t){function e(){return Object(o["a"])(this,e),Object(d["a"])(this,Object(l["a"])(e).call(this,{name:"",email:"",deleted:!1}))}return Object(h["a"])(e,t),Object(c["a"])(e,[{key:"initials",get:function(){return""}},{key:"isMock",get:function(){return!0}}]),e}(u["a"]),v=p,f=a("314a"),m=a("fe0f"),_=n["a"].extend({name:"Card",props:{ac:Object},data:function(){return{swap:!0,iconConfig:f["a"]}},computed:{person:function(){return this.ac?this.ac.state===r["a"].RECEIVED?this.ac.sender:this.ac.receiver:new v},senderReceiverTokenIcon:function(){return this.ac.state===r["a"].RECEIVED?f["a"].awesomeToken:f["a"].rewardToken},tokensEarned:function(){return this.ac.state===r["a"].RECEIVED?m["a"].tokenConfig.AWESOME_TOKENS_PER_CARD+this.ac.bonus:m["a"].tokenConfig.REWARD_TOKENS_PER_CARD+this.ac.bonus},dateString:function(){return console.log(this.iconConfig),this.ac?this.ac.state===r["a"].RECEIVED?"Received on "+new Date(this.ac.dateSent).toDateString():"Sent on "+new Date(this.ac.dateSent).toDateString():""}},methods:{imageSource:function(t){return t.image?a("1771")("./".concat(t.image.path)):""}}}),b=_,g=(a("bbb9"),a("2877")),C=a("6544"),w=a.n(C),y=a("b0af"),x=a("99d9"),k=a("132d"),T=a("da13"),S=a("8270"),E=a("5d23"),A=Object(g["a"])(b,i,s,!1,null,"fe740868",null);e["a"]=A.exports;w()(A,{VCard:y["a"],VCardText:x["c"],VIcon:k["a"],VListItem:T["a"],VListItemAvatar:S["a"],VListItemContent:E["a"],VListItemSubtitle:E["b"],VListItemTitle:E["c"]})},afdd:function(t,e,a){"use strict";var i=a("8336");e["a"]=i["a"]},bbb9:function(t,e,a){"use strict";var i=a("5e40"),s=a.n(i);s.a}}]);
//# sourceMappingURL=chunk-640b07f7.900ab632.js.map