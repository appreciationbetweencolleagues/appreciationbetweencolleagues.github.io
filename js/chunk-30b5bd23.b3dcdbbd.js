(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30b5bd23"],{2677:function(t,e,i){"use strict";var a=i("8654");e["a"]=a["a"]},"4bd4":function(t,e,i){"use strict";i("4de4"),i("7db0"),i("4160"),i("caad"),i("07ac"),i("2532"),i("159b");var a=i("5530"),n=i("58df"),s=i("7e2b"),r=i("3206");e["a"]=Object(n["a"])(s["a"],Object(r["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=i(t)))})):a.valid=i(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},5803:function(t,e,i){},"65a1":function(t,e,i){"use strict";var a=i("f1d7"),n=i.n(a);n.a},"8adc":function(t,e,i){},cc20:function(t,e,i){"use strict";i("4de4"),i("4160");var a=i("3835"),n=i("5530"),s=(i("8adc"),i("58df")),r=i("0789"),o=i("9d26"),l=i("a9ad"),c=i("4e82"),u=i("7560"),h=i("f2e7"),d=i("1c87"),f=i("af2b"),p=i("d9bd");e["a"]=Object(s["a"])(l["a"],f["a"],d["a"],u["a"],Object(c["a"])("chipGroup"),Object(h["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(n["a"])({"v-chip":!0},d["a"].options.computed.classes.call(this),{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses,{},this.sizeableClasses,{},this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(d["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var i=Object(a["a"])(e,2),n=i[0],s=i[1];t.$attrs.hasOwnProperty(n)&&Object(p["a"])(n,s,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(o["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(r["b"],t)},genClose:function(){var t=this;return this.$createElement(o["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],i=this.generateRouteLink(),a=i.tag,s=i.data;s.attrs=Object(n["a"])({},s.attrs,{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex}),s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);var r=this.textColor||this.outlined&&this.color;return t(a,this.setTextColor(r,s),e)}})},da7d:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"mx-auto mt-4",attrs:{flat:"","max-width":"400"}},[a("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("span",{staticClass:"subtitle-2"},[t._v("Profile details")]),a("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:"",autofocus:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("span",{staticClass:"caption"},[t._v("Your email address cannot be changed afterwards. ")]),a("span",{staticClass:"caption mb-3"},[t._v("Don't worry, we won't send you any emails. ")]),a("v-text-field",{attrs:{counter:20,rules:t.nameRules,label:"Display Name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("span",{staticClass:"subtitle-2"},[t._v("Optional customization")]),a("v-card",{staticClass:"mx-auto d-flex justify-center",attrs:{outlined:"","max-width":"400"}},[a("v-card-actions",[a("v-list-item-avatar",{staticClass:"justify-center image-select mx-3",attrs:{size:"64",color:t.color},on:{click:t.toggleColors}},[a("span",{staticClass:"white--text"},[t._v(" Color ")])]),a("v-spacer"),a("v-list-item-avatar",{staticClass:"justify-center image-select mx-3",attrs:{size:"64",color:"grey"},on:{click:t.toggleImages}},[t.image?t._e():a("span",{staticClass:"white--text"},[t._v(" Image ")]),t.image?a("img",{attrs:{src:t.imageSource}}):t._e()])],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{disabled:!t.valid,color:"success"},on:{click:t.confirm}},[t._v(" Confirm ")])],1),a("span",{staticClass:"subtitle-2"},[t._v("Import data")]),a("br"),a("span",{staticClass:"caption"},[t._v("You can import your old data if you are a returning user.")]),a("v-card-actions",[a("v-file-input",{attrs:{disabled:!!t.file,loading:!!t.file,accept:"application/json",label:"Import Data","single-line":"","prepend-icon":"","prepend-inner-icon":"mdi-import",dark:"",dense:"",solo:"","background-color":"info"},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}})],1)],1)],1),a("v-slide-y-transition",[a("v-card",{directives:[{name:"show",rawName:"v-show",value:t.showColors,expression:"showColors"}],staticClass:"mx-auto px-2",attrs:{fluid:"",color:"grey lighten-4","max-width":"400"}},[a("v-row",[a("v-col",{staticClass:"d-flex justify-center"},[a("v-btn",{staticClass:"mx-3",attrs:{"x-small":"",fab:"",color:"error"},on:{click:t.toggleColors}},[a("v-icon",[t._v("mdi-close")])],1)],1)],1),a("v-row",t._l(t.colors,(function(e,i){return a("v-col",{key:i,staticClass:"d-flex justify-center"},[a("v-btn",{attrs:{fab:"",small:"",color:e},on:{click:function(i){return t.selectColor(e)}}})],1)})),1)],1)],1),a("v-slide-y-transition",[a("v-card",{directives:[{name:"show",rawName:"v-show",value:t.showImages,expression:"showImages"}],staticClass:"mx-auto px-2",attrs:{fluid:"",color:"grey lighten-4","max-width":"400"}},[a("v-row",[a("v-col",{staticClass:"d-flex justify-center"},[a("v-btn",{staticClass:"mx-3",attrs:{"x-small":"",fab:"",color:"info"},on:{click:function(e){return t.selectImage(void 0)}}},[a("v-icon",[t._v("mdi-eraser")])],1),a("v-btn",{staticClass:"mx-3",attrs:{"x-small":"",fab:"",color:"error"},on:{click:t.toggleImages}},[a("v-icon",[t._v("mdi-close")])],1)],1)],1),a("v-row",t._l(t.images,(function(e){return a("v-col",{key:e.id,staticClass:"d-flex child-flex"},[a("v-card",{staticClass:"d-flex justify-center image-hover",attrs:{flat:"",tile:"",color:"grey lighten-4"},on:{click:function(i){return t.selectImage(e)}}},[a("img",{attrs:{src:i("1771")("./"+e.path),"aspect-ratio":"1",width:"64px",height:"64px"}})])],1)})),1)],1)],1)],1)},n=[],s=(i("c975"),i("b0c0"),i("ac1f"),i("5319"),i("96cf"),i("1da1")),r=i("2b0e"),o=i("2048"),l=i("d376"),c=i("fe0f"),u=r["a"].extend({name:"Setup",data:function(){return{valid:!1,name:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=20||"Name must be less than 20 characters"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],colors:["red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","blue-grey","grey"],image:void 0,color:"blue-grey",showImages:!1,showColors:!1,file:void 0}},methods:{confirm:function(){var t=this,e={name:this.name,email:this.email,deleted:!1,isSelf:!0};this.color&&(e.color=this.color),this.image&&(e.image=this.image.id),o["a"].addPerson(e).then((function(){t.$router.push({path:"/guide"})}))},selectImage:function(t){this.showImages=!1,this.image=t},selectColor:function(t){this.showColors=!1,this.color=t},toggleImages:function(){this.showColors=!1,this.showImages=!this.showImages},toggleColors:function(){this.showImages=!1,this.showColors=!this.showColors},importData:function(t){var e=this;if(t.type&&-1===t.type.indexOf("json"))return console.log("File is not a json.",t.type,t),void(this.file=void 0);var i=new FileReader;i.addEventListener("load",function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(i){var a,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null===i.target||"string"!==typeof i.target.result){t.next=20;break}if(a=JSON.parse(i.target.result),!a.acs||!a.people){t.next=20;break}n=0;case 4:if(!(n<a.people.length)){t.next=10;break}return t.next=7,o["a"].addPerson(a.people[n]);case 7:n++,t.next=4;break;case 10:s=0;case 11:if(!(s<a.acs.length)){t.next=17;break}return t.next=14,c["a"].addAC(a.acs[s]);case 14:s++,t.next=11;break;case 17:return a.bonus&&(localStorage.setItem("bonus",JSON.stringify(a.bonus)),c["a"].loginBonusUpdated()),e.$router.replace({path:"/"}),t.abrupt("return");case 20:e.file=void 0;case 21:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),i.readAsText(t)}},computed:{images:function(){return l["a"].images},imageSource:function(){return this.image?i("1771")("./".concat(this.image.path)):""}},watch:{file:function(t){t&&this.importData(t)}}}),h=u,d=(i("65a1"),i("2877")),f=i("6544"),p=i.n(f),v=i("8336"),m=i("b0af"),g=i("99d9"),b=i("62ad"),y=(i("99af"),i("a623"),i("4160"),i("caad"),i("d81d"),i("13d5"),i("fb6a"),i("a434"),i("a9e3"),i("159b"),i("2909")),x=i("5530"),C=i("53ca"),w=(i("5803"),i("2677")),k=i("cc20"),S=i("80d2"),V=i("d9bd"),_=w["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"===typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(S["v"])(t).every((function(t){return null!=t&&"object"===Object(C["a"])(t)}))}}},computed:{classes:function(){return Object(x["a"])({},w["a"].options.computed.classes.call(this),{"v-file-input":!0})},computedCounterValue:function(){var t=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var i=e.size,a=void 0===i?0:i;return t+a}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(S["n"])(e,1024===this.base))},internalArrayValue:function(){return Object(S["v"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},isMultiple:function(){return this.$attrs.hasOwnProperty("multiple")},text:function(){var t=this;return this.isDirty?this.internalArrayValue.map((function(e){var i=e.name,a=void 0===i?"":i,n=e.size,s=void 0===n?0:n,r=t.truncateText(a);return t.showSize?"".concat(r," (").concat(Object(S["n"])(s,1024===t.base),")"):r})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(V["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.isMultiple?t:t?[t]:[];Object(S["h"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.isMultiple?[]:void 0,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(e,i){return t.$createElement(k["a"],{props:{small:t.smallChips},on:{"click:close":function(){var e=t.internalValue;e.splice(i,1),t.internalValue=e}}},[e])})):[]},genInput:function(){var t=w["a"].options.methods.genInput.call(this);return delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(i,a){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[a],file:i,index:a}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=w["a"].options.methods.genTextFieldSlot.call(this);return e.data.on=Object(x["a"])({},e.data.on||{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=Object(y["a"])(t.target.files||[]);this.internalValue=this.isMultiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}}),$=i("4bd4"),I=i("132d"),j=i("8270"),B=i("0fd9"),O=i("0789"),z=i("2fa4"),E=i("8654"),D=Object(d["a"])(h,a,n,!1,null,"2ff41494",null);e["default"]=D.exports;p()(D,{VBtn:v["a"],VCard:m["a"],VCardActions:g["a"],VCol:b["a"],VFileInput:_,VForm:$["a"],VIcon:I["a"],VListItemAvatar:j["a"],VRow:B["a"],VSlideYTransition:O["e"],VSpacer:z["a"],VTextField:E["a"]})},f1d7:function(t,e,i){}}]);
//# sourceMappingURL=chunk-30b5bd23.b3dcdbbd.js.map