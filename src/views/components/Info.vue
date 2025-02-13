<template>
    <div class="project-overview--main-content">
        <div class="content-square"></div>
        <h6 class="content-title">
            {{ projectTitleOverview.title }}
        </h6>
    </div>
    <div class="main--container px-8">
        <div class="grid grid-cols-2 gap-4">
            <div>Suntory Pepsico là một trong những doanh nghiệp hàng đầu trong ngành F&B tại Việt Nam, đồng thời tiên phong trong các hoạt động phát triển bền vững. Công ty luôn nỗ lực mang đến những sản phẩm chất lượng cao, đồng thời góp phần xây dựng một tương lai tốt đẹp hơn cho cộng đồng và môi trường.</div>
            <div class="mx-auto flex">
                <img :src="bgRight" alt="">
            </div>
        </div>
        <div class="grid grid-cols-4 gap-4 mt-6">
            <template v-for="(group, groupIndex) in groupedStats" :key="'group-' + groupIndex">
                <div v-if="groupIndex === 0" class="stat-item">
                    <div class="stat-number" :id="'stat-number-' + group[0].id">{{ group[0].value }}</div>
                    <div class="stat-label">{{ group[0].label }}</div>
                    <div class="stat-subtext">{{ group[0].subtext }}</div>
                </div>

                <div v-else-if="groupIndex === 1" class="col-span-3 grid grid-cols-3 gap-4">
                    <div v-for="stat in group" :key="stat.id" :class="'col-start-' + stat.colStart">
                        <div class="stat-item">
                            <div class="stat-number" :id="'stat-number-' + stat.id">{{ stat.value }}</div>
                            <div class="stat-label">{{ stat.label }}</div>
                            <div class="stat-subtext">{{ stat.subtext }}</div>
                        </div>
                    </div>
                </div>

                <div v-else-if="groupIndex === 2" class="col-span-3 grid grid-cols-4 gap-4">
                    <div class="col-start-3 col-span-2 flex flex-col justify-center items-center">
                        <div class="stat-item">
                            <div class="stat-number" :id="'stat-number-' + group[0].id">{{ group[0].value }}</div>
                            <div class="stat-label">{{ group[0].label }}</div>
                            <div class="stat-subtext">{{ group[0].subtext }}</div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import bgRight from "../../assets/images/bg/group_bg_02.svg";

const projectTitleOverview = {
  title: "Về Suntory Pepsico",
  innovation:
    "Suntory Pepsico là một trong những doanh nghiệp hàng đầu trong ngành F&B tại Việt Nam, đồng thời tiên phong trong các hoạt động phát triển bền vững. Công ty luôn nỗ lực mang đến những sản phẩm chất lượng cao, đồng thời góp phần xây dựng một tương lai tốt đẹp hơn cho cộng đồng và môi trường.",
};

const groupedStats = ref([
  [
    { id: 1, number: 6, label: "Nhà máy sản xuất", subtext: "Trải dài khắp Việt Nam", value: 0 }
  ],
  [
    { id: 2, number: 13, label: "Thương hiệu hàng đầu", subtext: "Phục vụ người Việt", value: 0, colStart: 1 },
    { id: 3, number: 5, label: "Văn phòng", subtext: "Tại tất cả các thành phố lớn", value: 0, colStart: 3 }
  ],
  [
    { id: 4, number: 1, label: "Công ty đồ uống", subtext: "Uy tín tại Việt Nam (2019-2024, theo Vietnam Report)", value: 0, colStart: 3, colSpan: 2 }
  ]
]);

const observer = ref<IntersectionObserver | null>(null);

const startCounting = (entry: IntersectionObserverEntry, stat: any) => {
  if (entry.isIntersecting) {
    let current = 0;
    const step = Math.ceil(stat.number / 50);
    const interval = setInterval(() => {
      current += step;
      if (current >= stat.number) {
        stat.value = stat.number;
        clearInterval(interval);
      } else {
        stat.value = current;
      }
    }, 30);
  }
};

onMounted(() => {
  nextTick(() => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          groupedStats.value.forEach((group) => {
            group.forEach((stat) => {
              if (`stat-number-${stat.id}` === entry.target.id) {
                startCounting(entry, stat);
              }
            });
          });
        });
      },
      { threshold: 0.3 }
    );

    groupedStats.value.forEach((group) => {
      group.forEach((stat) => {
        const el = document.getElementById(`stat-number-${stat.id}`);
        if (el) observer.value?.observe(el);
      });
    });
  });
});

</script>

<style scoped>
.stat-number {
    font-family: Manrope;
    font-weight: 800;
    font-size: 96px;
    line-height: 131.14px;
    letter-spacing: 0%;
    color: #26AAE1;
    transition: all 0.3s ease-in-out;
}

.stat-label {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 2%;
    color: #26AAE1;
}

.stat-subtext {
    font-family: Montserrat;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0%;
    color: #777E91;
}
</style>
