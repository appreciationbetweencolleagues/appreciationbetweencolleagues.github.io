(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-287a3d0c"],{"0d3b":function(e,t,a){var r=a("d039"),n=a("b622"),s=a("c430"),i=n("iterator");e.exports=!r((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,a="";return e.pathname="c%20d",t.forEach((function(e,r){t["delete"]("b"),a+=r+e})),s&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[i]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==a||"x"!==new URL("http://x",void 0).host}))},"26d3":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-card",{staticClass:"mx-auto mt-4",attrs:{flat:"","max-width":"400"}},[r("div",{staticClass:"title wrap-text"},[e._v("Account Details")]),r("div",{staticClass:"subtitle-2"},[e._v("Public Profile Preview")]),r("v-card",{staticClass:"mx-auto mb-4",attrs:{"max-width":"400",outlined:""}},[r("v-list-item",[r("v-list-item-avatar",{staticClass:"headline justify-center image-select",attrs:{size:"64",color:e.selectedColor}},[e.selectedImage?e._e():r("span",{staticClass:"white--text",domProps:{textContent:e._s(e.initials)}}),e.selectedImage?r("img",{staticClass:"pa-1",attrs:{src:e.selectedImageSource}}):e._e()]),r("v-list-item-content",[r("v-card-title",[e._v(e._s(e.selectedName))]),r("v-card-subtitle",[e._v(e._s(e.ownEmail))])],1)],1)],1),r("span",{staticClass:"subtitle-2"},[e._v("Edit Public Details")]),r("v-card",{staticClass:"mx-auto d-flex justify-center",attrs:{outlined:"","max-width":"400"}},[r("v-card-actions",[r("v-dialog",{attrs:{scrollable:"","max-width":"400px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[r("v-list-item-avatar",e._g({staticClass:"justify-center image-select mx-3",attrs:{size:"64",color:"grey lighten-4"}},a),[r("span",[e._v("Name")])])]}}]),model:{value:e.editName,callback:function(t){e.editName=t},expression:"editName"}},[r("v-card",{directives:[{name:"show",rawName:"v-show",value:e.editName,expression:"editName"}],staticClass:"mx-auto px-4 pt-4",attrs:{fluid:"",flat:"","max-width":"400"}},[r("v-form",{on:{submit:e.confirmForm}},[r("v-text-field",{attrs:{label:"Display Name",counter:20,rules:e.nameRules},model:{value:e.selectedName,callback:function(t){e.selectedName=t},expression:"selectedName"}}),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary",text:""},on:{click:e.confirmForm}},[e._v("Confirm")])],1)],1)],1)],1),r("v-dialog",{attrs:{scrollable:"","max-width":"400px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[r("v-list-item-avatar",e._g({staticClass:"justify-center image-select mx-3",attrs:{size:"64",color:e.selectedColor}},a),[r("span",{staticClass:"white--text"},[e._v(" Color ")])])]}}]),model:{value:e.showColors,callback:function(t){e.showColors=t},expression:"showColors"}},[r("v-card",{staticClass:"max-auto px-2",attrs:{fluid:"",color:"grey lighten-4","max-width":"400"}},[r("v-row",{attrs:{dense:""}},[r("v-col",{staticClass:"d-flex justify-center pa-2"},[r("v-btn",{staticClass:"mx-2",attrs:{"x-small":"",fab:"",color:"error"},on:{click:function(t){e.showColors=!1}}},[r("v-icon",[e._v("mdi-close")])],1)],1)],1),r("v-row",{attrs:{dense:""}},e._l(e.colors,(function(t,a){return r("v-col",{key:a,staticClass:"d-flex justify-center pa-3"},[r("v-btn",{attrs:{fab:"",small:"",color:t},on:{click:function(a){return e.selectColor(t)}}})],1)})),1)],1)],1),r("v-dialog",{attrs:{scrollable:"","max-width":"400px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[r("v-list-item-avatar",e._g({staticClass:"justify-center image-select mx-3",attrs:{size:"64",color:"grey"}},a),[e.selectedImage?e._e():r("span",{staticClass:"white--text"},[e._v(" Image ")]),e.selectedImage?r("img",{attrs:{src:e.selectedImageSource}}):e._e()])]}}]),model:{value:e.showImages,callback:function(t){e.showImages=t},expression:"showImages"}},[r("v-card",{directives:[{name:"show",rawName:"v-show",value:e.showImages,expression:"showImages"}],staticClass:"mx-auto px-2",attrs:{fluid:"",color:"grey lighten-4","max-width":"400"}},[r("v-row",{attrs:{dense:""}},[r("v-col",{staticClass:"d-flex justify-center pa-2"},[r("v-btn",{staticClass:"mx-3",attrs:{"x-small":"",fab:"",color:"info"},on:{click:function(t){return e.selectImage(void 0)}}},[r("v-icon",[e._v(e._s(e.iconConfig.erase))])],1),r("v-btn",{staticClass:"mx-3",attrs:{"x-small":"",fab:"",color:"error"},on:{click:function(t){e.showImages=!1}}},[r("v-icon",[e._v(e._s(e.iconConfig.close))])],1)],1)],1),r("v-row",{attrs:{dense:""}},e._l(e.images,(function(t){return r("v-col",{key:t.id,staticClass:"d-flex child-flex pa-3"},[r("v-card",{staticClass:"d-flex justify-center image-hover",attrs:{flat:"",tile:"",color:"grey lighten-4"},on:{click:function(a){return e.selectImage(t)}}},[r("img",{attrs:{src:a("1771")("./"+t.path),"aspect-ratio":"1",width:"64px",height:"64px"}})])],1)})),1)],1)],1)],1)],1),r("v-card",{staticClass:"mx-auto px-2 mb-4",attrs:{flat:"","max-width":"400"}},[r("v-card-actions",[r("v-btn",{attrs:{block:"",loadingSave:e.loadingSave,disabled:e.disableSave,color:"primary"},on:{click:e.saveData}},[e._v("Save changes")])],1),r("v-slide-y-transition",[r("div",{directives:[{name:"show",rawName:"v-show",value:e.saveMessage.length>0,expression:"saveMessage.length > 0"}],staticClass:"text-center caption"},[e._v(e._s(e.saveMessage))])])],1),r("div",{staticClass:"title"},[e._v("Permissions")]),r("v-card",{staticClass:"mx-auto mb-4",attrs:{"max-width":"400",outlined:""}},[r("v-card-text",{staticClass:"pb-2"},[e._v("Check active permissions granted to the application.")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$router.push({name:"Permissions"})}}},[e._v("Go to Permissions")])],1)],1),e.isInBrowser?r("div",{staticClass:"title"},[e._v("Installation")]):e._e(),e.isInBrowser?r("v-card",{staticClass:"mx-auto mb-4",attrs:{"max-width":"400",outlined:""}},[r("v-card-text",{staticClass:"pb-2"},[e._v(" It appears that you are using the application in a browser. You can go back to the installation page for instructions if you wish to install the application. Your data will remain intact. If you want to access the application again through the browser, opt for the no installation option. ")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:e.toInstall}},[e._v("Back to install page")])],1)],1):e._e(),r("div",{staticClass:"title"},[e._v("Export Data")]),r("v-card",{staticClass:"mx-auto mb-4",attrs:{"max-width":"400",outlined:""}},[r("v-card",{staticClass:"mx-auto px-2",attrs:{flat:"","max-width":"400"}},[r("v-card-text",[e._v("You can download your data if you want to transfer it to another device, or just want a backup.")]),r("v-card-actions",[r("v-btn",{attrs:{block:"",color:"info"},on:{click:e.exportData}},[e._v("Download")])],1)],1)],1),r("div",{staticClass:"title"},[e._v("Danger Zone")]),r("v-card",{staticClass:"mx-auto mb-4",attrs:{"max-width":"400",outlined:""}},[r("v-card",{staticClass:"mx-auto px-2",attrs:{flat:"","max-width":"400"}},[r("v-card-text",[e._v("Want a fresh start? You can delete all your local data by pressing the button below. "),r("br"),r("br"),r("b",[e._v("Please note that this action is irreversible.")])]),r("v-card-actions",[r("v-btn",{attrs:{block:"",loadingSave:e.loadingDelete,color:"error"},on:{click:function(t){e.deleteDialog=!0}}},[e._v("Delete all data")])],1),r("v-slide-y-transition",[r("div",{directives:[{name:"show",rawName:"v-show",value:e.deleteMessage.length>0,expression:"deleteMessage.length > 0"}],staticClass:"text-center caption"},[e._v(e._s(e.deleteMessage))])])],1)],1),r("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.deleteDialog,callback:function(t){e.deleteDialog=t},expression:"deleteDialog"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v("Delete all data")]),r("v-card-text",{staticClass:"pb-2"},[e._v("Are you sure that you want to delete all data? This cannot be undone.")]),r("v-card-actions",[r("v-btn",{attrs:{color:"primary",disabled:e.loadingDelete,text:""},on:{click:function(t){e.deleteDialog=!1}}},[e._v("Cancel")]),r("v-spacer"),r("v-btn",{attrs:{color:"error",disabled:e.loadingDelete,loading:e.loadingDelete,text:""},on:{click:e.deleteData}},[e._v("Delete everything")])],1)],1)],1)],1)],1)},n=[],s=(a("b0c0"),a("d3b7"),a("ac1f"),a("3ca3"),a("5319"),a("ddb0"),a("2b3d"),a("96cf"),a("1da1")),i=a("2b0e"),o=a("d376"),l=a("2048"),c=a("fe0f"),u=a("314a"),h=i["a"].extend({name:"Settings",data:function(){return{loadingSave:!1,loadingDelete:!1,saveMessage:"",deleteMessage:"",deleteDialog:!1,lastPerson:void 0,selectedImage:void 0,selectedName:"",selectedColor:"",showImages:!1,showColors:!1,editName:!1,colors:["red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","blue-grey","grey"],nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=20||"Name must be less than 20 characters"}],iconConfig:u["a"]}},methods:{selectImage:function(e){this.showImages=!1,this.selectedImage=e},selectColor:function(e){this.showColors=!1,this.selectedColor=e},confirmForm:function(e){e.preventDefault(),this.editName=!1},deleteData:function(){var e=this;this.loadingDelete=!0,c["a"].deleteAllACs().then((function(t){if(!t)return e.loadingDelete=!1,e.deleteDialog=!1,void(e.deleteMessage="Something went wrong when deleting the Appreciation Cards.");l["a"].deleteAllPeople().then((function(t){if(!t)return e.loadingDelete=!1,e.deleteDialog=!1,void(e.deleteMessage="Something went wrong when deleting the contacts.");e.loadingDelete=!1,e.deleteDialog=!1,e.deleteMessage="Cleared all data.",window.location.reload()}))}))},saveData:function(){var e=this;this.loadingSave=!0,this.showColors=!1,this.showImages=!1,this.editName=!1;var t=l["a"].selfPerson;if(t){var a={name:this.selectedName,email:t.email,deleted:t.deleted,color:this.selectedColor,isSelf:!0};this.selectedImage&&(a.image=this.selectedImage.id),l["a"].updatePerson(a).then((function(t){e.loadingSave=!1,t?(e.saveMessage="Details updated succesfully!",e.lastPerson=t,e.setVariables(t)):e.saveMessage="Something went wrong",setTimeout((function(){return e.saveMessage=""}),4e3)}))}},setVariables:function(e){this.selectedName=e.name,this.selectedColor=e.color,this.selectedImage=e.image},toInstall:function(){window.localStorage.removeItem("noInstall"),this.$router.replace({name:"Install"})},exportData:function(){return Object(s["a"])(regeneratorRuntime.mark((function e(){var t,a,r,n,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].exportACs;case 2:return t=e.sent,e.next=5,l["a"].exportPeople;case 5:a=e.sent,r=localStorage.getItem("bonus")||"",n={acs:t,people:a,bonus:JSON.parse(r)},console.log(n),s=new Blob([JSON.stringify(n)],{type:"application/json"}),i=document.createElement("a"),i.href=URL.createObjectURL(s),i.download="ABC_Backup_".concat(Date.now()),i.click(),URL.revokeObjectURL(i.href);case 15:case"end":return e.stop()}}),e)})))()}},computed:{selectedImageSource:function(){return this.selectedImage?a("1771")("./".concat(this.selectedImage.path)):""},images:function(){return o["a"].images},initials:function(){return this.selectedName.substr(0,1).toUpperCase()},ownEmail:function(){return this.lastPerson?this.lastPerson.email:""},isInBrowser:function(){return!matchMedia("(display-mode: standalone)").matches},disableSave:function(){return void 0!==this.lastPerson&&this.selectedImage===this.lastPerson.image&&this.selectedColor===this.lastPerson.color&&this.selectedName===this.lastPerson.name}},mounted:function(){this.lastPerson=l["a"].selfPerson,this.lastPerson&&this.setVariables(this.lastPerson)}}),f=h,d=(a("4cef"),a("2877")),p=a("6544"),v=a.n(p),m=a("8336"),g=a("b0af"),w=a("99d9"),b=a("62ad"),y=a("169a"),x=a("4bd4"),C=a("132d"),k=a("da13"),_=a("8270"),S=a("5d23"),I=a("0fd9"),R=a("0789"),L=a("2fa4"),U=a("8654"),A=Object(d["a"])(f,r,n,!1,null,"6d5de576",null);t["default"]=A.exports;v()(A,{VBtn:m["a"],VCard:g["a"],VCardActions:w["a"],VCardSubtitle:w["b"],VCardText:w["c"],VCardTitle:w["d"],VCol:b["a"],VDialog:y["a"],VForm:x["a"],VIcon:C["a"],VListItem:k["a"],VListItemAvatar:_["a"],VListItemContent:S["a"],VRow:I["a"],VSlideYTransition:R["e"],VSpacer:L["a"],VTextField:U["a"]})},"2b3d":function(e,t,a){"use strict";a("3ca3");var r,n=a("23e7"),s=a("83ab"),i=a("0d3b"),o=a("da84"),l=a("37e8"),c=a("6eeb"),u=a("19aa"),h=a("5135"),f=a("60da"),d=a("4df4"),p=a("6547").codeAt,v=a("5fb2"),m=a("d44e"),g=a("9861"),w=a("69f3"),b=o.URL,y=g.URLSearchParams,x=g.getState,C=w.set,k=w.getterFor("URL"),_=Math.floor,S=Math.pow,I="Invalid authority",R="Invalid scheme",L="Invalid host",U="Invalid port",A=/[A-Za-z]/,P=/[\d+\-.A-Za-z]/,B=/\d/,D=/^(0x|0X)/,j=/^[0-7]+$/,N=/^\d+$/,V=/^[\dA-Fa-f]+$/,q=/[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,E=/[\u0000\u0009\u000A\u000D #/:?@[\\]]/,M=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,O=/[\u0009\u000A\u000D]/g,F=function(e,t){var a,r,n;if("["==t.charAt(0)){if("]"!=t.charAt(t.length-1))return L;if(a=T(t.slice(1,-1)),!a)return L;e.host=a}else if(K(e)){if(t=v(t),q.test(t))return L;if(a=$(t),null===a)return L;e.host=a}else{if(E.test(t))return L;for(a="",r=d(t),n=0;n<r.length;n++)a+=W(r[n],Y);e.host=a}},$=function(e){var t,a,r,n,s,i,o,l=e.split(".");if(l.length&&""==l[l.length-1]&&l.pop(),t=l.length,t>4)return e;for(a=[],r=0;r<t;r++){if(n=l[r],""==n)return e;if(s=10,n.length>1&&"0"==n.charAt(0)&&(s=D.test(n)?16:8,n=n.slice(8==s?1:2)),""===n)i=0;else{if(!(10==s?N:8==s?j:V).test(n))return e;i=parseInt(n,s)}a.push(i)}for(r=0;r<t;r++)if(i=a[r],r==t-1){if(i>=S(256,5-t))return null}else if(i>255)return null;for(o=a.pop(),r=0;r<a.length;r++)o+=a[r]*S(256,3-r);return o},T=function(e){var t,a,r,n,s,i,o,l=[0,0,0,0,0,0,0,0],c=0,u=null,h=0,f=function(){return e.charAt(h)};if(":"==f()){if(":"!=e.charAt(1))return;h+=2,c++,u=c}while(f()){if(8==c)return;if(":"!=f()){t=a=0;while(a<4&&V.test(f()))t=16*t+parseInt(f(),16),h++,a++;if("."==f()){if(0==a)return;if(h-=a,c>6)return;r=0;while(f()){if(n=null,r>0){if(!("."==f()&&r<4))return;h++}if(!B.test(f()))return;while(B.test(f())){if(s=parseInt(f(),10),null===n)n=s;else{if(0==n)return;n=10*n+s}if(n>255)return;h++}l[c]=256*l[c]+n,r++,2!=r&&4!=r||c++}if(4!=r)return;break}if(":"==f()){if(h++,!f())return}else if(f())return;l[c++]=t}else{if(null!==u)return;h++,c++,u=c}}if(null!==u){i=c-u,c=7;while(0!=c&&i>0)o=l[c],l[c--]=l[u+i-1],l[u+--i]=o}else if(8!=c)return;return l},z=function(e){for(var t=null,a=1,r=null,n=0,s=0;s<8;s++)0!==e[s]?(n>a&&(t=r,a=n),r=null,n=0):(null===r&&(r=s),++n);return n>a&&(t=r,a=n),t},J=function(e){var t,a,r,n;if("number"==typeof e){for(t=[],a=0;a<4;a++)t.unshift(e%256),e=_(e/256);return t.join(".")}if("object"==typeof e){for(t="",r=z(e),a=0;a<8;a++)n&&0===e[a]||(n&&(n=!1),r===a?(t+=a?":":"::",n=!0):(t+=e[a].toString(16),a<7&&(t+=":")));return"["+t+"]"}return e},Y={},Z=f({},Y,{" ":1,'"':1,"<":1,">":1,"`":1}),G=f({},Z,{"#":1,"?":1,"{":1,"}":1}),H=f({},G,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),W=function(e,t){var a=p(e,0);return a>32&&a<127&&!h(t,e)?e:encodeURIComponent(e)},X={ftp:21,file:null,http:80,https:443,ws:80,wss:443},K=function(e){return h(X,e.scheme)},Q=function(e){return""!=e.username||""!=e.password},ee=function(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme},te=function(e,t){var a;return 2==e.length&&A.test(e.charAt(0))&&(":"==(a=e.charAt(1))||!t&&"|"==a)},ae=function(e){var t;return e.length>1&&te(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)},re=function(e){var t=e.path,a=t.length;!a||"file"==e.scheme&&1==a&&te(t[0],!0)||t.pop()},ne=function(e){return"."===e||"%2e"===e.toLowerCase()},se=function(e){return e=e.toLowerCase(),".."===e||"%2e."===e||".%2e"===e||"%2e%2e"===e},ie={},oe={},le={},ce={},ue={},he={},fe={},de={},pe={},ve={},me={},ge={},we={},be={},ye={},xe={},Ce={},ke={},_e={},Se={},Ie={},Re=function(e,t,a,n){var s,i,o,l,c=a||ie,u=0,f="",p=!1,v=!1,m=!1;a||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace(M,"")),t=t.replace(O,""),s=d(t);while(u<=s.length){switch(i=s[u],c){case ie:if(!i||!A.test(i)){if(a)return R;c=le;continue}f+=i.toLowerCase(),c=oe;break;case oe:if(i&&(P.test(i)||"+"==i||"-"==i||"."==i))f+=i.toLowerCase();else{if(":"!=i){if(a)return R;f="",c=le,u=0;continue}if(a&&(K(e)!=h(X,f)||"file"==f&&(Q(e)||null!==e.port)||"file"==e.scheme&&!e.host))return;if(e.scheme=f,a)return void(K(e)&&X[e.scheme]==e.port&&(e.port=null));f="","file"==e.scheme?c=be:K(e)&&n&&n.scheme==e.scheme?c=ce:K(e)?c=de:"/"==s[u+1]?(c=ue,u++):(e.cannotBeABaseURL=!0,e.path.push(""),c=_e)}break;case le:if(!n||n.cannotBeABaseURL&&"#"!=i)return R;if(n.cannotBeABaseURL&&"#"==i){e.scheme=n.scheme,e.path=n.path.slice(),e.query=n.query,e.fragment="",e.cannotBeABaseURL=!0,c=Ie;break}c="file"==n.scheme?be:he;continue;case ce:if("/"!=i||"/"!=s[u+1]){c=he;continue}c=pe,u++;break;case ue:if("/"==i){c=ve;break}c=ke;continue;case he:if(e.scheme=n.scheme,i==r)e.username=n.username,e.password=n.password,e.host=n.host,e.port=n.port,e.path=n.path.slice(),e.query=n.query;else if("/"==i||"\\"==i&&K(e))c=fe;else if("?"==i)e.username=n.username,e.password=n.password,e.host=n.host,e.port=n.port,e.path=n.path.slice(),e.query="",c=Se;else{if("#"!=i){e.username=n.username,e.password=n.password,e.host=n.host,e.port=n.port,e.path=n.path.slice(),e.path.pop(),c=ke;continue}e.username=n.username,e.password=n.password,e.host=n.host,e.port=n.port,e.path=n.path.slice(),e.query=n.query,e.fragment="",c=Ie}break;case fe:if(!K(e)||"/"!=i&&"\\"!=i){if("/"!=i){e.username=n.username,e.password=n.password,e.host=n.host,e.port=n.port,c=ke;continue}c=ve}else c=pe;break;case de:if(c=pe,"/"!=i||"/"!=f.charAt(u+1))continue;u++;break;case pe:if("/"!=i&&"\\"!=i){c=ve;continue}break;case ve:if("@"==i){p&&(f="%40"+f),p=!0,o=d(f);for(var g=0;g<o.length;g++){var w=o[g];if(":"!=w||m){var b=W(w,H);m?e.password+=b:e.username+=b}else m=!0}f=""}else if(i==r||"/"==i||"?"==i||"#"==i||"\\"==i&&K(e)){if(p&&""==f)return I;u-=d(f).length+1,f="",c=me}else f+=i;break;case me:case ge:if(a&&"file"==e.scheme){c=xe;continue}if(":"!=i||v){if(i==r||"/"==i||"?"==i||"#"==i||"\\"==i&&K(e)){if(K(e)&&""==f)return L;if(a&&""==f&&(Q(e)||null!==e.port))return;if(l=F(e,f),l)return l;if(f="",c=Ce,a)return;continue}"["==i?v=!0:"]"==i&&(v=!1),f+=i}else{if(""==f)return L;if(l=F(e,f),l)return l;if(f="",c=we,a==ge)return}break;case we:if(!B.test(i)){if(i==r||"/"==i||"?"==i||"#"==i||"\\"==i&&K(e)||a){if(""!=f){var y=parseInt(f,10);if(y>65535)return U;e.port=K(e)&&y===X[e.scheme]?null:y,f=""}if(a)return;c=Ce;continue}return U}f+=i;break;case be:if(e.scheme="file","/"==i||"\\"==i)c=ye;else{if(!n||"file"!=n.scheme){c=ke;continue}if(i==r)e.host=n.host,e.path=n.path.slice(),e.query=n.query;else if("?"==i)e.host=n.host,e.path=n.path.slice(),e.query="",c=Se;else{if("#"!=i){ae(s.slice(u).join(""))||(e.host=n.host,e.path=n.path.slice(),re(e)),c=ke;continue}e.host=n.host,e.path=n.path.slice(),e.query=n.query,e.fragment="",c=Ie}}break;case ye:if("/"==i||"\\"==i){c=xe;break}n&&"file"==n.scheme&&!ae(s.slice(u).join(""))&&(te(n.path[0],!0)?e.path.push(n.path[0]):e.host=n.host),c=ke;continue;case xe:if(i==r||"/"==i||"\\"==i||"?"==i||"#"==i){if(!a&&te(f))c=ke;else if(""==f){if(e.host="",a)return;c=Ce}else{if(l=F(e,f),l)return l;if("localhost"==e.host&&(e.host=""),a)return;f="",c=Ce}continue}f+=i;break;case Ce:if(K(e)){if(c=ke,"/"!=i&&"\\"!=i)continue}else if(a||"?"!=i)if(a||"#"!=i){if(i!=r&&(c=ke,"/"!=i))continue}else e.fragment="",c=Ie;else e.query="",c=Se;break;case ke:if(i==r||"/"==i||"\\"==i&&K(e)||!a&&("?"==i||"#"==i)){if(se(f)?(re(e),"/"==i||"\\"==i&&K(e)||e.path.push("")):ne(f)?"/"==i||"\\"==i&&K(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&te(f)&&(e.host&&(e.host=""),f=f.charAt(0)+":"),e.path.push(f)),f="","file"==e.scheme&&(i==r||"?"==i||"#"==i))while(e.path.length>1&&""===e.path[0])e.path.shift();"?"==i?(e.query="",c=Se):"#"==i&&(e.fragment="",c=Ie)}else f+=W(i,G);break;case _e:"?"==i?(e.query="",c=Se):"#"==i?(e.fragment="",c=Ie):i!=r&&(e.path[0]+=W(i,Y));break;case Se:a||"#"!=i?i!=r&&("'"==i&&K(e)?e.query+="%27":e.query+="#"==i?"%23":W(i,Y)):(e.fragment="",c=Ie);break;case Ie:i!=r&&(e.fragment+=W(i,Z));break}u++}},Le=function(e){var t,a,r=u(this,Le,"URL"),n=arguments.length>1?arguments[1]:void 0,i=String(e),o=C(r,{type:"URL"});if(void 0!==n)if(n instanceof Le)t=k(n);else if(a=Re(t={},String(n)),a)throw TypeError(a);if(a=Re(o,i,null,t),a)throw TypeError(a);var l=o.searchParams=new y,c=x(l);c.updateSearchParams(o.query),c.updateURL=function(){o.query=String(l)||null},s||(r.href=Ae.call(r),r.origin=Pe.call(r),r.protocol=Be.call(r),r.username=De.call(r),r.password=je.call(r),r.host=Ne.call(r),r.hostname=Ve.call(r),r.port=qe.call(r),r.pathname=Ee.call(r),r.search=Me.call(r),r.searchParams=Oe.call(r),r.hash=Fe.call(r))},Ue=Le.prototype,Ae=function(){var e=k(this),t=e.scheme,a=e.username,r=e.password,n=e.host,s=e.port,i=e.path,o=e.query,l=e.fragment,c=t+":";return null!==n?(c+="//",Q(e)&&(c+=a+(r?":"+r:"")+"@"),c+=J(n),null!==s&&(c+=":"+s)):"file"==t&&(c+="//"),c+=e.cannotBeABaseURL?i[0]:i.length?"/"+i.join("/"):"",null!==o&&(c+="?"+o),null!==l&&(c+="#"+l),c},Pe=function(){var e=k(this),t=e.scheme,a=e.port;if("blob"==t)try{return new URL(t.path[0]).origin}catch(r){return"null"}return"file"!=t&&K(e)?t+"://"+J(e.host)+(null!==a?":"+a:""):"null"},Be=function(){return k(this).scheme+":"},De=function(){return k(this).username},je=function(){return k(this).password},Ne=function(){var e=k(this),t=e.host,a=e.port;return null===t?"":null===a?J(t):J(t)+":"+a},Ve=function(){var e=k(this).host;return null===e?"":J(e)},qe=function(){var e=k(this).port;return null===e?"":String(e)},Ee=function(){var e=k(this),t=e.path;return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},Me=function(){var e=k(this).query;return e?"?"+e:""},Oe=function(){return k(this).searchParams},Fe=function(){var e=k(this).fragment;return e?"#"+e:""},$e=function(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}};if(s&&l(Ue,{href:$e(Ae,(function(e){var t=k(this),a=String(e),r=Re(t,a);if(r)throw TypeError(r);x(t.searchParams).updateSearchParams(t.query)})),origin:$e(Pe),protocol:$e(Be,(function(e){var t=k(this);Re(t,String(e)+":",ie)})),username:$e(De,(function(e){var t=k(this),a=d(String(e));if(!ee(t)){t.username="";for(var r=0;r<a.length;r++)t.username+=W(a[r],H)}})),password:$e(je,(function(e){var t=k(this),a=d(String(e));if(!ee(t)){t.password="";for(var r=0;r<a.length;r++)t.password+=W(a[r],H)}})),host:$e(Ne,(function(e){var t=k(this);t.cannotBeABaseURL||Re(t,String(e),me)})),hostname:$e(Ve,(function(e){var t=k(this);t.cannotBeABaseURL||Re(t,String(e),ge)})),port:$e(qe,(function(e){var t=k(this);ee(t)||(e=String(e),""==e?t.port=null:Re(t,e,we))})),pathname:$e(Ee,(function(e){var t=k(this);t.cannotBeABaseURL||(t.path=[],Re(t,e+"",Ce))})),search:$e(Me,(function(e){var t=k(this);e=String(e),""==e?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",Re(t,e,Se)),x(t.searchParams).updateSearchParams(t.query)})),searchParams:$e(Oe),hash:$e(Fe,(function(e){var t=k(this);e=String(e),""!=e?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",Re(t,e,Ie)):t.fragment=null}))}),c(Ue,"toJSON",(function(){return Ae.call(this)}),{enumerable:!0}),c(Ue,"toString",(function(){return Ae.call(this)}),{enumerable:!0}),b){var Te=b.createObjectURL,ze=b.revokeObjectURL;Te&&c(Le,"createObjectURL",(function(e){return Te.apply(b,arguments)})),ze&&c(Le,"revokeObjectURL",(function(e){return ze.apply(b,arguments)}))}m(Le,"URL"),n({global:!0,forced:!i,sham:!s},{URL:Le})},"4bd4":function(e,t,a){"use strict";a("4de4"),a("7db0"),a("4160"),a("caad"),a("07ac"),a("2532"),a("159b");var r=a("5530"),n=a("58df"),s=a("7e2b"),i=a("3206");t["a"]=Object(n["a"])(s["a"],Object(i["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(e){var t=this,a=function(e){return e.$watch("hasError",(function(a){t.$set(t.errorBag,e._uid,a)}),{immediate:!0})},r={_uid:e._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=e.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(e._uid)||(r.valid=a(e)))})):r.valid=a(e),r},validate:function(){return 0===this.inputs.filter((function(e){return!e.validate(!0)})).length},reset:function(){this.inputs.forEach((function(e){return e.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(e){return e.resetValidation()})),this.resetErrorBag()},register:function(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister:function(e){var t=this.inputs.find((function(t){return t._uid===e._uid}));if(t){var a=this.watchers.find((function(e){return e._uid===t._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(e){return e._uid!==t._uid})),this.inputs=this.inputs.filter((function(e){return e._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:Object(r["a"])({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},"4cef":function(e,t,a){"use strict";var r=a("4ef3"),n=a.n(r);n.a},"4ef3":function(e,t,a){},"5fb2":function(e,t,a){"use strict";var r=2147483647,n=36,s=1,i=26,o=38,l=700,c=72,u=128,h="-",f=/[^\0-\u007E]/,d=/[.\u3002\uFF0E\uFF61]/g,p="Overflow: input needs wider integers to process",v=n-s,m=Math.floor,g=String.fromCharCode,w=function(e){var t=[],a=0,r=e.length;while(a<r){var n=e.charCodeAt(a++);if(n>=55296&&n<=56319&&a<r){var s=e.charCodeAt(a++);56320==(64512&s)?t.push(((1023&n)<<10)+(1023&s)+65536):(t.push(n),a--)}else t.push(n)}return t},b=function(e){return e+22+75*(e<26)},y=function(e,t,a){var r=0;for(e=a?m(e/l):e>>1,e+=m(e/t);e>v*i>>1;r+=n)e=m(e/v);return m(r+(v+1)*e/(e+o))},x=function(e){var t=[];e=w(e);var a,o,l=e.length,f=u,d=0,v=c;for(a=0;a<e.length;a++)o=e[a],o<128&&t.push(g(o));var x=t.length,C=x;x&&t.push(h);while(C<l){var k=r;for(a=0;a<e.length;a++)o=e[a],o>=f&&o<k&&(k=o);var _=C+1;if(k-f>m((r-d)/_))throw RangeError(p);for(d+=(k-f)*_,f=k,a=0;a<e.length;a++){if(o=e[a],o<f&&++d>r)throw RangeError(p);if(o==f){for(var S=d,I=n;;I+=n){var R=I<=v?s:I>=v+i?i:I-v;if(S<R)break;var L=S-R,U=n-R;t.push(g(b(R+L%U))),S=m(L/U)}t.push(g(b(S))),v=y(d,_,C==x),d=0,++C}}++d,++f}return t.join("")};e.exports=function(e){var t,a,r=[],n=e.toLowerCase().replace(d,".").split(".");for(t=0;t<n.length;t++)a=n[t],r.push(f.test(a)?"xn--"+x(a):a);return r.join(".")}},9861:function(e,t,a){"use strict";a("e260");var r=a("23e7"),n=a("d066"),s=a("0d3b"),i=a("6eeb"),o=a("e2cc"),l=a("d44e"),c=a("9ed3"),u=a("69f3"),h=a("19aa"),f=a("5135"),d=a("0366"),p=a("f5df"),v=a("825a"),m=a("861d"),g=a("7c73"),w=a("5c6c"),b=a("9a1f"),y=a("35a1"),x=a("b622"),C=n("fetch"),k=n("Headers"),_=x("iterator"),S="URLSearchParams",I=S+"Iterator",R=u.set,L=u.getterFor(S),U=u.getterFor(I),A=/\+/g,P=Array(4),B=function(e){return P[e-1]||(P[e-1]=RegExp("((?:%[\\da-f]{2}){"+e+"})","gi"))},D=function(e){try{return decodeURIComponent(e)}catch(t){return e}},j=function(e){var t=e.replace(A," "),a=4;try{return decodeURIComponent(t)}catch(r){while(a)t=t.replace(B(a--),D);return t}},N=/[!'()~]|%20/g,V={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},q=function(e){return V[e]},E=function(e){return encodeURIComponent(e).replace(N,q)},M=function(e,t){if(t){var a,r,n=t.split("&"),s=0;while(s<n.length)a=n[s++],a.length&&(r=a.split("="),e.push({key:j(r.shift()),value:j(r.join("="))}))}},O=function(e){this.entries.length=0,M(this.entries,e)},F=function(e,t){if(e<t)throw TypeError("Not enough arguments")},$=c((function(e,t){R(this,{type:I,iterator:b(L(e).entries),kind:t})}),"Iterator",(function(){var e=U(this),t=e.kind,a=e.iterator.next(),r=a.value;return a.done||(a.value="keys"===t?r.key:"values"===t?r.value:[r.key,r.value]),a})),T=function(){h(this,T,S);var e,t,a,r,n,s,i,o,l,c=arguments.length>0?arguments[0]:void 0,u=this,d=[];if(R(u,{type:S,entries:d,updateURL:function(){},updateSearchParams:O}),void 0!==c)if(m(c))if(e=y(c),"function"===typeof e){t=e.call(c),a=t.next;while(!(r=a.call(t)).done){if(n=b(v(r.value)),s=n.next,(i=s.call(n)).done||(o=s.call(n)).done||!s.call(n).done)throw TypeError("Expected sequence with length 2");d.push({key:i.value+"",value:o.value+""})}}else for(l in c)f(c,l)&&d.push({key:l,value:c[l]+""});else M(d,"string"===typeof c?"?"===c.charAt(0)?c.slice(1):c:c+"")},z=T.prototype;o(z,{append:function(e,t){F(arguments.length,2);var a=L(this);a.entries.push({key:e+"",value:t+""}),a.updateURL()},delete:function(e){F(arguments.length,1);var t=L(this),a=t.entries,r=e+"",n=0;while(n<a.length)a[n].key===r?a.splice(n,1):n++;t.updateURL()},get:function(e){F(arguments.length,1);for(var t=L(this).entries,a=e+"",r=0;r<t.length;r++)if(t[r].key===a)return t[r].value;return null},getAll:function(e){F(arguments.length,1);for(var t=L(this).entries,a=e+"",r=[],n=0;n<t.length;n++)t[n].key===a&&r.push(t[n].value);return r},has:function(e){F(arguments.length,1);var t=L(this).entries,a=e+"",r=0;while(r<t.length)if(t[r++].key===a)return!0;return!1},set:function(e,t){F(arguments.length,1);for(var a,r=L(this),n=r.entries,s=!1,i=e+"",o=t+"",l=0;l<n.length;l++)a=n[l],a.key===i&&(s?n.splice(l--,1):(s=!0,a.value=o));s||n.push({key:i,value:o}),r.updateURL()},sort:function(){var e,t,a,r=L(this),n=r.entries,s=n.slice();for(n.length=0,a=0;a<s.length;a++){for(e=s[a],t=0;t<a;t++)if(n[t].key>e.key){n.splice(t,0,e);break}t===a&&n.push(e)}r.updateURL()},forEach:function(e){var t,a=L(this).entries,r=d(e,arguments.length>1?arguments[1]:void 0,3),n=0;while(n<a.length)t=a[n++],r(t.value,t.key,this)},keys:function(){return new $(this,"keys")},values:function(){return new $(this,"values")},entries:function(){return new $(this,"entries")}},{enumerable:!0}),i(z,_,z.entries),i(z,"toString",(function(){var e,t=L(this).entries,a=[],r=0;while(r<t.length)e=t[r++],a.push(E(e.key)+"="+E(e.value));return a.join("&")}),{enumerable:!0}),l(T,S),r({global:!0,forced:!s},{URLSearchParams:T}),s||"function"!=typeof C||"function"!=typeof k||r({global:!0,enumerable:!0,forced:!0},{fetch:function(e){var t,a,r,n=[e];return arguments.length>1&&(t=arguments[1],m(t)&&(a=t.body,p(a)===S&&(r=t.headers?new k(t.headers):new k,r.has("content-type")||r.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),t=g(t,{body:w(0,String(a)),headers:w(0,r)}))),n.push(t)),C.apply(this,n)}}),e.exports={URLSearchParams:T,getState:L}},"9a1f":function(e,t,a){var r=a("825a"),n=a("35a1");e.exports=function(e){var t=n(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return r(t.call(e))}}}]);
//# sourceMappingURL=chunk-287a3d0c.a47106b2.js.map