<template>
    <footer class="bg-gradient-to-b from-blue-50 to-transparent py-10">
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-blue-800">
        <div v-for="(member, index) in team" :key="index">
          <h3 class="text-xs font-semibold uppercase">{{ member.role }}</h3>
          <p class="font-bold text-lg">{{ member.name }}</p>
        </div>
      </div>

      <div class="border-t border-blue-200 mt-6 mx-auto w-3/4"></div>

      <div class="mt-6 max-w-lg mx-auto text-center grid grid-cols-2 md:grid-cols-2 gap-6 text-blue-800">
        <div v-for="(member, index) in bottomTeam" :key="index">
          <h3 class="text-xs font-semibold uppercase">{{ member.role }}</h3>
          <p class="font-bold text-lg" v-for="(name, i) in member.names" :key="i">{{ name }}</p>
        </div>
      </div>
    </footer>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const team = computed(() => [
  { role: t('common.common.creative_director'), name: "Lorem Ipsum" },
  { role: t('common.common.project_manager'), name: "Toại Trần" },
  { role: t('common.common.content_advisor'), name: "Lorem Ipsum" },
  { role: t('common.common.account_executive'), name: "Lorem Ipsum" },
])

const bottomTeam = computed(() => [
  { role: t('common.common.ui_ux_designer'), names: ["Lorem Ipsum", "Lorem Ipsum"] },
  { role: t('common.common.graphic_designer'), names: ["Lorem Ipsum"] },
])
</script>
