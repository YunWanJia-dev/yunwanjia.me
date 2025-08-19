import { defineConfig } from 'vite';
import { ViteMinifyPlugin }from 'vite-plugin-minify';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        ViteMinifyPlugin({}),
        tailwindcss(),
    ]
});