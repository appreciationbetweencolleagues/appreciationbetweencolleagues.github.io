(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bce18"],{"2a2e":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-card",{staticClass:"mt-2 mx-auto",attrs:{"max-width":"500",flat:""}},[a("v-card-title",{staticClass:"wrap-text"},[e._v("Permissions")]),a("v-card-text",[e._v(" The application requires some permissions to be fully functional. Check whether you have fullfilled all the options below. ")])],1),a("v-card",{staticClass:"pa-1 my-2 mx-auto",attrs:{outlined:"","max-width":"500"}},[a("v-card-title",[e._v(" Camera "),a("v-spacer"),a("div",[a("v-icon",{attrs:{large:""}},[e._v(e._s(e.iconConfig.camera))])],1)],1),a("v-card-text",[e._v(" The camera is required for sending and receiving appreciation. "),a("v-slide-y-transition",[e.cameraAllowed?a("span",{staticClass:"green--text"},[a("br"),a("br"),e._v("Camera permission granted")]):e._e()]),a("v-slide-y-transition",[e.cameraErrorText.length>0&&!e.cameraAllowed?a("span",{staticClass:"red--text"},[a("br"),a("br"),e._v(e._s(e.cameraErrorText))]):e._e()])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary",disabled:e.cameraAllowed},on:{click:e.requestCameraPermission}},[e._v("Check permission")])],1)],1),a("v-card",{staticClass:"pa-1 my-2 mx-auto",attrs:{outlined:"","max-width":"500"}},[a("v-card-title",[e._v(" Persistent Storage "),a("v-spacer"),a("div",[a("v-icon",{attrs:{large:""}},[e._v(e._s(e.iconConfig.database))])],1)],1),a("v-card-text",[e._v(" All data is kept locally in the browser. There is no remote backup storage. It is therefore important that the data cannot be automatically cleared by the browser. Please note that the data will still be lost if you clear the storage or cache for this website. "),a("br"),a("br"),a("b",[e._v("Current status: ")]),a("v-slide-y-transition",[e.persisted?a("span",{staticClass:"green--text"},[e._v("Storage will not be cleared except by explicit user action.")]):e._e()]),a("v-slide-y-transition",[e.persisted||e.noNavStorage?e._e():a("span",{staticClass:"red--text"},[e._v("Storage may be cleared by the browser under storage pressure.")])]),a("v-slide-y-transition",[!e.persisted&&e.noNavStorage?a("span",{staticClass:"red--text"},[e._v("Persistent storage is unavailable in your browser. Use another browser if possible, or ensure that enough disk space is available.")]):e._e()])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary",disabled:e.persisted||e.noNavStorage},on:{click:e.checkPersist}},[e._v("Allow persistent storage")])],1)],1),a("v-card",{staticClass:"mx-auto",attrs:{flat:"","max-width":"500"}},[a("v-card-actions",[a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){return e.$router.replace({path:"/"})}}},[e._v(" To the app ")]),a("v-spacer"),a("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.$router.replace({name:"Guide"})}}},[e._v(" Starter Guide ")])],1)],1)],1)},s=[],i=(a("4160"),a("159b"),a("2b0e")),o=a("314a"),n=i["a"].extend({name:"Permissions",data:function(){return{text:"",persisted:!1,noNavStorage:!1,cameraAllowed:!1,cameraErrorText:"",iconConfig:o["a"]}},methods:{requestCameraPermission:function(){var e=this,t={video:{facingMode:"environment"}};navigator.mediaDevices.getUserMedia(t).then((function(t){e.cameraErrorText="",e.cameraAllowed=!0,t.getTracks().forEach((function(e){return e.stop()}))})).catch((function(t){e.cameraErrorText=t.message}))},checkPersist:function(){var e=this;navigator.storage&&navigator.storage.persist?navigator.storage.persist().then((function(t){e.persisted=!!t})):this.noNavStorage=!0},checkPersisted:function(){var e=this;navigator.storage&&navigator.storage.persist&&navigator.storage.persisted().then((function(t){e.persisted=!!t}))}},mounted:function(){this.checkPersisted()}}),c=n,l=a("2877"),d=a("6544"),v=a.n(d),p=a("8336"),u=a("b0af"),m=a("99d9"),h=a("132d"),g=a("0789"),b=a("2fa4"),f=Object(l["a"])(c,r,s,!1,null,"3147a901",null);t["default"]=f.exports;v()(f,{VBtn:p["a"],VCard:u["a"],VCardActions:m["a"],VCardText:m["c"],VCardTitle:m["d"],VIcon:h["a"],VSlideYTransition:g["e"],VSpacer:b["a"]})}}]);
//# sourceMappingURL=chunk-2d0bce18.757dfd6a.js.map