"use strict";(self.webpackChunkshopwp=self.webpackChunkshopwp||[]).push([["AdminSettingCollectionsImagesSizingCrop-admin"],{"/DgA":function(e,n,p){function o(){return[{label:wp.i18n.__("None","shopwp"),value:"none"},{label:wp.i18n.__("Top","shopwp"),value:"top"},{label:wp.i18n.__("Center","shopwp"),value:"center"},{label:wp.i18n.__("Bottom","shopwp"),value:"bottom"},{label:wp.i18n.__("Left","shopwp"),value:"left"},{label:wp.i18n.__("Right","shopwp"),value:"right"}]}function l(){return[{label:wp.i18n.__("None","shopwp"),value:!1},{label:wp.i18n.__("2","shopwp"),value:2},{label:wp.i18n.__("3","shopwp"),value:3}]}function t(){return[{label:wp.i18n.__("Current tab / window","shopwp"),value:"_self"},{label:wp.i18n.__("New tab / window","shopwp"),value:"_blank"}]}function i(){return[{label:wp.i18n.__("Dropdown","shopwp"),value:"dropdown"},{label:wp.i18n.__("Buttons","shopwp"),value:"buttons"}]}function a(){var e=[{label:wp.i18n.__("None","shopwp"),value:"none"},{label:wp.i18n.__("Shopify","shopwp"),value:"shopify"}];return e.push({label:wp.i18n.__("WordPress","shopwp"),value:"wordpress"}),shopwp.misc.isPro&&e.push({label:wp.i18n.__("Modal","shopwp"),value:"modal"}),e}p.d(n,{Cr:function(){return t},Fs:function(){return a},I9:function(){return l},dj:function(){return o},wY:function(){return i}})},OTt2:function(e,n,p){p.r(n);var o=p("oYSA"),l=p("ALIA"),t=p("/DgA"),i=p("Qjib");n.default=function(){var e=(0,React.useContext)(l.Z),n=(0,o.Z)(e,1)[0];return React.createElement(i.P,{settingsKey:"collectionsImagesSizingCrop",options:(0,t.dj)(),disableWhen:[!n.collectionsImagesSizingToggle],label:wp.i18n.__("Crop","shopwp"),help:wp.i18n.__("If the entire image won't fit in your set dimensions, the crop parameter specifies what part of the image to show.","shopwp")})}}}]);