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
  apiURL:"http://127.0.0.1:1337",
  accessToken: process.env.STRAPI_TOKEN, 
  collectionTypes: [  
     "article",
     "company-logo", 
     "experiences-processe",
     "technology-partner",
     "expert-technologie",
     "expertise",
     "processes",
     "ourapproache",
     


     {
      singularName: "technology",
      queryParams: {
        // Populate media and relations
        // Make sure to not specify the fields key so the api always returns the updatedAt
        populate: {
          image: "*",
          images: "*",
          ThumbnailName: {
            populate: "*",
          },
          ThumbnailImage: {
            populate: "*",
          },
          ThumbnailIcon: {
            populate: {
              Image: "*",
              Link: "*",
            },
          },
          ProductName: {
            populate: "*",
          },
          ProductImage: {
            populate: "*",
          },
          slug: {
            populate: "*",
          },
          ProductDescription: {
            populate: "*",
          },
          Schedatecnica: {
            populate: "*",
          },
          SchedatecnicaLink: {
            populate: "*",
          },
          SeperatorImage: {
            populate: "*",
          },
          Content: {
            populate: "*",
          },
          Image: {
            populate: "*",
          },
          ProductLogoImg: {
            populate: "*",
          },
          BackToVini: {
            populate: "*",
          },
          DataSheet: {
            populate: '*'
          },
          HoverImage: {
            populate: '*'
          },
          localizations: {
            populate: {
              ThumbnailName: {
                populate: "*",
              },
              ThumbnailImage: {
                populate: "*",
              },
              ThumbnailIcon: {
                populate: {
                  Image: "*",
                  Link: "*",
                },
              },
              ProductName: {
                populate: "*",
              },
              ProductImage: {
                populate: "*",
              },
              slug: {
                populate: "*",
              },
              ProductDescription: {
                populate: "*",
              },
              Schedatecnica: {
                populate: "*",
              },
              SchedatecnicaLink: {
                populate: "*",
              },
              SeperatorImage: {
                populate: "*",
              },
              Content: {
                populate: "*",
              },
              Image: {
                populate: "*",
              },
              ProductLogoImg: {
                populate: "*",
              },
              BackToVini: {
                populate: "*",
              },
              DataSheet: {
                populate: '*'
              },
              HoverImage: {
                populate: '*'
              },
            }
          }
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
 
