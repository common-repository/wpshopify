"use strict";(self.webpackChunkshopwp=self.webpackChunkshopwp||[]).push([["AdminSettingCartShowFixedCartTab-admin"],{XyRh:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n("oYSA"),o=n("qZpH"),i=n("ALIA"),l=wp.element.memo((function(e){var t=e.settingName,n=e.onChange,a=e.label,o=e.help,i=e.note,l=e.noticeCSS,r=wp.components,s=r.ToggleControl,c=r.Notice;return React.createElement(React.Fragment,null,React.createElement(s,{checked:t,onChange:n,label:a,help:o,className:i&&t&&"shopwp-toggle-has-note"}),i&&t&&React.createElement(c,{isDismissible:!1,css:l,status:"warning"},i))})),r={name:"1cirfju-noticeCSS",styles:"&&{margin-left:0!important;margin-right:0!important;margin-bottom:3em!important;};label:noticeCSS;"},s=wp.element.memo((function(e){var t=e.settingName,n=void 0!==t&&t,s=e.label,c=void 0!==s&&s,p=e.help,m=void 0!==p&&p,h=e.note,u=void 0!==h&&h,g=e.alsoChange,d=void 0!==g&&g,w=e.disable,b=void 0!==w&&w,C=React.useContext,S=wp.components.Disabled,f=C(i.Z),v=(0,a.Z)(f,2),y=v[0],E=v[1],N=r;function R(){E({type:"UPDATE_SETTING",payload:{key:n,value:!y[n]}}),d&&E({type:"UPDATE_SETTING",payload:{key:d,value:!y[d]}})}return(0,o.tZ)(React.Fragment,null,b?(0,o.tZ)(S,null,(0,o.tZ)(l,{settingName:y[n],onChange:R,label:c,help:m,note:u,noticeCSS:N})):(0,o.tZ)(l,{settingName:y[n],onChange:R,label:c,help:m,note:u,noticeCSS:N}))}))},E5ra:function(e,t,n){n.r(t);var a=n("XyRh");t.default=function(){return React.createElement(a.Z,{label:wp.i18n.__("Show fixed cart tab","shopwp"),help:wp.i18n.__("When turned on, will show a fixed cart tab on the side of every page.","shopwp"),settingName:"showFixedCartTab"})}}}]);