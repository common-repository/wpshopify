"use strict";(self.webpackChunkshopwp=self.webpackChunkshopwp||[]).push([["AdminSettingCartTerms-admin"],{AxxL:function(e,t,n){n.r(t);var a=n("oYSA"),r=n("ALIA"),o=React.useContext,s=wp.components.TextareaControl;t.default=function(){var e=o(r.Z),t=(0,a.Z)(e,2),n=t[0],p=t[1];return React.createElement(s,{disabled:!n.enableCartTerms,cols:"60",value:n.cartTermsContent,onChange:function(e){p({type:"UPDATE_SETTING",payload:{key:"cartTermsContent",value:e}})},label:wp.i18n.__("Cart terms","shopwp")})}}}]);