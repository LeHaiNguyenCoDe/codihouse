<template>
    <div class="bg flex flex-col items-center mt-8">
      <div class="project-overview--main-content px-8 pt-8 w-11/12 grid grid-cols-11 gap-4">
        <div class="col-span-2 flex items-center space-x-4">
          <div class="content-square"></div>
          <h6 class="content-title text-white">
            {{ projectTitleOverview.title }}
          </h6>
        </div>
        <div class="col-start-8 col-span-3 text-white text-xs ml-2">
          Dự án thiết kế website mới cho Suntory Pepsico hướng đến việc "đánh thức mọi giác quan" của 
          người dùng, mang đến một trải nghiệm số đầy cảm xúc và kết nối sâu sắc với tinh thần "Thổi hồn vào sự rực rỡ
        </div>
      </div>

      <div class="main--container w-11/12">
        <div class="flex flex-col md:flex-row items-center md:items-start">
          <div class="relative w-full md:w-2/3 z-1">
            <transition name="fade" mode="out-in">
              <img :src="mainSlide.image" :key="mainSlide.image" alt="Main Slide" class="shadow-lg big-image">
            </transition>
            <transition name="fade" mode="out-in">
              <div class="w-2/3 bottom-4 left-4 text-white text-4xl font-semibold flex gap-6" :key="mainSlide.text">
                <span class="whitespace-nowrap number">{{ mainSlide.number }}/</span> <span class="font-bold">{{ mainSlide.text }}</span>
              </div>
            </transition>
          </div>
          
          <div class="grid grid-rows-2 md:w-1/3 text-white gap-2 -mx-6">
            <!-- Nội dung phụ -->
            <div class=" overflow-hidden no-scrollbar z-1">
              <transition-group name="fade" tag="div" class="flex gap-6">
                <div v-for="(slide, index) in filteredSlides" :key="index" class="cursor-pointer" @click="changeSlide(index)">
                  <img :src="slide.image" alt="Slide" class="small-image h-[211px] shadow-md">
                  <div class="leading-relaxed flex items-center number text-4xl h-12"><p>{{ slide.number }}</p>/</div>
                </div>
              </transition-group>
            </div>
            <div class="flex gap-4 justify-end items-center mt-16">
              <button class="bg-transparent w-12 h-12 p-2 rounded-full shadow-md hover:bg-white/50 transition text-white border-white" @click="prevSlide">
                &#8592;
              </button>
              <button class="bg-transparent w-12 h-12 p-2 rounded-full shadow-md hover:bg-white/50 transition text-white border-white" @click="nextSlide">
                &#8594;
              </button>
            </div>
            <div class="relative">
              <img :src="circle" alt="" class="absolute -left-3/4 bottom-1/2">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
const projectTitleOverview = {
    title: "Mục tiêu dự án",
    innovation: "Suntory Pepsico là một trong những doanh nghiệp hàng đầu trong ngành F&B tại Việt Nam, đồng thời tiên phong trong các hoạt động phát triển bền vững. Công ty luôn nỗ lực mang đến những sản phẩm chất lượng cao, đồng thời góp phần xây dựng một tương lai tốt đẹp hơn cho cộng đồng và môi trường."
};

import { ref, computed } from 'vue';
import iamge1 from '@/assets/images/info/image_slide_01.svg';
import iamge2 from '@/assets/images/info/image_slide_02.svg';
import iamge3 from '@/assets/images/info/image_slide_03.svg';
import circle from '@/assets/images/icon/cirle.svg'

const slides = ref([
  {
    image: iamge1,
    number: "01",
    text: 'Khơi gợi cảm xúc và tạo ấn tượng mạnh mẽ'
  },
  {
    image: iamge2,
    number: "02",
    text: 'Tối ưu trải nghiệm người dùng (UX/UI)'
  },
  {
    image: iamge3,
    number: "03",
    text: 'Tăng cường tương tác và kết nối với khách hàng'
  }
]);

const mainSlideIndex = ref(0);
const mainSlide = computed(() => slides.value[mainSlideIndex.value]);
const filteredSlides = computed(() => slides.value.filter((_, index) => index !== mainSlideIndex.value));

const changeSlide = (index) => {
  mainSlideIndex.value = index;
};

const nextSlide = () => {
  mainSlideIndex.value = (mainSlideIndex.value + 1) % slides.value.length;
};

const prevSlide = () => {
  mainSlideIndex.value = (mainSlideIndex.value - 1 + slides.value.length) % slides.value.length;
};
</script>
<style scoped>
.slider-container {
  max-width: 1200px;
  margin: auto;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.big-image {
  width: 845px;
  height: 536px;
}
.small-image {
  width: 411px;
  height: auto;
}
.overflow-hidden {
  overflow-x: auto;
  white-space: nowrap;
}
.no-scrollbar {
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.bg {
  background: linear-gradient(180deg, #3882C4 0%, #26AAE1 100%);
}
.number {
  color: #A8F4FC;
}
</style>
