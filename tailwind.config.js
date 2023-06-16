/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-image": "url(./public/img/banner.webp)",
        "contact-image": "url(./public/img/contacto.webp)",
      },
      fontFamily: {
        "Open-Sans": "Open Sans, sans-serif",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
