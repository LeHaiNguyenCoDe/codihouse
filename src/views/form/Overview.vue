<template>
    <section class="project-overview--container bg-white">
        <div class="project-overview--main p-16">
            <div class="project-overview--main-content text-3xl font-sans text-[#777E91] -mb-8 flex items-center gap-1">
                <div class="content-square w-3 h-3 bg-[#26AAE1]"></div>
                <h6 class="content-title over-view">
                    {{ projectOverview.title }}
                </h6>
            </div>
            <div class="project-overview--main-content-text text-view lg:text-4xl text-[#777E91]">
                <div class="mini-view mb-5">
                    <span class="highlight-text font-bold text-[#A1CC95] px-2 py-1 rounded-md">
                        {{ projectOverview.innovation }}
                    </span>
                    <span>
                        {{ projectOverview.description }}
                    </span>
                </div>
                <div class="mini-view mb-5">
                    {{ projectOverview.initiative }}
                    <span class="highlight-gradient px-2 py-1 rounded-md">
                        {{ projectOverview.brilliance }}
                        <img :src="water" alt="water" class="water">
                    </span>
                    {{ projectOverview.impact }}
                </div>
                <div>
                    {{ projectOverview.efficiency }}
                </div>
            </div>
            <div class="project-overview--main-details flex justify-end items-center text-miniview text-[#777E91]">
                <p class="lg:w-1/2 md:w-full">{{ miniView.details }}</p>
            </div>
        </div>

        <div class="project-video relative ">
            <img :src="group_bg" alt="group_bg image" class="group_bg">
            <div class="absolute z-1 w-11/12 ml-[4%] mt-16">
                <video class="w-full h-full object-cover z-30" autoplay loop muted playsinline>
                    <source src="../../assets/videos/Showreel_-Web-gallery-%5Bremix%5D.mp4" type="video/mp4">
                </video>
            </div>
            <img :src="bg_ellipse" alt="bg_ellipse image" class="bg_ellipse">
        </div>
    </section>


</template>

<script lang="ts" setup>
import water from '@/assets/images/icon/water.svg';
import group_bg from '@/assets/images/bg/group_bg.svg';
import bg_ellipse from '@/assets/images/bg/group_bg_ellipse.svg';
import Info from './Info.vue';
import Slider from './Sliderview.vue';

const projectOverview = {
    title: "Tổng Quan Dự Án",
    innovation: "Đổi mới",
    description: " giao diện website, ",
    initiative: "  lan tỏa ",
    brilliance: "sự rực rỡ",
    impact: " và nâng cao",
    efficiency: "hiệu quả tương tác."
};
const miniView = { details: "Dự án thiết kế website với giao diện mới mang đến một diện mạo tươi mới, hiện đại, thể hiện tinh thần Thổi hồn vào sự rực rỡ của cuộc sống và tối ưu hóa hiệu quả tương tác với khách hàng. Website được xây dựng để trở thành một công cụ mạnh mẽ hỗ trợ các hoạt động marketing và kinh doanh, đồng thời mang đến trải nghiệm số vượt trội." }
</script>
<style>
.highlight-gradient {
    font-weight: bold;
    background: linear-gradient(to right, #A1CC95, #26AAE1, #26AAE1, #26AAE1, #26AAE1);
    background-size: 100%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.group_bg {
    position: absolute;
    left: -4%;
    top: -250px;
    z-index: 0;
    @media (max-width: 767px) {
    transform: scale(0.8);
  }
}

.water {
  @media (max-width: 1024px) {
    display: none;
  }
}

.bg_ellipse {
    position: absolute;
    right: 0;
    top: -300px;
    z-index: 10;
    
}
.text-view{
    font-family: Montserrat;
    font-weight: 700;
    font-size: 64px;
    line-height: 78.02px;
    letter-spacing: 0%;

    @media (max-width: 1024px) {
    font-size: 36px;
    line-height: 32px;
  }

}
.text-miniview{
    font-family: Montserrat;
    font-weight: 400;
    font-size: 17.2px;
    line-height: 24px;
    letter-spacing: 0%;

    @media (max-width: 1024px) {
    font-size: 14px;
    line-height: 18px;
  }
}
.over-view {
    font-family: Montserrat;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 5%;
}
</style>
