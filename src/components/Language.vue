<template>
	<button
		class="w-20 h-10 border-2 border-white text-white rounded-lg flex items-center justify-center hover:bg-white hover:text-blue-500 transition"
		@click="switchLanguage"
	>
		<span class="font-semibold">{{ currentLang }}</span>/<span>{{ otherLang }}</span>
	</button>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n"
import { computed } from "vue"

const { locale } = useI18n()
const savedLang = localStorage.getItem("lang") || "vi"
locale.value = savedLang

const currentLang = computed(() => (locale.value === "vi" ? "VI" : "EN"))
const otherLang = computed(() => (locale.value === "vi" ? "EN" : "VI"))

const switchLanguage = () => {
	locale.value = locale.value === "vi" ? "en" : "vi"
}
</script>