<style text="text/css">

    @keyframes shimmer {
        0% {
            opacity: 0.5;
        }

        100% {
            opacity: 1;
        }
    }

    .shopwp-skeleton-component {
        border-radius: 15px;
        background: #eee;
        animation: shimmer 0.4s ease-out 0s alternate infinite none running;
    }

    .shopwp-skeleton-product-title {
        width: 200px;
        height: 20px;
    }

</style>

<div class="shopwp-skeleton">
    <div class="shopwp-skeleton-product">
        <div class="shopwp-skeleton-component shopwp-skeleton-product-title"></div>
    </div>
</div>