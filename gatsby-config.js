/**
 * @type {import('gatsby').GatsbyConfig}
 */

// require("dotenv").config({
//   path: `.env`,
// });

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
}); 

const strapiConfig = { 
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    {
      singularName: "book",
      queryParams: {
        // Populate media and relations
        // Make sure to not specify the fields key so the api always returns the updatedAt
        populate: {
          image: "*",
          images: "*",
          author: {
            populate: {
              avatar: "*",
              company: {
                populate: {
                  image: "*",
                },
              },
            },
          },
        },
      },
    },
    {
      singularName: "product",
      queryParams: {
        // Populate media and relations
        // Make sure to not specify the fields key so the api always returns the updatedAt
        populate: {
          image: "*",
          images: "*",
          author: {
            populate: {
              avatar: "*",
              company: {
                populate: {
                  image: "*",
                },
              },
            },
          },
        },
      },
    },
  ], 

}; 


module.exports = { 
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
  ],
  
};

