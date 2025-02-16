<template>
    <section class="water-sustainability">
        <div class="water-sustainability__container">
            <div class="text-content">
                <div class="text-content__description">
                    <img src="../../assets/images/info/shape_brand.png" alt="Background White" />
                </div>
                <h2 class="text-content__title">Điều Hướng Thông Minh</h2>
                <p class="text-content__description">
                    Hệ thống điều hướng được thiết kế trực quan, dễ sử dụng, giúp khách hàng nhanh chóng tìm thấy thông
                    tin về sản phẩm, tin tức.
                </p>
                <p class="text-content__description">
                    Sử dụng CTA rõ ràng, hấp dẫn, hướng dẫn người dùng thực hiện hành động mong muốn.
                </p>
            </div>
        </div>
        <div class="water-sustainability__bg-ellipse">
            <img :src="bgEllipse" alt="Background White" class="water-sustainability__image-ellipse" />
        </div>
        <div class="water-sustainability__bg-white">
            <img :src="bgWhite" alt="Background White" class="water-sustainability__image" />
        </div>
    </section>
    
</template>

<script lang="ts" setup>
import bgWhite from "../../assets/images/bg/rectangle_30420.png";
import bgEllipse from "../../assets/images/ellipse/ellipse_19182.png";
</script>

<style scoped>
.water-sustainability {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(0deg, #3882C4 0.03%, #26AAE1 100.03%);
    text-align: center;
    block-size: 806px;
    overflow: hidden;
}

.water-sustainability__bg-ellipse {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 50%;
    inline-size: 100%;
    max-inline-size: 806px;
    z-index: 0;
}

.water-sustainability__image-ellipse {
    inline-size: 100%;
    max-inline-size: 806px;
    mix-blend-mode: screen;
}

.water-sustainability__bg-white {
    inline-size: 100%;
}

.water-sustainability__image {
    inline-size: 100%;
    display: block;
}

.text-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    max-width: 415px;
}

.text-content__title {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 2%;
    color: #FFFFFF;
    text-align: justify;
}

.text-content__description {
    font-family: Montserrat;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0%;
    color: #FFFFFF;
    text-align: justify;
}
</style>
