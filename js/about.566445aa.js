(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{f820:function(e,o,t){"use strict";t.r(o);var a=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("v-container",[t("v-row",[t("v-col",[t("v-alert",{staticClass:"text-center",attrs:{border:"top",color:"green lighten-2",elevation:"10"}},[e._v(" Want to hack your Switch but not sure what to do? "),t("br"),e._v("Check out the SDSetup guide: "),t("a",{attrs:{href:"https://switch.homebrew.guide"}},[e._v("https://switch.homebrew.guide")])])],1)],1),t("v-row",[t("v-col",[t("v-card",[t("v-card-title",[e._v("Fusee-Primary vs FSS0/Hekate")]),t("v-card-text",[t("b",[e._v("Boot using fusée-primary")]),t("p",[e._v(" This is the primary method of booting atmosphere supported by the developers. "),t("br"),e._v("Example1: You send Atmosphère fusée-primary payload directly to the console in RCM. "),t("br"),e._v("Example2: You send Hekate_CTR payload to the console in RCM, which boots Atmosphère using “payload=fusée-primary” functionality. "),t("br"),e._v("The scenario in example 2 is the same way of launching Atmosphère as in Example1, except it's chain-loaded by Hekate. "),t("br")]),t("b",[e._v("Using Hekate to boot fusée-secondary")]),t("p",[e._v(" Hekate can boot Atmosphère by extracting Atmosphere modules directly from fusée-secondary.bin, which can then be loaded or replaced independently. "),t("br"),e._v("Example3: You send Hekate_CTR payload to the console in RCM, which boots Atmosphère using “fss0=fusée-secondary” functionality. "),t("br"),t("br")]),t("p",[e._v(" So the three can be resumed like this : "),t("br"),t("br"),e._v("Send Payload “Fusee-primary.bin” > boot Atmosphere (fusée-secondary) "),t("br"),e._v("Send Payload “Hekate” > chain-boot fusee-primary.bin > boot Atmosphere (payload=) "),t("br"),e._v("Send Payload “Hekate” > Hekate uses fusee-secondary to boot Atmosphere (fss0=) "),t("br")]),t("b",[e._v("A Special Note About EmuMMC and Hekate/DeepSea:")]),t("p",[e._v(" Hekate (and Nyx interface of Hekate) set by DeepSea ready-to-use package lets you choose how you want to boot your console (Stock, SysMMC or emuMMC) directly from its menu. But this choice can only be applied if you launch Atmosphère with fusée-secondary (“fss0=”). "),t("br"),t("br"),e._v("If you have an emuMMC folder or partition and use fusée-primary (“payload=”) method to boot your console, Atmosphère will always follow its own setting to determine whether to use sysMMC or emuMMC regardless of the user choice in Hekate. "),t("br"),e._v("While an alternative may be to edit Atmosphere config files to force disable emuMMC and reboot the console, the typical method is to edit “emummc/emummc.ini” and set emummc!enabled=0 or 1. 0 means disabled. 1 Means enabled. You can edit the file yourself, or use existing homebrew directly from your Homebrew Launcher menu, such as emuMMC Toggler or EmuMmcConfig and reboot the payload (fusée-primary).If you use Hekate, you could name your boot choice “Atmosphere” only. "),t("br"),t("br"),t("br"),e._v("This loss of flexibility and user unfriendliness from Hekate boot menu when using fusee-primary.bin to launch AMS is why DeepSea uses the “fss0=” booting style for syntax. Using fss0= with fusée-secondary potentially allows for the following boot modes directly from Hekate: "),t("br"),e._v("Stock-like sysMMC "),t("br"),e._v("sysCFW "),t("br"),e._v("emuCFW "),t("br"),t("br"),e._v("This increased flexibility, all in one menu would not be possible if booting using fusée-primary.bin ")])])],1)],1)],1)],1)},s=[],r={name:"About",components:{},data:function(){return{items:[{title:"Home",icon:"dashboard"},{title:"About",icon:"question_answer"}],links:["Home","Contacts","Settings"],mini:!0,faq:[{title:"What is DeepSea?",text:""},{title:"Fusee-primary vs FSS0/Hekate",text:"eeeee"}]}}},i=r,n=t("2877"),l=t("6544"),u=t.n(l),c=t("0798"),d=t("b0af"),h=t("99d9"),b=t("62ad"),m=t("a523"),y=t("0fd9"),p=Object(n["a"])(i,a,s,!1,null,null,null);o["default"]=p.exports;u()(p,{VAlert:c["a"],VCard:d["a"],VCardText:h["a"],VCardTitle:h["b"],VCol:b["a"],VContainer:m["a"],VRow:y["a"]})}}]);
//# sourceMappingURL=about.566445aa.js.map