<template>
    <section class="project-overview absolute xl:top-[48rem] left-0 right-0 bg-white px-8 w-full/12">
        <!-- Nội dung -->
        <div class="text-6xl text-gray-700 leading-relaxed font-sans font-bold px-8 -mt-1/18">
            <!-- Tiêu đề -->
            <h2 class="text-xl font-sans font-bold text-gray-500 -mb-4 flex items-center gap-2">
                {{ projectOverview.title }}
            </h2>
            <span class="font-bold text-[#A1CC95] px-2 py-1 rounded-md">
                {{ projectOverview.highlight1 }}
            </span>
            {{ projectOverview.content1 }}<br />
            {{ projectOverview.content2 }}
            <span class="font-bold bg-gradient-to-r from-[#A1CC95] via-[#26AAE1] to-[#26AAE1] 
           bg-[10%] bg-clip-text text-transparent px-2 py-1 rounded-md">
                {{ projectOverview.highlight2 }}
                <img :src="water" alt="water">
            </span>
            {{ projectOverview.content3 }}
            <br />
            {{ projectOverview.content4 }}
        </div>
        <p class="w-1/2 font-sans text-black ml-auto text-sm text-gray-500 px-8 -mt-1/20">{{ miniView.details }}</p>
        <div class="absolute left-1/27 w-11/12 h-full mt-24 z-10">
            <video class="w-full h-full object-cover" autoplay loop muted playsinline>
                <source src="@/assets/videos/Showreel_-Web-gallery-[remix].mp4" type="video/mp4">
            </video>
        </div>

        <div class="mt-24">
            <img :src="group_bg" alt="" class="absolute top-1/3 left-0">
            <img :src="bg_ellipse" alt="" class="absolute top-1/3 right-0">
        </div>
    </section>
</template>

<script lang="ts" setup>
import water from '@/assets/images/icon/water.svg';
import group_bg from '@/assets/images/bg/group_bg.svg';
import bg_ellipse from '@/assets/images/bg/group_bg_ellipse.svg';
const updateBgSize = () => {
    bgSize.value = window.innerWidth < 1025 ? '100% auto' : 'cover';
    document.documentElement.style.setProperty('--bg-size', bgSize.value);
};
const projectOverview = {
    title: "Tổng Quan Dự Án",
    highlight1: "Đổi mới",
    content1: " giao diện website, ",
    content2: "  lan tỏa ",
    highlight2: "sự rực rỡ",
    content3: " và nâng cao",
    content4: "  hiệu quả tương tác."
};
const miniView = { details: "Dự án thiết kế website với giao diện mới mang đến một diện mạo tươi mới, hiện đại, thể hiện tinh thần Thổi hồn vào sự rực rỡ của cuộc sống và tối ưu hóa hiệu quả tương tác với khách hàng. Website được xây dựng để trở thành một công cụ mạnh mẽ hỗ trợ các hoạt động marketing và kinh doanh, đồng thời mang đến trải nghiệm số vượt trội." }
</script>

<style lang="scss" scoped>
.project-overview {
    @apply max-w-3xl mx-auto text-center;
}
</style>