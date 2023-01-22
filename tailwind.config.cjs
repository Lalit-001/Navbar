/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        charcole: "#101820FF",
        yellow: "#FEE715FF",
        lightBlue: "#ADD8E6",
        green: "#2BAE66FF",
      },
      backgroundImage: {
        home: "url('assets/home-bg2.jpg')",
      },
      fontFamily: {
        paragraph: "'Hanken Grotesk', 'sans-serif'",
        heading: "'Cabin', sans-serif",
        logo: "'Kalam', cursive",
      },
    },
  },
  plugins: [],
};
