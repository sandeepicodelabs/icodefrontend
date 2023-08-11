const createPaginatedPages = require("gatsby-paginate")
const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
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


  const itemsPerPage = 6; // Change this as needed
  const numPages = Math.ceil(articles.length / itemsPerPage);
  console.log(numPages, "numPages")
  Array(articles.length||0).fill(",").forEach((_, i) => {
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

  // createPaginatedPages({
  //   edges: articles,
  //   createPage,
  //   pageTemplate: "src/templates/pagination.js",
  //   pageLength: 6,
  //   pathPrefix: "",
  //   context: {},
  // });

  // articles.forEach(({ node }) => {
  //   createPage({
  //     path: node.Slug,
  //     component: require?.resolve("../src/blog/index.js"),
  //     context: {
  //       slug: node.Slug,
  //     },
  //   });
  // });



  // articles.then(result => {
  //   createPaginatedPages({
  //     edges: result.data.articles.edges,
  //     createPage: createPage,
  //     pageTemplate: 'src/templates/pagination.js',
  //     pageLength: 5, // This is optional and defaults to 10 if not used
  //     pathPrefix: '', // This is optional and defaults to an empty string if not used
  //     context: {}, // This is optional and defaults to an empty object if not used
  //   })
  //   result.data.articles.edges.map(({ node }) => {
  //     createPage({
  //       path: node.Slug,
  //       component: path.resolve('./src/blog/index.js'),
  //       context: {
  //         slug: node.Slug,
  //       },
  //     })
  //   })
  //   resolve()
  // })


  


  // if (!articles || articles.length === 0) {
  //   // Handle the case where articles are not found or empty
  //   console.error("No articles found.");
  //   return;
  // }

  // createPaginatedPages({
  //   edges: articles,
  //   createPage,
  //   pageTemplate: "src/pages/blog/index.js",
  //  //pageTemplate:"src/pages/templates/index.js",
  //   pageLength: 6,
  //   pathPrefix: "/blog",
  // });







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
      path: `/servicedetail/${service.node.Slug}`,
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
