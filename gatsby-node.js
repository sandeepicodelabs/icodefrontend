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
           }
        ` 
    )

    if (result.errors) {
        throw result.errors
      }
    
      // Create blog articles pages.
      const articles = result.data.articles.edges

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

       const postsPerPage = 8
      const numPages = Math.ceil(articles.length / postsPerPage)
       Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
      path: i === 0 ? `../blogs` : `../blogs/${i + 1}`,
      component: require.resolve("./src/templates/pagination.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        count: numPages,
        currentPage: i+1,
       
       },
    })
  })

}
    
 