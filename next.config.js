/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        EMAIL_ACCESS_KEY: process.env.EMAIL_ACCESS_KEY
    }
}

module.exports = nextConfig
