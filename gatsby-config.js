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
