
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(
        `
        { 
             articles:allStrapiArticle {
              edges {
                node {
                  strapi_id
                  Slug
                  pageInfo {
                    currentPage
                    pageCount
                  }
                }
              }
            }
           
           technologies:allStrapiTechnology {
            edges {
              node {
                strapi_id
                Slug
              }
            }
          }
          services:allStrapiServiceDetail {
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
    
      // Create blog articles pages.
      //const articles = result.data.articles.edges
  
      const technologies=result.data.technologies.edges
      const services=result.data.services.edges

 

      const articles = result.data.articles.edges;
      const { pageCount } = result.data.allStrapiArticle.pageInfo;
       const articlesPerPage = 6;
       
       Array.from({ length: pageCount }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/articles` : `/articles/${i + 1}`,
          component: articleTemplate,
          context: {
            limit: articlesPerPage,
            skip: i * articlesPerPage,
          },
        });
      });




      articles.forEach((article, index) => {
        createPage({
          path: `/blog/${article.node.Slug}`,
          component: require.resolve("./src/pages/blog/blogdetails.js"),
          context: {
            id: article.node.strapi_id,
            article
          },
        }) 
      }) 
  
      services.forEach((service, index) => { 
        createPage({
          path: `/services/${service.node.Slug}`,
          component: require.resolve("./src/pages/services/servicedetail.js"),
          context: {
            id: service.node.strapi_id,
            service 
          },
        }) 
      }) 
      
   
      technologies.forEach((technology, index) => {
        createPage({
          path: `/trendingtechologies/${technology.node.Slug}`,
          component: require.resolve("./src/pages/trendingtechologies/index.js"),
          context: {
             id:technology.node.strapi_id,
             technology
            //Slug: technology.node.Slug,
          },
        })
      }) 

      // const postsPerPage = 6
      // const numPages = Math.ceil(articles.length / postsPerPage)
      // Array.from({ length: numPages }).forEach((_, i) => {
      //   createPage({
      //     path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      //     component: require.resolve("./src/pages/blog/index.js"),
      //     context: {
      //       limit: postsPerPage,
      //       skip: i * postsPerPage,
      //       count: numPages,
      //       currentPage: i+1,
           
      //      },
      //   })
      // }) 
       
}
    
 