const path = require('path')

module.exports = {
  reactStrictMode: true,
  webpack: function (config, { defaultLoaders }) {
    const resolvedBaseUrl = path.resolve(config.context, "../")
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            sourceType: 'unambiguous',
            plugins: [
              [
                'babel-plugin-module-resolver',
                {
                  alias: {
                    // all packages in this monorepo
                    '@alisyahidin/core': '../packages/core/dist',
                  },
                  transformFunctions: ['require'],
                },
              ],
            ],
          },
        },
      },
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
