/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                basic: "0 0 60px 4px rgba(0, 0, 0, 0.2)",
            },
            colors: {
                white: {
                    // Closer to white if number is low.
                    DEFAULT: "#fff",
                    100: "#f7f7f7",
                    200: "#e4e4e4",
                    300: "#d2d3d4",
                },
                black: {
                    // Closer to black if number is low.
                    DEFAULT: "#000",
                    100: "#1b1d21",
                    200: "#2a2c33",
                    300: "#444444",
                    400: "#4c4d53",
                    500: "#797a7e",
                    600: "#808191",
                },
                token: {
                    ether: "#ebedfc",
                },
            },
            borderRadius: {
                10: "10px",
            },
        },
    },
    plugins: [],
};
