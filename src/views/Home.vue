<template>
	<section class="relative w-full min-h-screen flex flex-col items-center justify-start text-white">
		<Header />
		<OverviewSection />
	</section>
</template>

<script lang="ts" setup>
import Header from '@/views/components/Banner.vue';
import OverviewSection from '@/views/components/Overview.vue';
</script>