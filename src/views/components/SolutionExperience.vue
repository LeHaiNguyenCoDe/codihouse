<template>
  <!-- Phần giải pháp thiết kế -->
  <div class="solution--experience">
    <div class="solution--experience-title">
      <h1>01</h1>
    </div>
    <div class="solution--experience-contents">
      <h1>Trải Nghiệm Rực Rỡ</h1>
      <p>
        Tạo ra trải nghiệm thị giác và tương tác đầy hứng khởi, phản ánh tinh thần đúng tinh thần thương hiệu. Chúng tôi chú trọng vào thiết kế giao diện với bảng màu tươi sáng, hình ảnh và video chất lượng cao, cùng hiệu ứng chuyển động mượt mà để thu hút người dùng, khơi gợi cảm xúc tích cực và tạo ấn tượng mạnh mẽ ngay từ lần đầu truy cập.
      </p>
    </div>
  </div>

  <!-- Phần hình ảnh -->
  <div>
    <div class="flex gap-6">
      <div> <img :src="bgRight" alt="" class="w-4/6"></div>
      <div> <img :src="bgCenter" alt="" class="w-12/12"></div>
      <div> <img :src="bgLeft" alt="" class="w-4/6"></div>
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
  padding: 80px 20px;
  background: linear-gradient(0deg, #A1CC95 2.43%, #26AAE1 97.48%);
  color: white;
  position: relative;
  overflow: hidden;
}

.solution--experience-title {
  font-size: 340px;
  font-weight: 800;
  line-height: 1;
  opacity: 0.1;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.solution--experience-contents {
  max-width: 800px;
  position: relative;
  z-index: 2;
}

.solution--experience-contents h1 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
}

.solution--experience-contents p {
  font-size: 18px;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .solution--experience-title {
    font-size: 200px;
  }
  .solution--experience-contents h1 {
    font-size: 36px;
  }
}

@media (max-width: 768px) {
  .solution--experience-title {
    font-size: 120px;
  }
  .solution--experience-contents h1 {
    font-size: 28px;
  }
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
