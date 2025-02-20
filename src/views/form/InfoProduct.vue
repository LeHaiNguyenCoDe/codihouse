<template>
    <section class="info-product--container font-montserrat pt-10 relative">
        <!-- Info-product -->
        <ProjectOverview 
            title="Tổng quan dự án"
            :content="[
                { text: '<span class=\'font-bold bg-gradient\'>Đổi mới</span> giao diện website,' },
                { text: 'lan tỏa <span class=\'font-bold bg-gradient\'>sự rực rỡ</span> <img class=\'w-[12vw] lg:w-auto\' src=\'' + MEDIA.images.waterSurface + '\' alt=\'Water Image\' /> và nâng cao' },
                { text: 'hiệu quả tương tác.' }
            ]"
            description="Dự án thiết kế website với giao diện mới mang đến một diện mạo tươi mới, <br>
                hiện đại, thể hiện tinh thần 'Thổi hồn vào sự rực rỡ của cuộc sống' và tối ưu<br>
                hóa hiệu quả tương tác với khách hàng. Website được xây dựng để trở thành<br>
                một công cụ mạnh mẽ hỗ trợ các hoạt động marketing và kinh doanh, đồng <br>
                thời mang đến trải nghiệm số vượt trội.<br>"
            :backgroundImages="[
                { src: MEDIA.images.pathGroup, alt: 'info-product', class: 'absolute xl:top-[15rem] md:top-20rem top-20rem left-[-50px] xl:w-auto md:w-auto w-70vw h-auto' },
                { src: MEDIA.images.ellipse, alt: 'info-product', class: 'absolute xl:top-[15rem] md:top-20rem top-20rem bottom-0 right-0 xl:w-auto md:w-auto w-50vw h-auto' }
            ]"
            :videoSrc="MEDIA.videos.showreel"
            />


        <!-- Suntory Pepsico -->
        <SuntoryPepsicoInfo 
            title="Về Suntory Pepsico"
            companyName="Suntory Pepsico"
            description="
            là một trong những doanh<br>
                        nghiệp hàng đầu trong ngành F&B tại Việt<br>
                        Nam, đồng thời tiên phong trong các hoạt<br>
                        động phát triển bền vững. Công ty luôn nỗ<br>
                        lực mang đến những sản phẩm chất lượng<br>
                        cao, đồng thời góp phần xây dựng một tương<br>
                        lai tốt đẹp hơn cho cộng đồng và môi trường.
            "
            :imageSrc="MEDIA.images.pathGroup_01"
            imageAlt="suntory-pepsico"
            :stats="[
                { number: 6, title: 'Nhà máy sản xuất', subtitle: 'Trải dài khắp Việt Nam', colSpan: 1 },
                { number: 13, title: 'Thương hiệu hàng đầu', subtitle: 'Phục vụ người Việt', colSpan: 1 },
                { colSpan: 1, empty: true },  // Cột trống
                { number: 5, title: 'Văn phòng', subtitle: 'Tại tất cả các thành phố lớn', colSpan: 1 },
                { colSpan: 2, empty: true },  // Cột trống lớn
                { number: 1, title: 'Công ty đồ uống', subtitle: 'Uy tín tại Việt Nam (2019-2024, theo Vietnam Report)', colSpan: 2 }
            ]"
        />

        <!-- Project Objective Slider -->
        <div class="info-product-slider relative mt-31 xl:h-[63rem] md:h-[60vw] h-80vw bg-gradient-blue space-y-8 z-10">
            <div class="info-product--title mx-auto pt-12 w-11/12 grid grid-cols-3">
                <img :src="Ellipse_19179" alt="" class="absolute xl:top-[-40%] md:top-[-70%] top-[-80%] w-55vw left-0 z-0">
                <div class="xl:col-span-1 md:col-span-1 col-span-2 flex items-start">
                    <div class="info-product--title-square bg-[#7BE2F6] mt-0.5"></div>
                    <label class="font-medium text-title-regular color-white ml-2">Tổng quan dự án</label>
                </div>
                <div class="col-start-3 col-span-1 text-white text-[16px] ml-5 w-11/12 xl:flex md:hidden hidden">
                    Dự án thiết kế website mới cho Suntory Pepsico hướng đến việc "đánh thức mọi giác quan" của
                    người dùng, mang đến một trải nghiệm số đầy cảm xúc và kết nối sâu sắc với tinh thần "Thổi hồn vào
                    sự rực rỡ
                </div>
            </div>
            <div
                class="info-product-slider--content w-full mx-auto flex gap-0 overflow-hidden relative z-10 xl:gap-6 lg:gap-8 md:gap-6 gap-3">
                <div class="behind-main slider-small w-4vw -mx-[1vw]">
                    <transition-group name="fade" tag="div" class="flex justify-end mx-[1vw]">
                        <div v-if="behindSlide" @click="changeSlide(mainSlideIndex - 1)">
                            <img :src="behindSlide.image" alt="Slide"
                                class="xl:w-[411px] xl:h-[211px] object-cover md:w-[25vw] md:h-[15vw] w-25vw">
                        </div>
                    </transition-group>
                </div>

                <div class="slider-main w-[60vw] relative z-10">
                    <transition name="fade" mode="out-in" class="w-60vw">
                        <img :src="mainSlide.image" :key="mainSlide.image" alt="Main Slide"
                            class="xl:w-60vw xl:h-[536px] md:w-[60vw] md:h-[35vw] w-55vw object-cover ">
                    </transition>
                    <transition name="fade" mode="out-in" class="flex items-start xl:w-8/12 lg:w-full gap-4">
                        <div class="font-[Montserrat] font-bold xl:text-32px lg:text-32px md:text-24px text-12px xl:leading-36px lg:leading-36px md:leading-36px leading-12pxtracking-[2%] text-white"
                            :key="mainSlide.text">
                            <span
                                class="font-[Montserrat] font-normal xl:text-32px lg:text-32px md:text-24px text-12px xl:leading-36px lg:leading-36px md:leading-36px leading-12px tracking-[5%] text-[#A8F4FC]">{{
                                    mainSlide.number }}/</span>
                            <span class="font-bold">{{ mainSlide.text }}</span>
                        </div>
                    </transition>
                </div>

                <div class="h-full grid grid-rows-2 gap-7 items-end w-[30vw]">
                    <div class="slider-small">
                        <transition-group name="fade" tag="div" class="flex xl:gap-6 md:gap-6 gap-2">
                            <div v-for="(slide, index) in filteredSlides" :key="index"
                                @click="changeSlide(mainSlideIndex + index + 1)">
                                <img :src="slide.image" alt="Slide"
                                    class="xl:w-[411px] xl:h-[211px] object-cover md:w-[25vw] md:h-[15vw] w-25vw">
                                <div
                                    class="font-[Montserrat] font-normal xl:text-32px lg:text-32px md:text-24px text-12px xl:leading-36px lg:leading-36px md:leading-36px leading-12px tracking-[5%] text-[#A8F4FC] h-10px">
                                    <p>{{ slide.number }}/</p>
                                </div>
                            </div>
                        </transition-group>
                    </div>
                    <div
                        class="absolute xl:bottom-12% lg:bottom-15% md:bottom-20% xl:left-84vw lg:left-82vw md:left-80vw bottom-10vw left-70vw flex gap-2 xl:scale-100 md:scale-70 scale-50">
                        <button :disabled="mainSlideIndex === 0"
                            class="w-14 h-14 flex justify-center items-center info-product-slider-button border-[#D3FCFD] rounded-full bg-transparent disabled:opacity-50"
                            @click="prevSlide">
                            <img src="../../assets/images/icon/ArrowLeft.png" alt="">
                        </button>
                        <button :disabled="mainSlideIndex === slides.length - 1"
                            class="w-14 h-14 flex justify-center items-center rounded-full border-[#26AAE1] text-[#26AAE1] bg-[#A8F4FC] info-product-slider-button opacity-100 disabled:opacity-50"
                            @click="nextSlide">
                            <img src="../../assets/images/icon/ArrowRight.png" alt="">
                        </button>
                    </div>
                </div>
            </div>
            <div
                class="absolute xl:bottom-[5%] xl:left-[65%] xl:scale-100 md:scale-70 -translate-x-1/2 z-0 md:bottom-[-15%] md:left-[65%]">
                <img src="../../assets/images/info/group/path_group_03.png" class="w-[30.19rem] h-[31.64rem]"
                    alt="path_group">
            </div>
        </div>

        <!-- Solution Experience -->
        <SolutionExperience />

        <!-- Sincere Connection -->
        <div class="info__product--sincere w-full">
            <div class="solution--experience bg-white min-h-[550px] max-h-[946px]">
                <title-solution title="Kết Nối Chân Thành" content="
                    Cấu trúc thông tin rõ ràng, 
                    nội dung đa dạng, dễ tiếp cận, 
                    cung cấp cái nhìn toàn diện về thương hiệu cho khách hàng. 
                    Mục tiêu là tạo ra một không gian số thân thiện, 
                    nơi người dùng cảm thấy được lắng nghe và kết nối 
                    sâu sắc với thương hiệu." number="02" titleColor="#3882C4" contentColor="#777E91" my="5%"
                    textStroke="3px #26AAE1" />
            </div>

            <div class="info__product--sincere-content relative">
                <div class="mx-auto w-11/12 grid grid-cols-2 gap-6 md:gap-6 absolute z-10 items-end w-full">
                    <div class="col-span-1 grid items-end justify-end"> <img :src="Ellipse_1"
                            class="w-[150px] lg:w-[496px] lg:h-[496px]" alt="iconv-lite" /></div>
                    <div class="col-span-1 absolute xl:top-1/5 lg:top-[2%] md:top-9/12 top-1/5 xl:left-1/2 lg:left-[40%] md:left-7/12 left-1/2 z-0"> <img :src="iconvLite" class="w-[90px] lg:w-[281.46px] lg:h-[281.46px]"
                            alt="iconv-lite" /></div>
                </div>
                <div class="mx-auto w-11/12 grid grid-cols-3 gap-6 md:gap-6 relative">
                    <div class="col-span-1"><img :src="group_01" class="w-full relative z-10" alt="iconv-lite" /></div>
                    <div class="col-span-1"></div>
                    <div class="col-span-1"><img :src="group_02" class="w-full relative z-10" alt="iconv-lite" /></div>
                    <div class="col-span-1"></div>
                    <div class="col-span-1"><img :src="group_03" class="w-full relative z-10" alt="iconv-lite" /></div>
                    <div class="col-span-1"><img :src="group_04" class="w-full relative z-10" alt="iconv-lite" /></div>
                </div>
            </div>

            <!-- Split layout -->
            <div class="relative w-full mt-5">
                <div class="absolute inset-0 flex justify-center items-center">
                    <img src="@/assets/images/header/vector.png" class="opacity-40 w-[150px] lg:w-[40rem]"
                        alt="iconv-lite" />
                </div>

                <div class="mx-auto w-11/12 grid grid-cols-2 gap-2 relative z-10">
                    <div class="col-span-1">
                        <img src="@/assets/images/info/rectangle/rectangle_30413.svg" class="w-full" alt="iconv-lite" />
                    </div>
                    <div class="col-span-1">
                        <img src="@/assets/images/info/rectangle/rectangle_30412.svg" class="w-full" alt="iconv-lite" />
                    </div>
                </div>

                <!-- Video Display -->
                <div class="info__product--sincere-display relative w-full mt-5 flex justify-center">
                    <video class="w-11/12 lg:w-9/12 h-auto object-cover" autoplay loop muted playsinline>
                        <source src="@/assets/videos/Showreel_-Web-gallery-%5Bremix%5D.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>

        <!-- Testimonial Card -->
        <div
            class="info__product--testimonial-card flex justify-center items-center bg-[linear-gradient(0deg,#3882C4_0.03%,#26AAE1_100.03%)] mt-20 w-full relative">
            <div class="container mx-auto w-full bg-gradient-smart xl:h-[65.69rem] lg:h-[55.96rem] md:h-[45rem] h-[26rem] relative">
                <img src="@/assets/images/info/card/card_2085665765.png"
                    class="absolute w-[40vw] lg:w-auto max-w-[40rem] min-w-[10rem] -top-[5vw] left-[10vw]"
                    alt="iconv-lite" />

                <img src="@/assets/images/info/card/card_timeline.png"
                    class="absolute top-20 right-0 w-[40vw] transform-[50%] max-w-[40rem] min-w-[10rem]"
                    alt="iconv-lite" />

                <div class="absolute text-white xl:w-[40vw] md:w-full xl:max-w-[40rem] md:max-w-[30rem] min-w-[8rem] xl:top-1/3 lg:top-[40%] md:top-1/3 top-[40%] xl:left-1/2 lg:left-[55%] md:left-[50%] left-[43%] -translate-x-2/6 -translate-y-1/6 text-left z-20">    
                    <img :src="Shape_brand" alt="" class="xl:scale-100 md:scale-90 scale-70">
                    <p class="font-[Montserrat] font-bold xl:text-[32px] md:text-[24px] text-12px xl:leading-[36px] md:leading-[36px] leading-[24px] tracking-[2%] whitespace-nowrap">Điều Hướng Hhông Minh</p>
                    <p class="xl:text-[16px] md:text-14px text-6px xl:leading-[24px] md:leading-[24px] leading-[10px] tracking-[0%]">Hệ thống điều hướng được thiết kế trực <br>
                        quan, dễ sử dụng, giúp khách hàng nhanh <br>
                        chóng tìm thấy thông tin về sản phẩm, tin <br>
                        tức.
                    </p>
                    <p class="xl:text-[16px] md:text-14px text-6px xl:leading-[24px] md:leading-[24px] leading-[10px] tracking-[0%]">Sử dụng CTA rõ ràng, hấp dẫn, hướng dẫn <br>
                        người dùng thực hiện hành động mong <br>
                        muốn.
                    </p>
                </div>

                <img src="@/assets/images/info/card/card.png"
                    class="absolute w-[30vw] lg:w-auto max-w-[40rem] min-w-[8rem] xl:top-[15vw] md:top-[25vw] top-[25vw] max-top-[40rem] min-top-[10rem] left-0"
                    alt="iconv-lite" />

                <img src="@/assets/images/info/card/card_2085665767.png"
                    class="absolute w-[30vw] lg:w-auto max-w-[40rem] min-w-[8rem] md:top-[45vw] xl:top-[35vw] top-[50vw] max-top-[40rem] min-top-[10rem] xl:right-1/10 md:right-0 right-0 z-10"
                    alt="iconv-lite" />
            </div>
            <div class="">
                <div><img :src="rectangle" alt="" class="absolute left-0 bottom-0 w-full"></div>
                <div class="container"><img :src="nature" alt="" class="absolute top-80 right-15 lg:right-140 lg:w-auto lg:max-w-full lg:top-[45rem] z-1 w-[70vw] transform-[50%] max-w-[40rem] min-w-[10rem]"></div>
                <div><img :src="path_group_04" alt="" class="absolute left-0 bottom-[-2%] xl:w-[371px] xl:h-[390px] lg:w-[23vw] md:w-[20vw] w-25vw"></div>
                <div class="max-w-12"><img :src="path_group_05" alt="" class="absolute xl:right-0 md:right-0 right-[-4%] xl:bottom-[-10%] md:bottom-[-15%] md:bottom-[-25%] bottom-[-35%] w-[full] h-[390px] z-0 xl:scale-100 scale-70"></div>
            </div>
        </div>
        <!-- Water bottle card -->
        <div class="relative w-full flex flex-col mt-[30%] gap-10">
            <div class="flex flex-col items-center gap-8">
                <div class="flex flex-col items-center gap-6">
                    <img :src="card_image_03" alt="">
                    <img :src="Shape_brand1" alt="">
                </div>
                <div class="flex flex-col text-center w-1/2 gap-6">
                    <span class="text-[#124B96] xl:text-32px lg:text-32px md:text-24px text-18px xl:leading-[24px] md:leading-[24px] leading-[18px] tracking-[2%] font-semibold">Tương Tác Thú Vị</span>
                    <span class="text-[#777E91] xl:text-24px lg:text-20px md:text-18px text-12px xl:leading-32px md:leading-32px leading-18px">Chú trọng đến các tương tác nhỏ như hover effect, click animation, transition để tạo cảm giác sống động và thú vị.</span>
                </div>
            </div>
            <div class="grid col-span-2 row-span-2 gap-x-8 p-10 bg-gradient-water-bottle-card relative">
                <div class="col-start-1 row-start-1 flex justify-end relative z-10"><img :src="card_image_01" alt="" class="xl:w-fit md:w-35vw w-35vw"></div>
                <div class="col-start-2 row-start-2 -my-10 relative z-10"><img :src="card_image_02" alt="" class="xl:w-fit md:w-35vw w-35vw"></div>
                <div class="absolute xl:top-1/6 xl:left-1/3 lg:top-0 md:top-[-10%] md:left-1/4 top-[-50%] xl:scale-100 lg:scale-70 md:scale-60 scale-30"><img :src="vector" alt=""></div>
            </div>
            <div class="pt-10 relative">
                <img :src="forest" alt="" class="w-full">
                <img :src="arrow" alt="" class="absolute left-0 top-0 xl:w-fit md:w-30vw w-30vw">
            </div>
        </div>
        <MobileSection />
    </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import image1 from '../../assets/images/info/slider/image_slide_01.svg';
