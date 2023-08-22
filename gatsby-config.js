/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
}); 
const strapiConfig = {
  apiURL: "https://icodelabsbackend-qr8y.onrender.com/",
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [ 
    "expert-technologie", 
    "process", 
    "component-skillset",
    "component-skilltool",
    "contact-us",  
    {
      singularName: "project-list",
      queryParams: {
        // Populate media and relations
        // Make sure to not specify the fields key so the api always returns the updatedAt
        populate: {
          Image :{
            url:"*"
          },
        },
      },
    }, 

    {
      singularName: "service-detail",
      queryParams: {
        // Populate media and relations
        // Make sure not to specify the fields key so the API always returns the updatedAt
        populate: {
          image: "*",
          images: "*",
          TopImage: "*",
          Metatitle:{
            populate: "*"
          },
          Metadescription:{
            populate:"*"
          },
          Titleservice: {
            populate: {
              servicedescription: "*",
              TImage: "*",
            },
          },
          ToolService: {
            populate: {
              toolsDescription: "*",
            },
          },
          EnhanceService: {
            populate: {
              EDescription: "*",
              EImage: "*",
            },
          },
          ExpertiseImage: {
            populate: {
              url: "*",
            },
          },
          ServiceImage: {
            populate: {
              url: "*",
            },
          },
        },
      },
    },

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
              stacktools: "*",
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
          Image: "*",
        },
      },
    },
    {
      singularName: "experiences-processe",
      queryParams: {
        // Populate media and relations
        // Make sure to not specify the fields key so the api always returns the updatedAt
        icon: {
          populate: {
            Image: "*",
          },
        },
      },
    },

    {
      singularName: "technology-partner",
      queryParams: {
        populate: {
          Image: {
            url: "*",
          },
        },
      },
    },

    {
      singularName: "expertise",
      queryParams: {
        populate: {
          Image: {
            url: "*",
          },
        },
      },
    },
    {
      singularName: "ourapproache",
      queryParams: {
        populate: {
          Image: {
            url: "*",
          },
        },
      },
    },
    {
      singularName: "jointeche",
      queryParams: {
        populate: {
          Image: {
            url: "*",
          },
        },
      },
    },

    {
      singularName: "company-logo",
      queryParams: {
        populate: {
          logo: {
            url: "*",
          },
        },
      },
    },
  ],
  queryLimit: 1000,
};

 

module.exports = { 
  siteMetadata: {
    title: `Web & Mobile App Development | Custom Software Development Company`,
    siteUrl: "https://icodelabs.com",
    description: "iCode Labs - A top development company offering innovative services like mobile & web app development, marketplace & custom software development, sharetribe flex development, & digital marketing.",
    theme_color: {
      color: '#333333',
      in_head: false
    }
  }, 
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    `gatsby-plugin-modal-routing`,

    {
      resolve: "gatsby-source-strapi",
      options: {
        ...strapiConfig,
      },
    }, 
     
  ],
};
