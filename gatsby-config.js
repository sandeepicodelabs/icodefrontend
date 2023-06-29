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
  apiURL:"http://localhost:1337",
  accessToken: process.env.STRAPI_TOKEN, 
  collectionTypes: [
<<<<<<< HEAD
   
=======
    "book",
    "product",
    "article",
    "company-logo"
>>>>>>> 582587eaba5f864dbd4d7adc0fcb4a532ccc2e94
  ], 
  queryLimit: 1000, 
}; 


module.exports = { 
  plugins: [ 
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-strapi",
      options: {
        ...strapiConfig
      },
    },  
     
      // { 
      //   resolve: `gatsby-source-filesystem`,
      //   options: {
      //     // The unique name for each instance
      //     name: `images`,
      //     // Path to the directory
      //     path: `${__dirname}/src/assets/images`,
      //   },
      // }, 
     
  ],
  
};
<<<<<<< HEAD
=======
 
>>>>>>> 582587eaba5f864dbd4d7adc0fcb4a532ccc2e94
