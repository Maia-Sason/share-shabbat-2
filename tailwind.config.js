module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f9b8bb",

          secondary: "#c7c6ff",

          accent: "#975cbc",

          neutral: "#291F2E",

          "base-100": "#F8F8FC",

          info: "#6EB3DE",

          success: "#12786A",

          warning: "#E99825",

          error: "#F15F69",
        },
      },
    ],
  },
};
