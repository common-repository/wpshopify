"use strict";(self.webpackChunkshopwp=self.webpackChunkshopwp||[]).push([["CartLineItemRemove-public"],{VOvO:function(e,t,i){i.r(t);var n=i("LpH3"),o=i("V+k2"),a=i("y+oc"),p=i("bNFS");t.default=function(e){var t=e.lineItem,i=e.text,r=(0,o.v)(),s=(0,o.h)(),c=((0,a.K)(),(0,a.d)()),d=(0,n.iv)("position:absolute;top:-12px;right:0;font-size:12px;text-decoration:underline;padding-right:0;text-align:right;padding:13px 0;&:hover{cursor:",r.isCartUpdating?"not-allowed":"pointer",";opacity:",r.isCartUpdating?"1":"0.7",";};label:removeStyles;");return(0,n.tZ)("span",{className:"wps-cart-lineitem-remove",css:d,onClick:function(e){r.isCartUpdating||((0,p.nd)(t.id,r,c,s),wp.hooks.doAction("on.lineItemRemove",t,t.merchandise.id))}},i)}}}]);