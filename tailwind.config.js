module.exports = {
  purge: [
    "./app_client/**/*.{vue,js}",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
