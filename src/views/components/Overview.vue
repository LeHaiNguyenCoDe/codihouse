<template>
    <section class="project-overview--container bg-white w-full/12">
        <div class="project-overview--main px-8">
            <div class="project-overview--main-content">
                <div class="content-square"></div>
                <h6 class="content-title">
                    {{ projectOverview.title }}
                </h6>
            </div>
            <div class="project-overview--main-content-text">
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
                    <span
                        class="highlight-gradient font-bold bg-gradient-to-r from-[#A1CC95] via-[#26AAE1] to-[#26AAE1] bg-[10%] bg-clip-text text-transparent px-2 py-1 rounded-md">
                        {{ projectOverview.brilliance }}
                        <img :src="water" alt="water">
                    </span>
                    {{ projectOverview.impact }}
                </div>
                <div>
                    {{ projectOverview.efficiency }}
                </div>
            </div>
            <div class="project-overview--main-details flex justify-end items-center">
                <p class="lg:w-1/3 md:w-full">{{ miniView.details }}</p>
            </div>
        </div>

        <div class="project-video left-1/27 w-11/12 h-full mt-24 z-10">
            <video class="w-full h-full object-cover" autoplay loop muted playsinline>
                <source src="@/assets/videos/Showreel_-Web-gallery-[remix].mp4" type="video/mp4">
            </video>
        </div>

        <!-- <div class="project-background mt-24">
            <img :src="group_bg" alt="" class=" top-1/3 left-0">
            <img :src="bg_ellipse" alt="" class="top-1/3 right-0">
        </div> -->
    </section>
</template>

<script lang="ts" setup>
import water from '@/assets/images/icon/water.svg';
import group_bg from '@/assets/images/bg/group_bg.svg';
import bg_ellipse from '@/assets/images/bg/group_bg_ellipse.svg';
import Info from './info.vue';
import Slider from './slide.vue';

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