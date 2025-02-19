<template>
    <section class="relative w-full h-fit flex items-center justify-center mt-96 overflow-hidden">
      <div class="flex relative xl:scale-100 lg:scale-90 md:scale-80 scale-50">
        <div><img :src="vector" alt="big" class="absolute top-[15%] left-[-5%] z-0"></div>
        <div><img :src="big_circle" alt="big" class="absolute top-[-10%] left-1/4 z-0"></div>
        <div><img :src="iphone1" alt="" class="ml-1/3 w-364px h-755px z-10 relative"></div>
        <div><img :src="iphone2" alt="" class="mt-1/2 w-345px h-764px z-10 relative"></div>
        <div><img :src="big_circle" alt="small" class="absolute scale-50 z-0 bottom-[-15%] left-[-20%]"></div>
        <div><img :src="text" alt="big" class="absolute left-[-43%] bottom-[10%] z-0 xl:scale-100 md:scale-70 scale-55"></div>
      </div>
    </section>
</template>
<script lang="ts" setup>
    import iphone1 from "@/assets/images/info/mobile/iphone1.svg";
    import iphone2 from "@/assets/images/info/mobile/iphone2.svg";
    import big_circle from "@/assets/images/info/group/ellipse_19180.png";
    import vector from "@/assets/images/info/group/group_icon.png";
    import text from "@/assets/images/info/mobile/suntory-pepsico.svg";
</script>