import React from "react";
import ButtonBox from "../../components/button";
import Header from "../../components/Header/Header";
import EstimateCard from "../../components/Cards/estimatecard";
import Footer from "../../components/Footer/Footer";
import ProjectListCard from "../../components/Cards/projectcard";
import { graphql } from "gatsby";
import "../projectList.scss";
// import "../../assets/css/custom.css";

export default function ProjectList({ data }) {
  const projectlist = data?.allStrapiProjectList?.edges;
  //console.log('projectlist',projectlist)

  return (
    <div className="project-list-page">
      <Header />
      <div className="project-wrap-box">
        <section className="cover-background">
          <div className="contentWidth">
            <h1>
              Successfully developed and delivered 300+ web and mobile
              application
            </h1>
            <div className="selectCategory">
              <h4>{projectlist && projectlist?.node?.Heading}</h4>
              <p>Select your marketplace type</p>
              <div className="hiring-buttons">
                <ButtonBox
                  buttonname="Events and experiences"
                  className="hire-dev-button"
                />
                <ButtonBox
                  buttonname="E-Commerce & retail"
                  className="hire-dev-button"
                />
                <ButtonBox buttonname="Rentals" className="hire-dev-button" />
                <ButtonBox buttonname="Services" className="hire-dev-button" />
              </div>
            </div>
          </div>
        </section>
        <section className="projectlist-main-box">
          <div className="contentWidth ">
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
        <div className="contentWidth">
          <section className="estimate-section-wrap">
            <EstimateCard />
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const query = graphql`
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
`;
