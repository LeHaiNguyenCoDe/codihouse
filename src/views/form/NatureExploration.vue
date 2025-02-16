<template>
    <section class="nature-exploration">
        <div class="nature-exploration--content-img">
            <img :src="bgNature" alt="Background White" class="nature-exploration--image" />
        </div>
    </section>
</template>

<script lang="ts" setup>
import bgNature from "../../assets/images/info/aerial-view-winding-road-surrounded-by-ocean-pine-tree-forest 1.svg";
</script>

<style scoped>
.nature-exploration--content-img { 
    position: relative;
    width: 100%;
    height: 100%;
}

.nature-exploration--image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>