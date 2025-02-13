<template>
    <div class="project-overview--main-content px-8">
        <div class="content-square"></div>
        <h6 class="content-title">
            {{ projectTitleOverview.title }}
        </h6>
    </div>
    <div class="main--container">
      <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div class="relative w-full md:w-2/3">
          <transition name="fade" mode="out-in">
            <img :src="mainSlide.image" :key="mainSlide.image" alt="Main Slide" class="rounded-lg shadow-lg w-full h-auto">
          </transition>
          <transition name="fade" mode="out-in">
            <div class=" bottom-4 left-4 text-white text-lg font-semibold" :key="mainSlide.text">
              {{ mainSlide.number }} / <span class="font-bold">{{ mainSlide.text }}</span>
            </div>
          </transition>
        </div>
        
        <!-- Nội dung phụ -->
        <div class="flex md:w-1/3 text-white gap-2 overflow-hidden">
          <transition-group name="fade" tag="div" class="flex gap-2">
            <div v-for="(slide, index) in filteredSlides" :key="index" class="cursor-pointer" @click="changeSlide(index)">
              <img :src="slide.image" alt="Slide" class="rounded-lg w-32 h-20 shadow-md">
              <div class="text-sm leading-relaxed flex items-center"><p>{{ slide.number }}</p>/ {{ slide.text }}</div>
            </div>
          </transition-group>
        </div>
      </div>
      
      <div class="bottom-4 right-4 flex gap-4">
        <button class="bg-white/30 p-2 rounded-full shadow-md hover:bg-white/50 transition" @click="prevSlide">
          &#8592;
        </button>
        <button class="bg-white/30 p-2 rounded-full shadow-md hover:bg-white/50 transition" @click="nextSlide">
          &#8594;
        </button>
      </div>
    </div>
</template>

<script setup lang="ts">
const projectTitleOverview = {
    title: "Mục tiêu dự án",
    innovation: "Suntory Pepsico là một trong những doanh nghiệp hàng đầu trong ngành F&B tại Việt Nam, đồng thời tiên phong trong các hoạt động phát triển bền vững. Công ty luôn nỗ lực mang đến những sản phẩm chất lượng cao, đồng thời góp phần xây dựng một tương lai tốt đẹp hơn cho cộng đồng và môi trường."
};

import { ref, computed } from 'vue';

const slides = ref([
  {
    image: 'https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/hinh-nen-trai-tim-1.jpg',
    number: "01",
    text: 'Khơi gợi cảm xúc và tạo ấn tượng mạnh mẽ'
  },
  {
    image: 'https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/hinh-nen-cute-6.jpg',
    number: "02",
    text: 'Tối ưu trải nghiệm người dùng (UX/UI)'
  },
  {
    image: 'https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/hinh-nen-khach-hang.jpg',
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

.overflow-hidden {
  overflow-x: auto;
  white-space: nowrap;
}
</style>
