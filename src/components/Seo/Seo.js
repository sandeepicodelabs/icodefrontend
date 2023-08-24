import React from "react"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

export const SEO = ({ title, description, pathname, children }) => {
    const { title: defaultTitle, description: defaultDescription,keyword:defaultKeyword, siteUrl} = useSiteMetadata()
  
    const seo = {
      title: title || defaultTitle,
      description: description || defaultDescription,
      keyword:keyword || defaultKeyword,
      url: `${siteUrl}${pathname || ``}`,
    }
  
    return (
      <>
        <title>{seo?.title}</title>
        <meta name="description" content={seo?.description}/>
        <meta name='keyword' content={seo?.keyword}/> 
      
        <meta name="image" content={seo.image} />
        
        {children}
      </>
    )
  }