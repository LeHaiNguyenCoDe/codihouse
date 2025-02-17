<!-- Tương tác thú vị -->
<template>
    <div class="flex flex-col items-center">
        <div class=""><img :src="bgEllipse5" alt=""></div>
        <div><img :src="arrow" alt=""></div>
        <div><img :src="banner" alt=""></div>
    </div>
    <div class="background">
        <div class="grid grid-cols-2 grid-rows-2 water-bottle-banner w-11/12 mx-auto">
            <div class="col-start-1 row-start-1"><img :src="bgEllipse6" alt="" class=" bgellipse-6 "></div>
            <div class="col-start-2 row-start-2"><img :src="bgEllipse7" alt="" class=" bgellipse-7 "></div>
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
</script>
<style>
.background {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(101, 209, 255, 0.25) 51%, rgba(255, 255, 255, 0.25) 100%);
}
.water-bottle-banner{
    max-height: 800px;
    margin-top: 5rem;
    position: relative;
}
.bgellipse-6 {
    width: 578;
    height: 386;
    z-index: 1;
    position: relative;
}
.bgellipse-7 {
    width: 577.380859375;
    height: 398.4990539550781;
    margin-top: -10%;
    z-index: 1;
    position: relative;
}
.iconv-lite{
    position: absolute;
    top: 25%;
    left: 42%;
    z-index: 0;
}
</style>