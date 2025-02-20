<template>
  <div class="relative w-full pt-20 ">
    <div class="mx-auto w-11/12 flex flex-row items-center md:items-start">
      <div class="w-full md:w-1/2 relative z-10">
        <div class="info-product--title flex items-center">
          <div class="info-product--title-square bg-brand-primary-light"></div>
          <label class="font-medium text-title-regular color-darks ml-2">{{ title }}</label>
        </div>
        <div class="text-[8px] md:text-[13px] lg:text-[18px] font-semibold color-darks mt-9 leading-relaxed">
          <span class="font-bold color-blues">{{ companyName }}</span>
          <span v-html="description"></span>
        </div>
      </div>

      <div class="relative flex justify-end">
        <img src="../../assets/images/info/group/path_group_01.png" alt="suntory-pepsico"
          class="w-30 lg:w-[25rem] sm:w-[70%] xl:mt-0 md:mt-0 mt-10">
      </div>
    </div>

    <div class="suntory--number relative w-full bg-white font-manrope">
      <div class="mx-auto w-11/12 grid grid-cols-4 gap-8 md:gap-12 relative">
        <div v-for="(item, index) in stats" :key="index" :class="`col-span-${item.colSpan}`">
          <template v-if="!item.empty">
            <p ref="countRefs" class="lg:text-[96px] text-[50px] font-bold text-[#26AAE1] m-0">
              {{ formattedNumbers[index] }}
            </p>
            <p class="lg:text-[24px] md:text-[16px] text-[12px] font-bold text-[#26AAE1]">{{ item.title }}</p>
            <p class="color-darks xl:text-18px md:text-12px text-10px">{{ item.subtitle }}</p>
          </template>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, computed, onMounted, watchEffect } from "vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const props = defineProps({
  title: String,
  companyName: String,
  description: String,
  imageSrc: String,
  imageAlt: String,
  stats: Array as () => { number?: number, title?: string, subtitle?: string, colSpan: number, empty?: boolean }[]
});

gsap.registerPlugin(ScrollTrigger);

// Tạo ref để theo dõi các số
const countRefs = ref<HTMLElement[]>([]);
const animatedNumbers = ref<number[]>(props.stats?.map(() => 0) || []);
const formattedNumbers = computed(() => {
  return animatedNumbers.value.map(num => num.toString().padStart(2, "0"));
});

onMounted(() => {
  props.stats?.forEach((item, index) => {
    if (!item.number) return;

    gsap.to(animatedNumbers.value, {
      opacity: 1,
      y: 0,
      visibility: "visible",
      duration: 1.5,
      ease: "expo.out",
      delay: index * 0.2,
      scrollTrigger: {
        trigger: countRefs.value[index],
        start: "top 50%",
        end: "top 75%",
        toggleActions: "play none none none",
        once: true,
        invalidateOnRefresh: true
      },

      onComplete: () => {
        if (item.number !== undefined) {
          animatedNumbers.value[index] = item.number;
        }
      }
    });
  });
});

watchEffect(() => {
  countRefs.value.forEach((el, index) => {
    if (el) el.innerText = Number(animatedNumbers.value[index]).toFixed(0);
  });
});
</script>