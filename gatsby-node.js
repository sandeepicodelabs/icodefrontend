exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(
        `
        { 
             articles: allStrapiArticle {
                edges {
                  node {
                    strapi_id
                    Slug
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
        }
        

        ` 
    )

    if (result.errors) {
        throw result.errors
      }
    
      // Create blog articles pages.
      const articles = result.data.articles.edges
      const technologies=result.data.technologies.edges

      articles.forEach((article, index) => {
        createPage({
          path: `/blog/${article.node.Slug}`,
          component: require.resolve("./src/pages/blog/blogdetails.js"),
          context: {
            id: article.node. strapi_id,
            article
          },
        }) 
      })

   
      technologies.forEach((technology, index) => {
        createPage({
          path: `/trendingtechologies/${technology.node.Slug}`,
          component: require.resolve("./src/pages/trendingtechologies/index.js"),
          context: {
            // id:technology.node.strapi_id,
            // technology
            Slug: technology.node.Slug,
          },
        })
      })


       const postsPerPage = 8
      const numPages = Math.ceil(articles.length / postsPerPage)
       Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
      path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
      component: require.resolve("./src/components/pagination/index.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        count: numPages,
        currentPage: i+1,
       
       },
    })
  })

}
    
 