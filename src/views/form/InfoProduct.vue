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
        <div class="info-product-slider relative mt-30 h-[63rem] bg-gradient-blue space-y-8">
            <div class="info-product--title flex items-center mx-auto pt-12 w-11/12">
                <div class="info-product--title-square bg-brand-primary-light"></div>
                <label class="font-medium text-title-regular color-white ml-2">Tổng quan dự án</label>
            </div>
            <div class="info-product-slider--content w-full mx-auto flex gap-3 overflow-hidden">
                <div class="slider-main mx-1/24 w-[55%]">
                    <img src="../../assets/images/info/slider/image_slide_01.svg" alt="path_group" class="w-[845px] h-fit">
                    <div>
                        <div class="flex items-start w-7/12 gap-4">
                            <span class="font-[Montserrat] font-normal text-32px leading-36px tracking-[5%] text-[#A8F4FC]">01/</span>
                            <span class="font-[Montserrat] font-bold text-32px leading-36px tracking-[2%] text-white">Khơi gợi cảm xúc và tạo 
                                ấn tượng mạnh mẽ</span>
                        </div>
                    </div>
                </div>
                <div class="h-full grid grid-rows-2 gap-7 items-end">
                    <div class="slider-small flex gap-7">
                        <div class="slider-first-image">
                            <img src="../../assets/images/info/slider/image_slide_02.svg" alt="path_group" class="w-[411px] h-[211px] object-cover">
                            <div>
                                <div class="flex items-start w-7/12 gap-4">
                                    <span class="font-[Montserrat] font-normal text-32px leading-36px tracking-[5%] text-[#A8F4FC]">02/</span>
                                    <!-- <span class="font-[Montserrat] font-bold text-32px leading-36px tracking-[2%] text-white">Khơi gợi cảm xúc và tạo 
                                        ấn tượng mạnh mẽ</span> -->
                                </div>
                            </div>
                        </div>
                        <div class="slider-second-image">
                            <img src="../../assets/images/info/slider/image_slide_03.svg" alt="path_group" class="w-[411px] h-[211px] object-cover">
                            <div>
                                <div class="flex items-start w-7/12 gap-4">
                                    <span class="font-[Montserrat] font-normal text-32px leading-36px tracking-[5%] text-[#A8F4FC]">03/</span>
                                    <!-- <span class="font-[Montserrat] font-bold text-32px leading-36px tracking-[2%] text-white">Khơi gợi cảm xúc và tạo 
                                        ấn tượng mạnh mẽ</span> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-2 w-1/2 justify-end">
                        <button class="w-14 h-14 flex justify-center items-center border-2 border-[#59CBEC] text-[#59CBEC] rounded-full bg-white/30 transition-[background,opacity] duration-300 text-aliceblue opacity-50" @click="prevSlide"> &#8592;</button>
                        <button class="w-14 h-14 flex justify-center items-center border-2 border-[#59CBEC] rounded-full bg-white/30 transition-[background,opacity] duration-300 bg-white text-[#26AAE1] opacity-100" @click="nextSlide">&#8594;</button>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 left-[60%] -translate-x-1/2">
                <img src="../../assets/images/info/group/path_group_03.png" class="w-[30.19rem] h-[31.64rem]" alt="path_group">
            </div>
        </div>

        <!-- Solution Experience -->
        <SolutionExperience />
    </section>
</template>