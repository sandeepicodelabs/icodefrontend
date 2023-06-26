/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env`,
});

const strapiConfig = {
  apiURL:"http://localhost:1337/api/",
  accessToken:'4ea6061d74504a8db82c3a2cc692a01c9ae6c7b655aedc74c6f9a77d183defeb191032e9a0e3ddaab7096e5bafb3ac20ff5f642f8dae8674c49166bcee295439f34531284075b684579e645ef455bb8883c0a39413f10cd5f1376fc21fccbff2e99412d830d38b486b7190110a1681a49ed1174e1afb6197e7a997d7566d75cb',
  collectionTypes: [ 
    "books" ,
    "products"
  ],
}; 


module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },

  plugins: [  
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
  ],
  
};

