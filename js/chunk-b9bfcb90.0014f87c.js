(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b9bfcb90"],{"16b7":function(t,e,i){"use strict";i("a9e3");var n=i("2b0e");e["a"]=n["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var i=this;this.clearDelay();var n=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){i.isActive={open:!0,close:!1}[t]},n)}}})},"21be":function(t,e,i){"use strict";i("99af"),i("caad"),i("2532");var n=i("2909"),a=i("2b0e"),o=i("80d2");e["a"]=a["a"].extend().extend({name:"stackable",data:function(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"===typeof window)return 0;var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(o["m"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.$el,i=[this.stackMinZIndex,Object(o["m"])(e)],a=[].concat(Object(n["a"])(document.getElementsByClassName("v-menu__content--active")),Object(n["a"])(document.getElementsByClassName("v-dialog__content--active"))),s=0;s<a.length;s++)t.includes(a[s])||i.push(Object(o["m"])(a[s]));return Math.max.apply(Math,i)}}})},"4ad4":function(t,e,i){"use strict";i("caad"),i("45fc"),i("b0c0"),i("b64b");var n=i("53ca"),a=i("16b7"),o=i("f2e7"),s=i("58df"),r=i("80d2"),c=i("d9bd"),h=Object(s["a"])(a["a"],o["a"]);e["a"]=h.extend({name:"activatable",props:{activator:{default:null,validator:function(t){return["string","object"].includes(Object(n["a"])(t))}},disabled:Boolean,internalActivator:Boolean,openOnHover:Boolean},data:function(){return{activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave"],listeners:{}}},watch:{activator:"resetActivator",openOnHover:"resetActivator"},mounted:function(){var t=Object(r["l"])(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(c["b"])('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy:function(){this.removeActivatorEvents()},methods:{addActivatorEvents:function(){if(this.activator&&!this.disabled&&this.getActivator()){this.listeners=this.genActivatorListeners();for(var t=Object.keys(this.listeners),e=0,i=t;e<i.length;e++){var n=i[e];this.getActivator().addEventListener(n,this.listeners[n])}}},genActivator:function(){var t=Object(r["k"])(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes:function(){return{role:"button","aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners:function(){var t=this;if(this.disabled)return{};var e={};return this.openOnHover?(e.mouseenter=function(e){t.getActivator(e),t.runDelay("open")},e.mouseleave=function(e){t.getActivator(e),t.runDelay("close")}):e.click=function(e){var i=t.getActivator(e);i&&i.focus(),e.stopPropagation(),t.isActive=!t.isActive},e},getActivator:function(t){if(this.activatorElement)return this.activatorElement;var e=null;if(this.activator){var i=this.internalActivator?this.$el:document;e="string"===typeof this.activator?i.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){var n=this.activatorNode[0].componentInstance;e=n&&n.$options.mixins&&n.$options.mixins.some((function(t){return t.options&&["activatable","menuable"].includes(t.options.name)}))?n.getActivator():this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=e,this.activatorElement},getContentSlot:function(){return Object(r["k"])(this,"default",this.getValueProxy(),!0)},getValueProxy:function(){var t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents:function(){if(this.activator&&this.activatorElement){for(var t=Object.keys(this.listeners),e=0,i=t;e<i.length;e++){var n=i[e];this.activatorElement.removeEventListener(n,this.listeners[n])}this.listeners={}}},resetActivator:function(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},"61ed":function(t,e,i){"use strict";var n=i("e74b"),a=i.n(n);a.a},"75eb":function(t,e,i){"use strict";i("4160"),i("159b");var n=i("ade3"),a=i("53ca"),o=i("9d65"),s=i("80d2"),r=i("58df"),c=i("d9bd");function h(t){var e=Object(a["a"])(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}e["a"]=Object(r["a"])(o["a"]).extend({name:"detachable",props:{attach:{default:!1,validator:h},contentClass:{type:String,default:""}},data:function(){return{activatorNode:null,hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:function(){this.$nextTick(this.initDetach)}},beforeMount:function(){var t=this;this.$nextTick((function(){if(t.activatorNode){var e=Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode];e.forEach((function(e){if(e.elm&&t.$el.parentNode){var i=t.$el===t.$el.parentNode.firstChild?t.$el:t.$el.nextSibling;t.$el.parentNode.insertBefore(e.elm,i)}}))}}))},mounted:function(){this.hasContent&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){try{if(this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode){var t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach((function(t){t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}}catch(e){console.log(e)}},methods:{getScopeIdAttrs:function(){var t=Object(s["j"])(this.$vnode,"context.$options._scopeId");return t&&Object(n["a"])({},t,"")},initDetach:function(){var t;this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach||(t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(c["c"])("Unable to locate target ".concat(this.attach||"[data-app]"),this))}}})},9734:function(t,e,i){},9761:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"d-flex justify-center align-center flex-column",attrs:{"fill-height":""}},[i("v-card",{staticClass:"my-3",attrs:{width:"100%","max-width":"800px",flat:""}},[i("v-card-title",{staticClass:"wrap-text"},[t._v("Appreciation Between Colleagues Application")]),i("v-card-text",[t._v(" The mobile phone ABC App (Appreciation Between Collegues application) is an incentivized appreciation system by colleagues for colleagues. The ABC App enables colleagues to recognise and encourage other colleagues for any awesomeness that is seen in their actions or behavior by giving them a written appreciation card along with a digital token (“Awesome Token”). Additionally the colleague who gives the appreciation is automatically rewarded with a “Reward Token” for their efforts. "),i("br"),i("br"),t._v(" The ABC App needs to be already installed on both users’ phones. The users identify themselves in the app through their unique email address and the communication of appreciation between users occurs in the app via QR codes, with all data being stored locally on each users’ mobile phone. The app records all appreciation a user receives from other users and also all the appreciation that the user gives to other users. The app also gives a cumulative total of how many Awesome Tokens and Reward Tokens the person has earned due to being appreciated by others and due to giving appreciation to others. ")])],1),i("v-card",{staticClass:"my-3",attrs:{width:"100%","max-width":"500px",outlined:""}},[i("v-card-title",[t._v(" Install Application "),i("v-spacer"),i("div",[i("v-icon",{attrs:{large:""}},[t._v(t._s(t.iconConfig.install))])],1)],1),i("v-card-text",[t._v(" Installing the application will add it to your homescreen or app drawer, making it act like a native application. "),i("br"),i("br"),i("b",[t._v("It is strongly recommended to use Chrome for Android.")])]),i("v-slide-y-transition",[i("v-card-text",{directives:[{name:"show",rawName:"v-show",value:t.errorMessage.length>0,expression:"errorMessage.length > 0"}]},[i("span",{staticClass:"red--text"},[t._v(t._s(t.errorMessage))])])],1),i("v-slide-y-transition",[i("v-card-text",{directives:[{name:"show",rawName:"v-show",value:t.successMessage.length>0,expression:"successMessage.length > 0"}]},[i("span",{staticClass:"green--text"},[t._v(t._s(t.successMessage))])])],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary",loading:t.loading,disabled:t.disabled},on:{click:t.promptInstall}},[t._v("Install")])],1)],1),i("v-card",{attrs:{flat:""}},[i("v-card-title",[t._v(" Other installation methods ")])],1),i("v-card",{staticClass:"my-3",attrs:{width:"100%","max-width":"500px",dark:"",color:"green"}},[i("v-card-title",[t._v(" Chrome for Android "),i("v-spacer"),i("div",[i("v-icon",{attrs:{large:""}},[t._v(t._s(t.iconConfig.android))])],1)],1),i("v-card-text",[t._v(" Click on the vertical dots "),i("v-icon",{attrs:{dense:""}},[t._v(t._s(t.iconConfig.verticaldots))]),t._v(" in the top right corner. From the dropdown menu, select the 'Add to Home screen' option. "),i("br"),i("br"),i("span",{staticClass:"white--text font-weight-black"},[t._v("This is the recommended option as it integrates well with the Android platform.")])],1)],1),i("v-card",{staticClass:"my-3",attrs:{width:"100%","max-width":"500px",dark:"",color:"blue"}},[i("v-card-title",[t._v(" Chrome Desktop "),i("v-spacer"),i("div",[i("v-icon",{attrs:{large:""}},[t._v(t._s(t.iconConfig.chrome))])],1)],1),i("v-card-text",[t._v(" Click on the circled plus "),i("v-icon",{attrs:{dense:""}},[t._v(t._s(t.iconConfig.androidpwainstall))]),t._v(" on the right side of your address bar. "),i("br"),i("br"),t._v(" Alternatively, click on the vertical dots "),i("v-icon",{attrs:{dense:""}},[t._v(t._s(t.iconConfig.verticaldots))]),t._v(" in the top right corner. From the dropdown menu, select the 'Install Appreciation Between Colleagues' option. "),i("br"),i("br"),t._v(" The app can be found on the "),i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("span",t._g({staticClass:"apps-tooltip"},n),[t._v("Chrome Apps "),i("v-icon",{attrs:{dense:""}},[t._v(t._s(t.iconConfig.apps))])],1)]}}])},[i("span",[t._v('Navigate to "chrome://apps/" in the address bar')])]),t._v(" page. Alternatively, search for the application through the Windows Search function. ")],1)],1),i("v-card",{staticClass:"my-3",attrs:{width:"100%","max-width":"500px",dark:"",color:"deep-orange"}},[i("v-card-title",[t._v(" Firefox for Android "),i("v-spacer"),i("div",[i("v-icon",{attrs:{large:""}},[t._v(t._s(t.iconConfig.firefox))])],1)],1),i("v-card-text",[t._v(" Click on the house with a plus "),i("v-icon",{attrs:{dense:""}},[t._v(t._s(t.iconConfig.firefoxhome))]),t._v(" on the right side of your address bar. If the application has been installed natively already, for example through Chrome, an Android "),i("v-icon",{attrs:{dense:""}},[t._v(t._s(t.iconConfig.android))]),t._v(" icon should be visible. This will launch the already installed app. ")],1)],1),i("v-card",{staticClass:"my-3",attrs:{width:"100%","max-width":"500px",dark:"",color:"light-blue"}},[i("v-card-title",[t._v(" Safari for iOS "),i("v-spacer"),i("div",[i("v-icon",{attrs:{large:""}},[t._v(t._s(t.iconConfig.safari))])],1)],1),i("v-card-text",[t._v(" Click on the Share icon in the middle of the bottom bar. Select the 'Add to Home Screen' option and press the Add button in the top right. ")])],1),i("v-card",{staticClass:"my-3",attrs:{width:"100%","max-width":"500px"}},[i("v-card-title",[t._v(" No installation "),i("v-spacer"),i("div",[i("v-icon",{attrs:{large:""}},[t._v(t._s(t.iconConfig.noinstall))])],1)],1),i("v-card-text",[t._v(" It is possible to use the application in the browser if you cannot - or do not want to - install the application. You can always go to the settings and start the installation from there, or manually install it through one of the methods described above. ")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"grey",text:""},on:{click:t.noInstall}},[t._v("Continue in the browser")])],1)],1)],1)},a=[],o=(i("ac1f"),i("5319"),i("2b0e")),s=i("7458"),r=i("314a"),c=o["a"].extend({name:"Install",data:function(){return{loading:!1,disabled:!1,errorMessage:"",successMessage:"",iconConfig:r["a"]}},computed:{installEvent:function(){return s["a"].installEvent}},methods:{promptInstall:function(){var t=this,e=s["a"].getInstallEvent;e?(this.loading=!0,e.prompt(),e.userChoice.then((function(e){t.loading=!1,"accepted"!==e.outcome?(t.successMessage="",t.errorMessage="You have declined the installation prompt"):(t.errorMessage="",t.successMessage="Application is being installed! Open it from your homescreen, app drawer, or notification area after the installation.",t.$router.replace({name:"Setup"}))}))):(this.disabled=!0,this.successMessage="",this.errorMessage="Something went wrong. Is the app already installed? If that is not the case, then you have to manually install the application. See the options below.")},noInstall:function(){window.localStorage.setItem("noInstall","true"),this.$router.replace({name:"Setup"})}}}),h=c,l=(i("61ed"),i("2877")),d=i("6544"),u=i.n(d),v=i("8336"),f=i("b0af"),p=i("99d9"),g=i("a523"),m=i("132d"),b=i("0789"),w=i("2fa4"),y=(i("a9e3"),i("ade3")),A=(i("9734"),i("4ad4")),x=i("a9ad"),C=i("16b7"),O=i("b848"),_=i("75eb"),T=(i("d3b7"),i("5530")),k=i("fe6c"),N=i("21be"),I=i("58df"),D=i("80d2"),E=Object(I["a"])(N["a"],k["a"],A["a"]),S=E.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,openOnClick:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,n=Math.max(t.width,e.width),a=0;if(a+=this.left?i-(n-t.width):i,this.offsetX){var o=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));a+=this.left?-o:t.width}return this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),a},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!==typeof window},methods:{absolutePosition:function(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return Object(D["f"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return Object(D["f"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),i=this.pageYOffset+e,n=this.dimensions.activator,a=this.dimensions.content.height,o=t+a,s=i<o;return s&&this.offsetOverflow&&n.top>a?t=this.pageYOffset+(n.top-a):s&&!this.allowOverflow?t=i-a-12:t<this.pageYOffset&&!this.allowOverflow&&(t=this.pageYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){var t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function(){},genActivatorListeners:function(){var t=this,e=A["a"].options.methods.genActivatorListeners.call(this),i=e.click;return e.click=function(e){t.openOnClick&&i&&i(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY},e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek:function(t){var e=this;requestAnimationFrame((function(){var i=e.$refs.content;i&&"none"===i.style.display?(i.style.display="inline-block",t(),i.style.display="none"):t()}))},startTransition:function(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},updateDimensions:function(){var t=this;this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={activator:Object(T["a"])({},this.dimensions.activator),content:Object(T["a"])({},this.dimensions.content)};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var i=this.getActivator();if(!i)return;e.activator=this.measure(i),e.activator.offsetLeft=i.offsetLeft,!1!==this.attach?e.activator.offsetTop=i.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){t.$refs.content&&(e.content=t.measure(t.$refs.content)),t.dimensions=e}))}}}),j=i("f2e7"),$=i("d9bd"),M=Object(I["a"])(x["a"],C["a"],O["a"],_["a"],S,j["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!this.bottom&&!this.left&&!this.top&&!this.right,a=!1!==this.attach?e.offsetLeft:e.left,o=0;return this.top||this.bottom||n?o=a+e.width/2-i.width/2:(this.left||this.right)&&(o=a+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(o,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!1!==this.attach?e.offsetTop:e.top,a=0;return this.top||this.bottom?a=n+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(a=n+e.height/2-i.height/2),this.nudgeTop&&(a-=parseInt(this.nudgeTop)),this.nudgeBottom&&(a+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(a+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(D["f"])(this.maxWidth),minWidth:Object(D["f"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(D["l"])(this,"activator",!0)&&Object($["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=A["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===D["p"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(y["a"])(t,this.contentClass,!0),Object(y["a"])(t,"menuable__content__active",this.isActive),Object(y["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}}),L=Object(l["a"])(h,n,a,!1,null,"38589e41",null);e["default"]=L.exports;u()(L,{VBtn:v["a"],VCard:f["a"],VCardActions:p["a"],VCardText:p["c"],VCardTitle:p["d"],VContainer:g["a"],VIcon:m["a"],VSlideYTransition:b["e"],VSpacer:w["a"],VTooltip:M})},b848:function(t,e,i){"use strict";var n=i("2909"),a=i("58df");function o(t){for(var e=[],i=0;i<t.length;i++){var a=t[i];a.isActive&&a.isDependent?e.push(a):e.push.apply(e,Object(n["a"])(o(a.$children)))}return e}e["a"]=Object(a["a"])().extend({name:"dependent",data:function(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function(t){if(!t)for(var e=this.getOpenDependents(),i=0;i<e.length;i++)e[i].isActive=!1}},methods:{getOpenDependents:function(){return this.closeDependents?o(this.$children):[]},getOpenDependentElements:function(){for(var t=[],e=this.getOpenDependents(),i=0;i<e.length;i++)t.push.apply(t,Object(n["a"])(e[i].getClickableDependentElements()));return t},getClickableDependentElements:function(){var t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push.apply(t,Object(n["a"])(this.getOpenDependentElements())),t}}})},e74b:function(t,e,i){}}]);
//# sourceMappingURL=chunk-b9bfcb90.0014f87c.js.map