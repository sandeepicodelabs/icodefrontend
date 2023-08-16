/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const strapiConfig = {
  apiURL: "http://127.0.0.1:1337",
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    //"article",
    // "company-logo",
    // "experiences-processe",
    //"technology-partner",
    "expert-technologie",
    //"expertise",
    "process",
    //"ourapproache",
    // "technology",
    // "jointeche",
    "project-list",
    //"service",
    "component-skillset",
    "component-skilltool",
    "contact-us",
    // "service-detail",
    {
      singularName: "service-detail",
      queryParams: {
        // Populate media and relations
        // Make sure not to specify the fields key so the API always returns the updatedAt
        populate: {
          image: "*",
          images: "*",
          TopImage: "*",
           
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
              url: "*"
            }
          },
          ServiceImage: {
            populate: {
              url: "*"
            }
          }
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
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-strapi",
      options: {
        ...strapiConfig,
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
