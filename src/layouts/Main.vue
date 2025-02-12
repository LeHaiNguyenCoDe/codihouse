<template>
	<div class="min-h-screen bg-gray-100 flex flex-col">
		<header class="p-4 flex justify-end">
			<!-- <LanguageSwitcher /> -->
		</header>
		<main class="flex-1 flex justify-center items-center">
			<router-view />
		</main>
		<footer>
			<!-- <Footer /> -->
		</footer>
	</div>
</template>

<script lang="ts" setup>
import Footer from "@/layouts/Footer.vue";
import LanguageSwitcher from "@/components/Language.vue";
</script>
