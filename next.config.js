// module.exports = {
//   reactStrictMode: true,
// }


module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/html/Rightmove-accept-result.html',
      },
    ]
  },
}