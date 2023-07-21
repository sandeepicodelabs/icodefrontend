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
  apiURL:"https://icodelabsbackend.onrender.com/",
  accessToken: process.env.STRAPI_TOKEN, 
  collectionTypes: [  
     //"article",
     "company-logo", 
     "experiences-processe",
     "technology-partner",
     "expert-technologie",
     "expertise",
     "process",
     "ourapproache",
      // "technology",
     "jointeche",
     "project-list",
     "service",
     "component-skillset",
     "component-skilltool",

     {
      singularName: "technology",
      queryParams: {
        // Populate media and relations
        // Make sure to not specify the fields key so the api always returns the updatedAt
        populate: {
          image: "*",
          images: "*",
          stack: {
            populate: {
              stacktools: "*"
            },
          },
        },
      },
    },

    {
      singularName: "article",
      queryParams: {
        // Populate media and relations
        // Make sure to not specify the fields key so the api always returns the updatedAt
        populate: {
         admin_user: "*",
         Image:"*"
       
          
        },
      },
    },




  ], 
   queryLimit: 1000, 
}; 


module.exports = { 
  plugins: [ 
    "gatsby-plugin-image",
     "gatsby-plugin-sharp",
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
 
