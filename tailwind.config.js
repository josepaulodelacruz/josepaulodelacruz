const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],


    theme: {
        extend: {
            colors: {
              primary: '#03183B',
              secondary: '#5865f2',
              "blue": {
                DEFAULT: '#03183B',
                50: "#EBF3FE",
                100: "#D8E6FD",
                200: "#B1CEFB",
                300: "#8AB5FA",
                400: "#639CF8",
                500: "#3B82F6",
                600: "#0B60EA",
                700: "#0848B0",
                800: "#053075",
                900: "#03183B"
              },
              "purple": {
                DEFAULT: "#9145D5",
                50: "#F5EEFB",
                100: "#E9DAF7",
                200: "#D3B4EE",
                300: "#BD8FE6",
                400: "#A769DD",
                500: "#9145D5",
                600: "#7529B7",
                700: "#581F89",
                800: "#3A155C",
                900: "#1D0A2E"
              }
            },
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