import image2 from '../../assets/images/info/slider/image_slide_02.svg';
import image3 from '../../assets/images/info/slider/image_slide_03.svg';
import iconvLite from "@/assets/images/info/group/group_icon.png"
import Ellipse_1 from "@/assets/images/info/group/ellipse_19180.png"
import group_01 from "@/assets/images/info/group/group_1000004258.png"
import group_02 from "@/assets/images/info/group/group_1000004255.png"
import group_03 from "@/assets/images/info/group/group_1000004256.png"
import group_04 from "@/assets/images/info/group/group_1000004257.png"
import nature from "@/assets/images/info/group/nature.svg"
import rectangle from "@/assets/images/header/rectangle.png"
import SolutionExperience from './SolutionExperience.vue';
import TitleSolution from "../components/titleSolution.vue";
import MobileSection from './MobileSection.vue';
import Shape_brand from "@/assets/images/icon/Shape_brand.svg"
import path_group_04 from "@/assets/images/info/group/path_group_04.png"
import path_group_05 from "@/assets/images/info/group/path_group_05.svg"
import card_image_03 from "@/assets/images/info/water-card/card-image-03.png"
import card_image_01 from "@/assets/images/info/water-card/card-image-01.png"
import card_image_02 from "@/assets/images/info/water-card/card-image-02.png"
import vector from "@/assets/images/info/water-card/vector.png"
import forest from "@/assets/images/info/water-card/forest.png"
import arrow from "@/assets/images/info/water-card/arrow.png"
import Shape_brand1 from "@/assets/images/info/water-card/Shape_brand.png"
import Ellipse_19179 from "@/assets/images/info/group/Ellipse_19179.png"

