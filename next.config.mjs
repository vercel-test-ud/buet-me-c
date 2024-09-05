/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.buet.ac.bd',
                port: '',
                pathname: '/web/assets/img/BImages/logoBIRN.png'
            }
        ]
    }
};

export default nextConfig;
