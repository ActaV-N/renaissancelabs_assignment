/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                basic: "0 0 60px 4px rgba(0, 0, 0, 0.2)",
            },
        },
    },
    plugins: [],
};
