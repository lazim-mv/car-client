/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cars-client-iota.vercel.app'],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
            },
            {
                protocol: 'https',
                hostname: 'clristqyqfvryzmxndjz.supabase.co',
            },
            {
                protocol: "https",
                hostname: "solitary-dew-dd49.absectgaming.workers.dev",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: 'https',
                hostname: 'cars-client-iota.vercel.app',
                pathname: '/**',
            },
        ],
    },

};

export default nextConfig;
