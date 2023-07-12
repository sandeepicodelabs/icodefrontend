import React from 'react'
import ButtonBox from '../../button';

const EstimateCard=(props)=>{

    const { type, buttonname, className } = props;

    return(

        <>
            <div className="estimate-contact">
              <h3>Send your proposal now and get FREE analysis & estimation!</h3>
              <ButtonBox
                buttonname="contact now"
                className="estimate-submit"
              />
            </div>
          </>
    )

}

export default EstimateCard