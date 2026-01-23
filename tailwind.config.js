/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./_layouts/**/*.html",
        "./_posts/**/*.md",
        "./index.html",
        "./**/*.html",
        "./**/*.md",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                brand: {
                    light: '#F0F4F8',
                    muted: '#94a3b8',
                    accent: '#334155',
                    dark: '#1e293b'
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
