"use strict";(self.webpackChunkshopwp=self.webpackChunkshopwp||[]).push([["StorefrontPageSize-public"],{nDrH:function(e,t,r){r.r(t);var n=r("8fid"),o=r("LpH3"),i=r("Qu7M"),s=r("dGr1"),p=r("1hfm");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(){var e=(0,i.Q)(),t=(0,i.O)(),r=e.settings.sortingOptionsPageSize;return(0,o.tZ)(p.Z,{dropzone:e.settings.dropzonePageSize,labelText:e.settings.pageSizeLabelText,selectId:"swp-pagesize",options:r,isLoading:e.isLoading,customOnChange:function(r){t({type:"SET_QUERY_PARAMS",payload:c(c({},e.queryParams),{},{first:parseInt(r.value)})}),t({type:"SET_IS_FETCHING_NEW",payload:!0})},defaultValue:(0,s.j5)(r,e.settings.pageSize)})}}}]);