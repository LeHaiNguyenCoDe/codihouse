<template>
  <section class="bg flex flex-col mt-6 font-sans">
    <div class="sincer-ceonnection pb-4">
      <TitleSolution
          number="02"
          title="Kết Nối Chân Thành"
          content="Cấu trúc thông tin rõ ràng, nội dung đa dạng, dễ tiếp cận, cung cấp cái nhìn toàn diện về thương hiệu cho khách hàng. Mục tiêu là tạo ra một không gian số thân thiện, nơi người dùng cảm thấy được lắng nghe và kết nối sâu sắc với thương hiệu."
          titleColor="#3882C4"
          contentColor="#777E91"
          textStroke="3px #26AAE1"
          whiteSpace="none"
      />
    </div>
    <div class="sincer-ceonnection--content relative flex place-content-center sincere-connection-reponsive">
      <div class="grid grid-cols-3 gap-8 z-1">
        <div class="col-start-1 col-span-1">
          <img :src="group_01" alt="iconv-lite"/>
        </div>
        <div class="col-start-3 col-span-1">
          <img :src="group_02" alt="iconv-lite"/>
        </div>
        <div class="col-start-2 col-span-1">
          <img :src="group_03" alt="iconv-lite"/>
        </div>
        <div class="col-start-3 col-span-1">
          <img :src="group_04" alt="iconv-lite"/>
        </div>
      </div>

      <div class="flex z-0">
        <div class="row-span-2 row-end-3 absolute right-1/3 top-1/10">
          <img :src="iconvLite" alt="iconv-lite" />
        </div>
        <div class="row-span-2 row-start-2 absolute left-1/10">
          <img :src="Ellipse" alt="iconv-lite" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import TitleSolution from "@/views/components/titleSolution.vue";
import iconvLite from "@/assets/images/bg/group_icon.png"
import Ellipse from "@/assets/images/bg/Ellipse.png"
import group_01 from "@/assets/images/bg/group_1000004254.png"
import group_02 from "@/assets/images/bg/group_1000004255.png"
import group_03 from "@/assets/images/bg/group_1000004256.png"
import group_04 from "@/assets/images/bg/group_1000004257.png"
</script>
<style lang="css">
.sincer-ceonnection {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  color: #3882C4;
  position: relative;
  overflow: hidden;
  min-height: 500px;
  max-height: 947px;
}

@media (max-width: 1024px) {
  .sincere-connection-reponsive {
    transform: scale(0.8);
  }
}

@media (max-width: 820px) {
  .sincere-connection-reponsive {
    transform: scale(0.5);
  }
}

.sincer-border {
  width: 496px;
  height: 496px;
  top: 8670px;
  left: 238px;
  background: linear-gradient(90deg, rgba(161, 204, 149, 0.5) 0%, rgba(38, 170, 225, 0.25) 100%);
  backdrop-filter: blur(155.6999969482422px);
  border-radius: 50%;
}
</style>
