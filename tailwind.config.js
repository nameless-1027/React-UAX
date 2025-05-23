/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
    theme: {
        screens: {
            'miniMoblie': '380px',
            'moblie': '480px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            'desktop': '1440px',
            '2xl': '1536px',
        },
    },
}