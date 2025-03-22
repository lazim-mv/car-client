/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
            },
            {
                protocol: 'https',
                hostname: 'clristqyqfvryzmxndjz.supabase.co',
            }, {
                protocol: 'https',
                hostname: 'www.instagram.com',
            },
            {
                protocol: 'https',
                hostname: 'platform.instagram.com',
            },
            {
                protocol: 'https',
                hostname: '*.cdninstagram.com',
            },
            {
                protocol: "https",
                hostname: "solitary-dew-dd49.absectgaming.workers.dev",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            }
        ],
    },

};

export default nextConfig;
