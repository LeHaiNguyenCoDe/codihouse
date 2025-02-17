<template>
  
  <!-- Phần giải pháp thiết kế -->
  <div class="solution--experience pb-4">
    <div class="-my-10">
      <img :src="arrow" alt="arrow icon" class="block mx-auto mb-5">
      <span class="text-[18px] font-sans font-medium text-white">Giải pháp thiết kế</span>
    </div>
      <title-solution title="Trải Nghiệm Rực Rỡ" content="Tạo ra trải nghiệm thị giác và tương tác đầy hứng khởi, phản ánh tinh thần đúng tinh thần thương hiệu. Chúng tôi chú trọng vào thiết kế giao diện với bảng màu tươi sáng, hình ảnh và video chất lượng cao, cùng hiệu ứng chuyển động mượt mà để thu hút người dùng, khơi gợi cảm xúc tích cực và tạo ấn tượng mạnh mẽ ngay từ lần đầu truy cập." number="01" />
  </div>
  <div class="space-y-32">
    <div class="grid grid-cols-5 -mt-1/5">
      <div class="col-span-3 col-start-2 relative">
        <!-- Left Phone -->
        <div class="left-phone" :style="{ transform: leftTranslate }">
          <img :src="bgRight" alt="" class="w-[92%] h-[543px]" />
        </div>

        <!-- Center Image -->
        <img :src="bgCenter" alt="" class="bg-center" />

        <!-- Vector -->
        <div class="vector">
          <img :src="vector" alt="" />
        </div>

        <!-- Right Phone -->
        <div class="right-phone" :style="{ transform: rightTranslate }">
          <img :src="bgLeft" alt="" class="w-[92%] h-[543px]" />
        </div>
      </div>
    </div>

    <!-- Phần phát triển bền vững -->
    <div class="sustainability__section" ref="sustainabilitySection">
      <h1 class="development">Phát Triển</h1>
      <h1 class="sustainable ">Bền Vững</h1>
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
import bgRight from "@/assets/images/bg/group_mobile.svg";
import bgCenter from "@/assets/images/bg/group_bg_03.svg";
import bgLeft from "@/assets/images/bg/group_mobile_02.svg";
import bgCase from "@/assets/images/bg/case.svg";
import arrow from "@/assets/images/icon/arrow.svg";
import TitleSolution from "@/views/components/titleSolution.vue";
import vector from '@/assets/images/header/Vector.svg';

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
import { computed, onBeforeUnmount } from "vue";

const y = ref(0);
const screenWidth = ref(window.innerWidth);
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

<style scoped>
.solution--experience {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  background: linear-gradient(0deg, #A1CC95 2.43%, #26AAE1 97.48%);
  position: relative;
  overflow: hidden;
  min-height: 947px;
  max-height: 947px;
  @media (max-width: 1024px) {
    min-height: 800px;
  }
  @media (max-width: 767px) {
    min-height: 700px;
  }
}
.vector {
  position: absolute;
  top: 33%;
  left: 45%;
  z-index: 0;
  @media (max-width: 1024px) {
    transform: scale(0.7);
    top: 25%;
    left: 25%;
  }
  @media (max-width: 820px) {
    transform: scale(0.45);
    top: 20%;
    left: 18%;
  }
  @media (max-width: 767px) {
    transform: scale(0.2);
    top: -5%;
    left: -50%;
  }
}
.bg-center {
  width: 100%;
  height: auto;
  position: relative;
  z-index: 1;
}
.development {
  position: absolute;
  font-family: Montserrat;
  font-size: 56px;
  line-height: 80px;
  letter-spacing: 0%;
  top: 44.5%;
  left: 24.5%;
  transform: translate(-50%, -50%); 
  color: #3882C4;
  background: transparent;
}
.sustainable {
  position: absolute;
  font-family: Montserrat;
  font-size: 56px;
  line-height: 80px;
  letter-spacing: 0%;
  top: 44.5%;
  right: 4%;
  transform: translate(-50%, -50%); 
  color: #3882C4;
  background: transparent;
}
.sustainability__section {
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.left-phone {
  position: absolute;
  top: 31%;
  left: -22%;
  z-index: 2;
  @media (max-width: 1024px) {
    transform: scale(0.7);
    top: 26.5%;
    left: -30%;
  }
  @media (max-width: 820px) {
    transform: scale(0.7);
    top: 25%;
    left: -40%;
  }
  @media (max-width: 767px) {
    top: 18%;
    left: -65%;
  }
}
.right-phone {
  position: absolute;
  bottom: 18%;
  right: -22%;
  z-index: 2;
  @media (max-width: 1024px) {
    transform: scale(0.7);
    bottom: 14%;
    right: -30%;
  }
  @media (max-width: 820px) {
    transform: scale(0.7);
    bottom: 8%;
    right: -40%;
  }
  @media (max-width: 767px) {
    top: 35%;
    right: -65%;
  }
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
