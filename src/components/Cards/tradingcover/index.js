import React from 'react'
import './style.css'

export default function TrandingCover(props) {
    const { img, trandingCoverHeading } = props;
  return (
    <>
    <div className="trend-cover-wrap">
      <img src={img} />
      <div className="tranding-text-head">
        <h5>{trandingCoverHeading}</h5>
      </div>
    </div>
  </>
  )
}
