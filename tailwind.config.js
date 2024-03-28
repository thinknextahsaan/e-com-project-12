/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundColor: {
                "custom-blue": "#2A254B",
                "custom-white": "#F9F9F9",
            },
            textColor: {
                "custom-blue": "#2A254B",
                "custom-white": "#F9F9F9",
            },
            fontFamily: {
                "clash-bold": '"ClashDisplay-Bold", sans-serif',
                "clash-semibold": '"ClashDisplay-Semibold", sans-serif',
                "clash-medium": '"ClashDisplay-Medium", sans-serif',
                "clash-regular": '"ClashDisplay-Regular", sans-serif',
                "clash-light": '"ClashDisplay-Light", sans-serif',
                "satoshi-bold": '"Satoshi-Bold", sans-serif',
                "satoshi-medium": '"Satoshi-Medium", sans-serif',
                "satoshi-regular": '"Satoshi-Regular", sans-serif',
                "satoshi-light": '"Satoshi-Light", sans-serif',
            },
        },
    },
    plugins: [],
};
