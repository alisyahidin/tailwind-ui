const path = require('path')

module.exports = {
  reactStrictMode: true,
  webpack: function (config, { defaultLoaders }) {
    const resolvedBaseUrl = path.resolve(config.context, "../")
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(tsx|ts|js|jsx)$/,
        include: [resolvedBaseUrl],
        use: defaultLoaders.babel,
        exclude: (excludePath) => /node_modules/.test(excludePath),
      },
    ]
    return config
  }
}
