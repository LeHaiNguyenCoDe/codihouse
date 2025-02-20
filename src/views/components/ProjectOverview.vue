<template>
    <div class="info-product--content">
      <div ref="containerRef" class="relative z-10 mx-auto w-11/12">
        <!-- Tiêu đề -->
        <div class="info-product--title flex items-center">
          <div class="info-product--title-square bg-brand-primary-light"></div>
          <label ref="titleRef" class="font-medium text-title-regular color-darks ml-2 text-hidden">
            {{ title }}
          </label>
        </div>

        <div v-for="(line, index) in content" :key="index"
          ref="textRefs"
          class="xl:text-[64px] lg:text-[48px] md:text-[36px] text-[18px] font-bold text-title-bold color-darks mt-2 text-hidden">
          <span v-html="line.text"></span>
        </div>
        
        <div ref="descriptionRef" class="info-product--description-text w-full flex justify-end text-hidden">
            <p class="text-16px color-darks xl:mt-10 md:mt-6 tracking-wide" v-html="description"></p>
        </div>
      </div>
  
      <div class="info-product--image absolute top-0 left-0 w-full h-full z-0">
        <img v-for="(image, index) in backgroundImages" :key="index" :src="image.src" :alt="image.alt"
          :class="image.class">
      </div>
  
      <!-- Video -->
      <div class="project-video relative flex items-center justify-center mt-15 z-10">
        <div class="project-video-group container flex items-center justify-center">
          <video class="w-full lg:h-[522px] sm:h-full object-cover" autoplay loop muted playsinline>
            <source :src="videoSrc" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
  </template>

  
  <script setup lang="ts">
  import { defineProps, onMounted, ref } from "vue";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);
  
  const props = defineProps({
    title: String,
    content: Array as () => { text: string, image?: string }[],
    description: String,
    backgroundImages: Array as () => { src: string, alt: string, class: string }[],
    videoSrc: String
  });
  
  const titleRef = ref<HTMLElement | null>(null);
  const textRefs = ref<HTMLElement[]>([]);
  const descriptionRef = ref<HTMLElement | null>(null);
  
  onMounted(() => {
    // Hiệu ứng cho tiêu đề
    if (titleRef.value) {
      gsap.fromTo(titleRef.value, 
        { opacity: 0, y: 50, visibility: "hidden" },  
        {
          opacity: 1, 
          y: 0, 
          visibility: "visible",
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: titleRef.value,
            start: "top 90%",
            end: "top 70%",
            toggleActions: "play none none none",
            once: true,
            invalidateOnRefresh: true
          }
        }
      );
    }
  
    gsap.utils.toArray(textRefs.value).forEach((el: any, index) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 50, visibility: "hidden" },  
        {
          opacity: 1, 
          y: 0, 
          visibility: "visible",
          duration: 1.5,
          ease: "expo.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            end: "top 75%",
            toggleActions: "play none none none",
            once: true,
            invalidateOnRefresh: true
          }
        }
      );
    });
  
    if (descriptionRef.value) {
      gsap.fromTo(descriptionRef.value, 
        { opacity: 0, y: 50, visibility: "hidden" }, 
        {
          opacity: 1, 
          y: 0, 
          visibility: "visible",
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: descriptionRef.value,
            start: "top 95%",
            end: "top 75%",
            toggleActions: "play none none none",
            once: true,
            invalidateOnRefresh: true
          }
        }
      );
    }
  });
  </script>
  