import React from "react";
import linkIcon from "../../../assets/images/link-icon.png";
import "./style.scss";

export default function ProjectListCard(props) {
  const { img, boxList } = props;
  return (
    <>
      <div className="project-box">
        <div className="project-img">
          <img src={img} alt="st logo" />
        </div>
        <div className="project-body-box">
          <h3>
            Smart hire
            <a href="#">
              <img src={linkIcon} alt=" " />
            </a>
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <div className="poroject-box-list">
            {boxList?.map((i) => (
              <div className="box-list" key={i}>
                <span>{i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
