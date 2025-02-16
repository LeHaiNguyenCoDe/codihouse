<template>
    <section class="nature-exploration">
        <div class="nature-exploration--content-img">
            <img :src="bgNature" alt="Background White" class="nature-exploration--image" />
            <img :src="bgArrow" alt="Arrow Overlay" class="info-display__arrow" />
        </div>
    </section>
</template>

<script lang="ts" setup>
import bgNature from "../../assets/images/info/aerial-view-winding-road-surrounded-by-ocean-pine-tree-forest 1.svg";
import bgArrow from "../../assets/images/header/Vector.svg";
</script>

<style scoped>
.nature-exploration--content-img { 
    position: relative;
    inline-size: 100%;
    block-size: 100%;
    overflow: hidden; /* Ngăn hình ảnh con bị tràn ra ngoài */
}

.nature-exploration--image {
    inline-size: 100%;
    block-size: 100%;
    object-fit: cover;
}

.info-display__arrow {
    position: absolute;
    inset-block-start: 50%;
    inset-inline-start: 0;
    transform: translate(-50%, -50%);
    opacity: 0.5;
    inline-size: min(40vw, 53rem);
}


</style>