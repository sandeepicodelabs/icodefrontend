import React from 'react';
import linkIcon from '../../../assets/images/link-icon.png'
import './style.css'
 

export default function ProjectListCard(props) {
    const { img, boxList } = props;
  return (
    <>
    <div className="project-box">
      <img src={img} alt='st logo' />
      <div className="project-body-box">
        <h3>Smart hire
          <span>
            <a href="#"><img src={linkIcon} alt=' ' /></a>
          </span>
        </h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <div className="poroject-box-list">
          {boxList?.map((i) => (
            <div className="box-list" key={i}>{i}</div>
          ))}
        </div>
      </div>
    </div>
  </>
  )
}
