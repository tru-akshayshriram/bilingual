/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en', 'de'], // Supported locales
        defaultLocale: 'en',  // Default locale
        localeDetection: false, // Disable automatic locale detection for testing
    },
};

export default nextConfig;
