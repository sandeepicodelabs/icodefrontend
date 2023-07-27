import React from 'react'
import ButtonBox from '../../components/button';
import Header from '../../components/Header/Header';
import EstimateCard from '../../components/Cards/estimatecard';
import Footer from '../../components/Footer/Footer'; 
import ProjectListCard from '../../components/Cards/projectcard';  
import { graphql } from 'gatsby';
import '../../assets/css/custom.css';


 

export default function ProjectList({data}) {

    const projectlist=data?.allStrapiProjectList?.edges
    //console.log('projectlist',projectlist)
   
  return (
    <div className="project-list-page">
    <Header />
    <div className="project-wrap-box">
        <section>
            <div className="project-list-cover">
              <h1>Successfully developed and delivered 300+ web and mobile application</h1>
                <h1>{projectlist && projectlist?.node?.Heading}</h1>
                <p>Select your marketplace type</p>
                <div className="hiring-buttons">
                    <ButtonBox
                        buttonname="Events and experiences"
                    />
                    <ButtonBox
                        buttonname="E-Commerce & retail"
                        className="hire-dev-button"
                    />
                    <ButtonBox
                        buttonname="Rentals"
                        className="hire-dev-button"
                    />
                    <ButtonBox
                        buttonname="Services"
                        className="hire-dev-button"
                    />
                </div>
            </div>
        </section>
        <section>
            <div className="projectlist-main-box">
                <div className="project-wrap">
                    {projectlist?.map((item, i) => (
                        <ProjectListCard
                            key={i}
                            img={item?.node?.Image?.url}
                            boxList={item?.node?.Boxlist.boxlist}
                        />
                    ))}
                </div>
                {/* <PaginationBox /> */}
            </div>
        </section>
        <section className="estimate-section-wrap">
            <EstimateCard />
        </section>
    </div>
    <Footer />
</div>
  )
}





export const query=graphql`
query MyQuery { 
    allStrapiProjectList {
      edges {
        node {
          Title
          Heading
          Image {
            url
          }
          Description {
            data {
              Description
            }
          }
          Boxlist {
            boxlist
          }
        }
      }
    }
  }
`