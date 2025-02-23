<template>
	<div class="solution--experience bg-gradient-01 ">
		<div class="solution--experience min-h-[550px] max-h-[946px]">
			<title-solution title="Trải Nghiệm Rực Rỡ" content="
                    Tạo ra trải nghiệm thị giác và tương tác đầy hứng khởi, phản ánh tinh thần đúng tinh thần thương hiệu. <br>
                    Chúng tôi chú trọng vào thiết kế giao diện với bảng màu tươi sáng, hình ảnh và video chất lượng cao, <br>
                    cùng hiệu ứng chuyển động mượt mà để thu hút người dùng, khơi gợi cảm xúc tích cực và tạo ấn tượng <br>
                    mạnh mẽ ngay từ lần đầu truy cập." number="01" titleColor="#FFFFFF" contentColor="#FFFFFF"
				textStroke="3px #A8F4FC" showDesignSolution />

		</div>
		<img :src="MEDIA.images.rectangle_30416" alt="" class="absolute bottom-0 left-0 w-full z-1" />
	</div>
	<div ref="imageContainer"
		class="space-y bg-gradient-mobilephone relative mx-auto flex items-center justify-center text-center">
		<div class="grid grid-cols-5">
			<div class="col-span-3 col-start-2 relative">
				<div class="left-phone" :style="{ transform: leftTranslate }">
					<img :src="MEDIA.images.bgRight_01" alt="" class="w-[92%] h-[543px]" />
				</div>
				<img :src="MEDIA.images.bgCenter" alt="" class="bg-center -top-25" />
				<div class="vector">
					<img :src="MEDIA.images.vector" alt="" />
				</div>
				<div class="right-phone" :style="{ transform: rightTranslate }">
					<img :src="MEDIA.images.bgLeft_02" alt="" class="w-[92%] h-[543px]" />
				</div>
			</div>
		</div>

		<div class="sustainability__section h-fit" ref="sustainabilitySection">
			<h1
				class="absolute xl:left-[14%] lg:left-[10%] md:left-[6%] left-[-10%] text-[62px] tracking-[-0.07em] text-[#3882C4] xl:scale-100 lg:scale-70 md:scale-50 scale-30">
				Phát Triển</h1>
			<h1
				class="absolute xl:right-[14%] lg:right-[10%] md:right-[6%] right-[-10%] text-[62px] tracking-[-0.07em] text-[#3882C4] xl:scale-100 lg:scale-70 md:scale-50 scale-30">
				Bền Vững</h1>
			<img class="main-banner" :src="MEDIA.images.bgCase" :class="{ 'animated-circle': isVisible }"
				alt="Banner" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";
import { MEDIA } from '../../constants/media';
import TitleSolution from "../../components/TitleSolution.vue";

const screenWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024);
const leftTranslateY = ref(0);
const rightTranslateY = ref(0);
const isVisible = ref(false);

// Sử dụng GSAP để làm mượt hiệu ứng di chuyển
let leftTween: gsap.core.Tween | null = null;
let rightTween: gsap.core.Tween | null = null;

const updateTranslateY = () => {
	const scrollValue = window.scrollY * 0.1; // Điều chỉnh tốc độ di chuyển

	// Làm mượt hiệu ứng cuộn
	if (leftTween) leftTween.kill();
	if (rightTween) rightTween.kill();

	leftTween = gsap.to(leftTranslateY, {
		duration: 0.5,
		value: scrollValue,
		ease: "power2.out",
	});

	rightTween = gsap.to(rightTranslateY, {
		duration: 0.5,
		value: -scrollValue,
		ease: "power2.out",
	});
};

// Hàm cập nhật khi resize màn hình
const updateScreenWidth = () => {
	screenWidth.value = window.innerWidth;
};

// Tạo computed để áp dụng transform
const leftTranslate = computed(() => {

	let translate = `translateY(${rightTranslateY.value}px)`;
	if (screenWidth.value <= 1024) {
		translate += " scale(0.7)";
	}
	if (screenWidth.value <= 767) {
		translate = `translateY(${rightTranslateY.value / 2}px) scale(0.4)`;
	}
	return translate;
});

const rightTranslate = computed(() => {
	let translate = `translateY(${leftTranslateY.value}px)`;
	if (screenWidth.value <= 1024) {
		translate += " scale(0.7)";
	}
	if (screenWidth.value <= 767) {
		translate = `translateY(${leftTranslateY.value / 2}px) scale(0.4)`;
	}
	return translate;
});

onMounted(() => {
	gsap.from(".left-phone img", {
		opacity: 0,
		y: 50,
		duration: 1.2,
		ease: "power2.out",
	});

	gsap.from(".right-phone img", {
		opacity: 0,
		y: 50,
		duration: 1.2,
		ease: "power2.out",
	});

	gsap.from(".bg-center", {
		opacity: 0,
		scale: 0.8,
		duration: 1.2,
		ease: "power2.out",
	});

	gsap.from(".vector img", {
		opacity: 0,
		y: 30,
		duration: 1.5,
		delay: 0.3,
		ease: "power2.out",
	});

	window.addEventListener("scroll", updateTranslateY);
	window.addEventListener("resize", updateScreenWidth);
});


onBeforeUnmount(() => {
	window.removeEventListener("scroll", updateTranslateY);
	window.removeEventListener("resize", updateScreenWidth);
});

const sustainabilitySection = ref<HTMLElement | null>(null);

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
		threshold: 0.3,
	});

	if (sustainabilitySection.value) {
		observer.observe(sustainabilitySection.value);
	}
});

</script>