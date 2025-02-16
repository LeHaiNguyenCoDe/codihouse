<template>
  <section class="info-display mt-1/6">
    <div class="info-display__container">
      <div class="info-display__image-wrapper">
        <img :src="bgLeft" alt="Left Image" class="info-display__image" />
      </div>
      <div class="info-display__overlay">
        <img :src="bgArrow" alt="Arrow Overlay" class="info-display__arrow" />
      </div>
      <div class="info-display__image-wrapper">
        <img :src="bgRight" alt="Right Image" class="info-display__image" />
      </div>
    </div>
    <div class="info-display__video mt-4">
      <video class="w-full h-full object-cover z-30" autoplay loop muted playsinline>
        <source src="../../assets/videos/d0776f50d5c38fc57224a8daf098efbfa67da290.mp4" type="video/mp4">
      </video>
    </div>
  </section>
</template>

<script lang="ts" setup>
import bgLeft from "../../assets/images/info/rectangle_30413.svg";
import bgRight from "../../assets/images/info/rectangle_30412.svg";
import bgArrow from "../../assets/images/header/Vector.svg";
import video from "../../assets/videos/d0776f50d5c38fc57224a8daf098efbfa67da290.mp4";
</script>

<style scoped>
.info-display__container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  inline-size: 100%;
  position: relative;
}

.info-display__image-wrapper {
  flex: 1;
  overflow: hidden;
  border-radius: 10px;
}

.info-display__image {
  inline-size: 100%;
  display: block;
  border-radius: 10px;
}

.info-display__overlay {
  position: absolute;
  inset-block-start: 0;
  inset-inline-start: 0;
  transform: translate(-50%, -30%);
  z-index: 10;
  pointer-events: none;
}

.info-display__arrow {
  inline-size: min(24vw, 53rem);
  max-inline-size: 100%;
  block-size: auto;
  opacity: 0.4;
}
</style>
