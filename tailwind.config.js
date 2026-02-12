/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'DM Sans'", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#0F172A",
        mist: "#F8FAFC",
        accent: "#2563EB",
        soft: "#E2E8F0",
        midnight: "#020833",
        midnightSoft: "#0A1348"
      },
      boxShadow: {
        soft: "0 18px 45px -25px rgba(15,23,42,0.35)"
      }
    }
  },
  plugins: []
};
