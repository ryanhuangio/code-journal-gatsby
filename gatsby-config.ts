import type { GatsbyConfig } from 'gatsby';
const path = require('path');

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Code Journal`,
    siteUrl: `https://code.ryanhuang.io`
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-remark',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-highlight-code`,
          options: {
            terminal: "carbon",
            theme: "dracula",
            lineNumbers: true,
          },
        },
      ],
    },
  },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        'icon': 'src/images/icon.png'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        'name': 'images', 
        'path': './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        'name': `posts`,
        'path': `./src/content`,
      },
      __key: 'images'
    },
  ],
};

export default config;
