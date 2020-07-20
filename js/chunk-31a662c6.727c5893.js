(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31a662c6"],{"7e58":function(t,e,a){},"81d5":function(t,e,a){"use strict";var s=a("7b0b"),r=a("23cb"),n=a("50c4");t.exports=function(t){var e=s(this),a=n(e.length),i=arguments.length,o=r(i>1?arguments[1]:void 0,a),l=i>2?arguments[2]:void 0,c=void 0===l?a:r(l,a);while(c>o)e[o++]=t;return e}},"8adc":function(t,e,a){},"94ef":function(t,e,a){"use strict";var s=a("d7d5"),r=a.n(s);r.a},a609:function(t,e,a){"use strict";var s=a("5530"),r=(a("7e58"),a("604c")),n=r["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return r["a"].options.computed.classes.call(this)}},methods:{genData:r["a"].options.methods.genData}}),i=a("a9ad"),o=a("58df");e["a"]=Object(o["a"])(n,i["a"]).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return Object(s["a"])({},n.options.computed.classes.call(this),{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var t=this.setTextColor(this.color,Object(s["a"])({},n.options.methods.genData.call(this)));return this.group?t:this.setBackgroundColor(this.backgroundColor,t)}}})},a9b3:function(t,e,a){"use strict";a.r(e);var s,r,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"mx-auto pa-2",attrs:{flat:"","max-width":"500"}},[a("v-card-title",{staticClass:"pa-0"},[t._v("Token Balance")]),a("v-row",[a("v-col",{staticClass:"pa-1"},[a("v-card",{staticClass:"pa-2 text-center",attrs:{outlined:""}},[a("v-icon",{attrs:{"x-large":"",color:"blue"}},[t._v(t._s(t.iconConfig.rewardToken)+" ")]),a("br"),a("span",{staticClass:"display-3 py-2"},[t._v(t._s(t.rewardTokenCount))]),a("br"),a("span",[t._v("Reward Tokens")])],1)],1),a("v-col",{staticClass:"pa-1"},[a("v-card",{staticClass:"pa-2 text-center",attrs:{outlined:""}},[a("v-icon",{attrs:{"x-large":"",color:"red"}},[t._v(t._s(t.iconConfig.awesomeToken))]),a("br"),a("span",{staticClass:"display-3 py-2"},[t._v(t._s(t.awesomeTokenCount))]),a("br"),a("span",[t._v("Awesome Tokens")])],1)],1)],1),a("v-row",{staticClass:"mb-1 mt-n2"},[a("v-col",{staticClass:"px-1"},[a("v-card",{staticClass:"pa-2 text-center",attrs:{outlined:""}},[a("v-row",[a("v-col",{staticClass:"py-0"},[a("span",{staticClass:"headline"},[t._v(t._s(t.currentStreak))]),a("br"),a("div",{staticClass:"overline "},[t._v(" Current Streak")])]),a("v-col",{staticClass:"py-0"},[a("span",{staticClass:"headline"},[t._v(t._s(t.currentBonus))]),a("br"),a("div",{staticClass:"overline "},[t._v(" Next Bonus")])])],1),t.canStreak<0?a("v-chip",{staticClass:"mt-1",attrs:{color:"yellow darken-4",dark:"",disabled:""}},[a("v-avatar",{attrs:{left:""}},[a("v-icon",[t._v(t._s(t.iconConfig.streak))])],1),t._v(" "+t._s(t.timeRemaining)+" ")],1):a("v-chip",{staticClass:"mt-1",attrs:{color:"yellow darken-4",dark:""}},[a("v-avatar",{attrs:{left:""}},[a("v-icon",[t._v(t._s(t.iconConfig.streak))])],1),t._v(" Bonus available ")],1)],1)],1)],1),a("v-card-title",{staticClass:"pa-0"},[t._v("Badges")]),a("v-row",{staticClass:"mb-2"},[a("v-col",{staticClass:"pa-1"},[a("v-card",{staticClass:"text-center py-2",attrs:{flat:""},on:{click:function(e){t.rewardDialog=!0}}},[a("v-progress-circular",{staticClass:"overline",attrs:{size:50,value:100*(t.rewardBadge.current+t.rewardBadge.level*t.rewardBadge.levelUp)/(t.rewardBadge.levelMax*t.rewardBadge.levelUp),color:t.rewardBadge.color,rotate:270}},[a("v-icon",{attrs:{large:"",color:t.avatarColor(t.rewardBadge)}},[t._v(t._s(t.iconConfig.rewardBadge))])],1),a("br"),a("v-list-item-subtitle",{staticClass:"caption px-1 pt-2"},[t._v("Reward"),a("br"),t._v("Badge")])],1)],1),a("v-col",{staticClass:"pa-1"},[a("v-card",{staticClass:"text-center py-2",attrs:{flat:""},on:{click:function(e){t.awesomeDialog=!0}}},[a("v-progress-circular",{staticClass:"overline",attrs:{size:50,value:100*(t.awesomeBadge.current+t.awesomeBadge.level*t.awesomeBadge.levelUp)/(t.awesomeBadge.levelMax*t.awesomeBadge.levelUp),color:t.awesomeBadge.color,rotate:270}},[a("v-icon",{attrs:{color:t.avatarColor(t.awesomeBadge)}},[t._v(t._s(t.iconConfig.awesomeBadge))])],1),a("v-list-item-subtitle",{staticClass:"caption px-1 pt-2"},[t._v("Awesome"),a("br"),t._v("Badge")])],1)],1),a("v-col",{staticClass:"pa-1"},[a("v-card",{staticClass:"text-center py-2",attrs:{flat:""},on:{click:function(e){t.streakDialog=!0}}},[a("v-progress-circular",{staticClass:"overline",attrs:{size:50,value:100*t.streakBadge.level/t.streakBadge.levelMax,color:t.streakBadge.color,rotate:270}},[a("v-icon",{attrs:{color:t.avatarColor(t.streakBadge)}},[t._v(t._s(t.iconConfig.streakBadge))])],1),a("v-list-item-subtitle",{staticClass:"caption px-1 pt-2"},[t._v("Streak"),a("br"),t._v("Badge")])],1)],1),a("v-col",{staticClass:"pa-1"},[a("v-card",{staticClass:"text-center py-2",attrs:{flat:""},on:{click:function(e){t.loginDialog=!0}}},[a("v-progress-circular",{staticClass:"overline",attrs:{size:50,value:100*t.loginBadge.level/t.loginBadge.levelMax,color:t.loginBadge.color,rotate:270}},[a("v-icon",{attrs:{color:t.avatarColor(t.loginBadge)}},[t._v(t._s(t.iconConfig.loginBadge))])],1),a("v-list-item-subtitle",{staticClass:"caption px-1 pt-2"},[t._v("Login"),a("br"),t._v("Badge")])],1)],1)],1),a("v-card-title",{staticClass:"pa-0"},[t._v("Token Rules")]),a("v-row",{staticClass:"mb-2"},[a("v-col",{staticClass:"pa-1"},[a("v-card",{staticClass:"pa-2 text-left",attrs:{flat:""}},[a("v-icon",{attrs:{color:"blue"}},[t._v(t._s(t.iconConfig.rewardToken))]),a("b",[t._v(" "+t._s(t.tokenConfig.REWARD_TOKENS_PER_CARD))]),t._v(" Reward Token"),t.tokenConfig.MAX_REWARD_WEEK_TOTAL>1?a("span",[t._v("s")]):t._e(),t._v(" can be earned each time from sending Appreciation Cards "),t.tokenConfig.MAX_REWARD_WEEK_TOTAL<0?a("span",[a("b",[t._v("unlimited")])]):a("span",[a("b",[t._v("up to "+t._s(t.tokenConfig.MAX_REWARD_WEEK_TOTAL))])]),t._v(" times per week and "),t.tokenConfig.MAX_REWARD_WEEK_PERSON<0?a("span",[a("b",[t._v("unlimited")])]):a("span",[a("b",[t._v("up to "+t._s(t.tokenConfig.MAX_REWARD_WEEK_PERSON))])]),t._v(" times per person per week. "),a("br"),a("br"),a("v-icon",{attrs:{color:"red"}},[t._v(t._s(t.iconConfig.awesomeToken))]),a("b",[t._v(" "+t._s(t.tokenConfig.AWESOME_TOKENS_PER_CARD))]),t._v(" Awesome Token"),t.tokenConfig.MAX_REWARD_WEEK_TOTAL>1?a("span",[t._v("s")]):t._e(),t._v(" can be earned each time from receiving Appreciation Cards "),t.tokenConfig.MAX_AWESOME_WEEK_TOTAL<0?a("span",[a("b",[t._v("unlimited")])]):a("span",[a("b",[t._v("up to "+t._s(t.tokenConfig.MAX_AWESOME_WEEK_TOTAL))])]),t._v(" times per week and "),t.tokenConfig.MAX_AWESOME_WEEK_PERSON<0?a("span",[a("b",[t._v("unlimited")])]):a("span",[a("b",[t._v("up to "+t._s(t.tokenConfig.MAX_AWESOME_WEEK_PERSON))])]),t._v(" times per person per week. "),a("br"),a("br"),t._v(" Bonus Reward Tokens can be earned by streaking. Your streak will be increased for every first Appreciation Card that you send each day. The streak will be reset if you do not send any appreciation for "),t.tokenConfig.STREAK_RESET_DAYS<0?a("span",[a("b",[t._v("unlimited")])]):a("span",[a("b",[t._v(t._s(t.tokenConfig.STREAK_RESET_DAYS))])]),t._v(" days. ")],1)],1)],1),a("v-card-title",{staticClass:"pa-0"},[t._v("Historic Gains")]),a("v-row",[a("v-col",[a("v-card",{staticClass:"text-center",attrs:{outlined:"",color:"blue",dark:""}},[a("v-card-actions",[a("v-icon",{attrs:{"x-large":""}},[t._v(t._s(t.iconConfig.rewardToken))]),a("v-spacer"),a("v-btn-toggle",{attrs:{mandatory:"",dense:""},model:{value:t.toggleReward,callback:function(e){t.toggleReward=e},expression:"toggleReward"}},[a("v-btn",{attrs:{text:""}},[t._v(" Week ")]),a("v-btn",{attrs:{text:""}},[t._v(" Year ")])],1)],1),a("v-card-text",{staticClass:"relative-text pt-2"},[a("v-sparkline",{staticClass:"pa-1",attrs:{"line-width":"3",padding:"8",smooth:"6",labels:t.rewardData[t.toggleReward].labels,value:t.rewardData[t.toggleReward].values,"label-size":"8",color:"white","auto-draw":""}}),t.rewardData[t.toggleReward].maxValue?a("span",{staticClass:"y-axis-top-left"},[t._v(t._s(t.rewardData[t.toggleReward].maxValue))]):t._e(),t.rewardData[t.toggleReward].maxValue?a("span",{staticClass:"y-axis-top-right"},[t._v(t._s(t.rewardData[t.toggleReward].maxValue))]):t._e()],1),a("v-card-text",{staticClass:"pt-0"},[a("div",{staticClass:"title"},[t._v(t._s(t.rewardData[t.toggleReward].title))])])],1)],1)],1),a("v-row",[a("v-col",[a("v-card",{staticClass:"text-center",attrs:{outlined:"",color:"red",dark:""}},[a("v-card-actions",[a("v-icon",{attrs:{"x-large":""}},[t._v(t._s(t.iconConfig.awesomeToken))]),a("v-spacer"),a("v-btn-toggle",{attrs:{mandatory:"",dense:""},model:{value:t.toggleAwesome,callback:function(e){t.toggleAwesome=e},expression:"toggleAwesome"}},[a("v-btn",{attrs:{text:""}},[t._v(" Week ")]),a("v-btn",{attrs:{text:""}},[t._v(" Year ")])],1)],1),a("v-card-text",{staticClass:"relative-text pt-2"},[a("v-sparkline",{staticClass:"pa-1",attrs:{"line-width":"3",padding:"8",smooth:"6",labels:t.awesomeData[t.toggleAwesome].labels,value:t.awesomeData[t.toggleAwesome].values,"label-size":"8",color:"white","auto-draw":""}}),t.awesomeData[t.toggleAwesome].maxValue?a("div",{staticClass:"y-axis-top-left"},[t._v(t._s(t.awesomeData[t.toggleAwesome].maxValue))]):t._e(),t.awesomeData[t.toggleAwesome].maxValue?a("div",{staticClass:"y-axis-top-right"},[t._v(t._s(t.awesomeData[t.toggleAwesome].maxValue))]):t._e()],1),a("v-card-text",{staticClass:"pt-0"},[a("div",{staticClass:"title"},[t._v(t._s(t.awesomeData[t.toggleAwesome].title))])])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.rewardDialog,callback:function(e){t.rewardDialog=e},expression:"rewardDialog"}},[a("v-card",{staticClass:"text-center pa-2"},[a("v-icon",{staticClass:"mt-3",attrs:{"x-large":"",color:t.rewardBadge.color}},[t._v(t._s(t.iconConfig.rewardBadge))]),a("v-card-text",{staticClass:"headline pb-1 font-weight-bold"},[t._v("Reward Badge")]),a("v-card-text",{staticClass:"pb-1"},[t._v("Earn more Reward Tokens by receiving Appreciation Cards.")]),a("v-card",{staticClass:"ma-2"},[a("v-card-subtitle",{staticClass:"overline pb-0 text-left"},[t._v("Current level:")]),a("v-card-subtitle",{staticClass:"pb-0 pt-1 text-left"},[a("span",{class:t.rewardBadge.color.split(" ")[0]+"--text"},[t._v(t._s(t.rewardBadge.level))]),t._v("/"+t._s(t.rewardBadge.levelMax))]),a("v-card-text",{staticClass:"pb-2"},[t.rewardBadge.level<t.rewardBadge.levelMax?a("v-progress-linear",{attrs:{value:100*t.rewardBadge.level/t.rewardBadge.levelMax,rounded:"",color:t.rewardBadge.color,striped:"",height:16}}):t._e()],1),a("v-card-subtitle",{staticClass:"overline pb-0 text-left"},[t._v("Next level:")]),a("v-card-subtitle",{staticClass:"pb-0 pt-1 text-left"},[a("span",{class:t.rewardBadge.color.split(" ")[0]+"--text"},[t._v(t._s(t.rewardBadge.current))]),t._v("/"+t._s(t.rewardBadge.levelUp)+" Reward Tokens")]),a("v-card-text",[t.rewardBadge.level<t.rewardBadge.levelMax?a("v-progress-linear",{attrs:{value:100*t.rewardBadge.current/t.rewardBadge.levelUp,rounded:"",color:t.rewardBadge.color}}):t._e()],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.awesomeDialog,callback:function(e){t.awesomeDialog=e},expression:"awesomeDialog"}},[a("v-card",{staticClass:"text-center pa-2"},[a("v-icon",{staticClass:"mt-3",attrs:{"x-large":"",color:t.awesomeBadge.color}},[t._v(t._s(t.iconConfig.awesomeBadge))]),a("v-card-text",{staticClass:"headline pb-1 font-weight-bold"},[t._v("Awesome Badge")]),a("v-card-text",{staticClass:"pb-1"},[t._v("Earn more Awesome Tokens by receiving Appreciation Cards.")]),a("v-card",{staticClass:"ma-2"},[a("v-card-subtitle",{staticClass:"overline pb-0 text-left"},[t._v("Current level:")]),a("v-card-subtitle",{staticClass:"pb-0 pt-1 text-left"},[a("span",{class:t.awesomeBadge.color.split(" ")[0]+"--text"},[t._v(t._s(t.awesomeBadge.level))]),t._v("/"+t._s(t.awesomeBadge.levelMax))]),a("v-card-text",{staticClass:"pb-2"},[a("v-progress-linear",{attrs:{value:100*t.awesomeBadge.level/t.awesomeBadge.levelMax,rounded:"",color:t.awesomeBadge.color,striped:"",height:16}})],1),a("v-card-subtitle",{staticClass:"overline pb-0 text-left"},[t._v("Next level:")]),a("v-card-subtitle",{staticClass:"pb-0 pt-1 text-left"},[a("span",{class:t.awesomeBadge.color.split(" ")[0]+"--text"},[t._v(t._s(t.awesomeBadge.current))]),t._v("/"+t._s(t.awesomeBadge.levelUp)+" Awesome Tokens")]),a("v-card-text",[a("v-progress-linear",{attrs:{value:100*t.awesomeBadge.current/t.awesomeBadge.levelUp,rounded:"",color:t.awesomeBadge.color}})],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.streakDialog,callback:function(e){t.streakDialog=e},expression:"streakDialog"}},[a("v-card",{staticClass:"text-center pa-2"},[a("v-icon",{staticClass:"mt-3",attrs:{"x-large":"",color:t.streakBadge.color}},[t._v(t._s(t.iconConfig.streakBadge))]),a("v-card-text",{staticClass:"headline pb-1 font-weight-bold"},[t._v("Streak Badge")]),a("v-card-text",{staticClass:"pb-1"},[t._v("Obtained by sending consecutive Appreciation Cards.")]),a("v-card",{staticClass:"ma-2"},[a("v-card-subtitle",{staticClass:"overline pb-0 text-left"},[t._v("Current level:")]),a("v-card-subtitle",{staticClass:"pb-0 pt-1 text-left"},[a("span",{class:t.streakBadge.color.split(" ")[0]+"--text"},[t._v(t._s(t.streakBadge.level))]),t._v("/"+t._s(t.streakBadge.levelMax))]),a("v-card-text",{staticClass:"pb-2"},[a("v-progress-linear",{attrs:{value:100*t.streakBadge.level/t.streakBadge.levelMax,rounded:"",color:t.streakBadge.color,striped:"",height:16}})],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.loginDialog,callback:function(e){t.loginDialog=e},expression:"loginDialog"}},[a("v-card",{staticClass:"text-center pa-2"},[a("v-icon",{staticClass:"mt-3",attrs:{"x-large":"",color:t.loginBadge.color}},[t._v(t._s(t.iconConfig.loginBadge))]),a("v-card-text",{staticClass:"headline pb-1 font-weight-bold"},[t._v("Login Badge")]),a("v-card-text",{staticClass:"pb-1"},[t._v("Obtained by opening the app on consecutive days.")]),a("v-card",{staticClass:"ma-2"},[a("v-card-subtitle",{staticClass:"overline pb-0 text-left"},[t._v("Current level:")]),a("v-card-subtitle",{staticClass:"pb-0 pt-1 text-left"},[a("span",{class:t.loginBadge.color.split(" ")[0]+"--text"},[t._v(t._s(t.loginBadge.level))]),t._v("/"+t._s(t.loginBadge.levelMax))]),a("v-card-text",{staticClass:"pb-2"},[a("v-progress-linear",{attrs:{value:100*t.loginBadge.level/t.loginBadge.levelMax,rounded:"",color:t.loginBadge.color,striped:"",height:16}})],1)],1)],1)],1)],1)],1)},i=[],o=(a("99af"),a("4de4"),a("d81d"),a("13d5"),a("fb6a"),a("2b0e")),l=a("314a"),c=a("fe0f"),d=a("7fca");(function(t){t[t["SUN"]=0]="SUN",t[t["MON"]=1]="MON",t[t["TUE"]=2]="TUE",t[t["WED"]=3]="WED",t[t["THU"]=4]="THU",t[t["FRI"]=5]="FRI",t[t["SAT"]=6]="SAT"})(s||(s={})),function(t){t[t["JAN"]=0]="JAN",t[t["FEB"]=1]="FEB",t[t["MAR"]=2]="MAR",t[t["APR"]=3]="APR",t[t["MAY"]=4]="MAY",t[t["JUN"]=5]="JUN",t[t["JUL"]=6]="JUL",t[t["AUG"]=7]="AUG",t[t["SEP"]=8]="SEP",t[t["OKT"]=9]="OKT",t[t["NOV"]=10]="NOV",t[t["DEC"]=11]="DEC"}(r||(r={}));var u=o["a"].extend({name:"Tokens",data:function(){return{iconConfig:l["a"],toggleReward:0,toggleAwesome:0,timeRemaining:"",rewardDialog:!1,awesomeDialog:!1,streakDialog:!1,loginDialog:!1}},computed:{tokenConfig:function(){return c["a"].tokenConfig},rewardTokenCount:function(){return c["a"].rewardTokenCount},awesomeTokenCount:function(){return c["a"].awesomeTokenCount},rewardBadge:function(){return c["a"].rewardBadge},awesomeBadge:function(){return c["a"].awesomeBadge},streakBadge:function(){return c["a"].streakBadge},loginBadge:function(){return c["a"].loginBadge},canStreak:function(){return c["a"].canStreak},currentStreak:function(){return c["a"].currentStreak},currentBonus:function(){return Object(d["c"])(this.currentStreak)},allACs:function(){return c["a"].allACs},lastWeekRewardData:function(){for(var t=864e5,e=Date.now(),a=[],r=[],n=this.allACs.filter((function(a){return a.dateSent>=e-7*t&&a.token===d["b"].REWARD})),i=function(i){var o=new Date(e-i*t).getDay(),l=new Date(e-i*t).getDate(),d=n.filter((function(t){return new Date(t.dateSent).getDate()===l}));a[6-i]=d.length*c["a"].tokenConfig.REWARD_TOKENS_PER_CARD+d.map((function(t){return t.bonus})).reduce((function(t,e){return t+e}),0),r[6-i]=s[o]},o=0;o<7;o++)i(o);return{values:a,labels:r,maxValue:a.reduce((function(t,e){return Math.max(t,e)})),title:"Reward Tokens By Weekday"}},lastWeekAwesomeData:function(){for(var t=864e5,e=Date.now(),a=[],r=[],n=this.allACs.filter((function(a){return a.dateSent>=e-7*t&&a.token===d["b"].AWESOME})),i=function(i){var o=new Date(e-i*t).getDay(),l=new Date(e-i*t).getDate(),d=n.filter((function(t){return new Date(t.dateSent).getDate()===l}));a[6-i]=d.length*c["a"].tokenConfig.AWESOME_TOKENS_PER_CARD+d.map((function(t){return t.bonus})).reduce((function(t,e){return t+e}),0),r[6-i]=s[o]},o=0;o<7;o++)i(o);return{values:a,labels:r,maxValue:a.reduce((function(t,e){return Math.max(t,e)})),title:"Awesome Tokens By Weekday"}},lastYearRewardData:function(){for(var t=this,e=Date.now(),a=[],s=[],n=new Date(e).getMonth()+12,i=new Date(e).getFullYear(),o=function(e){var o=(n-e)%12,l=n-e<12?i-1:i,u=t.allACs.filter((function(t){return new Date(t.dateSent).getMonth()===o&&new Date(t.dateSent).getFullYear()===l&&t.token===d["b"].REWARD}));a[11-e]=u.length*c["a"].tokenConfig.REWARD_TOKENS_PER_CARD+u.map((function(t){return t.bonus})).reduce((function(t,e){return t+e}),0),s[11-e]=r[o]},l=0;l<12;l++)o(l);return{values:a,labels:s,maxValue:a.reduce((function(t,e){return Math.max(t,e)})),title:"Reward Tokens By Month"}},lastYearAwesomeData:function(){for(var t=this,e=Date.now(),a=[],s=[],n=new Date(e).getMonth()+12,i=new Date(e).getFullYear(),o=function(e){var o=(n-e)%12,l=n-e<12?i-1:i,u=t.allACs.filter((function(t){return new Date(t.dateSent).getMonth()===o&&new Date(t.dateSent).getFullYear()===l&&t.token===d["b"].AWESOME}));a[11-e]=u.length*c["a"].tokenConfig.AWESOME_TOKENS_PER_CARD+u.map((function(t){return t.bonus})).reduce((function(t,e){return t+e}),0),s[11-e]=r[o]},l=0;l<12;l++)o(l);return{values:a,labels:s,maxValue:a.reduce((function(t,e){return Math.max(t,e)})),title:"Awesome Tokens By Month"}},rewardData:function(){return[this.lastWeekRewardData,this.lastYearRewardData]},awesomeData:function(){return[this.lastWeekAwesomeData,this.lastYearAwesomeData]}},methods:{avatarColor:function(t){return t.level>=t.levelMax?t.color:""},timeRemaingString:function(){if(!this.canStreak)return"";var t=new Date;return this.timeRemaining="Next bonus in ".concat(24-t.getHours(),":").concat(("0"+(60-t.getMinutes())).slice(-2),":").concat(("0"+(60-t.getSeconds())).slice(-2))}},created:function(){var t=this;this.timeRemaingString(),setInterval((function(){t.timeRemaingString()}),1e3)}}),g=u,v=(a("94ef"),a("2877")),h=a("6544"),p=a.n(h),f=a("8212"),m=a("8336"),b=a("a609"),_=a("b0af"),w=a("99d9"),C=a("cc20"),x=a("62ad"),k=a("169a"),B=a("132d"),y=a("5d23"),D=a("490a"),E=a("8e36"),A=a("0fd9"),S=a("2fa4"),R=(a("cb29"),a("caad"),a("a9e3"),a("d3b7"),a("25f0"),a("5530")),M=a("53ca"),T=a("a9ad"),W=a("58df"),O=a("2909");function V(t,e){var a=e.minX,s=e.maxX,r=e.minY,n=e.maxY,i=t.length,o=Math.max.apply(Math,Object(O["a"])(t)),l=Math.min.apply(Math,Object(O["a"])(t)),c=(s-a)/(i-1),d=(n-r)/(o-l||1);return t.map((function(t,e){return{x:a+e*c,y:n-(t-l)*d+1e-5*+(e===i-1)-1e-5*+(0===e),value:t}}))}function L(t,e){var a=e.minX,s=e.maxX,r=e.minY,n=e.maxY,i=t.length,o=Math.max.apply(Math,Object(O["a"])(t)),l=Math.min.apply(Math,Object(O["a"])(t));l>0&&(l=0),o<0&&(o=0);var c=s/i,d=(n-r)/(o-l),u=n-Math.abs(l*d);return t.map((function(t,e){var s=Math.abs(d*t);return{x:a+e*c,y:u-s+ +(t<0)*s,height:s,value:t}}))}a("a15b");function N(t){return parseInt(t,10)}function $(t,e,a){return N(t.x+a.x)===N(2*e.x)&&N(t.y+a.y)===N(2*e.y)}function Y(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function P(t,e,a){var s={x:t.x-e.x,y:t.y-e.y},r=Math.sqrt(s.x*s.x+s.y*s.y),n={x:s.x/r,y:s.y/r};return{x:e.x+n.x*a,y:e.y+n.y*a}}function z(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:75,r=t.shift(),n=t[t.length-1];return(a?"M".concat(r.x," ").concat(s-r.x+2," L").concat(r.x," ").concat(r.y):"M".concat(r.x," ").concat(r.y))+t.map((function(a,s){var n=t[s+1],i=t[s-1]||r,o=n&&$(n,a,i);if(!n||o)return"L".concat(a.x," ").concat(a.y);var l=Math.min(Y(i,a),Y(n,a)),c=l/2<e,d=c?l/2:e,u=P(i,a,d),g=P(n,a,d);return"L".concat(u.x," ").concat(u.y,"S").concat(a.x," ").concat(a.y," ").concat(g.x," ").concat(g.y)})).join("")+(a?"L".concat(n.x," ").concat(s-r.x+2," Z"):"")}var j=Object(W["a"])(T["a"]).extend({name:"VSparkline",inheritAttrs:!1,props:{autoDraw:Boolean,autoDrawDuration:{type:Number,default:2e3},autoDrawEasing:{type:String,default:"ease"},autoLineWidth:{type:Boolean,default:!1},color:{type:String,default:"primary"},fill:{type:Boolean,default:!1},gradient:{type:Array,default:function(){return[]}},gradientDirection:{type:String,validator:function(t){return["top","bottom","left","right"].includes(t)},default:"top"},height:{type:[String,Number],default:75},labels:{type:Array,default:function(){return[]}},labelSize:{type:[Number,String],default:7},lineWidth:{type:[String,Number],default:4},padding:{type:[String,Number],default:8},showLabels:Boolean,smooth:{type:[Boolean,Number,String],default:!1},type:{type:String,default:"trend",validator:function(t){return["trend","bar"].includes(t)}},value:{type:Array,default:function(){return[]}},width:{type:[Number,String],default:300}},data:function(){return{lastLength:0}},computed:{parsedPadding:function(){return Number(this.padding)},parsedWidth:function(){return Number(this.width)},parsedHeight:function(){return parseInt(this.height,10)},parsedLabelSize:function(){return parseInt(this.labelSize,10)||7},totalHeight:function(){var t=this.parsedHeight;return this.hasLabels&&(t+=1.5*parseInt(this.labelSize,10)),t},totalWidth:function(){var t=this.parsedWidth;return"bar"===this.type&&(t=Math.max(this.value.length*this._lineWidth,t)),t},totalValues:function(){return this.value.length},_lineWidth:function(){if(this.autoLineWidth&&"trend"!==this.type){var t=this.parsedPadding*(this.totalValues+1);return(this.parsedWidth-t)/this.totalValues}return parseFloat(this.lineWidth)||4},boundary:function(){if("bar"===this.type)return{minX:0,maxX:this.totalWidth,minY:0,maxY:this.parsedHeight};var t=this.parsedPadding;return{minX:t,maxX:this.totalWidth-t,minY:t,maxY:this.parsedHeight-t}},hasLabels:function(){return Boolean(this.showLabels||this.labels.length>0||this.$scopedSlots.label)},parsedLabels:function(){for(var t=[],e=this._values,a=e.length,s=0;t.length<a;s++){var r=e[s],n=this.labels[s];n||(n="object"===Object(M["a"])(r)?r.value:r),t.push({x:r.x,value:String(n)})}return t},normalizedValues:function(){return this.value.map((function(t){return"number"===typeof t?t:t.value}))},_values:function(){return"trend"===this.type?V(this.normalizedValues,this.boundary):L(this.normalizedValues,this.boundary)},textY:function(){var t=this.parsedHeight;return"trend"===this.type&&(t-=4),t},_radius:function(){return!0===this.smooth?8:Number(this.smooth)}},watch:{value:{immediate:!0,handler:function(){var t=this;this.$nextTick((function(){if(t.autoDraw&&"bar"!==t.type&&t.$refs.path){var e=t.$refs.path,a=e.getTotalLength();t.fill?(e.style.transformOrigin="bottom center",e.style.transition="none",e.style.transform="scaleY(0)",e.getBoundingClientRect(),e.style.transition="transform ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),e.style.transform="scaleY(1)"):(e.style.transition="none",e.style.strokeDasharray=a+" "+a,e.style.strokeDashoffset=Math.abs(a-(t.lastLength||0)).toString(),e.getBoundingClientRect(),e.style.transition="stroke-dashoffset ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),e.style.strokeDashoffset="0"),t.lastLength=a}}))}}},methods:{genGradient:function(){var t=this,e=this.gradientDirection,a=this.gradient.slice();a.length||a.push("");var s=Math.max(a.length-1,1),r=a.reverse().map((function(e,a){return t.$createElement("stop",{attrs:{offset:a/s,"stop-color":e||t.color||"currentColor"}})}));return this.$createElement("defs",[this.$createElement("linearGradient",{attrs:{id:this._uid,x1:+("left"===e),y1:+("top"===e),x2:+("right"===e),y2:+("bottom"===e)}},r)])},genG:function(t){return this.$createElement("g",{style:{fontSize:"8",textAnchor:"middle",dominantBaseline:"mathematical",fill:this.color||"currentColor"}},t)},genPath:function(){var t=V(this.normalizedValues,this.boundary);return this.$createElement("path",{attrs:{id:this._uid,d:z(t,this._radius,this.fill,this.parsedHeight),fill:this.fill?"url(#".concat(this._uid,")"):"none",stroke:this.fill?"none":"url(#".concat(this._uid,")")},ref:"path"})},genLabels:function(t){var e=this,a=this.parsedLabels.map((function(a,s){return e.$createElement("text",{attrs:{x:a.x+t+e._lineWidth/2,y:e.textY+.75*e.parsedLabelSize,"font-size":Number(e.labelSize)||7}},[e.genLabel(a,s)])}));return this.genG(a)},genLabel:function(t,e){return this.$scopedSlots.label?this.$scopedSlots.label({index:e,value:t.value}):t.value},genBars:function(){if(this.value&&!(this.totalValues<2)){var t=L(this.normalizedValues,this.boundary),e=(Math.abs(t[0].x-t[1].x)-this._lineWidth)/2;return this.$createElement("svg",{attrs:{display:"block",viewBox:"0 0 ".concat(this.totalWidth," ").concat(this.totalHeight)}},[this.genGradient(),this.genClipPath(t,e,this._lineWidth,"sparkline-bar-"+this._uid),this.hasLabels?this.genLabels(e):void 0,this.$createElement("g",{attrs:{"clip-path":"url(#sparkline-bar-".concat(this._uid,"-clip)"),fill:"url(#".concat(this._uid,")")}},[this.$createElement("rect",{attrs:{x:0,y:0,width:this.totalWidth,height:this.height}})])])}},genClipPath:function(t,e,a,s){var r=this,n="number"===typeof this.smooth?this.smooth:this.smooth?2:0;return this.$createElement("clipPath",{attrs:{id:"".concat(s,"-clip")}},t.map((function(t){return r.$createElement("rect",{attrs:{x:t.x+e,y:t.y,width:a,height:t.height,rx:n,ry:n}},[r.autoDraw?r.$createElement("animate",{attrs:{attributeName:"height",from:0,to:t.height,dur:"".concat(r.autoDrawDuration,"ms"),fill:"freeze"}}):void 0])})))},genTrend:function(){return this.$createElement("svg",this.setTextColor(this.color,{attrs:Object(R["a"])({},this.$attrs,{display:"block","stroke-width":this._lineWidth||1,viewBox:"0 0 ".concat(this.width," ").concat(this.totalHeight)})}),[this.genGradient(),this.hasLabels&&this.genLabels(-this._lineWidth/2),this.genPath()])}},render:function(t){if(!(this.totalValues<2))return"trend"===this.type?this.genTrend():this.genBars()}}),K=Object(v["a"])(g,n,i,!1,null,"9f4abea2",null);e["default"]=K.exports;p()(K,{VAvatar:f["a"],VBtn:m["a"],VBtnToggle:b["a"],VCard:_["a"],VCardActions:w["a"],VCardSubtitle:w["b"],VCardText:w["c"],VCardTitle:w["d"],VChip:C["a"],VCol:x["a"],VDialog:k["a"],VIcon:B["a"],VListItemSubtitle:y["b"],VProgressCircular:D["a"],VProgressLinear:E["a"],VRow:A["a"],VSpacer:S["a"],VSparkline:j})},cb29:function(t,e,a){var s=a("23e7"),r=a("81d5"),n=a("44d2");s({target:"Array",proto:!0},{fill:r}),n("fill")},cc20:function(t,e,a){"use strict";a("4de4"),a("4160");var s=a("3835"),r=a("5530"),n=(a("8adc"),a("58df")),i=a("0789"),o=a("9d26"),l=a("a9ad"),c=a("4e82"),d=a("7560"),u=a("f2e7"),g=a("1c87"),v=a("af2b"),h=a("d9bd");e["a"]=Object(n["a"])(l["a"],v["a"],g["a"],d["a"],Object(c["a"])("chipGroup"),Object(u["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(r["a"])({"v-chip":!0},g["a"].options.computed.classes.call(this),{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses,{},this.sizeableClasses,{},this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(g["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var a=Object(s["a"])(e,2),r=a[0],n=a[1];t.$attrs.hasOwnProperty(r)&&Object(h["a"])(r,n,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(o["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(i["b"],t)},genClose:function(){var t=this;return this.$createElement(o["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],a=this.generateRouteLink(),s=a.tag,n=a.data;n.attrs=Object(r["a"])({},n.attrs,{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:n.attrs.tabindex}),n.directives.push({name:"show",value:this.active}),n=this.setBackgroundColor(this.color,n);var i=this.textColor||this.outlined&&this.color;return t(s,this.setTextColor(i,n),e)}})},d7d5:function(t,e,a){}}]);
//# sourceMappingURL=chunk-31a662c6.727c5893.js.map