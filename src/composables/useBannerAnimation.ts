// composables/useBannerAnimation.ts
import { onMounted, ref } from "vue";
import { gsap } from "gsap";

export function useBannerAnimation() {
  const bannerRef = ref<HTMLElement | null>(null);

  onMounted(() => {
    if (!bannerRef.value) return;

    gsap.fromTo(
      bannerRef.value,
      { opacity: 0, scale: 0.95, y: 100 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.2,
      }
    );
  });

  return { bannerRef };
}
