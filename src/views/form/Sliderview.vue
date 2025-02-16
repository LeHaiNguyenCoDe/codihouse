<template>
  <div class="bg flex flex-col items-center mt-6 font-sans">
    <div class="project-overview--main-content px-8 pt-8 w-11/12 grid grid-cols-11 gap-4 items-end">
      <div class="col-span-6 flex items-center space-x-4 text-3xl height-reponsive">
        <div class="content-square w-3 h-3 bg-[#7BE2F6]"></div>
        <h6 class="content-title text-white target">
          {{ projectTitleOverview.title }}
        </h6>
      </div>
      <div class="col-start-8 col-span-3 text-white target-text ml-2">
        Dự án thiết kế website mới cho Suntory Pepsico hướng đến việc "đánh thức mọi giác quan" của
        người dùng, mang đến một trải nghiệm số đầy cảm xúc và kết nối sâu sắc với tinh thần "Thổi hồn vào sự rực rỡ
      </div>
    </div>

    <div class="main--container w-11/12 mt-8">
      <div class="flex justify-between items-start slide-reponsive">
        <div class="relative z-1 big-section">
          <transition name="fade" mode="out-in">
            <img :src="mainSlide.image" :key="mainSlide.image" alt="Main Slide" class="shadow-lg big-image">
          </transition>
          <transition name="fade" mode="out-in">
            <div class="reponsive-image-title" :key="mainSlide.text">
              <span class="whitespace-nowrap number">{{ mainSlide.number }}/</span> <span class="font-bold">{{ mainSlide.text }}</span>
            </div>
          </transition>
        </div>

        <div class="grid grid-rows-2 small-section text-white gap-2 relative">
          <div class="overflow-hidden no-scrollbar z-1 w-full">
            <transition-group name="fade" tag="div" class="small-slide-section">
              <div v-for="(slide, index) in filteredSlides" :key="index" class="cursor-pointer" @click="changeSlide(index)">
                <img :src="slide.image" alt="Slide" class="small-image shadow-md">
                <div class="leading-relaxed flex items-center number text-4xl h-12"><p>{{ slide.number }}</p>/</div>
              </div>
            </transition-group>
          </div>
          <div class="flex gap-4 justify-end items-end z-1">
            <button class="slider-button slider-button-prev" @click="prevSlide"> &#8592;</button>
            <button class="slider-button slider-button-next" @click="nextSlide">&#8594;</button>
          </div>
          <div>
            <img :src="circle" alt="" class="decord">
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
.target{
  font-family: "BT Beau Sans", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 5%;
}
.reponsive-image-title {
  width: 66.6667%;
  color: white;
  font-size: 2.25rem;
  font-weight: 600; 
  display: flex;
  gap: 1.5rem; 

  @media (max-width: 1024px) {
    width: 100%;
    font-size: 1.875rem;
    justify-content: center;
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
    justify-content: center;
  }
}

.small-section {
  width: 37%;
  @media (max-width: 1024px){
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 24px;
    align-items: center;
  }
}
.small-slide-section {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 24px;
  @media (max-width: 1024px){
    width: 100%;
    gap: 0px;
  }
}
.slide-reponsive {
  @media (max-width: 1024px){
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 48px;
  }
}
.big-section {
  width: 63%;
  @media (max-width: 1024px){
    width: 100%;
  }
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
  object-fit: cover;
  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
  }
}
.small-image {
  width: 411px;
  height: 211px;
  object-fit: cover;
  @media (max-width: 1024px) {
    overflow: hidden;
    width: 80%;
    height: auto;
  }
}
.overflow-hidden {
  overflow-x: auto;
  white-space: nowrap;
  @media (max-width: 1024px) {
    margin-left: 56px;
  }
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
  min-height: 900px;
  @media (max-width: 1024px) {
    min-height: 700px;
  }
}
.number {
  color: #A8F4FC;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
}

.target-text {
  font-family: Montserrat;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0%;
  width: 411px;
  @media (max-width: 1024px) {
    display: none;
  }
}
.decord {
  position: absolute;
  left: -75%;
  bottom: -33%;
  @media (max-width: 1024px) {
    transform: scale(0.7);
    position: absolute;
    bottom: -80%;
    right: -25%;
  }
  @media (max-width: 767px) {
    transform: scale(0.4);
    position: absolute;
    bottom: -45%;
    left: -200%;
  }
}

.slider-button {
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #59CBEC;
  color: #59CBEC;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transition: background 0.3s, opacity 0.3s;
}

.slider-button:hover {
  background: rgba(255, 255, 255, 0.5);
}

.slider-button-prev {
  color: aliceblue;
  opacity: 0.5;
}
.height-reponsive{
  @media (max-width: 1024px) {
    height: 24px;
}
}
.slider-button-next {
  background: white;
  color: #26AAE1;
  opacity: 1;
}
</style>
