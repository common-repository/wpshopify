"use strict";(self.webpackChunkshopwp=self.webpackChunkshopwp||[]).push([["AdminSettingCollectionsHeadingToggle-admin"],{XyRh:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n("oYSA"),o=n("qZpH"),l=n("ALIA"),i=wp.element.memo((function(e){var t=e.settingName,n=e.onChange,a=e.label,o=e.help,l=e.note,i=e.noticeCSS,c=wp.components,s=c.ToggleControl,p=c.Notice;return React.createElement(React.Fragment,null,React.createElement(s,{checked:t,onChange:n,label:a,help:o,className:l&&t&&"shopwp-toggle-has-note"}),l&&t&&React.createElement(p,{isDismissible:!1,css:i,status:"warning"},l))})),c={name:"1cirfju-noticeCSS",styles:"&&{margin-left:0!important;margin-right:0!important;margin-bottom:3em!important;};label:noticeCSS;"},s=wp.element.memo((function(e){var t=e.settingName,n=void 0!==t&&t,s=e.label,p=void 0!==s&&s,g=e.help,m=void 0!==g&&g,r=e.note,h=void 0!==r&&r,u=e.alsoChange,d=void 0!==u&&u,w=e.disable,f=void 0!==w&&w,C=React.useContext,S=wp.components.Disabled,b=C(l.Z),v=(0,a.Z)(b,2),y=v[0],N=v[1],R=c;function T(){N({type:"UPDATE_SETTING",payload:{key:n,value:!y[n]}}),d&&N({type:"UPDATE_SETTING",payload:{key:d,value:!y[d]}})}return(0,o.tZ)(React.Fragment,null,f?(0,o.tZ)(S,null,(0,o.tZ)(i,{settingName:y[n],onChange:T,label:p,help:m,note:h,noticeCSS:R})):(0,o.tZ)(i,{settingName:y[n],onChange:T,label:p,help:m,note:h,noticeCSS:R}))}))},"fj+x":function(e,t,n){n.r(t);var a=n("XyRh");t.default=function(){return React.createElement(a.Z,{label:wp.i18n.__("Show Default Page Heading?","shopwp"),help:wp.i18n.__("Hide / show the heading found on the collections listing page.","shopwp"),settingName:"collectionsHeadingToggle"})}}}]);