<template>
  <!-- Phần giải pháp thiết kế -->
  <div class="solution--experience pb-4">
      <title-solution title="Trải Nghiệm Rực Rỡ" content="Tạo ra trải nghiệm thị giác và tương tác đầy hứng khởi, phản ánh tinh thần đúng tinh thần thương hiệu. Chúng tôi chú trọng vào thiết kế giao diện với bảng màu tươi sáng, hình ảnh và video chất lượng cao, cùng hiệu ứng chuyển động mượt mà để thu hút người dùng, khơi gợi cảm xúc tích cực và tạo ấn tượng mạnh mẽ ngay từ lần đầu truy cập." number="01" />
  </div>

  <!-- Phần hình ảnh -->
  <div>
    <div class="flex gap-6 relative justify-center -mt-1/4">
      <div class="left-phone"> <img :src="bgRight" alt="" class="w-[251px] h-[543px]"></div>
      <div> <img :src="bgCenter" alt="" class="w-full"></div>
      <div class="right-phone"> <img :src="bgLeft" alt="" class="w-[251px] h-[543px]"></div>
    </div>
  </div>

  <!-- Phần phát triển bền vững -->
  <div class="sustainability__section" ref="sustainabilitySection">
    <img
        class="main-banner"
        :class="{ 'animated-circle': isVisible }"
        :src="bgCase"
        alt="Banner"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import bgRight from "@/assets/images/bg/group_mobile.svg";
import bgCenter from "@/assets/images/bg/group_bg_03.svg";
import bgLeft from "@/assets/images/bg/group_mobile_02.svg";
import bgCase from "@/assets/images/bg/case.svg";
import test from "@/assets/images/bg/white_bg.svg";
import TitleSolution from "@/views/components/titleSolution.vue";

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
    threshold: 0.3, // Khi 30% phần tử xuất hiện trên màn hình, kích hoạt hiệu ứng
  });

  if (sustainabilitySection.value) {
    observer.observe(sustainabilitySection.value);
  }
});

onUnmounted(() => {
  // Cleanup observer nếu cần
});
</script>

<style scoped>
.solution--experience {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  background: linear-gradient(0deg, #A1CC95 2.43%, #26AAE1 97.48%);
  color: white;
  position: relative;
  overflow: hidden;
  min-height: 947px;
  max-height: 947px;
}

.sustainability__section {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.left-phone {
  position: absolute;
  left: 8%;
  top: 31%;
}
.right-phone {
  position: absolute;
  right: 10%;
  bottom: 17%;
}
.main-banner {
  width: 100%;
  height: auto;
  object-fit: cover;
  clip-path: circle(0% at center);
  transition: clip-path 4s ease-out;
}
.animated-circle {
  clip-path: circle(100% at center);
}
</style>
