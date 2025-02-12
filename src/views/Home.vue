<template>
	<div class="absolute top-0 xl:w-full xl:min-h-full xl:h-screen flex items-center justify-center text-white md:min-h-[35%] md:h-auto md:w-full">
		<!-- Background -->
		<div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${headerBg})` }">
		</div>
		<img :src="vector" class="absolute xl:right-28 xl:w-fit md:w-7/12 md:right-10 z-10" alt="Vector Image" />
		<img :src="rectangle" class="absolute bottom-0 w-full z-10" alt="Rectangle Image" />

		<!-- Thanh điều hướng -->
		<!-- <nav class="absolute top-0 w-full h-16 flex gap-16 items-center justify-between bg-transparent z-20 hidden">
			<div class="text-2xl font-bold flex items-center gap-2 ml-auto font-sans"><img :src="group" class="w-6 h-6" />CodiHaus
			</div>
			<ul class="flex gap-10 w-7/12 justify-end">
				<p v-for="item in menu" :key="item"
					class="cursor-pointer text-md font-sans">
					{{ item }}
				</p>
			</ul>
			<div class="flex item-center space-x-2 mr-auto">
				<button class="rounded-md w-12 h-10 bg-transparent text-xs border-white text-white">EN/VI</button>
				<button class="rounded-md w-12 h-10 bg-transparent border-none text-white">menu</button>
			</div>
		</nav> -->
		<p class="absolute xl:bottom-28 md:bottom-14 z-10 text-lg font-sans">Website suntory pepsico</p>
	</div>
</template>

<script lang="ts" setup>
import headerBg from '@/assets/images/header/Shutterstock_01.svg';
import vector from '@/assets/images/header/Vector.svg';
import rectangle from '@/assets/images/header/Rectangle.svg';
import group from '@/assets/images/logo/Group.png';
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
const { t } = useI18n()

const menu = ref(['About', 'How We Work', 'Solutions', 'Service', 'Case Study', 'Contact'])
</script>
