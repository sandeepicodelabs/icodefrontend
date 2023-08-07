import React from "react";
import "./style.scss";

export default function HeaderBar(props) {
  const { currentpage, pagetitle } = props;
  //console.log("hearderbar",props)
  return (
    <>
      <div className="blog-header-wrap">
        <div className="contentWidth">
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
          <div className="blog-header">
            <h1>{pagetitle}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
