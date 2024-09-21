// next.config.mjs
export default {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'olcha.uz',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'raw.githubusercontent.com',
          pathname: '/**',
        },
      ],
    },
  }
  