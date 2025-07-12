import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pinky: "var(--pinky)",
        browny: "var(--browny)",
        pinky2: "var(--pinky2)",
        accent: "var(--accent)",
      },
      fontFamily: {
        unkempt: ['var(--font-unkempt)']
      }
    },
  },
  plugins: [],
};
export default config;