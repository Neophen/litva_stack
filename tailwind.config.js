module.exports = {
  purge: [
    "./app_client/**/*.{vue,js}",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen-Sans",
          "Ubuntu",
          "Cantarell",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
    },
  },
};