// Project Overview 
import ProjectOverview from './../components/ProjectOverview.vue';
import SuntoryPepsicoInfo from './../components/SuntoryPepsicoInfo.vue';
import { MEDIA } from './../../constants/media';



const slides = ref([
    { image: image1, number: "01", text: 'Khơi gợi cảm xúc và tạo ấn tượng mạnh mẽ' },
    { image: image2, number: "02", text: 'Tối ưu trải nghiệm người dùng (UX/UI)' },
    { image: image3, number: "03", text: 'Tăng cường tương tác và kết nối với khách hàng' }
]);

const mainSlideIndex = ref(0);

const mainSlide = computed(() => slides.value[mainSlideIndex.value]);
const behindSlide = computed(() => slides.value[mainSlideIndex.value - 1] || null);
const filteredSlides = computed(() => slides.value.slice(mainSlideIndex.value + 1));

const nextSlide = () => {
    if (mainSlideIndex.value < slides.value.length - 1) {
        mainSlideIndex.value += 1;
    }
};

const prevSlide = () => {
    if (mainSlideIndex.value > 0) {
        mainSlideIndex.value -= 1;
    }
};

const changeSlide = (index: number) => {
    if (index >= 0 && index < slides.value.length) {
        mainSlideIndex.value = index;
    }
};
</script>
