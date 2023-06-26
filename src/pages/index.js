import * as React from "react"
 

const IndexPage = () => {
 // console.log('data',data)
  return (
    <main  >
      <h1 >
        Congratulations
        <br />
        <span >— you just made a Gatsby site! 🎉🎉🎉</span>
        </h1>  
      
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>


// export const data=graphql`
// query MyQuery {
//   allStrapiBook {
//     edges {
//       node {
//         Title
//         Description {
//           data {
//             Description
//           }
//         }
//       }
//     }
//   }
// }

// `