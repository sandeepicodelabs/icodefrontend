import React from 'react'
import { SEO } from '../Seo/SEO'
 

function Head({data,pageContext}) {
//     const servicedata = data && data?.allStrapiServiceDetail?.edges;  
//    const detail = servicedata?.find((item) => {
//     return item?.node?.Slug === pageContext.service?.node?.Slug;
//     const  HeaderContent =detail || {};
//    }
//    )
   
  return (
    <> 
  <SEO
      title="Web & Mobile App Development | Custom Software Development Company"
      description="iCode Labs - A top development company offering innovative services like mobile & web app development, marketplace & custom software development, sharetribe flex development, & digital marketing."
    />
  
   {/* <SEO title={HeaderContent.node.Metatitle} description={HeaderContent.node.Metadescription} /> */}

    </>
 
  )
}

export default Head




// export const query = graphql`
//   query MyQuery {
//     allStrapiServiceDetail(sort: { strapi_id: DESC }) {
//       edges {
//         node {
//           Slug
//           TitleMain
//           Title
//           Metatitle
//           Metadescription
//           TopImage {
//             url
//           }
//           CTATitlte
//           CTADescription {
//             data {
//               CTADescription
//             }
//           }
//           Description {
//             data {
//               Description
//             }
//           }
//           DevlopmentTitle
//           DevelopmentDescription {
//             data {
//               DevelopmentDescription
//             }
//           }
//           ToolsTitle
//           ToolsDescription {
//             data {
//               ToolsDescription
//             }
//           }
//           EnhanceTitle
//           EnhanceDescription {
//             data {
//               EnhanceDescription
//             }
//           }
//           Titleservice {
//             TImage {
//               url
//             }
//             Servicetitle
//             ServiceDescription {
//               data {
//                 ServiceDescription
//               }
//             }
//           }
//           ToolService {
//             toolsTitle
//             toolsDescription {
//               data {
//                 toolsDescription
//               }
//             }
//           }
//           ExpertiseImage {
//             url
//           }
//           ServiceImage {
//             url
//           }

//           EnhanceService {
//             EImage {
//               url
//             }
//             ETitle
//             EDescription {
//               data {
//                 EDescription
//               }
//             }
//           }
//         }
//       }
//     }
//     allStrapiProcess {
//       edges {
//         node {
//           Title
//           Description {
//             data {
//               Description
//             }
//           }
//         }
//       }
//     }
//   }
// `;