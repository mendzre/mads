/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      width: {
        screen: ["100vw", "100dvw"],
      },
      height: {
        screen: ["100vh", "100dvh"],
      },
    },
  },
};
