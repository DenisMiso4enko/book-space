/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        320: "320px",
        360: "360px",
        375: "375px",
        412: "412px",
        568: "568px",
        640: "640px",
        768: "768px",
        1024: "1024px",
        1280: "1280px",
        1440: "1440px",
        1920: "1920px",
        2560: "2560px",
      },
    },
  },
};

export default config;
