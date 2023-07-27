import React from 'react'
import './style.css'

export default function WhyWeJoinCard(props) {

    const { img, teamdescription, teamheading, type, buttonname, className } = props;
    //console.log('serviwhyjoin',props)

  return (
    <>
    <div className="join-our-team">
      <span>
        <img src={img} />
      </span>
      <h5>{teamheading}</h5>
      <p>
        {teamdescription}
      </p>
    </div>
  </>
  )
}
