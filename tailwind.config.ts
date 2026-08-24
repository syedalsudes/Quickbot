import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // agar src folder hai
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // agar direct root app/ hai
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dusk: {
          dark: "var(--color-dusk-dark)",
          primary: "var(--color-dusk-primary)",
          accent: "var(--color-dusk-accent)",
          light: "var(--color-dusk-light)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
