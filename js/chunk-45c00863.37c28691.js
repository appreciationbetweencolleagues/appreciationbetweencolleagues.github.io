(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45c00863"],{"8adc":function(t,e,a){},cc20:function(t,e,a){"use strict";a("4de4"),a("4160");var i=a("3835"),s=a("5530"),c=(a("8adc"),a("58df")),l=a("0789"),o=a("9d26"),n=a("a9ad"),r=a("4e82"),h=a("7560"),u=a("f2e7"),p=a("1c87"),d=a("af2b"),v=a("d9bd");e["a"]=Object(c["a"])(n["a"],d["a"],p["a"],h["a"],Object(r["a"])("chipGroup"),Object(u["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(s["a"])({"v-chip":!0},p["a"].options.computed.classes.call(this),{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses,{},this.sizeableClasses,{},this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(p["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var a=Object(i["a"])(e,2),s=a[0],c=a[1];t.$attrs.hasOwnProperty(s)&&Object(v["a"])(s,c,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(o["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l["b"],t)},genClose:function(){var t=this;return this.$createElement(o["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],a=this.generateRouteLink(),i=a.tag,c=a.data;c.attrs=Object(s["a"])({},c.attrs,{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:c.attrs.tabindex}),c.directives.push({name:"show",value:this.active}),c=this.setBackgroundColor(this.color,c);var l=this.textColor||this.outlined&&this.color;return t(i,this.setTextColor(l,c),e)}})},fbd8:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"mx-auto mt-4",attrs:{flat:"","max-width":"500"}},[a("v-card-title",{staticClass:"wrap-text"},[t._v("Share the App")]),a("v-card-subtitle",[t._v(" Want to invite someone to use the application as well? Quickly share the application with someone in your proximity. Just let them scan the QR code below with a regular scanner or camera app of their choice. ")]),a("v-card-text",[a("v-img",{staticClass:"mx-auto",attrs:{src:t.abcurlsrc,"aspect-ratio":"1","max-width":"60%","max-height":"60%"}})],1),a("v-card-subtitle",{staticClass:"text-center"},[t._v(" Or just give them the website link: "),a("br"),a("br"),a("v-chip",{staticClass:"max-auto",attrs:{label:"",color:"primary"}},[t._v("abc.gerardvandijk.com")])],1)],1)],1)},s=[],c=a("2b0e"),l=c["a"].extend({name:"Share",data:function(){return{abcurlsrc:a("a0e4")}},computed:{}}),o=l,n=a("2877"),r=a("6544"),h=a.n(r),u=a("b0af"),p=a("99d9"),d=a("cc20"),v=a("adda"),b=Object(n["a"])(o,i,s,!1,null,"6ea54e8c",null);e["default"]=b.exports;h()(b,{VCard:u["a"],VCardSubtitle:p["b"],VCardText:p["c"],VCardTitle:p["d"],VChip:d["a"],VImg:v["a"]})}}]);
//# sourceMappingURL=chunk-45c00863.37c28691.js.map