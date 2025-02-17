<!-- Tương tác thú vị -->
<template>
    <div class="interaction -mt-1/5 bgellipse-5 relative">
        <div class="relative"><img :src="bgEllipse5" alt=""></div>
        <div class="iconv-lite1"><img :src="iconvLite" alt="iconv-lite1"/></div>
        <div class="iconv-lite2"><img :src="iconvLite1" alt="iconv-lite2"/></div>
        <div><img :src="arrow" alt=""></div>
        <div><img :src="banner" alt=""></div>
    </div>
    <div class="background">
        <div class="water-bottle-banner w-11/12 mx-auto">
            <div class=" bgellipse-6 "><img :src="bgEllipse6" alt=""></div>
            <div class=" bgellipse-7 "><img :src="bgEllipse7" alt=""></div>
            <div class="iconv-lite"><img :src="iconvLite" alt="iconv-lite"/></div>
        </div>
    </div>
    
</template>
<script lang="ts" setup>
import bgEllipse5 from "@/assets/images/ellipse/image_watersustainability_05.svg";
import bgEllipse6 from "@/assets/images/ellipse/image_watersustainability_06.svg";
import bgEllipse7 from "@/assets/images/ellipse/image_watersustainability_07.svg";
import arrow from "@/assets/images/ellipse/image_arrow.svg";
import banner from "@/assets/images/ellipse/img_banner.svg";
import iconvLite from "@/assets/images/bg/group_icon.png"
import iconvLite1 from "@/assets/images/bg/group_icon2.png"
</script>
<style>
.background {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(101, 209, 255, 0.25) 51%, rgba(255, 255, 255, 0.25) 100%);
}
.interaction{
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
}
.water-bottle-banner{
    min-height: 800px;
    margin-top: 5rem;
    position: relative;
    height: 100%;
    /* display: grid;
    grid-column: 2;
    grid-row: 2; */
}
.bgellipse-5{
    z-index: 1;
}
.bgellipse-6 {
    position: absolute;
    top: -5%;
    left: 2%;
    z-index: 1;
}
.bgellipse-7 {
    position: absolute;
    bottom: -10%;
    right: 2%;
    z-index: 1;
}
.iconv-lite{
    position: absolute;
    top: 20%;
    left: 42%;
    z-index: 0;
}
.iconv-lite1 {
    position: absolute;
    top: 0%;
    left: 0%;
    z-index: 0;
}
.iconv-lite2 {
    position: absolute;
    top: 0%;
    right: 0%;
    z-index: 0;
}
</style>