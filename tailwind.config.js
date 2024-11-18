import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                kh: [
                    "Koulen",
                    "Source Sans Pro",
                    ...defaultTheme.fontFamily.sans,
                ],
                en: [
                    "Source Sans Pro",
                    "Kantumruy",
                    ...defaultTheme.fontFamily.sans,
                ],
            },
            fontSize: {
                xs: ["0.75rem", { lineHeight: "1rem" }],
                sm: ["0.875rem", { lineHeight: "1.25rem" }],
                base: ["1rem", { lineHeight: "1.5rem" }],
                lg: ["1.125rem", { lineHeight: "1.75rem" }],
                xl: ["1.25rem", { lineHeight: "1.75rem" }],
                "2xl": ["1.5rem", { lineHeight: "2rem" }],
                "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
                "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
                "5xl": ["3rem", { lineHeight: "3.5rem" }],
                "6xl": ["3.75rem", { lineHeight: "4rem" }],
                "7xl": ["4.5rem", { lineHeight: "4.5rem" }],
                "8xl": ["6rem", { lineHeight: "6rem" }],
                "9xl": ["8rem", { lineHeight: "8rem" }],
            },
            colors: {
                primary: "#161D6F",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem",
                    lg: "4rem",
                    xl: "5rem",
                    "2xl": "6rem",
                },
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
