
const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        articles: allStrapiArticle(sort: { Title: ASC }) {
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
        servicesdet: allStrapiServiceDetail {
          edges {
            node {
              strapi_id
              Slug
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  const technologies = result.data.technologies.edges;
  const services = result.data.servicesdet.edges;
  const articles = result.data.articles.edges;

  const itemsPerPage = 6; // Change this as needed
  const numPages = Math.ceil(articles.length / itemsPerPage);
  console.log(numPages, "numPages");
  Array(articles.length || 0)
    .fill(",")
    .forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve("./src/pages/blog/index.js"),
        context: {
          limit: itemsPerPage,
          skip: i * itemsPerPage,
          numPages,
          currentPage: i + 1,
        },
      });
    });

  articles.forEach((article, index) => {
    createPage({
      path: `/blog/${article.node.Slug}`,
      component: require.resolve("./src/pages/blog/blogdetails.js"),
      context: {
        id: article.node.strapi_id,
        article,
      },
    });
  });
  services.forEach((service, index) => {
    createPage({
      path: `/services/${service.node.Slug}`,
      component: require.resolve("./src/pages/services/Service.js"),
      context: {
        id: service.node.strapi_id,
        service,
      },
    });
  });

  technologies.forEach((technology, index) => {
    createPage({
      path: `/trendingtechologies/${technology.node.Slug}`,
      component: require.resolve("./src/pages/trendingtechologies/index.js"),
      context: {
        id: technology.node.strapi_id,
        technology,
      },
    });
  });
};





exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
