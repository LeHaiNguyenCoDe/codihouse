import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import path from "path";
// import { defineConfig } from 'unocss'
import { presetFluid } from "unocss-preset-fluid";

export default defineConfig(({ mode }) => {
  const lang = process.env.LANG || "vi";

  return {
    plugins: [vue(), UnoCSS()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      __VUE_PROD_DEVTOOLS__: false,
    },
    base: "/",
    build: {
      manifest: true,
      outDir: `dist`,
    },
    components: [
      {
        path: "~/components",
        global: true,
      },
    ],

    presets: [
      presetFluid({
        ranges: {
          sm: [10, 30],
          md: [15, 40],
          lg: [20, 50],
        },
      }),
    ],
    shortcuts: [
      {
        "flex-center": "flex items-center justify-center",
        "flex-items": "flex items-center",
        "flex-between": "flex items-center justify-between",
        "flex-start": "flex items-start justify-start",
        "flex-end": "flex items-end justify-end",
        "flex-around": "flex items-center justify-around",
      },
    ],
    theme: {
      colors: {
        primary: "#2ECDA7",
        "100": "#CBF3E9",
      },
      fontSize: {},
      container: {
        center: true,
        padding: {
          DEFAULT: "0.9375rem",
          sm: "1rem",
          lg: "1.5rem",
          xl: "2rem",
          xxl: "2.5rem",
        },
        maxWidth: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          xxl: "1536px",
        },
      },
      breakpoints: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      },
      fontFamily: {},
    },
  };
});
