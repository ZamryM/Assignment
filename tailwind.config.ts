import { Poppins } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateY(100%)'},
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        slideInUp: 'slideInUp 2s ease-in-out',
        slideIn: 'slideIn 1s ease-out forwards',
      },
      fontFamily: {
        play: ["Play", "sans-serif"],
        // poppins: ["Poppins", "sans-serif"],
      
          poppins: ['var(--font-Poppins)'],
        
      },
    },
  },
  plugins: [],
};
export default config;
