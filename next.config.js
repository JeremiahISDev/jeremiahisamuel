module.exports = {
  async redirects() {
    return [
      {
        source: '/Movies/Soap',
        destination: 'https://soap2day.rs/',
        permanent: true
      },
      {
        source: '/Movies/Stream',
        destination: 'https://stream-planet.com/',
        permanent: true
      }
    ]
  },
};