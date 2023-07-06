import React from 'react';
import Header from '../../components/Header/Header';
import satisfactionGuaranteed from '../../assets/images/satisfaction-guaranteed.png'
import QualityCode from '../../assets/images/quality-code.png'
import Enableprocess from '../../assets/images/enable-process.png'
import ButtonBox from '../../components/button';
import TrandingCover from '../../components/Cards/tradingcover';
import { graphql } from 'gatsby';



export default function ExpertiseCard() {


  return (
    <div className="outer-trading-box">
    <Header />
    <section className="tranding-tech">
        <div className="tranding-bar-cover">
            <h1>Hire React Native developer, choose the sure thing for cross platform apps</h1>
            <div className="tranding-cover-cards">
                <TrandingCover
                    img={satisfactionGuaranteed}
                    trandingCoverHeading="100% satisfaction guaranteed"
                />
                <TrandingCover
                    img={QualityCode}
                    trandingCoverHeading="Quality code & on time delivery guaranteed"
                />
                <TrandingCover
                    img={Enableprocess}
                    trandingCoverHeading="Agile & DevOps enabled processes"
                />
            </div>
            <div className="hiring-buttons">
                <ButtonBox
                    buttonname="Book free consutation"
                />
                <ButtonBox
                    buttonname="Hire developer"
                    className="hire-dev-button"
                />
            </div>
        </div>
    </section>
    </div>
  )
}










