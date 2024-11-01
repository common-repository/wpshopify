"use strict";(self.webpackChunkshopwp=self.webpackChunkshopwp||[]).push([["npm-packages_shopwp-components_src_components_products_product_pricing_index_jsx"],{"6DiJ":function(e,i,r){r.r(i),r.d(i,{default:function(){return m}});var t=r("LpH3"),n=r("FG1g"),c=r("63xp"),o=r("dGr1"),p=wp.element.lazy((function(){return r.e("ProductPricesCompareAt-public").then(r.bind(r,"U5j6"))})),a=wp.element.lazy((function(){return r.e("ProductPricesSubscription-public").then(r.bind(r,"8yhC"))}));function s(e){var i=e.settings,r=e.payload,s=(0,n.C)(),l=(0,o.vD)(r),g=wp.element.Suspense,m=(0,t.iv)("display:flex;flex-direction:column;align-items:baseline;position:relative;margin-bottom:",i.isSingleComponent||"search"===i.type?"0px":"35px",";+.wps-buy-button-wrapper>.wps-product-quantity-wrapper{margin-top:1.7em;}+.shopwp-reviews-wrapper,+.wps-component-products-reviews{margin-top:-12px;margin-bottom:22px;};label:ProductPricesCompareAtCSS;");return(0,t.tZ)("div",{className:"wps-component-products-pricing","aria-label":"Product Pricing",css:m},(0,t.tZ)(o.ce,{name:"before.productPricing",args:[s]}),s.selectedSubscriptionInfo&&s.selectedVariant?(0,t.tZ)(a,{subscriptionInfo:s.selectedSubscriptionInfo,selectedVariant:s.selectedVariant}):i.showCompareAt?(0,t.tZ)(g,{fallback:!1},(0,t.tZ)(p,{selectedVariant:s.selectedVariant,prices:l,showPriceRange:i.showPriceRange,compareAt:i.showCompareAt,settings:i})):(0,t.tZ)(c.Z,{selectedVariant:s.selectedVariant,compareAt:!1,prices:l,showPriceRange:i.showPriceRange,settings:i}),(0,t.tZ)(o.ce,{name:"after.productPricing",args:[s]}))}var l=r("U039"),g=r("Qu7M"),m=function(){var e=(0,g.Q)(),i=(0,n.C)();return(0,l.vI)(React.createElement(s,{settings:e.settings,payload:i.payload}),(0,o.tu)(e.settings.dropzoneProductPricing))}},"63xp":function(e,i,r){r.d(i,{Z:function(){return b}});var t=r("2MD/"),n=r("LpH3"),c=r("3mso"),o=r.n(c),p=r("RRdc"),a=r.n(p),s=r("Q0gQ"),l=r.n(s),g=r("glr/"),m=r.n(g),u=r("Fono");function d(e){var i=e.compareAt,r=(0,n.iv)("margin:",i?"0 0 0 5px":"0 5px",";display:inline-block;color:",i?"#848484":"#121212",";position:",i?"static":"relative",";top:",i?0:"-2px",";;label:ProductPricingSeparatorCSS;");return(0,n.tZ)("div",{css:r,className:"wps-product-from-price-separator"},"–")}var f=wp.element.memo((function(e){var i=e.firstPrice,r=e.lastPrice,t=e.compareAt,n=e.showPriceRange,c=e.pricingColor,o=e.pricingFontSize;return React.createElement(React.Fragment,null,React.createElement(u.Z,{price:i,compareAt:t,showPriceRange:n,pricingColor:c,pricingFontSize:o}),React.createElement(d,{compareAt:t}),React.createElement(u.Z,{price:r,compareAt:t,showPriceRange:n,pricingColor:c,pricingFontSize:o}))})),h=function(e){var i=e.firstPrice,r=e.lastPrice,t=e.isFirstAndLastSame,c=e.compareAt,o=e.showPriceRange,p=e.pricingColor,a=e.pricingFontSize,s=(0,n.iv)("margin-top:0;position:",o&&c?"relative":"static",";display:flex;align-items:baseline;height:100%;line-height:1;;label:showPriceRangeStyles;");return(0,n.tZ)("span",{className:"wps-pricing-range-wrapper",css:s},t?(0,n.tZ)(u.Z,{showPriceRange:o,price:i,compareAt:c,pricingColor:p,pricingFontSize:a}):(0,n.tZ)(f,{firstPrice:i,lastPrice:r,compareAt:c,showPriceRange:o,pricingColor:p,pricingFontSize:a}))},w=r("D57m"),P=r("dGr1"),S=wp.element,y=S.useEffect,F=S.useRef,A=S.useState;function v(e,i){return o()(e)?0:a()(e[i])}function Z(e){return o()(e)?0:e.regPrices[0]}var b=function(e){var i=e.compareAt,r=e.prices,c=e.showPriceRange,o=e.selectedVariant,p=e.settings,a=F(),s=A((function(){return z()})),g=(0,t.Z)(s,2),d=g[0],f=g[1],S=A((function(){return(0,P.zK)(r)})),b=(0,t.Z)(S,2),C=b[0],x=b[1];function z(){return i?c?l()(r.compareAtPrices):(0,P.zK)(r):c?l()(r.regPrices):Z(r)}function R(){return i?c?m()(r.compareAtPrices):function(e){return v(e,"compareAtPrices")}(r):c?m()(r.regPrices):function(e){return v(e,"regPrices")}(r)}y((function(){o?(o.node.compareAtPriceV2?x(o.node.compareAtPriceV2.amount):x(!1),f(o.node.priceV2.amount)):(x((0,P.zK)(r)),f(z()))}),[o]);var T=(0,n.iv)("line-height:1;margin:0 15px 0 0;display:block;font-family:",p.pricingTypeFontFamily?p.pricingTypeFontFamily:p.pricingFont?p.pricingFont:"inherit",";font-weight:",p.pricingTypeFontWeight?p.pricingTypeFontWeight:p.pricingFontWeight?p.pricingFontWeight:"initial",";font-size:",p.pricingTypeFontSize?p.pricingTypeFontSize:"initial",";letter-spacing:",p.pricingTypeLetterSpacing?p.pricingTypeLetterSpacing:"initial",";line-height:",p.pricingTypeLineHeight?p.pricingTypeLineHeight:"initial",";text-decoration:",p.pricingTypeTextDecoration?p.pricingTypeTextDecoration:"initial",";text-transform:",p.pricingTypeTextTransform?p.pricingTypeTextTransform:"initial",";;label:priceWrapperCSS;");return c||!i||(0,P.zK)(r)!==Z(r)?(0,n.tZ)("span",{itemScope:!0,itemProp:"offers",itemType:"https://schema.org/Offer",className:"wps-products-price wps-product-pricing wps-products-price-one","data-show-price-range":c,css:T},c&&!o?(0,n.tZ)(h,{firstPrice:z(),lastPrice:R(),isFirstAndLastSame:z()===R(),compareAt:i,showPriceRange:c,pricingColor:p.pricingColor,pricingFontSize:p.pricingTypeFontSize}):o?(0,n.tZ)(w.J,null,(0,n.tZ)(u.Z,{ref:a,price:i?C:d,compareAt:i,showPriceRange:c,pricingColor:p.pricingColor,pricingFontSize:p.pricingTypeFontSize})):(0,n.tZ)(u.Z,{ref:a,price:i?C:d,compareAt:i,showPriceRange:c,pricingColor:p.pricingColor,pricingFontSize:p.pricingTypeFontSize})):null}},Fono:function(e,i,r){var t=r("LpH3"),n=r("ZnvT"),c=wp.element.forwardRef((function(e,i){var r=(0,t.iv)("display:inline-block;padding:0;margin:",e.compareAt?"1px":"0"," 0 0 ",e.compareAt?"7px":"0",";font-size:",e.pricingFontSize?e.pricingFontSize:e.compareAt?"16px":"18px",";color:",e.pricingColor?e.pricingColor:e.compareAt?"#848484":"#121212",";text-decoration:",e.compareAt?"line-through":"none",";font-weight:",e.compareAt?"normal":"bold",";;label:priceCSS;");return!1!==e.price||null!==e.price?(0,t.tZ)("span",{ref:i,className:"wps-product-individual-price",css:r,"data-price":e.price,itemProp:"price",content:e.price},(0,t.tZ)(n.Z,{price:e.price})):null}));i.Z=wp.element.memo(c)}}]);