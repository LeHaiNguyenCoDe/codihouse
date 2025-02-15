<template>
  <section class="bg flex flex-col mt-6 font-sans">
    <div class="sincer-ceonnection pb-4">
      <TitleSolution
          number="01"
          title="Trải Nghiệm Rực Rỡ"
          content="Tạo ra trải nghiệm thị giác và tương tác đầy hứng khởi..."
          image="/path/to/image.jpg"
          titleColor="#3882C4"
          contentColor="#777E91"
      />
    </div>
  </section>
</template>
<script setup lang="ts">
import TitleSolution from "@/views/components/titleSolution.vue";
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
  min-height: 947px;
  max-height: 947px;
}
</style>
