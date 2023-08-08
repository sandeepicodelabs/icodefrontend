const createPaginatedPages = require("gatsby-paginate")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      { 
        articles: allStrapiArticle(sort: { fields: Title, order: ASC }) {
          edges {
            node {
              strapi_id
              Slug
            }
          }
        }
        
        technologies: allStrapiTechnology {
          edges {
            node {
              strapi_id
              Slug
            }
          }
        }

        services: allStrapiServiceDetail {
          edges {
            node { 
              strapi_id
              Slug 
            }
          }
        }  
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const technologies = result.data.technologies.edges
  const services = result.data.services.edges
  const articles = result.data.articles.edges;

  articles.forEach((article, index) => {
    createPage({
      path: `/blog/${article.node.Slug}`,
      component: require.resolve("./src/pages/blog/blogdetails.js"),
      context: {
        id: article.node.strapi_id,
        article,
      },
    })
  })

  services.forEach((service, index) => {
    createPage({
      path: `/services/${service.node.Slug}`,
      component: require.resolve("./src/pages/services/servicedetail.js"),
      context: {
        id: service.node.strapi_id,
        service,
      },
    })
  })

  technologies.forEach((technology, index) => {
    createPage({
      path: `/trendingtechologies/${technology.node.Slug}`,
      component: require.resolve("./src/pages/trendingtechologies/index.js"),
      context: {
        id: technology.node.strapi_id,
        technology,
      },
    })
  })
}
