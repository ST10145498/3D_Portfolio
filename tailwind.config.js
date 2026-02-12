/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#282C20",
        surface: "#282C20",
        border: "#D2FF00",
        text: {
          DEFAULT: "#FFFFFF",
          muted: "#D7DEC3",
        },
        accent: "#D2FF00",
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        panel: "1rem",
        chip: "9999px",
      },
      boxShadow: {
        panel: "0 16px 32px rgba(0, 0, 0, 0.26)",
        "glow-accent": "0 0 0 1px rgba(210, 255, 0, 0.22), 0 0 18px rgba(210, 255, 0, 0.14)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
