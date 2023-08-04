import React from 'react'
import './style.css';

export default function ExploreAnalyze(props) {
    const { slideHeading, slideSubheading, img, slidechild } = props;
  return (
    <> 
    <div className="outer-trading-box">
        <div className="explore-data-tab">
            <div className="explore-data-left">
                <div className="data-left-inner">
                    <h3><span>{slideHeading}</span></h3>
                    <p>
                        {slideSubheading}
                    </p>
                    <div className="analyze-card">
                        {slidechild?.map((i) => (
                            <div className="AnalyzeListCard-card" key={i}>
                                {i}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="explore-data-right">
                <img src={img} alt='st logo'/>
            </div>
        </div>
    </div>
</>
  )
}
