const path = require('path')

module.exports = {
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/epic-tech-intro.html',
        destination: '/epic-tech-intro.html'
      }
    ]
  }
}