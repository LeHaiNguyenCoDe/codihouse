<template>
  <!-- Chỉ hiển thị nếu props `showDesignSolution` được truyền vào -->
  <div v-if="showDesignSolution" class="relative z-20 flex flex-col items-center">
    <img :src="MEDIA.images.iconArrow" alt="arrow icon" class="block mx-auto mb-3">
    <span class="text-[18px] font-sans font-medium text-white text-body-info-arrow">Giải pháp thiết kế</span>
  </div>

  <!-- Nội dung chính -->
  <div ref="section"
    class="relative mx-auto flex flex-col items-center justify-center text-center min-h-[500px] overflow-visible">
    
    <!-- Số lớn phía sau -->
    <div class="absolute text-transparent -top-22rem opacity-10 font-sans font-extrabold text-[240px] leading-none"
      :style="{ '-webkit-text-stroke': textStroke, '-webkit-mask-image': maskImage }">
      <h1>{{ number }}</h1>
    </div>

    <!-- Tiêu đề và nội dung -->
    <div ref="contentRef" class="relative z-10 w-full lg:w-[846px] opacity-0 transform translate-y-10">
      <h1 class="font-sans font-extrabold text-[30px] lg:text-[56px] leading-[80px] tracking-[3%] sm:leading-[60px] xs:leading-[48px]"
        :style="{ color: titleColor }">
        {{ title }}
      </h1>
      <p class="font-[Montserrat] font-normal text-[16px] leading-[24px] tracking-[0] sm:text-[14px] sm:leading-[20px] xs:text-[12px] xs:leading-[18px]"
        :style="{ color: contentColor }" v-html="content">
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MEDIA } from '../constants/media';

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  showDesignSolution: { type: Boolean, default: false }, // Nếu không truyền thì mặc định ẩn
  number: String,
  title: String,
  content: String,
  titleColor: { type: String, default: "#FFFFFF" },
  contentColor: { type: String, default: "#FFFFFF" },
  textStroke: { type: String, default: "5px white" },
  maskImage: {
    type: String,
    default: "linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)",
  },
  my: { type: String, default: "15%" },
});

// Tham chiếu đến các phần tử
const contentRef = ref(null);
const imageContainer = ref(null);
const leftPhone = ref(null);
const rightPhone = ref(null);
const bgCenter = ref(null);

onMounted(() => {
  // Hiệu ứng chữ cuộn lên
  gsap.fromTo(
    contentRef.value,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: contentRef.value,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );

  // Hiệu ứng cuộn vào của Left & Right Phone
  gsap.to(leftPhone.value, {
    opacity: 1,
    x: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: imageContainer.value,
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });

  gsap.to(rightPhone.value, {
    opacity: 1,
    x: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: imageContainer.value,
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });
});
</script>
