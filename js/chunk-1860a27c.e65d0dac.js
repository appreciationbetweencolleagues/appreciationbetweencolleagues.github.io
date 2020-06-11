(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1860a27c"],{"38d5":function(t,e,a){"use strict";var i=a("f43c"),s=a.n(i);s.a},"4bd4":function(t,e,a){"use strict";a("4de4"),a("7db0"),a("4160"),a("caad"),a("07ac"),a("2532"),a("159b");var i=a("5530"),s=a("58df"),r=a("7e2b"),o=a("3206");e["a"]=Object(s["a"])(r["a"],Object(o["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=a(t)))})):i.valid=a(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},da7d:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-card",{staticClass:"mx-auto mt-4",attrs:{flat:"","max-width":"400"}},[i("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("span",{staticClass:"subtitle-2"},[t._v("Profile details")]),i("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:"",autofocus:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),i("span",{staticClass:"caption"},[t._v("Your email address cannot be changed afterwards. ")]),i("span",{staticClass:"caption mb-3"},[t._v("Don't worry, we won't send you any emails. ")]),i("v-text-field",{attrs:{counter:20,rules:t.nameRules,label:"Display Name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),i("span",{staticClass:"subtitle-2"},[t._v("Optional customization")]),i("v-card",{staticClass:"mx-auto d-flex justify-center",attrs:{outlined:"","max-width":"400"}},[i("v-card-actions",[i("v-list-item-avatar",{staticClass:"justify-center image-select mx-3",attrs:{size:"64",color:t.color},on:{click:t.toggleColors}},[i("span",{staticClass:"white--text"},[t._v(" Color ")])]),i("v-spacer"),i("v-list-item-avatar",{staticClass:"justify-center image-select mx-3",attrs:{size:"64",color:"grey"},on:{click:t.toggleImages}},[t.image?t._e():i("span",{staticClass:"white--text"},[t._v(" Image ")]),t.image?i("img",{attrs:{src:t.imageSource}}):t._e()])],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{disabled:!t.valid,color:"success"},on:{click:t.confirm}},[t._v(" Confirm ")])],1)],1)],1),i("v-slide-y-transition",[i("v-card",{directives:[{name:"show",rawName:"v-show",value:t.showColors,expression:"showColors"}],staticClass:"mx-auto px-2",attrs:{fluid:"",color:"grey lighten-4","max-width":"400"}},[i("v-row",[i("v-col",{staticClass:"d-flex justify-center"},[i("v-btn",{staticClass:"mx-3",attrs:{"x-small":"",fab:"",color:"error"},on:{click:t.toggleColors}},[i("v-icon",[t._v("mdi-close")])],1)],1)],1),i("v-row",t._l(t.colors,(function(e,a){return i("v-col",{key:a,staticClass:"d-flex justify-center"},[i("v-btn",{attrs:{fab:"",small:"",color:e},on:{click:function(a){return t.selectColor(e)}}})],1)})),1)],1)],1),i("v-slide-y-transition",[i("v-card",{directives:[{name:"show",rawName:"v-show",value:t.showImages,expression:"showImages"}],staticClass:"mx-auto px-2",attrs:{fluid:"",color:"grey lighten-4","max-width":"400"}},[i("v-row",[i("v-col",{staticClass:"d-flex justify-center"},[i("v-btn",{staticClass:"mx-3",attrs:{"x-small":"",fab:"",color:"info"},on:{click:function(e){return t.selectImage(void 0)}}},[i("v-icon",[t._v("mdi-eraser")])],1),i("v-btn",{staticClass:"mx-3",attrs:{"x-small":"",fab:"",color:"error"},on:{click:t.toggleImages}},[i("v-icon",[t._v("mdi-close")])],1)],1)],1),i("v-row",t._l(t.images,(function(e){return i("v-col",{key:e.id,staticClass:"d-flex child-flex"},[i("v-card",{staticClass:"d-flex justify-center image-hover",attrs:{flat:"",tile:"",color:"grey lighten-4"},on:{click:function(a){return t.selectImage(e)}}},[i("img",{attrs:{src:a("1771")("./"+e.path),"aspect-ratio":"1",width:"64px",height:"64px"}})])],1)})),1)],1)],1)],1)},s=[],r=(a("b0c0"),a("2b0e")),o=a("2048"),n=a("d376"),l=r["a"].extend({name:"Setup",data:function(){return{valid:!1,name:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=20||"Name must be less than 20 characters"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],colors:["red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","blue-grey","grey"],image:void 0,color:"blue-grey",showImages:!1,showColors:!1}},methods:{confirm:function(){var t=this,e={name:this.name,email:this.email,deleted:!1,isSelf:!0};this.color&&(e.color=this.color),this.image&&(e.image=this.image.id),o["a"].addPerson(e).then((function(){t.$router.push({name:"Permissions"})}))},selectImage:function(t){this.showImages=!1,this.image=t},selectColor:function(t){this.showColors=!1,this.color=t},toggleImages:function(){this.showColors=!1,this.showImages=!this.showImages},toggleColors:function(){this.showImages=!1,this.showColors=!this.showColors}},computed:{images:function(){return n["a"].images},imageSource:function(){return this.image?a("1771")("./".concat(this.image.path)):""}}}),c=l,u=(a("38d5"),a("2877")),d=a("6544"),m=a.n(d),h=a("8336"),f=a("b0af"),v=a("99d9"),g=a("62ad"),p=a("4bd4"),w=a("132d"),b=a("8270"),x=a("0fd9"),C=a("0789"),_=a("2fa4"),y=a("8654"),V=Object(u["a"])(c,i,s,!1,null,"20401bee",null);e["default"]=V.exports;m()(V,{VBtn:h["a"],VCard:f["a"],VCardActions:v["a"],VCol:g["a"],VForm:p["a"],VIcon:w["a"],VListItemAvatar:b["a"],VRow:x["a"],VSlideYTransition:C["e"],VSpacer:_["a"],VTextField:y["a"]})},f43c:function(t,e,a){}}]);
//# sourceMappingURL=chunk-1860a27c.e65d0dac.js.map