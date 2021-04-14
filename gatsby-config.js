module.exports = {
  siteMetadata: {
    title: `Nejlepší knížky`,
    description: `Nejlepší knížky podle žánru či tématu`,
    author: "LenkaH",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    /* {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "",
      },
    }, */
    "gatsby-plugin-react-helmet",
    /*     "gatsby-plugin-sitemap", */
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
