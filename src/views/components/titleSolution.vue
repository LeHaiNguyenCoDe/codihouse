<template>
  <div class="solution--experience-title">
    <h1>{{ number }}</h1>
  </div>
  <div class="solution--experience-contents pb-16">
    <h1 class="font-sans font-extrabold text-[72px] leading-[80px] tracking-[3%] text-center"> {{ title }} </h1>
    <p class="font-[Montserrat] font-normal text-[16px] leading-[24px] tracking-[0] text-center"> {{ content }} </p>
    <div class="h-[209px]"></div>
  </div>
  <img :src="white_bg" alt="" class="w-screen absolute bottom-0">
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import white_bg from "@/assets/images/bg/white_bg.svg"

const props = defineProps({
  number: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false,
    default: ''
  }
});
</script>

<style lang="css" scoped>

.ptbv {
  font-family: Montserrat;
  font-size: 56px;
  line-height: 80px;
  letter-spacing: 0%;

}
.solution--experience-title {
  font-size: 240px;
  font-family: sans-serif;
  font-weight: 800;
  line-height: 1;
  opacity: 0.1;
  position: absolute;
  top: 40%;
  left: 52%;
  transform: translate(-50%, -50%);
  color: transparent;
  -webkit-text-stroke: 5px white;
  -webkit-mask: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  mask: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}

.solution--experience-contents {
  position: absolute;
  bottom: 18%;
  max-width: 846px;
  z-index: 2;
}

.solution--experience-contents h1 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
}

.solution--experience-contents p {
  font-size: 18px;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .solution--experience-title {
    font-size: 200px;
  }
  .solution--experience-contents h1 {
    font-size: 36px;
  }
}

@media (max-width: 768px) {
  .solution--experience-title {
    font-size: 120px;
  }
  .solution--experience-contents h1 {
    font-size: 28px;
  }
}

</style>
