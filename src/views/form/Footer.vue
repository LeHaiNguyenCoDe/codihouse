<template>
  <section class="w-full flex flex-col gap-10 items-center relative overflow-hidden bg-gradient-footer font-montserrat">
    <div class="relative flex flex-col items-center gap-6">
      <div><img :src="arrow" alt="" class=""></div>
      <div><img :src="footer_banner" alt=""></div>
    </div>
    <div class="flex flex-col w-fit gap-10 relative">
      <div class="flex flex-col gap-6">
        <div class="flex xl:gap-96px md:gap-96px gap-64px">
          <div class="flex flex-col items-center">
            <span class="text-[#3882C4] xl:text-16px md:text-16px text-12px font-sans">CREATIVE DIRECTOR</span>
            <span class="text-[#0C4782] xl:text-24px md:text-24px text-18px font-semibold">Lorem ispum</span>
          </div>
          <div class="flex flex-col items-center">
            <span class="text-[#3882C4] xl:text-16px md:text-16px text-12px font-sans">PROJECT MANAGER</span>
            <span class="text-[#0C4782] xl:text-24px md:text-24px text-18px font-semibold">Toại Trần</span>
          </div>
        </div>
        <div class="flex xl:gap-96px md:gap-96px gap-64px">
          <div class="flex flex-col items-center">
            <span class="text-[#3882C4] xl:text-16px md:text-16px text-12px font-sans">CONTENT ADVISOR</span>
            <span class="text-[#0C4782] xl:text-24px md:text-24px text-18px font-semibold">Lorem ispum</span>
          </div>
          <div class="flex flex-col items-center">
            <span class="text-[#3882C4] xl:text-16px md:text-16px text-12px font-sans">ACCOUNT EXCUTIVE</span>
            <span class="text-[#0C4782] xl:text-24px md:text-24px text-18px font-semibold">Lorem ispum</span>
          </div>
        </div>
      </div>
      <div class="flex xl:gap-96px md:gap-96px gap-64px">
        <div class="flex flex-col items-center">
          <span class="text-[#3882C4] xl:text-16px md:text-16px text-12px font-sans">UI/UX DESIGNER</span>
          <span class="text-[#0C4782] xl:text-24px md:text-24px text-18px font-semibold">Lorem ispum</span>
          <span class="text-[#0C4782] xl:text-24px md:text-24px text-18px font-semibold">Lorem ispum</span>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-[#3882C4] xl:text-16px md:text-16px text-12px font-sans">GRAPHIC DESIGNER</span>
          <span class="text-[#0C4782] xl:text-24px md:text-24px text-18px font-semibold">Lorem ispum</span>
        </div>
      </div>
    </div>
    <div><img :src="big_circle" alt="big" class="absolute xl:bottom-[-50%] xl:right-[-20%] md:bottom-[-60%] md:right-[-30%] bottom-[-80%] right-[-80%] z-0"></div>
  </section>
</template>

<script lang="ts" setup>
import arrow from "@/assets/images/info/mobile/ArrowFooter.svg";
import footer_banner from "@/assets/images/info/mobile/footer-banner.svg";
import big_circle from "@/assets/images/info/group/ellipse_19180.png";
</script>