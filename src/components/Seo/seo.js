import React from "react"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

export const SEO = ({ title, description, pathname, children ,keyword}) => {
    const { title: defaultTitle, description: defaultDescription, siteUrl,keyword:defaultkeyword} = useSiteMetadata()
  
    const seo = {
      title: title || defaultTitle,
      description: description || defaultDescription,
      keyword:keyword || defaultkeyword,
      url: `${siteUrl}${pathname || ``}`,
    }
  
    return (
      <>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description}/>
        <meta name='keyword' content={seo.keyword}/>
        <meta name="image" content={seo.image} />
        
        {children}
      </>
    )
  }