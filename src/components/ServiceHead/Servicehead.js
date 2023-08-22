import React from 'react'
import { SEO } from '../Seo/SEO' 


const Servicehead=(props)=> {
    const {detail} = props
    //console.log('detail', detail)
    const  HeaderContent =detail || {}; 
  return (
    <> 
     <SEO title={HeaderContent && HeaderContent?.node?.Metatitle} description={HeaderContent && HeaderContent?.node?.Metadescription} />
    </>
  )
}


export default Servicehead

 