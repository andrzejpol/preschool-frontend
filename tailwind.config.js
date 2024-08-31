/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                preschoolPrimary: "#00B7A6",
                preschoolPrimaryLight: "#1CF6E2",
                preschoolSecondary: "#B7C12D",
                preschoolSecondaryLight: "#E7EF78"
            }
        },
    },
    plugins: [],
}

