module.exports = {
  siteMetadata: {
    title: 'Makan Janani website',
    author: 'Makan',
    description: 'Makan Janani',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/myicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}

