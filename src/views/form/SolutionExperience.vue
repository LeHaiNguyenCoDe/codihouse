<template>
  
  <!-- Phần giải pháp thiết kế -->
  <div class="solution--experience pb-4">
    <div class="-my-10">
      <img :src="arrow" alt="arrow icon" class="block mx-auto mb-5">
      <span class="text-[18px] font-sans font-medium text-white">Giải pháp thiết kế</span>
    </div>
      <title-solution title="Trải Nghiệm Rực Rỡ" content="Tạo ra trải nghiệm thị giác và tương tác đầy hứng khởi, phản ánh tinh thần đúng tinh thần thương hiệu. Chúng tôi chú trọng vào thiết kế giao diện với bảng màu tươi sáng, hình ảnh và video chất lượng cao, cùng hiệu ứng chuyển động mượt mà để thu hút người dùng, khơi gợi cảm xúc tích cực và tạo ấn tượng mạnh mẽ ngay từ lần đầu truy cập." number="01" />
  </div>
  <div class="space-y">
    <div class="grid grid-cols-5 -mt-1/5">
      <div class="col-span-3 col-start-2 relative">
        <!-- Left Phone -->
        <div class="left-phone" :style="{ transform: leftTranslate }">
          <img src="~@/assets/images/info/mobile/group_mobile.svg" alt="" class="w-[92%] h-[543px]" />
        </div>

        <!-- Center Image -->
        <img src="~@/assets/images/info/group/path_group_02.svg" alt="" class="bg-center" />

        <!-- Vector -->
        <div class="vector">
          <img src="~@/assets/images/header/vector.png" alt="" />
        </div>

        <!-- Right Phone -->
        <div class="right-phone" :style="{ transform: rightTranslate }">
          <img src="~@/assets/images/info/mobile/group_mobile_02.svg" alt="" class="w-[92%] h-[543px]" />
        </div>
      </div>
    </div>

    <!-- Phần phát triển bền vững -->
    <div class="sustainability__section h-fit" ref="sustainabilitySection">
      <h1 class="absolute xl:left-[14%] lg:left-[10%] md:left-[6%] left-[-10%] text-[62px] tracking-[-0.07em] text-[#3882C4] xl:scale-100 lg:scale-70 md:scale-50 scale-30">Phát Triển</h1>
      <h1 class="absolute xl:right-[14%] lg:right-[10%] md:right-[6%] right-[-10%] text-[62px] tracking-[-0.07em] text-[#3882C4] xl:scale-100 lg:scale-70 md:scale-50 scale-30">Bền Vững</h1>
      <img
          class="main-banner"
          :class="{ 'animated-circle': isVisible }"
          :src="bgCase"
          alt="Banner"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import arrow from "@/assets/images/info/icon/arrow.svg";
import TitleSolution from "@/views/components/titleSolution.vue";
import bgCase from "@/assets/images/info/group/case.png";

const sustainabilitySection = ref<HTMLElement | null>(null);
const isVisible = ref(false);

const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      isVisible.value = true;
    }
  });
};

onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 0.3,
  });

  if (sustainabilitySection.value) {
    observer.observe(sustainabilitySection.value);
  }
});

onUnmounted(() => {
  // Cleanup observer nếu cần
});
import { computed, onBeforeUnmount } from "vue";

const y = ref(0);
const screenWidth = ref(typeof window !== "undefined");
let animationFrameId: number | null = null;

const updateY = () => {
  y.value += 1;
  animationFrameId = requestAnimationFrame(updateY);
};
const updateScroll = () => {
  y.value = window.scrollY;
};

// Hàm cập nhật chiều rộng màn hình
const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("scroll", updateScroll);
  window.addEventListener("resize", updateScreenWidth);
});

// Computed để tạo giá trị transform động
const leftTranslate = computed(() => {
  let translate = `translateY(${Math.sin(y.value * 0.01) * 100}px)`;
  if (screenWidth.value <= 1024) {
    translate += " scale(0.7)";
  }
  if (screenWidth.value <= 767) {
    translate = `translateY(${Math.sin(y.value * 0.01) * 50}px)`+ " scale(0.4)";
  }
  return translate;
});
const rightTranslate = computed(() => {
  let translate = `translateY(${Math.sin(y.value * 0.01) * -100}px)`;
  if (screenWidth.value <= 1024) {
    translate += " scale(0.7)";
  }
  if (screenWidth.value <= 767) {
    translate = `translateY(${Math.sin(y.value * 0.01) * -50}px)` + " scale(0.4)";
  }
  return translate;
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateScroll);
  window.removeEventListener("resize", updateScreenWidth);
});
</script>
