import path from 'path'

export default {
  getRoutes: async () => {
    const posts = require('./public/blogEntries.json');

    return [
      {
        path: '/blog',
        getData: () => ({
          posts,
        }),
      },
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
