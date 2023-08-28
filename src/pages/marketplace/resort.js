import React from "react";
import emarketplaceDetailsimg from "../../assets/images/restaurant-classy.png";
import IconCheckmark from "../../components/IconCheckmark/IconCheckmark";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Popup from "../../components/Popup/Modal";
import Counter from "./counter";

function Resort() {
    return (
        <>

            <Header />
            <Popup />
            <section className="marketplace-header">
                <div className="contentWidth">
                    {/* <div className="imgSec">
                        <img src={emarketplaceDetailsimg} alt="image" />
                    </div> */}
                    <div className="contentSec">
                        <h1>Restaurant App Development Services</h1>
                        <p>
                        Serving the restaurant industry stakeholders a combination of efficient ordering, on-time delivery and hassle free payment.

                        </p>
                        </div>
                        </div>

                     
            </section>
            <section className="counterSection">
        <div className="contentWidth">
          <div className="counterblock">
            <Counter number={820} title="Active Clients" />
          </div>
          <div className="counterblock">
            <Counter number={520} title="Projects Done" />
          </div>
          <div className="counterblock">
            <Counter number={100} title="Ready Projects" />
          </div>
          <div className="counterblock">
            <Counter number={90} title="Happy Clients" />
          </div>
        </div>
      </section>
            <Footer />
        </>
    );
}

export default Resort;
