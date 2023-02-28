/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                basic: "0 0 60px 4px rgba(0, 0, 0, 0.2)",
            },
        },
        colors: {
            white: "#fff",
            black: "#000",
            slate: {
                50: "#ebebeb",
                100: "#f7f7f7",
                200: "#808191",
                400: "#797a7e",
                600: "#4c4d53",
                800: "#444444",
                900: "#1b1d21",
            },
        },
    },
    plugins: [],
};
