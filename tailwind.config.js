/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#64ffda", // Keeping your original vibe but modernizing
                secondary: "#8892b0",
                background: {
                    dark: "#0a192f",
                    light: "#112240",
                },
            },
            fontFamily: {
                grotesk: ["'Space Grotesk'", "sans-serif"],
                inter: ["Inter", "sans-serif"],
                mono: ["'JetBrains Mono'", "monospace"],
            },
        },
    },
    plugins: [],
}
