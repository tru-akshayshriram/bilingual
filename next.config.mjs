/** @type {import('next').NextConfig} */
import { languages } from './src/constants/index.js';


const nextConfig = {
    i18n: {
        locales: [languages.en.route, languages.de.route], // Specify regional locales
        defaultLocale: languages.en.route,      // Default locale is US English
        localeDetection: false,      // Disable automatic locale detection
    },
};

export default nextConfig;
