/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com'
            },
            {
                protocol: 'https',
                hostname: 'openweathermap.org'
            },
        ],
        dangerouslyAllowSVG: true
    }
}
module.exports = nextConfig;
