import React from 'react'
import { SEO } from '../Seo/Seo' 


const Servicehead=(props)=> {
    const {detail} = props
    //console.log('detail', detail)
    const  HeaderContent =detail || {}; 
  return (
    <> 
     <SEO title={HeaderContent && HeaderContent?.node?.Metatitle} description={HeaderContent && HeaderContent?.node?.Metadescription}
     keyword={HeaderContent && HeaderContent?.node?.Keyword} />
    </>
  )
}


export default Servicehead

 