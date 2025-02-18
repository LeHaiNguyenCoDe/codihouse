<script setup lang="ts">
import Sliderview from './Sliderview.vue';
import SolutionExperience from './SolutionExperience.vue';

</script>

<template>
    <section class="info-product--container font-montserrat pt-10 relative">
        <!-- Info-product -->
        <div class="info-product--content">
            <div class="relative z-10 mx-auto w-11/12">
                <div class="info-product--title flex items-center">
                    <div class="info-product--title-square bg-brand-primary-light"></div>
                    <label class="font-medium text-title-regular color-darks ml-2">Tổng quan dự án</label>
                </div>
                <div
                    class="lg:text-[64px] md:text-[48px] sm:text-[32px] text-[24px] font-bold text-title-bold color-darks mt-9">
                    <span class="font-bold bg-gradient">Đổi mới</span> giao diện website,
                </div>
                <div
                    class="lg:text-[64px] md:text-[48px] sm:text-[32px] text-[24px] font-bold text-title-bold color-darks mt-4">
                    lan tỏa <span class="font-bold bg-gradient">sự rực rỡ</span>
                    <img src="../../assets/images/info/water-surface.png" alt="water" class="me-3 pl-6"> và nâng cao
                </div>
                <div
                    class="lg:text-[64px] md:text-[48px] sm:text-[32px] text-[24px] font-bold text-title-bold color-darks mt-4">
                    hiệu quả tương tác.
                </div>
                <div class="info-product--description-text w-full flex justify-end">
                    <div class="sm:w-1/2 w-full text-[16px] color-darks mt-10 tracking-wide">
                        <p>
                            Dự án thiết kế website với giao diện mới mang đến một diện mạo tươi mới, <br>
                            hiện đại, thể hiện tinh thần "Thổi hồn vào sự rực rỡ của cuộc sống" và tối ưu<br>
                            hóa hiệu quả tương tác với khách hàng. Website được xây dựng để trở thành<br>
                            một công cụ mạnh mẽ hỗ trợ các hoạt động marketing và kinh doanh, đồng <br>
                            thời mang đến trải nghiệm số vượt trội.<br>
                        </p>
                    </div>
                </div>
            </div>

            <div class="info-product--image absolute top-0 left-0 w-full h-full z-0">
                <img src="../../assets/images/info/group/path_group.png" alt="info-product"
                    class="absolute top-[15rem] left-[-50px] w-auto h-auto">
                <img src="../../assets/images/info/group/ellipse.png" alt="info-product"
                    class="absolute  top-[15rem] bottom-0 right-0 w-auto h-auto">
            </div>

            <div class="project-video relative flex items-center justify-center mt-15 z-10">
                <div class="project-video-group container flex items-center justify-center">
                    <video class="w-full lg:h-[522px] sm:h-full object-cover" autoplay loop muted playsinline>
                        <source src="@/assets/videos/Showreel_-Web-gallery-[remix].mp4" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>

        <!-- Suntory Pepsico -->
        <div class="pt-20 relative w-full">
            <div class="mx-auto w-11/12 flex flex-row items-center md:items-start">
                <!-- Cột trái: Nội dung văn bản -->
                <div class="w-full md:w-1/2 relative z-10">
                    <div class="info-product--title flex items-center">
                        <div class="info-product--title-square bg-brand-primary-light"></div>
                        <label class="font-medium text-title-regular color-darks ml-2">Về Suntory Pepsico</label>
                    </div>
                    <div
                        class="text-[8px] md:text-[14px] lg:text-[24px] font-semibold color-darks mt-9 leading-relaxed">
                        <span class="font-bold color-blues">Suntory Pepsico</span> là một trong những doanh<br>
                        nghiệp hàng đầu trong ngành F&B tại Việt<br>
                        Nam, đồng thời tiên phong trong các hoạt<br>
                        động phát triển bền vững. Công ty luôn nỗ<br>
                        lực mang đến những sản phẩm chất lượng<br>
                        cao, đồng thời góp phần xây dựng một tương<br>
                        lai tốt đẹp hơn cho cộng đồng và môi trường.
                    </div>
                </div>

                <div class="relative flex justify-end">
                    <img src="../../assets/images/info/group/path_group_01.png" alt="suntory-pepsico"
                        class="w-30 lg:w-[30rem] sm:w-[70%] mt-10 md:mt-0">
                </div>
            </div>

            <!-- Suntory Number Section -->
            <div class="suntory--number mt-16 relative w-full bg-white font-manrope">
                <div class="mx-auto w-11/12 grid grid-cols-4 gap-8 md:gap-12 relative">
                    <div class="col-span-1">
                        <p class="lg:text-[96px] text-[50px] font-bold text-[#26AAE1] m-0">06</p>
                        <p class="lg:text-[24px] text-[16px] font-bold text-[#26AAE1]">Nhà máy sản xuất</p>
                        <p class="color-darks">Trải dài khắp Việt Nam</p>
                    </div>
                    <div class="col-span-1">
                        <p class="lg:text-[96px] text-[50px] font-bold text-[#26AAE1] m-0">13</p>
                        <p class="lg:text-[24px] text-[16px] font-bold text-[#26AAE1]">Thương hiệu hàng đầu</p>
                        <p class="color-darks">Phục vụ người Việt</p>
                    </div>
                    <div class="col-span-1"></div>
                    <!-- Ô 4: Văn phòng -->
                    <div class="col-span-1">
                        <p class="lg:text-[96px] text-[50px] font-bold text-[#26AAE1] m-0">05</p>
                        <p class="lg:text-[24px] text-[16px] font-bold text-[#26AAE1]">Văn phòng</p>
                        <p class="color-darks">Tại tất cả các thành phố lớn</p>
                    </div>
                    <div class="col-span-2"></div>
                    <div class="col-span-2">
                        <p class="sm:text-[64px] text-[50px] md:text-[80px] font-bold text-[#26AAE1] m-0">Top 1</p>
                        <p class="sm:text-[24px] font-bold text-[#26AAE1]">Công ty đồ uống</p>
                        <p class="sm:text-[24px] text-[16px] color-darks">Uy tín tại Việt Nam (Năm 2019-2024, theo
                            Vietnam Report)</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Project Objective Slider -->
        <div class="info-product-slider relative mt-30 xl:h-[63rem] md:h-[60vw] h-80vw bg-gradient-blue space-y-8">
            <div class="info-product--title mx-auto pt-12 w-11/12 grid grid-cols-3">
                <div class="xl:col-span-1 md:col-span-1 col-span-2 flex items-start">
                    <div class="info-product--title-square bg-[#7BE2F6] mt-0.5"></div>
                    <label class="font-medium text-title-regular color-white ml-2">Tổng quan dự án</label>
                </div>
                <div class="col-start-3 col-span-1 text-white text-[16px] -ml-4 w-11/12 xl:flex md:hidden hidden">
                    Dự án thiết kế website mới cho Suntory Pepsico hướng đến việc "đánh thức mọi giác quan" của
                    người dùng, mang đến một trải nghiệm số đầy cảm xúc và kết nối sâu sắc với tinh thần "Thổi hồn vào sự rực rỡ
                </div>
            </div>
            <div class="info-product-slider--content w-full mx-auto flex xl:gap-3 lg:gap-3 md:gap-3 gap-0 overflow-hidden relative z-10">
                <!-- Ảnh đã qua (behind-main) -->
                <div class="behind-main slider-small absolute xl:left-1% lg:left-1% md:left-1% left-[-3%] w-20px">
                    <transition-group name="fade" tag="div" class="flex justify-end">
                        <div v-if="behindSlide" @click="changeSlide(mainSlideIndex - 1)">
                        <img :src="behindSlide.image" alt="Slide" class="xl:w-[411px] xl:h-[211px] object-cover md:w-[25vw] md:h-[15vw] w-25vw">
                        </div>
                    </transition-group>
                </div>
                <!-- Ảnh chính (slider-main) -->
                <div class="slider-main mx-1/24 w-[55%]">
                    <transition name="fade" mode="out-in">
                        <img :src="mainSlide.image" :key="mainSlide.image" alt="Main Slide" class="xl:w-[845px] xl:h-[536px] md:w-[55vw] md:h-[35vw] w-55vw">
                    </transition>
                    <transition name="fade" mode="out-in" class="flex items-start xl:w-8/12 lg:w-full gap-4">
                        <div class="font-[Montserrat] font-bold xl:text-32px lg:text-32px md:text-24px text-12px xl:leading-36px lg:leading-36px md:leading-36px leading-12pxtracking-[2%] text-white" :key="mainSlide.text">
                            <span class="font-[Montserrat] font-normal xl:text-32px lg:text-32px md:text-24px text-12px xl:leading-36px lg:leading-36px md:leading-36px leading-12px tracking-[5%] text-[#A8F4FC]">{{ mainSlide.number }}/</span>
                            <span class="font-bold">{{ mainSlide.text }}</span>
                        </div>
                    </transition>
                </div>
                    <!-- Ảnh nhỏ còn lại (slider-small) -->
                <div class="h-full grid grid-rows-2 gap-7 items-end">
                    <div class="slider-small">
                        <transition-group name="fade" tag="div" class="flex xl:gap-7 md:gap-7 gap-2">
                            <div v-for="(slide, index) in filteredSlides" :key="index" @click="changeSlide(mainSlideIndex + index + 1)">
                                <img :src="slide.image" alt="Slide" class="xl:w-[411px] xl:h-[211px] object-cover md:w-[25vw] md:h-[15vw] w-25vw">
                                <div class="font-[Montserrat] font-normal xl:text-32px lg:text-32px md:text-24px text-12px xl:leading-36px lg:leading-36px md:leading-36px leading-12px tracking-[5%] text-[#A8F4FC] h-10px">
                                    <p>{{ slide.number }}/</p>
                                </div>
                            </div>
                        </transition-group>
                    </div>

                    <!-- Nút điều hướng -->
                    <div class="absolute xl:bottom-12% lg:bottom-15% md:bottom-20% xl:left-85% lg:left-80% md:left-75% bottom-22% left-70% flex gap-2 xl:scale-100 md:scale-70 scale-50">
                        <button
                            :disabled="mainSlideIndex === 0"
                            class="w-14 h-14 flex justify-center items-center info-product-slider-button border-[#D3FCFD] rounded-full bg-transparent disabled:opacity-50"
                            @click="prevSlide"
                        >
                            <img src="../../assets/images/icon/ArrowLeft.png" alt="">
                        </button>
                        <button
                            :disabled="mainSlideIndex === slides.length - 1"
                            class="w-14 h-14 flex justify-center items-center rounded-full border-[#26AAE1] text-[#26AAE1] bg-[#A8F4FC] info-product-slider-button opacity-100 disabled:opacity-50"
                            @click="nextSlide"
                        >
                            <img src="../../assets/images/icon/ArrowRight.png" alt="">
                        </button>
                    </div>
                </div>
            </div>
            <div class="absolute xl:bottom-[5%] xl:left-[65%] xl:scale-100 md:scale-70 -translate-x-1/2 z-0 md:bottom-[-15%] md:left-[65%]">
                <img src="../../assets/images/info/group/path_group_03.png" class="w-[30.19rem] h-[31.64rem]" alt="path_group">
            </div>
        </div>

        <!-- Solution Experience -->
        <SolutionExperience />
    </section>
