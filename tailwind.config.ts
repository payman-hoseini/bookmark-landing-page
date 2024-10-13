import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'Soft-Blue': 'hsl(231, 69%, 60%)',
        'Soft-Red': 'hsl(0, 94%, 66%)',
        'Grayish-Blue': 'hsl(229, 8%, 60%)',
        'Very-Dark-Blue': 'hsl(229, 31%, 21%)'
      },
      fontFamily : {
        Rubik : ["Rubik"]
      }
    },
  },
  plugins: [],
};
export default config;
