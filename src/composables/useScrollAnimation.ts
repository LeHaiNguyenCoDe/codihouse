// composables/useScrollAnimation.ts
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Kích hoạt ScrollTrigger của GSAP
gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation() {
  const wrapperRef = ref<HTMLElement | null>(null);

  onMounted(() => {
    if (!wrapperRef.value) return;

    const parent = wrapperRef.value.querySelector(".parent") as HTMLElement;
    const child = wrapperRef.value.querySelector(".child") as HTMLElement;

    if (parent) {
      gsap.to(parent, {
        y: -60,
        ease: "power1.out",
        scrollTrigger: {
          trigger: wrapperRef.value,
          start: "top 60%",
          end: "top 15%",
          scrub: 1.5,
        },
      });
    }

    if (child) {
      gsap.to(child, {
        y: -100,
        ease: "expo.out",
        scrollTrigger: {
          trigger: wrapperRef.value,
          start: "top 55%",
          end: "top 20%",
          scrub: 1.5, 
        },
      });
    }
  });

  return { wrapperRef };
}
