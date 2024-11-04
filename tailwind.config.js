import {defineTailwindConfig} from "@chunge16/vitepress-blogs-theme/config";

const icons = require('@jcamp/tailwindcss-plugin-icons');

export const tailwindContent = [
    './**/*.md',
    '.vitepress/**/*.{js,ts,vue}',
];

module.exports = {
    content: [...tailwindContent],
    darkMode: 'class',
    plugins: [icons()],
};