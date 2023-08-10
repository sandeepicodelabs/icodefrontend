import React from "react";
import "./style.scss";

export default function HeaderBar(props) {
  const { currentpage, pagetitle } = props;
  return (
    <section className="service-hero-section">
      <div className="contentWidth">
        <div className="service-hero-content ">
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb top-breadcrump">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {currentpage}
              </li>
            </ul>
          </nav>
          <h1>{pagetitle}</h1>
        </div>
      </div>
    </section>
  );
}
