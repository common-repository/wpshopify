"use strict";(self.webpackChunkshopwp=self.webpackChunkshopwp||[]).push([["CartLineItemQuantity-public"],{"5zyA":function(t,i,n){n.r(i);var e=n("LpH3"),a=n("bNFS"),u=n("y+oc"),s=n("V+k2"),l=wp.element.lazy((function(){return n.e("Quantity-public").then(n.bind(n,"fXh0"))}));i.default=function(t){var i=t.lineItem,n=t.setNotice,p=(0,u.K)(),y=(0,s.v)(),c=(0,s.h)(),h=(0,u.d)(),m=i.merchandise.quantityAvailable,r=p.settings.lineitemsMaxQuantity?p.settings.lineitemsMaxQuantity:m||!1,o=p.settings.lineitemsMinQuantity,Q=p.settings.lineitemsQuantityStep;return(0,e.tZ)(l,{dispatch:h,quantityStep:Q,maxQuantity:r,minQuantity:o,initialQuantity:i.quantity,lineItem:i,onChange:function(t){i.quantity!==t&&(0,a.VD)(y,h,c,i,t)},isUpdating:y.isCartUpdating,setNotice:n})}}}]);