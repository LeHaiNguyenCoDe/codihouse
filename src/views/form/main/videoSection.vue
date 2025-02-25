<template>
    <section class="mx-auto flex justify-center mt-5vw relative">
        <img :src="group_bg" alt="" class="absolute top-[-25vw] left-[-8vw] -z-10 xl:w-auto md:w-55vw w-55vw">
        <div class="w-fit">
            <video class="xl:w-85vw md:w-88vw w-88vw h-auto"autoplay muted loop playsinline>
                <source :src="video" type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ video.
            </video>
        </div>
        <img :src="group_bg_ellipse" alt="" class="absolute top-[-25vw] xl:right-[-7vw] md:right-0 right-0 -z-10 xl:w-auto md:w-45vw w-45vw">
    </section>
</template>
<script lang="ts" setup>
import video from "@/assets/videos/Showreel_-Web-gallery-[remix].mp4";
import group_bg from "@/assets/images/bg/group_bg.svg";
import group_bg_ellipse from "@/assets/images/bg/group_bg_ellipse.svg";
</script>