</template>

<script lang="ts">
import { ref, computed } from 'vue';
import image1 from '../../assets/images/info/slider/image_slide_01.svg';
import image2 from '../../assets/images/info/slider/image_slide_02.svg';
import image3 from '../../assets/images/info/slider/image_slide_03.svg';

// Danh sách slide
const slides = ref([
  { image: image1, number: "01", text: 'Khơi gợi cảm xúc và tạo ấn tượng mạnh mẽ' },
  { image: image2, number: "02", text: 'Tối ưu trải nghiệm người dùng (UX/UI)' },
  { image: image3, number: "03", text: 'Tăng cường tương tác và kết nối với khách hàng' }
]);

// Chỉ số của slide chính
const mainSlideIndex = ref(0);

// Tính toán slide chính, slide đã qua và các slide còn lại
const mainSlide = computed(() => slides.value[mainSlideIndex.value]); // Ảnh lớn
const behindSlide = computed(() => slides.value[mainSlideIndex.value - 1] || null); // Ảnh đã qua
const filteredSlides = computed(() => slides.value.slice(mainSlideIndex.value + 1)); // Ảnh còn lại

// Chuyển sang ảnh tiếp theo
const nextSlide = () => {
  if (mainSlideIndex.value < slides.value.length - 1) {
    mainSlideIndex.value += 1;
  }
};

// Quay lại ảnh trước
const prevSlide = () => {
  if (mainSlideIndex.value > 0) {
    mainSlideIndex.value -= 1;
  }
};

// Thay đổi slide khi click vào ảnh nhỏ
const changeSlide = (index: number) => {
  if (index >= 0 && index < slides.value.length) {
    mainSlideIndex.value = index;
  }
};
</script>
