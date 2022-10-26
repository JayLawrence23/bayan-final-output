/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/*.ejs", 
    "./views/**/*.ejs"
  ], 
  mode: "jit",
  theme: {
    extend: {},
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};
